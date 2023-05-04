import ItemCard from './ItemCard';
import React, { useState, useEffect, useRef } from 'react';
import Row from 'react-bootstrap/Row'
import usePageBottom from '../utils/usePageBottom';
import useShop from '../utils/useShop';

function Cards() {
    const [medicationItems, setMedicationItems] = useState([]);
    const [page, setPage] = useState(0)
    const ref = useRef();
    const pageBottom = usePageBottom(ref)
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [error, setError] = useState(null);
    const count = 6
    let once = true
    const shop = useShop()
    const shopID = shop.id

    useEffect(() => {
        if (once){
            setLoading(true);
            fetch("http://localhost:8080/medications?page="+page+"&value="+count+"&shopID="+shopID)
            .then((response) => response.json())
            .then((data) => {
            var itemList = data.content
            if (data.totalPages-1 >= page){
                setMedicationItems(medicationItems.concat(itemList));
                setPage(page + 1)
            }else{
                setHasMore(false)
            }
            })
            .catch((err) => {
            console.log(err.message);
            setError(err.message)
            }).finally(() => {setLoading(false);once = false});
        }
    },[pageBottom])

    useEffect(() => {
        if (pageBottom && !loading){
            setLoading(true);
            fetch("http://localhost:8080/medications?page="+page+"&value="+count+"&shopID="+shopID)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
            var itemList = data.content
            if (data.totalPages-1 >= page){
                setMedicationItems(medicationItems.concat(itemList));
                setPage(page + 1)
            }else{
                setHasMore(false)
            }
            })
            .catch((err) => {
            console.log(err.message);
            setError(err.message)
            }).finally(() => setLoading(false));
        }
    },[pageBottom])

    

    return(
        <>
        <Row  xs={1} sm={2} md={1} lg={2} xl={3} className="g-4">
            {medicationItems.filter(() => true).map(item => (<ItemCard key={item.id} item = {item}/>))}
            <div ref={ref} />
        </Row>
        {loading && <p>Loading...</p>}
        {!hasMore && <p>No More Content</p>}
        {error && <p>Error: {error}</p>}
        </>
    )

}

export default Cards;
import ItemCard from './ItemCard';
import React, { useState, useEffect, useRef } from 'react';
import Row from 'react-bootstrap/Row'
import usePageBottom from '../utils/usePageBottom';

function Discounts() {
    const [medicationItems, setMedicationItems] = useState([]);

    useEffect(() => {
            fetch("http://81.200.148.59:8080/get/%257B%2522%5B%5D%2522:%257B%2522Items%2522:%257B%257D,%2522page%2522:1+,%2522count%2522:6%257D,%2522@schema%2522:%2522pharmacy%2522%257D")
            .then((response) => response.json())
            .then((data) => {
            var itemList = data["[]"]
            setMedicationItems(medicationItems.concat(itemList));
            }).catch((err) => {
            console.log(err.message);
            });
        
    },[])

    return(
        <Row  xs={1} sm={2} md={1} lg={2} xl={3} className="g-4">
            {medicationItems.map(item => (<ItemCard item = {item['Items']}/>))}
        </Row>
    )

}

export default Discounts;
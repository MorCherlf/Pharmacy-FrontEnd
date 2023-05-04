import CategoryCard from './CategoryCard';
import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row'

function Categorys() {
    const [categorys, setCategorys] = useState([]);

    useEffect(() => {
        fetch("http://81.200.148.59:8080/get/%257B%2522%5B%5D%2522:%257B%2522Categorys%2522:%257B%257D%257D,%2522@schema%2522:%2522pharmacy%2522%257D")
        .then((response) => response.json())
        .then((data) => {
            var itemList = data["[]"]
            setCategorys(categorys.concat(itemList));
        }).catch((err) => {
            console.log(err.message);
        });
    },[])

    return(
        <Row  xs={1} sm={2} md={1} lg={2} xl={3} className="g-4">
            {categorys.map(item => (<CategoryCard item = {item['Categorys']}/>))}
        </Row>
    )

}

export default Categorys;
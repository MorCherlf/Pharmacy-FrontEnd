import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Nav from 'react-bootstrap/Nav';
import ShopCard from './ShopCard';
import useShop from '../utils/useShop';

function SelectShopModal() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [shops, setShops] = useState([]);
    const shop = useShop();

    useEffect(() => {
        fetch("http://localhost:8080/shop")
        .then((response) => response.json())
        .then((data) => {
            setShops(shops.concat(data));
        }).catch((err) => {
            console.log(err.message);
        });
    },[])

    return (
    <>
      {shop && <Nav.Link href="#" onClick={handleShow}>{shop.name}</Nav.Link>}
      {!shop && <Nav.Link href="#" onClick={handleShow}>Choose Shop</Nav.Link>}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Choose a Shop</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {shops.map(item => (<ShopCard key={item.id} item = {item}/>))}
        </Modal.Body>
    </Modal>
    </>);
}

export default SelectShopModal;
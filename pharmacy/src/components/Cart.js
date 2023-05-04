import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import CartItem from './CartItem';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

function Cart() {
    const cart = useSelector((state) => state.cart)
    var total = 0.00
    cart?.map(i => (
        total = total + Math.floor(i.itemPrice*i.quantity*100)/100
    ))
    

    return(
        <Col style={{padding:"0px"}}>
            <Card>
                <Card.Header>Cart</Card.Header>
                <Card.Body>
                    {/* {cart.map(item => (<CartItem item = {item}/>))} */}
                    {cart?.map((item) => (<CartItem item = {item}/>))}
                </Card.Body>
                <Card.Footer>
                    ${total}
                    {/* <h5 style={{display:'inline-block'}}>Sum:{sum}</h5> */}
                    <form action="checkOut" method="get" style={{display:'inline-block',float:"right"}}>
                        {/* <input type="hidden" value={cart} name="cart" /> */}
                        <Button href="#" type="submit" >Check Out</Button>
                    </form>
                </Card.Footer>
            </Card>
        </Col>
    );
}

export default Cart;

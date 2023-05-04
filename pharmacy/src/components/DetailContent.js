import Col from "react-bootstrap/esm/Col";
import Card from 'react-bootstrap/Card';
import Row from "react-bootstrap/esm/Row";
import Button from "react-bootstrap/esm/Button";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addToCart, decrementQuantity, incrementQuantity, removeItem } from "../redux/cartSlice";


function DetailContent(item) {
    let i = item.item
    let itemName = i.medication.name;
    let itemId = i.id;
    let itemStock = i.stock;
    let itemPrice = i.price
    // let salePrice = i.salePrice
    let imgURL = i.medication.information.imgURL
    let itemDescription = i.medication.information.description.description
    let itemIntroduction = i.medication.information.introduction.introduction
    const dispatch = useDispatch()
    let [exist, setExist] = useState(false);
    let [quantity, setQuantity] = useState(0)
    let [remove, setRemove] = useState(false)
    let cart = useSelector((state) => state.cart)

    useEffect(() => {
        if(cart.find(e => e.itemId === itemId)){
            setExist(true)
        }else{
            setExist(false)
        }
        if(cart.find(e => e.itemId === itemId)){
            setQuantity(cart.find(e => e.itemId === itemId).quantity)
            if(cart.find(e => e.itemId === itemId).quantity <= 1) {
                setRemove(true)
            }else if (cart.find(e => e.itemId === itemId).quantity >= itemStock){
                setQuantity(itemStock)
            }else(
                setRemove(false)
            )
        }
    })


    return(
        <>
        <div className="p-5 mb-4 bg-light rounded-3 border">
            <Row>
                <Col md={4}>
                    <Card.Img src={imgURL} alt={itemName}/>
                </Col>
                <Col md={8}>
                    <h1>{itemName}</h1>
                    <br/><br/><br/><br/>
                    <h3>{itemIntroduction}</h3>
                    <h3 style={{display:'inline-block'}}>${itemPrice}</h3>
                    <div style={{display:'inline-block',float:"right"}}>
                        {exist || <Button style={{display:'inline-block'}} onClick={() => dispatch(addToCart({itemId, itemName, imgURL, itemPrice}))}>Add</Button>}
                        {exist && <>
                          {remove && <Button style={{display:'inline-block'}} onClick={() => dispatch(removeItem(itemId))}>-</Button>}
                          {remove || <Button style={{display:'inline-block'}} onClick={() => dispatch(decrementQuantity(itemId))}>-</Button>}
                          <p style={{display:'inline-block'}}>{quantity}</p>
                          {cart.find(e => e.itemId === itemId) && cart.find(e => e.itemId === itemId).quantity >= itemStock && <Button disabled style={{display:'inline-block'}}>+</Button>}
                          {cart.find(e => e.itemId === itemId) && cart.find(e => e.itemId === itemId).quantity >= itemStock || <Button style={{display:'inline-block'}} onClick={() => dispatch(incrementQuantity(itemId))}>+</Button>}
                        </>}
                    </div>
                </Col>
            </Row>
            <br />
        </div>
        <div className="p-5 mb-4 bg-light rounded-3 border">
            <Row>
                <Col>
                <h5>{itemDescription}</h5>
                </Col>
            </Row>
        </div>
        </>
    )
}


export default DetailContent
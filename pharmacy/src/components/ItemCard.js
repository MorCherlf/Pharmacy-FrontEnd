import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
// import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {addToCart, decrementQuantity, incrementQuantity, removeItem} from '../redux/cartSlice';
// import useCounter from '../utils/useCounter';
import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function ItemCard(item) {
    const dispatch = useDispatch()
    let i = item.item
    let imgURL = i.medication.information.imgURL;
    let itemName = i.medication.name;
    let itemIntro = i.medication.information.introduction.introduction;
    let itemPrice = i.price;
    let salePrice = i.salePrice
    let itemId = i.id;
    let itemStock = i.stocks;
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
        {(itemStock <= 0) || 
                    <Col>
                    <Card>
                        <Link to={`/Detail/${itemId}`}><Card.Img src={imgURL} class="card-img-top" style={{height:200}} alt={itemName}></Card.Img></Link>
                        <Card.Body>
                            <Card.Title>{itemName}</Card.Title>
                            <Card.Text className='detailText'>{itemIntro}</Card.Text>
                            <h5 style={{display:'inline-block'}}>${itemPrice}</h5>
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
                        </Card.Body>
                    </Card>
                    </Col>
        }
        </>
    )
}

export default ItemCard;
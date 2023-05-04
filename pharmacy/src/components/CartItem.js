import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { decrementQuantity, incrementQuantity, removeItem } from '../redux/cartSlice';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';


function CartItem(item) {
    let i = item.item
    console.log(i)
    let imgURL = i.imgURL;
    let itemName = i.itemName;
    // let itemDetail = i.detail;
    let itemStock = i.stock
    let itemId = i.itemId;
    let itemQuantity = i.quantity;

    const dispatch = useDispatch()

    let [remove, setRemove] = useState(false)

    useEffect(() => {
        if(itemQuantity <= 1) {
            setRemove(true)
        }else{
            setRemove(false)
        }
    })

    return(
        <>
        <Card>
            <Row>
                <Col xs={4}>
                    <Card.Img src={imgURL} style={{height:"100px"}} alt={itemName}/>
                </Col>
                <Col xs={8}>
                    <Card.Body>
                        <h5 style={{display:'inline-block'}}>{itemName}</h5>
                        <div style={{display:'inline-block',float:"right"}}>
                            {remove && <Button style={{display:'inline-block'}} onClick={() => dispatch(removeItem(itemId))}>-</Button>}
                            {remove || <Button style={{display:'inline-block'}} onClick={() => dispatch(decrementQuantity(itemId))}>-</Button>}
                            <p style={{display:'inline-block'}}>{itemQuantity}</p>
                            <Button style={{display:'inline-block'}} onClick={() => dispatch(incrementQuantity(itemId))}>+</Button>
                        </div>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
        <br/>
        </>
    )

}

export default CartItem;
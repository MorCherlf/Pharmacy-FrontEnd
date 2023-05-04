import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/esm/Row';
import Button from 'react-bootstrap/Button';
import useShop from '../utils/useShop';

function ShopCard(item) {
    let i = item.item
    let id = i.id
    let name = i.name
    let address = i.address
    let telephone = i.telephone

    const selectShop = useShop();


    return(
        <Card>
        <Row>
            <Col>
                <Card.Body>
                    <h5 style={{display:'inline-block'}}>{name}</h5>
                    <p style={{display:'inline-block'}}>{address}</p>
                    <p style={{display:'inline-block'}}>{telephone}</p>
                    <div style={{display:'inline-block',float:"right"}}>
                        {(selectShop && selectShop.id === id) && <Button style={{display:'inline-block'}} disabled>Selected</Button>}
                        {(selectShop && selectShop.id === id) || <Button style={{display:'inline-block'}} onClick={() => {
                            localStorage.removeItem('Shop')
                            localStorage.removeItem('persist:cart')
                            localStorage.setItem("Shop",JSON.stringify(i));
                            window.location.reload()
                        }}>Choose</Button>}
                    </div>
                </Card.Body>
            </Col>
        </Row>
    </Card>
    )

}

export default ShopCard;
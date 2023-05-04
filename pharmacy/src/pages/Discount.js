import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/esm/Row';
import Discounts from '../components/Discounts';
import Cart from '../components/Cart';

function Discount() {
    return(
        <>
        <Row style={{padding:"30px"}}>
                <Col xs={12} md={7} lg={8} xl={9}><Discounts/><br/></Col>
                <Col xs={12} md={5} lg={4} xl={3}><Cart/></Col>
            </Row>
        </>
    )
}

export default Discount
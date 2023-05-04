import Categorys from "../components/Categorys"
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/esm/Row';

function Category() {
    return(
        <>
        <Row style={{padding:"30px"}}>
            <Col xs={12} md={7} lg={8} xl={9}><Categorys/></Col>
        </Row>
        </>
    )
}

export default Category
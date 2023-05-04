import HomePageCarousel from '../components/HomePageCarousel'
import Cards from '../components/Cards';
import Cart from '../components/Cart'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/esm/Row';
import useShop from '../utils/useShop';
import Button from 'react-bootstrap/esm/Button';
import SelectShopModal from '../components/SelectShopModal';

function Home() {
    const shop = useShop();

    return(
        <>
            <HomePageCarousel/>
            <br/>


            {/* Need Choose Shop First */}
            {!shop && 
                <Col>
                <div className="p-5 mb-4 bg-light rounded-3 border">
                    <h2>You Need Choose a Shop First</h2>
                    <br />
                    <Button><SelectShopModal /></Button>
                </div>
                </Col>
            }
            {shop &&
                <Row style={{padding:"30px"}}>
                    <Col xs={12} md={7} lg={8} xl={9}><Cards/><br/></Col>
                    <Col xs={12} md={5} lg={4} xl={3}><Cart/></Col>
                </Row>
            }
        </>
    )
}

export default Home
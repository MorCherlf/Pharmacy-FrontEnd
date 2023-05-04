import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import LoginWithModal from './LoginWithModal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {NavLink} from 'react-router-dom';
import SelectShopModal from './SelectShopModal';
import useUser from '../utils/useUser';



function Header() {
    let user = useUser()
    if(user){
        console.log(user)
    }
    function logOut() {
        localStorage.clear();
        window.location.reload()
    }
    return(
        <Row>
            <Col xs='12'>
                <Navbar variant="dark" expand='md'  class="fixed-top" style={{"background-color":"rgba(0, 0, 0, 0.9)"}} >
                    {/* <!-- MinWidth --> */}
                    <Navbar.Brand><NavLink to="/Home" className={"nav-link"}>Pharmacy</NavLink></Navbar.Brand>
                    <Navbar.Toggle type="button" data-toggle="collapse" data-target="#sample1">
                        <span class="navbar-toggler-icon"></span>
                    </Navbar.Toggle>

                    {/* <!-- Full Part --> */}
                    <Navbar.Collapse id="sample1">
                        {/* <!-- Navbar --> */}
                        <Nav className="mr-auto ">
                            <Nav.Item><NavLink to="/Home" className={"nav-link"}>Home</NavLink></Nav.Item>
                            <Nav.Item><NavLink to="/Category" className={"nav-link"}>Category</NavLink></Nav.Item>
                            <Nav.Item><NavLink to="/Discount" className={"nav-link"}>Discount</NavLink></Nav.Item>

                        </Nav>
                        <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            
                        />
                  <Button variant="outline-primary" style={{marginRight:"50px"}}>Search</Button>
                </Form>
                        <Nav>
                            <Nav.Item><SelectShopModal/></Nav.Item>
                            {user === null && <Nav.Item><LoginWithModal/></Nav.Item>}
                            {user === null || <Nav.Item><NavLink className={"nav-link"}>Hi, {user.username}</NavLink></Nav.Item>}
                            {user === null || <Nav.Item><NavLink className={"nav-link"} onClick={logOut}>Log Out</NavLink></Nav.Item>}
                        </Nav>

                    </Navbar.Collapse>
                </Navbar>

                {/* <!-- Login Wrong -->
                <div class="modal" id="errorLogin">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            {/* <!-- Modal Main --> */}
                            {/* <div class="modal-body">
                                <h4>Username or Password is wrong</h4>
                                <br/>
                                <p>Don't have an account？<a href="./register.jsp">Go to register</a></p>
                            </div> */}


                            {/* <!-- Modal Footer --> */}
                            {/* <div class="modal-footer">
                                <button type="button" class="btn btn-info" data-dismiss="modal" data-toggle="modal"
                                        data-target="#login">Retry</button>
                                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div> */}
            </Col>
        </Row>

    )
}

export default Header;
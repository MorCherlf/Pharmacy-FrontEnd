import RegisterForm from "../components/RegisterForm";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

function Register() {
    return(
        <>
        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" rel="stylesheet"/>
        <Row>
            <Col>
                <RegisterForm/>
            </Col>
        </Row>
        </>
    )
}

export default Register;
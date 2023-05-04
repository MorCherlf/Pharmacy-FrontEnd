import { useEffect, useState } from "react";
import Col from "react-bootstrap/esm/Col";
import { useParams } from "react-router-dom";
import DetailContent from "../components/DetailContent";
import Row from "react-bootstrap/esm/Row";

function Detail() {
    const params = useParams();
    const id = params.id
    const [item, setItem] = useState({});

    useEffect(()=> {
        fetch(`http://localhost:8080/medication/${id}`)
        .then((response) => response.json())
        .then(data => setItem(data))
        .catch(e => console.log(e))
    },[])




    return(
    <>
    <Col style={{padding:40}}>
    {JSON.stringify(item) === '{}' || <DetailContent item={item}/>}
    </Col>
    </>
    )
}

export default Detail;
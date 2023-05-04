import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function CategoryCard(category) {
    let categoryName = category.item.name
    let categoryDescription = category.item.description

    return(
        <>
        <Col>
            <Card>
                <Card.Body>
                    <Card.Title>{categoryName}</Card.Title>
                    <Card.Text className='detailText'>{categoryDescription}</Card.Text>
                </Card.Body>
            </Card>
            </Col>
        </>
    )
}

export default CategoryCard;
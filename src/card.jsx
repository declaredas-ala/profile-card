import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
const card = (props) => {
  return (
    <div>
          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.text}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{props.skills1}</ListGroup.Item>
   
      </ListGroup>
      <Card.Body>
      
      </Card.Body>
    </Card>
      
    </div>
  )
}

export default card

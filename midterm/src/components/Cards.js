import React from 'react'
import {Card} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

function Cards({student}) {
    return (
        <div className='cardIndividual'>
            <Card className='cardInfo' style={{ width: '18rem' }}>
                <Card.Img className="img" variant="top" src={student.image} />
                <Card.Body className="cardText">
                    <Card.Title>{student.name}</Card.Title>
                    <Card.Text>{student.gpa}</Card.Text>
                    <Button variant="primary">Grade</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Cards
import React from "react";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

function MovieCard({ title, description, posterUrl, rating, trailer }) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={posterUrl} onClick ={trailer}/>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>{rating}</Card.Text>
          <Button variant="primary">Delete</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default MovieCard;
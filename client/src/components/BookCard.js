import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

export default function BookCard(props) {
    return (
        <Card>
        <CardImg src={props.image} alt="" />
        <CardBody>
          <CardTitle>{props.title}</CardTitle>
          <CardSubtitle>{props.author}</CardSubtitle>
          <CardText>{props.published}</CardText>
          
        </CardBody>
      </Card>

          
        
    )
}

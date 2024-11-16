import React, { useContext } from "react";
import { KosarContext } from "../../context/KosarContext";
import Button from 'react-bootstrap/Button';
import  Card from 'react-bootstrap/Card';

export function TermekPublic(props) {
  const {kosarba} =useContext(KosarContext)
  return (

    <Card>


    
    <Card.Header as="h5">Termekek</Card.Header>
          
        <Card.Body>
            <Card.Title> {props.termek.title}   </Card.Title>
       
          
                <Card.Img variant="top"src={props.termek.image}/>
             
            
                <Card.Text>{props.termek.description}</Card.Text>
          
          <Button variant="primary" onClick={()=>{kosarba(props.termek)}}>Kosárba</Button>
          <Card.Text> "{props.termek.price} €</Card.Text>
        
      
    </Card.Body>
    </Card>
  );
}

export default TermekPublic;
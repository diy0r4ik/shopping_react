import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
const items=require('./.././../data')
// import{ Nav, Navbar,NavDropdown, Container, Form, Button}from "react-bootstrap"


export default function App(){
  const[data, setdata]=useState(items)
  const GetData=()=>{
    console.log(data);
  }
  const search=()=>{
    document.querySelector('.Malika_mumacha').innerHTML=""
    var a=document.querySelector('#belgi').value
    // console.log(a);
    data.map(items=>{
      if(items.name.includes(a)){
        var b=items.name.indexOf(a)
        switch(b){
          case 0:
            var r= `<span>${items.name.slice(0,a.leanth)}</span>${items.name.slice(0,a.leanth)}`
            break;
            default:
              var r= `<span>${items.name.slice(0,a.leanth)}</span>${items.name.slice(0,a.leanth)}`
            break;
          
        }
        document.querySelector('.Malika_mumacha').innerHTML+=`
        <div class="card" style="width: 18rem;">
        <img src="${items.img}" class="card-img-top" alt="${items.img}">
        <div class="card-body">
          <h5 class="card-title">${r}</h5>
          <p class="card-text">${items.description}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"> i</li>
          <li class="list-group-item">${items.price}</li>
          <li class="list-group-item">A third item</li>
        </ul>
        <div class="card-body">
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
        </div>
      </div>
        `
      }
    })
  }
  return (
    <div>
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
            id='belgi'
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button onClick={search} variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <div className="Malika_mumacha">
        {data.map(items=>{
            return <Card className="card">
      <Card.Img variant="top" src={items.img}/>
      <Card.Body>
        <Card.Title>{items.title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>{items.price}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
        })}
    
   
    </div>
        </div>
    )
}
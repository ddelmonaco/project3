import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
class Home extends Component {

  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
 
  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
                
            Welcome to your perosnalized playlist!
            
            </Jumbotron>
          </Col>
        </Row>
        
        
       <img src="images/photo1.jpeg"/> 
      </Container>
      
   
    );
   
  }
}
export default Home;


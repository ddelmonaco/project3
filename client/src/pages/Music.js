import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import { pipeline } from "stream";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

class Music extends Component {
  state = {
    music: [],
    title: "",
    artist: "",
    synopsis: ""
  };

  componentDidMount() {
    this.loadMusic();
  }

  loadMusic = () => {
    API.getMusic ()
      .then(res => this.setState({ music: res.data }))
      .catch(err => console.log(err));
  };

  deleteMusic = id => {
    API.deleteMusic(id)
      .then(res => this.loadMusic())
      .catch(err => console.log(err));
  };
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  //  updateMusic = id => {
  //    API.updateMusic (id)
  //    .then(res => this.loadMusic ()) 
  //    .catch(err => console.log (err)));
  //  }
  };
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.artist) {
      API.saveMusic({
        title: this.state.title,
        artist: this.state.artist,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadMusic())
        .catch(err => console.log(err));

        
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What Song Should I Listen To?</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <Input
                value={this.state.artist}
                onChange={this.handleInputChange}
                name="artist"
                placeholder="Author (required)"
              />
              <TextArea
                value={this.state.synopsis}
                onChange={this.handleInputChange}
                name="synopsis"
                placeholder="Synopsis (Optional)"
              />
              <FormBtn
                disabled={!(this.state.artist && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit Song 
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Songs On My List</h1>
            </Jumbotron>
            {this.state.music.length ? (
              <List>
                {this.state.music.map(music => (
                  <ListItem key={music._id}>
                    <a href={"/music/" + music._id}>
                      <strong>
                        {music.title} by {music.artist}
                      </strong>
                    </a>
                    <DeleteBtn onClick={() => this.deleteMusic(music._id)} />
                    {/* <UpdateBten onClick={() => this.UpdateMusic(music._id)} /> */}
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
            
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Music;

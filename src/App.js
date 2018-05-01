import React, { Component } from "react";
import Frame from "./frame";
import Carousel from "./carousel";
import Slide from "./slide";
import Nav from "./nav";
import image1 from "./images/image1.jpg";
import image2 from "./images/image2.jpeg";

import styles from "./styles/index.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClickNext = this.handleClickNext.bind(this);
    this.handleClickPrevious = this.handleClickPrevious.bind(this);
  }
  state = {
    showIndex: 0,
    numSlides: 2
  };

  handleClickPrevious() {
    this.setState({
      showIndex: Math.max(this.state.showIndex - 1, 0)
    });
  }

  handleClickNext() {
    this.setState({
      showIndex: Math.min(this.state.showIndex + 1, this.state.numSlides - 1)
    });
  }

  renderNav() {
    return (
      <Nav
        onPrevious={this.handleClickPrevious}
        hasPrevious={this.state.showIndex > 0}
        onNext={this.handleClickNext}
        hasNext={this.state.showIndex < this.state.numSlides - 1}
      />
    );
  }

  render() {
    const imageWidth = 640;
    return (
      <Frame>
        <Carousel
          showIndex={this.state.showIndex}
          nav={this.renderNav()}
          width={imageWidth}
        >
          <Slide image={image1} title="Lorem">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            sint id harum sed tempora aliquid molestias eaque. Nihil ex commodi
            accusantium error quisquam, iusto quibusdam voluptates velit iure,
            nobis impedit!
          </Slide>
          <Slide image={image2} title="Lorem">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            sint id harum sed tempora aliquid molestias eaque. Nihil ex commodi
            accusantium error quisquam, iusto quibusdam voluptates velit iure,
            nobis impedit!
          </Slide>
        </Carousel>
      </Frame>
    );
  }
}

export default App;

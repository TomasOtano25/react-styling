import React, { Children, cloneElement } from "react";
import PropTypes from "prop-types";

const renderSlide = props => {
  return Children.map(props.children, (slide, i) => {
    return cloneElement(slide, {
      style: {
        ...slide.props.style,
        width: props.width,
        left: props.width * (i - props.showIndex)
      }
    });
  });
};

const Carousel = props => {
  return (
    <div className="dft__carousel">
      {renderSlide(props)}
      {props.nav}
    </div>
  );
};

Carousel.propTypes = {
  nav: PropTypes.node.isRequired,
  showIndex: PropTypes.number,
  width: PropTypes.number
};

export default Carousel;

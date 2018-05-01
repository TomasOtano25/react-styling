import Radium from "radium";
import React from "react";
import PropTypes from "prop-types";

import styles from "./nav-styles";

const getPrevStyle = props => {
  return props.hasPrevious ? styles.prev : styles.prevHidden;
};

const getNextStyle = props => {
  return props.hasNext ? styles.next : styles.nextHidden;
};

const Nav = props => {
  return (
    <div style={styles.root}>
      <button key="prev" style={getPrevStyle(props)} onClick={props.onPrevious}>
        &#10094;
      </button>
      <button key="next" style={getNextStyle(props)} onClick={props.onNext}>
        &#10095;
      </button>
    </div>
  );
};

Nav.proptypes = {
  onPrevius: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired
};

export default Radium(Nav);

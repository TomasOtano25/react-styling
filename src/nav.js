import Radium from "radium";
import React from "react";
import PropTypes from "prop-types";
import classNames  from 'classnames'

import styles from "./nav-styles";



const getNextStyle = props => {
  return props.hasNext ? styles.next : styles.nextHidden;
};

const Nav = props => {
  return (
    <div style={styles.root}>
      <button key="prev" className={classNames({"btn-prev" : true, "btn-prev-hidden" : !props.hasPrevious})} onClick={props.onPrevious}>
        &#10094;
      </button>
      <button key="next" className={classNames({"btn-next" : true, "btn-next-hidden": !props.hasNext})} onClick={props.onNext}>
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

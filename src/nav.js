import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import styles from "./styles/nav.css";

const Nav = props => {
  return (
    <div className={styles.root}>
      <button key="prev" className={classNames(styles.btn__prev, { [styles.btn__hidden] : !props.hasPrevious})} onClick={props.onPrevious}>
        &#10094;
      </button>
      <button key="next" className={classNames(styles.btn__next, { [styles.btn__hidden] : !props.hasNext})} onClick={props.onNext}>
        &#10095;
      </button>
    </div>
  );
};

Nav.proptypes = {
  onPrevius: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired
};

export default Nav;

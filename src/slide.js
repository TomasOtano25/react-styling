import React from "react";
import PropTypes from "prop-types";

import styles from "./slide-styles";

const Slide = props => {
  return (
    <article style={{ ...styles.root, ...props.style }}>
      <img src={props.image} alt={props.title} style={styles.image} />
      <footer style={styles.footer}>
        <h2 style={styles.title}>{props.title}</h2>
        <div>{props.children}</div>
      </footer>
    </article>
  );
};

Slide.propTypes = {
  image: PropTypes.string.isRequired,
  style: PropTypes.object,
  title: PropTypes.string
};

export default Slide;

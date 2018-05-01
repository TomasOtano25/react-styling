import React from "react";
import PropTypes from "prop-types";

import styles from "./styles/slide.css";

const Slide = props => {
  return (
    <article className={styles.slide} style={props.style}>
      <img src={props.image} alt={props.title} className={styles.image} />
      <footer className={styles.footer}>
        <h2 className={styles.title}>{props.title}</h2>
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

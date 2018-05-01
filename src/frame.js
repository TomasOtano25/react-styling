import React from "react";

import styles from "./styles/frame.css"

const Frame = ({ children }) => {
    return <div className={styles.root}>{children}</div>;
};

export default Frame;

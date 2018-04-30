import React from "react";

import style from "./frame-style";

const Frame = ({ children }) => {
  return <div style={style.root}>{children}</div>;
};

export default Frame;

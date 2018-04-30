import config from "./config-styles";

const btn = {
  flex: 1,
  height: config.imageHeight,
  background: "transparent",
  border: "none",
  color: "#fff",
  padding: 20,
  fontSize: 50,
  textShadow: "1px 1px 0 rgba(0, 0, 0, .6)",
  outline: 0,
  cursor: "pointer",
  userSelect: "none"
};

const prev = {
  ...btn,
  textAlign: "left"
};

const hidden = {
  visibility: "hidden"
};

const next = {
  ...btn,
  textAlign: "right"
};

export default {
  root: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    display: "flex"
  },
  prev,
  prevHidden: {
    ...prev,
    ...hidden
  },
  next,
  nextHidden: {
    ...next,
    ...hidden
  }
};

import Radium from "radium";

const pulse = Radium.keyframes({
    "0%": {
      transform: "scale3d(1,1,1)"
    },
    "15%": {
      transform: "scale3d(1.05,1.05,1.05)"
    },
    "100%": {
      transform: "scale3d(1,1,1)"
    }
  },
  "Nav"
);

const btn = {
  flex: 1,
  height: 420,
  background: "transparent",
  border: "none",
  color: "#fff",
  padding: 20,
  fontSize: 50,
  textShadow: "1px 1px 0 rgba(0, 0, 0, .6)",
  outline: 0,
  cursor: "pointer",
  userSelect: "none",
  animation: `${pulse} 4s 2s infinite`,

  ":hover": {
    transition: "all 1s",
    color: "#8c9ea3"
  }
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

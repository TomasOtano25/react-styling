import config from "./config-styles";

const footerHeight = 125;

export default {
  root: {
    position: "absolute",
    top: 0,
    transition: "all .6s"
  },
  footer: {
    position: "absolute",
    top: config.imageHeight - footerHeight,
    color: "#fff",
    left: 0,
    width: config.imageWidth,
    height: footerHeight,
    padding: 15,
    background: "rgba(0, 0, 0, .3)",
    textShadow: "1px 1px 0 rgba(0,0,0, .6)",
    fontFamily: "'Helvetica Neue', Helvetica, Aria, sans-serif",
    fontSize: 14,
    lineHeight: "1.4rem",
    boxSizing: "border-box"
  },
  title: {
    margin: "0 0 10px 0"
  },
  image: {
    width: 640
  }
};

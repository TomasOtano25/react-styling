import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Nav = props => {
  return (
    <div className="dft__nav">
      <button key="prev" className={classNames({"dft__nav__btn" : true, "dft__nav__btn--prev" : true, "dft__nav__btn--hidden" : !props.hasPrevious})} onClick={props.onPrevious}>
        &#10094;
      </button>
      <button key="next" className={classNames({"dft__nav__btn" : true, "dft__nav__btn--next": true, "dft__nav__btn--hidden": !props.hasNext})} onClick={props.onNext}>
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

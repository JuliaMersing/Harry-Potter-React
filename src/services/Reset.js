import React from "react";
import "../stylesheet/Reset.scss";

const Reset = (props) => {
  const handleResetClick = () => {
    props.handleReset();
  };
  return (
    <div className="reset">
      <button className="reset__button" onClick={handleResetClick}>
        <span>🧹</span>
      </button>
    </div>
  );
};

export default Reset;

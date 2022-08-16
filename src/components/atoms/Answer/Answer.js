import React from "react";
import PropTypes from "prop-types";
import { StyledAnswer } from "./Answer.styles";

const Answer = ({ isClicked, click, answer }) => {
  return (
    <StyledAnswer isClicked={isClicked} onClick={click}>
      {answer}
    </StyledAnswer>
  );
};

Answer.propTypes = {
  answer: PropTypes.string.isRequired,
  isClicked: PropTypes.bool.isRequired,
};

export default Answer;

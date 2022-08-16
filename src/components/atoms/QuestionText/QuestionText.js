import React from "react";
import PropTypes from "prop-types";
import { StyledQuestion } from "./QuestionText.styles";

const QuestionText = ({ question, number }) => {
  return (
    <StyledQuestion>
      {number} {question}
    </StyledQuestion>
  );
};

QuestionText.propTypes = {
  question: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default QuestionText;

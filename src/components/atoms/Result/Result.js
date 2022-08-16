import React from "react";
import PropTypes from "prop-types";
import { StyledResultText } from "./Result.styles";
const Result = ({ result, resultMax }) => {
  return (
    <StyledResultText>
      You scored {result}/{resultMax.result} correct answers
    </StyledResultText>
  );
};

Result.propTypes = {
  result: PropTypes.string.isRequired,
  resultMax: PropTypes.number.isRequired,
};

export default Result;

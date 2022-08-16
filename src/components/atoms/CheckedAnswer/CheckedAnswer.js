import React from "react";
import PropTypes from "prop-types";
import { StyledCheckedAnswer } from "./CheckedAnswer.styles";
const CheckedAnswer = ({ color, answer }) => {
  return <StyledCheckedAnswer color={color}>{answer}</StyledCheckedAnswer>;
};

CheckedAnswer.propTypes = {
  color: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

export default CheckedAnswer;

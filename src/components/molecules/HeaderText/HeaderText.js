import React from "react";
import { StyledTitle as Title } from "components/atoms/Title/Title";
import { Description } from "components/atoms/Description/Description";
const HeaderText = () => {
  return (
    <>
      <Title data-testid="title">Quizzal</Title>
      <Description>Answer the questions and test your knowledge!</Description>
    </>
  );
};

export default HeaderText;

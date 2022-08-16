import React, { useContext } from "react";
import { quizContext } from "providers/QuizProvider";
import { optionContext } from "providers/OptionProvider";
import { Wrapper, ImgTop, ImgBottom } from "./MainTemplate.styles";
import topIcon from "assets/icons/top.svg";
import bottomIcon from "assets/icons/bottom.svg";
import Info from "components/atoms/Info/Info";

const MainTemplate = ({ children, isLoading }) => {
  const { play } = useContext(optionContext);

  return (
    <Wrapper isPlay={play} isLoading={isLoading}>
      <ImgTop src={topIcon} />
      {children}
      <Info />
      <ImgBottom src={bottomIcon} />
    </Wrapper>
  );
};

export default MainTemplate;

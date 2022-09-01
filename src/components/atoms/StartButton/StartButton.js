import React, { useContext } from "react";
import { Button } from "./StartButton.styles";
import { optionContext } from "providers/OptionProvider";
const StartButton = () => {
  const { handleClick } = useContext(optionContext);

  return <Button onClick={handleClick}>Start quiz</Button>;
};

export default StartButton;

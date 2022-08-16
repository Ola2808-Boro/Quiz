import React, { useState } from "react";
import { StyledMain } from "./Options.styles";
import { data } from "assets/data/Data";
import SelectOption from "components/molecules/SelectOption/SelectOption";
import StartButton from "components/atoms/StartButton/StartButton";
import { nanoid } from "nanoid";

const Options = () => {
  const [providedData, setData] = useState([data]);

  const optionsElement = providedData?.map((element) => {
    return element.map((item) => {
      return (
        <SelectOption
          key={nanoid()}
          labelItem={item.label}
          nameItem={item.name}
          valueItem={item.value}
        />
      );
    });
  });

  return (
    <StyledMain>
      {optionsElement}
      <StartButton />
    </StyledMain>
  );
};

export default Options;

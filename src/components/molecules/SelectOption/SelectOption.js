import React, { useContext } from "react";
import { StyledSelectOption } from "./SelectOption.styles";
import { Label } from "components/atoms/Label/Label";
import { Option } from "components/atoms/Option/Option";
import { Select } from "components/atoms/Select/Select";
import PropTypes from "prop-types";
import { optionContext } from "providers/OptionProvider";

const SelectOption = ({ labelItem, key, nameItem, valueItem }) => {
  const { gameOption, handleChange } = useContext(optionContext);

  const optionsElements = valueItem?.map(({ name, value }) => {
    return <Option value={value}>{name}</Option>;
  });

  let selectedValue;
  if (nameItem === "number") {
    selectedValue = gameOption.number;
  } else if (nameItem === "category") {
    selectedValue = gameOption.category;
  } else if (nameItem === "type") {
    selectedValue = gameOption.type;
  } else if (nameItem === "difficulty") {
    selectedValue = gameOption.difficulty;
  }

  return (
    <StyledSelectOption>
      <Label>{labelItem}</Label>
      <Select
        name={nameItem}
        value={selectedValue}
        onChange={(event) => handleChange(event)}
      >
        {optionsElements}
      </Select>
    </StyledSelectOption>
  );
};

SelectOption.propTypes = {
  labelItem: PropTypes.string.isRequired,
  nameItem: PropTypes.string.isRequired,
  key: PropTypes.string,
};

export default SelectOption;

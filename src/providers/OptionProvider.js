import React, { createContext, useState } from "react";

const initState = {
  category: "",
  difficulty: "",
  number: "",
  type: "",
};

export const optionContext = createContext({
  gameOption: [initState],
  handleChange: () => {},
  handleClick: () => {},
  play: false,
  setPlay: () => {},
});

export const OptionProvider = ({ children }) => {
  const [gameOption, setGameOption] = useState(initState);
  const [play, setPlay] = useState(false);

  function handleChange(event) {
    const { value, name } = event.target;

    setGameOption((prevGameOption) => {
      return {
        ...prevGameOption,
        [name]: value,
      };
    });
  }

  function handleClick() {
    setPlay((prevState) => !prevState);
  }

  return (
    <optionContext.Provider
      value={{
        gameOption,
        handleChange,
        handleClick,
        play,
        setPlay,
        setGameOption,
        initState,
      }}
    >
      {children}
    </optionContext.Provider>
  );
};

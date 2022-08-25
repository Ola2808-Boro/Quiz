import React, { createContext, useState, useContext, useReducer } from "react";
import { optionContext } from "./OptionProvider";

export const quizContext = createContext({
  quizData: [],
  setQuizData: () => {},
  check: false,
  setCheck: () => {},
  result: 0,
  setResult: () => {},
  resultMax: {},
  handleClick: () => {},
  handleButtonClick: () => {},
  canCheck: () => {},
  getRandomInt: () => {},
  dispatch: () => {},
});

export const QuizProvider = ({ children }) => {
  const initStateMax = {
    result: "",
    isResultMax: false,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "Clean":
        return {
          result: "",
          isResultMax: false,
        };
      case "Check result is Max":
        return {
          ...state,
          isResultMax: true,
        };

      case "Check max Result":
        return {
          ...state,
          result: quizData.length,
        };

      default:
        return state;
    }
  };
  const [quizData, setQuizData] = useState([]);
  const [check, setCheck] = useState(false);
  const [result, setResult] = useState(0);
  const [resultMax, dispatch] = useReducer(reducer, initStateMax);

  const { handleClick, setGameOption, initState } = useContext(optionContext);

  function getResult() {
    let correctAnswer = 0;

    quizData.forEach((data) => {
      if (data.selectedAnswer === data.correct_answer) {
        correctAnswer++;
      }
    });
    if (correctAnswer === quizData.length) {
      dispatch({ type: "Check result is Max" });
    }

    setResult(correctAnswer);
    dispatch({ type: "Check max Result" });
  }

  function handleClickAnswer(key, event, answer, idAnswer) {
    setQuizData((prevData) =>
      prevData.map((data) => {
        if (data.id === key) {
          return {
            ...data,
            selectedAnswer: answer,
            answersData: data.answersData.map((item) => {
              if (item.key === idAnswer) {
                return {
                  ...item,
                  clicked: true,
                };
              } else {
                return {
                  ...item,
                  clicked: false,
                };
              }
            }),
          };
        } else {
          return {
            ...data,
          };
        }
      })
    );
  }
  function handleButtonClick() {
    let color = "";
    if (check) {
      setCheck(false);
      setResult(0);
      setQuizData([]);
      setGameOption(initState);
      handleClick();
    }
    if (quizData.every(canCheck)) {
      getResult();
      setCheck(!check);
      setQuizData((prevData) =>
        prevData.map((data) => {
          return {
            ...data,
            showAnswer: true,
            answersData: data.answersData.map((item) => {
              if (item.text === data.correct_answer) {
                color = " #94d7a2;";
              } else if (
                item.clicked &&
                data.selectedAnswer !== data.correct_answer
              ) {
                color = "#f8bcbc";
              } else {
                color = "transparent";
              }
              return {
                ...item,
                bg: color,
              };
            }),
          };
        })
      );
    }
  }
  function canCheck(data) {
    return data.selectedAnswer !== "";
  }
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  return (
    <quizContext.Provider
      value={{
        setQuizData,
        quizData,
        check,
        handleClickAnswer,
        handleButtonClick,
        result,
        resultMax,
        getResult,
        getRandomInt,
        dispatch,
      }}
    >
      {children}
    </quizContext.Provider>
  );
};

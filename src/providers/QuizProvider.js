import React, { createContext, useState, useContext } from "react";
import { optionContext } from "./OptionProvider";

export const quizContext = createContext({
  quizData: [],
  setQuizData: () => {},
  check: false,
  setCheck: () => {},
  result: 0,
  setResult: () => {},
  resultMax: {},
  setResultMax: () => {},
  handleClick: () => {},
  handleButtonClick: () => {},
  canCheck: () => {},
  getRandomInt: () => {},
});

export const QuizProvider = ({ children }) => {
  const initStateMax = {
    result: "",
    isResultMax: false,
  };

  const [quizData, setQuizData] = useState([]);
  const [check, setCheck] = useState(false);
  const [result, setResult] = useState(0);
  const [resultMax, setResultMax] = useState(initStateMax);

  const { handleClick, setGameOption, initState } = useContext(optionContext);

  function getResult() {
    let correctAnswer = 0;

    quizData.forEach((data) => {
      if (data.selectedAnswer === data.correct_answer) {
        correctAnswer++;
      }
    });
    if (correctAnswer === quizData.length) {
      setResultMax((prevState) => {
        return {
          ...prevState,
          isResultMax: true,
        };
      });
    }
    setResult(correctAnswer);
    setResultMax((prevState) => {
      return {
        ...prevState,
        result: quizData.length,
      };
    });
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
        setResultMax,
        quizData,
        check,
        handleClickAnswer,
        handleButtonClick,
        result,
        resultMax,
        getResult,
        getRandomInt,
      }}
    >
      {children}
    </quizContext.Provider>
  );
};

import React, { useContext, useEffect } from "react";
import Question from "components/molecules/Question/Question";
import QuizButton from "components/atoms/QuizButton/QuizButton";
import { quizContext } from "providers/QuizProvider";
import Result from "components/atoms/Result/Result";
import useWindowSize from "hooks/useWindowSize";
import Confetti from "react-confetti";
import { type } from "@testing-library/user-event/dist/type";
const QuizQuestions = () => {
  const { width, height } = useWindowSize();
  const { check, result, resultMax, setResultMax } = useContext(quizContext);
  useEffect(() => {
    return () => {
      setResultMax({
        result: "",
        isResultMax: false,
      });
    };
  }, []);
  return (
    <>
      <Question />
      {check && <Result result={result} resultMax={resultMax} />}
      {resultMax.isResultMax ? (
        <Confetti width={width} height={height} duration="3000" />
      ) : (
        ""
      )}
      <QuizButton />
    </>
  );
};

export default QuizQuestions;

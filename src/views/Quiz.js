import React, { useEffect, useState, useContext } from "react";
import MainTemplate from "components/templates/MainTemplate/MainTemplate";
import { data } from "assets/data/Data";
import { nanoid } from "nanoid";
import ReactLoading from "react-loading";
import { optionContext } from "providers/OptionProvider";
import { quizContext } from "providers/QuizProvider";
import QuizQuestions from "components/organisms/QuizQuestions/QuizQuestions";

const Quiz = () => {
  const { getRandomInt, setQuizData } = useContext(quizContext);
  const { gameOption } = useContext(optionContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (gameOption.number === "") {
      gameOption.number = getRandomInt(1, data[0].value.length);
    }

    let APIURL = `https://opentdb.com/api.php?amount=${gameOption.number}&category=${gameOption.category}&difficulty=${gameOption.difficulty}&type=${gameOption.type}`;

    fetch(APIURL)
      .then((res) => res.json())
      .then((res) => setQuizData(res.results))
      .then((res) =>
        setQuizData((prevData) =>
          prevData.map((data) => {
            let array = [data.correct_answer, ...data.incorrect_answers];
            array.sort();
            array.reverse();
            return {
              ...data,
              id: nanoid(),
              answers: [...array],
              selectedAnswer: "",
              showAnswer: false,
              questionNumber: prevData.indexOf(data) + 1 + ".",
            };
          })
        )
      )
      .then((res) =>
        setQuizData((prevData) =>
          prevData.map((data) => {
            return {
              ...data,
              answersData: data.answers.map((answer) => {
                return {
                  text: answer,
                  key: nanoid(),
                  clicked: false,
                };
              }),
            };
          })
        )
      );

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MainTemplate isLoading={isLoading}>
      {isLoading ? (
        <ReactLoading type="bubbles" color="#4D5B9E" height={300} width={200} />
      ) : (
        <QuizQuestions />
      )}
    </MainTemplate>
  );
};

export default Quiz;

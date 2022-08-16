import React, { useContext } from "react";
import { QuestionSection, ImgCheck } from "./Question.styles";
import { AnswerSection } from "./Question.styles";
import QuestionText from "components/atoms/QuestionText/QuestionText";
import Answer from "components/atoms/Answer/Answer";
import CheckedAnswer from "components/atoms/CheckedAnswer/CheckedAnswer";
import cross from "assets/icons/cross.svg";
import tick from "assets/icons/tick.svg";
import { quizContext } from "providers/QuizProvider";
import { StyledSection } from "components/organisms/QuizQuestions/QuizQuestions.styles";
const Question = () => {
  const { quizData, check, handleClickAnswer } = useContext(quizContext);

  const quizElements = quizData?.map(
    ({
      question,
      correct_answer,
      selectedAnswer,
      id,
      answersData,
      answers,
      questionNumber,
    }) => {
      let src = correct_answer === selectedAnswer ? tick : cross;

      return (
        <StyledSection>
          <QuestionSection>
            <QuestionText question={question} number={questionNumber} />
            {check && <ImgCheck src={src} />}
          </QuestionSection>
          <AnswerSection>
            {check
              ? answersData?.map((answer) => (
                  <CheckedAnswer color={answer.bg} answer={answer.text} />
                ))
              : answersData?.map((answer) => (
                  <Answer
                    isClicked={answer.clicked}
                    click={(event) =>
                      handleClickAnswer(id, event, answer.text, answer.key)
                    }
                    answer={answer.text}
                  />
                ))}
          </AnswerSection>
        </StyledSection>
      );
    }
  );

  return <>{quizElements}</>;
};

export default Question;

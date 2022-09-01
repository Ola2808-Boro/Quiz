import "jest-styled-components";
import renderer from "react-test-renderer";
import AppProvider from "providers/AppProvider";
import React from "react";
import { QuestionSection, AnswerSection } from "../Question.styles";
import Question from "../Question";
import { render, screen } from "@testing-library/react";
import { StyledSection } from "components/organisms/QuizQuestions/QuizQuestions.styles";
import QuestionText from "components/atoms/QuestionText/QuestionText";
import Answer from "components/atoms/Answer/Answer";
const mockfn = jest.fn();

const data = [
  {
    answer: "answer",
  },
  {
    answer: "answer",
  },
  {
    answer: "answer",
  },
  {
    answer: "answer",
  },
];

describe("test question component", () => {
  it("test render question with answers before click event", () => {
    render(
      <AppProvider>
        <StyledSection>
          <QuestionSection>
            <QuestionText question="question" number="1" />
          </QuestionSection>
          <AnswerSection>
            {data.map((item) => {
              return (
                <Answer isClicked={false} click={mockfn} answer={item.answer} />
              );
            })}
          </AnswerSection>
        </StyledSection>
        ;
      </AppProvider>
    );

    expect(screen.getAllByText(/answer/i).length).toBe(4);
  });
});

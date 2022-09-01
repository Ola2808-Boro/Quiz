import React from "react";
import "jest-styled-components";
import renderer from "react-test-renderer";
import AppProvider from "providers/AppProvider";
import { render, screen } from "@testing-library/react";
import QuestionText from "../QuestionText";
import { StyledQuestion } from "components/atoms/QuestionText/QuestionText.styles";
describe("Test style", () => {
  it("default style", () => {
    const tree = renderer
      .create(
        <AppProvider>
          <StyledQuestion />
        </AppProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("test question content", () => {
    render(
      <AppProvider>
        <QuestionText question="Question" number="1" />
      </AppProvider>
    );
    const questionElement = screen.getByText(/question/i);
    expect(questionElement).toBeInTheDocument();
  });
});

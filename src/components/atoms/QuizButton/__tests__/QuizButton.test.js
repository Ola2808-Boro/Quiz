import React from "react";
import "jest-styled-components";
import renderer from "react-test-renderer";
import AppProvider from "providers/AppProvider";
import { StyledButton } from "components/atoms/QuizButton/QuizButton.styles";
import QuizButton from "../QuizButton";
import { render, screen } from "@testing-library/react";

describe("Test Quiz Button", () => {
  it("Test default style", () => {
    const tree = renderer
      .create(
        <AppProvider>
          <StyledButton />
        </AppProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Test render context", () => {
    render(
      <AppProvider>
        <QuizButton />
      </AppProvider>
    );
    expect(
      screen.getByRole("button", { name: "Check answers" })
    ).toBeInTheDocument();
  });
});

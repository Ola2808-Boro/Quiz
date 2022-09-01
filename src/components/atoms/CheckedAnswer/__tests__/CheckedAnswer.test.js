import "jest-styled-components";
import renderer from "react-test-renderer";
import AppProvider from "providers/AppProvider";
import React from "react";
import { StyledCheckedAnswer } from "components/atoms/CheckedAnswer/CheckedAnswer.styles";
import CheckedAnswer from "components/atoms/CheckedAnswer/CheckedAnswer";
import { render, screen } from "@testing-library/react";

describe("Test answer component", () => {
  it("default style", () => {
    const tree = renderer.create(
      <AppProvider>
        <StyledCheckedAnswer />
      </AppProvider>
    );
    expect(tree).toMatchSnapshot();
  });

  it("test style when checked answer is wrong", () => {
    render(
      <AppProvider>
        <CheckedAnswer color="red" answer="answer" />
      </AppProvider>
    );
    expect(screen.getByText(/answer/i)).toHaveStyle(
      `border: 1px solid ${({ theme }) => theme.colors.borderAnswer}`
    );
    expect(screen.getByText(/answer/i)).toHaveStyle(`background-color: "red" `);
  });
  it("test style when checked answer is correct", () => {
    render(
      <AppProvider>
        <CheckedAnswer color="green" answer="answer" />
      </AppProvider>
    );
    expect(screen.getByText(/answer/i)).toHaveStyle(
      `border: 1px solid ${({ theme }) => theme.colors.borderAnswer}`
    );
    expect(screen.getByText(/answer/i)).toHaveStyle(
      `background-color: "green" `
    );
  });
  it("test style when answer isn't checked", () => {
    render(
      <AppProvider>
        <CheckedAnswer color="transparent" answer="answer" />
      </AppProvider>
    );
    expect(screen.getByText(/answer/i)).toHaveStyle(
      `border: 1px solid " #d6dbf5"}`
    );
    expect(screen.getByText(/answer/i)).toHaveStyle(
      `background-color: "transparent" `
    );
  });
});

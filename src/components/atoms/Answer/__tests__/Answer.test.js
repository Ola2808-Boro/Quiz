import "jest-styled-components";
import renderer from "react-test-renderer";
import AppProvider from "providers/AppProvider";
import React from "react";
import { StyledAnswer } from "components/atoms/Answer/Answer.styles";
import Answer from "components/atoms/Answer/Answer";
import { render, screen, rerender } from "@testing-library/react";
const mockfn = jest.fn();
describe("Test answer component", () => {
  it("default style", () => {
    const tree = renderer.create(
      <AppProvider>
        <StyledAnswer />
      </AppProvider>
    );
    expect(tree).toMatchSnapshot();
  });

  it("test style", () => {
    render(
      <AppProvider>
        <Answer isClicked={false} click={mockfn} answer="answer" />
      </AppProvider>
    );
    expect(screen.getByText(/answer/i)).toHaveStyle(
      `border: 1px solid "#d6dbf5"`
    );
    expect(screen.getByText(/answer/i)).toHaveStyle(
      `background-color: "transparent" `
    );
  });
  it("test style after click event", () => {
    render(
      <AppProvider>
        <Answer isClicked={true} click={mockfn} answer="answer" />
      </AppProvider>
    );
    expect(screen.getByText(/answer/i)).toHaveStyle(
      `border: 1px solid ${({ theme }) => theme.colors.borderAnswer}`
    );
    expect(screen.getByText(/answer/i)).toHaveStyle(
      `background-color: "#d6dbf5" `
    );
  });
});

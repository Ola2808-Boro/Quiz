import React from "react";
import "jest-styled-components";
import { Button } from "components/atoms/StartButton/StartButton.styles";
import AppProvider from "providers/AppProvider";
import StartButton from "../StartButton";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
describe("Test start button", () => {
  it("default style", () => {
    const tree = renderer
      .create(
        <AppProvider>
          <Button />
        </AppProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("test button content", () => {
    render(
      <AppProvider>
        <StartButton />
      </AppProvider>
    );
    const button = screen.getByRole("button", { name: /start quiz/i });
  });
});

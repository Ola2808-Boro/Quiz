import "jest-styled-components";
import renderer from "react-test-renderer";
import AppProvider from "providers/AppProvider";
import React from "react";
import { StyledFooter } from "components/atoms/Info/Info.styles";
import Info from "components/atoms/Info/Info";
import { render, screen } from "@testing-library/react";
describe("Test info component", () => {
  it("default style", () => {
    const tree = renderer
      .create(
        <AppProvider>
          <StyledFooter />
        </AppProvider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("test rendering", () => {
    render(
      <AppProvider>
        <Info />
      </AppProvider>
    );
    const infoElment = screen.getByText(/developed by/i);
    expect(infoElment).toBeInTheDocument();
  });
});

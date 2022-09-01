import React from "react";
import "jest-styled-components";
import renderer from "react-test-renderer";
import AppProvider from "providers/AppProvider";
import { StyledTitle } from "components/atoms/Title/Title";
describe("Test style", () => {
  it("default style", () => {
    const tree = renderer
      .create(
        <AppProvider>
          <StyledTitle />
        </AppProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

import React from "react";
import "jest-styled-components";
import renderer from "react-test-renderer";
import AppProvider from "providers/AppProvider";
import { Label } from "components/atoms/Label/Label";
describe("Test style", () => {
  it("default style", () => {
    const tree = renderer
      .create(
        <AppProvider>
          <Label />
        </AppProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

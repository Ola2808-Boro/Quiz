import "jest-styled-components";
import renderer from "react-test-renderer";
import AppProvider from "providers/AppProvider";
import React from "react";
import { Select } from "components/atoms/Select/Select";

describe("Test info component", () => {
  it("default style", () => {
    const tree = renderer
      .create(
        <AppProvider>
          <Select />
        </AppProvider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

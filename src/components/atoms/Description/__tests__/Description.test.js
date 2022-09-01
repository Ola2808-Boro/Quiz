import rerender from "react-test-renderer";
import "jest-styled-components";
import React from "react";
import AppProviders from "providers/AppProvider";
import { Description } from "components/atoms/Description/Description";

describe("Test description component", () => {
  it("default style", () => {
    const tree = rerender
      .create(
        <AppProviders>
          <Description />
        </AppProviders>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

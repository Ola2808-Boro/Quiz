import { screen, render } from "@testing-library/react";
import "jest-styled-components";
import renderer from "react-test-renderer";
import Result from "components/atoms/Result/Result";
import { StyledResultText } from "components/atoms/Result/Result.styles";
import AppProvider from "providers/AppProvider";

describe("Test result info", () => {
  it("default style", () => {
    const tree = renderer
      .create(
        <AppProvider>
          <StyledResultText />
        </AppProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Test show result", async () => {
    render(
      <AppProvider>
        <Result result="5" resultMax={{ result: "10", isMaxResult: false }} />
      </AppProvider>
    );
    expect(screen.getByText(/5/i)).toBeInTheDocument();
  });
});

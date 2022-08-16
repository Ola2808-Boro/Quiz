import React, { useContext } from "react";
import { StartPage } from "./views/StartPage";
import Quiz from "./views/Quiz";
import { optionContext } from "providers/OptionProvider";

function App() {
  const { play } = useContext(optionContext);

  return <>{play ? <Quiz /> : <StartPage />}</>;
}

export default App;

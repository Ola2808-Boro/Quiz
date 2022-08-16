import React from "react";
import ReactDOM from "react-dom/client";
import App from "App";
import AppProviders from "providers/AppProvider";
import { OptionProvider } from "providers/OptionProvider";
import { QuizProvider } from "providers/QuizProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProviders>
      <OptionProvider>
        <QuizProvider>
          <App />
        </QuizProvider>
      </OptionProvider>
    </AppProviders>
  </React.StrictMode>
);

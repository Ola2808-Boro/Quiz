import React from "react";
import MainTemplate from "components/templates/MainTemplate/MainTemplate";
import Header from "components/organisms/Header/Header";
import Options from "components/organisms/Options/Options";

export const StartPage = () => {
  return (
    <MainTemplate>
      <Header />
      <Options />
    </MainTemplate>
  );
};

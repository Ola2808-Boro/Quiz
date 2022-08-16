import styled from "styled-components";
import { device } from "helpers/breakpoints";
export const QuestionSection = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AnswerSection = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media ${device.mobileS} {
    justify-content: center;
    flex-wrap: wrap;
  }

  @media ${device.laptop} {
    flex-wrap: wrap;
    justify-content: flex-start;
  }
`;
export const ImgCheck = styled.img`
  border: none;
  width: 20px;

  @media ${device.mobileS} {
    width: 35px;
  }

  @media ${device.tablet} {
    width: 45px;
  }
  @media ${device.laptop} {
    width: 55px;
  }
`;

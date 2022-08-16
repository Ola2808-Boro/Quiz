import styled from "styled-components";
import { device } from "helpers/breakpoints";
export const StyledAnswer = styled.div`
  ${(props) => {
    if (props.isClicked) {
      return `
      
      border: 1px solid ${({ theme }) => theme.colors.borderAnswer};
   
    `;
    } else {
      return `
      border: 1px solid #d6dbf5;
   
    `;
    }
  }}
  background-color: ${(props) => (props.isClicked ? "#d6dbf5" : "transparent")};
  padding: 0.3rem 0.5rem;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.s};
  margin-right: 0.5rem;
  border-radius: 10px;
  text-align: center;

  @media ${device.mobileS} {
    margin: 0.25rem;
    text-align: center;
    font-size: ${({ theme }) => theme.fontSize.m};
  }
  @media ${device.mobileM} {
    font-size: ${({ theme }) => theme.fontSize.ml};
  }
  @media ${device.mobileL} {
    font-size: ${({ theme }) => theme.fontSize.ml};
  }
  @media ${device.tablet} {
    font-size: ${({ theme }) => theme.fontSize.mediumxl};
  }
  @media ${device.laptop} {
    margin: 1rem 1rem 0.5rem 0rem;
    padding: 0.5rem 0.7rem;
  }

  @media ${device.desktop} {
    font-size: ${({ theme }) => theme.fontSize.xl};
    padding: 0.6rem 0.8rem;
  }
`;

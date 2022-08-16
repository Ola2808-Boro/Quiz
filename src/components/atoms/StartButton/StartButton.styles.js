import styled from "styled-components";
import { device } from "helpers/breakpoints";

export const Button = styled.button`
  font-size: ${({ theme }) => theme.fontSize.l};
  background-color: ${({ theme }) => theme.colors.buttonBg};
  letter-spacing: 1px;
  border-radius: 10px;
  color: white;
  border: none;
  padding: 10px 20px;
  width: 50%;

  @media ${device.mobileS} {
    width: 70%;
  }

  @media ${device.mobileL} {
    font-size: ${({ theme }) => theme.fontSize.mediumxl};
  }
  @media ${device.tablet} {
    font-size: ${({ theme }) => theme.fontSize.xxl};
    width: 50%;
  }
  @media ${device.laptop} {
    width: 60%;
    font-size: ${({ theme }) => theme.fontSize.xxxl};
  }
  @media ${device.laptopL} {
    width: 40%;
  }
  @media ${device.desktop} {
    width: 30%;
    font-size: ${({ theme }) => theme.fontSize.grand};
  }
`;

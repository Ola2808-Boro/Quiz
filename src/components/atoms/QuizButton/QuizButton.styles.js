import styled from "styled-components";
import { device } from "helpers/breakpoints";

export const StyledButton = styled.button`
  margin-top: 1rem;
  font-size: ${({ theme }) => theme.fontSize.l};
  background-color: ${({ theme }) => theme.colors.buttonBg};
  letter-spacing: 1px;
  border-radius: 10px;
  color: white;
  border: none;
  padding: 10px 20px;
  width: 30%;
  margin-bottom: 1rem;
  z-index: 1;
  @media ${device.mobileS} {
    width: 70%;
  }

  @media ${device.tablet} {
    width: 50%;

    font-size: ${({ theme }) => theme.fontSize.xl};
  }
  @media ${device.laptop} {
    width: 50%;

    font-size: ${({ theme }) => theme.fontSize.xxl};
  }
  @media ${device.laptopL} {
    width: 30%;
  }
  @media ${device.desktop} {
    width: 20%;
    font-size: ${({ theme }) => theme.fontSize.grand};
  }
`;

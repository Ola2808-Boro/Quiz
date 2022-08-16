import { device } from "helpers/breakpoints";
import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;

  p {
    font-size: ${({ theme }) => theme.fontSize.m};

    @media ${device.mobileM} {
      font-size: ${({ theme }) => theme.fontSize.ml};
    }
  }
  a {
    text-decoration: none;
    letter-spacing: 1px;
  }
`;

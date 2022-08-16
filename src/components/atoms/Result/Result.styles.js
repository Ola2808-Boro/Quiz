import styled from "styled-components";
import { device } from "helpers/breakpoints";
export const StyledResultText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.text};
  letter-spacing: 2px;
  padding: 1rem;
  z-index: 1;
  @media ${device.mobileS} {
    font-size: ${({ theme }) => theme.fontSize.l};
  }

  @media ${device.mobileL} {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
  @media ${device.tablet} {
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }
  @media ${device.laptop} {
    font-size: ${({ theme }) => theme.fontSize.xxxl};
  }

  @media ${device.desktop} {
    font-size: ${({ theme }) => theme.fontSize.xxxl};
  }
`;

import styled from "styled-components";
import { device } from "helpers/breakpoints";

export const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.text};
  letter-spacing: 1px;

  @media ${device.mobileS} {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
  @media ${device.mobileM} {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
  @media ${device.mobileL} {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
  @media ${device.tablet} {
    font-size: ${({ theme }) => theme.fontSize.xxxl};
  }
  @media ${device.laptop} {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
  @media ${device.laptopL} {
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }
`;

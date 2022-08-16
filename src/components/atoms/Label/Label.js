import styled from "styled-components";
import { device } from "helpers/breakpoints";

export const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.text};
  letter-spacing: 1px;
  font-weight: bold;

  @media ${device.mobileS} {
    font-size: ${({ theme }) => theme.fontSize.ml};
  }
  @media ${device.mobileM} {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
  @media ${device.mobileL} {
    font-size: ${({ theme }) => theme.fontSize.mediumxl};
  }
  @media ${device.tablet} {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
  @media ${device.laptop} {
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }
  @media ${device.laptopL} {
    font-size: ${({ theme }) => theme.fontSize.xxxl};
  }
`;

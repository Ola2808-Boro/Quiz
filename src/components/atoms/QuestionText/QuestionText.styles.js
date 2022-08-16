import styled from "styled-components";
import { device } from "helpers/breakpoints";
export const StyledQuestion = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.ml};
  padding-bottom: 0.7rem;

  @media ${device.mobileS} {
    font-size: ${({ theme }) => theme.fontSize.l};
    padding-bottom: 0.5rem;
    word-break: break-word;
  }
  @media ${device.tablet} {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
  @media ${device.laptop} {
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }
  @media ${device.desktop} {
    font-size: ${({ theme }) => theme.fontSize.xxxl};
  }
`;

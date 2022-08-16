import styled from "styled-components";
import { device } from "helpers/breakpoints";
export const StyledTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.text};
  letter-spacing: 2px;
  padding: 1rem;

  @media ${device.mobileS} {
    font-size: ${({ theme }) => theme.fontSize.xxxl};
  }

  @media ${device.mobileL} {
    font-size: ${({ theme }) => theme.fontSize.xxxl};
  }
  @media ${device.tablet} {
    font-size: ${({ theme }) => theme.fontSize.lgrand};
  }
  @media ${device.laptop} {
    font-size: ${({ theme }) => theme.fontSize.xlgrand};
  }
  @media ${device.desktop} {
    font-size: ${({ theme }) => theme.fontSize.huge};
  }
`;

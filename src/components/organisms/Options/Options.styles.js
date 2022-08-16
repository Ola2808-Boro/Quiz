import styled from "styled-components";
import { device } from "helpers/breakpoints";
export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  z-index: 1;
  width: 90%;

  @media ${device.mobileS} {
    width: 100%;
  }

  @media ${device.mobileL} {
    width: 95%;
  }
  @media ${device.tablet} {
    width: 85%;
  }
  @media ${device.laptop} {
    padding: 2.5rem 1rem;
    width: 60%;
  }
  @media ${device.laptopL} {
    width: 40%;
  }
  @media ${device.desktop} {
    width: 40%;
  }
`;

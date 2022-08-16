import styled from "styled-components";
import { device } from "helpers/breakpoints";

export const StyledSelectOption = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1.7rem 2rem;

  @media ${device.mobileS} {
    padding: 1.3rem 0rem;
  }
  @media ${device.mobileM} {
    padding: 1.6rem 0.5rem;
  }
  @media ${device.mobileL} {
    padding: 1.6rem 0.7rem;
  }
  @media ${device.tablet} {
    padding: 2rem 0.9rem;
  }
  @media ${device.laptop} {
    padding: 2rem 0.9rem;
  }
  @media ${device.laptopL} {
  }
  @media ${device.desktop} {
  }
`;

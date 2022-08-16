import styled from "styled-components";
import { device } from "helpers/breakpoints";
export const StyledSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  padding: 1.4rem 2rem;
  border-bottom: 2px solid #dbdef0;
  z-index: 1;

  @media ${device.mobileS} {
    padding: 0.8rem 1rem;
  }
`;

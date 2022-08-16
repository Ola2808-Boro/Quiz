import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.backgroundColor};

  display: flex;
  flex-direction: column;
  ${(props) => {
    if (props.isLoading) {
      return `
        justify-content:center;
        `;
    } else {
      if (props.isPlay) {
        return `
        justify-content:flex-start;
        `;
      } else {
        return `
        justify-content:center;
        `;
      }
    }
  }}
  align-items: center;

  position: relative;
`;
export const ImgTop = styled.img`
  position: absolute;
  top: 0;
  right: 0;
`;
export const ImgBottom = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
`;

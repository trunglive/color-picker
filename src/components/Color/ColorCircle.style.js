import styled, { css } from "styled-components";

export const ColorCircleWrapper = styled.div`
  ${(props) =>
    !props.hideBorder &&
    css`
      padding: 3px;
      border: ${(props) =>
        `1px solid ${
          props.currentSelectedColor === props.backgroundColor
            ? props.currentSelectedColor
            : "#fff"
        }`};
      border-radius: 50%;
      cursor: pointer;
      transition: all 0.2s ease-out;
    `}
`;

export const ColorCircleInner = styled.div`
  position: relative;
  width: 32px;
  height: 32px;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 50%;
  cursor: pointer;

  ${(props) =>
    props.showQuestionMark &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
    `}
`;

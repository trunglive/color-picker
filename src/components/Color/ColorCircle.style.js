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
    `}
`;

export const ColorCircleInner = styled.div`
  background-color: ${(props) => props.backgroundColor};
  width: 32px;
  height: 32px;
  border-radius: 50%;
  cursor: pointer;
`;

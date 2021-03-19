import styled, { css } from "styled-components";

// w-10 h-10 rounded-full
export const ColorCircleWrapper = styled.div`
  background-color: ${(props) => props.backgroundColor};
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

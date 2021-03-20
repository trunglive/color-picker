import styled from "styled-components";

export const ColorCircleWrapper = styled.div`
  background-color: ${(props) => props.backgroundColor};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
`;

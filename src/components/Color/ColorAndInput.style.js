import styled from "styled-components";

export const ColorAndInputWrapper = styled.div`
  display: flex;
  align-items: center;

  > div:not(:last-child) {
    margin-right: 24px;
  }
`;

export const HexInputWrapper = styled.div`
  color: #646464;

  > span {
    padding-right: 8px;
  }

  > input {
    padding: 8px 0;
    color: #929292;
    border: 0;
    border-bottom: 1px dashed #aaaab5;
    outline: none;
  }
`;

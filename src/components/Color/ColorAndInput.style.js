import styled, { css } from "styled-components";

// className="flex items-center space-x-6"
export const ColorAndInputWrapper = styled.div`
  display: flex;
  align-items: center;

  > div:not(:last-child) {
    margin-right: 24px;
  }
`;

// className="text-gray-500 pr-2"
// className="py-2 border-b border-dashed border-gray-600 outline-none"
export const HexInputWrapper = styled.div`
  color: #646464;

  > span {
    padding-right: 8px;
  }

  > input {
    padding: 8px 0;
    border: 0;
    border-bottom: 1px dashed #aaaab5;
    outline: none;
  }
`;

import styled from "styled-components";
import themeGet from "@styled-system/theme-get";

export const ColorAndInputWrapper = styled.div`
  display: flex;
  align-items: center;

  > div:not(:last-child) {
    margin-right: 24px;
  }
`;

export const HexInputWrapper = styled.div`
  > span {
    padding-right: 8px;
  }

  > input {
    padding: 8px 0;
    color: ${themeGet("text.1")};
    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-bottom: ${themeGet("border.dashed.0")};
    outline: none;

    ::placeholder {
      color: ${themeGet("text.1")};
      opacity: 40%;
    }
  }
`;

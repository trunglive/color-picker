import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

export const ColorPaletteCircleGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px;
  border-bottom: ${themeGet("border.solid.0")};

  .color-palette-header {
    padding: 12px;
    color: ${themeGet("text.0")};
  }

  > div:not(:last-child) {
    margin-bottom: 8px;
  }

  .color-palette-all-rows {
    padding: 8px;

    > div:not(:last-child) {
      margin-bottom: 12px;
    }
  }

  .color-palette-single-row {
    display: flex;

    > div:not(:last-child) {
      margin-right: 8px;
    }
  }
`;

export const ColorPaletteInput = styled.div`
  padding: 18px 24px;
`;

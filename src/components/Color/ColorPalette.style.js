import styled from "styled-components";

export const ColorPaletteTooltip = styled.div`
  padding: 5px 9px;
  font-size: 11px;
  color: #fff;
  //background-color: #fff;
`;

export const ColorPaletteCircleGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px;
  border-bottom: 1px solid #f2f2f2;

  .color-palette-header {
    padding: 12px;
    color: #706f6f;
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

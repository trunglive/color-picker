import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const ColorPaletteWrapper = styled.div`
  border: 1px solid #f2f2f2;
  border-radius: 2px;
  box-shadow: 0 5px 16px 0 rgb(0 0 0 / 6%);

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

export const ColorPaletteSelect = styled.div`
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
`;

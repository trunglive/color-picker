import styled, { css } from "styled-components";

export const Container = styled.div`
  border-radius: ${(props) => (props.radius ? props.radius : 3)}px;
  ${(props) =>
    props.showPopup &&
    css`
      box-shadow: 0 2px 20px rgba(0, 0, 0, 0.16);
      position: absolute;
      width: 100%;
      z-index: 999;
      min-width: 300px;
      padding: 30px;
      background-color: #ffffff;
    `}
`;

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

// border border-gray-100 shadow-sm rounded
export const ColorPaletteWrapper = styled.div`
  border: 1px solid #f2f2f2;
  border-radius: 2px;

  .color-palette-all-rows {
    > div:not(:last-child) {
      margin-bottom: 12px;
    }
  }

  .color-palette-single-row {
    display: flex;

    > div:not(:last-child) {
      margin-right: 12px;
    }
  }
`;

// border-b border-gray-100 p-4 space-y-3 flex flex-col items-center
export const ColorPaletteSelect = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px;
  border-bottom: 1px solid #f2f2f2;

  .color-palette-header {
    padding: 12px;
    color: #646464;
  }

  > div:not(:last-child) {
    margin-bottom: 12px;
  }
`;

import React from "react";

import ColorCircle from "./ColorCircle";
import { ColorPaletteSelect, ColorPaletteWrapper } from "./ColorPalette.style";

const colorOptions = {
  row1: [
    { label: "", value: "#e9896a" },
    { label: "", value: "#387c6d" },
    { label: "", value: "#693c72" },
    { label: "", value: "#4a47a3" },
    { label: "", value: "#314e52" },
  ],
  row2: [
    { label: "", value: "#eb596e" },
    { label: "", value: "#e4e3e3" },
    { label: "", value: "#d8ac9c" },
    { label: "", value: "#ffc93c" },
    { label: "", value: "#389393" },
  ],
  row3: [
    { label: "", value: "#be79df" },
    { label: "", value: "#900d0d" },
    { label: "", value: "#222831" },
    { label: "", value: "#1a508b" },
    { label: "", value: "#de7119" },
  ],
};

function ColorPalette(props) {
  const { currentColorHex } = props;

  return (
    <ColorPaletteWrapper>
      <ColorPaletteSelect>
        <div className="color-palette-header">Color swatch</div>
        <div className="color-palette-all-rows">
          {Object.keys(colorOptions).map((row) => (
            <div className="color-palette-single-row" key={row}>
              {colorOptions[row].map((color) => (
                <ColorCircle
                  key={color.value}
                  backgroundColor={color.value}
                  currentSelectedColor={currentColorHex}
                />
              ))}
            </div>
          ))}
        </div>
      </ColorPaletteSelect>
      <div style={{ padding: "18px 14px" }}>{props.children}</div>
    </ColorPaletteWrapper>
  );
}

export default ColorPalette;

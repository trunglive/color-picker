import React from "react";
import ColorCircle from "./ColorCircle";
import ColorAndInput from "./ColorAndInput";
import { ColorPaletteSelect, ColorPaletteWrapper } from "./ColorPalette.style";

const colorOptions = [
  [
    { label: "", value: "#e9896a" },
    { label: "", value: "#387c6d" },
    { label: "", value: "#693c72" },
    { label: "", value: "#4a47a3" },
    { label: "", value: "#314e52" },
  ],
  [
    { label: "", value: "#eb596e" },
    { label: "", value: "#e4e3e3" },
    { label: "", value: "#d8ac9c" },
    { label: "", value: "#ffc93c" },
    { label: "", value: "#389393" },
  ],
  [
    { label: "", value: "#be79df" },
    { label: "", value: "#900d0d" },
    { label: "", value: "#222831" },
    { label: "", value: "#1a508b" },
    { label: "", value: "#de7119" },
  ],
];

function ColorPalette(props) {
  return (
    <ColorPaletteWrapper>
      <ColorPaletteSelect>
        <div className="color-palette-header">Change tag color</div>
        <div className="color-palette-all-rows">
          {colorOptions.map((colorGroup, index) => (
            <div className="color-palette-single-row" key={index}>
              {colorGroup.map((color) => (
                <ColorCircle backgroundColor={color.value} key={color.value} />
              ))}
            </div>
          ))}
        </div>
      </ColorPaletteSelect>
      <div style={{ padding: 22 }}>
        <ColorAndInput />
      </div>
    </ColorPaletteWrapper>
  );
}

export default ColorPalette;

import React from "react";

import ColorCircle from "./ColorCircle";
import ViewWithPopup from "../ViewWithPopup/ViewWithPopup";
import { ColorPaletteSelect, ColorPaletteWrapper } from "./ColorPalette.style";

const colorOptions = {
  row1: [
    { label: "", value: "#e9896a" },
    { label: "", value: "#387c6d" },
    { label: "", value: "#693c72" },
    { label: "", value: "#4a47a3" },
    { label: "", value: "#78c4d4" },
  ],
  row2: [
    { label: "", value: "#eb596e" },
    { label: "", value: "#f0e5d8" },
    { label: "", value: "#d8ac9c" },
    { label: "", value: "#ffc93c" },
    { label: "", value: "#389393" },
  ],
  row3: [
    { label: "", value: "#be79df" },
    { label: "", value: "#900d0d" },
    { label: "", value: "#222831" },
    { label: "", value: "#1a508b" },
    { label: "", value: "#9e7540" },
  ],
};

function ColorPalette(props) {
  const {
    currentColorHex,
    onColorClick,
    currentColorHover,
    onColorHover,
  } = props;

  return (
    <ColorPaletteWrapper>
      <ColorPaletteSelect>
        <div className="color-palette-header">Color swatch</div>
        <div className="color-palette-all-rows">
          {Object.keys(colorOptions).map((row) => (
            <div className="color-palette-single-row" key={row}>
              {colorOptions[row].map((color) => (
                <ViewWithPopup
                  key={color.value}
                  noView={true}
                  view={
                    <div
                      onClick={() => onColorClick(color.value)}
                      onMouseEnter={() => onColorHover(color.value)}
                      onMouseLeave={() => onColorHover(null)}
                    >
                      <ColorCircle
                        backgroundColor={color.value}
                        currentSelectedColor={currentColorHex}
                      />
                    </div>
                  }
                  showPopupOnHover
                  popup={
                    (currentColorHex === color.value ||
                      currentColorHover === color.value) && (
                      <div
                        style={{
                          fontSize: 12,
                          color: "#fff",
                          backgroundColor: "#222831",
                          padding: "4px 8px",
                          boxShadow: "0 15px 26px 0 rgb(0 0 0 / 16%)",
                        }}
                      >
                        {color.value}
                      </div>
                    )
                  }
                  popupPosition="left"
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

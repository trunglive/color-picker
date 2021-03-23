import React from "react";

import ViewWithPopup from "../ViewWithPopup/ViewWithPopup";
import ColorCircle from "./ColorCircle";
import {
  ColorPaletteWrapper,
  ColorPaletteCircleGroup,
  ColorPaletteTooltip,
  ColorPaletteInput,
} from "./ColorPalette.style";

import { colorOptions } from "../../data/main";

function ColorPalette(props) {
  const { color, onChange } = props;

  return (
    <ColorPaletteWrapper>
      <ColorPaletteCircleGroup>
        <div className="color-palette-header">Select color</div>
        <div className="color-palette-all-rows">
          {Object.keys(colorOptions).map((row) => (
            <div className="color-palette-single-row" key={row}>
              {colorOptions[row].map((option) => (
                <ViewWithPopup
                  key={option.value}
                  noView={true}
                  view={
                    <div
                      onClick={() => onChange({ selected: option.value })}
                      onMouseEnter={() => onChange({ hovered: option.value })}
                      onMouseLeave={() => onChange({ hovered: null })}
                    >
                      <ColorCircle
                        color={color}
                        backgroundColor={option.value}
                      />
                    </div>
                  }
                  showPopupOnHover
                  popup={
                    (color.selected === option.value ||
                      color.hovered === option.value) && (
                      <ColorPaletteTooltip>{option.value}</ColorPaletteTooltip>
                    )
                  }
                  popupBackground="dark"
                />
              ))}
            </div>
          ))}
        </div>
      </ColorPaletteCircleGroup>
      <ColorPaletteInput>{props.children}</ColorPaletteInput>
    </ColorPaletteWrapper>
  );
}

export default ColorPalette;

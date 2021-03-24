import React, { Fragment } from "react";

import ColorCircle from "./ColorCircle";
import {
  ColorPaletteCircleGroup,
  ColorPaletteInput,
} from "./ColorPalette.style";

import { colorOptions } from "../../data/main";
import Tooltip from "../../base/Tooltip/Tooltip";

function ColorPalette(props) {
  const { color, onChange } = props;

  return (
    <Fragment>
      <ColorPaletteCircleGroup>
        <div className="color-palette-header">Select color</div>
        <div className="color-palette-all-rows">
          {Object.keys(colorOptions).map((row) => (
            <div className="color-palette-single-row" key={row}>
              {colorOptions[row].map((option) => (
                <Tooltip
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
                      color.hovered === option.value) &&
                    option.value
                  }
                />
              ))}
            </div>
          ))}
        </div>
      </ColorPaletteCircleGroup>
      <ColorPaletteInput>{props.children}</ColorPaletteInput>
    </Fragment>
  );
}

export default ColorPalette;

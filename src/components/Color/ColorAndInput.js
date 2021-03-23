import React from "react";

import ColorCircle from "./ColorCircle";
import { ColorAndInputWrapper, HexInputWrapper } from "./ColorAndInput.style";
import { isColor } from "../../utils/color";

function ColorAndInput(props) {
  const { color, onChange } = props;

  return (
    <ColorAndInputWrapper>
      <ColorCircle
        color={color}
        backgroundColor={isColor(color.selected) ? color.selected : "#e4e3e3"}
        showQuestionMark={!isColor(color.selected)}
        hideBorder
      />
      <HexInputWrapper>
        <input
          type="text"
          autoComplete="off"
          value={color.selected}
          onChange={(event) => onChange({ selected: event.target.value })}
          placeholder="input hex color"
          disabled={false}
        />
      </HexInputWrapper>
    </ColorAndInputWrapper>
  );
}

export default ColorAndInput;

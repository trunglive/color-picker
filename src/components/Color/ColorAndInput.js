import React from "react";

import ColorCircle from "./ColorCircle";
import { ColorAndInputWrapper, HexInputWrapper } from "./ColorAndInput.style";

function ColorAndInput(props) {
  const { color, onChange } = props;

  return (
    <ColorAndInputWrapper>
      <ColorCircle
        color={color}
        backgroundColor={color.selected || "387c6d"}
        hideBorder
      />
      <HexInputWrapper>
        <input
          type="text"
          autoComplete="off"
          value={color.selected}
          onChange={(event) => onChange({ selected: event.target.value })}
          placeholder=""
          disabled={false}
        />
      </HexInputWrapper>
    </ColorAndInputWrapper>
  );
}

export default ColorAndInput;

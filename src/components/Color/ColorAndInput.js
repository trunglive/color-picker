import React from "react";
import ColorCircle from "./ColorCircle";
import { ColorAndInputWrapper, HexInputWrapper } from "./ColorAndInput.style";

function ColorAndInput(props) {
  return (
    <ColorAndInputWrapper>
      <ColorCircle backgroundColor="#314e52" key="#314e52" />
      <HexInputWrapper>
        <span>#</span>
        <input
          type="text"
          autoComplete="off"
          // value=""
          placeholder=""
          disabled={false}
        />
      </HexInputWrapper>
    </ColorAndInputWrapper>
  );
}

export default ColorAndInput;

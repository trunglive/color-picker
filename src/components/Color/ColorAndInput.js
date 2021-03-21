import React from "react";

import ColorCircle from "./ColorCircle";
import { ColorAndInputWrapper, HexInputWrapper } from "./ColorAndInput.style";

function ColorAndInput(props) {
  const { currentColorHex, handleOnChange } = props;

  return (
    <ColorAndInputWrapper>
      <ColorCircle backgroundColor={currentColorHex || "387c6d"} hideBorder />
      <HexInputWrapper>
        {/*<span>#</span>*/}
        <input
          type="text"
          autoComplete="off"
          value={currentColorHex}
          onChange={handleOnChange}
          placeholder=""
          disabled={false}
        />
      </HexInputWrapper>
    </ColorAndInputWrapper>
  );
}

export default ColorAndInput;

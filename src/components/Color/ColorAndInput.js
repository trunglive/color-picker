import React from "react";
import ColorCircle from "./ColorCircle";
import useColorAndInput from "./useColorAndInput";
import { ColorAndInputWrapper, HexInputWrapper } from "./ColorAndInput.style";

function ColorAndInput(props) {
  const { colorHex, handleOnChange } = useColorAndInput();

  return (
    <ColorAndInputWrapper>
      <ColorCircle
        backgroundColor={`#${colorHex || "387c6d"}`}
        key={colorHex}
      />
      <HexInputWrapper>
        <span>#</span>
        <input
          type="text"
          autoComplete="off"
          value={colorHex}
          onChange={handleOnChange}
          placeholder=""
          disabled={false}
        />
      </HexInputWrapper>
    </ColorAndInputWrapper>
  );
}

export default ColorAndInput;

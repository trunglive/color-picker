import React from "react";

import ViewWithPopup from "../ViewWithPopup/ViewWithPopup";
import ColorCircle from "./ColorCircle";
import ColorPalette from "./ColorPalette";
import ColorAndInput from "./ColorAndInput";
import useColorAndInput from "./useColorAndInput";

function TagColor(props) {
  const { colorHex, handleOnChange } = useColorAndInput();

  return (
    <div style={{ marginTop: 150, marginLeft: 300 }}>
      <ViewWithPopup
        key={400}
        noView={true}
        view={<ColorCircle backgroundColor={`#${colorHex}`} />}
        popup={
          <ColorPalette>
            <ColorAndInput
              key="dope"
              colorHex={colorHex}
              handleOnChange={handleOnChange}
            />
          </ColorPalette>
        }
      />
    </div>
  );
}

export default TagColor;

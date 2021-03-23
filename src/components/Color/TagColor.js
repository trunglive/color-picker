import React from "react";

import ViewWithPopup from "../ViewWithPopup/ViewWithPopup";
import ColorCircle from "./ColorCircle";
import ColorPalette from "./ColorPalette";
import ColorAndInput from "./ColorAndInput";
import useColorAndInput from "./useColorAndInput";

function TagColor() {
  const { color, onChange } = useColorAndInput();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh",
      }}
    >
      <ViewWithPopup
        key={400}
        noView={true}
        view={
          <ColorCircle
            color={color}
            backgroundColor={color.selected}
            hideBorder
          />
        }
        popup={
          <ColorPalette color={color} onChange={onChange}>
            <ColorAndInput color={color} onChange={onChange} />
          </ColorPalette>
        }
      />
    </div>
  );
}

export default TagColor;

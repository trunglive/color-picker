import React from "react";
import themeGet from "@styled-system/theme-get";

import ViewWithPopup from "../../base/ViewWithPopup/ViewWithPopup";
import ColorCircle from "./ColorCircle";
import ColorPalette from "./ColorPalette";
import ColorAndInput from "./ColorAndInput";
import useColorAndInput from "./useColorAndInput";
import { isColor } from "../../utils/color";

function TagColor() {
  const { color, onChange } = useColorAndInput();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        paddingTop: 200,
      }}
    >
      <ViewWithPopup
        key={400}
        noView={true}
        view={
          <ColorCircle
            color={color}
            backgroundColor={
              isColor(color.selected) ? color.selected : themeGet("bgColor.1")
            }
            showQuestionMark={!isColor(color.selected)}
            hideBorder
            mainCircle
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

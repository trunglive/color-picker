import React from "react";

import ViewWithPopup from "../ViewWithPopup/ViewWithPopup";
import ColorCircle from "./ColorCircle";
import ColorPalette from "./ColorPalette";

function TagColor(props) {
  return (
    <div style={{ marginTop: 150, marginLeft: 300 }}>
      <ViewWithPopup
        noView
        view={<ColorCircle backgroundColor="#387c6d" />}
        popup={<ColorPalette />}
      />
    </div>
  );
}

export default TagColor;

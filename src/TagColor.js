import React from "react";
import ColorCircle from "./ColorCircle";
import ColorPalette from "./ColorPalette";

function TagColor(props) {
  return (
    <div>
      <ColorCircle backgroundColor="#4a47a3" />
      <ColorPalette />
    </div>
  );
}

export default TagColor;

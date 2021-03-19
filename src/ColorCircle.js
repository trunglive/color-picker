import React from "react";

function ColorCircle(props) {
  return (
    <div
      className="w-10 h-10 rounded-full"
      style={{ backgroundColor: props.backgroundColor }}
    />
  );
}

export default ColorCircle;

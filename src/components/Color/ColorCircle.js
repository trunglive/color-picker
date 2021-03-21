import React from "react";

import { ColorCircleWrapper } from "./ColorCircle.style";

function ColorCircle(props) {
  return <ColorCircleWrapper backgroundColor={props.backgroundColor} />;
}

export default ColorCircle;

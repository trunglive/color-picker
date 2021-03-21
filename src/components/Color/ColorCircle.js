import React from "react";

import { ColorCircleWrapper, ColorCircleInner } from "./ColorCircle.style";

function ColorCircle(props) {
  const { backgroundColor, currentSelectedColor, hideBorder } = props;

  return (
    <ColorCircleWrapper
      backgroundColor={backgroundColor}
      currentSelectedColor={currentSelectedColor}
      hideBorder={hideBorder}
    >
      <ColorCircleInner backgroundColor={backgroundColor} />
    </ColorCircleWrapper>
  );
}

export default ColorCircle;

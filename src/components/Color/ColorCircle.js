import React from "react";

import { ColorCircleWrapper, ColorCircleInner } from "./ColorCircle.style";

function ColorCircle(props) {
  const { color, backgroundColor, hideBorder } = props;

  return (
    <ColorCircleWrapper
      currentSelectedColor={color.selected}
      backgroundColor={backgroundColor}
      hideBorder={hideBorder}
    >
      <ColorCircleInner backgroundColor={backgroundColor} />
    </ColorCircleWrapper>
  );
}

export default ColorCircle;

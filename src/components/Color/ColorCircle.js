import React from "react";

import ChevronDown from "../../assets/icon/ChevronDown";
import { ColorCircleWrapper, ColorCircleInner } from "./ColorCircle.style";
import { isColor } from "../../utils/color";

function ColorCircle(props) {
  const {
    color,
    backgroundColor,
    showQuestionMark,
    hideBorder,
    showPopup,
    mainCircle,
  } = props;
  const showUpArrow = showPopup && isColor(color.selected);
  const showDownArrow = mainCircle && !showPopup && isColor(color.selected);

  return (
    <ColorCircleWrapper
      currentSelectedColor={color.selected}
      backgroundColor={backgroundColor}
      hideBorder={hideBorder}
    >
      <ColorCircleInner
        backgroundColor={backgroundColor}
        showQuestionMark={showQuestionMark}
      >
        {showQuestionMark && "?"}
        {showUpArrow && <ChevronDown reversed />}
        {showDownArrow && <ChevronDown />}
      </ColorCircleInner>
    </ColorCircleWrapper>
  );
}

export default ColorCircle;

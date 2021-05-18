import React from "react";

import ChevronDown from "../../assets/icon/ChevronDown";
import { ColorCircleWrapper, ColorCircleInner } from "./ColorCircle.style";

function ColorCircle(props) {
  const {
    color,
    backgroundColor,
    showQuestionMark,
    hideBorder,
    showPopup,
    mainCircle,
  } = props;
  const showUpArrow = showPopup && color.selected;
  const showDownArrow = mainCircle && !showPopup && color.selected;

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

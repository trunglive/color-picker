import React, { useState, useRef, useEffect } from "react";

import { Wrapper, Container } from "./Tooltip.style";
import { useOnClickOutside } from "../ViewWithPopup/useOnClickOutside";

export default function Tooltip({
  view,
  tooltip,
  tooltipPosition,
  showTooltipOnHover,
  noView = false,
  style,
  className,
}) {
  const [showTooltip, setShowTooltip] = useState(false);
  const wrapperRef = useRef();
  useOnClickOutside(wrapperRef, () => setShowTooltip(false));

  const [tooltipHandlerWidth, setTooltipHandlerWidth] = useState(0);
  const tooltipHandlerRef = useRef(null);

  useEffect(() => {
    const width = tooltipHandlerRef.current
      ? tooltipHandlerRef.current.offsetWidth
      : 0;
    setTooltipHandlerWidth(width);
  }, []);

  // Add all classes to an array
  const addAllClasses = ["view_with__popup"];
  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  return (
    <Wrapper
      className={`${addAllClasses.join(" ")} ${showTooltip ? "active" : ""}`}
      ref={wrapperRef}
    >
      {view && noView && (
        <div
          ref={tooltipHandlerRef}
          className="popup_handler"
          onClick={() => setShowTooltip(!showTooltip)}
          onMouseEnter={() => showTooltipOnHover && setShowTooltip(true)}
        >
          {view}
        </div>
      )}
      <Container
        className="popup_container"
        showTooltip={showTooltip}
        tooltipPosition={tooltipPosition}
        tooltipHandlerWidth={tooltipHandlerWidth}
        onClick={() => setShowTooltip(true)}
        style={style}
      >
        {view && !noView}
        {showTooltip && tooltip && (
          <div className="tooltip">
            {tooltip}
            <div className="tooltip_arrow" />
          </div>
        )}
      </Container>
    </Wrapper>
  );
}

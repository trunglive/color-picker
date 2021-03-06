import React, { useState, useRef, useEffect } from "react";

import { Wrapper, Container } from "./ViewWithPopup.style";
import { useOnClickOutside } from "./useOnClickOutside";

export default function ViewWithPopup({
  view,
  popup,
  popupPosition,
  showPopupOnHover,
  noView = false,
  style,
  className,
  enableTooltip,
}) {
  const [showPopup, setShowPopup] = useState(true);
  const wrapperRef = useRef();
  useOnClickOutside(wrapperRef, () => setShowPopup(false));

  const [popupHandlerWidth, setPopupHandlerWidth] = useState(0);
  const popupHandlerRef = useRef(null);

  useEffect(() => {
    const width = popupHandlerRef.current
      ? popupHandlerRef.current?.offsetWidth
      : 0;
    setPopupHandlerWidth(width);
  }, []);

  // add all classes to an array
  const addAllClasses = ["view_with__popup"];
  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  return (
    <Wrapper
      className={`${addAllClasses.join(" ")} ${showPopup ? "active" : ""}`}
      ref={wrapperRef}
    >
      {view && noView && (
        <div
          ref={popupHandlerRef}
          className="popup_handler"
          onClick={() => setShowPopup(!showPopup)}
          onMouseEnter={() => showPopupOnHover && setShowPopup(true)}
        >
          {React.cloneElement(view, { showPopup })}
        </div>
      )}
      <Container
        className="popup_container"
        showPopup={showPopup}
        popupPosition={popupPosition}
        popupHandlerWidth={popupHandlerWidth}
        onClick={() => setShowPopup(true)}
        style={style}
        enableTooltip={enableTooltip}
      >
        {view && !noView}
        {showPopup && popup && (
          <div className={enableTooltip ? "tooltip" : "popup"}>
            {popup}
            {popup && (
              <div
                className={enableTooltip ? "tooltip_arrow" : "popup_arrow"}
              />
            )}
          </div>
        )}
      </Container>
    </Wrapper>
  );
}

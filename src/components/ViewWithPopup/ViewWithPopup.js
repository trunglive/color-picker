import React, { useState, useRef } from "react";

import { Wrapper, Container } from "./ViewWithPopup.style";
import { useOnClickOutside } from "./useOnClickOutside";

export default function ViewWithPopup({
  view,
  popup,
  popupPosition,
  noView = false,
  style,
  className,
}) {
  const [showPopup, setShowPopup] = useState(false);
  const ref = useRef();
  useOnClickOutside(ref, () => setShowPopup(false));
  // Add all classes to an array
  const addAllClasses = ["view_with__popup"];

  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  return (
    <Wrapper
      className={`${addAllClasses.join(" ")} ${showPopup ? "active" : ""}`}
      ref={ref}
    >
      {view && noView && (
        <div className="popup_handler" onClick={() => setShowPopup(!showPopup)}>
          {view}
        </div>
      )}
      <Container
        className="popup_container"
        showPopup={showPopup}
        popupPosition={popupPosition}
        onClick={() => setShowPopup(true)}
        style={style}
      >
        {view && !noView && view}
        {showPopup && <div id="popup">{popup && popup}</div>}
      </Container>
    </Wrapper>
  );
}

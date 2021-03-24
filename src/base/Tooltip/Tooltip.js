import React from "react";

import ViewWithPopup from "../ViewWithPopup/ViewWithPopup";

export default function Tooltip({ ...props }) {
  return <ViewWithPopup {...props} enableTooltip />;
}

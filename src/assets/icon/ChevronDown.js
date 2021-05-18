import React from "react";

function ChevronDown(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="5"
      viewBox="0 0 10 5"
      style={{
        transform: props.reversed
          ? "translate(-50%, -50%) rotate(180deg)"
          : "translate(-50%, -50%)",
        position: "absolute",
        top: "50%",
        left: "50%",
      }}
    >
      <path
        fill="none"
        fill-rule="evenodd"
        stroke="#FFF"
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M.5 0L5 5l4.5-5"
      />
    </svg>
  );
}

export default ChevronDown;

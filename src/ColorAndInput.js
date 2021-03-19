import React from "react";
import ColorCircle from "./ColorCircle";

function ColorAndInput(props) {
  return (
    <div className="flex items-center space-x-6">
      <ColorCircle backgroundColor="#314e52" key="#314e52" />
      <div>
        <span className="text-gray-500 pr-2">#</span>
        <input
          className="py-2 border-b border-dashed border-gray-600 outline-none"
          type="text"
          autoComplete="off"
          // value=""
          placeholder="abc"
          disabled={false}
        />
      </div>
    </div>
  );
}

export default ColorAndInput;

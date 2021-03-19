import React from "react";
import ColorCircle from "./ColorCircle";
import ColorAndInput from "./ColorAndInput";

const colorOptions = [
  [
    { label: "", value: "#e9896a" },
    { label: "", value: "#387c6d" },
    { label: "", value: "#693c72" },
    { label: "", value: "#4a47a3" },
    { label: "", value: "#314e52" },
  ],
  [
    { label: "", value: "#eb596e" },
    { label: "", value: "#e4e3e3" },
    { label: "", value: "#d8ac9c" },
    { label: "", value: "#ffc93c" },
    { label: "", value: "#389393" },
  ],
  [
    { label: "", value: "#be79df" },
    { label: "", value: "#900d0d" },
    { label: "", value: "#222831" },
    { label: "", value: "#1a508b" },
    { label: "", value: "#de7119" },
  ],
];

function ColorPalette(props) {
  return (
    <div className="border border-gray-100 shadow-sm rounded">
      <div className="border-b border-gray-100 p-4 space-y-3 flex flex-col items-center">
        <div className="text-gray-500 text-sm">Change tag color</div>
        <div className="space-y-3">
          {colorOptions.map((colorGroup, index) => (
            <div className="flex space-x-3" key={index}>
              {colorGroup.map((color) => (
                <ColorCircle backgroundColor={color.value} key={color.value} />
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="p-4">
        <ColorAndInput />
      </div>
    </div>
  );
}

export default ColorPalette;

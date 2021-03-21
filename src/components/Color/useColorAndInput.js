import { useState } from "react";

function useColorAndInput() {
  const [currentColorHex, setColorHex] = useState("#be79df");
  const [currentColorHover, setColorHover] = useState(null);

  const handleOnChange = (event) => {
    setColorHex(event.target.value);
  };

  const handleColorClick = (value) => {
    setColorHex(value);
  };

  const handleColorHover = (value) => {
    setColorHover(value);
  };

  return {
    currentColorHex,
    setColorHex,
    handleOnChange,
    onColorClick: handleColorClick,
    currentColorHover,
    setColorHover,
    onColorHover: handleColorHover,
  };
}

export default useColorAndInput;

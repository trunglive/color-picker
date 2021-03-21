import { useState } from "react";

function useColorAndInput() {
  const [currentColorHex, setColorHex] = useState("#be79df");

  const handleOnChange = (event) => {
    setColorHex(event.target.value);
  };

  const handleColorClick = (value) => {
    setColorHex(value);
  };

  return {
    currentColorHex,
    setColorHex,
    handleOnChange,
    onColorClick: handleColorClick,
  };
}

export default useColorAndInput;

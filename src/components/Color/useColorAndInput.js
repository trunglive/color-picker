import { useState } from "react";

function useColorAndInput() {
  const [currentColorHex, setColorHex] = useState("#be79df");

  const handleOnChange = (event) => {
    setColorHex(event.target.value);
  };

  return { currentColorHex, setColorHex, handleOnChange };
}

export default useColorAndInput;

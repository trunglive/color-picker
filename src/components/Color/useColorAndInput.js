import { useState } from "react";

function useColorAndInput() {
  const [colorHex, setColorHex] = useState("be79df");

  const handleOnChange = (event) => {
    setColorHex(event.target.value.replace("#", ""));
  };

  return { colorHex, setColorHex, handleOnChange };
}

export default useColorAndInput;

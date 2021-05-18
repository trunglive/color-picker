import { useState } from "react";

function useColorAndInput() {
  const [color, setColor] = useState({
    selected: "",
    hovered: null,
  });

  const handleOnColorChange = (data) => {
    setColor({ ...color, ...data });
  };

  return {
    color,
    onChange: handleOnColorChange,
  };
}

export default useColorAndInput;

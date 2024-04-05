import { useState } from "react";

export function PlusMinus() {
  const [value, setValue] = useState(5);
  const handlePlus = () => {
    setValue(value + 1);
  };
  const handleMinus = () => {
    setValue(value - 1);
  };
  return (
    <div>
      <h1>CURRENT VALUE : {value} </h1>
      <button onClick={handlePlus}>Plus</button>
      <button onClick={handleMinus}>Minus</button>
    </div>
  );
}

 import { useState } from "react";
 import "./Lightnulb.css";
 
export function LightBulb() {
  const [Bulb, setOnBulb] = useState("src/assets/images/pic_bulboff.gif");
  const OnLightBulb=()=>{
    setOnBulb("src/assets/images/Picture2_js_int.png")
  }

  const OffLightBulb=()=>{
    setOnBulb("src/assets/images/pic_bulboff.gif")
  }
  return (
    <div>
      <h1>LIGHT BULB WITH REACT</h1>
      <img src={Bulb} alt="light bulb" /> 
      <br />
      <button onClick={OnLightBulb}>ON LIGHT BULB</button>
      <button onClick={OffLightBulb}>OFF LIGHT BULB</button>
    </div>
  );
}

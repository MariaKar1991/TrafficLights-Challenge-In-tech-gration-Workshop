import { useState } from "react";
import "./UkTrafficLights.css";

// UK TrafficLights using useState Hook (Red => Orange => Green => Orange => Red)
export default function UkTrafficLights() {
  // State variable to track the current color index
  const [currentColor, setCurrentColor] = useState(0);

  // Function to transition to the next color
  const transition = () => {
    setCurrentColor((currentColor + 1) % 5); // Update current color index cyclically
  };

  return (
    <>
      {/* Traffic light elements */}
     <h1>UK TrafficLights using useState Hook</h1>
      <div
        id="red"
        className={`sign ${
          currentColor === 0 || currentColor === 4 ? "active" : ""
        }`}
      ></div>
      <div
        id="orange"
        className={`sign ${
          currentColor === 1 || currentColor === 3 ? "active" : ""
        }`}
      ></div>
      <div
        id="green"
        className={`sign ${currentColor === 2 ? "active" : ""}`}
      ></div>
       {/* Button to trigger state transition */}
      <button onClick={transition}>Next State</button>
    </>
  );
}

import "./UseStateTrafficLights.css";
import { useState } from "react";

// Greek TrafficLights using useState Hook
export default function UseStateTrafficLights() {
  const [currentColorIndex, setCurrentColorIndex] = useState(0); // Define state variable for current color index and its setter function
  const colors = ["red", "orange", "green"]; // Array of colors

  // Function to handle transition to the next color
  function transition() {
    setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length); // Update current color index cyclically
  }

  return (
    <>
      {/* Traffic light elements */}
      <h1>Greek TrafficLights using useState Hook</h1>
      <div
        id="red"
        className={`sign ${currentColorIndex === 0 ? "active" : ""}`} // Apply "active" class if current color index is 0 (red)
      ></div>
      <div
        id="orange"
        className={`sign ${currentColorIndex === 1 ? "active" : ""}`}
      ></div>
      <div
        id="green"
        className={`sign ${currentColorIndex === 2 ? "active" : ""}`}
      ></div>

      {/* Button to trigger state transition */}
      <button onClick={transition}>Next State</button>
    </>
  );
}

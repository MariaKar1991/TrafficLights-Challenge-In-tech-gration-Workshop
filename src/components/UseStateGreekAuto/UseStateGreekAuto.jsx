import "./UseStateGreekAuto.css";
import { useState } from "react";

// Automatic(timer-based) TrafficLights using useState Hook
export default function UseStateTrafficLights() {
  const [currentColor, setCurrentColor] = useState("red"); // Define state variable for current color
  const colors = ["red", "orange", "green"]; // Array of available colors

  // Function to start the timer for automatic color change
  const startTimer = () => {
    // Set interval to change color every 5 seconds
    const timer = setInterval(() => {
      const currentIndex = colors.indexOf(currentColor); // Get index of current color
      const nextIndex = (currentIndex + 1) % colors.length; // Calculate index of next color cyclically
      const nextColor = colors[nextIndex]; // Get next color from colors array

      setCurrentColor(nextColor); // Update current color
    }, 5000); // Change color every 5 seconds

    return timer; // Return reference to the timer
  };

  // Start the timer when the component mounts
  // eslint-disable-next-line no-unused-vars
  const timerRef = startTimer();

  return (
    <>
      {/* Traffic light elements */}
      <h1> Automatic(timer-based) Greek TrafficLights using useState Hook</h1>
      <div
        id="red"
        className={`sign ${currentColor === "red" ? "active" : ""}`}
      ></div>
      <div
        id="orange"
        className={`sign ${currentColor === "orange" ? "active" : ""}`}
      ></div>
      <div
        id="green"
        className={`sign ${currentColor === "green" ? "active" : ""}`}
      ></div>
    </>
  );
}

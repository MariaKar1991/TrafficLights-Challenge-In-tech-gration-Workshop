import "./UseStateGreekAuto.css";
import { useState, useRef, useEffect } from "react";

// Automatic(timer-based) TrafficLights using useState Hook
export default function UseStateGreekAuto() {
  const [currentColor, setCurrentColor] = useState("red"); // Define state variable for current color
  const colors = ["red", "orange", "green"]; // Array of available colors
  const timerRef = useRef(null); // Ref to store the timer reference

  useEffect(() => {
    // Function to start the timer for automatic color change
    const startTimer = () => {
      // Set interval to change color every 5 seconds
      timerRef.current = setInterval(() => {
        setCurrentColor(
          (prevColor) => colors[(colors.indexOf(prevColor) + 1) % colors.length]
        );
      }, 5000); // Change color every 5 seconds
    };

    startTimer(); // Start the timer when the component mounts

    return () => {
      clearInterval(timerRef.current); // Clear the timer when the component unmounts
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentColor]); // Run effect when currentColor changes

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

import "./TrafficLights.css";

// Grrek TrafficLights without the useState Hook
export default function TrafficLights() {
  let currentState = 0; // Initial state index
  const colors = ["red", "orange", "green"]; // Array of colors

  // Function to activate the current state
  function activateCurrentState() {
    const signs = document.querySelectorAll(".sign"); // Select all elements with class "sign"

    signs.forEach((sign) => {
      sign.classList.remove("active"); // Remove "active" class from all signs
    });

    signs[currentState].classList.add("active"); // Add "active" class to the current sign
  }

  function transition() {
    currentState = (currentState + 1) % colors.length; // Update state index in a cyclic manner
    activateCurrentState(); // Activate the new state
  }

  // Call the function to activate the initial state with a slight delay
  setTimeout(activateCurrentState, 0);

  return (
    <>
      {/* Traffic light elements */}
      <h1> Greek TrafficLights without the useState Hook</h1>
      <div id="red" className="sign"></div>
      <div id="orange" className="sign"></div>
      <div id="green" className="sign"></div>

      {/* Button to trigger state transition */}
      <button onClick={transition}>Next State</button>
    </>
  );
}

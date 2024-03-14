import "./App.css";
import UseStateGreekAuto from "./components/UseStateGreekAuto/UseStateGreekAuto";
// import TrafficLights from "./components/TrafficLights/TrafficLights";
import UseStateTrafficLights from "./components/UseStateTrafficLights/UseStateTrafficLight";
// import UkTrafficLights from "./components/UkTrafficLights/UkTrafficLights";

function App() {
  return (
    <>
      {/* <TrafficLights /> */}
      <UseStateTrafficLights />
      {/* <UkTrafficLights /> */}
      <UseStateGreekAuto />
    </>
  );
}

export default App;

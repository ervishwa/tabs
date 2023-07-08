import React from "react";
import "./trafficlight.scss";

const TrafficLight = () => {
  return (
    <div className="trafficlight">
      <div className="lights">
        <div className="red"></div>
        <div className="yellow"></div>
        <div className="green"></div>
      </div>
    </div>
  );
};

export default TrafficLight;

// Red light: 4000ms
// Yellow light: 500ms
// Green light: 3000ms

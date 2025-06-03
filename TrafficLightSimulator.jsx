import React from "react";

const TrafficLightSimulator = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Traffic Light Simulator</h2>
      <div style={styles.trafficLight}>
        <div style={{ ...styles.light, backgroundColor: "gray" }}></div>
        <div style={{ ...styles.light, backgroundColor: "gray" }}></div>
        <div style={{ ...styles.light, backgroundColor: "gray" }}></div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#1e1e1e",
    minHeight: "100vh",
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    marginBottom: 20,
  },
  trafficLight: {
    backgroundColor: "#333",
    padding: 20,
    borderRadius: 20,
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
  light: {
    width: 60,
    height: 60,
    borderRadius: "50%",
  },
};

export default TrafficLightSimulator;



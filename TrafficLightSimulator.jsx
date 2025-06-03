import React, { useState } from 'react';

const TrafficLightSimulator = () => {
  const [currentLight, setCurrentLight] = useState('red');

  return (
    <div style={styles.container}>
      <div
        style={{
          ...styles.light,
          backgroundColor: 'red',
          opacity: currentLight === 'red' ? 1 : 0.3,
        }}
      ></div>
      <div
        style={{
          ...styles.light,
          backgroundColor: 'yellow',
          opacity: currentLight === 'yellow' ? 1 : 0.3,
        }}
      ></div>
      <div
        style={{
          ...styles.light,
          backgroundColor: 'green',
          opacity: currentLight === 'green' ? 1 : 0.3,
        }}
      ></div>
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

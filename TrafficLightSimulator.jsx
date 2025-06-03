import React, { useState, useEffect } from 'react';

const TrafficLightSimulator = () => {
  const [currentLight, setCurrentLight] = useState('red');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLight((prevLight) => {
        if (prevLight === 'red') return 'green';
        if (prevLight === 'green') return 'yellow';
        return 'red';
      });
    }, 2000); // light chang every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Traffic Light Simulator</h2>
      <div style={styles.trafficLight}>
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
    transition: "opacity 0.3s",
  },
};

export default TrafficLightSimulator;

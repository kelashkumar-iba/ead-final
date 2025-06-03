import React, { useState, useEffect } from 'react';

const TrafficLightSimulator = () => {
  const [currentLight, setCurrentLight] = useState('red');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLight((prev) => {
        if (prev === 'red') return 'green';
        if (prev === 'green') return 'yellow';
        return 'red';
      });
    }, 3000);

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
            boxShadow:
              currentLight === 'red'
                ? '0 0 20px 10px rgba(255, 0, 0, 0.7)'
                : 'none',
            opacity: currentLight === 'red' ? 1 : 0.3,
          }}
        ></div>
        <div
          style={{
            ...styles.light,
            backgroundColor: 'yellow',
            boxShadow:
              currentLight === 'yellow'
                ? '0 0 20px 10px rgba(255, 255, 0, 0.7)'
                : 'none',
            opacity: currentLight === 'yellow' ? 1 : 0.3,
          }}
        ></div>
        <div
          style={{
            ...styles.light,
            backgroundColor: 'green',
            boxShadow:
              currentLight === 'green'
                ? '0 0 20px 10px rgba(0, 255, 0, 0.7)'
                : 'none',
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
    padding: 30,
    borderRadius: 30,
    display: "flex",
    flexDirection: "column",
    gap: 20,
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
  },
  light: {
    width: 80,
    height: 80,
    borderRadius: "50%",
    transition: "opacity 0.5s, box-shadow 0.5s",
  },
};

export default TrafficLightSimulator;

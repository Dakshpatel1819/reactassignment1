'use client'

import React, { useState, useEffect } from 'react';

// Main TimerApp component
const TimerApp = () => {
  // State to hold the time value (in seconds)
  const [time, setTime] = useState(0);

  // State to track whether the timer is running or stopped
  const [isRunning, setIsRunning] = useState(false);

  // Function to start the timer
  const startTimer = () => {
    setIsRunning(true); // Set isRunning state to true to start the timer
  };

  // Function to stop the timer
  const stopTimer = () => {
    setIsRunning(false); // Set isRunning state to false to stop the timer
  };

  // Function to reset the timer
  const resetTimer = () => {
    setIsRunning(false); // Stop the timer
    setTime(0); // Reset the time value to 0
  };

  // useEffect hook to handle the timer's interval logic
  useEffect(() => {
    let interval;
    if (isRunning) {
      // If the timer is running, update the time every second
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1); // Increment the time by 1 every second
      }, 1000);
    } else {
      clearInterval(interval); // Clear the interval when the timer is stopped
    }

    // Cleanup function to clear the interval when the component is unmounted or isRunning changes
    return () => clearInterval(interval);
  }, [isRunning]); // Dependency array to re-run the effect when isRunning changes

  return (
    <div style={styles.container}>
      <div style={styles.timerDisplay}>
        <h1>Timer</h1>
        <h2>{time} seconds</h2> {/* Display the current time in seconds */}
      </div>
      <div style={styles.buttonContainer}>
        {/* Conditional rendering for the Start/Stop button */}
        {!isRunning ? (
          <button onClick={startTimer} style={styles.button}>Start</button>
        ) : (
          <button onClick={stopTimer} style={styles.button}>Stop</button>
        )}
        {/* Reset button, always visible */}
        <button onClick={resetTimer} style={styles.button}>Reset</button>
      </div>
      {/* Footer displaying user information */}
      <div style={styles.footer}>
        <p>My Name: Dax Patel</p>
        <p>Student ID: n01702402</p>
      </div>
    </div>
  );
};

// Styles object to handle the layout and appearance of the app
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  timerDisplay: {
    marginBottom: '20px',
  },
  buttonContainer: {
    marginBottom: '20px',
  },
  button: {
    padding: '10px 20px',
    margin: '5px',
    fontSize: '16px',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#4CAF50',
    color: 'white',
  },
  footer: {
    marginTop: '20px',
    fontSize: '14px',
    color: '#555',
  },
};

// Exporting the TimerApp component for use in the application
export default TimerApp;

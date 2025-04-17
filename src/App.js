import "./App.css";
import React, { useState } from "react";

function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');

  let calcBmi = (e) => {
    e.preventDefault();
    
    // Convert inputs to numbers and validate
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height);
    
    if (isNaN(weightNum) || isNaN(heightNum) || weightNum <= 0 || heightNum <= 0) {
      alert("Please enter valid positive numbers for weight and height");
      return;
    }

    // Convert height from feet to inches and calculate BMI
    let heightInInches = heightNum * 12;
    let bmiValue = (weightNum / (heightInInches * heightInInches)) * 703;
    setBmi(bmiValue.toFixed(1));

    if (bmiValue < 18.5) {
      setMessage("You are underweight");
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setMessage("You are a healthy weight");
    } else {
      setMessage("You are overweight");
    }
  };

  let reload = () => {
    window.location.reload();
  };

  return (
    <div>
      <div className="container">
        <h2>BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (kg)</label>
            <input
              type="number"
              step="0.1"
              placeholder="Enter Weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <label>Height (feet)</label>
            <input
              type="number"
              step="0.1"
              placeholder="Enter Height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" onClick={reload} type="button">
              Reload
            </button>
          </div>
          <div className="center">
            <h3>Your BMI is: {bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;

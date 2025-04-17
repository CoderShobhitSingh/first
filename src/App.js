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

    // Convert height from cm to meters and calculate BMI
    let heightInMeters = heightNum / 100;
    let bmiValue = weightNum / (heightInMeters * heightInMeters);
    setBmi(bmiValue.toFixed(1));

    // Determine BMI category
    if (bmiValue < 16) {
      setMessage("Severe Thinness");
    } else if (bmiValue >= 16 && bmiValue < 17) {
      setMessage("Moderate Thinness");
    } else if (bmiValue >= 17 && bmiValue < 18.5) {
      setMessage("Mild Thinness");
    } else if (bmiValue >= 18.5 && bmiValue < 25) {
      setMessage("Normal");
    } else if (bmiValue >= 25 && bmiValue < 30) {
      setMessage("Overweight");
    } else if (bmiValue >= 30 && bmiValue < 35) {
      setMessage("Obese Class I");
    } else if (bmiValue >= 35 && bmiValue < 40) {
      setMessage("Obese Class II");
    } else {
      setMessage("Obese Class III");
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
            <label>Height (cm)</label>
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
            <p>Category: {message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;

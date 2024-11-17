import React, { useState } from "react";
import InputForm from "./components/InputForm";
import PredictionResult from "./components/PredictionResult";
import "./App.css";

const App = () => {
  const [prediction, setPrediction] = useState(null);

  return (
    <div className="App">
      <h1>Wine Quality Predictor</h1>
      <InputForm setPrediction={setPrediction} />
      <PredictionResult prediction={prediction} />
    </div>
  );
};

export default App;

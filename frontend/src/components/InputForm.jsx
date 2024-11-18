import React, { useState } from "react";
import axios from "axios";
import "./InputForm.css"; // Import CSS file for styling

const InputForm = ({ setPrediction }) => {
    // Feature names based on the dataset
    const featureNames = [
        "Fixed Acidity",
        "Volatile Acidity",
        "Citric Acid",
        "Residual Sugar",
        "Chlorides",
        "Free Sulfur Dioxide",
        "Density",
        "pH",
        "Sulphates",
        "Alcohol",
    ];

    const [features, setFeatures] = useState(new Array(featureNames.length).fill(0));

    const handleChange = (index, value) => {
        const newFeatures = [...features];
        newFeatures[index] = parseFloat(value) || 0;
        setFeatures(newFeatures);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("https://wine-quality-prediction-w9k1.onrender.com/predict", {
                features,
            });
            setPrediction(response.data.prediction);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <form className="input-form" onSubmit={handleSubmit}>
            <h3>Wine Quality Prediction</h3>
            <p>Enter the features below to predict the wine quality:</p>
            {featureNames.map((name, index) => (
                <div key={index} className="form-group">
                    <label>{name}:</label>
                    <input
                        type="number"
                        step="any"
                        placeholder={`Enter ${name.toLowerCase()}`}
                        onChange={(e) => handleChange(index, e.target.value)}
                        required
                    />
                </div>
            ))}
            <button type="submit" className="submit-button">Predict</button>
        </form>
    );
};

export default InputForm;

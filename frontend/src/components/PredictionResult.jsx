import React from "react";

const PredictionResult = ({ prediction }) => {
    return (
        <div>
            <h2>Prediction</h2>
            {prediction !== null ? (
                <p>The predicted quality is: {prediction === 1 ? "Good" : "Not Good"}</p>
            ) : (
                <p>Submit the features to get a prediction.</p>
            )}
        </div>
    );
};

export default PredictionResult;

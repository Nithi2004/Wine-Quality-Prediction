from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import numpy as np
import os

# Load the trained model
with open("xgb_classifier.pkl", "rb") as file:
    model = pickle.load(file)

app = Flask(__name__)
CORS(app)  # Allow cross-origin requests

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    try:
        # Extract features from the input JSON
        features = np.array(data['features']).reshape(1, -1)
        prediction = model.predict(features)
        return jsonify({"prediction": int(prediction[0])})
    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=int(os.environ.get("PORT", 5000)))


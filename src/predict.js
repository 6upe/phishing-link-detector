// src/predict.js
const tf = require('@tensorflow/tfjs-node');

// Now you can use TensorFlow.js in your code.

const { createModel } = require('./model');

const predictPhishing = (urlToCheck) => {
  const model = createModel();
  // Load the saved model or retrain the model here
  const prediction = model.predict(tf.tensor([urlToCheck.length]));
  console.log('Prediction:', prediction.dataSync()[0]);
};

module.exports = { predictPhishing };

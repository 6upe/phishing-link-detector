// src/train.js
const tf = require('@tensorflow/tfjs-node');
const { createModel } = require('./model');
const { loadData } = require('./data');

const trainModel = () => {
  const model = createModel();
  loadData(); // Load and preprocess data
  // Split data and train the model
};



// Define and configure your model here
const model = tf.sequential();
// Add layers and compile the model as needed

// Save the model
model.save('models/phishing_model').then(() => {
  console.log('Model saved.');
});




module.exports = { trainModel };

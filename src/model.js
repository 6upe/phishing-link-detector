// src/model.js
const tf = require('@tensorflow/tfjs-node');

// Now you can use TensorFlow.js in your code.


const createModel = () => {
  const model = tf.sequential();
  model.add(tf.layers.dense({ units: 10, inputShape: 1, activation: 'relu' }));
  model.add(tf.layers.dense({ units: 1, activation: 'sigmoid' }));
  model.compile({ optimizer: 'adam', loss: 'binaryCrossentropy', metrics: ['accuracy'] });
  return model;
};

const saveModel = (model) => {
  model.save('models/phishing_model.json').then(() => {
    console.log('Model saved.');
  });
};

module.exports = { createModel, saveModel };

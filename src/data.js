// src/data.js
const fs = require('fs');
const csv = require('csv-parser');

const loadData = () => {
  const data = [];
  fs.createReadStream('data/phishing_dataset.csv')
    .pipe(csv())
    .on('data', (row) => {
      data.push({
        url: row.URL,
        label: row.Label === 'Phishing' ? 1 : 0,
      });
    })
    .on('end', () => {
      // Perform data preprocessing as needed
      console.log('Data loaded:', data);
    });
};

module.exports = { loadData };

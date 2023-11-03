const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'views')));

function isPhishingLink(url) {


  const suspiciousDomains = [
    'phishing',
    'login',
    'account',
    'secure',
    'verify',
    // Add more suspicious keywords here
  ];

  for (const keyword of suspiciousDomains) {
    if (url.includes(keyword)) {
      return true;
    }
  }

  if (/^(?:\d{1,3}\.){3}\d{1,3}$/.test(url)) {
    return true;
  }

  return false;
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.post('/check-link', (req, res) => {
  const { url } = req.body;

  console.log('Checking Link: ', url);

  if (!url) {
    return res.status(400).json({ error: 'URL not provided in the request body.' });
  }

  if (isPhishingLink(url)) {
    console.log('This might be a phishing link.');
    res.json(true);
  } else {
    res.json(false);
    console.log('This does not appear to be a phishing link.');
  }
});

app.listen(port, () => {
  console.log(`Server is running on PORT: ${port}`);
});

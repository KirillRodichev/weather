const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const axios = require("axios");

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const apiKey = process.env.YANDEX_API_KEY;

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, err => {
  if (err) {
    console.log(port);
    throw err;
  }
  console.log('Server running on port ' + port);
});

app.post("/forecast", async (req, res) => {
  let response;

  try {
    response = await axios.get(
      `https://api.weather.yandex.ru/v2/forecast?lat=${req.body.lat}&lon=${req.body.lon}`, {
        headers: {
          'X-Yandex-API-Key': apiKey
        }
      }
    );
  } catch (e) {
    res.status(404).send();
  }
  res.status(200).send(response.data);
});
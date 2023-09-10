const express = require('express');
const request = require('request');
const cors = require('cors');

const app = express();

app.use(cors());

app.use('/api', (req, res) => {
  const url = 'http://integration-api-stage.admixer.net/TestTask/GetTestAdvertisers'; 
  req.pipe(request(url)).pipe(res);
});

app.use('/save', (req, res)=>{
  const url = 'http://integration-api-stage.admixer.net/TestTask/UpdateTestAdvertiser';
  req.pipe(request(url)).pipe(res)
})

app.listen(3000, () => {
  console.log('Проксі-сервер запущений на порту 3000');
});
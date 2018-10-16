require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const massive = require('massive');
const controller = require('./controller');



app.use(bodyParser.json());



app.get('/', (req, res) => {
  res.send('endpoint live')
});

app.get('/api/homes', controller.getAllHomes)
app.get('/api/home-results', controller.getHomesInCity);
app.get('/api/home/:id', controller.getOneHome);

app.get('/api/home-images', controller.getHomeImgs);
// app.post('/api/home', controller.createHome);

massive(process.env.CONNECTION_STRING).then(database => {
  app.set('db', database);
  console.log('database is runnin');
}).catch(error => {
  console.log('-------------- database issue', error);
});

const PORT = 4000;
app.listen(PORT, () => console.log(`Server listening on port 4000`));

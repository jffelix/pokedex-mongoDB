const express = require('express');
// const cors = require('cors');
// const morgan = require('morgan');
const path = require('path');
const app = express();
const port = 3000;

const mongoose = require('mongoose');

// allows use of model methods
const models = require('./models/index.js').pokemon;

// equivalent to db.connect in mySQL
mongoose.connect('mongodb://localhost/pokemon', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});


app.use(express.json());

app.use(express.static(path.join(__dirname, '../client/dist')));

// server and controllers
app.get('/pokemon', (req, res) => {

  // find() is already built in with mongoose
  models.find()
  .then((data) => {
    // res.status(200).json(data)
    res.status(200).json(data);
    console.log('Sending back data to client!');
  })
  .catch((err) => {
    res.status(400).send(err);
    console.log('Error received during models');
  })

})


app.listen(port, () => {
  console.log(`Listening from port ${port}!`);
})
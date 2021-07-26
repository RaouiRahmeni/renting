const express = require('express');
const bodyParser = require('body-parser');

const Admin = require('../database-mongodb/Admin.js');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

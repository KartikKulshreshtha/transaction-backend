const express = require('express');
const router = express.Router();
const cors = require('cors')
const bodyParser = require('body-parser');
const connection = require('./db/dbConfig');
const routes = require('./routes/routes');

const app = express();
app.use(cors())
app.use(bodyParser.json());

app.use('/api', routes);

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
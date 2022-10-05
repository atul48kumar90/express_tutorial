const express = require('express');

const app = express();

const members = require('./Members');

const logger = require('./middleware/logger');



app.use(logger);
  
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/members', require('./routes/api/members'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started at ${PORT}`));
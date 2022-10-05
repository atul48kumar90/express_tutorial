const express = require('express');

const app = express();

const members = require('./Members');

const logger = require('./middleware/logger');



app.use(logger);
  
app.get('/api/members', (req, res) => {
    res.json(members);
});

const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started at ${PORT}`));
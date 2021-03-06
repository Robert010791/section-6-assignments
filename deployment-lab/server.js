const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

const port = process.env.PORT || 3030;

app.listen(port, () => console.log(`Server coming in on port ${port}`));

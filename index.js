const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log('Environment Variables:');
  console.log('====================');
  Object.keys(process.env).sort().forEach(key => {
    console.log(`${key}: ${process.env[key]}`);
  });
  console.log('====================');
});
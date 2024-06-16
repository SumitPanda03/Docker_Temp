const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`User ID is ${userId}`);
});

app.post('/user', (req, res) => {
  const user = req.body;
  res.send(`User ${user.name} with age ${user.age} has been added.`);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

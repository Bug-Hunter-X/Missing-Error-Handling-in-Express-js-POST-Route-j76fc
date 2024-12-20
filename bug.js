const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  const user = req.body;
  // Missing error handling for missing fields or invalid data
  db.createUser(user); // Assume this function handles DB interaction
  res.status(201).send();
});

// ... other routes ...

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
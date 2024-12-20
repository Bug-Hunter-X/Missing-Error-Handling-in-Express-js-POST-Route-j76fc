const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  const user = req.body;
  if (!user) {
    return res.status(400).send({ error: 'Missing user data' });
  }
  if (!user.name || !user.email) {
    return res.status(400).send({ error: 'Missing name or email' });
  }
  if (typeof user.name !== 'string' || typeof user.email !== 'string') {
    return res.status(400).send({ error: 'Invalid data type for name or email' });
  }
  // ... other validation
  db.createUser(user)
    .then(() => res.status(201).send())
    .catch(err => res.status(500).send({ error: 'Failed to create user' }));
});

// ... other routes ...

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
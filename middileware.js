const express = require('express');
const app = express();
const router = express.Router()

// Simple middleware function
router.use((req, res, next) => {
  console.log('Time:', Date.now());
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/router',router)

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

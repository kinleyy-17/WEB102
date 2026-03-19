const express = require('express');
const app = express();

app.use(express.json());

// Routes
app.use('/users', require('./routes/users'));
app.use('/posts', require('./routes/posts'));
app.use('/comments', require('./routes/comments'));

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
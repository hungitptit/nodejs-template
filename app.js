const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const todoRoutes = require('./routes/todoRoutes');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

const username = encodeURIComponent(process.env.MONGO_USERNAME);
const password = encodeURIComponent(process.env.MONGO_PASSWORD);
const cluster = "todo.k2wt5.mongodb.net";
const authSource = "<authSource>";
const authMechanism = "<authMechanism>";
const databaseName = process.env.MONGO_DATASET; 
// Kết nối tới MongoDB
mongoose.connect(`mongodb+srv://${username}:${password}@${cluster}/${databaseName}`, {
  useNewUrlParser: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('MongoDB connection error:', error);
});

// Sử dụng các routes cho Todo
app.use('/api/todos', todoRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
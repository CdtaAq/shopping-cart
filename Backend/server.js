const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

mongoose.connect('mongodb://localhost:27017/shopping-cart', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api/products', productRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const express = require('express');
const multer = require('multer');
const Product = require('../models/Product');

const router = express.Router();
const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (_, file, cb) => cb(null, Date.now() + '-' + file.originalname),
});
const upload = multer({ storage });

router.post('/', upload.single('image'), async (req, res) => {
  const { name, price, description, rating } = req.body;
  const imageUrl = req.file ? `/uploads/${req.file.filename}` : '';
  const product = new Product({ name, price, description, rating, imageUrl });
  await product.save();
  res.json(product);
});

router.get('/', async (_, res) => {
  const products = await Product.find();
  res.json(products);
});

router.delete('/:id', async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

router.put('/:id', async (req, res) => {
  const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

module.exports = router;

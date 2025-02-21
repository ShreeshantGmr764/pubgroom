const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/yourdbname', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const imageSchema = new mongoose.Schema({
  url: String,
  category: String,
});

const Image = mongoose.model('Image', imageSchema);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

app.post('/api/upload', upload.single('image'), async (req, res) => {
  const imageUrl = `/uploads/${req.file.filename}`;
  const newImage = new Image({ url: imageUrl, category: req.body.category });
  await newImage.save();
  res.status(201).send(newImage);
});

app.get('/api/images', async (req, res) => {
  const images = await Image.find();
  res.send(images);
});

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));


const mongoURI = 'mongodb://localhost:27017/ecommerce';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));


const ClothesSchema = new mongoose.Schema({
    name: String
});
const Clothes = mongoose.model('Clothes', ClothesSchema);

app.get('/search', async (req, res) => {
    const query = req.query.q;
    if (query.length > 3) {
        const results = await Clothes.find({ name: new RegExp(query, 'i') });
        res.json(results);
    } else {
        res.json([]);
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

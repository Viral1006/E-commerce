const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ecommerce', { useNewUrlParser: true, useUnifiedTopology: true });

const ClothesSchema = new mongoose.Schema({
    name: String,
    brand: String,
    category: String
});
const Clothes = mongoose.model('Clothes', ClothesSchema);

const seedData = [
    { name: 'Nike Air Max', brand: 'Nike', category: 'Shoes' },
    { name: 'Adidas Ultraboost', brand: 'Adidas', category: 'Shoes' },
    { name: 'New Balance 990', brand: 'New Balance', category: 'Shoes' },
    { name: 'Puma Suede Classic', brand: 'Puma', category: 'Shoes' },
    { name: 'Asics Gel-Kayano', brand: 'Asics', category: 'Shoes' },
    { name: 'Nike Dri-FIT T-Shirt', brand: 'Nike', category: 'Apparel' },
    { name: 'Adidas Climacool Polo', brand: 'Adidas', category: 'Apparel' },
    { name: 'New Balance Performance Tank', brand: 'New Balance', category: 'Apparel' },
    { name: 'Puma Performance Tee', brand: 'Puma', category: 'Apparel' },
    { name: 'Asics Training Top', brand: 'Asics', category: 'Apparel' },
    { name: 'Nike Flex Running Shorts', brand: 'Nike', category: 'Apparel' },
    { name: 'Adidas Training Shorts', brand: 'Adidas', category: 'Apparel' },
    { name: 'New Balance Impact Shorts', brand: 'New Balance', category: 'Apparel' },
    { name: 'Puma Active Shorts', brand: 'Puma', category: 'Apparel' },
    { name: 'Asics Race Shorts', brand: 'Asics', category: 'Apparel' },
    { name: 'Nike Pro Leggings', brand: 'Nike', category: 'Apparel' },
    { name: 'Adidas Alphaskin Leggings', brand: 'Adidas', category: 'Apparel' },
    { name: 'New Balance Heat Tight', brand: 'New Balance', category: 'Apparel' },
    { name: 'Puma Evostripe Pants', brand: 'Puma', category: 'Apparel' },
    { name: 'Asics Silver Tights', brand: 'Asics', category: 'Apparel' },
    { name: 'Nike Sportswear Hoodie', brand: 'Nike', category: 'Apparel' },
    { name: 'Adidas Essentials Hoodie', brand: 'Adidas', category: 'Apparel' },
    { name: 'New Balance Core Hoodie', brand: 'New Balance', category: 'Apparel' },
    { name: 'Puma Essentials Hoodie', brand: 'Puma', category: 'Apparel' },
    { name: 'Asics Training Hoodie', brand: 'Asics', category: 'Apparel' },
    { name: 'Nike Heritage Cap', brand: 'Nike', category: 'Accessories' },
    { name: 'Adidas Baseball Cap', brand: 'Adidas', category: 'Accessories' },
    { name: 'New Balance 5 Panel Cap', brand: 'New Balance', category: 'Accessories' },
    { name: 'Puma Performance Cap', brand: 'Puma', category: 'Accessories' },
    { name: 'Asics Running Cap', brand: 'Asics', category: 'Accessories' }
];

Clothes.insertMany(seedData)
    .then(() => {
        console.log('Data seeded');
        mongoose.connection.close();
    })
    .catch(err => {
        console.error('Error seeding data:', err);
        mongoose.connection.close();
    });

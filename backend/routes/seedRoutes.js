import Product from '../models/productModel.js';
import data from '../data.js';
import express from 'express';
import User from '../models/userModel.js';

// const express = require('express');
// const { default: data } = require('../data')
// const { default: Product } = require('../models/productModel')
const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
  await Product.remove({});
  const createdProducts = await Product.insertMany(data.products);
  await User.remove({});
  const createdUsers = await User.insertMany(data.users);
  await User.collection.dropIndexes();
  await Product.collection.dropIndexes();
  res.send({ createdProducts, createdUsers });
});

export default seedRouter;

const Furniture = require('../models/Furniture.js');

exports.create = async (data) => Furniture.create(data);

exports.getAll = () => Furniture.find();

exports.getOne = (id) => Furniture.findById(id);

exports.update = (id, data) => Furniture.findByIdAndUpdate(id, data);

exports.deleteFurniture = (id) => Furniture.findByIdAndDelete(id);


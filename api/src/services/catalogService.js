const Furniture = require('../models/Furniture.js');

exports.create = async (data) => {
    return Furniture.create(data);
}


exports.getAll = () => Furniture.find();


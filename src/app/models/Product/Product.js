const mongoose = require('mongoose');

class Product {

  constructor(color, department, description, image, material, name, price, stock, createdAt, updatedAt) {

    this._color = color;
    this._department = department;
    this._description = description;
    this._image = image;
    this._material = material;
    this._name = name;
    this._price = price;
    this._stock = stock;
    this._createdAt = createdAt;
    this._updatedAt = updatedAt;
    //Object.freeze(this);
  }

}

const ProductSchema = new mongoose.Schema();
ProductSchema.loadClass(Product);

mongoose.model('Product', ProductSchema);

console.log(ProductSchema.methods);
console.log(ProductSchema.statics);
console.log(ProductSchema.virtuals);

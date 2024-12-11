"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var _mongooseAutoIncrement = _interopRequireDefault(require("mongoose-auto-increment"));
var _bcryptjs = _interopRequireDefault(require("bcryptjs"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var suggestSchema = new _mongoose.Schema({
  idsuggested: {
    type: Number,
    unique: false
  },
  namesuggested: {
    type: String,
    unique: false
  },
  description: {
    type: String,
    unique: false
  },
  price: {
    type: String,
    unique: false
  },
  discount: {
    type: Number,
    unique: false
  },
  provider: {
    type: String,
    required: false
  },
  expiration_Date: {
    type: String,
    unique: false
  },
  stock: {
    type: Number,
    unique: false
  },
  image: {
    type: String,
    unique: false
  },
  tags: {
    type: String,
    unique: false
  }
}, {
  timestamps: {}
});

/*subscriberSchema.plugin(autoIncrement.plugin, {
    model: 'Products',
    field: 'idproducts'
});*/
var _default = exports["default"] = (0, _mongoose.model)('suggested', suggestSchema);
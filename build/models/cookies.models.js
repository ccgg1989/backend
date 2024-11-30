"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var _mongooseAutoIncrement = _interopRequireDefault(require("mongoose-auto-increment"));
var _bcryptjs = _interopRequireDefault(require("bcryptjs"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var cookieSchema = new _mongoose.Schema({
  idcookies: {
    type: Number,
    unique: false
  },
  user: {
    type: String,
    unique: false
  },
  mac: {
    type: String,
    unique: false
  },
  action: {
    type: String,
    unique: false
  },
  isLogged: {
    type: String,
    unique: false
  },
  datetime: {
    type: String,
    unique: false
  },
  location: {
    type: String,
    unique: false
  },
  idP: {
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
var _default = (0, _mongoose.model)('Cookies', cookieSchema);
exports["default"] = _default;
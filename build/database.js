"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));
var _logger = _interopRequireDefault(require("./logger"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/*mongoose.connect("mongodb://localhost/FarMark_test", {
   
})
.then(db => logger.info('Db FarMark_test is Connected'))
.catch(error => logger.debug(error))*/

//Database name
var dbName = 'FarMark_test';
//var url = "mongodb://localhost:27017/".concat(dbName);
var url = 'mongodb+srv://christiangiraldog:5XjzpJI6QLaV1D0O@cluster0.vk8un.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
_mongoose["default"].connect(url).then(function (db) {
  return _logger["default"].info('Db FarMark_test is Connected');
})["catch"](function (error) {
  return _logger["default"].debug(error);
});
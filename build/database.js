"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));
var _logger = _interopRequireDefault(require("./logger.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
/*mongoose.connect("mongodb://localhost/FarMark_test", {
   
})
.then(db => logger.info('Db FarMark_test is Connected'))
.catch(error => logger.debug(error))*/

//Database name
var dbName = 'FarMark_test';
//const url = `mongodb://localhost:27017/${dbName}`;
//const url = `mongodb+srv://christiangiraldog:5XjzpJI6QLaV1D0O@cluster0.vk8un.mongodb.net/FarMark_test?retryWrites=true&w=majority`;
var url = 'mongodb+srv://christiangiraldog:5XjzpJI6QLaV1D0O@cluster0.vk8un.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
_mongoose["default"].connect(url).then(function (db) {
  return _logger["default"].info('Db FarMark_test is Connected');
})["catch"](function (error) {
  return _logger["default"].debug(error);
});
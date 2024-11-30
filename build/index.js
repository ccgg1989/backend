"use strict";

var _app = _interopRequireDefault(require("./app"));
require("./database");
var _logger = _interopRequireDefault(require("./logger"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_app["default"].listen('80', '0.0.0.0', function () {
  _logger["default"].info("server is listening on 80 port");
});
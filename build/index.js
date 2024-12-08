"use strict";

var _app = _interopRequireDefault(require("./app.js"));
require("./database.js");
var _logger = _interopRequireDefault(require("./logger.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
_app["default"].listen('80', '0.0.0.0', function () {
  _logger["default"].info("server is listening on 80 port");
});
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _winston = require("winston");
var combine = _winston.format.combine,
  timestamp = _winston.format.timestamp,
  label = _winston.format.label,
  printf = _winston.format.printf;
var CATEGORY = "logger format";
var customFormat = printf(function (_ref) {
  var level = _ref.level,
    message = _ref.message,
    label = _ref.label,
    timestamp = _ref.timestamp;
  return "".concat(timestamp, " [").concat(label, "] ").concat(level, ": ").concat(message);
});
var logger = (0, _winston.createLogger)({
  level: "debug",
  format: combine(label({
    label: CATEGORY
  }), timestamp(), customFormat),
  transports: [new _winston.transports.Console()]
});
var _default = logger;
exports["default"] = _default;
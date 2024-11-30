"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _cors = _interopRequireDefault(require("cors"));
var _logger = _interopRequireDefault(require("./logger"));
var _initialSstup = require("./libs/initialSstup");
var _auth = _interopRequireDefault(require("./routes/auth.routes"));
var _user = _interopRequireDefault(require("./routes/user.routes"));
var _product = _interopRequireDefault(require("./routes/product.routes"));
var _suggested = _interopRequireDefault(require("./routes/suggested.routes"));
var _cookies = _interopRequireDefault(require("./routes/cookies.routes"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var app = (0, _express["default"])();
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].text());
app.use(_express["default"].json());
(0, _initialSstup.createRoles)();

/*const whitelist = ['http://127.0.0.1:5173'];

const corsOptions = {
    origin: function(origin, callback){
        console.log(origin)
        if(whitelist.includes(origin)) {
           //the query la API it`s successfully
           callback(null, true)
        }else {
            //the query it`s not allow
            callback(new Error("Cors`s Errors"))
        }
    },

}

app.use(cors(corsOptions))*/

app.get('/', function (req, res) {
  _logger["default"].info("ok");
  res.json({
    message: "The Farmark"
  });
});
app.use('/api/auth', _auth["default"]);
app.use('/api/user', _user["default"]);
app.use('/api/products', _product["default"]);
app.use('/api/suggested', _suggested["default"]);
app.use('/api/cookies', _cookies["default"]);
var _default = app;
exports["default"] = _default;
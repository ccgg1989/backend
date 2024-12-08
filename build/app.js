"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _cors = _interopRequireDefault(require("cors"));
var _logger = _interopRequireDefault(require("./logger.js"));
var _initialSstup = require("./libs/initialSstup.js");
var _authRoutes = _interopRequireDefault(require("./routes/auth.routes.js"));
var _userRoutes = _interopRequireDefault(require("./routes/user.routes.js"));
var _productRoutes = _interopRequireDefault(require("./routes/product.routes.js"));
var _suggestedRoutes = _interopRequireDefault(require("./routes/suggested.routes.js"));
var _cookiesRoutes = _interopRequireDefault(require("./routes/cookies.routes.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
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
app.use('/api/auth', _authRoutes["default"]);
app.use('/api/user', _userRoutes["default"]);
app.use('/api/products', _productRoutes["default"]);
app.use('/api/suggested', _suggestedRoutes["default"]);
app.use('/api/cookies', _cookiesRoutes["default"]);
var _default = exports["default"] = app;
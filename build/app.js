"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _cors = _interopRequireDefault(require("cors"));
var _path = _interopRequireDefault(require("path"));
var _logger = _interopRequireDefault(require("./logger.js"));
var _initialSstup = require("./libs/initialSstup.js");
var _authRoutes = _interopRequireDefault(require("./routes/auth.routes.js"));
var _userRoutes = _interopRequireDefault(require("./routes/user.routes.js"));
var _productRoutes = _interopRequireDefault(require("./routes/product.routes.js"));
var _suggestedRoutes = _interopRequireDefault(require("./routes/suggested.routes.js"));
var _cookiesRoutes = _interopRequireDefault(require("./routes/cookies.routes.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// Importar path para manejar rutas

var app = (0, _express["default"])();

// Middlewares
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].text());
app.use(_express["default"].json());
(0, _initialSstup.createRoles)();

// Configuración de CORS
var whitelist = ['http://localhost', 'http://127.0.0.1:5173', 'https://nivel99.com']; // Agrega más dominios si es necesario
var corsOptions = {
  origin: function origin(_origin, callback) {
    if (!_origin || whitelist.includes(_origin)) {
      // Permitir solicitudes sin origen (como en Postman) o dentro de la lista blanca
      callback(null, true);
    } else {
      callback(new Error('CORS Error: Origen no permitido'));
    }
  },
  credentials: true // Si necesitas permitir cookies o cabeceras de autenticación
};
app.use((0, _cors["default"])(corsOptions));

// Servir archivos estáticos desde la carpeta uploads
app.use('/uploads', _express["default"]["static"](_path["default"].resolve('uploads')));

// Rutas
app.get('/', function (req, res) {
  _logger["default"].info('ok');
  res.json({
    message: 'The Farmark'
  });
});
app.use('/api/auth', _authRoutes["default"]);
app.use('/api/user', _userRoutes["default"]);
app.use('/api/products', _productRoutes["default"]);
app.use('/api/suggested', _suggestedRoutes["default"]);
app.use('/api/cookies', _cookiesRoutes["default"]);
var _default = exports["default"] = app;
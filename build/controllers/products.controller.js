"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.putProductsById = exports.insertExcelProducts = exports.getProductsByName = exports.getProductsById = exports.getProductsByDiscount = exports.getAllProducts = exports.deleteProductsById = exports.deleteAllProducts = exports.createProducts = void 0;
var _express = require("express");
var _productsModels = _interopRequireDefault(require("../models/products.models.js"));
var _xlsx = _interopRequireDefault(require("xlsx"));
var _logger = _interopRequireDefault(require("../logger.js"));
var _multer = _interopRequireDefault(require("multer"));
var _path = _interopRequireDefault(require("path"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; } //var workbook = Xlsx.readFile('/src/controllers/test.xlsx');
//var sheet_name_list = workbook.SheetNames;
// Configuración de multer
var storage = _multer["default"].diskStorage({
  destination: function destination(req, file, cb) {
    cb(null, 'uploads/'); // Carpeta donde se guardarán las imágenes
  },
  filename: function filename(req, file, cb) {
    var uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + _path["default"].extname(file.originalname));
  }
});
var upload = (0, _multer["default"])({
  storage: storage,
  fileFilter: function fileFilter(req, file, cb) {
    var fileTypes = /jpeg|jpg|png/;
    var extName = fileTypes.test(_path["default"].extname(file.originalname).toLowerCase());
    var mimeType = fileTypes.test(file.mimetype);
    if (mimeType && extName) {
      return cb(null, true);
    } else {
      cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    }
  }
});
var createProducts = exports.createProducts = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          try {
            // Subir la imagen con multer
            upload.single('image')(req, res, /*#__PURE__*/function () {
              var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(err) {
                var imagePath, _req$body, nameproducts, descriptions, price, discount, provider, expiration_Data, stock, tags, lastProduct, idproducts, newProduct, savedProduct;
                return _regeneratorRuntime().wrap(function _callee$(_context) {
                  while (1) switch (_context.prev = _context.next) {
                    case 0:
                      if (!err) {
                        _context.next = 3;
                        break;
                      }
                      _logger["default"].debug(err);
                      return _context.abrupt("return", res.status(400).json({
                        message: err.message
                      }));
                    case 3:
                      imagePath = req.file ? req.file.path : null; // Ruta de la imagen subida
                      _req$body = req.body, nameproducts = _req$body.nameproducts, descriptions = _req$body.descriptions, price = _req$body.price, discount = _req$body.discount, provider = _req$body.provider, expiration_Data = _req$body.expiration_Data, stock = _req$body.stock, tags = _req$body.tags;
                      _context.next = 7;
                      return _productsModels["default"].find().sort({
                        $natural: -1
                      }).limit(1);
                    case 7:
                      lastProduct = _context.sent;
                      idproducts = lastProduct.length > 0 ? lastProduct[0].idproducts + 1 : 1;
                      newProduct = new _productsModels["default"]({
                        idproducts: idproducts,
                        nameproducts: nameproducts,
                        price: price,
                        descriptions: descriptions,
                        discount: discount,
                        provider: provider,
                        expiration_Data: expiration_Data,
                        stock: stock,
                        image: imagePath,
                        tags: tags
                      });
                      _context.next = 12;
                      return newProduct.save();
                    case 12:
                      savedProduct = _context.sent;
                      _logger["default"].info(savedProduct);
                      res.json({
                        message: 'Product created successfully',
                        product: savedProduct
                      });
                    case 15:
                    case "end":
                      return _context.stop();
                  }
                }, _callee);
              }));
              return function (_x3) {
                return _ref2.apply(this, arguments);
              };
            }());
          } catch (error) {
            _logger["default"].debug(error);
            res.status(400).json({
              message: "".concat(error)
            });
          }
        case 1:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function createProducts(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var getAllProducts = exports.getAllProducts = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return _productsModels["default"].find({}).limit(100).then(function (results) {
            _logger["default"].info('ok');
            res.json(results);
          })["catch"](function (error) {
            _logger["default"].debug(error);
            res.status(400).json({
              message: "".concat(error)
            });
          });
        case 2:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function getAllProducts(_x4, _x5) {
    return _ref3.apply(this, arguments);
  };
}();
var getProductsByName = exports.getProductsByName = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var name;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          name = req.params.nameproducts;
          _logger["default"].info(name);
          _context4.next = 4;
          return _productsModels["default"].find({
            nameproducts: {
              '$regex': name
            }
          }).then(function (results) {
            _logger["default"].info(results);
            res.json(results);
          })["catch"](function (error) {
            _logger["default"].debug(error);
            res.status(400).json({
              message: "".concat(error)
            });
          });
        case 4:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function getProductsByName(_x6, _x7) {
    return _ref4.apply(this, arguments);
  };
}();
var getProductsById = exports.getProductsById = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var name;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          name = req.params.idproducts;
          _logger["default"].info(name);
          _context5.next = 4;
          return _productsModels["default"].find({
            idproducts: name
          }).then(function (results) {
            _logger["default"].info(results);
            res.json(results);
          })["catch"](function (error) {
            _logger["default"].debug(error);
            res.status(400).json({
              message: "".concat(error)
            });
          });
        case 4:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function getProductsById(_x8, _x9) {
    return _ref5.apply(this, arguments);
  };
}();
var getProductsByDiscount = exports.getProductsByDiscount = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return _productsModels["default"].find({
            discount: {
              $ne: null
            }
          }).then(function (results) {
            _logger["default"].info(results);
            res.json(results);
          })["catch"](function (error) {
            _logger["default"].debug(error);
            res.status(400).json({
              message: "".concat(error)
            });
          });
        case 2:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function getProductsByDiscount(_x10, _x11) {
    return _ref6.apply(this, arguments);
  };
}();
var putProductsById = exports.putProductsById = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var updateproduct;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _context7.next = 3;
          return _productsModels["default"].findOneAndUpdate({
            idproducts: req.params.idproducts
          }, req.body, {
            "new": true
          } // Esto asegura que devuelve el producto actualizado
          );
        case 3:
          updateproduct = _context7.sent;
          _logger["default"].info(updateproduct);
          res.status(200).json(updateproduct);
          _context7.next = 12;
          break;
        case 8:
          _context7.prev = 8;
          _context7.t0 = _context7["catch"](0);
          _logger["default"].debug(_context7.t0);
          res.status(500).json({
            message: "Error updating product"
          }); // Asegúrate de manejar errores con una respuesta
        case 12:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[0, 8]]);
  }));
  return function putProductsById(_x12, _x13) {
    return _ref7.apply(this, arguments);
  };
}();
var deleteProductsById = exports.deleteProductsById = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var name;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          name = req.params.idproducts;
          _logger["default"].info(name);
          _context8.next = 4;
          return _productsModels["default"].find({
            idproducts: name
          }).remove().then(function (results) {
            _logger["default"].info("The product ".concat(name, " has been removed"));
            res.json("The product ".concat(name, " has been removed"));
          })["catch"](function (error) {
            _logger["default"].debug(error);
            res.status(400).json({
              message: "".concat(error)
            });
          });
        case 4:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  }));
  return function deleteProductsById(_x14, _x15) {
    return _ref8.apply(this, arguments);
  };
}();
var deleteAllProducts = exports.deleteAllProducts = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return _productsModels["default"].deleteMany({}).remove().then(function (results) {
            _logger["default"].info("The products has been removed");
            res.json("The products has been removed");
          })["catch"](function (error) {
            _logger["default"].debug(error);
            res.status(400).json({
              message: "".concat(error)
            });
          });
        case 2:
        case "end":
          return _context9.stop();
      }
    }, _callee9);
  }));
  return function deleteAllProducts(_x16, _x17) {
    return _ref9.apply(this, arguments);
  };
}();
var insertExcelProducts = exports.insertExcelProducts = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
    var xlData, i, Data, new_Data, nameproducts, idproducts, descriptions, price, discount, provider, expiration_Data, stock, image, tags, newProducts, savedProducts;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          try {
            xlData = _xlsx["default"].utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
            for (i = 0; i < xlData.length; i++) {
              Data = xlData[i];
              new_Data = Object.values(Data);
              _logger["default"].info(new_Data);
              nameproducts = new_Data[4];
              idproducts = new_Data[0];
              descriptions = new_Data[5];
              price = new_Data[3];
              discount = new_Data[2];
              provider = new_Data[6];
              expiration_Data = new_Data[7];
              stock = new_Data[1];
              image = new_Data[8];
              tags = new_Data[9];
              newProducts = new _productsModels["default"]({
                idproducts: idproducts,
                nameproducts: nameproducts,
                price: price,
                descriptions: descriptions,
                discount: discount,
                provider: provider,
                expiration_Data: expiration_Data,
                stock: stock,
                image: image,
                tags: tags
              });
              savedProducts = newProducts.save();
              _logger["default"].info(savedProducts);
              //res.json('Saved with excel');
            }
          } catch (error) {
            _logger["default"].debug(error);
          }
        case 1:
        case "end":
          return _context10.stop();
      }
    }, _callee10);
  }));
  return function insertExcelProducts(_x18, _x19) {
    return _ref10.apply(this, arguments);
  };
}();
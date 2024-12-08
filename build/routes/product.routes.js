"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var productsCtrl = _interopRequireWildcard(require("../controllers/products.controller.js"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var router = (0, _express.Router)();
router.post('/', productsCtrl.createProducts);
router.get('/excel', productsCtrl.insertExcelProducts);
router.get('/discount', productsCtrl.getProductsByDiscount);
router.get('/all', productsCtrl.getAllProducts);
router.get('/:nameproducts', productsCtrl.getProductsByName);
router.get('/id/:idproducts', productsCtrl.getProductsById);
router.put('/:idproducts', productsCtrl.putProductsById);
router["delete"]('/:idproducts', productsCtrl.deleteProductsById);
router["delete"]('', productsCtrl.deleteAllProducts);
var _default = exports["default"] = router;
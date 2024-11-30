"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.putSuggestedById = exports.insertExcelSuggested = exports.getSuggestedDiscount = exports.getSuggestedByName = exports.getSuggestById = exports.getAllSuggested = exports.deleteSuggestedById = exports.deleteAllSuggested = exports.createSuggested = void 0;
var _express = require("express");
var _suggested = _interopRequireDefault(require("../models/suggested.models"));
var _xlsx = _interopRequireDefault(require("xlsx"));
var _logger = _interopRequireDefault(require("../logger"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
//var workbook = Xlsx.readFile('/src/controllers/test.xlsx');
//var sheet_name_list = workbook.SheetNames;

var createSuggested = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _suggested["default"].find().sort({
              $natural: -1
            }).limit(1).then(function (results) {
              var Data = results;
              if (Data.length === 0) {
                var _req$body = req.body,
                  namesuggested = _req$body.namesuggested,
                  descriptions = _req$body.descriptions,
                  price = _req$body.price,
                  discount = _req$body.discount,
                  provider = _req$body.provider,
                  expiration_Data = _req$body.expiration_Data,
                  stock = _req$body.stock,
                  image = _req$body.image,
                  tags = _req$body.tags;
                var idsuggested = 1;
                var newSuggested = new _suggested["default"]({
                  idsuggested: idsuggested,
                  namesuggested: namesuggested,
                  price: price,
                  descriptions: descriptions,
                  discount: discount,
                  provider: provider,
                  expiration_Data: expiration_Data,
                  stock: stock,
                  image: image,
                  tags: tags
                });
                var savedSuggested = newSuggested.save();
                _logger["default"].info(savedSuggested);
                res.json('Saved The Number One Suggested');
              } else {
                var _req$body2 = req.body,
                  _namesuggested = _req$body2.namesuggested,
                  _descriptions = _req$body2.descriptions,
                  _price = _req$body2.price,
                  _discount = _req$body2.discount,
                  _provider = _req$body2.provider,
                  _expiration_Data = _req$body2.expiration_Data,
                  _stock = _req$body2.stock,
                  _image = _req$body2.image,
                  _tags = _req$body2.tags;
                var value = results[0].idsuggested;
                var _idsuggested = value + 1;
                var _newSuggested = new _suggested["default"]({
                  idsuggested: _idsuggested,
                  namesuggested: _namesuggested,
                  price: _price,
                  descriptions: _descriptions,
                  discount: _discount,
                  provider: _provider,
                  expiration_Data: _expiration_Data,
                  stock: _stock,
                  image: _image,
                  tags: _tags
                });
                var _savedSuggested = _newSuggested.save();
                _logger["default"].info(_savedSuggested);
                res.json('Saved New Suggested');
              }
            })["catch"](function (error) {
              _logger["default"].debug(error);
              res.status(400).json({
                message: "".concat(error)
              });
            });
          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return function createSuggested(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.createSuggested = createSuggested;
var getAllSuggested = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _suggested["default"].find({}).then(function (results) {
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
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return function getAllSuggested(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.getAllSuggested = getAllSuggested;
var getSuggestedDiscount = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _suggested["default"].find({
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
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return function getSuggestedDiscount(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
exports.getSuggestedDiscount = getSuggestedDiscount;
var getSuggestedByName = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var name;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            name = req.params.namesuggested;
            _logger["default"].info(name);
            _context4.next = 4;
            return _suggested["default"].find({
              namesuggested: {
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
      }
    }, _callee4);
  }));
  return function getSuggestedByName(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
exports.getSuggestedByName = getSuggestedByName;
var getSuggestById = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var name;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            name = req.params.idsuggested;
            _logger["default"].info(name);
            _context5.next = 4;
            return Products.find({
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
      }
    }, _callee5);
  }));
  return function getSuggestById(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
exports.getSuggestById = getSuggestById;
var putSuggestedById = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var updatesuggested;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return _suggested["default"].findOneAndUpdate({
              idsuggested: req.params.idsuggested
            }, req.body, {
              "new": true
            });
          case 3:
            updatesuggested = _context6.sent;
            _logger["default"].info(updatesuggested);
            res.status(200).json(updatesuggested);
            _context6.next = 11;
            break;
          case 8:
            _context6.prev = 8;
            _context6.t0 = _context6["catch"](0);
            _logger["default"].debug(_context6.t0);
          case 11:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 8]]);
  }));
  return function putSuggestedById(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
exports.putSuggestedById = putSuggestedById;
var deleteSuggestedById = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var name;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            name = req.params.idsuggested;
            _logger["default"].info(name);
            _context7.next = 4;
            return _suggested["default"].find({
              idsuggested: name
            }).remove().then(function (results) {
              _logger["default"].info("The suggested ".concat(name, " has been removed"));
              res.json("The suggested ".concat(name, " has been removed"));
            })["catch"](function (error) {
              _logger["default"].debug(error);
              res.status(400).json({
                message: "".concat(error)
              });
            });
          case 4:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
  return function deleteSuggestedById(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();
exports.deleteSuggestedById = deleteSuggestedById;
var deleteAllSuggested = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return _suggested["default"].deleteMany({}).remove().then(function (results) {
              _logger["default"].info("The suggested has been removed");
              res.json("The suggested has been removed");
            })["catch"](function (error) {
              _logger["default"].debug(error);
              res.status(400).json({
                message: "".concat(error)
              });
            });
          case 2:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));
  return function deleteAllSuggested(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();
exports.deleteAllSuggested = deleteAllSuggested;
var insertExcelSuggested = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var xlData, i, Data, new_Data, namesuggested, idsuggested, descriptions, price, discount, provider, expiration_Data, stock, image, tags, newSuggested, savedSuggested;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            try {
              xlData = _xlsx["default"].utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
              for (i = 0; i < xlData.length; i++) {
                Data = xlData[i];
                new_Data = Object.values(Data);
                _logger["default"].info(new_Data);
                namesuggested = new_Data[4];
                idsuggested = new_Data[0];
                descriptions = new_Data[5];
                price = new_Data[3];
                discount = new_Data[2];
                provider = new_Data[6];
                expiration_Data = new_Data[7];
                stock = new_Data[1];
                image = new_Data[8];
                tags = new_Data[9];
                newSuggested = new _suggested["default"]({
                  idsuggested: idsuggested,
                  namesuggested: namesuggested,
                  price: price,
                  descriptions: descriptions,
                  discount: discount,
                  provider: provider,
                  expiration_Data: expiration_Data,
                  stock: stock,
                  image: image,
                  tags: tags
                });
                savedSuggested = newSuggested.save();
                _logger["default"].info(savedSuggested);
              }
            } catch (error) {
              _logger["default"].debug(error);
            }
          case 1:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));
  return function insertExcelSuggested(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();
exports.insertExcelSuggested = insertExcelSuggested;
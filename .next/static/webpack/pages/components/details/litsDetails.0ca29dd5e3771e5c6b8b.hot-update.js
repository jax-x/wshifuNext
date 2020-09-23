webpackHotUpdate_N_E("pages/components/details/litsDetails",{

/***/ "./pages/components/details/litsDetails.js":
/*!*************************************************!*\
  !*** ./pages/components/details/litsDetails.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var antd_lib_descriptions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/descriptions */ "./node_modules/antd/lib/descriptions/index.js");
/* harmony import */ var antd_lib_descriptions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_descriptions__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _homeLayout_myLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../homeLayout/myLayout */ "./pages/components/homeLayout/myLayout.js");





var _this = undefined,
    _jsxFileName = "C:\\Users\\Administrator\\Desktop\\shifu-list\\pages\\components\\details\\litsDetails.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var ListDetails = function ListDetails(props) {
  console.log(props, '????');
  return __jsx(_homeLayout_myLayout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx(antd_lib_descriptions__WEBPACK_IMPORTED_MODULE_3___default.a, {
    title: "",
    layout: "vertical",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, __jsx(antd_lib_descriptions__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
    label: "UserName",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }
  }, props.data.name), __jsx(antd_lib_descriptions__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
    label: "\u661F\u7EA7",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }
  }, "".concat(props.data.level)), __jsx(antd_lib_descriptions__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
    label: "Address",
    span: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }, props.data.crumbName), __jsx(antd_lib_descriptions__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
    label: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }, __jsx("img", {
    alt: "..",
    src: props.data.portrait,
    style: {
      width: 150,
      height: 150
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 21
    }
  }))));
};

_c = ListDetails;

ListDetails.getInitialProps = /*#__PURE__*/function () {
  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
    var id, res, data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = context.query.id;
            _context.next = 3;
            return fetch("https://worker-api.wanshifu.com/master/details", {
              method: "POST",
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              },
              body: "masterId=".concat(id)
            });

          case 3:
            res = _context.sent;
            _context.next = 6;
            return res.json();

          case 6:
            data = _context.sent;
            return _context.abrupt("return", _objectSpread({}, data));

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (ListDetails);

var _c;

$RefreshReg$(_c, "ListDetails");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9kZXRhaWxzL2xpdHNEZXRhaWxzLmpzIl0sIm5hbWVzIjpbIkxpc3REZXRhaWxzIiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsIm5hbWUiLCJsZXZlbCIsImNydW1iTmFtZSIsInBvcnRyYWl0Iiwid2lkdGgiLCJoZWlnaHQiLCJnZXRJbml0aWFsUHJvcHMiLCJjb250ZXh0IiwiaWQiLCJxdWVyeSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJyZXMiLCJqc29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLEtBQUQsRUFBVztBQUMzQkMsU0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVosRUFBa0IsTUFBbEI7QUFDQSxTQUNJLE1BQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQWMsU0FBSyxFQUFDLEVBQXBCO0FBQXVCLFVBQU0sRUFBQyxVQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksbUVBQWMsSUFBZDtBQUFtQixTQUFLLEVBQUMsVUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFxQ0EsS0FBSyxDQUFDRyxJQUFOLENBQVdDLElBQWhELENBREosRUFFSSxtRUFBYyxJQUFkO0FBQW1CLFNBQUssRUFBQyxjQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQWtDSixLQUFLLENBQUNHLElBQU4sQ0FBV0UsS0FBN0MsRUFGSixFQUdJLG1FQUFjLElBQWQ7QUFBbUIsU0FBSyxFQUFDLFNBQXpCO0FBQW1DLFFBQUksRUFBRSxDQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tMLEtBQUssQ0FBQ0csSUFBTixDQUFXRyxTQURoQixDQUhKLEVBTUksbUVBQWMsSUFBZDtBQUFtQixTQUFLLEVBQUMsRUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssT0FBRyxFQUFDLElBQVQ7QUFBYyxPQUFHLEVBQUVOLEtBQUssQ0FBQ0csSUFBTixDQUFXSSxRQUE5QjtBQUF3QyxTQUFLLEVBQUU7QUFBRUMsV0FBSyxFQUFDLEdBQVI7QUFBWUMsWUFBTSxFQUFDO0FBQW5CLEtBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQU5KLENBREosQ0FESjtBQWNILENBaEJEOztLQUFNVixXOztBQWtCTkEsV0FBVyxDQUFDVyxlQUFaO0FBQUEsOExBQThCLGlCQUFnQkMsT0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2xCQyxjQURrQixHQUNYRCxPQUFPLENBQUNFLEtBREcsQ0FDbEJELEVBRGtCO0FBQUE7QUFBQSxtQkFFUkUsS0FBSyxDQUFDLGdEQUFELEVBQW1EO0FBQ3RFQyxvQkFBTSxFQUFFLE1BRDhEO0FBRXRFQyxxQkFBTyxFQUFFO0FBQ0wsZ0NBQWdCO0FBRFgsZUFGNkQ7QUFLdEVDLGtCQUFJLHFCQUFjTCxFQUFkO0FBTGtFLGFBQW5ELENBRkc7O0FBQUE7QUFFcEJNLGVBRm9CO0FBQUE7QUFBQSxtQkFTUEEsR0FBRyxDQUFDQyxJQUFKLEVBVE87O0FBQUE7QUFTcEJoQixnQkFUb0I7QUFBQSwrREFhZEEsSUFiYzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUE5Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFnQmVKLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NvbXBvbmVudHMvZGV0YWlscy9saXRzRGV0YWlscy4wY2EyOWRkNWUzNzcxZTVjNmI4Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGVzY3JpcHRpb25zIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBNeUxheW91dCBmcm9tICcuLi9ob21lTGF5b3V0L215TGF5b3V0J1xyXG5cclxuY29uc3QgTGlzdERldGFpbHMgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHByb3BzLCc/Pz8/Jyk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxNeUxheW91dD5cclxuICAgICAgICAgICAgPERlc2NyaXB0aW9ucyB0aXRsZT1cIlwiIGxheW91dD1cInZlcnRpY2FsXCI+XHJcbiAgICAgICAgICAgICAgICA8RGVzY3JpcHRpb25zLkl0ZW0gbGFiZWw9XCJVc2VyTmFtZVwiPntwcm9wcy5kYXRhLm5hbWV9PC9EZXNjcmlwdGlvbnMuSXRlbT5cclxuICAgICAgICAgICAgICAgIDxEZXNjcmlwdGlvbnMuSXRlbSBsYWJlbD1cIuaYn+e6p1wiPntgJHtwcm9wcy5kYXRhLmxldmVsfWB9PC9EZXNjcmlwdGlvbnMuSXRlbT5cclxuICAgICAgICAgICAgICAgIDxEZXNjcmlwdGlvbnMuSXRlbSBsYWJlbD1cIkFkZHJlc3NcIiBzcGFuPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMuZGF0YS5jcnVtYk5hbWV9XHJcbiAgICAgICAgICAgICAgICA8L0Rlc2NyaXB0aW9ucy5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPERlc2NyaXB0aW9ucy5JdGVtIGxhYmVsPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBhbHQ9XCIuLlwiIHNyYz17cHJvcHMuZGF0YS5wb3J0cmFpdH0gc3R5bGU9e3sgd2lkdGg6MTUwLGhlaWdodDoxNTAgfX0gLz5cclxuICAgICAgICAgICAgICAgIDwvRGVzY3JpcHRpb25zLkl0ZW0+XHJcbiAgICAgICAgICAgIDwvRGVzY3JpcHRpb25zPlxyXG4gICAgICAgIDwvTXlMYXlvdXQ+XHJcbiAgICApXHJcbn1cclxuXHJcbkxpc3REZXRhaWxzLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uIChjb250ZXh0KSB7XHJcbiAgICBjb25zdCB7IGlkIH0gPSBjb250ZXh0LnF1ZXJ5O1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwczovL3dvcmtlci1hcGkud2Fuc2hpZnUuY29tL21hc3Rlci9kZXRhaWxzXCIsIHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBgbWFzdGVySWQ9JHtpZH1gXHJcbiAgICB9KVxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAvLyByZXR1cm4ge1xyXG4gICAgLy8gICAgIHNob3dzOiBkYXRhXHJcbiAgICAvLyB9XHJcbiAgICByZXR1cm4geyAuLi5kYXRhIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpc3REZXRhaWxzIl0sInNvdXJjZVJvb3QiOiIifQ==
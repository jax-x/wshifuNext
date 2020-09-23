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
    title: "\u8BE6\u60C5\u4FE1\u606F",
    layout: "vertical",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, __jsx(antd_lib_descriptions__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
    label: "\u59D3\u540D",
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
    label: "\u5730\u5740",
    span: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }, props.data.crumbName), __jsx(antd_lib_descriptions__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
    label: "\u670D\u52A1\u7C7B\u578B",
    span: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }, props.data.serveTypes), __jsx(antd_lib_descriptions__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9kZXRhaWxzL2xpdHNEZXRhaWxzLmpzIl0sIm5hbWVzIjpbIkxpc3REZXRhaWxzIiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsIm5hbWUiLCJsZXZlbCIsImNydW1iTmFtZSIsInNlcnZlVHlwZXMiLCJwb3J0cmFpdCIsIndpZHRoIiwiaGVpZ2h0IiwiZ2V0SW5pdGlhbFByb3BzIiwiY29udGV4dCIsImlkIiwicXVlcnkiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwicmVzIiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxLQUFELEVBQVc7QUFDM0JDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaLEVBQWtCLE1BQWxCO0FBQ0EsU0FDSSxNQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFjLFNBQUssRUFBQywwQkFBcEI7QUFBMkIsVUFBTSxFQUFDLFVBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxtRUFBYyxJQUFkO0FBQW1CLFNBQUssRUFBQyxjQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQStCQSxLQUFLLENBQUNHLElBQU4sQ0FBV0MsSUFBMUMsQ0FESixFQUVJLG1FQUFjLElBQWQ7QUFBbUIsU0FBSyxFQUFDLGNBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBa0NKLEtBQUssQ0FBQ0csSUFBTixDQUFXRSxLQUE3QyxFQUZKLEVBR0ksbUVBQWMsSUFBZDtBQUFtQixTQUFLLEVBQUMsY0FBekI7QUFBOEIsUUFBSSxFQUFFLENBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBd0NMLEtBQUssQ0FBQ0csSUFBTixDQUFXRyxTQUFuRCxDQUhKLEVBSUksbUVBQWMsSUFBZDtBQUFtQixTQUFLLEVBQUMsMEJBQXpCO0FBQWdDLFFBQUksRUFBRSxDQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTBDTixLQUFLLENBQUNHLElBQU4sQ0FBV0ksVUFBckQsQ0FKSixFQU1JLG1FQUFjLElBQWQ7QUFBbUIsU0FBSyxFQUFDLEVBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLE9BQUcsRUFBQyxJQUFUO0FBQWMsT0FBRyxFQUFFUCxLQUFLLENBQUNHLElBQU4sQ0FBV0ssUUFBOUI7QUFBd0MsU0FBSyxFQUFFO0FBQUVDLFdBQUssRUFBQyxHQUFSO0FBQVlDLFlBQU0sRUFBQztBQUFuQixLQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FOSixDQURKLENBREo7QUFjSCxDQWhCRDs7S0FBTVgsVzs7QUFrQk5BLFdBQVcsQ0FBQ1ksZUFBWjtBQUFBLDhMQUE4QixpQkFBZ0JDLE9BQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNsQkMsY0FEa0IsR0FDWEQsT0FBTyxDQUFDRSxLQURHLENBQ2xCRCxFQURrQjtBQUFBO0FBQUEsbUJBRVJFLEtBQUssQ0FBQyxnREFBRCxFQUFtRDtBQUN0RUMsb0JBQU0sRUFBRSxNQUQ4RDtBQUV0RUMscUJBQU8sRUFBRTtBQUNMLGdDQUFnQjtBQURYLGVBRjZEO0FBS3RFQyxrQkFBSSxxQkFBY0wsRUFBZDtBQUxrRSxhQUFuRCxDQUZHOztBQUFBO0FBRXBCTSxlQUZvQjtBQUFBO0FBQUEsbUJBU1BBLEdBQUcsQ0FBQ0MsSUFBSixFQVRPOztBQUFBO0FBU3BCakIsZ0JBVG9CO0FBQUEsK0RBYWRBLElBYmM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBOUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBZ0JlSiwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jb21wb25lbnRzL2RldGFpbHMvbGl0c0RldGFpbHMuMjViNjJkZTNkOWQ3YzJkOWU1YWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERlc2NyaXB0aW9ucyB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgTXlMYXlvdXQgZnJvbSAnLi4vaG9tZUxheW91dC9teUxheW91dCdcclxuXHJcbmNvbnN0IExpc3REZXRhaWxzID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhwcm9wcywnPz8/PycpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TXlMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxEZXNjcmlwdGlvbnMgdGl0bGU9XCLor6bmg4Xkv6Hmga9cIiBsYXlvdXQ9XCJ2ZXJ0aWNhbFwiPlxyXG4gICAgICAgICAgICAgICAgPERlc2NyaXB0aW9ucy5JdGVtIGxhYmVsPVwi5aeT5ZCNXCI+e3Byb3BzLmRhdGEubmFtZX08L0Rlc2NyaXB0aW9ucy5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPERlc2NyaXB0aW9ucy5JdGVtIGxhYmVsPVwi5pif57qnXCI+e2Ake3Byb3BzLmRhdGEubGV2ZWx9YH08L0Rlc2NyaXB0aW9ucy5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPERlc2NyaXB0aW9ucy5JdGVtIGxhYmVsPVwi5Zyw5Z2AXCIgc3Bhbj17Mn0+e3Byb3BzLmRhdGEuY3J1bWJOYW1lfTwvRGVzY3JpcHRpb25zLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8RGVzY3JpcHRpb25zLkl0ZW0gbGFiZWw9XCLmnI3liqHnsbvlnotcIiBzcGFuPXsyfT57cHJvcHMuZGF0YS5zZXJ2ZVR5cGVzfTwvRGVzY3JpcHRpb25zLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxEZXNjcmlwdGlvbnMuSXRlbSBsYWJlbD1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgYWx0PVwiLi5cIiBzcmM9e3Byb3BzLmRhdGEucG9ydHJhaXR9IHN0eWxlPXt7IHdpZHRoOjE1MCxoZWlnaHQ6MTUwIH19IC8+XHJcbiAgICAgICAgICAgICAgICA8L0Rlc2NyaXB0aW9ucy5JdGVtPlxyXG4gICAgICAgICAgICA8L0Rlc2NyaXB0aW9ucz5cclxuICAgICAgICA8L015TGF5b3V0PlxyXG4gICAgKVxyXG59XHJcblxyXG5MaXN0RGV0YWlscy5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbiAoY29udGV4dCkge1xyXG4gICAgY29uc3QgeyBpZCB9ID0gY29udGV4dC5xdWVyeTtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly93b3JrZXItYXBpLndhbnNoaWZ1LmNvbS9tYXN0ZXIvZGV0YWlsc1wiLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogYG1hc3RlcklkPSR7aWR9YFxyXG4gICAgfSlcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgLy8gcmV0dXJuIHtcclxuICAgIC8vICAgICBzaG93czogZGF0YVxyXG4gICAgLy8gfVxyXG4gICAgcmV0dXJuIHsgLi4uZGF0YSB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaXN0RGV0YWlscyJdLCJzb3VyY2VSb290IjoiIn0=
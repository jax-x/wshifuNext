webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/components/list/index.js":
/*!****************************************!*\
  !*** ./pages/components/list/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var antd_lib_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/list */ "./node_modules/antd/lib/list/index.js");
/* harmony import */ var antd_lib_list__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_list__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/row */ "./node_modules/antd/lib/row/index.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/card */ "./node_modules/antd/lib/card/index.js");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _homeLayout_myLayout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../homeLayout/myLayout */ "./pages/components/homeLayout/myLayout.js");







var _this = undefined,
    _jsxFileName = "C:\\Users\\Administrator\\Desktop\\shifu-list\\pages\\components\\list\\index.js";



var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;


var Meta = antd_lib_card__WEBPACK_IMPORTED_MODULE_5___default.a.Meta;

var MyList = function MyList(props) {
  var data = props.shows.data.list;
  console.log(data, 'data?');
  return __jsx(_homeLayout_myLayout__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, data.map(function (it) {
    return __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, {
      type: "flex",
      jus: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 21
      }
    }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 25
      }
    }), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 25
      }
    }));
  }), __jsx(antd_lib_list__WEBPACK_IMPORTED_MODULE_2___default.a, {
    grid: {
      gutter: 16,
      xs: 1,
      sm: 2,
      md: 4,
      lg: 4,
      xl: 6,
      xxl: 3
    },
    dataSource: data,
    renderItem: function renderItem(item) {
      return __jsx(antd_lib_list__WEBPACK_IMPORTED_MODULE_2___default.a.Item, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 21
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/components/details/litsDetails?id=".concat(item.accountId),
        as: "/list/details",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 25
        }
      }, __jsx(antd_lib_card__WEBPACK_IMPORTED_MODULE_5___default.a, {
        hoverable: true,
        style: {
          width: 240
        },
        cover: __jsx("img", {
          alt: "example",
          src: item.ironDir,
          className: "jsx-2189208900",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 40
          }
        }),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 29
        }
      }, __jsx(Meta, {
        title: item.name,
        description: "".concat(item.level, "\u4E07\u7B49\u7EA7"),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 33
        }
      }))));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
    id: "2189208900",
    __self: _this
  }, ".shifu-img.jsx-2189208900{width :200px;height :200px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQWRtaW5pc3RyYXRvclxcRGVza3RvcFxcc2hpZnUtbGlzdFxccGFnZXNcXGNvbXBvbmVudHNcXGxpc3RcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThDb0IsQUFFc0MsYUFDQyxjQUNsQiIsImZpbGUiOiJDOlxcVXNlcnNcXEFkbWluaXN0cmF0b3JcXERlc2t0b3BcXHNoaWZ1LWxpc3RcXHBhZ2VzXFxjb21wb25lbnRzXFxsaXN0XFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpc3QsIENhcmQsIFJvdywgQ29sIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IE15TGF5b3V0IGZyb20gJy4uL2hvbWVMYXlvdXQvbXlMYXlvdXQnXHJcblxyXG5jb25zdCB7IE1ldGEgfSA9IENhcmQ7XHJcblxyXG5jb25zdCBNeUxpc3QgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IGRhdGEgPSBwcm9wcy5zaG93cy5kYXRhLmxpc3Q7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhLCdkYXRhPycpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TXlMYXlvdXQ+XHJcbiAgICAgICAgICAgIHtkYXRhLm1hcChpdD0+e1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8Um93IHR5cGU9J2ZsZXgnIGp1cz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbD48L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbD48L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDxMaXN0XHJcbiAgICAgICAgICAgICAgICBncmlkPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3V0dGVyOiAxNixcclxuICAgICAgICAgICAgICAgICAgICB4czogMSxcclxuICAgICAgICAgICAgICAgICAgICBzbTogMixcclxuICAgICAgICAgICAgICAgICAgICBtZDogNCxcclxuICAgICAgICAgICAgICAgICAgICBsZzogNCxcclxuICAgICAgICAgICAgICAgICAgICB4bDogNixcclxuICAgICAgICAgICAgICAgICAgICB4eGw6IDMsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgZGF0YVNvdXJjZT17ZGF0YX1cclxuICAgICAgICAgICAgICAgIHJlbmRlckl0ZW09eyhpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9jb21wb25lbnRzL2RldGFpbHMvbGl0c0RldGFpbHM/aWQ9JHtpdGVtLmFjY291bnRJZH1gfSBhcz17YC9saXN0L2RldGFpbHNgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG92ZXJhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDI0MCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdmVyPXs8aW1nIGFsdD1cImV4YW1wbGVcIiBzcmM9e2l0ZW0uaXJvbkRpcn0gLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1ldGEgdGl0bGU9e2l0ZW0ubmFtZX0gZGVzY3JpcHRpb249e2Ake2l0ZW0ubGV2ZWx95LiH562J57qnYH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBgLnNoaWZ1LWltZ3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggOiAyMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0IDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfWBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L015TGF5b3V0PlxyXG4gICAgKVxyXG59XHJcblxyXG5NeUxpc3QuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vd29ya2VyLWFwaS53YW5zaGlmdS5jb20vbWFzdGVyL2xpc3RpbmZvJyk7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgIHJldHVybiB7IHNob3dzOiBkYXRhIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlMaXN0Il19 */\n/*@ sourceURL=C:\\\\Users\\\\Administrator\\\\Desktop\\\\shifu-list\\\\pages\\\\components\\\\list\\\\index.js */"));
};

_c = MyList;
MyList.getInitialProps = /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var res, data;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return fetch('https://worker-api.wanshifu.com/master/listinfo');

        case 2:
          res = _context.sent;
          _context.next = 5;
          return res.json();

        case 5:
          data = _context.sent;
          return _context.abrupt("return", {
            shows: data
          });

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/* harmony default export */ __webpack_exports__["default"] = (MyList);

var _c;

$RefreshReg$(_c, "MyList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9saXN0L2luZGV4LmpzIl0sIm5hbWVzIjpbIk1ldGEiLCJNeUxpc3QiLCJwcm9wcyIsImRhdGEiLCJzaG93cyIsImxpc3QiLCJjb25zb2xlIiwibG9nIiwibWFwIiwiaXQiLCJndXR0ZXIiLCJ4cyIsInNtIiwibWQiLCJsZyIsInhsIiwieHhsIiwiaXRlbSIsImFjY291bnRJZCIsIndpZHRoIiwiaXJvbkRpciIsIm5hbWUiLCJsZXZlbCIsImdldEluaXRpYWxQcm9wcyIsImZldGNoIiwicmVzIiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtJQUVRQSxJLHdEQUFBQSxJOztBQUVSLElBQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLEtBQUQsRUFBVztBQUN0QixNQUFNQyxJQUFJLEdBQUdELEtBQUssQ0FBQ0UsS0FBTixDQUFZRCxJQUFaLENBQWlCRSxJQUE5QjtBQUNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUosSUFBWixFQUFpQixPQUFqQjtBQUNBLFNBQ0ksTUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tBLElBQUksQ0FBQ0ssR0FBTCxDQUFTLFVBQUFDLEVBQUUsRUFBRTtBQUNWLFdBQ0k7QUFBSyxVQUFJLEVBQUMsTUFBVjtBQUFpQixTQUFHLE1BQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRkosQ0FESjtBQU1ILEdBUEEsQ0FETCxFQVNJO0FBQ0ksUUFBSSxFQUFFO0FBQ0ZDLFlBQU0sRUFBRSxFQUROO0FBRUZDLFFBQUUsRUFBRSxDQUZGO0FBR0ZDLFFBQUUsRUFBRSxDQUhGO0FBSUZDLFFBQUUsRUFBRSxDQUpGO0FBS0ZDLFFBQUUsRUFBRSxDQUxGO0FBTUZDLFFBQUUsRUFBRSxDQU5GO0FBT0ZDLFNBQUcsRUFBRTtBQVBILEtBRFY7QUFVSSxjQUFVLEVBQUViLElBVmhCO0FBV0ksY0FBVSxFQUFFLG9CQUFDYyxJQUFEO0FBQUEsYUFDUiwyREFBTSxJQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSSxNQUFDLGdEQUFEO0FBQU0sWUFBSSwrQ0FBd0NBLElBQUksQ0FBQ0MsU0FBN0MsQ0FBVjtBQUFvRSxVQUFFLGlCQUF0RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFDSSxpQkFBUyxNQURiO0FBRUksYUFBSyxFQUFFO0FBQUVDLGVBQUssRUFBRTtBQUFULFNBRlg7QUFHSSxhQUFLLEVBQUU7QUFBSyxhQUFHLEVBQUMsU0FBVDtBQUFtQixhQUFHLEVBQUVGLElBQUksQ0FBQ0csT0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUtJLE1BQUMsSUFBRDtBQUFNLGFBQUssRUFBRUgsSUFBSSxDQUFDSSxJQUFsQjtBQUF3QixtQkFBVyxZQUFLSixJQUFJLENBQUNLLEtBQVYsdUJBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFMSixDQURKLENBREosQ0FEUTtBQUFBLEtBWGhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFUSjtBQUFBO0FBQUE7QUFBQSwyMEdBREo7QUE2Q0gsQ0FoREQ7O0tBQU1yQixNO0FBa0ROQSxNQUFNLENBQUNzQixlQUFQLGlNQUF5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUNIQyxLQUFLLENBQUMsaURBQUQsQ0FERjs7QUFBQTtBQUNmQyxhQURlO0FBQUE7QUFBQSxpQkFFRkEsR0FBRyxDQUFDQyxJQUFKLEVBRkU7O0FBQUE7QUFFZnZCLGNBRmU7QUFBQSwyQ0FHZDtBQUFFQyxpQkFBSyxFQUFFRDtBQUFULFdBSGM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBekI7QUFNZUYscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC42ZWYzNDY3ZWE5MTEwMTRmYzMyYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGlzdCwgQ2FyZCwgUm93LCBDb2wgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgTXlMYXlvdXQgZnJvbSAnLi4vaG9tZUxheW91dC9teUxheW91dCdcclxuXHJcbmNvbnN0IHsgTWV0YSB9ID0gQ2FyZDtcclxuXHJcbmNvbnN0IE15TGlzdCA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgZGF0YSA9IHByb3BzLnNob3dzLmRhdGEubGlzdDtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEsJ2RhdGE/Jyk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxNeUxheW91dD5cclxuICAgICAgICAgICAge2RhdGEubWFwKGl0PT57XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxSb3cgdHlwZT0nZmxleCcganVzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sPjwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sPjwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPExpc3RcclxuICAgICAgICAgICAgICAgIGdyaWQ9e3tcclxuICAgICAgICAgICAgICAgICAgICBndXR0ZXI6IDE2LFxyXG4gICAgICAgICAgICAgICAgICAgIHhzOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIHNtOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIG1kOiA0LFxyXG4gICAgICAgICAgICAgICAgICAgIGxnOiA0LFxyXG4gICAgICAgICAgICAgICAgICAgIHhsOiA2LFxyXG4gICAgICAgICAgICAgICAgICAgIHh4bDogMyxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBkYXRhU291cmNlPXtkYXRhfVxyXG4gICAgICAgICAgICAgICAgcmVuZGVySXRlbT17KGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2NvbXBvbmVudHMvZGV0YWlscy9saXRzRGV0YWlscz9pZD0ke2l0ZW0uYWNjb3VudElkfWB9IGFzPXtgL2xpc3QvZGV0YWlsc2B9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3ZlcmFibGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogMjQwIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY292ZXI9ezxpbWcgYWx0PVwiZXhhbXBsZVwiIHNyYz17aXRlbS5pcm9uRGlyfSAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWV0YSB0aXRsZT17aXRlbS5uYW1lfSBkZXNjcmlwdGlvbj17YCR7aXRlbS5sZXZlbH3kuIfnrYnnuqdgfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGAuc2hpZnUtaW1ne1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aCA6IDIwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQgOiAyMDBweDtcclxuICAgICAgICAgICAgICAgICAgICB9YFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvTXlMYXlvdXQ+XHJcbiAgICApXHJcbn1cclxuXHJcbk15TGlzdC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly93b3JrZXItYXBpLndhbnNoaWZ1LmNvbS9tYXN0ZXIvbGlzdGluZm8nKTtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgcmV0dXJuIHsgc2hvd3M6IGRhdGEgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUxpc3QiXSwic291cmNlUm9vdCI6IiJ9
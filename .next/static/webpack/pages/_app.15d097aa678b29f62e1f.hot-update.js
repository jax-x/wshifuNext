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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _homeLayout_myLayout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../homeLayout/myLayout */ "./pages/components/homeLayout/myLayout.js");







var _this = undefined,
    _jsxFileName = "C:\\Users\\Administrator\\Desktop\\shifu-list\\pages\\components\\list\\index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;


var Meta = antd_lib_card__WEBPACK_IMPORTED_MODULE_5___default.a.Meta;

var MyList = function MyList(props) {
  var data = props.shows.data.list;
  console.log(data, 'data?');
  return __jsx(_homeLayout_myLayout__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, {
    type: "flex",
    justify: "space-around",
    align: "middle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 21
    }
  }, data.map(function (it) {
    return __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
      span: 12,
      style: {
        height: 120,
        marginBottom: 10
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 37
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
      href: "/components/details/litsDetails?id=".concat(it.accountId),
      as: "/list/details",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 41
      }
    }, __jsx("img", {
      src: it.ironDir,
      style: {
        width: 120,
        height: 120,
        cursor: 'pointer'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 45
      }
    })), __jsx("div", {
      style: {
        height: 120,
        display: 'inline-block',
        marginLeft: 10
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 41
      }
    }, __jsx("p", {
      style: {
        fontWeight: 700,
        fontSize: 18
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 45
      }
    }, "\u59D3\u540D\uFF1A", it.name), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 45
      }
    }, "\u670D\u52A1\u8BC4\u5206\uFF1A", it.starsAvg, "\u5206"), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 45
      }
    }, "\u670D\u52A1\u6B21\u6570\uFF1A", __jsx("span", {
      style: {
        color: 'darkgreen'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 53
      }
    }, it.workTimes), "\u6B21")));
  })), __jsx(antd_lib_list__WEBPACK_IMPORTED_MODULE_2___default.a, {
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
          lineNumber: 52,
          columnNumber: 21
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/components/details/litsDetails?id=".concat(item.accountId),
        as: "/list/details",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
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
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 40
          }
        }),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 29
        }
      }, __jsx(Meta, {
        title: item.name,
        description: "".concat(item.level, "\u4E07\u7B49\u7EA7"),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 33
        }
      }))));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9saXN0L2luZGV4LmpzIl0sIm5hbWVzIjpbIk1ldGEiLCJNeUxpc3QiLCJwcm9wcyIsImRhdGEiLCJzaG93cyIsImxpc3QiLCJjb25zb2xlIiwibG9nIiwibWFwIiwiaXQiLCJoZWlnaHQiLCJtYXJnaW5Cb3R0b20iLCJhY2NvdW50SWQiLCJpcm9uRGlyIiwid2lkdGgiLCJjdXJzb3IiLCJkaXNwbGF5IiwibWFyZ2luTGVmdCIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsIm5hbWUiLCJzdGFyc0F2ZyIsImNvbG9yIiwid29ya1RpbWVzIiwiZ3V0dGVyIiwieHMiLCJzbSIsIm1kIiwibGciLCJ4bCIsInh4bCIsIml0ZW0iLCJsZXZlbCIsImdldEluaXRpYWxQcm9wcyIsImZldGNoIiwicmVzIiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtJQUVRQSxJLHdEQUFBQSxJOztBQUVSLElBQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLEtBQUQsRUFBVztBQUN0QixNQUFNQyxJQUFJLEdBQUdELEtBQUssQ0FBQ0UsS0FBTixDQUFZRCxJQUFaLENBQWlCRSxJQUE5QjtBQUNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUosSUFBWixFQUFpQixPQUFqQjtBQUNBLFNBQ0ksTUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRVk7QUFBSyxRQUFJLEVBQUMsTUFBVjtBQUFpQixXQUFPLEVBQUMsY0FBekI7QUFBd0MsU0FBSyxFQUFDLFFBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS0EsSUFBSSxDQUFDSyxHQUFMLENBQVMsVUFBQUMsRUFBRSxFQUFFO0FBQ1YsV0FDUTtBQUFLLFVBQUksRUFBRSxFQUFYO0FBQWUsV0FBSyxFQUFFO0FBQUVDLGNBQU0sRUFBQyxH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QTtBQUFBLGlCQUVGQSxHQUFHLENBQUNDLElBQUosRUFGRTs7QUFBQTtBQUVmakMsY0FGZTtBQUFBLDJDQUdkO0FBQUVDLGlCQUFLLEVBQUVEO0FBQVQsV0FIYzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUF6QjtBQU1lRixxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjE1ZDA5N2FhNjc4YjI5ZjYyZTFmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaXN0LCBDYXJkLCBSb3csIENvbCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBNeUxheW91dCBmcm9tICcuLi9ob21lTGF5b3V0L215TGF5b3V0J1xyXG5cclxuY29uc3QgeyBNZXRhIH0gPSBDYXJkO1xyXG5cclxuY29uc3QgTXlMaXN0ID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0gcHJvcHMuc2hvd3MuZGF0YS5saXN0O1xyXG4gICAgY29uc29sZS5sb2coZGF0YSwnZGF0YT8nKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPE15TGF5b3V0PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8Um93IHR5cGU9J2ZsZXgnIGp1c3RpZnk9J3NwYWNlLWFyb3VuZCcgYWxpZ249J21pZGRsZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLm1hcChpdD0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzcGFuPXsxMn0gc3R5bGU9e3sgaGVpZ2h0OjEyMCxtYXJnaW5Cb3R0b206MTAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2NvbXBvbmVudHMvZGV0YWlscy9saXRzRGV0YWlscz9pZD0ke2l0LmFjY291bnRJZH1gfSBhcz17YC9saXN0L2RldGFpbHNgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXQuaXJvbkRpcn0gc3R5bGU9e3sgd2lkdGg6MTIwLGhlaWdodDoxMjAsY3Vyc29yOidwb2ludGVyJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6MTIwLGRpc3BsYXk6J2lubGluZS1ibG9jaycsbWFyZ2luTGVmdDoxMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBmb250V2VpZ2h0OjcwMCxmb250U2l6ZToxOCB9fT7lp5PlkI3vvJp7aXQubmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+5pyN5Yqh6K+E5YiG77yae2l0LnN0YXJzQXZnfeWIhjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD7mnI3liqHmrKHmlbDvvJo8c3BhbiBzdHlsZT17eyBjb2xvcjonZGFya2dyZWVuJyB9fT57aXQud29ya1RpbWVzfTwvc3Bhbj7mrKE8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxDb2wgc3R5bGU9e3sgbWFyZ2luTGVmdDoxMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OjEyMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBmb250V2VpZ2h0OjcwMCxmb250U2l6ZToxOCB9fT7lp5PlkI3vvJp7aXQubmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+5pyN5Yqh6K+E5YiG77yae2l0LnN0YXJzQXZnfeWIhjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD7mnI3liqHmrKHmlbDvvJo8c3BhbiBzdHlsZT17eyBjb2xvcjonZGFya2dyZWVuJyB9fT57aXQud29ya1RpbWVzfTwvc3Bhbj7mrKE8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPExpc3RcclxuICAgICAgICAgICAgICAgIGdyaWQ9e3tcclxuICAgICAgICAgICAgICAgICAgICBndXR0ZXI6IDE2LFxyXG4gICAgICAgICAgICAgICAgICAgIHhzOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIHNtOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIG1kOiA0LFxyXG4gICAgICAgICAgICAgICAgICAgIGxnOiA0LFxyXG4gICAgICAgICAgICAgICAgICAgIHhsOiA2LFxyXG4gICAgICAgICAgICAgICAgICAgIHh4bDogMyxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBkYXRhU291cmNlPXtkYXRhfVxyXG4gICAgICAgICAgICAgICAgcmVuZGVySXRlbT17KGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2NvbXBvbmVudHMvZGV0YWlscy9saXRzRGV0YWlscz9pZD0ke2l0ZW0uYWNjb3VudElkfWB9IGFzPXtgL2xpc3QvZGV0YWlsc2B9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3ZlcmFibGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogMjQwIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY292ZXI9ezxpbWcgYWx0PVwiZXhhbXBsZVwiIHNyYz17aXRlbS5pcm9uRGlyfSAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWV0YSB0aXRsZT17aXRlbS5uYW1lfSBkZXNjcmlwdGlvbj17YCR7aXRlbS5sZXZlbH3kuIfnrYnnuqdgfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB7LyogPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBgLnNoaWZ1LWltZ3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggOiAyMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0IDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfWBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9zdHlsZT4gKi99XHJcbiAgICAgICAgPC9NeUxheW91dD5cclxuICAgIClcclxufVxyXG5cclxuTXlMaXN0LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL3dvcmtlci1hcGkud2Fuc2hpZnUuY29tL21hc3Rlci9saXN0aW5mbycpO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICByZXR1cm4geyBzaG93czogZGF0YSB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15TGlzdCJdLCJzb3VyY2VSb290IjoiIn0=
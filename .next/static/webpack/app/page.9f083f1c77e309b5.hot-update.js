"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/components/shop.jsx":
/*!*************************************!*\
  !*** ./src/app/components/shop.jsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n//use〇〇を使うときは、\"use client\";を先頭で宣言する\n\nfunction Shop() {\n    _s();\n    const [items, setItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(\"https://fakestoreapi.com/products\").then((res)=>res.json()).then((json)=>{\n            console.log(json);\n            setItems(json);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"shop\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"shopTitle\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"E-commerce Shop\"\n                }, void 0, false, {\n                    fileName: \"/Users/a.soma/Desktop/shopping-site-nextjs/shopping-site-next.js/src/app/components/shop.jsx\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/a.soma/Desktop/shopping-site-nextjs/shopping-site-next.js/src/app/components/shop.jsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"products\",\n                children: items.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: item.id\n                            }, void 0, false, {\n                                fileName: \"/Users/a.soma/Desktop/shopping-site-nextjs/shopping-site-next.js/src/app/components/shop.jsx\",\n                                lineNumber: 28,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: item.title\n                            }, void 0, false, {\n                                fileName: \"/Users/a.soma/Desktop/shopping-site-nextjs/shopping-site-next.js/src/app/components/shop.jsx\",\n                                lineNumber: 29,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: item.price\n                            }, void 0, false, {\n                                fileName: \"/Users/a.soma/Desktop/shopping-site-nextjs/shopping-site-next.js/src/app/components/shop.jsx\",\n                                lineNumber: 30,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: item.category\n                            }, void 0, false, {\n                                fileName: \"/Users/a.soma/Desktop/shopping-site-nextjs/shopping-site-next.js/src/app/components/shop.jsx\",\n                                lineNumber: 31,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: item.description\n                            }, void 0, false, {\n                                fileName: \"/Users/a.soma/Desktop/shopping-site-nextjs/shopping-site-next.js/src/app/components/shop.jsx\",\n                                lineNumber: 32,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: item.image\n                            }, void 0, false, {\n                                fileName: \"/Users/a.soma/Desktop/shopping-site-nextjs/shopping-site-next.js/src/app/components/shop.jsx\",\n                                lineNumber: 33,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, item.id, true, {\n                        fileName: \"/Users/a.soma/Desktop/shopping-site-nextjs/shopping-site-next.js/src/app/components/shop.jsx\",\n                        lineNumber: 27,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/a.soma/Desktop/shopping-site-nextjs/shopping-site-next.js/src/app/components/shop.jsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/a.soma/Desktop/shopping-site-nextjs/shopping-site-next.js/src/app/components/shop.jsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n}\n_s(Shop, \"E85yb7BhBnl3/OpymRdjFiQJ97s=\");\n_c = Shop;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Shop);\nvar _c;\n$RefreshReg$(_c, \"Shop\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9zaG9wLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxtQ0FBbUM7QUFFZTtBQUVsRCxTQUFTRzs7SUFFTCxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR0gsK0NBQVFBLENBQUMsRUFBRTtJQUVyQ0QsZ0RBQVNBLENBQUM7UUFDTkssTUFBTSxxQ0FDREMsSUFBSSxDQUFDLENBQUNDLE1BQVFBLElBQUlDLElBQUksSUFDdEJGLElBQUksQ0FBQyxDQUFDRTtZQUNIQyxRQUFRQyxHQUFHLENBQUNGO1lBQ1pKLFNBQVNJO1FBQ2I7SUFDUixHQUFHLEVBQUU7SUFFUCxxQkFDRSw4REFBQ0c7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDQzs4QkFBRzs7Ozs7Ozs7Ozs7MEJBR04sOERBQUNGO2dCQUFJQyxXQUFVOzBCQUNaVCxNQUFNVyxHQUFHLENBQUMsQ0FBQ0MscUJBQ1YsOERBQUNKOzswQ0FDQyw4REFBQ0s7MENBQUdELEtBQUtFLEVBQUU7Ozs7OzswQ0FDWCw4REFBQ0Q7MENBQUdELEtBQUtHLEtBQUs7Ozs7OzswQ0FDZCw4REFBQ0Y7MENBQUdELEtBQUtJLEtBQUs7Ozs7OzswQ0FDZCw4REFBQ0g7MENBQUdELEtBQUtLLFFBQVE7Ozs7OzswQ0FDakIsOERBQUNKOzBDQUFHRCxLQUFLTSxXQUFXOzs7Ozs7MENBQ3BCLDhEQUFDQztnQ0FBSUMsS0FBS1IsS0FBS1MsS0FBSzs7Ozs7Ozt1QkFOWlQsS0FBS0UsRUFBRTs7Ozs7Ozs7Ozs7Ozs7OztBQVkzQjtHQWpDU2Y7S0FBQUE7QUFtQ1QsK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL3Nob3AuanN4P2EzZDIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG4vL3VzZeOAh+OAh+OCkuS9v+OBhuOBqOOBjeOBr+OAgVwidXNlIGNsaWVudFwiO+OCkuWFiOmgreOBp+Wuo+iogOOBmeOCi1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBTaG9wKCkge1xuXG4gICAgY29uc3QgW2l0ZW1zLCBzZXRJdGVtc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBmZXRjaChcImh0dHBzOi8vZmFrZXN0b3JlYXBpLmNvbS9wcm9kdWN0c1wiKVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKChqc29uKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coanNvbik7XG4gICAgICAgICAgICAgICAgc2V0SXRlbXMoanNvbik7XG4gICAgICAgICAgICB9KTtcbiAgICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3BcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvcFRpdGxlXCI+XG4gICAgICAgIDxoMT5FLWNvbW1lcmNlIFNob3A8L2gxPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdHNcIj5cbiAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXtpdGVtLmlkfT5cbiAgICAgICAgICAgIDxwPntpdGVtLmlkfTwvcD5cbiAgICAgICAgICAgIDxwPntpdGVtLnRpdGxlfTwvcD5cbiAgICAgICAgICAgIDxwPntpdGVtLnByaWNlfTwvcD5cbiAgICAgICAgICAgIDxwPntpdGVtLmNhdGVnb3J5fTwvcD5cbiAgICAgICAgICAgIDxwPntpdGVtLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtLmltYWdlfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNob3A7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJTaG9wIiwiaXRlbXMiLCJzZXRJdGVtcyIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJtYXAiLCJpdGVtIiwicCIsImlkIiwidGl0bGUiLCJwcmljZSIsImNhdGVnb3J5IiwiZGVzY3JpcHRpb24iLCJpbWciLCJzcmMiLCJpbWFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/shop.jsx\n"));

/***/ })

});
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/Components/Home.js":
/*!********************************!*\
  !*** ./src/Components/Home.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_define_property__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/_/_define_property */ \"./node_modules/@swc/helpers/esm/_define_property.js\");\n/* harmony import */ var _swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/_/_object_spread */ \"./node_modules/@swc/helpers/esm/_object_spread.js\");\n/* harmony import */ var _swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/_/_object_spread_props */ \"./node_modules/@swc/helpers/esm/_object_spread_props.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _Actions_invoiceActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Actions/invoiceActions */ \"./src/Actions/invoiceActions.js\");\n/* harmony import */ var _home_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home.module.css */ \"./src/Components/home.module.css\");\n/* harmony import */ var _home_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_home_module_css__WEBPACK_IMPORTED_MODULE_7__);\n// src/components/InvoiceApp.js\n\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar InvoiceApp = function(param) {\n    var invoices = param.invoices, _$addInvoice = param.addInvoice, _$updateInvoice = param.updateInvoice, _$deleteInvoice = param.deleteInvoice;\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        paymentAmount: \"\",\n        status: \"\"\n    }), 2), formData = _useState[0], setFormData = _useState[1];\n    var handleInputChange = function(e) {\n        setFormData((0,_swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_4__._)((0,_swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_5__._)({}, formData), (0,_swc_helpers_define_property__WEBPACK_IMPORTED_MODULE_6__._)({}, e.target.name, e.target.value)));\n    };\n    var handleAddInvoice = function() {\n        _$addInvoice((0,_swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_5__._)({\n            id: Date.now()\n        }, formData));\n        setFormData({\n            name: \"\",\n            paymentAmount: \"\",\n            status: \"\"\n        });\n    };\n    var handleUpdateInvoice = function(id) {\n        // You can add validation here before dispatching the action\n        var updatedData = {\n            name: prompt(\"Enter new name:\", formData.name) || formData.name,\n            paymentAmount: prompt(\"Enter new amount:\", formData.paymentAmount) || formData.paymentAmount,\n            status: prompt(\"Enter new status:\", formData.status) || formData.status\n        };\n        _$updateInvoice(id, updatedData);\n    };\n    var handleDeleteInvoice = function(id) {\n        var confirmed = window.confirm(\"Are you sure you want to delete this invoice?\");\n        if (confirmed) {\n            _$deleteInvoice(id);\n            alert(\"Deleted Successfully\");\n        } else {\n            alert(\"Deletion Cancelled\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_home_module_css__WEBPACK_IMPORTED_MODULE_7___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"heading\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"Invoice App\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\Internship Projects\\\\make_entry\\\\src\\\\Components\\\\Home.js\",\n                    lineNumber: 54,\n                    columnNumber: 32\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\Internship Projects\\\\make_entry\\\\src\\\\Components\\\\Home.js\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_home_module_css__WEBPACK_IMPORTED_MODULE_7___default().heading_cmp),\n                        children: \"krushna\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\Internship Projects\\\\make_entry\\\\src\\\\Components\\\\Home.js\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_home_module_css__WEBPACK_IMPORTED_MODULE_7___default().lebel_container),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: (_home_module_css__WEBPACK_IMPORTED_MODULE_7___default().page_label),\n                                children: \"Name\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\Internship Projects\\\\make_entry\\\\src\\\\Components\\\\Home.js\",\n                                lineNumber: 59,\n                                columnNumber: 9\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: (_home_module_css__WEBPACK_IMPORTED_MODULE_7___default().page_label),\n                                children: \"Amount\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\Internship Projects\\\\make_entry\\\\src\\\\Components\\\\Home.js\",\n                                lineNumber: 60,\n                                columnNumber: 9\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: (_home_module_css__WEBPACK_IMPORTED_MODULE_7___default().page_label),\n                                children: \"Status\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\Internship Projects\\\\make_entry\\\\src\\\\Components\\\\Home.js\",\n                                lineNumber: 61,\n                                columnNumber: 9\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\Internship Projects\\\\make_entry\\\\src\\\\Components\\\\Home.js\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_home_module_css__WEBPACK_IMPORTED_MODULE_7___default().input_container),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: (_home_module_css__WEBPACK_IMPORTED_MODULE_7___default().detail_input),\n                                type: \"text\",\n                                name: \"name\",\n                                value: formData.name,\n                                onChange: handleInputChange\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\Internship Projects\\\\make_entry\\\\src\\\\Components\\\\Home.js\",\n                                lineNumber: 66,\n                                columnNumber: 9\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: (_home_module_css__WEBPACK_IMPORTED_MODULE_7___default().detail_input),\n                                type: \"text\",\n                                name: \"paymentAmount\",\n                                value: formData.paymentAmount,\n                                onChange: handleInputChange\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\Internship Projects\\\\make_entry\\\\src\\\\Components\\\\Home.js\",\n                                lineNumber: 67,\n                                columnNumber: 9\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: (_home_module_css__WEBPACK_IMPORTED_MODULE_7___default().detail_input),\n                                type: \"text\",\n                                name: \"status\",\n                                value: formData.status,\n                                onChange: handleInputChange\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\Internship Projects\\\\make_entry\\\\src\\\\Components\\\\Home.js\",\n                                lineNumber: 68,\n                                columnNumber: 9\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: (_home_module_css__WEBPACK_IMPORTED_MODULE_7___default().invoice_button),\n                                onClick: handleAddInvoice,\n                                children: \"Add New Invoice\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\Internship Projects\\\\make_entry\\\\src\\\\Components\\\\Home.js\",\n                                lineNumber: 70,\n                                columnNumber: 9\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\Internship Projects\\\\make_entry\\\\src\\\\Components\\\\Home.js\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\Internship Projects\\\\make_entry\\\\src\\\\Components\\\\Home.js\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_home_module_css__WEBPACK_IMPORTED_MODULE_7___default().invoice_list),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"invoice-list\",\n                    children: invoices.map(function(invoice) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: (_home_module_css__WEBPACK_IMPORTED_MODULE_7___default().invoice_items),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"invoice-details\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"\".concat((_home_module_css__WEBPACK_IMPORTED_MODULE_7___default().label), \" \").concat((_home_module_css__WEBPACK_IMPORTED_MODULE_7___default().s3)),\n                                            children: \"Name:\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\Internship Projects\\\\make_entry\\\\src\\\\Components\\\\Home.js\",\n                                            lineNumber: 82,\n                                            columnNumber: 9\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"value s3\",\n                                            children: invoice.name\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\Internship Projects\\\\make_entry\\\\src\\\\Components\\\\Home.js\",\n                                            lineNumber: 83,\n                                            columnNumber: 9\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"label s3\",\n                                            children: \"Amount:\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\Internship Projects\\\\make_entry\\\\src\\\\Components\\\\Home.js\",\n                                            lineNumber: 84,\n                                            columnNumber: 9\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"value s3\",\n                                            children: invoice.paymentAmount\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\Internship Projects\\\\make_entry\\\\src\\\\Components\\\\Home.js\",\n                                            lineNumber: 85,\n                                            columnNumber: 9\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"label s3\",\n                                            children: \"Status:\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\Internship Projects\\\\make_entry\\\\src\\\\Components\\\\Home.js\",\n                                            lineNumber: 86,\n                                            columnNumber: 9\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"value s3\",\n                                            children: invoice.status\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\Internship Projects\\\\make_entry\\\\src\\\\Components\\\\Home.js\",\n                                            lineNumber: 87,\n                                            columnNumber: 9\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\Internship Projects\\\\make_entry\\\\src\\\\Components\\\\Home.js\",\n                                    lineNumber: 81,\n                                    columnNumber: 7\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"invoice-buttons\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"invoice-list-button\",\n                                            onClick: function() {\n                                                return handleUpdateInvoice(invoice.id);\n                                            },\n                                            children: \"Update\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\Internship Projects\\\\make_entry\\\\src\\\\Components\\\\Home.js\",\n                                            lineNumber: 90,\n                                            columnNumber: 9\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"invoice-list-button delete\",\n                                            onClick: function() {\n                                                return handleDeleteInvoice(invoice.id);\n                                            },\n                                            children: \"Delete\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\Internship Projects\\\\make_entry\\\\src\\\\Components\\\\Home.js\",\n                                            lineNumber: 91,\n                                            columnNumber: 9\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\Internship Projects\\\\make_entry\\\\src\\\\Components\\\\Home.js\",\n                                    lineNumber: 89,\n                                    columnNumber: 7\n                                }, _this)\n                            ]\n                        }, invoice.id, true, {\n                            fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\Internship Projects\\\\make_entry\\\\src\\\\Components\\\\Home.js\",\n                            lineNumber: 80,\n                            columnNumber: 5\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\Internship Projects\\\\make_entry\\\\src\\\\Components\\\\Home.js\",\n                    lineNumber: 78,\n                    columnNumber: 7\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\Internship Projects\\\\make_entry\\\\src\\\\Components\\\\Home.js\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\Internship Projects\\\\make_entry\\\\src\\\\Components\\\\Home.js\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, _this);\n};\n_s(InvoiceApp, \"3ahipvvLUR0a+iP8czJRTTxJixo=\");\n_c = InvoiceApp;\nvar mapStateToProps = function(state) {\n    return {\n        invoices: state.invoices.invoices\n    };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_8__.connect)(mapStateToProps, {\n    addInvoice: _Actions_invoiceActions__WEBPACK_IMPORTED_MODULE_2__.addInvoice,\n    updateInvoice: _Actions_invoiceActions__WEBPACK_IMPORTED_MODULE_2__.updateInvoice,\n    deleteInvoice: _Actions_invoiceActions__WEBPACK_IMPORTED_MODULE_2__.deleteInvoice\n})(InvoiceApp));\nvar _c;\n$RefreshReg$(_c, \"InvoiceApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNsRCw4REFBQ3dCO29DQUFJQyxXQUFVOztzREFDYiw4REFBQ3NCOzRDQUFLdEIsV0FBVyxHQUFtQnpCLE9BQWhCQSwrREFBWSxFQUFDLEtBQWEsT0FBVkEsNERBQVM7c0RBQUk7Ozs7OztzREFDakQsOERBQUMrQzs0Q0FBS3RCLFdBQVU7c0RBQVltQixRQUFRekMsSUFBSTs7Ozs7O3NEQUN4Qyw4REFBQzRDOzRDQUFLdEIsV0FBVTtzREFBVzs7Ozs7O3NEQUMzQiw4REFBQ3NCOzRDQUFLdEIsV0FBVTtzREFBWW1CLFFBQVF4QyxhQUFhOzs7Ozs7c0RBQ2pELDhEQUFDMkM7NENBQUt0QixXQUFVO3NEQUFXOzs7Ozs7c0RBQzNCLDhEQUFDc0I7NENBQUt0QixXQUFVO3NEQUFZbUIsUUFBUXZDLE1BQU07Ozs7Ozs7Ozs7Ozs4Q0FFNUMsOERBQUNtQjtvQ0FBSUMsV0FBVTs7c0RBQ2IsOERBQUNhOzRDQUFPYixXQUFVOzRDQUFzQmUsU0FBUzt1REFBTXhCLG9CQUFvQjRCLFFBQVEvQixFQUFFOztzREFBRzs7Ozs7O3NEQUN4Riw4REFBQ3lCOzRDQUFPYixXQUFVOzRDQUE2QmUsU0FBUzt1REFBTXJCLG9CQUFvQnlCLFFBQVEvQixFQUFFOztzREFBRzs7Ozs7Ozs7Ozs7OzsyQkFYMUYrQixRQUFRL0IsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFCdkI7R0E1Rk1aO0tBQUFBO0FBOEZOLElBQU1nRCxrQkFBa0IsU0FBQ0M7V0FBVztRQUNsQ2hELFVBQVVnRCxNQUFNaEQsUUFBUSxDQUFDQSxRQUFRO0lBQ25DOztBQUVBLCtEQUFlTixvREFBT0EsQ0FBQ3FELGlCQUFpQjtJQUFFcEQsWUFBQUEsK0RBQVVBO0lBQUVDLGVBQUFBLGtFQUFhQTtJQUFFQyxlQUFBQSxrRUFBYUE7QUFBQyxHQUFHRSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9Db21wb25lbnRzL0hvbWUuanM/YmMwYyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzcmMvY29tcG9uZW50cy9JbnZvaWNlQXBwLmpzXHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IGFkZEludm9pY2UsIHVwZGF0ZUludm9pY2UsIGRlbGV0ZUludm9pY2UgfSBmcm9tICcuLi9BY3Rpb25zL2ludm9pY2VBY3Rpb25zJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2hvbWUubW9kdWxlLmNzcyc7XHJcblxyXG5cclxuY29uc3QgSW52b2ljZUFwcCA9ICh7IGludm9pY2VzLCBhZGRJbnZvaWNlLCB1cGRhdGVJbnZvaWNlLCBkZWxldGVJbnZvaWNlIH0pID0+IHtcclxuICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKHtcclxuICAgIG5hbWU6ICcnLFxyXG4gICAgcGF5bWVudEFtb3VudDogJycsXHJcbiAgICBzdGF0dXM6ICcnLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBzZXRGb3JtRGF0YSh7IC4uLmZvcm1EYXRhLCBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUFkZEludm9pY2UgPSAoKSA9PiB7XHJcblxyXG4gICAgYWRkSW52b2ljZSh7XHJcbiAgICAgIGlkOiBEYXRlLm5vdygpLCBcclxuICAgICAgLi4uZm9ybURhdGEsXHJcbiAgICB9KTtcclxuXHJcbiAgICBzZXRGb3JtRGF0YSh7IG5hbWU6ICcnLCBwYXltZW50QW1vdW50OiAnJywgc3RhdHVzOiAnJyB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVVcGRhdGVJbnZvaWNlID0gKGlkKSA9PiB7XHJcbiAgICAvLyBZb3UgY2FuIGFkZCB2YWxpZGF0aW9uIGhlcmUgYmVmb3JlIGRpc3BhdGNoaW5nIHRoZSBhY3Rpb25cclxuICAgIGNvbnN0IHVwZGF0ZWREYXRhID0ge1xyXG4gICAgICBuYW1lOiBwcm9tcHQoJ0VudGVyIG5ldyBuYW1lOicsIGZvcm1EYXRhLm5hbWUpIHx8IGZvcm1EYXRhLm5hbWUsXHJcbiAgICAgIHBheW1lbnRBbW91bnQ6IHByb21wdCgnRW50ZXIgbmV3IGFtb3VudDonLCBmb3JtRGF0YS5wYXltZW50QW1vdW50KSB8fCBmb3JtRGF0YS5wYXltZW50QW1vdW50LFxyXG4gICAgICBzdGF0dXM6IHByb21wdCgnRW50ZXIgbmV3IHN0YXR1czonLCBmb3JtRGF0YS5zdGF0dXMpIHx8IGZvcm1EYXRhLnN0YXR1cyxcclxuICAgIH07XHJcblxyXG4gICAgdXBkYXRlSW52b2ljZShpZCwgdXBkYXRlZERhdGEpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZURlbGV0ZUludm9pY2UgPSAoaWQpID0+IHtcclxuICAgIGNvbnN0IGNvbmZpcm1lZCA9IHdpbmRvdy5jb25maXJtKFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIGludm9pY2U/XCIpO1xyXG4gICAgaWYgKGNvbmZpcm1lZCkge1xyXG4gICAgICBkZWxldGVJbnZvaWNlKGlkKTtcclxuICAgICAgYWxlcnQoXCJEZWxldGVkIFN1Y2Nlc3NmdWxseVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFsZXJ0KFwiRGVsZXRpb24gQ2FuY2VsbGVkXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGluZ1wiPjxoMj5JbnZvaWNlIEFwcDwvaDI+PC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRpbmdfY21wfT5rcnVzaG5hPC9oMT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxlYmVsX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17c3R5bGVzLnBhZ2VfbGFiZWx9Pk5hbWU8L2xhYmVsPlxyXG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3N0eWxlcy5wYWdlX2xhYmVsfT5BbW91bnQ8L2xhYmVsPlxyXG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3N0eWxlcy5wYWdlX2xhYmVsfT5TdGF0dXM8L2xhYmVsPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmlucHV0X2NvbnRhaW5lcn0+XHJcbiAgICBcclxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtzdHlsZXMuZGV0YWlsX2lucHV0fSB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgdmFsdWU9e2Zvcm1EYXRhLm5hbWV9IG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gLz5cclxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtzdHlsZXMuZGV0YWlsX2lucHV0fSB0eXBlPVwidGV4dFwiIG5hbWU9XCJwYXltZW50QW1vdW50XCIgdmFsdWU9e2Zvcm1EYXRhLnBheW1lbnRBbW91bnR9IG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gLz5cclxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtzdHlsZXMuZGV0YWlsX2lucHV0fSB0eXBlPVwidGV4dFwiIG5hbWU9XCJzdGF0dXNcIiB2YWx1ZT17Zm9ybURhdGEuc3RhdHVzfSBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IC8+XHJcblxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuaW52b2ljZV9idXR0b259IG9uQ2xpY2s9e2hhbmRsZUFkZEludm9pY2V9PkFkZCBOZXcgSW52b2ljZTwvYnV0dG9uPlxyXG4gICAgIFxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXYgPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbnZvaWNlX2xpc3R9PlxyXG4gICAgIFxyXG4gICAgICBcclxuICAgICAgPHVsIGNsYXNzTmFtZT0naW52b2ljZS1saXN0Jz5cclxuICB7aW52b2ljZXMubWFwKChpbnZvaWNlKSA9PiAoXHJcbiAgICA8bGkga2V5PXtpbnZvaWNlLmlkfSBjbGFzc05hbWU9e3N0eWxlcy5pbnZvaWNlX2l0ZW1zfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ludm9pY2UtZGV0YWlscyc+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgJHtzdHlsZXMubGFiZWx9ICR7c3R5bGVzLnMzfWB9Pk5hbWU6PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndmFsdWUgczMnPntpbnZvaWNlLm5hbWV9PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nbGFiZWwgczMnPkFtb3VudDo8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd2YWx1ZSBzMyc+e2ludm9pY2UucGF5bWVudEFtb3VudH08L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdsYWJlbCBzMyc+U3RhdHVzOjwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3ZhbHVlIHMzJz57aW52b2ljZS5zdGF0dXN9PC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ludm9pY2UtYnV0dG9ucyc+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2ludm9pY2UtbGlzdC1idXR0b24nIG9uQ2xpY2s9eygpID0+IGhhbmRsZVVwZGF0ZUludm9pY2UoaW52b2ljZS5pZCl9PlVwZGF0ZTwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdpbnZvaWNlLWxpc3QtYnV0dG9uIGRlbGV0ZScgb25DbGljaz17KCkgPT4gaGFuZGxlRGVsZXRlSW52b2ljZShpbnZvaWNlLmlkKX0+RGVsZXRlPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9saT5cclxuICApKX1cclxuPC91bD5cclxuXHJcbiAgICAgICAgIFxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XHJcbiAgaW52b2ljZXM6IHN0YXRlLmludm9pY2VzLmludm9pY2VzLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCB7IGFkZEludm9pY2UsIHVwZGF0ZUludm9pY2UsIGRlbGV0ZUludm9pY2UgfSkoSW52b2ljZUFwcCk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJjb25uZWN0IiwiYWRkSW52b2ljZSIsInVwZGF0ZUludm9pY2UiLCJkZWxldGVJbnZvaWNlIiwic3R5bGVzIiwiSW52b2ljZUFwcCIsImludm9pY2VzIiwibmFtZSIsInBheW1lbnRBbW91bnQiLCJzdGF0dXMiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVBZGRJbnZvaWNlIiwiaWQiLCJEYXRlIiwibm93IiwiaGFuZGxlVXBkYXRlSW52b2ljZSIsInVwZGF0ZWREYXRhIiwicHJvbXB0IiwiaGFuZGxlRGVsZXRlSW52b2ljZSIsImNvbmZpcm1lZCIsIndpbmRvdyIsImNvbmZpcm0iLCJhbGVydCIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImgyIiwiaDEiLCJoZWFkaW5nX2NtcCIsImxlYmVsX2NvbnRhaW5lciIsImxhYmVsIiwicGFnZV9sYWJlbCIsImlucHV0X2NvbnRhaW5lciIsImlucHV0IiwiZGV0YWlsX2lucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwiYnV0dG9uIiwiaW52b2ljZV9idXR0b24iLCJvbkNsaWNrIiwiaW52b2ljZV9saXN0IiwidWwiLCJtYXAiLCJpbnZvaWNlIiwibGkiLCJpbnZvaWNlX2l0ZW1zIiwic3BhbiIsInMzIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Components/Home.js\n"));

/***/ })

});
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/page",{

/***/ "(app-pages-browser)/./src/app/dashboard/page.jsx":
/*!************************************!*\
  !*** ./src/app/dashboard/page.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/sidebar */ \"(app-pages-browser)/./src/app/components/sidebar.jsx\");\n/* harmony import */ var _hooks_service_producto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/hooks/service_producto */ \"(app-pages-browser)/./src/hooks/service_producto.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst Dashboard = ()=>{\n    _s();\n    const [productos, setProductos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const cargarProductos = async ()=>{\n            const respuesta = await (0,_hooks_service_producto__WEBPACK_IMPORTED_MODULE_3__.all_products)();\n            console.log(\"Productos cargados:\", respuesta); // Depuración\n            if (respuesta.code === 200 && Array.isArray(respuesta.datos)) {\n                setProductos(respuesta.datos);\n            } else {\n                console.error(\"La respuesta de all_products no es v\\xe1lida:\", respuesta);\n                setProductos([]);\n            }\n        };\n        cargarProductos();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex min-h-screen bg-gray-100\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_sidebar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/j4ime/Documentos/GitHub/practica_2/frontend/src/app/dashboard/page.jsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-1 p-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-4xl font-bold mb-6 text-gray-800\",\n                        children: \"Bienvenido\"\n                    }, void 0, false, {\n                        fileName: \"/home/j4ime/Documentos/GitHub/practica_2/frontend/src/app/dashboard/page.jsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6\",\n                        children: Array.isArray(productos) && productos.map((dato)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"card bg-white shadow-md rounded-lg overflow-hidden\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: (0,_hooks_service_producto__WEBPACK_IMPORTED_MODULE_3__.traer_imagen)(dato.imagen_url),\n                                        alt: dato.nombre,\n                                        className: \"w-full h-48 object-cover\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/j4ime/Documentos/GitHub/practica_2/frontend/src/app/dashboard/page.jsx\",\n                                        lineNumber: 32,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"p-4\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                className: \"text-xl font-semibold text-gray-900\",\n                                                children: dato.nombre\n                                            }, void 0, false, {\n                                                fileName: \"/home/j4ime/Documentos/GitHub/practica_2/frontend/src/app/dashboard/page.jsx\",\n                                                lineNumber: 34,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-gray-600\",\n                                                children: dato.descripcion\n                                            }, void 0, false, {\n                                                fileName: \"/home/j4ime/Documentos/GitHub/practica_2/frontend/src/app/dashboard/page.jsx\",\n                                                lineNumber: 35,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            dato.precio_unitario && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-lg font-bold text-gray-800 mt-2\",\n                                                children: [\n                                                    \"Precio: \",\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        className: \"text-gray-400\",\n                                                        children: [\n                                                            \"$\",\n                                                            dato.precio_unitario\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"/home/j4ime/Documentos/GitHub/practica_2/frontend/src/app/dashboard/page.jsx\",\n                                                        lineNumber: 37,\n                                                        columnNumber: 79\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/j4ime/Documentos/GitHub/practica_2/frontend/src/app/dashboard/page.jsx\",\n                                                lineNumber: 37,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-gray-600\",\n                                                children: [\n                                                    \"Cantidad: \",\n                                                    dato.cantidad\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/j4ime/Documentos/GitHub/practica_2/frontend/src/app/dashboard/page.jsx\",\n                                                lineNumber: 39,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/j4ime/Documentos/GitHub/practica_2/frontend/src/app/dashboard/page.jsx\",\n                                        lineNumber: 33,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, dato.id, true, {\n                                fileName: \"/home/j4ime/Documentos/GitHub/practica_2/frontend/src/app/dashboard/page.jsx\",\n                                lineNumber: 31,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/home/j4ime/Documentos/GitHub/practica_2/frontend/src/app/dashboard/page.jsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/j4ime/Documentos/GitHub/practica_2/frontend/src/app/dashboard/page.jsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/j4ime/Documentos/GitHub/practica_2/frontend/src/app/dashboard/page.jsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Dashboard, \"1DSHZPgX73L4Uszt4d22RALz2sY=\");\n_c = Dashboard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dashboard);\nvar _c;\n$RefreshReg$(_c, \"Dashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZGFzaGJvYXJkL3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ21EO0FBQ1A7QUFDMEI7QUFFdEUsTUFBTU0sWUFBWTs7SUFDaEIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdQLCtDQUFRQSxDQUFDLEVBQUU7SUFFN0NDLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTU8sa0JBQWtCO1lBQ3RCLE1BQU1DLFlBQVksTUFBTU4scUVBQVlBO1lBQ3BDTyxRQUFRQyxHQUFHLENBQUMsdUJBQXVCRixZQUFZLGFBQWE7WUFDNUQsSUFBSUEsVUFBVUcsSUFBSSxLQUFLLE9BQU9DLE1BQU1DLE9BQU8sQ0FBQ0wsVUFBVU0sS0FBSyxHQUFHO2dCQUM1RFIsYUFBYUUsVUFBVU0sS0FBSztZQUM5QixPQUFPO2dCQUNMTCxRQUFRTSxLQUFLLENBQUMsaURBQThDUDtnQkFDNURGLGFBQWEsRUFBRTtZQUNqQjtRQUNGO1FBRUFDO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNTO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDaEIsMkRBQU9BOzs7OzswQkFDUiw4REFBQ2U7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDQzt3QkFBR0QsV0FBVTtrQ0FBd0M7Ozs7OztrQ0FDdEQsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUNaTCxNQUFNQyxPQUFPLENBQUNSLGNBQWNBLFVBQVVjLEdBQUcsQ0FBQyxDQUFDQyxxQkFDMUMsOERBQUNKO2dDQUFrQkMsV0FBVTs7a0RBQzNCLDhEQUFDSTt3Q0FBSUMsS0FBS25CLHFFQUFZQSxDQUFDaUIsS0FBS0csVUFBVTt3Q0FBR0MsS0FBS0osS0FBS0ssTUFBTTt3Q0FBRVIsV0FBVTs7Ozs7O2tEQUNyRSw4REFBQ0Q7d0NBQUlDLFdBQVU7OzBEQUNiLDhEQUFDUztnREFBR1QsV0FBVTswREFBdUNHLEtBQUtLLE1BQU07Ozs7OzswREFDaEUsOERBQUNFO2dEQUFFVixXQUFVOzBEQUFpQkcsS0FBS1EsV0FBVzs7Ozs7OzRDQUM3Q1IsS0FBS1MsZUFBZSxrQkFDbkIsOERBQUNGO2dEQUFFVixXQUFVOztvREFBdUM7a0VBQVEsOERBQUNhO3dEQUFLYixXQUFVOzs0REFBZ0I7NERBQUVHLEtBQUtTLGVBQWU7Ozs7Ozs7Ozs7Ozs7MERBRXBILDhEQUFDRjtnREFBRVYsV0FBVTs7b0RBQWdCO29EQUFXRyxLQUFLVyxRQUFROzs7Ozs7Ozs7Ozs7OzsrQkFSL0NYLEtBQUtZLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQjdCO0dBekNNNUI7S0FBQUE7QUEyQ04sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9kYXNoYm9hcmQvcGFnZS5qc3g/MTUyNyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTaWRlYmFyIGZyb20gJy4uL2NvbXBvbmVudHMvc2lkZWJhcic7XG5pbXBvcnQgeyBhbGxfcHJvZHVjdHMsIHRyYWVyX2ltYWdlbiB9IGZyb20gJ0AvaG9va3Mvc2VydmljZV9wcm9kdWN0byc7XG5cbmNvbnN0IERhc2hib2FyZCA9ICgpID0+IHtcbiAgY29uc3QgW3Byb2R1Y3Rvcywgc2V0UHJvZHVjdG9zXSA9IHVzZVN0YXRlKFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGNhcmdhclByb2R1Y3RvcyA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHJlc3B1ZXN0YSA9IGF3YWl0IGFsbF9wcm9kdWN0cygpO1xuICAgICAgY29uc29sZS5sb2coJ1Byb2R1Y3RvcyBjYXJnYWRvczonLCByZXNwdWVzdGEpOyAvLyBEZXB1cmFjacOzblxuICAgICAgaWYgKHJlc3B1ZXN0YS5jb2RlID09PSAyMDAgJiYgQXJyYXkuaXNBcnJheShyZXNwdWVzdGEuZGF0b3MpKSB7XG4gICAgICAgIHNldFByb2R1Y3RvcyhyZXNwdWVzdGEuZGF0b3MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignTGEgcmVzcHVlc3RhIGRlIGFsbF9wcm9kdWN0cyBubyBlcyB2w6FsaWRhOicsIHJlc3B1ZXN0YSk7XG4gICAgICAgIHNldFByb2R1Y3RvcyhbXSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNhcmdhclByb2R1Y3RvcygpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbWluLWgtc2NyZWVuIGJnLWdyYXktMTAwXCI+XG4gICAgICA8U2lkZWJhciAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgcC00XCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGQgbWItNiB0ZXh0LWdyYXktODAwXCI+QmllbnZlbmlkbzwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyBnYXAtNlwiPlxuICAgICAgICAgIHtBcnJheS5pc0FycmF5KHByb2R1Y3RvcykgJiYgcHJvZHVjdG9zLm1hcCgoZGF0bykgPT4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e2RhdG8uaWR9IGNsYXNzTmFtZT1cImNhcmQgYmctd2hpdGUgc2hhZG93LW1kIHJvdW5kZWQtbGcgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPXt0cmFlcl9pbWFnZW4oZGF0by5pbWFnZW5fdXJsKX0gYWx0PXtkYXRvLm5vbWJyZX0gY2xhc3NOYW1lPVwidy1mdWxsIGgtNDggb2JqZWN0LWNvdmVyXCIgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTRcIj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkIHRleHQtZ3JheS05MDBcIj57ZGF0by5ub21icmV9PC9oMj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwXCI+e2RhdG8uZGVzY3JpcGNpb259PC9wPlxuICAgICAgICAgICAgICAgIHtkYXRvLnByZWNpb191bml0YXJpbyAmJiAoXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtYm9sZCB0ZXh0LWdyYXktODAwIG10LTJcIj5QcmVjaW86IDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JheS00MDBcIj4ke2RhdG8ucHJlY2lvX3VuaXRhcmlvfTwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwXCI+Q2FudGlkYWQ6IHtkYXRvLmNhbnRpZGFkfTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiU2lkZWJhciIsImFsbF9wcm9kdWN0cyIsInRyYWVyX2ltYWdlbiIsIkRhc2hib2FyZCIsInByb2R1Y3RvcyIsInNldFByb2R1Y3RvcyIsImNhcmdhclByb2R1Y3RvcyIsInJlc3B1ZXN0YSIsImNvbnNvbGUiLCJsb2ciLCJjb2RlIiwiQXJyYXkiLCJpc0FycmF5IiwiZGF0b3MiLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwibWFwIiwiZGF0byIsImltZyIsInNyYyIsImltYWdlbl91cmwiLCJhbHQiLCJub21icmUiLCJoMiIsInAiLCJkZXNjcmlwY2lvbiIsInByZWNpb191bml0YXJpbyIsInNwYW4iLCJjYW50aWRhZCIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/dashboard/page.jsx\n"));

/***/ })

});
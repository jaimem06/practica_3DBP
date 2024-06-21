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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/sidebar */ \"(app-pages-browser)/./src/app/components/sidebar.jsx\");\n/* harmony import */ var _hooks_service_producto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/hooks/service_producto */ \"(app-pages-browser)/./src/hooks/service_producto.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst Dashboard = ()=>{\n    _s();\n    const [productos, setProductos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const cargarProductos = async ()=>{\n            const respuesta = await (0,_hooks_service_producto__WEBPACK_IMPORTED_MODULE_3__.all_products)();\n            console.log(\"Productos cargados:\", respuesta); // Depuración\n            if (respuesta.code === 200 && Array.isArray(respuesta.datos)) {\n                setProductos(respuesta.datos);\n            } else {\n                console.error(\"La respuesta de all_products no es v\\xe1lida:\", respuesta);\n                setProductos([]);\n            }\n        };\n        cargarProductos();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_sidebar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/j4ime/Documentos/GitHub/practica_2/frontend/src/app/dashboard/page.jsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-1\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"p-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-3xl font-bold mb-4\",\n                            children: \"Bienvenido\"\n                        }, void 0, false, {\n                            fileName: \"/home/j4ime/Documentos/GitHub/practica_2/frontend/src/app/dashboard/page.jsx\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid grid-cols-3 gap-5\",\n                            children: Array.isArray(productos) && productos.map((dato)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"card bg-white shadow-lg rounded-lg p-4 flex flex-col items-center\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: (0,_hooks_service_producto__WEBPACK_IMPORTED_MODULE_3__.traer_imagen)(dato.imagen_url),\n                                            alt: dato.nombre,\n                                            style: {\n                                                width: \"50%\",\n                                                height: \"50%\",\n                                                objectFit: \"cover\",\n                                                margin: \"0 auto\"\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"/home/j4ime/Documentos/GitHub/practica_2/frontend/src/app/dashboard/page.jsx\",\n                                            lineNumber: 33,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"mt-2 text-center\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                    className: \"text-xl font-bold\",\n                                                    children: dato.nombre\n                                                }, void 0, false, {\n                                                    fileName: \"/home/j4ime/Documentos/GitHub/practica_2/frontend/src/app/dashboard/page.jsx\",\n                                                    lineNumber: 35,\n                                                    columnNumber: 19\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    children: dato.descripcion\n                                                }, void 0, false, {\n                                                    fileName: \"/home/j4ime/Documentos/GitHub/practica_2/frontend/src/app/dashboard/page.jsx\",\n                                                    lineNumber: 36,\n                                                    columnNumber: 19\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \"font-bold\",\n                                                    children: [\n                                                        \"Precio: $\",\n                                                        dato.precio\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/home/j4ime/Documentos/GitHub/practica_2/frontend/src/app/dashboard/page.jsx\",\n                                                    lineNumber: 37,\n                                                    columnNumber: 19\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    children: [\n                                                        \"Cantidad: \",\n                                                        dato.cantidad\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/home/j4ime/Documentos/GitHub/practica_2/frontend/src/app/dashboard/page.jsx\",\n                                                    lineNumber: 38,\n                                                    columnNumber: 19\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/home/j4ime/Documentos/GitHub/practica_2/frontend/src/app/dashboard/page.jsx\",\n                                            lineNumber: 34,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, dato.id, true, {\n                                    fileName: \"/home/j4ime/Documentos/GitHub/practica_2/frontend/src/app/dashboard/page.jsx\",\n                                    lineNumber: 32,\n                                    columnNumber: 15\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"/home/j4ime/Documentos/GitHub/practica_2/frontend/src/app/dashboard/page.jsx\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/j4ime/Documentos/GitHub/practica_2/frontend/src/app/dashboard/page.jsx\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/j4ime/Documentos/GitHub/practica_2/frontend/src/app/dashboard/page.jsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/j4ime/Documentos/GitHub/practica_2/frontend/src/app/dashboard/page.jsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Dashboard, \"1DSHZPgX73L4Uszt4d22RALz2sY=\");\n_c = Dashboard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dashboard);\nvar _c;\n$RefreshReg$(_c, \"Dashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZGFzaGJvYXJkL3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ21EO0FBQ1A7QUFDMEI7QUFFdEUsTUFBTU0sWUFBWTs7SUFDaEIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdQLCtDQUFRQSxDQUFDLEVBQUU7SUFFN0NDLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTU8sa0JBQWtCO1lBQ3RCLE1BQU1DLFlBQVksTUFBTU4scUVBQVlBO1lBQ3BDTyxRQUFRQyxHQUFHLENBQUMsdUJBQXVCRixZQUFZLGFBQWE7WUFDNUQsSUFBSUEsVUFBVUcsSUFBSSxLQUFLLE9BQU9DLE1BQU1DLE9BQU8sQ0FBQ0wsVUFBVU0sS0FBSyxHQUFHO2dCQUM1RFIsYUFBYUUsVUFBVU0sS0FBSztZQUM5QixPQUFPO2dCQUNMTCxRQUFRTSxLQUFLLENBQUMsaURBQThDUDtnQkFDNURGLGFBQWEsRUFBRTtZQUNqQjtRQUNGO1FBRUFDO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNTO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDaEIsMkRBQU9BOzs7OzswQkFDUiw4REFBQ2U7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNEO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ0M7NEJBQUdELFdBQVU7c0NBQTBCOzs7Ozs7c0NBQ3hDLDhEQUFDRDs0QkFBSUMsV0FBVTtzQ0FDWkwsTUFBTUMsT0FBTyxDQUFDUixjQUFjQSxVQUFVYyxHQUFHLENBQUMsQ0FBQ0MscUJBQzFDLDhEQUFDSjtvQ0FBa0JDLFdBQVU7O3NEQUMzQiw4REFBQ0k7NENBQUlDLEtBQUtuQixxRUFBWUEsQ0FBQ2lCLEtBQUtHLFVBQVU7NENBQUdDLEtBQUtKLEtBQUtLLE1BQU07NENBQUVDLE9BQU87Z0RBQUVDLE9BQU87Z0RBQU9DLFFBQVE7Z0RBQU9DLFdBQVc7Z0RBQVNDLFFBQVE7NENBQVM7Ozs7OztzREFDdEksOERBQUNkOzRDQUFJQyxXQUFVOzs4REFDYiw4REFBQ2M7b0RBQUdkLFdBQVU7OERBQXFCRyxLQUFLSyxNQUFNOzs7Ozs7OERBQzlDLDhEQUFDTzs4REFBR1osS0FBS2EsV0FBVzs7Ozs7OzhEQUNwQiw4REFBQ0Q7b0RBQUVmLFdBQVU7O3dEQUFZO3dEQUFVRyxLQUFLYyxNQUFNOzs7Ozs7OzhEQUM5Qyw4REFBQ0Y7O3dEQUFFO3dEQUFXWixLQUFLZSxRQUFROzs7Ozs7Ozs7Ozs7OzttQ0FOckJmLEtBQUtnQixFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlL0I7R0F6Q01oQztLQUFBQTtBQTJDTiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2Rhc2hib2FyZC9wYWdlLmpzeD8xNTI3Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNpZGViYXIgZnJvbSAnLi4vY29tcG9uZW50cy9zaWRlYmFyJztcbmltcG9ydCB7IGFsbF9wcm9kdWN0cywgdHJhZXJfaW1hZ2VuIH0gZnJvbSAnQC9ob29rcy9zZXJ2aWNlX3Byb2R1Y3RvJztcblxuY29uc3QgRGFzaGJvYXJkID0gKCkgPT4ge1xuICBjb25zdCBbcHJvZHVjdG9zLCBzZXRQcm9kdWN0b3NdID0gdXNlU3RhdGUoW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgY2FyZ2FyUHJvZHVjdG9zID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgcmVzcHVlc3RhID0gYXdhaXQgYWxsX3Byb2R1Y3RzKCk7XG4gICAgICBjb25zb2xlLmxvZygnUHJvZHVjdG9zIGNhcmdhZG9zOicsIHJlc3B1ZXN0YSk7IC8vIERlcHVyYWNpw7NuXG4gICAgICBpZiAocmVzcHVlc3RhLmNvZGUgPT09IDIwMCAmJiBBcnJheS5pc0FycmF5KHJlc3B1ZXN0YS5kYXRvcykpIHtcbiAgICAgICAgc2V0UHJvZHVjdG9zKHJlc3B1ZXN0YS5kYXRvcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdMYSByZXNwdWVzdGEgZGUgYWxsX3Byb2R1Y3RzIG5vIGVzIHbDoWxpZGE6JywgcmVzcHVlc3RhKTtcbiAgICAgICAgc2V0UHJvZHVjdG9zKFtdKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY2FyZ2FyUHJvZHVjdG9zKCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgICAgPFNpZGViYXIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00XCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCBtYi00XCI+QmllbnZlbmlkbzwvaDE+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0zIGdhcC01XCI+XG4gICAgICAgICAgICB7QXJyYXkuaXNBcnJheShwcm9kdWN0b3MpICYmIHByb2R1Y3Rvcy5tYXAoKGRhdG8pID0+IChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2RhdG8uaWR9IGNsYXNzTmFtZT1cImNhcmQgYmctd2hpdGUgc2hhZG93LWxnIHJvdW5kZWQtbGcgcC00IGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e3RyYWVyX2ltYWdlbihkYXRvLmltYWdlbl91cmwpfSBhbHQ9e2RhdG8ubm9tYnJlfSBzdHlsZT17eyB3aWR0aDogJzUwJScsIGhlaWdodDogJzUwJScsIG9iamVjdEZpdDogJ2NvdmVyJywgbWFyZ2luOiAnMCBhdXRvJyB9fSAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMiB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkXCI+e2RhdG8ubm9tYnJlfTwvaDI+XG4gICAgICAgICAgICAgICAgICA8cD57ZGF0by5kZXNjcmlwY2lvbn08L3A+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5QcmVjaW86ICR7ZGF0by5wcmVjaW99PC9wPlxuICAgICAgICAgICAgICAgICAgPHA+Q2FudGlkYWQ6IHtkYXRvLmNhbnRpZGFkfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZDsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlNpZGViYXIiLCJhbGxfcHJvZHVjdHMiLCJ0cmFlcl9pbWFnZW4iLCJEYXNoYm9hcmQiLCJwcm9kdWN0b3MiLCJzZXRQcm9kdWN0b3MiLCJjYXJnYXJQcm9kdWN0b3MiLCJyZXNwdWVzdGEiLCJjb25zb2xlIiwibG9nIiwiY29kZSIsIkFycmF5IiwiaXNBcnJheSIsImRhdG9zIiwiZXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsIm1hcCIsImRhdG8iLCJpbWciLCJzcmMiLCJpbWFnZW5fdXJsIiwiYWx0Iiwibm9tYnJlIiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsIm9iamVjdEZpdCIsIm1hcmdpbiIsImgyIiwicCIsImRlc2NyaXBjaW9uIiwicHJlY2lvIiwiY2FudGlkYWQiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/dashboard/page.jsx\n"));

/***/ })

});
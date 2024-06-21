"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/productos/[external]/page",{

/***/ "(app-pages-browser)/./src/app/productos/[external]/page.jsx":
/*!***********************************************!*\
  !*** ./src/app/productos/[external]/page.jsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ModificarProducto; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ \"(app-pages-browser)/./src/app/productos/[external]/styles.css\");\n/* harmony import */ var _hooks_service_producto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/hooks/service_producto */ \"(app-pages-browser)/./src/hooks/service_producto.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert */ \"(app-pages-browser)/./node_modules/sweetalert/dist/sweetalert.min.js\");\n/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _app_components_sidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/app/components/sidebar */ \"(app-pages-browser)/./src/app/components/sidebar.jsx\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! js-cookie */ \"(app-pages-browser)/./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-hook-form */ \"(app-pages-browser)/./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction ModificarProducto(params) {\n    _s();\n    const { register, handleSubmit, setValue } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_8__.useForm)();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n    const fetchProductoData = async ()=>{\n        const token = js_cookie__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"token\");\n        const response = await (0,_hooks_service_producto__WEBPACK_IMPORTED_MODULE_2__.get_producto)(token, params.params.external);\n        const data = response.datos;\n        setValue(\"nombre\", data.nombre);\n        const formattedDate = new Date(data.fecha_caducidad).toISOString().split(\"T\")[0];\n        setValue(\"fecha_caducidad\", formattedDate);\n        setValue(\"cantidad\", data.cantidad);\n        setValue(\"precio_unitario\", data.precio_unitario);\n        setValue(\"nombre_lote\", data.nombre_lote);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        fetchProductoData();\n    }, []);\n    const sendInfo = async (data)=>{\n        const formData = new FormData();\n        Object.keys(data).forEach((key)=>{\n            if (key === \"imagen\" && data[key].length > 0) {\n                formData.append(key, data[key][0]);\n            } else {\n                formData.append(key, data[key]);\n            }\n        });\n        let token = js_cookie__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"token\");\n        try {\n            const response = await (0,_hooks_service_producto__WEBPACK_IMPORTED_MODULE_2__.modify_producto)(params.params.external, formData, token);\n            if (response && response.status === 200) {\n                const info = await response.json(); // Asumiendo que la respuesta es JSON\n                sweetalert__WEBPACK_IMPORTED_MODULE_4___default()({\n                    title: \"\\xc9xito\",\n                    text: info.msg || \"Producto modificado con \\xe9xito.\",\n                    icon: \"success\",\n                    button: \"Aceptar\",\n                    timer: 4000,\n                    closeOnEsc: true\n                });\n                router.push(\"/productos\");\n            // No es necesario llamar a router.refresh() después de router.push()\n            } else {\n                // Si la respuesta no es exitosa, lanzamos un error con el mensaje de respuesta\n                const errorInfo = await response.json(); // Asumiendo que la respuesta es JSON\n                throw new Error(errorInfo.msg || \"Error desconocido al modificar el producto.\");\n            }\n        } catch (error) {\n            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()({\n                title: \"Error\",\n                text: error.message || \"Error al modificar el producto. Intente nuevamente.\",\n                icon: \"error\",\n                button: \"Aceptar\",\n                timer: 4000,\n                closeOnEsc: true\n            });\n        }\n    };\n    const onSubmit = (data)=>sendInfo(data);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_sidebar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/j4ime/Documentos/GitHub/practica_2/frontend/src/app/productos/[external]/page.jsx\",\n                lineNumber: 76,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                        children: \"Modificar Producto\"\n                    }, void 0, false, {\n                        fileName: \"/home/j4ime/Documentos/GitHub/practica_2/frontend/src/app/productos/[external]/page.jsx\",\n                        lineNumber: 78,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        className: \"form\",\n                        onSubmit: handleSubmit(onSubmit),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"input-box\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        children: \"Nombre:\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/j4ime/Documentos/GitHub/practica_2/frontend/src/app/productos/[external]/page.jsx\",\n                                        lineNumber: 81,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        ...register(\"nombre\"),\n                                        required: true,\n                                        placeholder: \"Nombre del producto\",\n                                        type: \"text\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/j4ime/Documentos/GitHub/practica_2/frontend/src/app/productos/[external]/page.jsx\",\n                                        lineNumber: 82,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/j4ime/Documentos/GitHub/practica_2/frontend/src/app/productos/[external]/page.jsx\",\n                                lineNumber: 80,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"input-box\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        children: \"Cantidad:\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/j4ime/Documentos/GitHub/practica_2/frontend/src/app/productos/[external]/page.jsx\",\n                                        lineNumber: 85,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        ...register(\"cantidad\"),\n                                        required: true,\n                                        placeholder: \"Cantidad\",\n                                        type: \"number\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/j4ime/Documentos/GitHub/practica_2/frontend/src/app/productos/[external]/page.jsx\",\n                                        lineNumber: 86,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/j4ime/Documentos/GitHub/practica_2/frontend/src/app/productos/[external]/page.jsx\",\n                                lineNumber: 84,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"input-box\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        children: \"Precio Unitario:\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/j4ime/Documentos/GitHub/practica_2/frontend/src/app/productos/[external]/page.jsx\",\n                                        lineNumber: 89,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        ...register(\"precio_unitario\"),\n                                        required: true,\n                                        placeholder: \"Precio Unitario\",\n                                        type: \"number\",\n                                        step: \"0.01\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/j4ime/Documentos/GitHub/practica_2/frontend/src/app/productos/[external]/page.jsx\",\n                                        lineNumber: 90,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/j4ime/Documentos/GitHub/practica_2/frontend/src/app/productos/[external]/page.jsx\",\n                                lineNumber: 88,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"input-box\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        children: \"Fecha de Caducidad:\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/j4ime/Documentos/GitHub/practica_2/frontend/src/app/productos/[external]/page.jsx\",\n                                        lineNumber: 93,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        ...register(\"fecha_caducidad\"),\n                                        required: true,\n                                        placeholder: \"Fecha de Caducidad\",\n                                        type: \"date\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/j4ime/Documentos/GitHub/practica_2/frontend/src/app/productos/[external]/page.jsx\",\n                                        lineNumber: 94,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/j4ime/Documentos/GitHub/practica_2/frontend/src/app/productos/[external]/page.jsx\",\n                                lineNumber: 92,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"input-box\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        children: \"Nombre del Lote:\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/j4ime/Documentos/GitHub/practica_2/frontend/src/app/productos/[external]/page.jsx\",\n                                        lineNumber: 97,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        ...register(\"nombre_lote\"),\n                                        required: true,\n                                        placeholder: \"Nombre del Lote\",\n                                        type: \"text\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/j4ime/Documentos/GitHub/practica_2/frontend/src/app/productos/[external]/page.jsx\",\n                                        lineNumber: 98,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/j4ime/Documentos/GitHub/practica_2/frontend/src/app/productos/[external]/page.jsx\",\n                                lineNumber: 96,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"grid w-full max-w-xs items-center gap-1.5\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        children: \"Cargar Imagen:\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/j4ime/Documentos/GitHub/practica_2/frontend/src/app/productos/[external]/page.jsx\",\n                                        lineNumber: 101,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        ...register(\"imagen\"),\n                                        className: \"flex w-full rounded-md border border-blue-100 border-input bg-white text-sm text-gray-800 file:border-0 file:bg-blue-600 file:text-white file:text-sm file:font-medium\",\n                                        type: \"file\",\n                                        id: \"picture\",\n                                        accept: \"image/png, image/jpeg, image/gif\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/j4ime/Documentos/GitHub/practica_2/frontend/src/app/productos/[external]/page.jsx\",\n                                        lineNumber: 102,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/j4ime/Documentos/GitHub/practica_2/frontend/src/app/productos/[external]/page.jsx\",\n                                lineNumber: 100,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                children: \"MODIFICAR\"\n                            }, void 0, false, {\n                                fileName: \"/home/j4ime/Documentos/GitHub/practica_2/frontend/src/app/productos/[external]/page.jsx\",\n                                lineNumber: 108,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/j4ime/Documentos/GitHub/practica_2/frontend/src/app/productos/[external]/page.jsx\",\n                        lineNumber: 79,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/j4ime/Documentos/GitHub/practica_2/frontend/src/app/productos/[external]/page.jsx\",\n                lineNumber: 77,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/j4ime/Documentos/GitHub/practica_2/frontend/src/app/productos/[external]/page.jsx\",\n        lineNumber: 75,\n        columnNumber: 9\n    }, this);\n}\n_s(ModificarProducto, \"DOlXEEYUeGWwJMrp0DqzN4kK/7M=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_8__.useForm,\n        next_navigation__WEBPACK_IMPORTED_MODULE_7__.useRouter\n    ];\n});\n_c = ModificarProducto;\nvar _c;\n$RefreshReg$(_c, \"ModificarProducto\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcHJvZHVjdG9zL1tleHRlcm5hbF0vcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDc0I7QUFDbUQ7QUFDaEM7QUFDWDtBQUNpQjtBQUNmO0FBQ1k7QUFDRjtBQUUzQixTQUFTUyxrQkFBa0JDLE1BQU07O0lBQzVDLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxZQUFZLEVBQUVDLFFBQVEsRUFBRSxHQUFHTCx3REFBT0E7SUFDcEQsTUFBTU0sU0FBU1AsMERBQVNBO0lBRXhCLE1BQU1RLG9CQUFvQjtRQUN0QixNQUFNQyxRQUFRVixpREFBT0EsQ0FBQ1csR0FBRyxDQUFDO1FBQzFCLE1BQU1DLFdBQVcsTUFBTWpCLHFFQUFZQSxDQUFDZSxPQUFPTixPQUFPQSxNQUFNLENBQUNTLFFBQVE7UUFDakUsTUFBTUMsT0FBT0YsU0FBU0csS0FBSztRQUMzQlIsU0FBUyxVQUFVTyxLQUFLRSxNQUFNO1FBQzlCLE1BQU1DLGdCQUFnQixJQUFJQyxLQUFLSixLQUFLSyxlQUFlLEVBQUVDLFdBQVcsR0FBR0MsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQ2hGZCxTQUFTLG1CQUFtQlU7UUFDNUJWLFNBQVMsWUFBWU8sS0FBS1EsUUFBUTtRQUNsQ2YsU0FBUyxtQkFBbUJPLEtBQUtTLGVBQWU7UUFDaERoQixTQUFTLGVBQWVPLEtBQUtVLFdBQVc7SUFDNUM7SUFFQTNCLGdEQUFTQSxDQUFDO1FBQ05ZO0lBQ0osR0FBRyxFQUFFO0lBRVQsTUFBTWdCLFdBQVcsT0FBT1g7UUFDcEIsTUFBTVksV0FBVyxJQUFJQztRQUNyQkMsT0FBT0MsSUFBSSxDQUFDZixNQUFNZ0IsT0FBTyxDQUFDQyxDQUFBQTtZQUN0QixJQUFJQSxRQUFRLFlBQVlqQixJQUFJLENBQUNpQixJQUFJLENBQUNDLE1BQU0sR0FBRyxHQUFHO2dCQUMxQ04sU0FBU08sTUFBTSxDQUFDRixLQUFLakIsSUFBSSxDQUFDaUIsSUFBSSxDQUFD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QnhEOztRQUN5QkQsb0RBQU9BO1FBQ3JDRCxzREFBU0E7OztLQUZKRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3Byb2R1Y3Rvcy9bZXh0ZXJuYWxdL3BhZ2UuanN4P2JmZTYiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuaW1wb3J0IHsgbW9kaWZ5X3Byb2R1Y3RvLCBnZXRfcHJvZHVjdG8gfSBmcm9tICdAL2hvb2tzL3NlcnZpY2VfcHJvZHVjdG8nO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzd2FsIGZyb20gJ3N3ZWV0YWxlcnQnO1xuaW1wb3J0IFNpZGViYXIgZnJvbSAnQC9hcHAvY29tcG9uZW50cy9zaWRlYmFyJztcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vZGlmaWNhclByb2R1Y3RvKHBhcmFtcykge1xuICAgIGNvbnN0IHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCwgc2V0VmFsdWUgfSA9IHVzZUZvcm0oKTtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICAgIGNvbnN0IGZldGNoUHJvZHVjdG9EYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCB0b2tlbiA9IENvb2tpZXMuZ2V0KCd0b2tlbicpO1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdldF9wcm9kdWN0byh0b2tlbiwgcGFyYW1zLnBhcmFtcy5leHRlcm5hbCk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSByZXNwb25zZS5kYXRvcztcbiAgICAgICAgc2V0VmFsdWUoJ25vbWJyZScsIGRhdGEubm9tYnJlKTtcbiAgICAgICAgY29uc3QgZm9ybWF0dGVkRGF0ZSA9IG5ldyBEYXRlKGRhdGEuZmVjaGFfY2FkdWNpZGFkKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF07XG4gICAgICAgIHNldFZhbHVlKCdmZWNoYV9jYWR1Y2lkYWQnLCBmb3JtYXR0ZWREYXRlKTtcbiAgICAgICAgc2V0VmFsdWUoJ2NhbnRpZGFkJywgZGF0YS5jYW50aWRhZCk7XG4gICAgICAgIHNldFZhbHVlKCdwcmVjaW9fdW5pdGFyaW8nLCBkYXRhLnByZWNpb191bml0YXJpbyk7XG4gICAgICAgIHNldFZhbHVlKCdub21icmVfbG90ZScsIGRhdGEubm9tYnJlX2xvdGUpO1xuICAgIH07XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBmZXRjaFByb2R1Y3RvRGF0YSgpO1xuICAgIH0sIFtdKTtcblxuY29uc3Qgc2VuZEluZm8gPSBhc3luYyAoZGF0YSkgPT4ge1xuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICBpZiAoa2V5ID09PSAnaW1hZ2VuJyAmJiBkYXRhW2tleV0ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKGtleSwgZGF0YVtrZXldWzBdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChrZXksIGRhdGFba2V5XSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGxldCB0b2tlbiA9IENvb2tpZXMuZ2V0KCd0b2tlbicpO1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgbW9kaWZ5X3Byb2R1Y3RvKHBhcmFtcy5wYXJhbXMuZXh0ZXJuYWwsIGZvcm1EYXRhLCB0b2tlbik7XG4gICAgICAgIGlmIChyZXNwb25zZSAmJiByZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgY29uc3QgaW5mbyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTsgLy8gQXN1bWllbmRvIHF1ZSBsYSByZXNwdWVzdGEgZXMgSlNPTlxuICAgICAgICAgICAgc3dhbCh7XG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiw4l4aXRvXCIsXG4gICAgICAgICAgICAgICAgdGV4dDogaW5mby5tc2cgfHwgXCJQcm9kdWN0byBtb2RpZmljYWRvIGNvbiDDqXhpdG8uXCIsXG4gICAgICAgICAgICAgICAgaWNvbjogXCJzdWNjZXNzXCIsXG4gICAgICAgICAgICAgICAgYnV0dG9uOiBcIkFjZXB0YXJcIixcbiAgICAgICAgICAgICAgICB0aW1lcjogNDAwMCxcbiAgICAgICAgICAgICAgICBjbG9zZU9uRXNjOiB0cnVlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByb3V0ZXIucHVzaCgnL3Byb2R1Y3RvcycpO1xuICAgICAgICAgICAgLy8gTm8gZXMgbmVjZXNhcmlvIGxsYW1hciBhIHJvdXRlci5yZWZyZXNoKCkgZGVzcHXDqXMgZGUgcm91dGVyLnB1c2goKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gU2kgbGEgcmVzcHVlc3RhIG5vIGVzIGV4aXRvc2EsIGxhbnphbW9zIHVuIGVycm9yIGNvbiBlbCBtZW5zYWplIGRlIHJlc3B1ZXN0YVxuICAgICAgICAgICAgY29uc3QgZXJyb3JJbmZvID0gYXdhaXQgcmVzcG9uc2UuanNvbigpOyAvLyBBc3VtaWVuZG8gcXVlIGxhIHJlc3B1ZXN0YSBlcyBKU09OXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JJbmZvLm1zZyB8fCBcIkVycm9yIGRlc2Nvbm9jaWRvIGFsIG1vZGlmaWNhciBlbCBwcm9kdWN0by5cIik7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBzd2FsKHtcbiAgICAgICAgICAgIHRpdGxlOiBcIkVycm9yXCIsXG4gICAgICAgICAgICB0ZXh0OiBlcnJvci5tZXNzYWdlIHx8IFwiRXJyb3IgYWwgbW9kaWZpY2FyIGVsIHByb2R1Y3RvLiBJbnRlbnRlIG51ZXZhbWVudGUuXCIsXG4gICAgICAgICAgICBpY29uOiBcImVycm9yXCIsXG4gICAgICAgICAgICBidXR0b246IFwiQWNlcHRhclwiLFxuICAgICAgICAgICAgdGltZXI6IDQwMDAsXG4gICAgICAgICAgICBjbG9zZU9uRXNjOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICB9XG59O1xuICAgIGNvbnN0IG9uU3VibWl0ID0gZGF0YSA9PiBzZW5kSW5mbyhkYXRhKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8U2lkZWJhciAvPlxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGhlYWRlcj5Nb2RpZmljYXIgUHJvZHVjdG88L2hlYWRlcj5cbiAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJmb3JtXCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWJveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPk5vbWJyZTo8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHsuLi5yZWdpc3Rlcignbm9tYnJlJyl9IHJlcXVpcmVkIHBsYWNlaG9sZGVyPVwiTm9tYnJlIGRlbCBwcm9kdWN0b1wiIHR5cGU9XCJ0ZXh0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Q2FudGlkYWQ6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB7Li4ucmVnaXN0ZXIoJ2NhbnRpZGFkJyl9IHJlcXVpcmVkIHBsYWNlaG9sZGVyPVwiQ2FudGlkYWRcIiB0eXBlPVwibnVtYmVyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+UHJlY2lvIFVuaXRhcmlvOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgey4uLnJlZ2lzdGVyKCdwcmVjaW9fdW5pdGFyaW8nKX0gcmVxdWlyZWQgcGxhY2Vob2xkZXI9XCJQcmVjaW8gVW5pdGFyaW9cIiB0eXBlPVwibnVtYmVyXCIgc3RlcD1cIjAuMDFcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5GZWNoYSBkZSBDYWR1Y2lkYWQ6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB7Li4ucmVnaXN0ZXIoJ2ZlY2hhX2NhZHVjaWRhZCcpfSByZXF1aXJlZCBwbGFjZWhvbGRlcj1cIkZlY2hhIGRlIENhZHVjaWRhZFwiIHR5cGU9XCJkYXRlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Tm9tYnJlIGRlbCBMb3RlOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgey4uLnJlZ2lzdGVyKCdub21icmVfbG90ZScpfSByZXF1aXJlZCBwbGFjZWhvbGRlcj1cIk5vbWJyZSBkZWwgTG90ZVwiIHR5cGU9XCJ0ZXh0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCB3LWZ1bGwgbWF4LXcteHMgaXRlbXMtY2VudGVyIGdhcC0xLjVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5DYXJnYXIgSW1hZ2VuOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgey4uLnJlZ2lzdGVyKCdpbWFnZW4nKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCByb3VuZGVkLW1kIGJvcmRlciBib3JkZXItYmx1ZS0xMDAgYm9yZGVyLWlucHV0IGJnLXdoaXRlIHRleHQtc20gdGV4dC1ncmF5LTgwMCBmaWxlOmJvcmRlci0wIGZpbGU6YmctYmx1ZS02MDAgZmlsZTp0ZXh0LXdoaXRlIGZpbGU6dGV4dC1zbSBmaWxlOmZvbnQtbWVkaXVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiIGlkPVwicGljdHVyZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvcG5nLCBpbWFnZS9qcGVnLCBpbWFnZS9naWZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPk1PRElGSUNBUjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbiJdLCJuYW1lcyI6WyJtb2RpZnlfcHJvZHVjdG8iLCJnZXRfcHJvZHVjdG8iLCJSZWFjdCIsInVzZUVmZmVjdCIsInN3YWwiLCJTaWRlYmFyIiwiQ29va2llcyIsInVzZVJvdXRlciIsInVzZUZvcm0iLCJNb2RpZmljYXJQcm9kdWN0byIsInBhcmFtcyIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0Iiwic2V0VmFsdWUiLCJyb3V0ZXIiLCJmZXRjaFByb2R1Y3RvRGF0YSIsInRva2VuIiwiZ2V0IiwicmVzcG9uc2UiLCJleHRlcm5hbCIsImRhdGEiLCJkYXRvcyIsIm5vbWJyZSIsImZvcm1hdHRlZERhdGUiLCJEYXRlIiwiZmVjaGFfY2FkdWNpZGFkIiwidG9JU09TdHJpbmciLCJzcGxpdCIsImNhbnRpZGFkIiwicHJlY2lvX3VuaXRhcmlvIiwibm9tYnJlX2xvdGUiLCJzZW5kSW5mbyIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsImxlbmd0aCIsImFwcGVuZCIsInN0YXR1cyIsImluZm8iLCJqc29uIiwidGl0bGUiLCJ0ZXh0IiwibXNnIiwiaWNvbiIsImJ1dHRvbiIsInRpbWVyIiwiY2xvc2VPbkVzYyIsInB1c2giLCJlcnJvckluZm8iLCJFcnJvciIsImVycm9yIiwibWVzc2FnZSIsIm9uU3VibWl0IiwiZGl2Iiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImhlYWRlciIsImZvcm0iLCJsYWJlbCIsImlucHV0IiwicmVxdWlyZWQiLCJwbGFjZWhvbGRlciIsInR5cGUiLCJzdGVwIiwiaWQiLCJhY2NlcHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/productos/[external]/page.jsx\n"));

/***/ })

});
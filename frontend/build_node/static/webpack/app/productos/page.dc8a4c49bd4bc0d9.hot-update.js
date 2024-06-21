"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/productos/page",{

/***/ "(app-pages-browser)/./src/hooks/service_producto.js":
/*!***************************************!*\
  !*** ./src/hooks/service_producto.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   URL_IMAGE: function() { return /* binding */ URL_IMAGE; },\n/* harmony export */   all_products: function() { return /* binding */ all_products; },\n/* harmony export */   modify_producto: function() { return /* binding */ modify_producto; },\n/* harmony export */   register_producto: function() { return /* binding */ register_producto; }\n/* harmony export */ });\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ \"(app-pages-browser)/./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var _connection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./connection */ \"(app-pages-browser)/./src/hooks/connection.js\");\n\n\nasync function all_products() {\n    let datos = null;\n    try {\n        const token = js_cookie__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"token\");\n        datos = await (0,_connection__WEBPACK_IMPORTED_MODULE_1__.GET)(\"producto\", token);\n    } catch (error) {\n        console.error(\"Error obteniendo productos:\", error);\n    }\n    return datos;\n}\nasync function register_producto(data) {\n    let datos = null;\n    try {\n        const token = js_cookie__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"token\");\n        datos = await (0,_connection__WEBPACK_IMPORTED_MODULE_1__.POST_IMG)(\"productoimg/registrar\", data, token);\n    } catch (error) {\n        console.error(\"Error registrando producto:\", error);\n    }\n    return datos;\n}\nasync function modify_producto(external_id, data) {\n    let datos = null;\n    try {\n        const token = js_cookie__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"token\");\n        datos = await (0,_connection__WEBPACK_IMPORTED_MODULE_1__.POST_IMG)(\"producto/modificar/\".concat(external_id), data, token);\n    } catch (error) {\n        console.error(\"Error modificando producto:\", error);\n    }\n    return datos;\n}\nasync function URL_IMAGE(image_name) {\n    return (0,_connection__WEBPACK_IMPORTED_MODULE_1__.URL_IMAGEN)(image_name);\n}\n_c = URL_IMAGE;\nvar _c;\n$RefreshReg$(_c, \"URL_IMAGE\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9ob29rcy9zZXJ2aWNlX3Byb2R1Y3RvLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFnQztBQUMrQjtBQUV4RCxlQUFlSztJQUNsQixJQUFJQyxRQUFRO0lBQ1osSUFBSTtRQUNBLE1BQU1DLFFBQVFQLGlEQUFPQSxDQUFDUSxHQUFHLENBQUM7UUFDMUJGLFFBQVEsTUFBTUwsZ0RBQUdBLENBQUMsWUFBWU07SUFDbEMsRUFBRSxPQUFPRSxPQUFPO1FBQ1pDLFFBQVFELEtBQUssQ0FBQywrQkFBK0JBO0lBQ2pEO0lBQ0EsT0FBT0g7QUFDWDtBQUVPLGVBQWVLLGtCQUFrQkMsSUFBSTtJQUN4QyxJQUFJTixRQUFRO0lBQ1osSUFBSTtRQUNBLE1BQU1DLFFBQVFQLGlEQUFPQSxDQUFDUSxHQUFHLENBQUM7UUFDMUJGLFFBQVEsTUFBTUgscURBQVFBLENBQUMseUJBQXlCUyxNQUFNTDtJQUMxRCxFQUFFLE9BQU9FLE9BQU87UUFDWkMsUUFBUUQsS0FBSyxDQUFDLCtCQUErQkE7SUFDakQ7SUFDQSxPQUFPSDtBQUNYO0FBRU8sZUFBZU8sZ0JBQWdCQyxXQUFXLEVBQUVGLElBQUk7SUFDbkQsSUFBSU4sUUFBUTtJQUNaLElBQUk7UUFDQSxNQUFNQyxRQUFRUCxpREFBT0EsQ0FBQ1EsR0FBRyxDQUFDO1FBQzFCRixRQUFRLE1BQU1ILHFEQUFRQSxDQUFDLHNCQUFrQyxPQUFaVyxjQUFlRixNQUFNTDtJQUN0RSxFQUFFLE9BQU9FLE9BQU87UUFDWkMsUUFBUUQsS0FBSyxDQUFDLCtCQUErQkE7SUFDakQ7SUFDQSxPQUFPSDtBQUNYO0FBRU8sZUFBZVMsVUFBVUMsVUFBVTtJQUN0QyxPQUFPWix1REFBVUEsQ0FBQ1k7QUFDdEI7S0FGc0JEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9ob29rcy9zZXJ2aWNlX3Byb2R1Y3RvLmpzP2M0ZDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcbmltcG9ydCB7IEdFVCwgUE9TVCwgUE9TVF9JTUcsIFVSTF9JTUFHRU4gfSBmcm9tICcuL2Nvbm5lY3Rpb24nO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWxsX3Byb2R1Y3RzKCkge1xuICAgIGxldCBkYXRvcyA9IG51bGw7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdG9rZW4gPSBDb29raWVzLmdldCgndG9rZW4nKTtcbiAgICAgICAgZGF0b3MgPSBhd2FpdCBHRVQoJ3Byb2R1Y3RvJywgdG9rZW4pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIG9idGVuaWVuZG8gcHJvZHVjdG9zOicsIGVycm9yKTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdG9zO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVnaXN0ZXJfcHJvZHVjdG8oZGF0YSkge1xuICAgIGxldCBkYXRvcyA9IG51bGw7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdG9rZW4gPSBDb29raWVzLmdldCgndG9rZW4nKTtcbiAgICAgICAgZGF0b3MgPSBhd2FpdCBQT1NUX0lNRygncHJvZHVjdG9pbWcvcmVnaXN0cmFyJywgZGF0YSwgdG9rZW4pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHJlZ2lzdHJhbmRvIHByb2R1Y3RvOicsIGVycm9yKTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdG9zO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbW9kaWZ5X3Byb2R1Y3RvKGV4dGVybmFsX2lkLCBkYXRhKSB7XG4gICAgbGV0IGRhdG9zID0gbnVsbDtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCB0b2tlbiA9IENvb2tpZXMuZ2V0KCd0b2tlbicpO1xuICAgICAgICBkYXRvcyA9IGF3YWl0IFBPU1RfSU1HKGBwcm9kdWN0by9tb2RpZmljYXIvJHtleHRlcm5hbF9pZH1gLCBkYXRhLCB0b2tlbik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgbW9kaWZpY2FuZG8gcHJvZHVjdG86JywgZXJyb3IpO1xuICAgIH1cbiAgICByZXR1cm4gZGF0b3M7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBVUkxfSU1BR0UoaW1hZ2VfbmFtZSkge1xuICAgIHJldHVybiBVUkxfSU1BR0VOKGltYWdlX25hbWUpO1xufVxuIl0sIm5hbWVzIjpbIkNvb2tpZXMiLCJHRVQiLCJQT1NUIiwiUE9TVF9JTUciLCJVUkxfSU1BR0VOIiwiYWxsX3Byb2R1Y3RzIiwiZGF0b3MiLCJ0b2tlbiIsImdldCIsImVycm9yIiwiY29uc29sZSIsInJlZ2lzdGVyX3Byb2R1Y3RvIiwiZGF0YSIsIm1vZGlmeV9wcm9kdWN0byIsImV4dGVybmFsX2lkIiwiVVJMX0lNQUdFIiwiaW1hZ2VfbmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/hooks/service_producto.js\n"));

/***/ })

});
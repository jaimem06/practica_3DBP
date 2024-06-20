"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/productos/new/page",{

/***/ "(app-pages-browser)/./src/hooks/service_producto.js":
/*!***************************************!*\
  !*** ./src/hooks/service_producto.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   all_products: function() { return /* binding */ all_products; },\n/* harmony export */   get_producto: function() { return /* binding */ get_producto; },\n/* harmony export */   modify_producto: function() { return /* binding */ modify_producto; },\n/* harmony export */   save_product: function() { return /* binding */ save_product; }\n/* harmony export */ });\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ \"(app-pages-browser)/./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var _connection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./connection */ \"(app-pages-browser)/./src/hooks/connection.js\");\n\n\nasync function all_products() {\n    let datos = null;\n    try {\n        const token = js_cookie__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"token\");\n        datos = await (0,_connection__WEBPACK_IMPORTED_MODULE_1__.GET)(\"producto\", token);\n    } catch (error) {\n        console.log(error.response.data);\n        return {\n            \"code\": 500\n        };\n    }\n    return datos.data;\n}\nasync function get_producto(token, external) {\n    let datos = null;\n    try {\n        datos = await (0,_connection__WEBPACK_IMPORTED_MODULE_1__.GET)(\"producto/\" + external, token);\n    } catch (error) {\n        console.log(error.response.data);\n        return {\n            \"code\": 500\n        };\n    }\n    return datos.data;\n}\nasync function modify_producto(token, external, data) {\n    if (!external) {\n        console.error(\"External ID is undefined or null\");\n        return {\n            \"code\": 500\n        };\n    }\n    let datos = null;\n    try {\n        datos = await (0,_connection__WEBPACK_IMPORTED_MODULE_1__.POST)(\"producto/modificar/\" + external, data, token);\n    } catch (error) {\n        console.log(error.response.data);\n        return {\n            \"code\": 500\n        };\n    }\n    return datos.data;\n}\nasync function save_product(token, data) {\n    console.log(\"save_product called with data:\", data);\n    let formData = new FormData();\n    // Assuming data is an array of arrays as shown in the error log\n    data.forEach((item)=>{\n        formData.append(item[0], item[1]);\n    });\n    console.log(\"FormData entries:\", Array.from(formData.entries())); // To verify formData content\n    try {\n        const response = await (0,_connection__WEBPACK_IMPORTED_MODULE_1__.POST_IMG)(\"productoimg/registrar\", formData, token);\n        if (response.data && response.data.code === 200) {\n            return response.data;\n        } else {\n            console.log(\"Error en la respuesta del servidor\", response.data);\n            return {\n                \"code\": response.data.code,\n                \"msg\": response.data.msg\n            };\n        }\n    } catch (error) {\n        console.log(\"Error in save_product:\", error);\n        if (error.response && error.response.data) {\n            console.log(error.response.data.msg);\n            return {\n                \"code\": error.response.status,\n                \"msg\": error.response.data.msg\n            };\n        } else {\n            console.log(\"Error desconocido\", error);\n            return {\n                \"code\": 500,\n                \"msg\": \"Error desconocido\"\n            };\n        }\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9ob29rcy9zZXJ2aWNlX3Byb2R1Y3RvLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFnQztBQUNtQjtBQUU1QyxlQUFlSTtJQUNsQixJQUFJQyxRQUFRO0lBQ1osSUFBSTtRQUNBLE1BQU1DLFFBQVFOLGlEQUFPQSxDQUFDTyxHQUFHLENBQUM7UUFDMUJGLFFBQVEsTUFBTUosZ0RBQUdBLENBQUMsWUFBWUs7SUFDbEMsRUFBRSxPQUFPRSxPQUFPO1FBQ1pDLFFBQVFDLEdBQUcsQ0FBQ0YsTUFBTUcsUUFBUSxDQUFDQyxJQUFJO1FBQy9CLE9BQU87WUFBRSxRQUFRO1FBQUk7SUFDekI7SUFDQSxPQUFPUCxNQUFNTyxJQUFJO0FBQ3JCO0FBRU8sZUFBZUMsYUFBYVAsS0FBSyxFQUFFUSxRQUFRO0lBQzlDLElBQUlULFFBQVE7SUFDWixJQUFJO1FBQ0FBLFFBQVEsTUFBTUosZ0RBQUdBLENBQUMsY0FBY2EsVUFBVVI7SUFDOUMsRUFBRSxPQUFPRSxPQUFPO1FBQ1pDLFFBQVFDLEdBQUcsQ0FBQ0YsTUFBTUcsUUFBUSxDQUFDQyxJQUFJO1FBQy9CLE9BQU87WUFBRSxRQUFRO1FBQUk7SUFDekI7SUFDQSxPQUFPUCxNQUFNTyxJQUFJO0FBQ3JCO0FBRU8sZUFBZUcsZ0JBQWdCVCxLQUFLLEVBQUVRLFFBQVEsRUFBRUYsSUFBSTtJQUN2RCxJQUFJLENBQUNFLFVBQVU7UUFDWEwsUUFBUUQsS0FBSyxDQUFDO1FBQ2QsT0FBTztZQUFFLFFBQVE7UUFBSTtJQUN6QjtJQUVBLElBQUlILFFBQVE7SUFDWixJQUFJO1FBQ0FBLFFBQVEsTUFBTUgsaURBQUlBLENBQUMsd0JBQXdCWSxVQUFVRixNQUFNTjtJQUMvRCxFQUFFLE9BQU9FLE9BQU87UUFDWkMsUUFBUUMsR0FBRyxDQUFDRixNQUFNRyxRQUFRLENBQUNDLElBQUk7UUFDL0IsT0FBTztZQUFFLFFBQVE7UUFBSTtJQUN6QjtJQUNBLE9BQU9QLE1BQU1PLElBQUk7QUFDckI7QUFFTyxlQUFlSSxhQUFhVixLQUFLLEVBQUVNLElBQUk7SUFDMUNILFFBQVFDLEdBQUcsQ0FBQyxrQ0FBa0NFO0lBRTlDLElBQUlLLFdBQVcsSUFBSUM7SUFDbkIsZ0VBQWdFO0lBQ2hFTixLQUFLTyxPQUFPLENBQUNDLENBQUFBO1FBQ1RILFNBQVNJLE1BQU0sQ0FBQ0QsSUFBSSxDQUFDLEVBQUUsRUFBRUEsSUFBSSxDQUFDLEVBQUU7SUFDcEM7SUFFQVgsUUFBUUMsR0FBRyxDQUFDLHFCQUFxQlksTUFBTUMsSUFBSSxDQUFDTixTQUFTTyxPQUFPLE1BQU0sNkJBQTZCO0lBRS9GLElBQUk7UUFDQSxNQUFNYixXQUFXLE1BQU1SLHFEQUFRQSxDQUFDLHlCQUF5QmMsVUFBVVg7UUFDbkUsSUFBSUssU0FBU0MsSUFBSSxJQUFJRCxTQUFTQyxJQUFJLENBQUNhLElBQUksS0FBSyxLQUFLO1lBQzdDLE9BQU9kLFNBQVNDLElBQUk7UUFDeEIsT0FBTztZQUNISCxRQUFRQyxHQUFHLENBQUMsc0NBQXNDQyxTQUFTQyxJQUFJO1lBQy9ELE9BQU87Z0JBQUUsUUFBUUQsU0FBU0MsSUFBSSxDQUFDYSxJQUFJO2dCQUFFLE9BQU9kLFNBQVNDLElBQUksQ0FBQ2MsR0FBRztZQUFDO1FBQ2xFO0lBQ0osRUFBRSxPQUFPbEIsT0FBTztRQUNaQyxRQUFRQyxHQUFHLENBQUMsMEJBQTBCRjtRQUN0QyxJQUFJQSxNQUFNRyxRQUFRLElBQUlILE1BQU1HLFFBQVEsQ0FBQ0MsSUFBSSxFQUFFO1lBQ3ZDSCxRQUFRQyxHQUFHLENBQUNGLE1BQU1HLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDYyxHQUFHO1lBQ25DLE9BQU87Z0JBQUUsUUFBUWxCLE1BQU1HLFFBQVEsQ0FBQ2dCLE1BQU07Z0JBQUUsT0FBT25CLE1BQU1HLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDYyxHQUFHO1lBQUM7UUFDM0UsT0FBTztZQUNIakIsUUFBUUMsR0FBRyxDQUFDLHFCQUFxQkY7WUFDakMsT0FBTztnQkFBRSxRQUFRO2dCQUFLLE9BQU87WUFBb0I7UUFDckQ7SUFDSjtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9ob29rcy9zZXJ2aWNlX3Byb2R1Y3RvLmpzP2M0ZDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcbmltcG9ydCB7IEdFVCwgUE9TVCwgUE9TVF9JTUcgfSBmcm9tICcuL2Nvbm5lY3Rpb24nO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWxsX3Byb2R1Y3RzKCkge1xuICAgIGxldCBkYXRvcyA9IG51bGw7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdG9rZW4gPSBDb29raWVzLmdldCgndG9rZW4nKTtcbiAgICAgICAgZGF0b3MgPSBhd2FpdCBHRVQoJ3Byb2R1Y3RvJywgdG9rZW4pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlLmRhdGEpO1xuICAgICAgICByZXR1cm4geyBcImNvZGVcIjogNTAwIH1cbiAgICB9XG4gICAgcmV0dXJuIGRhdG9zLmRhdGE7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRfcHJvZHVjdG8odG9rZW4sIGV4dGVybmFsKSB7XG4gICAgbGV0IGRhdG9zID0gbnVsbDtcbiAgICB0cnkge1xuICAgICAgICBkYXRvcyA9IGF3YWl0IEdFVCgncHJvZHVjdG8vJyArIGV4dGVybmFsLCB0b2tlbik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UuZGF0YSk7XG4gICAgICAgIHJldHVybiB7IFwiY29kZVwiOiA1MDAgfVxuICAgIH1cbiAgICByZXR1cm4gZGF0b3MuZGF0YTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG1vZGlmeV9wcm9kdWN0byh0b2tlbiwgZXh0ZXJuYWwsIGRhdGEpIHtcbiAgICBpZiAoIWV4dGVybmFsKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0V4dGVybmFsIElEIGlzIHVuZGVmaW5lZCBvciBudWxsJyk7XG4gICAgICAgIHJldHVybiB7IFwiY29kZVwiOiA1MDAgfTtcbiAgICB9XG5cbiAgICBsZXQgZGF0b3MgPSBudWxsO1xuICAgIHRyeSB7XG4gICAgICAgIGRhdG9zID0gYXdhaXQgUE9TVCgncHJvZHVjdG8vbW9kaWZpY2FyLycgKyBleHRlcm5hbCwgZGF0YSwgdG9rZW4pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlLmRhdGEpO1xuICAgICAgICByZXR1cm4geyBcImNvZGVcIjogNTAwIH1cbiAgICB9XG4gICAgcmV0dXJuIGRhdG9zLmRhdGE7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzYXZlX3Byb2R1Y3QodG9rZW4sIGRhdGEpIHtcbiAgICBjb25zb2xlLmxvZygnc2F2ZV9wcm9kdWN0IGNhbGxlZCB3aXRoIGRhdGE6JywgZGF0YSk7XG5cbiAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAvLyBBc3N1bWluZyBkYXRhIGlzIGFuIGFycmF5IG9mIGFycmF5cyBhcyBzaG93biBpbiB0aGUgZXJyb3IgbG9nXG4gICAgZGF0YS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoaXRlbVswXSwgaXRlbVsxXSk7XG4gICAgfSk7XG5cbiAgICBjb25zb2xlLmxvZygnRm9ybURhdGEgZW50cmllczonLCBBcnJheS5mcm9tKGZvcm1EYXRhLmVudHJpZXMoKSkpOyAvLyBUbyB2ZXJpZnkgZm9ybURhdGEgY29udGVudFxuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBQT1NUX0lNRygncHJvZHVjdG9pbWcvcmVnaXN0cmFyJywgZm9ybURhdGEsIHRva2VuKTtcbiAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEgJiYgcmVzcG9uc2UuZGF0YS5jb2RlID09PSAyMDApIHtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIGVuIGxhIHJlc3B1ZXN0YSBkZWwgc2Vydmlkb3InLCByZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgIHJldHVybiB7IFwiY29kZVwiOiByZXNwb25zZS5kYXRhLmNvZGUsIFwibXNnXCI6IHJlc3BvbnNlLmRhdGEubXNnIH07XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgaW4gc2F2ZV9wcm9kdWN0OicsIGVycm9yKTtcbiAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlICYmIGVycm9yLnJlc3BvbnNlLmRhdGEpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlLmRhdGEubXNnKTtcbiAgICAgICAgICAgIHJldHVybiB7IFwiY29kZVwiOiBlcnJvci5yZXNwb25zZS5zdGF0dXMsIFwibXNnXCI6IGVycm9yLnJlc3BvbnNlLmRhdGEubXNnIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgZGVzY29ub2NpZG8nLCBlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4geyBcImNvZGVcIjogNTAwLCBcIm1zZ1wiOiBcIkVycm9yIGRlc2Nvbm9jaWRvXCIgfTtcbiAgICAgICAgfVxuICAgIH1cbn0iXSwibmFtZXMiOlsiQ29va2llcyIsIkdFVCIsIlBPU1QiLCJQT1NUX0lNRyIsImFsbF9wcm9kdWN0cyIsImRhdG9zIiwidG9rZW4iLCJnZXQiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zZSIsImRhdGEiLCJnZXRfcHJvZHVjdG8iLCJleHRlcm5hbCIsIm1vZGlmeV9wcm9kdWN0byIsInNhdmVfcHJvZHVjdCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJmb3JFYWNoIiwiaXRlbSIsImFwcGVuZCIsIkFycmF5IiwiZnJvbSIsImVudHJpZXMiLCJjb2RlIiwibXNnIiwic3RhdHVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/hooks/service_producto.js\n"));

/***/ })

});
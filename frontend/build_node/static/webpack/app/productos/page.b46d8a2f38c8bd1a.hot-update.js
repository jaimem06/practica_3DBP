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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   all_products: function() { return /* binding */ all_products; },\n/* harmony export */   get_producto: function() { return /* binding */ get_producto; },\n/* harmony export */   modify_producto: function() { return /* binding */ modify_producto; },\n/* harmony export */   save_product: function() { return /* binding */ save_product; },\n/* harmony export */   traer_imagen: function() { return /* binding */ traer_imagen; }\n/* harmony export */ });\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ \"(app-pages-browser)/./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var _connection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./connection */ \"(app-pages-browser)/./src/hooks/connection.js\");\n\n\nasync function all_products() {\n    let datos = null;\n    try {\n        const token = js_cookie__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"token\");\n        datos = await (0,_connection__WEBPACK_IMPORTED_MODULE_1__.GET)(\"producto\", token);\n    } catch (error) {\n        console.log(error.response.data);\n        return {\n            \"code\": 500\n        };\n    }\n    return datos.data;\n}\nasync function get_producto(token, external) {\n    let datos = null;\n    try {\n        datos = await (0,_connection__WEBPACK_IMPORTED_MODULE_1__.GET)(\"producto/\" + external, token);\n    } catch (error) {\n        console.log(error.response.data);\n        return {\n            \"code\": 500\n        };\n    }\n    return datos.data;\n}\nasync function modify_producto(external_id, formData) {\n    let datos = null;\n    try {\n        const token = js_cookie__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"token\");\n        datos = await (0,_connection__WEBPACK_IMPORTED_MODULE_1__.POST_IMG)(\"producto/modificar/\".concat(external_id), formData, token);\n    } catch (error) {\n        console.error(\"Error modificando producto:\", error);\n    }\n    return datos;\n}\nasync function save_product(token, formData) {\n    console.log(\"save_product called with data:\", formData);\n    console.log(\"FormData entries:\", Array.from(formData.entries()));\n    try {\n        const response = await (0,_connection__WEBPACK_IMPORTED_MODULE_1__.POST_IMG)(\"productoimg/registrar\", formData, token);\n        if (response.data && response.data.code === 200) {\n            return response.data;\n        } else {\n            console.log(\"Error en la respuesta del servidor\", response.data);\n            return {\n                \"code\": response.data.code,\n                \"msg\": response.data.msg\n            };\n        }\n    } catch (error) {\n        console.log(\"Error in save_product:\", error);\n        if (error.response && error.response.data) {\n            console.log(error.response.data.msg);\n            return {\n                \"code\": error.response.status,\n                \"msg\": error.response.data.msg\n            };\n        } else {\n            console.log(\"Error desconocido\", error);\n            return {\n                \"code\": 500,\n                \"msg\": \"Error desconocido\"\n            };\n        }\n    }\n}\nfunction traer_imagen(imagen_url) {\n    const url = (0,_connection__WEBPACK_IMPORTED_MODULE_1__.URL_IMAGEN)(imagen_url);\n    console.log(\"URL de la imagen construida: \".concat(url));\n    return url;\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9ob29rcy9zZXJ2aWNlX3Byb2R1Y3RvLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBb0M7QUFDK0I7QUFFeEQsZUFBZUs7SUFDbEIsSUFBSUMsUUFBUTtJQUNaLElBQUk7UUFDQSxNQUFNQyxRQUFRUCxpREFBT0EsQ0FBQ1EsR0FBRyxDQUFDO1FBQzFCRixRQUFRLE1BQU1MLGdEQUFHQSxDQUFDLFlBQVlNO0lBQ2xDLEVBQUUsT0FBT0UsT0FBTztRQUNaQyxRQUFRQyxHQUFHLENBQUNGLE1BQU1HLFFBQVEsQ0FBQ0MsSUFBSTtRQUMvQixPQUFPO1lBQUUsUUFBUTtRQUFJO0lBQ3pCO0lBQ0EsT0FBT1AsTUFBTU8sSUFBSTtBQUNyQjtBQUVPLGVBQWVDLGFBQWFQLEtBQUssRUFBRVEsUUFBUTtJQUM5QyxJQUFJVCxRQUFRO0lBQ1osSUFBSTtRQUNBQSxRQUFRLE1BQU1MLGdEQUFHQSxDQUFDLGNBQWNjLFVBQVVSO0lBQzlDLEVBQUUsT0FBT0UsT0FBTztRQUNaQyxRQUFRQyxHQUFHLENBQUNGLE1BQU1HLFFBQVEsQ0FBQ0MsSUFBSTtRQUMvQixPQUFPO1lBQUUsUUFBUTtRQUFJO0lBQ3pCO0lBQ0EsT0FBT1AsTUFBTU8sSUFBSTtBQUNyQjtBQUVHLGVBQWVHLGdCQUFnQkMsV0FBVyxFQUFFQyxRQUFRO0lBQ3ZELElBQUlaLFFBQVE7SUFDWixJQUFJO1FBQ0EsTUFBTUMsUUFBUVAsaURBQU9BLENBQUNRLEdBQUcsQ0FBQztRQUMxQkYsUUFBUSxNQUFNSCxxREFBUUEsQ0FBQyxzQkFBa0MsT0FBWmMsY0FBZUMsVUFBVVg7SUFDMUUsRUFBRSxPQUFPRSxPQUFPO1FBQ1pDLFFBQVFELEtBQUssQ0FBQywrQkFBK0JBO0lBQ2pEO0lBQ0EsT0FBT0g7QUFDWDtBQUVXLGVBQWVhLGFBQWFaLEtBQUssRUFBRVcsUUFBUTtJQUM5Q1IsUUFBUUMsR0FBRyxDQUFDLGtDQUFrQ087SUFFOUNSLFFBQVFDLEdBQUcsQ0FBQyxxQkFBcUJTLE1BQU1DLElBQUksQ0FBQ0gsU0FBU0ksT0FBTztJQUU1RCxJQUFJO1FBQ0EsTUFBTVYsV0FBVyxNQUFNVCxxREFBUUEsQ0FBQyx5QkFBeUJlLFVBQVVYO1FBQ25FLElBQUlLLFNBQVNDLElBQUksSUFBSUQsU0FBU0MsSUFBSSxDQUFDVSxJQUFJLEtBQUssS0FBSztZQUM3QyxPQUFPWCxTQUFTQyxJQUFJO1FBQ3hCLE9BQU87WUFDSEgsUUFBUUMsR0FBRyxDQUFDLHNDQUFzQ0MsU0FBU0MsSUFBSTtZQUMvRCxPQUFPO2dCQUFFLFFBQVFELFNBQVNDLElBQUksQ0FBQ1UsSUFBSTtnQkFBRSxPQUFPWCxTQUFTQyxJQUFJLENBQUNXLEdBQUc7WUFBQztRQUNsRTtJQUNKLEVBQUUsT0FBT2YsT0FBTztRQUNaQyxRQUFRQyxHQUFHLENBQUMsMEJBQTBCRjtRQUN0QyxJQUFJQSxNQUFNRyxRQUFRLElBQUlILE1BQU1HLFFBQVEsQ0FBQ0MsSUFBSSxFQUFFO1lBQ3ZDSCxRQUFRQyxHQUFHLENBQUNGLE1BQU1HLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDVyxHQUFHO1lBQ25DLE9BQU87Z0JBQUUsUUFBUWYsTUFBTUcsUUFBUSxDQUFDYSxNQUFNO2dCQUFFLE9BQU9oQixNQUFNRyxRQUFRLENBQUNDLElBQUksQ0FBQ1csR0FBRztZQUFDO1FBQzNFLE9BQU87WUFDSGQsUUFBUUMsR0FBRyxDQUFDLHFCQUFxQkY7WUFDakMsT0FBTztnQkFBRSxRQUFRO2dCQUFLLE9BQU87WUFBb0I7UUFDckQ7SUFDSjtBQUNKO0FBRU8sU0FBU2lCLGFBQWFDLFVBQVU7SUFDbkMsTUFBTUMsTUFBTXhCLHVEQUFVQSxDQUFDdUI7SUFDdkJqQixRQUFRQyxHQUFHLENBQUMsZ0NBQW9DLE9BQUppQjtJQUM1QyxPQUFPQTtBQUNYIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9ob29rcy9zZXJ2aWNlX3Byb2R1Y3RvLmpzP2M0ZDciXSwic291cmNlc0NvbnRlbnQiOlsiICAgIGltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XG4gICAgaW1wb3J0IHsgR0VULCBQT1NULCBQT1NUX0lNRywgVVJMX0lNQUdFTiB9IGZyb20gJy4vY29ubmVjdGlvbic7XG5cbiAgICBleHBvcnQgYXN5bmMgZnVuY3Rpb24gYWxsX3Byb2R1Y3RzKCkge1xuICAgICAgICBsZXQgZGF0b3MgPSBudWxsO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgdG9rZW4gPSBDb29raWVzLmdldCgndG9rZW4nKTtcbiAgICAgICAgICAgIGRhdG9zID0gYXdhaXQgR0VUKCdwcm9kdWN0bycsIHRva2VuKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgcmV0dXJuIHsgXCJjb2RlXCI6IDUwMCB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRhdG9zLmRhdGE7XG4gICAgfVxuXG4gICAgZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldF9wcm9kdWN0byh0b2tlbiwgZXh0ZXJuYWwpIHtcbiAgICAgICAgbGV0IGRhdG9zID0gbnVsbDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGRhdG9zID0gYXdhaXQgR0VUKCdwcm9kdWN0by8nICsgZXh0ZXJuYWwsIHRva2VuKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgcmV0dXJuIHsgXCJjb2RlXCI6IDUwMCB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRhdG9zLmRhdGE7XG4gICAgfVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbW9kaWZ5X3Byb2R1Y3RvKGV4dGVybmFsX2lkLCBmb3JtRGF0YSkge1xuICAgIGxldCBkYXRvcyA9IG51bGw7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdG9rZW4gPSBDb29raWVzLmdldCgndG9rZW4nKTtcbiAgICAgICAgZGF0b3MgPSBhd2FpdCBQT1NUX0lNRyhgcHJvZHVjdG8vbW9kaWZpY2FyLyR7ZXh0ZXJuYWxfaWR9YCwgZm9ybURhdGEsIHRva2VuKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBtb2RpZmljYW5kbyBwcm9kdWN0bzonLCBlcnJvcik7XG4gICAgfVxuICAgIHJldHVybiBkYXRvcztcbn1cblxuICAgIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBzYXZlX3Byb2R1Y3QodG9rZW4sIGZvcm1EYXRhKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzYXZlX3Byb2R1Y3QgY2FsbGVkIHdpdGggZGF0YTonLCBmb3JtRGF0YSk7XG5cbiAgICAgICAgY29uc29sZS5sb2coJ0Zvcm1EYXRhIGVudHJpZXM6JywgQXJyYXkuZnJvbShmb3JtRGF0YS5lbnRyaWVzKCkpKTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBQT1NUX0lNRygncHJvZHVjdG9pbWcvcmVnaXN0cmFyJywgZm9ybURhdGEsIHRva2VuKTtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhICYmIHJlc3BvbnNlLmRhdGEuY29kZSA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBlbiBsYSByZXNwdWVzdGEgZGVsIHNlcnZpZG9yJywgcmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgXCJjb2RlXCI6IHJlc3BvbnNlLmRhdGEuY29kZSwgXCJtc2dcIjogcmVzcG9uc2UuZGF0YS5tc2cgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBpbiBzYXZlX3Byb2R1Y3Q6JywgZXJyb3IpO1xuICAgICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlICYmIGVycm9yLnJlc3BvbnNlLmRhdGEpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZS5kYXRhLm1zZyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgXCJjb2RlXCI6IGVycm9yLnJlc3BvbnNlLnN0YXR1cywgXCJtc2dcIjogZXJyb3IucmVzcG9uc2UuZGF0YS5tc2cgfTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIGRlc2Nvbm9jaWRvJywgZXJyb3IpO1xuICAgICAgICAgICAgICAgIHJldHVybiB7IFwiY29kZVwiOiA1MDAsIFwibXNnXCI6IFwiRXJyb3IgZGVzY29ub2NpZG9cIiB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGZ1bmN0aW9uIHRyYWVyX2ltYWdlbihpbWFnZW5fdXJsKSB7XG4gICAgICAgIGNvbnN0IHVybCA9IFVSTF9JTUFHRU4oaW1hZ2VuX3VybCk7IFxuICAgICAgICBjb25zb2xlLmxvZyhgVVJMIGRlIGxhIGltYWdlbiBjb25zdHJ1aWRhOiAke3VybH1gKTsgXG4gICAgICAgIHJldHVybiB1cmw7XG4gICAgfSJdLCJuYW1lcyI6WyJDb29raWVzIiwiR0VUIiwiUE9TVCIsIlBPU1RfSU1HIiwiVVJMX0lNQUdFTiIsImFsbF9wcm9kdWN0cyIsImRhdG9zIiwidG9rZW4iLCJnZXQiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zZSIsImRhdGEiLCJnZXRfcHJvZHVjdG8iLCJleHRlcm5hbCIsIm1vZGlmeV9wcm9kdWN0byIsImV4dGVybmFsX2lkIiwiZm9ybURhdGEiLCJzYXZlX3Byb2R1Y3QiLCJBcnJheSIsImZyb20iLCJlbnRyaWVzIiwiY29kZSIsIm1zZyIsInN0YXR1cyIsInRyYWVyX2ltYWdlbiIsImltYWdlbl91cmwiLCJ1cmwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/hooks/service_producto.js\n"));

/***/ })

});
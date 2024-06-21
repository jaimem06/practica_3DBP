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

/***/ "(app-pages-browser)/./src/hooks/service_producto.js":
/*!***************************************!*\
  !*** ./src/hooks/service_producto.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   all_products: function() { return /* binding */ all_products; },\n/* harmony export */   get_producto: function() { return /* binding */ get_producto; },\n/* harmony export */   modify_producto: function() { return /* binding */ modify_producto; },\n/* harmony export */   save_product: function() { return /* binding */ save_product; },\n/* harmony export */   traer_imagen: function() { return /* binding */ traer_imagen; }\n/* harmony export */ });\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ \"(app-pages-browser)/./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var _connection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./connection */ \"(app-pages-browser)/./src/hooks/connection.js\");\n\n\nasync function all_products() {\n    let datos = null;\n    try {\n        const token = js_cookie__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"token\");\n        datos = await (0,_connection__WEBPACK_IMPORTED_MODULE_1__.GET)(\"producto\", token);\n    } catch (error) {\n        console.log(error.response.data);\n        return {\n            \"code\": 500\n        };\n    }\n    return datos.data;\n}\nasync function get_producto(token, external) {\n    let datos = null;\n    try {\n        datos = await (0,_connection__WEBPACK_IMPORTED_MODULE_1__.GET)(\"producto/\" + external, token);\n    } catch (error) {\n        console.log(error.response.data);\n        return {\n            \"code\": 500\n        };\n    }\n    return datos.data;\n}\nasync function modify_producto(external_id, data) {\n    let datos = null;\n    try {\n        const token = js_cookie__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"token\");\n        datos = await (0,_connection__WEBPACK_IMPORTED_MODULE_1__.POST_IMG)(\"producto/modificar/\".concat(external_id), data, token);\n    } catch (error) {\n        console.error(\"Error modificando producto:\", error);\n    }\n    return datos;\n}\nasync function save_product(token, formData) {\n    console.log(\"save_product called with data:\", formData);\n    console.log(\"FormData entries:\", Array.from(formData.entries())); // To verify formData content\n    try {\n        const response = await (0,_connection__WEBPACK_IMPORTED_MODULE_1__.POST_IMG)(\"productoimg/registrar\", formData, token);\n        if (response.data && response.data.code === 200) {\n            return response.data;\n        } else {\n            console.log(\"Error en la respuesta del servidor\", response.data);\n            return {\n                \"code\": response.data.code,\n                \"msg\": response.data.msg\n            };\n        }\n    } catch (error) {\n        console.log(\"Error in save_product:\", error);\n        if (error.response && error.response.data) {\n            console.log(error.response.data.msg);\n            return {\n                \"code\": error.response.status,\n                \"msg\": error.response.data.msg\n            };\n        } else {\n            console.log(\"Error desconocido\", error);\n            return {\n                \"code\": 500,\n                \"msg\": \"Error desconocido\"\n            };\n        }\n    }\n}\nfunction traer_imagen(imagen_url) {\n    // Construcción de la URL de la imagen\n    const url = (0,_connection__WEBPACK_IMPORTED_MODULE_1__.URL_IMAGEN)(imagen_url); // Suponiendo que URL_IMAGEN es una función o una constante que ayuda a construir la URL final\n    console.log(\"URL de la imagen construida: \".concat(url)); // Agregamos el console.log aquí\n    return url;\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9ob29rcy9zZXJ2aWNlX3Byb2R1Y3RvLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBb0M7QUFDK0I7QUFFeEQsZUFBZUs7SUFDbEIsSUFBSUMsUUFBUTtJQUNaLElBQUk7UUFDQSxNQUFNQyxRQUFRUCxpREFBT0EsQ0FBQ1EsR0FBRyxDQUFDO1FBQzFCRixRQUFRLE1BQU1MLGdEQUFHQSxDQUFDLFlBQVlNO0lBQ2xDLEVBQUUsT0FBT0UsT0FBTztRQUNaQyxRQUFRQyxHQUFHLENBQUNGLE1BQU1HLFFBQVEsQ0FBQ0MsSUFBSTtRQUMvQixPQUFPO1lBQUUsUUFBUTtRQUFJO0lBQ3pCO0lBQ0EsT0FBT1AsTUFBTU8sSUFBSTtBQUNyQjtBQUVPLGVBQWVDLGFBQWFQLEtBQUssRUFBRVEsUUFBUTtJQUM5QyxJQUFJVCxRQUFRO0lBQ1osSUFBSTtRQUNBQSxRQUFRLE1BQU1MLGdEQUFHQSxDQUFDLGNBQWNjLFVBQVVSO0lBQzlDLEVBQUUsT0FBT0UsT0FBTztRQUNaQyxRQUFRQyxHQUFHLENBQUNGLE1BQU1HLFFBQVEsQ0FBQ0MsSUFBSTtRQUMvQixPQUFPO1lBQUUsUUFBUTtRQUFJO0lBQ3pCO0lBQ0EsT0FBT1AsTUFBTU8sSUFBSTtBQUNyQjtBQUVPLGVBQWVHLGdCQUFnQkMsV0FBVyxFQUFFSixJQUFJO0lBQ25ELElBQUlQLFFBQVE7SUFDWixJQUFJO1FBQ0EsTUFBTUMsUUFBUVAsaURBQU9BLENBQUNRLEdBQUcsQ0FBQztRQUMxQkYsUUFBUSxNQUFNSCxxREFBUUEsQ0FBQyxzQkFBa0MsT0FBWmMsY0FBZUosTUFBTU47SUFDdEUsRUFBRSxPQUFPRSxPQUFPO1FBQ1pDLFFBQVFELEtBQUssQ0FBQywrQkFBK0JBO0lBQ2pEO0lBQ0EsT0FBT0g7QUFDWDtBQUVPLGVBQWVZLGFBQWFYLEtBQUssRUFBRVksUUFBUTtJQUM5Q1QsUUFBUUMsR0FBRyxDQUFDLGtDQUFrQ1E7SUFFOUNULFFBQVFDLEdBQUcsQ0FBQyxxQkFBcUJTLE1BQU1DLElBQUksQ0FBQ0YsU0FBU0csT0FBTyxNQUFNLDZCQUE2QjtJQUUvRixJQUFJO1FBQ0EsTUFBTVYsV0FBVyxNQUFNVCxxREFBUUEsQ0FBQyx5QkFBeUJnQixVQUFVWjtRQUNuRSxJQUFJSyxTQUFTQyxJQUFJLElBQUlELFNBQVNDLElBQUksQ0FBQ1UsSUFBSSxLQUFLLEtBQUs7WUFDN0MsT0FBT1gsU0FBU0MsSUFBSTtRQUN4QixPQUFPO1lBQ0hILFFBQVFDLEdBQUcsQ0FBQyxzQ0FBc0NDLFNBQVNDLElBQUk7WUFDL0QsT0FBTztnQkFBRSxRQUFRRCxTQUFTQyxJQUFJLENBQUNVLElBQUk7Z0JBQUUsT0FBT1gsU0FBU0MsSUFBSSxDQUFDVyxHQUFHO1lBQUM7UUFDbEU7SUFDSixFQUFFLE9BQU9mLE9BQU87UUFDWkMsUUFBUUMsR0FBRyxDQUFDLDBCQUEwQkY7UUFDdEMsSUFBSUEsTUFBTUcsUUFBUSxJQUFJSCxNQUFNRyxRQUFRLENBQUNDLElBQUksRUFBRTtZQUN2Q0gsUUFBUUMsR0FBRyxDQUFDRixNQUFNRyxRQUFRLENBQUNDLElBQUksQ0FBQ1csR0FBRztZQUNuQyxPQUFPO2dCQUFFLFFBQVFmLE1BQU1HLFFBQVEsQ0FBQ2EsTUFBTTtnQkFBRSxPQUFPaEIsTUFBTUcsUUFBUSxDQUFDQyxJQUFJLENBQUNXLEdBQUc7WUFBQztRQUMzRSxPQUFPO1lBQ0hkLFFBQVFDLEdBQUcsQ0FBQyxxQkFBcUJGO1lBQ2pDLE9BQU87Z0JBQUUsUUFBUTtnQkFBSyxPQUFPO1lBQW9CO1FBQ3JEO0lBQ0o7QUFDSjtBQUVPLFNBQVNpQixhQUFhQyxVQUFVO0lBQ25DLHNDQUFzQztJQUN0QyxNQUFNQyxNQUFNeEIsdURBQVVBLENBQUN1QixhQUFhLDhGQUE4RjtJQUNsSWpCLFFBQVFDLEdBQUcsQ0FBQyxnQ0FBb0MsT0FBSmlCLE9BQVEsZ0NBQWdDO0lBQ3BGLE9BQU9BO0FBQ1giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3NlcnZpY2VfcHJvZHVjdG8uanM/YzRkNyJdLCJzb3VyY2VzQ29udGVudCI6WyIgICAgaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcbiAgICBpbXBvcnQgeyBHRVQsIFBPU1QsIFBPU1RfSU1HLCBVUkxfSU1BR0VOIH0gZnJvbSAnLi9jb25uZWN0aW9uJztcblxuICAgIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBhbGxfcHJvZHVjdHMoKSB7XG4gICAgICAgIGxldCBkYXRvcyA9IG51bGw7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB0b2tlbiA9IENvb2tpZXMuZ2V0KCd0b2tlbicpO1xuICAgICAgICAgICAgZGF0b3MgPSBhd2FpdCBHRVQoJ3Byb2R1Y3RvJywgdG9rZW4pO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICByZXR1cm4geyBcImNvZGVcIjogNTAwIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGF0b3MuZGF0YTtcbiAgICB9XG5cbiAgICBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0X3Byb2R1Y3RvKHRva2VuLCBleHRlcm5hbCkge1xuICAgICAgICBsZXQgZGF0b3MgPSBudWxsO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZGF0b3MgPSBhd2FpdCBHRVQoJ3Byb2R1Y3RvLycgKyBleHRlcm5hbCwgdG9rZW4pO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICByZXR1cm4geyBcImNvZGVcIjogNTAwIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGF0b3MuZGF0YTtcbiAgICB9XG5cbiAgICBleHBvcnQgYXN5bmMgZnVuY3Rpb24gbW9kaWZ5X3Byb2R1Y3RvKGV4dGVybmFsX2lkLCBkYXRhKSB7XG4gICAgICAgIGxldCBkYXRvcyA9IG51bGw7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB0b2tlbiA9IENvb2tpZXMuZ2V0KCd0b2tlbicpO1xuICAgICAgICAgICAgZGF0b3MgPSBhd2FpdCBQT1NUX0lNRyhgcHJvZHVjdG8vbW9kaWZpY2FyLyR7ZXh0ZXJuYWxfaWR9YCwgZGF0YSwgdG9rZW4pO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgbW9kaWZpY2FuZG8gcHJvZHVjdG86JywgZXJyb3IpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkYXRvcztcbiAgICB9XG5cbiAgICBleHBvcnQgYXN5bmMgZnVuY3Rpb24gc2F2ZV9wcm9kdWN0KHRva2VuLCBmb3JtRGF0YSkge1xuICAgICAgICBjb25zb2xlLmxvZygnc2F2ZV9wcm9kdWN0IGNhbGxlZCB3aXRoIGRhdGE6JywgZm9ybURhdGEpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdGb3JtRGF0YSBlbnRyaWVzOicsIEFycmF5LmZyb20oZm9ybURhdGEuZW50cmllcygpKSk7IC8vIFRvIHZlcmlmeSBmb3JtRGF0YSBjb250ZW50XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgUE9TVF9JTUcoJ3Byb2R1Y3RvaW1nL3JlZ2lzdHJhcicsIGZvcm1EYXRhLCB0b2tlbik7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YSAmJiByZXNwb25zZS5kYXRhLmNvZGUgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgZW4gbGEgcmVzcHVlc3RhIGRlbCBzZXJ2aWRvcicsIHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgICAgIHJldHVybiB7IFwiY29kZVwiOiByZXNwb25zZS5kYXRhLmNvZGUsIFwibXNnXCI6IHJlc3BvbnNlLmRhdGEubXNnIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgaW4gc2F2ZV9wcm9kdWN0OicsIGVycm9yKTtcbiAgICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZSAmJiBlcnJvci5yZXNwb25zZS5kYXRhKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UuZGF0YS5tc2cpO1xuICAgICAgICAgICAgICAgIHJldHVybiB7IFwiY29kZVwiOiBlcnJvci5yZXNwb25zZS5zdGF0dXMsIFwibXNnXCI6IGVycm9yLnJlc3BvbnNlLmRhdGEubXNnIH07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBkZXNjb25vY2lkbycsIGVycm9yKTtcbiAgICAgICAgICAgICAgICByZXR1cm4geyBcImNvZGVcIjogNTAwLCBcIm1zZ1wiOiBcIkVycm9yIGRlc2Nvbm9jaWRvXCIgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cG9ydCBmdW5jdGlvbiB0cmFlcl9pbWFnZW4oaW1hZ2VuX3VybCkge1xuICAgICAgICAvLyBDb25zdHJ1Y2Npw7NuIGRlIGxhIFVSTCBkZSBsYSBpbWFnZW5cbiAgICAgICAgY29uc3QgdXJsID0gVVJMX0lNQUdFTihpbWFnZW5fdXJsKTsgLy8gU3Vwb25pZW5kbyBxdWUgVVJMX0lNQUdFTiBlcyB1bmEgZnVuY2nDs24gbyB1bmEgY29uc3RhbnRlIHF1ZSBheXVkYSBhIGNvbnN0cnVpciBsYSBVUkwgZmluYWxcbiAgICAgICAgY29uc29sZS5sb2coYFVSTCBkZSBsYSBpbWFnZW4gY29uc3RydWlkYTogJHt1cmx9YCk7IC8vIEFncmVnYW1vcyBlbCBjb25zb2xlLmxvZyBhcXXDrVxuICAgICAgICByZXR1cm4gdXJsO1xuICAgIH0iXSwibmFtZXMiOlsiQ29va2llcyIsIkdFVCIsIlBPU1QiLCJQT1NUX0lNRyIsIlVSTF9JTUFHRU4iLCJhbGxfcHJvZHVjdHMiLCJkYXRvcyIsInRva2VuIiwiZ2V0IiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2UiLCJkYXRhIiwiZ2V0X3Byb2R1Y3RvIiwiZXh0ZXJuYWwiLCJtb2RpZnlfcHJvZHVjdG8iLCJleHRlcm5hbF9pZCIsInNhdmVfcHJvZHVjdCIsImZvcm1EYXRhIiwiQXJyYXkiLCJmcm9tIiwiZW50cmllcyIsImNvZGUiLCJtc2ciLCJzdGF0dXMiLCJ0cmFlcl9pbWFnZW4iLCJpbWFnZW5fdXJsIiwidXJsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/hooks/service_producto.js\n"));

/***/ })

});
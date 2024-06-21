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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   all_products: function() { return /* binding */ all_products; },\n/* harmony export */   get_producto: function() { return /* binding */ get_producto; },\n/* harmony export */   modify_producto: function() { return /* binding */ modify_producto; },\n/* harmony export */   save_product: function() { return /* binding */ save_product; },\n/* harmony export */   traer_imagen: function() { return /* binding */ traer_imagen; }\n/* harmony export */ });\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ \"(app-pages-browser)/./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var _connection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./connection */ \"(app-pages-browser)/./src/hooks/connection.js\");\n\n\nasync function all_products() {\n    let datos = null;\n    try {\n        const token = js_cookie__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"token\");\n        datos = await (0,_connection__WEBPACK_IMPORTED_MODULE_1__.GET)(\"producto\", token);\n    } catch (error) {\n        console.log(error.response.data);\n        return {\n            \"code\": 500\n        };\n    }\n    return datos.data;\n}\nasync function get_producto(token, external) {\n    let datos = null;\n    try {\n        datos = await (0,_connection__WEBPACK_IMPORTED_MODULE_1__.GET)(\"producto/\" + external, token);\n    } catch (error) {\n        console.log(error.response.data);\n        return {\n            \"code\": 500\n        };\n    }\n    return datos.data;\n}\nasync function modify_producto(token, external, data) {\n    if (!external) {\n        console.error(\"External ID is undefined or null\");\n        return {\n            \"code\": 500\n        };\n    }\n    const formData = new FormData();\n    if (data.nombre) formData.append(\"nombre\", data.nombre);\n    if (data.fecha_caducidad) formData.append(\"fecha_caducidad\", data.fecha_caducidad);\n    if (data.cantidad) formData.append(\"cantidad\", data.cantidad);\n    if (data.precio_unitario) formData.append(\"precio_unitario\", data.precio_unitario);\n    if (data.nombre_lote) formData.append(\"nombre_lote\", data.nombre_lote);\n    if (data.imagen && data.imagen instanceof FileList && data.imagen.length > 0) {\n        formData.append(\"imagen\", data.imagen[0]);\n    } else if (data.imagen) {\n        formData.append(\"imagen\", data.imagen);\n    }\n    let response = null;\n    try {\n        response = await (0,_connection__WEBPACK_IMPORTED_MODULE_1__.POST_IMG)(\"producto/modificar/\" + external, formData, token);\n    } catch (error) {\n        console.error(error.response ? error.response.data : error);\n        return {\n            \"code\": 500\n        };\n    }\n    return response.data;\n}\nasync function save_product(token, formData) {\n    console.log(\"save_product called with data:\", formData);\n    console.log(\"FormData entries:\", Array.from(formData.entries())); // To verify formData content\n    try {\n        const response = await (0,_connection__WEBPACK_IMPORTED_MODULE_1__.POST_IMG)(\"productoimg/registrar\", formData, token);\n        if (response.data && response.data.code === 200) {\n            return response.data;\n        } else {\n            console.log(\"Error en la respuesta del servidor\", response.data);\n            return {\n                \"code\": response.data.code,\n                \"msg\": response.data.msg\n            };\n        }\n    } catch (error) {\n        console.log(\"Error in save_product:\", error);\n        if (error.response && error.response.data) {\n            console.log(error.response.data.msg);\n            return {\n                \"code\": error.response.status,\n                \"msg\": error.response.data.msg\n            };\n        } else {\n            console.log(\"Error desconocido\", error);\n            return {\n                \"code\": 500,\n                \"msg\": \"Error desconocido\"\n            };\n        }\n    }\n}\nfunction traer_imagen(imagen_url) {\n    // Construcción de la URL de la imagen\n    const url = (0,_connection__WEBPACK_IMPORTED_MODULE_1__.URL_IMAGEN)(imagen_url); // Suponiendo que URL_IMAGEN es una función o una constante que ayuda a construir la URL final\n    console.log(\"URL de la imagen construida: \".concat(url)); // Agregamos el console.log aquí\n    return url;\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9ob29rcy9zZXJ2aWNlX3Byb2R1Y3RvLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBZ0M7QUFDK0I7QUFFeEQsZUFBZUs7SUFDbEIsSUFBSUMsUUFBUTtJQUNaLElBQUk7UUFDQSxNQUFNQyxRQUFRUCxpREFBT0EsQ0FBQ1EsR0FBRyxDQUFDO1FBQzFCRixRQUFRLE1BQU1MLGdEQUFHQSxDQUFDLFlBQVlNO0lBQ2xDLEVBQUUsT0FBT0UsT0FBTztRQUNaQyxRQUFRQyxHQUFHLENBQUNGLE1BQU1HLFFBQVEsQ0FBQ0MsSUFBSTtRQUMvQixPQUFPO1lBQUUsUUFBUTtRQUFJO0lBQ3pCO0lBQ0EsT0FBT1AsTUFBTU8sSUFBSTtBQUNyQjtBQUVPLGVBQWVDLGFBQWFQLEtBQUssRUFBRVEsUUFBUTtJQUM5QyxJQUFJVCxRQUFRO0lBQ1osSUFBSTtRQUNBQSxRQUFRLE1BQU1MLGdEQUFHQSxDQUFDLGNBQWNjLFVBQVVSO0lBQzlDLEVBQUUsT0FBT0UsT0FBTztRQUNaQyxRQUFRQyxHQUFHLENBQUNGLE1BQU1HLFFBQVEsQ0FBQ0MsSUFBSTtRQUMvQixPQUFPO1lBQUUsUUFBUTtRQUFJO0lBQ3pCO0lBQ0EsT0FBT1AsTUFBTU8sSUFBSTtBQUNyQjtBQUVPLGVBQWVHLGdCQUFnQlQsS0FBSyxFQUFFUSxRQUFRLEVBQUVGLElBQUk7SUFDdkQsSUFBSSxDQUFDRSxVQUFVO1FBQ1hMLFFBQVFELEtBQUssQ0FBQztRQUNkLE9BQU87WUFBRSxRQUFRO1FBQUk7SUFDekI7SUFDQSxNQUFNUSxXQUFXLElBQUlDO0lBQ3JCLElBQUlMLEtBQUtNLE1BQU0sRUFBRUYsU0FBU0csTUFBTSxDQUFDLFVBQVVQLEtBQUtNLE1BQU07SUFDdEQsSUFBSU4sS0FBS1EsZUFBZSxFQUFFSixTQUFTRyxNQUFNLENBQUMsbUJBQW1CUCxLQUFLUSxlQUFlO0lBQ2pGLElBQUlSLEtBQUtTLFFBQVEsRUFBRUwsU0FBU0csTUFBTSxDQUFDLFlBQVlQLEtBQUtTLFFBQVE7SUFDNUQsSUFBSVQsS0FBS1UsZUFBZSxFQUFFTixTQUFTRyxNQUFNLENBQUMsbUJBQW1CUCxLQUFLVSxlQUFlO0lBQ2pGLElBQUlWLEtBQUtXLFdBQVcsRUFBRVAsU0FBU0csTUFBTSxDQUFDLGVBQWVQLEtBQUtXLFdBQVc7SUFDckUsSUFBSVgsS0FBS1ksTUFBTSxJQUFJWixLQUFLWSxNQUFNLFlBQVlDLFlBQVliLEtBQUtZLE1BQU0sQ0FBQ0UsTUFBTSxHQUFHLEdBQUc7UUFDMUVWLFNBQVNHLE1BQU0sQ0FBQyxVQUFVUCxLQUFLWSxNQUFNLENBQUMsRUFBRTtJQUM1QyxPQUFPLElBQUlaLEtBQUtZLE1BQU0sRUFBRTtRQUNwQlIsU0FBU0csTUFBTSxDQUFDLFVBQVVQLEtBQUtZLE1BQU07SUFDekM7SUFFQSxJQUFJYixXQUFXO0lBQ2YsSUFBSTtRQUNBQSxXQUFXLE1BQU1ULHFEQUFRQSxDQUFDLHdCQUF3QlksVUFBVUUsVUFBVVY7SUFDMUUsRUFBRSxPQUFPRSxPQUFPO1FBQ1pDLFFBQVFELEtBQUssQ0FBQ0EsTUFBTUcsUUFBUSxHQUFHSCxNQUFNRyxRQUFRLENBQUNDLElBQUksR0FBR0o7UUFDckQsT0FBTztZQUFFLFFBQVE7UUFBSTtJQUN6QjtJQUNBLE9BQU9HLFNBQVNDLElBQUk7QUFDeEI7QUFFTyxlQUFlZSxhQUFhckIsS0FBSyxFQUFFVSxRQUFRO0lBQzlDUCxRQUFRQyxHQUFHLENBQUMsa0NBQWtDTTtJQUU5Q1AsUUFBUUMsR0FBRyxDQUFDLHFCQUFxQmtCLE1BQU1DLElBQUksQ0FBQ2IsU0FBU2MsT0FBTyxNQUFNLDZCQUE2QjtJQUUvRixJQUFJO1FBQ0EsTUFBTW5CLFdBQVcsTUFBTVQscURBQVFBLENBQUMseUJBQXlCYyxVQUFVVjtRQUNuRSxJQUFJSyxTQUFTQyxJQUFJLElBQUlELFNBQVNDLElBQUksQ0FBQ21CLElBQUksS0FBSyxLQUFLO1lBQzdDLE9BQU9wQixTQUFTQyxJQUFJO1FBQ3hCLE9BQU87WUFDSEgsUUFBUUMsR0FBRyxDQUFDLHNDQUFzQ0MsU0FBU0MsSUFBSTtZQUMvRCxPQUFPO2dCQUFFLFFBQVFELFNBQVNDLElBQUksQ0FBQ21CLElBQUk7Z0JBQUUsT0FBT3BCLFNBQVNDLElBQUksQ0FBQ29CLEdBQUc7WUFBQztRQUNsRTtJQUNKLEVBQUUsT0FBT3hCLE9BQU87UUFDWkMsUUFBUUMsR0FBRyxDQUFDLDBCQUEwQkY7UUFDdEMsSUFBSUEsTUFBTUcsUUFBUSxJQUFJSCxNQUFNRyxRQUFRLENBQUNDLElBQUksRUFBRTtZQUN2Q0gsUUFBUUMsR0FBRyxDQUFDRixNQUFNRyxRQUFRLENBQUNDLElBQUksQ0FBQ29CLEdBQUc7WUFDbkMsT0FBTztnQkFBRSxRQUFReEIsTUFBTUcsUUFBUSxDQUFDc0IsTUFBTTtnQkFBRSxPQUFPekIsTUFBTUcsUUFBUSxDQUFDQyxJQUFJLENBQUNvQixHQUFHO1lBQUM7UUFDM0UsT0FBTztZQUNIdkIsUUFBUUMsR0FBRyxDQUFDLHFCQUFxQkY7WUFDakMsT0FBTztnQkFBRSxRQUFRO2dCQUFLLE9BQU87WUFBb0I7UUFDckQ7SUFDSjtBQUNKO0FBRU8sU0FBUzBCLGFBQWFDLFVBQVU7SUFDbkMsc0NBQXNDO0lBQ3RDLE1BQU1DLE1BQU1qQyx1REFBVUEsQ0FBQ2dDLGFBQWEsOEZBQThGO0lBQ2xJMUIsUUFBUUMsR0FBRyxDQUFDLGdDQUFvQyxPQUFKMEIsT0FBUSxnQ0FBZ0M7SUFDcEYsT0FBT0E7QUFDWCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvaG9va3Mvc2VydmljZV9wcm9kdWN0by5qcz9jNGQ3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XG5pbXBvcnQgeyBHRVQsIFBPU1QsIFBPU1RfSU1HLCBVUkxfSU1BR0VOIH0gZnJvbSAnLi9jb25uZWN0aW9uJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFsbF9wcm9kdWN0cygpIHtcbiAgICBsZXQgZGF0b3MgPSBudWxsO1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHRva2VuID0gQ29va2llcy5nZXQoJ3Rva2VuJyk7XG4gICAgICAgIGRhdG9zID0gYXdhaXQgR0VUKCdwcm9kdWN0bycsIHRva2VuKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZS5kYXRhKTtcbiAgICAgICAgcmV0dXJuIHsgXCJjb2RlXCI6IDUwMCB9XG4gICAgfVxuICAgIHJldHVybiBkYXRvcy5kYXRhO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0X3Byb2R1Y3RvKHRva2VuLCBleHRlcm5hbCkge1xuICAgIGxldCBkYXRvcyA9IG51bGw7XG4gICAgdHJ5IHtcbiAgICAgICAgZGF0b3MgPSBhd2FpdCBHRVQoJ3Byb2R1Y3RvLycgKyBleHRlcm5hbCwgdG9rZW4pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlLmRhdGEpO1xuICAgICAgICByZXR1cm4geyBcImNvZGVcIjogNTAwIH1cbiAgICB9XG4gICAgcmV0dXJuIGRhdG9zLmRhdGE7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBtb2RpZnlfcHJvZHVjdG8odG9rZW4sIGV4dGVybmFsLCBkYXRhKSB7XG4gICAgaWYgKCFleHRlcm5hbCkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFeHRlcm5hbCBJRCBpcyB1bmRlZmluZWQgb3IgbnVsbCcpO1xuICAgICAgICByZXR1cm4geyBcImNvZGVcIjogNTAwIH07XG4gICAgfVxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgaWYgKGRhdGEubm9tYnJlKSBmb3JtRGF0YS5hcHBlbmQoJ25vbWJyZScsIGRhdGEubm9tYnJlKTtcbiAgICBpZiAoZGF0YS5mZWNoYV9jYWR1Y2lkYWQpIGZvcm1EYXRhLmFwcGVuZCgnZmVjaGFfY2FkdWNpZGFkJywgZGF0YS5mZWNoYV9jYWR1Y2lkYWQpO1xuICAgIGlmIChkYXRhLmNhbnRpZGFkKSBmb3JtRGF0YS5hcHBlbmQoJ2NhbnRpZGFkJywgZGF0YS5jYW50aWRhZCk7XG4gICAgaWYgKGRhdGEucHJlY2lvX3VuaXRhcmlvKSBmb3JtRGF0YS5hcHBlbmQoJ3ByZWNpb191bml0YXJpbycsIGRhdGEucHJlY2lvX3VuaXRhcmlvKTtcbiAgICBpZiAoZGF0YS5ub21icmVfbG90ZSkgZm9ybURhdGEuYXBwZW5kKCdub21icmVfbG90ZScsIGRhdGEubm9tYnJlX2xvdGUpO1xuICAgIGlmIChkYXRhLmltYWdlbiAmJiBkYXRhLmltYWdlbiBpbnN0YW5jZW9mIEZpbGVMaXN0ICYmIGRhdGEuaW1hZ2VuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdpbWFnZW4nLCBkYXRhLmltYWdlblswXSk7XG4gICAgfSBlbHNlIGlmIChkYXRhLmltYWdlbikge1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ltYWdlbicsIGRhdGEuaW1hZ2VuKTtcbiAgICB9XG5cbiAgICBsZXQgcmVzcG9uc2UgPSBudWxsO1xuICAgIHRyeSB7XG4gICAgICAgIHJlc3BvbnNlID0gYXdhaXQgUE9TVF9JTUcoJ3Byb2R1Y3RvL21vZGlmaWNhci8nICsgZXh0ZXJuYWwsIGZvcm1EYXRhLCB0b2tlbik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvci5yZXNwb25zZSA/IGVycm9yLnJlc3BvbnNlLmRhdGEgOiBlcnJvcik7XG4gICAgICAgIHJldHVybiB7IFwiY29kZVwiOiA1MDAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzYXZlX3Byb2R1Y3QodG9rZW4sIGZvcm1EYXRhKSB7XG4gICAgY29uc29sZS5sb2coJ3NhdmVfcHJvZHVjdCBjYWxsZWQgd2l0aCBkYXRhOicsIGZvcm1EYXRhKTtcblxuICAgIGNvbnNvbGUubG9nKCdGb3JtRGF0YSBlbnRyaWVzOicsIEFycmF5LmZyb20oZm9ybURhdGEuZW50cmllcygpKSk7IC8vIFRvIHZlcmlmeSBmb3JtRGF0YSBjb250ZW50XG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IFBPU1RfSU1HKCdwcm9kdWN0b2ltZy9yZWdpc3RyYXInLCBmb3JtRGF0YSwgdG9rZW4pO1xuICAgICAgICBpZiAocmVzcG9uc2UuZGF0YSAmJiByZXNwb25zZS5kYXRhLmNvZGUgPT09IDIwMCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgZW4gbGEgcmVzcHVlc3RhIGRlbCBzZXJ2aWRvcicsIHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgcmV0dXJuIHsgXCJjb2RlXCI6IHJlc3BvbnNlLmRhdGEuY29kZSwgXCJtc2dcIjogcmVzcG9uc2UuZGF0YS5tc2cgfTtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBpbiBzYXZlX3Byb2R1Y3Q6JywgZXJyb3IpO1xuICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2UgJiYgZXJyb3IucmVzcG9uc2UuZGF0YSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UuZGF0YS5tc2cpO1xuICAgICAgICAgICAgcmV0dXJuIHsgXCJjb2RlXCI6IGVycm9yLnJlc3BvbnNlLnN0YXR1cywgXCJtc2dcIjogZXJyb3IucmVzcG9uc2UuZGF0YS5tc2cgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBkZXNjb25vY2lkbycsIGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiB7IFwiY29kZVwiOiA1MDAsIFwibXNnXCI6IFwiRXJyb3IgZGVzY29ub2NpZG9cIiB9O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhZXJfaW1hZ2VuKGltYWdlbl91cmwpIHtcbiAgICAvLyBDb25zdHJ1Y2Npw7NuIGRlIGxhIFVSTCBkZSBsYSBpbWFnZW5cbiAgICBjb25zdCB1cmwgPSBVUkxfSU1BR0VOKGltYWdlbl91cmwpOyAvLyBTdXBvbmllbmRvIHF1ZSBVUkxfSU1BR0VOIGVzIHVuYSBmdW5jacOzbiBvIHVuYSBjb25zdGFudGUgcXVlIGF5dWRhIGEgY29uc3RydWlyIGxhIFVSTCBmaW5hbFxuICAgIGNvbnNvbGUubG9nKGBVUkwgZGUgbGEgaW1hZ2VuIGNvbnN0cnVpZGE6ICR7dXJsfWApOyAvLyBBZ3JlZ2Ftb3MgZWwgY29uc29sZS5sb2cgYXF1w61cbiAgICByZXR1cm4gdXJsO1xufSJdLCJuYW1lcyI6WyJDb29raWVzIiwiR0VUIiwiUE9TVCIsIlBPU1RfSU1HIiwiVVJMX0lNQUdFTiIsImFsbF9wcm9kdWN0cyIsImRhdG9zIiwidG9rZW4iLCJnZXQiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zZSIsImRhdGEiLCJnZXRfcHJvZHVjdG8iLCJleHRlcm5hbCIsIm1vZGlmeV9wcm9kdWN0byIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJub21icmUiLCJhcHBlbmQiLCJmZWNoYV9jYWR1Y2lkYWQiLCJjYW50aWRhZCIsInByZWNpb191bml0YXJpbyIsIm5vbWJyZV9sb3RlIiwiaW1hZ2VuIiwiRmlsZUxpc3QiLCJsZW5ndGgiLCJzYXZlX3Byb2R1Y3QiLCJBcnJheSIsImZyb20iLCJlbnRyaWVzIiwiY29kZSIsIm1zZyIsInN0YXR1cyIsInRyYWVyX2ltYWdlbiIsImltYWdlbl91cmwiLCJ1cmwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/hooks/service_producto.js\n"));

/***/ })

});
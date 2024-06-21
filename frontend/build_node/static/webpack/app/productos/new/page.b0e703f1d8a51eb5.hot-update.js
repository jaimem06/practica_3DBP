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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   all_products: function() { return /* binding */ all_products; },\n/* harmony export */   get_producto: function() { return /* binding */ get_producto; },\n/* harmony export */   modify_producto: function() { return /* binding */ modify_producto; },\n/* harmony export */   save_product: function() { return /* binding */ save_product; },\n/* harmony export */   traer_imagen: function() { return /* binding */ traer_imagen; }\n/* harmony export */ });\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ \"(app-pages-browser)/./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var _connection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./connection */ \"(app-pages-browser)/./src/hooks/connection.js\");\n\n\nasync function all_products() {\n    let datos = null;\n    try {\n        const token = js_cookie__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"token\");\n        datos = await (0,_connection__WEBPACK_IMPORTED_MODULE_1__.GET)(\"producto\", token);\n    } catch (error) {\n        console.log(error.response.data);\n        return {\n            \"code\": 500\n        };\n    }\n    return datos.data;\n}\nasync function get_producto(token, external) {\n    let datos = null;\n    try {\n        datos = await (0,_connection__WEBPACK_IMPORTED_MODULE_1__.GET)(\"producto/\" + external, token);\n    } catch (error) {\n        console.log(error.response.data);\n        return {\n            \"code\": 500\n        };\n    }\n    return datos.data;\n}\nasync function modify_producto(token, external, data) {\n    if (!external) {\n        console.error(\"External ID is undefined or null\");\n        return {\n            \"code\": 500\n        };\n    }\n    const formData = new FormData();\n    if (data.nombre) formData.append(\"nombre\", data.nombre);\n    if (data.fecha_caducidad) formData.append(\"fecha_caducidad\", data.fecha_caducidad);\n    if (data.cantidad) formData.append(\"cantidad\", data.cantidad);\n    if (data.precio_unitario) formData.append(\"precio_unitario\", data.precio_unitario);\n    if (data.nombre_lote) formData.append(\"nombre_lote\", data.nombre_lote);\n    if (data.imagen && data.imagen instanceof FileList && data.imagen.length > 0) {\n        formData.append(\"imagen\", data.imagen[0]);\n    } else if (data.imagen) {\n        formData.append(\"imagen\", data.imagen);\n    }\n    let response = null;\n    try {\n        response = await (0,_connection__WEBPACK_IMPORTED_MODULE_1__.POST)(\"producto/modificar/\" + external, formData, token, {\n            headers: {\n                \"Authorization\": \"Bearer \".concat(token)\n            }\n        });\n    } catch (error) {\n        console.error(error.response ? error.response.data : error);\n        return {\n            \"code\": 500\n        };\n    }\n    return response.data;\n}\nasync function save_product(token, formData) {\n    console.log(\"save_product called with data:\", formData);\n    console.log(\"FormData entries:\", Array.from(formData.entries())); // To verify formData content\n    try {\n        const response = await (0,_connection__WEBPACK_IMPORTED_MODULE_1__.POST_IMG)(\"productoimg/registrar\", formData, token);\n        if (response.data && response.data.code === 200) {\n            return response.data;\n        } else {\n            console.log(\"Error en la respuesta del servidor\", response.data);\n            return {\n                \"code\": response.data.code,\n                \"msg\": response.data.msg\n            };\n        }\n    } catch (error) {\n        console.log(\"Error in save_product:\", error);\n        if (error.response && error.response.data) {\n            console.log(error.response.data.msg);\n            return {\n                \"code\": error.response.status,\n                \"msg\": error.response.data.msg\n            };\n        } else {\n            console.log(\"Error desconocido\", error);\n            return {\n                \"code\": 500,\n                \"msg\": \"Error desconocido\"\n            };\n        }\n    }\n}\nfunction traer_imagen(imagen_url) {\n    // Construcción de la URL de la imagen\n    const url = (0,_connection__WEBPACK_IMPORTED_MODULE_1__.URL_IMAGEN)(imagen_url); // Suponiendo que URL_IMAGEN es una función o una constante que ayuda a construir la URL final\n    console.log(\"URL de la imagen construida: \".concat(url)); // Agregamos el console.log aquí\n    return url;\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9ob29rcy9zZXJ2aWNlX3Byb2R1Y3RvLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBZ0M7QUFDK0I7QUFFeEQsZUFBZUs7SUFDbEIsSUFBSUMsUUFBUTtJQUNaLElBQUk7UUFDQSxNQUFNQyxRQUFRUCxpREFBT0EsQ0FBQ1EsR0FBRyxDQUFDO1FBQzFCRixRQUFRLE1BQU1MLGdEQUFHQSxDQUFDLFlBQVlNO0lBQ2xDLEVBQUUsT0FBT0UsT0FBTztRQUNaQyxRQUFRQyxHQUFHLENBQUNGLE1BQU1HLFFBQVEsQ0FBQ0MsSUFBSTtRQUMvQixPQUFPO1lBQUUsUUFBUTtRQUFJO0lBQ3pCO0lBQ0EsT0FBT1AsTUFBTU8sSUFBSTtBQUNyQjtBQUVPLGVBQWVDLGFBQWFQLEtBQUssRUFBRVEsUUFBUTtJQUM5QyxJQUFJVCxRQUFRO0lBQ1osSUFBSTtRQUNBQSxRQUFRLE1BQU1MLGdEQUFHQSxDQUFDLGNBQWNjLFVBQVVSO0lBQzlDLEVBQUUsT0FBT0UsT0FBTztRQUNaQyxRQUFRQyxHQUFHLENBQUNGLE1BQU1HLFFBQVEsQ0FBQ0MsSUFBSTtRQUMvQixPQUFPO1lBQUUsUUFBUTtRQUFJO0lBQ3pCO0lBQ0EsT0FBT1AsTUFBTU8sSUFBSTtBQUNyQjtBQUVPLGVBQWVHLGdCQUFnQlQsS0FBSyxFQUFFUSxRQUFRLEVBQUVGLElBQUk7SUFDdkQsSUFBSSxDQUFDRSxVQUFVO1FBQ1hMLFFBQVFELEtBQUssQ0FBQztRQUNkLE9BQU87WUFBRSxRQUFRO1FBQUk7SUFDekI7SUFDQSxNQUFNUSxXQUFXLElBQUlDO0lBQ3JCLElBQUlMLEtBQUtNLE1BQU0sRUFBRUYsU0FBU0csTUFBTSxDQUFDLFVBQVVQLEtBQUtNLE1BQU07SUFDdEQsSUFBSU4sS0FBS1EsZUFBZSxFQUFFSixTQUFTRyxNQUFNLENBQUMsbUJBQW1CUCxLQUFLUSxlQUFlO0lBQ2pGLElBQUlSLEtBQUtTLFFBQVEsRUFBRUwsU0FBU0csTUFBTSxDQUFDLFlBQVlQLEtBQUtTLFFBQVE7SUFDNUQsSUFBSVQsS0FBS1UsZUFBZSxFQUFFTixTQUFTRyxNQUFNLENBQUMsbUJBQW1CUCxLQUFLVSxlQUFlO0lBQ2pGLElBQUlWLEtBQUtXLFdBQVcsRUFBRVAsU0FBU0csTUFBTSxDQUFDLGVBQWVQLEtBQUtXLFdBQVc7SUFDckUsSUFBSVgsS0FBS1ksTUFBTSxJQUFJWixLQUFLWSxNQUFNLFlBQVlDLFlBQVliLEtBQUtZLE1BQU0sQ0FBQ0UsTUFBTSxHQUFHLEdBQUc7UUFDMUVWLFNBQVNHLE1BQU0sQ0FBQyxVQUFVUCxLQUFLWSxNQUFNLENBQUMsRUFBRTtJQUM1QyxPQUFPLElBQUlaLEtBQUtZLE1BQU0sRUFBRTtRQUNwQlIsU0FBU0csTUFBTSxDQUFDLFVBQVVQLEtBQUtZLE1BQU07SUFDekM7SUFFQSxJQUFJYixXQUFXO0lBQ2YsSUFBSTtRQUNBQSxXQUFXLE1BQU1WLGlEQUFJQSxDQUFDLHdCQUF3QmEsVUFBVUUsVUFBVVYsT0FBTztZQUNyRXFCLFNBQVM7Z0JBQ0wsaUJBQWlCLFVBQWdCLE9BQU5yQjtZQUMvQjtRQUNKO0lBQ0osRUFBRSxPQUFPRSxPQUFPO1FBQ1pDLFFBQVFELEtBQUssQ0FBQ0EsTUFBTUcsUUFBUSxHQUFHSCxNQUFNRyxRQUFRLENBQUNDLElBQUksR0FBR0o7UUFDckQsT0FBTztZQUFFLFFBQVE7UUFBSTtJQUN6QjtJQUNBLE9BQU9HLFNBQVNDLElBQUk7QUFDeEI7QUFFTyxlQUFlZ0IsYUFBYXRCLEtBQUssRUFBRVUsUUFBUTtJQUM5Q1AsUUFBUUMsR0FBRyxDQUFDLGtDQUFrQ007SUFFOUNQLFFBQVFDLEdBQUcsQ0FBQyxxQkFBcUJtQixNQUFNQyxJQUFJLENBQUNkLFNBQVNlLE9BQU8sTUFBTSw2QkFBNkI7SUFFL0YsSUFBSTtRQUNBLE1BQU1wQixXQUFXLE1BQU1ULHFEQUFRQSxDQUFDLHlCQUF5QmMsVUFBVVY7UUFDbkUsSUFBSUssU0FBU0MsSUFBSSxJQUFJRCxTQUFTQyxJQUFJLENBQUNvQixJQUFJLEtBQUssS0FBSztZQUM3QyxPQUFPckIsU0FBU0MsSUFBSTtRQUN4QixPQUFPO1lBQ0hILFFBQVFDLEdBQUcsQ0FBQyxzQ0FBc0NDLFNBQVNDLElBQUk7WUFDL0QsT0FBTztnQkFBRSxRQUFRRCxTQUFTQyxJQUFJLENBQUNvQixJQUFJO2dCQUFFLE9BQU9yQixTQUFTQyxJQUFJLENBQUNxQixHQUFHO1lBQUM7UUFDbEU7SUFDSixFQUFFLE9BQU96QixPQUFPO1FBQ1pDLFFBQVFDLEdBQUcsQ0FBQywwQkFBMEJGO1FBQ3RDLElBQUlBLE1BQU1HLFFBQVEsSUFBSUgsTUFBTUcsUUFBUSxDQUFDQyxJQUFJLEVBQUU7WUFDdkNILFFBQVFDLEdBQUcsQ0FBQ0YsTUFBTUcsUUFBUSxDQUFDQyxJQUFJLENBQUNxQixHQUFHO1lBQ25DLE9BQU87Z0JBQUUsUUFBUXpCLE1BQU1HLFFBQVEsQ0FBQ3VCLE1BQU07Z0JBQUUsT0FBTzFCLE1BQU1HLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDcUIsR0FBRztZQUFDO1FBQzNFLE9BQU87WUFDSHhCLFFBQVFDLEdBQUcsQ0FBQyxxQkFBcUJGO1lBQ2pDLE9BQU87Z0JBQUUsUUFBUTtnQkFBSyxPQUFPO1lBQW9CO1FBQ3JEO0lBQ0o7QUFDSjtBQUVPLFNBQVMyQixhQUFhQyxVQUFVO0lBQ25DLHNDQUFzQztJQUN0QyxNQUFNQyxNQUFNbEMsdURBQVVBLENBQUNpQyxhQUFhLDhGQUE4RjtJQUNsSTNCLFFBQVFDLEdBQUcsQ0FBQyxnQ0FBb0MsT0FBSjJCLE9BQVEsZ0NBQWdDO0lBQ3BGLE9BQU9BO0FBQ1giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3NlcnZpY2VfcHJvZHVjdG8uanM/YzRkNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xuaW1wb3J0IHsgR0VULCBQT1NULCBQT1NUX0lNRywgVVJMX0lNQUdFTiB9IGZyb20gJy4vY29ubmVjdGlvbic7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhbGxfcHJvZHVjdHMoKSB7XG4gICAgbGV0IGRhdG9zID0gbnVsbDtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCB0b2tlbiA9IENvb2tpZXMuZ2V0KCd0b2tlbicpO1xuICAgICAgICBkYXRvcyA9IGF3YWl0IEdFVCgncHJvZHVjdG8nLCB0b2tlbik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UuZGF0YSk7XG4gICAgICAgIHJldHVybiB7IFwiY29kZVwiOiA1MDAgfVxuICAgIH1cbiAgICByZXR1cm4gZGF0b3MuZGF0YTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldF9wcm9kdWN0byh0b2tlbiwgZXh0ZXJuYWwpIHtcbiAgICBsZXQgZGF0b3MgPSBudWxsO1xuICAgIHRyeSB7XG4gICAgICAgIGRhdG9zID0gYXdhaXQgR0VUKCdwcm9kdWN0by8nICsgZXh0ZXJuYWwsIHRva2VuKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZS5kYXRhKTtcbiAgICAgICAgcmV0dXJuIHsgXCJjb2RlXCI6IDUwMCB9XG4gICAgfVxuICAgIHJldHVybiBkYXRvcy5kYXRhO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbW9kaWZ5X3Byb2R1Y3RvKHRva2VuLCBleHRlcm5hbCwgZGF0YSkge1xuICAgIGlmICghZXh0ZXJuYWwpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXh0ZXJuYWwgSUQgaXMgdW5kZWZpbmVkIG9yIG51bGwnKTtcbiAgICAgICAgcmV0dXJuIHsgXCJjb2RlXCI6IDUwMCB9O1xuICAgIH1cbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIGlmIChkYXRhLm5vbWJyZSkgZm9ybURhdGEuYXBwZW5kKCdub21icmUnLCBkYXRhLm5vbWJyZSk7XG4gICAgaWYgKGRhdGEuZmVjaGFfY2FkdWNpZGFkKSBmb3JtRGF0YS5hcHBlbmQoJ2ZlY2hhX2NhZHVjaWRhZCcsIGRhdGEuZmVjaGFfY2FkdWNpZGFkKTtcbiAgICBpZiAoZGF0YS5jYW50aWRhZCkgZm9ybURhdGEuYXBwZW5kKCdjYW50aWRhZCcsIGRhdGEuY2FudGlkYWQpO1xuICAgIGlmIChkYXRhLnByZWNpb191bml0YXJpbykgZm9ybURhdGEuYXBwZW5kKCdwcmVjaW9fdW5pdGFyaW8nLCBkYXRhLnByZWNpb191bml0YXJpbyk7XG4gICAgaWYgKGRhdGEubm9tYnJlX2xvdGUpIGZvcm1EYXRhLmFwcGVuZCgnbm9tYnJlX2xvdGUnLCBkYXRhLm5vbWJyZV9sb3RlKTtcbiAgICBpZiAoZGF0YS5pbWFnZW4gJiYgZGF0YS5pbWFnZW4gaW5zdGFuY2VvZiBGaWxlTGlzdCAmJiBkYXRhLmltYWdlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnaW1hZ2VuJywgZGF0YS5pbWFnZW5bMF0pO1xuICAgIH0gZWxzZSBpZiAoZGF0YS5pbWFnZW4pIHtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdpbWFnZW4nLCBkYXRhLmltYWdlbik7XG4gICAgfVxuXG4gICAgbGV0IHJlc3BvbnNlID0gbnVsbDtcbiAgICB0cnkge1xuICAgICAgICByZXNwb25zZSA9IGF3YWl0IFBPU1QoJ3Byb2R1Y3RvL21vZGlmaWNhci8nICsgZXh0ZXJuYWwsIGZvcm1EYXRhLCB0b2tlbiwge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke3Rva2VufWAsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yLnJlc3BvbnNlID8gZXJyb3IucmVzcG9uc2UuZGF0YSA6IGVycm9yKTtcbiAgICAgICAgcmV0dXJuIHsgXCJjb2RlXCI6IDUwMCB9O1xuICAgIH1cbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNhdmVfcHJvZHVjdCh0b2tlbiwgZm9ybURhdGEpIHtcbiAgICBjb25zb2xlLmxvZygnc2F2ZV9wcm9kdWN0IGNhbGxlZCB3aXRoIGRhdGE6JywgZm9ybURhdGEpO1xuXG4gICAgY29uc29sZS5sb2coJ0Zvcm1EYXRhIGVudHJpZXM6JywgQXJyYXkuZnJvbShmb3JtRGF0YS5lbnRyaWVzKCkpKTsgLy8gVG8gdmVyaWZ5IGZvcm1EYXRhIGNvbnRlbnRcblxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgUE9TVF9JTUcoJ3Byb2R1Y3RvaW1nL3JlZ2lzdHJhcicsIGZvcm1EYXRhLCB0b2tlbik7XG4gICAgICAgIGlmIChyZXNwb25zZS5kYXRhICYmIHJlc3BvbnNlLmRhdGEuY29kZSA9PT0gMjAwKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBlbiBsYSByZXNwdWVzdGEgZGVsIHNlcnZpZG9yJywgcmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICByZXR1cm4geyBcImNvZGVcIjogcmVzcG9uc2UuZGF0YS5jb2RlLCBcIm1zZ1wiOiByZXNwb25zZS5kYXRhLm1zZyB9O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIGluIHNhdmVfcHJvZHVjdDonLCBlcnJvcik7XG4gICAgICAgIGlmIChlcnJvci5yZXNwb25zZSAmJiBlcnJvci5yZXNwb25zZS5kYXRhKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZS5kYXRhLm1zZyk7XG4gICAgICAgICAgICByZXR1cm4geyBcImNvZGVcIjogZXJyb3IucmVzcG9uc2Uuc3RhdHVzLCBcIm1zZ1wiOiBlcnJvci5yZXNwb25zZS5kYXRhLm1zZyB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIGRlc2Nvbm9jaWRvJywgZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIHsgXCJjb2RlXCI6IDUwMCwgXCJtc2dcIjogXCJFcnJvciBkZXNjb25vY2lkb1wiIH07XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFlcl9pbWFnZW4oaW1hZ2VuX3VybCkge1xuICAgIC8vIENvbnN0cnVjY2nDs24gZGUgbGEgVVJMIGRlIGxhIGltYWdlblxuICAgIGNvbnN0IHVybCA9IFVSTF9JTUFHRU4oaW1hZ2VuX3VybCk7IC8vIFN1cG9uaWVuZG8gcXVlIFVSTF9JTUFHRU4gZXMgdW5hIGZ1bmNpw7NuIG8gdW5hIGNvbnN0YW50ZSBxdWUgYXl1ZGEgYSBjb25zdHJ1aXIgbGEgVVJMIGZpbmFsXG4gICAgY29uc29sZS5sb2coYFVSTCBkZSBsYSBpbWFnZW4gY29uc3RydWlkYTogJHt1cmx9YCk7IC8vIEFncmVnYW1vcyBlbCBjb25zb2xlLmxvZyBhcXXDrVxuICAgIHJldHVybiB1cmw7XG59Il0sIm5hbWVzIjpbIkNvb2tpZXMiLCJHRVQiLCJQT1NUIiwiUE9TVF9JTUciLCJVUkxfSU1BR0VOIiwiYWxsX3Byb2R1Y3RzIiwiZGF0b3MiLCJ0b2tlbiIsImdldCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInJlc3BvbnNlIiwiZGF0YSIsImdldF9wcm9kdWN0byIsImV4dGVybmFsIiwibW9kaWZ5X3Byb2R1Y3RvIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsIm5vbWJyZSIsImFwcGVuZCIsImZlY2hhX2NhZHVjaWRhZCIsImNhbnRpZGFkIiwicHJlY2lvX3VuaXRhcmlvIiwibm9tYnJlX2xvdGUiLCJpbWFnZW4iLCJGaWxlTGlzdCIsImxlbmd0aCIsImhlYWRlcnMiLCJzYXZlX3Byb2R1Y3QiLCJBcnJheSIsImZyb20iLCJlbnRyaWVzIiwiY29kZSIsIm1zZyIsInN0YXR1cyIsInRyYWVyX2ltYWdlbiIsImltYWdlbl91cmwiLCJ1cmwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/hooks/service_producto.js\n"));

/***/ })

});
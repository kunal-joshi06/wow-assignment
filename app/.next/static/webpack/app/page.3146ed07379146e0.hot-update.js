"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./store/features/apiSlice.js":
/*!************************************!*\
  !*** ./store/features/apiSlice.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   postApi: function() { return /* binding */ postApi; },\n/* harmony export */   useGetAllPostQuery: function() { return /* binding */ useGetAllPostQuery; },\n/* harmony export */   useGetPostQuery: function() { return /* binding */ useGetPostQuery; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit/query/react */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.esm.js\");\n/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit/query/react */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/query/rtk-query.esm.js\");\n\nconst postApi = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.createApi)({\n    reducerPath: \"postApi\",\n    baseQuery: (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_1__.fetchBaseQuery)({\n        baseUrl: \"https://wowtalent.live/wp-json/wp/v2/\"\n    }),\n    endpoints: (builder)=>({\n            getAllPost: builder.query({\n                query: ()=>\"posts\"\n            }),\n            getPost: builder.query({\n                query: (id)=>\"posts/\".concat(id)\n            })\n        })\n});\nconst { useGetAllPostQuery, useGetPostQuery } = postApi;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3N0b3JlL2ZlYXR1cmVzL2FwaVNsaWNlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXlFO0FBRWxFLE1BQU1FLFVBQVVGLHVFQUFTQSxDQUFDO0lBQy9CRyxhQUFhO0lBQ2JDLFdBQVdILDRFQUFjQSxDQUFDO1FBQ3hCSSxTQUFTO0lBQ1g7SUFDQUMsV0FBVyxDQUFDQyxVQUFhO1lBQ3ZCQyxZQUFZRCxRQUFRRSxLQUFLLENBQUM7Z0JBQ3hCQSxPQUFPLElBQU07WUFDZjtZQUNBQyxTQUFTSCxRQUFRRSxLQUFLLENBQUM7Z0JBQ3JCQSxPQUFPLENBQUNFLEtBQU8sU0FBWSxPQUFIQTtZQUMxQjtRQUNGO0FBQ0YsR0FBRztBQUVJLE1BQU0sRUFBRUMsa0JBQWtCLEVBQUVDLGVBQWUsRUFBRSxHQUFHWCxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0b3JlL2ZlYXR1cmVzL2FwaVNsaWNlLmpzPzQ3YzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQXBpLCBmZXRjaEJhc2VRdWVyeSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0L3F1ZXJ5L3JlYWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgcG9zdEFwaSA9IGNyZWF0ZUFwaSh7XHJcbiAgcmVkdWNlclBhdGg6IFwicG9zdEFwaVwiLFxyXG4gIGJhc2VRdWVyeTogZmV0Y2hCYXNlUXVlcnkoe1xyXG4gICAgYmFzZVVybDogXCJodHRwczovL3dvd3RhbGVudC5saXZlL3dwLWpzb24vd3AvdjIvXCIsXHJcbiAgfSksXHJcbiAgZW5kcG9pbnRzOiAoYnVpbGRlcikgPT4gKHtcclxuICAgIGdldEFsbFBvc3Q6IGJ1aWxkZXIucXVlcnkoe1xyXG4gICAgICBxdWVyeTogKCkgPT4gXCJwb3N0c1wiLFxyXG4gICAgfSksXHJcbiAgICBnZXRQb3N0OiBidWlsZGVyLnF1ZXJ5KHtcclxuICAgICAgcXVlcnk6IChpZCkgPT4gYHBvc3RzLyR7aWR9YCxcclxuICAgIH0pLFxyXG4gIH0pLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB7IHVzZUdldEFsbFBvc3RRdWVyeSwgdXNlR2V0UG9zdFF1ZXJ5IH0gPSBwb3N0QXBpO1xyXG4iXSwibmFtZXMiOlsiY3JlYXRlQXBpIiwiZmV0Y2hCYXNlUXVlcnkiLCJwb3N0QXBpIiwicmVkdWNlclBhdGgiLCJiYXNlUXVlcnkiLCJiYXNlVXJsIiwiZW5kcG9pbnRzIiwiYnVpbGRlciIsImdldEFsbFBvc3QiLCJxdWVyeSIsImdldFBvc3QiLCJpZCIsInVzZUdldEFsbFBvc3RRdWVyeSIsInVzZUdldFBvc3RRdWVyeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./store/features/apiSlice.js\n"));

/***/ })

});
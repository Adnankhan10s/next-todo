"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/topics/route";
exports.ids = ["app/api/topics/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftopics%2Froute&page=%2Fapi%2Ftopics%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftopics%2Froute.js&appDir=D%3A%5CTodo-App%5Ctodo-app%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CTodo-App%5Ctodo-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftopics%2Froute&page=%2Fapi%2Ftopics%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftopics%2Froute.js&appDir=D%3A%5CTodo-App%5Ctodo-app%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CTodo-App%5Ctodo-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var D_Todo_App_todo_app_src_app_api_topics_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/topics/route.js */ \"(rsc)/./src/app/api/topics/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/topics/route\",\n        pathname: \"/api/topics\",\n        filename: \"route\",\n        bundlePath: \"app/api/topics/route\"\n    },\n    resolvedPagePath: \"D:\\\\Todo-App\\\\todo-app\\\\src\\\\app\\\\api\\\\topics\\\\route.js\",\n    nextConfigOutput,\n    userland: D_Todo_App_todo_app_src_app_api_topics_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/topics/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZ0b3BpY3MlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnRvcGljcyUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnRvcGljcyUyRnJvdXRlLmpzJmFwcERpcj1EJTNBJTVDVG9kby1BcHAlNUN0b2RvLWFwcCU1Q3NyYyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9RCUzQSU1Q1RvZG8tQXBwJTVDdG9kby1hcHAmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ087QUFDcEY7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWFwcC8/ODYwOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJEOlxcXFxUb2RvLUFwcFxcXFx0b2RvLWFwcFxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFx0b3BpY3NcXFxccm91dGUuanNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3RvcGljcy9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3RvcGljc1wiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvdG9waWNzL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiRDpcXFxcVG9kby1BcHBcXFxcdG9kby1hcHBcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcdG9waWNzXFxcXHJvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS90b3BpY3Mvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftopics%2Froute&page=%2Fapi%2Ftopics%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftopics%2Froute.js&appDir=D%3A%5CTodo-App%5Ctodo-app%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CTodo-App%5Ctodo-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./libs/mongodb.js":
/*!*************************!*\
  !*** ./libs/mongodb.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connectMongoDB = async ()=>{\n    try {\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URI);\n        console.log(\"connected to mongodb\");\n    } catch (error) {\n        console.log(error);\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectMongoDB);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWJzL21vbmdvZGIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWhDLE1BQU1DLGlCQUFnQjtJQUNsQixJQUFJO1FBQ0EsTUFBTUQsdURBQWdCLENBQUNHLFFBQVFDLEdBQUcsQ0FBQ0MsV0FBVztRQUM5Q0MsUUFBUUMsR0FBRyxDQUFDO0lBQ2hCLEVBQUUsT0FBT0MsT0FBTztRQUNaRixRQUFRQyxHQUFHLENBQUNDO0lBQ2hCO0FBQ0o7QUFFQSxpRUFBZVAsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tYXBwLy4vbGlicy9tb25nb2RiLmpzPzU5MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xyXG5cclxuY29uc3QgY29ubmVjdE1vbmdvREI9IGFzeW5jICgpPT57XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09EQl9VUkkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY29ubmVjdGVkIHRvIG1vbmdvZGJcIilcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0TW9uZ29EQjsiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJjb25uZWN0TW9uZ29EQiIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkkiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./libs/mongodb.js\n");

/***/ }),

/***/ "(rsc)/./models/topic.js":
/*!*************************!*\
  !*** ./models/topic.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst topicSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    title: String,\n    description: String\n}, {\n    timestamps: true\n});\nconst Topic = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Topic || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Topic\", topicSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Topic);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvdG9waWMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTRDO0FBSTVDLE1BQU1FLGNBQWMsSUFBSUQsNENBQU1BLENBQzFCO0lBQ0lFLE9BQU9DO0lBQ1BDLGFBQWFEO0FBQ2pCLEdBQUc7SUFDSEUsWUFBWTtBQUNoQjtBQUdBLE1BQU1DLFFBQVFQLHdEQUFlLENBQUNPLEtBQUssSUFBSVAscURBQWMsQ0FBQyxTQUFTRTtBQUcvRCxpRUFBZUssS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tYXBwLy4vbW9kZWxzL3RvcGljLmpzP2VhZTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlLCB7IFNjaGVtYSB9IGZyb20gXCJtb25nb29zZVwiO1xyXG5cclxuXHJcblxyXG5jb25zdCB0b3BpY1NjaGVtYSA9IG5ldyBTY2hlbWEoXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IFN0cmluZyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogU3RyaW5nLFxyXG4gICAgfSwge1xyXG4gICAgdGltZXN0YW1wczogdHJ1ZSxcclxufVxyXG4pO1xyXG5cclxuY29uc3QgVG9waWMgPSBtb25nb29zZS5tb2RlbHMuVG9waWMgfHwgbW9uZ29vc2UubW9kZWwoXCJUb3BpY1wiLCB0b3BpY1NjaGVtYSk7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9waWM7Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiU2NoZW1hIiwidG9waWNTY2hlbWEiLCJ0aXRsZSIsIlN0cmluZyIsImRlc2NyaXB0aW9uIiwidGltZXN0YW1wcyIsIlRvcGljIiwibW9kZWxzIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./models/topic.js\n");

/***/ }),

/***/ "(rsc)/./src/app/api/topics/route.js":
/*!*************************************!*\
  !*** ./src/app/api/topics/route.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DELETE: () => (/* binding */ DELETE),\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _libs_mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/../libs/mongodb */ \"(rsc)/./libs/mongodb.js\");\n/* harmony import */ var _models_topic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/../models/topic */ \"(rsc)/./models/topic.js\");\n\n\n\nasync function POST(request) {\n    const { title, description } = await request.json();\n    await (0,_libs_mongodb__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    await _models_topic__WEBPACK_IMPORTED_MODULE_2__[\"default\"].create({\n        title,\n        description\n    });\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        message: \"Topic Created\"\n    }, {\n        status: 201\n    });\n}\nasync function GET() {\n    await (0,_libs_mongodb__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    const topics = await _models_topic__WEBPACK_IMPORTED_MODULE_2__[\"default\"].find();\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        topics\n    });\n}\nasync function DELETE(request) {\n    const id = request.nextUrl.searchParams.get(\"id\");\n    await (0,_libs_mongodb__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    await _models_topic__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findByIdAndDelete(id);\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        message: \"Topic Deleted\"\n    }, {\n        status: 200\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS90b3BpY3Mvcm91dGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTJDO0FBQ0k7QUFDVDtBQUkvQixlQUFlRyxLQUFNQyxPQUFPO0lBQy9CLE1BQU0sRUFBQ0MsS0FBSyxFQUFHQyxXQUFXLEVBQUMsR0FBRyxNQUFNRixRQUFRRyxJQUFJO0lBQ2hELE1BQU1OLHlEQUFjQTtJQUNwQixNQUFNQyxxREFBS0EsQ0FBQ00sTUFBTSxDQUFDO1FBQUNIO1FBQU9DO0lBQVc7SUFDdEMsT0FBT04scURBQVlBLENBQUNPLElBQUksQ0FBQztRQUFDRSxTQUFRO0lBQWUsR0FBRztRQUFDQyxRQUFPO0lBQUc7QUFDbkU7QUFFTyxlQUFlQztJQUNsQixNQUFNVix5REFBY0E7SUFDcEIsTUFBTVcsU0FBUSxNQUFNVixxREFBS0EsQ0FBQ1csSUFBSTtJQUM5QixPQUFPYixxREFBWUEsQ0FBQ08sSUFBSSxDQUFDO1FBQUNLO0lBQU07QUFDcEM7QUFFTyxlQUFlRSxPQUFRVixPQUFPO0lBQ2pDLE1BQU1XLEtBQUtYLFFBQVFZLE9BQU8sQ0FBQ0MsWUFBWSxDQUFDQyxHQUFHLENBQUM7SUFDNUMsTUFBTWpCLHlEQUFjQTtJQUNwQixNQUFNQyxxREFBS0EsQ0FBQ2lCLGlCQUFpQixDQUFDSjtJQUM5QixPQUFPZixxREFBWUEsQ0FBQ08sSUFBSSxDQUFDO1FBQUNFLFNBQVE7SUFBZSxHQUFFO1FBQUNDLFFBQU87SUFBRztBQUNsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2FwcC9hcGkvdG9waWNzL3JvdXRlLmpzP2FjYWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XHJcbmltcG9ydCBjb25uZWN0TW9uZ29EQiBmcm9tIFwiQC8uLi9saWJzL21vbmdvZGJcIjtcclxuaW1wb3J0IFRvcGljIGZyb20gXCJALy4uL21vZGVscy90b3BpY1wiO1xyXG5cclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVCAocmVxdWVzdCl7XHJcbiAgICBjb25zdCB7dGl0bGUgLCBkZXNjcmlwdGlvbn0gPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcclxuICAgIGF3YWl0IGNvbm5lY3RNb25nb0RCKCk7XHJcbiAgICBhd2FpdCBUb3BpYy5jcmVhdGUoe3RpdGxlLCBkZXNjcmlwdGlvbn0pO1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHttZXNzYWdlOlwiVG9waWMgQ3JlYXRlZFwifSwge3N0YXR1czoyMDF9KTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVCAoKSB7XHJcbiAgICBhd2FpdCBjb25uZWN0TW9uZ29EQigpO1xyXG4gICAgY29uc3QgdG9waWNzPSBhd2FpdCBUb3BpYy5maW5kKCk7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe3RvcGljc30pO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gREVMRVRFIChyZXF1ZXN0KXtcclxuICAgIGNvbnN0IGlkID0gcmVxdWVzdC5uZXh0VXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJpZFwiKTtcclxuICAgIGF3YWl0IGNvbm5lY3RNb25nb0RCKCk7XHJcbiAgICBhd2FpdCBUb3BpYy5maW5kQnlJZEFuZERlbGV0ZShpZCk7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe21lc3NhZ2U6XCJUb3BpYyBEZWxldGVkXCJ9LHtzdGF0dXM6MjAwfSk7XHJcbn0iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiY29ubmVjdE1vbmdvREIiLCJUb3BpYyIsIlBPU1QiLCJyZXF1ZXN0IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImpzb24iLCJjcmVhdGUiLCJtZXNzYWdlIiwic3RhdHVzIiwiR0VUIiwidG9waWNzIiwiZmluZCIsIkRFTEVURSIsImlkIiwibmV4dFVybCIsInNlYXJjaFBhcmFtcyIsImdldCIsImZpbmRCeUlkQW5kRGVsZXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/topics/route.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftopics%2Froute&page=%2Fapi%2Ftopics%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftopics%2Froute.js&appDir=D%3A%5CTodo-App%5Ctodo-app%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CTodo-App%5Ctodo-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();
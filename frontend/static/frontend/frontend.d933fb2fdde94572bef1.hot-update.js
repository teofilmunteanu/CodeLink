/*! For license information please see frontend.d933fb2fdde94572bef1.hot-update.js.LICENSE.txt */
self.webpackHotUpdatefrontend("frontend",{"./frontend/src/App.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");\n/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home */ "./frontend/src/Home.js");\n\n\n\n\n\nfunction App() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "container m-10"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Route, {\n    exact: true,\n    path: "/",\n    component: _Home__WEBPACK_IMPORTED_MODULE_2__.default\n  }))));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n//# sourceURL=webpack://frontend/./frontend/src/App.js?')},"./frontend/src/Home.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");\n\n\n\n\nfunction Home(prosp) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {\n    "class": "align-middle"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {\n    type: "button",\n    "class": "btn btn-primary",\n    to: "/join"\n  }, "Join"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {\n    type: "button",\n    "class": "btn btn-secondary",\n    to: "/create"\n  }, "Create"));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n/*renderHome() {\r\n  return (\r\n    <Grid container spacing={3}>\r\n      <Grid item xs={12} align="center">\r\n        <Typography variant="h3" compact="h3">\r\n          Party\r\n        </Typography>\r\n      </Grid>\r\n      <Grid item xs={12} align="center">\r\n        <ButtonGroup disableElevation variant="contained" color="primary">\r\n          <Button color="primary" to="/join" component={Link}>\r\n            Join Room\r\n          </Button>\r\n          <Button color="secondary" to="/create" component={Link}>\r\n            Create Room\r\n          </Button>\r\n        </ButtonGroup>\r\n      </Grid>\r\n    </Grid>\r\n  );*/\n\n//# sourceURL=webpack://frontend/./frontend/src/Home.js?')}},(function(_){"use strict";_.h=()=>"fb495810b92baffa905f"}));
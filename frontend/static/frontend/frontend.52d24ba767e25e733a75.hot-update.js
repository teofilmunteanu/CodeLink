/*! For license information please see frontend.52d24ba767e25e733a75.hot-update.js.LICENSE.txt */
self.webpackHotUpdatefrontend("frontend",{"./frontend/src/App.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");\n/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home */ "./frontend/src/Home.js");\n/* harmony import */ var _CreateRoom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CreateRoom */ "./frontend/src/CreateRoom.js");\n/* harmony import */ var _JoinRoom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./JoinRoom */ "./frontend/src/JoinRoom.js");\n\n\n\n\n\n\n\nfunction App() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "container m-10"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {\n    exact: true,\n    path: "/",\n    component: _Home__WEBPACK_IMPORTED_MODULE_2__.default\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {\n    exact: true,\n    path: "/join",\n    component: _JoinRoom__WEBPACK_IMPORTED_MODULE_4__.default\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {\n    exact: true,\n    path: "/create",\n    component: _CreateRoom__WEBPACK_IMPORTED_MODULE_3__.default\n  }))));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n//# sourceURL=webpack://frontend/./frontend/src/App.js?')},"./frontend/src/CreateRoom.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ CreateRoomPage)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\nObject(function webpackMissingModule() { var e = new Error("Cannot find module \'@material-ui/core/Button\'"); e.code = \'MODULE_NOT_FOUND\'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error("Cannot find module \'@material-ui/core/Grid\'"); e.code = \'MODULE_NOT_FOUND\'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error("Cannot find module \'@material-ui/core/Typography\'"); e.code = \'MODULE_NOT_FOUND\'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error("Cannot find module \'@material-ui/core/FormHelperText\'"); e.code = \'MODULE_NOT_FOUND\'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error("Cannot find module \'@material-ui/core/FormControl\'"); e.code = \'MODULE_NOT_FOUND\'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error("Cannot find module \'@material-ui/core/FormControlLabel\'"); e.code = \'MODULE_NOT_FOUND\'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error("Cannot find module \'@material-ui/core/Radio\'"); e.code = \'MODULE_NOT_FOUND\'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error("Cannot find module \'@material-ui/core/RadioGroup\'"); e.code = \'MODULE_NOT_FOUND\'; throw e; }());\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");\nObject(function webpackMissingModule() { var e = new Error("Cannot find module \'@material-ui/core\'"); e.code = \'MODULE_NOT_FOUND\'; throw e; }());\nfunction _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar CreateRoomPage = /*#__PURE__*/function (_Component) {\n  _inherits(CreateRoomPage, _Component);\n\n  var _super = _createSuper(CreateRoomPage);\n\n  function CreateRoomPage(props) {\n    var _this;\n\n    _classCallCheck(this, CreateRoomPage);\n\n    _this = _super.call(this, props);\n\n    _defineProperty(_assertThisInitialized(_this), "Z", void 0);\n\n    _this.state = {\n      guestCanPause: _this.props.guestCanPause,\n      votesToSkip: _this.props.votesToSkip,\n      successMsg: "",\n      errorMsg: ""\n    };\n    _this.handleVotesChange = _this.handleVotesChange.bind(_assertThisInitialized(_this));\n    _this.handleGuestCanPauseChange = _this.handleGuestCanPauseChange.bind(_assertThisInitialized(_this));\n    _this.handleCreateButtonPressed = _this.handleCreateButtonPressed.bind(_assertThisInitialized(_this));\n    _this.handleUpdateButtonPressed = _this.handleUpdateButtonPressed.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  _createClass(CreateRoomPage, [{\n    key: "handleVotesChange",\n    value: function handleVotesChange(e) {\n      this.setState({\n        votesToSkip: e.target.value\n      });\n    }\n  }, {\n    key: "handleGuestCanPauseChange",\n    value: function handleGuestCanPauseChange(e) {\n      this.setState({\n        guestCanPause: e.target.value === "true" ? true : false\n      });\n    }\n  }, {\n    key: "handleCreateButtonPressed",\n    value: function handleCreateButtonPressed() {\n      var _this2 = this;\n\n      var requestOptions = {\n        method: "POST",\n        headers: {\n          "Content-Type": "application/json"\n        },\n        body: JSON.stringify({\n          votesToSkip: this.state.votesToSkip,\n          guestCanPause: this.state.guestCanPause\n        })\n      };\n      fetch("/api/create-room", requestOptions).then(function (response) {\n        return response.json();\n      }).then(function (data) {\n        return _this2.props.history.push("/room/" + data.code);\n      });\n    }\n  }, {\n    key: "handleUpdateButtonPressed",\n    value: function handleUpdateButtonPressed() {\n      var _this3 = this;\n\n      var requestOptions = {\n        method: "PATCH",\n        headers: {\n          "Content-Type": "application/json"\n        },\n        body: JSON.stringify({\n          votesToSkip: this.state.votesToSkip,\n          guestCanPause: this.state.guestCanPause,\n          code: this.props.roomCode\n        })\n      };\n      fetch("/api/update-room", requestOptions).then(function (response) {\n        if (response.ok) {\n          _this3.setState({\n            successMsg: "Success!"\n          });\n        } else {\n          _this3.setState({\n            errorMsg: "Error!"\n          });\n        }\n\n        _this3.props.updateCallback();\n      });\n    }\n  }, {\n    key: "renderCreateButtons",\n    value: function renderCreateButtons() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module \'@material-ui/core/Grid\'"); e.code = \'MODULE_NOT_FOUND\'; throw e; }()), {\n        container: true,\n        spacing: 1\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module \'@material-ui/core/Grid\'"); e.code = \'MODULE_NOT_FOUND\'; throw e; }()), {\n        item: true,\n        xs: 12,\n        align: "center"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module \'@material-ui/core/Button\'"); e.code = \'MODULE_NOT_FOUND\'; throw e; }()), {\n        color: "primary",\n        variant: "contained",\n        onClick: this.handleCreateButtonPressed\n      }, "Create")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module \'@material-ui/core/Grid\'"); e.code = \'MODULE_NOT_FOUND\'; throw e; }()), {\n        item: true,\n        xs: 12,\n        align: "center"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module \'@material-ui/core/Button\'"); e.code = \'MODULE_NOT_FOUND\'; throw e; }()), {\n        color: "secondary",\n        variant: "contained",\n        to: "/",\n        component: react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link\n      }, "Back")));\n    }\n  }, {\n    key: "renderUpdateButtons",\n    value: function renderUpdateButtons() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module \'@material-ui/core/Grid\'"); e.code = \'MODULE_NOT_FOUND\'; throw e; }()), {\n        item: true,\n        xs: 12,\n        align: "center"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module \'@material-ui/core/Button\'"); e.code = \'MODULE_NOT_FOUND\'; throw e; }()), {\n        color: "primary",\n        variant: "contained",\n        onClick: this.handleUpdateButtonPressed\n      }, "Update"));\n    }\n  }, {\n    key: "render",\n    value: function render() {\n      var title = this.props.update ? "Update Room" : "Create a Room";\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module \'@material-ui/core/Grid\'"); e.code = \'MODULE_NOT_FOUND\'; throw e; }()), {\n        container: true,\n        spacing: 1\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module \'@material-ui/core/Grid\'"); e.code = \'MODULE_NOT_FOUND\'; throw e; }()), {\n        item: true,\n        xs: 12,\n        align: "center"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module \'@material-ui/core\'"); e.code = \'MODULE_NOT_FOUND\'; throw e; }()), {\n        "in": this.state.errorMsg != "" || this.state.successMsg != ""\n      }, this.state.successMsg)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module \'@material-ui/core/Grid\'"); e.code = \'MODULE_NOT_FOUND\'; throw e; }()), {\n        item: true,\n        xs: 12,\n        align: "center"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module \'@material-ui/core/Typography\'"); e.code = \'MODULE_NOT_FOUND\'; throw e; }()), {\n        component: "h4",\n        variant: "h4"\n      }, title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module \'@material-ui/core/Grid\'"); e.code = \'MODULE_NOT_FOUND\'; throw e; }()), {\n        item: true,\n        xs: 12,\n        align: "center"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module \'@material-ui/core/FormControl\'"); e.code = \'MODULE_NOT_FOUND\'; throw e; }()), {\n        component: "fieldset"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module \'@material-ui/core/FormHelperText\'"); e.code = \'MODULE_NOT_FOUND\'; throw e; }()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n        align: "center"\n      }, "Guest control of playback")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module \'@material-ui/core/RadioGroup\'"); e.code = \'MODULE_NOT_FOUND\'; throw e; }()), {\n        row: true,\n        defaultValue: this.props.guestCanPause.toString(),\n        onChange: this.handleGuestCanPauseChange\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module \'@material-ui/core/FormControlLabel\'"); e.code = \'MODULE_NOT_FOUND\'; throw e; }()), {\n        value: "true",\n        control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module \'@material-ui/core/Radio\'"); e.code = \'MODULE_NOT_FOUND\'; throw e; }()), {\n          color: "primary"\n        }),\n        label: "Play/Pause",\n        labelPlacement: "bottom"\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module \'@material-ui/core/FormControlLabel\'"); e.code = \'MODULE_NOT_FOUND\'; throw e; }()), {\n        value: "false",\n        control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module \'@material-ui/core/Radio\'"); e.code = \'MODULE_NOT_FOUND\'; throw e; }()), {\n          color: "secondary"\n        }),\n        label: "No control",\n        labelPlacement: "bottom"\n      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module \'@material-ui/core/Grid\'"); e.code = \'MODULE_NOT_FOUND\'; throw e; }()), {\n        item: true,\n        xs: 12,\n        align: "center"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module \'@material-ui/core/FormControl\'"); e.code = \'MODULE_NOT_FOUND\'; throw e; }()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module \'@material-ui/core\'"); e.code = \'MODULE_NOT_FOUND\'; throw e; }()), {\n        required: true,\n        type: "number",\n        onChange: this.handleVotesChange,\n        defaultValue: this.props.votesToSkip,\n        inputProps: {\n          min: 1,\n          style: {\n            textAlign: "center"\n          }\n        }\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module \'@material-ui/core/FormHelperText\'"); e.code = \'MODULE_NOT_FOUND\'; throw e; }()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n        align: "center"\n      }, "Votes required to skip")))), this.props.update ? this.renderUpdateButtons() : this.renderCreateButtons());\n    }\n  }]);\n\n  return CreateRoomPage;\n}(react__WEBPACK_IMPORTED_MODULE_0__.Component);\n\n_defineProperty(CreateRoomPage, "defaultProps", {\n  votesToSkip: 2,\n  guestCanPause: true,\n  update: false,\n  roomCode: null,\n  updateCallback: function updateCallback() {}\n});\n\n\n\n//# sourceURL=webpack://frontend/./frontend/src/CreateRoom.js?')},"./frontend/src/JoinRoom.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ JoinRoomPage)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\nObject(function webpackMissingModule() { var e = new Error("Cannot find module \'@material-ui/core\'"); e.code = \'MODULE_NOT_FOUND\'; throw e; }());\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");\nfunction _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n\nvar JoinRoomPage = /*#__PURE__*/function (_Component) {\n  _inherits(JoinRoomPage, _Component);\n\n  var _super = _createSuper(JoinRoomPage);\n\n  function JoinRoomPage(props) {\n    var _this;\n\n    _classCallCheck(this, JoinRoomPage);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      roomCode: "",\n      error: ""\n    };\n    _this.handleTextFieldChange = _this.handleTextFieldChange.bind(_assertThisInitialized(_this));\n    _this.roomButtonPressed = _this.roomButtonPressed.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  _createClass(JoinRoomPage, [{\n    key: "render",\n    value: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module \'@material-ui/core\'"); e.code = \'MODULE_NOT_FOUND\'; throw e; }()), {\n        container: true,\n        spacing: 1\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module \'@material-ui/core\'"); e.code = \'MODULE_NOT_FOUND\'; throw e; }()), {\n        item: true,\n        xs: 12,\n        align: "center"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module \'@material-ui/core\'"); e.code = \'MODULE_NOT_FOUND\'; throw e; }()), {\n        variant: "h4",\n        component: "h4"\n      }, "Join Room")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module \'@material-ui/core\'"); e.code = \'MODULE_NOT_FOUND\'; throw e; }()), {\n        item: true,\n        xs: 12,\n        align: "center"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module \'@material-ui/core\'"); e.code = \'MODULE_NOT_FOUND\'; throw e; }()), {\n        error: this.state.error,\n        label: "Code",\n        placeholder: "Enter a Room Code",\n        value: this.state.roomCode,\n        helperText: this.state.error,\n        variant: "outlined",\n        onChange: this.handleTextFieldChange\n      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module \'@material-ui/core\'"); e.code = \'MODULE_NOT_FOUND\'; throw e; }()), {\n        item: true,\n        xs: 12,\n        align: "center"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module \'@material-ui/core\'"); e.code = \'MODULE_NOT_FOUND\'; throw e; }()), {\n        variant: "contained",\n        color: "primary",\n        onClick: this.roomButtonPressed\n      }, "Enter Room")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module \'@material-ui/core\'"); e.code = \'MODULE_NOT_FOUND\'; throw e; }()), {\n        item: true,\n        xs: 12,\n        align: "center"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module \'@material-ui/core\'"); e.code = \'MODULE_NOT_FOUND\'; throw e; }()), {\n        variant: "contained",\n        color: "secondary",\n        to: "/",\n        component: react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link\n      }, "Back")));\n    }\n  }, {\n    key: "handleTextFieldChange",\n    value: function handleTextFieldChange(e) {\n      this.setState({\n        roomCode: e.target.value\n      });\n    }\n  }, {\n    key: "roomButtonPressed",\n    value: function roomButtonPressed() {\n      var _this2 = this;\n\n      var requestOptions = {\n        method: "POST",\n        headers: {\n          "Content-Type": "application/json"\n        },\n        body: JSON.stringify({\n          code: this.state.roomCode\n        })\n      };\n      fetch("/api/join-room", requestOptions).then(function (response) {\n        if (response.ok) {\n          _this2.props.history.push("/room/".concat(_this2.state.roomCode));\n        } else {\n          _this2.setState({\n            error: "Room !found"\n          });\n        }\n      })["catch"](function (error) {\n        console.log(error);\n      });\n    }\n  }]);\n\n  return JoinRoomPage;\n}(react__WEBPACK_IMPORTED_MODULE_0__.Component);\n\n\n\n//# sourceURL=webpack://frontend/./frontend/src/JoinRoom.js?')}},(function(e){"use strict";e.h=()=>"cd5d4f516bb7da21d0cd"}));
webpackHotUpdate("static\\development\\pages\\aircraft\\page\\[list].js",{

/***/ "./pages/aircraft/page/[list].js":
/*!***************************************!*\
  !*** ./pages/aircraft/page/[list].js ***!
  \***************************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/Footer */ "./components/Footer.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _helpers_functions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../helpers/functions */ "./helpers/functions.js");
/* harmony import */ var _helpers_filters__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../helpers/filters */ "./helpers/filters.js");
/* harmony import */ var _helpers_api__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../helpers/api */ "./helpers/api.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);







var _jsxFileName = "D:\\Projects\\django_apps\\airbook\\frontend\\guest\\pages\\aircraft\\page\\[list].js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }










var AircraftListPage = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(AircraftListPage, _Component);

  var _super = _createSuper(AircraftListPage);

  function AircraftListPage(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, AircraftListPage);

    _this = _super.call(this, props);
    var response = _this.props.data;
    _this.state = {
      aircrafts: response.results,
      next: response.next,
      previous: response.previous,
      currentPage: _this.props.currentPage,
      filters: [_helpers_filters__WEBPACK_IMPORTED_MODULE_11__["Static_Filters"]['offered_for']],
      selected_filters: {
        frontend: true
      }
    };

    _this.loadData();

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(AircraftListPage, [{
    key: "loadData",
    value: function () {
      var _loadData = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var filters, filter_keys, models;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                filters = this.state.filters;
                filter_keys = {
                  AbConfigurations: 'CONFIGURATION',
                  AbCategories: 'CATEGORY',
                  AbManufacturers: 'MANUFACTURER',
                  AbTypes: 'TYPE',
                  AbModels: 'MODEL'
                };
                models = {
                  'AbConfigurations': {
                    length: 4
                  },
                  'AbCategories': {
                    type: 'aircraft',
                    length: 6
                  },
                  'AbManufacturers': {
                    type: 'aircraft',
                    length: 4
                  },
                  'AbTypes': {
                    type: 'aircraft',
                    length: 4
                  },
                  'AbModels': {
                    type: 'aircraft',
                    length: 4
                  }
                };
                _context.next = 5;
                return Object(_helpers_api__WEBPACK_IMPORTED_MODULE_12__["post"])('abmodels', {
                  models: models
                }).then(function (response) {
                  Object.keys(filter_keys).map(function (key) {
                    var values = [];
                    response.data[key].map(function (value) {
                      values.push({
                        name: value.name,
                        value: value.id,
                        type: 'checkbox'
                      });
                    });
                    filters.push({
                      name: filter_keys[key],
                      value: values
                    });
                  });
                  filters.push({
                    name: 'YOM',
                    value: _helpers_filters__WEBPACK_IMPORTED_MODULE_11__["Static_Filters"]['date'].value
                  });
                  filters.push(_helpers_filters__WEBPACK_IMPORTED_MODULE_11__["Static_Filters"]['aircraft_status']);
                });

              case 5:
                this.setState({
                  filters: filters
                });

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function loadData() {
        return _loadData.apply(this, arguments);
      }

      return loadData;
    }()
  }, {
    key: "getAircrafts",
    value: function getAircrafts(url) {
      var _this2 = this;

      var params = JSON.stringify(this.state.selected_filters);
      console.log('params', params);
      url = url ? url : 'aircrafts';
      Object(_helpers_api__WEBPACK_IMPORTED_MODULE_12__["list"])(url, {
        params: params
      }).then(function (response) {
        var previous = response.extra_data.previous;
        var next = response.extra_data.next;

        _this2.setState({
          aircrafts: response.data,
          previous: previous,
          next: next
        });
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var response = this.props.data;

      if (this.props.data.results != this.state.aircrafts) {
        this.setState({
          aircrafts: response.results,
          next: response.next,
          previous: response.previous,
          currentPage: this.props.currentPage
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$state = this.state,
          aircrafts = _this$state.aircrafts,
          previous = _this$state.previous,
          next = _this$state.next,
          filters = _this$state.filters,
          currentPage = _this$state.currentPage;
      currentPage = parseInt(currentPage, 10);
      console.log(currentPage + 1, previous, next);
      return __jsx(react__WEBPACK_IMPORTED_MODULE_13___default.a.Fragment, null, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 4
        }
      }), __jsx("div", {
        className: "ab-page-content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 4
        }
      }, __jsx("div", {
        className: "ab-container w-container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 5
        }
      }, __jsx("a", {
        href: "#",
        target: "_blank",
        className: "ab-top-page-advert w-inline-block",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 7
        }
      }), __jsx("div", {
        className: "ab-page-main-content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "filter-block",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "filter-block-title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "filyer-icon",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 10
        }
      }, __jsx("div", {
        className: "ab-svg-icon filters w-embed",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 12
        }
      }, __jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "14",
        height: "14",
        viewBox: "0 0 24 24",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 13
        }
      }, __jsx("path", {
        fill: "currentColor",
        d: "M1 0h22l-9 15.094v8.906l-4-3v-5.906z",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 15
        }
      }))), __jsx("div", {
        className: "filters-label",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 12
        }
      }, "Aircraft Search Filters")), __jsx("a", {
        href: "#",
        className: "filter-close w-button",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 10
        }
      }, "Close")), __jsx("div", {
        className: "filter-block-content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "filter-form-block w-form",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 10
        }
      }, __jsx("form", {
        id: "wf-form-filter-form",
        action: "/",
        name: "wf-form-filter-form",
        "data-name": "filter form",
        className: "filter-form",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 12
        }
      }, Object(_helpers_functions__WEBPACK_IMPORTED_MODULE_10__["showFilters"])(filters, this, 'Aircrafts')), __jsx("div", {
        className: "w-form-done",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 12
        }
      }, __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 13
        }
      }, "Airbook search filters")), __jsx("div", {
        className: "w-form-fail",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 12
        }
      }, __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 13
        }
      }, "Airbook search filters"))))), __jsx("div", {
        className: "list-block",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "ab-page-title-block",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 9
        }
      }, __jsx("h1", {
        className: "page-title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 10
        }
      }, "Aircraft"), __jsx("p", {
        className: "ab-page-description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 10
        }
      }, " availability for lease, charter, ACMI and sale")), __jsx("div", {
        className: "w-layout-grid ab-list-grid",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 9
        }
      }, aircrafts.length > 0 && aircrafts.map(function (aircraft, index) {
        return __jsx("div", {
          className: "ab-list-item-wrapper",
          key: index,
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 18
          }
        }, __jsx("div", {
          className: "premium-tag",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 11
          }
        }, "Premium"), __jsx("div", {
          className: "item-flex-header",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 11
          }
        }, __jsx("div", {
          className: "item-title-block",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 12
          }
        }, __jsx("a", {
          href: "#",
          className: "item-link-block w-inline-block",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 14
          }
        }, __jsx("h2", {
          className: "item-composite-title",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 15
          }
        }, aircraft.title)), __jsx("div", {
          className: "item-h3-block",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 149,
            columnNumber: 14
          }
        }, __jsx("div", {
          className: "available-label",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 15
          }
        }, "Available for"), __jsx("h3", {
          className: "available-value",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 15
          }
        }, aircraft.offer_for))), __jsx("div", {
          className: "item-like-block",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 154,
            columnNumber: 12
          }
        }, __jsx("div", {
          className: "ab-likes w-embed",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 155,
            columnNumber: 14
          }
        }, __jsx("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "14",
          height: "14",
          viewBox: "0 0 24 24",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 156,
            columnNumber: 15
          }
        }, __jsx("path", {
          fill: "currentColor",
          d: "M5 22h-5v-12h5v12zm17.615-8.412c-.857-.115-.578-.734.031-.922.521-.16 1.354-.5 1.354-1.51 0-.672-.5-1.562-2.271-1.49-1.228.05-3.666-.198-4.979-.885.906-3.656.688-8.781-1.688-8.781-1.594 0-1.896 1.807-2.375 3.469-1.221 4.242-3.312 6.017-5.687 6.885v10.878c4.382.701 6.345 2.768 10.505 2.768 3.198 0 4.852-1.735 4.852-2.666 0-.335-.272-.573-.96-.626-.811-.062-.734-.812.031-.953 1.268-.234 1.826-.914 1.826-1.543 0-.529-.396-1.022-1.098-1.181-.837-.189-.664-.757.031-.812 1.133-.09 1.688-.764 1.688-1.41 0-.565-.424-1.109-1.26-1.221z",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 157,
            columnNumber: 17
          }
        }))), __jsx("div", {
          className: "likecount",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 160,
            columnNumber: 14
          }
        }, "1000"))), __jsx("div", {
          className: "item-data-flex",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 163,
            columnNumber: 11
          }
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
          href: {
            pathname: "/aircraft/detail",
            query: aircraft
          },
          as: "/aircraft/".concat(aircraft.id && aircraft.id + "-" + aircraft.title),
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 164,
            columnNumber: 12
          }
        }, __jsx("a", {
          className: "item-image w-inline-block",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 165,
            columnNumber: 12
          }
        })), __jsx("div", {
          className: "item-info-block",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 167,
            columnNumber: 12
          }
        }, __jsx("div", {
          className: "flex-specsbox",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 168,
            columnNumber: 14
          }
        }, __jsx("div", {
          className: "sn-label",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 169,
            columnNumber: 15
          }
        }, "SN"), __jsx("div", {
          className: "item-specs sn-value",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 170,
            columnNumber: 15
          }
        }, aircraft.csn), __jsx("div", {
          className: "item-specs reg-value",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 171,
            columnNumber: 15
          }
        }, "REG " + aircraft.registration_number)), __jsx("div", {
          className: "flex-specsbox",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 173,
            columnNumber: 14
          }
        }, __jsx("p", {
          className: "item-specs",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 174,
            columnNumber: 15
          }
        }, __jsx("span", {
          className: "spec-span",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 174,
            columnNumber: 41
          }
        }, aircraft.type && aircraft.type.type), " ", __jsx("span", {
          className: "spec-span dot-before",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 174,
            columnNumber: 114
          }
        }, "YOM " + aircraft.yom), " ", __jsx("span", {
          className: "spec-span dot-before tsn",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 174,
            columnNumber: 182
          }
        }, "TSN " + aircraft.tsn), " ", __jsx("span", {
          className: "spec-span dot-before item-status",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 174,
            columnNumber: 254
          }
        }, "Storage"))), __jsx("div", {
          className: "flex-specsbox",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 176,
            columnNumber: 14
          }
        }, __jsx("div", {
          className: "ab-svg-icon w-embed",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 177,
            columnNumber: 15
          }
        }, __jsx("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "18",
          height: "18",
          viewBox: "0 0 24 24",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 178,
            columnNumber: 17
          }
        }, __jsx("path", {
          fill: "currentColor",
          d: "M14 18.435v.565h-14v-.583c-.006-1.557.062-2.446 1.854-2.86 1.964-.453 3.901-.859 2.97-2.577-2.762-5.093-.788-7.98 2.176-7.98 2.908 0 4.93 2.78 2.178 7.979-.905 1.708.963 2.114 2.97 2.577 1.797.416 1.859 1.311 1.852 2.879zm10-13.435h-8v2h8v-2zm0 4h-8v2h8v-2zm0 4h-8v2h8v-2zm0 4h-8v2h8v-2z",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 179,
            columnNumber: 18
          }
        }))), __jsx("a", {
          href: "#",
          className: "publisher-link",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 182,
            columnNumber: 15
          }
        }, "Zulqarnain Siddiq"), __jsx("div", {
          className: "location-box",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 183,
            columnNumber: 15
          }
        }, __jsx("div", {
          className: "ab-svg-icon w-embed",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 184,
            columnNumber: 17
          }
        }, __jsx("svg", {
          width: "16",
          height: "16",
          viewBox: "0 0 24 24",
          xmlns: "http://www.w3.org/2000/svg",
          fillRule: "evenodd",
          clipRule: "evenodd",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 185,
            columnNumber: 18
          }
        }, __jsx("path", {
          fill: "currentColor",
          d: "M20 18v2h-20v-2h20zm-19.989-6.426l2.624-1.5 4.765 1.815s9.197-5.519 11.773-7.038c2.226-1.312 4.268-.853 4.647-.216.448.753.131 2.366-2.576 4.09-2.166 1.38-9.233 5.855-9.233 5.855-4.969 2.708-7.565.657-7.565.657l-4.435-3.663zm5.587-6.621l-2.598 1.5 6.252 3.173 5.388-3.227-9.042-1.446z",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 186,
            columnNumber: 20
          }
        }))), __jsx("div", {
          className: "country-name",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 189,
            columnNumber: 17
          }
        }, aircraft.current_location && aircraft.current_location.toString())))), __jsx("div", {
          className: "ab-list-item-widget",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 193,
            columnNumber: 12
          }
        }, __jsx("div", {
          "data-delay": "0",
          className: "ab-list-item-menu w-dropdown",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 194,
            columnNumber: 14
          }
        }, __jsx("div", {
          className: "ab-list-item-menu-toggle w-dropdown-toggle",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 195,
            columnNumber: 15
          }
        }, __jsx("div", {
          className: "asset-dot-menu",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 196,
            columnNumber: 17
          }
        }, __jsx("div", {
          className: "dot",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 197,
            columnNumber: 18
          }
        }), __jsx("div", {
          className: "dot",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 198,
            columnNumber: 18
          }
        }), __jsx("div", {
          className: "dot",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 199,
            columnNumber: 18
          }
        }))), __jsx("nav", {
          className: "ab-list-item-dropdown w-dropdown-list",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 202,
            columnNumber: 15
          }
        }, __jsx("a", {
          href: "#",
          className: "list-item-menu-main w-dropdown-link",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 203,
            columnNumber: 17
          }
        }, "Send message"), __jsx("a", {
          href: "#",
          className: "list-item-menu-link w-dropdown-link",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 203,
            columnNumber: 93
          }
        }, "Add to favorite"), __jsx("a", {
          href: "#",
          className: "list-item-menu-link w-dropdown-link",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 203,
            columnNumber: 172
          }
        }, "View more details"), __jsx("div", {
          className: "list-item-menu-link social-elements",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 204,
            columnNumber: 17
          }
        }, __jsx("a", {
          href: "#",
          className: "menu-social w-inline-block",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 205,
            columnNumber: 18
          }
        }, __jsx("div", {
          className: "w-embed",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 206,
            columnNumber: 20
          }
        }, __jsx("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 207,
            columnNumber: 21
          }
        }, __jsx("path", {
          fill: "currentColor",
          d: "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 208,
            columnNumber: 23
          }
        })))), __jsx("a", {
          href: "#",
          className: "menu-social w-inline-block",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 212,
            columnNumber: 18
          }
        }, __jsx("div", {
          className: "w-embed",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 213,
            columnNumber: 20
          }
        }, __jsx("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 214,
            columnNumber: 21
          }
        }, __jsx("path", {
          fill: "currentColor",
          d: "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 10h-2v2h2v6h3v-6h1.82l.18-2h-2v-.833c0-.478.096-.667.558-.667h1.442v-2.5h-2.404c-1.798 0-2.596.792-2.596 2.308v1.692z",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 215,
            columnNumber: 23
          }
        })))), __jsx("a", {
          href: "#",
          className: "menu-social w-inline-block",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 219,
            columnNumber: 18
          }
        }, __jsx("div", {
          className: "w-embed",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 220,
            columnNumber: 20
          }
        }, __jsx("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 221,
            columnNumber: 21
          }
        }, __jsx("path", {
          fill: "currentColor",
          d: "M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 222,
            columnNumber: 23
          }
        }))))))))));
      })), __jsx("div", {
        className: "list-pagniation",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234,
          columnNumber: 10
        }
      }, previous && __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/aircraft/page/[list]",
        as: "/aircraft/page/".concat(currentPage - 1),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236,
          columnNumber: 11
        }
      }, __jsx("a", {
        className: "pagination-button w-button",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237,
          columnNumber: 11
        }
      }, "Previous")), next && __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/aircraft/page/[list]",
        as: "/aircraft/page/".concat(currentPage + 1),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240,
          columnNumber: 11
        }
      }, __jsx("a", {
        className: "pagination-button w-button",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241,
          columnNumber: 11
        }
      }, "Next"))), __jsx("div", {
        className: "list-empty",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "ab-svg-icon alert w-embed",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245,
          columnNumber: 10
        }
      }, __jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "18",
        height: "18",
        viewBox: "0 0 24 24",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246,
          columnNumber: 12
        }
      }, __jsx("path", {
        fill: "currentColor",
        d: "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.31 7.526c-.099-.807.528-1.526 1.348-1.526.771 0 1.377.676 1.28 1.451l-.757 6.053c-.035.283-.276.496-.561.496s-.526-.213-.562-.496l-.748-5.978zm1.31 10.724c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247,
          columnNumber: 13
        }
      }))), __jsx("div", {
        className: "no-results-message",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250,
          columnNumber: 10
        }
      }, "We couldn't find results to match your search. Please try again with different keywords.")), __jsx("a", {
        href: "#",
        className: "asset-list-footer-advert w-inline-block",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252,
          columnNumber: 9
        }
      }))))), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257,
          columnNumber: 4
        }
      }));
    }
  }]);

  return AircraftListPage;
}(react__WEBPACK_IMPORTED_MODULE_13__["Component"]);

var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (AircraftListPage);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9haXJjcmFmdC9wYWdlL1tsaXN0XS5qcyJdLCJuYW1lcyI6WyJBaXJjcmFmdExpc3RQYWdlIiwicHJvcHMiLCJyZXNwb25zZSIsImRhdGEiLCJzdGF0ZSIsImFpcmNyYWZ0cyIsInJlc3VsdHMiLCJuZXh0IiwicHJldmlvdXMiLCJjdXJyZW50UGFnZSIsImZpbHRlcnMiLCJTdGF0aWNfRmlsdGVycyIsInNlbGVjdGVkX2ZpbHRlcnMiLCJmcm9udGVuZCIsImxvYWREYXRhIiwiZmlsdGVyX2tleXMiLCJBYkNvbmZpZ3VyYXRpb25zIiwiQWJDYXRlZ29yaWVzIiwiQWJNYW51ZmFjdHVyZXJzIiwiQWJUeXBlcyIsIkFiTW9kZWxzIiwibW9kZWxzIiwibGVuZ3RoIiwidHlwZSIsInBvc3QiLCJ0aGVuIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImtleSIsInZhbHVlcyIsInZhbHVlIiwicHVzaCIsIm5hbWUiLCJpZCIsInNldFN0YXRlIiwidXJsIiwicGFyYW1zIiwiSlNPTiIsInN0cmluZ2lmeSIsImNvbnNvbGUiLCJsb2ciLCJsaXN0IiwiZXh0cmFfZGF0YSIsInBhcnNlSW50Iiwic2hvd0ZpbHRlcnMiLCJhaXJjcmFmdCIsImluZGV4IiwidGl0bGUiLCJvZmZlcl9mb3IiLCJwYXRobmFtZSIsInF1ZXJ5IiwiY3NuIiwicmVnaXN0cmF0aW9uX251bWJlciIsInlvbSIsInRzbiIsImN1cnJlbnRfbG9jYXRpb24iLCJ0b1N0cmluZyIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBc0JNQSxnQjs7Ozs7QUFDTCw0QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNsQiw4QkFBTUEsS0FBTjtBQUNBLFFBQUlDLFFBQVEsR0FBRyxNQUFLRCxLQUFMLENBQVdFLElBQTFCO0FB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QUNDO0FBQU0sWUFBSSxFQUFDLGNBQVg7QUFBMEIsU0FBQyxFQUFDLHdZQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREQsQ0FERixDQURELEVBTUM7QUFBSyxpQkFBUyxFQUFDLG9CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0dBTkQsQ0E5R0YsRUFzSEU7QUFBRyxZQUFJLEVBQUMsR0FBUjtBQUFZLGlCQUFTLEVBQUMseUNBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUF0SEYsQ0EzQkEsQ0FGRixDQURELENBRkEsRUEySkEsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBM0pBLENBREQ7QUE4SkM7Ozs7RUFyTzRCaUQsZ0Q7OztBQXdPaEIxRCwrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcYWlyY3JhZnRcXHBhZ2VcXFtsaXN0XS5qcy4wNGM0OTQ3MDNkMzkwZDk4NmFhNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWRlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL0hlYWRlcic7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9Gb290ZXInO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQge3Nob3dGaWx0ZXJzfSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL2Z1bmN0aW9ucyc7XHJcbmltcG9ydCB7U3RhdGljX0ZpbHRlcnN9IGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvZmlsdGVycyc7XHJcbmltcG9ydCB7bGlzdCxwb3N0fSBmcm9tICcuLi8uLi8uLi9oZWxwZXJzL2FwaSc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoe3BhcmFtc30pe1xyXG5cdGNvbnNvbGUubG9nKCd0aGlzJywgcGFyYW1zKVxyXG5cdGxldCBkYXRhID1bXSwgY3VycmVudFBhZ2UgPSBcIlwiO1xyXG5cdGF3YWl0IGF4aW9zLmdldChcclxuICAgIGBodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2FpcmNyYWZ0cz9wYWdlPSR7cGFyYW1zLmxpc3R9YFxyXG4gICkudGhlbigocmVzcG9uc2UpPT57XHJcblx0XHRkYXRhID0gcmVzcG9uc2UuZGF0YTtcclxuXHRcdGN1cnJlbnRQYWdlID0gcGFyYW1zLmxpc3RcclxuXHR9KTtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuXHRcdFx0Y3VycmVudFBhZ2UsXHJcblx0XHRcdGRhdGEsXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuY2xhc3MgQWlyY3JhZnRMaXN0UGFnZSBleHRlbmRzIENvbXBvbmVudHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0c3VwZXIocHJvcHMpO1xyXG5cdFx0bGV0IHJlc3BvbnNlID0gdGhpcy5wcm9wcy5kYXRhO1xyXG5cdFx0dGhpcy5zdGF0ZSA9IHtcclxuXHRcdFx0YWlyY3JhZnRzOiByZXNwb25zZS5yZXN1bHRzLFxyXG5cdFx0XHRuZXh0OiByZXNwb25zZS5uZXh0LFxyXG5cdFx0XHRwcmV2aW91czogcmVzcG9uc2UucHJldmlvdXMsXHJcblx0XHRcdGN1cnJlbnRQYWdlOiB0aGlzLnByb3BzLmN1cnJlbnRQYWdlLFxyXG5cdFx0XHRmaWx0ZXJzOltTdGF0aWNfRmlsdGVyc1snb2ZmZXJlZF9mb3InXV0sXHJcblx0XHRcdHNlbGVjdGVkX2ZpbHRlcnM6e1xyXG5cdFx0XHRcdGZyb250ZW5kOnRydWVcclxuXHRcdFx0fSxcclxuXHRcdH07XHJcblx0XHR0aGlzLmxvYWREYXRhKCk7XHJcblx0fVxyXG5cdGFzeW5jIGxvYWREYXRhKCl7XHJcblx0XHRsZXQge2ZpbHRlcnN9ID0gdGhpcy5zdGF0ZTtcclxuXHRcdGxldCBmaWx0ZXJfa2V5cyA9IHtcclxuXHRcdFx0QWJDb25maWd1cmF0aW9uczogJ0NPTkZJR1VSQVRJT04nLFxyXG5cdFx0XHRBYkNhdGVnb3JpZXM6ICdDQVRFR09SWScsXHJcblx0XHRcdEFiTWFudWZhY3R1cmVyczogJ01BTlVGQUNUVVJFUicsXHJcblx0XHRcdEFiVHlwZXM6ICdUWVBFJyxcclxuXHRcdFx0QWJNb2RlbHM6ICdNT0RFTCdcclxuXHRcdH1cclxuXHRcdGxldCBtb2RlbHMgPSB7XHJcblx0XHRcdCdBYkNvbmZpZ3VyYXRpb25zJzoge2xlbmd0aDo0fSxcclxuXHRcdFx0J0FiQ2F0ZWdvcmllcyc6IHt0eXBlOiAnYWlyY3JhZnQnLCBsZW5ndGg6Nn0sXHJcblx0XHRcdCdBYk1hbnVmYWN0dXJlcnMnOiB7dHlwZTogJ2FpcmNyYWZ0JywgbGVuZ3RoOjR9LFxyXG5cdFx0XHQnQWJUeXBlcyc6IHt0eXBlOiAnYWlyY3JhZnQnLCBsZW5ndGg6NH0sXHJcblx0XHRcdCdBYk1vZGVscyc6IHt0eXBlOiAnYWlyY3JhZnQnLCBsZW5ndGg6NH0sXHJcblx0XHR9XHJcblx0XHRhd2FpdCBwb3N0KCdhYm1vZGVscycsIHttb2RlbHM6IG1vZGVsc30pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcblx0XHRcdE9iamVjdC5rZXlzKGZpbHRlcl9rZXlzKS5tYXAoKGtleSk9PntcclxuXHRcdFx0XHRsZXQgdmFsdWVzID0gW107XHJcblx0XHRcdFx0cmVzcG9uc2UuZGF0YVtrZXldLm1hcCgodmFsdWUpPT57XHJcblx0XHRcdFx0XHR2YWx1ZXMucHVzaCh7bmFtZTp2YWx1ZS5uYW1lLCB2YWx1ZTp2YWx1ZS5pZCwgdHlwZTonY2hlY2tib3gnfSlcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0ZmlsdGVycy5wdXNoKHtuYW1lOmZpbHRlcl9rZXlzW2tleV0sIHZhbHVlOnZhbHVlc30pXHJcblx0XHRcdH0pXHJcblx0XHRcdFx0ZmlsdGVycy5wdXNoKHtuYW1lOidZT00nLCB2YWx1ZTpTdGF0aWNfRmlsdGVyc1snZGF0ZSddLnZhbHVlfSk7XHJcblx0XHRcdFx0ZmlsdGVycy5wdXNoKFN0YXRpY19GaWx0ZXJzWydhaXJjcmFmdF9zdGF0dXMnXSk7XHJcblx0XHR9KVxyXG5cdFx0dGhpcy5zZXRTdGF0ZSh7ZmlsdGVyc30pO1xyXG5cdH1cclxuXHRnZXRBaXJjcmFmdHModXJsKXtcclxuXHRcdGxldCBwYXJhbXMgPSBKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXRlLnNlbGVjdGVkX2ZpbHRlcnMpO1xyXG5cdFx0Y29uc29sZS5sb2coJ3BhcmFtcycsIHBhcmFtcyk7XHJcblx0XHR1cmwgPSB1cmwgPyB1cmwgOidhaXJjcmFmdHMnO1xyXG5cdFx0bGlzdCh1cmwsIHtwYXJhbXM6cGFyYW1zfSkudGhlbigocmVzcG9uc2UpPT57XHJcblx0XHRcdGxldCBwcmV2aW91cz0gcmVzcG9uc2UuZXh0cmFfZGF0YS5wcmV2aW91cztcclxuXHRcdFx0bGV0IG5leHQ9IHJlc3BvbnNlLmV4dHJhX2RhdGEubmV4dDtcclxuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7YWlyY3JhZnRzOnJlc3BvbnNlLmRhdGEsIHByZXZpb3VzLCBuZXh0fSlcclxuXHRcdH0pXHJcblx0fVxyXG5cdGNvbXBvbmVudERpZFVwZGF0ZSgpe1xyXG5cdFx0bGV0IHJlc3BvbnNlID0gdGhpcy5wcm9wcy5kYXRhO1xyXG5cdFx0aWYodGhpcy5wcm9wcy5kYXRhLnJlc3VsdHMgIT0gdGhpcy5zdGF0ZS5haXJjcmFmdHMpe1xyXG5cdFx0XHR0aGlzLnNldFN0YXRlKCB7XHJcblx0XHRcdGFpcmNyYWZ0czogcmVzcG9uc2UucmVzdWx0cyxcclxuXHRcdFx0bmV4dDogcmVzcG9uc2UubmV4dCxcclxuXHRcdFx0cHJldmlvdXM6IHJlc3BvbnNlLnByZXZpb3VzLFxyXG5cdFx0XHRjdXJyZW50UGFnZTogdGhpcy5wcm9wcy5jdXJyZW50UGFnZSxcclxuXHRcdH0pO1xyXG5cclxuXHRcdH1cclxuXHR9XHJcbiAgcmVuZGVyKCl7XHJcblx0XHRsZXQge2FpcmNyYWZ0cywgcHJldmlvdXMsIG5leHQsIGZpbHRlcnMsIGN1cnJlbnRQYWdlfSA9IHRoaXMuc3RhdGU7XHJcblx0XHRjdXJyZW50UGFnZSA9IHBhcnNlSW50KGN1cnJlbnRQYWdlLCAxMCk7XHJcblx0XHRjb25zb2xlLmxvZyhjdXJyZW50UGFnZSsxLCBwcmV2aW91cywgbmV4dClcclxuXHRcdHJldHVybiAgKFxyXG5cdFx0XHQ8PlxyXG5cdFx0XHQ8SGVhZGVyIC8+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYWItcGFnZS1jb250ZW50XCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhYi1jb250YWluZXIgdy1jb250YWluZXJcIj5cclxuXHRcdFx0XHRcdCA8YSBocmVmPVwiI1wiIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzTmFtZT1cImFiLXRvcC1wYWdlLWFkdmVydCB3LWlubGluZS1ibG9ja1wiPjwvYT5cclxuXHRcdFx0XHRcdCA8ZGl2IGNsYXNzTmFtZT1cImFiLXBhZ2UtbWFpbi1jb250ZW50XCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyLWJsb2NrXCI+XHJcblx0XHRcdFx0XHRcdFx0IDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyLWJsb2NrLXRpdGxlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmlseWVyLWljb25cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgPGRpdiBjbGFzc05hbWU9XCJhYi1zdmctaWNvbiBmaWx0ZXJzIHctZW1iZWRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxNFwiIGhlaWdodD1cIjE0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCA8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0xIDBoMjJsLTkgMTUuMDk0djguOTA2bC00LTN2LTUuOTA2elwiPjwvcGF0aD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9zdmc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0IDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlcnMtbGFiZWxcIj5BaXJjcmFmdCBTZWFyY2ggRmlsdGVyczwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJmaWx0ZXItY2xvc2Ugdy1idXR0b25cIj5DbG9zZTwvYT5cclxuXHRcdFx0XHRcdFx0XHQgPC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0IDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyLWJsb2NrLWNvbnRlbnRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmaWx0ZXItZm9ybS1ibG9jayB3LWZvcm1cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgPGZvcm0gaWQ9XCJ3Zi1mb3JtLWZpbHRlci1mb3JtXCIgYWN0aW9uPVwiL1wiIG5hbWU9XCJ3Zi1mb3JtLWZpbHRlci1mb3JtXCIgZGF0YS1uYW1lPVwiZmlsdGVyIGZvcm1cIiBjbGFzc05hbWU9XCJmaWx0ZXItZm9ybVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0IHtzaG93RmlsdGVycyhmaWx0ZXJzLCB0aGlzLCAnQWlyY3JhZnRzJyl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0IDwvZm9ybT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgPGRpdiBjbGFzc05hbWU9XCJ3LWZvcm0tZG9uZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2PkFpcmJvb2sgc2VhcmNoIGZpbHRlcnM8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgPC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0IDxkaXYgY2xhc3NOYW1lPVwidy1mb3JtLWZhaWxcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdj5BaXJib29rIHNlYXJjaCBmaWx0ZXJzPC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0IDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQgPC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxpc3QtYmxvY2tcIj5cclxuXHRcdFx0XHRcdFx0XHQgPGRpdiBjbGFzc05hbWU9XCJhYi1wYWdlLXRpdGxlLWJsb2NrXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJwYWdlLXRpdGxlXCI+QWlyY3JhZnQ8L2gxPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJhYi1wYWdlLWRlc2NyaXB0aW9uXCI+IGF2YWlsYWJpbGl0eSBmb3IgbGVhc2UsIGNoYXJ0ZXIsIEFDTUkgYW5kIHNhbGU8L3A+XHJcblx0XHRcdFx0XHRcdFx0IDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdCA8ZGl2IGNsYXNzTmFtZT1cInctbGF5b3V0LWdyaWQgYWItbGlzdC1ncmlkXCI+XHJcblx0XHJcblx0XHRcdFx0XHRcdFx0XHQge2FpcmNyYWZ0cy5sZW5ndGggPiAwICYmIGFpcmNyYWZ0cy5tYXAoKGFpcmNyYWZ0LCBpbmRleCk9PntcclxuXHRcdFx0XHRcdFx0XHRcdFx0IHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImFiLWxpc3QtaXRlbS13cmFwcGVyXCIga2V5PXtpbmRleH0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdCA8ZGl2IGNsYXNzTmFtZT1cInByZW1pdW0tdGFnXCI+UHJlbWl1bTwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQgPGRpdiBjbGFzc05hbWU9XCJpdGVtLWZsZXgtaGVhZGVyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tdGl0bGUtYmxvY2tcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiaXRlbS1saW5rLWJsb2NrIHctaW5saW5lLWJsb2NrXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDIgY2xhc3NOYW1lPVwiaXRlbS1jb21wb3NpdGUtdGl0bGVcIj57YWlyY3JhZnQudGl0bGV9PC9oMj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IDwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IDxkaXYgY2xhc3NOYW1lPVwiaXRlbS1oMy1ibG9ja1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhdmFpbGFibGUtbGFiZWxcIj5BdmFpbGFibGUgZm9yPC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDMgY2xhc3NOYW1lPVwiYXZhaWxhYmxlLXZhbHVlXCI+e2FpcmNyYWZ0Lm9mZmVyX2Zvcn08L2gzPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgPC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaXRlbS1saWtlLWJsb2NrXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCA8ZGl2IGNsYXNzTmFtZT1cImFiLWxpa2VzIHctZW1iZWRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTRcIiBoZWlnaHQ9XCIxNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IDxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTUgMjJoLTV2LTEyaDV2MTJ6bTE3LjYxNS04LjQxMmMtLjg1Ny0uMTE1LS41NzgtLjczNC4wMzEtLjkyMi41MjEtLjE2IDEuMzU0LS41IDEuMzU0LTEuNTEgMC0uNjcyLS41LTEuNTYyLTIuMjcxLTEuNDktMS4yMjguMDUtMy42NjYtLjE5OC00Ljk3OS0uODg1LjkwNi0zLjY1Ni42ODgtOC43ODEtMS42ODgtOC43ODEtMS41OTQgMC0xLjg5NiAxLjgwNy0yLjM3NSAzLjQ2OS0xLjIyMSA0LjI0Mi0zLjMxMiA2LjAxNy01LjY4NyA2Ljg4NXYxMC44NzhjNC4zODIuNzAxIDYuMzQ1IDIuNzY4IDEwLjUwNSAyLjc2OCAzLjE5OCAwIDQuODUyLTEuNzM1IDQuODUyLTIuNjY2IDAtLjMzNS0uMjcyLS41NzMtLjk2LS42MjYtLjgxMS0uMDYyLS43MzQtLjgxMi4wMzEtLjk1MyAxLjI2OC0uMjM0IDEuODI2LS45MTQgMS44MjYtMS41NDMgMC0uNTI5LS4zOTYtMS4wMjItMS4wOTgtMS4xODEtLjgzNy0uMTg5LS42NjQtLjc1Ny4wMzEtLjgxMiAxLjEzMy0uMDkgMS42ODgtLjc2NCAxLjY4OC0xLjQxIDAtLjU2NS0uNDI0LTEuMTA5LTEuMjYtMS4yMjF6XCI+PC9wYXRoPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9zdmc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCA8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IDxkaXYgY2xhc3NOYW1lPVwibGlrZWNvdW50XCI+MTAwMDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdCA8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0IDxkaXYgY2xhc3NOYW1lPVwiaXRlbS1kYXRhLWZsZXhcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgPExpbmsgaHJlZj17eyBwYXRobmFtZTogYC9haXJjcmFmdC9kZXRhaWxgLCBxdWVyeTphaXJjcmFmdCB9fSBhcz17YC9haXJjcmFmdC8ke2FpcmNyYWZ0LmlkICYmIGFpcmNyYWZ0LmlkICsgXCItXCIgKyBhaXJjcmFmdC50aXRsZX1gfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT1cIml0ZW0taW1hZ2Ugdy1pbmxpbmUtYmxvY2tcIj48L2E+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0IDwvTGluaz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaXRlbS1pbmZvLWJsb2NrXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtc3BlY3Nib3hcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic24tbGFiZWxcIj5TTjwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpdGVtLXNwZWNzIHNuLXZhbHVlXCI+e2FpcmNyYWZ0LmNzbn08L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaXRlbS1zcGVjcyByZWctdmFsdWVcIj57XCJSRUcgXCIrYWlyY3JhZnQucmVnaXN0cmF0aW9uX251bWJlcn08L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgPGRpdiBjbGFzc05hbWU9XCJmbGV4LXNwZWNzYm94XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJpdGVtLXNwZWNzXCI+PHNwYW4gY2xhc3NOYW1lPVwic3BlYy1zcGFuXCI+e2FpcmNyYWZ0LnR5cGUgJiYgYWlyY3JhZnQudHlwZS50eXBlfTwvc3Bhbj4gPHNwYW4gY2xhc3NOYW1lPVwic3BlYy1zcGFuIGRvdC1iZWZvcmVcIj57XCJZT00gXCIrYWlyY3JhZnQueW9tfTwvc3Bhbj4gPHNwYW4gY2xhc3NOYW1lPVwic3BlYy1zcGFuIGRvdC1iZWZvcmUgdHNuXCI+e1wiVFNOIFwiK2FpcmNyYWZ0LnRzbn08L3NwYW4+IDxzcGFuIGNsYXNzTmFtZT1cInNwZWMtc3BhbiBkb3QtYmVmb3JlIGl0ZW0tc3RhdHVzXCI+U3RvcmFnZTwvc3Bhbj48L3A+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCA8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IDxkaXYgY2xhc3NOYW1lPVwiZmxleC1zcGVjc2JveFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhYi1zdmctaWNvbiB3LWVtYmVkXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE4XCIgaGVpZ2h0PVwiMThcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0xNCAxOC40MzV2LjU2NWgtMTR2LS41ODNjLS4wMDYtMS41NTcuMDYyLTIuNDQ2IDEuODU0LTIuODYgMS45NjQtLjQ1MyAzLjkwMS0uODU5IDIuOTctMi41NzctMi43NjItNS4wOTMtLjc4OC03Ljk4IDIuMTc2LTcuOTggMi45MDggMCA0LjkzIDIuNzggMi4xNzggNy45NzktLjkwNSAxLjcwOC45NjMgMi4xMTQgMi45NyAyLjU3NyAxLjc5Ny40MTYgMS44NTkgMS4zMTEgMS44NTIgMi44Nzl6bTEwLTEzLjQzNWgtOHYyaDh2LTJ6bTAgNGgtOHYyaDh2LTJ6bTAgNGgtOHYyaDh2LTJ6bTAgNGgtOHYyaDh2LTJ6XCI+PC9wYXRoPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgPC9zdmc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwicHVibGlzaGVyLWxpbmtcIj5adWxxYXJuYWluIFNpZGRpcTwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibG9jYXRpb24tYm94XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCA8ZGl2IGNsYXNzTmFtZT1cImFiLXN2Zy1pY29uIHctZW1iZWRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzdmcgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBmaWxsUnVsZT1cImV2ZW5vZGRcIiBjbGlwUnVsZT1cImV2ZW5vZGRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IDxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTIwIDE4djJoLTIwdi0yaDIwem0tMTkuOTg5LTYuNDI2bDIuNjI0LTEuNSA0Ljc2NSAxLjgxNXM5LjE5Ny01LjUxOSAxMS43NzMtNy4wMzhjMi4yMjYtMS4zMTIgNC4yNjgtLjg1MyA0LjY0Ny0uMjE2LjQ0OC43NTMuMTMxIDIuMzY2LTIuNTc2IDQuMDktMi4xNjYgMS4zOC05LjIzMyA1Ljg1NS05LjIzMyA1Ljg1NS00Ljk2OSAyLjcwOC03LjU2NS42NTctNy41NjUuNjU3bC00LjQzNS0zLjY2M3ptNS41ODctNi42MjFsLTIuNTk4IDEuNSA2LjI1MiAzLjE3MyA1LjM4OC0zLjIyNy05LjA0Mi0xLjQ0NnpcIj48L3BhdGg+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3N2Zz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgPGRpdiBjbGFzc05hbWU9XCJjb3VudHJ5LW5hbWVcIj57YWlyY3JhZnQuY3VycmVudF9sb2NhdGlvbiAmJiBhaXJjcmFmdC5jdXJyZW50X2xvY2F0aW9uLnRvU3RyaW5nKCl9PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFiLWxpc3QtaXRlbS13aWRnZXRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IDxkaXYgZGF0YS1kZWxheT1cIjBcIiBjbGFzc05hbWU9XCJhYi1saXN0LWl0ZW0tbWVudSB3LWRyb3Bkb3duXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFiLWxpc3QtaXRlbS1tZW51LXRvZ2dsZSB3LWRyb3Bkb3duLXRvZ2dsZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgPGRpdiBjbGFzc05hbWU9XCJhc3NldC1kb3QtbWVudVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkb3RcIj48L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZG90XCI+PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRvdFwiPjwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgPC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxuYXYgY2xhc3NOYW1lPVwiYWItbGlzdC1pdGVtLWRyb3Bkb3duIHctZHJvcGRvd24tbGlzdFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJsaXN0LWl0ZW0tbWVudS1tYWluIHctZHJvcGRvd24tbGlua1wiPlNlbmQgbWVzc2FnZTwvYT48YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImxpc3QtaXRlbS1tZW51LWxpbmsgdy1kcm9wZG93bi1saW5rXCI+QWRkIHRvIGZhdm9yaXRlPC9hPjxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwibGlzdC1pdGVtLW1lbnUtbGluayB3LWRyb3Bkb3duLWxpbmtcIj5WaWV3IG1vcmUgZGV0YWlsczwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IDxkaXYgY2xhc3NOYW1lPVwibGlzdC1pdGVtLW1lbnUtbGluayBzb2NpYWwtZWxlbWVudHNcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwibWVudS1zb2NpYWwgdy1pbmxpbmUtYmxvY2tcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IDxkaXYgY2xhc3NOYW1lPVwidy1lbWJlZFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMTIgMmM1LjUxNCAwIDEwIDQuNDg2IDEwIDEwcy00LjQ4NiAxMC0xMCAxMC0xMC00LjQ4Ni0xMC0xMCA0LjQ4Ni0xMCAxMC0xMHptMC0yYy02LjYyNyAwLTEyIDUuMzczLTEyIDEyczUuMzczIDEyIDEyIDEyIDEyLTUuMzczIDEyLTEyLTUuMzczLTEyLTEyLTEyem0tMiA4YzAgLjU1Ny0uNDQ3IDEuMDA4LTEgMS4wMDhzLTEtLjQ1LTEtMS4wMDhjMC0uNTU3LjQ0Ny0xLjAwOCAxLTEuMDA4czEgLjQ1MiAxIDEuMDA4em0wIDJoLTJ2Nmgydi02em0zIDBoLTJ2Nmgydi0yLjg2MWMwLTEuNzIyIDIuMDAyLTEuODgxIDIuMDAyIDB2Mi44NjFoMS45OTh2LTMuMzU5YzAtMy4yODQtMy4xMjgtMy4xNjQtNC0xLjU0OHYtMS4wOTN6XCI+PC9wYXRoPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9zdmc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCA8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwibWVudS1zb2NpYWwgdy1pbmxpbmUtYmxvY2tcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IDxkaXYgY2xhc3NOYW1lPVwidy1lbWJlZFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMTIgMmM1LjUxNCAwIDEwIDQuNDg2IDEwIDEwcy00LjQ4NiAxMC0xMCAxMC0xMC00LjQ4Ni0xMC0xMCA0LjQ4Ni0xMCAxMC0xMHptMC0yYy02LjYyNyAwLTEyIDUuMzczLTEyIDEyczUuMzczIDEyIDEyIDEyIDEyLTUuMzczIDEyLTEyLTUuMzczLTEyLTEyLTEyem0tMiAxMGgtMnYyaDJ2Nmgzdi02aDEuODJsLjE4LTJoLTJ2LS44MzNjMC0uNDc4LjA5Ni0uNjY3LjU1OC0uNjY3aDEuNDQydi0yLjVoLTIuNDA0Yy0xLjc5OCAwLTIuNTk2Ljc5Mi0yLjU5NiAyLjMwOHYxLjY5MnpcIj48L3BhdGg+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3N2Zz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJtZW51LXNvY2lhbCB3LWlubGluZS1ibG9ja1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgPGRpdiBjbGFzc05hbWU9XCJ3LWVtYmVkXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCA8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0uMDU3IDI0bDEuNjg3LTYuMTYzYy0xLjA0MS0xLjgwNC0xLjU4OC0zLjg0OS0xLjU4Ny01Ljk0Ni4wMDMtNi41NTYgNS4zMzgtMTEuODkxIDExLjg5My0xMS44OTEgMy4xODEuMDAxIDYuMTY3IDEuMjQgOC40MTMgMy40ODggMi4yNDUgMi4yNDggMy40ODEgNS4yMzYgMy40OCA4LjQxNC0uMDAzIDYuNTU3LTUuMzM4IDExLjg5Mi0xMS44OTMgMTEuODkyLTEuOTktLjAwMS0zLjk1MS0uNS01LjY4OC0xLjQ0OGwtNi4zMDUgMS42NTR6bTYuNTk3LTMuODA3YzEuNjc2Ljk5NSAzLjI3NiAxLjU5MSA1LjM5MiAxLjU5MiA1LjQ0OCAwIDkuODg2LTQuNDM0IDkuODg5LTkuODg1LjAwMi01LjQ2Mi00LjQxNS05Ljg5LTkuODgxLTkuODkyLTUuNDUyIDAtOS44ODcgNC40MzQtOS44ODkgOS44ODQtLjAwMSAyLjIyNS42NTEgMy44OTEgMS43NDYgNS42MzRsLS45OTkgMy42NDggMy43NDItLjk4MXptMTEuMzg3LTUuNDY0Yy0uMDc0LS4xMjQtLjI3Mi0uMTk4LS41Ny0uMzQ3LS4yOTctLjE0OS0xLjc1OC0uODY4LTIuMDMxLS45NjctLjI3Mi0uMDk5LS40Ny0uMTQ5LS42NjkuMTQ5LS4xOTguMjk3LS43NjguOTY3LS45NDEgMS4xNjUtLjE3My4xOTgtLjM0Ny4yMjMtLjY0NC4wNzQtLjI5Ny0uMTQ5LTEuMjU1LS40NjItMi4zOS0xLjQ3NS0uODgzLS43ODgtMS40OC0xLjc2MS0xLjY1My0yLjA1OS0uMTczLS4yOTctLjAxOC0uNDU4LjEzLS42MDYuMTM0LS4xMzMuMjk3LS4zNDcuNDQ2LS41MjEuMTUxLS4xNzIuMi0uMjk2LjMtLjQ5NS4wOTktLjE5OC4wNS0uMzcyLS4wMjUtLjUyMS0uMDc1LS4xNDgtLjY2OS0xLjYxMS0uOTE2LTIuMjA2LS4yNDItLjU3OS0uNDg3LS41MDEtLjY2OS0uNTFsLS41Ny0uMDFjLS4xOTggMC0uNTIuMDc0LS43OTIuMzcycy0xLjA0IDEuMDE2LTEuMDQgMi40NzkgMS4wNjUgMi44NzYgMS4yMTMgMy4wNzRjLjE0OS4xOTggMi4wOTUgMy4yIDUuMDc2IDQuNDg3LjcwOS4zMDYgMS4yNjMuNDg5IDEuNjk0LjYyNi43MTIuMjI2IDEuMzYuMTk0IDEuODcyLjExOC41NzEtLjA4NSAxLjc1OC0uNzE5IDIuMDA2LTEuNDEzLjI0OC0uNjk1LjI0OC0xLjI5LjE3My0xLjQxNHpcIj48L3BhdGg+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3N2Zz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgPC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L25hdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdCA8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0IH0pfSBcclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj4gXHJcblx0XHRcdFx0XHRcdFx0XHQgPGRpdiBjbGFzc05hbWU9XCJsaXN0LXBhZ25pYXRpb25cIj5cclxuXHRcdFx0XHRcdFx0XHRcdCB7cHJldmlvdXMgJiZcclxuXHRcdFx0XHRcdFx0XHRcdFx0IDxMaW5rIGhyZWY9e2AvYWlyY3JhZnQvcGFnZS9bbGlzdF1gfSBhcz17YC9haXJjcmFmdC9wYWdlLyR7Y3VycmVudFBhZ2UtMX1gfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0IDxhIGNsYXNzTmFtZT1cInBhZ2luYXRpb24tYnV0dG9uIHctYnV0dG9uXCI+UHJldmlvdXM8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHQgPC9MaW5rPn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0IHtuZXh0ICYmXHJcblx0XHRcdFx0XHRcdFx0XHRcdCA8TGluayBocmVmPXtgL2FpcmNyYWZ0L3BhZ2UvW2xpc3RdYH0gYXM9e2AvYWlyY3JhZnQvcGFnZS8ke2N1cnJlbnRQYWdlKzF9YH0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdCA8YSBjbGFzc05hbWU9XCJwYWdpbmF0aW9uLWJ1dHRvbiB3LWJ1dHRvblwiPk5leHQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHQgPC9MaW5rPn1cclxuXHRcdFx0XHRcdFx0XHRcdCA8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWVtcHR5XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYWItc3ZnLWljb24gYWxlcnQgdy1lbWJlZFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE4XCIgaGVpZ2h0PVwiMThcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTEyIDJjNS41MTQgMCAxMCA0LjQ4NiAxMCAxMHMtNC40ODYgMTAtMTAgMTAtMTAtNC40ODYtMTAtMTAgNC40ODYtMTAgMTAtMTB6bTAtMmMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptLTEuMzEgNy41MjZjLS4wOTktLjgwNy41MjgtMS41MjYgMS4zNDgtMS41MjYuNzcxIDAgMS4zNzcuNjc2IDEuMjggMS40NTFsLS43NTcgNi4wNTNjLS4wMzUuMjgzLS4yNzYuNDk2LS41NjEuNDk2cy0uNTI2LS4yMTMtLjU2Mi0uNDk2bC0uNzQ4LTUuOTc4em0xLjMxIDEwLjcyNGMtLjY5IDAtMS4yNS0uNTYtMS4yNS0xLjI1cy41Ni0xLjI1IDEuMjUtMS4yNSAxLjI1LjU2IDEuMjUgMS4yNS0uNTYgMS4yNS0xLjI1IDEuMjV6XCI+PC9wYXRoPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCA8L3N2Zz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibm8tcmVzdWx0cy1tZXNzYWdlXCI+V2UgY291bGRuJiN4Mjc7dCBmaW5kIHJlc3VsdHMgdG8gbWF0Y2ggeW91ciBzZWFyY2guIFBsZWFzZSB0cnkgYWdhaW4gd2l0aCBkaWZmZXJlbnQga2V5d29yZHMuPC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0IDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdCA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImFzc2V0LWxpc3QtZm9vdGVyLWFkdmVydCB3LWlubGluZS1ibG9ja1wiPjwvYT5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8Rm9vdGVyIC8+XHJcblx0XHQ8Lz4pXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBaXJjcmFmdExpc3RQYWdlOyJdLCJzb3VyY2VSb290IjoiIn0=
(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["app-service"],[
/* 0 */
/*!*****************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/work/project/HBuilder/downm3u8/main.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("__webpack_require__(/*! uni-pages */ 1);var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 13));\nvar _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 14));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}\n\n_vue.default.config.productionTip = false;\n\n_App.default.mpType = 'app';\n\nvar app = new _vue.default(_objectSpread({},\n_App.default));\n\napp.$mount();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyJdLCJuYW1lcyI6WyJWdWUiLCJjb25maWciLCJwcm9kdWN0aW9uVGlwIiwiQXBwIiwibXBUeXBlIiwiYXBwIiwiJG1vdW50Il0sIm1hcHBpbmdzIjoiQUFBQSx3Q0FBbUI7QUFDbkIsd0U7O0FBRUFBLGFBQUlDLE1BQUosQ0FBV0MsYUFBWCxHQUEyQixLQUEzQjs7QUFFQUMsYUFBSUMsTUFBSixHQUFhLEtBQWI7O0FBRUEsSUFBTUMsR0FBRyxHQUFHLElBQUlMLFlBQUo7QUFDTEcsWUFESyxFQUFaOztBQUdBRSxHQUFHLENBQUNDLE1BQUoiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndW5pLXBhZ2VzJztpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcclxuaW1wb3J0IEFwcCBmcm9tICcuL0FwcCdcclxuXHJcblZ1ZS5jb25maWcucHJvZHVjdGlvblRpcCA9IGZhbHNlXHJcblxyXG5BcHAubXBUeXBlID0gJ2FwcCdcclxuXHJcbmNvbnN0IGFwcCA9IG5ldyBWdWUoe1xyXG4gICAgLi4uQXBwXHJcbn0pXHJcbmFwcC4kbW91bnQoKSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!********************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/work/project/HBuilder/downm3u8/pages.json ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}

if (uni.restoreGlobal) {
  uni.restoreGlobal(weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
__definePage('pages/index/index', function () {return Vue.extend(__webpack_require__(/*! pages/index/index.vue?mpType=page */ 2).default);});

/***/ }),
/* 2 */
/*!*******************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/work/project/HBuilder/downm3u8/pages/index/index.vue?mpType=page ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 3);\n/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 5);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 12);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/index/index.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkg7QUFDN0g7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQ2dMO0FBQ2hMLGdCQUFnQix5TEFBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSwyRkFBTTtBQUNSLEVBQUUsb0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJiZTg0YTNjJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUY6XFxcXEhCdWlsZGVyWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL2luZGV4L2luZGV4LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!*************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/work/project/HBuilder/downm3u8/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \*************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 4);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 4 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Desktop/work/project/HBuilder/downm3u8/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "content"), attrs: { _i: 0 } },
    [
      _c(
        "view",
        { staticClass: _vm._$s(1, "sc", "text-area"), attrs: { _i: 1 } },
        [
          _c("textarea", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.url,
                expression: "url"
              }
            ],
            attrs: { _i: 2 },
            domProps: { value: _vm._$s(2, "v-model", _vm.url) },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.url = $event.target.value
              }
            }
          })
        ]
      ),
      _c("button", { attrs: { _i: 3 }, on: { click: _vm.down } }),
      _c(
        "view",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm._$s(4, "v-show", _vm.showload),
              expression: "_$s(4,'v-show',showload)"
            }
          ],
          staticClass: _vm._$s(4, "sc", "load"),
          attrs: { _i: 4 }
        },
        [
          _c(
            "view",
            { staticClass: _vm._$s(5, "sc", "back"), attrs: { _i: 5 } },
            [
              _c("view", {
                staticClass: _vm._$s(6, "sc", "width"),
                style: _vm._$s(6, "s", "width: " + _vm.percentage + "%;"),
                attrs: { _i: 6 }
              })
            ]
          ),
          _c("view", [
            _vm._v(
              _vm._$s(7, "t0-0", _vm._s(_vm.complete)) +
                _vm._$s(7, "t0-1", _vm._s(_vm.count))
            )
          ])
        ]
      ),
      _vm._$s(8, "i", _vm.videourl)
        ? _c("video", {
            attrs: { src: _vm._$s(8, "a-src", _vm.videourl), _i: 8 }
          })
        : _vm._e()
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 5 */
/*!*******************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/work/project/HBuilder/downm3u8/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js&mpType=page */ 6);\n/* harmony import */ var _F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVsQixDQUFnQixzbkJBQUcsRUFBQyIsImZpbGUiOiI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSFGOlxcXFxIQnVpbGRlclhcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFGOlxcXFxIQnVpbGRlclhcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTYtMSFGOlxcXFxIQnVpbGRlclhcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1hcHAtbG9hZGVyXFxcXHVzaW5nLWNvbXBvbmVudHMuanMhRjpcXFxcSEJ1aWxkZXJYXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUY6XFxcXEhCdWlsZGVyWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUY6XFxcXEhCdWlsZGVyWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi0xIUY6XFxcXEhCdWlsZGVyWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLWFwcC1sb2FkZXJcXFxcdXNpbmctY29tcG9uZW50cy5qcyFGOlxcXFxIQnVpbGRlclhcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Desktop/work/project/HBuilder/downm3u8/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _downm3u = _interopRequireDefault(__webpack_require__(/*! @/utils/downm3u8.js */ 8));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar that;var _default = { data: function data() {return { videourl: '', percentage: 0, complete: 0, count: 0, title: 'Hello', defaultUrl: 'https://www.zhuticlub.com:65/20190511/1CAQr5Vz/index.m3u8', // defaultUrl: 'https://www.fztxylgy.com:65/20200921/u8pNbufB/1500kb/hls/index.m3u8',\n      url: '', showload: false };}, onLoad: function onLoad() {that = this;that.url = that.defaultUrl; // plus.downloader.clear(-1)\n    plus.downloader.enumerate(function (e) {__f__(\"log\", e, \" at pages/index/index.vue:43\");}, -1);\n\n  },\n  methods: {\n    down: function down() {\n      if (that.showload === true) {\n        return;\n      }\n      var url = that.url; //m3u8地址\n      var option = {\n        url: url, //m3u8地址\n        dirpath: 'video', //保存到目录\n        id: 'yes', //下载标识，用于断线续传：开始任务时存在即续传，不存在新建\n        tryTepeat: 3, //下载失败重试次数\n        timeout: 30, //超时时间\n        retryInterval: 30, //重试等待时间\n        meanwhile: 5, //并发下载数\n        initcallback: function initcallback(res) {\n          //m3u8解析的回调，解析成功返回片段列表并开始下载，解析失败message\n          __f__(\"log\", res, \" at pages/index/index.vue:63\");\n          that.showload = true;\n          that.complete = 0;\n          that.count = res.obj.tslist.length;\n          that.percentage = 0;\n\n        },\n        tsloadcallback: function tsloadcallback(res) {\n          //片段下载回调，成功返回片段信息，失败返回respose，\n          __f__(\"log\", res, \" at pages/index/index.vue:72\");\n          that.complete++;\n          that.percentage = Math.floor(that.complete / that.count * 100);\n        },\n        finishcallback: function finishcallback(res) {\n          //文件保存为 app缓存 / 保存目录 / 下载标识.m3u8\n          that.videourl = res.obj.path;\n          that.showload = false;\n        } };\n\n      (0, _downm3u.default)(option);\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 7)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvaW5kZXgudnVlIl0sIm5hbWVzIjpbInRoYXQiLCJkYXRhIiwidmlkZW91cmwiLCJwZXJjZW50YWdlIiwiY29tcGxldGUiLCJjb3VudCIsInRpdGxlIiwiZGVmYXVsdFVybCIsInVybCIsInNob3dsb2FkIiwib25Mb2FkIiwicGx1cyIsImRvd25sb2FkZXIiLCJlbnVtZXJhdGUiLCJlIiwibWV0aG9kcyIsImRvd24iLCJvcHRpb24iLCJkaXJwYXRoIiwiaWQiLCJ0cnlUZXBlYXQiLCJ0aW1lb3V0IiwicmV0cnlJbnRlcnZhbCIsIm1lYW53aGlsZSIsImluaXRjYWxsYmFjayIsInJlcyIsIm9iaiIsInRzbGlzdCIsImxlbmd0aCIsInRzbG9hZGNhbGxiYWNrIiwiTWF0aCIsImZsb29yIiwiZmluaXNoY2FsbGJhY2siLCJwYXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQkEseUYsOEZBckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQSxJQUFJQSxJQUFKLEMsZUFDZSxFQUNYQyxJQURXLGtCQUNKLENBQ0gsT0FBTyxFQUNIQyxRQUFRLEVBQUMsRUFETixFQUVIQyxVQUFVLEVBQUMsQ0FGUixFQUdIQyxRQUFRLEVBQUMsQ0FITixFQUlIQyxLQUFLLEVBQUMsQ0FKSCxFQUtIQyxLQUFLLEVBQUUsT0FMSixFQU1IQyxVQUFVLEVBQUUsMkRBTlQsRUFPSDtBQUNBQyxTQUFHLEVBQUUsRUFSRixFQVNIQyxRQUFRLEVBQUUsS0FUUCxFQUFQLENBV0gsQ0FiVSxFQWNYQyxNQWRXLG9CQWNGLENBQ0xWLElBQUksR0FBRyxJQUFQLENBQ0FBLElBQUksQ0FBQ1EsR0FBTCxHQUFXUixJQUFJLENBQUNPLFVBQWhCLENBRkssQ0FHTDtBQUNBSSxRQUFJLENBQUNDLFVBQUwsQ0FBZ0JDLFNBQWhCLENBQTBCLFVBQVNDLENBQVQsRUFBVyxDQUNqQyxhQUFZQSxDQUFaLGtDQUNILENBRkQsRUFFRSxDQUFDLENBRkg7O0FBSUgsR0F0QlU7QUF1QlhDLFNBQU8sRUFBRTtBQUNMQyxRQURLLGtCQUNFO0FBQ0gsVUFBR2hCLElBQUksQ0FBQ1MsUUFBTCxLQUFnQixJQUFuQixFQUF3QjtBQUNwQjtBQUNIO0FBQ0QsVUFBSUQsR0FBRyxHQUFHUixJQUFJLENBQUNRLEdBQWYsQ0FKRyxDQUlnQjtBQUNuQixVQUFJUyxNQUFNLEdBQUc7QUFDVFQsV0FBRyxFQUFFQSxHQURJLEVBQ0M7QUFDVlUsZUFBTyxFQUFFLE9BRkEsRUFFUztBQUNsQkMsVUFBRSxFQUFFLEtBSEssRUFHRTtBQUNYQyxpQkFBUyxFQUFFLENBSkYsRUFJSztBQUNkQyxlQUFPLEVBQUMsRUFMQyxFQUtHO0FBQ1pDLHFCQUFhLEVBQUMsRUFOTCxFQU1XO0FBQ3BCQyxpQkFBUyxFQUFFLENBUEYsRUFPSztBQUNkQyxvQkFSUyx3QkFRSUMsR0FSSixFQVFTO0FBQ2Q7QUFDQSx1QkFBWUEsR0FBWjtBQUNBekIsY0FBSSxDQUFDUyxRQUFMLEdBQWdCLElBQWhCO0FBQ0FULGNBQUksQ0FBQ0ksUUFBTCxHQUFnQixDQUFoQjtBQUNBSixjQUFJLENBQUNLLEtBQUwsR0FBYW9CLEdBQUcsQ0FBQ0MsR0FBSixDQUFRQyxNQUFSLENBQWVDLE1BQTVCO0FBQ0E1QixjQUFJLENBQUNHLFVBQUwsR0FBa0IsQ0FBbEI7O0FBRUgsU0FoQlE7QUFpQlQwQixzQkFqQlMsMEJBaUJNSixHQWpCTixFQWlCVztBQUNoQjtBQUNBLHVCQUFZQSxHQUFaO0FBQ0F6QixjQUFJLENBQUNJLFFBQUw7QUFDQUosY0FBSSxDQUFDRyxVQUFMLEdBQWtCMkIsSUFBSSxDQUFDQyxLQUFMLENBQVkvQixJQUFJLENBQUNJLFFBQUwsR0FBY0osSUFBSSxDQUFDSyxLQUFwQixHQUEyQixHQUF0QyxDQUFsQjtBQUNILFNBdEJRO0FBdUJUMkIsc0JBdkJTLDBCQXVCTVAsR0F2Qk4sRUF1Qlc7QUFDaEI7QUFDQXpCLGNBQUksQ0FBQ0UsUUFBTCxHQUFnQnVCLEdBQUcsQ0FBQ0MsR0FBSixDQUFRTyxJQUF4QjtBQUNBakMsY0FBSSxDQUFDUyxRQUFMLEdBQWdCLEtBQWhCO0FBQ0gsU0EzQlEsRUFBYjs7QUE2QkEsNEJBQVNRLE1BQVQ7QUFDSCxLQXBDSSxFQXZCRSxFIiwiZmlsZSI6IjYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cblxuaW1wb3J0IGRvd25tM3U4IGZyb20gJ0AvdXRpbHMvZG93bm0zdTguanMnXG52YXIgdGhhdFxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2aWRlb3VybDonJyxcbiAgICAgICAgICAgIHBlcmNlbnRhZ2U6MCxcbiAgICAgICAgICAgIGNvbXBsZXRlOjAsXG4gICAgICAgICAgICBjb3VudDowLFxuICAgICAgICAgICAgdGl0bGU6ICdIZWxsbycsXG4gICAgICAgICAgICBkZWZhdWx0VXJsOiAnaHR0cHM6Ly93d3cuemh1dGljbHViLmNvbTo2NS8yMDE5MDUxMS8xQ0FRcjVWei9pbmRleC5tM3U4JyxcbiAgICAgICAgICAgIC8vIGRlZmF1bHRVcmw6ICdodHRwczovL3d3dy5menR4eWxneS5jb206NjUvMjAyMDA5MjEvdThwTmJ1ZkIvMTUwMGtiL2hscy9pbmRleC5tM3U4JyxcbiAgICAgICAgICAgIHVybDogJycsXG4gICAgICAgICAgICBzaG93bG9hZDogZmFsc2VcbiAgICAgICAgfVxuICAgIH0sXG4gICAgb25Mb2FkKCkge1xuICAgICAgICB0aGF0ID0gdGhpc1xuICAgICAgICB0aGF0LnVybCA9IHRoYXQuZGVmYXVsdFVybFxuICAgICAgICAvLyBwbHVzLmRvd25sb2FkZXIuY2xlYXIoLTEpXG4gICAgICAgIHBsdXMuZG93bmxvYWRlci5lbnVtZXJhdGUoZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgICB9LC0xKVxuXG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGRvd24oKSB7XG4gICAgICAgICAgICBpZih0aGF0LnNob3dsb2FkPT09dHJ1ZSl7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdXJsID0gdGhhdC51cmwgLy9tM3U45Zyw5Z2AXG4gICAgICAgICAgICB2YXIgb3B0aW9uID0ge1xuICAgICAgICAgICAgICAgIHVybDogdXJsLCAvL20zdTjlnLDlnYBcbiAgICAgICAgICAgICAgICBkaXJwYXRoOiAndmlkZW8nLCAvL+S/neWtmOWIsOebruW9lVxuICAgICAgICAgICAgICAgIGlkOiAneWVzJywgLy/kuIvovb3moIfor4bvvIznlKjkuo7mlq3nur/nu63kvKDvvJrlvIDlp4vku7vliqHml7blrZjlnKjljbPnu63kvKDvvIzkuI3lrZjlnKjmlrDlu7pcbiAgICAgICAgICAgICAgICB0cnlUZXBlYXQ6IDMsIC8v5LiL6L295aSx6LSl6YeN6K+V5qyh5pWwXG4gICAgICAgICAgICAgICAgdGltZW91dDozMCwgLy/otoXml7bml7bpl7RcbiAgICAgICAgICAgICAgICByZXRyeUludGVydmFsOjMwLCAgIC8v6YeN6K+V562J5b6F5pe26Ze0XG4gICAgICAgICAgICAgICAgbWVhbndoaWxlOiA1LCAvL+W5tuWPkeS4i+i9veaVsFxuICAgICAgICAgICAgICAgIGluaXRjYWxsYmFjayhyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9tM3U46Kej5p6Q55qE5Zue6LCD77yM6Kej5p6Q5oiQ5Yqf6L+U5Zue54mH5q615YiX6KGo5bm25byA5aeL5LiL6L2977yM6Kej5p6Q5aSx6LSlbWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgICAgICAgICAgICAgIHRoYXQuc2hvd2xvYWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIHRoYXQuY29tcGxldGUgPSAwXG4gICAgICAgICAgICAgICAgICAgIHRoYXQuY291bnQgPSByZXMub2JqLnRzbGlzdC5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5wZXJjZW50YWdlID0gMFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRzbG9hZGNhbGxiYWNrKHJlcykge1xuICAgICAgICAgICAgICAgICAgICAvL+eJh+auteS4i+i9veWbnuiwg++8jOaIkOWKn+i/lOWbnueJh+auteS/oeaBr++8jOWksei0pei/lOWbnnJlc3Bvc2XvvIxcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgICAgICAgICAgICAgICB0aGF0LmNvbXBsZXRlKytcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5wZXJjZW50YWdlID0gTWF0aC5mbG9vcigodGhhdC5jb21wbGV0ZS90aGF0LmNvdW50KSoxMDApXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBmaW5pc2hjYWxsYmFjayhyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgLy/mlofku7bkv53lrZjkuLogYXBw57yT5a2YIC8g5L+d5a2Y55uu5b2VIC8g5LiL6L295qCH6K+GLm0zdThcbiAgICAgICAgICAgICAgICAgICAgdGhhdC52aWRlb3VybCA9IHJlcy5vYmoucGF0aFxuICAgICAgICAgICAgICAgICAgICB0aGF0LnNob3dsb2FkID0gZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkb3dubTN1OChvcHRpb24pO1xuICAgICAgICB9LFxuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! exports provided: log, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatLog; });
function typof (v) {
  var s = Object.prototype.toString.call(v)
  return s.substring(8, s.length - 1)
}

function isDebugMode () {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__
}

function jsonStringifyReplacer (k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }'
    default :
      return p
  }
}

function log (type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key]
  }
  console[type].apply(console, args)
}

function formatLog () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key]
  }
  var type = args.shift()
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'))
    return console[type].apply(console, args)
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase()

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---'
      } catch (e) {
        v = type
      }
    } else {
      if (v === null) {
        v = '---NULL---'
      } else if (v === undefined) {
        v = '---UNDEFINED---'
      } else {
        var vType = typof(v).toUpperCase()

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---'
        } else {
          v = String(v)
        }
      }
    }

    return v
  })
  var msg = ''

  if (msgs.length > 1) {
    var lastMsg = msgs.pop()
    msg = msgs.join('---COMMA---')

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg
    } else {
      msg += '---COMMA---' + lastMsg
    }
  } else {
    msg = msgs[0]
  }

  console[type](msg)
}


/***/ }),
/* 8 */
/*!***************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/work/project/HBuilder/downm3u8/utils/downm3u8.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(__f__) {var _regeneratorRuntime = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 9);function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);}_next(undefined);});};}var systempath = '';\nvar movenum = 0;\n// plus.downloader.clear();//清空下载\nplus.io.requestFileSystem(plus.io.PRIVATE_DOC, function (fobject) {\n  // fs.root是根目录操作对象DirectoryEntry\n  fobject.root.getDirectory('_doc/', {\n    create: true },\n  function (fileEntry) {\n    systempath = fileEntry.toLocalURL();\n  });\n});\n\nfunction moveto(loadobj) {\n  movenum++;\n  var nowname = loadobj.filename;\n  var newname = '_doc/' + nowname.substr(nowname.indexOf('/') + 1);\n  var newpath = newname.substr(0, newname.lastIndexOf('/'));\n  plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function (fobject) {\n    fobject.root.getDirectory(newpath, {\n      create: true },\n    function (Directory) {\n      move(nowname, Directory);\n    });\n  });\n}\n\nfunction move(nowname, newdir) {\n  plus.io.requestFileSystem(plus.io.PUBLIC_DOWNLOADS, function (fobject) {\n    fobject.root.getFile(nowname, {}, function (fileEntry) {\n      fileEntry.moveTo(newdir);\n      movenum--;\n    }, function (e) {\n      movenum--;\n      __f__(\"log\", e, \" at utils/downm3u8.js:34\");\n      __f__(\"log\", nowname, \" at utils/downm3u8.js:35\");\n    });\n  });\n}\n\nfunction writeFile(path, text) {\n  plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function (fobject) {\n    // fs.root是根目录操作对象DirectoryEntry\n    fobject.root.getFile('_doc/' + path, {\n      create: true },\n    function (fileEntry) {\n      fileEntry.createWriter(function (writer) {\n        writer.seek(0);\n        writer.write(text);\n      }, function (e) {});\n    }, function (e) {\n      __f__(\"log\", e, \" at utils/downm3u8.js:51\");\n    });\n  });\n}function\ninfo(_x) {return _info.apply(this, arguments);}function _info() {_info = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3(options) {var that, defaultop, m3u8info, loadlist;return _regeneratorRuntime.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:\n            this.tslist = this.faillist = this.loadlist = [];\n            this.complete = 0;\n            that = this;\n            if (!options['url'] || options['url'] == '') {\n              that.callback(options.initcallback, {\n                code: 1,\n                msg: '请输入url',\n                obj: '' });\n\n            } else if (!options['id'] || options['id'] == '') {\n              that.callback(options.initcallback, {\n                code: 1,\n                msg: '请输入指定标识',\n                obj: '' });\n\n            }\n            defaultop = {\n              dirpath: 'video',\n              tryTepeat: 3,\n              meanwhile: 5,\n              timeout: 30,\n              retryInterval: 30 };\n\n            options = Object.assign(defaultop, options);\n\n            this.ajax = function (option) {\n              return new Promise( /*#__PURE__*/function () {var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(resolve, reject) {return _regeneratorRuntime.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:\n                          uni.request({\n                            url: option.url,\n                            method: 'GET',\n                            success: function success(res) {\n                              if (res.statusCode !== 200) {\n                                reject();\n                                that.callback(option.initcallback, {\n                                  code: 1,\n                                  msg: '请求失败',\n                                  obj: res });\n\n                                return;\n                              }\n                              if (res.data.indexOf('#EXTM3U') == -1) {\n                                reject();\n                                that.callback(option.initcallback, {\n                                  code: 1,\n                                  msg: '解析失败',\n                                  obj: res.data });\n\n                                return;\n                              }\n                              resolve(res.data);\n                            },\n                            fail: function fail(res) {\n                              reject();\n                              that.callback(option.initcallback, {\n                                code: 1,\n                                msg: '解析失败',\n                                obj: res });\n\n                            } });case 1:case \"end\":return _context.stop();}}}, _callee);}));return function (_x2, _x3) {return _ref.apply(this, arguments);};}());\n\n\n            };\n\n            this.getinfo = /*#__PURE__*/function () {var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(option) {var result, arr, p, p1, host, id, path, fullpath, data, i, line, nextline, o, d, ts;return _regeneratorRuntime.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.next = 2;return (\n                          that.ajax(option));case 2:result = _context2.sent;\n                        arr = result.split('\\n');\n                        p = option.url.indexOf('://');\n                        p1 = option.url.indexOf('/', p + 3);\n                        host = option.url.substring(0, p1);\n                        id = option.id;\n                        path = option.dirpath;\n                        fullpath = systempath + option.dirpath;\n\n                        data = {\n                          newm3u8: '',\n                          streamlist: [],\n                          tslist: [],\n                          name: path + '/' + id,\n                          fullname: fullpath + '/' + id + '.m3u8' };\n\n\n                        i = 0;case 12:if (!(i < arr.length)) {_context2.next = 37;break;}if (!(\n                        arr[i] == '')) {_context2.next = 15;break;}return _context2.abrupt(\"continue\", 34);case 15:\n\n\n                        line = arr[i].trim();\n                        nextline = arr[i + 1].trim();\n                        data.newm3u8 += line + '\\n';if (!\n                        line.startsWith('#EXT')) {_context2.next = 34;break;}\n                        if (nextline.startsWith('/')) {\n                          url = host + nextline;\n                        } else if (nextline.indexOf('://') != -1) {\n                          url = nextline;\n                        } else {\n                          p = option.url.lastIndexOf(\"/\") + 1;\n                          url = option.url.substring(0, p) + nextline;\n                        }if (!(\n                        line.indexOf('X-STREAM-INF') != -1)) {_context2.next = 33;break;}\n                        o = JSON.parse(JSON.stringify(option));\n                        o.dirpath = path + '/' + id;\n                        o.id = i;\n                        o.url = url;_context2.next = 27;return (\n                          that.getinfo(o));case 27:d = _context2.sent;\n                        data.streamlist.push(d);\n                        data.newm3u8 += systempath + data.name + '/' + o.id + '.m3u8' + '\\n';\n                        i++;_context2.next = 34;break;case 33:\n                        if (line.indexOf('INF') != -1) {\n                          ts = {\n                            url: url,\n                            path: path + '/' + id + '/' + nextline.replace(/\\//g, \"\"),\n                            fullpath: fullpath + '/' + id + '/' + nextline.replace(/\\//g, \"\") };\n\n                          data.tslist.push(ts);\n                          data.newm3u8 += ts.fullpath + '\\n';\n                          i++;\n                        }case 34:i++;_context2.next = 12;break;case 37:return _context2.abrupt(\"return\",\n\n\n                        data);case 38:case \"end\":return _context2.stop();}}}, _callee2);}));return function (_x4) {return _ref2.apply(this, arguments);};}();\n\n\n            this.callback = function (callback, result) {\n              if (typeof callback == 'function') {\n                callback(result);\n              }\n            };\n\n            this.savem3u8 = function (savem3u8) {\n              if (savem3u8.streamlist.length > 0) {\n                for (var i in savem3u8.streamlist) {\n                  this.savem3u8(savem3u8.streamlist[i]);\n                }\n              }\n              writeFile(savem3u8.name + '.m3u8', savem3u8.newm3u8);\n            };\n\n            this.gettslist = function (arr) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];\n              if (arr.streamlist.length > 0) {\n                for (var i in arr.streamlist) {\n                  data = data.concat(this.gettslist(arr.streamlist[i]));\n                }\n              }\n              for (var _i in arr.tslist) {\n                data.push(arr.tslist[_i]);\n              }\n              return data;\n            };\n\n            this.startload = function () {\n              that.complete = 0;\n              plus.downloader.enumerate(function (e) {\n                __f__(\"log\", e, \" at utils/downm3u8.js:207\");\n                var urls = [];\n                var list = [];\n                for (var i in e) {\n                  urls.push(e[i].url);\n                  if (e[i].state == 4) {\n                    that.complete++;\n                    moveto(e[i]);\n                    that.callback(options.tsloadcallback, {\n                      code: 0,\n                      msg: '文件已下载',\n                      obj: e[i] });\n\n                  } else {\n                    list.push({\n                      url: e[i].url,\n                      filename: e[i].filename });\n\n                  }\n                }\n                for (var k in that.tslist) {\n                  if (urls.indexOf(that.tslist[k].url) != -1) {\n                    continue;\n                  } else {\n                    list.push({\n                      url: that.tslist[k].url,\n                      filename: that.tslist[k].path });\n\n                  }\n                }\n                that.loadlist = list;\n                that.target = 0;\n                for (var _i2 = 0; _i2 < options.meanwhile; _i2++) {\n                  that.startloadts(_i2);\n                }\n              }, -1);\n            };\n            this.startloadts = function (i) {\n              setTimeout(function () {\n                that.loadts();\n              }, i * 20);\n            };\n            this.loadts = function () {\n              var num = that.target;\n              that.target += 1;\n              var li = that.loadlist[num];\n              if (li) {\n                var dtask = plus.downloader.createDownload(li.url, {\n                  filename: li.filename.indexOf('_downloads/') == -1 ? '_downloads/' + li.filename : li.filename,\n                  timeout: options.timeout,\n                  retry: options.tryTepeat,\n                  retryInterval: options.retryInterval },\n                function (loadobj, status) {\n                  that.complete += 1;\n                  if (status != 200) {\n                    that.faillist.push({\n                      url: loadobj.url,\n                      filename: loadobj.filename });\n\n                    that.callback(options.tsloadcallback, {\n                      code: 1,\n                      msg: '下载失败',\n                      obj: loadobj });\n\n                  } else {\n                    moveto(loadobj);\n                    that.callback(options.tsloadcallback, {\n                      code: 0,\n                      msg: '下载成功',\n                      obj: loadobj });\n\n                  }\n                  if (that.complete >= that.tslist.length) {\n                    that.callback(options.finishcallback, {\n                      code: 0,\n                      msg: '下载完成',\n                      obj: {\n                        fail: that.faillist,\n                        path: systempath + options.dirpath + '/' + options.id + '.m3u8' } });\n\n\n                    var Interval = setInterval(function () {\n                      if (movenum <= 0) {\n                        movenum = 0;\n                        __f__(\"log\", 'clear', \" at utils/downm3u8.js:291\");\n                        plus.downloader.clear(-1);\n                        plus.io.requestFileSystem(plus.io.PUBLIC_DOWNLOADS, function (fobject) {\n                          fobject.root.getDirectory('_downloads', {}, function (fileEntry) {\n                            fileEntry.removeRecursively('', function (e) {\n                              __f__(\"log\", e, \" at utils/downm3u8.js:296\");\n                            });\n                          });\n                        });\n                        clearInterval(Interval);\n                      }\n                    }, 500);\n                  } else {\n                    that.loadts();\n                  }\n                });\n                dtask.start();\n              }\n            };\n            // try {\n            _context3.next = 16;return this.getinfo(options);case 16:m3u8info = _context3.sent;\n            loadlist = this.gettslist(m3u8info);\n            that.tslist = loadlist;\n            that.callback(options.initcallback, {\n              code: 0,\n              msg: '',\n              obj: that });\n\n            that.savem3u8(m3u8info);\n            that.startload();\n            // } catch (e) {\n            //     return\n            // }\n          case 22:case \"end\":return _context3.stop();}}}, _callee3, this);}));return _info.apply(this, arguments);}\n\nfunction downm3u8(options) {\n  this.dirpath = systempath + options.dirpath;\n\n  var m3u8 = new info(options);\n}\n\nmodule.exports = downm3u8;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 7)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdXRpbHMvZG93bm0zdTguanMiXSwibmFtZXMiOlsic3lzdGVtcGF0aCIsIm1vdmVudW0iLCJwbHVzIiwiaW8iLCJyZXF1ZXN0RmlsZVN5c3RlbSIsIlBSSVZBVEVfRE9DIiwiZm9iamVjdCIsInJvb3QiLCJnZXREaXJlY3RvcnkiLCJjcmVhdGUiLCJmaWxlRW50cnkiLCJ0b0xvY2FsVVJMIiwibW92ZXRvIiwibG9hZG9iaiIsIm5vd25hbWUiLCJmaWxlbmFtZSIsIm5ld25hbWUiLCJzdWJzdHIiLCJpbmRleE9mIiwibmV3cGF0aCIsImxhc3RJbmRleE9mIiwiRGlyZWN0b3J5IiwibW92ZSIsIm5ld2RpciIsIlBVQkxJQ19ET1dOTE9BRFMiLCJnZXRGaWxlIiwibW92ZVRvIiwiZSIsIndyaXRlRmlsZSIsInBhdGgiLCJ0ZXh0IiwiY3JlYXRlV3JpdGVyIiwid3JpdGVyIiwic2VlayIsIndyaXRlIiwiaW5mbyIsIm9wdGlvbnMiLCJ0c2xpc3QiLCJmYWlsbGlzdCIsImxvYWRsaXN0IiwiY29tcGxldGUiLCJ0aGF0IiwiY2FsbGJhY2siLCJpbml0Y2FsbGJhY2siLCJjb2RlIiwibXNnIiwib2JqIiwiZGVmYXVsdG9wIiwiZGlycGF0aCIsInRyeVRlcGVhdCIsIm1lYW53aGlsZSIsInRpbWVvdXQiLCJyZXRyeUludGVydmFsIiwiT2JqZWN0IiwiYXNzaWduIiwiYWpheCIsIm9wdGlvbiIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwidW5pIiwicmVxdWVzdCIsInVybCIsIm1ldGhvZCIsInN1Y2Nlc3MiLCJyZXMiLCJzdGF0dXNDb2RlIiwiZGF0YSIsImZhaWwiLCJnZXRpbmZvIiwicmVzdWx0IiwiYXJyIiwic3BsaXQiLCJwIiwicDEiLCJob3N0Iiwic3Vic3RyaW5nIiwiaWQiLCJmdWxscGF0aCIsIm5ld20zdTgiLCJzdHJlYW1saXN0IiwibmFtZSIsImZ1bGxuYW1lIiwiaSIsImxlbmd0aCIsImxpbmUiLCJ0cmltIiwibmV4dGxpbmUiLCJzdGFydHNXaXRoIiwibyIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsImQiLCJwdXNoIiwidHMiLCJyZXBsYWNlIiwic2F2ZW0zdTgiLCJnZXR0c2xpc3QiLCJjb25jYXQiLCJzdGFydGxvYWQiLCJkb3dubG9hZGVyIiwiZW51bWVyYXRlIiwidXJscyIsImxpc3QiLCJzdGF0ZSIsInRzbG9hZGNhbGxiYWNrIiwiayIsInRhcmdldCIsInN0YXJ0bG9hZHRzIiwic2V0VGltZW91dCIsImxvYWR0cyIsIm51bSIsImxpIiwiZHRhc2siLCJjcmVhdGVEb3dubG9hZCIsInJldHJ5Iiwic3RhdHVzIiwiZmluaXNoY2FsbGJhY2siLCJJbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXIiLCJyZW1vdmVSZWN1cnNpdmVseSIsImNsZWFySW50ZXJ2YWwiLCJzdGFydCIsIm0zdThpbmZvIiwiZG93bm0zdTgiLCJtM3U4IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Iml3QkFBQSxJQUFJQSxVQUFVLEdBQUcsRUFBakI7QUFDQSxJQUFJQyxPQUFPLEdBQUcsQ0FBZDtBQUNBO0FBQ0FDLElBQUksQ0FBQ0MsRUFBTCxDQUFRQyxpQkFBUixDQUEwQkYsSUFBSSxDQUFDQyxFQUFMLENBQVFFLFdBQWxDLEVBQStDLFVBQVNDLE9BQVQsRUFBa0I7QUFDN0Q7QUFDQUEsU0FBTyxDQUFDQyxJQUFSLENBQWFDLFlBQWIsQ0FBMEIsT0FBMUIsRUFBbUM7QUFDL0JDLFVBQU0sRUFBRSxJQUR1QixFQUFuQztBQUVHLFlBQVNDLFNBQVQsRUFBb0I7QUFDbkJWLGNBQVUsR0FBR1UsU0FBUyxDQUFDQyxVQUFWLEVBQWI7QUFDSCxHQUpEO0FBS0gsQ0FQRDs7QUFTQSxTQUFTQyxNQUFULENBQWdCQyxPQUFoQixFQUF5QjtBQUNyQlosU0FBTztBQUNQLE1BQUlhLE9BQU8sR0FBR0QsT0FBTyxDQUFDRSxRQUF0QjtBQUNBLE1BQUlDLE9BQU8sR0FBRyxVQUFVRixPQUFPLENBQUNHLE1BQVIsQ0FBZUgsT0FBTyxD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UUFoUVI7QUFpUVF0RixvQkFqUVIsR0FpUW1CLEtBQUsyRCxTQUFMLENBQWUyQixRQUFmLENBalFuQjtBQWtRSXBGLGdCQUFJLENBQUNKLE1BQUwsR0FBY0UsUUFBZDtBQUNBRSxnQkFBSSxDQUFDQyxRQUFMLENBQWNOLE9BQU8sQ0FBQ08sWUFBdEIsRUFBb0M7QUFDaENDLGtCQUFJLEVBQUUsQ0FEMEI7QUFFaENDLGlCQUFHLEVBQUUsRUFGMkI7QUFHaENDLGlCQUFHLEVBQUVMLElBSDJCLEVBQXBDOztBQUtBQSxnQkFBSSxDQUFDd0QsUUFBTCxDQUFjNEIsUUFBZDtBQUNBcEYsZ0JBQUksQ0FBQzJELFNBQUw7QUFDQTtBQUNBO0FBQ0E7QUE1UUosMkU7O0FBK1FBLFNBQVMwQixRQUFULENBQWtCMUYsT0FBbEIsRUFBMkI7QUFDdkIsT0FBS1ksT0FBTCxHQUFlaEQsVUFBVSxHQUFHb0MsT0FBTyxDQUFDWSxPQUFwQzs7QUFFQSxNQUFJK0UsSUFBSSxHQUFHLElBQUk1RixJQUFKLENBQVNDLE9BQVQsQ0FBWDtBQUNIOztBQUVENEYsTUFBTSxDQUFDQyxPQUFQLEdBQWlCSCxRQUFqQixDIiwiZmlsZSI6IjguanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgc3lzdGVtcGF0aCA9ICcnXHJcbnZhciBtb3ZlbnVtID0gMCBcclxuLy8gcGx1cy5kb3dubG9hZGVyLmNsZWFyKCk7Ly/muIXnqbrkuIvovb1cclxucGx1cy5pby5yZXF1ZXN0RmlsZVN5c3RlbShwbHVzLmlvLlBSSVZBVEVfRE9DLCBmdW5jdGlvbihmb2JqZWN0KSB7XHJcbiAgICAvLyBmcy5yb2905piv5qC555uu5b2V5pON5L2c5a+56LGhRGlyZWN0b3J5RW50cnlcclxuICAgIGZvYmplY3Qucm9vdC5nZXREaXJlY3RvcnkoJ19kb2MvJywge1xyXG4gICAgICAgIGNyZWF0ZTogdHJ1ZVxyXG4gICAgfSwgZnVuY3Rpb24oZmlsZUVudHJ5KSB7XHJcbiAgICAgICAgc3lzdGVtcGF0aCA9IGZpbGVFbnRyeS50b0xvY2FsVVJMKClcclxuICAgIH0pO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIG1vdmV0byhsb2Fkb2JqKSB7XHJcbiAgICBtb3ZlbnVtICsrO1xyXG4gICAgdmFyIG5vd25hbWUgPSBsb2Fkb2JqLmZpbGVuYW1lXHJcbiAgICB2YXIgbmV3bmFtZSA9ICdfZG9jLycgKyBub3duYW1lLnN1YnN0cihub3duYW1lLmluZGV4T2YoJy8nKSArIDEpXHJcbiAgICB2YXIgbmV3cGF0aCA9IG5ld25hbWUuc3Vic3RyKDAsIG5ld25hbWUubGFzdEluZGV4T2YoJy8nKSk7XHJcbiAgICBwbHVzLmlvLnJlcXVlc3RGaWxlU3lzdGVtKHBsdXMuaW8uUFJJVkFURV9ET0MsIGZ1bmN0aW9uKGZvYmplY3QpIHtcclxuICAgICAgICBmb2JqZWN0LnJvb3QuZ2V0RGlyZWN0b3J5KG5ld3BhdGgsIHtcclxuICAgICAgICAgICAgY3JlYXRlOiB0cnVlXHJcbiAgICAgICAgfSwgZnVuY3Rpb24oRGlyZWN0b3J5KSB7XHJcbiAgICAgICAgICAgIG1vdmUobm93bmFtZSwgRGlyZWN0b3J5KVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gbW92ZShub3duYW1lLCBuZXdkaXIpIHtcclxuICAgIHBsdXMuaW8ucmVxdWVzdEZpbGVTeXN0ZW0ocGx1cy5pby5QVUJMSUNfRE9XTkxPQURTLCBmdW5jdGlvbihmb2JqZWN0KSB7XHJcbiAgICAgICAgZm9iamVjdC5yb290LmdldEZpbGUobm93bmFtZSwge30sIGZ1bmN0aW9uKGZpbGVFbnRyeSkge1xyXG4gICAgICAgICAgICBmaWxlRW50cnkubW92ZVRvKG5ld2RpcilcclxuICAgICAgICAgICAgbW92ZW51bSAtLTtcclxuICAgICAgICB9LCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIG1vdmVudW0gLS07XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG5vd25hbWUpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiB3cml0ZUZpbGUocGF0aCwgdGV4dCkge1xyXG4gICAgcGx1cy5pby5yZXF1ZXN0RmlsZVN5c3RlbShwbHVzLmlvLlBSSVZBVEVfRE9DLCBmdW5jdGlvbihmb2JqZWN0KSB7XHJcbiAgICAgICAgLy8gZnMucm9vdOaYr+agueebruW9leaTjeS9nOWvueixoURpcmVjdG9yeUVudHJ5XHJcbiAgICAgICAgZm9iamVjdC5yb290LmdldEZpbGUoJ19kb2MvJyArIHBhdGgsIHtcclxuICAgICAgICAgICAgY3JlYXRlOiB0cnVlXHJcbiAgICAgICAgfSwgZnVuY3Rpb24oZmlsZUVudHJ5KSB7XHJcbiAgICAgICAgICAgIGZpbGVFbnRyeS5jcmVhdGVXcml0ZXIoZnVuY3Rpb24od3JpdGVyKSB7XHJcbiAgICAgICAgICAgICAgICB3cml0ZXIuc2VlaygwKVxyXG4gICAgICAgICAgICAgICAgd3JpdGVyLndyaXRlKHRleHQpO1xyXG4gICAgICAgICAgICB9LCBmdW5jdGlvbihlKSB7fSk7XHJcbiAgICAgICAgfSwgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gaW5mbyhvcHRpb25zKSB7XHJcbiAgICB0aGlzLnRzbGlzdCA9IHRoaXMuZmFpbGxpc3QgPSB0aGlzLmxvYWRsaXN0ID0gW107XHJcbiAgICB0aGlzLmNvbXBsZXRlID0gMFxyXG4gICAgdmFyIHRoYXQgPSB0aGlzXHJcbiAgICBpZiAoIW9wdGlvbnNbJ3VybCddIHx8IG9wdGlvbnNbJ3VybCddID09ICcnKSB7XHJcbiAgICAgICAgdGhhdC5jYWxsYmFjayhvcHRpb25zLmluaXRjYWxsYmFjaywge1xyXG4gICAgICAgICAgICBjb2RlOiAxLFxyXG4gICAgICAgICAgICBtc2c6ICfor7fovpPlhaV1cmwnLFxyXG4gICAgICAgICAgICBvYmo6ICcnXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2UgaWYgKCFvcHRpb25zWydpZCddIHx8IG9wdGlvbnNbJ2lkJ10gPT0gJycpIHtcclxuICAgICAgICB0aGF0LmNhbGxiYWNrKG9wdGlvbnMuaW5pdGNhbGxiYWNrLCB7XHJcbiAgICAgICAgICAgIGNvZGU6IDEsXHJcbiAgICAgICAgICAgIG1zZzogJ+ivt+i+k+WFpeaMh+Wumuagh+ivhicsXHJcbiAgICAgICAgICAgIG9iajogJydcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHZhciBkZWZhdWx0b3AgPSB7XHJcbiAgICAgICAgZGlycGF0aDogJ3ZpZGVvJyxcclxuICAgICAgICB0cnlUZXBlYXQ6IDMsXHJcbiAgICAgICAgbWVhbndoaWxlOiA1LFxyXG4gICAgICAgIHRpbWVvdXQ6IDMwLFxyXG4gICAgICAgIHJldHJ5SW50ZXJ2YWw6IDMwLFxyXG4gICAgfVxyXG4gICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oZGVmYXVsdG9wLCBvcHRpb25zKVxyXG5cclxuICAgIHRoaXMuYWpheCA9IGZ1bmN0aW9uKG9wdGlvbikge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyBmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgICAgdW5pLnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgICAgdXJsOiBvcHRpb24udXJsLFxyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5zdGF0dXNDb2RlICE9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5jYWxsYmFjayhvcHRpb24uaW5pdGNhbGxiYWNrLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnOiAn6K+35rGC5aSx6LSlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iajogcmVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXMuZGF0YS5pbmRleE9mKCcjRVhUTTNVJykgPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5jYWxsYmFjayhvcHRpb24uaW5pdGNhbGxiYWNrLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnOiAn6Kej5p6Q5aSx6LSlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iajogcmVzLmRhdGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXMuZGF0YSlcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBmYWlsKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdCgpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5jYWxsYmFjayhvcHRpb24uaW5pdGNhbGxiYWNrLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1zZzogJ+ino+aekOWksei0pScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iajogcmVzXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmdldGluZm8gPSBhc3luYyBmdW5jdGlvbihvcHRpb24pIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gYXdhaXQgdGhhdC5hamF4KG9wdGlvbilcclxuICAgICAgICB2YXIgYXJyID0gcmVzdWx0LnNwbGl0KCdcXG4nKTtcclxuICAgICAgICB2YXIgcCA9IG9wdGlvbi51cmwuaW5kZXhPZignOi8vJyk7XHJcbiAgICAgICAgdmFyIHAxID0gb3B0aW9uLnVybC5pbmRleE9mKCcvJywgcCArIDMpO1xyXG4gICAgICAgIHZhciBob3N0ID0gb3B0aW9uLnVybC5zdWJzdHJpbmcoMCwgcDEpO1xyXG4gICAgICAgIHZhciBpZCA9IG9wdGlvbi5pZFxyXG4gICAgICAgIHZhciBwYXRoID0gb3B0aW9uLmRpcnBhdGg7XHJcbiAgICAgICAgdmFyIGZ1bGxwYXRoID0gc3lzdGVtcGF0aCArIG9wdGlvbi5kaXJwYXRoO1xyXG5cclxuICAgICAgICB2YXIgZGF0YSA9IHtcclxuICAgICAgICAgICAgbmV3bTN1ODogJycsXHJcbiAgICAgICAgICAgIHN0cmVhbWxpc3Q6IFtdLFxyXG4gICAgICAgICAgICB0c2xpc3Q6IFtdLFxyXG4gICAgICAgICAgICBuYW1lOiBwYXRoICsgJy8nICsgaWQsXHJcbiAgICAgICAgICAgIGZ1bGxuYW1lOiBmdWxscGF0aCArICcvJyArIGlkICsgJy5tM3U4JyxcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChhcnJbaV0gPT0gJycpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBsaW5lID0gYXJyW2ldLnRyaW0oKVxyXG4gICAgICAgICAgICBsZXQgbmV4dGxpbmUgPSBhcnJbaSArIDFdLnRyaW0oKVxyXG4gICAgICAgICAgICBkYXRhLm5ld20zdTggKz0gbGluZSArICdcXG4nXHJcbiAgICAgICAgICAgIGlmIChsaW5lLnN0YXJ0c1dpdGgoJyNFWFQnKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG5leHRsaW5lLnN0YXJ0c1dpdGgoJy8nKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHVybCA9IGhvc3QgKyBuZXh0bGluZVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChuZXh0bGluZS5pbmRleE9mKCc6Ly8nKSAhPSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHVybCA9IG5leHRsaW5lXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwID0gb3B0aW9uLnVybC5sYXN0SW5kZXhPZihcIi9cIikgKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHVybCA9IG9wdGlvbi51cmwuc3Vic3RyaW5nKDAsIHApICsgbmV4dGxpbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAobGluZS5pbmRleE9mKCdYLVNUUkVBTS1JTkYnKSAhPSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBvID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvcHRpb24pKVxyXG4gICAgICAgICAgICAgICAgICAgIG8uZGlycGF0aCA9IHBhdGggKyAnLycgKyBpZFxyXG4gICAgICAgICAgICAgICAgICAgIG8uaWQgPSBpXHJcbiAgICAgICAgICAgICAgICAgICAgby51cmwgPSB1cmxcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZCA9IGF3YWl0IHRoYXQuZ2V0aW5mbyhvKVxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEuc3RyZWFtbGlzdC5wdXNoKGQpXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5uZXdtM3U4ICs9IHN5c3RlbXBhdGggKyBkYXRhLm5hbWUgKyAnLycgKyBvLmlkICsgJy5tM3U4JyArICdcXG4nXHJcbiAgICAgICAgICAgICAgICAgICAgaSsrXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGxpbmUuaW5kZXhPZignSU5GJykgIT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdHMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRoOiBwYXRoICsgJy8nICsgaWQgKyAnLycgKyBuZXh0bGluZS5yZXBsYWNlKC9cXC8vZywgXCJcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxwYXRoOiBmdWxscGF0aCArICcvJyArIGlkICsgJy8nICsgbmV4dGxpbmUucmVwbGFjZSgvXFwvL2csIFwiXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEudHNsaXN0LnB1c2godHMpXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5uZXdtM3U4ICs9IHRzLmZ1bGxwYXRoICsgJ1xcbidcclxuICAgICAgICAgICAgICAgICAgICBpKytcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGF0YVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY2FsbGJhY2sgPSBmdW5jdGlvbihjYWxsYmFjaywgcmVzdWx0KSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKHJlc3VsdClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zYXZlbTN1OCA9IGZ1bmN0aW9uKHNhdmVtM3U4KSB7XHJcbiAgICAgICAgaWYgKHNhdmVtM3U4LnN0cmVhbWxpc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpIGluIHNhdmVtM3U4LnN0cmVhbWxpc3QpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2F2ZW0zdTgoc2F2ZW0zdTguc3RyZWFtbGlzdFtpXSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB3cml0ZUZpbGUoc2F2ZW0zdTgubmFtZSArICcubTN1OCcsIHNhdmVtM3U4Lm5ld20zdTgpXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5nZXR0c2xpc3QgPSBmdW5jdGlvbihhcnIsIGRhdGEgPSBbXSkge1xyXG4gICAgICAgIGlmIChhcnIuc3RyZWFtbGlzdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgaW4gYXJyLnN0cmVhbWxpc3QpIHtcclxuICAgICAgICAgICAgICAgIGRhdGEgPSBkYXRhLmNvbmNhdCh0aGlzLmdldHRzbGlzdChhcnIuc3RyZWFtbGlzdFtpXSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgaW4gYXJyLnRzbGlzdCkge1xyXG4gICAgICAgICAgICBkYXRhLnB1c2goYXJyLnRzbGlzdFtpXSlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRhdGFcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnN0YXJ0bG9hZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRoYXQuY29tcGxldGUgPSAwXHJcbiAgICAgICAgcGx1cy5kb3dubG9hZGVyLmVudW1lcmF0ZShmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpXHJcbiAgICAgICAgICAgIHZhciB1cmxzID0gW11cclxuICAgICAgICAgICAgdmFyIGxpc3QgPSBbXVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpIGluIGUpIHtcclxuICAgICAgICAgICAgICAgIHVybHMucHVzaChlW2ldLnVybClcclxuICAgICAgICAgICAgICAgIGlmIChlW2ldLnN0YXRlID09IDQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGF0LmNvbXBsZXRlKytcclxuICAgICAgICAgICAgICAgICAgICBtb3ZldG8oZVtpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5jYWxsYmFjayhvcHRpb25zLnRzbG9hZGNhbGxiYWNrLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1zZzogJ+aWh+S7tuW3suS4i+i9vScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iajogZVtpXVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBsaXN0LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGVbaV0udXJsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlbmFtZTogZVtpXS5maWxlbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAobGV0IGsgaW4gdGhhdC50c2xpc3QpIHtcclxuICAgICAgICAgICAgICAgIGlmICh1cmxzLmluZGV4T2YodGhhdC50c2xpc3Rba10udXJsKSAhPSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBsaXN0LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IHRoYXQudHNsaXN0W2tdLnVybCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZW5hbWU6IHRoYXQudHNsaXN0W2tdLnBhdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGF0LmxvYWRsaXN0ID0gbGlzdFxyXG4gICAgICAgICAgICB0aGF0LnRhcmdldCA9IDBcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRpb25zLm1lYW53aGlsZTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGF0LnN0YXJ0bG9hZHRzKGkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAtMSlcclxuICAgIH1cclxuICAgIHRoaXMuc3RhcnRsb2FkdHMgPSBmdW5jdGlvbihpKSB7XHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdGhhdC5sb2FkdHMoKVxyXG4gICAgICAgIH0sIGkgKiAyMClcclxuICAgIH1cclxuICAgIHRoaXMubG9hZHRzID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIG51bSA9IHRoYXQudGFyZ2V0XHJcbiAgICAgICAgdGhhdC50YXJnZXQgKz0gMVxyXG4gICAgICAgIHZhciBsaSA9IHRoYXQubG9hZGxpc3RbbnVtXVxyXG4gICAgICAgIGlmIChsaSkge1xyXG4gICAgICAgICAgICB2YXIgZHRhc2sgPSBwbHVzLmRvd25sb2FkZXIuY3JlYXRlRG93bmxvYWQobGkudXJsLCB7XHJcbiAgICAgICAgICAgICAgICBmaWxlbmFtZTogbGkuZmlsZW5hbWUuaW5kZXhPZignX2Rvd25sb2Fkcy8nKSA9PSAtMSA/ICdfZG93bmxvYWRzLycgKyBsaS5maWxlbmFtZSA6IGxpLmZpbGVuYW1lLFxyXG4gICAgICAgICAgICAgICAgdGltZW91dDogb3B0aW9ucy50aW1lb3V0LFxyXG4gICAgICAgICAgICAgICAgcmV0cnk6IG9wdGlvbnMudHJ5VGVwZWF0LFxyXG4gICAgICAgICAgICAgICAgcmV0cnlJbnRlcnZhbDogb3B0aW9ucy5yZXRyeUludGVydmFsXHJcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uKGxvYWRvYmosIHN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgdGhhdC5jb21wbGV0ZSArPSAxXHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdHVzICE9IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQuZmFpbGxpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogbG9hZG9iai51cmwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVuYW1lOiBsb2Fkb2JqLmZpbGVuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB0aGF0LmNhbGxiYWNrKG9wdGlvbnMudHNsb2FkY2FsbGJhY2ssIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXNnOiAn5LiL6L295aSx6LSlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqOiBsb2Fkb2JqXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG1vdmV0byhsb2Fkb2JqKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGF0LmNhbGxiYWNrKG9wdGlvbnMudHNsb2FkY2FsbGJhY2ssIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXNnOiAn5LiL6L295oiQ5YqfJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqOiBsb2Fkb2JqXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhhdC5jb21wbGV0ZSA+PSB0aGF0LnRzbGlzdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGF0LmNhbGxiYWNrKG9wdGlvbnMuZmluaXNoY2FsbGJhY2ssIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXNnOiAn5LiL6L295a6M5oiQJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWlsOiB0aGF0LmZhaWxsaXN0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aDogc3lzdGVtcGF0aCArIG9wdGlvbnMuZGlycGF0aCArICcvJyArIG9wdGlvbnMuaWQgKyAnLm0zdTgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYobW92ZW51bSA8PSAwKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vdmVudW0gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NsZWFyJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsdXMuZG93bmxvYWRlci5jbGVhcigtMSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsdXMuaW8ucmVxdWVzdEZpbGVTeXN0ZW0ocGx1cy5pby5QVUJMSUNfRE9XTkxPQURTLCBmdW5jdGlvbihmb2JqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9iamVjdC5yb290LmdldERpcmVjdG9yeSgnX2Rvd25sb2FkcycsIHt9LCBmdW5jdGlvbihmaWxlRW50cnkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZUVudHJ5LnJlbW92ZVJlY3Vyc2l2ZWx5KCcnLGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKEludGVydmFsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgNTAwKVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGF0LmxvYWR0cygpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGR0YXNrLnN0YXJ0KClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyB0cnkge1xyXG4gICAgdmFyIG0zdThpbmZvID0gYXdhaXQgdGhpcy5nZXRpbmZvKG9wdGlvbnMpXHJcbiAgICB2YXIgbG9hZGxpc3QgPSB0aGlzLmdldHRzbGlzdChtM3U4aW5mbylcclxuICAgIHRoYXQudHNsaXN0ID0gbG9hZGxpc3RcclxuICAgIHRoYXQuY2FsbGJhY2sob3B0aW9ucy5pbml0Y2FsbGJhY2ssIHtcclxuICAgICAgICBjb2RlOiAwLFxyXG4gICAgICAgIG1zZzogJycsXHJcbiAgICAgICAgb2JqOiB0aGF0XHJcbiAgICB9KTtcclxuICAgIHRoYXQuc2F2ZW0zdTgobTN1OGluZm8pXHJcbiAgICB0aGF0LnN0YXJ0bG9hZCgpXHJcbiAgICAvLyB9IGNhdGNoIChlKSB7XHJcbiAgICAvLyAgICAgcmV0dXJuXHJcbiAgICAvLyB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRvd25tM3U4KG9wdGlvbnMpIHtcclxuICAgIHRoaXMuZGlycGF0aCA9IHN5c3RlbXBhdGggKyBvcHRpb25zLmRpcnBhdGhcclxuXHJcbiAgICB2YXIgbTN1OCA9IG5ldyBpbmZvKG9wdGlvbnMpXHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZG93bm0zdTg7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 10);

/***/ }),
/* 10 */
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ 11);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 11 */
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),
/* 12 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 13 */
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),
/* 14 */
/*!*****************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/work/project/HBuilder/downm3u8/App.vue ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 15);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 12);\nvar render, staticRenderFns, recyclableRender, components\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null,\n  false,\n  components,\n  renderjs\n)\n\ncomponent.options.__file = \"App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUN1RDtBQUNMOzs7QUFHbEQ7QUFDZ0w7QUFDaEwsZ0JBQWdCLHlMQUFVO0FBQzFCLEVBQUUseUVBQU07QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNlLGdGIiwiZmlsZSI6IjE0LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhRjpcXFxcSEJ1aWxkZXJYXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiQXBwLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///14\n");

/***/ }),
/* 15 */
/*!******************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/work/project/HBuilder/downm3u8/App.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ 16);\n/* harmony import */ var _F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_F_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTBrQixDQUFnQix5bUJBQUcsRUFBQyIsImZpbGUiOiIxNS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRjpcXFxcSEJ1aWxkZXJYXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRjpcXFxcSEJ1aWxkZXJYXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS02LTEhRjpcXFxcSEJ1aWxkZXJYXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUY6XFxcXEhCdWlsZGVyWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUY6XFxcXEhCdWlsZGVyWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUY6XFxcXEhCdWlsZGVyWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi0xIUY6XFxcXEhCdWlsZGVyWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLWFwcC1sb2FkZXJcXFxcdXNpbmctY29tcG9uZW50cy5qcyFGOlxcXFxIQnVpbGRlclhcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///15\n");

/***/ }),
/* 16 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Desktop/work/project/HBuilder/downm3u8/App.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _default =\n{\n  onLaunch: function onLaunch() {\n    __f__(\"log\", 'App Launch', \" at App.vue:4\");\n  },\n  onShow: function onShow() {\n    __f__(\"log\", 'App Show', \" at App.vue:7\");\n  },\n  onHide: function onHide() {\n    __f__(\"log\", 'App Hide', \" at App.vue:10\");\n  } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 7)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vQXBwLnZ1ZSJdLCJuYW1lcyI6WyJvbkxhdW5jaCIsIm9uU2hvdyIsIm9uSGlkZSJdLCJtYXBwaW5ncyI6IjtBQUNlO0FBQ2RBLFVBQVEsRUFBRSxvQkFBVztBQUNwQixpQkFBWSxZQUFaO0FBQ0EsR0FIYTtBQUlkQyxRQUFNLEVBQUUsa0JBQVc7QUFDbEIsaUJBQVksVUFBWjtBQUNBLEdBTmE7QUFPZEMsUUFBTSxFQUFFLGtCQUFXO0FBQ2xCLGlCQUFZLFVBQVo7QUFDQSxHQVRhLEUiLCJmaWxlIjoiMTYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBkZWZhdWx0IHtcblx0b25MYXVuY2g6IGZ1bmN0aW9uKCkge1xuXHRcdGNvbnNvbGUubG9nKCdBcHAgTGF1bmNoJylcblx0fSxcblx0b25TaG93OiBmdW5jdGlvbigpIHtcblx0XHRjb25zb2xlLmxvZygnQXBwIFNob3cnKVxuXHR9LFxuXHRvbkhpZGU6IGZ1bmN0aW9uKCkge1xuXHRcdGNvbnNvbGUubG9nKCdBcHAgSGlkZScpXG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///16\n");

/***/ })
],[[0,"app-config"]]]);
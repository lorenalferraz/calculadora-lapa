System.register(["jimu-core","jimu-ui","jimu-ui/advanced/setting-components"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./your-extensions/widgets/add-layers/src/setting/translations/default.ts":
/*!********************************************************************************!*\
  !*** ./your-extensions/widgets/add-layers/src/setting/translations/default.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    settings: 'Settings',
    zoomToLayer: 'Zoom to layer',
    selectMapWidget: 'Select Map widget'
});


/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ }),

/***/ "jimu-ui":
/*!**************************!*\
  !*** external "jimu-ui" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui__;

/***/ }),

/***/ "jimu-ui/advanced/setting-components":
/*!******************************************************!*\
  !*** external "jimu-ui/advanced/setting-components" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other entry modules.
(() => {
/*!******************************************!*\
  !*** ./jimu-core/lib/set-public-path.ts ***!
  \******************************************/
/**
 * Webpack will replace __webpack_public_path__ with __webpack_require__.p to set the public path dynamically.
 * The reason why we can't set the publicPath in webpack config is: we change the publicPath when download.
 * */
__webpack_require__.p = window.jimuConfig.baseUrl;

})();

// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!********************************************************************!*\
  !*** ./your-extensions/widgets/add-layers/src/setting/setting.tsx ***!
  \********************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ Setting)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui/advanced/setting-components */ "jimu-ui/advanced/setting-components");
/* harmony import */ var _translations_default__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./translations/default */ "./your-extensions/widgets/add-layers/src/setting/translations/default.ts");
/** @jsx jsx */
/**
  Licensing

  Copyright 2022 Esri

  Licensed under the Apache License, Version 2.0 (the "License"); You
  may not use this file except in compliance with the License. You may
  obtain a copy of the License at
  http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
  implied. See the License for the specific language governing
  permissions and limitations under the License.

  A copy of the license is available in the repository's
  LICENSE file.
*/




class Setting extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor() {
        super(...arguments);
        this.onZoomToLayerPropertyChange = (evt) => {
            this.props.onSettingChange({
                id: this.props.id,
                config: this.props.config.set('zoomToLayer', evt.currentTarget.checked)
            });
        };
        this.onMapWidgetSelected = (useMapWidgetIds) => {
            this.props.onSettingChange({
                id: this.props.id,
                useMapWidgetIds: useMapWidgetIds
            });
        };
    }
    render() {
        const style = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
      .widget-setting-addLayers {
        .checkbox-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 8px;
        }
      }
    `;
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { css: style },
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "widget-setting-addLayers" },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingSection, { className: "map-selector-section", title: this.props.intl.formatMessage({
                        id: 'mapWidgetLabel',
                        defaultMessage: _translations_default__WEBPACK_IMPORTED_MODULE_3__["default"].selectMapWidget
                    }) },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, null,
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.MapWidgetSelector, { onSelect: this.onMapWidgetSelected, useMapWidgetIds: this.props.useMapWidgetIds }))),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingSection, { title: this.props.intl.formatMessage({
                        id: 'settingsLabel',
                        defaultMessage: _translations_default__WEBPACK_IMPORTED_MODULE_3__["default"].settings
                    }) },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.SettingRow, null,
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "w-100 addLayers" },
                            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "checkbox-row" },
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", null,
                                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.FormattedMessage, { id: "zoomToLayer", defaultMessage: _translations_default__WEBPACK_IMPORTED_MODULE_3__["default"].zoomToLayer })),
                                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Switch, { checked: (this.props.config && this.props.config.zoomToLayer) ||
                                        false, onChange: this.onZoomToLayerPropertyChange }))))))));
    }
}
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9hZGQtbGF5ZXJzL2Rpc3Qvc2V0dGluZy9zZXR0aW5nLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUVBQWU7SUFDYixRQUFRLEVBQUUsVUFBVTtJQUNwQixXQUFXLEVBQUUsZUFBZTtJQUM1QixlQUFlLEVBQUUsbUJBQW1CO0NBQ3JDOzs7Ozs7Ozs7Ozs7QUNKRDs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7QUNBQTs7O0tBR0s7QUFDTCxxQkFBdUIsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKbkQsZUFBZTtBQUNmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFrQkU7QUFDMkQ7QUFFN0I7QUFLWTtBQUVRO0FBRXJDLE1BQU0sT0FBUSxTQUFRLDRDQUFLLENBQUMsYUFHMUM7SUFIRDs7UUFJRSxnQ0FBMkIsR0FBRyxDQUFDLEdBQXNDLEVBQUUsRUFBRTtZQUN2RSxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQztnQkFDekIsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDakIsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7YUFDeEUsQ0FBQztRQUNKLENBQUM7UUFFRCx3QkFBbUIsR0FBRyxDQUFDLGVBQXlCLEVBQUUsRUFBRTtZQUNsRCxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQztnQkFDekIsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDakIsZUFBZSxFQUFFLGVBQWU7YUFDakMsQ0FBQztRQUNKLENBQUM7SUFpRUgsQ0FBQztJQS9EQyxNQUFNO1FBQ0osTUFBTSxLQUFLLEdBQUcsOENBQUc7Ozs7Ozs7O0tBUWhCO1FBQ0QsT0FBTyxDQUNMLHdEQUFLLEdBQUcsRUFBRSxLQUFLO1lBQ2Isd0RBQUssU0FBUyxFQUFDLDBCQUEwQjtnQkFDdkMsK0NBQUMsK0VBQWMsSUFDYixTQUFTLEVBQUMsc0JBQXNCLEVBQ2hDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7d0JBQ25DLEVBQUUsRUFBRSxnQkFBZ0I7d0JBQ3BCLGNBQWMsRUFBRSw2REFBZSxDQUFDLGVBQWU7cUJBQ2hELENBQUM7b0JBT0YsK0NBQUMsMkVBQVU7d0JBQ1QsK0NBQUMsa0ZBQWlCLElBQ2hCLFFBQVEsRUFBRSxJQUFJLENBQUMsbUJBQW1CLEVBQ2xDLGVBQWUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FDM0MsQ0FDUyxDQUNFO2dCQUVqQiwrQ0FBQywrRUFBYyxJQUNiLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7d0JBQ25DLEVBQUUsRUFBRSxlQUFlO3dCQUNuQixjQUFjLEVBQUUsNkRBQWUsQ0FBQyxRQUFRO3FCQUN6QyxDQUFDO29CQUVGLCtDQUFDLDJFQUFVO3dCQUNULHdEQUFLLFNBQVMsRUFBQyxpQkFBaUI7NEJBQzlCLHdEQUFLLFNBQVMsRUFBQyxjQUFjO2dDQUMzQjtvQ0FDRSwrQ0FBQyx1REFBZ0IsSUFDZixFQUFFLEVBQUMsYUFBYSxFQUNoQixjQUFjLEVBQUUsNkRBQWUsQ0FBQyxXQUFXLEdBQzNDLENBQ0k7Z0NBQ1IsK0NBQUMsMkNBQU0sSUFDTCxPQUFPLEVBQ0wsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUM7d0NBQ3BELEtBQUssRUFFUCxRQUFRLEVBQUUsSUFBSSxDQUFDLDJCQUEyQixHQUMxQyxDQUNFLENBQ0YsQ0FDSyxDQUNFLENBQ2IsQ0FDRixDQUNQO0lBQ0gsQ0FBQztDQUNGO0FBRU8sU0FBUywyQkFBMkIsQ0FBQyxHQUFHLElBQUkscUJBQXVCLEdBQUcsR0FBRyxFQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvYWRkLWxheWVycy9zcmMvc2V0dGluZy90cmFuc2xhdGlvbnMvZGVmYXVsdC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aS9hZHZhbmNlZC9zZXR0aW5nLWNvbXBvbmVudHNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2FkZC1sYXllcnMvc3JjL3NldHRpbmcvc2V0dGluZy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xyXG4gIHNldHRpbmdzOiAnU2V0dGluZ3MnLFxyXG4gIHpvb21Ub0xheWVyOiAnWm9vbSB0byBsYXllcicsXHJcbiAgc2VsZWN0TWFwV2lkZ2V0OiAnU2VsZWN0IE1hcCB3aWRnZXQnXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfYWR2YW5jZWRfc2V0dGluZ19jb21wb25lbnRzX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbi8qKlxyXG4gIExpY2Vuc2luZ1xyXG5cclxuICBDb3B5cmlnaHQgMjAyMiBFc3JpXHJcblxyXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IFlvdVxyXG4gIG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5XHJcbiAgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvclxyXG4gIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZ1xyXG4gIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuXHJcbiAgQSBjb3B5IG9mIHRoZSBsaWNlbnNlIGlzIGF2YWlsYWJsZSBpbiB0aGUgcmVwb3NpdG9yeSdzXHJcbiAgTElDRU5TRSBmaWxlLlxyXG4qL1xyXG5pbXBvcnQgeyBSZWFjdCwgRm9ybWF0dGVkTWVzc2FnZSwgY3NzLCBqc3ggfSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB0eXBlIHsgQWxsV2lkZ2V0U2V0dGluZ1Byb3BzIH0gZnJvbSAnamltdS1mb3ItYnVpbGRlcidcclxuaW1wb3J0IHsgU3dpdGNoIH0gZnJvbSAnamltdS11aSdcclxuaW1wb3J0IHtcclxuICBNYXBXaWRnZXRTZWxlY3RvcixcclxuICBTZXR0aW5nU2VjdGlvbixcclxuICBTZXR0aW5nUm93XHJcbn0gZnJvbSAnamltdS11aS9hZHZhbmNlZC9zZXR0aW5nLWNvbXBvbmVudHMnXHJcbmltcG9ydCB0eXBlIHsgSU1Db25maWcgfSBmcm9tICcuLi9jb25maWcnXHJcbmltcG9ydCBkZWZhdWx0TWVzc2FnZXMgZnJvbSAnLi90cmFuc2xhdGlvbnMvZGVmYXVsdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNldHRpbmcgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PFxyXG5BbGxXaWRnZXRTZXR0aW5nUHJvcHM8SU1Db25maWc+LFxyXG5hbnlcclxuPiB7XHJcbiAgb25ab29tVG9MYXllclByb3BlcnR5Q2hhbmdlID0gKGV2dDogUmVhY3QuRm9ybUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgICB0aGlzLnByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XHJcbiAgICAgIGlkOiB0aGlzLnByb3BzLmlkLFxyXG4gICAgICBjb25maWc6IHRoaXMucHJvcHMuY29uZmlnLnNldCgnem9vbVRvTGF5ZXInLCBldnQuY3VycmVudFRhcmdldC5jaGVja2VkKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIG9uTWFwV2lkZ2V0U2VsZWN0ZWQgPSAodXNlTWFwV2lkZ2V0SWRzOiBzdHJpbmdbXSkgPT4ge1xyXG4gICAgdGhpcy5wcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xyXG4gICAgICBpZDogdGhpcy5wcm9wcy5pZCxcclxuICAgICAgdXNlTWFwV2lkZ2V0SWRzOiB1c2VNYXBXaWRnZXRJZHNcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICByZW5kZXIgKCkge1xyXG4gICAgY29uc3Qgc3R5bGUgPSBjc3NgXHJcbiAgICAgIC53aWRnZXQtc2V0dGluZy1hZGRMYXllcnMge1xyXG4gICAgICAgIC5jaGVja2JveC1yb3cge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIGBcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY3NzPXtzdHlsZX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtc2V0dGluZy1hZGRMYXllcnNcIj5cclxuICAgICAgICAgIDxTZXR0aW5nU2VjdGlvblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtYXAtc2VsZWN0b3Itc2VjdGlvblwiXHJcbiAgICAgICAgICAgIHRpdGxlPXt0aGlzLnByb3BzLmludGwuZm9ybWF0TWVzc2FnZSh7XHJcbiAgICAgICAgICAgICAgaWQ6ICdtYXBXaWRnZXRMYWJlbCcsXHJcbiAgICAgICAgICAgICAgZGVmYXVsdE1lc3NhZ2U6IGRlZmF1bHRNZXNzYWdlcy5zZWxlY3RNYXBXaWRnZXRcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHsvKlxyXG4gICAgICAgICAgICA8U2V0dGluZ1Jvdz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hcC1zZWxlY3Rvci1kZXNjcmlwdFwiPnt0aGlzLnByb3BzLmludGwuZm9ybWF0TWVzc2FnZSh7aWQ6ICdzb3VyY2VEZXNjcmlwdCcsIGRlZmF1bHRNZXNzYWdlOiAnc2V0IGFuIGludGVyYWN0aXZlIG1hcCAqKid9KX08L2Rpdj5cclxuICAgICAgICAgICAgPC9TZXR0aW5nUm93PlxyXG4gICAgICAgICAgICAqL31cclxuICAgICAgICAgICAgPFNldHRpbmdSb3c+XHJcbiAgICAgICAgICAgICAgPE1hcFdpZGdldFNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICBvblNlbGVjdD17dGhpcy5vbk1hcFdpZGdldFNlbGVjdGVkfVxyXG4gICAgICAgICAgICAgICAgdXNlTWFwV2lkZ2V0SWRzPXt0aGlzLnByb3BzLnVzZU1hcFdpZGdldElkc31cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L1NldHRpbmdSb3c+XHJcbiAgICAgICAgICA8L1NldHRpbmdTZWN0aW9uPlxyXG5cclxuICAgICAgICAgIDxTZXR0aW5nU2VjdGlvblxyXG4gICAgICAgICAgICB0aXRsZT17dGhpcy5wcm9wcy5pbnRsLmZvcm1hdE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICAgIGlkOiAnc2V0dGluZ3NMYWJlbCcsXHJcbiAgICAgICAgICAgICAgZGVmYXVsdE1lc3NhZ2U6IGRlZmF1bHRNZXNzYWdlcy5zZXR0aW5nc1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPFNldHRpbmdSb3c+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwMCBhZGRMYXllcnNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hlY2tib3gtcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ6b29tVG9MYXllclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0TWVzc2FnZT17ZGVmYXVsdE1lc3NhZ2VzLnpvb21Ub0xheWVyfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxTd2l0Y2hcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtcclxuICAgICAgICAgICAgICAgICAgICAgICh0aGlzLnByb3BzLmNvbmZpZyAmJiB0aGlzLnByb3BzLmNvbmZpZy56b29tVG9MYXllcikgfHxcclxuICAgICAgICAgICAgICAgICAgICAgIGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uWm9vbVRvTGF5ZXJQcm9wZXJ0eUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L1NldHRpbmdSb3c+XHJcbiAgICAgICAgICA8L1NldHRpbmdTZWN0aW9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXG4gZXhwb3J0IGZ1bmN0aW9uIF9fc2V0X3dlYnBhY2tfcHVibGljX3BhdGhfXyh1cmwpIHsgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB1cmwgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
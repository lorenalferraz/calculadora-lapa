System.register(["jimu-core","jimu-arcgis"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./your-extensions/widgets/add-layers/src/runtime/translations/default.ts":
/*!********************************************************************************!*\
  !*** ./your-extensions/widgets/add-layers/src/runtime/translations/default.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    _widgetLabel: 'Add Layers',
    addLayer: 'Add Layer',
    featureServiceUrl: 'Feature Service URL',
    instructions: 'Copie a FeatureService Layer URL here to add it to the map.'
});


/***/ }),

/***/ "jimu-arcgis":
/*!******************************!*\
  !*** external "jimu-arcgis" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__;

/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

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
/*!*******************************************************************!*\
  !*** ./your-extensions/widgets/add-layers/src/runtime/widget.tsx ***!
  \*******************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ Widget)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var _translations_default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./translations/default */ "./your-extensions/widgets/add-layers/src/runtime/translations/default.ts");
/* eslint-disable no-prototype-builtins */
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



class Widget extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor() {
        super(...arguments);
        this.state = {
            featureServiceUrlInput: '',
            jimuMapView: null
        };
        // Every time the input box value changes, this function gets called.
        // We set our component's state so we can use the value in the formSubmit function.
        this.handleFeatureServiceUrlInputChange = (event) => {
            this.setState({
                featureServiceUrlInput: event.target.value
            });
        };
        this.formSubmit = (evt) => {
            evt.preventDefault();
            // Error cases
            if (!this.state.jimuMapView) {
                // Data Source was not configured - we cannot do anything.
                console.error('Please configure a Data Source with the widget.');
                return;
            }
            if (this.state.featureServiceUrlInput === '') {
                // Nothing was typed into the box!
                alert('Please copy/paste in a FeatureService URL');
                return;
            }
            // Lazy-loading (only load if/when needed) the ArcGIS API for JavaScript modules
            // that we need - only once the "Add Layer" button is pressed.
            (0,jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.loadArcGISJSAPIModules)([
                'esri/layers/FeatureLayer',
                'esri/geometry/SpatialReference'
            ]).then((modules) => {
                [this.FeatureLayer, this.SpatialReference] = modules;
                // First create the Feature Layer from the URL that is in the box.
                const layer = new this.FeatureLayer({
                    url: this.state.featureServiceUrlInput
                });
                // Add the layer to the map (accessed through the Experience Builder Data Source)
                this.state.jimuMapView.view.map.add(layer);
                // After the layer is created, zoom to the layer's extent, if the setting is set for that.
                layer.on('layerview-create', (event) => {
                    if (this.props.config.hasOwnProperty('zoomToLayer') &&
                        this.props.config.zoomToLayer) {
                        const query = layer.createQuery();
                        query.where = '1=1';
                        query.outSpatialReference = new this.SpatialReference({
                            wkid: 102100
                        });
                        layer.queryExtent(query).then((results) => {
                            this.state.jimuMapView.view.extent = results.extent;
                        });
                    }
                    // Process of adding the layer is complete - remove the layer URL from the box so we can add another
                    this.setState({
                        featureServiceUrlInput: ''
                    });
                });
            });
        };
    }
    render() {
        var _a;
        const style = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
      form > div {
        display: flex;
        justify-content: space-between;
        input {
          width: 100%;
        }
        button {
          min-width: 100px;
        }
      }
    `;
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "widget-addLayers jimu-widget p-2", css: style },
            this.props.hasOwnProperty('useMapWidgetIds') &&
                this.props.useMapWidgetIds &&
                this.props.useMapWidgetIds.length === 1 && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.JimuMapViewComponent, { useMapWidgetId: (_a = this.props.useMapWidgetIds) === null || _a === void 0 ? void 0 : _a[0], onActiveViewChange: (jmv) => {
                    this.setState({
                        jimuMapView: jmv
                    });
                } })),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", null, _translations_default__WEBPACK_IMPORTED_MODULE_2__["default"].instructions),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("form", { onSubmit: this.formSubmit },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null,
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "text", placeholder: _translations_default__WEBPACK_IMPORTED_MODULE_2__["default"].featureServiceUrl, value: this.state.featureServiceUrlInput, onChange: this.handleFeatureServiceUrlInputChange }),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", null, _translations_default__WEBPACK_IMPORTED_MODULE_2__["default"].addLayer)))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9hZGQtbGF5ZXJzL2Rpc3QvcnVudGltZS93aWRnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlFQUFlO0lBQ2IsWUFBWSxFQUFFLFlBQVk7SUFDMUIsUUFBUSxFQUFFLFdBQVc7SUFDckIsaUJBQWlCLEVBQUUscUJBQXFCO0lBQ3hDLFlBQVksRUFDViw2REFBNkQ7Q0FDaEU7Ozs7Ozs7Ozs7OztBQ05EOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7OztBQ0FBOzs7S0FHSztBQUNMLHFCQUF1QixHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSm5ELDBDQUEwQztBQUMxQyxlQUFlO0FBQ2Y7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWtCRTtBQUM4RDtBQUs1QztBQUlnQztBQU9yQyxNQUFNLE1BQU8sU0FBUSw0Q0FBSyxDQUFDLGFBR3pDO0lBSEQ7O1FBVUUsVUFBSyxHQUFHO1lBQ04sc0JBQXNCLEVBQUUsRUFBRTtZQUMxQixXQUFXLEVBQUUsSUFBSTtTQUNsQjtRQUVELHFFQUFxRTtRQUNyRSxtRkFBbUY7UUFDbkYsdUNBQWtDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUM3QyxJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUNaLHNCQUFzQixFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSzthQUMzQyxDQUFD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LEdBQ0QsQ0FDTDtZQUVELDBEQUFJLDZEQUFlLENBQUMsWUFBWSxDQUFLO1lBRXJDLHlEQUFNLFFBQVEsRUFBRSxJQUFJLENBQUMsVUFBVTtnQkFDN0I7b0JBQ0UsMERBQ0UsSUFBSSxFQUFDLE1BQU0sRUFDWCxXQUFXLEVBQUUsNkRBQWUsQ0FBQyxpQkFBaUIsRUFDOUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsc0JBQXNCLEVBQ3hDLFFBQVEsRUFBRSxJQUFJLENBQUMsa0NBQWtDLEdBQ2pEO29CQUNGLCtEQUFTLDZEQUFlLENBQUMsUUFBUSxDQUFVLENBQ3ZDLENBQ0QsQ0FDSCxDQUNQO0lBQ0gsQ0FBQztDQUNGO0FBRU8sU0FBUywyQkFBMkIsQ0FBQyxHQUFHLElBQUkscUJBQXVCLEdBQUcsR0FBRyxFQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvYWRkLWxheWVycy9zcmMvcnVudGltZS90cmFuc2xhdGlvbnMvZGVmYXVsdC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtYXJjZ2lzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2FkZC1sYXllcnMvc3JjL3J1bnRpbWUvd2lkZ2V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XHJcbiAgX3dpZGdldExhYmVsOiAnQWRkIExheWVycycsXHJcbiAgYWRkTGF5ZXI6ICdBZGQgTGF5ZXInLFxyXG4gIGZlYXR1cmVTZXJ2aWNlVXJsOiAnRmVhdHVyZSBTZXJ2aWNlIFVSTCcsXHJcbiAgaW5zdHJ1Y3Rpb25zOlxyXG4gICAgJ0NvcGllIGEgRmVhdHVyZVNlcnZpY2UgTGF5ZXIgVVJMIGhlcmUgdG8gYWRkIGl0IHRvIHRoZSBtYXAuJ1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2FyY2dpc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgKi9cclxuLyoqIEBqc3gganN4ICovXHJcbi8qKlxyXG4gIExpY2Vuc2luZ1xyXG5cclxuICBDb3B5cmlnaHQgMjAyMiBFc3JpXHJcblxyXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IFlvdVxyXG4gIG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5XHJcbiAgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvclxyXG4gIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZ1xyXG4gIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuXHJcbiAgQSBjb3B5IG9mIHRoZSBsaWNlbnNlIGlzIGF2YWlsYWJsZSBpbiB0aGUgcmVwb3NpdG9yeSdzXHJcbiAgTElDRU5TRSBmaWxlLlxyXG4qL1xyXG5pbXBvcnQgeyBSZWFjdCwgdHlwZSBBbGxXaWRnZXRQcm9wcywgY3NzLCBqc3ggfSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB7XHJcbiAgbG9hZEFyY0dJU0pTQVBJTW9kdWxlcyxcclxuICBKaW11TWFwVmlld0NvbXBvbmVudCxcclxuICB0eXBlIEppbXVNYXBWaWV3XHJcbn0gZnJvbSAnamltdS1hcmNnaXMnXHJcblxyXG5pbXBvcnQgdHlwZSB7IElNQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJ1xyXG5cclxuaW1wb3J0IGRlZmF1bHRNZXNzYWdlcyBmcm9tICcuL3RyYW5zbGF0aW9ucy9kZWZhdWx0J1xyXG5cclxuaW50ZXJmYWNlIElTdGF0ZSB7XHJcbiAgZmVhdHVyZVNlcnZpY2VVcmxJbnB1dDogc3RyaW5nXHJcbiAgamltdU1hcFZpZXc6IEppbXVNYXBWaWV3XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdpZGdldCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8XHJcbkFsbFdpZGdldFByb3BzPElNQ29uZmlnPixcclxuSVN0YXRlXHJcbj4ge1xyXG4gIC8vIEdpdmUgdHlwZXMgdG8gdGhlIG1vZHVsZXMgd2UgaW1wb3J0IGZyb20gdGhlIEFyY0dJUyBBUEkgZm9yIEphdmFTY3JpcHRcclxuICAvLyB0byB0ZWxsIFR5cGVTY3JpcHQgd2hhdCB0eXBlcyB0aGV5IGFyZS5cclxuICBGZWF0dXJlTGF5ZXI6IHR5cGVvZiBfX2VzcmkuRmVhdHVyZUxheWVyXHJcbiAgUXVlcnk6IHR5cGVvZiBfX2VzcmkuUXVlcnlcclxuICBTcGF0aWFsUmVmZXJlbmNlOiB0eXBlb2YgX19lc3JpLlNwYXRpYWxSZWZlcmVuY2VcclxuXHJcbiAgc3RhdGUgPSB7XHJcbiAgICBmZWF0dXJlU2VydmljZVVybElucHV0OiAnJyxcclxuICAgIGppbXVNYXBWaWV3OiBudWxsXHJcbiAgfVxyXG5cclxuICAvLyBFdmVyeSB0aW1lIHRoZSBpbnB1dCBib3ggdmFsdWUgY2hhbmdlcywgdGhpcyBmdW5jdGlvbiBnZXRzIGNhbGxlZC5cclxuICAvLyBXZSBzZXQgb3VyIGNvbXBvbmVudCdzIHN0YXRlIHNvIHdlIGNhbiB1c2UgdGhlIHZhbHVlIGluIHRoZSBmb3JtU3VibWl0IGZ1bmN0aW9uLlxyXG4gIGhhbmRsZUZlYXR1cmVTZXJ2aWNlVXJsSW5wdXRDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBmZWF0dXJlU2VydmljZVVybElucHV0OiBldmVudC50YXJnZXQudmFsdWVcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBmb3JtU3VibWl0ID0gKGV2dCkgPT4ge1xyXG4gICAgZXZ0LnByZXZlbnREZWZhdWx0KClcclxuXHJcbiAgICAvLyBFcnJvciBjYXNlc1xyXG4gICAgaWYgKCF0aGlzLnN0YXRlLmppbXVNYXBWaWV3KSB7XHJcbiAgICAgIC8vIERhdGEgU291cmNlIHdhcyBub3QgY29uZmlndXJlZCAtIHdlIGNhbm5vdCBkbyBhbnl0aGluZy5cclxuICAgICAgY29uc29sZS5lcnJvcignUGxlYXNlIGNvbmZpZ3VyZSBhIERhdGEgU291cmNlIHdpdGggdGhlIHdpZGdldC4nKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGlmICh0aGlzLnN0YXRlLmZlYXR1cmVTZXJ2aWNlVXJsSW5wdXQgPT09ICcnKSB7XHJcbiAgICAgIC8vIE5vdGhpbmcgd2FzIHR5cGVkIGludG8gdGhlIGJveCFcclxuICAgICAgYWxlcnQoJ1BsZWFzZSBjb3B5L3Bhc3RlIGluIGEgRmVhdHVyZVNlcnZpY2UgVVJMJylcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gTGF6eS1sb2FkaW5nIChvbmx5IGxvYWQgaWYvd2hlbiBuZWVkZWQpIHRoZSBBcmNHSVMgQVBJIGZvciBKYXZhU2NyaXB0IG1vZHVsZXNcclxuICAgIC8vIHRoYXQgd2UgbmVlZCAtIG9ubHkgb25jZSB0aGUgXCJBZGQgTGF5ZXJcIiBidXR0b24gaXMgcHJlc3NlZC5cclxuICAgIGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMoW1xyXG4gICAgICAnZXNyaS9sYXllcnMvRmVhdHVyZUxheWVyJyxcclxuICAgICAgJ2VzcmkvZ2VvbWV0cnkvU3BhdGlhbFJlZmVyZW5jZSdcclxuICAgIF0pLnRoZW4oKG1vZHVsZXMpID0+IHtcclxuICAgICAgW3RoaXMuRmVhdHVyZUxheWVyLCB0aGlzLlNwYXRpYWxSZWZlcmVuY2VdID0gbW9kdWxlc1xyXG5cclxuICAgICAgLy8gRmlyc3QgY3JlYXRlIHRoZSBGZWF0dXJlIExheWVyIGZyb20gdGhlIFVSTCB0aGF0IGlzIGluIHRoZSBib3guXHJcbiAgICAgIGNvbnN0IGxheWVyID0gbmV3IHRoaXMuRmVhdHVyZUxheWVyKHtcclxuICAgICAgICB1cmw6IHRoaXMuc3RhdGUuZmVhdHVyZVNlcnZpY2VVcmxJbnB1dFxyXG4gICAgICB9KVxyXG5cclxuICAgICAgLy8gQWRkIHRoZSBsYXllciB0byB0aGUgbWFwIChhY2Nlc3NlZCB0aHJvdWdoIHRoZSBFeHBlcmllbmNlIEJ1aWxkZXIgRGF0YSBTb3VyY2UpXHJcbiAgICAgIHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldy5tYXAuYWRkKGxheWVyKVxyXG5cclxuICAgICAgLy8gQWZ0ZXIgdGhlIGxheWVyIGlzIGNyZWF0ZWQsIHpvb20gdG8gdGhlIGxheWVyJ3MgZXh0ZW50LCBpZiB0aGUgc2V0dGluZyBpcyBzZXQgZm9yIHRoYXQuXHJcbiAgICAgIGxheWVyLm9uKCdsYXllcnZpZXctY3JlYXRlJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgdGhpcy5wcm9wcy5jb25maWcuaGFzT3duUHJvcGVydHkoJ3pvb21Ub0xheWVyJykgJiZcclxuICAgICAgICAgIHRoaXMucHJvcHMuY29uZmlnLnpvb21Ub0xheWVyXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBjb25zdCBxdWVyeSA9IGxheWVyLmNyZWF0ZVF1ZXJ5KClcclxuICAgICAgICAgIHF1ZXJ5LndoZXJlID0gJzE9MSdcclxuICAgICAgICAgIHF1ZXJ5Lm91dFNwYXRpYWxSZWZlcmVuY2UgPSBuZXcgdGhpcy5TcGF0aWFsUmVmZXJlbmNlKHtcclxuICAgICAgICAgICAgd2tpZDogMTAyMTAwXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgbGF5ZXIucXVlcnlFeHRlbnQocXVlcnkpLnRoZW4oKHJlc3VsdHMpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3LmV4dGVudCA9IHJlc3VsdHMuZXh0ZW50XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gUHJvY2VzcyBvZiBhZGRpbmcgdGhlIGxheWVyIGlzIGNvbXBsZXRlIC0gcmVtb3ZlIHRoZSBsYXllciBVUkwgZnJvbSB0aGUgYm94IHNvIHdlIGNhbiBhZGQgYW5vdGhlclxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgZmVhdHVyZVNlcnZpY2VVcmxJbnB1dDogJydcclxuICAgICAgICB9KVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHJlbmRlciAoKSB7XHJcbiAgICBjb25zdCBzdHlsZSA9IGNzc2BcclxuICAgICAgZm9ybSA+IGRpdiB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICBtaW4td2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgYFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtYWRkTGF5ZXJzIGppbXUtd2lkZ2V0IHAtMlwiIGNzcz17c3R5bGV9PlxyXG4gICAgICAgIHt0aGlzLnByb3BzLmhhc093blByb3BlcnR5KCd1c2VNYXBXaWRnZXRJZHMnKSAmJlxyXG4gICAgICAgICAgdGhpcy5wcm9wcy51c2VNYXBXaWRnZXRJZHMgJiZcclxuICAgICAgICAgIHRoaXMucHJvcHMudXNlTWFwV2lkZ2V0SWRzLmxlbmd0aCA9PT0gMSAmJiAoXHJcbiAgICAgICAgICAgIDxKaW11TWFwVmlld0NvbXBvbmVudFxyXG4gICAgICAgICAgICAgIHVzZU1hcFdpZGdldElkPXt0aGlzLnByb3BzLnVzZU1hcFdpZGdldElkcz8uWzBdfVxyXG4gICAgICAgICAgICAgIG9uQWN0aXZlVmlld0NoYW5nZT17KGptdjogSmltdU1hcFZpZXcpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICBqaW11TWFwVmlldzogam12XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAgPHA+e2RlZmF1bHRNZXNzYWdlcy5pbnN0cnVjdGlvbnN9PC9wPlxyXG5cclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5mb3JtU3VibWl0fT5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17ZGVmYXVsdE1lc3NhZ2VzLmZlYXR1cmVTZXJ2aWNlVXJsfVxyXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmZlYXR1cmVTZXJ2aWNlVXJsSW5wdXR9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlRmVhdHVyZVNlcnZpY2VVcmxJbnB1dENoYW5nZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGJ1dHRvbj57ZGVmYXVsdE1lc3NhZ2VzLmFkZExheWVyfTwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXG4gZXhwb3J0IGZ1bmN0aW9uIF9fc2V0X3dlYnBhY2tfcHVibGljX3BhdGhfXyh1cmwpIHsgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB1cmwgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
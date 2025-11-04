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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9hZGQtbGF5ZXJzL2Rpc3QvcnVudGltZS93aWRnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlFQUFlO0lBQ2IsWUFBWSxFQUFFLFlBQVk7SUFDMUIsUUFBUSxFQUFFLFdBQVc7SUFDckIsaUJBQWlCLEVBQUUscUJBQXFCO0lBQ3hDLFlBQVksRUFDViw2REFBNkQ7Q0FDaEU7Ozs7Ozs7Ozs7OztBQ05EOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7OztBQ0FBOzs7S0FHSztBQUNMLHFCQUF1QixHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSm5ELDBDQUEwQztBQUMxQyxlQUFlO0FBQ2Y7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWtCRTtBQUM4RDtBQUs1QztBQUlnQztBQU9yQyxNQUFNLE1BQU8sU0FBUSw0Q0FBSyxDQUFDLGFBR3pDO0lBSEQ7O1FBVUUsVUFBSyxHQUFHO1lBQ04sc0JBQXNCLEVBQUUsRUFBRTtZQUMxQixXQUFXLEVBQUUsSUFBSTtTQUNsQjtRQUVELHFFQUFxRTtRQUNyRSxtRkFBbUY7UUFDbkYsdUNBQWtDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUM3QyxJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUNaLHNCQUFzQixFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSzthQUMzQyxDQUFDO1FBQ0osQ0FBQztRQUVELGVBQVUsR0FBRyxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ25CLEdBQUcsQ0FBQyxjQUFjLEVBQUU7WUFFcEIsY0FBYztZQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUM1QiwwREFBMEQ7Z0JBQzFELE9BQU8sQ0FBQyxLQUFLLENBQUMsaURBQWlELENBQUM7Z0JBQ2hFLE9BQU07WUFDUixDQUFDO1lBQ0QsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLHNCQUFzQixLQUFLLEVBQUUsRUFBRSxDQUFDO2dCQUM3QyxrQ0FBa0M7Z0JBQ2xDLEtBQUssQ0FBQywyQ0FBMkMsQ0FBQztnQkFDbEQsT0FBTTtZQUNSLENBQUM7WUFFRCxnRkFBZ0Y7WUFDaEYsOERBQThEO1lBQzlELG1FQUFzQixDQUFDO2dCQUNyQiwwQkFBMEI7Z0JBQzFCLGdDQUFnQzthQUNqQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7Z0JBQ2xCLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxPQUFPO2dCQUVwRCxrRUFBa0U7Z0JBQ2xFLE1BQU0sS0FBSyxHQUFHLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQztvQkFDbEMsR0FBRyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsc0JBQXNCO2lCQUN2QyxDQUFDO2dCQUVGLGlGQUFpRjtnQkFDakYsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO2dCQUUxQywwRkFBMEY7Z0JBQzFGLEtBQUssQ0FBQyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRTtvQkFDckMsSUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDO3dCQUMvQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQzdCLENBQUM7d0JBQ0QsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRTt3QkFDakMsS0FBSyxDQUFDLEtBQUssR0FBRyxLQUFLO3dCQUNuQixLQUFLLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUM7NEJBQ3BELElBQUksRUFBRSxNQUFNO3lCQUNiLENBQUM7d0JBQ0YsS0FBSyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTs0QkFDeEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTTt3QkFDckQsQ0FBQyxDQUFDO29CQUNKLENBQUM7b0JBRUQsb0dBQW9HO29CQUNwRyxJQUFJLENBQUMsUUFBUSxDQUFDO3dCQUNaLHNCQUFzQixFQUFFLEVBQUU7cUJBQzNCLENBQUM7Z0JBQ0osQ0FBQyxDQUFDO1lBQ0osQ0FBQyxDQUFDO1FBQ0osQ0FBQztJQThDSCxDQUFDO0lBNUNDLE1BQU07O1FBQ0osTUFBTSxLQUFLLEdBQUcsOENBQUc7Ozs7Ozs7Ozs7O0tBV2hCO1FBQ0QsT0FBTyxDQUNMLHdEQUFLLFNBQVMsRUFBQyxrQ0FBa0MsRUFBQyxHQUFHLEVBQUUsS0FBSztZQUN6RCxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQztnQkFDM0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlO2dCQUMxQixJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLENBQ3pDLCtDQUFDLDZEQUFvQixJQUNuQixjQUFjLEVBQUUsVUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLDBDQUFHLENBQUMsQ0FBQyxFQUMvQyxrQkFBa0IsRUFBRSxDQUFDLEdBQWdCLEVBQUUsRUFBRTtvQkFDdkMsSUFBSSxDQUFDLFFBQVEsQ0FBQzt3QkFDWixXQUFXLEVBQUUsR0FBRztxQkFDakIsQ0FBQztnQkFDSixDQUFDLEdBQ0QsQ0FDTDtZQUVELDBEQUFJLDZEQUFlLENBQUMsWUFBWSxDQUFLO1lBRXJDLHlEQUFNLFFBQVEsRUFBRSxJQUFJLENBQUMsVUFBVTtnQkFDN0I7b0JBQ0UsMERBQ0UsSUFBSSxFQUFDLE1BQU0sRUFDWCxXQUFXLEVBQUUsNkRBQWUsQ0FBQyxpQkFBaUIsRUFDOUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsc0JBQXNCLEVBQ3hDLFFBQVEsRUFBRSxJQUFJLENBQUMsa0NBQWtDLEdBQ2pEO29CQUNGLCtEQUFTLDZEQUFlLENBQUMsUUFBUSxDQUFVLENBQ3ZDLENBQ0QsQ0FDSCxDQUNQO0lBQ0gsQ0FBQztDQUNGO0FBRU8sU0FBUywyQkFBMkIsQ0FBQyxHQUFHLElBQUkscUJBQXVCLEdBQUcsR0FBRyxFQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvYWRkLWxheWVycy9zcmMvcnVudGltZS90cmFuc2xhdGlvbnMvZGVmYXVsdC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtYXJjZ2lzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2FkZC1sYXllcnMvc3JjL3J1bnRpbWUvd2lkZ2V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIF93aWRnZXRMYWJlbDogJ0FkZCBMYXllcnMnLFxuICBhZGRMYXllcjogJ0FkZCBMYXllcicsXG4gIGZlYXR1cmVTZXJ2aWNlVXJsOiAnRmVhdHVyZSBTZXJ2aWNlIFVSTCcsXG4gIGluc3RydWN0aW9uczpcbiAgICAnQ29waWUgYSBGZWF0dXJlU2VydmljZSBMYXllciBVUkwgaGVyZSB0byBhZGQgaXQgdG8gdGhlIG1hcC4nXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9hcmNnaXNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zICovXG4vKiogQGpzeCBqc3ggKi9cbi8qKlxuICBMaWNlbnNpbmdcblxuICBDb3B5cmlnaHQgMjAyMiBFc3JpXG5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgWW91XG4gIG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5XG4gIG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cbiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvclxuICBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmdcbiAgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuXG4gIEEgY29weSBvZiB0aGUgbGljZW5zZSBpcyBhdmFpbGFibGUgaW4gdGhlIHJlcG9zaXRvcnknc1xuICBMSUNFTlNFIGZpbGUuXG4qL1xuaW1wb3J0IHsgUmVhY3QsIHR5cGUgQWxsV2lkZ2V0UHJvcHMsIGNzcywganN4IH0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHtcbiAgbG9hZEFyY0dJU0pTQVBJTW9kdWxlcyxcbiAgSmltdU1hcFZpZXdDb21wb25lbnQsXG4gIHR5cGUgSmltdU1hcFZpZXdcbn0gZnJvbSAnamltdS1hcmNnaXMnXG5cbmltcG9ydCB0eXBlIHsgSU1Db25maWcgfSBmcm9tICcuLi9jb25maWcnXG5cbmltcG9ydCBkZWZhdWx0TWVzc2FnZXMgZnJvbSAnLi90cmFuc2xhdGlvbnMvZGVmYXVsdCdcblxuaW50ZXJmYWNlIElTdGF0ZSB7XG4gIGZlYXR1cmVTZXJ2aWNlVXJsSW5wdXQ6IHN0cmluZ1xuICBqaW11TWFwVmlldzogSmltdU1hcFZpZXdcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2lkZ2V0IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxcbkFsbFdpZGdldFByb3BzPElNQ29uZmlnPixcbklTdGF0ZVxuPiB7XG4gIC8vIEdpdmUgdHlwZXMgdG8gdGhlIG1vZHVsZXMgd2UgaW1wb3J0IGZyb20gdGhlIEFyY0dJUyBBUEkgZm9yIEphdmFTY3JpcHRcbiAgLy8gdG8gdGVsbCBUeXBlU2NyaXB0IHdoYXQgdHlwZXMgdGhleSBhcmUuXG4gIEZlYXR1cmVMYXllcjogdHlwZW9mIF9fZXNyaS5GZWF0dXJlTGF5ZXJcbiAgUXVlcnk6IHR5cGVvZiBfX2VzcmkuUXVlcnlcbiAgU3BhdGlhbFJlZmVyZW5jZTogdHlwZW9mIF9fZXNyaS5TcGF0aWFsUmVmZXJlbmNlXG5cbiAgc3RhdGUgPSB7XG4gICAgZmVhdHVyZVNlcnZpY2VVcmxJbnB1dDogJycsXG4gICAgamltdU1hcFZpZXc6IG51bGxcbiAgfVxuXG4gIC8vIEV2ZXJ5IHRpbWUgdGhlIGlucHV0IGJveCB2YWx1ZSBjaGFuZ2VzLCB0aGlzIGZ1bmN0aW9uIGdldHMgY2FsbGVkLlxuICAvLyBXZSBzZXQgb3VyIGNvbXBvbmVudCdzIHN0YXRlIHNvIHdlIGNhbiB1c2UgdGhlIHZhbHVlIGluIHRoZSBmb3JtU3VibWl0IGZ1bmN0aW9uLlxuICBoYW5kbGVGZWF0dXJlU2VydmljZVVybElucHV0Q2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBmZWF0dXJlU2VydmljZVVybElucHV0OiBldmVudC50YXJnZXQudmFsdWVcbiAgICB9KVxuICB9XG5cbiAgZm9ybVN1Ym1pdCA9IChldnQpID0+IHtcbiAgICBldnQucHJldmVudERlZmF1bHQoKVxuXG4gICAgLy8gRXJyb3IgY2FzZXNcbiAgICBpZiAoIXRoaXMuc3RhdGUuamltdU1hcFZpZXcpIHtcbiAgICAgIC8vIERhdGEgU291cmNlIHdhcyBub3QgY29uZmlndXJlZCAtIHdlIGNhbm5vdCBkbyBhbnl0aGluZy5cbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1BsZWFzZSBjb25maWd1cmUgYSBEYXRhIFNvdXJjZSB3aXRoIHRoZSB3aWRnZXQuJylcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBpZiAodGhpcy5zdGF0ZS5mZWF0dXJlU2VydmljZVVybElucHV0ID09PSAnJykge1xuICAgICAgLy8gTm90aGluZyB3YXMgdHlwZWQgaW50byB0aGUgYm94IVxuICAgICAgYWxlcnQoJ1BsZWFzZSBjb3B5L3Bhc3RlIGluIGEgRmVhdHVyZVNlcnZpY2UgVVJMJylcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIExhenktbG9hZGluZyAob25seSBsb2FkIGlmL3doZW4gbmVlZGVkKSB0aGUgQXJjR0lTIEFQSSBmb3IgSmF2YVNjcmlwdCBtb2R1bGVzXG4gICAgLy8gdGhhdCB3ZSBuZWVkIC0gb25seSBvbmNlIHRoZSBcIkFkZCBMYXllclwiIGJ1dHRvbiBpcyBwcmVzc2VkLlxuICAgIGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMoW1xuICAgICAgJ2VzcmkvbGF5ZXJzL0ZlYXR1cmVMYXllcicsXG4gICAgICAnZXNyaS9nZW9tZXRyeS9TcGF0aWFsUmVmZXJlbmNlJ1xuICAgIF0pLnRoZW4oKG1vZHVsZXMpID0+IHtcbiAgICAgIFt0aGlzLkZlYXR1cmVMYXllciwgdGhpcy5TcGF0aWFsUmVmZXJlbmNlXSA9IG1vZHVsZXNcblxuICAgICAgLy8gRmlyc3QgY3JlYXRlIHRoZSBGZWF0dXJlIExheWVyIGZyb20gdGhlIFVSTCB0aGF0IGlzIGluIHRoZSBib3guXG4gICAgICBjb25zdCBsYXllciA9IG5ldyB0aGlzLkZlYXR1cmVMYXllcih7XG4gICAgICAgIHVybDogdGhpcy5zdGF0ZS5mZWF0dXJlU2VydmljZVVybElucHV0XG4gICAgICB9KVxuXG4gICAgICAvLyBBZGQgdGhlIGxheWVyIHRvIHRoZSBtYXAgKGFjY2Vzc2VkIHRocm91Z2ggdGhlIEV4cGVyaWVuY2UgQnVpbGRlciBEYXRhIFNvdXJjZSlcbiAgICAgIHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldy5tYXAuYWRkKGxheWVyKVxuXG4gICAgICAvLyBBZnRlciB0aGUgbGF5ZXIgaXMgY3JlYXRlZCwgem9vbSB0byB0aGUgbGF5ZXIncyBleHRlbnQsIGlmIHRoZSBzZXR0aW5nIGlzIHNldCBmb3IgdGhhdC5cbiAgICAgIGxheWVyLm9uKCdsYXllcnZpZXctY3JlYXRlJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICB0aGlzLnByb3BzLmNvbmZpZy5oYXNPd25Qcm9wZXJ0eSgnem9vbVRvTGF5ZXInKSAmJlxuICAgICAgICAgIHRoaXMucHJvcHMuY29uZmlnLnpvb21Ub0xheWVyXG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnN0IHF1ZXJ5ID0gbGF5ZXIuY3JlYXRlUXVlcnkoKVxuICAgICAgICAgIHF1ZXJ5LndoZXJlID0gJzE9MSdcbiAgICAgICAgICBxdWVyeS5vdXRTcGF0aWFsUmVmZXJlbmNlID0gbmV3IHRoaXMuU3BhdGlhbFJlZmVyZW5jZSh7XG4gICAgICAgICAgICB3a2lkOiAxMDIxMDBcbiAgICAgICAgICB9KVxuICAgICAgICAgIGxheWVyLnF1ZXJ5RXh0ZW50KHF1ZXJ5KS50aGVuKChyZXN1bHRzKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcuZXh0ZW50ID0gcmVzdWx0cy5leHRlbnRcbiAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gUHJvY2VzcyBvZiBhZGRpbmcgdGhlIGxheWVyIGlzIGNvbXBsZXRlIC0gcmVtb3ZlIHRoZSBsYXllciBVUkwgZnJvbSB0aGUgYm94IHNvIHdlIGNhbiBhZGQgYW5vdGhlclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBmZWF0dXJlU2VydmljZVVybElucHV0OiAnJ1xuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCBzdHlsZSA9IGNzc2BcbiAgICAgIGZvcm0gPiBkaXYge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGlucHV0IHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIG1pbi13aWR0aDogMTAwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWFkZExheWVycyBqaW11LXdpZGdldCBwLTJcIiBjc3M9e3N0eWxlfT5cbiAgICAgICAge3RoaXMucHJvcHMuaGFzT3duUHJvcGVydHkoJ3VzZU1hcFdpZGdldElkcycpICYmXG4gICAgICAgICAgdGhpcy5wcm9wcy51c2VNYXBXaWRnZXRJZHMgJiZcbiAgICAgICAgICB0aGlzLnByb3BzLnVzZU1hcFdpZGdldElkcy5sZW5ndGggPT09IDEgJiYgKFxuICAgICAgICAgICAgPEppbXVNYXBWaWV3Q29tcG9uZW50XG4gICAgICAgICAgICAgIHVzZU1hcFdpZGdldElkPXt0aGlzLnByb3BzLnVzZU1hcFdpZGdldElkcz8uWzBdfVxuICAgICAgICAgICAgICBvbkFjdGl2ZVZpZXdDaGFuZ2U9eyhqbXY6IEppbXVNYXBWaWV3KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICBqaW11TWFwVmlldzogam12XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICl9XG5cbiAgICAgICAgPHA+e2RlZmF1bHRNZXNzYWdlcy5pbnN0cnVjdGlvbnN9PC9wPlxuXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmZvcm1TdWJtaXR9PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17ZGVmYXVsdE1lc3NhZ2VzLmZlYXR1cmVTZXJ2aWNlVXJsfVxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5mZWF0dXJlU2VydmljZVVybElucHV0fVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVGZWF0dXJlU2VydmljZVVybElucHV0Q2hhbmdlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxidXR0b24+e2RlZmF1bHRNZXNzYWdlcy5hZGRMYXllcn08L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbiBleHBvcnQgZnVuY3Rpb24gX19zZXRfd2VicGFja19wdWJsaWNfcGF0aF9fKHVybCkgeyBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHVybCB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
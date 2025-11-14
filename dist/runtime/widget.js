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

/***/ "./your-extensions/widgets/calculadora-lapa/src/runtime/translations/default.ts":
/*!**************************************************************************************!*\
  !*** ./your-extensions/widgets/calculadora-lapa/src/runtime/translations/default.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    _widgetLabel: 'Calculadora de Compensação',
    title: 'Calculadora de Compensação',
    quantidadeIDEA: 'Quantidade de IDEA\'s a analisar:',
    areaPropostaShapefile: 'Área Proposta (shapefile ZIP):',
    areaPropostaDesenho: 'Área Proposta (Desenho no mapa):',
    iniciarDesenho: 'Iniciar Desenho',
    executarAnalise: 'Executar Análise',
    limparAnalise: 'Limpar Análise',
    baixarRelatorio: 'Baixar Relatório',
    loading: 'Carregando...'
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames not based on template
/******/ 			if (chunkId === "vendors-node_modules_jszip_dist_jszip_min_js") return "widgets/chunks/vendors-node_modules_jszip_dist_jszip_min_js.js";
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "exb-client:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"widgets/calculadora-lapa/dist/runtime/widget": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
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
/*!*************************************************************************!*\
  !*** ./your-extensions/widgets/calculadora-lapa/src/runtime/widget.tsx ***!
  \*************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ Widget)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var _translations_default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./translations/default */ "./your-extensions/widgets/calculadora-lapa/src/runtime/translations/default.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
            jimuMapView: null,
            loading: false,
            progress: 0,
            quantidadeIDEA: 1,
            ideaValues: [''],
            shapefileFile: null,
            shapefileLayer: null,
            shapefileGeometry: null,
            drawnGeometry: null,
            sketchViewModel: null,
            graphicsLayer: null,
            analysisResult: null,
            reportUrl: null,
            drawingMode: false,
            jobId: null
        };
        // URL da ferramenta de geoprocessamento de calculadora de compensação
        this.GP_SERVICE_URL = 'https://meioambiente.sistemas.mpba.mp.br/server/rest/services/testeoutput/calculadora/GPServer';
        // URL do Portal/Server
        this.PORTAL_URL = 'https://meioambiente.sistemas.mpba.mp.br/server';
        // Nome da task específica dentro da GP
        this.GP_TASK_NAME = 'Simular Área de Compensação';
        // Token fornecido para autenticação
        this.GP_TOKEN = '_zND49dKhvn59tDT4Hq480F8IoVNvwFrgpJRWjyHRBGr8bYaKL_YyzRAy8fWCF-vKaBvjXhH2FuL6OQ0tSffAHebaQBFMN1CpOovsy8fz7U7o9BAvHRXTxi-p6QgvQqB';
        // Client Secret para autenticação OAuth2 (quando necessário renovar token)
        this.CLIENT_SECRET = 'f8c423423aa7446b8a17b30143f9b08a';
        this.componentDidUpdate = (prevProps, prevState) => {
            if (this.state.jimuMapView && !prevState.jimuMapView) {
                this.initializeSketch();
            }
        };
        this.componentWillUnmount = () => {
            if (this.state.sketchViewModel) {
                this.state.sketchViewModel.destroy();
            }
        };
        // Inicializa o Sketch para desenho no mapa
        this.initializeSketch = () => __awaiter(this, void 0, void 0, function* () {
            if (!this.state.jimuMapView || !this.state.jimuMapView.view) {
                return;
            }
            try {
                const modules = yield (0,jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.loadArcGISJSAPIModules)([
                    'esri/widgets/Sketch/SketchViewModel',
                    'esri/layers/GraphicsLayer',
                    'esri/geometry/Polygon'
                ]);
                const [SketchViewModel, GraphicsLayer, Polygon] = modules;
                this.SketchViewModel = SketchViewModel;
                this.GraphicsLayer = GraphicsLayer;
                this.Polygon = Polygon;
                // Cria uma camada de gráficos para o desenho
                const graphicsLayer = new this.GraphicsLayer();
                this.state.jimuMapView.view.map.add(graphicsLayer);
                // Cria o SketchViewModel
                const sketchViewModel = new this.SketchViewModel({
                    view: this.state.jimuMapView.view,
                    layer: graphicsLayer,
                    polygonSymbol: {
                        type: 'simple-fill',
                        color: [51, 51, 204, 0.2],
                        outline: {
                            color: [51, 51, 204, 1],
                            width: 2
                        }
                    }
                });
                // Listener para quando o desenho é completado
                sketchViewModel.on('create', (event) => {
                    if (event.state === 'complete') {
                        const geometry = event.graphic.geometry;
                        // Valida se a geometria tem rings válidos (para polígonos)
                        if (geometry && geometry.type === 'polygon') {
                            const polygon = geometry;
                            if (polygon.rings && polygon.rings.length > 0 && polygon.rings[0].length >= 3) {
                                console.log('=== GEOMETRIA CAPTURADA ===');
                                console.log('Tipo:', geometry.type);
                                console.log('SpatialReference:', geometry.spatialReference);
                                console.log('Número de rings:', polygon.rings.length);
                                // Mostra as coordenadas de cada ring
                                polygon.rings.forEach((ring, ringIndex) => {
                                    console.log(`--- Ring ${ringIndex + 1} (${ring.length} pontos) ---`);
                                    ring.forEach((point, pointIndex) => {
                                        console.log(`  Ponto ${pointIndex + 1}: [${point[0]}, ${point[1]}]`);
                                    });
                                });
                                // Calcula e mostra a área aproximada (se possível)
                                try {
                                    const extent = geometry.extent;
                                    if (extent) {
                                        const width = extent.width;
                                        const height = extent.height;
                                        console.log('Extent (bounding box):');
                                        console.log(`  Xmin: ${extent.xmin}, Ymin: ${extent.ymin}`);
                                        console.log(`  Xmax: ${extent.xmax}, Ymax: ${extent.ymax}`);
                                        console.log(`  Largura: ${width}, Altura: ${height}`);
                                    }
                                }
                                catch (e) {
                                    console.log('Não foi possível calcular extent');
                                }
                                this.setState({
                                    drawnGeometry: geometry,
                                    drawingMode: false
                                });
                                // Não precisa resetar - o SketchViewModel já está pronto para um novo desenho
                            }
                            else {
                                alert('Por favor, desenhe um polígono válido com pelo menos 3 pontos.');
                                // Cancela o desenho inválido
                                if (sketchViewModel.state !== 'ready') {
                                    sketchViewModel.cancel();
                                }
                            }
                        }
                        else {
                            this.setState({
                                drawnGeometry: geometry,
                                drawingMode: false
                            });
                            // Não precisa resetar - o SketchViewModel já está pronto para um novo desenho
                        }
                    }
                });
                this.setState({
                    sketchViewModel,
                    graphicsLayer
                });
            }
            catch (error) {
                console.error('Erro ao inicializar Sketch:', error);
            }
        });
        // Atualiza a quantidade de IDEA e cria os campos dinâmicos
        this.handleQuantidadeIDEAChange = (event) => {
            const quantidade = parseInt(event.target.value) || 1;
            const maxQuantidade = Math.max(1, Math.min(quantidade, 10)); // Limita entre 1 e 10
            const ideaValues = [];
            for (let i = 0; i < maxQuantidade; i++) {
                ideaValues.push(this.state.ideaValues[i] || '');
            }
            this.setState({
                quantidadeIDEA: maxQuantidade,
                ideaValues
            });
        };
        // Atualiza um valor de IDEA específico
        this.handleIdeaValueChange = (index, value) => {
            const ideaValues = [...this.state.ideaValues];
            ideaValues[index] = value;
            this.setState({ ideaValues });
        };
        // Manipula o upload do shapefile
        this.handleShapefileUpload = (event) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            const file = (_a = event.target.files) === null || _a === void 0 ? void 0 : _a[0];
            if (file) {
                if (file.name.toLowerCase().endsWith('.zip')) {
                    // Valida o shapefile antes de salvar
                    this.setState({ loading: true });
                    try {
                        const validation = yield this.validateShapefileInZip(file);
                        if (validation.valid) {
                            // Lê o shapefile e adiciona como camada local ao mapa
                            yield this.addShapefileLayerFromZip(file);
                            this.setState({ shapefileFile: file, loading: false });
                            alert(`✓ ${validation.message}\n\nA camada foi adicionada ao mapa.`);
                        }
                        else {
                            this.setState({ shapefileFile: null, shapefileLayer: null, shapefileGeometry: null, loading: false });
                            alert(`❌ ${validation.message}`);
                            // Limpa o input
                            event.target.value = '';
                        }
                    }
                    catch (error) {
                        console.error('Erro ao validar shapefile:', error);
                        this.setState({ loading: false });
                        alert(`Erro ao validar o arquivo: ${error.message}\n\nO arquivo será enviado mesmo assim, mas pode falhar no servidor.`);
                        // Tenta adicionar mesmo assim
                        try {
                            yield this.addShapefileLayerFromZip(file);
                            this.setState({ shapefileFile: file });
                        }
                        catch (addError) {
                            console.error('Erro ao adicionar camada:', addError);
                            this.setState({ shapefileFile: null, shapefileLayer: null, shapefileGeometry: null });
                        }
                    }
                }
                else {
                    alert('Por favor, faça upload de um arquivo ZIP contendo o shapefile.');
                }
            }
        });
        // Inicia o modo de desenho
        this.handleStartDrawing = () => {
            if (!this.state.sketchViewModel) {
                alert('Aguarde o mapa carregar completamente.');
                return;
            }
            this.setState({ drawingMode: true });
            this.state.sketchViewModel.create('polygon');
        };
        // Limpa a análise e reseta os campos
        this.handleClearAnalysis = () => {
            var _a, _b;
            // Remove os gráficos desenhados no mapa
            if (this.state.graphicsLayer) {
                this.state.graphicsLayer.removeAll();
                console.log('Gráficos removidos do mapa');
            }
            // Cancela qualquer desenho em andamento e limpa o sketchViewModel
            if (this.state.sketchViewModel) {
                // Cancela se houver um desenho em andamento
                if (this.state.sketchViewModel.state !== 'ready') {
                    this.state.sketchViewModel.cancel();
                }
                // Garante que o modo de desenho está desativado
                if (this.state.sketchViewModel.view) {
                    this.state.sketchViewModel.view.popup = null;
                }
                console.log('SketchViewModel limpo - pronto para novo desenho');
            }
            // Remove a camada do shapefile se existir
            if (this.state.shapefileLayer && ((_b = (_a = this.state.jimuMapView) === null || _a === void 0 ? void 0 : _a.view) === null || _b === void 0 ? void 0 : _b.map)) {
                this.state.jimuMapView.view.map.remove(this.state.shapefileLayer);
                console.log('Camada do shapefile removida do mapa');
            }
            // Reseta o estado
            this.setState({
                quantidadeIDEA: 1,
                ideaValues: [''],
                shapefileFile: null,
                shapefileLayer: null,
                shapefileGeometry: null,
                drawnGeometry: null,
                analysisResult: null,
                reportUrl: null,
                drawingMode: false,
                jobId: null,
                loading: false,
                progress: 0
            });
            // Limpa o input de arquivo
            const fileInput = document.getElementById('shapefile-upload');
            if (fileInput) {
                fileInput.value = '';
            }
            console.log('Análise limpa completamente. Pronto para nova análise.');
        };
        // Baixa o relatório
        this.handleDownloadReport = () => {
            if (this.state.reportUrl) {
                window.open(this.state.reportUrl, '_blank');
            }
            else {
                alert('Nenhum relatório disponível para download.');
            }
        };
        // Executa a análise usando a GP tool
        this.handleRunAnalysis = () => __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            // Validações
            if (this.state.ideaValues.some(val => !val || val.trim() === '')) {
                alert('Por favor, preencha todos os números de IDEA.');
                return;
            }
            if (!this.state.shapefileGeometry && !this.state.drawnGeometry) {
                alert('Por favor, faça upload de um shapefile OU desenhe uma área no mapa.');
                return;
            }
            if (this.state.shapefileGeometry && this.state.drawnGeometry) {
                alert('Por favor, escolha apenas UMA opção: upload de shapefile OU desenho no mapa.');
                return;
            }
            this.setState({ loading: true, progress: 0, analysisResult: null, reportUrl: null, jobId: null });
            try {
                // Carrega módulos necessários
                const identityModules = yield (0,jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.loadArcGISJSAPIModules)([
                    'esri/identity/IdentityManager'
                ]);
                const [IdentityManager] = identityModules;
                // Obtém token - importante para autenticação
                let token = null;
                try {
                    // Tenta encontrar credencial existente
                    const credential = IdentityManager.findCredential(this.GP_SERVICE_URL);
                    if (credential && credential.token) {
                        // Verifica se o token não expirou
                        const expires = credential.expires;
                        const now = new Date().getTime();
                        if (expires && expires > now) {
                            token = credential.token;
                            console.log('Token encontrado e válido via IdentityManager');
                            console.log('Token expira em:', new Date(expires).toLocaleString());
                        }
                        else {
                            console.warn('Token encontrado mas expirado. Tentando renovar...');
                            // Token expirado, tenta renovar
                            try {
                                yield IdentityManager.checkSignInStatus(this.GP_SERVICE_URL);
                                const updatedCredential = IdentityManager.findCredential(this.GP_SERVICE_URL);
                                if (updatedCredential && updatedCredential.token) {
                                    token = updatedCredential.token;
                                    console.log('Token renovado com sucesso');
                                }
                            }
                            catch (renewError) {
                                console.warn('Não foi possível renovar token:', renewError);
                            }
                        }
                    }
                    else {
                        // Não tem credencial, tenta obter
                        const serverInfo = IdentityManager.findServerInfo(this.GP_SERVICE_URL);
                        if (serverInfo) {
                            console.log('Tentando obter token automaticamente...');
                            yield IdentityManager.checkSignInStatus(this.GP_SERVICE_URL);
                            const updatedCredential = IdentityManager.findCredential(this.GP_SERVICE_URL);
                            if (updatedCredential && updatedCredential.token) {
                                token = updatedCredential.token;
                                console.log('Token obtido automaticamente');
                            }
                        }
                        else {
                            console.warn('ServerInfo não encontrado. O servidor pode requerer autenticação manual.');
                            // Tenta verificar status mesmo sem serverInfo
                            try {
                                yield IdentityManager.checkSignInStatus(this.GP_SERVICE_URL);
                                const newCredential = IdentityManager.findCredential(this.GP_SERVICE_URL);
                                if (newCredential && newCredential.token) {
                                    token = newCredential.token;
                                    console.log('Token gerado com sucesso');
                                }
                            }
                            catch (signInError) {
                                console.warn('Não foi possível gerar token automaticamente:', signInError);
                            }
                        }
                    }
                }
                catch (tokenError) {
                    console.error('Erro ao obter token:', tokenError);
                    console.warn('Continuando sem token - pode causar erro de autenticação');
                }
                // Opção de fallback: SEMPRE usa o token fornecido (já está autorizado)
                // O IdentityManager pode não funcionar em alguns casos, então usamos o token fornecido diretamente
                if (!token) {
                    console.warn('Token não obtido via IdentityManager. Usando token fornecido...');
                    token = this.GP_TOKEN;
                }
                else {
                    // Mesmo se obteve token via IdentityManager, vamos usar o token fornecido para garantir
                    console.log('Token obtido via IdentityManager, mas usando token fornecido para garantir autenticação');
                    token = this.GP_TOKEN;
                }
                if (!token) {
                    const errorMsg = 'ATENÇÃO: Nenhum token foi obtido. A requisição pode falhar por falta de autenticação.\n\n' +
                        'Por favor, verifique se você está autenticado no servidor ArcGIS e tente novamente.';
                    console.error(errorMsg);
                    alert(errorMsg);
                    this.setState({ loading: false });
                    return;
                }
                console.log('Token a ser usado:', token.substring(0, 30) + '...');
                console.log('Token completo (últimos 30 caracteres):', '...' + token.substring(token.length - 30));
                // Validação rápida do token antes de enviar (opcional, pode falhar por CORS)
                try {
                    const validateUrl = `${this.GP_SERVICE_URL}?f=json&token=${token}`;
                    const validateResponse = yield fetch(validateUrl, { method: 'GET' });
                    const validateResult = yield validateResponse.json();
                    if (validateResult.error) {
                        if (validateResult.error.code === 498 || validateResult.error.code === 401) {
                            throw new Error('Token inválido ou expirado. Por favor, gere um novo token.');
                        }
                    }
                    else {
                        console.log('✓ Token validado antes do envio');
                    }
                }
                catch (validateError) {
                    console.warn('Não foi possível validar token prévio (pode ser CORS):', validateError);
                    // Continua mesmo assim - será validado na requisição principal
                }
                const addTokenToUrl = (url) => {
                    if (!token)
                        return url;
                    try {
                        const urlObj = new URL(url);
                        urlObj.searchParams.set('token', token);
                        return urlObj.toString();
                    }
                    catch (e) {
                        const separator = url.includes('?') ? '&' : '?';
                        return `${url}${separator}token=${encodeURIComponent(token)}`;
                    }
                };
                // Busca metadados da GP tool para descobrir nomes exatos dos parâmetros
                // NOTA: Para GET (taskInfo), o token pode ir na URL. Para POST (submitJob), o token vai no body.
                const taskNameEncodedInfo = encodeURIComponent(this.GP_TASK_NAME);
                const taskInfoUrl = `${this.GP_SERVICE_URL}/${taskNameEncodedInfo}?f=json${token ? `&token=${token}` : ''}`;
                let gpTaskInfo = null;
                try {
                    const infoResponse = yield fetch(taskInfoUrl);
                    if (infoResponse.ok) {
                        gpTaskInfo = yield infoResponse.json();
                        console.log('Metadados da GP tool:', gpTaskInfo);
                    }
                }
                catch (infoError) {
                    console.warn('Não foi possível buscar metadados da GP tool:', infoError);
                }
                // Prepara os parâmetros
                const params = {};
                // Parâmetro: Quantidade de IDEA e valores
                // Usa os nomes exatos dos metadados da GP tool
                let quantidadeParamName = 'quantidade_idea';
                let ideaParamPrefix = 'idea_';
                if (gpTaskInfo && gpTaskInfo.parameters) {
                    // Procura parâmetros relacionados a IDEA nos metadados
                    const quantidadeParam = gpTaskInfo.parameters.find((p) => p.name && p.name.toLowerCase().includes('quantidade'));
                    if (quantidadeParam) {
                        quantidadeParamName = quantidadeParam.name;
                        console.log('Parâmetro de quantidade encontrado:', quantidadeParamName);
                    }
                    // Procura parâmetros IDEA (idea_1, idea_2, etc)
                    const ideaParams = gpTaskInfo.parameters.filter((p) => p.name && p.name.toLowerCase().startsWith('idea_'));
                    if (ideaParams.length > 0) {
                        // Extrai o prefixo do primeiro parâmetro (ex: "idea_1" -> "idea_")
                        const firstIdeaParam = ideaParams[0].name;
                        ideaParamPrefix = firstIdeaParam.substring(0, firstIdeaParam.lastIndexOf('_') + 1);
                        console.log('Parâmetros IDEA encontrados:', ideaParams.map((p) => p.name));
                        console.log('Prefixo dos parâmetros IDEA:', ideaParamPrefix);
                    }
                }
                // Adiciona quantidade de IDEA
                params[quantidadeParamName] = this.state.quantidadeIDEA.toString();
                // Adiciona os valores de IDEA (idea_1, idea_2, etc)
                for (let i = 0; i < this.state.ideaValues.length; i++) {
                    params[`${ideaParamPrefix}${i + 1}`] = this.state.ideaValues[i].trim();
                }
                console.log('Parâmetros IDEA preparados:', {
                    quantidade: params[quantidadeParamName],
                    ideas: Object.keys(params).filter(k => k.startsWith(ideaParamPrefix))
                });
                // Parâmetro: Área proposta (shapefile OU geometria - nunca ambos)
                // Usa os nomes exatos dos metadados da GP tool
                let shapefileParamName = 'area_zip';
                let geometryParamName = 'area_desenho';
                if (gpTaskInfo && gpTaskInfo.parameters) {
                    console.log('Todos os parâmetros da GP tool:', gpTaskInfo.parameters.map((p) => ({
                        name: p.name,
                        dataType: p.dataType,
                        displayName: p.displayName
                    })));
                    // Procura parâmetro de shapefile ZIP (GPDataFile) - usado APENAS para upload de ZIP
                    const shapefileParam = gpTaskInfo.parameters.find((p) => p.dataType === 'GPDataFile' &&
                        p.name &&
                        (p.name.toLowerCase().includes('zip') || p.name.toLowerCase().includes('shapefile')));
                    if (shapefileParam) {
                        shapefileParamName = shapefileParam.name;
                        console.log('✓ Parâmetro para SHAPEFILE ZIP:', shapefileParamName, 'Tipo:', shapefileParam.dataType);
                    }
                    // Procura parâmetro de geometria desenhada (GPFeatureRecordSetLayer) - usado APENAS para sketch
                    // IMPORTANTE: Este é um parâmetro DIFERENTE do shapefile
                    const geometryParam = gpTaskInfo.parameters.find((p) => p.dataType === 'GPFeatureRecordSetLayer' &&
                        p.name &&
                        !p.name.toLowerCase().includes('zip') &&
                        !p.name.toLowerCase().includes('shapefile'));
                    if (geometryParam) {
                        geometryParamName = geometryParam.name;
                        console.log('✓ Parâmetro para GEOMETRIA DESENHADA:', geometryParamName, 'Tipo:', geometryParam.dataType);
                    }
                    else {
                        console.warn('⚠ Não foi encontrado parâmetro GPFeatureRecordSetLayer nos metadados');
                        console.warn('Usando nome padrão:', geometryParamName);
                    }
                }
                // IMPORTANTE: Shapefile e geometria são MUTUAMENTE EXCLUSIVOS
                // - Shapefile Layer: extrai geometria da camada e envia como GPFeatureRecordSetLayer
                // - Geometria desenhada: usa parâmetro GPFeatureRecordSetLayer (outro nome)
                if (this.state.shapefileGeometry) {
                    // Usa a geometria do shapefile que foi salva quando a camada foi criada
                    console.log('=== USANDO GEOMETRIA DO SHAPEFILE ===');
                    console.log('Geometria do shapefile encontrada no estado');
                    const geometry = this.state.shapefileGeometry;
                    const spatialRef = geometry.spatialReference;
                    // Garante que está em SIRGAS 2000 (4674) para envio
                    let wkid = (spatialRef === null || spatialRef === void 0 ? void 0 : spatialRef.wkid) || 4674;
                    let latestWkid = (spatialRef === null || spatialRef === void 0 ? void 0 : spatialRef.latestWkid) || (spatialRef === null || spatialRef === void 0 ? void 0 : spatialRef.wkid) || 4674;
                    // Se não estiver em 4674, força para 4674 (já deveria ter sido convertido antes)
                    if (wkid !== 4674) {
                        console.warn(`⚠ Geometria está em WKID ${wkid}, mas deve estar em 4674 (SIRGAS 2000)`);
                        console.warn('Forçando WKID para 4674 no envio');
                        wkid = 4674;
                        latestWkid = 4674;
                    }
                    console.log('Geometria original:', geometry);
                    console.log('Tipo:', geometry.type);
                    console.log('SpatialReference (wkid/latestWkid):', wkid, '/', latestWkid);
                    if (geometry.type === 'polygon') {
                        const polygon = geometry;
                        console.log('Rings do polígono:', polygon.rings);
                        console.log('Número de rings:', polygon.rings ? polygon.rings.length : 0);
                        // Verifica se tem rings válidos
                        if (!polygon.rings || polygon.rings.length === 0 || !polygon.rings[0] || polygon.rings[0].length < 3) {
                            throw new Error('A geometria do shapefile não é válida. Por favor, verifique o arquivo.');
                        }
                    }
                    // Converte a geometria para JSON
                    let geometryJson = geometry.toJSON();
                    console.log('Geometria JSON original:', geometryJson);
                    // Garante que os rings estão fechados (primeiro e último ponto devem ser iguais)
                    if (geometry.type === 'polygon' && geometryJson.rings) {
                        geometryJson.rings = geometryJson.rings.map((ring) => {
                            if (ring.length < 3) {
                                throw new Error('Ring deve ter pelo menos 3 pontos');
                            }
                            // Verifica se o ring está fechado (primeiro e último ponto são iguais)
                            const firstPoint = ring[0];
                            const lastPoint = ring[ring.length - 1];
                            const isClosed = firstPoint[0] === lastPoint[0] && firstPoint[1] === lastPoint[1];
                            // Se não estiver fechado, adiciona o primeiro ponto no final
                            if (!isClosed) {
                                console.log('Ring não estava fechado. Fechando...');
                                ring = [...ring, [firstPoint[0], firstPoint[1]]];
                            }
                            // Garante que cada ponto tem exatamente 2 coordenadas (x, y)
                            ring = ring.map((point) => {
                                if (!Array.isArray(point) || point.length < 2) {
                                    throw new Error('Ponto inválido no ring');
                                }
                                // Garante que tem exatamente 2 coordenadas (x, y)
                                return [point[0], point[1]];
                            });
                            return ring;
                        });
                    }
                    // IMPORTANTE: A geometria dentro do feature DEVE ter seu próprio spatialReference
                    // Formato exato como no exemplo fornecido
                    geometryJson.spatialReference = {
                        wkid: wkid,
                        latestWkid: latestWkid
                    };
                    // Validação final da geometria
                    if (geometry.type === 'polygon') {
                        if (!geometryJson.rings || geometryJson.rings.length === 0) {
                            throw new Error('Geometria de polígono não possui rings válidos');
                        }
                        // Valida cada ring
                        geometryJson.rings.forEach((ring, index) => {
                            if (!Array.isArray(ring) || ring.length < 4) { // Mínimo 4 pontos (3 + fechamento)
                                throw new Error(`Ring ${index} não é válido: deve ter pelo menos 4 pontos (3 + fechamento)`);
                            }
                            // Verifica se está fechado
                            const first = ring[0];
                            const last = ring[ring.length - 1];
                            if (first[0] !== last[0] || first[1] !== last[1]) {
                                throw new Error(`Ring ${index} não está fechado corretamente`);
                            }
                        });
                    }
                    // Cria um GPFeatureRecordSetLayer no formato EXATO esperado pela GP tool
                    // Seguindo o formato do exemplo fornecido
                    const featureRecordSetLayer = {
                        displayFieldName: '',
                        geometryType: 'esriGeometryPolygon',
                        spatialReference: {
                            wkid: wkid,
                            latestWkid: latestWkid
                        },
                        fields: [
                            {
                                name: 'OBJECTID',
                                type: 'esriFieldTypeOID',
                                alias: 'OBJECTID'
                            },
                            {
                                name: 'Shape_Length',
                                type: 'esriFieldTypeDouble',
                                alias: 'Shape_Length'
                            },
                            {
                                name: 'Shape_Area',
                                type: 'esriFieldTypeDouble',
                                alias: 'Shape_Area'
                            }
                        ],
                        features: [
                            {
                                geometry: geometryJson, // geometryJson já tem spatialReference dentro
                                attributes: {
                                    OBJECTID: 1,
                                    Shape_Length: 0,
                                    Shape_Area: 0
                                }
                            }
                        ],
                        exceededTransferLimit: false
                    };
                    // Validação final antes de enviar
                    if (!featureRecordSetLayer.features || featureRecordSetLayer.features.length === 0) {
                        throw new Error('Nenhuma feature foi adicionada ao FeatureRecordSetLayer');
                    }
                    if (!featureRecordSetLayer.features[0].geometry) {
                        throw new Error('A geometria não foi adicionada ao feature');
                    }
                    if (!featureRecordSetLayer.features[0].geometry.rings || featureRecordSetLayer.features[0].geometry.rings.length === 0) {
                        throw new Error('A geometria não possui rings válidos');
                    }
                    // Logs detalhados das coordenadas antes de enviar
                    console.log('=== COORDENADAS DO SHAPEFILE (PRONTAS PARA ENVIO) ===');
                    console.log('FeatureRecordSetLayer validado e pronto para envio');
                    console.log('Número de features:', featureRecordSetLayer.features.length);
                    console.log('Número de rings:', featureRecordSetLayer.features[0].geometry.rings.length);
                    console.log('SpatialReference (wkid/latestWkid):', wkid, '/', latestWkid);
                    // Mostra todas as coordenadas detalhadamente
                    if (featureRecordSetLayer.features[0].geometry.rings) {
                        featureRecordSetLayer.features[0].geometry.rings.forEach((ring, ringIndex) => {
                            console.log(`--- Ring ${ringIndex + 1} (${ring.length} pontos) ---`);
                            ring.forEach((point, pointIndex) => {
                                console.log(`  Ponto ${pointIndex + 1}: [${point[0]}, ${point[1]}]`);
                            });
                            // Mostra se o ring está fechado
                            const first = ring[0];
                            const last = ring[ring.length - 1];
                            const isClosed = first[0] === last[0] && first[1] === last[1];
                            console.log(`  Ring ${ringIndex + 1} está fechado: ${isClosed}`);
                        });
                    }
                    // Mostra resumo das coordenadas
                    if (featureRecordSetLayer.features[0].geometry.rings && featureRecordSetLayer.features[0].geometry.rings.length > 0) {
                        const firstRing = featureRecordSetLayer.features[0].geometry.rings[0];
                        console.log('--- Resumo das Coordenadas ---');
                        console.log(`Total de pontos no primeiro ring: ${firstRing.length}`);
                        console.log(`Primeiro ponto: [${firstRing[0][0]}, ${firstRing[0][1]}]`);
                        console.log(`Último ponto: [${firstRing[firstRing.length - 1][0]}, ${firstRing[firstRing.length - 1][1]}]`);
                    }
                    // Envia como string JSON usando o nome correto do parâmetro
                    const geometryValue = JSON.stringify(featureRecordSetLayer);
                    params[geometryParamName] = geometryValue;
                    console.log('Geometria adicionada ao parâmetro:', geometryParamName);
                    console.log('Tamanho do JSON:', geometryValue.length, 'caracteres');
                }
                else if (this.state.drawnGeometry) {
                    // Para GPFeatureRecordSetLayer (geometria desenhada), envia JSON
                    console.log('Usando GEOMETRIA DESENHADA - parâmetro:', geometryParamName);
                    // Valida a geometria antes de enviar
                    const geometry = this.state.drawnGeometry;
                    console.log('Geometria original:', geometry);
                    console.log('Tipo:', geometry.type);
                    if (geometry.type === 'polygon') {
                        const polygon = geometry;
                        console.log('Rings do polígono:', polygon.rings);
                        console.log('Número de rings:', polygon.rings ? polygon.rings.length : 0);
                        // Verifica se tem rings válidos
                        if (!polygon.rings || polygon.rings.length === 0 || !polygon.rings[0] || polygon.rings[0].length < 3) {
                            throw new Error('A geometria desenhada não é válida. Por favor, desenhe um polígono com pelo menos 3 pontos.');
                        }
                    }
                    // Converte a geometria para JSON
                    let geometryJson = geometry.toJSON();
                    console.log('Geometria JSON original:', geometryJson);
                    const spatialRef = geometry.spatialReference;
                    console.log('SpatialReference original:', spatialRef);
                    // Obtém o WKID do spatial reference
                    // IMPORTANTE: Usa o spatialReference da geometria original, não um padrão
                    const wkid = (spatialRef === null || spatialRef === void 0 ? void 0 : spatialRef.wkid) || (spatialRef === null || spatialRef === void 0 ? void 0 : spatialRef.wkText) || 102100;
                    const latestWkid = (spatialRef === null || spatialRef === void 0 ? void 0 : spatialRef.latestWkid) || (spatialRef === null || spatialRef === void 0 ? void 0 : spatialRef.wkid) || 3857;
                    // Garante que os rings estão fechados (primeiro e último ponto devem ser iguais)
                    if (geometry.type === 'polygon' && geometryJson.rings) {
                        geometryJson.rings = geometryJson.rings.map((ring) => {
                            if (ring.length < 3) {
                                throw new Error('Ring deve ter pelo menos 3 pontos');
                            }
                            // Verifica se o ring está fechado (primeiro e último ponto são iguais)
                            const firstPoint = ring[0];
                            const lastPoint = ring[ring.length - 1];
                            const isClosed = firstPoint[0] === lastPoint[0] && firstPoint[1] === lastPoint[1];
                            // Se não estiver fechado, adiciona o primeiro ponto no final
                            if (!isClosed) {
                                console.log('Ring não estava fechado. Fechando...');
                                ring = [...ring, [firstPoint[0], firstPoint[1]]];
                            }
                            // Garante que cada ponto tem exatamente 2 coordenadas (x, y)
                            ring = ring.map((point) => {
                                if (!Array.isArray(point) || point.length < 2) {
                                    throw new Error('Ponto inválido no ring');
                                }
                                // Garante que tem exatamente 2 coordenadas (x, y)
                                return [point[0], point[1]];
                            });
                            return ring;
                        });
                    }
                    // IMPORTANTE: A geometria dentro do feature DEVE ter seu próprio spatialReference
                    // Formato exato como no exemplo fornecido
                    geometryJson.spatialReference = {
                        wkid: wkid,
                        latestWkid: latestWkid
                    };
                    // Validação final da geometria
                    if (geometry.type === 'polygon') {
                        if (!geometryJson.rings || geometryJson.rings.length === 0) {
                            throw new Error('Geometria de polígono não possui rings válidos');
                        }
                        // Valida cada ring
                        geometryJson.rings.forEach((ring, index) => {
                            if (!Array.isArray(ring) || ring.length < 4) { // Mínimo 4 pontos (3 + fechamento)
                                throw new Error(`Ring ${index} não é válido: deve ter pelo menos 4 pontos (3 + fechamento)`);
                            }
                            // Verifica se está fechado
                            const first = ring[0];
                            const last = ring[ring.length - 1];
                            if (first[0] !== last[0] || first[1] !== last[1]) {
                                throw new Error(`Ring ${index} não está fechado corretamente`);
                            }
                        });
                    }
                    // Cria um GPFeatureRecordSetLayer no formato EXATO esperado pela GP tool
                    // Seguindo o formato do exemplo fornecido
                    const featureRecordSetLayer = {
                        displayFieldName: '',
                        geometryType: 'esriGeometryPolygon',
                        spatialReference: {
                            wkid: wkid,
                            latestWkid: latestWkid
                        },
                        fields: [
                            {
                                name: 'OBJECTID',
                                type: 'esriFieldTypeOID',
                                alias: 'OBJECTID'
                            },
                            {
                                name: 'Shape_Length',
                                type: 'esriFieldTypeDouble',
                                alias: 'Shape_Length'
                            },
                            {
                                name: 'Shape_Area',
                                type: 'esriFieldTypeDouble',
                                alias: 'Shape_Area'
                            }
                        ],
                        features: [
                            {
                                geometry: geometryJson, // geometryJson já tem spatialReference dentro
                                attributes: {
                                    OBJECTID: 1,
                                    Shape_Length: 0,
                                    Shape_Area: 0
                                }
                            }
                        ],
                        exceededTransferLimit: false
                    };
                    // Validação final antes de enviar
                    if (!featureRecordSetLayer.features || featureRecordSetLayer.features.length === 0) {
                        throw new Error('Nenhuma feature foi adicionada ao FeatureRecordSetLayer');
                    }
                    if (!featureRecordSetLayer.features[0].geometry) {
                        throw new Error('A geometria não foi adicionada ao feature');
                    }
                    if (!featureRecordSetLayer.features[0].geometry.rings || featureRecordSetLayer.features[0].geometry.rings.length === 0) {
                        throw new Error('A geometria não possui rings válidos');
                    }
                    // Logs detalhados das coordenadas antes de enviar
                    console.log('=== COORDENADAS DO DESENHO (PRONTAS PARA ENVIO) ===');
                    console.log('FeatureRecordSetLayer validado e pronto para envio');
                    console.log('Número de features:', featureRecordSetLayer.features.length);
                    console.log('Número de rings:', featureRecordSetLayer.features[0].geometry.rings.length);
                    console.log('SpatialReference (wkid/latestWkid):', wkid, '/', latestWkid);
                    // Mostra todas as coordenadas detalhadamente
                    if (featureRecordSetLayer.features[0].geometry.rings) {
                        featureRecordSetLayer.features[0].geometry.rings.forEach((ring, ringIndex) => {
                            console.log(`--- Ring ${ringIndex + 1} (${ring.length} pontos) ---`);
                            ring.forEach((point, pointIndex) => {
                                console.log(`  Ponto ${pointIndex + 1}: [${point[0]}, ${point[1]}]`);
                            });
                            // Mostra se o ring está fechado
                            const first = ring[0];
                            const last = ring[ring.length - 1];
                            const isClosed = first[0] === last[0] && first[1] === last[1];
                            console.log(`  Ring ${ringIndex + 1} está fechado: ${isClosed}`);
                        });
                    }
                    // Mostra resumo das coordenadas
                    if (featureRecordSetLayer.features[0].geometry.rings && featureRecordSetLayer.features[0].geometry.rings.length > 0) {
                        const firstRing = featureRecordSetLayer.features[0].geometry.rings[0];
                        console.log('--- Resumo das Coordenadas ---');
                        console.log(`Total de pontos no primeiro ring: ${firstRing.length}`);
                        console.log(`Primeiro ponto: [${firstRing[0][0]}, ${firstRing[0][1]}]`);
                        console.log(`Último ponto: [${firstRing[firstRing.length - 1][0]}, ${firstRing[firstRing.length - 1][1]}]`);
                    }
                    // Envia como string JSON usando o nome correto do parâmetro
                    const geometryValue = JSON.stringify(featureRecordSetLayer);
                    params[geometryParamName] = geometryValue;
                    console.log('Geometria adicionada ao parâmetro:', geometryParamName);
                    console.log('Tamanho do JSON:', geometryValue.length, 'caracteres');
                }
                // Prepara form data
                let requestBody;
                let contentType;
                // IMPORTANTE: Para GPFeatureRecordSetLayer, sempre usa FormData para garantir que o JSON seja enviado corretamente
                // URLSearchParams pode codificar o JSON de forma incorreta para alguns servidores
                const hasGeometry = !!this.state.drawnGeometry || !!this.state.shapefileGeometry;
                if (hasGeometry) {
                    // Usa FormData para multipart/form-data (permite enviar geometria)
                    requestBody = new FormData();
                    // IMPORTANTE: Adiciona os parâmetros na ordem correta
                    // Primeiro os parâmetros simples (IDEA, quantidade)
                    Object.keys(params).forEach(key => {
                        // Adiciona todos os parâmetros, incluindo geometria como string JSON
                        const value = String(params[key]);
                        requestBody.append(key, value);
                        if (key === geometryParamName) {
                            console.log(`Geometria adicionada ao FormData: ${key} (${value.length} caracteres)`);
                        }
                        else {
                            console.log(`Parâmetro adicionado ao FormData: ${key} = ${value}`);
                        }
                    });
                    // IMPORTANTE: Token e f=json no body do FormData (não na URL para POST)
                    // Isso se aplica tanto para shapefile quanto para sketch
                    if (token) {
                        requestBody.append('token', token);
                        console.log('✓ Token adicionado ao FormData body (NÃO na URL)');
                        console.log('Token no FormData (verificação):', requestBody.has('token'));
                    }
                    else {
                        console.error('⚠ ATENÇÃO: Token não está disponível para adicionar ao FormData!');
                    }
                    // Adiciona f=json no body também
                    requestBody.append('f', 'json');
                    console.log('✓ f=json adicionado ao FormData body');
                    // NÃO define Content-Type manualmente - o browser define automaticamente com boundary
                    contentType = 'multipart/form-data';
                    console.log('FormData preparado com', Object.keys(params).length, 'parâmetros + token + f=json');
                }
                else {
                    // Usa URLSearchParams para application/x-www-form-urlencoded (sem geometria nem arquivo)
                    requestBody = new URLSearchParams();
                    // IMPORTANTE: Token e f=json no body do URLSearchParams (não na URL para POST)
                    // Isso se aplica tanto para shapefile quanto para sketch
                    requestBody.append('f', 'json');
                    console.log('✓ f=json adicionado ao URLSearchParams body');
                    if (token) {
                        requestBody.append('token', token);
                        console.log('✓ Token adicionado ao URLSearchParams body (NÃO na URL)');
                    }
                    else {
                        console.error('⚠ ATENÇÃO: Token não está disponível para adicionar ao URLSearchParams!');
                    }
                    // Adiciona os outros parâmetros
                    Object.keys(params).forEach(key => {
                        requestBody.append(key, String(params[key]));
                    });
                    contentType = 'application/x-www-form-urlencoded';
                    console.log('URLSearchParams preparado com', Object.keys(params).length, 'parâmetros + token + f=json');
                }
                // URL do submitJob (assíncrona) - usando a URL fornecida pelo usuário
                const taskNameEncoded = encodeURIComponent(this.GP_TASK_NAME);
                const submitJobUrl = `${this.GP_SERVICE_URL}/${taskNameEncoded}/submitJob`;
                // IMPORTANTE: Para POST, o token deve ir no BODY, não na URL
                // URL limpa, sem query parameters (incluindo token)
                const finalUrl = submitJobUrl;
                console.log('URL final (limpa, sem query params e sem token):', finalUrl);
                console.log('✓ Token será enviado APENAS no body, não na URL');
                const headers = {};
                // IMPORTANTE: Para FormData, NUNCA define Content-Type manualmente
                // O browser define automaticamente com boundary correto
                // Se definir manualmente, o boundary será incorreto e causará erro "Error parsing multi-part request"
                if (!this.state.shapefileGeometry && !this.state.drawnGeometry) {
                    // Para URLSearchParams, define Content-Type explicitamente
                    headers['Content-Type'] = 'application/x-www-form-urlencoded';
                }
                // Para FormData, não define Content-Type - o browser faz isso automaticamente
                console.log('Enviando requisição para:', finalUrl);
                console.log('Parâmetros:', params);
                console.log('Token no body:', !!token);
                if (this.state.shapefileGeometry) {
                    console.log('Geometria do shapefile a usar');
                }
                // Para upload de arquivo, pode precisar de credentials
                const fetchOptions = {
                    method: 'POST',
                    headers: headers,
                    body: requestBody,
                    // MUDANÇA: Usar 'follow' ao invés de 'manual' para permitir redirects
                    // Se o servidor redirecionar, seguiremos o redirect e veremos a resposta final
                    redirect: 'follow',
                    // Inclui credentials para requisições cross-origin
                    credentials: 'omit' // Não inclui cookies, apenas o token na URL/body
                };
                let response;
                let result;
                try {
                    console.log('=== INÍCIO DA REQUISIÇÃO ===');
                    console.log('URL:', finalUrl);
                    console.log('Token presente na URL:', finalUrl.includes('token='), '(deve ser false)');
                    console.log('Token no body:', requestBody instanceof FormData ? requestBody.has('token') : requestBody.has('token'));
                    console.log('Método:', fetchOptions.method);
                    console.log('Headers:', headers);
                    console.log('Body type:', requestBody instanceof FormData ? 'FormData' : 'URLSearchParams');
                    response = yield fetch(finalUrl, fetchOptions);
                    console.log('=== RESPOSTA RECEBIDA ===');
                    console.log('Status:', response.status);
                    console.log('Status Text:', response.statusText);
                    console.log('URL final:', response.url);
                    console.log('Redirected:', response.redirected);
                    console.log('Type:', response.type);
                    // Verifica se a resposta foi um redirect para login
                    if (response.redirected && response.url.includes('/login')) {
                        const errorMsg = 'O servidor redirecionou para a página de login. O token pode estar expirado ou inválido.\n\n' +
                            'Verifique se o token fornecido ainda é válido e tem permissão para acessar este serviço.';
                        console.error(errorMsg);
                        console.error('URL de redirecionamento:', response.url);
                        throw new Error(errorMsg);
                    }
                    // Verifica status HTTP de erro
                    if (response.status >= 300 && response.status < 400) {
                        const location = response.headers.get('Location');
                        console.warn('Status de redirecionamento:', response.status);
                        console.warn('Location header:', location);
                        if (location && (location.includes('/login') || location.includes('login'))) {
                            throw new Error('O servidor redirecionou para a página de login. O token não está sendo aceito.\n\n' +
                                'Possíveis causas:\n' +
                                '1. Token expirado ou inválido\n' +
                                '2. Token não tem permissão para este serviço\n' +
                                '3. Servidor requer autenticação adicional\n\n' +
                                'Por favor, verifique o token fornecido.');
                        }
                    }
                    // Tenta ler como JSON
                    try {
                        result = yield response.json();
                    }
                    catch (jsonError) {
                        // Se não for JSON, lê como texto
                        const textResult = yield response.text();
                        console.error('Resposta não é JSON:', textResult);
                        // Verifica se é um erro de CORS ou autenticação
                        if (response.status === 0 || response.type === 'opaque') {
                            throw new Error('Erro de CORS: Não foi possível acessar o servidor. Verifique se você está autenticado e se o servidor permite requisições do seu domínio.');
                        }
                        if (response.status === 302 || response.status === 401 || response.status === 403) {
                            throw new Error('Erro de autenticação: O servidor requer autenticação. Verifique se você está logado e se o token é válido.');
                        }
                        throw new Error(`Erro HTTP ${response.status}: ${textResult.substring(0, 200)}`);
                    }
                    if (!response.ok) {
                        if (result && result.error) {
                            // Trata erro de token inválido especificamente
                            if (result.error.code === 498 || result.error.code === 401 || ((_a = result.error.message) === null || _a === void 0 ? void 0 : _a.includes('Invalid Token'))) {
                                throw new Error('Token inválido ou expirado (código 498). Por favor, faça login novamente no servidor ArcGIS e tente novamente.');
                            }
                            throw new Error(`Erro na GP: ${result.error.message || JSON.stringify(result.error)}`);
                        }
                        throw new Error(`Erro HTTP: ${response.status} ${response.statusText}`);
                    }
                    // Verifica se há erro mesmo com status OK (alguns servidores retornam 200 com erro)
                    if (result && result.error) {
                        if (result.error.code === 498 || result.error.code === 401 || ((_b = result.error.message) === null || _b === void 0 ? void 0 : _b.includes('Invalid Token'))) {
                            throw new Error('Token inválido ou expirado (código 498). Por favor, faça login novamente no servidor ArcGIS e tente novamente.');
                        }
                        throw new Error(`Erro na GP: ${result.error.message || JSON.stringify(result.error)}`);
                    }
                }
                catch (fetchError) {
                    // Trata erros de rede/CORS
                    if (fetchError.name === 'TypeError' && fetchError.message.includes('Failed to fetch')) {
                        console.error('Erro de rede/CORS:', fetchError);
                        throw new Error('Erro de conexão: Não foi possível conectar ao servidor. Isso pode ser causado por:\n' +
                            '1. Problema de CORS (Cross-Origin Resource Sharing)\n' +
                            '2. Servidor requer autenticação adicional\n' +
                            '3. Token de autenticação expirado ou inválido\n' +
                            '4. Servidor temporariamente indisponível\n\n' +
                            'Verifique o console do navegador (F12) para mais detalhes.');
                    }
                    throw fetchError;
                }
                // Verifica se recebeu jobId
                if (!result.jobId) {
                    throw new Error('Não foi possível obter jobId da resposta');
                }
                const jobId = result.jobId;
                this.setState({ jobId, progress: 5 }); // Job submetido - 5%
                console.log('Job ID recebido:', jobId);
                // Polling do status do job
                let attempts = 0;
                const maxAttempts = 120; // 2 minutos
                while (attempts < maxAttempts) {
                    yield new Promise(resolve => setTimeout(resolve, 2000)); // Verifica a cada 2 segundos
                    attempts++;
                    const baseUrl = submitJobUrl.replace('/submitJob', '');
                    const statusUrl = token
                        ? `${baseUrl}/jobs/${jobId}?token=${token}&f=json`
                        : `${baseUrl}/jobs/${jobId}?f=json`;
                    const statusResponse = yield fetch(statusUrl);
                    if (!statusResponse.ok) {
                        throw new Error(`Erro ao verificar status do job: ${statusResponse.status}`);
                    }
                    const jobStatus = yield statusResponse.json();
                    console.log(`Status do job (tentativa ${attempts}):`, jobStatus.jobStatus);
                    // Calcula progresso baseado nas tentativas (5% a 95% durante polling)
                    // O progresso aumenta gradualmente conforme as tentativas
                    const progressPercent = Math.min(95, 5 + Math.floor((attempts / maxAttempts) * 90));
                    this.setState({ progress: progressPercent });
                    if (jobStatus.jobStatus === 'esriJobSucceeded') {
                        // Job completado - sempre vai para 100% quando completa
                        // Não importa quantas tentativas foram necessárias
                        console.log(`Job completado após ${attempts} tentativas. Atualizando para 100%`);
                        // Anima o progresso até 100% (incrementa gradualmente se necessário)
                        const currentProgress = this.state.progress;
                        if (currentProgress < 100) {
                            // Incrementa gradualmente até 100%
                            const steps = Math.ceil((100 - currentProgress) / 5); // 5% por step
                            for (let i = 1; i <= steps; i++) {
                                const newProgress = Math.min(100, currentProgress + (i * 5));
                                this.setState({ progress: newProgress });
                                yield new Promise(resolve => setTimeout(resolve, 50)); // 50ms por step
                            }
                        }
                        else {
                            this.setState({ progress: 100 });
                        }
                        // Obtém os resultados
                        const resultUrl = token
                            ? `${baseUrl}/jobs/${jobId}/results?token=${token}&f=json`
                            : `${baseUrl}/jobs/${jobId}/results?f=json`;
                        const resultResponse = yield fetch(resultUrl);
                        if (!resultResponse.ok) {
                            throw new Error(`Erro ao obter resultados: ${resultResponse.status}`);
                        }
                        result = yield resultResponse.json();
                        console.log('Resultado da execução assíncrona:', result);
                        break;
                    }
                    else if (jobStatus.jobStatus === 'esriJobFailed') {
                        // Extrai mensagens de erro mais detalhadas
                        let errorMessage = 'Job falhou';
                        if (jobStatus.messages && Array.isArray(jobStatus.messages)) {
                            const errorMessages = jobStatus.messages
                                .filter((msg) => msg.type === 'esriJobMessageTypeError')
                                .map((msg) => msg.description);
                            if (errorMessages.length > 0) {
                                errorMessage = errorMessages.join('\n');
                            }
                            else {
                                errorMessage = JSON.stringify(jobStatus.messages);
                            }
                        }
                        else if (jobStatus.messages) {
                            errorMessage = JSON.stringify(jobStatus.messages);
                        }
                        console.error('Erro detalhado do job:', jobStatus.messages);
                        // Mensagem mais amigável para o usuário
                        if (errorMessage.includes('não possui geometrias válidas')) {
                            throw new Error('O arquivo ZIP não contém geometrias válidas.\n\n' +
                                'Por favor, verifique se:\n' +
                                '1. O arquivo ZIP contém um shapefile completo (.shp, .shx, .dbf, .prj)\n' +
                                '2. O shapefile possui geometrias válidas (polígonos)\n' +
                                '3. O arquivo não está corrompido\n\n' +
                                'Detalhes técnicos: ' + errorMessage);
                        }
                        else {
                            throw new Error(`Job falhou: ${errorMessage}`);
                        }
                    }
                    else if (jobStatus.jobStatus === 'esriJobCancelled') {
                        throw new Error('Job foi cancelado');
                    }
                    attempts++;
                }
                if (attempts >= maxAttempts) {
                    throw new Error('Timeout: O job demorou mais de 2 minutos para completar');
                }
                // Processa o resultado
                let htmlUrl = null;
                let summaryText = null;
                console.log('=== PROCURANDO HTML NOS RESULTADOS ===');
                console.log('Estrutura completa do resultado:', JSON.stringify(result, null, 2));
                console.log('Tipo do resultado:', Array.isArray(result) ? 'Array' : typeof result);
                // IMPORTANTE: O resultado pode vir como array diretamente ou como objeto com results
                let resultsToCheck = [];
                // Se result é um array diretamente
                if (Array.isArray(result)) {
                    console.log('Resultado é um array, iterando diretamente...');
                    resultsToCheck = result;
                }
                // Se result tem uma propriedade results que é array
                else if (result.results && Array.isArray(result.results)) {
                    console.log('Resultado tem results como array');
                    resultsToCheck = result.results;
                }
                // Se result.results é um objeto (formato antigo)
                else if (result.results && typeof result.results === 'object' && !Array.isArray(result.results)) {
                    console.log('Resultado tem results como objeto, convertendo para array...');
                    // Converte objeto para array de valores
                    resultsToCheck = Object.values(result.results);
                }
                // Itera sobre os resultados
                if (resultsToCheck.length > 0) {
                    console.log(`Verificando ${resultsToCheck.length} resultado(s)...`);
                    for (let i = 0; i < resultsToCheck.length; i++) {
                        const resultItem = resultsToCheck[i];
                        console.log(`--- Verificando resultado ${i + 1} ---`);
                        console.log('ResultItem completo:', JSON.stringify(resultItem, null, 2));
                        console.log('Tipo do resultItem:', typeof resultItem);
                        console.log('Tem value?', !!resultItem.value);
                        console.log('Tem url?', !!resultItem.url);
                        if (resultItem) {
                            // Verifica se tem value diretamente
                            if (resultItem.value) {
                                const value = resultItem.value;
                                console.log('Value encontrado:', typeof value, value);
                                // Se value é uma string com .html
                                if (typeof value === 'string' && value.includes('.html')) {
                                    htmlUrl = value;
                                    console.log(`✓✓✓ HTML encontrado em resultado[${i}].value (string):`, htmlUrl);
                                    break;
                                }
                                // Se value é um objeto com url
                                if (value && typeof value === 'object') {
                                    console.log('Value é um objeto, verificando propriedades:', Object.keys(value));
                                    if (value.url) {
                                        console.log('Value.url encontrado:', typeof value.url, value.url);
                                        if (typeof value.url === 'string' && value.url.includes('.html')) {
                                            htmlUrl = value.url;
                                            console.log(`✓✓✓ HTML encontrado em resultado[${i}].value.url:`, htmlUrl);
                                            break;
                                        }
                                    }
                                }
                            }
                            // Verifica se tem url diretamente no resultItem
                            if (resultItem.url && typeof resultItem.url === 'string' && resultItem.url.includes('.html')) {
                                htmlUrl = resultItem.url;
                                console.log(`✓✓✓ HTML encontrado em resultado[${i}].url:`, htmlUrl);
                                break;
                            }
                            // Verifica se o próprio resultItem é uma string com .html
                            if (typeof resultItem === 'string' && resultItem.includes('.html')) {
                                htmlUrl = resultItem;
                                console.log(`✓✓✓ HTML encontrado em resultado[${i}] (string direta):`, htmlUrl);
                                break;
                            }
                        }
                    }
                }
                else {
                    console.warn('⚠️ Nenhum resultado para verificar!');
                }
                // Fallback: procura em outras propriedades do resultado
                if (!htmlUrl) {
                    console.log('HTML não encontrado nos results, tentando fallbacks...');
                    if (result.outputUrl) {
                        htmlUrl = result.outputUrl;
                        console.log('✓ HTML encontrado em outputUrl:', htmlUrl);
                    }
                    else if (result.url) {
                        htmlUrl = result.url;
                        console.log('✓ HTML encontrado em url:', htmlUrl);
                    }
                    else if (result.fileUrl) {
                        htmlUrl = result.fileUrl;
                        console.log('✓ HTML encontrado em fileUrl:', htmlUrl);
                    }
                }
                if (htmlUrl) {
                    console.log('✅ URL do HTML encontrada:', htmlUrl);
                }
                else {
                    console.error('❌ HTML não encontrado nos resultados!');
                    console.error('Estrutura completa do resultado para debug:', JSON.stringify(result, null, 2));
                }
                // Tenta extrair o resumo do relatório HTML
                if (htmlUrl) {
                    try {
                        // Adiciona token à URL do HTML se necessário
                        let htmlUrlWithToken = htmlUrl;
                        if (token && !htmlUrl.includes('token=')) {
                            const separator = htmlUrl.includes('?') ? '&' : '?';
                            htmlUrlWithToken = `${htmlUrl}${separator}token=${token}`;
                            console.log('Token adicionado à URL do HTML');
                        }
                        console.log('Acessando HTML em:', htmlUrlWithToken);
                        const htmlResponse = yield fetch(htmlUrlWithToken);
                        if (!htmlResponse.ok) {
                            console.error('Erro ao acessar HTML:', htmlResponse.status, htmlResponse.statusText);
                            throw new Error(`Erro ao acessar HTML: ${htmlResponse.status}`);
                        }
                        const htmlText = yield htmlResponse.text();
                        console.log('HTML recebido, tamanho:', htmlText.length, 'caracteres');
                        console.log('Primeiros 500 caracteres do HTML:', htmlText.substring(0, 500));
                        // Remove tags HTML e normaliza espaços
                        const textContent = htmlText.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').toLowerCase();
                        console.log('Texto extraído (primeiros 200 caracteres):', textContent.substring(0, 200));
                        // Procura por padrões que indicam se a área é suficiente ou não
                        const patterns = [
                            /área\s+(?:é|está)\s+insuficiente/i,
                            /área\s+insuficiente/i,
                            /insuficiente.*?área/i,
                            /área\s+(?:é|está)\s+suficiente/i,
                            /área\s+suficiente/i,
                            /suficiente.*?área/i,
                            /compensação.*?insuficiente/i,
                            /compensação.*?suficiente/i,
                            /não\s+atende/i,
                            /atende.*?requisitos/i
                        ];
                        let foundMatch = false;
                        for (const pattern of patterns) {
                            const match = htmlText.match(pattern);
                            if (match) {
                                console.log('Padrão encontrado:', pattern, 'Match:', match[0]);
                                const isInsufficient = /insuficiente|não\s+atende/i.test(match[0]);
                                summaryText = isInsufficient
                                    ? 'Área insuficiente para compensação. Continue com a análise'
                                    : 'Área suficiente para compensação.';
                                foundMatch = true;
                                console.log('Resumo extraído:', summaryText);
                                break;
                            }
                        }
                        // Se não encontrou padrão específico, procura por palavras-chave
                        if (!foundMatch) {
                            console.log('Nenhum padrão específico encontrado, procurando palavras-chave...');
                            const hasInsufficient = /insuficiente|não\s+atende/i.test(textContent);
                            const hasSufficient = /suficiente|atende/i.test(textContent);
                            console.log('Tem "insuficiente":', hasInsufficient);
                            console.log('Tem "suficiente":', hasSufficient);
                            if (hasInsufficient && !hasSufficient) {
                                summaryText = 'Área insuficiente para compensação';
                                console.log('Resumo definido como insuficiente');
                            }
                            else if (hasSufficient && !hasInsufficient) {
                                summaryText = 'Área suficiente para compensação';
                                console.log('Resumo definido como suficiente');
                            }
                            else {
                                console.warn('Não foi possível determinar se a área é suficiente ou insuficiente');
                            }
                        }
                    }
                    catch (htmlError) {
                        console.warn('Não foi possível extrair resumo do HTML:', htmlError);
                    }
                }
                // Atualiza o estado com os resultados
                // Usa a URL com token se foi adicionado
                const finalReportUrl = htmlUrl && token && !htmlUrl.includes('token=')
                    ? `${htmlUrl}${htmlUrl.includes('?') ? '&' : '?'}token=${token}`
                    : htmlUrl;
                this.setState({
                    loading: false,
                    progress: 100, // Análise completa
                    reportUrl: finalReportUrl,
                    analysisResult: summaryText ? {
                        sufficient: !summaryText.toLowerCase().includes('insuficiente'),
                        message: summaryText
                    } : null
                });
                if (!htmlUrl) {
                    console.error('❌ ATENÇÃO: HTML não foi encontrado!');
                    console.error('Estrutura do resultado:', JSON.stringify(result, null, 2));
                    alert('Análise concluída, mas não foi possível encontrar a URL do relatório. Verifique o console para mais detalhes.');
                }
                else {
                    console.log('✅ HTML encontrado e salvo no estado. Botão de baixar relatório deve estar habilitado.');
                }
            }
            catch (error) {
                console.error('Erro ao executar análise:', error);
                alert(`Erro ao executar análise: ${error.message}\n\nVerifique o console (F12) para mais detalhes.`);
                this.setState({ loading: false });
            }
        });
    }
    // Valida o shapefile dentro do ZIP
    validateShapefileInZip(zipFile) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Carrega JSZip dinamicamente
                const JSZip = (yield __webpack_require__.e(/*! import() */ "vendors-node_modules_jszip_dist_jszip_min_js").then(__webpack_require__.t.bind(__webpack_require__, /*! jszip */ "./node_modules/jszip/dist/jszip.min.js", 23))).default;
                console.log('=== VALIDANDO SHAPEFILE NO ZIP ===');
                console.log('Lendo arquivo ZIP:', zipFile.name, 'Tamanho:', zipFile.size, 'bytes');
                // Lê o arquivo ZIP
                const zipData = yield zipFile.arrayBuffer();
                const zip = yield JSZip.loadAsync(zipData);
                // Lista todos os arquivos no ZIP
                const fileNames = Object.keys(zip.files);
                console.log('Arquivos encontrados no ZIP:', fileNames);
                // Procura pelos arquivos essenciais do shapefile
                const requiredExtensions = ['.shp', '.shx', '.dbf'];
                const foundFiles = [];
                const missingFiles = [];
                // Procura por arquivos com as extensões necessárias
                requiredExtensions.forEach(ext => {
                    const found = fileNames.find(name => name.toLowerCase().endsWith(ext));
                    if (found) {
                        foundFiles.push(found);
                    }
                    else {
                        missingFiles.push(ext);
                    }
                });
                console.log('Arquivos encontrados:', foundFiles);
                console.log('Arquivos faltando:', missingFiles);
                // Verifica se tem os arquivos essenciais
                if (missingFiles.length > 0) {
                    return {
                        valid: false,
                        message: `O arquivo ZIP não contém todos os arquivos necessários do shapefile.\n\n` +
                            `Arquivos encontrados: ${foundFiles.length > 0 ? foundFiles.join(', ') : 'Nenhum'}\n` +
                            `Arquivos faltando: ${missingFiles.join(', ')}\n\n` +
                            `Um shapefile completo precisa de:\n` +
                            `- .shp (geometria)\n` +
                            `- .shx (índice)\n` +
                            `- .dbf (atributos)\n` +
                            `- .prj (projeção - opcional)`,
                        fileCount: fileNames.length
                    };
                }
                // Tenta ler o arquivo .shp para validar geometrias
                const shpFile = foundFiles.find(f => f.toLowerCase().endsWith('.shp'));
                if (shpFile) {
                    try {
                        const shpData = yield zip.files[shpFile].async('arraybuffer');
                        console.log('Arquivo .shp encontrado, tamanho:', shpData.byteLength, 'bytes');
                        // Validação básica: verifica se o arquivo .shp tem um tamanho mínimo
                        // Um shapefile válido precisa ter pelo menos o header (100 bytes) + alguns registros
                        if (shpData.byteLength < 100) {
                            return {
                                valid: false,
                                message: 'O arquivo .shp está muito pequeno ou corrompido. Tamanho mínimo esperado: 100 bytes.',
                                fileCount: fileNames.length
                            };
                        }
                        // Validação básica do shapefile (sem shpjs)
                        // shpjs foi removido - usando apenas validação básica do header
                        console.log('Fazendo validação básica do arquivo...');
                        // Validação básica: verifica o header do shapefile
                        const view = new DataView(shpData);
                        const fileCode = view.getInt32(0, false); // Big endian
                        const shapeType = view.getInt32(32, true); // Little endian
                        // Código de arquivo shapefile válido é 9994
                        if (fileCode !== 9994) {
                            return {
                                valid: false,
                                message: 'O arquivo .shp não parece ser um shapefile válido.\n\n' +
                                    'Código de arquivo esperado: 9994\n' +
                                    `Código encontrado: ${fileCode}`,
                                fileCount: fileNames.length
                            };
                        }
                        // ShapeType 5 = Polygon
                        if (shapeType !== 5) {
                            return {
                                valid: false,
                                message: `O shapefile não contém polígonos.\n\n` +
                                    `Tipo de geometria encontrado: ${shapeType}\n` +
                                    `Tipo esperado: 5 (Polygon)\n\n` +
                                    `Este widget requer geometrias do tipo Polygon.`,
                                fileCount: fileNames.length
                            };
                        }
                        return {
                            valid: true,
                            message: 'Shapefile validado (validação básica). Arquivo parece estar correto.',
                            fileCount: fileNames.length
                        };
                    }
                    catch (readError) {
                        console.error('Erro ao ler arquivo .shp:', readError);
                        return {
                            valid: false,
                            message: `Erro ao ler o arquivo .shp: ${readError.message}`,
                            fileCount: fileNames.length
                        };
                    }
                }
                return {
                    valid: false,
                    message: 'Não foi possível encontrar o arquivo .shp no ZIP.',
                    fileCount: fileNames.length
                };
            }
            catch (error) {
                console.error('Erro ao validar shapefile:', error);
                return {
                    valid: false,
                    message: `Erro ao validar o arquivo ZIP: ${error.message}\n\n` +
                        'Por favor, verifique se o arquivo é um ZIP válido contendo um shapefile completo.'
                };
            }
        });
    }
    // Lê o shapefile do ZIP e adiciona como camada local ao mapa
    addShapefileLayerFromZip(zipFile) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
            if (!((_b = (_a = this.state.jimuMapView) === null || _a === void 0 ? void 0 : _a.view) === null || _b === void 0 ? void 0 : _b.map)) {
                throw new Error('O mapa não está carregado. Aguarde o mapa carregar completamente.');
            }
            try {
                console.log('=== LENDO SHAPEFILE E ADICIONANDO CAMADA LOCAL ===');
                // Carrega módulos necessários
                const modules = yield (0,jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.loadArcGISJSAPIModules)([
                    'esri/layers/FeatureLayer',
                    'esri/geometry/Polygon',
                    'esri/Graphic',
                    'esri/geometry/SpatialReference',
                    'esri/geometry/geometryEngine'
                ]);
                const [FeatureLayer, Polygon, Graphic, SpatialReference, geometryEngine] = modules;
                this.FeatureLayer = FeatureLayer;
                // Remove camada anterior se existir
                if (this.state.shapefileLayer && this.state.jimuMapView.view.map) {
                    this.state.jimuMapView.view.map.remove(this.state.shapefileLayer);
                }
                // Lê o ZIP
                const JSZip = (yield __webpack_require__.e(/*! import() */ "vendors-node_modules_jszip_dist_jszip_min_js").then(__webpack_require__.t.bind(__webpack_require__, /*! jszip */ "./node_modules/jszip/dist/jszip.min.js", 23))).default;
                const zipBuffer = yield zipFile.arrayBuffer();
                const zip = yield JSZip.loadAsync(zipBuffer);
                // Encontra arquivos do shapefile
                const fileNames = Object.keys(zip.files);
                const shpFile = fileNames.find(name => name.toLowerCase().endsWith('.shp'));
                const dbfFile = fileNames.find(name => name.toLowerCase().endsWith('.dbf'));
                const prjFile = fileNames.find(name => name.toLowerCase().endsWith('.prj'));
                if (!shpFile) {
                    throw new Error('Arquivo .shp não encontrado no ZIP');
                }
                // Lê o arquivo .shp
                const shpFileObj = zip.file(shpFile);
                if (!shpFileObj) {
                    throw new Error('Não foi possível ler o arquivo .shp');
                }
                const shpData = yield shpFileObj.async('arraybuffer');
                // Lê o arquivo .prj para obter o sistema de coordenadas
                let spatialReference = { wkid: 4674 }; // Padrão SIRGAS 2000
                let originalWkid = null;
                if (prjFile) {
                    try {
                        const prjFileObj = zip.file(prjFile);
                        if (!prjFileObj) {
                            throw new Error('Não foi possível ler o arquivo .prj');
                        }
                        const prjText = yield prjFileObj.async('string');
                        console.log('PRJ encontrado:', prjText);
                        // Extrai WKID do PRJ (suporta vários sistemas)
                        // SIRGAS 2000 / 4674
                        if (prjText.includes('4674') || prjText.includes('SIRGAS 2000')) {
                            spatialReference = { wkid: 4674 };
                            originalWkid = 4674;
                        }
                        // WGS84 / 4326
                        else if (prjText.includes('4326') || prjText.includes('WGS 84')) {
                            spatialReference = { wkid: 4326 };
                            originalWkid = 4326;
                        }
                        // Web Mercator / 3857
                        else if (prjText.includes('3857') || prjText.includes('Web Mercator')) {
                            spatialReference = { wkid: 3857 };
                            originalWkid = 3857;
                        }
                        // UTM (diversos fusos)
                        else if (prjText.includes('UTM') || prjText.includes('Universal Transverse Mercator')) {
                            // Tenta extrair o WKID do UTM do PRJ
                            const utmMatch = prjText.match(/AUTHORITY\["EPSG","(\d+)"\]/);
                            if (utmMatch) {
                                const utmWkid = parseInt(utmMatch[1]);
                                spatialReference = { wkid: utmWkid };
                                originalWkid = utmWkid;
                                console.log(`WKID UTM detectado: ${utmWkid}`);
                            }
                            else {
                                // UTM comum no Brasil: 31983 (UTM Zone 23S) ou 31984 (UTM Zone 24S)
                                console.warn('UTM detectado mas WKID não encontrado. Assumindo UTM Zone 23S (31983)');
                                spatialReference = { wkid: 31983 };
                                originalWkid = 31983;
                            }
                        }
                        // Tenta extrair WKID diretamente do PRJ
                        else {
                            const wkidMatch = prjText.match(/AUTHORITY\["EPSG","(\d+)"\]|WKID\s*=\s*(\d+)|EPSG:(\d+)/i);
                            if (wkidMatch) {
                                const extractedWkid = parseInt(wkidMatch[1] || wkidMatch[2] || wkidMatch[3]);
                                spatialReference = { wkid: extractedWkid };
                                originalWkid = extractedWkid;
                                console.log(`WKID extraído do PRJ: ${extractedWkid}`);
                            }
                        }
                        console.log('SpatialReference detectado:', spatialReference);
                    }
                    catch (prjError) {
                        console.warn('Erro ao ler PRJ, usando padrão SIRGAS 2000 (4674):', prjError);
                    }
                }
                // WKID alvo para envio (SIRGAS 2000)
                const targetWkid = 4674;
                // Faz parsing básico do shapefile (apenas para polígonos simples)
                // NOTA: Este é um parser simplificado - pode não funcionar para todos os shapefiles
                const view = new DataView(shpData);
                const fileCode = view.getInt32(0, false); // Big endian
                if (fileCode !== 9994) {
                    throw new Error('Arquivo .shp inválido');
                }
                // Lê o header
                const fileLength = view.getInt32(24, false) * 2; // Em bytes
                const version = view.getInt32(28, true); // Little endian
                const shapeType = view.getInt32(32, true); // Little endian
                if (shapeType !== 5) {
                    throw new Error(`Tipo de geometria não suportado: ${shapeType}. Apenas polígonos (tipo 5) são suportados.`);
                }
                // Lê o bounding box
                const xMin = view.getFloat64(36, true);
                const yMin = view.getFloat64(44, true);
                const xMax = view.getFloat64(52, true);
                const yMax = view.getFloat64(60, true);
                console.log('Bounding box:', { xMin, yMin, xMax, yMax });
                // Lê as features (simplificado - apenas primeira feature)
                let offset = 100; // Header tem 100 bytes
                const features = [];
                while (offset < fileLength - 8) {
                    try {
                        // Record header
                        const recordNumber = view.getInt32(offset, false);
                        const contentLength = view.getInt32(offset + 4, false) * 2;
                        if (recordNumber === 0 || contentLength === 0)
                            break;
                        offset += 8;
                        // Shape type
                        const recordShapeType = view.getInt32(offset, true);
                        if (recordShapeType !== 5) {
                            offset += contentLength;
                            continue;
                        }
                        offset += 4;
                        // Bounding box do record
                        const recXMin = view.getFloat64(offset, true);
                        const recYMin = view.getFloat64(offset + 8, true);
                        const recXMax = view.getFloat64(offset + 16, true);
                        const recYMax = view.getFloat64(offset + 24, true);
                        offset += 32;
                        // Número de partes
                        const numParts = view.getInt32(offset, true);
                        offset += 4;
                        // Número de pontos
                        const numPoints = view.getInt32(offset, true);
                        offset += 4;
                        if (numPoints === 0) {
                            offset += contentLength - 44;
                            continue;
                        }
                        // Lê os índices das partes
                        const partIndices = [];
                        for (let i = 0; i < numParts; i++) {
                            partIndices.push(view.getInt32(offset, true));
                            offset += 4;
                        }
                        // Lê os pontos
                        const rings = [];
                        console.log(`=== COORDENADAS DO SHAPEFILE ===`);
                        console.log(`Número de partes: ${numParts}`);
                        console.log(`Número total de pontos: ${numPoints}`);
                        for (let partIndex = 0; partIndex < numParts; partIndex++) {
                            const startIndex = partIndices[partIndex];
                            const endIndex = partIndex < numParts - 1 ? partIndices[partIndex + 1] : numPoints;
                            const ring = [];
                            console.log(`--- Ring ${partIndex + 1} (índices ${startIndex} a ${endIndex - 1}) ---`);
                            for (let i = startIndex; i < endIndex; i++) {
                                const x = view.getFloat64(offset, true);
                                const y = view.getFloat64(offset + 8, true);
                                ring.push([x, y]);
                                console.log(`  Ponto ${i - startIndex + 1}: [${x.toFixed(6)}, ${y.toFixed(6)}]`);
                                offset += 16;
                            }
                            // Fecha o ring se necessário
                            if (ring.length > 0) {
                                const first = ring[0];
                                const last = ring[ring.length - 1];
                                const isClosed = first[0] === last[0] && first[1] === last[1];
                                console.log(`  Ring ${partIndex + 1} está fechado: ${isClosed}`);
                                if (!isClosed) {
                                    ring.push([first[0], first[1]]);
                                    console.log(`  Ring ${partIndex + 1} foi fechado adicionando ponto: [${first[0].toFixed(6)}, ${first[1].toFixed(6)}]`);
                                }
                                console.log(`  Total de pontos no ring ${partIndex + 1}: ${ring.length}`);
                            }
                            rings.push(ring);
                        }
                        console.log(`--- Resumo das Coordenadas ---`);
                        console.log(`Total de rings: ${rings.length}`);
                        rings.forEach((ring, index) => {
                            console.log(`Ring ${index + 1}: ${ring.length} pontos`);
                            if (ring.length > 0) {
                                console.log(`  Primeiro ponto: [${ring[0][0].toFixed(6)}, ${ring[0][1].toFixed(6)}]`);
                                console.log(`  Último ponto: [${ring[ring.length - 1][0].toFixed(6)}, ${ring[ring.length - 1][1].toFixed(6)}]`);
                            }
                        });
                        // Cria a geometria usando Polygon do ArcGIS com a projeção original
                        let polygonGeometry = new Polygon({
                            rings: rings,
                            spatialReference: new SpatialReference(spatialReference)
                        });
                        console.log(`=== GEOMETRIA CRIADA ===`);
                        console.log(`Tipo: Polygon`);
                        console.log(`SpatialReference original: WKID ${spatialReference.wkid}`);
                        console.log(`Número de rings: ${rings.length}`);
                        // Obtém o extent da geometria original
                        const originalExtent = polygonGeometry.extent;
                        if (originalExtent) {
                            console.log(`Extent original:`);
                            console.log(`  XMin: ${(_c = originalExtent.xmin) === null || _c === void 0 ? void 0 : _c.toFixed(6)}`);
                            console.log(`  YMin: ${(_d = originalExtent.ymin) === null || _d === void 0 ? void 0 : _d.toFixed(6)}`);
                            console.log(`  XMax: ${(_e = originalExtent.xmax) === null || _e === void 0 ? void 0 : _e.toFixed(6)}`);
                            console.log(`  YMax: ${(_f = originalExtent.ymax) === null || _f === void 0 ? void 0 : _f.toFixed(6)}`);
                        }
                        // Converte para SIRGAS 2000 (4674) se necessário
                        if (spatialReference.wkid !== targetWkid) {
                            console.log(`=== CONVERTENDO PROJEÇÃO ===`);
                            console.log(`De: WKID ${spatialReference.wkid}`);
                            console.log(`Para: WKID ${targetWkid} (SIRGAS 2000)`);
                            try {
                                // Usa geometryEngine para projetar a geometria
                                const targetSpatialRef = new SpatialReference({ wkid: targetWkid });
                                const projectedGeometry = geometryEngine.project(polygonGeometry, targetSpatialRef);
                                if (projectedGeometry) {
                                    polygonGeometry = projectedGeometry;
                                    console.log(`✓ Geometria convertida com sucesso para WKID ${targetWkid}`);
                                    // Mostra o extent após conversão
                                    const projectedExtent = polygonGeometry.extent;
                                    if (projectedExtent) {
                                        console.log(`Extent após conversão:`);
                                        console.log(`  XMin: ${(_g = projectedExtent.xmin) === null || _g === void 0 ? void 0 : _g.toFixed(6)}`);
                                        console.log(`  YMin: ${(_h = projectedExtent.ymin) === null || _h === void 0 ? void 0 : _h.toFixed(6)}`);
                                        console.log(`  XMax: ${(_j = projectedExtent.xmax) === null || _j === void 0 ? void 0 : _j.toFixed(6)}`);
                                        console.log(`  YMax: ${(_k = projectedExtent.ymax) === null || _k === void 0 ? void 0 : _k.toFixed(6)}`);
                                    }
                                }
                                else {
                                    console.warn('⚠ Conversão retornou null. Usando geometria original.');
                                }
                            }
                            catch (projectError) {
                                console.error('Erro ao converter projeção:', projectError);
                                console.warn('⚠ Usando geometria na projeção original. A GP tool pode não aceitar.');
                                // Continua com a geometria original
                            }
                        }
                        else {
                            console.log(`✓ Geometria já está em SIRGAS 2000 (4674). Não é necessário converter.`);
                        }
                        // Cria a feature como Graphic
                        const graphic = new Graphic({
                            geometry: polygonGeometry,
                            attributes: {
                                OBJECTID: features.length + 1
                            }
                        });
                        features.push(graphic);
                        console.log(`✓ Feature ${features.length} criada com sucesso`);
                        // Salva a geometria no estado para uso posterior na análise
                        this.setState({ shapefileGeometry: polygonGeometry });
                        console.log('✓ Geometria do shapefile salva no estado (WKID:', ((_l = polygonGeometry.spatialReference) === null || _l === void 0 ? void 0 : _l.wkid) || 'desconhecido', ')');
                        // Para simplificar, vamos pegar apenas a primeira feature
                        break;
                    }
                    catch (parseError) {
                        console.warn('Erro ao fazer parse de uma feature:', parseError);
                        break;
                    }
                }
                if (features.length === 0) {
                    throw new Error('Nenhuma feature válida encontrada no shapefile');
                }
                console.log(`✓ ${features.length} feature(s) extraída(s) do shapefile`);
                // Cria a FeatureLayer com source sendo um array de Graphics
                const featureLayer = new this.FeatureLayer({
                    source: features,
                    title: `Área Proposta - ${zipFile.name.replace('.zip', '')}`,
                    fields: [
                        {
                            name: 'OBJECTID',
                            type: 'oid',
                            alias: 'OBJECTID'
                        }
                    ],
                    objectIdField: 'OBJECTID',
                    geometryType: 'polygon',
                    spatialReference: new SpatialReference(spatialReference),
                    opacity: 1.0, // Opacidade total para respeitar a transparência do símbolo
                    renderer: {
                        type: 'simple',
                        symbol: {
                            type: 'simple-fill',
                            color: [255, 255, 0, 0.5], // Amarelo com 50% de transparência (RGBA)
                            outline: {
                                color: [255, 255, 0, 1], // Amarelo sólido para borda
                                width: 2
                            }
                        }
                    }
                });
                // Adiciona a camada ao mapa
                this.state.jimuMapView.view.map.add(featureLayer);
                console.log('✓ Camada adicionada ao mapa localmente');
                // Função auxiliar para fazer zoom na geometria
                const zoomToGeometry = (geometry) => {
                    var _a;
                    if (!geometry || !((_a = this.state.jimuMapView) === null || _a === void 0 ? void 0 : _a.view)) {
                        return;
                    }
                    try {
                        const extent = geometry.extent;
                        if (!extent) {
                            console.warn('Extent não disponível para a geometria');
                            return;
                        }
                        // Verifica se o extent é válido
                        if (extent.xmin === null || extent.xmax === null || extent.ymin === null || extent.ymax === null) {
                            console.warn('Extent possui valores inválidos');
                            return;
                        }
                        // Verifica se não é infinito
                        if (!isFinite(extent.xmin) || !isFinite(extent.xmax) || !isFinite(extent.ymin) || !isFinite(extent.ymax)) {
                            console.warn('Extent possui valores infinitos');
                            return;
                        }
                        // Cria um novo extent expandido
                        const expandedExtent = {
                            xmin: extent.xmin - (extent.xmax - extent.xmin) * 0.1,
                            ymin: extent.ymin - (extent.ymax - extent.ymin) * 0.1,
                            xmax: extent.xmax + (extent.xmax - extent.xmin) * 0.1,
                            ymax: extent.ymax + (extent.ymax - extent.ymin) * 0.1,
                            spatialReference: extent.spatialReference
                        };
                        this.state.jimuMapView.view.goTo(expandedExtent).then(() => {
                            console.log('✓ Zoom aplicado à camada');
                        }).catch((zoomError) => {
                            console.warn('Erro ao fazer zoom:', zoomError);
                        });
                    }
                    catch (error) {
                        console.warn('Erro ao processar extent:', error);
                    }
                };
                // Aguarda a camada carregar e faz zoom para ela
                featureLayer.when(() => {
                    console.log('Camada carregada, fazendo zoom...');
                    if (features.length > 0 && features[0].geometry) {
                        const geometry = features[0].geometry;
                        zoomToGeometry(geometry);
                    }
                }).catch((layerError) => {
                    console.error('Erro ao carregar camada:', layerError);
                });
                // Também escuta o evento layerview-create para garantir que a camada foi renderizada
                featureLayer.on('layerview-create', (event) => {
                    console.log('LayerView criada:', event);
                    if (features.length > 0 && features[0].geometry) {
                        const geometry = features[0].geometry;
                        zoomToGeometry(geometry);
                    }
                });
                // Salva a referência da camada no estado
                this.setState({ shapefileLayer: featureLayer });
            }
            catch (error) {
                console.error('Erro ao ler shapefile e adicionar camada:', error);
                throw new Error(`Erro ao processar shapefile: ${error.message}`);
            }
        });
    }
    // Faz upload do shapefile ZIP para o portal e retorna a URL da camada
    // NOTA: Para ArcGIS Server, pode ser necessário usar a API REST diretamente
    uploadShapefileToPortal(zipFile, token) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c;
            try {
                console.log('=== INICIANDO UPLOAD PARA PORTAL ===');
                console.log('Portal URL:', this.PORTAL_URL);
                console.log('Arquivo:', zipFile.name, 'Tamanho:', zipFile.size, 'bytes');
                // Para ArcGIS Server, vamos tentar usar a API REST diretamente
                // Primeiro, tenta usar a API do Portal/Server
                // Se falhar por CORS, vamos usar uma abordagem alternativa
                // Opção 1: Tenta usar /sharing/rest/content/upload (Portal API)
                let uploadUrl = `${this.PORTAL_URL}/sharing/rest/content/upload`;
                console.log('Tentando fazer upload via Portal API...');
                console.log('URL:', uploadUrl);
                const uploadFormData = new FormData();
                uploadFormData.append('file', zipFile, zipFile.name);
                uploadFormData.append('f', 'json');
                uploadFormData.append('token', token);
                let uploadResponse;
                let uploadResult;
                try {
                    uploadResponse = yield fetch(uploadUrl, {
                        method: 'POST',
                        body: uploadFormData,
                        // Não define headers - o browser define automaticamente para FormData
                    });
                    if (!uploadResponse.ok) {
                        const errorText = yield uploadResponse.text();
                        console.error('Erro no upload (status):', uploadResponse.status, errorText);
                        // Se for erro 500 ou CORS, tenta abordagem alternativa
                        if (uploadResponse.status === 500 || uploadResponse.status === 0) {
                            throw new Error('CORS ou erro de servidor. Tentando abordagem alternativa...');
                        }
                        throw new Error(`Erro ao fazer upload: ${uploadResponse.status} - ${errorText}`);
                    }
                    uploadResult = yield uploadResponse.json();
                    console.log('Resultado do upload:', uploadResult);
                    if (uploadResult.error) {
                        throw new Error(`Erro no upload: ${uploadResult.error.message || JSON.stringify(uploadResult.error)}`);
                    }
                }
                catch (fetchError) {
                    // Se falhar por CORS ou outro erro de rede
                    if (((_a = fetchError.message) === null || _a === void 0 ? void 0 : _a.includes('Failed to fetch')) || ((_b = fetchError.message) === null || _b === void 0 ? void 0 : _b.includes('CORS'))) {
                        console.warn('Erro de CORS detectado. O upload direto não é possível devido a restrições CORS.');
                        console.warn('Solução: O arquivo ZIP será enviado diretamente para a GP tool.');
                        throw new Error('CORS_BLOCKED');
                    }
                    throw fetchError;
                }
                const itemId = ((_c = uploadResult.item) === null || _c === void 0 ? void 0 : _c.id) || uploadResult.itemId;
                if (!itemId) {
                    throw new Error('Não foi possível obter o ID do item após o upload');
                }
                console.log('Item ID obtido:', itemId);
                // Obtém informações do item
                const itemInfoUrl = `${this.PORTAL_URL}/sharing/rest/content/items/${itemId}?f=json&token=${token}`;
                console.log('Obtendo informações do item...');
                const itemInfoResponse = yield fetch(itemInfoUrl);
                if (!itemInfoResponse.ok) {
                    throw new Error(`Erro ao obter informações do item: ${itemInfoResponse.status}`);
                }
                const itemInfo = yield itemInfoResponse.json();
                console.log('Informações do item:', itemInfo);
                if (itemInfo.error) {
                    throw new Error(`Erro ao obter item: ${itemInfo.error.message || JSON.stringify(itemInfo.error)}`);
                }
                // Tenta publicar como feature service
                // Para ArcGIS Server, pode precisar do username
                // Vamos tentar sem username primeiro (alguns servidores permitem)
                const publishUrl = `${this.PORTAL_URL}/sharing/rest/content/users/content/publish`;
                console.log('Publicando como feature service...');
                const publishFormData = new FormData();
                publishFormData.append('itemId', itemId);
                publishFormData.append('filetype', 'shapefile');
                publishFormData.append('f', 'json');
                publishFormData.append('token', token);
                const publishResponse = yield fetch(publishUrl, {
                    method: 'POST',
                    body: publishFormData
                });
                if (!publishResponse.ok) {
                    const errorText = yield publishResponse.text();
                    console.error('Erro na publicação:', errorText);
                    // Se falhar, tenta obter URL do item diretamente
                    console.log('Tentando obter URL do item diretamente...');
                }
                else {
                    const publishResult = yield publishResponse.json();
                    console.log('Resultado da publicação:', publishResult);
                    if (publishResult.error) {
                        console.warn('Erro na publicação, mas continuando...', publishResult.error);
                    }
                    else if (publishResult.services && publishResult.services.length > 0) {
                        const layerUrl = publishResult.services[0].serviceurl;
                        console.log('✓ URL da camada obtida da publicação:', layerUrl);
                        return layerUrl;
                    }
                }
                // Se não conseguiu publicar, tenta obter URL do item
                if (itemInfo.url) {
                    console.log('✓ URL obtida do item:', itemInfo.url);
                    return itemInfo.url;
                }
                // Última tentativa: constrói URL baseada no padrão
                const constructedUrl = `${this.PORTAL_URL}/rest/services/Hosted/${itemId}/FeatureServer/0`;
                console.log('⚠ Usando URL construída (pode não funcionar):', constructedUrl);
                return constructedUrl;
            }
            catch (error) {
                // Se o erro for CORS, retorna null para usar fallback
                if (error.message === 'CORS_BLOCKED') {
                    console.warn('Upload bloqueado por CORS. Usando fallback: enviar arquivo diretamente.');
                    throw new Error('CORS_BLOCKED');
                }
                console.error('Erro completo no upload para portal:', error);
                throw error;
            }
        });
    }
    // Função auxiliar para obter token via OAuth2 usando client secret (quando necessário)
    // NOTA: Esta função pode ser usada se o token fornecido expirar e precisarmos renovar
    getTokenViaOAuth2() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // URL do servidor ArcGIS para obter token
                const serverUrl = 'https://meioambiente.sistemas.mpba.mp.br/server';
                const tokenUrl = `${serverUrl}/tokens/generateToken`;
                // Para usar client secret, geralmente precisamos do client ID também
                // Como não temos o client ID, vamos tentar usar o token fornecido diretamente
                // Esta função está aqui caso seja necessário implementar renovação de token no futuro
                console.log('Função de renovação de token via OAuth2 disponível (client secret configurado)');
                return null; // Retorna null para usar o token fornecido por padrão
            }
            catch (error) {
                console.error('Erro ao tentar obter token via OAuth2:', error);
                return null;
            }
        });
    }
    render() {
        var _a;
        const style = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
      .widget-container {
        display: flex;
        flex-direction: column;
        gap: 12px;
        padding: 8px;
      }
      .form-group {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
      .form-group label {
        font-weight: 500;
        font-size: 14px;
        color: #212121;
      }
      input[type="number"],
      input[type="text"],
      input[type="file"] {
          padding: 8px;
          border: 1px solid #ccc;
          border-radius: 20px;
        font-size: 14px;
        background-color: white;
        color: #212121;
      }
      input[type="number"] {
        width: 80px;
      }
      input[type="file"] {
        padding: 6px 8px;
      }
      .idea-inputs {
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin-top: 8px;
      }
      .idea-input-item {
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .idea-input-item label {
        min-width: 80px;
        font-size: 13px;
        color: #212121;
      }
      .idea-input-item input {
        flex: 1;
        }
        button {
          padding: 8px 16px;
          border: none;
          border-radius: 20px;
        font-size: 14px;
        cursor: pointer;
        transition: all 0.2s ease;
        font-weight: 500;
        &:disabled {
          background-color: #e0e0e0;
          color: #9e9e9e;
          cursor: not-allowed;
          opacity: 1;
        }
      }
      .btn-primary {
          background-color: #266640;
          color: white;
        &:hover:not(:disabled) {
            background-color: #1e4f32;
          }
          &:disabled {
          background-color: #e0e0e0;
          color: #9e9e9e;
          }
        }
      .btn-secondary {
        background-color: #266640;
        color: white;
        &:hover:not(:disabled) {
          background-color: #1e4f32;
        }
        &:disabled {
          background-color: #e0e0e0;
          color: #9e9e9e;
        }
      }
      .btn-success {
        background-color: #e0e0e0;
        color: #424242;
        &:hover:not(:disabled) {
          background-color: #bdbdbd;
          color: #212121;
        }
        &:disabled {
          background-color: #e0e0e0;
          color: #9e9e9e;
        }
      }
      .btn-danger {
        background-color: #e0e0e0;
        color: #424242;
        &:hover:not(:disabled) {
          background-color: #bdbdbd;
          color: #212121;
        }
        &:disabled {
          background-color: #e0e0e0;
          color: #9e9e9e;
        }
      }
      .button-group {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
      }
      .summary-box {
        padding: 12px;
        border-radius: 20px;
        margin-top: 12px;
        font-size: 14px;
      }
      .summary-box.sufficient {
        background-color: #d4edda;
        border: 1px solid #c3e6cb;
        color: #155724;
      }
      .summary-box.insufficient {
        background-color: #f8d7da;
        border: 1px solid #f5c6cb;
        color: #721c24;
      }
      .spinner {
        display: inline-block;
        width: 16px;
        height: 16px;
        border: 2px solid rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        border-top-color: white;
        animation: spin 0.8s linear infinite;
        margin-right: 8px;
      }
      @keyframes spin {
        to {
          transform: rotate(360deg);
        }
      }
      .file-info {
        font-size: 12px;
        color: #666;
        margin-top: 4px;
      }
      .drawing-info {
        font-size: 12px;
        color: #0079c1;
        margin-top: 4px;
        font-style: italic;
      }
    `;
        const canRunAnalysis = this.state.ideaValues.every(val => val && val.trim() !== '') &&
            (this.state.shapefileGeometry || this.state.drawnGeometry) &&
            !this.state.loading;
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "widget-calculadora-lapa jimu-widget", css: style },
            this.props.hasOwnProperty('useMapWidgetIds') &&
                this.props.useMapWidgetIds &&
                this.props.useMapWidgetIds.length === 1 && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.JimuMapViewComponent, { useMapWidgetId: (_a = this.props.useMapWidgetIds) === null || _a === void 0 ? void 0 : _a[0], onActiveViewChange: (jmv) => {
                    this.setState({
                        jimuMapView: jmv
                    });
                } })),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "widget-container" },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "form-group" },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", null, _translations_default__WEBPACK_IMPORTED_MODULE_2__["default"].quantidadeIDEA),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "number", min: "1", max: "10", value: this.state.quantidadeIDEA, onChange: this.handleQuantidadeIDEAChange, disabled: this.state.loading })),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "idea-inputs" }, this.state.ideaValues.map((value, index) => ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { key: index, className: "idea-input-item" },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", null,
                        "IDEA ",
                        index + 1,
                        ":"),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "text", value: value, onChange: (e) => this.handleIdeaValueChange(index, e.target.value), placeholder: `Número IDEA ${index + 1}`, disabled: this.state.loading }))))),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "form-group" },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", null, _translations_default__WEBPACK_IMPORTED_MODULE_2__["default"].areaPropostaShapefile),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { id: "shapefile-upload", type: "file", accept: ".zip", onChange: this.handleShapefileUpload, disabled: this.state.loading || !!this.state.drawnGeometry }),
                    this.state.shapefileLayer && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "file-info" },
                        "Camada: ",
                        this.state.shapefileLayer.title || 'Área Proposta')),
                    this.state.drawnGeometry && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "file-info", style: { color: '#dc3545' } }, "Desenho no mapa ativo. Remova o desenho para fazer upload de shapefile."))),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "form-group" },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", null, _translations_default__WEBPACK_IMPORTED_MODULE_2__["default"].areaPropostaDesenho),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { className: "btn-secondary", onClick: this.handleStartDrawing, disabled: this.state.loading || this.state.drawingMode || !!this.state.shapefileGeometry }, this.state.drawingMode ? 'Desenhando...' : _translations_default__WEBPACK_IMPORTED_MODULE_2__["default"].iniciarDesenho),
                    this.state.drawingMode && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "drawing-info" }, "Clique no mapa para come\u00E7ar a desenhar a \u00E1rea.")),
                    this.state.drawnGeometry && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "file-info", style: { color: '#28a745' } }, "\u00C1rea desenhada no mapa.")),
                    this.state.shapefileGeometry && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "file-info", style: { color: '#dc3545' } }, "Shapefile carregado. Remova o arquivo para desenhar no mapa."))),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "button-group" },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { className: "btn-primary", onClick: this.handleRunAnalysis, disabled: !canRunAnalysis },
                        this.state.loading && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "spinner" })),
                        _translations_default__WEBPACK_IMPORTED_MODULE_2__["default"].executarAnalise),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { className: "btn-danger", onClick: this.handleClearAnalysis, disabled: this.state.loading }, _translations_default__WEBPACK_IMPORTED_MODULE_2__["default"].limparAnalise),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { className: "btn-success", onClick: this.handleDownloadReport, disabled: !this.state.reportUrl || this.state.loading }, _translations_default__WEBPACK_IMPORTED_MODULE_2__["default"].baixarRelatorio)),
                this.state.analysisResult && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: `summary-box ${this.state.analysisResult.sufficient ? 'sufficient' : 'insufficient'}` },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", null, "Resumo da An\u00E1lise:"),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", null),
                    this.state.analysisResult.message)))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jYWxjdWxhZG9yYS1sYXBhL2Rpc3QvcnVudGltZS93aWRnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlFQUFlO0lBQ2IsWUFBWSxFQUFFLDRCQUE0QjtJQUMxQyxLQUFLLEVBQUUsNEJBQTRCO0lBQ25DLGNBQWMsRUFBRSxtQ0FBbUM7SUFDbkQscUJBQXFCLEVBQUUsZ0NBQWdDO0lBQ3ZELG1CQUFtQixFQUFFLGtDQUFrQztJQUN2RCxjQUFjLEVBQUUsaUJBQWlCO0lBQ2pDLGVBQWUsRUFBRSxrQkFBa0I7SUFDbkMsYUFBYSxFQUFFLGdCQUFnQjtJQUMvQixlQUFlLEVBQUUsa0JBQWtCO0lBQ25DLE9BQU8sRUFBRSxlQUFlO0NBQ3pCOzs7Ozs7Ozs7Ozs7QUNYRDs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Q7V0FDdEQsc0NBQXNDLGlFQUFpRTtXQUN2RztXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7Ozs7O1dDUkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FD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Y2FsY3VsYWRvcmEtbGFwYS9zcmMvcnVudGltZS90cmFuc2xhdGlvbnMvZGVmYXVsdC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtYXJjZ2lzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2NyZWF0ZSBmYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZW5zdXJlIGNodW5rIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2dldCBqYXZhc2NyaXB0IGNodW5rIGZpbGVuYW1lIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbG9hZCBzY3JpcHQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2NhbGN1bGFkb3JhLWxhcGEvc3JjL3J1bnRpbWUvd2lkZ2V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XHJcbiAgX3dpZGdldExhYmVsOiAnQ2FsY3VsYWRvcmEgZGUgQ29tcGVuc2HDp8OjbycsXHJcbiAgdGl0bGU6ICdDYWxjdWxhZG9yYSBkZSBDb21wZW5zYcOnw6NvJyxcclxuICBxdWFudGlkYWRlSURFQTogJ1F1YW50aWRhZGUgZGUgSURFQVxcJ3MgYSBhbmFsaXNhcjonLFxyXG4gIGFyZWFQcm9wb3N0YVNoYXBlZmlsZTogJ8OBcmVhIFByb3Bvc3RhIChzaGFwZWZpbGUgWklQKTonLFxyXG4gIGFyZWFQcm9wb3N0YURlc2VuaG86ICfDgXJlYSBQcm9wb3N0YSAoRGVzZW5obyBubyBtYXBhKTonLFxyXG4gIGluaWNpYXJEZXNlbmhvOiAnSW5pY2lhciBEZXNlbmhvJyxcclxuICBleGVjdXRhckFuYWxpc2U6ICdFeGVjdXRhciBBbsOhbGlzZScsXHJcbiAgbGltcGFyQW5hbGlzZTogJ0xpbXBhciBBbsOhbGlzZScsXHJcbiAgYmFpeGFyUmVsYXRvcmlvOiAnQmFpeGFyIFJlbGF0w7NyaW8nLFxyXG4gIGxvYWRpbmc6ICdDYXJyZWdhbmRvLi4uJ1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2FyY2dpc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiA/IChvYmopID0+IChPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqKSkgOiAob2JqKSA9PiAob2JqLl9fcHJvdG9fXyk7XG52YXIgbGVhZlByb3RvdHlwZXM7XG4vLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3Rcbi8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuLy8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4vLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3Rcbi8vIG1vZGUgJiAxNjogcmV0dXJuIHZhbHVlIHdoZW4gaXQncyBQcm9taXNlLWxpa2Vcbi8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbl9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG5cdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IHRoaXModmFsdWUpO1xuXHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuXHRpZih0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlKSB7XG5cdFx0aWYoKG1vZGUgJiA0KSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG5cdFx0aWYoKG1vZGUgJiAxNikgJiYgdHlwZW9mIHZhbHVlLnRoZW4gPT09ICdmdW5jdGlvbicpIHJldHVybiB2YWx1ZTtcblx0fVxuXHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuXHR2YXIgZGVmID0ge307XG5cdGxlYWZQcm90b3R5cGVzID0gbGVhZlByb3RvdHlwZXMgfHwgW251bGwsIGdldFByb3RvKHt9KSwgZ2V0UHJvdG8oW10pLCBnZXRQcm90byhnZXRQcm90byldO1xuXHRmb3IodmFyIGN1cnJlbnQgPSBtb2RlICYgMiAmJiB2YWx1ZTsgdHlwZW9mIGN1cnJlbnQgPT0gJ29iamVjdCcgJiYgIX5sZWFmUHJvdG90eXBlcy5pbmRleE9mKGN1cnJlbnQpOyBjdXJyZW50ID0gZ2V0UHJvdG8oY3VycmVudCkpIHtcblx0XHRPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhjdXJyZW50KS5mb3JFYWNoKChrZXkpID0+IChkZWZba2V5XSA9ICgpID0+ICh2YWx1ZVtrZXldKSkpO1xuXHR9XG5cdGRlZlsnZGVmYXVsdCddID0gKCkgPT4gKHZhbHVlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBkZWYpO1xuXHRyZXR1cm4gbnM7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZiA9IHt9O1xuLy8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuLy8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSAoY2h1bmtJZCkgPT4ge1xuXHRyZXR1cm4gUHJvbWlzZS5hbGwoT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5mKS5yZWR1Y2UoKHByb21pc2VzLCBrZXkpID0+IHtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmZba2V5XShjaHVua0lkLCBwcm9taXNlcyk7XG5cdFx0cmV0dXJuIHByb21pc2VzO1xuXHR9LCBbXSkpO1xufTsiLCIvLyBUaGlzIGZ1bmN0aW9uIGFsbG93IHRvIHJlZmVyZW5jZSBhc3luYyBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18udSA9IChjaHVua0lkKSA9PiB7XG5cdC8vIHJldHVybiB1cmwgZm9yIGZpbGVuYW1lcyBub3QgYmFzZWQgb24gdGVtcGxhdGVcblx0aWYgKGNodW5rSWQgPT09IFwidmVuZG9ycy1ub2RlX21vZHVsZXNfanN6aXBfZGlzdF9qc3ppcF9taW5fanNcIikgcmV0dXJuIFwid2lkZ2V0cy9jaHVua3MvdmVuZG9ycy1ub2RlX21vZHVsZXNfanN6aXBfZGlzdF9qc3ppcF9taW5fanMuanNcIjtcblx0Ly8gcmV0dXJuIHVybCBmb3IgZmlsZW5hbWVzIGJhc2VkIG9uIHRlbXBsYXRlXG5cdHJldHVybiB1bmRlZmluZWQ7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsInZhciBpblByb2dyZXNzID0ge307XG52YXIgZGF0YVdlYnBhY2tQcmVmaXggPSBcImV4Yi1jbGllbnQ6XCI7XG4vLyBsb2FkU2NyaXB0IGZ1bmN0aW9uIHRvIGxvYWQgYSBzY3JpcHQgdmlhIHNjcmlwdCB0YWdcbl9fd2VicGFja19yZXF1aXJlX18ubCA9ICh1cmwsIGRvbmUsIGtleSwgY2h1bmtJZCkgPT4ge1xuXHRpZihpblByb2dyZXNzW3VybF0pIHsgaW5Qcm9ncmVzc1t1cmxdLnB1c2goZG9uZSk7IHJldHVybjsgfVxuXHR2YXIgc2NyaXB0LCBuZWVkQXR0YWNoO1xuXHRpZihrZXkgIT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHNjcmlwdHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBzID0gc2NyaXB0c1tpXTtcblx0XHRcdGlmKHMuZ2V0QXR0cmlidXRlKFwic3JjXCIpID09IHVybCB8fCBzLmdldEF0dHJpYnV0ZShcImRhdGEtd2VicGFja1wiKSA9PSBkYXRhV2VicGFja1ByZWZpeCArIGtleSkgeyBzY3JpcHQgPSBzOyBicmVhazsgfVxuXHRcdH1cblx0fVxuXHRpZighc2NyaXB0KSB7XG5cdFx0bmVlZEF0dGFjaCA9IHRydWU7XG5cdFx0c2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG5cblx0XHRzY3JpcHQuY2hhcnNldCA9ICd1dGYtOCc7XG5cdFx0c2NyaXB0LnRpbWVvdXQgPSAxMjA7XG5cdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubmMpIHtcblx0XHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKTtcblx0XHR9XG5cdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcImRhdGEtd2VicGFja1wiLCBkYXRhV2VicGFja1ByZWZpeCArIGtleSk7XG5cblx0XHRzY3JpcHQuc3JjID0gdXJsO1xuXHR9XG5cdGluUHJvZ3Jlc3NbdXJsXSA9IFtkb25lXTtcblx0dmFyIG9uU2NyaXB0Q29tcGxldGUgPSAocHJldiwgZXZlbnQpID0+IHtcblx0XHQvLyBhdm9pZCBtZW0gbGVha3MgaW4gSUUuXG5cdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gbnVsbDtcblx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG5cdFx0dmFyIGRvbmVGbnMgPSBpblByb2dyZXNzW3VybF07XG5cdFx0ZGVsZXRlIGluUHJvZ3Jlc3NbdXJsXTtcblx0XHRzY3JpcHQucGFyZW50Tm9kZSAmJiBzY3JpcHQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzY3JpcHQpO1xuXHRcdGRvbmVGbnMgJiYgZG9uZUZucy5mb3JFYWNoKChmbikgPT4gKGZuKGV2ZW50KSkpO1xuXHRcdGlmKHByZXYpIHJldHVybiBwcmV2KGV2ZW50KTtcblx0fVxuXHR2YXIgdGltZW91dCA9IHNldFRpbWVvdXQob25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHVuZGVmaW5lZCwgeyB0eXBlOiAndGltZW91dCcsIHRhcmdldDogc2NyaXB0IH0pLCAxMjAwMDApO1xuXHRzY3JpcHQub25lcnJvciA9IG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCBzY3JpcHQub25lcnJvcik7XG5cdHNjcmlwdC5vbmxvYWQgPSBvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgc2NyaXB0Lm9ubG9hZCk7XG5cdG5lZWRBdHRhY2ggJiYgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xufTsiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIndpZGdldHMvY2FsY3VsYWRvcmEtbGFwYS9kaXN0L3J1bnRpbWUvd2lkZ2V0XCI6IDBcbn07XG5cbl9fd2VicGFja19yZXF1aXJlX18uZi5qID0gKGNodW5rSWQsIHByb21pc2VzKSA9PiB7XG5cdFx0Ly8gSlNPTlAgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuXHRcdHZhciBpbnN0YWxsZWRDaHVua0RhdGEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSA/IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA6IHVuZGVmaW5lZDtcblx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIHsgLy8gMCBtZWFucyBcImFscmVhZHkgaW5zdGFsbGVkXCIuXG5cblx0XHRcdC8vIGEgUHJvbWlzZSBtZWFucyBcImN1cnJlbnRseSBsb2FkaW5nXCIuXG5cdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcblx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYodHJ1ZSkgeyAvLyBhbGwgY2h1bmtzIGhhdmUgSlNcblx0XHRcdFx0XHQvLyBzZXR1cCBQcm9taXNlIGluIGNodW5rIGNhY2hlXG5cdFx0XHRcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiAoaW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gW3Jlc29sdmUsIHJlamVjdF0pKTtcblx0XHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSA9IHByb21pc2UpO1xuXG5cdFx0XHRcdFx0Ly8gc3RhcnQgY2h1bmsgbG9hZGluZ1xuXHRcdFx0XHRcdHZhciB1cmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLnUoY2h1bmtJZCk7XG5cdFx0XHRcdFx0Ly8gY3JlYXRlIGVycm9yIGJlZm9yZSBzdGFjayB1bndvdW5kIHRvIGdldCB1c2VmdWwgc3RhY2t0cmFjZSBsYXRlclxuXHRcdFx0XHRcdHZhciBlcnJvciA9IG5ldyBFcnJvcigpO1xuXHRcdFx0XHRcdHZhciBsb2FkaW5nRW5kZWQgPSAoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpKSB7XG5cdFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcblx0XHRcdFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhICE9PSAwKSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSB1bmRlZmluZWQ7XG5cdFx0XHRcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuXHRcdFx0XHRcdFx0XHRcdHZhciBlcnJvclR5cGUgPSBldmVudCAmJiAoZXZlbnQudHlwZSA9PT0gJ2xvYWQnID8gJ21pc3NpbmcnIDogZXZlbnQudHlwZSk7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIHJlYWxTcmMgPSBldmVudCAmJiBldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LnNyYztcblx0XHRcdFx0XHRcdFx0XHRlcnJvci5tZXNzYWdlID0gJ0xvYWRpbmcgY2h1bmsgJyArIGNodW5rSWQgKyAnIGZhaWxlZC5cXG4oJyArIGVycm9yVHlwZSArICc6ICcgKyByZWFsU3JjICsgJyknO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLm5hbWUgPSAnQ2h1bmtMb2FkRXJyb3InO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLnR5cGUgPSBlcnJvclR5cGU7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IucmVxdWVzdCA9IHJlYWxTcmM7XG5cdFx0XHRcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhWzFdKGVycm9yKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5sKHVybCwgbG9hZGluZ0VuZGVkLCBcImNodW5rLVwiICsgY2h1bmtJZCwgY2h1bmtJZCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG59O1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rZXhiX2NsaWVudFwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtleGJfY2xpZW50XCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvdHlwZS1idWlsdGlucyAqL1xyXG4vKiogQGpzeCBqc3ggKi9cclxuLyoqXHJcbiAgTGljZW5zaW5nXHJcblxyXG4gIENvcHlyaWdodCAyMDIyIEVzcmlcclxuXHJcbiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgWW91XHJcbiAgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXlcclxuICBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG4gIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yXHJcbiAgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nXHJcbiAgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG5cclxuICBBIGNvcHkgb2YgdGhlIGxpY2Vuc2UgaXMgYXZhaWxhYmxlIGluIHRoZSByZXBvc2l0b3J5J3NcclxuICBMSUNFTlNFIGZpbGUuXHJcbiovXHJcbmltcG9ydCB7IFJlYWN0LCB0eXBlIEFsbFdpZGdldFByb3BzLCBjc3MsIGpzeCB9IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHtcclxuICBsb2FkQXJjR0lTSlNBUElNb2R1bGVzLFxyXG4gIEppbXVNYXBWaWV3Q29tcG9uZW50LFxyXG4gIHR5cGUgSmltdU1hcFZpZXdcclxufSBmcm9tICdqaW11LWFyY2dpcydcclxuXHJcbmltcG9ydCB0eXBlIHsgSU1Db25maWcgfSBmcm9tICcuLi9jb25maWcnXHJcblxyXG5pbXBvcnQgZGVmYXVsdE1lc3NhZ2VzIGZyb20gJy4vdHJhbnNsYXRpb25zL2RlZmF1bHQnXHJcblxyXG5pbnRlcmZhY2UgSVN0YXRlIHtcclxuICBqaW11TWFwVmlldzogSmltdU1hcFZpZXdcclxuICBsb2FkaW5nOiBib29sZWFuXHJcbiAgcHJvZ3Jlc3M6IG51bWJlciAvLyBQb3JjZW50YWdlbSBkZSBwcm9ncmVzc28gKDAtMTAwKVxyXG4gIHF1YW50aWRhZGVJREVBOiBudW1iZXJcclxuICBpZGVhVmFsdWVzOiBzdHJpbmdbXVxyXG4gIHNoYXBlZmlsZUZpbGU6IEZpbGUgfCBudWxsXHJcbiAgc2hhcGVmaWxlTGF5ZXI6IF9fZXNyaS5GZWF0dXJlTGF5ZXIgfCBudWxsIC8vIENhbWFkYSBkbyBzaGFwZWZpbGUgYWRpY2lvbmFkYSBhbyBtYXBhXHJcbiAgc2hhcGVmaWxlR2VvbWV0cnk6IF9fZXNyaS5Qb2x5Z29uIHwgbnVsbCAvLyBHZW9tZXRyaWEgZXh0cmHDrWRhIGRvIHNoYXBlZmlsZVxyXG4gIGRyYXduR2VvbWV0cnk6IF9fZXNyaS5HZW9tZXRyeSB8IG51bGxcclxuICBza2V0Y2hWaWV3TW9kZWw6IF9fZXNyaS5Ta2V0Y2hWaWV3TW9kZWwgfCBudWxsXHJcbiAgZ3JhcGhpY3NMYXllcjogX19lc3JpLkdyYXBoaWNzTGF5ZXIgfCBudWxsXHJcbiAgYW5hbHlzaXNSZXN1bHQ6IHtcclxuICAgIHN1ZmZpY2llbnQ6IGJvb2xlYW5cclxuICAgIG1lc3NhZ2U6IHN0cmluZ1xyXG4gIH0gfCBudWxsXHJcbiAgcmVwb3J0VXJsOiBzdHJpbmcgfCBudWxsXHJcbiAgZHJhd2luZ01vZGU6IGJvb2xlYW5cclxuICBqb2JJZDogc3RyaW5nIHwgbnVsbFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaWRnZXQgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PFxyXG5BbGxXaWRnZXRQcm9wczxJTUNvbmZpZz4sXHJcbklTdGF0ZVxyXG4+IHtcclxuICAvLyBHaXZlIHR5cGVzIHRvIHRoZSBtb2R1bGVzIHdlIGltcG9ydCBmcm9tIHRoZSBBcmNHSVMgQVBJIGZvciBKYXZhU2NyaXB0XHJcbiAgU2tldGNoVmlld01vZGVsOiB0eXBlb2YgX19lc3JpLlNrZXRjaFZpZXdNb2RlbFxyXG4gIEdyYXBoaWNzTGF5ZXI6IHR5cGVvZiBfX2VzcmkuR3JhcGhpY3NMYXllclxyXG4gIFBvbHlnb246IHR5cGVvZiBfX2VzcmkuUG9seWdvblxyXG4gIEZlYXR1cmVMYXllcjogdHlwZW9mIF9fZXNyaS5GZWF0dXJlTGF5ZXJcclxuXHJcbiAgc3RhdGU6IElTdGF0ZSA9IHtcclxuICAgIGppbXVNYXBWaWV3OiBudWxsLFxyXG4gICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICBwcm9ncmVzczogMCxcclxuICAgIHF1YW50aWRhZGVJREVBOiAxLFxyXG4gICAgaWRlYVZhbHVlczogWycnXSxcclxuICAgIHNoYXBlZmlsZUZpbGU6IG51bGwsXHJcbiAgICBzaGFwZWZpbGVMYXllcjogbnVsbCxcclxuICAgIHNoYXBlZmlsZUdlb21ldHJ5OiBudWxsLFxyXG4gICAgZHJhd25HZW9tZXRyeTogbnVsbCxcclxuICAgIHNrZXRjaFZpZXdNb2RlbDogbnVsbCxcclxuICAgIGdyYXBoaWNzTGF5ZXI6IG51bGwsXHJcbiAgICBhbmFseXNpc1Jlc3VsdDogbnVsbCxcclxuICAgIHJlcG9ydFVybDogbnVsbCxcclxuICAgIGRyYXdpbmdNb2RlOiBmYWxzZSxcclxuICAgIGpvYklkOiBudWxsXHJcbiAgfVxyXG5cclxuICAvLyBVUkwgZGEgZmVycmFtZW50YSBkZSBnZW9wcm9jZXNzYW1lbnRvIGRlIGNhbGN1bGFkb3JhIGRlIGNvbXBlbnNhw6fDo29cclxuICByZWFkb25seSBHUF9TRVJWSUNFX1VSTCA9ICdodHRwczovL21laW9hbWJpZW50ZS5zaXN0ZW1hcy5tcGJhLm1wLmJyL3NlcnZlci9yZXN0L3NlcnZpY2VzL3Rlc3Rlb3V0cHV0L2NhbGN1bGFkb3JhL0dQU2VydmVyJ1xyXG4gIFxyXG4gIC8vIFVSTCBkbyBQb3J0YWwvU2VydmVyXHJcbiAgcmVhZG9ubHkgUE9SVEFMX1VSTCA9ICdodHRwczovL21laW9hbWJpZW50ZS5zaXN0ZW1hcy5tcGJhLm1wLmJyL3NlcnZlcidcclxuICBcclxuICAvLyBOb21lIGRhIHRhc2sgZXNwZWPDrWZpY2EgZGVudHJvIGRhIEdQXHJcbiAgcmVhZG9ubHkgR1BfVEFTS19OQU1FID0gJ1NpbXVsYXIgw4FyZWEgZGUgQ29tcGVuc2HDp8OjbydcclxuICBcclxuICAvLyBUb2tlbiBmb3JuZWNpZG8gcGFyYSBhdXRlbnRpY2HDp8Ojb1xyXG4gIHJlYWRvbmx5IEdQX1RPS0VOID0gJ196TkQ0OWRLaHZuNTl0RFQ0SHE0ODBGOElvVk52d0ZyZ3BKUldqeUhSQkdyOGJZYUtMX1l5elJBeThmV0NGLXZLYUJ2alhoSDJGdUw2T1EwdFNmZkFIZWJhUUJGTU4xQ3BPb3ZzeThmejdVN285QkF2SFJYVHhpLXA2UWd2UXFCJ1xyXG4gIFxyXG4gIC8vIENsaWVudCBTZWNyZXQgcGFyYSBhdXRlbnRpY2HDp8OjbyBPQXV0aDIgKHF1YW5kbyBuZWNlc3PDoXJpbyByZW5vdmFyIHRva2VuKVxyXG4gIHJlYWRvbmx5IENMSUVOVF9TRUNSRVQgPSAnZjhjNDIzNDIzYWE3NDQ2YjhhMTdiMzAxNDNmOWIwOGEnXHJcblxyXG4gIGNvbXBvbmVudERpZFVwZGF0ZSA9IChwcmV2UHJvcHMsIHByZXZTdGF0ZSkgPT4ge1xyXG4gICAgaWYgKHRoaXMuc3RhdGUuamltdU1hcFZpZXcgJiYgIXByZXZTdGF0ZS5qaW11TWFwVmlldykge1xyXG4gICAgICB0aGlzLmluaXRpYWxpemVTa2V0Y2goKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQgPSAoKSA9PiB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5za2V0Y2hWaWV3TW9kZWwpIHtcclxuICAgICAgdGhpcy5zdGF0ZS5za2V0Y2hWaWV3TW9kZWwuZGVzdHJveSgpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBJbmljaWFsaXphIG8gU2tldGNoIHBhcmEgZGVzZW5obyBubyBtYXBhXHJcbiAgaW5pdGlhbGl6ZVNrZXRjaCA9IGFzeW5jICgpID0+IHtcclxuICAgIGlmICghdGhpcy5zdGF0ZS5qaW11TWFwVmlldyB8fCAhdGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3KSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IG1vZHVsZXMgPSBhd2FpdCBsb2FkQXJjR0lTSlNBUElNb2R1bGVzKFtcclxuICAgICAgICAnZXNyaS93aWRnZXRzL1NrZXRjaC9Ta2V0Y2hWaWV3TW9kZWwnLFxyXG4gICAgICAgICdlc3JpL2xheWVycy9HcmFwaGljc0xheWVyJyxcclxuICAgICAgICAnZXNyaS9nZW9tZXRyeS9Qb2x5Z29uJ1xyXG4gICAgICBdKVxyXG4gICAgICBcclxuICAgICAgY29uc3QgW1NrZXRjaFZpZXdNb2RlbCwgR3JhcGhpY3NMYXllciwgUG9seWdvbl0gPSBtb2R1bGVzXHJcbiAgICAgIHRoaXMuU2tldGNoVmlld01vZGVsID0gU2tldGNoVmlld01vZGVsXHJcbiAgICAgIHRoaXMuR3JhcGhpY3NMYXllciA9IEdyYXBoaWNzTGF5ZXJcclxuICAgICAgdGhpcy5Qb2x5Z29uID0gUG9seWdvblxyXG5cclxuICAgICAgLy8gQ3JpYSB1bWEgY2FtYWRhIGRlIGdyw6FmaWNvcyBwYXJhIG8gZGVzZW5ob1xyXG4gICAgICBjb25zdCBncmFwaGljc0xheWVyID0gbmV3IHRoaXMuR3JhcGhpY3NMYXllcigpXHJcbiAgICAgIHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldy5tYXAuYWRkKGdyYXBoaWNzTGF5ZXIpXHJcblxyXG4gICAgICAvLyBDcmlhIG8gU2tldGNoVmlld01vZGVsXHJcbiAgICAgIGNvbnN0IHNrZXRjaFZpZXdNb2RlbCA9IG5ldyB0aGlzLlNrZXRjaFZpZXdNb2RlbCh7XHJcbiAgICAgICAgdmlldzogdGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3LFxyXG4gICAgICAgIGxheWVyOiBncmFwaGljc0xheWVyLFxyXG4gICAgICAgIHBvbHlnb25TeW1ib2w6IHtcclxuICAgICAgICAgIHR5cGU6ICdzaW1wbGUtZmlsbCcsXHJcbiAgICAgICAgICBjb2xvcjogWzUxLCA1MSwgMjA0LCAwLjJdLFxyXG4gICAgICAgICAgb3V0bGluZToge1xyXG4gICAgICAgICAgICBjb2xvcjogWzUxLCA1MSwgMjA0LCAxXSxcclxuICAgICAgICAgICAgd2lkdGg6IDJcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcblxyXG4gICAgICAvLyBMaXN0ZW5lciBwYXJhIHF1YW5kbyBvIGRlc2VuaG8gw6kgY29tcGxldGFkb1xyXG4gICAgICBza2V0Y2hWaWV3TW9kZWwub24oJ2NyZWF0ZScsIChldmVudCkgPT4ge1xyXG4gICAgICAgIGlmIChldmVudC5zdGF0ZSA9PT0gJ2NvbXBsZXRlJykge1xyXG4gICAgICAgICAgY29uc3QgZ2VvbWV0cnkgPSBldmVudC5ncmFwaGljLmdlb21ldHJ5XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC8vIFZhbGlkYSBzZSBhIGdlb21ldHJpYSB0ZW0gcmluZ3MgdsOhbGlkb3MgKHBhcmEgcG9sw61nb25vcylcclxuICAgICAgICAgIGlmIChnZW9tZXRyeSAmJiBnZW9tZXRyeS50eXBlID09PSAncG9seWdvbicpIHtcclxuICAgICAgICAgICAgY29uc3QgcG9seWdvbiA9IGdlb21ldHJ5IGFzIF9fZXNyaS5Qb2x5Z29uXHJcbiAgICAgICAgICAgIGlmIChwb2x5Z29uLnJpbmdzICYmIHBvbHlnb24ucmluZ3MubGVuZ3RoID4gMCAmJiBwb2x5Z29uLnJpbmdzWzBdLmxlbmd0aCA+PSAzKSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJz09PSBHRU9NRVRSSUEgQ0FQVFVSQURBID09PScpXHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1RpcG86JywgZ2VvbWV0cnkudHlwZSlcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU3BhdGlhbFJlZmVyZW5jZTonLCBnZW9tZXRyeS5zcGF0aWFsUmVmZXJlbmNlKVxyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdOw7ptZXJvIGRlIHJpbmdzOicsIHBvbHlnb24ucmluZ3MubGVuZ3RoKVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIC8vIE1vc3RyYSBhcyBjb29yZGVuYWRhcyBkZSBjYWRhIHJpbmdcclxuICAgICAgICAgICAgICBwb2x5Z29uLnJpbmdzLmZvckVhY2goKHJpbmcsIHJpbmdJbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYC0tLSBSaW5nICR7cmluZ0luZGV4ICsgMX0gKCR7cmluZy5sZW5ndGh9IHBvbnRvcykgLS0tYClcclxuICAgICAgICAgICAgICAgIHJpbmcuZm9yRWFjaCgocG9pbnQsIHBvaW50SW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCAgUG9udG8gJHtwb2ludEluZGV4ICsgMX06IFske3BvaW50WzBdfSwgJHtwb2ludFsxXX1dYClcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAvLyBDYWxjdWxhIGUgbW9zdHJhIGEgw6FyZWEgYXByb3hpbWFkYSAoc2UgcG9zc8OtdmVsKVxyXG4gICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBleHRlbnQgPSBnZW9tZXRyeS5leHRlbnRcclxuICAgICAgICAgICAgICAgIGlmIChleHRlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgY29uc3Qgd2lkdGggPSBleHRlbnQud2lkdGhcclxuICAgICAgICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gZXh0ZW50LmhlaWdodFxyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRXh0ZW50IChib3VuZGluZyBib3gpOicpXHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAgIFhtaW46ICR7ZXh0ZW50LnhtaW59LCBZbWluOiAke2V4dGVudC55bWlufWApXHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAgIFhtYXg6ICR7ZXh0ZW50LnhtYXh9LCBZbWF4OiAke2V4dGVudC55bWF4fWApXHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAgIExhcmd1cmE6ICR7d2lkdGh9LCBBbHR1cmE6ICR7aGVpZ2h0fWApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ07Do28gZm9pIHBvc3PDrXZlbCBjYWxjdWxhciBleHRlbnQnKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGRyYXduR2VvbWV0cnk6IGdlb21ldHJ5LFxyXG4gICAgICAgICAgICAgICAgZHJhd2luZ01vZGU6IGZhbHNlXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAvLyBOw6NvIHByZWNpc2EgcmVzZXRhciAtIG8gU2tldGNoVmlld01vZGVsIGrDoSBlc3TDoSBwcm9udG8gcGFyYSB1bSBub3ZvIGRlc2VuaG9cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBhbGVydCgnUG9yIGZhdm9yLCBkZXNlbmhlIHVtIHBvbMOtZ29ubyB2w6FsaWRvIGNvbSBwZWxvIG1lbm9zIDMgcG9udG9zLicpXHJcbiAgICAgICAgICAgICAgLy8gQ2FuY2VsYSBvIGRlc2VuaG8gaW52w6FsaWRvXHJcbiAgICAgICAgICAgICAgaWYgKHNrZXRjaFZpZXdNb2RlbC5zdGF0ZSAhPT0gJ3JlYWR5Jykge1xyXG4gICAgICAgICAgICAgICAgc2tldGNoVmlld01vZGVsLmNhbmNlbCgpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICBkcmF3bkdlb21ldHJ5OiBnZW9tZXRyeSxcclxuICAgICAgICAgICAgICBkcmF3aW5nTW9kZTogZmFsc2VcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLy8gTsOjbyBwcmVjaXNhIHJlc2V0YXIgLSBvIFNrZXRjaFZpZXdNb2RlbCBqw6EgZXN0w6EgcHJvbnRvIHBhcmEgdW0gbm92byBkZXNlbmhvXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgc2tldGNoVmlld01vZGVsLFxyXG4gICAgICAgIGdyYXBoaWNzTGF5ZXJcclxuICAgICAgfSlcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm8gYW8gaW5pY2lhbGl6YXIgU2tldGNoOicsIGVycm9yKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gQXR1YWxpemEgYSBxdWFudGlkYWRlIGRlIElERUEgZSBjcmlhIG9zIGNhbXBvcyBkaW7Dom1pY29zXHJcbiAgaGFuZGxlUXVhbnRpZGFkZUlERUFDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgIGNvbnN0IHF1YW50aWRhZGUgPSBwYXJzZUludChldmVudC50YXJnZXQudmFsdWUpIHx8IDFcclxuICAgIGNvbnN0IG1heFF1YW50aWRhZGUgPSBNYXRoLm1heCgxLCBNYXRoLm1pbihxdWFudGlkYWRlLCAxMCkpIC8vIExpbWl0YSBlbnRyZSAxIGUgMTBcclxuICAgIFxyXG4gICAgY29uc3QgaWRlYVZhbHVlcyA9IFtdXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1heFF1YW50aWRhZGU7IGkrKykge1xyXG4gICAgICBpZGVhVmFsdWVzLnB1c2godGhpcy5zdGF0ZS5pZGVhVmFsdWVzW2ldIHx8ICcnKVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBxdWFudGlkYWRlSURFQTogbWF4UXVhbnRpZGFkZSxcclxuICAgICAgaWRlYVZhbHVlc1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIC8vIEF0dWFsaXphIHVtIHZhbG9yIGRlIElERUEgZXNwZWPDrWZpY29cclxuICBoYW5kbGVJZGVhVmFsdWVDaGFuZ2UgPSAoaW5kZXg6IG51bWJlciwgdmFsdWU6IHN0cmluZykgPT4ge1xyXG4gICAgY29uc3QgaWRlYVZhbHVlcyA9IFsuLi50aGlzLnN0YXRlLmlkZWFWYWx1ZXNdXHJcbiAgICBpZGVhVmFsdWVzW2luZGV4XSA9IHZhbHVlXHJcbiAgICB0aGlzLnNldFN0YXRlKHsgaWRlYVZhbHVlcyB9KVxyXG4gIH1cclxuXHJcbiAgLy8gVmFsaWRhIG8gc2hhcGVmaWxlIGRlbnRybyBkbyBaSVBcclxuICBwcml2YXRlIGFzeW5jIHZhbGlkYXRlU2hhcGVmaWxlSW5aaXAoemlwRmlsZTogRmlsZSk6IFByb21pc2U8eyB2YWxpZDogYm9vbGVhbjsgbWVzc2FnZTogc3RyaW5nOyBmaWxlQ291bnQ/OiBudW1iZXIgfT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgLy8gQ2FycmVnYSBKU1ppcCBkaW5hbWljYW1lbnRlXHJcbiAgICAgIGNvbnN0IEpTWmlwID0gKGF3YWl0IGltcG9ydCgnanN6aXAnKSkuZGVmYXVsdFxyXG4gICAgICBcclxuICAgICAgY29uc29sZS5sb2coJz09PSBWQUxJREFORE8gU0hBUEVGSUxFIE5PIFpJUCA9PT0nKVxyXG4gICAgICBjb25zb2xlLmxvZygnTGVuZG8gYXJxdWl2byBaSVA6JywgemlwRmlsZS5uYW1lLCAnVGFtYW5obzonLCB6aXBGaWxlLnNpemUsICdieXRlcycpXHJcbiAgICAgIFxyXG4gICAgICAvLyBMw6ogbyBhcnF1aXZvIFpJUFxyXG4gICAgICBjb25zdCB6aXBEYXRhID0gYXdhaXQgemlwRmlsZS5hcnJheUJ1ZmZlcigpXHJcbiAgICAgIGNvbnN0IHppcCA9IGF3YWl0IEpTWmlwLmxvYWRBc3luYyh6aXBEYXRhKVxyXG4gICAgICBcclxuICAgICAgLy8gTGlzdGEgdG9kb3Mgb3MgYXJxdWl2b3Mgbm8gWklQXHJcbiAgICAgIGNvbnN0IGZpbGVOYW1lcyA9IE9iamVjdC5rZXlzKHppcC5maWxlcylcclxuICAgICAgY29uc29sZS5sb2coJ0FycXVpdm9zIGVuY29udHJhZG9zIG5vIFpJUDonLCBmaWxlTmFtZXMpXHJcbiAgICAgIFxyXG4gICAgICAvLyBQcm9jdXJhIHBlbG9zIGFycXVpdm9zIGVzc2VuY2lhaXMgZG8gc2hhcGVmaWxlXHJcbiAgICAgIGNvbnN0IHJlcXVpcmVkRXh0ZW5zaW9ucyA9IFsnLnNocCcsICcuc2h4JywgJy5kYmYnXVxyXG4gICAgICBjb25zdCBmb3VuZEZpbGVzOiBzdHJpbmdbXSA9IFtdXHJcbiAgICAgIGNvbnN0IG1pc3NpbmdGaWxlczogc3RyaW5nW10gPSBbXVxyXG4gICAgICBcclxuICAgICAgLy8gUHJvY3VyYSBwb3IgYXJxdWl2b3MgY29tIGFzIGV4dGVuc8O1ZXMgbmVjZXNzw6FyaWFzXHJcbiAgICAgIHJlcXVpcmVkRXh0ZW5zaW9ucy5mb3JFYWNoKGV4dCA9PiB7XHJcbiAgICAgICAgY29uc3QgZm91bmQgPSBmaWxlTmFtZXMuZmluZChuYW1lID0+IG5hbWUudG9Mb3dlckNhc2UoKS5lbmRzV2l0aChleHQpKVxyXG4gICAgICAgIGlmIChmb3VuZCkge1xyXG4gICAgICAgICAgZm91bmRGaWxlcy5wdXNoKGZvdW5kKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBtaXNzaW5nRmlsZXMucHVzaChleHQpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICBcclxuICAgICAgY29uc29sZS5sb2coJ0FycXVpdm9zIGVuY29udHJhZG9zOicsIGZvdW5kRmlsZXMpXHJcbiAgICAgIGNvbnNvbGUubG9nKCdBcnF1aXZvcyBmYWx0YW5kbzonLCBtaXNzaW5nRmlsZXMpXHJcbiAgICAgIFxyXG4gICAgICAvLyBWZXJpZmljYSBzZSB0ZW0gb3MgYXJxdWl2b3MgZXNzZW5jaWFpc1xyXG4gICAgICBpZiAobWlzc2luZ0ZpbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgdmFsaWQ6IGZhbHNlLFxyXG4gICAgICAgICAgbWVzc2FnZTogYE8gYXJxdWl2byBaSVAgbsOjbyBjb250w6ltIHRvZG9zIG9zIGFycXVpdm9zIG5lY2Vzc8OhcmlvcyBkbyBzaGFwZWZpbGUuXFxuXFxuYCArXHJcbiAgICAgICAgICAgIGBBcnF1aXZvcyBlbmNvbnRyYWRvczogJHtmb3VuZEZpbGVzLmxlbmd0aCA+IDAgPyBmb3VuZEZpbGVzLmpvaW4oJywgJykgOiAnTmVuaHVtJ31cXG5gICtcclxuICAgICAgICAgICAgYEFycXVpdm9zIGZhbHRhbmRvOiAke21pc3NpbmdGaWxlcy5qb2luKCcsICcpfVxcblxcbmAgK1xyXG4gICAgICAgICAgICBgVW0gc2hhcGVmaWxlIGNvbXBsZXRvIHByZWNpc2EgZGU6XFxuYCArXHJcbiAgICAgICAgICAgIGAtIC5zaHAgKGdlb21ldHJpYSlcXG5gICtcclxuICAgICAgICAgICAgYC0gLnNoeCAow61uZGljZSlcXG5gICtcclxuICAgICAgICAgICAgYC0gLmRiZiAoYXRyaWJ1dG9zKVxcbmAgK1xyXG4gICAgICAgICAgICBgLSAucHJqIChwcm9qZcOnw6NvIC0gb3BjaW9uYWwpYCxcclxuICAgICAgICAgIGZpbGVDb3VudDogZmlsZU5hbWVzLmxlbmd0aFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLy8gVGVudGEgbGVyIG8gYXJxdWl2byAuc2hwIHBhcmEgdmFsaWRhciBnZW9tZXRyaWFzXHJcbiAgICAgIGNvbnN0IHNocEZpbGUgPSBmb3VuZEZpbGVzLmZpbmQoZiA9PiBmLnRvTG93ZXJDYXNlKCkuZW5kc1dpdGgoJy5zaHAnKSlcclxuICAgICAgaWYgKHNocEZpbGUpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3Qgc2hwRGF0YSA9IGF3YWl0IHppcC5maWxlc1tzaHBGaWxlXS5hc3luYygnYXJyYXlidWZmZXInKVxyXG4gICAgICAgICAgY29uc29sZS5sb2coJ0FycXVpdm8gLnNocCBlbmNvbnRyYWRvLCB0YW1hbmhvOicsIHNocERhdGEuYnl0ZUxlbmd0aCwgJ2J5dGVzJylcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLy8gVmFsaWRhw6fDo28gYsOhc2ljYTogdmVyaWZpY2Egc2UgbyBhcnF1aXZvIC5zaHAgdGVtIHVtIHRhbWFuaG8gbcOtbmltb1xyXG4gICAgICAgICAgLy8gVW0gc2hhcGVmaWxlIHbDoWxpZG8gcHJlY2lzYSB0ZXIgcGVsbyBtZW5vcyBvIGhlYWRlciAoMTAwIGJ5dGVzKSArIGFsZ3VucyByZWdpc3Ryb3NcclxuICAgICAgICAgIGlmIChzaHBEYXRhLmJ5dGVMZW5ndGggPCAxMDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICB2YWxpZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgbWVzc2FnZTogJ08gYXJxdWl2byAuc2hwIGVzdMOhIG11aXRvIHBlcXVlbm8gb3UgY29ycm9tcGlkby4gVGFtYW5obyBtw61uaW1vIGVzcGVyYWRvOiAxMDAgYnl0ZXMuJyxcclxuICAgICAgICAgICAgICBmaWxlQ291bnQ6IGZpbGVOYW1lcy5sZW5ndGhcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAvLyBWYWxpZGHDp8OjbyBiw6FzaWNhIGRvIHNoYXBlZmlsZSAoc2VtIHNocGpzKVxyXG4gICAgICAgICAgLy8gc2hwanMgZm9pIHJlbW92aWRvIC0gdXNhbmRvIGFwZW5hcyB2YWxpZGHDp8OjbyBiw6FzaWNhIGRvIGhlYWRlclxyXG4gICAgICAgICAgY29uc29sZS5sb2coJ0ZhemVuZG8gdmFsaWRhw6fDo28gYsOhc2ljYSBkbyBhcnF1aXZvLi4uJylcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLy8gVmFsaWRhw6fDo28gYsOhc2ljYTogdmVyaWZpY2EgbyBoZWFkZXIgZG8gc2hhcGVmaWxlXHJcbiAgICAgICAgICBjb25zdCB2aWV3ID0gbmV3IERhdGFWaWV3KHNocERhdGEpXHJcbiAgICAgICAgICBjb25zdCBmaWxlQ29kZSA9IHZpZXcuZ2V0SW50MzIoMCwgZmFsc2UpIC8vIEJpZyBlbmRpYW5cclxuICAgICAgICAgIGNvbnN0IHNoYXBlVHlwZSA9IHZpZXcuZ2V0SW50MzIoMzIsIHRydWUpIC8vIExpdHRsZSBlbmRpYW5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLy8gQ8OzZGlnbyBkZSBhcnF1aXZvIHNoYXBlZmlsZSB2w6FsaWRvIMOpIDk5OTRcclxuICAgICAgICAgIGlmIChmaWxlQ29kZSAhPT0gOTk5NCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgIHZhbGlkOiBmYWxzZSxcclxuICAgICAgICAgICAgICBtZXNzYWdlOiAnTyBhcnF1aXZvIC5zaHAgbsOjbyBwYXJlY2Ugc2VyIHVtIHNoYXBlZmlsZSB2w6FsaWRvLlxcblxcbicgK1xyXG4gICAgICAgICAgICAgICAgJ0PDs2RpZ28gZGUgYXJxdWl2byBlc3BlcmFkbzogOTk5NFxcbicgK1xyXG4gICAgICAgICAgICAgICAgYEPDs2RpZ28gZW5jb250cmFkbzogJHtmaWxlQ29kZX1gLFxyXG4gICAgICAgICAgICAgIGZpbGVDb3VudDogZmlsZU5hbWVzLmxlbmd0aFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC8vIFNoYXBlVHlwZSA1ID0gUG9seWdvblxyXG4gICAgICAgICAgaWYgKHNoYXBlVHlwZSAhPT0gNSkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgIHZhbGlkOiBmYWxzZSxcclxuICAgICAgICAgICAgICBtZXNzYWdlOiBgTyBzaGFwZWZpbGUgbsOjbyBjb250w6ltIHBvbMOtZ29ub3MuXFxuXFxuYCArXHJcbiAgICAgICAgICAgICAgICBgVGlwbyBkZSBnZW9tZXRyaWEgZW5jb250cmFkbzogJHtzaGFwZVR5cGV9XFxuYCArXHJcbiAgICAgICAgICAgICAgICBgVGlwbyBlc3BlcmFkbzogNSAoUG9seWdvbilcXG5cXG5gICtcclxuICAgICAgICAgICAgICAgIGBFc3RlIHdpZGdldCByZXF1ZXIgZ2VvbWV0cmlhcyBkbyB0aXBvIFBvbHlnb24uYCxcclxuICAgICAgICAgICAgICBmaWxlQ291bnQ6IGZpbGVOYW1lcy5sZW5ndGhcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB2YWxpZDogdHJ1ZSxcclxuICAgICAgICAgICAgbWVzc2FnZTogJ1NoYXBlZmlsZSB2YWxpZGFkbyAodmFsaWRhw6fDo28gYsOhc2ljYSkuIEFycXVpdm8gcGFyZWNlIGVzdGFyIGNvcnJldG8uJyxcclxuICAgICAgICAgICAgZmlsZUNvdW50OiBmaWxlTmFtZXMubGVuZ3RoXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAocmVhZEVycm9yKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvIGFvIGxlciBhcnF1aXZvIC5zaHA6JywgcmVhZEVycm9yKVxyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdmFsaWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBgRXJybyBhbyBsZXIgbyBhcnF1aXZvIC5zaHA6ICR7cmVhZEVycm9yLm1lc3NhZ2V9YCxcclxuICAgICAgICAgICAgZmlsZUNvdW50OiBmaWxlTmFtZXMubGVuZ3RoXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHZhbGlkOiBmYWxzZSxcclxuICAgICAgICBtZXNzYWdlOiAnTsOjbyBmb2kgcG9zc8OtdmVsIGVuY29udHJhciBvIGFycXVpdm8gLnNocCBubyBaSVAuJyxcclxuICAgICAgICBmaWxlQ291bnQ6IGZpbGVOYW1lcy5sZW5ndGhcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJybyBhbyB2YWxpZGFyIHNoYXBlZmlsZTonLCBlcnJvcilcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB2YWxpZDogZmFsc2UsXHJcbiAgICAgICAgbWVzc2FnZTogYEVycm8gYW8gdmFsaWRhciBvIGFycXVpdm8gWklQOiAke2Vycm9yLm1lc3NhZ2V9XFxuXFxuYCArXHJcbiAgICAgICAgICAnUG9yIGZhdm9yLCB2ZXJpZmlxdWUgc2UgbyBhcnF1aXZvIMOpIHVtIFpJUCB2w6FsaWRvIGNvbnRlbmRvIHVtIHNoYXBlZmlsZSBjb21wbGV0by4nXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIE1hbmlwdWxhIG8gdXBsb2FkIGRvIHNoYXBlZmlsZVxyXG4gIGhhbmRsZVNoYXBlZmlsZVVwbG9hZCA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgY29uc3QgZmlsZSA9IGV2ZW50LnRhcmdldC5maWxlcz8uWzBdXHJcbiAgICBpZiAoZmlsZSkge1xyXG4gICAgICBpZiAoZmlsZS5uYW1lLnRvTG93ZXJDYXNlKCkuZW5kc1dpdGgoJy56aXAnKSkge1xyXG4gICAgICAgIC8vIFZhbGlkYSBvIHNoYXBlZmlsZSBhbnRlcyBkZSBzYWx2YXJcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSB9KVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCB2YWxpZGF0aW9uID0gYXdhaXQgdGhpcy52YWxpZGF0ZVNoYXBlZmlsZUluWmlwKGZpbGUpXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGlmICh2YWxpZGF0aW9uLnZhbGlkKSB7XHJcbiAgICAgICAgICAgIC8vIEzDqiBvIHNoYXBlZmlsZSBlIGFkaWNpb25hIGNvbW8gY2FtYWRhIGxvY2FsIGFvIG1hcGFcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5hZGRTaGFwZWZpbGVMYXllckZyb21aaXAoZmlsZSlcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNoYXBlZmlsZUZpbGU6IGZpbGUsIGxvYWRpbmc6IGZhbHNlIH0pXHJcbiAgICAgICAgICAgIGFsZXJ0KGDinJMgJHt2YWxpZGF0aW9uLm1lc3NhZ2V9XFxuXFxuQSBjYW1hZGEgZm9pIGFkaWNpb25hZGEgYW8gbWFwYS5gKVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNoYXBlZmlsZUZpbGU6IG51bGwsIHNoYXBlZmlsZUxheWVyOiBudWxsLCBzaGFwZWZpbGVHZW9tZXRyeTogbnVsbCwgbG9hZGluZzogZmFsc2UgfSlcclxuICAgICAgICAgICAgYWxlcnQoYOKdjCAke3ZhbGlkYXRpb24ubWVzc2FnZX1gKVxyXG4gICAgICAgICAgICAvLyBMaW1wYSBvIGlucHV0XHJcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC52YWx1ZSA9ICcnXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm8gYW8gdmFsaWRhciBzaGFwZWZpbGU6JywgZXJyb3IpXHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSlcclxuICAgICAgICAgIGFsZXJ0KGBFcnJvIGFvIHZhbGlkYXIgbyBhcnF1aXZvOiAke2Vycm9yLm1lc3NhZ2V9XFxuXFxuTyBhcnF1aXZvIHNlcsOhIGVudmlhZG8gbWVzbW8gYXNzaW0sIG1hcyBwb2RlIGZhbGhhciBubyBzZXJ2aWRvci5gKVxyXG4gICAgICAgICAgLy8gVGVudGEgYWRpY2lvbmFyIG1lc21vIGFzc2ltXHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLmFkZFNoYXBlZmlsZUxheWVyRnJvbVppcChmaWxlKVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hhcGVmaWxlRmlsZTogZmlsZSB9KVxyXG4gICAgICAgICAgfSBjYXRjaCAoYWRkRXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJybyBhbyBhZGljaW9uYXIgY2FtYWRhOicsIGFkZEVycm9yKVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hhcGVmaWxlRmlsZTogbnVsbCwgc2hhcGVmaWxlTGF5ZXI6IG51bGwsIHNoYXBlZmlsZUdlb21ldHJ5OiBudWxsIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGFsZXJ0KCdQb3IgZmF2b3IsIGZhw6dhIHVwbG9hZCBkZSB1bSBhcnF1aXZvIFpJUCBjb250ZW5kbyBvIHNoYXBlZmlsZS4nKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBMw6ogbyBzaGFwZWZpbGUgZG8gWklQIGUgYWRpY2lvbmEgY29tbyBjYW1hZGEgbG9jYWwgYW8gbWFwYVxyXG4gIHByaXZhdGUgYXN5bmMgYWRkU2hhcGVmaWxlTGF5ZXJGcm9tWmlwKHppcEZpbGU6IEZpbGUpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGlmICghdGhpcy5zdGF0ZS5qaW11TWFwVmlldz8udmlldz8ubWFwKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignTyBtYXBhIG7Do28gZXN0w6EgY2FycmVnYWRvLiBBZ3VhcmRlIG8gbWFwYSBjYXJyZWdhciBjb21wbGV0YW1lbnRlLicpXHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc29sZS5sb2coJz09PSBMRU5ETyBTSEFQRUZJTEUgRSBBRElDSU9OQU5ETyBDQU1BREEgTE9DQUwgPT09JylcclxuICAgICAgXHJcbiAgICAgIC8vIENhcnJlZ2EgbcOzZHVsb3MgbmVjZXNzw6FyaW9zXHJcbiAgICAgIGNvbnN0IG1vZHVsZXMgPSBhd2FpdCBsb2FkQXJjR0lTSlNBUElNb2R1bGVzKFtcclxuICAgICAgICAnZXNyaS9sYXllcnMvRmVhdHVyZUxheWVyJyxcclxuICAgICAgICAnZXNyaS9nZW9tZXRyeS9Qb2x5Z29uJyxcclxuICAgICAgICAnZXNyaS9HcmFwaGljJyxcclxuICAgICAgICAnZXNyaS9nZW9tZXRyeS9TcGF0aWFsUmVmZXJlbmNlJyxcclxuICAgICAgICAnZXNyaS9nZW9tZXRyeS9nZW9tZXRyeUVuZ2luZSdcclxuICAgICAgXSlcclxuICAgICAgY29uc3QgW0ZlYXR1cmVMYXllciwgUG9seWdvbiwgR3JhcGhpYywgU3BhdGlhbFJlZmVyZW5jZSwgZ2VvbWV0cnlFbmdpbmVdID0gbW9kdWxlc1xyXG4gICAgICB0aGlzLkZlYXR1cmVMYXllciA9IEZlYXR1cmVMYXllclxyXG4gICAgICBcclxuICAgICAgLy8gUmVtb3ZlIGNhbWFkYSBhbnRlcmlvciBzZSBleGlzdGlyXHJcbiAgICAgIGlmICh0aGlzLnN0YXRlLnNoYXBlZmlsZUxheWVyICYmIHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldy5tYXApIHtcclxuICAgICAgICB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcubWFwLnJlbW92ZSh0aGlzLnN0YXRlLnNoYXBlZmlsZUxheWVyKVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvLyBMw6ogbyBaSVBcclxuICAgICAgY29uc3QgSlNaaXAgPSAoYXdhaXQgaW1wb3J0KCdqc3ppcCcpKS5kZWZhdWx0XHJcbiAgICAgIGNvbnN0IHppcEJ1ZmZlciA9IGF3YWl0IHppcEZpbGUuYXJyYXlCdWZmZXIoKVxyXG4gICAgICBjb25zdCB6aXAgPSBhd2FpdCBKU1ppcC5sb2FkQXN5bmMoemlwQnVmZmVyKVxyXG4gICAgICBcclxuICAgICAgLy8gRW5jb250cmEgYXJxdWl2b3MgZG8gc2hhcGVmaWxlXHJcbiAgICAgIGNvbnN0IGZpbGVOYW1lcyA9IE9iamVjdC5rZXlzKHppcC5maWxlcylcclxuICAgICAgY29uc3Qgc2hwRmlsZSA9IGZpbGVOYW1lcy5maW5kKG5hbWUgPT4gbmFtZS50b0xvd2VyQ2FzZSgpLmVuZHNXaXRoKCcuc2hwJykpXHJcbiAgICAgIGNvbnN0IGRiZkZpbGUgPSBmaWxlTmFtZXMuZmluZChuYW1lID0+IG5hbWUudG9Mb3dlckNhc2UoKS5lbmRzV2l0aCgnLmRiZicpKVxyXG4gICAgICBjb25zdCBwcmpGaWxlID0gZmlsZU5hbWVzLmZpbmQobmFtZSA9PiBuYW1lLnRvTG93ZXJDYXNlKCkuZW5kc1dpdGgoJy5wcmonKSlcclxuICAgICAgXHJcbiAgICAgIGlmICghc2hwRmlsZSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQXJxdWl2byAuc2hwIG7Do28gZW5jb250cmFkbyBubyBaSVAnKVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvLyBMw6ogbyBhcnF1aXZvIC5zaHBcclxuICAgICAgY29uc3Qgc2hwRmlsZU9iaiA9IHppcC5maWxlKHNocEZpbGUpXHJcbiAgICAgIGlmICghc2hwRmlsZU9iaikge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTsOjbyBmb2kgcG9zc8OtdmVsIGxlciBvIGFycXVpdm8gLnNocCcpXHJcbiAgICAgIH1cclxuICAgICAgY29uc3Qgc2hwRGF0YSA9IGF3YWl0IHNocEZpbGVPYmouYXN5bmMoJ2FycmF5YnVmZmVyJylcclxuICAgICAgXHJcbiAgICAgIC8vIEzDqiBvIGFycXVpdm8gLnByaiBwYXJhIG9idGVyIG8gc2lzdGVtYSBkZSBjb29yZGVuYWRhc1xyXG4gICAgICBsZXQgc3BhdGlhbFJlZmVyZW5jZTogYW55ID0geyB3a2lkOiA0Njc0IH0gLy8gUGFkcsOjbyBTSVJHQVMgMjAwMFxyXG4gICAgICBsZXQgb3JpZ2luYWxXa2lkOiBudW1iZXIgfCBudWxsID0gbnVsbFxyXG4gICAgICBpZiAocHJqRmlsZSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCBwcmpGaWxlT2JqID0gemlwLmZpbGUocHJqRmlsZSlcclxuICAgICAgICAgIGlmICghcHJqRmlsZU9iaikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ07Do28gZm9pIHBvc3PDrXZlbCBsZXIgbyBhcnF1aXZvIC5wcmonKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY29uc3QgcHJqVGV4dCA9IGF3YWl0IHByakZpbGVPYmouYXN5bmMoJ3N0cmluZycpXHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnUFJKIGVuY29udHJhZG86JywgcHJqVGV4dClcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLy8gRXh0cmFpIFdLSUQgZG8gUFJKIChzdXBvcnRhIHbDoXJpb3Mgc2lzdGVtYXMpXHJcbiAgICAgICAgICAvLyBTSVJHQVMgMjAwMCAvIDQ2NzRcclxuICAgICAgICAgIGlmIChwcmpUZXh0LmluY2x1ZGVzKCc0Njc0JykgfHwgcHJqVGV4dC5pbmNsdWRlcygnU0lSR0FTIDIwMDAnKSkge1xyXG4gICAgICAgICAgICBzcGF0aWFsUmVmZXJlbmNlID0geyB3a2lkOiA0Njc0IH1cclxuICAgICAgICAgICAgb3JpZ2luYWxXa2lkID0gNDY3NFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLy8gV0dTODQgLyA0MzI2XHJcbiAgICAgICAgICBlbHNlIGlmIChwcmpUZXh0LmluY2x1ZGVzKCc0MzI2JykgfHwgcHJqVGV4dC5pbmNsdWRlcygnV0dTIDg0JykpIHtcclxuICAgICAgICAgICAgc3BhdGlhbFJlZmVyZW5jZSA9IHsgd2tpZDogNDMyNiB9XHJcbiAgICAgICAgICAgIG9yaWdpbmFsV2tpZCA9IDQzMjZcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC8vIFdlYiBNZXJjYXRvciAvIDM4NTdcclxuICAgICAgICAgIGVsc2UgaWYgKHByalRleHQuaW5jbHVkZXMoJzM4NTcnKSB8fCBwcmpUZXh0LmluY2x1ZGVzKCdXZWIgTWVyY2F0b3InKSkge1xyXG4gICAgICAgICAgICBzcGF0aWFsUmVmZXJlbmNlID0geyB3a2lkOiAzODU3IH1cclxuICAgICAgICAgICAgb3JpZ2luYWxXa2lkID0gMzg1N1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLy8gVVRNIChkaXZlcnNvcyBmdXNvcylcclxuICAgICAgICAgIGVsc2UgaWYgKHByalRleHQuaW5jbHVkZXMoJ1VUTScpIHx8IHByalRleHQuaW5jbHVkZXMoJ1VuaXZlcnNhbCBUcmFuc3ZlcnNlIE1lcmNhdG9yJykpIHtcclxuICAgICAgICAgICAgLy8gVGVudGEgZXh0cmFpciBvIFdLSUQgZG8gVVRNIGRvIFBSSlxyXG4gICAgICAgICAgICBjb25zdCB1dG1NYXRjaCA9IHByalRleHQubWF0Y2goL0FVVEhPUklUWVxcW1wiRVBTR1wiLFwiKFxcZCspXCJcXF0vKVxyXG4gICAgICAgICAgICBpZiAodXRtTWF0Y2gpIHtcclxuICAgICAgICAgICAgICBjb25zdCB1dG1Xa2lkID0gcGFyc2VJbnQodXRtTWF0Y2hbMV0pXHJcbiAgICAgICAgICAgICAgc3BhdGlhbFJlZmVyZW5jZSA9IHsgd2tpZDogdXRtV2tpZCB9XHJcbiAgICAgICAgICAgICAgb3JpZ2luYWxXa2lkID0gdXRtV2tpZFxyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBXS0lEIFVUTSBkZXRlY3RhZG86ICR7dXRtV2tpZH1gKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIC8vIFVUTSBjb211bSBubyBCcmFzaWw6IDMxOTgzIChVVE0gWm9uZSAyM1MpIG91IDMxOTg0IChVVE0gWm9uZSAyNFMpXHJcbiAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdVVE0gZGV0ZWN0YWRvIG1hcyBXS0lEIG7Do28gZW5jb250cmFkby4gQXNzdW1pbmRvIFVUTSBab25lIDIzUyAoMzE5ODMpJylcclxuICAgICAgICAgICAgICBzcGF0aWFsUmVmZXJlbmNlID0geyB3a2lkOiAzMTk4MyB9XHJcbiAgICAgICAgICAgICAgb3JpZ2luYWxXa2lkID0gMzE5ODNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLy8gVGVudGEgZXh0cmFpciBXS0lEIGRpcmV0YW1lbnRlIGRvIFBSSlxyXG4gICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHdraWRNYXRjaCA9IHByalRleHQubWF0Y2goL0FVVEhPUklUWVxcW1wiRVBTR1wiLFwiKFxcZCspXCJcXF18V0tJRFxccyo9XFxzKihcXGQrKXxFUFNHOihcXGQrKS9pKVxyXG4gICAgICAgICAgICBpZiAod2tpZE1hdGNoKSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgZXh0cmFjdGVkV2tpZCA9IHBhcnNlSW50KHdraWRNYXRjaFsxXSB8fCB3a2lkTWF0Y2hbMl0gfHwgd2tpZE1hdGNoWzNdKVxyXG4gICAgICAgICAgICAgIHNwYXRpYWxSZWZlcmVuY2UgPSB7IHdraWQ6IGV4dHJhY3RlZFdraWQgfVxyXG4gICAgICAgICAgICAgIG9yaWdpbmFsV2tpZCA9IGV4dHJhY3RlZFdraWRcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgV0tJRCBleHRyYcOtZG8gZG8gUFJKOiAke2V4dHJhY3RlZFdraWR9YClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnU3BhdGlhbFJlZmVyZW5jZSBkZXRlY3RhZG86Jywgc3BhdGlhbFJlZmVyZW5jZSlcclxuICAgICAgICB9IGNhdGNoIChwcmpFcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS53YXJuKCdFcnJvIGFvIGxlciBQUkosIHVzYW5kbyBwYWRyw6NvIFNJUkdBUyAyMDAwICg0Njc0KTonLCBwcmpFcnJvcilcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8vIFdLSUQgYWx2byBwYXJhIGVudmlvIChTSVJHQVMgMjAwMClcclxuICAgICAgY29uc3QgdGFyZ2V0V2tpZCA9IDQ2NzRcclxuICAgICAgXHJcbiAgICAgIC8vIEZheiBwYXJzaW5nIGLDoXNpY28gZG8gc2hhcGVmaWxlIChhcGVuYXMgcGFyYSBwb2zDrWdvbm9zIHNpbXBsZXMpXHJcbiAgICAgIC8vIE5PVEE6IEVzdGUgw6kgdW0gcGFyc2VyIHNpbXBsaWZpY2FkbyAtIHBvZGUgbsOjbyBmdW5jaW9uYXIgcGFyYSB0b2RvcyBvcyBzaGFwZWZpbGVzXHJcbiAgICAgIGNvbnN0IHZpZXcgPSBuZXcgRGF0YVZpZXcoc2hwRGF0YSlcclxuICAgICAgY29uc3QgZmlsZUNvZGUgPSB2aWV3LmdldEludDMyKDAsIGZhbHNlKSAvLyBCaWcgZW5kaWFuXHJcbiAgICAgIFxyXG4gICAgICBpZiAoZmlsZUNvZGUgIT09IDk5OTQpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FycXVpdm8gLnNocCBpbnbDoWxpZG8nKVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvLyBMw6ogbyBoZWFkZXJcclxuICAgICAgY29uc3QgZmlsZUxlbmd0aCA9IHZpZXcuZ2V0SW50MzIoMjQsIGZhbHNlKSAqIDIgLy8gRW0gYnl0ZXNcclxuICAgICAgY29uc3QgdmVyc2lvbiA9IHZpZXcuZ2V0SW50MzIoMjgsIHRydWUpIC8vIExpdHRsZSBlbmRpYW5cclxuICAgICAgY29uc3Qgc2hhcGVUeXBlID0gdmlldy5nZXRJbnQzMigzMiwgdHJ1ZSkgLy8gTGl0dGxlIGVuZGlhblxyXG4gICAgICBcclxuICAgICAgaWYgKHNoYXBlVHlwZSAhPT0gNSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVGlwbyBkZSBnZW9tZXRyaWEgbsOjbyBzdXBvcnRhZG86ICR7c2hhcGVUeXBlfS4gQXBlbmFzIHBvbMOtZ29ub3MgKHRpcG8gNSkgc8OjbyBzdXBvcnRhZG9zLmApXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8vIEzDqiBvIGJvdW5kaW5nIGJveFxyXG4gICAgICBjb25zdCB4TWluID0gdmlldy5nZXRGbG9hdDY0KDM2LCB0cnVlKVxyXG4gICAgICBjb25zdCB5TWluID0gdmlldy5nZXRGbG9hdDY0KDQ0LCB0cnVlKVxyXG4gICAgICBjb25zdCB4TWF4ID0gdmlldy5nZXRGbG9hdDY0KDUyLCB0cnVlKVxyXG4gICAgICBjb25zdCB5TWF4ID0gdmlldy5nZXRGbG9hdDY0KDYwLCB0cnVlKVxyXG4gICAgICBcclxuICAgICAgY29uc29sZS5sb2coJ0JvdW5kaW5nIGJveDonLCB7IHhNaW4sIHlNaW4sIHhNYXgsIHlNYXggfSlcclxuICAgICAgXHJcbiAgICAgIC8vIEzDqiBhcyBmZWF0dXJlcyAoc2ltcGxpZmljYWRvIC0gYXBlbmFzIHByaW1laXJhIGZlYXR1cmUpXHJcbiAgICAgIGxldCBvZmZzZXQgPSAxMDAgLy8gSGVhZGVyIHRlbSAxMDAgYnl0ZXNcclxuICAgICAgY29uc3QgZmVhdHVyZXM6IGFueVtdID0gW11cclxuICAgICAgXHJcbiAgICAgIHdoaWxlIChvZmZzZXQgPCBmaWxlTGVuZ3RoIC0gOCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAvLyBSZWNvcmQgaGVhZGVyXHJcbiAgICAgICAgICBjb25zdCByZWNvcmROdW1iZXIgPSB2aWV3LmdldEludDMyKG9mZnNldCwgZmFsc2UpXHJcbiAgICAgICAgICBjb25zdCBjb250ZW50TGVuZ3RoID0gdmlldy5nZXRJbnQzMihvZmZzZXQgKyA0LCBmYWxzZSkgKiAyXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGlmIChyZWNvcmROdW1iZXIgPT09IDAgfHwgY29udGVudExlbmd0aCA9PT0gMCkgYnJlYWtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgb2Zmc2V0ICs9IDhcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLy8gU2hhcGUgdHlwZVxyXG4gICAgICAgICAgY29uc3QgcmVjb3JkU2hhcGVUeXBlID0gdmlldy5nZXRJbnQzMihvZmZzZXQsIHRydWUpXHJcbiAgICAgICAgICBpZiAocmVjb3JkU2hhcGVUeXBlICE9PSA1KSB7XHJcbiAgICAgICAgICAgIG9mZnNldCArPSBjb250ZW50TGVuZ3RoXHJcbiAgICAgICAgICAgIGNvbnRpbnVlXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIG9mZnNldCArPSA0XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC8vIEJvdW5kaW5nIGJveCBkbyByZWNvcmRcclxuICAgICAgICAgIGNvbnN0IHJlY1hNaW4gPSB2aWV3LmdldEZsb2F0NjQob2Zmc2V0LCB0cnVlKVxyXG4gICAgICAgICAgY29uc3QgcmVjWU1pbiA9IHZpZXcuZ2V0RmxvYXQ2NChvZmZzZXQgKyA4LCB0cnVlKVxyXG4gICAgICAgICAgY29uc3QgcmVjWE1heCA9IHZpZXcuZ2V0RmxvYXQ2NChvZmZzZXQgKyAxNiwgdHJ1ZSlcclxuICAgICAgICAgIGNvbnN0IHJlY1lNYXggPSB2aWV3LmdldEZsb2F0NjQob2Zmc2V0ICsgMjQsIHRydWUpXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIG9mZnNldCArPSAzMlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAvLyBOw7ptZXJvIGRlIHBhcnRlc1xyXG4gICAgICAgICAgY29uc3QgbnVtUGFydHMgPSB2aWV3LmdldEludDMyKG9mZnNldCwgdHJ1ZSlcclxuICAgICAgICAgIG9mZnNldCArPSA0XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC8vIE7Dum1lcm8gZGUgcG9udG9zXHJcbiAgICAgICAgICBjb25zdCBudW1Qb2ludHMgPSB2aWV3LmdldEludDMyKG9mZnNldCwgdHJ1ZSlcclxuICAgICAgICAgIG9mZnNldCArPSA0XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGlmIChudW1Qb2ludHMgPT09IDApIHtcclxuICAgICAgICAgICAgb2Zmc2V0ICs9IGNvbnRlbnRMZW5ndGggLSA0NFxyXG4gICAgICAgICAgICBjb250aW51ZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAvLyBMw6ogb3Mgw61uZGljZXMgZGFzIHBhcnRlc1xyXG4gICAgICAgICAgY29uc3QgcGFydEluZGljZXM6IG51bWJlcltdID0gW11cclxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtUGFydHM7IGkrKykge1xyXG4gICAgICAgICAgICBwYXJ0SW5kaWNlcy5wdXNoKHZpZXcuZ2V0SW50MzIob2Zmc2V0LCB0cnVlKSlcclxuICAgICAgICAgICAgb2Zmc2V0ICs9IDRcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLy8gTMOqIG9zIHBvbnRvc1xyXG4gICAgICAgICAgY29uc3QgcmluZ3M6IG51bWJlcltdW11bXSA9IFtdXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhgPT09IENPT1JERU5BREFTIERPIFNIQVBFRklMRSA9PT1gKVxyXG4gICAgICAgICAgY29uc29sZS5sb2coYE7Dum1lcm8gZGUgcGFydGVzOiAke251bVBhcnRzfWApXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhgTsO6bWVybyB0b3RhbCBkZSBwb250b3M6ICR7bnVtUG9pbnRzfWApXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGZvciAobGV0IHBhcnRJbmRleCA9IDA7IHBhcnRJbmRleCA8IG51bVBhcnRzOyBwYXJ0SW5kZXgrKykge1xyXG4gICAgICAgICAgICBjb25zdCBzdGFydEluZGV4ID0gcGFydEluZGljZXNbcGFydEluZGV4XVxyXG4gICAgICAgICAgICBjb25zdCBlbmRJbmRleCA9IHBhcnRJbmRleCA8IG51bVBhcnRzIC0gMSA/IHBhcnRJbmRpY2VzW3BhcnRJbmRleCArIDFdIDogbnVtUG9pbnRzXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCByaW5nOiBudW1iZXJbXVtdID0gW11cclxuICAgICAgICAgICAgY29uc29sZS5sb2coYC0tLSBSaW5nICR7cGFydEluZGV4ICsgMX0gKMOtbmRpY2VzICR7c3RhcnRJbmRleH0gYSAke2VuZEluZGV4IC0gMX0pIC0tLWApXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gc3RhcnRJbmRleDsgaSA8IGVuZEluZGV4OyBpKyspIHtcclxuICAgICAgICAgICAgICBjb25zdCB4ID0gdmlldy5nZXRGbG9hdDY0KG9mZnNldCwgdHJ1ZSlcclxuICAgICAgICAgICAgICBjb25zdCB5ID0gdmlldy5nZXRGbG9hdDY0KG9mZnNldCArIDgsIHRydWUpXHJcbiAgICAgICAgICAgICAgcmluZy5wdXNoKFt4LCB5XSlcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgICBQb250byAke2kgLSBzdGFydEluZGV4ICsgMX06IFske3gudG9GaXhlZCg2KX0sICR7eS50b0ZpeGVkKDYpfV1gKVxyXG4gICAgICAgICAgICAgIG9mZnNldCArPSAxNlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBGZWNoYSBvIHJpbmcgc2UgbmVjZXNzw6FyaW9cclxuICAgICAgICAgICAgaWYgKHJpbmcubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGZpcnN0ID0gcmluZ1swXVxyXG4gICAgICAgICAgICAgIGNvbnN0IGxhc3QgPSByaW5nW3JpbmcubGVuZ3RoIC0gMV1cclxuICAgICAgICAgICAgICBjb25zdCBpc0Nsb3NlZCA9IGZpcnN0WzBdID09PSBsYXN0WzBdICYmIGZpcnN0WzFdID09PSBsYXN0WzFdXHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coYCAgUmluZyAke3BhcnRJbmRleCArIDF9IGVzdMOhIGZlY2hhZG86ICR7aXNDbG9zZWR9YClcclxuICAgICAgICAgICAgICBpZiAoIWlzQ2xvc2VkKSB7XHJcbiAgICAgICAgICAgICAgICByaW5nLnB1c2goW2ZpcnN0WzBdLCBmaXJzdFsxXV0pXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgICBSaW5nICR7cGFydEluZGV4ICsgMX0gZm9pIGZlY2hhZG8gYWRpY2lvbmFuZG8gcG9udG86IFske2ZpcnN0WzBdLnRvRml4ZWQoNil9LCAke2ZpcnN0WzFdLnRvRml4ZWQoNil9XWApXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAgIFRvdGFsIGRlIHBvbnRvcyBubyByaW5nICR7cGFydEluZGV4ICsgMX06ICR7cmluZy5sZW5ndGh9YClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmluZ3MucHVzaChyaW5nKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhgLS0tIFJlc3VtbyBkYXMgQ29vcmRlbmFkYXMgLS0tYClcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGBUb3RhbCBkZSByaW5nczogJHtyaW5ncy5sZW5ndGh9YClcclxuICAgICAgICAgIHJpbmdzLmZvckVhY2goKHJpbmcsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBSaW5nICR7aW5kZXggKyAxfTogJHtyaW5nLmxlbmd0aH0gcG9udG9zYClcclxuICAgICAgICAgICAgaWYgKHJpbmcubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAgIFByaW1laXJvIHBvbnRvOiBbJHtyaW5nWzBdWzBdLnRvRml4ZWQoNil9LCAke3JpbmdbMF1bMV0udG9GaXhlZCg2KX1dYClcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgICDDmmx0aW1vIHBvbnRvOiBbJHtyaW5nW3JpbmcubGVuZ3RoIC0gMV1bMF0udG9GaXhlZCg2KX0sICR7cmluZ1tyaW5nLmxlbmd0aCAtIDFdWzFdLnRvRml4ZWQoNil9XWApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC8vIENyaWEgYSBnZW9tZXRyaWEgdXNhbmRvIFBvbHlnb24gZG8gQXJjR0lTIGNvbSBhIHByb2plw6fDo28gb3JpZ2luYWxcclxuICAgICAgICAgIGxldCBwb2x5Z29uR2VvbWV0cnkgPSBuZXcgUG9seWdvbih7XHJcbiAgICAgICAgICAgIHJpbmdzOiByaW5ncyxcclxuICAgICAgICAgICAgc3BhdGlhbFJlZmVyZW5jZTogbmV3IFNwYXRpYWxSZWZlcmVuY2Uoc3BhdGlhbFJlZmVyZW5jZSlcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGA9PT0gR0VPTUVUUklBIENSSUFEQSA9PT1gKVxyXG4gICAgICAgICAgY29uc29sZS5sb2coYFRpcG86IFBvbHlnb25gKVxyXG4gICAgICAgICAgY29uc29sZS5sb2coYFNwYXRpYWxSZWZlcmVuY2Ugb3JpZ2luYWw6IFdLSUQgJHtzcGF0aWFsUmVmZXJlbmNlLndraWR9YClcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGBOw7ptZXJvIGRlIHJpbmdzOiAke3JpbmdzLmxlbmd0aH1gKVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAvLyBPYnTDqW0gbyBleHRlbnQgZGEgZ2VvbWV0cmlhIG9yaWdpbmFsXHJcbiAgICAgICAgICBjb25zdCBvcmlnaW5hbEV4dGVudCA9IHBvbHlnb25HZW9tZXRyeS5leHRlbnRcclxuICAgICAgICAgIGlmIChvcmlnaW5hbEV4dGVudCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgRXh0ZW50IG9yaWdpbmFsOmApXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGAgIFhNaW46ICR7b3JpZ2luYWxFeHRlbnQueG1pbj8udG9GaXhlZCg2KX1gKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgICBZTWluOiAke29yaWdpbmFsRXh0ZW50LnltaW4/LnRvRml4ZWQoNil9YClcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYCAgWE1heDogJHtvcmlnaW5hbEV4dGVudC54bWF4Py50b0ZpeGVkKDYpfWApXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGAgIFlNYXg6ICR7b3JpZ2luYWxFeHRlbnQueW1heD8udG9GaXhlZCg2KX1gKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAvLyBDb252ZXJ0ZSBwYXJhIFNJUkdBUyAyMDAwICg0Njc0KSBzZSBuZWNlc3PDoXJpb1xyXG4gICAgICAgICAgaWYgKHNwYXRpYWxSZWZlcmVuY2Uud2tpZCAhPT0gdGFyZ2V0V2tpZCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgPT09IENPTlZFUlRFTkRPIFBST0pFw4fDg08gPT09YClcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYERlOiBXS0lEICR7c3BhdGlhbFJlZmVyZW5jZS53a2lkfWApXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBQYXJhOiBXS0lEICR7dGFyZ2V0V2tpZH0gKFNJUkdBUyAyMDAwKWApXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgIC8vIFVzYSBnZW9tZXRyeUVuZ2luZSBwYXJhIHByb2pldGFyIGEgZ2VvbWV0cmlhXHJcbiAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0U3BhdGlhbFJlZiA9IG5ldyBTcGF0aWFsUmVmZXJlbmNlKHsgd2tpZDogdGFyZ2V0V2tpZCB9KVxyXG4gICAgICAgICAgICAgIGNvbnN0IHByb2plY3RlZEdlb21ldHJ5ID0gZ2VvbWV0cnlFbmdpbmUucHJvamVjdChwb2x5Z29uR2VvbWV0cnksIHRhcmdldFNwYXRpYWxSZWYpIGFzIF9fZXNyaS5Qb2x5Z29uXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgaWYgKHByb2plY3RlZEdlb21ldHJ5KSB7XHJcbiAgICAgICAgICAgICAgICBwb2x5Z29uR2VvbWV0cnkgPSBwcm9qZWN0ZWRHZW9tZXRyeVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYOKckyBHZW9tZXRyaWEgY29udmVydGlkYSBjb20gc3VjZXNzbyBwYXJhIFdLSUQgJHt0YXJnZXRXa2lkfWApXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIE1vc3RyYSBvIGV4dGVudCBhcMOzcyBjb252ZXJzw6NvXHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0ZWRFeHRlbnQgPSBwb2x5Z29uR2VvbWV0cnkuZXh0ZW50XHJcbiAgICAgICAgICAgICAgICBpZiAocHJvamVjdGVkRXh0ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBFeHRlbnQgYXDDs3MgY29udmVyc8OjbzpgKVxyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgICBYTWluOiAke3Byb2plY3RlZEV4dGVudC54bWluPy50b0ZpeGVkKDYpfWApXHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAgIFlNaW46ICR7cHJvamVjdGVkRXh0ZW50LnltaW4/LnRvRml4ZWQoNil9YClcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCAgWE1heDogJHtwcm9qZWN0ZWRFeHRlbnQueG1heD8udG9GaXhlZCg2KX1gKVxyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgICBZTWF4OiAke3Byb2plY3RlZEV4dGVudC55bWF4Py50b0ZpeGVkKDYpfWApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2Fybign4pqgIENvbnZlcnPDo28gcmV0b3Jub3UgbnVsbC4gVXNhbmRvIGdlb21ldHJpYSBvcmlnaW5hbC4nKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBjYXRjaCAocHJvamVjdEVycm9yKSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJybyBhbyBjb252ZXJ0ZXIgcHJvamXDp8OjbzonLCBwcm9qZWN0RXJyb3IpXHJcbiAgICAgICAgICAgICAgY29uc29sZS53YXJuKCfimqAgVXNhbmRvIGdlb21ldHJpYSBuYSBwcm9qZcOnw6NvIG9yaWdpbmFsLiBBIEdQIHRvb2wgcG9kZSBuw6NvIGFjZWl0YXIuJylcclxuICAgICAgICAgICAgICAvLyBDb250aW51YSBjb20gYSBnZW9tZXRyaWEgb3JpZ2luYWxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYOKckyBHZW9tZXRyaWEgasOhIGVzdMOhIGVtIFNJUkdBUyAyMDAwICg0Njc0KS4gTsOjbyDDqSBuZWNlc3PDoXJpbyBjb252ZXJ0ZXIuYClcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLy8gQ3JpYSBhIGZlYXR1cmUgY29tbyBHcmFwaGljXHJcbiAgICAgICAgICBjb25zdCBncmFwaGljID0gbmV3IEdyYXBoaWMoe1xyXG4gICAgICAgICAgICBnZW9tZXRyeTogcG9seWdvbkdlb21ldHJ5LFxyXG4gICAgICAgICAgICBhdHRyaWJ1dGVzOiB7XHJcbiAgICAgICAgICAgICAgT0JKRUNUSUQ6IGZlYXR1cmVzLmxlbmd0aCArIDFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgZmVhdHVyZXMucHVzaChncmFwaGljKVxyXG4gICAgICAgICAgY29uc29sZS5sb2coYOKckyBGZWF0dXJlICR7ZmVhdHVyZXMubGVuZ3RofSBjcmlhZGEgY29tIHN1Y2Vzc29gKVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAvLyBTYWx2YSBhIGdlb21ldHJpYSBubyBlc3RhZG8gcGFyYSB1c28gcG9zdGVyaW9yIG5hIGFuw6FsaXNlXHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hhcGVmaWxlR2VvbWV0cnk6IHBvbHlnb25HZW9tZXRyeSB9KVxyXG4gICAgICAgICAgY29uc29sZS5sb2coJ+KckyBHZW9tZXRyaWEgZG8gc2hhcGVmaWxlIHNhbHZhIG5vIGVzdGFkbyAoV0tJRDonLCBwb2x5Z29uR2VvbWV0cnkuc3BhdGlhbFJlZmVyZW5jZT8ud2tpZCB8fCAnZGVzY29uaGVjaWRvJywgJyknKVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAvLyBQYXJhIHNpbXBsaWZpY2FyLCB2YW1vcyBwZWdhciBhcGVuYXMgYSBwcmltZWlyYSBmZWF0dXJlXHJcbiAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgfSBjYXRjaCAocGFyc2VFcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS53YXJuKCdFcnJvIGFvIGZhemVyIHBhcnNlIGRlIHVtYSBmZWF0dXJlOicsIHBhcnNlRXJyb3IpXHJcbiAgICAgICAgICBicmVha1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgaWYgKGZlYXR1cmVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTmVuaHVtYSBmZWF0dXJlIHbDoWxpZGEgZW5jb250cmFkYSBubyBzaGFwZWZpbGUnKVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBjb25zb2xlLmxvZyhg4pyTICR7ZmVhdHVyZXMubGVuZ3RofSBmZWF0dXJlKHMpIGV4dHJhw61kYShzKSBkbyBzaGFwZWZpbGVgKVxyXG4gICAgICBcclxuICAgICAgLy8gQ3JpYSBhIEZlYXR1cmVMYXllciBjb20gc291cmNlIHNlbmRvIHVtIGFycmF5IGRlIEdyYXBoaWNzXHJcbiAgICAgIGNvbnN0IGZlYXR1cmVMYXllciA9IG5ldyB0aGlzLkZlYXR1cmVMYXllcih7XHJcbiAgICAgICAgc291cmNlOiBmZWF0dXJlcyxcclxuICAgICAgICB0aXRsZTogYMOBcmVhIFByb3Bvc3RhIC0gJHt6aXBGaWxlLm5hbWUucmVwbGFjZSgnLnppcCcsICcnKX1gLFxyXG4gICAgICAgIGZpZWxkczogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnT0JKRUNUSUQnLFxyXG4gICAgICAgICAgICB0eXBlOiAnb2lkJyxcclxuICAgICAgICAgICAgYWxpYXM6ICdPQkpFQ1RJRCdcclxuICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIG9iamVjdElkRmllbGQ6ICdPQkpFQ1RJRCcsXHJcbiAgICAgICAgZ2VvbWV0cnlUeXBlOiAncG9seWdvbicsXHJcbiAgICAgICAgc3BhdGlhbFJlZmVyZW5jZTogbmV3IFNwYXRpYWxSZWZlcmVuY2Uoc3BhdGlhbFJlZmVyZW5jZSksXHJcbiAgICAgICAgb3BhY2l0eTogMS4wLCAvLyBPcGFjaWRhZGUgdG90YWwgcGFyYSByZXNwZWl0YXIgYSB0cmFuc3BhcsOqbmNpYSBkbyBzw61tYm9sb1xyXG4gICAgICAgIHJlbmRlcmVyOiB7XHJcbiAgICAgICAgICB0eXBlOiAnc2ltcGxlJyxcclxuICAgICAgICAgIHN5bWJvbDoge1xyXG4gICAgICAgICAgICB0eXBlOiAnc2ltcGxlLWZpbGwnLFxyXG4gICAgICAgICAgICBjb2xvcjogWzI1NSwgMjU1LCAwLCAwLjVdLCAvLyBBbWFyZWxvIGNvbSA1MCUgZGUgdHJhbnNwYXLDqm5jaWEgKFJHQkEpXHJcbiAgICAgICAgICAgIG91dGxpbmU6IHtcclxuICAgICAgICAgICAgICBjb2xvcjogWzI1NSwgMjU1LCAwLCAxXSwgLy8gQW1hcmVsbyBzw7NsaWRvIHBhcmEgYm9yZGFcclxuICAgICAgICAgICAgICB3aWR0aDogMlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICBcclxuICAgICAgLy8gQWRpY2lvbmEgYSBjYW1hZGEgYW8gbWFwYVxyXG4gICAgICB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcubWFwLmFkZChmZWF0dXJlTGF5ZXIpXHJcbiAgICAgIGNvbnNvbGUubG9nKCfinJMgQ2FtYWRhIGFkaWNpb25hZGEgYW8gbWFwYSBsb2NhbG1lbnRlJylcclxuICAgICAgXHJcbiAgICAgIC8vIEZ1bsOnw6NvIGF1eGlsaWFyIHBhcmEgZmF6ZXIgem9vbSBuYSBnZW9tZXRyaWFcclxuICAgICAgY29uc3Qgem9vbVRvR2VvbWV0cnkgPSAoZ2VvbWV0cnk6IF9fZXNyaS5Qb2x5Z29uKSA9PiB7XHJcbiAgICAgICAgaWYgKCFnZW9tZXRyeSB8fCAhdGhpcy5zdGF0ZS5qaW11TWFwVmlldz8udmlldykge1xyXG4gICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCBleHRlbnQgPSBnZW9tZXRyeS5leHRlbnRcclxuICAgICAgICAgIGlmICghZXh0ZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignRXh0ZW50IG7Do28gZGlzcG9uw612ZWwgcGFyYSBhIGdlb21ldHJpYScpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAvLyBWZXJpZmljYSBzZSBvIGV4dGVudCDDqSB2w6FsaWRvXHJcbiAgICAgICAgICBpZiAoZXh0ZW50LnhtaW4gPT09IG51bGwgfHwgZXh0ZW50LnhtYXggPT09IG51bGwgfHwgZXh0ZW50LnltaW4gPT09IG51bGwgfHwgZXh0ZW50LnltYXggPT09IG51bGwpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKCdFeHRlbnQgcG9zc3VpIHZhbG9yZXMgaW52w6FsaWRvcycpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAvLyBWZXJpZmljYSBzZSBuw6NvIMOpIGluZmluaXRvXHJcbiAgICAgICAgICBpZiAoIWlzRmluaXRlKGV4dGVudC54bWluKSB8fCAhaXNGaW5pdGUoZXh0ZW50LnhtYXgpIHx8ICFpc0Zpbml0ZShleHRlbnQueW1pbikgfHwgIWlzRmluaXRlKGV4dGVudC55bWF4KSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ0V4dGVudCBwb3NzdWkgdmFsb3JlcyBpbmZpbml0b3MnKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLy8gQ3JpYSB1bSBub3ZvIGV4dGVudCBleHBhbmRpZG9cclxuICAgICAgICAgIGNvbnN0IGV4cGFuZGVkRXh0ZW50ID0ge1xyXG4gICAgICAgICAgICB4bWluOiBleHRlbnQueG1pbiAtIChleHRlbnQueG1heCAtIGV4dGVudC54bWluKSAqIDAuMSxcclxuICAgICAgICAgICAgeW1pbjogZXh0ZW50LnltaW4gLSAoZXh0ZW50LnltYXggLSBleHRlbnQueW1pbikgKiAwLjEsXHJcbiAgICAgICAgICAgIHhtYXg6IGV4dGVudC54bWF4ICsgKGV4dGVudC54bWF4IC0gZXh0ZW50LnhtaW4pICogMC4xLFxyXG4gICAgICAgICAgICB5bWF4OiBleHRlbnQueW1heCArIChleHRlbnQueW1heCAtIGV4dGVudC55bWluKSAqIDAuMSxcclxuICAgICAgICAgICAgc3BhdGlhbFJlZmVyZW5jZTogZXh0ZW50LnNwYXRpYWxSZWZlcmVuY2VcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgdGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3LmdvVG8oZXhwYW5kZWRFeHRlbnQpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn4pyTIFpvb20gYXBsaWNhZG8gw6AgY2FtYWRhJylcclxuICAgICAgICAgIH0pLmNhdGNoKCh6b29tRXJyb3IpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKCdFcnJvIGFvIGZhemVyIHpvb206Jywgem9vbUVycm9yKVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS53YXJuKCdFcnJvIGFvIHByb2Nlc3NhciBleHRlbnQ6JywgZXJyb3IpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvLyBBZ3VhcmRhIGEgY2FtYWRhIGNhcnJlZ2FyIGUgZmF6IHpvb20gcGFyYSBlbGFcclxuICAgICAgZmVhdHVyZUxheWVyLndoZW4oKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdDYW1hZGEgY2FycmVnYWRhLCBmYXplbmRvIHpvb20uLi4nKVxyXG4gICAgICAgIGlmIChmZWF0dXJlcy5sZW5ndGggPiAwICYmIGZlYXR1cmVzWzBdLmdlb21ldHJ5KSB7XHJcbiAgICAgICAgICBjb25zdCBnZW9tZXRyeSA9IGZlYXR1cmVzWzBdLmdlb21ldHJ5IGFzIF9fZXNyaS5Qb2x5Z29uXHJcbiAgICAgICAgICB6b29tVG9HZW9tZXRyeShnZW9tZXRyeSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pLmNhdGNoKChsYXllckVycm9yKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJybyBhbyBjYXJyZWdhciBjYW1hZGE6JywgbGF5ZXJFcnJvcilcclxuICAgICAgfSlcclxuICAgICAgXHJcbiAgICAgIC8vIFRhbWLDqW0gZXNjdXRhIG8gZXZlbnRvIGxheWVydmlldy1jcmVhdGUgcGFyYSBnYXJhbnRpciBxdWUgYSBjYW1hZGEgZm9pIHJlbmRlcml6YWRhXHJcbiAgICAgIGZlYXR1cmVMYXllci5vbignbGF5ZXJ2aWV3LWNyZWF0ZScsIChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdMYXllclZpZXcgY3JpYWRhOicsIGV2ZW50KVxyXG4gICAgICAgIGlmIChmZWF0dXJlcy5sZW5ndGggPiAwICYmIGZlYXR1cmVzWzBdLmdlb21ldHJ5KSB7XHJcbiAgICAgICAgICBjb25zdCBnZW9tZXRyeSA9IGZlYXR1cmVzWzBdLmdlb21ldHJ5IGFzIF9fZXNyaS5Qb2x5Z29uXHJcbiAgICAgICAgICB6b29tVG9HZW9tZXRyeShnZW9tZXRyeSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIFxyXG4gICAgICAvLyBTYWx2YSBhIHJlZmVyw6puY2lhIGRhIGNhbWFkYSBubyBlc3RhZG9cclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNoYXBlZmlsZUxheWVyOiBmZWF0dXJlTGF5ZXIgfSlcclxuICAgICAgXHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm8gYW8gbGVyIHNoYXBlZmlsZSBlIGFkaWNpb25hciBjYW1hZGE6JywgZXJyb3IpXHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgRXJybyBhbyBwcm9jZXNzYXIgc2hhcGVmaWxlOiAke2Vycm9yLm1lc3NhZ2V9YClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIEluaWNpYSBvIG1vZG8gZGUgZGVzZW5ob1xyXG4gIGhhbmRsZVN0YXJ0RHJhd2luZyA9ICgpID0+IHtcclxuICAgIGlmICghdGhpcy5zdGF0ZS5za2V0Y2hWaWV3TW9kZWwpIHtcclxuICAgICAgYWxlcnQoJ0FndWFyZGUgbyBtYXBhIGNhcnJlZ2FyIGNvbXBsZXRhbWVudGUuJylcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgZHJhd2luZ01vZGU6IHRydWUgfSlcclxuICAgIHRoaXMuc3RhdGUuc2tldGNoVmlld01vZGVsLmNyZWF0ZSgncG9seWdvbicpXHJcbiAgfVxyXG5cclxuICAvLyBMaW1wYSBhIGFuw6FsaXNlIGUgcmVzZXRhIG9zIGNhbXBvc1xyXG4gIGhhbmRsZUNsZWFyQW5hbHlzaXMgPSAoKSA9PiB7XHJcbiAgICAvLyBSZW1vdmUgb3MgZ3LDoWZpY29zIGRlc2VuaGFkb3Mgbm8gbWFwYVxyXG4gICAgaWYgKHRoaXMuc3RhdGUuZ3JhcGhpY3NMYXllcikge1xyXG4gICAgICB0aGlzLnN0YXRlLmdyYXBoaWNzTGF5ZXIucmVtb3ZlQWxsKClcclxuICAgICAgY29uc29sZS5sb2coJ0dyw6FmaWNvcyByZW1vdmlkb3MgZG8gbWFwYScpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2FuY2VsYSBxdWFscXVlciBkZXNlbmhvIGVtIGFuZGFtZW50byBlIGxpbXBhIG8gc2tldGNoVmlld01vZGVsXHJcbiAgICBpZiAodGhpcy5zdGF0ZS5za2V0Y2hWaWV3TW9kZWwpIHtcclxuICAgICAgLy8gQ2FuY2VsYSBzZSBob3V2ZXIgdW0gZGVzZW5obyBlbSBhbmRhbWVudG9cclxuICAgICAgaWYgKHRoaXMuc3RhdGUuc2tldGNoVmlld01vZGVsLnN0YXRlICE9PSAncmVhZHknKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5za2V0Y2hWaWV3TW9kZWwuY2FuY2VsKClcclxuICAgICAgfVxyXG4gICAgICAvLyBHYXJhbnRlIHF1ZSBvIG1vZG8gZGUgZGVzZW5obyBlc3TDoSBkZXNhdGl2YWRvXHJcbiAgICAgIGlmICh0aGlzLnN0YXRlLnNrZXRjaFZpZXdNb2RlbC52aWV3KSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5za2V0Y2hWaWV3TW9kZWwudmlldy5wb3B1cCA9IG51bGxcclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmxvZygnU2tldGNoVmlld01vZGVsIGxpbXBvIC0gcHJvbnRvIHBhcmEgbm92byBkZXNlbmhvJylcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZW1vdmUgYSBjYW1hZGEgZG8gc2hhcGVmaWxlIHNlIGV4aXN0aXJcclxuICAgIGlmICh0aGlzLnN0YXRlLnNoYXBlZmlsZUxheWVyICYmIHRoaXMuc3RhdGUuamltdU1hcFZpZXc/LnZpZXc/Lm1hcCkge1xyXG4gICAgICB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcubWFwLnJlbW92ZSh0aGlzLnN0YXRlLnNoYXBlZmlsZUxheWVyKVxyXG4gICAgICBjb25zb2xlLmxvZygnQ2FtYWRhIGRvIHNoYXBlZmlsZSByZW1vdmlkYSBkbyBtYXBhJylcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXNldGEgbyBlc3RhZG9cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBxdWFudGlkYWRlSURFQTogMSxcclxuICAgICAgaWRlYVZhbHVlczogWycnXSxcclxuICAgICAgc2hhcGVmaWxlRmlsZTogbnVsbCxcclxuICAgICAgc2hhcGVmaWxlTGF5ZXI6IG51bGwsXHJcbiAgICAgIHNoYXBlZmlsZUdlb21ldHJ5OiBudWxsLFxyXG4gICAgICBkcmF3bkdlb21ldHJ5OiBudWxsLFxyXG4gICAgICBhbmFseXNpc1Jlc3VsdDogbnVsbCxcclxuICAgICAgcmVwb3J0VXJsOiBudWxsLFxyXG4gICAgICBkcmF3aW5nTW9kZTogZmFsc2UsXHJcbiAgICAgIGpvYklkOiBudWxsLFxyXG4gICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgcHJvZ3Jlc3M6IDBcclxuICAgIH0pXHJcblxyXG4gICAgLy8gTGltcGEgbyBpbnB1dCBkZSBhcnF1aXZvXHJcbiAgICBjb25zdCBmaWxlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hhcGVmaWxlLXVwbG9hZCcpIGFzIEhUTUxJbnB1dEVsZW1lbnRcclxuICAgIGlmIChmaWxlSW5wdXQpIHtcclxuICAgICAgZmlsZUlucHV0LnZhbHVlID0gJydcclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZygnQW7DoWxpc2UgbGltcGEgY29tcGxldGFtZW50ZS4gUHJvbnRvIHBhcmEgbm92YSBhbsOhbGlzZS4nKVxyXG4gIH1cclxuXHJcbiAgLy8gQmFpeGEgbyByZWxhdMOzcmlvXHJcbiAgaGFuZGxlRG93bmxvYWRSZXBvcnQgPSAoKSA9PiB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5yZXBvcnRVcmwpIHtcclxuICAgICAgd2luZG93Lm9wZW4odGhpcy5zdGF0ZS5yZXBvcnRVcmwsICdfYmxhbmsnKVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgYWxlcnQoJ05lbmh1bSByZWxhdMOzcmlvIGRpc3BvbsOtdmVsIHBhcmEgZG93bmxvYWQuJylcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIEZheiB1cGxvYWQgZG8gc2hhcGVmaWxlIFpJUCBwYXJhIG8gcG9ydGFsIGUgcmV0b3JuYSBhIFVSTCBkYSBjYW1hZGFcclxuICAvLyBOT1RBOiBQYXJhIEFyY0dJUyBTZXJ2ZXIsIHBvZGUgc2VyIG5lY2Vzc8OhcmlvIHVzYXIgYSBBUEkgUkVTVCBkaXJldGFtZW50ZVxyXG4gIHByaXZhdGUgYXN5bmMgdXBsb2FkU2hhcGVmaWxlVG9Qb3J0YWwoemlwRmlsZTogRmlsZSwgdG9rZW46IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zb2xlLmxvZygnPT09IElOSUNJQU5ETyBVUExPQUQgUEFSQSBQT1JUQUwgPT09JylcclxuICAgICAgY29uc29sZS5sb2coJ1BvcnRhbCBVUkw6JywgdGhpcy5QT1JUQUxfVVJMKVxyXG4gICAgICBjb25zb2xlLmxvZygnQXJxdWl2bzonLCB6aXBGaWxlLm5hbWUsICdUYW1hbmhvOicsIHppcEZpbGUuc2l6ZSwgJ2J5dGVzJylcclxuICAgICAgXHJcbiAgICAgIC8vIFBhcmEgQXJjR0lTIFNlcnZlciwgdmFtb3MgdGVudGFyIHVzYXIgYSBBUEkgUkVTVCBkaXJldGFtZW50ZVxyXG4gICAgICAvLyBQcmltZWlybywgdGVudGEgdXNhciBhIEFQSSBkbyBQb3J0YWwvU2VydmVyXHJcbiAgICAgIC8vIFNlIGZhbGhhciBwb3IgQ09SUywgdmFtb3MgdXNhciB1bWEgYWJvcmRhZ2VtIGFsdGVybmF0aXZhXHJcbiAgICAgIFxyXG4gICAgICAvLyBPcMOnw6NvIDE6IFRlbnRhIHVzYXIgL3NoYXJpbmcvcmVzdC9jb250ZW50L3VwbG9hZCAoUG9ydGFsIEFQSSlcclxuICAgICAgbGV0IHVwbG9hZFVybCA9IGAke3RoaXMuUE9SVEFMX1VSTH0vc2hhcmluZy9yZXN0L2NvbnRlbnQvdXBsb2FkYFxyXG4gICAgICBcclxuICAgICAgY29uc29sZS5sb2coJ1RlbnRhbmRvIGZhemVyIHVwbG9hZCB2aWEgUG9ydGFsIEFQSS4uLicpXHJcbiAgICAgIGNvbnNvbGUubG9nKCdVUkw6JywgdXBsb2FkVXJsKVxyXG4gICAgICBcclxuICAgICAgY29uc3QgdXBsb2FkRm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKVxyXG4gICAgICB1cGxvYWRGb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLCB6aXBGaWxlLCB6aXBGaWxlLm5hbWUpXHJcbiAgICAgIHVwbG9hZEZvcm1EYXRhLmFwcGVuZCgnZicsICdqc29uJylcclxuICAgICAgdXBsb2FkRm9ybURhdGEuYXBwZW5kKCd0b2tlbicsIHRva2VuKVxyXG4gICAgICBcclxuICAgICAgbGV0IHVwbG9hZFJlc3BvbnNlOiBSZXNwb25zZVxyXG4gICAgICBsZXQgdXBsb2FkUmVzdWx0OiBhbnlcclxuICAgICAgXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgdXBsb2FkUmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cGxvYWRVcmwsIHtcclxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgYm9keTogdXBsb2FkRm9ybURhdGEsXHJcbiAgICAgICAgICAvLyBOw6NvIGRlZmluZSBoZWFkZXJzIC0gbyBicm93c2VyIGRlZmluZSBhdXRvbWF0aWNhbWVudGUgcGFyYSBGb3JtRGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKCF1cGxvYWRSZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgY29uc3QgZXJyb3JUZXh0ID0gYXdhaXQgdXBsb2FkUmVzcG9uc2UudGV4dCgpXHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvIG5vIHVwbG9hZCAoc3RhdHVzKTonLCB1cGxvYWRSZXNwb25zZS5zdGF0dXMsIGVycm9yVGV4dClcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLy8gU2UgZm9yIGVycm8gNTAwIG91IENPUlMsIHRlbnRhIGFib3JkYWdlbSBhbHRlcm5hdGl2YVxyXG4gICAgICAgICAgaWYgKHVwbG9hZFJlc3BvbnNlLnN0YXR1cyA9PT0gNTAwIHx8IHVwbG9hZFJlc3BvbnNlLnN0YXR1cyA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NPUlMgb3UgZXJybyBkZSBzZXJ2aWRvci4gVGVudGFuZG8gYWJvcmRhZ2VtIGFsdGVybmF0aXZhLi4uJylcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvIGFvIGZhemVyIHVwbG9hZDogJHt1cGxvYWRSZXNwb25zZS5zdGF0dXN9IC0gJHtlcnJvclRleHR9YClcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdXBsb2FkUmVzdWx0ID0gYXdhaXQgdXBsb2FkUmVzcG9uc2UuanNvbigpXHJcbiAgICAgICAgY29uc29sZS5sb2coJ1Jlc3VsdGFkbyBkbyB1cGxvYWQ6JywgdXBsb2FkUmVzdWx0KVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh1cGxvYWRSZXN1bHQuZXJyb3IpIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJybyBubyB1cGxvYWQ6ICR7dXBsb2FkUmVzdWx0LmVycm9yLm1lc3NhZ2UgfHwgSlNPTi5zdHJpbmdpZnkodXBsb2FkUmVzdWx0LmVycm9yKX1gKVxyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZmV0Y2hFcnJvcjogYW55KSB7XHJcbiAgICAgICAgLy8gU2UgZmFsaGFyIHBvciBDT1JTIG91IG91dHJvIGVycm8gZGUgcmVkZVxyXG4gICAgICAgIGlmIChmZXRjaEVycm9yLm1lc3NhZ2U/LmluY2x1ZGVzKCdGYWlsZWQgdG8gZmV0Y2gnKSB8fCBmZXRjaEVycm9yLm1lc3NhZ2U/LmluY2x1ZGVzKCdDT1JTJykpIHtcclxuICAgICAgICAgIGNvbnNvbGUud2FybignRXJybyBkZSBDT1JTIGRldGVjdGFkby4gTyB1cGxvYWQgZGlyZXRvIG7Do28gw6kgcG9zc8OtdmVsIGRldmlkbyBhIHJlc3RyacOnw7VlcyBDT1JTLicpXHJcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ1NvbHXDp8OjbzogTyBhcnF1aXZvIFpJUCBzZXLDoSBlbnZpYWRvIGRpcmV0YW1lbnRlIHBhcmEgYSBHUCB0b29sLicpXHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NPUlNfQkxPQ0tFRCcpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRocm93IGZldGNoRXJyb3JcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgY29uc3QgaXRlbUlkID0gdXBsb2FkUmVzdWx0Lml0ZW0/LmlkIHx8IHVwbG9hZFJlc3VsdC5pdGVtSWRcclxuICAgICAgaWYgKCFpdGVtSWQpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ07Do28gZm9pIHBvc3PDrXZlbCBvYnRlciBvIElEIGRvIGl0ZW0gYXDDs3MgbyB1cGxvYWQnKVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBjb25zb2xlLmxvZygnSXRlbSBJRCBvYnRpZG86JywgaXRlbUlkKVxyXG4gICAgICBcclxuICAgICAgLy8gT2J0w6ltIGluZm9ybWHDp8O1ZXMgZG8gaXRlbVxyXG4gICAgICBjb25zdCBpdGVtSW5mb1VybCA9IGAke3RoaXMuUE9SVEFMX1VSTH0vc2hhcmluZy9yZXN0L2NvbnRlbnQvaXRlbXMvJHtpdGVtSWR9P2Y9anNvbiZ0b2tlbj0ke3Rva2VufWBcclxuICAgICAgXHJcbiAgICAgIGNvbnNvbGUubG9nKCdPYnRlbmRvIGluZm9ybWHDp8O1ZXMgZG8gaXRlbS4uLicpXHJcbiAgICAgIGNvbnN0IGl0ZW1JbmZvUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChpdGVtSW5mb1VybClcclxuICAgICAgXHJcbiAgICAgIGlmICghaXRlbUluZm9SZXNwb25zZS5vaykge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJybyBhbyBvYnRlciBpbmZvcm1hw6fDtWVzIGRvIGl0ZW06ICR7aXRlbUluZm9SZXNwb25zZS5zdGF0dXN9YClcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgY29uc3QgaXRlbUluZm8gPSBhd2FpdCBpdGVtSW5mb1Jlc3BvbnNlLmpzb24oKVxyXG4gICAgICBjb25zb2xlLmxvZygnSW5mb3JtYcOnw7VlcyBkbyBpdGVtOicsIGl0ZW1JbmZvKVxyXG4gICAgICBcclxuICAgICAgaWYgKGl0ZW1JbmZvLmVycm9yKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvIGFvIG9idGVyIGl0ZW06ICR7aXRlbUluZm8uZXJyb3IubWVzc2FnZSB8fCBKU09OLnN0cmluZ2lmeShpdGVtSW5mby5lcnJvcil9YClcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLy8gVGVudGEgcHVibGljYXIgY29tbyBmZWF0dXJlIHNlcnZpY2VcclxuICAgICAgLy8gUGFyYSBBcmNHSVMgU2VydmVyLCBwb2RlIHByZWNpc2FyIGRvIHVzZXJuYW1lXHJcbiAgICAgIC8vIFZhbW9zIHRlbnRhciBzZW0gdXNlcm5hbWUgcHJpbWVpcm8gKGFsZ3VucyBzZXJ2aWRvcmVzIHBlcm1pdGVtKVxyXG4gICAgICBjb25zdCBwdWJsaXNoVXJsID0gYCR7dGhpcy5QT1JUQUxfVVJMfS9zaGFyaW5nL3Jlc3QvY29udGVudC91c2Vycy9jb250ZW50L3B1Ymxpc2hgXHJcbiAgICAgIFxyXG4gICAgICBjb25zb2xlLmxvZygnUHVibGljYW5kbyBjb21vIGZlYXR1cmUgc2VydmljZS4uLicpXHJcbiAgICAgIGNvbnN0IHB1Ymxpc2hGb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpXHJcbiAgICAgIHB1Ymxpc2hGb3JtRGF0YS5hcHBlbmQoJ2l0ZW1JZCcsIGl0ZW1JZClcclxuICAgICAgcHVibGlzaEZvcm1EYXRhLmFwcGVuZCgnZmlsZXR5cGUnLCAnc2hhcGVmaWxlJylcclxuICAgICAgcHVibGlzaEZvcm1EYXRhLmFwcGVuZCgnZicsICdqc29uJylcclxuICAgICAgcHVibGlzaEZvcm1EYXRhLmFwcGVuZCgndG9rZW4nLCB0b2tlbilcclxuICAgICAgXHJcbiAgICAgIGNvbnN0IHB1Ymxpc2hSZXNwb25zZSA9IGF3YWl0IGZldGNoKHB1Ymxpc2hVcmwsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBib2R5OiBwdWJsaXNoRm9ybURhdGFcclxuICAgICAgfSlcclxuICAgICAgXHJcbiAgICAgIGlmICghcHVibGlzaFJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgY29uc3QgZXJyb3JUZXh0ID0gYXdhaXQgcHVibGlzaFJlc3BvbnNlLnRleHQoKVxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm8gbmEgcHVibGljYcOnw6NvOicsIGVycm9yVGV4dClcclxuICAgICAgICAvLyBTZSBmYWxoYXIsIHRlbnRhIG9idGVyIFVSTCBkbyBpdGVtIGRpcmV0YW1lbnRlXHJcbiAgICAgICAgY29uc29sZS5sb2coJ1RlbnRhbmRvIG9idGVyIFVSTCBkbyBpdGVtIGRpcmV0YW1lbnRlLi4uJylcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBwdWJsaXNoUmVzdWx0ID0gYXdhaXQgcHVibGlzaFJlc3BvbnNlLmpzb24oKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdSZXN1bHRhZG8gZGEgcHVibGljYcOnw6NvOicsIHB1Ymxpc2hSZXN1bHQpXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHB1Ymxpc2hSZXN1bHQuZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnNvbGUud2FybignRXJybyBuYSBwdWJsaWNhw6fDo28sIG1hcyBjb250aW51YW5kby4uLicsIHB1Ymxpc2hSZXN1bHQuZXJyb3IpXHJcbiAgICAgICAgfSBlbHNlIGlmIChwdWJsaXNoUmVzdWx0LnNlcnZpY2VzICYmIHB1Ymxpc2hSZXN1bHQuc2VydmljZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgY29uc3QgbGF5ZXJVcmwgPSBwdWJsaXNoUmVzdWx0LnNlcnZpY2VzWzBdLnNlcnZpY2V1cmxcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCfinJMgVVJMIGRhIGNhbWFkYSBvYnRpZGEgZGEgcHVibGljYcOnw6NvOicsIGxheWVyVXJsKVxyXG4gICAgICAgICAgcmV0dXJuIGxheWVyVXJsXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvLyBTZSBuw6NvIGNvbnNlZ3VpdSBwdWJsaWNhciwgdGVudGEgb2J0ZXIgVVJMIGRvIGl0ZW1cclxuICAgICAgaWYgKGl0ZW1JbmZvLnVybCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfinJMgVVJMIG9idGlkYSBkbyBpdGVtOicsIGl0ZW1JbmZvLnVybClcclxuICAgICAgICByZXR1cm4gaXRlbUluZm8udXJsXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8vIMOabHRpbWEgdGVudGF0aXZhOiBjb25zdHLDs2kgVVJMIGJhc2VhZGEgbm8gcGFkcsOjb1xyXG4gICAgICBjb25zdCBjb25zdHJ1Y3RlZFVybCA9IGAke3RoaXMuUE9SVEFMX1VSTH0vcmVzdC9zZXJ2aWNlcy9Ib3N0ZWQvJHtpdGVtSWR9L0ZlYXR1cmVTZXJ2ZXIvMGBcclxuICAgICAgY29uc29sZS5sb2coJ+KaoCBVc2FuZG8gVVJMIGNvbnN0cnXDrWRhIChwb2RlIG7Do28gZnVuY2lvbmFyKTonLCBjb25zdHJ1Y3RlZFVybClcclxuICAgICAgcmV0dXJuIGNvbnN0cnVjdGVkVXJsXHJcbiAgICAgIFxyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAvLyBTZSBvIGVycm8gZm9yIENPUlMsIHJldG9ybmEgbnVsbCBwYXJhIHVzYXIgZmFsbGJhY2tcclxuICAgICAgaWYgKGVycm9yLm1lc3NhZ2UgPT09ICdDT1JTX0JMT0NLRUQnKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKCdVcGxvYWQgYmxvcXVlYWRvIHBvciBDT1JTLiBVc2FuZG8gZmFsbGJhY2s6IGVudmlhciBhcnF1aXZvIGRpcmV0YW1lbnRlLicpXHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDT1JTX0JMT0NLRUQnKVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvIGNvbXBsZXRvIG5vIHVwbG9hZCBwYXJhIHBvcnRhbDonLCBlcnJvcilcclxuICAgICAgdGhyb3cgZXJyb3JcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIEZ1bsOnw6NvIGF1eGlsaWFyIHBhcmEgb2J0ZXIgdG9rZW4gdmlhIE9BdXRoMiB1c2FuZG8gY2xpZW50IHNlY3JldCAocXVhbmRvIG5lY2Vzc8OhcmlvKVxyXG4gIC8vIE5PVEE6IEVzdGEgZnVuw6fDo28gcG9kZSBzZXIgdXNhZGEgc2UgbyB0b2tlbiBmb3JuZWNpZG8gZXhwaXJhciBlIHByZWNpc2FybW9zIHJlbm92YXJcclxuICBwcml2YXRlIGFzeW5jIGdldFRva2VuVmlhT0F1dGgyKCk6IFByb21pc2U8c3RyaW5nIHwgbnVsbD4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgLy8gVVJMIGRvIHNlcnZpZG9yIEFyY0dJUyBwYXJhIG9idGVyIHRva2VuXHJcbiAgICAgIGNvbnN0IHNlcnZlclVybCA9ICdodHRwczovL21laW9hbWJpZW50ZS5zaXN0ZW1hcy5tcGJhLm1wLmJyL3NlcnZlcidcclxuICAgICAgY29uc3QgdG9rZW5VcmwgPSBgJHtzZXJ2ZXJVcmx9L3Rva2Vucy9nZW5lcmF0ZVRva2VuYFxyXG4gICAgICBcclxuICAgICAgLy8gUGFyYSB1c2FyIGNsaWVudCBzZWNyZXQsIGdlcmFsbWVudGUgcHJlY2lzYW1vcyBkbyBjbGllbnQgSUQgdGFtYsOpbVxyXG4gICAgICAvLyBDb21vIG7Do28gdGVtb3MgbyBjbGllbnQgSUQsIHZhbW9zIHRlbnRhciB1c2FyIG8gdG9rZW4gZm9ybmVjaWRvIGRpcmV0YW1lbnRlXHJcbiAgICAgIC8vIEVzdGEgZnVuw6fDo28gZXN0w6EgYXF1aSBjYXNvIHNlamEgbmVjZXNzw6FyaW8gaW1wbGVtZW50YXIgcmVub3Zhw6fDo28gZGUgdG9rZW4gbm8gZnV0dXJvXHJcbiAgICAgIFxyXG4gICAgICBjb25zb2xlLmxvZygnRnVuw6fDo28gZGUgcmVub3Zhw6fDo28gZGUgdG9rZW4gdmlhIE9BdXRoMiBkaXNwb27DrXZlbCAoY2xpZW50IHNlY3JldCBjb25maWd1cmFkbyknKVxyXG4gICAgICByZXR1cm4gbnVsbCAvLyBSZXRvcm5hIG51bGwgcGFyYSB1c2FyIG8gdG9rZW4gZm9ybmVjaWRvIHBvciBwYWRyw6NvXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvIGFvIHRlbnRhciBvYnRlciB0b2tlbiB2aWEgT0F1dGgyOicsIGVycm9yKVxyXG4gICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gRXhlY3V0YSBhIGFuw6FsaXNlIHVzYW5kbyBhIEdQIHRvb2xcclxuICBoYW5kbGVSdW5BbmFseXNpcyA9IGFzeW5jICgpID0+IHtcclxuICAgIC8vIFZhbGlkYcOnw7Vlc1xyXG4gICAgaWYgKHRoaXMuc3RhdGUuaWRlYVZhbHVlcy5zb21lKHZhbCA9PiAhdmFsIHx8IHZhbC50cmltKCkgPT09ICcnKSkge1xyXG4gICAgICBhbGVydCgnUG9yIGZhdm9yLCBwcmVlbmNoYSB0b2RvcyBvcyBuw7ptZXJvcyBkZSBJREVBLicpXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGhpcy5zdGF0ZS5zaGFwZWZpbGVHZW9tZXRyeSAmJiAhdGhpcy5zdGF0ZS5kcmF3bkdlb21ldHJ5KSB7XHJcbiAgICAgIGFsZXJ0KCdQb3IgZmF2b3IsIGZhw6dhIHVwbG9hZCBkZSB1bSBzaGFwZWZpbGUgT1UgZGVzZW5oZSB1bWEgw6FyZWEgbm8gbWFwYS4nKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5zdGF0ZS5zaGFwZWZpbGVHZW9tZXRyeSAmJiB0aGlzLnN0YXRlLmRyYXduR2VvbWV0cnkpIHtcclxuICAgICAgYWxlcnQoJ1BvciBmYXZvciwgZXNjb2xoYSBhcGVuYXMgVU1BIG9ww6fDo286IHVwbG9hZCBkZSBzaGFwZWZpbGUgT1UgZGVzZW5obyBubyBtYXBhLicpXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgXHJcbiAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSwgcHJvZ3Jlc3M6IDAsIGFuYWx5c2lzUmVzdWx0OiBudWxsLCByZXBvcnRVcmw6IG51bGwsIGpvYklkOiBudWxsIH0pXHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgLy8gQ2FycmVnYSBtw7NkdWxvcyBuZWNlc3PDoXJpb3NcclxuICAgICAgY29uc3QgaWRlbnRpdHlNb2R1bGVzID0gYXdhaXQgbG9hZEFyY0dJU0pTQVBJTW9kdWxlcyhbXHJcbiAgICAgICAgJ2VzcmkvaWRlbnRpdHkvSWRlbnRpdHlNYW5hZ2VyJ1xyXG4gICAgICBdKVxyXG4gICAgICBjb25zdCBbSWRlbnRpdHlNYW5hZ2VyXSA9IGlkZW50aXR5TW9kdWxlc1xyXG4gICAgICBcclxuICAgICAgLy8gT2J0w6ltIHRva2VuIC0gaW1wb3J0YW50ZSBwYXJhIGF1dGVudGljYcOnw6NvXHJcbiAgICAgIGxldCB0b2tlbjogc3RyaW5nIHwgbnVsbCA9IG51bGxcclxuICAgICAgdHJ5IHtcclxuICAgICAgICAvLyBUZW50YSBlbmNvbnRyYXIgY3JlZGVuY2lhbCBleGlzdGVudGVcclxuICAgICAgICBjb25zdCBjcmVkZW50aWFsID0gSWRlbnRpdHlNYW5hZ2VyLmZpbmRDcmVkZW50aWFsKHRoaXMuR1BfU0VSVklDRV9VUkwpXHJcbiAgICAgICAgaWYgKGNyZWRlbnRpYWwgJiYgY3JlZGVudGlhbC50b2tlbikge1xyXG4gICAgICAgICAgLy8gVmVyaWZpY2Egc2UgbyB0b2tlbiBuw6NvIGV4cGlyb3VcclxuICAgICAgICAgIGNvbnN0IGV4cGlyZXMgPSBjcmVkZW50aWFsLmV4cGlyZXNcclxuICAgICAgICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpXHJcbiAgICAgICAgICBpZiAoZXhwaXJlcyAmJiBleHBpcmVzID4gbm93KSB7XHJcbiAgICAgICAgICB0b2tlbiA9IGNyZWRlbnRpYWwudG9rZW5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1Rva2VuIGVuY29udHJhZG8gZSB2w6FsaWRvIHZpYSBJZGVudGl0eU1hbmFnZXInKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnVG9rZW4gZXhwaXJhIGVtOicsIG5ldyBEYXRlKGV4cGlyZXMpLnRvTG9jYWxlU3RyaW5nKCkpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKCdUb2tlbiBlbmNvbnRyYWRvIG1hcyBleHBpcmFkby4gVGVudGFuZG8gcmVub3Zhci4uLicpXHJcbiAgICAgICAgICAgIC8vIFRva2VuIGV4cGlyYWRvLCB0ZW50YSByZW5vdmFyXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgYXdhaXQgSWRlbnRpdHlNYW5hZ2VyLmNoZWNrU2lnbkluU3RhdHVzKHRoaXMuR1BfU0VSVklDRV9VUkwpXHJcbiAgICAgICAgICAgICAgY29uc3QgdXBkYXRlZENyZWRlbnRpYWwgPSBJZGVudGl0eU1hbmFnZXIuZmluZENyZWRlbnRpYWwodGhpcy5HUF9TRVJWSUNFX1VSTClcclxuICAgICAgICAgICAgICBpZiAodXBkYXRlZENyZWRlbnRpYWwgJiYgdXBkYXRlZENyZWRlbnRpYWwudG9rZW4pIHtcclxuICAgICAgICAgICAgICAgIHRva2VuID0gdXBkYXRlZENyZWRlbnRpYWwudG9rZW5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUb2tlbiByZW5vdmFkbyBjb20gc3VjZXNzbycpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGNhdGNoIChyZW5ld0Vycm9yKSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdOw6NvIGZvaSBwb3Nzw612ZWwgcmVub3ZhciB0b2tlbjonLCByZW5ld0Vycm9yKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vIE7Do28gdGVtIGNyZWRlbmNpYWwsIHRlbnRhIG9idGVyXHJcbiAgICAgICAgICBjb25zdCBzZXJ2ZXJJbmZvID0gSWRlbnRpdHlNYW5hZ2VyLmZpbmRTZXJ2ZXJJbmZvKHRoaXMuR1BfU0VSVklDRV9VUkwpXHJcbiAgICAgICAgICBpZiAoc2VydmVySW5mbykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnVGVudGFuZG8gb2J0ZXIgdG9rZW4gYXV0b21hdGljYW1lbnRlLi4uJylcclxuICAgICAgICAgICAgYXdhaXQgSWRlbnRpdHlNYW5hZ2VyLmNoZWNrU2lnbkluU3RhdHVzKHRoaXMuR1BfU0VSVklDRV9VUkwpXHJcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRDcmVkZW50aWFsID0gSWRlbnRpdHlNYW5hZ2VyLmZpbmRDcmVkZW50aWFsKHRoaXMuR1BfU0VSVklDRV9VUkwpXHJcbiAgICAgICAgICAgIGlmICh1cGRhdGVkQ3JlZGVudGlhbCAmJiB1cGRhdGVkQ3JlZGVudGlhbC50b2tlbikge1xyXG4gICAgICAgICAgICAgIHRva2VuID0gdXBkYXRlZENyZWRlbnRpYWwudG9rZW5cclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVG9rZW4gb2J0aWRvIGF1dG9tYXRpY2FtZW50ZScpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignU2VydmVySW5mbyBuw6NvIGVuY29udHJhZG8uIE8gc2Vydmlkb3IgcG9kZSByZXF1ZXJlciBhdXRlbnRpY2HDp8OjbyBtYW51YWwuJylcclxuICAgICAgICAgICAgLy8gVGVudGEgdmVyaWZpY2FyIHN0YXR1cyBtZXNtbyBzZW0gc2VydmVySW5mb1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgIGF3YWl0IElkZW50aXR5TWFuYWdlci5jaGVja1NpZ25JblN0YXR1cyh0aGlzLkdQX1NFUlZJQ0VfVVJMKVxyXG4gICAgICAgICAgICAgIGNvbnN0IG5ld0NyZWRlbnRpYWwgPSBJZGVudGl0eU1hbmFnZXIuZmluZENyZWRlbnRpYWwodGhpcy5HUF9TRVJWSUNFX1VSTClcclxuICAgICAgICAgICAgICBpZiAobmV3Q3JlZGVudGlhbCAmJiBuZXdDcmVkZW50aWFsLnRva2VuKSB7XHJcbiAgICAgICAgICAgICAgICB0b2tlbiA9IG5ld0NyZWRlbnRpYWwudG9rZW5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUb2tlbiBnZXJhZG8gY29tIHN1Y2Vzc28nKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBjYXRjaCAoc2lnbkluRXJyb3IpIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ07Do28gZm9pIHBvc3PDrXZlbCBnZXJhciB0b2tlbiBhdXRvbWF0aWNhbWVudGU6Jywgc2lnbkluRXJyb3IpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKHRva2VuRXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvIGFvIG9idGVyIHRva2VuOicsIHRva2VuRXJyb3IpXHJcbiAgICAgICAgY29uc29sZS53YXJuKCdDb250aW51YW5kbyBzZW0gdG9rZW4gLSBwb2RlIGNhdXNhciBlcnJvIGRlIGF1dGVudGljYcOnw6NvJylcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLy8gT3DDp8OjbyBkZSBmYWxsYmFjazogU0VNUFJFIHVzYSBvIHRva2VuIGZvcm5lY2lkbyAoasOhIGVzdMOhIGF1dG9yaXphZG8pXHJcbiAgICAgIC8vIE8gSWRlbnRpdHlNYW5hZ2VyIHBvZGUgbsOjbyBmdW5jaW9uYXIgZW0gYWxndW5zIGNhc29zLCBlbnTDo28gdXNhbW9zIG8gdG9rZW4gZm9ybmVjaWRvIGRpcmV0YW1lbnRlXHJcbiAgICAgIGlmICghdG9rZW4pIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oJ1Rva2VuIG7Do28gb2J0aWRvIHZpYSBJZGVudGl0eU1hbmFnZXIuIFVzYW5kbyB0b2tlbiBmb3JuZWNpZG8uLi4nKVxyXG4gICAgICAgIHRva2VuID0gdGhpcy5HUF9UT0tFTlxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIE1lc21vIHNlIG9idGV2ZSB0b2tlbiB2aWEgSWRlbnRpdHlNYW5hZ2VyLCB2YW1vcyB1c2FyIG8gdG9rZW4gZm9ybmVjaWRvIHBhcmEgZ2FyYW50aXJcclxuICAgICAgICBjb25zb2xlLmxvZygnVG9rZW4gb2J0aWRvIHZpYSBJZGVudGl0eU1hbmFnZXIsIG1hcyB1c2FuZG8gdG9rZW4gZm9ybmVjaWRvIHBhcmEgZ2FyYW50aXIgYXV0ZW50aWNhw6fDo28nKVxyXG4gICAgICAgIHRva2VuID0gdGhpcy5HUF9UT0tFTlxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBpZiAoIXRva2VuKSB7XHJcbiAgICAgICAgY29uc3QgZXJyb3JNc2cgPSAnQVRFTsOHw4NPOiBOZW5odW0gdG9rZW4gZm9pIG9idGlkby4gQSByZXF1aXNpw6fDo28gcG9kZSBmYWxoYXIgcG9yIGZhbHRhIGRlIGF1dGVudGljYcOnw6NvLlxcblxcbicgK1xyXG4gICAgICAgICAgJ1BvciBmYXZvciwgdmVyaWZpcXVlIHNlIHZvY8OqIGVzdMOhIGF1dGVudGljYWRvIG5vIHNlcnZpZG9yIEFyY0dJUyBlIHRlbnRlIG5vdmFtZW50ZS4nXHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvck1zZylcclxuICAgICAgICBhbGVydChlcnJvck1zZylcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSlcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgY29uc29sZS5sb2coJ1Rva2VuIGEgc2VyIHVzYWRvOicsIHRva2VuLnN1YnN0cmluZygwLCAzMCkgKyAnLi4uJylcclxuICAgICAgY29uc29sZS5sb2coJ1Rva2VuIGNvbXBsZXRvICjDumx0aW1vcyAzMCBjYXJhY3RlcmVzKTonLCAnLi4uJyArIHRva2VuLnN1YnN0cmluZyh0b2tlbi5sZW5ndGggLSAzMCkpXHJcbiAgICAgIFxyXG4gICAgICAvLyBWYWxpZGHDp8OjbyByw6FwaWRhIGRvIHRva2VuIGFudGVzIGRlIGVudmlhciAob3BjaW9uYWwsIHBvZGUgZmFsaGFyIHBvciBDT1JTKVxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHZhbGlkYXRlVXJsID0gYCR7dGhpcy5HUF9TRVJWSUNFX1VSTH0/Zj1qc29uJnRva2VuPSR7dG9rZW59YFxyXG4gICAgICAgIGNvbnN0IHZhbGlkYXRlUmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh2YWxpZGF0ZVVybCwgeyBtZXRob2Q6ICdHRVQnIH0pXHJcbiAgICAgICAgY29uc3QgdmFsaWRhdGVSZXN1bHQgPSBhd2FpdCB2YWxpZGF0ZVJlc3BvbnNlLmpzb24oKVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh2YWxpZGF0ZVJlc3VsdC5lcnJvcikge1xyXG4gICAgICAgICAgaWYgKHZhbGlkYXRlUmVzdWx0LmVycm9yLmNvZGUgPT09IDQ5OCB8fCB2YWxpZGF0ZVJlc3VsdC5lcnJvci5jb2RlID09PSA0MDEpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUb2tlbiBpbnbDoWxpZG8gb3UgZXhwaXJhZG8uIFBvciBmYXZvciwgZ2VyZSB1bSBub3ZvIHRva2VuLicpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCfinJMgVG9rZW4gdmFsaWRhZG8gYW50ZXMgZG8gZW52aW8nKVxyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAodmFsaWRhdGVFcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUud2FybignTsOjbyBmb2kgcG9zc8OtdmVsIHZhbGlkYXIgdG9rZW4gcHLDqXZpbyAocG9kZSBzZXIgQ09SUyk6JywgdmFsaWRhdGVFcnJvcilcclxuICAgICAgICAvLyBDb250aW51YSBtZXNtbyBhc3NpbSAtIHNlcsOhIHZhbGlkYWRvIG5hIHJlcXVpc2nDp8OjbyBwcmluY2lwYWxcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgYWRkVG9rZW5Ub1VybCA9ICh1cmwpID0+IHtcclxuICAgICAgICBpZiAoIXRva2VuKSByZXR1cm4gdXJsXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHVybE9iaiA9IG5ldyBVUkwodXJsKVxyXG4gICAgICAgICAgdXJsT2JqLnNlYXJjaFBhcmFtcy5zZXQoJ3Rva2VuJywgdG9rZW4pXHJcbiAgICAgICAgICByZXR1cm4gdXJsT2JqLnRvU3RyaW5nKClcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICBjb25zdCBzZXBhcmF0b3IgPSB1cmwuaW5jbHVkZXMoJz8nKSA/ICcmJyA6ICc/J1xyXG4gICAgICAgICAgcmV0dXJuIGAke3VybH0ke3NlcGFyYXRvcn10b2tlbj0ke2VuY29kZVVSSUNvbXBvbmVudCh0b2tlbil9YFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLy8gQnVzY2EgbWV0YWRhZG9zIGRhIEdQIHRvb2wgcGFyYSBkZXNjb2JyaXIgbm9tZXMgZXhhdG9zIGRvcyBwYXLDom1ldHJvc1xyXG4gICAgICAvLyBOT1RBOiBQYXJhIEdFVCAodGFza0luZm8pLCBvIHRva2VuIHBvZGUgaXIgbmEgVVJMLiBQYXJhIFBPU1QgKHN1Ym1pdEpvYiksIG8gdG9rZW4gdmFpIG5vIGJvZHkuXHJcbiAgICAgIGNvbnN0IHRhc2tOYW1lRW5jb2RlZEluZm8gPSBlbmNvZGVVUklDb21wb25lbnQodGhpcy5HUF9UQVNLX05BTUUpXHJcbiAgICAgIGNvbnN0IHRhc2tJbmZvVXJsID0gYCR7dGhpcy5HUF9TRVJWSUNFX1VSTH0vJHt0YXNrTmFtZUVuY29kZWRJbmZvfT9mPWpzb24ke3Rva2VuID8gYCZ0b2tlbj0ke3Rva2VufWAgOiAnJ31gXHJcbiAgICAgIFxyXG4gICAgICBsZXQgZ3BUYXNrSW5mbzogYW55ID0gbnVsbFxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGluZm9SZXNwb25zZSA9IGF3YWl0IGZldGNoKHRhc2tJbmZvVXJsKVxyXG4gICAgICAgIGlmIChpbmZvUmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgIGdwVGFza0luZm8gPSBhd2FpdCBpbmZvUmVzcG9uc2UuanNvbigpXHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnTWV0YWRhZG9zIGRhIEdQIHRvb2w6JywgZ3BUYXNrSW5mbylcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGluZm9FcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUud2FybignTsOjbyBmb2kgcG9zc8OtdmVsIGJ1c2NhciBtZXRhZGFkb3MgZGEgR1AgdG9vbDonLCBpbmZvRXJyb3IpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFByZXBhcmEgb3MgcGFyw6JtZXRyb3NcclxuICAgICAgY29uc3QgcGFyYW1zOiBhbnkgPSB7fVxyXG5cclxuICAgICAgLy8gUGFyw6JtZXRybzogUXVhbnRpZGFkZSBkZSBJREVBIGUgdmFsb3Jlc1xyXG4gICAgICAvLyBVc2Egb3Mgbm9tZXMgZXhhdG9zIGRvcyBtZXRhZGFkb3MgZGEgR1AgdG9vbFxyXG4gICAgICBsZXQgcXVhbnRpZGFkZVBhcmFtTmFtZSA9ICdxdWFudGlkYWRlX2lkZWEnXHJcbiAgICAgIGxldCBpZGVhUGFyYW1QcmVmaXggPSAnaWRlYV8nXHJcbiAgICAgIFxyXG4gICAgICBpZiAoZ3BUYXNrSW5mbyAmJiBncFRhc2tJbmZvLnBhcmFtZXRlcnMpIHtcclxuICAgICAgICAvLyBQcm9jdXJhIHBhcsOibWV0cm9zIHJlbGFjaW9uYWRvcyBhIElERUEgbm9zIG1ldGFkYWRvc1xyXG4gICAgICAgIGNvbnN0IHF1YW50aWRhZGVQYXJhbSA9IGdwVGFza0luZm8ucGFyYW1ldGVycy5maW5kKChwOiBhbnkpID0+IFxyXG4gICAgICAgICAgcC5uYW1lICYmIHAubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCdxdWFudGlkYWRlJylcclxuICAgICAgICApXHJcbiAgICAgICAgaWYgKHF1YW50aWRhZGVQYXJhbSkge1xyXG4gICAgICAgICAgcXVhbnRpZGFkZVBhcmFtTmFtZSA9IHF1YW50aWRhZGVQYXJhbS5uYW1lXHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnUGFyw6JtZXRybyBkZSBxdWFudGlkYWRlIGVuY29udHJhZG86JywgcXVhbnRpZGFkZVBhcmFtTmFtZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gUHJvY3VyYSBwYXLDom1ldHJvcyBJREVBIChpZGVhXzEsIGlkZWFfMiwgZXRjKVxyXG4gICAgICAgIGNvbnN0IGlkZWFQYXJhbXMgPSBncFRhc2tJbmZvLnBhcmFtZXRlcnMuZmlsdGVyKChwOiBhbnkpID0+IFxyXG4gICAgICAgICAgcC5uYW1lICYmIHAubmFtZS50b0xvd2VyQ2FzZSgpLnN0YXJ0c1dpdGgoJ2lkZWFfJylcclxuICAgICAgICApXHJcbiAgICAgICAgaWYgKGlkZWFQYXJhbXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgLy8gRXh0cmFpIG8gcHJlZml4byBkbyBwcmltZWlybyBwYXLDom1ldHJvIChleDogXCJpZGVhXzFcIiAtPiBcImlkZWFfXCIpXHJcbiAgICAgICAgICBjb25zdCBmaXJzdElkZWFQYXJhbSA9IGlkZWFQYXJhbXNbMF0ubmFtZVxyXG4gICAgICAgICAgaWRlYVBhcmFtUHJlZml4ID0gZmlyc3RJZGVhUGFyYW0uc3Vic3RyaW5nKDAsIGZpcnN0SWRlYVBhcmFtLmxhc3RJbmRleE9mKCdfJykgKyAxKVxyXG4gICAgICAgICAgY29uc29sZS5sb2coJ1BhcsOibWV0cm9zIElERUEgZW5jb250cmFkb3M6JywgaWRlYVBhcmFtcy5tYXAoKHA6IGFueSkgPT4gcC5uYW1lKSlcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdQcmVmaXhvIGRvcyBwYXLDom1ldHJvcyBJREVBOicsIGlkZWFQYXJhbVByZWZpeClcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8vIEFkaWNpb25hIHF1YW50aWRhZGUgZGUgSURFQVxyXG4gICAgICBwYXJhbXNbcXVhbnRpZGFkZVBhcmFtTmFtZV0gPSB0aGlzLnN0YXRlLnF1YW50aWRhZGVJREVBLnRvU3RyaW5nKClcclxuICAgICAgXHJcbiAgICAgIC8vIEFkaWNpb25hIG9zIHZhbG9yZXMgZGUgSURFQSAoaWRlYV8xLCBpZGVhXzIsIGV0YylcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnN0YXRlLmlkZWFWYWx1ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBwYXJhbXNbYCR7aWRlYVBhcmFtUHJlZml4fSR7aSArIDF9YF0gPSB0aGlzLnN0YXRlLmlkZWFWYWx1ZXNbaV0udHJpbSgpXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGNvbnNvbGUubG9nKCdQYXLDom1ldHJvcyBJREVBIHByZXBhcmFkb3M6Jywge1xyXG4gICAgICAgIHF1YW50aWRhZGU6IHBhcmFtc1txdWFudGlkYWRlUGFyYW1OYW1lXSxcclxuICAgICAgICBpZGVhczogT2JqZWN0LmtleXMocGFyYW1zKS5maWx0ZXIoayA9PiBrLnN0YXJ0c1dpdGgoaWRlYVBhcmFtUHJlZml4KSlcclxuICAgICAgfSlcclxuXHJcbiAgICAgIC8vIFBhcsOibWV0cm86IMOBcmVhIHByb3Bvc3RhIChzaGFwZWZpbGUgT1UgZ2VvbWV0cmlhIC0gbnVuY2EgYW1ib3MpXHJcbiAgICAgIC8vIFVzYSBvcyBub21lcyBleGF0b3MgZG9zIG1ldGFkYWRvcyBkYSBHUCB0b29sXHJcbiAgICAgIGxldCBzaGFwZWZpbGVQYXJhbU5hbWUgPSAnYXJlYV96aXAnXHJcbiAgICAgIGxldCBnZW9tZXRyeVBhcmFtTmFtZSA9ICdhcmVhX2Rlc2VuaG8nXHJcbiAgICAgIFxyXG4gICAgICBpZiAoZ3BUYXNrSW5mbyAmJiBncFRhc2tJbmZvLnBhcmFtZXRlcnMpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnVG9kb3Mgb3MgcGFyw6JtZXRyb3MgZGEgR1AgdG9vbDonLCBncFRhc2tJbmZvLnBhcmFtZXRlcnMubWFwKChwOiBhbnkpID0+ICh7XHJcbiAgICAgICAgICBuYW1lOiBwLm5hbWUsXHJcbiAgICAgICAgICBkYXRhVHlwZTogcC5kYXRhVHlwZSxcclxuICAgICAgICAgIGRpc3BsYXlOYW1lOiBwLmRpc3BsYXlOYW1lXHJcbiAgICAgICAgfSkpKVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFByb2N1cmEgcGFyw6JtZXRybyBkZSBzaGFwZWZpbGUgWklQIChHUERhdGFGaWxlKSAtIHVzYWRvIEFQRU5BUyBwYXJhIHVwbG9hZCBkZSBaSVBcclxuICAgICAgICBjb25zdCBzaGFwZWZpbGVQYXJhbSA9IGdwVGFza0luZm8ucGFyYW1ldGVycy5maW5kKChwOiBhbnkpID0+IFxyXG4gICAgICAgICAgcC5kYXRhVHlwZSA9PT0gJ0dQRGF0YUZpbGUnICYmIFxyXG4gICAgICAgICAgcC5uYW1lICYmIFxyXG4gICAgICAgICAgKHAubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCd6aXAnKSB8fCBwLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcygnc2hhcGVmaWxlJykpXHJcbiAgICAgICAgKVxyXG4gICAgICAgIGlmIChzaGFwZWZpbGVQYXJhbSkge1xyXG4gICAgICAgICAgc2hhcGVmaWxlUGFyYW1OYW1lID0gc2hhcGVmaWxlUGFyYW0ubmFtZVxyXG4gICAgICAgICAgY29uc29sZS5sb2coJ+KckyBQYXLDom1ldHJvIHBhcmEgU0hBUEVGSUxFIFpJUDonLCBzaGFwZWZpbGVQYXJhbU5hbWUsICdUaXBvOicsIHNoYXBlZmlsZVBhcmFtLmRhdGFUeXBlKVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBQcm9jdXJhIHBhcsOibWV0cm8gZGUgZ2VvbWV0cmlhIGRlc2VuaGFkYSAoR1BGZWF0dXJlUmVjb3JkU2V0TGF5ZXIpIC0gdXNhZG8gQVBFTkFTIHBhcmEgc2tldGNoXHJcbiAgICAgICAgLy8gSU1QT1JUQU5URTogRXN0ZSDDqSB1bSBwYXLDom1ldHJvIERJRkVSRU5URSBkbyBzaGFwZWZpbGVcclxuICAgICAgICBjb25zdCBnZW9tZXRyeVBhcmFtID0gZ3BUYXNrSW5mby5wYXJhbWV0ZXJzLmZpbmQoKHA6IGFueSkgPT4gXHJcbiAgICAgICAgICBwLmRhdGFUeXBlID09PSAnR1BGZWF0dXJlUmVjb3JkU2V0TGF5ZXInICYmXHJcbiAgICAgICAgICBwLm5hbWUgJiZcclxuICAgICAgICAgICFwLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcygnemlwJykgJiZcclxuICAgICAgICAgICFwLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcygnc2hhcGVmaWxlJylcclxuICAgICAgICApXHJcbiAgICAgICAgaWYgKGdlb21ldHJ5UGFyYW0pIHtcclxuICAgICAgICAgIGdlb21ldHJ5UGFyYW1OYW1lID0gZ2VvbWV0cnlQYXJhbS5uYW1lXHJcbiAgICAgICAgICBjb25zb2xlLmxvZygn4pyTIFBhcsOibWV0cm8gcGFyYSBHRU9NRVRSSUEgREVTRU5IQURBOicsIGdlb21ldHJ5UGFyYW1OYW1lLCAnVGlwbzonLCBnZW9tZXRyeVBhcmFtLmRhdGFUeXBlKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ+KaoCBOw6NvIGZvaSBlbmNvbnRyYWRvIHBhcsOibWV0cm8gR1BGZWF0dXJlUmVjb3JkU2V0TGF5ZXIgbm9zIG1ldGFkYWRvcycpXHJcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ1VzYW5kbyBub21lIHBhZHLDo286JywgZ2VvbWV0cnlQYXJhbU5hbWUpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvLyBJTVBPUlRBTlRFOiBTaGFwZWZpbGUgZSBnZW9tZXRyaWEgc8OjbyBNVVRVQU1FTlRFIEVYQ0xVU0lWT1NcclxuICAgICAgLy8gLSBTaGFwZWZpbGUgTGF5ZXI6IGV4dHJhaSBnZW9tZXRyaWEgZGEgY2FtYWRhIGUgZW52aWEgY29tbyBHUEZlYXR1cmVSZWNvcmRTZXRMYXllclxyXG4gICAgICAvLyAtIEdlb21ldHJpYSBkZXNlbmhhZGE6IHVzYSBwYXLDom1ldHJvIEdQRmVhdHVyZVJlY29yZFNldExheWVyIChvdXRybyBub21lKVxyXG4gICAgICBcclxuICAgICAgaWYgKHRoaXMuc3RhdGUuc2hhcGVmaWxlR2VvbWV0cnkpIHtcclxuICAgICAgICAvLyBVc2EgYSBnZW9tZXRyaWEgZG8gc2hhcGVmaWxlIHF1ZSBmb2kgc2FsdmEgcXVhbmRvIGEgY2FtYWRhIGZvaSBjcmlhZGFcclxuICAgICAgICBjb25zb2xlLmxvZygnPT09IFVTQU5ETyBHRU9NRVRSSUEgRE8gU0hBUEVGSUxFID09PScpXHJcbiAgICAgICAgY29uc29sZS5sb2coJ0dlb21ldHJpYSBkbyBzaGFwZWZpbGUgZW5jb250cmFkYSBubyBlc3RhZG8nKVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGdlb21ldHJ5ID0gdGhpcy5zdGF0ZS5zaGFwZWZpbGVHZW9tZXRyeVxyXG4gICAgICAgIGNvbnN0IHNwYXRpYWxSZWYgPSBnZW9tZXRyeS5zcGF0aWFsUmVmZXJlbmNlXHJcbiAgICAgICAgLy8gR2FyYW50ZSBxdWUgZXN0w6EgZW0gU0lSR0FTIDIwMDAgKDQ2NzQpIHBhcmEgZW52aW9cclxuICAgICAgICBsZXQgd2tpZCA9IHNwYXRpYWxSZWY/LndraWQgfHwgNDY3NFxyXG4gICAgICAgIGxldCBsYXRlc3RXa2lkID0gKHNwYXRpYWxSZWYgYXMgYW55KT8ubGF0ZXN0V2tpZCB8fCBzcGF0aWFsUmVmPy53a2lkIHx8IDQ2NzRcclxuICAgICAgICBcclxuICAgICAgICAvLyBTZSBuw6NvIGVzdGl2ZXIgZW0gNDY3NCwgZm9yw6dhIHBhcmEgNDY3NCAoasOhIGRldmVyaWEgdGVyIHNpZG8gY29udmVydGlkbyBhbnRlcylcclxuICAgICAgICBpZiAod2tpZCAhPT0gNDY3NCkge1xyXG4gICAgICAgICAgY29uc29sZS53YXJuKGDimqAgR2VvbWV0cmlhIGVzdMOhIGVtIFdLSUQgJHt3a2lkfSwgbWFzIGRldmUgZXN0YXIgZW0gNDY3NCAoU0lSR0FTIDIwMDApYClcclxuICAgICAgICAgIGNvbnNvbGUud2FybignRm9yw6dhbmRvIFdLSUQgcGFyYSA0Njc0IG5vIGVudmlvJylcclxuICAgICAgICAgIHdraWQgPSA0Njc0XHJcbiAgICAgICAgICBsYXRlc3RXa2lkID0gNDY3NFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBjb25zb2xlLmxvZygnR2VvbWV0cmlhIG9yaWdpbmFsOicsIGdlb21ldHJ5KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdUaXBvOicsIGdlb21ldHJ5LnR5cGUpXHJcbiAgICAgICAgY29uc29sZS5sb2coJ1NwYXRpYWxSZWZlcmVuY2UgKHdraWQvbGF0ZXN0V2tpZCk6Jywgd2tpZCwgJy8nLCBsYXRlc3RXa2lkKVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChnZW9tZXRyeS50eXBlID09PSAncG9seWdvbicpIHtcclxuICAgICAgICAgIGNvbnN0IHBvbHlnb24gPSBnZW9tZXRyeSBhcyBfX2VzcmkuUG9seWdvblxyXG4gICAgICAgICAgY29uc29sZS5sb2coJ1JpbmdzIGRvIHBvbMOtZ29ubzonLCBwb2x5Z29uLnJpbmdzKVxyXG4gICAgICAgICAgY29uc29sZS5sb2coJ07Dum1lcm8gZGUgcmluZ3M6JywgcG9seWdvbi5yaW5ncyA/IHBvbHlnb24ucmluZ3MubGVuZ3RoIDogMClcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLy8gVmVyaWZpY2Egc2UgdGVtIHJpbmdzIHbDoWxpZG9zXHJcbiAgICAgICAgICBpZiAoIXBvbHlnb24ucmluZ3MgfHwgcG9seWdvbi5yaW5ncy5sZW5ndGggPT09IDAgfHwgIXBvbHlnb24ucmluZ3NbMF0gfHwgcG9seWdvbi5yaW5nc1swXS5sZW5ndGggPCAzKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQSBnZW9tZXRyaWEgZG8gc2hhcGVmaWxlIG7Do28gw6kgdsOhbGlkYS4gUG9yIGZhdm9yLCB2ZXJpZmlxdWUgbyBhcnF1aXZvLicpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIENvbnZlcnRlIGEgZ2VvbWV0cmlhIHBhcmEgSlNPTlxyXG4gICAgICAgIGxldCBnZW9tZXRyeUpzb24gPSBnZW9tZXRyeS50b0pTT04oKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdHZW9tZXRyaWEgSlNPTiBvcmlnaW5hbDonLCBnZW9tZXRyeUpzb24pXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gR2FyYW50ZSBxdWUgb3MgcmluZ3MgZXN0w6NvIGZlY2hhZG9zIChwcmltZWlybyBlIMO6bHRpbW8gcG9udG8gZGV2ZW0gc2VyIGlndWFpcylcclxuICAgICAgICBpZiAoZ2VvbWV0cnkudHlwZSA9PT0gJ3BvbHlnb24nICYmIGdlb21ldHJ5SnNvbi5yaW5ncykge1xyXG4gICAgICAgICAgZ2VvbWV0cnlKc29uLnJpbmdzID0gZ2VvbWV0cnlKc29uLnJpbmdzLm1hcCgocmluZzogbnVtYmVyW11bXSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmluZy5sZW5ndGggPCAzKSB7XHJcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSaW5nIGRldmUgdGVyIHBlbG8gbWVub3MgMyBwb250b3MnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBWZXJpZmljYSBzZSBvIHJpbmcgZXN0w6EgZmVjaGFkbyAocHJpbWVpcm8gZSDDumx0aW1vIHBvbnRvIHPDo28gaWd1YWlzKVxyXG4gICAgICAgICAgICBjb25zdCBmaXJzdFBvaW50ID0gcmluZ1swXVxyXG4gICAgICAgICAgICBjb25zdCBsYXN0UG9pbnQgPSByaW5nW3JpbmcubGVuZ3RoIC0gMV1cclxuICAgICAgICAgICAgY29uc3QgaXNDbG9zZWQgPSBmaXJzdFBvaW50WzBdID09PSBsYXN0UG9pbnRbMF0gJiYgZmlyc3RQb2ludFsxXSA9PT0gbGFzdFBvaW50WzFdXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBTZSBuw6NvIGVzdGl2ZXIgZmVjaGFkbywgYWRpY2lvbmEgbyBwcmltZWlybyBwb250byBubyBmaW5hbFxyXG4gICAgICAgICAgICBpZiAoIWlzQ2xvc2VkKSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1JpbmcgbsOjbyBlc3RhdmEgZmVjaGFkby4gRmVjaGFuZG8uLi4nKVxyXG4gICAgICAgICAgICAgIHJpbmcgPSBbLi4ucmluZywgW2ZpcnN0UG9pbnRbMF0sIGZpcnN0UG9pbnRbMV1dXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBHYXJhbnRlIHF1ZSBjYWRhIHBvbnRvIHRlbSBleGF0YW1lbnRlIDIgY29vcmRlbmFkYXMgKHgsIHkpXHJcbiAgICAgICAgICAgIHJpbmcgPSByaW5nLm1hcCgocG9pbnQ6IG51bWJlcltdKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHBvaW50KSB8fCBwb2ludC5sZW5ndGggPCAyKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1BvbnRvIGludsOhbGlkbyBubyByaW5nJylcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLy8gR2FyYW50ZSBxdWUgdGVtIGV4YXRhbWVudGUgMiBjb29yZGVuYWRhcyAoeCwgeSlcclxuICAgICAgICAgICAgICByZXR1cm4gW3BvaW50WzBdLCBwb2ludFsxXV1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiByaW5nXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBJTVBPUlRBTlRFOiBBIGdlb21ldHJpYSBkZW50cm8gZG8gZmVhdHVyZSBERVZFIHRlciBzZXUgcHLDs3ByaW8gc3BhdGlhbFJlZmVyZW5jZVxyXG4gICAgICAgIC8vIEZvcm1hdG8gZXhhdG8gY29tbyBubyBleGVtcGxvIGZvcm5lY2lkb1xyXG4gICAgICAgIGdlb21ldHJ5SnNvbi5zcGF0aWFsUmVmZXJlbmNlID0ge1xyXG4gICAgICAgICAgd2tpZDogd2tpZCxcclxuICAgICAgICAgIGxhdGVzdFdraWQ6IGxhdGVzdFdraWRcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gVmFsaWRhw6fDo28gZmluYWwgZGEgZ2VvbWV0cmlhXHJcbiAgICAgICAgaWYgKGdlb21ldHJ5LnR5cGUgPT09ICdwb2x5Z29uJykge1xyXG4gICAgICAgICAgaWYgKCFnZW9tZXRyeUpzb24ucmluZ3MgfHwgZ2VvbWV0cnlKc29uLnJpbmdzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0dlb21ldHJpYSBkZSBwb2zDrWdvbm8gbsOjbyBwb3NzdWkgcmluZ3MgdsOhbGlkb3MnKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAvLyBWYWxpZGEgY2FkYSByaW5nXHJcbiAgICAgICAgICBnZW9tZXRyeUpzb24ucmluZ3MuZm9yRWFjaCgocmluZzogbnVtYmVyW11bXSwgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkocmluZykgfHwgcmluZy5sZW5ndGggPCA0KSB7IC8vIE3DrW5pbW8gNCBwb250b3MgKDMgKyBmZWNoYW1lbnRvKVxyXG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgUmluZyAke2luZGV4fSBuw6NvIMOpIHbDoWxpZG86IGRldmUgdGVyIHBlbG8gbWVub3MgNCBwb250b3MgKDMgKyBmZWNoYW1lbnRvKWApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIFZlcmlmaWNhIHNlIGVzdMOhIGZlY2hhZG9cclxuICAgICAgICAgICAgY29uc3QgZmlyc3QgPSByaW5nWzBdXHJcbiAgICAgICAgICAgIGNvbnN0IGxhc3QgPSByaW5nW3JpbmcubGVuZ3RoIC0gMV1cclxuICAgICAgICAgICAgaWYgKGZpcnN0WzBdICE9PSBsYXN0WzBdIHx8IGZpcnN0WzFdICE9PSBsYXN0WzFdKSB7XHJcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBSaW5nICR7aW5kZXh9IG7Do28gZXN0w6EgZmVjaGFkbyBjb3JyZXRhbWVudGVgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBDcmlhIHVtIEdQRmVhdHVyZVJlY29yZFNldExheWVyIG5vIGZvcm1hdG8gRVhBVE8gZXNwZXJhZG8gcGVsYSBHUCB0b29sXHJcbiAgICAgICAgLy8gU2VndWluZG8gbyBmb3JtYXRvIGRvIGV4ZW1wbG8gZm9ybmVjaWRvXHJcbiAgICAgICAgY29uc3QgZmVhdHVyZVJlY29yZFNldExheWVyID0ge1xyXG4gICAgICAgICAgZGlzcGxheUZpZWxkTmFtZTogJycsXHJcbiAgICAgICAgICBnZW9tZXRyeVR5cGU6ICdlc3JpR2VvbWV0cnlQb2x5Z29uJyxcclxuICAgICAgICAgIHNwYXRpYWxSZWZlcmVuY2U6IHtcclxuICAgICAgICAgICAgd2tpZDogd2tpZCxcclxuICAgICAgICAgICAgbGF0ZXN0V2tpZDogbGF0ZXN0V2tpZFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGZpZWxkczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgbmFtZTogJ09CSkVDVElEJyxcclxuICAgICAgICAgICAgICB0eXBlOiAnZXNyaUZpZWxkVHlwZU9JRCcsXHJcbiAgICAgICAgICAgICAgYWxpYXM6ICdPQkpFQ1RJRCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIG5hbWU6ICdTaGFwZV9MZW5ndGgnLFxyXG4gICAgICAgICAgICAgIHR5cGU6ICdlc3JpRmllbGRUeXBlRG91YmxlJyxcclxuICAgICAgICAgICAgICBhbGlhczogJ1NoYXBlX0xlbmd0aCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIG5hbWU6ICdTaGFwZV9BcmVhJyxcclxuICAgICAgICAgICAgICB0eXBlOiAnZXNyaUZpZWxkVHlwZURvdWJsZScsXHJcbiAgICAgICAgICAgICAgYWxpYXM6ICdTaGFwZV9BcmVhJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgICAgZmVhdHVyZXM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGdlb21ldHJ5OiBnZW9tZXRyeUpzb24sIC8vIGdlb21ldHJ5SnNvbiBqw6EgdGVtIHNwYXRpYWxSZWZlcmVuY2UgZGVudHJvXHJcbiAgICAgICAgICAgICAgYXR0cmlidXRlczoge1xyXG4gICAgICAgICAgICAgICAgT0JKRUNUSUQ6IDEsXHJcbiAgICAgICAgICAgICAgICBTaGFwZV9MZW5ndGg6IDAsXHJcbiAgICAgICAgICAgICAgICBTaGFwZV9BcmVhOiAwXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgICAgZXhjZWVkZWRUcmFuc2ZlckxpbWl0OiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBWYWxpZGHDp8OjbyBmaW5hbCBhbnRlcyBkZSBlbnZpYXJcclxuICAgICAgICBpZiAoIWZlYXR1cmVSZWNvcmRTZXRMYXllci5mZWF0dXJlcyB8fCBmZWF0dXJlUmVjb3JkU2V0TGF5ZXIuZmVhdHVyZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05lbmh1bWEgZmVhdHVyZSBmb2kgYWRpY2lvbmFkYSBhbyBGZWF0dXJlUmVjb3JkU2V0TGF5ZXInKVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZiAoIWZlYXR1cmVSZWNvcmRTZXRMYXllci5mZWF0dXJlc1swXS5nZW9tZXRyeSkge1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBIGdlb21ldHJpYSBuw6NvIGZvaSBhZGljaW9uYWRhIGFvIGZlYXR1cmUnKVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZiAoIWZlYXR1cmVSZWNvcmRTZXRMYXllci5mZWF0dXJlc1swXS5nZW9tZXRyeS5yaW5ncyB8fCBmZWF0dXJlUmVjb3JkU2V0TGF5ZXIuZmVhdHVyZXNbMF0uZ2VvbWV0cnkucmluZ3MubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0EgZ2VvbWV0cmlhIG7Do28gcG9zc3VpIHJpbmdzIHbDoWxpZG9zJylcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gTG9ncyBkZXRhbGhhZG9zIGRhcyBjb29yZGVuYWRhcyBhbnRlcyBkZSBlbnZpYXJcclxuICAgICAgICBjb25zb2xlLmxvZygnPT09IENPT1JERU5BREFTIERPIFNIQVBFRklMRSAoUFJPTlRBUyBQQVJBIEVOVklPKSA9PT0nKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdGZWF0dXJlUmVjb3JkU2V0TGF5ZXIgdmFsaWRhZG8gZSBwcm9udG8gcGFyYSBlbnZpbycpXHJcbiAgICAgICAgY29uc29sZS5sb2coJ07Dum1lcm8gZGUgZmVhdHVyZXM6JywgZmVhdHVyZVJlY29yZFNldExheWVyLmZlYXR1cmVzLmxlbmd0aClcclxuICAgICAgICBjb25zb2xlLmxvZygnTsO6bWVybyBkZSByaW5nczonLCBmZWF0dXJlUmVjb3JkU2V0TGF5ZXIuZmVhdHVyZXNbMF0uZ2VvbWV0cnkucmluZ3MubGVuZ3RoKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdTcGF0aWFsUmVmZXJlbmNlICh3a2lkL2xhdGVzdFdraWQpOicsIHdraWQsICcvJywgbGF0ZXN0V2tpZClcclxuICAgICAgICBcclxuICAgICAgICAvLyBNb3N0cmEgdG9kYXMgYXMgY29vcmRlbmFkYXMgZGV0YWxoYWRhbWVudGVcclxuICAgICAgICBpZiAoZmVhdHVyZVJlY29yZFNldExheWVyLmZlYXR1cmVzWzBdLmdlb21ldHJ5LnJpbmdzKSB7XHJcbiAgICAgICAgICBmZWF0dXJlUmVjb3JkU2V0TGF5ZXIuZmVhdHVyZXNbMF0uZ2VvbWV0cnkucmluZ3MuZm9yRWFjaCgocmluZzogbnVtYmVyW11bXSwgcmluZ0luZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYC0tLSBSaW5nICR7cmluZ0luZGV4ICsgMX0gKCR7cmluZy5sZW5ndGh9IHBvbnRvcykgLS0tYClcclxuICAgICAgICAgICAgcmluZy5mb3JFYWNoKChwb2ludDogbnVtYmVyW10sIHBvaW50SW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAgIFBvbnRvICR7cG9pbnRJbmRleCArIDF9OiBbJHtwb2ludFswXX0sICR7cG9pbnRbMV19XWApXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC8vIE1vc3RyYSBzZSBvIHJpbmcgZXN0w6EgZmVjaGFkb1xyXG4gICAgICAgICAgICBjb25zdCBmaXJzdCA9IHJpbmdbMF1cclxuICAgICAgICAgICAgY29uc3QgbGFzdCA9IHJpbmdbcmluZy5sZW5ndGggLSAxXVxyXG4gICAgICAgICAgICBjb25zdCBpc0Nsb3NlZCA9IGZpcnN0WzBdID09PSBsYXN0WzBdICYmIGZpcnN0WzFdID09PSBsYXN0WzFdXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGAgIFJpbmcgJHtyaW5nSW5kZXggKyAxfSBlc3TDoSBmZWNoYWRvOiAke2lzQ2xvc2VkfWApXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBNb3N0cmEgcmVzdW1vIGRhcyBjb29yZGVuYWRhc1xyXG4gICAgICAgIGlmIChmZWF0dXJlUmVjb3JkU2V0TGF5ZXIuZmVhdHVyZXNbMF0uZ2VvbWV0cnkucmluZ3MgJiYgZmVhdHVyZVJlY29yZFNldExheWVyLmZlYXR1cmVzWzBdLmdlb21ldHJ5LnJpbmdzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIGNvbnN0IGZpcnN0UmluZyA9IGZlYXR1cmVSZWNvcmRTZXRMYXllci5mZWF0dXJlc1swXS5nZW9tZXRyeS5yaW5nc1swXVxyXG4gICAgICAgICAgY29uc29sZS5sb2coJy0tLSBSZXN1bW8gZGFzIENvb3JkZW5hZGFzIC0tLScpXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhgVG90YWwgZGUgcG9udG9zIG5vIHByaW1laXJvIHJpbmc6ICR7Zmlyc3RSaW5nLmxlbmd0aH1gKVxyXG4gICAgICAgICAgY29uc29sZS5sb2coYFByaW1laXJvIHBvbnRvOiBbJHtmaXJzdFJpbmdbMF1bMF19LCAke2ZpcnN0UmluZ1swXVsxXX1dYClcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGDDmmx0aW1vIHBvbnRvOiBbJHtmaXJzdFJpbmdbZmlyc3RSaW5nLmxlbmd0aCAtIDFdWzBdfSwgJHtmaXJzdFJpbmdbZmlyc3RSaW5nLmxlbmd0aCAtIDFdWzFdfV1gKVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBFbnZpYSBjb21vIHN0cmluZyBKU09OIHVzYW5kbyBvIG5vbWUgY29ycmV0byBkbyBwYXLDom1ldHJvXHJcbiAgICAgICAgY29uc3QgZ2VvbWV0cnlWYWx1ZSA9IEpTT04uc3RyaW5naWZ5KGZlYXR1cmVSZWNvcmRTZXRMYXllcilcclxuICAgICAgICBwYXJhbXNbZ2VvbWV0cnlQYXJhbU5hbWVdID0gZ2VvbWV0cnlWYWx1ZVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdHZW9tZXRyaWEgYWRpY2lvbmFkYSBhbyBwYXLDom1ldHJvOicsIGdlb21ldHJ5UGFyYW1OYW1lKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdUYW1hbmhvIGRvIEpTT046JywgZ2VvbWV0cnlWYWx1ZS5sZW5ndGgsICdjYXJhY3RlcmVzJylcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLmRyYXduR2VvbWV0cnkpIHtcclxuICAgICAgICAvLyBQYXJhIEdQRmVhdHVyZVJlY29yZFNldExheWVyIChnZW9tZXRyaWEgZGVzZW5oYWRhKSwgZW52aWEgSlNPTlxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdVc2FuZG8gR0VPTUVUUklBIERFU0VOSEFEQSAtIHBhcsOibWV0cm86JywgZ2VvbWV0cnlQYXJhbU5hbWUpXHJcbiAgICAgICAgLy8gVmFsaWRhIGEgZ2VvbWV0cmlhIGFudGVzIGRlIGVudmlhclxyXG4gICAgICAgIGNvbnN0IGdlb21ldHJ5ID0gdGhpcy5zdGF0ZS5kcmF3bkdlb21ldHJ5XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0dlb21ldHJpYSBvcmlnaW5hbDonLCBnZW9tZXRyeSlcclxuICAgICAgICBjb25zb2xlLmxvZygnVGlwbzonLCBnZW9tZXRyeS50eXBlKVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChnZW9tZXRyeS50eXBlID09PSAncG9seWdvbicpIHtcclxuICAgICAgICAgIGNvbnN0IHBvbHlnb24gPSBnZW9tZXRyeSBhcyBfX2VzcmkuUG9seWdvblxyXG4gICAgICAgICAgY29uc29sZS5sb2coJ1JpbmdzIGRvIHBvbMOtZ29ubzonLCBwb2x5Z29uLnJpbmdzKVxyXG4gICAgICAgICAgY29uc29sZS5sb2coJ07Dum1lcm8gZGUgcmluZ3M6JywgcG9seWdvbi5yaW5ncyA/IHBvbHlnb24ucmluZ3MubGVuZ3RoIDogMClcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLy8gVmVyaWZpY2Egc2UgdGVtIHJpbmdzIHbDoWxpZG9zXHJcbiAgICAgICAgICBpZiAoIXBvbHlnb24ucmluZ3MgfHwgcG9seWdvbi5yaW5ncy5sZW5ndGggPT09IDAgfHwgIXBvbHlnb24ucmluZ3NbMF0gfHwgcG9seWdvbi5yaW5nc1swXS5sZW5ndGggPCAzKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQSBnZW9tZXRyaWEgZGVzZW5oYWRhIG7Do28gw6kgdsOhbGlkYS4gUG9yIGZhdm9yLCBkZXNlbmhlIHVtIHBvbMOtZ29ubyBjb20gcGVsbyBtZW5vcyAzIHBvbnRvcy4nKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBDb252ZXJ0ZSBhIGdlb21ldHJpYSBwYXJhIEpTT05cclxuICAgICAgICBsZXQgZ2VvbWV0cnlKc29uID0gZ2VvbWV0cnkudG9KU09OKClcclxuICAgICAgICBjb25zb2xlLmxvZygnR2VvbWV0cmlhIEpTT04gb3JpZ2luYWw6JywgZ2VvbWV0cnlKc29uKVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHNwYXRpYWxSZWYgPSBnZW9tZXRyeS5zcGF0aWFsUmVmZXJlbmNlXHJcbiAgICAgICAgY29uc29sZS5sb2coJ1NwYXRpYWxSZWZlcmVuY2Ugb3JpZ2luYWw6Jywgc3BhdGlhbFJlZilcclxuICAgICAgICBcclxuICAgICAgICAvLyBPYnTDqW0gbyBXS0lEIGRvIHNwYXRpYWwgcmVmZXJlbmNlXHJcbiAgICAgICAgLy8gSU1QT1JUQU5URTogVXNhIG8gc3BhdGlhbFJlZmVyZW5jZSBkYSBnZW9tZXRyaWEgb3JpZ2luYWwsIG7Do28gdW0gcGFkcsOjb1xyXG4gICAgICAgIGNvbnN0IHdraWQgPSBzcGF0aWFsUmVmPy53a2lkIHx8IChzcGF0aWFsUmVmIGFzIGFueSk/LndrVGV4dCB8fCAxMDIxMDBcclxuICAgICAgICBjb25zdCBsYXRlc3RXa2lkID0gKHNwYXRpYWxSZWYgYXMgYW55KT8ubGF0ZXN0V2tpZCB8fCBzcGF0aWFsUmVmPy53a2lkIHx8IDM4NTdcclxuICAgICAgICBcclxuICAgICAgICAvLyBHYXJhbnRlIHF1ZSBvcyByaW5ncyBlc3TDo28gZmVjaGFkb3MgKHByaW1laXJvIGUgw7psdGltbyBwb250byBkZXZlbSBzZXIgaWd1YWlzKVxyXG4gICAgICAgIGlmIChnZW9tZXRyeS50eXBlID09PSAncG9seWdvbicgJiYgZ2VvbWV0cnlKc29uLnJpbmdzKSB7XHJcbiAgICAgICAgICBnZW9tZXRyeUpzb24ucmluZ3MgPSBnZW9tZXRyeUpzb24ucmluZ3MubWFwKChyaW5nOiBudW1iZXJbXVtdKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyaW5nLmxlbmd0aCA8IDMpIHtcclxuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JpbmcgZGV2ZSB0ZXIgcGVsbyBtZW5vcyAzIHBvbnRvcycpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIFZlcmlmaWNhIHNlIG8gcmluZyBlc3TDoSBmZWNoYWRvIChwcmltZWlybyBlIMO6bHRpbW8gcG9udG8gc8OjbyBpZ3VhaXMpXHJcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0UG9pbnQgPSByaW5nWzBdXHJcbiAgICAgICAgICAgIGNvbnN0IGxhc3RQb2ludCA9IHJpbmdbcmluZy5sZW5ndGggLSAxXVxyXG4gICAgICAgICAgICBjb25zdCBpc0Nsb3NlZCA9IGZpcnN0UG9pbnRbMF0gPT09IGxhc3RQb2ludFswXSAmJiBmaXJzdFBvaW50WzFdID09PSBsYXN0UG9pbnRbMV1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIFNlIG7Do28gZXN0aXZlciBmZWNoYWRvLCBhZGljaW9uYSBvIHByaW1laXJvIHBvbnRvIG5vIGZpbmFsXHJcbiAgICAgICAgICAgIGlmICghaXNDbG9zZWQpIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUmluZyBuw6NvIGVzdGF2YSBmZWNoYWRvLiBGZWNoYW5kby4uLicpXHJcbiAgICAgICAgICAgICAgcmluZyA9IFsuLi5yaW5nLCBbZmlyc3RQb2ludFswXSwgZmlyc3RQb2ludFsxXV1dXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIEdhcmFudGUgcXVlIGNhZGEgcG9udG8gdGVtIGV4YXRhbWVudGUgMiBjb29yZGVuYWRhcyAoeCwgeSlcclxuICAgICAgICAgICAgcmluZyA9IHJpbmcubWFwKChwb2ludDogbnVtYmVyW10pID0+IHtcclxuICAgICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkocG9pbnQpIHx8IHBvaW50Lmxlbmd0aCA8IDIpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUG9udG8gaW52w6FsaWRvIG5vIHJpbmcnKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvLyBHYXJhbnRlIHF1ZSB0ZW0gZXhhdGFtZW50ZSAyIGNvb3JkZW5hZGFzICh4LCB5KVxyXG4gICAgICAgICAgICAgIHJldHVybiBbcG9pbnRbMF0sIHBvaW50WzFdXVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIHJpbmdcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIElNUE9SVEFOVEU6IEEgZ2VvbWV0cmlhIGRlbnRybyBkbyBmZWF0dXJlIERFVkUgdGVyIHNldSBwcsOzcHJpbyBzcGF0aWFsUmVmZXJlbmNlXHJcbiAgICAgICAgLy8gRm9ybWF0byBleGF0byBjb21vIG5vIGV4ZW1wbG8gZm9ybmVjaWRvXHJcbiAgICAgICAgZ2VvbWV0cnlKc29uLnNwYXRpYWxSZWZlcmVuY2UgPSB7XHJcbiAgICAgICAgICB3a2lkOiB3a2lkLFxyXG4gICAgICAgICAgbGF0ZXN0V2tpZDogbGF0ZXN0V2tpZFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBWYWxpZGHDp8OjbyBmaW5hbCBkYSBnZW9tZXRyaWFcclxuICAgICAgICBpZiAoZ2VvbWV0cnkudHlwZSA9PT0gJ3BvbHlnb24nKSB7XHJcbiAgICAgICAgICBpZiAoIWdlb21ldHJ5SnNvbi5yaW5ncyB8fCBnZW9tZXRyeUpzb24ucmluZ3MubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignR2VvbWV0cmlhIGRlIHBvbMOtZ29ubyBuw6NvIHBvc3N1aSByaW5ncyB2w6FsaWRvcycpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC8vIFZhbGlkYSBjYWRhIHJpbmdcclxuICAgICAgICAgIGdlb21ldHJ5SnNvbi5yaW5ncy5mb3JFYWNoKChyaW5nOiBudW1iZXJbXVtdLCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShyaW5nKSB8fCByaW5nLmxlbmd0aCA8IDQpIHsgLy8gTcOtbmltbyA0IHBvbnRvcyAoMyArIGZlY2hhbWVudG8pXHJcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBSaW5nICR7aW5kZXh9IG7Do28gw6kgdsOhbGlkbzogZGV2ZSB0ZXIgcGVsbyBtZW5vcyA0IHBvbnRvcyAoMyArIGZlY2hhbWVudG8pYClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gVmVyaWZpY2Egc2UgZXN0w6EgZmVjaGFkb1xyXG4gICAgICAgICAgICBjb25zdCBmaXJzdCA9IHJpbmdbMF1cclxuICAgICAgICAgICAgY29uc3QgbGFzdCA9IHJpbmdbcmluZy5sZW5ndGggLSAxXVxyXG4gICAgICAgICAgICBpZiAoZmlyc3RbMF0gIT09IGxhc3RbMF0gfHwgZmlyc3RbMV0gIT09IGxhc3RbMV0pIHtcclxuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFJpbmcgJHtpbmRleH0gbsOjbyBlc3TDoSBmZWNoYWRvIGNvcnJldGFtZW50ZWApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIENyaWEgdW0gR1BGZWF0dXJlUmVjb3JkU2V0TGF5ZXIgbm8gZm9ybWF0byBFWEFUTyBlc3BlcmFkbyBwZWxhIEdQIHRvb2xcclxuICAgICAgICAvLyBTZWd1aW5kbyBvIGZvcm1hdG8gZG8gZXhlbXBsbyBmb3JuZWNpZG9cclxuICAgICAgICBjb25zdCBmZWF0dXJlUmVjb3JkU2V0TGF5ZXIgPSB7XHJcbiAgICAgICAgICBkaXNwbGF5RmllbGROYW1lOiAnJyxcclxuICAgICAgICAgIGdlb21ldHJ5VHlwZTogJ2VzcmlHZW9tZXRyeVBvbHlnb24nLFxyXG4gICAgICAgICAgc3BhdGlhbFJlZmVyZW5jZToge1xyXG4gICAgICAgICAgICB3a2lkOiB3a2lkLFxyXG4gICAgICAgICAgICBsYXRlc3RXa2lkOiBsYXRlc3RXa2lkXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZmllbGRzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBuYW1lOiAnT0JKRUNUSUQnLFxyXG4gICAgICAgICAgICAgIHR5cGU6ICdlc3JpRmllbGRUeXBlT0lEJyxcclxuICAgICAgICAgICAgICBhbGlhczogJ09CSkVDVElEJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgbmFtZTogJ1NoYXBlX0xlbmd0aCcsXHJcbiAgICAgICAgICAgICAgdHlwZTogJ2VzcmlGaWVsZFR5cGVEb3VibGUnLFxyXG4gICAgICAgICAgICAgIGFsaWFzOiAnU2hhcGVfTGVuZ3RoJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgbmFtZTogJ1NoYXBlX0FyZWEnLFxyXG4gICAgICAgICAgICAgIHR5cGU6ICdlc3JpRmllbGRUeXBlRG91YmxlJyxcclxuICAgICAgICAgICAgICBhbGlhczogJ1NoYXBlX0FyZWEnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgICBmZWF0dXJlczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgZ2VvbWV0cnk6IGdlb21ldHJ5SnNvbiwgLy8gZ2VvbWV0cnlKc29uIGrDoSB0ZW0gc3BhdGlhbFJlZmVyZW5jZSBkZW50cm9cclxuICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiB7XHJcbiAgICAgICAgICAgICAgICBPQkpFQ1RJRDogMSxcclxuICAgICAgICAgICAgICAgIFNoYXBlX0xlbmd0aDogMCxcclxuICAgICAgICAgICAgICAgIFNoYXBlX0FyZWE6IDBcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgICBleGNlZWRlZFRyYW5zZmVyTGltaXQ6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFZhbGlkYcOnw6NvIGZpbmFsIGFudGVzIGRlIGVudmlhclxyXG4gICAgICAgIGlmICghZmVhdHVyZVJlY29yZFNldExheWVyLmZlYXR1cmVzIHx8IGZlYXR1cmVSZWNvcmRTZXRMYXllci5mZWF0dXJlcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTmVuaHVtYSBmZWF0dXJlIGZvaSBhZGljaW9uYWRhIGFvIEZlYXR1cmVSZWNvcmRTZXRMYXllcicpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICghZmVhdHVyZVJlY29yZFNldExheWVyLmZlYXR1cmVzWzBdLmdlb21ldHJ5KSB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0EgZ2VvbWV0cmlhIG7Do28gZm9pIGFkaWNpb25hZGEgYW8gZmVhdHVyZScpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICghZmVhdHVyZVJlY29yZFNldExheWVyLmZlYXR1cmVzWzBdLmdlb21ldHJ5LnJpbmdzIHx8IGZlYXR1cmVSZWNvcmRTZXRMYXllci5mZWF0dXJlc1swXS5nZW9tZXRyeS5yaW5ncy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQSBnZW9tZXRyaWEgbsOjbyBwb3NzdWkgcmluZ3MgdsOhbGlkb3MnKVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBMb2dzIGRldGFsaGFkb3MgZGFzIGNvb3JkZW5hZGFzIGFudGVzIGRlIGVudmlhclxyXG4gICAgICAgIGNvbnNvbGUubG9nKCc9PT0gQ09PUkRFTkFEQVMgRE8gREVTRU5ITyAoUFJPTlRBUyBQQVJBIEVOVklPKSA9PT0nKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdGZWF0dXJlUmVjb3JkU2V0TGF5ZXIgdmFsaWRhZG8gZSBwcm9udG8gcGFyYSBlbnZpbycpXHJcbiAgICAgICAgY29uc29sZS5sb2coJ07Dum1lcm8gZGUgZmVhdHVyZXM6JywgZmVhdHVyZVJlY29yZFNldExheWVyLmZlYXR1cmVzLmxlbmd0aClcclxuICAgICAgICBjb25zb2xlLmxvZygnTsO6bWVybyBkZSByaW5nczonLCBmZWF0dXJlUmVjb3JkU2V0TGF5ZXIuZmVhdHVyZXNbMF0uZ2VvbWV0cnkucmluZ3MubGVuZ3RoKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdTcGF0aWFsUmVmZXJlbmNlICh3a2lkL2xhdGVzdFdraWQpOicsIHdraWQsICcvJywgbGF0ZXN0V2tpZClcclxuICAgICAgICBcclxuICAgICAgICAvLyBNb3N0cmEgdG9kYXMgYXMgY29vcmRlbmFkYXMgZGV0YWxoYWRhbWVudGVcclxuICAgICAgICBpZiAoZmVhdHVyZVJlY29yZFNldExheWVyLmZlYXR1cmVzWzBdLmdlb21ldHJ5LnJpbmdzKSB7XHJcbiAgICAgICAgICBmZWF0dXJlUmVjb3JkU2V0TGF5ZXIuZmVhdHVyZXNbMF0uZ2VvbWV0cnkucmluZ3MuZm9yRWFjaCgocmluZzogbnVtYmVyW11bXSwgcmluZ0luZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYC0tLSBSaW5nICR7cmluZ0luZGV4ICsgMX0gKCR7cmluZy5sZW5ndGh9IHBvbnRvcykgLS0tYClcclxuICAgICAgICAgICAgcmluZy5mb3JFYWNoKChwb2ludDogbnVtYmVyW10sIHBvaW50SW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAgIFBvbnRvICR7cG9pbnRJbmRleCArIDF9OiBbJHtwb2ludFswXX0sICR7cG9pbnRbMV19XWApXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC8vIE1vc3RyYSBzZSBvIHJpbmcgZXN0w6EgZmVjaGFkb1xyXG4gICAgICAgICAgICBjb25zdCBmaXJzdCA9IHJpbmdbMF1cclxuICAgICAgICAgICAgY29uc3QgbGFzdCA9IHJpbmdbcmluZy5sZW5ndGggLSAxXVxyXG4gICAgICAgICAgICBjb25zdCBpc0Nsb3NlZCA9IGZpcnN0WzBdID09PSBsYXN0WzBdICYmIGZpcnN0WzFdID09PSBsYXN0WzFdXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGAgIFJpbmcgJHtyaW5nSW5kZXggKyAxfSBlc3TDoSBmZWNoYWRvOiAke2lzQ2xvc2VkfWApXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBNb3N0cmEgcmVzdW1vIGRhcyBjb29yZGVuYWRhc1xyXG4gICAgICAgIGlmIChmZWF0dXJlUmVjb3JkU2V0TGF5ZXIuZmVhdHVyZXNbMF0uZ2VvbWV0cnkucmluZ3MgJiYgZmVhdHVyZVJlY29yZFNldExheWVyLmZlYXR1cmVzWzBdLmdlb21ldHJ5LnJpbmdzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIGNvbnN0IGZpcnN0UmluZyA9IGZlYXR1cmVSZWNvcmRTZXRMYXllci5mZWF0dXJlc1swXS5nZW9tZXRyeS5yaW5nc1swXVxyXG4gICAgICAgICAgY29uc29sZS5sb2coJy0tLSBSZXN1bW8gZGFzIENvb3JkZW5hZGFzIC0tLScpXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhgVG90YWwgZGUgcG9udG9zIG5vIHByaW1laXJvIHJpbmc6ICR7Zmlyc3RSaW5nLmxlbmd0aH1gKVxyXG4gICAgICAgICAgY29uc29sZS5sb2coYFByaW1laXJvIHBvbnRvOiBbJHtmaXJzdFJpbmdbMF1bMF19LCAke2ZpcnN0UmluZ1swXVsxXX1dYClcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGDDmmx0aW1vIHBvbnRvOiBbJHtmaXJzdFJpbmdbZmlyc3RSaW5nLmxlbmd0aCAtIDFdWzBdfSwgJHtmaXJzdFJpbmdbZmlyc3RSaW5nLmxlbmd0aCAtIDFdWzFdfV1gKVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBFbnZpYSBjb21vIHN0cmluZyBKU09OIHVzYW5kbyBvIG5vbWUgY29ycmV0byBkbyBwYXLDom1ldHJvXHJcbiAgICAgICAgY29uc3QgZ2VvbWV0cnlWYWx1ZSA9IEpTT04uc3RyaW5naWZ5KGZlYXR1cmVSZWNvcmRTZXRMYXllcilcclxuICAgICAgICBwYXJhbXNbZ2VvbWV0cnlQYXJhbU5hbWVdID0gZ2VvbWV0cnlWYWx1ZVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdHZW9tZXRyaWEgYWRpY2lvbmFkYSBhbyBwYXLDom1ldHJvOicsIGdlb21ldHJ5UGFyYW1OYW1lKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdUYW1hbmhvIGRvIEpTT046JywgZ2VvbWV0cnlWYWx1ZS5sZW5ndGgsICdjYXJhY3RlcmVzJylcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gUHJlcGFyYSBmb3JtIGRhdGFcclxuICAgICAgbGV0IHJlcXVlc3RCb2R5OiBGb3JtRGF0YSB8IFVSTFNlYXJjaFBhcmFtc1xyXG4gICAgICBsZXQgY29udGVudFR5cGU6IHN0cmluZ1xyXG5cclxuICAgICAgLy8gSU1QT1JUQU5URTogUGFyYSBHUEZlYXR1cmVSZWNvcmRTZXRMYXllciwgc2VtcHJlIHVzYSBGb3JtRGF0YSBwYXJhIGdhcmFudGlyIHF1ZSBvIEpTT04gc2VqYSBlbnZpYWRvIGNvcnJldGFtZW50ZVxyXG4gICAgICAvLyBVUkxTZWFyY2hQYXJhbXMgcG9kZSBjb2RpZmljYXIgbyBKU09OIGRlIGZvcm1hIGluY29ycmV0YSBwYXJhIGFsZ3VucyBzZXJ2aWRvcmVzXHJcbiAgICAgIGNvbnN0IGhhc0dlb21ldHJ5ID0gISF0aGlzLnN0YXRlLmRyYXduR2VvbWV0cnkgfHwgISF0aGlzLnN0YXRlLnNoYXBlZmlsZUdlb21ldHJ5XHJcblxyXG4gICAgICBpZiAoaGFzR2VvbWV0cnkpIHtcclxuICAgICAgICAvLyBVc2EgRm9ybURhdGEgcGFyYSBtdWx0aXBhcnQvZm9ybS1kYXRhIChwZXJtaXRlIGVudmlhciBnZW9tZXRyaWEpXHJcbiAgICAgICAgcmVxdWVzdEJvZHkgPSBuZXcgRm9ybURhdGEoKVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIElNUE9SVEFOVEU6IEFkaWNpb25hIG9zIHBhcsOibWV0cm9zIG5hIG9yZGVtIGNvcnJldGFcclxuICAgICAgICAvLyBQcmltZWlybyBvcyBwYXLDom1ldHJvcyBzaW1wbGVzIChJREVBLCBxdWFudGlkYWRlKVxyXG4gICAgICAgIE9iamVjdC5rZXlzKHBhcmFtcykuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICAgICAgLy8gQWRpY2lvbmEgdG9kb3Mgb3MgcGFyw6JtZXRyb3MsIGluY2x1aW5kbyBnZW9tZXRyaWEgY29tbyBzdHJpbmcgSlNPTlxyXG4gICAgICAgICAgY29uc3QgdmFsdWUgPSBTdHJpbmcocGFyYW1zW2tleV0pXHJcbiAgICAgICAgICByZXF1ZXN0Qm9keS5hcHBlbmQoa2V5LCB2YWx1ZSlcclxuICAgICAgICAgIGlmIChrZXkgPT09IGdlb21ldHJ5UGFyYW1OYW1lKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBHZW9tZXRyaWEgYWRpY2lvbmFkYSBhbyBGb3JtRGF0YTogJHtrZXl9ICgke3ZhbHVlLmxlbmd0aH0gY2FyYWN0ZXJlcylgKVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYFBhcsOibWV0cm8gYWRpY2lvbmFkbyBhbyBGb3JtRGF0YTogJHtrZXl9ID0gJHt2YWx1ZX1gKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gSU1QT1JUQU5URTogVG9rZW4gZSBmPWpzb24gbm8gYm9keSBkbyBGb3JtRGF0YSAobsOjbyBuYSBVUkwgcGFyYSBQT1NUKVxyXG4gICAgICAgIC8vIElzc28gc2UgYXBsaWNhIHRhbnRvIHBhcmEgc2hhcGVmaWxlIHF1YW50byBwYXJhIHNrZXRjaFxyXG4gICAgICAgIGlmICh0b2tlbikge1xyXG4gICAgICAgICAgcmVxdWVzdEJvZHkuYXBwZW5kKCd0b2tlbicsIHRva2VuKVxyXG4gICAgICAgICAgY29uc29sZS5sb2coJ+KckyBUb2tlbiBhZGljaW9uYWRvIGFvIEZvcm1EYXRhIGJvZHkgKE7Dg08gbmEgVVJMKScpXHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnVG9rZW4gbm8gRm9ybURhdGEgKHZlcmlmaWNhw6fDo28pOicsIHJlcXVlc3RCb2R5LmhhcygndG9rZW4nKSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcign4pqgIEFURU7Dh8ODTzogVG9rZW4gbsOjbyBlc3TDoSBkaXNwb27DrXZlbCBwYXJhIGFkaWNpb25hciBhbyBGb3JtRGF0YSEnKVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBBZGljaW9uYSBmPWpzb24gbm8gYm9keSB0YW1iw6ltXHJcbiAgICAgICAgcmVxdWVzdEJvZHkuYXBwZW5kKCdmJywgJ2pzb24nKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCfinJMgZj1qc29uIGFkaWNpb25hZG8gYW8gRm9ybURhdGEgYm9keScpXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gTsODTyBkZWZpbmUgQ29udGVudC1UeXBlIG1hbnVhbG1lbnRlIC0gbyBicm93c2VyIGRlZmluZSBhdXRvbWF0aWNhbWVudGUgY29tIGJvdW5kYXJ5XHJcbiAgICAgICAgY29udGVudFR5cGUgPSAnbXVsdGlwYXJ0L2Zvcm0tZGF0YSdcclxuICAgICAgICBjb25zb2xlLmxvZygnRm9ybURhdGEgcHJlcGFyYWRvIGNvbScsIE9iamVjdC5rZXlzKHBhcmFtcykubGVuZ3RoLCAncGFyw6JtZXRyb3MgKyB0b2tlbiArIGY9anNvbicpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gVXNhIFVSTFNlYXJjaFBhcmFtcyBwYXJhIGFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCAoc2VtIGdlb21ldHJpYSBuZW0gYXJxdWl2bylcclxuICAgICAgICByZXF1ZXN0Qm9keSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIElNUE9SVEFOVEU6IFRva2VuIGUgZj1qc29uIG5vIGJvZHkgZG8gVVJMU2VhcmNoUGFyYW1zIChuw6NvIG5hIFVSTCBwYXJhIFBPU1QpXHJcbiAgICAgICAgLy8gSXNzbyBzZSBhcGxpY2EgdGFudG8gcGFyYSBzaGFwZWZpbGUgcXVhbnRvIHBhcmEgc2tldGNoXHJcbiAgICAgICAgcmVxdWVzdEJvZHkuYXBwZW5kKCdmJywgJ2pzb24nKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCfinJMgZj1qc29uIGFkaWNpb25hZG8gYW8gVVJMU2VhcmNoUGFyYW1zIGJvZHknKVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh0b2tlbikge1xyXG4gICAgICAgICAgcmVxdWVzdEJvZHkuYXBwZW5kKCd0b2tlbicsIHRva2VuKVxyXG4gICAgICAgICAgY29uc29sZS5sb2coJ+KckyBUb2tlbiBhZGljaW9uYWRvIGFvIFVSTFNlYXJjaFBhcmFtcyBib2R5IChOw4NPIG5hIFVSTCknKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCfimqAgQVRFTsOHw4NPOiBUb2tlbiBuw6NvIGVzdMOhIGRpc3BvbsOtdmVsIHBhcmEgYWRpY2lvbmFyIGFvIFVSTFNlYXJjaFBhcmFtcyEnKVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBBZGljaW9uYSBvcyBvdXRyb3MgcGFyw6JtZXRyb3NcclxuICAgICAgICBPYmplY3Qua2V5cyhwYXJhbXMpLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgICAgIHJlcXVlc3RCb2R5LmFwcGVuZChrZXksIFN0cmluZyhwYXJhbXNba2V5XSkpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgICAgICBjb250ZW50VHlwZSA9ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXHJcbiAgICAgICAgY29uc29sZS5sb2coJ1VSTFNlYXJjaFBhcmFtcyBwcmVwYXJhZG8gY29tJywgT2JqZWN0LmtleXMocGFyYW1zKS5sZW5ndGgsICdwYXLDom1ldHJvcyArIHRva2VuICsgZj1qc29uJylcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gVVJMIGRvIHN1Ym1pdEpvYiAoYXNzw61uY3JvbmEpIC0gdXNhbmRvIGEgVVJMIGZvcm5lY2lkYSBwZWxvIHVzdcOhcmlvXHJcbiAgICAgIGNvbnN0IHRhc2tOYW1lRW5jb2RlZCA9IGVuY29kZVVSSUNvbXBvbmVudCh0aGlzLkdQX1RBU0tfTkFNRSlcclxuICAgICAgY29uc3Qgc3VibWl0Sm9iVXJsID0gYCR7dGhpcy5HUF9TRVJWSUNFX1VSTH0vJHt0YXNrTmFtZUVuY29kZWR9L3N1Ym1pdEpvYmBcclxuXHJcbiAgICAgIC8vIElNUE9SVEFOVEU6IFBhcmEgUE9TVCwgbyB0b2tlbiBkZXZlIGlyIG5vIEJPRFksIG7Do28gbmEgVVJMXHJcbiAgICAgIC8vIFVSTCBsaW1wYSwgc2VtIHF1ZXJ5IHBhcmFtZXRlcnMgKGluY2x1aW5kbyB0b2tlbilcclxuICAgICAgY29uc3QgZmluYWxVcmwgPSBzdWJtaXRKb2JVcmxcclxuICAgICAgY29uc29sZS5sb2coJ1VSTCBmaW5hbCAobGltcGEsIHNlbSBxdWVyeSBwYXJhbXMgZSBzZW0gdG9rZW4pOicsIGZpbmFsVXJsKVxyXG4gICAgICBjb25zb2xlLmxvZygn4pyTIFRva2VuIHNlcsOhIGVudmlhZG8gQVBFTkFTIG5vIGJvZHksIG7Do28gbmEgVVJMJylcclxuXHJcbiAgICAgIGNvbnN0IGhlYWRlcnM6IGFueSA9IHt9XHJcbiAgICAgIC8vIElNUE9SVEFOVEU6IFBhcmEgRm9ybURhdGEsIE5VTkNBIGRlZmluZSBDb250ZW50LVR5cGUgbWFudWFsbWVudGVcclxuICAgICAgLy8gTyBicm93c2VyIGRlZmluZSBhdXRvbWF0aWNhbWVudGUgY29tIGJvdW5kYXJ5IGNvcnJldG9cclxuICAgICAgLy8gU2UgZGVmaW5pciBtYW51YWxtZW50ZSwgbyBib3VuZGFyeSBzZXLDoSBpbmNvcnJldG8gZSBjYXVzYXLDoSBlcnJvIFwiRXJyb3IgcGFyc2luZyBtdWx0aS1wYXJ0IHJlcXVlc3RcIlxyXG4gICAgICBpZiAoIXRoaXMuc3RhdGUuc2hhcGVmaWxlR2VvbWV0cnkgJiYgIXRoaXMuc3RhdGUuZHJhd25HZW9tZXRyeSkge1xyXG4gICAgICAgIC8vIFBhcmEgVVJMU2VhcmNoUGFyYW1zLCBkZWZpbmUgQ29udGVudC1UeXBlIGV4cGxpY2l0YW1lbnRlXHJcbiAgICAgICAgaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPSAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xyXG4gICAgICB9XHJcbiAgICAgIC8vIFBhcmEgRm9ybURhdGEsIG7Do28gZGVmaW5lIENvbnRlbnQtVHlwZSAtIG8gYnJvd3NlciBmYXogaXNzbyBhdXRvbWF0aWNhbWVudGVcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKCdFbnZpYW5kbyByZXF1aXNpw6fDo28gcGFyYTonLCBmaW5hbFVybClcclxuICAgICAgY29uc29sZS5sb2coJ1BhcsOibWV0cm9zOicsIHBhcmFtcylcclxuICAgICAgY29uc29sZS5sb2coJ1Rva2VuIG5vIGJvZHk6JywgISF0b2tlbilcclxuICAgICAgaWYgKHRoaXMuc3RhdGUuc2hhcGVmaWxlR2VvbWV0cnkpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnR2VvbWV0cmlhIGRvIHNoYXBlZmlsZSBhIHVzYXInKVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBQYXJhIHVwbG9hZCBkZSBhcnF1aXZvLCBwb2RlIHByZWNpc2FyIGRlIGNyZWRlbnRpYWxzXHJcbiAgICAgIGNvbnN0IGZldGNoT3B0aW9uczogUmVxdWVzdEluaXQgPSB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczogaGVhZGVycyxcclxuICAgICAgICBib2R5OiByZXF1ZXN0Qm9keSxcclxuICAgICAgICAvLyBNVURBTsOHQTogVXNhciAnZm9sbG93JyBhbyBpbnbDqXMgZGUgJ21hbnVhbCcgcGFyYSBwZXJtaXRpciByZWRpcmVjdHNcclxuICAgICAgICAvLyBTZSBvIHNlcnZpZG9yIHJlZGlyZWNpb25hciwgc2VndWlyZW1vcyBvIHJlZGlyZWN0IGUgdmVyZW1vcyBhIHJlc3Bvc3RhIGZpbmFsXHJcbiAgICAgICAgcmVkaXJlY3Q6ICdmb2xsb3cnIGFzIFJlcXVlc3RSZWRpcmVjdCxcclxuICAgICAgICAvLyBJbmNsdWkgY3JlZGVudGlhbHMgcGFyYSByZXF1aXNpw6fDtWVzIGNyb3NzLW9yaWdpblxyXG4gICAgICAgIGNyZWRlbnRpYWxzOiAnb21pdCcgLy8gTsOjbyBpbmNsdWkgY29va2llcywgYXBlbmFzIG8gdG9rZW4gbmEgVVJML2JvZHlcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IHJlc3BvbnNlOiBSZXNwb25zZVxyXG4gICAgICBsZXQgcmVzdWx0OiBhbnlcclxuXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJz09PSBJTsONQ0lPIERBIFJFUVVJU0nDh8ODTyA9PT0nKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdVUkw6JywgZmluYWxVcmwpXHJcbiAgICAgICAgY29uc29sZS5sb2coJ1Rva2VuIHByZXNlbnRlIG5hIFVSTDonLCBmaW5hbFVybC5pbmNsdWRlcygndG9rZW49JyksICcoZGV2ZSBzZXIgZmFsc2UpJylcclxuICAgICAgICBjb25zb2xlLmxvZygnVG9rZW4gbm8gYm9keTonLCByZXF1ZXN0Qm9keSBpbnN0YW5jZW9mIEZvcm1EYXRhID8gcmVxdWVzdEJvZHkuaGFzKCd0b2tlbicpIDogKHJlcXVlc3RCb2R5IGFzIFVSTFNlYXJjaFBhcmFtcykuaGFzKCd0b2tlbicpKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdNw6l0b2RvOicsIGZldGNoT3B0aW9ucy5tZXRob2QpXHJcbiAgICAgICAgY29uc29sZS5sb2coJ0hlYWRlcnM6JywgaGVhZGVycylcclxuICAgICAgICBjb25zb2xlLmxvZygnQm9keSB0eXBlOicsIHJlcXVlc3RCb2R5IGluc3RhbmNlb2YgRm9ybURhdGEgPyAnRm9ybURhdGEnIDogJ1VSTFNlYXJjaFBhcmFtcycpXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChmaW5hbFVybCwgZmV0Y2hPcHRpb25zKVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKCc9PT0gUkVTUE9TVEEgUkVDRUJJREEgPT09JylcclxuICAgICAgICBjb25zb2xlLmxvZygnU3RhdHVzOicsIHJlc3BvbnNlLnN0YXR1cylcclxuICAgICAgICBjb25zb2xlLmxvZygnU3RhdHVzIFRleHQ6JywgcmVzcG9uc2Uuc3RhdHVzVGV4dClcclxuICAgICAgICBjb25zb2xlLmxvZygnVVJMIGZpbmFsOicsIHJlc3BvbnNlLnVybClcclxuICAgICAgICBjb25zb2xlLmxvZygnUmVkaXJlY3RlZDonLCByZXNwb25zZS5yZWRpcmVjdGVkKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdUeXBlOicsIHJlc3BvbnNlLnR5cGUpXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gVmVyaWZpY2Egc2UgYSByZXNwb3N0YSBmb2kgdW0gcmVkaXJlY3QgcGFyYSBsb2dpblxyXG4gICAgICAgIGlmIChyZXNwb25zZS5yZWRpcmVjdGVkICYmIHJlc3BvbnNlLnVybC5pbmNsdWRlcygnL2xvZ2luJykpIHtcclxuICAgICAgICAgIGNvbnN0IGVycm9yTXNnID0gJ08gc2Vydmlkb3IgcmVkaXJlY2lvbm91IHBhcmEgYSBww6FnaW5hIGRlIGxvZ2luLiBPIHRva2VuIHBvZGUgZXN0YXIgZXhwaXJhZG8gb3UgaW52w6FsaWRvLlxcblxcbicgK1xyXG4gICAgICAgICAgICAnVmVyaWZpcXVlIHNlIG8gdG9rZW4gZm9ybmVjaWRvIGFpbmRhIMOpIHbDoWxpZG8gZSB0ZW0gcGVybWlzc8OjbyBwYXJhIGFjZXNzYXIgZXN0ZSBzZXJ2acOnby4nXHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yTXNnKVxyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignVVJMIGRlIHJlZGlyZWNpb25hbWVudG86JywgcmVzcG9uc2UudXJsKVxyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yTXNnKVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBWZXJpZmljYSBzdGF0dXMgSFRUUCBkZSBlcnJvXHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA+PSAzMDAgJiYgcmVzcG9uc2Uuc3RhdHVzIDwgNDAwKSB7XHJcbiAgICAgICAgICBjb25zdCBsb2NhdGlvbiA9IHJlc3BvbnNlLmhlYWRlcnMuZ2V0KCdMb2NhdGlvbicpXHJcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ1N0YXR1cyBkZSByZWRpcmVjaW9uYW1lbnRvOicsIHJlc3BvbnNlLnN0YXR1cylcclxuICAgICAgICAgIGNvbnNvbGUud2FybignTG9jYXRpb24gaGVhZGVyOicsIGxvY2F0aW9uKVxyXG4gICAgICAgICAgaWYgKGxvY2F0aW9uICYmIChsb2NhdGlvbi5pbmNsdWRlcygnL2xvZ2luJykgfHwgbG9jYXRpb24uaW5jbHVkZXMoJ2xvZ2luJykpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTyBzZXJ2aWRvciByZWRpcmVjaW9ub3UgcGFyYSBhIHDDoWdpbmEgZGUgbG9naW4uIE8gdG9rZW4gbsOjbyBlc3TDoSBzZW5kbyBhY2VpdG8uXFxuXFxuJyArXHJcbiAgICAgICAgICAgICAgJ1Bvc3PDrXZlaXMgY2F1c2FzOlxcbicgK1xyXG4gICAgICAgICAgICAgICcxLiBUb2tlbiBleHBpcmFkbyBvdSBpbnbDoWxpZG9cXG4nICtcclxuICAgICAgICAgICAgICAnMi4gVG9rZW4gbsOjbyB0ZW0gcGVybWlzc8OjbyBwYXJhIGVzdGUgc2VydmnDp29cXG4nICtcclxuICAgICAgICAgICAgICAnMy4gU2Vydmlkb3IgcmVxdWVyIGF1dGVudGljYcOnw6NvIGFkaWNpb25hbFxcblxcbicgK1xyXG4gICAgICAgICAgICAgICdQb3IgZmF2b3IsIHZlcmlmaXF1ZSBvIHRva2VuIGZvcm5lY2lkby4nKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gVGVudGEgbGVyIGNvbW8gSlNPTlxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuICAgICAgfSBjYXRjaCAoanNvbkVycm9yKSB7XHJcbiAgICAgICAgICAvLyBTZSBuw6NvIGZvciBKU09OLCBsw6ogY29tbyB0ZXh0b1xyXG4gICAgICAgICAgY29uc3QgdGV4dFJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKVxyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignUmVzcG9zdGEgbsOjbyDDqSBKU09OOicsIHRleHRSZXN1bHQpXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC8vIFZlcmlmaWNhIHNlIMOpIHVtIGVycm8gZGUgQ09SUyBvdSBhdXRlbnRpY2HDp8Ojb1xyXG4gICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMCB8fCByZXNwb25zZS50eXBlID09PSAnb3BhcXVlJykge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Vycm8gZGUgQ09SUzogTsOjbyBmb2kgcG9zc8OtdmVsIGFjZXNzYXIgbyBzZXJ2aWRvci4gVmVyaWZpcXVlIHNlIHZvY8OqIGVzdMOhIGF1dGVudGljYWRvIGUgc2UgbyBzZXJ2aWRvciBwZXJtaXRlIHJlcXVpc2nDp8O1ZXMgZG8gc2V1IGRvbcOtbmlvLicpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDMwMiB8fCByZXNwb25zZS5zdGF0dXMgPT09IDQwMSB8fCByZXNwb25zZS5zdGF0dXMgPT09IDQwMykge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Vycm8gZGUgYXV0ZW50aWNhw6fDo286IE8gc2Vydmlkb3IgcmVxdWVyIGF1dGVudGljYcOnw6NvLiBWZXJpZmlxdWUgc2Ugdm9jw6ogZXN0w6EgbG9nYWRvIGUgc2UgbyB0b2tlbiDDqSB2w6FsaWRvLicpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJybyBIVFRQICR7cmVzcG9uc2Uuc3RhdHVzfTogJHt0ZXh0UmVzdWx0LnN1YnN0cmluZygwLCAyMDApfWApXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5lcnJvcikge1xyXG4gICAgICAgICAgICAvLyBUcmF0YSBlcnJvIGRlIHRva2VuIGludsOhbGlkbyBlc3BlY2lmaWNhbWVudGVcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5lcnJvci5jb2RlID09PSA0OTggfHwgcmVzdWx0LmVycm9yLmNvZGUgPT09IDQwMSB8fCByZXN1bHQuZXJyb3IubWVzc2FnZT8uaW5jbHVkZXMoJ0ludmFsaWQgVG9rZW4nKSkge1xyXG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVG9rZW4gaW52w6FsaWRvIG91IGV4cGlyYWRvIChjw7NkaWdvIDQ5OCkuIFBvciBmYXZvciwgZmHDp2EgbG9naW4gbm92YW1lbnRlIG5vIHNlcnZpZG9yIEFyY0dJUyBlIHRlbnRlIG5vdmFtZW50ZS4nKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJybyBuYSBHUDogJHtyZXN1bHQuZXJyb3IubWVzc2FnZSB8fCBKU09OLnN0cmluZ2lmeShyZXN1bHQuZXJyb3IpfWApXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm8gSFRUUDogJHtyZXNwb25zZS5zdGF0dXN9ICR7cmVzcG9uc2Uuc3RhdHVzVGV4dH1gKVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBWZXJpZmljYSBzZSBow6EgZXJybyBtZXNtbyBjb20gc3RhdHVzIE9LIChhbGd1bnMgc2Vydmlkb3JlcyByZXRvcm5hbSAyMDAgY29tIGVycm8pXHJcbiAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuZXJyb3IpIHtcclxuICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3IuY29kZSA9PT0gNDk4IHx8IHJlc3VsdC5lcnJvci5jb2RlID09PSA0MDEgfHwgcmVzdWx0LmVycm9yLm1lc3NhZ2U/LmluY2x1ZGVzKCdJbnZhbGlkIFRva2VuJykpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUb2tlbiBpbnbDoWxpZG8gb3UgZXhwaXJhZG8gKGPDs2RpZ28gNDk4KS4gUG9yIGZhdm9yLCBmYcOnYSBsb2dpbiBub3ZhbWVudGUgbm8gc2Vydmlkb3IgQXJjR0lTIGUgdGVudGUgbm92YW1lbnRlLicpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm8gbmEgR1A6ICR7cmVzdWx0LmVycm9yLm1lc3NhZ2UgfHwgSlNPTi5zdHJpbmdpZnkocmVzdWx0LmVycm9yKX1gKVxyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZmV0Y2hFcnJvcikge1xyXG4gICAgICAgIC8vIFRyYXRhIGVycm9zIGRlIHJlZGUvQ09SU1xyXG4gICAgICAgIGlmIChmZXRjaEVycm9yLm5hbWUgPT09ICdUeXBlRXJyb3InICYmIGZldGNoRXJyb3IubWVzc2FnZS5pbmNsdWRlcygnRmFpbGVkIHRvIGZldGNoJykpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm8gZGUgcmVkZS9DT1JTOicsIGZldGNoRXJyb3IpXHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Vycm8gZGUgY29uZXjDo286IE7Do28gZm9pIHBvc3PDrXZlbCBjb25lY3RhciBhbyBzZXJ2aWRvci4gSXNzbyBwb2RlIHNlciBjYXVzYWRvIHBvcjpcXG4nICtcclxuICAgICAgICAgICAgJzEuIFByb2JsZW1hIGRlIENPUlMgKENyb3NzLU9yaWdpbiBSZXNvdXJjZSBTaGFyaW5nKVxcbicgK1xyXG4gICAgICAgICAgICAnMi4gU2Vydmlkb3IgcmVxdWVyIGF1dGVudGljYcOnw6NvIGFkaWNpb25hbFxcbicgK1xyXG4gICAgICAgICAgICAnMy4gVG9rZW4gZGUgYXV0ZW50aWNhw6fDo28gZXhwaXJhZG8gb3UgaW52w6FsaWRvXFxuJyArXHJcbiAgICAgICAgICAgICc0LiBTZXJ2aWRvciB0ZW1wb3JhcmlhbWVudGUgaW5kaXNwb27DrXZlbFxcblxcbicgK1xyXG4gICAgICAgICAgICAnVmVyaWZpcXVlIG8gY29uc29sZSBkbyBuYXZlZ2Fkb3IgKEYxMikgcGFyYSBtYWlzIGRldGFsaGVzLicpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRocm93IGZldGNoRXJyb3JcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gVmVyaWZpY2Egc2UgcmVjZWJldSBqb2JJZFxyXG4gICAgICBpZiAoIXJlc3VsdC5qb2JJZCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTsOjbyBmb2kgcG9zc8OtdmVsIG9idGVyIGpvYklkIGRhIHJlc3Bvc3RhJylcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3Qgam9iSWQgPSByZXN1bHQuam9iSWRcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGpvYklkLCBwcm9ncmVzczogNSB9KSAvLyBKb2Igc3VibWV0aWRvIC0gNSVcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKCdKb2IgSUQgcmVjZWJpZG86Jywgam9iSWQpXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gUG9sbGluZyBkbyBzdGF0dXMgZG8gam9iXHJcbiAgICAgICAgbGV0IGF0dGVtcHRzID0gMFxyXG4gICAgICBjb25zdCBtYXhBdHRlbXB0cyA9IDEyMCAvLyAyIG1pbnV0b3NcclxuICAgICAgICBcclxuICAgICAgICB3aGlsZSAoYXR0ZW1wdHMgPCBtYXhBdHRlbXB0cykge1xyXG4gICAgICAgIGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCAyMDAwKSkgLy8gVmVyaWZpY2EgYSBjYWRhIDIgc2VndW5kb3NcclxuICAgICAgICBhdHRlbXB0cysrXHJcbiAgICAgICAgICBcclxuICAgICAgICBjb25zdCBiYXNlVXJsID0gc3VibWl0Sm9iVXJsLnJlcGxhY2UoJy9zdWJtaXRKb2InLCAnJylcclxuICAgICAgICAgIGNvbnN0IHN0YXR1c1VybCA9IHRva2VuIFxyXG4gICAgICAgICAgICA/IGAke2Jhc2VVcmx9L2pvYnMvJHtqb2JJZH0/dG9rZW49JHt0b2tlbn0mZj1qc29uYFxyXG4gICAgICAgICAgICA6IGAke2Jhc2VVcmx9L2pvYnMvJHtqb2JJZH0/Zj1qc29uYFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBjb25zdCBzdGF0dXNSZXNwb25zZSA9IGF3YWl0IGZldGNoKHN0YXR1c1VybClcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgaWYgKCFzdGF0dXNSZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm8gYW8gdmVyaWZpY2FyIHN0YXR1cyBkbyBqb2I6ICR7c3RhdHVzUmVzcG9uc2Uuc3RhdHVzfWApXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICBjb25zdCBqb2JTdGF0dXMgPSBhd2FpdCBzdGF0dXNSZXNwb25zZS5qc29uKClcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGBTdGF0dXMgZG8gam9iICh0ZW50YXRpdmEgJHthdHRlbXB0c30pOmAsIGpvYlN0YXR1cy5qb2JTdGF0dXMpXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC8vIENhbGN1bGEgcHJvZ3Jlc3NvIGJhc2VhZG8gbmFzIHRlbnRhdGl2YXMgKDUlIGEgOTUlIGR1cmFudGUgcG9sbGluZylcclxuICAgICAgICAgIC8vIE8gcHJvZ3Jlc3NvIGF1bWVudGEgZ3JhZHVhbG1lbnRlIGNvbmZvcm1lIGFzIHRlbnRhdGl2YXNcclxuICAgICAgICAgIGNvbnN0IHByb2dyZXNzUGVyY2VudCA9IE1hdGgubWluKDk1LCA1ICsgTWF0aC5mbG9vcigoYXR0ZW1wdHMgLyBtYXhBdHRlbXB0cykgKiA5MCkpXHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcHJvZ3Jlc3M6IHByb2dyZXNzUGVyY2VudCB9KVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBpZiAoam9iU3RhdHVzLmpvYlN0YXR1cyA9PT0gJ2VzcmlKb2JTdWNjZWVkZWQnKSB7XHJcbiAgICAgICAgICAgIC8vIEpvYiBjb21wbGV0YWRvIC0gc2VtcHJlIHZhaSBwYXJhIDEwMCUgcXVhbmRvIGNvbXBsZXRhXHJcbiAgICAgICAgICAgIC8vIE7Do28gaW1wb3J0YSBxdWFudGFzIHRlbnRhdGl2YXMgZm9yYW0gbmVjZXNzw6FyaWFzXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBKb2IgY29tcGxldGFkbyBhcMOzcyAke2F0dGVtcHRzfSB0ZW50YXRpdmFzLiBBdHVhbGl6YW5kbyBwYXJhIDEwMCVgKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gQW5pbWEgbyBwcm9ncmVzc28gYXTDqSAxMDAlIChpbmNyZW1lbnRhIGdyYWR1YWxtZW50ZSBzZSBuZWNlc3PDoXJpbylcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudFByb2dyZXNzID0gdGhpcy5zdGF0ZS5wcm9ncmVzc1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudFByb2dyZXNzIDwgMTAwKSB7XHJcbiAgICAgICAgICAgICAgLy8gSW5jcmVtZW50YSBncmFkdWFsbWVudGUgYXTDqSAxMDAlXHJcbiAgICAgICAgICAgICAgY29uc3Qgc3RlcHMgPSBNYXRoLmNlaWwoKDEwMCAtIGN1cnJlbnRQcm9ncmVzcykgLyA1KSAvLyA1JSBwb3Igc3RlcFxyXG4gICAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHN0ZXBzOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1Byb2dyZXNzID0gTWF0aC5taW4oMTAwLCBjdXJyZW50UHJvZ3Jlc3MgKyAoaSAqIDUpKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHByb2dyZXNzOiBuZXdQcm9ncmVzcyB9KVxyXG4gICAgICAgICAgICAgICAgYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDUwKSkgLy8gNTBtcyBwb3Igc3RlcFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcHJvZ3Jlc3M6IDEwMCB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIE9idMOpbSBvcyByZXN1bHRhZG9zXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdFVybCA9IHRva2VuXHJcbiAgICAgICAgICAgICAgPyBgJHtiYXNlVXJsfS9qb2JzLyR7am9iSWR9L3Jlc3VsdHM/dG9rZW49JHt0b2tlbn0mZj1qc29uYFxyXG4gICAgICAgICAgICAgIDogYCR7YmFzZVVybH0vam9icy8ke2pvYklkfS9yZXN1bHRzP2Y9anNvbmBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdFJlc3BvbnNlID0gYXdhaXQgZmV0Y2gocmVzdWx0VXJsKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKCFyZXN1bHRSZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJybyBhbyBvYnRlciByZXN1bHRhZG9zOiAke3Jlc3VsdFJlc3BvbnNlLnN0YXR1c31gKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXN1bHQgPSBhd2FpdCByZXN1bHRSZXNwb25zZS5qc29uKClcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1Jlc3VsdGFkbyBkYSBleGVjdcOnw6NvIGFzc8OtbmNyb25hOicsIHJlc3VsdClcclxuICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoam9iU3RhdHVzLmpvYlN0YXR1cyA9PT0gJ2VzcmlKb2JGYWlsZWQnKSB7XHJcbiAgICAgICAgICAgIC8vIEV4dHJhaSBtZW5zYWdlbnMgZGUgZXJybyBtYWlzIGRldGFsaGFkYXNcclxuICAgICAgICAgICAgbGV0IGVycm9yTWVzc2FnZSA9ICdKb2IgZmFsaG91J1xyXG4gICAgICAgICAgICBpZiAoam9iU3RhdHVzLm1lc3NhZ2VzICYmIEFycmF5LmlzQXJyYXkoam9iU3RhdHVzLm1lc3NhZ2VzKSkge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZXMgPSBqb2JTdGF0dXMubWVzc2FnZXNcclxuICAgICAgICAgICAgICAgIC5maWx0ZXIoKG1zZzogYW55KSA9PiBtc2cudHlwZSA9PT0gJ2VzcmlKb2JNZXNzYWdlVHlwZUVycm9yJylcclxuICAgICAgICAgICAgICAgIC5tYXAoKG1zZzogYW55KSA9PiBtc2cuZGVzY3JpcHRpb24pXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgaWYgKGVycm9yTWVzc2FnZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlID0gZXJyb3JNZXNzYWdlcy5qb2luKCdcXG4nKVxyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UgPSBKU09OLnN0cmluZ2lmeShqb2JTdGF0dXMubWVzc2FnZXMpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGpvYlN0YXR1cy5tZXNzYWdlcykge1xyXG4gICAgICAgICAgICAgIGVycm9yTWVzc2FnZSA9IEpTT04uc3RyaW5naWZ5KGpvYlN0YXR1cy5tZXNzYWdlcylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJybyBkZXRhbGhhZG8gZG8gam9iOicsIGpvYlN0YXR1cy5tZXNzYWdlcylcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIE1lbnNhZ2VtIG1haXMgYW1pZ8OhdmVsIHBhcmEgbyB1c3XDoXJpb1xyXG4gICAgICAgICAgICBpZiAoZXJyb3JNZXNzYWdlLmluY2x1ZGVzKCduw6NvIHBvc3N1aSBnZW9tZXRyaWFzIHbDoWxpZGFzJykpIHtcclxuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ08gYXJxdWl2byBaSVAgbsOjbyBjb250w6ltIGdlb21ldHJpYXMgdsOhbGlkYXMuXFxuXFxuJyArXHJcbiAgICAgICAgICAgICAgICAnUG9yIGZhdm9yLCB2ZXJpZmlxdWUgc2U6XFxuJyArXHJcbiAgICAgICAgICAgICAgICAnMS4gTyBhcnF1aXZvIFpJUCBjb250w6ltIHVtIHNoYXBlZmlsZSBjb21wbGV0byAoLnNocCwgLnNoeCwgLmRiZiwgLnByailcXG4nICtcclxuICAgICAgICAgICAgICAgICcyLiBPIHNoYXBlZmlsZSBwb3NzdWkgZ2VvbWV0cmlhcyB2w6FsaWRhcyAocG9sw61nb25vcylcXG4nICtcclxuICAgICAgICAgICAgICAgICczLiBPIGFycXVpdm8gbsOjbyBlc3TDoSBjb3Jyb21waWRvXFxuXFxuJyArXHJcbiAgICAgICAgICAgICAgICAnRGV0YWxoZXMgdMOpY25pY29zOiAnICsgZXJyb3JNZXNzYWdlKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSm9iIGZhbGhvdTogJHtlcnJvck1lc3NhZ2V9YClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIGlmIChqb2JTdGF0dXMuam9iU3RhdHVzID09PSAnZXNyaUpvYkNhbmNlbGxlZCcpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdKb2IgZm9pIGNhbmNlbGFkbycpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGF0dGVtcHRzKytcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGF0dGVtcHRzID49IG1heEF0dGVtcHRzKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaW1lb3V0OiBPIGpvYiBkZW1vcm91IG1haXMgZGUgMiBtaW51dG9zIHBhcmEgY29tcGxldGFyJylcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gUHJvY2Vzc2EgbyByZXN1bHRhZG9cclxuICAgICAgbGV0IGh0bWxVcmw6IHN0cmluZyB8IG51bGwgPSBudWxsXHJcbiAgICAgIGxldCBzdW1tYXJ5VGV4dDogc3RyaW5nIHwgbnVsbCA9IG51bGxcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKCc9PT0gUFJPQ1VSQU5ETyBIVE1MIE5PUyBSRVNVTFRBRE9TID09PScpXHJcbiAgICAgIGNvbnNvbGUubG9nKCdFc3RydXR1cmEgY29tcGxldGEgZG8gcmVzdWx0YWRvOicsIEpTT04uc3RyaW5naWZ5KHJlc3VsdCwgbnVsbCwgMikpXHJcbiAgICAgIGNvbnNvbGUubG9nKCdUaXBvIGRvIHJlc3VsdGFkbzonLCBBcnJheS5pc0FycmF5KHJlc3VsdCkgPyAnQXJyYXknIDogdHlwZW9mIHJlc3VsdClcclxuXHJcbiAgICAgIC8vIElNUE9SVEFOVEU6IE8gcmVzdWx0YWRvIHBvZGUgdmlyIGNvbW8gYXJyYXkgZGlyZXRhbWVudGUgb3UgY29tbyBvYmpldG8gY29tIHJlc3VsdHNcclxuICAgICAgbGV0IHJlc3VsdHNUb0NoZWNrOiBhbnlbXSA9IFtdXHJcbiAgICAgIFxyXG4gICAgICAvLyBTZSByZXN1bHQgw6kgdW0gYXJyYXkgZGlyZXRhbWVudGVcclxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkocmVzdWx0KSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdSZXN1bHRhZG8gw6kgdW0gYXJyYXksIGl0ZXJhbmRvIGRpcmV0YW1lbnRlLi4uJylcclxuICAgICAgICByZXN1bHRzVG9DaGVjayA9IHJlc3VsdFxyXG4gICAgICB9XHJcbiAgICAgIC8vIFNlIHJlc3VsdCB0ZW0gdW1hIHByb3ByaWVkYWRlIHJlc3VsdHMgcXVlIMOpIGFycmF5XHJcbiAgICAgIGVsc2UgaWYgKHJlc3VsdC5yZXN1bHRzICYmIEFycmF5LmlzQXJyYXkocmVzdWx0LnJlc3VsdHMpKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1Jlc3VsdGFkbyB0ZW0gcmVzdWx0cyBjb21vIGFycmF5JylcclxuICAgICAgICByZXN1bHRzVG9DaGVjayA9IHJlc3VsdC5yZXN1bHRzXHJcbiAgICAgIH1cclxuICAgICAgLy8gU2UgcmVzdWx0LnJlc3VsdHMgw6kgdW0gb2JqZXRvIChmb3JtYXRvIGFudGlnbylcclxuICAgICAgZWxzZSBpZiAocmVzdWx0LnJlc3VsdHMgJiYgdHlwZW9mIHJlc3VsdC5yZXN1bHRzID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheShyZXN1bHQucmVzdWx0cykpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnUmVzdWx0YWRvIHRlbSByZXN1bHRzIGNvbW8gb2JqZXRvLCBjb252ZXJ0ZW5kbyBwYXJhIGFycmF5Li4uJylcclxuICAgICAgICAvLyBDb252ZXJ0ZSBvYmpldG8gcGFyYSBhcnJheSBkZSB2YWxvcmVzXHJcbiAgICAgICAgcmVzdWx0c1RvQ2hlY2sgPSBPYmplY3QudmFsdWVzKHJlc3VsdC5yZXN1bHRzKVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBJdGVyYSBzb2JyZSBvcyByZXN1bHRhZG9zXHJcbiAgICAgIGlmIChyZXN1bHRzVG9DaGVjay5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYFZlcmlmaWNhbmRvICR7cmVzdWx0c1RvQ2hlY2subGVuZ3RofSByZXN1bHRhZG8ocykuLi5gKVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzdWx0c1RvQ2hlY2subGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIGNvbnN0IHJlc3VsdEl0ZW0gPSByZXN1bHRzVG9DaGVja1tpXVxyXG4gICAgICAgICAgY29uc29sZS5sb2coYC0tLSBWZXJpZmljYW5kbyByZXN1bHRhZG8gJHtpICsgMX0gLS0tYClcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdSZXN1bHRJdGVtIGNvbXBsZXRvOicsIEpTT04uc3RyaW5naWZ5KHJlc3VsdEl0ZW0sIG51bGwsIDIpKVxyXG4gICAgICAgICAgY29uc29sZS5sb2coJ1RpcG8gZG8gcmVzdWx0SXRlbTonLCB0eXBlb2YgcmVzdWx0SXRlbSlcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdUZW0gdmFsdWU/JywgISFyZXN1bHRJdGVtLnZhbHVlKVxyXG4gICAgICAgICAgY29uc29sZS5sb2coJ1RlbSB1cmw/JywgISFyZXN1bHRJdGVtLnVybClcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgaWYgKHJlc3VsdEl0ZW0pIHtcclxuICAgICAgICAgICAgLy8gVmVyaWZpY2Egc2UgdGVtIHZhbHVlIGRpcmV0YW1lbnRlXHJcbiAgICAgICAgICAgIGlmIChyZXN1bHRJdGVtLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSByZXN1bHRJdGVtLnZhbHVlXHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1ZhbHVlIGVuY29udHJhZG86JywgdHlwZW9mIHZhbHVlLCB2YWx1ZSlcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAvLyBTZSB2YWx1ZSDDqSB1bWEgc3RyaW5nIGNvbSAuaHRtbFxyXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlLmluY2x1ZGVzKCcuaHRtbCcpKSB7XHJcbiAgICAgICAgICAgICAgICBodG1sVXJsID0gdmFsdWVcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGDinJPinJPinJMgSFRNTCBlbmNvbnRyYWRvIGVtIHJlc3VsdGFkb1ske2l9XS52YWx1ZSAoc3RyaW5nKTpgLCBodG1sVXJsKVxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgLy8gU2UgdmFsdWUgw6kgdW0gb2JqZXRvIGNvbSB1cmxcclxuICAgICAgICAgICAgICBpZiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1ZhbHVlIMOpIHVtIG9iamV0bywgdmVyaWZpY2FuZG8gcHJvcHJpZWRhZGVzOicsIE9iamVjdC5rZXlzKHZhbHVlKSlcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS51cmwpIHtcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1ZhbHVlLnVybCBlbmNvbnRyYWRvOicsIHR5cGVvZiB2YWx1ZS51cmwsIHZhbHVlLnVybClcclxuICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZS51cmwgPT09ICdzdHJpbmcnICYmIHZhbHVlLnVybC5pbmNsdWRlcygnLmh0bWwnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGh0bWxVcmwgPSB2YWx1ZS51cmxcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhg4pyT4pyT4pyTIEhUTUwgZW5jb250cmFkbyBlbSByZXN1bHRhZG9bJHtpfV0udmFsdWUudXJsOmAsIGh0bWxVcmwpXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gVmVyaWZpY2Egc2UgdGVtIHVybCBkaXJldGFtZW50ZSBubyByZXN1bHRJdGVtXHJcbiAgICAgICAgICAgIGlmIChyZXN1bHRJdGVtLnVybCAmJiB0eXBlb2YgcmVzdWx0SXRlbS51cmwgPT09ICdzdHJpbmcnICYmIHJlc3VsdEl0ZW0udXJsLmluY2x1ZGVzKCcuaHRtbCcpKSB7XHJcbiAgICAgICAgICAgICAgaHRtbFVybCA9IHJlc3VsdEl0ZW0udXJsXHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coYOKck+Kck+KckyBIVE1MIGVuY29udHJhZG8gZW0gcmVzdWx0YWRvWyR7aX1dLnVybDpgLCBodG1sVXJsKVxyXG4gICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIFZlcmlmaWNhIHNlIG8gcHLDs3ByaW8gcmVzdWx0SXRlbSDDqSB1bWEgc3RyaW5nIGNvbSAuaHRtbFxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHJlc3VsdEl0ZW0gPT09ICdzdHJpbmcnICYmIHJlc3VsdEl0ZW0uaW5jbHVkZXMoJy5odG1sJykpIHtcclxuICAgICAgICAgICAgICBodG1sVXJsID0gcmVzdWx0SXRlbVxyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGDinJPinJPinJMgSFRNTCBlbmNvbnRyYWRvIGVtIHJlc3VsdGFkb1ske2l9XSAoc3RyaW5nIGRpcmV0YSk6YCwgaHRtbFVybClcclxuICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUud2Fybign4pqg77iPIE5lbmh1bSByZXN1bHRhZG8gcGFyYSB2ZXJpZmljYXIhJylcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gRmFsbGJhY2s6IHByb2N1cmEgZW0gb3V0cmFzIHByb3ByaWVkYWRlcyBkbyByZXN1bHRhZG9cclxuICAgICAgaWYgKCFodG1sVXJsKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0hUTUwgbsOjbyBlbmNvbnRyYWRvIG5vcyByZXN1bHRzLCB0ZW50YW5kbyBmYWxsYmFja3MuLi4nKVxyXG4gICAgICAgIGlmIChyZXN1bHQub3V0cHV0VXJsKSB7XHJcbiAgICAgICAgICBodG1sVXJsID0gcmVzdWx0Lm91dHB1dFVybFxyXG4gICAgICAgICAgY29uc29sZS5sb2coJ+KckyBIVE1MIGVuY29udHJhZG8gZW0gb3V0cHV0VXJsOicsIGh0bWxVcmwpXHJcbiAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQudXJsKSB7XHJcbiAgICAgICAgICBodG1sVXJsID0gcmVzdWx0LnVybFxyXG4gICAgICAgICAgY29uc29sZS5sb2coJ+KckyBIVE1MIGVuY29udHJhZG8gZW0gdXJsOicsIGh0bWxVcmwpXHJcbiAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuZmlsZVVybCkge1xyXG4gICAgICAgICAgaHRtbFVybCA9IHJlc3VsdC5maWxlVXJsXHJcbiAgICAgICAgICBjb25zb2xlLmxvZygn4pyTIEhUTUwgZW5jb250cmFkbyBlbSBmaWxlVXJsOicsIGh0bWxVcmwpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoaHRtbFVybCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfinIUgVVJMIGRvIEhUTUwgZW5jb250cmFkYTonLCBodG1sVXJsKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ+KdjCBIVE1MIG7Do28gZW5jb250cmFkbyBub3MgcmVzdWx0YWRvcyEnKVxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0VzdHJ1dHVyYSBjb21wbGV0YSBkbyByZXN1bHRhZG8gcGFyYSBkZWJ1ZzonLCBKU09OLnN0cmluZ2lmeShyZXN1bHQsIG51bGwsIDIpKVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBUZW50YSBleHRyYWlyIG8gcmVzdW1vIGRvIHJlbGF0w7NyaW8gSFRNTFxyXG4gICAgICBpZiAoaHRtbFVybCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAvLyBBZGljaW9uYSB0b2tlbiDDoCBVUkwgZG8gSFRNTCBzZSBuZWNlc3PDoXJpb1xyXG4gICAgICAgICAgbGV0IGh0bWxVcmxXaXRoVG9rZW4gPSBodG1sVXJsXHJcbiAgICAgICAgICBpZiAodG9rZW4gJiYgIWh0bWxVcmwuaW5jbHVkZXMoJ3Rva2VuPScpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlcGFyYXRvciA9IGh0bWxVcmwuaW5jbHVkZXMoJz8nKSA/ICcmJyA6ICc/J1xyXG4gICAgICAgICAgICBodG1sVXJsV2l0aFRva2VuID0gYCR7aHRtbFVybH0ke3NlcGFyYXRvcn10b2tlbj0ke3Rva2VufWBcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1Rva2VuIGFkaWNpb25hZG8gw6AgVVJMIGRvIEhUTUwnKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnQWNlc3NhbmRvIEhUTUwgZW06JywgaHRtbFVybFdpdGhUb2tlbilcclxuICAgICAgICAgIGNvbnN0IGh0bWxSZXNwb25zZSA9IGF3YWl0IGZldGNoKGh0bWxVcmxXaXRoVG9rZW4pXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGlmICghaHRtbFJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm8gYW8gYWNlc3NhciBIVE1MOicsIGh0bWxSZXNwb25zZS5zdGF0dXMsIGh0bWxSZXNwb25zZS5zdGF0dXNUZXh0KVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm8gYW8gYWNlc3NhciBIVE1MOiAke2h0bWxSZXNwb25zZS5zdGF0dXN9YClcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgY29uc3QgaHRtbFRleHQgPSBhd2FpdCBodG1sUmVzcG9uc2UudGV4dCgpXHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnSFRNTCByZWNlYmlkbywgdGFtYW5obzonLCBodG1sVGV4dC5sZW5ndGgsICdjYXJhY3RlcmVzJylcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdQcmltZWlyb3MgNTAwIGNhcmFjdGVyZXMgZG8gSFRNTDonLCBodG1sVGV4dC5zdWJzdHJpbmcoMCwgNTAwKSlcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLy8gUmVtb3ZlIHRhZ3MgSFRNTCBlIG5vcm1hbGl6YSBlc3Bhw6dvc1xyXG4gICAgICAgICAgY29uc3QgdGV4dENvbnRlbnQgPSBodG1sVGV4dC5yZXBsYWNlKC88W14+XSo+L2csICcgJykucmVwbGFjZSgvXFxzKy9nLCAnICcpLnRvTG93ZXJDYXNlKClcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdUZXh0byBleHRyYcOtZG8gKHByaW1laXJvcyAyMDAgY2FyYWN0ZXJlcyk6JywgdGV4dENvbnRlbnQuc3Vic3RyaW5nKDAsIDIwMCkpXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC8vIFByb2N1cmEgcG9yIHBhZHLDtWVzIHF1ZSBpbmRpY2FtIHNlIGEgw6FyZWEgw6kgc3VmaWNpZW50ZSBvdSBuw6NvXHJcbiAgICAgICAgICBjb25zdCBwYXR0ZXJucyA9IFtcclxuICAgICAgICAgICAgL8OhcmVhXFxzKyg/OsOpfGVzdMOhKVxccytpbnN1ZmljaWVudGUvaSxcclxuICAgICAgICAgICAgL8OhcmVhXFxzK2luc3VmaWNpZW50ZS9pLFxyXG4gICAgICAgICAgICAvaW5zdWZpY2llbnRlLio/w6FyZWEvaSxcclxuICAgICAgICAgICAgL8OhcmVhXFxzKyg/OsOpfGVzdMOhKVxccytzdWZpY2llbnRlL2ksXHJcbiAgICAgICAgICAgIC/DoXJlYVxccytzdWZpY2llbnRlL2ksXHJcbiAgICAgICAgICAgIC9zdWZpY2llbnRlLio/w6FyZWEvaSxcclxuICAgICAgICAgICAgL2NvbXBlbnNhw6fDo28uKj9pbnN1ZmljaWVudGUvaSxcclxuICAgICAgICAgICAgL2NvbXBlbnNhw6fDo28uKj9zdWZpY2llbnRlL2ksXHJcbiAgICAgICAgICAgIC9uw6NvXFxzK2F0ZW5kZS9pLFxyXG4gICAgICAgICAgICAvYXRlbmRlLio/cmVxdWlzaXRvcy9pXHJcbiAgICAgICAgICBdXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGxldCBmb3VuZE1hdGNoID0gZmFsc2VcclxuICAgICAgICAgIGZvciAoY29uc3QgcGF0dGVybiBvZiBwYXR0ZXJucykge1xyXG4gICAgICAgICAgICBjb25zdCBtYXRjaCA9IGh0bWxUZXh0Lm1hdGNoKHBhdHRlcm4pXHJcbiAgICAgICAgICAgIGlmIChtYXRjaCkge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdQYWRyw6NvIGVuY29udHJhZG86JywgcGF0dGVybiwgJ01hdGNoOicsIG1hdGNoWzBdKVxyXG4gICAgICAgICAgICAgIGNvbnN0IGlzSW5zdWZmaWNpZW50ID0gL2luc3VmaWNpZW50ZXxuw6NvXFxzK2F0ZW5kZS9pLnRlc3QobWF0Y2hbMF0pXHJcbiAgICAgICAgICAgICAgc3VtbWFyeVRleHQgPSBpc0luc3VmZmljaWVudFxyXG4gICAgICAgICAgICAgICAgPyAnw4FyZWEgaW5zdWZpY2llbnRlIHBhcmEgY29tcGVuc2HDp8Ojby4gQ29udGludWUgY29tIGEgYW7DoWxpc2UnXHJcbiAgICAgICAgICAgICAgICA6ICfDgXJlYSBzdWZpY2llbnRlIHBhcmEgY29tcGVuc2HDp8Ojby4nXHJcbiAgICAgICAgICAgICAgZm91bmRNYXRjaCA9IHRydWVcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUmVzdW1vIGV4dHJhw61kbzonLCBzdW1tYXJ5VGV4dClcclxuICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC8vIFNlIG7Do28gZW5jb250cm91IHBhZHLDo28gZXNwZWPDrWZpY28sIHByb2N1cmEgcG9yIHBhbGF2cmFzLWNoYXZlXHJcbiAgICAgICAgICBpZiAoIWZvdW5kTWF0Y2gpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ05lbmh1bSBwYWRyw6NvIGVzcGVjw61maWNvIGVuY29udHJhZG8sIHByb2N1cmFuZG8gcGFsYXZyYXMtY2hhdmUuLi4nKVxyXG4gICAgICAgICAgICBjb25zdCBoYXNJbnN1ZmZpY2llbnQgPSAvaW5zdWZpY2llbnRlfG7Do29cXHMrYXRlbmRlL2kudGVzdCh0ZXh0Q29udGVudClcclxuICAgICAgICAgICAgY29uc3QgaGFzU3VmZmljaWVudCA9IC9zdWZpY2llbnRlfGF0ZW5kZS9pLnRlc3QodGV4dENvbnRlbnQpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnVGVtIFwiaW5zdWZpY2llbnRlXCI6JywgaGFzSW5zdWZmaWNpZW50KVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnVGVtIFwic3VmaWNpZW50ZVwiOicsIGhhc1N1ZmZpY2llbnQpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoaGFzSW5zdWZmaWNpZW50ICYmICFoYXNTdWZmaWNpZW50KSB7XHJcbiAgICAgICAgICAgICAgc3VtbWFyeVRleHQgPSAnw4FyZWEgaW5zdWZpY2llbnRlIHBhcmEgY29tcGVuc2HDp8OjbydcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUmVzdW1vIGRlZmluaWRvIGNvbW8gaW5zdWZpY2llbnRlJylcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChoYXNTdWZmaWNpZW50ICYmICFoYXNJbnN1ZmZpY2llbnQpIHtcclxuICAgICAgICAgICAgICBzdW1tYXJ5VGV4dCA9ICfDgXJlYSBzdWZpY2llbnRlIHBhcmEgY29tcGVuc2HDp8OjbydcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUmVzdW1vIGRlZmluaWRvIGNvbW8gc3VmaWNpZW50ZScpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdOw6NvIGZvaSBwb3Nzw612ZWwgZGV0ZXJtaW5hciBzZSBhIMOhcmVhIMOpIHN1ZmljaWVudGUgb3UgaW5zdWZpY2llbnRlJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGh0bWxFcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS53YXJuKCdOw6NvIGZvaSBwb3Nzw612ZWwgZXh0cmFpciByZXN1bW8gZG8gSFRNTDonLCBodG1sRXJyb3IpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBBdHVhbGl6YSBvIGVzdGFkbyBjb20gb3MgcmVzdWx0YWRvc1xyXG4gICAgICAvLyBVc2EgYSBVUkwgY29tIHRva2VuIHNlIGZvaSBhZGljaW9uYWRvXHJcbiAgICAgIGNvbnN0IGZpbmFsUmVwb3J0VXJsID0gaHRtbFVybCAmJiB0b2tlbiAmJiAhaHRtbFVybC5pbmNsdWRlcygndG9rZW49JylcclxuICAgICAgICA/IGAke2h0bWxVcmx9JHtodG1sVXJsLmluY2x1ZGVzKCc/JykgPyAnJicgOiAnPyd9dG9rZW49JHt0b2tlbn1gXHJcbiAgICAgICAgOiBodG1sVXJsXHJcbiAgICAgIFxyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICBwcm9ncmVzczogMTAwLCAvLyBBbsOhbGlzZSBjb21wbGV0YVxyXG4gICAgICAgIHJlcG9ydFVybDogZmluYWxSZXBvcnRVcmwsXHJcbiAgICAgICAgYW5hbHlzaXNSZXN1bHQ6IHN1bW1hcnlUZXh0ID8ge1xyXG4gICAgICAgICAgc3VmZmljaWVudDogIXN1bW1hcnlUZXh0LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ2luc3VmaWNpZW50ZScpLFxyXG4gICAgICAgICAgbWVzc2FnZTogc3VtbWFyeVRleHRcclxuICAgICAgICB9IDogbnVsbFxyXG4gICAgICB9KVxyXG5cclxuICAgICAgaWYgKCFodG1sVXJsKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcign4p2MIEFURU7Dh8ODTzogSFRNTCBuw6NvIGZvaSBlbmNvbnRyYWRvIScpXHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXN0cnV0dXJhIGRvIHJlc3VsdGFkbzonLCBKU09OLnN0cmluZ2lmeShyZXN1bHQsIG51bGwsIDIpKVxyXG4gICAgICAgIGFsZXJ0KCdBbsOhbGlzZSBjb25jbHXDrWRhLCBtYXMgbsOjbyBmb2kgcG9zc8OtdmVsIGVuY29udHJhciBhIFVSTCBkbyByZWxhdMOzcmlvLiBWZXJpZmlxdWUgbyBjb25zb2xlIHBhcmEgbWFpcyBkZXRhbGhlcy4nKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfinIUgSFRNTCBlbmNvbnRyYWRvIGUgc2Fsdm8gbm8gZXN0YWRvLiBCb3TDo28gZGUgYmFpeGFyIHJlbGF0w7NyaW8gZGV2ZSBlc3RhciBoYWJpbGl0YWRvLicpXHJcbiAgICAgIH1cclxuXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvIGFvIGV4ZWN1dGFyIGFuw6FsaXNlOicsIGVycm9yKVxyXG4gICAgICBhbGVydChgRXJybyBhbyBleGVjdXRhciBhbsOhbGlzZTogJHtlcnJvci5tZXNzYWdlfVxcblxcblZlcmlmaXF1ZSBvIGNvbnNvbGUgKEYxMikgcGFyYSBtYWlzIGRldGFsaGVzLmApXHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyICgpIHtcclxuICAgIGNvbnN0IHN0eWxlID0gY3NzYFxyXG4gICAgICAud2lkZ2V0LWNvbnRhaW5lciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGdhcDogMTJweDtcclxuICAgICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAgIH1cclxuICAgICAgLmZvcm0tZ3JvdXAge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBnYXA6IDhweDtcclxuICAgICAgfVxyXG4gICAgICAuZm9ybS1ncm91cCBsYWJlbCB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgY29sb3I6ICMyMTIxMjE7XHJcbiAgICAgIH1cclxuICAgICAgaW5wdXRbdHlwZT1cIm51bWJlclwiXSxcclxuICAgICAgaW5wdXRbdHlwZT1cInRleHRcIl0sXHJcbiAgICAgIGlucHV0W3R5cGU9XCJmaWxlXCJdIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBjb2xvcjogIzIxMjEyMTtcclxuICAgICAgfVxyXG4gICAgICBpbnB1dFt0eXBlPVwibnVtYmVyXCJdIHtcclxuICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgfVxyXG4gICAgICBpbnB1dFt0eXBlPVwiZmlsZVwiXSB7XHJcbiAgICAgICAgcGFkZGluZzogNnB4IDhweDtcclxuICAgICAgfVxyXG4gICAgICAuaWRlYS1pbnB1dHMge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBnYXA6IDhweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICAgIH1cclxuICAgICAgLmlkZWEtaW5wdXQtaXRlbSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGdhcDogOHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5pZGVhLWlucHV0LWl0ZW0gbGFiZWwge1xyXG4gICAgICAgIG1pbi13aWR0aDogODBweDtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgY29sb3I6ICMyMTIxMjE7XHJcbiAgICAgIH1cclxuICAgICAgLmlkZWEtaW5wdXQtaXRlbSBpbnB1dCB7XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAmOmRpc2FibGVkIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XHJcbiAgICAgICAgICBjb2xvcjogIzllOWU5ZTtcclxuICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuYnRuLXByaW1hcnkge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI2NjY0MDtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFlNGYzMjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICY6ZGlzYWJsZWQge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcclxuICAgICAgICAgIGNvbG9yOiAjOWU5ZTllO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgLmJ0bi1zZWNvbmRhcnkge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNjY2NDA7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICY6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFlNGYzMjtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjpkaXNhYmxlZCB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xyXG4gICAgICAgICAgY29sb3I6ICM5ZTllOWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5idG4tc3VjY2VzcyB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcclxuICAgICAgICBjb2xvcjogIzQyNDI0MjtcclxuICAgICAgICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNiZGJkYmQ7XHJcbiAgICAgICAgICBjb2xvcjogIzIxMjEyMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjpkaXNhYmxlZCB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xyXG4gICAgICAgICAgY29sb3I6ICM5ZTllOWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5idG4tZGFuZ2VyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xyXG4gICAgICAgIGNvbG9yOiAjNDI0MjQyO1xyXG4gICAgICAgICY6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2JkYmRiZDtcclxuICAgICAgICAgIGNvbG9yOiAjMjEyMTIxO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOmRpc2FibGVkIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XHJcbiAgICAgICAgICBjb2xvcjogIzllOWU5ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLmJ1dHRvbi1ncm91cCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBnYXA6IDhweDtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgIH1cclxuICAgICAgLnN1bW1hcnktYm94IHtcclxuICAgICAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIH1cclxuICAgICAgLnN1bW1hcnktYm94LnN1ZmZpY2llbnQge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkNGVkZGE7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2MzZTZjYjtcclxuICAgICAgICBjb2xvcjogIzE1NTcyNDtcclxuICAgICAgfVxyXG4gICAgICAuc3VtbWFyeS1ib3guaW5zdWZmaWNpZW50IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhkN2RhO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmNWM2Y2I7XHJcbiAgICAgICAgY29sb3I6ICM3MjFjMjQ7XHJcbiAgICAgIH1cclxuICAgICAgLnNwaW5uZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB3aWR0aDogMTZweDtcclxuICAgICAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBib3JkZXItdG9wLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBhbmltYXRpb246IHNwaW4gMC44cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICAgIH1cclxuICAgICAgQGtleWZyYW1lcyBzcGluIHtcclxuICAgICAgICB0byB7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuZmlsZS1pbmZvIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgY29sb3I6ICM2NjY7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5kcmF3aW5nLWluZm8ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBjb2xvcjogIzAwNzljMTtcclxuICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICB9XHJcbiAgICBgXHJcblxyXG4gICAgY29uc3QgY2FuUnVuQW5hbHlzaXMgPSBcclxuICAgICAgdGhpcy5zdGF0ZS5pZGVhVmFsdWVzLmV2ZXJ5KHZhbCA9PiB2YWwgJiYgdmFsLnRyaW0oKSAhPT0gJycpICYmXHJcbiAgICAgICh0aGlzLnN0YXRlLnNoYXBlZmlsZUdlb21ldHJ5IHx8IHRoaXMuc3RhdGUuZHJhd25HZW9tZXRyeSkgJiZcclxuICAgICAgIXRoaXMuc3RhdGUubG9hZGluZ1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNhbGN1bGFkb3JhLWxhcGEgamltdS13aWRnZXRcIiBjc3M9e3N0eWxlfT5cclxuICAgICAgICB7dGhpcy5wcm9wcy5oYXNPd25Qcm9wZXJ0eSgndXNlTWFwV2lkZ2V0SWRzJykgJiZcclxuICAgICAgICAgIHRoaXMucHJvcHMudXNlTWFwV2lkZ2V0SWRzICYmXHJcbiAgICAgICAgICB0aGlzLnByb3BzLnVzZU1hcFdpZGdldElkcy5sZW5ndGggPT09IDEgJiYgKFxyXG4gICAgICAgICAgICA8SmltdU1hcFZpZXdDb21wb25lbnRcclxuICAgICAgICAgICAgICB1c2VNYXBXaWRnZXRJZD17dGhpcy5wcm9wcy51c2VNYXBXaWRnZXRJZHM/LlswXX1cclxuICAgICAgICAgICAgICBvbkFjdGl2ZVZpZXdDaGFuZ2U9eyhqbXY6IEppbXVNYXBWaWV3KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgamltdU1hcFZpZXc6IGptdlxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbnRhaW5lclwiPlxyXG5cclxuICAgICAgICAgIHsvKiBRdWFudGlkYWRlIGRlIElERUEgKi99XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgIHtkZWZhdWx0TWVzc2FnZXMucXVhbnRpZGFkZUlERUF9XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgIG1pbj1cIjFcIlxyXG4gICAgICAgICAgICAgIG1heD1cIjEwXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5xdWFudGlkYWRlSURFQX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVRdWFudGlkYWRlSURFQUNoYW5nZX1cclxuICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5zdGF0ZS5sb2FkaW5nfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgey8qIENhbXBvcyBkaW7Dom1pY29zIGRlIElERUEgKi99XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlkZWEtaW5wdXRzXCI+XHJcbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLmlkZWFWYWx1ZXMubWFwKCh2YWx1ZSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImlkZWEtaW5wdXQtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPklERUEge2luZGV4ICsgMX06PC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuaGFuZGxlSWRlYVZhbHVlQ2hhbmdlKGluZGV4LCBlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtgTsO6bWVybyBJREVBICR7aW5kZXggKyAxfWB9XHJcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnN0YXRlLmxvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIHsvKiBVcGxvYWQgZGUgU2hhcGVmaWxlICovfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICB7ZGVmYXVsdE1lc3NhZ2VzLmFyZWFQcm9wb3N0YVNoYXBlZmlsZX1cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgaWQ9XCJzaGFwZWZpbGUtdXBsb2FkXCJcclxuICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgYWNjZXB0PVwiLnppcFwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlU2hhcGVmaWxlVXBsb2FkfVxyXG4gICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnN0YXRlLmxvYWRpbmcgfHwgISF0aGlzLnN0YXRlLmRyYXduR2VvbWV0cnl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLnNoYXBlZmlsZUxheWVyICYmIChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbGUtaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgQ2FtYWRhOiB7dGhpcy5zdGF0ZS5zaGFwZWZpbGVMYXllci50aXRsZSB8fCAnw4FyZWEgUHJvcG9zdGEnfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5kcmF3bkdlb21ldHJ5ICYmIChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbGUtaW5mb1wiIHN0eWxlPXt7IGNvbG9yOiAnI2RjMzU0NScgfX0+XHJcbiAgICAgICAgICAgICAgICBEZXNlbmhvIG5vIG1hcGEgYXRpdm8uIFJlbW92YSBvIGRlc2VuaG8gcGFyYSBmYXplciB1cGxvYWQgZGUgc2hhcGVmaWxlLlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgey8qIERlc2VuaG8gbm8gTWFwYSAqL31cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAge2RlZmF1bHRNZXNzYWdlcy5hcmVhUHJvcG9zdGFEZXNlbmhvfVxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuLXNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVTdGFydERyYXdpbmd9XHJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMuc3RhdGUubG9hZGluZyB8fCB0aGlzLnN0YXRlLmRyYXdpbmdNb2RlIHx8ICEhdGhpcy5zdGF0ZS5zaGFwZWZpbGVHZW9tZXRyeX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZHJhd2luZ01vZGUgPyAnRGVzZW5oYW5kby4uLicgOiBkZWZhdWx0TWVzc2FnZXMuaW5pY2lhckRlc2VuaG99XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLmRyYXdpbmdNb2RlICYmIChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyYXdpbmctaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgQ2xpcXVlIG5vIG1hcGEgcGFyYSBjb21lw6dhciBhIGRlc2VuaGFyIGEgw6FyZWEuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5kcmF3bkdlb21ldHJ5ICYmIChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbGUtaW5mb1wiIHN0eWxlPXt7IGNvbG9yOiAnIzI4YTc0NScgfX0+XHJcbiAgICAgICAgICAgICAgICDDgXJlYSBkZXNlbmhhZGEgbm8gbWFwYS5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAge3RoaXMuc3RhdGUuc2hhcGVmaWxlR2VvbWV0cnkgJiYgKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsZS1pbmZvXCIgc3R5bGU9e3sgY29sb3I6ICcjZGMzNTQ1JyB9fT5cclxuICAgICAgICAgICAgICAgIFNoYXBlZmlsZSBjYXJyZWdhZG8uIFJlbW92YSBvIGFycXVpdm8gcGFyYSBkZXNlbmhhciBubyBtYXBhLlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgey8qIEJvdMO1ZXMgZGUgQcOnw6NvICovfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlUnVuQW5hbHlzaXN9XHJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFjYW5SdW5BbmFseXNpc31cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5sb2FkaW5nICYmIChcclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Bpbm5lclwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAge2RlZmF1bHRNZXNzYWdlcy5leGVjdXRhckFuYWxpc2V9XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0bi1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xlYXJBbmFseXNpc31cclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnN0YXRlLmxvYWRpbmd9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtkZWZhdWx0TWVzc2FnZXMubGltcGFyQW5hbGlzZX1cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0bi1zdWNjZXNzXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZURvd25sb2FkUmVwb3J0fVxyXG4gICAgICAgICAgICAgIGRpc2FibGVkPXshdGhpcy5zdGF0ZS5yZXBvcnRVcmwgfHwgdGhpcy5zdGF0ZS5sb2FkaW5nfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2RlZmF1bHRNZXNzYWdlcy5iYWl4YXJSZWxhdG9yaW99XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgey8qIFJlc3VtbyBkYSBBbsOhbGlzZSAqL31cclxuICAgICAgICAgIHt0aGlzLnN0YXRlLmFuYWx5c2lzUmVzdWx0ICYmIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BzdW1tYXJ5LWJveCAke3RoaXMuc3RhdGUuYW5hbHlzaXNSZXN1bHQuc3VmZmljaWVudCA/ICdzdWZmaWNpZW50JyA6ICdpbnN1ZmZpY2llbnQnfWB9PlxyXG4gICAgICAgICAgICAgIDxzdHJvbmc+UmVzdW1vIGRhIEFuw6FsaXNlOjwvc3Ryb25nPjxiciAvPlxyXG4gICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmFuYWx5c2lzUmVzdWx0Lm1lc3NhZ2V9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
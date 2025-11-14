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
                // Se não obteve token via IdentityManager, tenta gerar via OAuth2
                if (!token) {
                    console.warn('Token não obtido via IdentityManager. Tentando gerar via OAuth2...');
                    token = yield this.getTokenViaOAuth2();
                }
                // Fallback final: usa o token fornecido apenas se OAuth2 também falhar
                if (!token) {
                    console.warn('Token não obtido via OAuth2. Usando token fornecido como fallback...');
                    token = this.GP_TOKEN;
                }
                else {
                    console.log('✓ Token obtido automaticamente (IdentityManager ou OAuth2)');
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
    // Função auxiliar para obter token via OAuth2 usando client secret (renovação automática)
    // Esta função gera um novo token automaticamente quando necessário, com validade de 1 ano
    getTokenViaOAuth2() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // URL do servidor ArcGIS para obter token
                const serverUrl = 'https://meioambiente.sistemas.mpba.mp.br/server';
                const tokenUrl = `${serverUrl}/tokens/generateToken`;
                // Para gerar token com client secret
                const params = new URLSearchParams();
                params.append('f', 'json');
                params.append('client', 'referer');
                params.append('referer', window.location.origin);
                params.append('expiration', '525600'); // 1 ano (máximo permitido)
                if (this.CLIENT_SECRET) {
                    params.append('client_secret', this.CLIENT_SECRET);
                }
                console.log('Tentando gerar token via OAuth2...');
                const response = yield fetch(tokenUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    body: params.toString()
                });
                if (!response.ok) {
                    const errorText = yield response.text();
                    console.warn('Erro ao gerar token via OAuth2:', errorText);
                    return null;
                }
                const result = yield response.json();
                if (result.error) {
                    console.warn('Erro na resposta do token:', result.error);
                    return null;
                }
                if (result.token) {
                    console.log('✓ Token gerado com sucesso via OAuth2');
                    console.log('Token expira em:', result.expires ? new Date(result.expires).toLocaleString() : 'Não especificado');
                    return result.token;
                }
                return null;
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
      &.widget-calculadora-lapa {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jYWxjdWxhZG9yYS1sYXBhL2Rpc3QvcnVudGltZS93aWRnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlFQUFlO0lBQ2IsWUFBWSxFQUFFLDRCQUE0QjtJQUMxQyxLQUFLLEVBQUUsNEJBQTRCO0lBQ25DLGNBQWMsRUFBRSxtQ0FBbUM7SUFDbkQscUJBQXFCLEVBQUUsZ0NBQWdDO0lBQ3ZELG1CQUFtQixFQUFFLGtDQUFrQztJQUN2RCxjQUFjLEVBQUUsaUJBQWlCO0lBQ2pDLGVBQWUsRUFBRSxrQkFBa0I7SUFDbkMsYUFBYSxFQUFFLGdCQUFnQjtJQUMvQixlQUFlLEVBQUUsa0JBQWtCO0lBQ25DLE9BQU8sRUFBRSxlQUFlO0NBQ3pCOzs7Ozs7Ozs7Ozs7QUNYRDs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Q7V0FDdEQsc0NBQXNDLGlFQUFpRTtXQUN2RztXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7Ozs7O1dDUkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FD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LFlBQVksQ0FBQyxDQUFDLENBQUMsY0FBYyxFQUFFO29CQUNuRyx5RkFBbUM7b0JBQUEsMERBQU07b0JBQ3hDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FDOUIsQ0FDUCxDQUNHLENBQ0YsQ0FDUDtJQUNILENBQUM7Q0FDRjtBQUVPLFNBQVMsMkJBQTJCLENBQUMsR0FBRyxJQUFJLHFCQUF1QixHQUFHLEdBQUcsRUFBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2NhbGN1bGFkb3JhLWxhcGEvc3JjL3J1bnRpbWUvdHJhbnNsYXRpb25zL2RlZmF1bHQudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWFyY2dpc1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9jcmVhdGUgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2Vuc3VyZSBjaHVuayIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9nZXQgamF2YXNjcmlwdCBjaHVuayBmaWxlbmFtZSIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2xvYWQgc2NyaXB0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9jYWxjdWxhZG9yYS1sYXBhL3NyYy9ydW50aW1lL3dpZGdldC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xyXG4gIF93aWRnZXRMYWJlbDogJ0NhbGN1bGFkb3JhIGRlIENvbXBlbnNhw6fDo28nLFxyXG4gIHRpdGxlOiAnQ2FsY3VsYWRvcmEgZGUgQ29tcGVuc2HDp8OjbycsXHJcbiAgcXVhbnRpZGFkZUlERUE6ICdRdWFudGlkYWRlIGRlIElERUFcXCdzIGEgYW5hbGlzYXI6JyxcclxuICBhcmVhUHJvcG9zdGFTaGFwZWZpbGU6ICfDgXJlYSBQcm9wb3N0YSAoc2hhcGVmaWxlIFpJUCk6JyxcclxuICBhcmVhUHJvcG9zdGFEZXNlbmhvOiAnw4FyZWEgUHJvcG9zdGEgKERlc2VuaG8gbm8gbWFwYSk6JyxcclxuICBpbmljaWFyRGVzZW5obzogJ0luaWNpYXIgRGVzZW5obycsXHJcbiAgZXhlY3V0YXJBbmFsaXNlOiAnRXhlY3V0YXIgQW7DoWxpc2UnLFxyXG4gIGxpbXBhckFuYWxpc2U6ICdMaW1wYXIgQW7DoWxpc2UnLFxyXG4gIGJhaXhhclJlbGF0b3JpbzogJ0JhaXhhciBSZWxhdMOzcmlvJyxcclxuICBsb2FkaW5nOiAnQ2FycmVnYW5kby4uLidcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9hcmNnaXNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgPyAob2JqKSA9PiAoT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iaikpIDogKG9iaikgPT4gKG9iai5fX3Byb3RvX18pO1xudmFyIGxlYWZQcm90b3R5cGVzO1xuLy8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4vLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbi8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuLy8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4vLyBtb2RlICYgMTY6IHJldHVybiB2YWx1ZSB3aGVuIGl0J3MgUHJvbWlzZS1saWtlXG4vLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuXHRpZihtb2RlICYgMSkgdmFsdWUgPSB0aGlzKHZhbHVlKTtcblx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcblx0aWYodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSkge1xuXHRcdGlmKChtb2RlICYgNCkgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuXHRcdGlmKChtb2RlICYgMTYpICYmIHR5cGVvZiB2YWx1ZS50aGVuID09PSAnZnVuY3Rpb24nKSByZXR1cm4gdmFsdWU7XG5cdH1cblx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcblx0dmFyIGRlZiA9IHt9O1xuXHRsZWFmUHJvdG90eXBlcyA9IGxlYWZQcm90b3R5cGVzIHx8IFtudWxsLCBnZXRQcm90byh7fSksIGdldFByb3RvKFtdKSwgZ2V0UHJvdG8oZ2V0UHJvdG8pXTtcblx0Zm9yKHZhciBjdXJyZW50ID0gbW9kZSAmIDIgJiYgdmFsdWU7IHR5cGVvZiBjdXJyZW50ID09ICdvYmplY3QnICYmICF+bGVhZlByb3RvdHlwZXMuaW5kZXhPZihjdXJyZW50KTsgY3VycmVudCA9IGdldFByb3RvKGN1cnJlbnQpKSB7XG5cdFx0T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoY3VycmVudCkuZm9yRWFjaCgoa2V5KSA9PiAoZGVmW2tleV0gPSAoKSA9PiAodmFsdWVba2V5XSkpKTtcblx0fVxuXHRkZWZbJ2RlZmF1bHQnXSA9ICgpID0+ICh2YWx1ZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChucywgZGVmKTtcblx0cmV0dXJuIG5zO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmYgPSB7fTtcbi8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbi8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5lID0gKGNodW5rSWQpID0+IHtcblx0cmV0dXJuIFByb21pc2UuYWxsKE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uZikucmVkdWNlKChwcm9taXNlcywga2V5KSA9PiB7XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5mW2tleV0oY2h1bmtJZCwgcHJvbWlzZXMpO1xuXHRcdHJldHVybiBwcm9taXNlcztcblx0fSwgW10pKTtcbn07IiwiLy8gVGhpcyBmdW5jdGlvbiBhbGxvdyB0byByZWZlcmVuY2UgYXN5bmMgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnUgPSAoY2h1bmtJZCkgPT4ge1xuXHQvLyByZXR1cm4gdXJsIGZvciBmaWxlbmFtZXMgbm90IGJhc2VkIG9uIHRlbXBsYXRlXG5cdGlmIChjaHVua0lkID09PSBcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2pzemlwX2Rpc3RfanN6aXBfbWluX2pzXCIpIHJldHVybiBcIndpZGdldHMvY2h1bmtzL3ZlbmRvcnMtbm9kZV9tb2R1bGVzX2pzemlwX2Rpc3RfanN6aXBfbWluX2pzLmpzXCI7XG5cdC8vIHJldHVybiB1cmwgZm9yIGZpbGVuYW1lcyBiYXNlZCBvbiB0ZW1wbGF0ZVxuXHRyZXR1cm4gdW5kZWZpbmVkO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJ2YXIgaW5Qcm9ncmVzcyA9IHt9O1xudmFyIGRhdGFXZWJwYWNrUHJlZml4ID0gXCJleGItY2xpZW50OlwiO1xuLy8gbG9hZFNjcmlwdCBmdW5jdGlvbiB0byBsb2FkIGEgc2NyaXB0IHZpYSBzY3JpcHQgdGFnXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmwgPSAodXJsLCBkb25lLCBrZXksIGNodW5rSWQpID0+IHtcblx0aWYoaW5Qcm9ncmVzc1t1cmxdKSB7IGluUHJvZ3Jlc3NbdXJsXS5wdXNoKGRvbmUpOyByZXR1cm47IH1cblx0dmFyIHNjcmlwdCwgbmVlZEF0dGFjaDtcblx0aWYoa2V5ICE9PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBzY3JpcHRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgcyA9IHNjcmlwdHNbaV07XG5cdFx0XHRpZihzLmdldEF0dHJpYnV0ZShcInNyY1wiKSA9PSB1cmwgfHwgcy5nZXRBdHRyaWJ1dGUoXCJkYXRhLXdlYnBhY2tcIikgPT0gZGF0YVdlYnBhY2tQcmVmaXggKyBrZXkpIHsgc2NyaXB0ID0gczsgYnJlYWs7IH1cblx0XHR9XG5cdH1cblx0aWYoIXNjcmlwdCkge1xuXHRcdG5lZWRBdHRhY2ggPSB0cnVlO1xuXHRcdHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuXG5cdFx0c2NyaXB0LmNoYXJzZXQgPSAndXRmLTgnO1xuXHRcdHNjcmlwdC50aW1lb3V0ID0gMTIwO1xuXHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKSB7XG5cdFx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgX193ZWJwYWNrX3JlcXVpcmVfXy5uYyk7XG5cdFx0fVxuXHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXdlYnBhY2tcIiwgZGF0YVdlYnBhY2tQcmVmaXggKyBrZXkpO1xuXG5cdFx0c2NyaXB0LnNyYyA9IHVybDtcblx0fVxuXHRpblByb2dyZXNzW3VybF0gPSBbZG9uZV07XG5cdHZhciBvblNjcmlwdENvbXBsZXRlID0gKHByZXYsIGV2ZW50KSA9PiB7XG5cdFx0Ly8gYXZvaWQgbWVtIGxlYWtzIGluIElFLlxuXHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG51bGw7XG5cdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuXHRcdHZhciBkb25lRm5zID0gaW5Qcm9ncmVzc1t1cmxdO1xuXHRcdGRlbGV0ZSBpblByb2dyZXNzW3VybF07XG5cdFx0c2NyaXB0LnBhcmVudE5vZGUgJiYgc2NyaXB0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcblx0XHRkb25lRm5zICYmIGRvbmVGbnMuZm9yRWFjaCgoZm4pID0+IChmbihldmVudCkpKTtcblx0XHRpZihwcmV2KSByZXR1cm4gcHJldihldmVudCk7XG5cdH1cblx0dmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCB1bmRlZmluZWQsIHsgdHlwZTogJ3RpbWVvdXQnLCB0YXJnZXQ6IHNjcmlwdCB9KSwgMTIwMDAwKTtcblx0c2NyaXB0Lm9uZXJyb3IgPSBvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgc2NyaXB0Lm9uZXJyb3IpO1xuXHRzY3JpcHQub25sb2FkID0gb25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHNjcmlwdC5vbmxvYWQpO1xuXHRuZWVkQXR0YWNoICYmIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbn07IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJ3aWRnZXRzL2NhbGN1bGFkb3JhLWxhcGEvZGlzdC9ydW50aW1lL3dpZGdldFwiOiAwXG59O1xuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmYuaiA9IChjaHVua0lkLCBwcm9taXNlcykgPT4ge1xuXHRcdC8vIEpTT05QIGNodW5rIGxvYWRpbmcgZm9yIGphdmFzY3JpcHRcblx0XHR2YXIgaW5zdGFsbGVkQ2h1bmtEYXRhID0gX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgPyBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gOiB1bmRlZmluZWQ7XG5cdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhICE9PSAwKSB7IC8vIDAgbWVhbnMgXCJhbHJlYWR5IGluc3RhbGxlZFwiLlxuXG5cdFx0XHQvLyBhIFByb21pc2UgbWVhbnMgXCJjdXJyZW50bHkgbG9hZGluZ1wiLlxuXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhKSB7XG5cdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmKHRydWUpIHsgLy8gYWxsIGNodW5rcyBoYXZlIEpTXG5cdFx0XHRcdFx0Ly8gc2V0dXAgUHJvbWlzZSBpbiBjaHVuayBjYWNoZVxuXHRcdFx0XHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4gKGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IFtyZXNvbHZlLCByZWplY3RdKSk7XG5cdFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0gPSBwcm9taXNlKTtcblxuXHRcdFx0XHRcdC8vIHN0YXJ0IGNodW5rIGxvYWRpbmdcblx0XHRcdFx0XHR2YXIgdXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgX193ZWJwYWNrX3JlcXVpcmVfXy51KGNodW5rSWQpO1xuXHRcdFx0XHRcdC8vIGNyZWF0ZSBlcnJvciBiZWZvcmUgc3RhY2sgdW53b3VuZCB0byBnZXQgdXNlZnVsIHN0YWNrdHJhY2UgbGF0ZXJcblx0XHRcdFx0XHR2YXIgZXJyb3IgPSBuZXcgRXJyb3IoKTtcblx0XHRcdFx0XHR2YXIgbG9hZGluZ0VuZGVkID0gKGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSkge1xuXHRcdFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG5cdFx0XHRcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSAhPT0gMCkgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gdW5kZWZpbmVkO1xuXHRcdFx0XHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcblx0XHRcdFx0XHRcdFx0XHR2YXIgZXJyb3JUeXBlID0gZXZlbnQgJiYgKGV2ZW50LnR5cGUgPT09ICdsb2FkJyA/ICdtaXNzaW5nJyA6IGV2ZW50LnR5cGUpO1xuXHRcdFx0XHRcdFx0XHRcdHZhciByZWFsU3JjID0gZXZlbnQgJiYgZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5zcmM7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IubWVzc2FnZSA9ICdMb2FkaW5nIGNodW5rICcgKyBjaHVua0lkICsgJyBmYWlsZWQuXFxuKCcgKyBlcnJvclR5cGUgKyAnOiAnICsgcmVhbFNyYyArICcpJztcblx0XHRcdFx0XHRcdFx0XHRlcnJvci5uYW1lID0gJ0NodW5rTG9hZEVycm9yJztcblx0XHRcdFx0XHRcdFx0XHRlcnJvci50eXBlID0gZXJyb3JUeXBlO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLnJlcXVlc3QgPSByZWFsU3JjO1xuXHRcdFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rRGF0YVsxXShlcnJvcik7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubCh1cmwsIGxvYWRpbmdFbmRlZCwgXCJjaHVuay1cIiArIGNodW5rSWQsIGNodW5rSWQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxufTtcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblxufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua2V4Yl9jbGllbnRcIl0gPSBzZWxmW1wid2VicGFja0NodW5rZXhiX2NsaWVudFwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgKi9cclxuLyoqIEBqc3gganN4ICovXHJcbi8qKlxyXG4gIExpY2Vuc2luZ1xyXG5cclxuICBDb3B5cmlnaHQgMjAyMiBFc3JpXHJcblxyXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IFlvdVxyXG4gIG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5XHJcbiAgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvclxyXG4gIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZ1xyXG4gIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuXHJcbiAgQSBjb3B5IG9mIHRoZSBsaWNlbnNlIGlzIGF2YWlsYWJsZSBpbiB0aGUgcmVwb3NpdG9yeSdzXHJcbiAgTElDRU5TRSBmaWxlLlxyXG4qL1xyXG5pbXBvcnQgeyBSZWFjdCwgdHlwZSBBbGxXaWRnZXRQcm9wcywgY3NzLCBqc3ggfSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB7XHJcbiAgbG9hZEFyY0dJU0pTQVBJTW9kdWxlcyxcclxuICBKaW11TWFwVmlld0NvbXBvbmVudCxcclxuICB0eXBlIEppbXVNYXBWaWV3XHJcbn0gZnJvbSAnamltdS1hcmNnaXMnXHJcblxyXG5pbXBvcnQgdHlwZSB7IElNQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJ1xyXG5cclxuaW1wb3J0IGRlZmF1bHRNZXNzYWdlcyBmcm9tICcuL3RyYW5zbGF0aW9ucy9kZWZhdWx0J1xyXG5cclxuaW50ZXJmYWNlIElTdGF0ZSB7XHJcbiAgamltdU1hcFZpZXc6IEppbXVNYXBWaWV3XHJcbiAgbG9hZGluZzogYm9vbGVhblxyXG4gIHByb2dyZXNzOiBudW1iZXIgLy8gUG9yY2VudGFnZW0gZGUgcHJvZ3Jlc3NvICgwLTEwMClcclxuICBxdWFudGlkYWRlSURFQTogbnVtYmVyXHJcbiAgaWRlYVZhbHVlczogc3RyaW5nW11cclxuICBzaGFwZWZpbGVGaWxlOiBGaWxlIHwgbnVsbFxyXG4gIHNoYXBlZmlsZUxheWVyOiBfX2VzcmkuRmVhdHVyZUxheWVyIHwgbnVsbCAvLyBDYW1hZGEgZG8gc2hhcGVmaWxlIGFkaWNpb25hZGEgYW8gbWFwYVxyXG4gIHNoYXBlZmlsZUdlb21ldHJ5OiBfX2VzcmkuUG9seWdvbiB8IG51bGwgLy8gR2VvbWV0cmlhIGV4dHJhw61kYSBkbyBzaGFwZWZpbGVcclxuICBkcmF3bkdlb21ldHJ5OiBfX2VzcmkuR2VvbWV0cnkgfCBudWxsXHJcbiAgc2tldGNoVmlld01vZGVsOiBfX2VzcmkuU2tldGNoVmlld01vZGVsIHwgbnVsbFxyXG4gIGdyYXBoaWNzTGF5ZXI6IF9fZXNyaS5HcmFwaGljc0xheWVyIHwgbnVsbFxyXG4gIGFuYWx5c2lzUmVzdWx0OiB7XHJcbiAgICBzdWZmaWNpZW50OiBib29sZWFuXHJcbiAgICBtZXNzYWdlOiBzdHJpbmdcclxuICB9IHwgbnVsbFxyXG4gIHJlcG9ydFVybDogc3RyaW5nIHwgbnVsbFxyXG4gIGRyYXdpbmdNb2RlOiBib29sZWFuXHJcbiAgam9iSWQ6IHN0cmluZyB8IG51bGxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2lkZ2V0IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxcclxuQWxsV2lkZ2V0UHJvcHM8SU1Db25maWc+LFxyXG5JU3RhdGVcclxuPiB7XHJcbiAgLy8gR2l2ZSB0eXBlcyB0byB0aGUgbW9kdWxlcyB3ZSBpbXBvcnQgZnJvbSB0aGUgQXJjR0lTIEFQSSBmb3IgSmF2YVNjcmlwdFxyXG4gIFNrZXRjaFZpZXdNb2RlbDogdHlwZW9mIF9fZXNyaS5Ta2V0Y2hWaWV3TW9kZWxcclxuICBHcmFwaGljc0xheWVyOiB0eXBlb2YgX19lc3JpLkdyYXBoaWNzTGF5ZXJcclxuICBQb2x5Z29uOiB0eXBlb2YgX19lc3JpLlBvbHlnb25cclxuICBGZWF0dXJlTGF5ZXI6IHR5cGVvZiBfX2VzcmkuRmVhdHVyZUxheWVyXHJcblxyXG4gIHN0YXRlOiBJU3RhdGUgPSB7XHJcbiAgICBqaW11TWFwVmlldzogbnVsbCxcclxuICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgcHJvZ3Jlc3M6IDAsXHJcbiAgICBxdWFudGlkYWRlSURFQTogMSxcclxuICAgIGlkZWFWYWx1ZXM6IFsnJ10sXHJcbiAgICBzaGFwZWZpbGVGaWxlOiBudWxsLFxyXG4gICAgc2hhcGVmaWxlTGF5ZXI6IG51bGwsXHJcbiAgICBzaGFwZWZpbGVHZW9tZXRyeTogbnVsbCxcclxuICAgIGRyYXduR2VvbWV0cnk6IG51bGwsXHJcbiAgICBza2V0Y2hWaWV3TW9kZWw6IG51bGwsXHJcbiAgICBncmFwaGljc0xheWVyOiBudWxsLFxyXG4gICAgYW5hbHlzaXNSZXN1bHQ6IG51bGwsXHJcbiAgICByZXBvcnRVcmw6IG51bGwsXHJcbiAgICBkcmF3aW5nTW9kZTogZmFsc2UsXHJcbiAgICBqb2JJZDogbnVsbFxyXG4gIH1cclxuXHJcbiAgLy8gVVJMIGRhIGZlcnJhbWVudGEgZGUgZ2VvcHJvY2Vzc2FtZW50byBkZSBjYWxjdWxhZG9yYSBkZSBjb21wZW5zYcOnw6NvXHJcbiAgcmVhZG9ubHkgR1BfU0VSVklDRV9VUkwgPSAnaHR0cHM6Ly9tZWlvYW1iaWVudGUuc2lzdGVtYXMubXBiYS5tcC5ici9zZXJ2ZXIvcmVzdC9zZXJ2aWNlcy90ZXN0ZW91dHB1dC9jYWxjdWxhZG9yYS9HUFNlcnZlcidcclxuICBcclxuICAvLyBVUkwgZG8gUG9ydGFsL1NlcnZlclxyXG4gIHJlYWRvbmx5IFBPUlRBTF9VUkwgPSAnaHR0cHM6Ly9tZWlvYW1iaWVudGUuc2lzdGVtYXMubXBiYS5tcC5ici9zZXJ2ZXInXHJcbiAgXHJcbiAgLy8gTm9tZSBkYSB0YXNrIGVzcGVjw61maWNhIGRlbnRybyBkYSBHUFxyXG4gIHJlYWRvbmx5IEdQX1RBU0tfTkFNRSA9ICdTaW11bGFyIMOBcmVhIGRlIENvbXBlbnNhw6fDo28nXHJcbiAgXHJcbiAgLy8gVG9rZW4gZm9ybmVjaWRvIHBhcmEgYXV0ZW50aWNhw6fDo29cclxuICByZWFkb25seSBHUF9UT0tFTiA9ICdfek5ENDlkS2h2bjU5dERUNEhxNDgwRjhJb1ZOdndGcmdwSlJXanlIUkJHcjhiWWFLTF9ZeXpSQXk4ZldDRi12S2FCdmpYaEgyRnVMNk9RMHRTZmZBSGViYVFCRk1OMUNwT292c3k4Zno3VTdvOUJBdkhSWFR4aS1wNlFndlFxQidcclxuICBcclxuICAvLyBDbGllbnQgU2VjcmV0IHBhcmEgYXV0ZW50aWNhw6fDo28gT0F1dGgyIChxdWFuZG8gbmVjZXNzw6FyaW8gcmVub3ZhciB0b2tlbilcclxuICByZWFkb25seSBDTElFTlRfU0VDUkVUID0gJ2Y4YzQyMzQyM2FhNzQ0NmI4YTE3YjMwMTQzZjliMDhhJ1xyXG5cclxuICBjb21wb25lbnREaWRVcGRhdGUgPSAocHJldlByb3BzLCBwcmV2U3RhdGUpID0+IHtcclxuICAgIGlmICh0aGlzLnN0YXRlLmppbXVNYXBWaWV3ICYmICFwcmV2U3RhdGUuamltdU1hcFZpZXcpIHtcclxuICAgICAgdGhpcy5pbml0aWFsaXplU2tldGNoKClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50ID0gKCkgPT4ge1xyXG4gICAgaWYgKHRoaXMuc3RhdGUuc2tldGNoVmlld01vZGVsKSB7XHJcbiAgICAgIHRoaXMuc3RhdGUuc2tldGNoVmlld01vZGVsLmRlc3Ryb3koKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gSW5pY2lhbGl6YSBvIFNrZXRjaCBwYXJhIGRlc2VuaG8gbm8gbWFwYVxyXG4gIGluaXRpYWxpemVTa2V0Y2ggPSBhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAoIXRoaXMuc3RhdGUuamltdU1hcFZpZXcgfHwgIXRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldykge1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBtb2R1bGVzID0gYXdhaXQgbG9hZEFyY0dJU0pTQVBJTW9kdWxlcyhbXHJcbiAgICAgICAgJ2Vzcmkvd2lkZ2V0cy9Ta2V0Y2gvU2tldGNoVmlld01vZGVsJyxcclxuICAgICAgICAnZXNyaS9sYXllcnMvR3JhcGhpY3NMYXllcicsXHJcbiAgICAgICAgJ2VzcmkvZ2VvbWV0cnkvUG9seWdvbidcclxuICAgICAgXSlcclxuICAgICAgXHJcbiAgICAgIGNvbnN0IFtTa2V0Y2hWaWV3TW9kZWwsIEdyYXBoaWNzTGF5ZXIsIFBvbHlnb25dID0gbW9kdWxlc1xyXG4gICAgICB0aGlzLlNrZXRjaFZpZXdNb2RlbCA9IFNrZXRjaFZpZXdNb2RlbFxyXG4gICAgICB0aGlzLkdyYXBoaWNzTGF5ZXIgPSBHcmFwaGljc0xheWVyXHJcbiAgICAgIHRoaXMuUG9seWdvbiA9IFBvbHlnb25cclxuXHJcbiAgICAgIC8vIENyaWEgdW1hIGNhbWFkYSBkZSBncsOhZmljb3MgcGFyYSBvIGRlc2VuaG9cclxuICAgICAgY29uc3QgZ3JhcGhpY3NMYXllciA9IG5ldyB0aGlzLkdyYXBoaWNzTGF5ZXIoKVxyXG4gICAgICB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcubWFwLmFkZChncmFwaGljc0xheWVyKVxyXG5cclxuICAgICAgLy8gQ3JpYSBvIFNrZXRjaFZpZXdNb2RlbFxyXG4gICAgICBjb25zdCBza2V0Y2hWaWV3TW9kZWwgPSBuZXcgdGhpcy5Ta2V0Y2hWaWV3TW9kZWwoe1xyXG4gICAgICAgIHZpZXc6IHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldyxcclxuICAgICAgICBsYXllcjogZ3JhcGhpY3NMYXllcixcclxuICAgICAgICBwb2x5Z29uU3ltYm9sOiB7XHJcbiAgICAgICAgICB0eXBlOiAnc2ltcGxlLWZpbGwnLFxyXG4gICAgICAgICAgY29sb3I6IFs1MSwgNTEsIDIwNCwgMC4yXSxcclxuICAgICAgICAgIG91dGxpbmU6IHtcclxuICAgICAgICAgICAgY29sb3I6IFs1MSwgNTEsIDIwNCwgMV0sXHJcbiAgICAgICAgICAgIHdpZHRoOiAyXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgLy8gTGlzdGVuZXIgcGFyYSBxdWFuZG8gbyBkZXNlbmhvIMOpIGNvbXBsZXRhZG9cclxuICAgICAgc2tldGNoVmlld01vZGVsLm9uKCdjcmVhdGUnLCAoZXZlbnQpID0+IHtcclxuICAgICAgICBpZiAoZXZlbnQuc3RhdGUgPT09ICdjb21wbGV0ZScpIHtcclxuICAgICAgICAgIGNvbnN0IGdlb21ldHJ5ID0gZXZlbnQuZ3JhcGhpYy5nZW9tZXRyeVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAvLyBWYWxpZGEgc2UgYSBnZW9tZXRyaWEgdGVtIHJpbmdzIHbDoWxpZG9zIChwYXJhIHBvbMOtZ29ub3MpXHJcbiAgICAgICAgICBpZiAoZ2VvbWV0cnkgJiYgZ2VvbWV0cnkudHlwZSA9PT0gJ3BvbHlnb24nKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBvbHlnb24gPSBnZW9tZXRyeSBhcyBfX2VzcmkuUG9seWdvblxyXG4gICAgICAgICAgICBpZiAocG9seWdvbi5yaW5ncyAmJiBwb2x5Z29uLnJpbmdzLmxlbmd0aCA+IDAgJiYgcG9seWdvbi5yaW5nc1swXS5sZW5ndGggPj0gMykge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCc9PT0gR0VPTUVUUklBIENBUFRVUkFEQSA9PT0nKVxyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUaXBvOicsIGdlb21ldHJ5LnR5cGUpXHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1NwYXRpYWxSZWZlcmVuY2U6JywgZ2VvbWV0cnkuc3BhdGlhbFJlZmVyZW5jZSlcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTsO6bWVybyBkZSByaW5nczonLCBwb2x5Z29uLnJpbmdzLmxlbmd0aClcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAvLyBNb3N0cmEgYXMgY29vcmRlbmFkYXMgZGUgY2FkYSByaW5nXHJcbiAgICAgICAgICAgICAgcG9seWdvbi5yaW5ncy5mb3JFYWNoKChyaW5nLCByaW5nSW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAtLS0gUmluZyAke3JpbmdJbmRleCArIDF9ICgke3JpbmcubGVuZ3RofSBwb250b3MpIC0tLWApXHJcbiAgICAgICAgICAgICAgICByaW5nLmZvckVhY2goKHBvaW50LCBwb2ludEluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAgIFBvbnRvICR7cG9pbnRJbmRleCArIDF9OiBbJHtwb2ludFswXX0sICR7cG9pbnRbMV19XWApXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgLy8gQ2FsY3VsYSBlIG1vc3RyYSBhIMOhcmVhIGFwcm94aW1hZGEgKHNlIHBvc3PDrXZlbClcclxuICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZXh0ZW50ID0gZ2VvbWV0cnkuZXh0ZW50XHJcbiAgICAgICAgICAgICAgICBpZiAoZXh0ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gZXh0ZW50LndpZHRoXHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9IGV4dGVudC5oZWlnaHRcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0V4dGVudCAoYm91bmRpbmcgYm94KTonKVxyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgICBYbWluOiAke2V4dGVudC54bWlufSwgWW1pbjogJHtleHRlbnQueW1pbn1gKVxyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgICBYbWF4OiAke2V4dGVudC54bWF4fSwgWW1heDogJHtleHRlbnQueW1heH1gKVxyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgICBMYXJndXJhOiAke3dpZHRofSwgQWx0dXJhOiAke2hlaWdodH1gKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdOw6NvIGZvaSBwb3Nzw612ZWwgY2FsY3VsYXIgZXh0ZW50JylcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBkcmF3bkdlb21ldHJ5OiBnZW9tZXRyeSxcclxuICAgICAgICAgICAgICAgIGRyYXdpbmdNb2RlOiBmYWxzZVxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgLy8gTsOjbyBwcmVjaXNhIHJlc2V0YXIgLSBvIFNrZXRjaFZpZXdNb2RlbCBqw6EgZXN0w6EgcHJvbnRvIHBhcmEgdW0gbm92byBkZXNlbmhvXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgYWxlcnQoJ1BvciBmYXZvciwgZGVzZW5oZSB1bSBwb2zDrWdvbm8gdsOhbGlkbyBjb20gcGVsbyBtZW5vcyAzIHBvbnRvcy4nKVxyXG4gICAgICAgICAgICAgIC8vIENhbmNlbGEgbyBkZXNlbmhvIGludsOhbGlkb1xyXG4gICAgICAgICAgICAgIGlmIChza2V0Y2hWaWV3TW9kZWwuc3RhdGUgIT09ICdyZWFkeScpIHtcclxuICAgICAgICAgICAgICAgIHNrZXRjaFZpZXdNb2RlbC5jYW5jZWwoKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgZHJhd25HZW9tZXRyeTogZ2VvbWV0cnksXHJcbiAgICAgICAgICAgICAgZHJhd2luZ01vZGU6IGZhbHNlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC8vIE7Do28gcHJlY2lzYSByZXNldGFyIC0gbyBTa2V0Y2hWaWV3TW9kZWwgasOhIGVzdMOhIHByb250byBwYXJhIHVtIG5vdm8gZGVzZW5ob1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuXHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIHNrZXRjaFZpZXdNb2RlbCxcclxuICAgICAgICBncmFwaGljc0xheWVyXHJcbiAgICAgIH0pXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvIGFvIGluaWNpYWxpemFyIFNrZXRjaDonLCBlcnJvcilcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIEF0dWFsaXphIGEgcXVhbnRpZGFkZSBkZSBJREVBIGUgY3JpYSBvcyBjYW1wb3MgZGluw6JtaWNvc1xyXG4gIGhhbmRsZVF1YW50aWRhZGVJREVBQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCBxdWFudGlkYWRlID0gcGFyc2VJbnQoZXZlbnQudGFyZ2V0LnZhbHVlKSB8fCAxXHJcbiAgICBjb25zdCBtYXhRdWFudGlkYWRlID0gTWF0aC5tYXgoMSwgTWF0aC5taW4ocXVhbnRpZGFkZSwgMTApKSAvLyBMaW1pdGEgZW50cmUgMSBlIDEwXHJcbiAgICBcclxuICAgIGNvbnN0IGlkZWFWYWx1ZXMgPSBbXVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXhRdWFudGlkYWRlOyBpKyspIHtcclxuICAgICAgaWRlYVZhbHVlcy5wdXNoKHRoaXMuc3RhdGUuaWRlYVZhbHVlc1tpXSB8fCAnJylcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgcXVhbnRpZGFkZUlERUE6IG1heFF1YW50aWRhZGUsXHJcbiAgICAgIGlkZWFWYWx1ZXNcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICAvLyBBdHVhbGl6YSB1bSB2YWxvciBkZSBJREVBIGVzcGVjw61maWNvXHJcbiAgaGFuZGxlSWRlYVZhbHVlQ2hhbmdlID0gKGluZGV4OiBudW1iZXIsIHZhbHVlOiBzdHJpbmcpID0+IHtcclxuICAgIGNvbnN0IGlkZWFWYWx1ZXMgPSBbLi4udGhpcy5zdGF0ZS5pZGVhVmFsdWVzXVxyXG4gICAgaWRlYVZhbHVlc1tpbmRleF0gPSB2YWx1ZVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlkZWFWYWx1ZXMgfSlcclxuICB9XHJcblxyXG4gIC8vIFZhbGlkYSBvIHNoYXBlZmlsZSBkZW50cm8gZG8gWklQXHJcbiAgcHJpdmF0ZSBhc3luYyB2YWxpZGF0ZVNoYXBlZmlsZUluWmlwKHppcEZpbGU6IEZpbGUpOiBQcm9taXNlPHsgdmFsaWQ6IGJvb2xlYW47IG1lc3NhZ2U6IHN0cmluZzsgZmlsZUNvdW50PzogbnVtYmVyIH0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIC8vIENhcnJlZ2EgSlNaaXAgZGluYW1pY2FtZW50ZVxyXG4gICAgICBjb25zdCBKU1ppcCA9IChhd2FpdCBpbXBvcnQoJ2pzemlwJykpLmRlZmF1bHRcclxuICAgICAgXHJcbiAgICAgIGNvbnNvbGUubG9nKCc9PT0gVkFMSURBTkRPIFNIQVBFRklMRSBOTyBaSVAgPT09JylcclxuICAgICAgY29uc29sZS5sb2coJ0xlbmRvIGFycXVpdm8gWklQOicsIHppcEZpbGUubmFtZSwgJ1RhbWFuaG86JywgemlwRmlsZS5zaXplLCAnYnl0ZXMnKVxyXG4gICAgICBcclxuICAgICAgLy8gTMOqIG8gYXJxdWl2byBaSVBcclxuICAgICAgY29uc3QgemlwRGF0YSA9IGF3YWl0IHppcEZpbGUuYXJyYXlCdWZmZXIoKVxyXG4gICAgICBjb25zdCB6aXAgPSBhd2FpdCBKU1ppcC5sb2FkQXN5bmMoemlwRGF0YSlcclxuICAgICAgXHJcbiAgICAgIC8vIExpc3RhIHRvZG9zIG9zIGFycXVpdm9zIG5vIFpJUFxyXG4gICAgICBjb25zdCBmaWxlTmFtZXMgPSBPYmplY3Qua2V5cyh6aXAuZmlsZXMpXHJcbiAgICAgIGNvbnNvbGUubG9nKCdBcnF1aXZvcyBlbmNvbnRyYWRvcyBubyBaSVA6JywgZmlsZU5hbWVzKVxyXG4gICAgICBcclxuICAgICAgLy8gUHJvY3VyYSBwZWxvcyBhcnF1aXZvcyBlc3NlbmNpYWlzIGRvIHNoYXBlZmlsZVxyXG4gICAgICBjb25zdCByZXF1aXJlZEV4dGVuc2lvbnMgPSBbJy5zaHAnLCAnLnNoeCcsICcuZGJmJ11cclxuICAgICAgY29uc3QgZm91bmRGaWxlczogc3RyaW5nW10gPSBbXVxyXG4gICAgICBjb25zdCBtaXNzaW5nRmlsZXM6IHN0cmluZ1tdID0gW11cclxuICAgICAgXHJcbiAgICAgIC8vIFByb2N1cmEgcG9yIGFycXVpdm9zIGNvbSBhcyBleHRlbnPDtWVzIG5lY2Vzc8Ohcmlhc1xyXG4gICAgICByZXF1aXJlZEV4dGVuc2lvbnMuZm9yRWFjaChleHQgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZvdW5kID0gZmlsZU5hbWVzLmZpbmQobmFtZSA9PiBuYW1lLnRvTG93ZXJDYXNlKCkuZW5kc1dpdGgoZXh0KSlcclxuICAgICAgICBpZiAoZm91bmQpIHtcclxuICAgICAgICAgIGZvdW5kRmlsZXMucHVzaChmb3VuZClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbWlzc2luZ0ZpbGVzLnB1c2goZXh0KVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgXHJcbiAgICAgIGNvbnNvbGUubG9nKCdBcnF1aXZvcyBlbmNvbnRyYWRvczonLCBmb3VuZEZpbGVzKVxyXG4gICAgICBjb25zb2xlLmxvZygnQXJxdWl2b3MgZmFsdGFuZG86JywgbWlzc2luZ0ZpbGVzKVxyXG4gICAgICBcclxuICAgICAgLy8gVmVyaWZpY2Egc2UgdGVtIG9zIGFycXVpdm9zIGVzc2VuY2lhaXNcclxuICAgICAgaWYgKG1pc3NpbmdGaWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHZhbGlkOiBmYWxzZSxcclxuICAgICAgICAgIG1lc3NhZ2U6IGBPIGFycXVpdm8gWklQIG7Do28gY29udMOpbSB0b2RvcyBvcyBhcnF1aXZvcyBuZWNlc3PDoXJpb3MgZG8gc2hhcGVmaWxlLlxcblxcbmAgK1xyXG4gICAgICAgICAgICBgQXJxdWl2b3MgZW5jb250cmFkb3M6ICR7Zm91bmRGaWxlcy5sZW5ndGggPiAwID8gZm91bmRGaWxlcy5qb2luKCcsICcpIDogJ05lbmh1bSd9XFxuYCArXHJcbiAgICAgICAgICAgIGBBcnF1aXZvcyBmYWx0YW5kbzogJHttaXNzaW5nRmlsZXMuam9pbignLCAnKX1cXG5cXG5gICtcclxuICAgICAgICAgICAgYFVtIHNoYXBlZmlsZSBjb21wbGV0byBwcmVjaXNhIGRlOlxcbmAgK1xyXG4gICAgICAgICAgICBgLSAuc2hwIChnZW9tZXRyaWEpXFxuYCArXHJcbiAgICAgICAgICAgIGAtIC5zaHggKMOtbmRpY2UpXFxuYCArXHJcbiAgICAgICAgICAgIGAtIC5kYmYgKGF0cmlidXRvcylcXG5gICtcclxuICAgICAgICAgICAgYC0gLnByaiAocHJvamXDp8OjbyAtIG9wY2lvbmFsKWAsXHJcbiAgICAgICAgICBmaWxlQ291bnQ6IGZpbGVOYW1lcy5sZW5ndGhcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8vIFRlbnRhIGxlciBvIGFycXVpdm8gLnNocCBwYXJhIHZhbGlkYXIgZ2VvbWV0cmlhc1xyXG4gICAgICBjb25zdCBzaHBGaWxlID0gZm91bmRGaWxlcy5maW5kKGYgPT4gZi50b0xvd2VyQ2FzZSgpLmVuZHNXaXRoKCcuc2hwJykpXHJcbiAgICAgIGlmIChzaHBGaWxlKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHNocERhdGEgPSBhd2FpdCB6aXAuZmlsZXNbc2hwRmlsZV0uYXN5bmMoJ2FycmF5YnVmZmVyJylcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdBcnF1aXZvIC5zaHAgZW5jb250cmFkbywgdGFtYW5obzonLCBzaHBEYXRhLmJ5dGVMZW5ndGgsICdieXRlcycpXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC8vIFZhbGlkYcOnw6NvIGLDoXNpY2E6IHZlcmlmaWNhIHNlIG8gYXJxdWl2byAuc2hwIHRlbSB1bSB0YW1hbmhvIG3DrW5pbW9cclxuICAgICAgICAgIC8vIFVtIHNoYXBlZmlsZSB2w6FsaWRvIHByZWNpc2EgdGVyIHBlbG8gbWVub3MgbyBoZWFkZXIgKDEwMCBieXRlcykgKyBhbGd1bnMgcmVnaXN0cm9zXHJcbiAgICAgICAgICBpZiAoc2hwRGF0YS5ieXRlTGVuZ3RoIDwgMTAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgdmFsaWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIG1lc3NhZ2U6ICdPIGFycXVpdm8gLnNocCBlc3TDoSBtdWl0byBwZXF1ZW5vIG91IGNvcnJvbXBpZG8uIFRhbWFuaG8gbcOtbmltbyBlc3BlcmFkbzogMTAwIGJ5dGVzLicsXHJcbiAgICAgICAgICAgICAgZmlsZUNvdW50OiBmaWxlTmFtZXMubGVuZ3RoXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLy8gVmFsaWRhw6fDo28gYsOhc2ljYSBkbyBzaGFwZWZpbGUgKHNlbSBzaHBqcylcclxuICAgICAgICAgIC8vIHNocGpzIGZvaSByZW1vdmlkbyAtIHVzYW5kbyBhcGVuYXMgdmFsaWRhw6fDo28gYsOhc2ljYSBkbyBoZWFkZXJcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdGYXplbmRvIHZhbGlkYcOnw6NvIGLDoXNpY2EgZG8gYXJxdWl2by4uLicpXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC8vIFZhbGlkYcOnw6NvIGLDoXNpY2E6IHZlcmlmaWNhIG8gaGVhZGVyIGRvIHNoYXBlZmlsZVxyXG4gICAgICAgICAgY29uc3QgdmlldyA9IG5ldyBEYXRhVmlldyhzaHBEYXRhKVxyXG4gICAgICAgICAgY29uc3QgZmlsZUNvZGUgPSB2aWV3LmdldEludDMyKDAsIGZhbHNlKSAvLyBCaWcgZW5kaWFuXHJcbiAgICAgICAgICBjb25zdCBzaGFwZVR5cGUgPSB2aWV3LmdldEludDMyKDMyLCB0cnVlKSAvLyBMaXR0bGUgZW5kaWFuXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC8vIEPDs2RpZ28gZGUgYXJxdWl2byBzaGFwZWZpbGUgdsOhbGlkbyDDqSA5OTk0XHJcbiAgICAgICAgICBpZiAoZmlsZUNvZGUgIT09IDk5OTQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICB2YWxpZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgbWVzc2FnZTogJ08gYXJxdWl2byAuc2hwIG7Do28gcGFyZWNlIHNlciB1bSBzaGFwZWZpbGUgdsOhbGlkby5cXG5cXG4nICtcclxuICAgICAgICAgICAgICAgICdDw7NkaWdvIGRlIGFycXVpdm8gZXNwZXJhZG86IDk5OTRcXG4nICtcclxuICAgICAgICAgICAgICAgIGBDw7NkaWdvIGVuY29udHJhZG86ICR7ZmlsZUNvZGV9YCxcclxuICAgICAgICAgICAgICBmaWxlQ291bnQ6IGZpbGVOYW1lcy5sZW5ndGhcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAvLyBTaGFwZVR5cGUgNSA9IFBvbHlnb25cclxuICAgICAgICAgIGlmIChzaGFwZVR5cGUgIT09IDUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICB2YWxpZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgbWVzc2FnZTogYE8gc2hhcGVmaWxlIG7Do28gY29udMOpbSBwb2zDrWdvbm9zLlxcblxcbmAgK1xyXG4gICAgICAgICAgICAgICAgYFRpcG8gZGUgZ2VvbWV0cmlhIGVuY29udHJhZG86ICR7c2hhcGVUeXBlfVxcbmAgK1xyXG4gICAgICAgICAgICAgICAgYFRpcG8gZXNwZXJhZG86IDUgKFBvbHlnb24pXFxuXFxuYCArXHJcbiAgICAgICAgICAgICAgICBgRXN0ZSB3aWRnZXQgcmVxdWVyIGdlb21ldHJpYXMgZG8gdGlwbyBQb2x5Z29uLmAsXHJcbiAgICAgICAgICAgICAgZmlsZUNvdW50OiBmaWxlTmFtZXMubGVuZ3RoXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdmFsaWQ6IHRydWUsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdTaGFwZWZpbGUgdmFsaWRhZG8gKHZhbGlkYcOnw6NvIGLDoXNpY2EpLiBBcnF1aXZvIHBhcmVjZSBlc3RhciBjb3JyZXRvLicsXHJcbiAgICAgICAgICAgIGZpbGVDb3VudDogZmlsZU5hbWVzLmxlbmd0aFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKHJlYWRFcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJybyBhbyBsZXIgYXJxdWl2byAuc2hwOicsIHJlYWRFcnJvcilcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHZhbGlkOiBmYWxzZSxcclxuICAgICAgICAgICAgbWVzc2FnZTogYEVycm8gYW8gbGVyIG8gYXJxdWl2byAuc2hwOiAke3JlYWRFcnJvci5tZXNzYWdlfWAsXHJcbiAgICAgICAgICAgIGZpbGVDb3VudDogZmlsZU5hbWVzLmxlbmd0aFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB2YWxpZDogZmFsc2UsXHJcbiAgICAgICAgbWVzc2FnZTogJ07Do28gZm9pIHBvc3PDrXZlbCBlbmNvbnRyYXIgbyBhcnF1aXZvIC5zaHAgbm8gWklQLicsXHJcbiAgICAgICAgZmlsZUNvdW50OiBmaWxlTmFtZXMubGVuZ3RoXHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm8gYW8gdmFsaWRhciBzaGFwZWZpbGU6JywgZXJyb3IpXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgdmFsaWQ6IGZhbHNlLFxyXG4gICAgICAgIG1lc3NhZ2U6IGBFcnJvIGFvIHZhbGlkYXIgbyBhcnF1aXZvIFpJUDogJHtlcnJvci5tZXNzYWdlfVxcblxcbmAgK1xyXG4gICAgICAgICAgJ1BvciBmYXZvciwgdmVyaWZpcXVlIHNlIG8gYXJxdWl2byDDqSB1bSBaSVAgdsOhbGlkbyBjb250ZW5kbyB1bSBzaGFwZWZpbGUgY29tcGxldG8uJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBNYW5pcHVsYSBvIHVwbG9hZCBkbyBzaGFwZWZpbGVcclxuICBoYW5kbGVTaGFwZWZpbGVVcGxvYWQgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgIGNvbnN0IGZpbGUgPSBldmVudC50YXJnZXQuZmlsZXM/LlswXVxyXG4gICAgaWYgKGZpbGUpIHtcclxuICAgICAgaWYgKGZpbGUubmFtZS50b0xvd2VyQ2FzZSgpLmVuZHNXaXRoKCcuemlwJykpIHtcclxuICAgICAgICAvLyBWYWxpZGEgbyBzaGFwZWZpbGUgYW50ZXMgZGUgc2FsdmFyXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUgfSlcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3QgdmFsaWRhdGlvbiA9IGF3YWl0IHRoaXMudmFsaWRhdGVTaGFwZWZpbGVJblppcChmaWxlKVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBpZiAodmFsaWRhdGlvbi52YWxpZCkge1xyXG4gICAgICAgICAgICAvLyBMw6ogbyBzaGFwZWZpbGUgZSBhZGljaW9uYSBjb21vIGNhbWFkYSBsb2NhbCBhbyBtYXBhXHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuYWRkU2hhcGVmaWxlTGF5ZXJGcm9tWmlwKGZpbGUpXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaGFwZWZpbGVGaWxlOiBmaWxlLCBsb2FkaW5nOiBmYWxzZSB9KVxyXG4gICAgICAgICAgICBhbGVydChg4pyTICR7dmFsaWRhdGlvbi5tZXNzYWdlfVxcblxcbkEgY2FtYWRhIGZvaSBhZGljaW9uYWRhIGFvIG1hcGEuYClcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaGFwZWZpbGVGaWxlOiBudWxsLCBzaGFwZWZpbGVMYXllcjogbnVsbCwgc2hhcGVmaWxlR2VvbWV0cnk6IG51bGwsIGxvYWRpbmc6IGZhbHNlIH0pXHJcbiAgICAgICAgICAgIGFsZXJ0KGDinYwgJHt2YWxpZGF0aW9uLm1lc3NhZ2V9YClcclxuICAgICAgICAgICAgLy8gTGltcGEgbyBpbnB1dFxyXG4gICAgICAgICAgICBldmVudC50YXJnZXQudmFsdWUgPSAnJ1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvIGFvIHZhbGlkYXIgc2hhcGVmaWxlOicsIGVycm9yKVxyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pXHJcbiAgICAgICAgICBhbGVydChgRXJybyBhbyB2YWxpZGFyIG8gYXJxdWl2bzogJHtlcnJvci5tZXNzYWdlfVxcblxcbk8gYXJxdWl2byBzZXLDoSBlbnZpYWRvIG1lc21vIGFzc2ltLCBtYXMgcG9kZSBmYWxoYXIgbm8gc2Vydmlkb3IuYClcclxuICAgICAgICAgIC8vIFRlbnRhIGFkaWNpb25hciBtZXNtbyBhc3NpbVxyXG4gICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5hZGRTaGFwZWZpbGVMYXllckZyb21aaXAoZmlsZSlcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNoYXBlZmlsZUZpbGU6IGZpbGUgfSlcclxuICAgICAgICAgIH0gY2F0Y2ggKGFkZEVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm8gYW8gYWRpY2lvbmFyIGNhbWFkYTonLCBhZGRFcnJvcilcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNoYXBlZmlsZUZpbGU6IG51bGwsIHNoYXBlZmlsZUxheWVyOiBudWxsLCBzaGFwZWZpbGVHZW9tZXRyeTogbnVsbCB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBhbGVydCgnUG9yIGZhdm9yLCBmYcOnYSB1cGxvYWQgZGUgdW0gYXJxdWl2byBaSVAgY29udGVuZG8gbyBzaGFwZWZpbGUuJylcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gTMOqIG8gc2hhcGVmaWxlIGRvIFpJUCBlIGFkaWNpb25hIGNvbW8gY2FtYWRhIGxvY2FsIGFvIG1hcGFcclxuICBwcml2YXRlIGFzeW5jIGFkZFNoYXBlZmlsZUxheWVyRnJvbVppcCh6aXBGaWxlOiBGaWxlKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBpZiAoIXRoaXMuc3RhdGUuamltdU1hcFZpZXc/LnZpZXc/Lm1hcCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ08gbWFwYSBuw6NvIGVzdMOhIGNhcnJlZ2Fkby4gQWd1YXJkZSBvIG1hcGEgY2FycmVnYXIgY29tcGxldGFtZW50ZS4nKVxyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCc9PT0gTEVORE8gU0hBUEVGSUxFIEUgQURJQ0lPTkFORE8gQ0FNQURBIExPQ0FMID09PScpXHJcbiAgICAgIFxyXG4gICAgICAvLyBDYXJyZWdhIG3Ds2R1bG9zIG5lY2Vzc8Ohcmlvc1xyXG4gICAgICBjb25zdCBtb2R1bGVzID0gYXdhaXQgbG9hZEFyY0dJU0pTQVBJTW9kdWxlcyhbXHJcbiAgICAgICAgJ2VzcmkvbGF5ZXJzL0ZlYXR1cmVMYXllcicsXHJcbiAgICAgICAgJ2VzcmkvZ2VvbWV0cnkvUG9seWdvbicsXHJcbiAgICAgICAgJ2VzcmkvR3JhcGhpYycsXHJcbiAgICAgICAgJ2VzcmkvZ2VvbWV0cnkvU3BhdGlhbFJlZmVyZW5jZScsXHJcbiAgICAgICAgJ2VzcmkvZ2VvbWV0cnkvZ2VvbWV0cnlFbmdpbmUnXHJcbiAgICAgIF0pXHJcbiAgICAgIGNvbnN0IFtGZWF0dXJlTGF5ZXIsIFBvbHlnb24sIEdyYXBoaWMsIFNwYXRpYWxSZWZlcmVuY2UsIGdlb21ldHJ5RW5naW5lXSA9IG1vZHVsZXNcclxuICAgICAgdGhpcy5GZWF0dXJlTGF5ZXIgPSBGZWF0dXJlTGF5ZXJcclxuICAgICAgXHJcbiAgICAgIC8vIFJlbW92ZSBjYW1hZGEgYW50ZXJpb3Igc2UgZXhpc3RpclxyXG4gICAgICBpZiAodGhpcy5zdGF0ZS5zaGFwZWZpbGVMYXllciAmJiB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcubWFwKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3Lm1hcC5yZW1vdmUodGhpcy5zdGF0ZS5zaGFwZWZpbGVMYXllcilcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLy8gTMOqIG8gWklQXHJcbiAgICAgIGNvbnN0IEpTWmlwID0gKGF3YWl0IGltcG9ydCgnanN6aXAnKSkuZGVmYXVsdFxyXG4gICAgICBjb25zdCB6aXBCdWZmZXIgPSBhd2FpdCB6aXBGaWxlLmFycmF5QnVmZmVyKClcclxuICAgICAgY29uc3QgemlwID0gYXdhaXQgSlNaaXAubG9hZEFzeW5jKHppcEJ1ZmZlcilcclxuICAgICAgXHJcbiAgICAgIC8vIEVuY29udHJhIGFycXVpdm9zIGRvIHNoYXBlZmlsZVxyXG4gICAgICBjb25zdCBmaWxlTmFtZXMgPSBPYmplY3Qua2V5cyh6aXAuZmlsZXMpXHJcbiAgICAgIGNvbnN0IHNocEZpbGUgPSBmaWxlTmFtZXMuZmluZChuYW1lID0+IG5hbWUudG9Mb3dlckNhc2UoKS5lbmRzV2l0aCgnLnNocCcpKVxyXG4gICAgICBjb25zdCBkYmZGaWxlID0gZmlsZU5hbWVzLmZpbmQobmFtZSA9PiBuYW1lLnRvTG93ZXJDYXNlKCkuZW5kc1dpdGgoJy5kYmYnKSlcclxuICAgICAgY29uc3QgcHJqRmlsZSA9IGZpbGVOYW1lcy5maW5kKG5hbWUgPT4gbmFtZS50b0xvd2VyQ2FzZSgpLmVuZHNXaXRoKCcucHJqJykpXHJcbiAgICAgIFxyXG4gICAgICBpZiAoIXNocEZpbGUpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FycXVpdm8gLnNocCBuw6NvIGVuY29udHJhZG8gbm8gWklQJylcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLy8gTMOqIG8gYXJxdWl2byAuc2hwXHJcbiAgICAgIGNvbnN0IHNocEZpbGVPYmogPSB6aXAuZmlsZShzaHBGaWxlKVxyXG4gICAgICBpZiAoIXNocEZpbGVPYmopIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ07Do28gZm9pIHBvc3PDrXZlbCBsZXIgbyBhcnF1aXZvIC5zaHAnKVxyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHNocERhdGEgPSBhd2FpdCBzaHBGaWxlT2JqLmFzeW5jKCdhcnJheWJ1ZmZlcicpXHJcbiAgICAgIFxyXG4gICAgICAvLyBMw6ogbyBhcnF1aXZvIC5wcmogcGFyYSBvYnRlciBvIHNpc3RlbWEgZGUgY29vcmRlbmFkYXNcclxuICAgICAgbGV0IHNwYXRpYWxSZWZlcmVuY2U6IGFueSA9IHsgd2tpZDogNDY3NCB9IC8vIFBhZHLDo28gU0lSR0FTIDIwMDBcclxuICAgICAgbGV0IG9yaWdpbmFsV2tpZDogbnVtYmVyIHwgbnVsbCA9IG51bGxcclxuICAgICAgaWYgKHByakZpbGUpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3QgcHJqRmlsZU9iaiA9IHppcC5maWxlKHByakZpbGUpXHJcbiAgICAgICAgICBpZiAoIXByakZpbGVPYmopIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOw6NvIGZvaSBwb3Nzw612ZWwgbGVyIG8gYXJxdWl2byAucHJqJylcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNvbnN0IHByalRleHQgPSBhd2FpdCBwcmpGaWxlT2JqLmFzeW5jKCdzdHJpbmcnKVxyXG4gICAgICAgICAgY29uc29sZS5sb2coJ1BSSiBlbmNvbnRyYWRvOicsIHByalRleHQpXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC8vIEV4dHJhaSBXS0lEIGRvIFBSSiAoc3Vwb3J0YSB2w6FyaW9zIHNpc3RlbWFzKVxyXG4gICAgICAgICAgLy8gU0lSR0FTIDIwMDAgLyA0Njc0XHJcbiAgICAgICAgICBpZiAocHJqVGV4dC5pbmNsdWRlcygnNDY3NCcpIHx8IHByalRleHQuaW5jbHVkZXMoJ1NJUkdBUyAyMDAwJykpIHtcclxuICAgICAgICAgICAgc3BhdGlhbFJlZmVyZW5jZSA9IHsgd2tpZDogNDY3NCB9XHJcbiAgICAgICAgICAgIG9yaWdpbmFsV2tpZCA9IDQ2NzRcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC8vIFdHUzg0IC8gNDMyNlxyXG4gICAgICAgICAgZWxzZSBpZiAocHJqVGV4dC5pbmNsdWRlcygnNDMyNicpIHx8IHByalRleHQuaW5jbHVkZXMoJ1dHUyA4NCcpKSB7XHJcbiAgICAgICAgICAgIHNwYXRpYWxSZWZlcmVuY2UgPSB7IHdraWQ6IDQzMjYgfVxyXG4gICAgICAgICAgICBvcmlnaW5hbFdraWQgPSA0MzI2XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAvLyBXZWIgTWVyY2F0b3IgLyAzODU3XHJcbiAgICAgICAgICBlbHNlIGlmIChwcmpUZXh0LmluY2x1ZGVzKCczODU3JykgfHwgcHJqVGV4dC5pbmNsdWRlcygnV2ViIE1lcmNhdG9yJykpIHtcclxuICAgICAgICAgICAgc3BhdGlhbFJlZmVyZW5jZSA9IHsgd2tpZDogMzg1NyB9XHJcbiAgICAgICAgICAgIG9yaWdpbmFsV2tpZCA9IDM4NTdcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC8vIFVUTSAoZGl2ZXJzb3MgZnVzb3MpXHJcbiAgICAgICAgICBlbHNlIGlmIChwcmpUZXh0LmluY2x1ZGVzKCdVVE0nKSB8fCBwcmpUZXh0LmluY2x1ZGVzKCdVbml2ZXJzYWwgVHJhbnN2ZXJzZSBNZXJjYXRvcicpKSB7XHJcbiAgICAgICAgICAgIC8vIFRlbnRhIGV4dHJhaXIgbyBXS0lEIGRvIFVUTSBkbyBQUkpcclxuICAgICAgICAgICAgY29uc3QgdXRtTWF0Y2ggPSBwcmpUZXh0Lm1hdGNoKC9BVVRIT1JJVFlcXFtcIkVQU0dcIixcIihcXGQrKVwiXFxdLylcclxuICAgICAgICAgICAgaWYgKHV0bU1hdGNoKSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgdXRtV2tpZCA9IHBhcnNlSW50KHV0bU1hdGNoWzFdKVxyXG4gICAgICAgICAgICAgIHNwYXRpYWxSZWZlcmVuY2UgPSB7IHdraWQ6IHV0bVdraWQgfVxyXG4gICAgICAgICAgICAgIG9yaWdpbmFsV2tpZCA9IHV0bVdraWRcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgV0tJRCBVVE0gZGV0ZWN0YWRvOiAke3V0bVdraWR9YClcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAvLyBVVE0gY29tdW0gbm8gQnJhc2lsOiAzMTk4MyAoVVRNIFpvbmUgMjNTKSBvdSAzMTk4NCAoVVRNIFpvbmUgMjRTKVxyXG4gICAgICAgICAgICAgIGNvbnNvbGUud2FybignVVRNIGRldGVjdGFkbyBtYXMgV0tJRCBuw6NvIGVuY29udHJhZG8uIEFzc3VtaW5kbyBVVE0gWm9uZSAyM1MgKDMxOTgzKScpXHJcbiAgICAgICAgICAgICAgc3BhdGlhbFJlZmVyZW5jZSA9IHsgd2tpZDogMzE5ODMgfVxyXG4gICAgICAgICAgICAgIG9yaWdpbmFsV2tpZCA9IDMxOTgzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC8vIFRlbnRhIGV4dHJhaXIgV0tJRCBkaXJldGFtZW50ZSBkbyBQUkpcclxuICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCB3a2lkTWF0Y2ggPSBwcmpUZXh0Lm1hdGNoKC9BVVRIT1JJVFlcXFtcIkVQU0dcIixcIihcXGQrKVwiXFxdfFdLSURcXHMqPVxccyooXFxkKyl8RVBTRzooXFxkKykvaSlcclxuICAgICAgICAgICAgaWYgKHdraWRNYXRjaCkge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGV4dHJhY3RlZFdraWQgPSBwYXJzZUludCh3a2lkTWF0Y2hbMV0gfHwgd2tpZE1hdGNoWzJdIHx8IHdraWRNYXRjaFszXSlcclxuICAgICAgICAgICAgICBzcGF0aWFsUmVmZXJlbmNlID0geyB3a2lkOiBleHRyYWN0ZWRXa2lkIH1cclxuICAgICAgICAgICAgICBvcmlnaW5hbFdraWQgPSBleHRyYWN0ZWRXa2lkXHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coYFdLSUQgZXh0cmHDrWRvIGRvIFBSSjogJHtleHRyYWN0ZWRXa2lkfWApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgY29uc29sZS5sb2coJ1NwYXRpYWxSZWZlcmVuY2UgZGV0ZWN0YWRvOicsIHNwYXRpYWxSZWZlcmVuY2UpXHJcbiAgICAgICAgfSBjYXRjaCAocHJqRXJyb3IpIHtcclxuICAgICAgICAgIGNvbnNvbGUud2FybignRXJybyBhbyBsZXIgUFJKLCB1c2FuZG8gcGFkcsOjbyBTSVJHQVMgMjAwMCAoNDY3NCk6JywgcHJqRXJyb3IpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvLyBXS0lEIGFsdm8gcGFyYSBlbnZpbyAoU0lSR0FTIDIwMDApXHJcbiAgICAgIGNvbnN0IHRhcmdldFdraWQgPSA0Njc0XHJcbiAgICAgIFxyXG4gICAgICAvLyBGYXogcGFyc2luZyBiw6FzaWNvIGRvIHNoYXBlZmlsZSAoYXBlbmFzIHBhcmEgcG9sw61nb25vcyBzaW1wbGVzKVxyXG4gICAgICAvLyBOT1RBOiBFc3RlIMOpIHVtIHBhcnNlciBzaW1wbGlmaWNhZG8gLSBwb2RlIG7Do28gZnVuY2lvbmFyIHBhcmEgdG9kb3Mgb3Mgc2hhcGVmaWxlc1xyXG4gICAgICBjb25zdCB2aWV3ID0gbmV3IERhdGFWaWV3KHNocERhdGEpXHJcbiAgICAgIGNvbnN0IGZpbGVDb2RlID0gdmlldy5nZXRJbnQzMigwLCBmYWxzZSkgLy8gQmlnIGVuZGlhblxyXG4gICAgICBcclxuICAgICAgaWYgKGZpbGVDb2RlICE9PSA5OTk0KSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBcnF1aXZvIC5zaHAgaW52w6FsaWRvJylcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLy8gTMOqIG8gaGVhZGVyXHJcbiAgICAgIGNvbnN0IGZpbGVMZW5ndGggPSB2aWV3LmdldEludDMyKDI0LCBmYWxzZSkgKiAyIC8vIEVtIGJ5dGVzXHJcbiAgICAgIGNvbnN0IHZlcnNpb24gPSB2aWV3LmdldEludDMyKDI4LCB0cnVlKSAvLyBMaXR0bGUgZW5kaWFuXHJcbiAgICAgIGNvbnN0IHNoYXBlVHlwZSA9IHZpZXcuZ2V0SW50MzIoMzIsIHRydWUpIC8vIExpdHRsZSBlbmRpYW5cclxuICAgICAgXHJcbiAgICAgIGlmIChzaGFwZVR5cGUgIT09IDUpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRpcG8gZGUgZ2VvbWV0cmlhIG7Do28gc3Vwb3J0YWRvOiAke3NoYXBlVHlwZX0uIEFwZW5hcyBwb2zDrWdvbm9zICh0aXBvIDUpIHPDo28gc3Vwb3J0YWRvcy5gKVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvLyBMw6ogbyBib3VuZGluZyBib3hcclxuICAgICAgY29uc3QgeE1pbiA9IHZpZXcuZ2V0RmxvYXQ2NCgzNiwgdHJ1ZSlcclxuICAgICAgY29uc3QgeU1pbiA9IHZpZXcuZ2V0RmxvYXQ2NCg0NCwgdHJ1ZSlcclxuICAgICAgY29uc3QgeE1heCA9IHZpZXcuZ2V0RmxvYXQ2NCg1MiwgdHJ1ZSlcclxuICAgICAgY29uc3QgeU1heCA9IHZpZXcuZ2V0RmxvYXQ2NCg2MCwgdHJ1ZSlcclxuICAgICAgXHJcbiAgICAgIGNvbnNvbGUubG9nKCdCb3VuZGluZyBib3g6JywgeyB4TWluLCB5TWluLCB4TWF4LCB5TWF4IH0pXHJcbiAgICAgIFxyXG4gICAgICAvLyBMw6ogYXMgZmVhdHVyZXMgKHNpbXBsaWZpY2FkbyAtIGFwZW5hcyBwcmltZWlyYSBmZWF0dXJlKVxyXG4gICAgICBsZXQgb2Zmc2V0ID0gMTAwIC8vIEhlYWRlciB0ZW0gMTAwIGJ5dGVzXHJcbiAgICAgIGNvbnN0IGZlYXR1cmVzOiBhbnlbXSA9IFtdXHJcbiAgICAgIFxyXG4gICAgICB3aGlsZSAob2Zmc2V0IDwgZmlsZUxlbmd0aCAtIDgpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgLy8gUmVjb3JkIGhlYWRlclxyXG4gICAgICAgICAgY29uc3QgcmVjb3JkTnVtYmVyID0gdmlldy5nZXRJbnQzMihvZmZzZXQsIGZhbHNlKVxyXG4gICAgICAgICAgY29uc3QgY29udGVudExlbmd0aCA9IHZpZXcuZ2V0SW50MzIob2Zmc2V0ICsgNCwgZmFsc2UpICogMlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBpZiAocmVjb3JkTnVtYmVyID09PSAwIHx8IGNvbnRlbnRMZW5ndGggPT09IDApIGJyZWFrXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIG9mZnNldCArPSA4XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC8vIFNoYXBlIHR5cGVcclxuICAgICAgICAgIGNvbnN0IHJlY29yZFNoYXBlVHlwZSA9IHZpZXcuZ2V0SW50MzIob2Zmc2V0LCB0cnVlKVxyXG4gICAgICAgICAgaWYgKHJlY29yZFNoYXBlVHlwZSAhPT0gNSkge1xyXG4gICAgICAgICAgICBvZmZzZXQgKz0gY29udGVudExlbmd0aFxyXG4gICAgICAgICAgICBjb250aW51ZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBvZmZzZXQgKz0gNFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAvLyBCb3VuZGluZyBib3ggZG8gcmVjb3JkXHJcbiAgICAgICAgICBjb25zdCByZWNYTWluID0gdmlldy5nZXRGbG9hdDY0KG9mZnNldCwgdHJ1ZSlcclxuICAgICAgICAgIGNvbnN0IHJlY1lNaW4gPSB2aWV3LmdldEZsb2F0NjQob2Zmc2V0ICsgOCwgdHJ1ZSlcclxuICAgICAgICAgIGNvbnN0IHJlY1hNYXggPSB2aWV3LmdldEZsb2F0NjQob2Zmc2V0ICsgMTYsIHRydWUpXHJcbiAgICAgICAgICBjb25zdCByZWNZTWF4ID0gdmlldy5nZXRGbG9hdDY0KG9mZnNldCArIDI0LCB0cnVlKVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBvZmZzZXQgKz0gMzJcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLy8gTsO6bWVybyBkZSBwYXJ0ZXNcclxuICAgICAgICAgIGNvbnN0IG51bVBhcnRzID0gdmlldy5nZXRJbnQzMihvZmZzZXQsIHRydWUpXHJcbiAgICAgICAgICBvZmZzZXQgKz0gNFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAvLyBOw7ptZXJvIGRlIHBvbnRvc1xyXG4gICAgICAgICAgY29uc3QgbnVtUG9pbnRzID0gdmlldy5nZXRJbnQzMihvZmZzZXQsIHRydWUpXHJcbiAgICAgICAgICBvZmZzZXQgKz0gNFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBpZiAobnVtUG9pbnRzID09PSAwKSB7XHJcbiAgICAgICAgICAgIG9mZnNldCArPSBjb250ZW50TGVuZ3RoIC0gNDRcclxuICAgICAgICAgICAgY29udGludWVcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLy8gTMOqIG9zIMOtbmRpY2VzIGRhcyBwYXJ0ZXNcclxuICAgICAgICAgIGNvbnN0IHBhcnRJbmRpY2VzOiBudW1iZXJbXSA9IFtdXHJcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVBhcnRzOyBpKyspIHtcclxuICAgICAgICAgICAgcGFydEluZGljZXMucHVzaCh2aWV3LmdldEludDMyKG9mZnNldCwgdHJ1ZSkpXHJcbiAgICAgICAgICAgIG9mZnNldCArPSA0XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC8vIEzDqiBvcyBwb250b3NcclxuICAgICAgICAgIGNvbnN0IHJpbmdzOiBudW1iZXJbXVtdW10gPSBbXVxyXG4gICAgICAgICAgY29uc29sZS5sb2coYD09PSBDT09SREVOQURBUyBETyBTSEFQRUZJTEUgPT09YClcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGBOw7ptZXJvIGRlIHBhcnRlczogJHtudW1QYXJ0c31gKVxyXG4gICAgICAgICAgY29uc29sZS5sb2coYE7Dum1lcm8gdG90YWwgZGUgcG9udG9zOiAke251bVBvaW50c31gKVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBmb3IgKGxldCBwYXJ0SW5kZXggPSAwOyBwYXJ0SW5kZXggPCBudW1QYXJ0czsgcGFydEluZGV4KyspIHtcclxuICAgICAgICAgICAgY29uc3Qgc3RhcnRJbmRleCA9IHBhcnRJbmRpY2VzW3BhcnRJbmRleF1cclxuICAgICAgICAgICAgY29uc3QgZW5kSW5kZXggPSBwYXJ0SW5kZXggPCBudW1QYXJ0cyAtIDEgPyBwYXJ0SW5kaWNlc1twYXJ0SW5kZXggKyAxXSA6IG51bVBvaW50c1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgcmluZzogbnVtYmVyW11bXSA9IFtdXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGAtLS0gUmluZyAke3BhcnRJbmRleCArIDF9ICjDrW5kaWNlcyAke3N0YXJ0SW5kZXh9IGEgJHtlbmRJbmRleCAtIDF9KSAtLS1gKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0SW5kZXg7IGkgPCBlbmRJbmRleDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgeCA9IHZpZXcuZ2V0RmxvYXQ2NChvZmZzZXQsIHRydWUpXHJcbiAgICAgICAgICAgICAgY29uc3QgeSA9IHZpZXcuZ2V0RmxvYXQ2NChvZmZzZXQgKyA4LCB0cnVlKVxyXG4gICAgICAgICAgICAgIHJpbmcucHVzaChbeCwgeV0pXHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coYCAgUG9udG8gJHtpIC0gc3RhcnRJbmRleCArIDF9OiBbJHt4LnRvRml4ZWQoNil9LCAke3kudG9GaXhlZCg2KX1dYClcclxuICAgICAgICAgICAgICBvZmZzZXQgKz0gMTZcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gRmVjaGEgbyByaW5nIHNlIG5lY2Vzc8OhcmlvXHJcbiAgICAgICAgICAgIGlmIChyaW5nLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICBjb25zdCBmaXJzdCA9IHJpbmdbMF1cclxuICAgICAgICAgICAgICBjb25zdCBsYXN0ID0gcmluZ1tyaW5nLmxlbmd0aCAtIDFdXHJcbiAgICAgICAgICAgICAgY29uc3QgaXNDbG9zZWQgPSBmaXJzdFswXSA9PT0gbGFzdFswXSAmJiBmaXJzdFsxXSA9PT0gbGFzdFsxXVxyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAgIFJpbmcgJHtwYXJ0SW5kZXggKyAxfSBlc3TDoSBmZWNoYWRvOiAke2lzQ2xvc2VkfWApXHJcbiAgICAgICAgICAgICAgaWYgKCFpc0Nsb3NlZCkge1xyXG4gICAgICAgICAgICAgICAgcmluZy5wdXNoKFtmaXJzdFswXSwgZmlyc3RbMV1dKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCAgUmluZyAke3BhcnRJbmRleCArIDF9IGZvaSBmZWNoYWRvIGFkaWNpb25hbmRvIHBvbnRvOiBbJHtmaXJzdFswXS50b0ZpeGVkKDYpfSwgJHtmaXJzdFsxXS50b0ZpeGVkKDYpfV1gKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgICBUb3RhbCBkZSBwb250b3Mgbm8gcmluZyAke3BhcnRJbmRleCArIDF9OiAke3JpbmcubGVuZ3RofWApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJpbmdzLnB1c2gocmluZylcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgY29uc29sZS5sb2coYC0tLSBSZXN1bW8gZGFzIENvb3JkZW5hZGFzIC0tLWApXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhgVG90YWwgZGUgcmluZ3M6ICR7cmluZ3MubGVuZ3RofWApXHJcbiAgICAgICAgICByaW5ncy5mb3JFYWNoKChyaW5nLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgUmluZyAke2luZGV4ICsgMX06ICR7cmluZy5sZW5ndGh9IHBvbnRvc2ApXHJcbiAgICAgICAgICAgIGlmIChyaW5nLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgICBQcmltZWlybyBwb250bzogWyR7cmluZ1swXVswXS50b0ZpeGVkKDYpfSwgJHtyaW5nWzBdWzFdLnRvRml4ZWQoNil9XWApXHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coYCAgw5psdGltbyBwb250bzogWyR7cmluZ1tyaW5nLmxlbmd0aCAtIDFdWzBdLnRvRml4ZWQoNil9LCAke3JpbmdbcmluZy5sZW5ndGggLSAxXVsxXS50b0ZpeGVkKDYpfV1gKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAvLyBDcmlhIGEgZ2VvbWV0cmlhIHVzYW5kbyBQb2x5Z29uIGRvIEFyY0dJUyBjb20gYSBwcm9qZcOnw6NvIG9yaWdpbmFsXHJcbiAgICAgICAgICBsZXQgcG9seWdvbkdlb21ldHJ5ID0gbmV3IFBvbHlnb24oe1xyXG4gICAgICAgICAgICByaW5nczogcmluZ3MsXHJcbiAgICAgICAgICAgIHNwYXRpYWxSZWZlcmVuY2U6IG5ldyBTcGF0aWFsUmVmZXJlbmNlKHNwYXRpYWxSZWZlcmVuY2UpXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhgPT09IEdFT01FVFJJQSBDUklBREEgPT09YClcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGBUaXBvOiBQb2x5Z29uYClcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGBTcGF0aWFsUmVmZXJlbmNlIG9yaWdpbmFsOiBXS0lEICR7c3BhdGlhbFJlZmVyZW5jZS53a2lkfWApXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhgTsO6bWVybyBkZSByaW5nczogJHtyaW5ncy5sZW5ndGh9YClcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLy8gT2J0w6ltIG8gZXh0ZW50IGRhIGdlb21ldHJpYSBvcmlnaW5hbFxyXG4gICAgICAgICAgY29uc3Qgb3JpZ2luYWxFeHRlbnQgPSBwb2x5Z29uR2VvbWV0cnkuZXh0ZW50XHJcbiAgICAgICAgICBpZiAob3JpZ2luYWxFeHRlbnQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYEV4dGVudCBvcmlnaW5hbDpgKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgICBYTWluOiAke29yaWdpbmFsRXh0ZW50LnhtaW4/LnRvRml4ZWQoNil9YClcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYCAgWU1pbjogJHtvcmlnaW5hbEV4dGVudC55bWluPy50b0ZpeGVkKDYpfWApXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGAgIFhNYXg6ICR7b3JpZ2luYWxFeHRlbnQueG1heD8udG9GaXhlZCg2KX1gKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgICBZTWF4OiAke29yaWdpbmFsRXh0ZW50LnltYXg/LnRvRml4ZWQoNil9YClcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLy8gQ29udmVydGUgcGFyYSBTSVJHQVMgMjAwMCAoNDY3NCkgc2UgbmVjZXNzw6FyaW9cclxuICAgICAgICAgIGlmIChzcGF0aWFsUmVmZXJlbmNlLndraWQgIT09IHRhcmdldFdraWQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYD09PSBDT05WRVJURU5ETyBQUk9KRcOHw4NPID09PWApXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBEZTogV0tJRCAke3NwYXRpYWxSZWZlcmVuY2Uud2tpZH1gKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgUGFyYTogV0tJRCAke3RhcmdldFdraWR9IChTSVJHQVMgMjAwMClgKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAvLyBVc2EgZ2VvbWV0cnlFbmdpbmUgcGFyYSBwcm9qZXRhciBhIGdlb21ldHJpYVxyXG4gICAgICAgICAgICAgIGNvbnN0IHRhcmdldFNwYXRpYWxSZWYgPSBuZXcgU3BhdGlhbFJlZmVyZW5jZSh7IHdraWQ6IHRhcmdldFdraWQgfSlcclxuICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0ZWRHZW9tZXRyeSA9IGdlb21ldHJ5RW5naW5lLnByb2plY3QocG9seWdvbkdlb21ldHJ5LCB0YXJnZXRTcGF0aWFsUmVmKSBhcyBfX2VzcmkuUG9seWdvblxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIGlmIChwcm9qZWN0ZWRHZW9tZXRyeSkge1xyXG4gICAgICAgICAgICAgICAgcG9seWdvbkdlb21ldHJ5ID0gcHJvamVjdGVkR2VvbWV0cnlcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGDinJMgR2VvbWV0cmlhIGNvbnZlcnRpZGEgY29tIHN1Y2Vzc28gcGFyYSBXS0lEICR7dGFyZ2V0V2tpZH1gKVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBNb3N0cmEgbyBleHRlbnQgYXDDs3MgY29udmVyc8Ojb1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdGVkRXh0ZW50ID0gcG9seWdvbkdlb21ldHJ5LmV4dGVudFxyXG4gICAgICAgICAgICAgICAgaWYgKHByb2plY3RlZEV4dGVudCkge1xyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgRXh0ZW50IGFww7NzIGNvbnZlcnPDo286YClcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCAgWE1pbjogJHtwcm9qZWN0ZWRFeHRlbnQueG1pbj8udG9GaXhlZCg2KX1gKVxyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgICBZTWluOiAke3Byb2plY3RlZEV4dGVudC55bWluPy50b0ZpeGVkKDYpfWApXHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAgIFhNYXg6ICR7cHJvamVjdGVkRXh0ZW50LnhtYXg/LnRvRml4ZWQoNil9YClcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCAgWU1heDogJHtwcm9qZWN0ZWRFeHRlbnQueW1heD8udG9GaXhlZCg2KX1gKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ+KaoCBDb252ZXJzw6NvIHJldG9ybm91IG51bGwuIFVzYW5kbyBnZW9tZXRyaWEgb3JpZ2luYWwuJylcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKHByb2plY3RFcnJvcikge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm8gYW8gY29udmVydGVyIHByb2plw6fDo286JywgcHJvamVjdEVycm9yKVxyXG4gICAgICAgICAgICAgIGNvbnNvbGUud2Fybign4pqgIFVzYW5kbyBnZW9tZXRyaWEgbmEgcHJvamXDp8OjbyBvcmlnaW5hbC4gQSBHUCB0b29sIHBvZGUgbsOjbyBhY2VpdGFyLicpXHJcbiAgICAgICAgICAgICAgLy8gQ29udGludWEgY29tIGEgZ2VvbWV0cmlhIG9yaWdpbmFsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGDinJMgR2VvbWV0cmlhIGrDoSBlc3TDoSBlbSBTSVJHQVMgMjAwMCAoNDY3NCkuIE7Do28gw6kgbmVjZXNzw6FyaW8gY29udmVydGVyLmApXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC8vIENyaWEgYSBmZWF0dXJlIGNvbW8gR3JhcGhpY1xyXG4gICAgICAgICAgY29uc3QgZ3JhcGhpYyA9IG5ldyBHcmFwaGljKHtcclxuICAgICAgICAgICAgZ2VvbWV0cnk6IHBvbHlnb25HZW9tZXRyeSxcclxuICAgICAgICAgICAgYXR0cmlidXRlczoge1xyXG4gICAgICAgICAgICAgIE9CSkVDVElEOiBmZWF0dXJlcy5sZW5ndGggKyAxXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGZlYXR1cmVzLnB1c2goZ3JhcGhpYylcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGDinJMgRmVhdHVyZSAke2ZlYXR1cmVzLmxlbmd0aH0gY3JpYWRhIGNvbSBzdWNlc3NvYClcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLy8gU2FsdmEgYSBnZW9tZXRyaWEgbm8gZXN0YWRvIHBhcmEgdXNvIHBvc3RlcmlvciBuYSBhbsOhbGlzZVxyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNoYXBlZmlsZUdlb21ldHJ5OiBwb2x5Z29uR2VvbWV0cnkgfSlcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCfinJMgR2VvbWV0cmlhIGRvIHNoYXBlZmlsZSBzYWx2YSBubyBlc3RhZG8gKFdLSUQ6JywgcG9seWdvbkdlb21ldHJ5LnNwYXRpYWxSZWZlcmVuY2U/LndraWQgfHwgJ2Rlc2NvbmhlY2lkbycsICcpJylcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLy8gUGFyYSBzaW1wbGlmaWNhciwgdmFtb3MgcGVnYXIgYXBlbmFzIGEgcHJpbWVpcmEgZmVhdHVyZVxyXG4gICAgICAgICAgYnJlYWtcclxuICAgICAgICAgIFxyXG4gICAgICAgIH0gY2F0Y2ggKHBhcnNlRXJyb3IpIHtcclxuICAgICAgICAgIGNvbnNvbGUud2FybignRXJybyBhbyBmYXplciBwYXJzZSBkZSB1bWEgZmVhdHVyZTonLCBwYXJzZUVycm9yKVxyXG4gICAgICAgICAgYnJlYWtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGlmIChmZWF0dXJlcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05lbmh1bWEgZmVhdHVyZSB2w6FsaWRhIGVuY29udHJhZGEgbm8gc2hhcGVmaWxlJylcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgY29uc29sZS5sb2coYOKckyAke2ZlYXR1cmVzLmxlbmd0aH0gZmVhdHVyZShzKSBleHRyYcOtZGEocykgZG8gc2hhcGVmaWxlYClcclxuICAgICAgXHJcbiAgICAgIC8vIENyaWEgYSBGZWF0dXJlTGF5ZXIgY29tIHNvdXJjZSBzZW5kbyB1bSBhcnJheSBkZSBHcmFwaGljc1xyXG4gICAgICBjb25zdCBmZWF0dXJlTGF5ZXIgPSBuZXcgdGhpcy5GZWF0dXJlTGF5ZXIoe1xyXG4gICAgICAgIHNvdXJjZTogZmVhdHVyZXMsXHJcbiAgICAgICAgdGl0bGU6IGDDgXJlYSBQcm9wb3N0YSAtICR7emlwRmlsZS5uYW1lLnJlcGxhY2UoJy56aXAnLCAnJyl9YCxcclxuICAgICAgICBmaWVsZHM6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ09CSkVDVElEJyxcclxuICAgICAgICAgICAgdHlwZTogJ29pZCcsXHJcbiAgICAgICAgICAgIGFsaWFzOiAnT0JKRUNUSUQnXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBvYmplY3RJZEZpZWxkOiAnT0JKRUNUSUQnLFxyXG4gICAgICAgIGdlb21ldHJ5VHlwZTogJ3BvbHlnb24nLFxyXG4gICAgICAgIHNwYXRpYWxSZWZlcmVuY2U6IG5ldyBTcGF0aWFsUmVmZXJlbmNlKHNwYXRpYWxSZWZlcmVuY2UpLFxyXG4gICAgICAgIG9wYWNpdHk6IDEuMCwgLy8gT3BhY2lkYWRlIHRvdGFsIHBhcmEgcmVzcGVpdGFyIGEgdHJhbnNwYXLDqm5jaWEgZG8gc8OtbWJvbG9cclxuICAgICAgICByZW5kZXJlcjoge1xyXG4gICAgICAgICAgdHlwZTogJ3NpbXBsZScsXHJcbiAgICAgICAgICBzeW1ib2w6IHtcclxuICAgICAgICAgICAgdHlwZTogJ3NpbXBsZS1maWxsJyxcclxuICAgICAgICAgICAgY29sb3I6IFsyNTUsIDI1NSwgMCwgMC41XSwgLy8gQW1hcmVsbyBjb20gNTAlIGRlIHRyYW5zcGFyw6puY2lhIChSR0JBKVxyXG4gICAgICAgICAgICBvdXRsaW5lOiB7XHJcbiAgICAgICAgICAgICAgY29sb3I6IFsyNTUsIDI1NSwgMCwgMV0sIC8vIEFtYXJlbG8gc8OzbGlkbyBwYXJhIGJvcmRhXHJcbiAgICAgICAgICAgICAgd2lkdGg6IDJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgXHJcbiAgICAgIC8vIEFkaWNpb25hIGEgY2FtYWRhIGFvIG1hcGFcclxuICAgICAgdGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3Lm1hcC5hZGQoZmVhdHVyZUxheWVyKVxyXG4gICAgICBjb25zb2xlLmxvZygn4pyTIENhbWFkYSBhZGljaW9uYWRhIGFvIG1hcGEgbG9jYWxtZW50ZScpXHJcbiAgICAgIFxyXG4gICAgICAvLyBGdW7Dp8OjbyBhdXhpbGlhciBwYXJhIGZhemVyIHpvb20gbmEgZ2VvbWV0cmlhXHJcbiAgICAgIGNvbnN0IHpvb21Ub0dlb21ldHJ5ID0gKGdlb21ldHJ5OiBfX2VzcmkuUG9seWdvbikgPT4ge1xyXG4gICAgICAgIGlmICghZ2VvbWV0cnkgfHwgIXRoaXMuc3RhdGUuamltdU1hcFZpZXc/LnZpZXcpIHtcclxuICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3QgZXh0ZW50ID0gZ2VvbWV0cnkuZXh0ZW50XHJcbiAgICAgICAgICBpZiAoIWV4dGVudCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ0V4dGVudCBuw6NvIGRpc3BvbsOtdmVsIHBhcmEgYSBnZW9tZXRyaWEnKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLy8gVmVyaWZpY2Egc2UgbyBleHRlbnQgw6kgdsOhbGlkb1xyXG4gICAgICAgICAgaWYgKGV4dGVudC54bWluID09PSBudWxsIHx8IGV4dGVudC54bWF4ID09PSBudWxsIHx8IGV4dGVudC55bWluID09PSBudWxsIHx8IGV4dGVudC55bWF4ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignRXh0ZW50IHBvc3N1aSB2YWxvcmVzIGludsOhbGlkb3MnKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLy8gVmVyaWZpY2Egc2UgbsOjbyDDqSBpbmZpbml0b1xyXG4gICAgICAgICAgaWYgKCFpc0Zpbml0ZShleHRlbnQueG1pbikgfHwgIWlzRmluaXRlKGV4dGVudC54bWF4KSB8fCAhaXNGaW5pdGUoZXh0ZW50LnltaW4pIHx8ICFpc0Zpbml0ZShleHRlbnQueW1heCkpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKCdFeHRlbnQgcG9zc3VpIHZhbG9yZXMgaW5maW5pdG9zJylcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC8vIENyaWEgdW0gbm92byBleHRlbnQgZXhwYW5kaWRvXHJcbiAgICAgICAgICBjb25zdCBleHBhbmRlZEV4dGVudCA9IHtcclxuICAgICAgICAgICAgeG1pbjogZXh0ZW50LnhtaW4gLSAoZXh0ZW50LnhtYXggLSBleHRlbnQueG1pbikgKiAwLjEsXHJcbiAgICAgICAgICAgIHltaW46IGV4dGVudC55bWluIC0gKGV4dGVudC55bWF4IC0gZXh0ZW50LnltaW4pICogMC4xLFxyXG4gICAgICAgICAgICB4bWF4OiBleHRlbnQueG1heCArIChleHRlbnQueG1heCAtIGV4dGVudC54bWluKSAqIDAuMSxcclxuICAgICAgICAgICAgeW1heDogZXh0ZW50LnltYXggKyAoZXh0ZW50LnltYXggLSBleHRlbnQueW1pbikgKiAwLjEsXHJcbiAgICAgICAgICAgIHNwYXRpYWxSZWZlcmVuY2U6IGV4dGVudC5zcGF0aWFsUmVmZXJlbmNlXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldy5nb1RvKGV4cGFuZGVkRXh0ZW50KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ+KckyBab29tIGFwbGljYWRvIMOgIGNhbWFkYScpXHJcbiAgICAgICAgICB9KS5jYXRjaCgoem9vbUVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignRXJybyBhbyBmYXplciB6b29tOicsIHpvb21FcnJvcilcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnNvbGUud2FybignRXJybyBhbyBwcm9jZXNzYXIgZXh0ZW50OicsIGVycm9yKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLy8gQWd1YXJkYSBhIGNhbWFkYSBjYXJyZWdhciBlIGZheiB6b29tIHBhcmEgZWxhXHJcbiAgICAgIGZlYXR1cmVMYXllci53aGVuKCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnQ2FtYWRhIGNhcnJlZ2FkYSwgZmF6ZW5kbyB6b29tLi4uJylcclxuICAgICAgICBpZiAoZmVhdHVyZXMubGVuZ3RoID4gMCAmJiBmZWF0dXJlc1swXS5nZW9tZXRyeSkge1xyXG4gICAgICAgICAgY29uc3QgZ2VvbWV0cnkgPSBmZWF0dXJlc1swXS5nZW9tZXRyeSBhcyBfX2VzcmkuUG9seWdvblxyXG4gICAgICAgICAgem9vbVRvR2VvbWV0cnkoZ2VvbWV0cnkpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KS5jYXRjaCgobGF5ZXJFcnJvcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm8gYW8gY2FycmVnYXIgY2FtYWRhOicsIGxheWVyRXJyb3IpXHJcbiAgICAgIH0pXHJcbiAgICAgIFxyXG4gICAgICAvLyBUYW1iw6ltIGVzY3V0YSBvIGV2ZW50byBsYXllcnZpZXctY3JlYXRlIHBhcmEgZ2FyYW50aXIgcXVlIGEgY2FtYWRhIGZvaSByZW5kZXJpemFkYVxyXG4gICAgICBmZWF0dXJlTGF5ZXIub24oJ2xheWVydmlldy1jcmVhdGUnLCAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnTGF5ZXJWaWV3IGNyaWFkYTonLCBldmVudClcclxuICAgICAgICBpZiAoZmVhdHVyZXMubGVuZ3RoID4gMCAmJiBmZWF0dXJlc1swXS5nZW9tZXRyeSkge1xyXG4gICAgICAgICAgY29uc3QgZ2VvbWV0cnkgPSBmZWF0dXJlc1swXS5nZW9tZXRyeSBhcyBfX2VzcmkuUG9seWdvblxyXG4gICAgICAgICAgem9vbVRvR2VvbWV0cnkoZ2VvbWV0cnkpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICBcclxuICAgICAgLy8gU2FsdmEgYSByZWZlcsOqbmNpYSBkYSBjYW1hZGEgbm8gZXN0YWRvXHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaGFwZWZpbGVMYXllcjogZmVhdHVyZUxheWVyIH0pXHJcbiAgICAgIFxyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvIGFvIGxlciBzaGFwZWZpbGUgZSBhZGljaW9uYXIgY2FtYWRhOicsIGVycm9yKVxyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm8gYW8gcHJvY2Vzc2FyIHNoYXBlZmlsZTogJHtlcnJvci5tZXNzYWdlfWApXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBJbmljaWEgbyBtb2RvIGRlIGRlc2VuaG9cclxuICBoYW5kbGVTdGFydERyYXdpbmcgPSAoKSA9PiB7XHJcbiAgICBpZiAoIXRoaXMuc3RhdGUuc2tldGNoVmlld01vZGVsKSB7XHJcbiAgICAgIGFsZXJ0KCdBZ3VhcmRlIG8gbWFwYSBjYXJyZWdhciBjb21wbGV0YW1lbnRlLicpXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGRyYXdpbmdNb2RlOiB0cnVlIH0pXHJcbiAgICB0aGlzLnN0YXRlLnNrZXRjaFZpZXdNb2RlbC5jcmVhdGUoJ3BvbHlnb24nKVxyXG4gIH1cclxuXHJcbiAgLy8gTGltcGEgYSBhbsOhbGlzZSBlIHJlc2V0YSBvcyBjYW1wb3NcclxuICBoYW5kbGVDbGVhckFuYWx5c2lzID0gKCkgPT4ge1xyXG4gICAgLy8gUmVtb3ZlIG9zIGdyw6FmaWNvcyBkZXNlbmhhZG9zIG5vIG1hcGFcclxuICAgIGlmICh0aGlzLnN0YXRlLmdyYXBoaWNzTGF5ZXIpIHtcclxuICAgICAgdGhpcy5zdGF0ZS5ncmFwaGljc0xheWVyLnJlbW92ZUFsbCgpXHJcbiAgICAgIGNvbnNvbGUubG9nKCdHcsOhZmljb3MgcmVtb3ZpZG9zIGRvIG1hcGEnKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIENhbmNlbGEgcXVhbHF1ZXIgZGVzZW5obyBlbSBhbmRhbWVudG8gZSBsaW1wYSBvIHNrZXRjaFZpZXdNb2RlbFxyXG4gICAgaWYgKHRoaXMuc3RhdGUuc2tldGNoVmlld01vZGVsKSB7XHJcbiAgICAgIC8vIENhbmNlbGEgc2UgaG91dmVyIHVtIGRlc2VuaG8gZW0gYW5kYW1lbnRvXHJcbiAgICAgIGlmICh0aGlzLnN0YXRlLnNrZXRjaFZpZXdNb2RlbC5zdGF0ZSAhPT0gJ3JlYWR5Jykge1xyXG4gICAgICAgIHRoaXMuc3RhdGUuc2tldGNoVmlld01vZGVsLmNhbmNlbCgpXHJcbiAgICAgIH1cclxuICAgICAgLy8gR2FyYW50ZSBxdWUgbyBtb2RvIGRlIGRlc2VuaG8gZXN0w6EgZGVzYXRpdmFkb1xyXG4gICAgICBpZiAodGhpcy5zdGF0ZS5za2V0Y2hWaWV3TW9kZWwudmlldykge1xyXG4gICAgICAgIHRoaXMuc3RhdGUuc2tldGNoVmlld01vZGVsLnZpZXcucG9wdXAgPSBudWxsXHJcbiAgICAgIH1cclxuICAgICAgY29uc29sZS5sb2coJ1NrZXRjaFZpZXdNb2RlbCBsaW1wbyAtIHByb250byBwYXJhIG5vdm8gZGVzZW5obycpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmVtb3ZlIGEgY2FtYWRhIGRvIHNoYXBlZmlsZSBzZSBleGlzdGlyXHJcbiAgICBpZiAodGhpcy5zdGF0ZS5zaGFwZWZpbGVMYXllciAmJiB0aGlzLnN0YXRlLmppbXVNYXBWaWV3Py52aWV3Py5tYXApIHtcclxuICAgICAgdGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3Lm1hcC5yZW1vdmUodGhpcy5zdGF0ZS5zaGFwZWZpbGVMYXllcilcclxuICAgICAgY29uc29sZS5sb2coJ0NhbWFkYSBkbyBzaGFwZWZpbGUgcmVtb3ZpZGEgZG8gbWFwYScpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmVzZXRhIG8gZXN0YWRvXHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgcXVhbnRpZGFkZUlERUE6IDEsXHJcbiAgICAgIGlkZWFWYWx1ZXM6IFsnJ10sXHJcbiAgICAgIHNoYXBlZmlsZUZpbGU6IG51bGwsXHJcbiAgICAgIHNoYXBlZmlsZUxheWVyOiBudWxsLFxyXG4gICAgICBzaGFwZWZpbGVHZW9tZXRyeTogbnVsbCxcclxuICAgICAgZHJhd25HZW9tZXRyeTogbnVsbCxcclxuICAgICAgYW5hbHlzaXNSZXN1bHQ6IG51bGwsXHJcbiAgICAgIHJlcG9ydFVybDogbnVsbCxcclxuICAgICAgZHJhd2luZ01vZGU6IGZhbHNlLFxyXG4gICAgICBqb2JJZDogbnVsbCxcclxuICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgIHByb2dyZXNzOiAwXHJcbiAgICB9KVxyXG5cclxuICAgIC8vIExpbXBhIG8gaW5wdXQgZGUgYXJxdWl2b1xyXG4gICAgY29uc3QgZmlsZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NoYXBlZmlsZS11cGxvYWQnKSBhcyBIVE1MSW5wdXRFbGVtZW50XHJcbiAgICBpZiAoZmlsZUlucHV0KSB7XHJcbiAgICAgIGZpbGVJbnB1dC52YWx1ZSA9ICcnXHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5sb2coJ0Fuw6FsaXNlIGxpbXBhIGNvbXBsZXRhbWVudGUuIFByb250byBwYXJhIG5vdmEgYW7DoWxpc2UuJylcclxuICB9XHJcblxyXG4gIC8vIEJhaXhhIG8gcmVsYXTDs3Jpb1xyXG4gIGhhbmRsZURvd25sb2FkUmVwb3J0ID0gKCkgPT4ge1xyXG4gICAgaWYgKHRoaXMuc3RhdGUucmVwb3J0VXJsKSB7XHJcbiAgICAgIHdpbmRvdy5vcGVuKHRoaXMuc3RhdGUucmVwb3J0VXJsLCAnX2JsYW5rJylcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgIGFsZXJ0KCdOZW5odW0gcmVsYXTDs3JpbyBkaXNwb27DrXZlbCBwYXJhIGRvd25sb2FkLicpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBGYXogdXBsb2FkIGRvIHNoYXBlZmlsZSBaSVAgcGFyYSBvIHBvcnRhbCBlIHJldG9ybmEgYSBVUkwgZGEgY2FtYWRhXHJcbiAgLy8gTk9UQTogUGFyYSBBcmNHSVMgU2VydmVyLCBwb2RlIHNlciBuZWNlc3PDoXJpbyB1c2FyIGEgQVBJIFJFU1QgZGlyZXRhbWVudGVcclxuICBwcml2YXRlIGFzeW5jIHVwbG9hZFNoYXBlZmlsZVRvUG9ydGFsKHppcEZpbGU6IEZpbGUsIHRva2VuOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc29sZS5sb2coJz09PSBJTklDSUFORE8gVVBMT0FEIFBBUkEgUE9SVEFMID09PScpXHJcbiAgICAgIGNvbnNvbGUubG9nKCdQb3J0YWwgVVJMOicsIHRoaXMuUE9SVEFMX1VSTClcclxuICAgICAgY29uc29sZS5sb2coJ0FycXVpdm86JywgemlwRmlsZS5uYW1lLCAnVGFtYW5obzonLCB6aXBGaWxlLnNpemUsICdieXRlcycpXHJcbiAgICAgIFxyXG4gICAgICAvLyBQYXJhIEFyY0dJUyBTZXJ2ZXIsIHZhbW9zIHRlbnRhciB1c2FyIGEgQVBJIFJFU1QgZGlyZXRhbWVudGVcclxuICAgICAgLy8gUHJpbWVpcm8sIHRlbnRhIHVzYXIgYSBBUEkgZG8gUG9ydGFsL1NlcnZlclxyXG4gICAgICAvLyBTZSBmYWxoYXIgcG9yIENPUlMsIHZhbW9zIHVzYXIgdW1hIGFib3JkYWdlbSBhbHRlcm5hdGl2YVxyXG4gICAgICBcclxuICAgICAgLy8gT3DDp8OjbyAxOiBUZW50YSB1c2FyIC9zaGFyaW5nL3Jlc3QvY29udGVudC91cGxvYWQgKFBvcnRhbCBBUEkpXHJcbiAgICAgIGxldCB1cGxvYWRVcmwgPSBgJHt0aGlzLlBPUlRBTF9VUkx9L3NoYXJpbmcvcmVzdC9jb250ZW50L3VwbG9hZGBcclxuICAgICAgXHJcbiAgICAgIGNvbnNvbGUubG9nKCdUZW50YW5kbyBmYXplciB1cGxvYWQgdmlhIFBvcnRhbCBBUEkuLi4nKVxyXG4gICAgICBjb25zb2xlLmxvZygnVVJMOicsIHVwbG9hZFVybClcclxuICAgICAgXHJcbiAgICAgIGNvbnN0IHVwbG9hZEZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKClcclxuICAgICAgdXBsb2FkRm9ybURhdGEuYXBwZW5kKCdmaWxlJywgemlwRmlsZSwgemlwRmlsZS5uYW1lKVxyXG4gICAgICB1cGxvYWRGb3JtRGF0YS5hcHBlbmQoJ2YnLCAnanNvbicpXHJcbiAgICAgIHVwbG9hZEZvcm1EYXRhLmFwcGVuZCgndG9rZW4nLCB0b2tlbilcclxuICAgICAgXHJcbiAgICAgIGxldCB1cGxvYWRSZXNwb25zZTogUmVzcG9uc2VcclxuICAgICAgbGV0IHVwbG9hZFJlc3VsdDogYW55XHJcbiAgICAgIFxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHVwbG9hZFJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXBsb2FkVXJsLCB7XHJcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgIGJvZHk6IHVwbG9hZEZvcm1EYXRhLFxyXG4gICAgICAgICAgLy8gTsOjbyBkZWZpbmUgaGVhZGVycyAtIG8gYnJvd3NlciBkZWZpbmUgYXV0b21hdGljYW1lbnRlIHBhcmEgRm9ybURhdGFcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICghdXBsb2FkUmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgIGNvbnN0IGVycm9yVGV4dCA9IGF3YWl0IHVwbG9hZFJlc3BvbnNlLnRleHQoKVxyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJybyBubyB1cGxvYWQgKHN0YXR1cyk6JywgdXBsb2FkUmVzcG9uc2Uuc3RhdHVzLCBlcnJvclRleHQpXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC8vIFNlIGZvciBlcnJvIDUwMCBvdSBDT1JTLCB0ZW50YSBhYm9yZGFnZW0gYWx0ZXJuYXRpdmFcclxuICAgICAgICAgIGlmICh1cGxvYWRSZXNwb25zZS5zdGF0dXMgPT09IDUwMCB8fCB1cGxvYWRSZXNwb25zZS5zdGF0dXMgPT09IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDT1JTIG91IGVycm8gZGUgc2Vydmlkb3IuIFRlbnRhbmRvIGFib3JkYWdlbSBhbHRlcm5hdGl2YS4uLicpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJybyBhbyBmYXplciB1cGxvYWQ6ICR7dXBsb2FkUmVzcG9uc2Uuc3RhdHVzfSAtICR7ZXJyb3JUZXh0fWApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHVwbG9hZFJlc3VsdCA9IGF3YWl0IHVwbG9hZFJlc3BvbnNlLmpzb24oKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdSZXN1bHRhZG8gZG8gdXBsb2FkOicsIHVwbG9hZFJlc3VsdClcclxuICAgICAgICBcclxuICAgICAgICBpZiAodXBsb2FkUmVzdWx0LmVycm9yKSB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm8gbm8gdXBsb2FkOiAke3VwbG9hZFJlc3VsdC5lcnJvci5tZXNzYWdlIHx8IEpTT04uc3RyaW5naWZ5KHVwbG9hZFJlc3VsdC5lcnJvcil9YClcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGZldGNoRXJyb3I6IGFueSkge1xyXG4gICAgICAgIC8vIFNlIGZhbGhhciBwb3IgQ09SUyBvdSBvdXRybyBlcnJvIGRlIHJlZGVcclxuICAgICAgICBpZiAoZmV0Y2hFcnJvci5tZXNzYWdlPy5pbmNsdWRlcygnRmFpbGVkIHRvIGZldGNoJykgfHwgZmV0Y2hFcnJvci5tZXNzYWdlPy5pbmNsdWRlcygnQ09SUycpKSB7XHJcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ0Vycm8gZGUgQ09SUyBkZXRlY3RhZG8uIE8gdXBsb2FkIGRpcmV0byBuw6NvIMOpIHBvc3PDrXZlbCBkZXZpZG8gYSByZXN0cmnDp8O1ZXMgQ09SUy4nKVxyXG4gICAgICAgICAgY29uc29sZS53YXJuKCdTb2x1w6fDo286IE8gYXJxdWl2byBaSVAgc2Vyw6EgZW52aWFkbyBkaXJldGFtZW50ZSBwYXJhIGEgR1AgdG9vbC4nKVxyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDT1JTX0JMT0NLRUQnKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aHJvdyBmZXRjaEVycm9yXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGNvbnN0IGl0ZW1JZCA9IHVwbG9hZFJlc3VsdC5pdGVtPy5pZCB8fCB1cGxvYWRSZXN1bHQuaXRlbUlkXHJcbiAgICAgIGlmICghaXRlbUlkKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOw6NvIGZvaSBwb3Nzw612ZWwgb2J0ZXIgbyBJRCBkbyBpdGVtIGFww7NzIG8gdXBsb2FkJylcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgY29uc29sZS5sb2coJ0l0ZW0gSUQgb2J0aWRvOicsIGl0ZW1JZClcclxuICAgICAgXHJcbiAgICAgIC8vIE9idMOpbSBpbmZvcm1hw6fDtWVzIGRvIGl0ZW1cclxuICAgICAgY29uc3QgaXRlbUluZm9VcmwgPSBgJHt0aGlzLlBPUlRBTF9VUkx9L3NoYXJpbmcvcmVzdC9jb250ZW50L2l0ZW1zLyR7aXRlbUlkfT9mPWpzb24mdG9rZW49JHt0b2tlbn1gXHJcbiAgICAgIFxyXG4gICAgICBjb25zb2xlLmxvZygnT2J0ZW5kbyBpbmZvcm1hw6fDtWVzIGRvIGl0ZW0uLi4nKVxyXG4gICAgICBjb25zdCBpdGVtSW5mb1Jlc3BvbnNlID0gYXdhaXQgZmV0Y2goaXRlbUluZm9VcmwpXHJcbiAgICAgIFxyXG4gICAgICBpZiAoIWl0ZW1JbmZvUmVzcG9uc2Uub2spIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm8gYW8gb2J0ZXIgaW5mb3JtYcOnw7VlcyBkbyBpdGVtOiAke2l0ZW1JbmZvUmVzcG9uc2Uuc3RhdHVzfWApXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGNvbnN0IGl0ZW1JbmZvID0gYXdhaXQgaXRlbUluZm9SZXNwb25zZS5qc29uKClcclxuICAgICAgY29uc29sZS5sb2coJ0luZm9ybWHDp8O1ZXMgZG8gaXRlbTonLCBpdGVtSW5mbylcclxuICAgICAgXHJcbiAgICAgIGlmIChpdGVtSW5mby5lcnJvcikge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJybyBhbyBvYnRlciBpdGVtOiAke2l0ZW1JbmZvLmVycm9yLm1lc3NhZ2UgfHwgSlNPTi5zdHJpbmdpZnkoaXRlbUluZm8uZXJyb3IpfWApXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8vIFRlbnRhIHB1YmxpY2FyIGNvbW8gZmVhdHVyZSBzZXJ2aWNlXHJcbiAgICAgIC8vIFBhcmEgQXJjR0lTIFNlcnZlciwgcG9kZSBwcmVjaXNhciBkbyB1c2VybmFtZVxyXG4gICAgICAvLyBWYW1vcyB0ZW50YXIgc2VtIHVzZXJuYW1lIHByaW1laXJvIChhbGd1bnMgc2Vydmlkb3JlcyBwZXJtaXRlbSlcclxuICAgICAgY29uc3QgcHVibGlzaFVybCA9IGAke3RoaXMuUE9SVEFMX1VSTH0vc2hhcmluZy9yZXN0L2NvbnRlbnQvdXNlcnMvY29udGVudC9wdWJsaXNoYFxyXG4gICAgICBcclxuICAgICAgY29uc29sZS5sb2coJ1B1YmxpY2FuZG8gY29tbyBmZWF0dXJlIHNlcnZpY2UuLi4nKVxyXG4gICAgICBjb25zdCBwdWJsaXNoRm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKVxyXG4gICAgICBwdWJsaXNoRm9ybURhdGEuYXBwZW5kKCdpdGVtSWQnLCBpdGVtSWQpXHJcbiAgICAgIHB1Ymxpc2hGb3JtRGF0YS5hcHBlbmQoJ2ZpbGV0eXBlJywgJ3NoYXBlZmlsZScpXHJcbiAgICAgIHB1Ymxpc2hGb3JtRGF0YS5hcHBlbmQoJ2YnLCAnanNvbicpXHJcbiAgICAgIHB1Ymxpc2hGb3JtRGF0YS5hcHBlbmQoJ3Rva2VuJywgdG9rZW4pXHJcbiAgICAgIFxyXG4gICAgICBjb25zdCBwdWJsaXNoUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChwdWJsaXNoVXJsLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgYm9keTogcHVibGlzaEZvcm1EYXRhXHJcbiAgICAgIH0pXHJcbiAgICAgIFxyXG4gICAgICBpZiAoIXB1Ymxpc2hSZXNwb25zZS5vaykge1xyXG4gICAgICAgIGNvbnN0IGVycm9yVGV4dCA9IGF3YWl0IHB1Ymxpc2hSZXNwb25zZS50ZXh0KClcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvIG5hIHB1YmxpY2HDp8OjbzonLCBlcnJvclRleHQpXHJcbiAgICAgICAgLy8gU2UgZmFsaGFyLCB0ZW50YSBvYnRlciBVUkwgZG8gaXRlbSBkaXJldGFtZW50ZVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdUZW50YW5kbyBvYnRlciBVUkwgZG8gaXRlbSBkaXJldGFtZW50ZS4uLicpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgcHVibGlzaFJlc3VsdCA9IGF3YWl0IHB1Ymxpc2hSZXNwb25zZS5qc29uKClcclxuICAgICAgICBjb25zb2xlLmxvZygnUmVzdWx0YWRvIGRhIHB1YmxpY2HDp8OjbzonLCBwdWJsaXNoUmVzdWx0KVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChwdWJsaXNoUmVzdWx0LmVycm9yKSB7XHJcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ0Vycm8gbmEgcHVibGljYcOnw6NvLCBtYXMgY29udGludWFuZG8uLi4nLCBwdWJsaXNoUmVzdWx0LmVycm9yKVxyXG4gICAgICAgIH0gZWxzZSBpZiAocHVibGlzaFJlc3VsdC5zZXJ2aWNlcyAmJiBwdWJsaXNoUmVzdWx0LnNlcnZpY2VzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIGNvbnN0IGxheWVyVXJsID0gcHVibGlzaFJlc3VsdC5zZXJ2aWNlc1swXS5zZXJ2aWNldXJsXHJcbiAgICAgICAgICBjb25zb2xlLmxvZygn4pyTIFVSTCBkYSBjYW1hZGEgb2J0aWRhIGRhIHB1YmxpY2HDp8OjbzonLCBsYXllclVybClcclxuICAgICAgICAgIHJldHVybiBsYXllclVybFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLy8gU2UgbsOjbyBjb25zZWd1aXUgcHVibGljYXIsIHRlbnRhIG9idGVyIFVSTCBkbyBpdGVtXHJcbiAgICAgIGlmIChpdGVtSW5mby51cmwpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygn4pyTIFVSTCBvYnRpZGEgZG8gaXRlbTonLCBpdGVtSW5mby51cmwpXHJcbiAgICAgICAgcmV0dXJuIGl0ZW1JbmZvLnVybFxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvLyDDmmx0aW1hIHRlbnRhdGl2YTogY29uc3Ryw7NpIFVSTCBiYXNlYWRhIG5vIHBhZHLDo29cclxuICAgICAgY29uc3QgY29uc3RydWN0ZWRVcmwgPSBgJHt0aGlzLlBPUlRBTF9VUkx9L3Jlc3Qvc2VydmljZXMvSG9zdGVkLyR7aXRlbUlkfS9GZWF0dXJlU2VydmVyLzBgXHJcbiAgICAgIGNvbnNvbGUubG9nKCfimqAgVXNhbmRvIFVSTCBjb25zdHJ1w61kYSAocG9kZSBuw6NvIGZ1bmNpb25hcik6JywgY29uc3RydWN0ZWRVcmwpXHJcbiAgICAgIHJldHVybiBjb25zdHJ1Y3RlZFVybFxyXG4gICAgICBcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgLy8gU2UgbyBlcnJvIGZvciBDT1JTLCByZXRvcm5hIG51bGwgcGFyYSB1c2FyIGZhbGxiYWNrXHJcbiAgICAgIGlmIChlcnJvci5tZXNzYWdlID09PSAnQ09SU19CTE9DS0VEJykge1xyXG4gICAgICAgIGNvbnNvbGUud2FybignVXBsb2FkIGJsb3F1ZWFkbyBwb3IgQ09SUy4gVXNhbmRvIGZhbGxiYWNrOiBlbnZpYXIgYXJxdWl2byBkaXJldGFtZW50ZS4nKVxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ09SU19CTE9DS0VEJylcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgY29uc29sZS5lcnJvcignRXJybyBjb21wbGV0byBubyB1cGxvYWQgcGFyYSBwb3J0YWw6JywgZXJyb3IpXHJcbiAgICAgIHRocm93IGVycm9yXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBGdW7Dp8OjbyBhdXhpbGlhciBwYXJhIG9idGVyIHRva2VuIHZpYSBPQXV0aDIgdXNhbmRvIGNsaWVudCBzZWNyZXQgKHJlbm92YcOnw6NvIGF1dG9tw6F0aWNhKVxyXG4gIC8vIEVzdGEgZnVuw6fDo28gZ2VyYSB1bSBub3ZvIHRva2VuIGF1dG9tYXRpY2FtZW50ZSBxdWFuZG8gbmVjZXNzw6FyaW8sIGNvbSB2YWxpZGFkZSBkZSAxIGFub1xyXG4gIHByaXZhdGUgYXN5bmMgZ2V0VG9rZW5WaWFPQXV0aDIoKTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAvLyBVUkwgZG8gc2Vydmlkb3IgQXJjR0lTIHBhcmEgb2J0ZXIgdG9rZW5cclxuICAgICAgY29uc3Qgc2VydmVyVXJsID0gJ2h0dHBzOi8vbWVpb2FtYmllbnRlLnNpc3RlbWFzLm1wYmEubXAuYnIvc2VydmVyJ1xyXG4gICAgICBjb25zdCB0b2tlblVybCA9IGAke3NlcnZlclVybH0vdG9rZW5zL2dlbmVyYXRlVG9rZW5gXHJcbiAgICAgIFxyXG4gICAgICAvLyBQYXJhIGdlcmFyIHRva2VuIGNvbSBjbGllbnQgc2VjcmV0XHJcbiAgICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxyXG4gICAgICBwYXJhbXMuYXBwZW5kKCdmJywgJ2pzb24nKVxyXG4gICAgICBwYXJhbXMuYXBwZW5kKCdjbGllbnQnLCAncmVmZXJlcicpXHJcbiAgICAgIHBhcmFtcy5hcHBlbmQoJ3JlZmVyZXInLCB3aW5kb3cubG9jYXRpb24ub3JpZ2luKVxyXG4gICAgICBwYXJhbXMuYXBwZW5kKCdleHBpcmF0aW9uJywgJzUyNTYwMCcpIC8vIDEgYW5vIChtw6F4aW1vIHBlcm1pdGlkbylcclxuICAgICAgXHJcbiAgICAgIGlmICh0aGlzLkNMSUVOVF9TRUNSRVQpIHtcclxuICAgICAgICBwYXJhbXMuYXBwZW5kKCdjbGllbnRfc2VjcmV0JywgdGhpcy5DTElFTlRfU0VDUkVUKVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBjb25zb2xlLmxvZygnVGVudGFuZG8gZ2VyYXIgdG9rZW4gdmlhIE9BdXRoMi4uLicpXHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godG9rZW5VcmwsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IHBhcmFtcy50b1N0cmluZygpXHJcbiAgICAgIH0pXHJcbiAgICAgIFxyXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgY29uc3QgZXJyb3JUZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpXHJcbiAgICAgICAgY29uc29sZS53YXJuKCdFcnJvIGFvIGdlcmFyIHRva2VuIHZpYSBPQXV0aDI6JywgZXJyb3JUZXh0KVxyXG4gICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG4gICAgICBcclxuICAgICAgaWYgKHJlc3VsdC5lcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUud2FybignRXJybyBuYSByZXNwb3N0YSBkbyB0b2tlbjonLCByZXN1bHQuZXJyb3IpXHJcbiAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgaWYgKHJlc3VsdC50b2tlbikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfinJMgVG9rZW4gZ2VyYWRvIGNvbSBzdWNlc3NvIHZpYSBPQXV0aDInKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdUb2tlbiBleHBpcmEgZW06JywgcmVzdWx0LmV4cGlyZXMgPyBuZXcgRGF0ZShyZXN1bHQuZXhwaXJlcykudG9Mb2NhbGVTdHJpbmcoKSA6ICdOw6NvIGVzcGVjaWZpY2FkbycpXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdC50b2tlblxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICByZXR1cm4gbnVsbFxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJybyBhbyB0ZW50YXIgb2J0ZXIgdG9rZW4gdmlhIE9BdXRoMjonLCBlcnJvcilcclxuICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIEV4ZWN1dGEgYSBhbsOhbGlzZSB1c2FuZG8gYSBHUCB0b29sXHJcbiAgaGFuZGxlUnVuQW5hbHlzaXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAvLyBWYWxpZGHDp8O1ZXNcclxuICAgIGlmICh0aGlzLnN0YXRlLmlkZWFWYWx1ZXMuc29tZSh2YWwgPT4gIXZhbCB8fCB2YWwudHJpbSgpID09PSAnJykpIHtcclxuICAgICAgYWxlcnQoJ1BvciBmYXZvciwgcHJlZW5jaGEgdG9kb3Mgb3MgbsO6bWVyb3MgZGUgSURFQS4nKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMuc3RhdGUuc2hhcGVmaWxlR2VvbWV0cnkgJiYgIXRoaXMuc3RhdGUuZHJhd25HZW9tZXRyeSkge1xyXG4gICAgICBhbGVydCgnUG9yIGZhdm9yLCBmYcOnYSB1cGxvYWQgZGUgdW0gc2hhcGVmaWxlIE9VIGRlc2VuaGUgdW1hIMOhcmVhIG5vIG1hcGEuJylcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuc3RhdGUuc2hhcGVmaWxlR2VvbWV0cnkgJiYgdGhpcy5zdGF0ZS5kcmF3bkdlb21ldHJ5KSB7XHJcbiAgICAgIGFsZXJ0KCdQb3IgZmF2b3IsIGVzY29saGEgYXBlbmFzIFVNQSBvcMOnw6NvOiB1cGxvYWQgZGUgc2hhcGVmaWxlIE9VIGRlc2VuaG8gbm8gbWFwYS4nKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIFxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUsIHByb2dyZXNzOiAwLCBhbmFseXNpc1Jlc3VsdDogbnVsbCwgcmVwb3J0VXJsOiBudWxsLCBqb2JJZDogbnVsbCB9KVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIC8vIENhcnJlZ2EgbcOzZHVsb3MgbmVjZXNzw6FyaW9zXHJcbiAgICAgIGNvbnN0IGlkZW50aXR5TW9kdWxlcyA9IGF3YWl0IGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMoW1xyXG4gICAgICAgICdlc3JpL2lkZW50aXR5L0lkZW50aXR5TWFuYWdlcidcclxuICAgICAgXSlcclxuICAgICAgY29uc3QgW0lkZW50aXR5TWFuYWdlcl0gPSBpZGVudGl0eU1vZHVsZXNcclxuICAgICAgXHJcbiAgICAgIC8vIE9idMOpbSB0b2tlbiAtIGltcG9ydGFudGUgcGFyYSBhdXRlbnRpY2HDp8Ojb1xyXG4gICAgICBsZXQgdG9rZW46IHN0cmluZyB8IG51bGwgPSBudWxsXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgLy8gVGVudGEgZW5jb250cmFyIGNyZWRlbmNpYWwgZXhpc3RlbnRlXHJcbiAgICAgICAgY29uc3QgY3JlZGVudGlhbCA9IElkZW50aXR5TWFuYWdlci5maW5kQ3JlZGVudGlhbCh0aGlzLkdQX1NFUlZJQ0VfVVJMKVxyXG4gICAgICAgIGlmIChjcmVkZW50aWFsICYmIGNyZWRlbnRpYWwudG9rZW4pIHtcclxuICAgICAgICAgIC8vIFZlcmlmaWNhIHNlIG8gdG9rZW4gbsOjbyBleHBpcm91XHJcbiAgICAgICAgICBjb25zdCBleHBpcmVzID0gY3JlZGVudGlhbC5leHBpcmVzXHJcbiAgICAgICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKVxyXG4gICAgICAgICAgaWYgKGV4cGlyZXMgJiYgZXhwaXJlcyA+IG5vdykge1xyXG4gICAgICAgICAgdG9rZW4gPSBjcmVkZW50aWFsLnRva2VuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUb2tlbiBlbmNvbnRyYWRvIGUgdsOhbGlkbyB2aWEgSWRlbnRpdHlNYW5hZ2VyJylcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1Rva2VuIGV4cGlyYSBlbTonLCBuZXcgRGF0ZShleHBpcmVzKS50b0xvY2FsZVN0cmluZygpKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignVG9rZW4gZW5jb250cmFkbyBtYXMgZXhwaXJhZG8uIFRlbnRhbmRvIHJlbm92YXIuLi4nKVxyXG4gICAgICAgICAgICAvLyBUb2tlbiBleHBpcmFkbywgdGVudGEgcmVub3ZhclxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgIGF3YWl0IElkZW50aXR5TWFuYWdlci5jaGVja1NpZ25JblN0YXR1cyh0aGlzLkdQX1NFUlZJQ0VfVVJMKVxyXG4gICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRDcmVkZW50aWFsID0gSWRlbnRpdHlNYW5hZ2VyLmZpbmRDcmVkZW50aWFsKHRoaXMuR1BfU0VSVklDRV9VUkwpXHJcbiAgICAgICAgICAgICAgaWYgKHVwZGF0ZWRDcmVkZW50aWFsICYmIHVwZGF0ZWRDcmVkZW50aWFsLnRva2VuKSB7XHJcbiAgICAgICAgICAgICAgICB0b2tlbiA9IHVwZGF0ZWRDcmVkZW50aWFsLnRva2VuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVG9rZW4gcmVub3ZhZG8gY29tIHN1Y2Vzc28nKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBjYXRjaCAocmVuZXdFcnJvcikge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUud2FybignTsOjbyBmb2kgcG9zc8OtdmVsIHJlbm92YXIgdG9rZW46JywgcmVuZXdFcnJvcilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAvLyBOw6NvIHRlbSBjcmVkZW5jaWFsLCB0ZW50YSBvYnRlclxyXG4gICAgICAgICAgY29uc3Qgc2VydmVySW5mbyA9IElkZW50aXR5TWFuYWdlci5maW5kU2VydmVySW5mbyh0aGlzLkdQX1NFUlZJQ0VfVVJMKVxyXG4gICAgICAgICAgaWYgKHNlcnZlckluZm8pIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1RlbnRhbmRvIG9idGVyIHRva2VuIGF1dG9tYXRpY2FtZW50ZS4uLicpXHJcbiAgICAgICAgICAgIGF3YWl0IElkZW50aXR5TWFuYWdlci5jaGVja1NpZ25JblN0YXR1cyh0aGlzLkdQX1NFUlZJQ0VfVVJMKVxyXG4gICAgICAgICAgICBjb25zdCB1cGRhdGVkQ3JlZGVudGlhbCA9IElkZW50aXR5TWFuYWdlci5maW5kQ3JlZGVudGlhbCh0aGlzLkdQX1NFUlZJQ0VfVVJMKVxyXG4gICAgICAgICAgICBpZiAodXBkYXRlZENyZWRlbnRpYWwgJiYgdXBkYXRlZENyZWRlbnRpYWwudG9rZW4pIHtcclxuICAgICAgICAgICAgICB0b2tlbiA9IHVwZGF0ZWRDcmVkZW50aWFsLnRva2VuXHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1Rva2VuIG9idGlkbyBhdXRvbWF0aWNhbWVudGUnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ1NlcnZlckluZm8gbsOjbyBlbmNvbnRyYWRvLiBPIHNlcnZpZG9yIHBvZGUgcmVxdWVyZXIgYXV0ZW50aWNhw6fDo28gbWFudWFsLicpXHJcbiAgICAgICAgICAgIC8vIFRlbnRhIHZlcmlmaWNhciBzdGF0dXMgbWVzbW8gc2VtIHNlcnZlckluZm9cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICBhd2FpdCBJZGVudGl0eU1hbmFnZXIuY2hlY2tTaWduSW5TdGF0dXModGhpcy5HUF9TRVJWSUNFX1VSTClcclxuICAgICAgICAgICAgICBjb25zdCBuZXdDcmVkZW50aWFsID0gSWRlbnRpdHlNYW5hZ2VyLmZpbmRDcmVkZW50aWFsKHRoaXMuR1BfU0VSVklDRV9VUkwpXHJcbiAgICAgICAgICAgICAgaWYgKG5ld0NyZWRlbnRpYWwgJiYgbmV3Q3JlZGVudGlhbC50b2tlbikge1xyXG4gICAgICAgICAgICAgICAgdG9rZW4gPSBuZXdDcmVkZW50aWFsLnRva2VuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVG9rZW4gZ2VyYWRvIGNvbSBzdWNlc3NvJylcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKHNpZ25JbkVycm9yKSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdOw6NvIGZvaSBwb3Nzw612ZWwgZ2VyYXIgdG9rZW4gYXV0b21hdGljYW1lbnRlOicsIHNpZ25JbkVycm9yKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoICh0b2tlbkVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJybyBhbyBvYnRlciB0b2tlbjonLCB0b2tlbkVycm9yKVxyXG4gICAgICAgIGNvbnNvbGUud2FybignQ29udGludWFuZG8gc2VtIHRva2VuIC0gcG9kZSBjYXVzYXIgZXJybyBkZSBhdXRlbnRpY2HDp8OjbycpXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8vIFNlIG7Do28gb2J0ZXZlIHRva2VuIHZpYSBJZGVudGl0eU1hbmFnZXIsIHRlbnRhIGdlcmFyIHZpYSBPQXV0aDJcclxuICAgICAgaWYgKCF0b2tlbikge1xyXG4gICAgICAgIGNvbnNvbGUud2FybignVG9rZW4gbsOjbyBvYnRpZG8gdmlhIElkZW50aXR5TWFuYWdlci4gVGVudGFuZG8gZ2VyYXIgdmlhIE9BdXRoMi4uLicpXHJcbiAgICAgICAgdG9rZW4gPSBhd2FpdCB0aGlzLmdldFRva2VuVmlhT0F1dGgyKClcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLy8gRmFsbGJhY2sgZmluYWw6IHVzYSBvIHRva2VuIGZvcm5lY2lkbyBhcGVuYXMgc2UgT0F1dGgyIHRhbWLDqW0gZmFsaGFyXHJcbiAgICAgIGlmICghdG9rZW4pIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oJ1Rva2VuIG7Do28gb2J0aWRvIHZpYSBPQXV0aDIuIFVzYW5kbyB0b2tlbiBmb3JuZWNpZG8gY29tbyBmYWxsYmFjay4uLicpXHJcbiAgICAgICAgdG9rZW4gPSB0aGlzLkdQX1RPS0VOXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ+KckyBUb2tlbiBvYnRpZG8gYXV0b21hdGljYW1lbnRlIChJZGVudGl0eU1hbmFnZXIgb3UgT0F1dGgyKScpXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGlmICghdG9rZW4pIHtcclxuICAgICAgICBjb25zdCBlcnJvck1zZyA9ICdBVEVOw4fDg086IE5lbmh1bSB0b2tlbiBmb2kgb2J0aWRvLiBBIHJlcXVpc2nDp8OjbyBwb2RlIGZhbGhhciBwb3IgZmFsdGEgZGUgYXV0ZW50aWNhw6fDo28uXFxuXFxuJyArXHJcbiAgICAgICAgICAnUG9yIGZhdm9yLCB2ZXJpZmlxdWUgc2Ugdm9jw6ogZXN0w6EgYXV0ZW50aWNhZG8gbm8gc2Vydmlkb3IgQXJjR0lTIGUgdGVudGUgbm92YW1lbnRlLidcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yTXNnKVxyXG4gICAgICAgIGFsZXJ0KGVycm9yTXNnKVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KVxyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBjb25zb2xlLmxvZygnVG9rZW4gYSBzZXIgdXNhZG86JywgdG9rZW4uc3Vic3RyaW5nKDAsIDMwKSArICcuLi4nKVxyXG4gICAgICBjb25zb2xlLmxvZygnVG9rZW4gY29tcGxldG8gKMO6bHRpbW9zIDMwIGNhcmFjdGVyZXMpOicsICcuLi4nICsgdG9rZW4uc3Vic3RyaW5nKHRva2VuLmxlbmd0aCAtIDMwKSlcclxuICAgICAgXHJcbiAgICAgIC8vIFZhbGlkYcOnw6NvIHLDoXBpZGEgZG8gdG9rZW4gYW50ZXMgZGUgZW52aWFyIChvcGNpb25hbCwgcG9kZSBmYWxoYXIgcG9yIENPUlMpXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgdmFsaWRhdGVVcmwgPSBgJHt0aGlzLkdQX1NFUlZJQ0VfVVJMfT9mPWpzb24mdG9rZW49JHt0b2tlbn1gXHJcbiAgICAgICAgY29uc3QgdmFsaWRhdGVSZXNwb25zZSA9IGF3YWl0IGZldGNoKHZhbGlkYXRlVXJsLCB7IG1ldGhvZDogJ0dFVCcgfSlcclxuICAgICAgICBjb25zdCB2YWxpZGF0ZVJlc3VsdCA9IGF3YWl0IHZhbGlkYXRlUmVzcG9uc2UuanNvbigpXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHZhbGlkYXRlUmVzdWx0LmVycm9yKSB7XHJcbiAgICAgICAgICBpZiAodmFsaWRhdGVSZXN1bHQuZXJyb3IuY29kZSA9PT0gNDk4IHx8IHZhbGlkYXRlUmVzdWx0LmVycm9yLmNvZGUgPT09IDQwMSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Rva2VuIGludsOhbGlkbyBvdSBleHBpcmFkby4gUG9yIGZhdm9yLCBnZXJlIHVtIG5vdm8gdG9rZW4uJylcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ+KckyBUb2tlbiB2YWxpZGFkbyBhbnRlcyBkbyBlbnZpbycpXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoICh2YWxpZGF0ZUVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKCdOw6NvIGZvaSBwb3Nzw612ZWwgdmFsaWRhciB0b2tlbiBwcsOpdmlvIChwb2RlIHNlciBDT1JTKTonLCB2YWxpZGF0ZUVycm9yKVxyXG4gICAgICAgIC8vIENvbnRpbnVhIG1lc21vIGFzc2ltIC0gc2Vyw6EgdmFsaWRhZG8gbmEgcmVxdWlzacOnw6NvIHByaW5jaXBhbFxyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBhZGRUb2tlblRvVXJsID0gKHVybCkgPT4ge1xyXG4gICAgICAgIGlmICghdG9rZW4pIHJldHVybiB1cmxcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3QgdXJsT2JqID0gbmV3IFVSTCh1cmwpXHJcbiAgICAgICAgICB1cmxPYmouc2VhcmNoUGFyYW1zLnNldCgndG9rZW4nLCB0b2tlbilcclxuICAgICAgICAgIHJldHVybiB1cmxPYmoudG9TdHJpbmcoKVxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgIGNvbnN0IHNlcGFyYXRvciA9IHVybC5pbmNsdWRlcygnPycpID8gJyYnIDogJz8nXHJcbiAgICAgICAgICByZXR1cm4gYCR7dXJsfSR7c2VwYXJhdG9yfXRva2VuPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHRva2VuKX1gXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvLyBCdXNjYSBtZXRhZGFkb3MgZGEgR1AgdG9vbCBwYXJhIGRlc2NvYnJpciBub21lcyBleGF0b3MgZG9zIHBhcsOibWV0cm9zXHJcbiAgICAgIC8vIE5PVEE6IFBhcmEgR0VUICh0YXNrSW5mbyksIG8gdG9rZW4gcG9kZSBpciBuYSBVUkwuIFBhcmEgUE9TVCAoc3VibWl0Sm9iKSwgbyB0b2tlbiB2YWkgbm8gYm9keS5cclxuICAgICAgY29uc3QgdGFza05hbWVFbmNvZGVkSW5mbyA9IGVuY29kZVVSSUNvbXBvbmVudCh0aGlzLkdQX1RBU0tfTkFNRSlcclxuICAgICAgY29uc3QgdGFza0luZm9VcmwgPSBgJHt0aGlzLkdQX1NFUlZJQ0VfVVJMfS8ke3Rhc2tOYW1lRW5jb2RlZEluZm99P2Y9anNvbiR7dG9rZW4gPyBgJnRva2VuPSR7dG9rZW59YCA6ICcnfWBcclxuICAgICAgXHJcbiAgICAgIGxldCBncFRhc2tJbmZvOiBhbnkgPSBudWxsXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgaW5mb1Jlc3BvbnNlID0gYXdhaXQgZmV0Y2godGFza0luZm9VcmwpXHJcbiAgICAgICAgaWYgKGluZm9SZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgZ3BUYXNrSW5mbyA9IGF3YWl0IGluZm9SZXNwb25zZS5qc29uKClcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdNZXRhZGFkb3MgZGEgR1AgdG9vbDonLCBncFRhc2tJbmZvKVxyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoaW5mb0Vycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKCdOw6NvIGZvaSBwb3Nzw612ZWwgYnVzY2FyIG1ldGFkYWRvcyBkYSBHUCB0b29sOicsIGluZm9FcnJvcilcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gUHJlcGFyYSBvcyBwYXLDom1ldHJvc1xyXG4gICAgICBjb25zdCBwYXJhbXM6IGFueSA9IHt9XHJcblxyXG4gICAgICAvLyBQYXLDom1ldHJvOiBRdWFudGlkYWRlIGRlIElERUEgZSB2YWxvcmVzXHJcbiAgICAgIC8vIFVzYSBvcyBub21lcyBleGF0b3MgZG9zIG1ldGFkYWRvcyBkYSBHUCB0b29sXHJcbiAgICAgIGxldCBxdWFudGlkYWRlUGFyYW1OYW1lID0gJ3F1YW50aWRhZGVfaWRlYSdcclxuICAgICAgbGV0IGlkZWFQYXJhbVByZWZpeCA9ICdpZGVhXydcclxuICAgICAgXHJcbiAgICAgIGlmIChncFRhc2tJbmZvICYmIGdwVGFza0luZm8ucGFyYW1ldGVycykge1xyXG4gICAgICAgIC8vIFByb2N1cmEgcGFyw6JtZXRyb3MgcmVsYWNpb25hZG9zIGEgSURFQSBub3MgbWV0YWRhZG9zXHJcbiAgICAgICAgY29uc3QgcXVhbnRpZGFkZVBhcmFtID0gZ3BUYXNrSW5mby5wYXJhbWV0ZXJzLmZpbmQoKHA6IGFueSkgPT4gXHJcbiAgICAgICAgICBwLm5hbWUgJiYgcC5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ3F1YW50aWRhZGUnKVxyXG4gICAgICAgIClcclxuICAgICAgICBpZiAocXVhbnRpZGFkZVBhcmFtKSB7XHJcbiAgICAgICAgICBxdWFudGlkYWRlUGFyYW1OYW1lID0gcXVhbnRpZGFkZVBhcmFtLm5hbWVcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdQYXLDom1ldHJvIGRlIHF1YW50aWRhZGUgZW5jb250cmFkbzonLCBxdWFudGlkYWRlUGFyYW1OYW1lKVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBQcm9jdXJhIHBhcsOibWV0cm9zIElERUEgKGlkZWFfMSwgaWRlYV8yLCBldGMpXHJcbiAgICAgICAgY29uc3QgaWRlYVBhcmFtcyA9IGdwVGFza0luZm8ucGFyYW1ldGVycy5maWx0ZXIoKHA6IGFueSkgPT4gXHJcbiAgICAgICAgICBwLm5hbWUgJiYgcC5uYW1lLnRvTG93ZXJDYXNlKCkuc3RhcnRzV2l0aCgnaWRlYV8nKVxyXG4gICAgICAgIClcclxuICAgICAgICBpZiAoaWRlYVBhcmFtcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAvLyBFeHRyYWkgbyBwcmVmaXhvIGRvIHByaW1laXJvIHBhcsOibWV0cm8gKGV4OiBcImlkZWFfMVwiIC0+IFwiaWRlYV9cIilcclxuICAgICAgICAgIGNvbnN0IGZpcnN0SWRlYVBhcmFtID0gaWRlYVBhcmFtc1swXS5uYW1lXHJcbiAgICAgICAgICBpZGVhUGFyYW1QcmVmaXggPSBmaXJzdElkZWFQYXJhbS5zdWJzdHJpbmcoMCwgZmlyc3RJZGVhUGFyYW0ubGFzdEluZGV4T2YoJ18nKSArIDEpXHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnUGFyw6JtZXRyb3MgSURFQSBlbmNvbnRyYWRvczonLCBpZGVhUGFyYW1zLm1hcCgocDogYW55KSA9PiBwLm5hbWUpKVxyXG4gICAgICAgICAgY29uc29sZS5sb2coJ1ByZWZpeG8gZG9zIHBhcsOibWV0cm9zIElERUE6JywgaWRlYVBhcmFtUHJlZml4KVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLy8gQWRpY2lvbmEgcXVhbnRpZGFkZSBkZSBJREVBXHJcbiAgICAgIHBhcmFtc1txdWFudGlkYWRlUGFyYW1OYW1lXSA9IHRoaXMuc3RhdGUucXVhbnRpZGFkZUlERUEudG9TdHJpbmcoKVxyXG4gICAgICBcclxuICAgICAgLy8gQWRpY2lvbmEgb3MgdmFsb3JlcyBkZSBJREVBIChpZGVhXzEsIGlkZWFfMiwgZXRjKVxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3RhdGUuaWRlYVZhbHVlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHBhcmFtc1tgJHtpZGVhUGFyYW1QcmVmaXh9JHtpICsgMX1gXSA9IHRoaXMuc3RhdGUuaWRlYVZhbHVlc1tpXS50cmltKClcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgY29uc29sZS5sb2coJ1BhcsOibWV0cm9zIElERUEgcHJlcGFyYWRvczonLCB7XHJcbiAgICAgICAgcXVhbnRpZGFkZTogcGFyYW1zW3F1YW50aWRhZGVQYXJhbU5hbWVdLFxyXG4gICAgICAgIGlkZWFzOiBPYmplY3Qua2V5cyhwYXJhbXMpLmZpbHRlcihrID0+IGsuc3RhcnRzV2l0aChpZGVhUGFyYW1QcmVmaXgpKVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgLy8gUGFyw6JtZXRybzogw4FyZWEgcHJvcG9zdGEgKHNoYXBlZmlsZSBPVSBnZW9tZXRyaWEgLSBudW5jYSBhbWJvcylcclxuICAgICAgLy8gVXNhIG9zIG5vbWVzIGV4YXRvcyBkb3MgbWV0YWRhZG9zIGRhIEdQIHRvb2xcclxuICAgICAgbGV0IHNoYXBlZmlsZVBhcmFtTmFtZSA9ICdhcmVhX3ppcCdcclxuICAgICAgbGV0IGdlb21ldHJ5UGFyYW1OYW1lID0gJ2FyZWFfZGVzZW5obydcclxuICAgICAgXHJcbiAgICAgIGlmIChncFRhc2tJbmZvICYmIGdwVGFza0luZm8ucGFyYW1ldGVycykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdUb2RvcyBvcyBwYXLDom1ldHJvcyBkYSBHUCB0b29sOicsIGdwVGFza0luZm8ucGFyYW1ldGVycy5tYXAoKHA6IGFueSkgPT4gKHtcclxuICAgICAgICAgIG5hbWU6IHAubmFtZSxcclxuICAgICAgICAgIGRhdGFUeXBlOiBwLmRhdGFUeXBlLFxyXG4gICAgICAgICAgZGlzcGxheU5hbWU6IHAuZGlzcGxheU5hbWVcclxuICAgICAgICB9KSkpXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gUHJvY3VyYSBwYXLDom1ldHJvIGRlIHNoYXBlZmlsZSBaSVAgKEdQRGF0YUZpbGUpIC0gdXNhZG8gQVBFTkFTIHBhcmEgdXBsb2FkIGRlIFpJUFxyXG4gICAgICAgIGNvbnN0IHNoYXBlZmlsZVBhcmFtID0gZ3BUYXNrSW5mby5wYXJhbWV0ZXJzLmZpbmQoKHA6IGFueSkgPT4gXHJcbiAgICAgICAgICBwLmRhdGFUeXBlID09PSAnR1BEYXRhRmlsZScgJiYgXHJcbiAgICAgICAgICBwLm5hbWUgJiYgXHJcbiAgICAgICAgICAocC5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ3ppcCcpIHx8IHAubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCdzaGFwZWZpbGUnKSlcclxuICAgICAgICApXHJcbiAgICAgICAgaWYgKHNoYXBlZmlsZVBhcmFtKSB7XHJcbiAgICAgICAgICBzaGFwZWZpbGVQYXJhbU5hbWUgPSBzaGFwZWZpbGVQYXJhbS5uYW1lXHJcbiAgICAgICAgICBjb25zb2xlLmxvZygn4pyTIFBhcsOibWV0cm8gcGFyYSBTSEFQRUZJTEUgWklQOicsIHNoYXBlZmlsZVBhcmFtTmFtZSwgJ1RpcG86Jywgc2hhcGVmaWxlUGFyYW0uZGF0YVR5cGUpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFByb2N1cmEgcGFyw6JtZXRybyBkZSBnZW9tZXRyaWEgZGVzZW5oYWRhIChHUEZlYXR1cmVSZWNvcmRTZXRMYXllcikgLSB1c2FkbyBBUEVOQVMgcGFyYSBza2V0Y2hcclxuICAgICAgICAvLyBJTVBPUlRBTlRFOiBFc3RlIMOpIHVtIHBhcsOibWV0cm8gRElGRVJFTlRFIGRvIHNoYXBlZmlsZVxyXG4gICAgICAgIGNvbnN0IGdlb21ldHJ5UGFyYW0gPSBncFRhc2tJbmZvLnBhcmFtZXRlcnMuZmluZCgocDogYW55KSA9PiBcclxuICAgICAgICAgIHAuZGF0YVR5cGUgPT09ICdHUEZlYXR1cmVSZWNvcmRTZXRMYXllcicgJiZcclxuICAgICAgICAgIHAubmFtZSAmJlxyXG4gICAgICAgICAgIXAubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCd6aXAnKSAmJlxyXG4gICAgICAgICAgIXAubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCdzaGFwZWZpbGUnKVxyXG4gICAgICAgIClcclxuICAgICAgICBpZiAoZ2VvbWV0cnlQYXJhbSkge1xyXG4gICAgICAgICAgZ2VvbWV0cnlQYXJhbU5hbWUgPSBnZW9tZXRyeVBhcmFtLm5hbWVcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCfinJMgUGFyw6JtZXRybyBwYXJhIEdFT01FVFJJQSBERVNFTkhBREE6JywgZ2VvbWV0cnlQYXJhbU5hbWUsICdUaXBvOicsIGdlb21ldHJ5UGFyYW0uZGF0YVR5cGUpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUud2Fybign4pqgIE7Do28gZm9pIGVuY29udHJhZG8gcGFyw6JtZXRybyBHUEZlYXR1cmVSZWNvcmRTZXRMYXllciBub3MgbWV0YWRhZG9zJylcclxuICAgICAgICAgIGNvbnNvbGUud2FybignVXNhbmRvIG5vbWUgcGFkcsOjbzonLCBnZW9tZXRyeVBhcmFtTmFtZSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8vIElNUE9SVEFOVEU6IFNoYXBlZmlsZSBlIGdlb21ldHJpYSBzw6NvIE1VVFVBTUVOVEUgRVhDTFVTSVZPU1xyXG4gICAgICAvLyAtIFNoYXBlZmlsZSBMYXllcjogZXh0cmFpIGdlb21ldHJpYSBkYSBjYW1hZGEgZSBlbnZpYSBjb21vIEdQRmVhdHVyZVJlY29yZFNldExheWVyXHJcbiAgICAgIC8vIC0gR2VvbWV0cmlhIGRlc2VuaGFkYTogdXNhIHBhcsOibWV0cm8gR1BGZWF0dXJlUmVjb3JkU2V0TGF5ZXIgKG91dHJvIG5vbWUpXHJcbiAgICAgIFxyXG4gICAgICBpZiAodGhpcy5zdGF0ZS5zaGFwZWZpbGVHZW9tZXRyeSkge1xyXG4gICAgICAgIC8vIFVzYSBhIGdlb21ldHJpYSBkbyBzaGFwZWZpbGUgcXVlIGZvaSBzYWx2YSBxdWFuZG8gYSBjYW1hZGEgZm9pIGNyaWFkYVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCc9PT0gVVNBTkRPIEdFT01FVFJJQSBETyBTSEFQRUZJTEUgPT09JylcclxuICAgICAgICBjb25zb2xlLmxvZygnR2VvbWV0cmlhIGRvIHNoYXBlZmlsZSBlbmNvbnRyYWRhIG5vIGVzdGFkbycpXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgZ2VvbWV0cnkgPSB0aGlzLnN0YXRlLnNoYXBlZmlsZUdlb21ldHJ5XHJcbiAgICAgICAgY29uc3Qgc3BhdGlhbFJlZiA9IGdlb21ldHJ5LnNwYXRpYWxSZWZlcmVuY2VcclxuICAgICAgICAvLyBHYXJhbnRlIHF1ZSBlc3TDoSBlbSBTSVJHQVMgMjAwMCAoNDY3NCkgcGFyYSBlbnZpb1xyXG4gICAgICAgIGxldCB3a2lkID0gc3BhdGlhbFJlZj8ud2tpZCB8fCA0Njc0XHJcbiAgICAgICAgbGV0IGxhdGVzdFdraWQgPSAoc3BhdGlhbFJlZiBhcyBhbnkpPy5sYXRlc3RXa2lkIHx8IHNwYXRpYWxSZWY/LndraWQgfHwgNDY3NFxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFNlIG7Do28gZXN0aXZlciBlbSA0Njc0LCBmb3LDp2EgcGFyYSA0Njc0IChqw6EgZGV2ZXJpYSB0ZXIgc2lkbyBjb252ZXJ0aWRvIGFudGVzKVxyXG4gICAgICAgIGlmICh3a2lkICE9PSA0Njc0KSB7XHJcbiAgICAgICAgICBjb25zb2xlLndhcm4oYOKaoCBHZW9tZXRyaWEgZXN0w6EgZW0gV0tJRCAke3draWR9LCBtYXMgZGV2ZSBlc3RhciBlbSA0Njc0IChTSVJHQVMgMjAwMClgKVxyXG4gICAgICAgICAgY29uc29sZS53YXJuKCdGb3LDp2FuZG8gV0tJRCBwYXJhIDQ2NzQgbm8gZW52aW8nKVxyXG4gICAgICAgICAgd2tpZCA9IDQ2NzRcclxuICAgICAgICAgIGxhdGVzdFdraWQgPSA0Njc0XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdHZW9tZXRyaWEgb3JpZ2luYWw6JywgZ2VvbWV0cnkpXHJcbiAgICAgICAgY29uc29sZS5sb2coJ1RpcG86JywgZ2VvbWV0cnkudHlwZSlcclxuICAgICAgICBjb25zb2xlLmxvZygnU3BhdGlhbFJlZmVyZW5jZSAod2tpZC9sYXRlc3RXa2lkKTonLCB3a2lkLCAnLycsIGxhdGVzdFdraWQpXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGdlb21ldHJ5LnR5cGUgPT09ICdwb2x5Z29uJykge1xyXG4gICAgICAgICAgY29uc3QgcG9seWdvbiA9IGdlb21ldHJ5IGFzIF9fZXNyaS5Qb2x5Z29uXHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnUmluZ3MgZG8gcG9sw61nb25vOicsIHBvbHlnb24ucmluZ3MpXHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnTsO6bWVybyBkZSByaW5nczonLCBwb2x5Z29uLnJpbmdzID8gcG9seWdvbi5yaW5ncy5sZW5ndGggOiAwKVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAvLyBWZXJpZmljYSBzZSB0ZW0gcmluZ3MgdsOhbGlkb3NcclxuICAgICAgICAgIGlmICghcG9seWdvbi5yaW5ncyB8fCBwb2x5Z29uLnJpbmdzLmxlbmd0aCA9PT0gMCB8fCAhcG9seWdvbi5yaW5nc1swXSB8fCBwb2x5Z29uLnJpbmdzWzBdLmxlbmd0aCA8IDMpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBIGdlb21ldHJpYSBkbyBzaGFwZWZpbGUgbsOjbyDDqSB2w6FsaWRhLiBQb3IgZmF2b3IsIHZlcmlmaXF1ZSBvIGFycXVpdm8uJylcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQ29udmVydGUgYSBnZW9tZXRyaWEgcGFyYSBKU09OXHJcbiAgICAgICAgbGV0IGdlb21ldHJ5SnNvbiA9IGdlb21ldHJ5LnRvSlNPTigpXHJcbiAgICAgICAgY29uc29sZS5sb2coJ0dlb21ldHJpYSBKU09OIG9yaWdpbmFsOicsIGdlb21ldHJ5SnNvbilcclxuICAgICAgICBcclxuICAgICAgICAvLyBHYXJhbnRlIHF1ZSBvcyByaW5ncyBlc3TDo28gZmVjaGFkb3MgKHByaW1laXJvIGUgw7psdGltbyBwb250byBkZXZlbSBzZXIgaWd1YWlzKVxyXG4gICAgICAgIGlmIChnZW9tZXRyeS50eXBlID09PSAncG9seWdvbicgJiYgZ2VvbWV0cnlKc29uLnJpbmdzKSB7XHJcbiAgICAgICAgICBnZW9tZXRyeUpzb24ucmluZ3MgPSBnZW9tZXRyeUpzb24ucmluZ3MubWFwKChyaW5nOiBudW1iZXJbXVtdKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyaW5nLmxlbmd0aCA8IDMpIHtcclxuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JpbmcgZGV2ZSB0ZXIgcGVsbyBtZW5vcyAzIHBvbnRvcycpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIFZlcmlmaWNhIHNlIG8gcmluZyBlc3TDoSBmZWNoYWRvIChwcmltZWlybyBlIMO6bHRpbW8gcG9udG8gc8OjbyBpZ3VhaXMpXHJcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0UG9pbnQgPSByaW5nWzBdXHJcbiAgICAgICAgICAgIGNvbnN0IGxhc3RQb2ludCA9IHJpbmdbcmluZy5sZW5ndGggLSAxXVxyXG4gICAgICAgICAgICBjb25zdCBpc0Nsb3NlZCA9IGZpcnN0UG9pbnRbMF0gPT09IGxhc3RQb2ludFswXSAmJiBmaXJzdFBvaW50WzFdID09PSBsYXN0UG9pbnRbMV1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIFNlIG7Do28gZXN0aXZlciBmZWNoYWRvLCBhZGljaW9uYSBvIHByaW1laXJvIHBvbnRvIG5vIGZpbmFsXHJcbiAgICAgICAgICAgIGlmICghaXNDbG9zZWQpIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUmluZyBuw6NvIGVzdGF2YSBmZWNoYWRvLiBGZWNoYW5kby4uLicpXHJcbiAgICAgICAgICAgICAgcmluZyA9IFsuLi5yaW5nLCBbZmlyc3RQb2ludFswXSwgZmlyc3RQb2ludFsxXV1dXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIEdhcmFudGUgcXVlIGNhZGEgcG9udG8gdGVtIGV4YXRhbWVudGUgMiBjb29yZGVuYWRhcyAoeCwgeSlcclxuICAgICAgICAgICAgcmluZyA9IHJpbmcubWFwKChwb2ludDogbnVtYmVyW10pID0+IHtcclxuICAgICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkocG9pbnQpIHx8IHBvaW50Lmxlbmd0aCA8IDIpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUG9udG8gaW52w6FsaWRvIG5vIHJpbmcnKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvLyBHYXJhbnRlIHF1ZSB0ZW0gZXhhdGFtZW50ZSAyIGNvb3JkZW5hZGFzICh4LCB5KVxyXG4gICAgICAgICAgICAgIHJldHVybiBbcG9pbnRbMF0sIHBvaW50WzFdXVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIHJpbmdcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIElNUE9SVEFOVEU6IEEgZ2VvbWV0cmlhIGRlbnRybyBkbyBmZWF0dXJlIERFVkUgdGVyIHNldSBwcsOzcHJpbyBzcGF0aWFsUmVmZXJlbmNlXHJcbiAgICAgICAgLy8gRm9ybWF0byBleGF0byBjb21vIG5vIGV4ZW1wbG8gZm9ybmVjaWRvXHJcbiAgICAgICAgZ2VvbWV0cnlKc29uLnNwYXRpYWxSZWZlcmVuY2UgPSB7XHJcbiAgICAgICAgICB3a2lkOiB3a2lkLFxyXG4gICAgICAgICAgbGF0ZXN0V2tpZDogbGF0ZXN0V2tpZFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBWYWxpZGHDp8OjbyBmaW5hbCBkYSBnZW9tZXRyaWFcclxuICAgICAgICBpZiAoZ2VvbWV0cnkudHlwZSA9PT0gJ3BvbHlnb24nKSB7XHJcbiAgICAgICAgICBpZiAoIWdlb21ldHJ5SnNvbi5yaW5ncyB8fCBnZW9tZXRyeUpzb24ucmluZ3MubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignR2VvbWV0cmlhIGRlIHBvbMOtZ29ubyBuw6NvIHBvc3N1aSByaW5ncyB2w6FsaWRvcycpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC8vIFZhbGlkYSBjYWRhIHJpbmdcclxuICAgICAgICAgIGdlb21ldHJ5SnNvbi5yaW5ncy5mb3JFYWNoKChyaW5nOiBudW1iZXJbXVtdLCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShyaW5nKSB8fCByaW5nLmxlbmd0aCA8IDQpIHsgLy8gTcOtbmltbyA0IHBvbnRvcyAoMyArIGZlY2hhbWVudG8pXHJcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBSaW5nICR7aW5kZXh9IG7Do28gw6kgdsOhbGlkbzogZGV2ZSB0ZXIgcGVsbyBtZW5vcyA0IHBvbnRvcyAoMyArIGZlY2hhbWVudG8pYClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gVmVyaWZpY2Egc2UgZXN0w6EgZmVjaGFkb1xyXG4gICAgICAgICAgICBjb25zdCBmaXJzdCA9IHJpbmdbMF1cclxuICAgICAgICAgICAgY29uc3QgbGFzdCA9IHJpbmdbcmluZy5sZW5ndGggLSAxXVxyXG4gICAgICAgICAgICBpZiAoZmlyc3RbMF0gIT09IGxhc3RbMF0gfHwgZmlyc3RbMV0gIT09IGxhc3RbMV0pIHtcclxuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFJpbmcgJHtpbmRleH0gbsOjbyBlc3TDoSBmZWNoYWRvIGNvcnJldGFtZW50ZWApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIENyaWEgdW0gR1BGZWF0dXJlUmVjb3JkU2V0TGF5ZXIgbm8gZm9ybWF0byBFWEFUTyBlc3BlcmFkbyBwZWxhIEdQIHRvb2xcclxuICAgICAgICAvLyBTZWd1aW5kbyBvIGZvcm1hdG8gZG8gZXhlbXBsbyBmb3JuZWNpZG9cclxuICAgICAgICBjb25zdCBmZWF0dXJlUmVjb3JkU2V0TGF5ZXIgPSB7XHJcbiAgICAgICAgICBkaXNwbGF5RmllbGROYW1lOiAnJyxcclxuICAgICAgICAgIGdlb21ldHJ5VHlwZTogJ2VzcmlHZW9tZXRyeVBvbHlnb24nLFxyXG4gICAgICAgICAgc3BhdGlhbFJlZmVyZW5jZToge1xyXG4gICAgICAgICAgICB3a2lkOiB3a2lkLFxyXG4gICAgICAgICAgICBsYXRlc3RXa2lkOiBsYXRlc3RXa2lkXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZmllbGRzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBuYW1lOiAnT0JKRUNUSUQnLFxyXG4gICAgICAgICAgICAgIHR5cGU6ICdlc3JpRmllbGRUeXBlT0lEJyxcclxuICAgICAgICAgICAgICBhbGlhczogJ09CSkVDVElEJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgbmFtZTogJ1NoYXBlX0xlbmd0aCcsXHJcbiAgICAgICAgICAgICAgdHlwZTogJ2VzcmlGaWVsZFR5cGVEb3VibGUnLFxyXG4gICAgICAgICAgICAgIGFsaWFzOiAnU2hhcGVfTGVuZ3RoJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgbmFtZTogJ1NoYXBlX0FyZWEnLFxyXG4gICAgICAgICAgICAgIHR5cGU6ICdlc3JpRmllbGRUeXBlRG91YmxlJyxcclxuICAgICAgICAgICAgICBhbGlhczogJ1NoYXBlX0FyZWEnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgICBmZWF0dXJlczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgZ2VvbWV0cnk6IGdlb21ldHJ5SnNvbiwgLy8gZ2VvbWV0cnlKc29uIGrDoSB0ZW0gc3BhdGlhbFJlZmVyZW5jZSBkZW50cm9cclxuICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiB7XHJcbiAgICAgICAgICAgICAgICBPQkpFQ1RJRDogMSxcclxuICAgICAgICAgICAgICAgIFNoYXBlX0xlbmd0aDogMCxcclxuICAgICAgICAgICAgICAgIFNoYXBlX0FyZWE6IDBcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgICBleGNlZWRlZFRyYW5zZmVyTGltaXQ6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFZhbGlkYcOnw6NvIGZpbmFsIGFudGVzIGRlIGVudmlhclxyXG4gICAgICAgIGlmICghZmVhdHVyZVJlY29yZFNldExheWVyLmZlYXR1cmVzIHx8IGZlYXR1cmVSZWNvcmRTZXRMYXllci5mZWF0dXJlcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTmVuaHVtYSBmZWF0dXJlIGZvaSBhZGljaW9uYWRhIGFvIEZlYXR1cmVSZWNvcmRTZXRMYXllcicpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICghZmVhdHVyZVJlY29yZFNldExheWVyLmZlYXR1cmVzWzBdLmdlb21ldHJ5KSB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0EgZ2VvbWV0cmlhIG7Do28gZm9pIGFkaWNpb25hZGEgYW8gZmVhdHVyZScpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICghZmVhdHVyZVJlY29yZFNldExheWVyLmZlYXR1cmVzWzBdLmdlb21ldHJ5LnJpbmdzIHx8IGZlYXR1cmVSZWNvcmRTZXRMYXllci5mZWF0dXJlc1swXS5nZW9tZXRyeS5yaW5ncy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQSBnZW9tZXRyaWEgbsOjbyBwb3NzdWkgcmluZ3MgdsOhbGlkb3MnKVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBMb2dzIGRldGFsaGFkb3MgZGFzIGNvb3JkZW5hZGFzIGFudGVzIGRlIGVudmlhclxyXG4gICAgICAgIGNvbnNvbGUubG9nKCc9PT0gQ09PUkRFTkFEQVMgRE8gU0hBUEVGSUxFIChQUk9OVEFTIFBBUkEgRU5WSU8pID09PScpXHJcbiAgICAgICAgY29uc29sZS5sb2coJ0ZlYXR1cmVSZWNvcmRTZXRMYXllciB2YWxpZGFkbyBlIHByb250byBwYXJhIGVudmlvJylcclxuICAgICAgICBjb25zb2xlLmxvZygnTsO6bWVybyBkZSBmZWF0dXJlczonLCBmZWF0dXJlUmVjb3JkU2V0TGF5ZXIuZmVhdHVyZXMubGVuZ3RoKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdOw7ptZXJvIGRlIHJpbmdzOicsIGZlYXR1cmVSZWNvcmRTZXRMYXllci5mZWF0dXJlc1swXS5nZW9tZXRyeS5yaW5ncy5sZW5ndGgpXHJcbiAgICAgICAgY29uc29sZS5sb2coJ1NwYXRpYWxSZWZlcmVuY2UgKHdraWQvbGF0ZXN0V2tpZCk6Jywgd2tpZCwgJy8nLCBsYXRlc3RXa2lkKVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIE1vc3RyYSB0b2RhcyBhcyBjb29yZGVuYWRhcyBkZXRhbGhhZGFtZW50ZVxyXG4gICAgICAgIGlmIChmZWF0dXJlUmVjb3JkU2V0TGF5ZXIuZmVhdHVyZXNbMF0uZ2VvbWV0cnkucmluZ3MpIHtcclxuICAgICAgICAgIGZlYXR1cmVSZWNvcmRTZXRMYXllci5mZWF0dXJlc1swXS5nZW9tZXRyeS5yaW5ncy5mb3JFYWNoKChyaW5nOiBudW1iZXJbXVtdLCByaW5nSW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgLS0tIFJpbmcgJHtyaW5nSW5kZXggKyAxfSAoJHtyaW5nLmxlbmd0aH0gcG9udG9zKSAtLS1gKVxyXG4gICAgICAgICAgICByaW5nLmZvckVhY2goKHBvaW50OiBudW1iZXJbXSwgcG9pbnRJbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coYCAgUG9udG8gJHtwb2ludEluZGV4ICsgMX06IFske3BvaW50WzBdfSwgJHtwb2ludFsxXX1dYClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLy8gTW9zdHJhIHNlIG8gcmluZyBlc3TDoSBmZWNoYWRvXHJcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0ID0gcmluZ1swXVxyXG4gICAgICAgICAgICBjb25zdCBsYXN0ID0gcmluZ1tyaW5nLmxlbmd0aCAtIDFdXHJcbiAgICAgICAgICAgIGNvbnN0IGlzQ2xvc2VkID0gZmlyc3RbMF0gPT09IGxhc3RbMF0gJiYgZmlyc3RbMV0gPT09IGxhc3RbMV1cclxuICAgICAgICAgICAgY29uc29sZS5sb2coYCAgUmluZyAke3JpbmdJbmRleCArIDF9IGVzdMOhIGZlY2hhZG86ICR7aXNDbG9zZWR9YClcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIE1vc3RyYSByZXN1bW8gZGFzIGNvb3JkZW5hZGFzXHJcbiAgICAgICAgaWYgKGZlYXR1cmVSZWNvcmRTZXRMYXllci5mZWF0dXJlc1swXS5nZW9tZXRyeS5yaW5ncyAmJiBmZWF0dXJlUmVjb3JkU2V0TGF5ZXIuZmVhdHVyZXNbMF0uZ2VvbWV0cnkucmluZ3MubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgY29uc3QgZmlyc3RSaW5nID0gZmVhdHVyZVJlY29yZFNldExheWVyLmZlYXR1cmVzWzBdLmdlb21ldHJ5LnJpbmdzWzBdXHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnLS0tIFJlc3VtbyBkYXMgQ29vcmRlbmFkYXMgLS0tJylcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGBUb3RhbCBkZSBwb250b3Mgbm8gcHJpbWVpcm8gcmluZzogJHtmaXJzdFJpbmcubGVuZ3RofWApXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhgUHJpbWVpcm8gcG9udG86IFske2ZpcnN0UmluZ1swXVswXX0sICR7Zmlyc3RSaW5nWzBdWzFdfV1gKVxyXG4gICAgICAgICAgY29uc29sZS5sb2coYMOabHRpbW8gcG9udG86IFske2ZpcnN0UmluZ1tmaXJzdFJpbmcubGVuZ3RoIC0gMV1bMF19LCAke2ZpcnN0UmluZ1tmaXJzdFJpbmcubGVuZ3RoIC0gMV1bMV19XWApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEVudmlhIGNvbW8gc3RyaW5nIEpTT04gdXNhbmRvIG8gbm9tZSBjb3JyZXRvIGRvIHBhcsOibWV0cm9cclxuICAgICAgICBjb25zdCBnZW9tZXRyeVZhbHVlID0gSlNPTi5zdHJpbmdpZnkoZmVhdHVyZVJlY29yZFNldExheWVyKVxyXG4gICAgICAgIHBhcmFtc1tnZW9tZXRyeVBhcmFtTmFtZV0gPSBnZW9tZXRyeVZhbHVlXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc29sZS5sb2coJ0dlb21ldHJpYSBhZGljaW9uYWRhIGFvIHBhcsOibWV0cm86JywgZ2VvbWV0cnlQYXJhbU5hbWUpXHJcbiAgICAgICAgY29uc29sZS5sb2coJ1RhbWFuaG8gZG8gSlNPTjonLCBnZW9tZXRyeVZhbHVlLmxlbmd0aCwgJ2NhcmFjdGVyZXMnKVxyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuZHJhd25HZW9tZXRyeSkge1xyXG4gICAgICAgIC8vIFBhcmEgR1BGZWF0dXJlUmVjb3JkU2V0TGF5ZXIgKGdlb21ldHJpYSBkZXNlbmhhZGEpLCBlbnZpYSBKU09OXHJcbiAgICAgICAgY29uc29sZS5sb2coJ1VzYW5kbyBHRU9NRVRSSUEgREVTRU5IQURBIC0gcGFyw6JtZXRybzonLCBnZW9tZXRyeVBhcmFtTmFtZSlcclxuICAgICAgICAvLyBWYWxpZGEgYSBnZW9tZXRyaWEgYW50ZXMgZGUgZW52aWFyXHJcbiAgICAgICAgY29uc3QgZ2VvbWV0cnkgPSB0aGlzLnN0YXRlLmRyYXduR2VvbWV0cnlcclxuICAgICAgICBjb25zb2xlLmxvZygnR2VvbWV0cmlhIG9yaWdpbmFsOicsIGdlb21ldHJ5KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdUaXBvOicsIGdlb21ldHJ5LnR5cGUpXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGdlb21ldHJ5LnR5cGUgPT09ICdwb2x5Z29uJykge1xyXG4gICAgICAgICAgY29uc3QgcG9seWdvbiA9IGdlb21ldHJ5IGFzIF9fZXNyaS5Qb2x5Z29uXHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnUmluZ3MgZG8gcG9sw61nb25vOicsIHBvbHlnb24ucmluZ3MpXHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnTsO6bWVybyBkZSByaW5nczonLCBwb2x5Z29uLnJpbmdzID8gcG9seWdvbi5yaW5ncy5sZW5ndGggOiAwKVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAvLyBWZXJpZmljYSBzZSB0ZW0gcmluZ3MgdsOhbGlkb3NcclxuICAgICAgICAgIGlmICghcG9seWdvbi5yaW5ncyB8fCBwb2x5Z29uLnJpbmdzLmxlbmd0aCA9PT0gMCB8fCAhcG9seWdvbi5yaW5nc1swXSB8fCBwb2x5Z29uLnJpbmdzWzBdLmxlbmd0aCA8IDMpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBIGdlb21ldHJpYSBkZXNlbmhhZGEgbsOjbyDDqSB2w6FsaWRhLiBQb3IgZmF2b3IsIGRlc2VuaGUgdW0gcG9sw61nb25vIGNvbSBwZWxvIG1lbm9zIDMgcG9udG9zLicpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIENvbnZlcnRlIGEgZ2VvbWV0cmlhIHBhcmEgSlNPTlxyXG4gICAgICAgIGxldCBnZW9tZXRyeUpzb24gPSBnZW9tZXRyeS50b0pTT04oKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdHZW9tZXRyaWEgSlNPTiBvcmlnaW5hbDonLCBnZW9tZXRyeUpzb24pXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3Qgc3BhdGlhbFJlZiA9IGdlb21ldHJ5LnNwYXRpYWxSZWZlcmVuY2VcclxuICAgICAgICBjb25zb2xlLmxvZygnU3BhdGlhbFJlZmVyZW5jZSBvcmlnaW5hbDonLCBzcGF0aWFsUmVmKVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIE9idMOpbSBvIFdLSUQgZG8gc3BhdGlhbCByZWZlcmVuY2VcclxuICAgICAgICAvLyBJTVBPUlRBTlRFOiBVc2EgbyBzcGF0aWFsUmVmZXJlbmNlIGRhIGdlb21ldHJpYSBvcmlnaW5hbCwgbsOjbyB1bSBwYWRyw6NvXHJcbiAgICAgICAgY29uc3Qgd2tpZCA9IHNwYXRpYWxSZWY/LndraWQgfHwgKHNwYXRpYWxSZWYgYXMgYW55KT8ud2tUZXh0IHx8IDEwMjEwMFxyXG4gICAgICAgIGNvbnN0IGxhdGVzdFdraWQgPSAoc3BhdGlhbFJlZiBhcyBhbnkpPy5sYXRlc3RXa2lkIHx8IHNwYXRpYWxSZWY/LndraWQgfHwgMzg1N1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEdhcmFudGUgcXVlIG9zIHJpbmdzIGVzdMOjbyBmZWNoYWRvcyAocHJpbWVpcm8gZSDDumx0aW1vIHBvbnRvIGRldmVtIHNlciBpZ3VhaXMpXHJcbiAgICAgICAgaWYgKGdlb21ldHJ5LnR5cGUgPT09ICdwb2x5Z29uJyAmJiBnZW9tZXRyeUpzb24ucmluZ3MpIHtcclxuICAgICAgICAgIGdlb21ldHJ5SnNvbi5yaW5ncyA9IGdlb21ldHJ5SnNvbi5yaW5ncy5tYXAoKHJpbmc6IG51bWJlcltdW10pID0+IHtcclxuICAgICAgICAgICAgaWYgKHJpbmcubGVuZ3RoIDwgMykge1xyXG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmluZyBkZXZlIHRlciBwZWxvIG1lbm9zIDMgcG9udG9zJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gVmVyaWZpY2Egc2UgbyByaW5nIGVzdMOhIGZlY2hhZG8gKHByaW1laXJvIGUgw7psdGltbyBwb250byBzw6NvIGlndWFpcylcclxuICAgICAgICAgICAgY29uc3QgZmlyc3RQb2ludCA9IHJpbmdbMF1cclxuICAgICAgICAgICAgY29uc3QgbGFzdFBvaW50ID0gcmluZ1tyaW5nLmxlbmd0aCAtIDFdXHJcbiAgICAgICAgICAgIGNvbnN0IGlzQ2xvc2VkID0gZmlyc3RQb2ludFswXSA9PT0gbGFzdFBvaW50WzBdICYmIGZpcnN0UG9pbnRbMV0gPT09IGxhc3RQb2ludFsxXVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gU2UgbsOjbyBlc3RpdmVyIGZlY2hhZG8sIGFkaWNpb25hIG8gcHJpbWVpcm8gcG9udG8gbm8gZmluYWxcclxuICAgICAgICAgICAgaWYgKCFpc0Nsb3NlZCkge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSaW5nIG7Do28gZXN0YXZhIGZlY2hhZG8uIEZlY2hhbmRvLi4uJylcclxuICAgICAgICAgICAgICByaW5nID0gWy4uLnJpbmcsIFtmaXJzdFBvaW50WzBdLCBmaXJzdFBvaW50WzFdXV1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gR2FyYW50ZSBxdWUgY2FkYSBwb250byB0ZW0gZXhhdGFtZW50ZSAyIGNvb3JkZW5hZGFzICh4LCB5KVxyXG4gICAgICAgICAgICByaW5nID0gcmluZy5tYXAoKHBvaW50OiBudW1iZXJbXSkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShwb2ludCkgfHwgcG9pbnQubGVuZ3RoIDwgMikge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdQb250byBpbnbDoWxpZG8gbm8gcmluZycpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8vIEdhcmFudGUgcXVlIHRlbSBleGF0YW1lbnRlIDIgY29vcmRlbmFkYXMgKHgsIHkpXHJcbiAgICAgICAgICAgICAgcmV0dXJuIFtwb2ludFswXSwgcG9pbnRbMV1dXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gcmluZ1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gSU1QT1JUQU5URTogQSBnZW9tZXRyaWEgZGVudHJvIGRvIGZlYXR1cmUgREVWRSB0ZXIgc2V1IHByw7NwcmlvIHNwYXRpYWxSZWZlcmVuY2VcclxuICAgICAgICAvLyBGb3JtYXRvIGV4YXRvIGNvbW8gbm8gZXhlbXBsbyBmb3JuZWNpZG9cclxuICAgICAgICBnZW9tZXRyeUpzb24uc3BhdGlhbFJlZmVyZW5jZSA9IHtcclxuICAgICAgICAgIHdraWQ6IHdraWQsXHJcbiAgICAgICAgICBsYXRlc3RXa2lkOiBsYXRlc3RXa2lkXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFZhbGlkYcOnw6NvIGZpbmFsIGRhIGdlb21ldHJpYVxyXG4gICAgICAgIGlmIChnZW9tZXRyeS50eXBlID09PSAncG9seWdvbicpIHtcclxuICAgICAgICAgIGlmICghZ2VvbWV0cnlKc29uLnJpbmdzIHx8IGdlb21ldHJ5SnNvbi5yaW5ncy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdHZW9tZXRyaWEgZGUgcG9sw61nb25vIG7Do28gcG9zc3VpIHJpbmdzIHbDoWxpZG9zJylcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLy8gVmFsaWRhIGNhZGEgcmluZ1xyXG4gICAgICAgICAgZ2VvbWV0cnlKc29uLnJpbmdzLmZvckVhY2goKHJpbmc6IG51bWJlcltdW10sIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHJpbmcpIHx8IHJpbmcubGVuZ3RoIDwgNCkgeyAvLyBNw61uaW1vIDQgcG9udG9zICgzICsgZmVjaGFtZW50bylcclxuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFJpbmcgJHtpbmRleH0gbsOjbyDDqSB2w6FsaWRvOiBkZXZlIHRlciBwZWxvIG1lbm9zIDQgcG9udG9zICgzICsgZmVjaGFtZW50bylgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBWZXJpZmljYSBzZSBlc3TDoSBmZWNoYWRvXHJcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0ID0gcmluZ1swXVxyXG4gICAgICAgICAgICBjb25zdCBsYXN0ID0gcmluZ1tyaW5nLmxlbmd0aCAtIDFdXHJcbiAgICAgICAgICAgIGlmIChmaXJzdFswXSAhPT0gbGFzdFswXSB8fCBmaXJzdFsxXSAhPT0gbGFzdFsxXSkge1xyXG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgUmluZyAke2luZGV4fSBuw6NvIGVzdMOhIGZlY2hhZG8gY29ycmV0YW1lbnRlYClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQ3JpYSB1bSBHUEZlYXR1cmVSZWNvcmRTZXRMYXllciBubyBmb3JtYXRvIEVYQVRPIGVzcGVyYWRvIHBlbGEgR1AgdG9vbFxyXG4gICAgICAgIC8vIFNlZ3VpbmRvIG8gZm9ybWF0byBkbyBleGVtcGxvIGZvcm5lY2lkb1xyXG4gICAgICAgIGNvbnN0IGZlYXR1cmVSZWNvcmRTZXRMYXllciA9IHtcclxuICAgICAgICAgIGRpc3BsYXlGaWVsZE5hbWU6ICcnLFxyXG4gICAgICAgICAgZ2VvbWV0cnlUeXBlOiAnZXNyaUdlb21ldHJ5UG9seWdvbicsXHJcbiAgICAgICAgICBzcGF0aWFsUmVmZXJlbmNlOiB7XHJcbiAgICAgICAgICAgIHdraWQ6IHdraWQsXHJcbiAgICAgICAgICAgIGxhdGVzdFdraWQ6IGxhdGVzdFdraWRcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBmaWVsZHM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIG5hbWU6ICdPQkpFQ1RJRCcsXHJcbiAgICAgICAgICAgICAgdHlwZTogJ2VzcmlGaWVsZFR5cGVPSUQnLFxyXG4gICAgICAgICAgICAgIGFsaWFzOiAnT0JKRUNUSUQnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBuYW1lOiAnU2hhcGVfTGVuZ3RoJyxcclxuICAgICAgICAgICAgICB0eXBlOiAnZXNyaUZpZWxkVHlwZURvdWJsZScsXHJcbiAgICAgICAgICAgICAgYWxpYXM6ICdTaGFwZV9MZW5ndGgnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBuYW1lOiAnU2hhcGVfQXJlYScsXHJcbiAgICAgICAgICAgICAgdHlwZTogJ2VzcmlGaWVsZFR5cGVEb3VibGUnLFxyXG4gICAgICAgICAgICAgIGFsaWFzOiAnU2hhcGVfQXJlYSdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgXSxcclxuICAgICAgICAgIGZlYXR1cmVzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBnZW9tZXRyeTogZ2VvbWV0cnlKc29uLCAvLyBnZW9tZXRyeUpzb24gasOhIHRlbSBzcGF0aWFsUmVmZXJlbmNlIGRlbnRyb1xyXG4gICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHtcclxuICAgICAgICAgICAgICAgIE9CSkVDVElEOiAxLFxyXG4gICAgICAgICAgICAgICAgU2hhcGVfTGVuZ3RoOiAwLFxyXG4gICAgICAgICAgICAgICAgU2hhcGVfQXJlYTogMFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgXSxcclxuICAgICAgICAgIGV4Y2VlZGVkVHJhbnNmZXJMaW1pdDogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gVmFsaWRhw6fDo28gZmluYWwgYW50ZXMgZGUgZW52aWFyXHJcbiAgICAgICAgaWYgKCFmZWF0dXJlUmVjb3JkU2V0TGF5ZXIuZmVhdHVyZXMgfHwgZmVhdHVyZVJlY29yZFNldExheWVyLmZlYXR1cmVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZW5odW1hIGZlYXR1cmUgZm9pIGFkaWNpb25hZGEgYW8gRmVhdHVyZVJlY29yZFNldExheWVyJylcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKCFmZWF0dXJlUmVjb3JkU2V0TGF5ZXIuZmVhdHVyZXNbMF0uZ2VvbWV0cnkpIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQSBnZW9tZXRyaWEgbsOjbyBmb2kgYWRpY2lvbmFkYSBhbyBmZWF0dXJlJylcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKCFmZWF0dXJlUmVjb3JkU2V0TGF5ZXIuZmVhdHVyZXNbMF0uZ2VvbWV0cnkucmluZ3MgfHwgZmVhdHVyZVJlY29yZFNldExheWVyLmZlYXR1cmVzWzBdLmdlb21ldHJ5LnJpbmdzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBIGdlb21ldHJpYSBuw6NvIHBvc3N1aSByaW5ncyB2w6FsaWRvcycpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIExvZ3MgZGV0YWxoYWRvcyBkYXMgY29vcmRlbmFkYXMgYW50ZXMgZGUgZW52aWFyXHJcbiAgICAgICAgY29uc29sZS5sb2coJz09PSBDT09SREVOQURBUyBETyBERVNFTkhPIChQUk9OVEFTIFBBUkEgRU5WSU8pID09PScpXHJcbiAgICAgICAgY29uc29sZS5sb2coJ0ZlYXR1cmVSZWNvcmRTZXRMYXllciB2YWxpZGFkbyBlIHByb250byBwYXJhIGVudmlvJylcclxuICAgICAgICBjb25zb2xlLmxvZygnTsO6bWVybyBkZSBmZWF0dXJlczonLCBmZWF0dXJlUmVjb3JkU2V0TGF5ZXIuZmVhdHVyZXMubGVuZ3RoKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdOw7ptZXJvIGRlIHJpbmdzOicsIGZlYXR1cmVSZWNvcmRTZXRMYXllci5mZWF0dXJlc1swXS5nZW9tZXRyeS5yaW5ncy5sZW5ndGgpXHJcbiAgICAgICAgY29uc29sZS5sb2coJ1NwYXRpYWxSZWZlcmVuY2UgKHdraWQvbGF0ZXN0V2tpZCk6Jywgd2tpZCwgJy8nLCBsYXRlc3RXa2lkKVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIE1vc3RyYSB0b2RhcyBhcyBjb29yZGVuYWRhcyBkZXRhbGhhZGFtZW50ZVxyXG4gICAgICAgIGlmIChmZWF0dXJlUmVjb3JkU2V0TGF5ZXIuZmVhdHVyZXNbMF0uZ2VvbWV0cnkucmluZ3MpIHtcclxuICAgICAgICAgIGZlYXR1cmVSZWNvcmRTZXRMYXllci5mZWF0dXJlc1swXS5nZW9tZXRyeS5yaW5ncy5mb3JFYWNoKChyaW5nOiBudW1iZXJbXVtdLCByaW5nSW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgLS0tIFJpbmcgJHtyaW5nSW5kZXggKyAxfSAoJHtyaW5nLmxlbmd0aH0gcG9udG9zKSAtLS1gKVxyXG4gICAgICAgICAgICByaW5nLmZvckVhY2goKHBvaW50OiBudW1iZXJbXSwgcG9pbnRJbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coYCAgUG9udG8gJHtwb2ludEluZGV4ICsgMX06IFske3BvaW50WzBdfSwgJHtwb2ludFsxXX1dYClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLy8gTW9zdHJhIHNlIG8gcmluZyBlc3TDoSBmZWNoYWRvXHJcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0ID0gcmluZ1swXVxyXG4gICAgICAgICAgICBjb25zdCBsYXN0ID0gcmluZ1tyaW5nLmxlbmd0aCAtIDFdXHJcbiAgICAgICAgICAgIGNvbnN0IGlzQ2xvc2VkID0gZmlyc3RbMF0gPT09IGxhc3RbMF0gJiYgZmlyc3RbMV0gPT09IGxhc3RbMV1cclxuICAgICAgICAgICAgY29uc29sZS5sb2coYCAgUmluZyAke3JpbmdJbmRleCArIDF9IGVzdMOhIGZlY2hhZG86ICR7aXNDbG9zZWR9YClcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIE1vc3RyYSByZXN1bW8gZGFzIGNvb3JkZW5hZGFzXHJcbiAgICAgICAgaWYgKGZlYXR1cmVSZWNvcmRTZXRMYXllci5mZWF0dXJlc1swXS5nZW9tZXRyeS5yaW5ncyAmJiBmZWF0dXJlUmVjb3JkU2V0TGF5ZXIuZmVhdHVyZXNbMF0uZ2VvbWV0cnkucmluZ3MubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgY29uc3QgZmlyc3RSaW5nID0gZmVhdHVyZVJlY29yZFNldExheWVyLmZlYXR1cmVzWzBdLmdlb21ldHJ5LnJpbmdzWzBdXHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnLS0tIFJlc3VtbyBkYXMgQ29vcmRlbmFkYXMgLS0tJylcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGBUb3RhbCBkZSBwb250b3Mgbm8gcHJpbWVpcm8gcmluZzogJHtmaXJzdFJpbmcubGVuZ3RofWApXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhgUHJpbWVpcm8gcG9udG86IFske2ZpcnN0UmluZ1swXVswXX0sICR7Zmlyc3RSaW5nWzBdWzFdfV1gKVxyXG4gICAgICAgICAgY29uc29sZS5sb2coYMOabHRpbW8gcG9udG86IFske2ZpcnN0UmluZ1tmaXJzdFJpbmcubGVuZ3RoIC0gMV1bMF19LCAke2ZpcnN0UmluZ1tmaXJzdFJpbmcubGVuZ3RoIC0gMV1bMV19XWApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEVudmlhIGNvbW8gc3RyaW5nIEpTT04gdXNhbmRvIG8gbm9tZSBjb3JyZXRvIGRvIHBhcsOibWV0cm9cclxuICAgICAgICBjb25zdCBnZW9tZXRyeVZhbHVlID0gSlNPTi5zdHJpbmdpZnkoZmVhdHVyZVJlY29yZFNldExheWVyKVxyXG4gICAgICAgIHBhcmFtc1tnZW9tZXRyeVBhcmFtTmFtZV0gPSBnZW9tZXRyeVZhbHVlXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc29sZS5sb2coJ0dlb21ldHJpYSBhZGljaW9uYWRhIGFvIHBhcsOibWV0cm86JywgZ2VvbWV0cnlQYXJhbU5hbWUpXHJcbiAgICAgICAgY29uc29sZS5sb2coJ1RhbWFuaG8gZG8gSlNPTjonLCBnZW9tZXRyeVZhbHVlLmxlbmd0aCwgJ2NhcmFjdGVyZXMnKVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBQcmVwYXJhIGZvcm0gZGF0YVxyXG4gICAgICBsZXQgcmVxdWVzdEJvZHk6IEZvcm1EYXRhIHwgVVJMU2VhcmNoUGFyYW1zXHJcbiAgICAgIGxldCBjb250ZW50VHlwZTogc3RyaW5nXHJcblxyXG4gICAgICAvLyBJTVBPUlRBTlRFOiBQYXJhIEdQRmVhdHVyZVJlY29yZFNldExheWVyLCBzZW1wcmUgdXNhIEZvcm1EYXRhIHBhcmEgZ2FyYW50aXIgcXVlIG8gSlNPTiBzZWphIGVudmlhZG8gY29ycmV0YW1lbnRlXHJcbiAgICAgIC8vIFVSTFNlYXJjaFBhcmFtcyBwb2RlIGNvZGlmaWNhciBvIEpTT04gZGUgZm9ybWEgaW5jb3JyZXRhIHBhcmEgYWxndW5zIHNlcnZpZG9yZXNcclxuICAgICAgY29uc3QgaGFzR2VvbWV0cnkgPSAhIXRoaXMuc3RhdGUuZHJhd25HZW9tZXRyeSB8fCAhIXRoaXMuc3RhdGUuc2hhcGVmaWxlR2VvbWV0cnlcclxuXHJcbiAgICAgIGlmIChoYXNHZW9tZXRyeSkge1xyXG4gICAgICAgIC8vIFVzYSBGb3JtRGF0YSBwYXJhIG11bHRpcGFydC9mb3JtLWRhdGEgKHBlcm1pdGUgZW52aWFyIGdlb21ldHJpYSlcclxuICAgICAgICByZXF1ZXN0Qm9keSA9IG5ldyBGb3JtRGF0YSgpXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gSU1QT1JUQU5URTogQWRpY2lvbmEgb3MgcGFyw6JtZXRyb3MgbmEgb3JkZW0gY29ycmV0YVxyXG4gICAgICAgIC8vIFByaW1laXJvIG9zIHBhcsOibWV0cm9zIHNpbXBsZXMgKElERUEsIHF1YW50aWRhZGUpXHJcbiAgICAgICAgT2JqZWN0LmtleXMocGFyYW1zKS5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICAgICAgICAvLyBBZGljaW9uYSB0b2RvcyBvcyBwYXLDom1ldHJvcywgaW5jbHVpbmRvIGdlb21ldHJpYSBjb21vIHN0cmluZyBKU09OXHJcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IFN0cmluZyhwYXJhbXNba2V5XSlcclxuICAgICAgICAgIHJlcXVlc3RCb2R5LmFwcGVuZChrZXksIHZhbHVlKVxyXG4gICAgICAgICAgaWYgKGtleSA9PT0gZ2VvbWV0cnlQYXJhbU5hbWUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYEdlb21ldHJpYSBhZGljaW9uYWRhIGFvIEZvcm1EYXRhOiAke2tleX0gKCR7dmFsdWUubGVuZ3RofSBjYXJhY3RlcmVzKWApXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgUGFyw6JtZXRybyBhZGljaW9uYWRvIGFvIEZvcm1EYXRhOiAke2tleX0gPSAke3ZhbHVlfWApXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgICAgICAvLyBJTVBPUlRBTlRFOiBUb2tlbiBlIGY9anNvbiBubyBib2R5IGRvIEZvcm1EYXRhIChuw6NvIG5hIFVSTCBwYXJhIFBPU1QpXHJcbiAgICAgICAgLy8gSXNzbyBzZSBhcGxpY2EgdGFudG8gcGFyYSBzaGFwZWZpbGUgcXVhbnRvIHBhcmEgc2tldGNoXHJcbiAgICAgICAgaWYgKHRva2VuKSB7XHJcbiAgICAgICAgICByZXF1ZXN0Qm9keS5hcHBlbmQoJ3Rva2VuJywgdG9rZW4pXHJcbiAgICAgICAgICBjb25zb2xlLmxvZygn4pyTIFRva2VuIGFkaWNpb25hZG8gYW8gRm9ybURhdGEgYm9keSAoTsODTyBuYSBVUkwpJylcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdUb2tlbiBubyBGb3JtRGF0YSAodmVyaWZpY2HDp8Ojbyk6JywgcmVxdWVzdEJvZHkuaGFzKCd0b2tlbicpKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCfimqAgQVRFTsOHw4NPOiBUb2tlbiBuw6NvIGVzdMOhIGRpc3BvbsOtdmVsIHBhcmEgYWRpY2lvbmFyIGFvIEZvcm1EYXRhIScpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEFkaWNpb25hIGY9anNvbiBubyBib2R5IHRhbWLDqW1cclxuICAgICAgICByZXF1ZXN0Qm9keS5hcHBlbmQoJ2YnLCAnanNvbicpXHJcbiAgICAgICAgY29uc29sZS5sb2coJ+KckyBmPWpzb24gYWRpY2lvbmFkbyBhbyBGb3JtRGF0YSBib2R5JylcclxuICAgICAgICBcclxuICAgICAgICAvLyBOw4NPIGRlZmluZSBDb250ZW50LVR5cGUgbWFudWFsbWVudGUgLSBvIGJyb3dzZXIgZGVmaW5lIGF1dG9tYXRpY2FtZW50ZSBjb20gYm91bmRhcnlcclxuICAgICAgICBjb250ZW50VHlwZSA9ICdtdWx0aXBhcnQvZm9ybS1kYXRhJ1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdGb3JtRGF0YSBwcmVwYXJhZG8gY29tJywgT2JqZWN0LmtleXMocGFyYW1zKS5sZW5ndGgsICdwYXLDom1ldHJvcyArIHRva2VuICsgZj1qc29uJylcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBVc2EgVVJMU2VhcmNoUGFyYW1zIHBhcmEgYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkIChzZW0gZ2VvbWV0cmlhIG5lbSBhcnF1aXZvKVxyXG4gICAgICAgIHJlcXVlc3RCb2R5ID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gSU1QT1JUQU5URTogVG9rZW4gZSBmPWpzb24gbm8gYm9keSBkbyBVUkxTZWFyY2hQYXJhbXMgKG7Do28gbmEgVVJMIHBhcmEgUE9TVClcclxuICAgICAgICAvLyBJc3NvIHNlIGFwbGljYSB0YW50byBwYXJhIHNoYXBlZmlsZSBxdWFudG8gcGFyYSBza2V0Y2hcclxuICAgICAgICByZXF1ZXN0Qm9keS5hcHBlbmQoJ2YnLCAnanNvbicpXHJcbiAgICAgICAgY29uc29sZS5sb2coJ+KckyBmPWpzb24gYWRpY2lvbmFkbyBhbyBVUkxTZWFyY2hQYXJhbXMgYm9keScpXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHRva2VuKSB7XHJcbiAgICAgICAgICByZXF1ZXN0Qm9keS5hcHBlbmQoJ3Rva2VuJywgdG9rZW4pXHJcbiAgICAgICAgICBjb25zb2xlLmxvZygn4pyTIFRva2VuIGFkaWNpb25hZG8gYW8gVVJMU2VhcmNoUGFyYW1zIGJvZHkgKE7Dg08gbmEgVVJMKScpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ+KaoCBBVEVOw4fDg086IFRva2VuIG7Do28gZXN0w6EgZGlzcG9uw612ZWwgcGFyYSBhZGljaW9uYXIgYW8gVVJMU2VhcmNoUGFyYW1zIScpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEFkaWNpb25hIG9zIG91dHJvcyBwYXLDom1ldHJvc1xyXG4gICAgICAgIE9iamVjdC5rZXlzKHBhcmFtcykuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICAgICAgcmVxdWVzdEJvZHkuYXBwZW5kKGtleSwgU3RyaW5nKHBhcmFtc1trZXldKSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnRlbnRUeXBlID0gJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcclxuICAgICAgICBjb25zb2xlLmxvZygnVVJMU2VhcmNoUGFyYW1zIHByZXBhcmFkbyBjb20nLCBPYmplY3Qua2V5cyhwYXJhbXMpLmxlbmd0aCwgJ3BhcsOibWV0cm9zICsgdG9rZW4gKyBmPWpzb24nKVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBVUkwgZG8gc3VibWl0Sm9iIChhc3PDrW5jcm9uYSkgLSB1c2FuZG8gYSBVUkwgZm9ybmVjaWRhIHBlbG8gdXN1w6FyaW9cclxuICAgICAgY29uc3QgdGFza05hbWVFbmNvZGVkID0gZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMuR1BfVEFTS19OQU1FKVxyXG4gICAgICBjb25zdCBzdWJtaXRKb2JVcmwgPSBgJHt0aGlzLkdQX1NFUlZJQ0VfVVJMfS8ke3Rhc2tOYW1lRW5jb2RlZH0vc3VibWl0Sm9iYFxyXG5cclxuICAgICAgLy8gSU1QT1JUQU5URTogUGFyYSBQT1NULCBvIHRva2VuIGRldmUgaXIgbm8gQk9EWSwgbsOjbyBuYSBVUkxcclxuICAgICAgLy8gVVJMIGxpbXBhLCBzZW0gcXVlcnkgcGFyYW1ldGVycyAoaW5jbHVpbmRvIHRva2VuKVxyXG4gICAgICBjb25zdCBmaW5hbFVybCA9IHN1Ym1pdEpvYlVybFxyXG4gICAgICBjb25zb2xlLmxvZygnVVJMIGZpbmFsIChsaW1wYSwgc2VtIHF1ZXJ5IHBhcmFtcyBlIHNlbSB0b2tlbik6JywgZmluYWxVcmwpXHJcbiAgICAgIGNvbnNvbGUubG9nKCfinJMgVG9rZW4gc2Vyw6EgZW52aWFkbyBBUEVOQVMgbm8gYm9keSwgbsOjbyBuYSBVUkwnKVxyXG5cclxuICAgICAgY29uc3QgaGVhZGVyczogYW55ID0ge31cclxuICAgICAgLy8gSU1QT1JUQU5URTogUGFyYSBGb3JtRGF0YSwgTlVOQ0EgZGVmaW5lIENvbnRlbnQtVHlwZSBtYW51YWxtZW50ZVxyXG4gICAgICAvLyBPIGJyb3dzZXIgZGVmaW5lIGF1dG9tYXRpY2FtZW50ZSBjb20gYm91bmRhcnkgY29ycmV0b1xyXG4gICAgICAvLyBTZSBkZWZpbmlyIG1hbnVhbG1lbnRlLCBvIGJvdW5kYXJ5IHNlcsOhIGluY29ycmV0byBlIGNhdXNhcsOhIGVycm8gXCJFcnJvciBwYXJzaW5nIG11bHRpLXBhcnQgcmVxdWVzdFwiXHJcbiAgICAgIGlmICghdGhpcy5zdGF0ZS5zaGFwZWZpbGVHZW9tZXRyeSAmJiAhdGhpcy5zdGF0ZS5kcmF3bkdlb21ldHJ5KSB7XHJcbiAgICAgICAgLy8gUGFyYSBVUkxTZWFyY2hQYXJhbXMsIGRlZmluZSBDb250ZW50LVR5cGUgZXhwbGljaXRhbWVudGVcclxuICAgICAgICBoZWFkZXJzWydDb250ZW50LVR5cGUnXSA9ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXHJcbiAgICAgIH1cclxuICAgICAgLy8gUGFyYSBGb3JtRGF0YSwgbsOjbyBkZWZpbmUgQ29udGVudC1UeXBlIC0gbyBicm93c2VyIGZheiBpc3NvIGF1dG9tYXRpY2FtZW50ZVxyXG5cclxuICAgICAgY29uc29sZS5sb2coJ0VudmlhbmRvIHJlcXVpc2nDp8OjbyBwYXJhOicsIGZpbmFsVXJsKVxyXG4gICAgICBjb25zb2xlLmxvZygnUGFyw6JtZXRyb3M6JywgcGFyYW1zKVxyXG4gICAgICBjb25zb2xlLmxvZygnVG9rZW4gbm8gYm9keTonLCAhIXRva2VuKVxyXG4gICAgICBpZiAodGhpcy5zdGF0ZS5zaGFwZWZpbGVHZW9tZXRyeSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdHZW9tZXRyaWEgZG8gc2hhcGVmaWxlIGEgdXNhcicpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFBhcmEgdXBsb2FkIGRlIGFycXVpdm8sIHBvZGUgcHJlY2lzYXIgZGUgY3JlZGVudGlhbHNcclxuICAgICAgY29uc3QgZmV0Y2hPcHRpb25zOiBSZXF1ZXN0SW5pdCA9IHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxyXG4gICAgICAgIGJvZHk6IHJlcXVlc3RCb2R5LFxyXG4gICAgICAgIC8vIE1VREFOw4dBOiBVc2FyICdmb2xsb3cnIGFvIGludsOpcyBkZSAnbWFudWFsJyBwYXJhIHBlcm1pdGlyIHJlZGlyZWN0c1xyXG4gICAgICAgIC8vIFNlIG8gc2Vydmlkb3IgcmVkaXJlY2lvbmFyLCBzZWd1aXJlbW9zIG8gcmVkaXJlY3QgZSB2ZXJlbW9zIGEgcmVzcG9zdGEgZmluYWxcclxuICAgICAgICByZWRpcmVjdDogJ2ZvbGxvdycgYXMgUmVxdWVzdFJlZGlyZWN0LFxyXG4gICAgICAgIC8vIEluY2x1aSBjcmVkZW50aWFscyBwYXJhIHJlcXVpc2nDp8O1ZXMgY3Jvc3Mtb3JpZ2luXHJcbiAgICAgICAgY3JlZGVudGlhbHM6ICdvbWl0JyAvLyBOw6NvIGluY2x1aSBjb29raWVzLCBhcGVuYXMgbyB0b2tlbiBuYSBVUkwvYm9keVxyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgcmVzcG9uc2U6IFJlc3BvbnNlXHJcbiAgICAgIGxldCByZXN1bHQ6IGFueVxyXG5cclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnPT09IElOw41DSU8gREEgUkVRVUlTScOHw4NPID09PScpXHJcbiAgICAgICAgY29uc29sZS5sb2coJ1VSTDonLCBmaW5hbFVybClcclxuICAgICAgICBjb25zb2xlLmxvZygnVG9rZW4gcHJlc2VudGUgbmEgVVJMOicsIGZpbmFsVXJsLmluY2x1ZGVzKCd0b2tlbj0nKSwgJyhkZXZlIHNlciBmYWxzZSknKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdUb2tlbiBubyBib2R5OicsIHJlcXVlc3RCb2R5IGluc3RhbmNlb2YgRm9ybURhdGEgPyByZXF1ZXN0Qm9keS5oYXMoJ3Rva2VuJykgOiAocmVxdWVzdEJvZHkgYXMgVVJMU2VhcmNoUGFyYW1zKS5oYXMoJ3Rva2VuJykpXHJcbiAgICAgICAgY29uc29sZS5sb2coJ03DqXRvZG86JywgZmV0Y2hPcHRpb25zLm1ldGhvZClcclxuICAgICAgICBjb25zb2xlLmxvZygnSGVhZGVyczonLCBoZWFkZXJzKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdCb2R5IHR5cGU6JywgcmVxdWVzdEJvZHkgaW5zdGFuY2VvZiBGb3JtRGF0YSA/ICdGb3JtRGF0YScgOiAnVVJMU2VhcmNoUGFyYW1zJylcclxuICAgICAgICBcclxuICAgICAgICByZXNwb25zZSA9IGF3YWl0IGZldGNoKGZpbmFsVXJsLCBmZXRjaE9wdGlvbnMpXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc29sZS5sb2coJz09PSBSRVNQT1NUQSBSRUNFQklEQSA9PT0nKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdTdGF0dXM6JywgcmVzcG9uc2Uuc3RhdHVzKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdTdGF0dXMgVGV4dDonLCByZXNwb25zZS5zdGF0dXNUZXh0KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdVUkwgZmluYWw6JywgcmVzcG9uc2UudXJsKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdSZWRpcmVjdGVkOicsIHJlc3BvbnNlLnJlZGlyZWN0ZWQpXHJcbiAgICAgICAgY29uc29sZS5sb2coJ1R5cGU6JywgcmVzcG9uc2UudHlwZSlcclxuICAgICAgICBcclxuICAgICAgICAvLyBWZXJpZmljYSBzZSBhIHJlc3Bvc3RhIGZvaSB1bSByZWRpcmVjdCBwYXJhIGxvZ2luXHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLnJlZGlyZWN0ZWQgJiYgcmVzcG9uc2UudXJsLmluY2x1ZGVzKCcvbG9naW4nKSkge1xyXG4gICAgICAgICAgY29uc3QgZXJyb3JNc2cgPSAnTyBzZXJ2aWRvciByZWRpcmVjaW9ub3UgcGFyYSBhIHDDoWdpbmEgZGUgbG9naW4uIE8gdG9rZW4gcG9kZSBlc3RhciBleHBpcmFkbyBvdSBpbnbDoWxpZG8uXFxuXFxuJyArXHJcbiAgICAgICAgICAgICdWZXJpZmlxdWUgc2UgbyB0b2tlbiBmb3JuZWNpZG8gYWluZGEgw6kgdsOhbGlkbyBlIHRlbSBwZXJtaXNzw6NvIHBhcmEgYWNlc3NhciBlc3RlIHNlcnZpw6dvLidcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JNc2cpXHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdVUkwgZGUgcmVkaXJlY2lvbmFtZW50bzonLCByZXNwb25zZS51cmwpXHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JNc2cpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFZlcmlmaWNhIHN0YXR1cyBIVFRQIGRlIGVycm9cclxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID49IDMwMCAmJiByZXNwb25zZS5zdGF0dXMgPCA0MDApIHtcclxuICAgICAgICAgIGNvbnN0IGxvY2F0aW9uID0gcmVzcG9uc2UuaGVhZGVycy5nZXQoJ0xvY2F0aW9uJylcclxuICAgICAgICAgIGNvbnNvbGUud2FybignU3RhdHVzIGRlIHJlZGlyZWNpb25hbWVudG86JywgcmVzcG9uc2Uuc3RhdHVzKVxyXG4gICAgICAgICAgY29uc29sZS53YXJuKCdMb2NhdGlvbiBoZWFkZXI6JywgbG9jYXRpb24pXHJcbiAgICAgICAgICBpZiAobG9jYXRpb24gJiYgKGxvY2F0aW9uLmluY2x1ZGVzKCcvbG9naW4nKSB8fCBsb2NhdGlvbi5pbmNsdWRlcygnbG9naW4nKSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdPIHNlcnZpZG9yIHJlZGlyZWNpb25vdSBwYXJhIGEgcMOhZ2luYSBkZSBsb2dpbi4gTyB0b2tlbiBuw6NvIGVzdMOhIHNlbmRvIGFjZWl0by5cXG5cXG4nICtcclxuICAgICAgICAgICAgICAnUG9zc8OtdmVpcyBjYXVzYXM6XFxuJyArXHJcbiAgICAgICAgICAgICAgJzEuIFRva2VuIGV4cGlyYWRvIG91IGludsOhbGlkb1xcbicgK1xyXG4gICAgICAgICAgICAgICcyLiBUb2tlbiBuw6NvIHRlbSBwZXJtaXNzw6NvIHBhcmEgZXN0ZSBzZXJ2acOnb1xcbicgK1xyXG4gICAgICAgICAgICAgICczLiBTZXJ2aWRvciByZXF1ZXIgYXV0ZW50aWNhw6fDo28gYWRpY2lvbmFsXFxuXFxuJyArXHJcbiAgICAgICAgICAgICAgJ1BvciBmYXZvciwgdmVyaWZpcXVlIG8gdG9rZW4gZm9ybmVjaWRvLicpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBUZW50YSBsZXIgY29tbyBKU09OXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG4gICAgICB9IGNhdGNoIChqc29uRXJyb3IpIHtcclxuICAgICAgICAgIC8vIFNlIG7Do28gZm9yIEpTT04sIGzDqiBjb21vIHRleHRvXHJcbiAgICAgICAgICBjb25zdCB0ZXh0UmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpXHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdSZXNwb3N0YSBuw6NvIMOpIEpTT046JywgdGV4dFJlc3VsdClcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLy8gVmVyaWZpY2Egc2Ugw6kgdW0gZXJybyBkZSBDT1JTIG91IGF1dGVudGljYcOnw6NvXHJcbiAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAwIHx8IHJlc3BvbnNlLnR5cGUgPT09ICdvcGFxdWUnKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRXJybyBkZSBDT1JTOiBOw6NvIGZvaSBwb3Nzw612ZWwgYWNlc3NhciBvIHNlcnZpZG9yLiBWZXJpZmlxdWUgc2Ugdm9jw6ogZXN0w6EgYXV0ZW50aWNhZG8gZSBzZSBvIHNlcnZpZG9yIHBlcm1pdGUgcmVxdWlzacOnw7VlcyBkbyBzZXUgZG9tw61uaW8uJylcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMzAyIHx8IHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxIHx8IHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAzKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRXJybyBkZSBhdXRlbnRpY2HDp8OjbzogTyBzZXJ2aWRvciByZXF1ZXIgYXV0ZW50aWNhw6fDo28uIFZlcmlmaXF1ZSBzZSB2b2PDqiBlc3TDoSBsb2dhZG8gZSBzZSBvIHRva2VuIMOpIHbDoWxpZG8uJylcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvIEhUVFAgJHtyZXNwb25zZS5zdGF0dXN9OiAke3RleHRSZXN1bHQuc3Vic3RyaW5nKDAsIDIwMCl9YClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LmVycm9yKSB7XHJcbiAgICAgICAgICAgIC8vIFRyYXRhIGVycm8gZGUgdG9rZW4gaW52w6FsaWRvIGVzcGVjaWZpY2FtZW50ZVxyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmVycm9yLmNvZGUgPT09IDQ5OCB8fCByZXN1bHQuZXJyb3IuY29kZSA9PT0gNDAxIHx8IHJlc3VsdC5lcnJvci5tZXNzYWdlPy5pbmNsdWRlcygnSW52YWxpZCBUb2tlbicpKSB7XHJcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUb2tlbiBpbnbDoWxpZG8gb3UgZXhwaXJhZG8gKGPDs2RpZ28gNDk4KS4gUG9yIGZhdm9yLCBmYcOnYSBsb2dpbiBub3ZhbWVudGUgbm8gc2Vydmlkb3IgQXJjR0lTIGUgdGVudGUgbm92YW1lbnRlLicpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvIG5hIEdQOiAke3Jlc3VsdC5lcnJvci5tZXNzYWdlIHx8IEpTT04uc3RyaW5naWZ5KHJlc3VsdC5lcnJvcil9YClcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJybyBIVFRQOiAke3Jlc3BvbnNlLnN0YXR1c30gJHtyZXNwb25zZS5zdGF0dXNUZXh0fWApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFZlcmlmaWNhIHNlIGjDoSBlcnJvIG1lc21vIGNvbSBzdGF0dXMgT0sgKGFsZ3VucyBzZXJ2aWRvcmVzIHJldG9ybmFtIDIwMCBjb20gZXJybylcclxuICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5lcnJvcikge1xyXG4gICAgICAgICAgaWYgKHJlc3VsdC5lcnJvci5jb2RlID09PSA0OTggfHwgcmVzdWx0LmVycm9yLmNvZGUgPT09IDQwMSB8fCByZXN1bHQuZXJyb3IubWVzc2FnZT8uaW5jbHVkZXMoJ0ludmFsaWQgVG9rZW4nKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Rva2VuIGludsOhbGlkbyBvdSBleHBpcmFkbyAoY8OzZGlnbyA0OTgpLiBQb3IgZmF2b3IsIGZhw6dhIGxvZ2luIG5vdmFtZW50ZSBubyBzZXJ2aWRvciBBcmNHSVMgZSB0ZW50ZSBub3ZhbWVudGUuJylcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJybyBuYSBHUDogJHtyZXN1bHQuZXJyb3IubWVzc2FnZSB8fCBKU09OLnN0cmluZ2lmeShyZXN1bHQuZXJyb3IpfWApXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChmZXRjaEVycm9yKSB7XHJcbiAgICAgICAgLy8gVHJhdGEgZXJyb3MgZGUgcmVkZS9DT1JTXHJcbiAgICAgICAgaWYgKGZldGNoRXJyb3IubmFtZSA9PT0gJ1R5cGVFcnJvcicgJiYgZmV0Y2hFcnJvci5tZXNzYWdlLmluY2x1ZGVzKCdGYWlsZWQgdG8gZmV0Y2gnKSkge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJybyBkZSByZWRlL0NPUlM6JywgZmV0Y2hFcnJvcilcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRXJybyBkZSBjb25leMOjbzogTsOjbyBmb2kgcG9zc8OtdmVsIGNvbmVjdGFyIGFvIHNlcnZpZG9yLiBJc3NvIHBvZGUgc2VyIGNhdXNhZG8gcG9yOlxcbicgK1xyXG4gICAgICAgICAgICAnMS4gUHJvYmxlbWEgZGUgQ09SUyAoQ3Jvc3MtT3JpZ2luIFJlc291cmNlIFNoYXJpbmcpXFxuJyArXHJcbiAgICAgICAgICAgICcyLiBTZXJ2aWRvciByZXF1ZXIgYXV0ZW50aWNhw6fDo28gYWRpY2lvbmFsXFxuJyArXHJcbiAgICAgICAgICAgICczLiBUb2tlbiBkZSBhdXRlbnRpY2HDp8OjbyBleHBpcmFkbyBvdSBpbnbDoWxpZG9cXG4nICtcclxuICAgICAgICAgICAgJzQuIFNlcnZpZG9yIHRlbXBvcmFyaWFtZW50ZSBpbmRpc3BvbsOtdmVsXFxuXFxuJyArXHJcbiAgICAgICAgICAgICdWZXJpZmlxdWUgbyBjb25zb2xlIGRvIG5hdmVnYWRvciAoRjEyKSBwYXJhIG1haXMgZGV0YWxoZXMuJylcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhyb3cgZmV0Y2hFcnJvclxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBWZXJpZmljYSBzZSByZWNlYmV1IGpvYklkXHJcbiAgICAgIGlmICghcmVzdWx0LmpvYklkKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOw6NvIGZvaSBwb3Nzw612ZWwgb2J0ZXIgam9iSWQgZGEgcmVzcG9zdGEnKVxyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBqb2JJZCA9IHJlc3VsdC5qb2JJZFxyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgam9iSWQsIHByb2dyZXNzOiA1IH0pIC8vIEpvYiBzdWJtZXRpZG8gLSA1JVxyXG5cclxuICAgICAgY29uc29sZS5sb2coJ0pvYiBJRCByZWNlYmlkbzonLCBqb2JJZClcclxuICAgICAgICBcclxuICAgICAgICAvLyBQb2xsaW5nIGRvIHN0YXR1cyBkbyBqb2JcclxuICAgICAgICBsZXQgYXR0ZW1wdHMgPSAwXHJcbiAgICAgIGNvbnN0IG1heEF0dGVtcHRzID0gMTIwIC8vIDIgbWludXRvc1xyXG4gICAgICAgIFxyXG4gICAgICAgIHdoaWxlIChhdHRlbXB0cyA8IG1heEF0dGVtcHRzKSB7XHJcbiAgICAgICAgYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDIwMDApKSAvLyBWZXJpZmljYSBhIGNhZGEgMiBzZWd1bmRvc1xyXG4gICAgICAgIGF0dGVtcHRzKytcclxuICAgICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGJhc2VVcmwgPSBzdWJtaXRKb2JVcmwucmVwbGFjZSgnL3N1Ym1pdEpvYicsICcnKVxyXG4gICAgICAgICAgY29uc3Qgc3RhdHVzVXJsID0gdG9rZW4gXHJcbiAgICAgICAgICAgID8gYCR7YmFzZVVybH0vam9icy8ke2pvYklkfT90b2tlbj0ke3Rva2VufSZmPWpzb25gXHJcbiAgICAgICAgICAgIDogYCR7YmFzZVVybH0vam9icy8ke2pvYklkfT9mPWpzb25gXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGNvbnN0IHN0YXR1c1Jlc3BvbnNlID0gYXdhaXQgZmV0Y2goc3RhdHVzVXJsKVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBpZiAoIXN0YXR1c1Jlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJybyBhbyB2ZXJpZmljYXIgc3RhdHVzIGRvIGpvYjogJHtzdGF0dXNSZXNwb25zZS5zdGF0dXN9YClcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGpvYlN0YXR1cyA9IGF3YWl0IHN0YXR1c1Jlc3BvbnNlLmpzb24oKVxyXG4gICAgICAgICAgY29uc29sZS5sb2coYFN0YXR1cyBkbyBqb2IgKHRlbnRhdGl2YSAke2F0dGVtcHRzfSk6YCwgam9iU3RhdHVzLmpvYlN0YXR1cylcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLy8gQ2FsY3VsYSBwcm9ncmVzc28gYmFzZWFkbyBuYXMgdGVudGF0aXZhcyAoNSUgYSA5NSUgZHVyYW50ZSBwb2xsaW5nKVxyXG4gICAgICAgICAgLy8gTyBwcm9ncmVzc28gYXVtZW50YSBncmFkdWFsbWVudGUgY29uZm9ybWUgYXMgdGVudGF0aXZhc1xyXG4gICAgICAgICAgY29uc3QgcHJvZ3Jlc3NQZXJjZW50ID0gTWF0aC5taW4oOTUsIDUgKyBNYXRoLmZsb29yKChhdHRlbXB0cyAvIG1heEF0dGVtcHRzKSAqIDkwKSlcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcm9ncmVzczogcHJvZ3Jlc3NQZXJjZW50IH0pXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGlmIChqb2JTdGF0dXMuam9iU3RhdHVzID09PSAnZXNyaUpvYlN1Y2NlZWRlZCcpIHtcclxuICAgICAgICAgICAgLy8gSm9iIGNvbXBsZXRhZG8gLSBzZW1wcmUgdmFpIHBhcmEgMTAwJSBxdWFuZG8gY29tcGxldGFcclxuICAgICAgICAgICAgLy8gTsOjbyBpbXBvcnRhIHF1YW50YXMgdGVudGF0aXZhcyBmb3JhbSBuZWNlc3PDoXJpYXNcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYEpvYiBjb21wbGV0YWRvIGFww7NzICR7YXR0ZW1wdHN9IHRlbnRhdGl2YXMuIEF0dWFsaXphbmRvIHBhcmEgMTAwJWApXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBBbmltYSBvIHByb2dyZXNzbyBhdMOpIDEwMCUgKGluY3JlbWVudGEgZ3JhZHVhbG1lbnRlIHNlIG5lY2Vzc8OhcmlvKVxyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50UHJvZ3Jlc3MgPSB0aGlzLnN0YXRlLnByb2dyZXNzXHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50UHJvZ3Jlc3MgPCAxMDApIHtcclxuICAgICAgICAgICAgICAvLyBJbmNyZW1lbnRhIGdyYWR1YWxtZW50ZSBhdMOpIDEwMCVcclxuICAgICAgICAgICAgICBjb25zdCBzdGVwcyA9IE1hdGguY2VpbCgoMTAwIC0gY3VycmVudFByb2dyZXNzKSAvIDUpIC8vIDUlIHBvciBzdGVwXHJcbiAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gc3RlcHM7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3UHJvZ3Jlc3MgPSBNYXRoLm1pbigxMDAsIGN1cnJlbnRQcm9ncmVzcyArIChpICogNSkpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcHJvZ3Jlc3M6IG5ld1Byb2dyZXNzIH0pXHJcbiAgICAgICAgICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgNTApKSAvLyA1MG1zIHBvciBzdGVwXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcm9ncmVzczogMTAwIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gT2J0w6ltIG9zIHJlc3VsdGFkb3NcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0VXJsID0gdG9rZW5cclxuICAgICAgICAgICAgICA/IGAke2Jhc2VVcmx9L2pvYnMvJHtqb2JJZH0vcmVzdWx0cz90b2tlbj0ke3Rva2VufSZmPWpzb25gXHJcbiAgICAgICAgICAgICAgOiBgJHtiYXNlVXJsfS9qb2JzLyR7am9iSWR9L3Jlc3VsdHM/Zj1qc29uYFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0UmVzcG9uc2UgPSBhd2FpdCBmZXRjaChyZXN1bHRVcmwpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoIXJlc3VsdFJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvIGFvIG9idGVyIHJlc3VsdGFkb3M6ICR7cmVzdWx0UmVzcG9uc2Uuc3RhdHVzfWApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGF3YWl0IHJlc3VsdFJlc3BvbnNlLmpzb24oKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUmVzdWx0YWRvIGRhIGV4ZWN1w6fDo28gYXNzw61uY3JvbmE6JywgcmVzdWx0KVxyXG4gICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChqb2JTdGF0dXMuam9iU3RhdHVzID09PSAnZXNyaUpvYkZhaWxlZCcpIHtcclxuICAgICAgICAgICAgLy8gRXh0cmFpIG1lbnNhZ2VucyBkZSBlcnJvIG1haXMgZGV0YWxoYWRhc1xyXG4gICAgICAgICAgICBsZXQgZXJyb3JNZXNzYWdlID0gJ0pvYiBmYWxob3UnXHJcbiAgICAgICAgICAgIGlmIChqb2JTdGF0dXMubWVzc2FnZXMgJiYgQXJyYXkuaXNBcnJheShqb2JTdGF0dXMubWVzc2FnZXMpKSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlcyA9IGpvYlN0YXR1cy5tZXNzYWdlc1xyXG4gICAgICAgICAgICAgICAgLmZpbHRlcigobXNnOiBhbnkpID0+IG1zZy50eXBlID09PSAnZXNyaUpvYk1lc3NhZ2VUeXBlRXJyb3InKVxyXG4gICAgICAgICAgICAgICAgLm1hcCgobXNnOiBhbnkpID0+IG1zZy5kZXNjcmlwdGlvbilcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICBpZiAoZXJyb3JNZXNzYWdlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UgPSBlcnJvck1lc3NhZ2VzLmpvaW4oJ1xcbicpXHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZSA9IEpTT04uc3RyaW5naWZ5KGpvYlN0YXR1cy5tZXNzYWdlcylcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoam9iU3RhdHVzLm1lc3NhZ2VzKSB7XHJcbiAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlID0gSlNPTi5zdHJpbmdpZnkoam9iU3RhdHVzLm1lc3NhZ2VzKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvIGRldGFsaGFkbyBkbyBqb2I6Jywgam9iU3RhdHVzLm1lc3NhZ2VzKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gTWVuc2FnZW0gbWFpcyBhbWlnw6F2ZWwgcGFyYSBvIHVzdcOhcmlvXHJcbiAgICAgICAgICAgIGlmIChlcnJvck1lc3NhZ2UuaW5jbHVkZXMoJ27Do28gcG9zc3VpIGdlb21ldHJpYXMgdsOhbGlkYXMnKSkge1xyXG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTyBhcnF1aXZvIFpJUCBuw6NvIGNvbnTDqW0gZ2VvbWV0cmlhcyB2w6FsaWRhcy5cXG5cXG4nICtcclxuICAgICAgICAgICAgICAgICdQb3IgZmF2b3IsIHZlcmlmaXF1ZSBzZTpcXG4nICtcclxuICAgICAgICAgICAgICAgICcxLiBPIGFycXVpdm8gWklQIGNvbnTDqW0gdW0gc2hhcGVmaWxlIGNvbXBsZXRvICguc2hwLCAuc2h4LCAuZGJmLCAucHJqKVxcbicgK1xyXG4gICAgICAgICAgICAgICAgJzIuIE8gc2hhcGVmaWxlIHBvc3N1aSBnZW9tZXRyaWFzIHbDoWxpZGFzIChwb2zDrWdvbm9zKVxcbicgK1xyXG4gICAgICAgICAgICAgICAgJzMuIE8gYXJxdWl2byBuw6NvIGVzdMOhIGNvcnJvbXBpZG9cXG5cXG4nICtcclxuICAgICAgICAgICAgICAgICdEZXRhbGhlcyB0w6ljbmljb3M6ICcgKyBlcnJvck1lc3NhZ2UpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBKb2IgZmFsaG91OiAke2Vycm9yTWVzc2FnZX1gKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGpvYlN0YXR1cy5qb2JTdGF0dXMgPT09ICdlc3JpSm9iQ2FuY2VsbGVkJykge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0pvYiBmb2kgY2FuY2VsYWRvJylcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgYXR0ZW1wdHMrK1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZiAoYXR0ZW1wdHMgPj0gbWF4QXR0ZW1wdHMpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RpbWVvdXQ6IE8gam9iIGRlbW9yb3UgbWFpcyBkZSAyIG1pbnV0b3MgcGFyYSBjb21wbGV0YXInKVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBQcm9jZXNzYSBvIHJlc3VsdGFkb1xyXG4gICAgICBsZXQgaHRtbFVybDogc3RyaW5nIHwgbnVsbCA9IG51bGxcclxuICAgICAgbGV0IHN1bW1hcnlUZXh0OiBzdHJpbmcgfCBudWxsID0gbnVsbFxyXG5cclxuICAgICAgY29uc29sZS5sb2coJz09PSBQUk9DVVJBTkRPIEhUTUwgTk9TIFJFU1VMVEFET1MgPT09JylcclxuICAgICAgY29uc29sZS5sb2coJ0VzdHJ1dHVyYSBjb21wbGV0YSBkbyByZXN1bHRhZG86JywgSlNPTi5zdHJpbmdpZnkocmVzdWx0LCBudWxsLCAyKSlcclxuICAgICAgY29uc29sZS5sb2coJ1RpcG8gZG8gcmVzdWx0YWRvOicsIEFycmF5LmlzQXJyYXkocmVzdWx0KSA/ICdBcnJheScgOiB0eXBlb2YgcmVzdWx0KVxyXG5cclxuICAgICAgLy8gSU1QT1JUQU5URTogTyByZXN1bHRhZG8gcG9kZSB2aXIgY29tbyBhcnJheSBkaXJldGFtZW50ZSBvdSBjb21vIG9iamV0byBjb20gcmVzdWx0c1xyXG4gICAgICBsZXQgcmVzdWx0c1RvQ2hlY2s6IGFueVtdID0gW11cclxuICAgICAgXHJcbiAgICAgIC8vIFNlIHJlc3VsdCDDqSB1bSBhcnJheSBkaXJldGFtZW50ZVxyXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShyZXN1bHQpKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1Jlc3VsdGFkbyDDqSB1bSBhcnJheSwgaXRlcmFuZG8gZGlyZXRhbWVudGUuLi4nKVxyXG4gICAgICAgIHJlc3VsdHNUb0NoZWNrID0gcmVzdWx0XHJcbiAgICAgIH1cclxuICAgICAgLy8gU2UgcmVzdWx0IHRlbSB1bWEgcHJvcHJpZWRhZGUgcmVzdWx0cyBxdWUgw6kgYXJyYXlcclxuICAgICAgZWxzZSBpZiAocmVzdWx0LnJlc3VsdHMgJiYgQXJyYXkuaXNBcnJheShyZXN1bHQucmVzdWx0cykpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnUmVzdWx0YWRvIHRlbSByZXN1bHRzIGNvbW8gYXJyYXknKVxyXG4gICAgICAgIHJlc3VsdHNUb0NoZWNrID0gcmVzdWx0LnJlc3VsdHNcclxuICAgICAgfVxyXG4gICAgICAvLyBTZSByZXN1bHQucmVzdWx0cyDDqSB1bSBvYmpldG8gKGZvcm1hdG8gYW50aWdvKVxyXG4gICAgICBlbHNlIGlmIChyZXN1bHQucmVzdWx0cyAmJiB0eXBlb2YgcmVzdWx0LnJlc3VsdHMgPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KHJlc3VsdC5yZXN1bHRzKSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdSZXN1bHRhZG8gdGVtIHJlc3VsdHMgY29tbyBvYmpldG8sIGNvbnZlcnRlbmRvIHBhcmEgYXJyYXkuLi4nKVxyXG4gICAgICAgIC8vIENvbnZlcnRlIG9iamV0byBwYXJhIGFycmF5IGRlIHZhbG9yZXNcclxuICAgICAgICByZXN1bHRzVG9DaGVjayA9IE9iamVjdC52YWx1ZXMocmVzdWx0LnJlc3VsdHMpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIEl0ZXJhIHNvYnJlIG9zIHJlc3VsdGFkb3NcclxuICAgICAgaWYgKHJlc3VsdHNUb0NoZWNrLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgVmVyaWZpY2FuZG8gJHtyZXN1bHRzVG9DaGVjay5sZW5ndGh9IHJlc3VsdGFkbyhzKS4uLmApXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHRzVG9DaGVjay5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgY29uc3QgcmVzdWx0SXRlbSA9IHJlc3VsdHNUb0NoZWNrW2ldXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhgLS0tIFZlcmlmaWNhbmRvIHJlc3VsdGFkbyAke2kgKyAxfSAtLS1gKVxyXG4gICAgICAgICAgY29uc29sZS5sb2coJ1Jlc3VsdEl0ZW0gY29tcGxldG86JywgSlNPTi5zdHJpbmdpZnkocmVzdWx0SXRlbSwgbnVsbCwgMikpXHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnVGlwbyBkbyByZXN1bHRJdGVtOicsIHR5cGVvZiByZXN1bHRJdGVtKVxyXG4gICAgICAgICAgY29uc29sZS5sb2coJ1RlbSB2YWx1ZT8nLCAhIXJlc3VsdEl0ZW0udmFsdWUpXHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnVGVtIHVybD8nLCAhIXJlc3VsdEl0ZW0udXJsKVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBpZiAocmVzdWx0SXRlbSkge1xyXG4gICAgICAgICAgICAvLyBWZXJpZmljYSBzZSB0ZW0gdmFsdWUgZGlyZXRhbWVudGVcclxuICAgICAgICAgICAgaWYgKHJlc3VsdEl0ZW0udmFsdWUpIHtcclxuICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHJlc3VsdEl0ZW0udmFsdWVcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVmFsdWUgZW5jb250cmFkbzonLCB0eXBlb2YgdmFsdWUsIHZhbHVlKVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIC8vIFNlIHZhbHVlIMOpIHVtYSBzdHJpbmcgY29tIC5odG1sXHJcbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUuaW5jbHVkZXMoJy5odG1sJykpIHtcclxuICAgICAgICAgICAgICAgIGh0bWxVcmwgPSB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYOKck+Kck+KckyBIVE1MIGVuY29udHJhZG8gZW0gcmVzdWx0YWRvWyR7aX1dLnZhbHVlIChzdHJpbmcpOmAsIGh0bWxVcmwpXHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAvLyBTZSB2YWx1ZSDDqSB1bSBvYmpldG8gY29tIHVybFxyXG4gICAgICAgICAgICAgIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVmFsdWUgw6kgdW0gb2JqZXRvLCB2ZXJpZmljYW5kbyBwcm9wcmllZGFkZXM6JywgT2JqZWN0LmtleXModmFsdWUpKVxyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLnVybCkge1xyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVmFsdWUudXJsIGVuY29udHJhZG86JywgdHlwZW9mIHZhbHVlLnVybCwgdmFsdWUudXJsKVxyXG4gICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlLnVybCA9PT0gJ3N0cmluZycgJiYgdmFsdWUudXJsLmluY2x1ZGVzKCcuaHRtbCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaHRtbFVybCA9IHZhbHVlLnVybFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGDinJPinJPinJMgSFRNTCBlbmNvbnRyYWRvIGVtIHJlc3VsdGFkb1ske2l9XS52YWx1ZS51cmw6YCwgaHRtbFVybClcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBWZXJpZmljYSBzZSB0ZW0gdXJsIGRpcmV0YW1lbnRlIG5vIHJlc3VsdEl0ZW1cclxuICAgICAgICAgICAgaWYgKHJlc3VsdEl0ZW0udXJsICYmIHR5cGVvZiByZXN1bHRJdGVtLnVybCA9PT0gJ3N0cmluZycgJiYgcmVzdWx0SXRlbS51cmwuaW5jbHVkZXMoJy5odG1sJykpIHtcclxuICAgICAgICAgICAgICBodG1sVXJsID0gcmVzdWx0SXRlbS51cmxcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhg4pyT4pyT4pyTIEhUTUwgZW5jb250cmFkbyBlbSByZXN1bHRhZG9bJHtpfV0udXJsOmAsIGh0bWxVcmwpXHJcbiAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gVmVyaWZpY2Egc2UgbyBwcsOzcHJpbyByZXN1bHRJdGVtIMOpIHVtYSBzdHJpbmcgY29tIC5odG1sXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcmVzdWx0SXRlbSA9PT0gJ3N0cmluZycgJiYgcmVzdWx0SXRlbS5pbmNsdWRlcygnLmh0bWwnKSkge1xyXG4gICAgICAgICAgICAgIGh0bWxVcmwgPSByZXN1bHRJdGVtXHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coYOKck+Kck+KckyBIVE1MIGVuY29udHJhZG8gZW0gcmVzdWx0YWRvWyR7aX1dIChzdHJpbmcgZGlyZXRhKTpgLCBodG1sVXJsKVxyXG4gICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKCfimqDvuI8gTmVuaHVtIHJlc3VsdGFkbyBwYXJhIHZlcmlmaWNhciEnKVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBGYWxsYmFjazogcHJvY3VyYSBlbSBvdXRyYXMgcHJvcHJpZWRhZGVzIGRvIHJlc3VsdGFkb1xyXG4gICAgICBpZiAoIWh0bWxVcmwpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnSFRNTCBuw6NvIGVuY29udHJhZG8gbm9zIHJlc3VsdHMsIHRlbnRhbmRvIGZhbGxiYWNrcy4uLicpXHJcbiAgICAgICAgaWYgKHJlc3VsdC5vdXRwdXRVcmwpIHtcclxuICAgICAgICAgIGh0bWxVcmwgPSByZXN1bHQub3V0cHV0VXJsXHJcbiAgICAgICAgICBjb25zb2xlLmxvZygn4pyTIEhUTUwgZW5jb250cmFkbyBlbSBvdXRwdXRVcmw6JywgaHRtbFVybClcclxuICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC51cmwpIHtcclxuICAgICAgICAgIGh0bWxVcmwgPSByZXN1bHQudXJsXHJcbiAgICAgICAgICBjb25zb2xlLmxvZygn4pyTIEhUTUwgZW5jb250cmFkbyBlbSB1cmw6JywgaHRtbFVybClcclxuICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5maWxlVXJsKSB7XHJcbiAgICAgICAgICBodG1sVXJsID0gcmVzdWx0LmZpbGVVcmxcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCfinJMgSFRNTCBlbmNvbnRyYWRvIGVtIGZpbGVVcmw6JywgaHRtbFVybClcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChodG1sVXJsKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ+KchSBVUkwgZG8gSFRNTCBlbmNvbnRyYWRhOicsIGh0bWxVcmwpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcign4p2MIEhUTUwgbsOjbyBlbmNvbnRyYWRvIG5vcyByZXN1bHRhZG9zIScpXHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXN0cnV0dXJhIGNvbXBsZXRhIGRvIHJlc3VsdGFkbyBwYXJhIGRlYnVnOicsIEpTT04uc3RyaW5naWZ5KHJlc3VsdCwgbnVsbCwgMikpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFRlbnRhIGV4dHJhaXIgbyByZXN1bW8gZG8gcmVsYXTDs3JpbyBIVE1MXHJcbiAgICAgIGlmIChodG1sVXJsKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIC8vIEFkaWNpb25hIHRva2VuIMOgIFVSTCBkbyBIVE1MIHNlIG5lY2Vzc8OhcmlvXHJcbiAgICAgICAgICBsZXQgaHRtbFVybFdpdGhUb2tlbiA9IGh0bWxVcmxcclxuICAgICAgICAgIGlmICh0b2tlbiAmJiAhaHRtbFVybC5pbmNsdWRlcygndG9rZW49JykpIHtcclxuICAgICAgICAgICAgY29uc3Qgc2VwYXJhdG9yID0gaHRtbFVybC5pbmNsdWRlcygnPycpID8gJyYnIDogJz8nXHJcbiAgICAgICAgICAgIGh0bWxVcmxXaXRoVG9rZW4gPSBgJHtodG1sVXJsfSR7c2VwYXJhdG9yfXRva2VuPSR7dG9rZW59YFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnVG9rZW4gYWRpY2lvbmFkbyDDoCBVUkwgZG8gSFRNTCcpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdBY2Vzc2FuZG8gSFRNTCBlbTonLCBodG1sVXJsV2l0aFRva2VuKVxyXG4gICAgICAgICAgY29uc3QgaHRtbFJlc3BvbnNlID0gYXdhaXQgZmV0Y2goaHRtbFVybFdpdGhUb2tlbilcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgaWYgKCFodG1sUmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJybyBhbyBhY2Vzc2FyIEhUTUw6JywgaHRtbFJlc3BvbnNlLnN0YXR1cywgaHRtbFJlc3BvbnNlLnN0YXR1c1RleHQpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJybyBhbyBhY2Vzc2FyIEhUTUw6ICR7aHRtbFJlc3BvbnNlLnN0YXR1c31gKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBjb25zdCBodG1sVGV4dCA9IGF3YWl0IGh0bWxSZXNwb25zZS50ZXh0KClcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdIVE1MIHJlY2ViaWRvLCB0YW1hbmhvOicsIGh0bWxUZXh0Lmxlbmd0aCwgJ2NhcmFjdGVyZXMnKVxyXG4gICAgICAgICAgY29uc29sZS5sb2coJ1ByaW1laXJvcyA1MDAgY2FyYWN0ZXJlcyBkbyBIVE1MOicsIGh0bWxUZXh0LnN1YnN0cmluZygwLCA1MDApKVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAvLyBSZW1vdmUgdGFncyBIVE1MIGUgbm9ybWFsaXphIGVzcGHDp29zXHJcbiAgICAgICAgICBjb25zdCB0ZXh0Q29udGVudCA9IGh0bWxUZXh0LnJlcGxhY2UoLzxbXj5dKj4vZywgJyAnKS5yZXBsYWNlKC9cXHMrL2csICcgJykudG9Mb3dlckNhc2UoKVxyXG4gICAgICAgICAgY29uc29sZS5sb2coJ1RleHRvIGV4dHJhw61kbyAocHJpbWVpcm9zIDIwMCBjYXJhY3RlcmVzKTonLCB0ZXh0Q29udGVudC5zdWJzdHJpbmcoMCwgMjAwKSlcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLy8gUHJvY3VyYSBwb3IgcGFkcsO1ZXMgcXVlIGluZGljYW0gc2UgYSDDoXJlYSDDqSBzdWZpY2llbnRlIG91IG7Do29cclxuICAgICAgICAgIGNvbnN0IHBhdHRlcm5zID0gW1xyXG4gICAgICAgICAgICAvw6FyZWFcXHMrKD86w6l8ZXN0w6EpXFxzK2luc3VmaWNpZW50ZS9pLFxyXG4gICAgICAgICAgICAvw6FyZWFcXHMraW5zdWZpY2llbnRlL2ksXHJcbiAgICAgICAgICAgIC9pbnN1ZmljaWVudGUuKj/DoXJlYS9pLFxyXG4gICAgICAgICAgICAvw6FyZWFcXHMrKD86w6l8ZXN0w6EpXFxzK3N1ZmljaWVudGUvaSxcclxuICAgICAgICAgICAgL8OhcmVhXFxzK3N1ZmljaWVudGUvaSxcclxuICAgICAgICAgICAgL3N1ZmljaWVudGUuKj/DoXJlYS9pLFxyXG4gICAgICAgICAgICAvY29tcGVuc2HDp8Ojby4qP2luc3VmaWNpZW50ZS9pLFxyXG4gICAgICAgICAgICAvY29tcGVuc2HDp8Ojby4qP3N1ZmljaWVudGUvaSxcclxuICAgICAgICAgICAgL27Do29cXHMrYXRlbmRlL2ksXHJcbiAgICAgICAgICAgIC9hdGVuZGUuKj9yZXF1aXNpdG9zL2lcclxuICAgICAgICAgIF1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgbGV0IGZvdW5kTWF0Y2ggPSBmYWxzZVxyXG4gICAgICAgICAgZm9yIChjb25zdCBwYXR0ZXJuIG9mIHBhdHRlcm5zKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoID0gaHRtbFRleHQubWF0Y2gocGF0dGVybilcclxuICAgICAgICAgICAgaWYgKG1hdGNoKSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1BhZHLDo28gZW5jb250cmFkbzonLCBwYXR0ZXJuLCAnTWF0Y2g6JywgbWF0Y2hbMF0pXHJcbiAgICAgICAgICAgICAgY29uc3QgaXNJbnN1ZmZpY2llbnQgPSAvaW5zdWZpY2llbnRlfG7Do29cXHMrYXRlbmRlL2kudGVzdChtYXRjaFswXSlcclxuICAgICAgICAgICAgICBzdW1tYXJ5VGV4dCA9IGlzSW5zdWZmaWNpZW50XHJcbiAgICAgICAgICAgICAgICA/ICfDgXJlYSBpbnN1ZmljaWVudGUgcGFyYSBjb21wZW5zYcOnw6NvLiBDb250aW51ZSBjb20gYSBhbsOhbGlzZSdcclxuICAgICAgICAgICAgICAgIDogJ8OBcmVhIHN1ZmljaWVudGUgcGFyYSBjb21wZW5zYcOnw6NvLidcclxuICAgICAgICAgICAgICBmb3VuZE1hdGNoID0gdHJ1ZVxyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSZXN1bW8gZXh0cmHDrWRvOicsIHN1bW1hcnlUZXh0KVxyXG4gICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLy8gU2UgbsOjbyBlbmNvbnRyb3UgcGFkcsOjbyBlc3BlY8OtZmljbywgcHJvY3VyYSBwb3IgcGFsYXZyYXMtY2hhdmVcclxuICAgICAgICAgIGlmICghZm91bmRNYXRjaCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnTmVuaHVtIHBhZHLDo28gZXNwZWPDrWZpY28gZW5jb250cmFkbywgcHJvY3VyYW5kbyBwYWxhdnJhcy1jaGF2ZS4uLicpXHJcbiAgICAgICAgICAgIGNvbnN0IGhhc0luc3VmZmljaWVudCA9IC9pbnN1ZmljaWVudGV8bsOjb1xccythdGVuZGUvaS50ZXN0KHRleHRDb250ZW50KVxyXG4gICAgICAgICAgICBjb25zdCBoYXNTdWZmaWNpZW50ID0gL3N1ZmljaWVudGV8YXRlbmRlL2kudGVzdCh0ZXh0Q29udGVudClcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUZW0gXCJpbnN1ZmljaWVudGVcIjonLCBoYXNJbnN1ZmZpY2llbnQpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUZW0gXCJzdWZpY2llbnRlXCI6JywgaGFzU3VmZmljaWVudClcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChoYXNJbnN1ZmZpY2llbnQgJiYgIWhhc1N1ZmZpY2llbnQpIHtcclxuICAgICAgICAgICAgICBzdW1tYXJ5VGV4dCA9ICfDgXJlYSBpbnN1ZmljaWVudGUgcGFyYSBjb21wZW5zYcOnw6NvJ1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSZXN1bW8gZGVmaW5pZG8gY29tbyBpbnN1ZmljaWVudGUnKVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGhhc1N1ZmZpY2llbnQgJiYgIWhhc0luc3VmZmljaWVudCkge1xyXG4gICAgICAgICAgICAgIHN1bW1hcnlUZXh0ID0gJ8OBcmVhIHN1ZmljaWVudGUgcGFyYSBjb21wZW5zYcOnw6NvJ1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSZXN1bW8gZGVmaW5pZG8gY29tbyBzdWZpY2llbnRlJylcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ07Do28gZm9pIHBvc3PDrXZlbCBkZXRlcm1pbmFyIHNlIGEgw6FyZWEgw6kgc3VmaWNpZW50ZSBvdSBpbnN1ZmljaWVudGUnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoaHRtbEVycm9yKSB7XHJcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ07Do28gZm9pIHBvc3PDrXZlbCBleHRyYWlyIHJlc3VtbyBkbyBIVE1MOicsIGh0bWxFcnJvcilcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIEF0dWFsaXphIG8gZXN0YWRvIGNvbSBvcyByZXN1bHRhZG9zXHJcbiAgICAgIC8vIFVzYSBhIFVSTCBjb20gdG9rZW4gc2UgZm9pIGFkaWNpb25hZG9cclxuICAgICAgY29uc3QgZmluYWxSZXBvcnRVcmwgPSBodG1sVXJsICYmIHRva2VuICYmICFodG1sVXJsLmluY2x1ZGVzKCd0b2tlbj0nKVxyXG4gICAgICAgID8gYCR7aHRtbFVybH0ke2h0bWxVcmwuaW5jbHVkZXMoJz8nKSA/ICcmJyA6ICc/J310b2tlbj0ke3Rva2VufWBcclxuICAgICAgICA6IGh0bWxVcmxcclxuICAgICAgXHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgIHByb2dyZXNzOiAxMDAsIC8vIEFuw6FsaXNlIGNvbXBsZXRhXHJcbiAgICAgICAgcmVwb3J0VXJsOiBmaW5hbFJlcG9ydFVybCxcclxuICAgICAgICBhbmFseXNpc1Jlc3VsdDogc3VtbWFyeVRleHQgPyB7XHJcbiAgICAgICAgICBzdWZmaWNpZW50OiAhc3VtbWFyeVRleHQudG9Mb3dlckNhc2UoKS5pbmNsdWRlcygnaW5zdWZpY2llbnRlJyksXHJcbiAgICAgICAgICBtZXNzYWdlOiBzdW1tYXJ5VGV4dFxyXG4gICAgICAgIH0gOiBudWxsXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICBpZiAoIWh0bWxVcmwpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCfinYwgQVRFTsOHw4NPOiBIVE1MIG7Do28gZm9pIGVuY29udHJhZG8hJylcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFc3RydXR1cmEgZG8gcmVzdWx0YWRvOicsIEpTT04uc3RyaW5naWZ5KHJlc3VsdCwgbnVsbCwgMikpXHJcbiAgICAgICAgYWxlcnQoJ0Fuw6FsaXNlIGNvbmNsdcOtZGEsIG1hcyBuw6NvIGZvaSBwb3Nzw612ZWwgZW5jb250cmFyIGEgVVJMIGRvIHJlbGF0w7NyaW8uIFZlcmlmaXF1ZSBvIGNvbnNvbGUgcGFyYSBtYWlzIGRldGFsaGVzLicpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ+KchSBIVE1MIGVuY29udHJhZG8gZSBzYWx2byBubyBlc3RhZG8uIEJvdMOjbyBkZSBiYWl4YXIgcmVsYXTDs3JpbyBkZXZlIGVzdGFyIGhhYmlsaXRhZG8uJylcclxuICAgICAgfVxyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm8gYW8gZXhlY3V0YXIgYW7DoWxpc2U6JywgZXJyb3IpXHJcbiAgICAgIGFsZXJ0KGBFcnJvIGFvIGV4ZWN1dGFyIGFuw6FsaXNlOiAke2Vycm9yLm1lc3NhZ2V9XFxuXFxuVmVyaWZpcXVlIG8gY29uc29sZSAoRjEyKSBwYXJhIG1haXMgZGV0YWxoZXMuYClcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIgKCkge1xyXG4gICAgY29uc3Qgc3R5bGUgPSBjc3NgXHJcbiAgICAgICYud2lkZ2V0LWNhbGN1bGFkb3JhLWxhcGEge1xyXG4gICAgICAgIC53aWRnZXQtY29udGFpbmVyIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgZ2FwOiAxMnB4O1xyXG4gICAgICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZm9ybS1ncm91cCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIGdhcDogOHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZm9ybS1ncm91cCBsYWJlbCB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgY29sb3I6ICMyMTIxMjE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlucHV0W3R5cGU9XCJudW1iZXJcIl0sXHJcbiAgICAgICAgaW5wdXRbdHlwZT1cInRleHRcIl0sXHJcbiAgICAgICAgaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xyXG4gICAgICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIGNvbG9yOiAjMjEyMTIxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbnB1dFt0eXBlPVwibnVtYmVyXCJdIHtcclxuICAgICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbnB1dFt0eXBlPVwiZmlsZVwiXSB7XHJcbiAgICAgICAgICBwYWRkaW5nOiA2cHggOHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaWRlYS1pbnB1dHMge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBnYXA6IDhweDtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmlkZWEtaW5wdXQtaXRlbSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGdhcDogOHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaWRlYS1pbnB1dC1pdGVtIGxhYmVsIHtcclxuICAgICAgICAgIG1pbi13aWR0aDogODBweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgIGNvbG9yOiAjMjEyMTIxO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaWRlYS1pbnB1dC1pdGVtIGlucHV0IHtcclxuICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICBwYWRkaW5nOiA4cHggMTZweDtcclxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICY6ZGlzYWJsZWQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xyXG4gICAgICAgICAgICBjb2xvcjogIzllOWU5ZTtcclxuICAgICAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmJ0bi1wcmltYXJ5IHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNjY2NDA7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFlNGYzMjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICY6ZGlzYWJsZWQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xyXG4gICAgICAgICAgICBjb2xvcjogIzllOWU5ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmJ0bi1zZWNvbmRhcnkge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI2NjY0MDtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICY6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWU0ZjMyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJjpkaXNhYmxlZCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjOWU5ZTllO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuYnRuLXN1Y2Nlc3Mge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcclxuICAgICAgICAgIGNvbG9yOiAjNDI0MjQyO1xyXG4gICAgICAgICAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNiZGJkYmQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMjEyMTIxO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJjpkaXNhYmxlZCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjOWU5ZTllO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuYnRuLWRhbmdlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xyXG4gICAgICAgICAgY29sb3I6ICM0MjQyNDI7XHJcbiAgICAgICAgICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2JkYmRiZDtcclxuICAgICAgICAgICAgY29sb3I6ICMyMTIxMjE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAmOmRpc2FibGVkIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcclxuICAgICAgICAgICAgY29sb3I6ICM5ZTllOWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5idXR0b24tZ3JvdXAge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGdhcDogOHB4O1xyXG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc3VtbWFyeS1ib3gge1xyXG4gICAgICAgICAgcGFkZGluZzogMTJweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc3VtbWFyeS1ib3guc3VmZmljaWVudCB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRlZGRhO1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2MzZTZjYjtcclxuICAgICAgICAgIGNvbG9yOiAjMTU1NzI0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc3VtbWFyeS1ib3guaW5zdWZmaWNpZW50IHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGQ3ZGE7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZjVjNmNiO1xyXG4gICAgICAgICAgY29sb3I6ICM3MjFjMjQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zcGlubmVyIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICBhbmltYXRpb246IHNwaW4gMC44cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgQGtleWZyYW1lcyBzcGluIHtcclxuICAgICAgICAgIHRvIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmZpbGUtaW5mbyB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICBjb2xvcjogIzY2NjtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmRyYXdpbmctaW5mbyB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICBjb2xvcjogIzAwNzljMTtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIGBcclxuXHJcbiAgICBjb25zdCBjYW5SdW5BbmFseXNpcyA9IFxyXG4gICAgICB0aGlzLnN0YXRlLmlkZWFWYWx1ZXMuZXZlcnkodmFsID0+IHZhbCAmJiB2YWwudHJpbSgpICE9PSAnJykgJiZcclxuICAgICAgKHRoaXMuc3RhdGUuc2hhcGVmaWxlR2VvbWV0cnkgfHwgdGhpcy5zdGF0ZS5kcmF3bkdlb21ldHJ5KSAmJlxyXG4gICAgICAhdGhpcy5zdGF0ZS5sb2FkaW5nXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY2FsY3VsYWRvcmEtbGFwYSBqaW11LXdpZGdldFwiIGNzcz17c3R5bGV9PlxyXG4gICAgICAgIHt0aGlzLnByb3BzLmhhc093blByb3BlcnR5KCd1c2VNYXBXaWRnZXRJZHMnKSAmJlxyXG4gICAgICAgICAgdGhpcy5wcm9wcy51c2VNYXBXaWRnZXRJZHMgJiZcclxuICAgICAgICAgIHRoaXMucHJvcHMudXNlTWFwV2lkZ2V0SWRzLmxlbmd0aCA9PT0gMSAmJiAoXHJcbiAgICAgICAgICAgIDxKaW11TWFwVmlld0NvbXBvbmVudFxyXG4gICAgICAgICAgICAgIHVzZU1hcFdpZGdldElkPXt0aGlzLnByb3BzLnVzZU1hcFdpZGdldElkcz8uWzBdfVxyXG4gICAgICAgICAgICAgIG9uQWN0aXZlVmlld0NoYW5nZT17KGptdjogSmltdU1hcFZpZXcpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICBqaW11TWFwVmlldzogam12XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGFpbmVyXCI+XHJcblxyXG4gICAgICAgICAgey8qIFF1YW50aWRhZGUgZGUgSURFQSAqL31cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAge2RlZmF1bHRNZXNzYWdlcy5xdWFudGlkYWRlSURFQX1cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgbWluPVwiMVwiXHJcbiAgICAgICAgICAgICAgbWF4PVwiMTBcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnF1YW50aWRhZGVJREVBfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVF1YW50aWRhZGVJREVBQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnN0YXRlLmxvYWRpbmd9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICB7LyogQ2FtcG9zIGRpbsOibWljb3MgZGUgSURFQSAqL31cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWRlYS1pbnB1dHNcIj5cclxuICAgICAgICAgICAge3RoaXMuc3RhdGUuaWRlYVZhbHVlcy5tYXAoKHZhbHVlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiaWRlYS1pbnB1dC1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+SURFQSB7aW5kZXggKyAxfTo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5oYW5kbGVJZGVhVmFsdWVDaGFuZ2UoaW5kZXgsIGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2BOw7ptZXJvIElERUEgJHtpbmRleCArIDF9YH1cclxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMuc3RhdGUubG9hZGluZ31cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgey8qIFVwbG9hZCBkZSBTaGFwZWZpbGUgKi99XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgIHtkZWZhdWx0TWVzc2FnZXMuYXJlYVByb3Bvc3RhU2hhcGVmaWxlfVxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBpZD1cInNoYXBlZmlsZS11cGxvYWRcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgICBhY2NlcHQ9XCIuemlwXCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVTaGFwZWZpbGVVcGxvYWR9XHJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMuc3RhdGUubG9hZGluZyB8fCAhIXRoaXMuc3RhdGUuZHJhd25HZW9tZXRyeX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAge3RoaXMuc3RhdGUuc2hhcGVmaWxlTGF5ZXIgJiYgKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsZS1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICBDYW1hZGE6IHt0aGlzLnN0YXRlLnNoYXBlZmlsZUxheWVyLnRpdGxlIHx8ICfDgXJlYSBQcm9wb3N0YSd9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLmRyYXduR2VvbWV0cnkgJiYgKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsZS1pbmZvXCIgc3R5bGU9e3sgY29sb3I6ICcjZGMzNTQ1JyB9fT5cclxuICAgICAgICAgICAgICAgIERlc2VuaG8gbm8gbWFwYSBhdGl2by4gUmVtb3ZhIG8gZGVzZW5obyBwYXJhIGZhemVyIHVwbG9hZCBkZSBzaGFwZWZpbGUuXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICB7LyogRGVzZW5obyBubyBNYXBhICovfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICB7ZGVmYXVsdE1lc3NhZ2VzLmFyZWFQcm9wb3N0YURlc2VuaG99XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4tc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVN0YXJ0RHJhd2luZ31cclxuICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5zdGF0ZS5sb2FkaW5nIHx8IHRoaXMuc3RhdGUuZHJhd2luZ01vZGUgfHwgISF0aGlzLnN0YXRlLnNoYXBlZmlsZUdlb21ldHJ5fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5kcmF3aW5nTW9kZSA/ICdEZXNlbmhhbmRvLi4uJyA6IGRlZmF1bHRNZXNzYWdlcy5pbmljaWFyRGVzZW5ob31cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAge3RoaXMuc3RhdGUuZHJhd2luZ01vZGUgJiYgKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJhd2luZy1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICBDbGlxdWUgbm8gbWFwYSBwYXJhIGNvbWXDp2FyIGEgZGVzZW5oYXIgYSDDoXJlYS5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLmRyYXduR2VvbWV0cnkgJiYgKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsZS1pbmZvXCIgc3R5bGU9e3sgY29sb3I6ICcjMjhhNzQ1JyB9fT5cclxuICAgICAgICAgICAgICAgIMOBcmVhIGRlc2VuaGFkYSBubyBtYXBhLlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5zaGFwZWZpbGVHZW9tZXRyeSAmJiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWxlLWluZm9cIiBzdHlsZT17eyBjb2xvcjogJyNkYzM1NDUnIH19PlxyXG4gICAgICAgICAgICAgICAgU2hhcGVmaWxlIGNhcnJlZ2Fkby4gUmVtb3ZhIG8gYXJxdWl2byBwYXJhIGRlc2VuaGFyIG5vIG1hcGEuXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICB7LyogQm90w7VlcyBkZSBBw6fDo28gKi99XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1ncm91cFwiPlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4tcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVSdW5BbmFseXNpc31cclxuICAgICAgICAgICAgICBkaXNhYmxlZD17IWNhblJ1bkFuYWx5c2lzfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmxvYWRpbmcgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzcGlubmVyXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICB7ZGVmYXVsdE1lc3NhZ2VzLmV4ZWN1dGFyQW5hbGlzZX1cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuLWRhbmdlclwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGVhckFuYWx5c2lzfVxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMuc3RhdGUubG9hZGluZ31cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2RlZmF1bHRNZXNzYWdlcy5saW1wYXJBbmFsaXNlfVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuLXN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlRG93bmxvYWRSZXBvcnR9XHJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9eyF0aGlzLnN0YXRlLnJlcG9ydFVybCB8fCB0aGlzLnN0YXRlLmxvYWRpbmd9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7ZGVmYXVsdE1lc3NhZ2VzLmJhaXhhclJlbGF0b3Jpb31cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICB7LyogUmVzdW1vIGRhIEFuw6FsaXNlICovfVxyXG4gICAgICAgICAge3RoaXMuc3RhdGUuYW5hbHlzaXNSZXN1bHQgJiYgKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHN1bW1hcnktYm94ICR7dGhpcy5zdGF0ZS5hbmFseXNpc1Jlc3VsdC5zdWZmaWNpZW50ID8gJ3N1ZmZpY2llbnQnIDogJ2luc3VmZmljaWVudCd9YH0+XHJcbiAgICAgICAgICAgICAgPHN0cm9uZz5SZXN1bW8gZGEgQW7DoWxpc2U6PC9zdHJvbmc+PGJyIC8+XHJcbiAgICAgICAgICAgICAge3RoaXMuc3RhdGUuYW5hbHlzaXNSZXN1bHQubWVzc2FnZX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXG4gZXhwb3J0IGZ1bmN0aW9uIF9fc2V0X3dlYnBhY2tfcHVibGljX3BhdGhfXyh1cmwpIHsgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB1cmwgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
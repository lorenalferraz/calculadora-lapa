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
/******/ 			if (chunkId === "vendors-node_modules_jszip_dist_jszip_min_js") {
/******/ 				// Caminho relativo ao widget (o baseUrl já é adicionado pelo webpack)
/******/ 				return "widgets/calculadora-lapa/dist/chunks/vendors-node_modules_jszip_dist_jszip_min_js.js";
/******/ 			}
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
        this.handleStartDrawing = () => __awaiter(this, void 0, void 0, function* () {
            // Verifica se o mapa está disponível
            if (!this.state.jimuMapView || !this.state.jimuMapView.view) {
                alert('Aguarde o mapa carregar completamente.');
                return;
            }
            // Se o sketchViewModel não existe, tenta inicializar
            let sketchViewModel = this.state.sketchViewModel;
            if (!sketchViewModel) {
                console.log('SketchViewModel não encontrado. Inicializando...');
                try {
                    // Chama initializeSketch e aguarda
                    yield this.initializeSketch();
                    // Aguarda o React atualizar o estado (pode levar alguns ciclos)
                    yield new Promise(resolve => setTimeout(resolve, 200));
                    // Verifica novamente se foi criado
                    sketchViewModel = this.state.sketchViewModel;
                    if (!sketchViewModel) {
                        console.warn('SketchViewModel ainda não foi criado após inicialização');
                        alert('Aguarde o mapa carregar completamente. Tente novamente em alguns segundos.');
                        return;
                    }
                }
                catch (error) {
                    console.error('Erro ao inicializar SketchViewModel:', error);
                    alert('Erro ao inicializar o desenho. Verifique se o mapa está carregado.');
                    return;
                }
            }
            // Verifica se o view do sketchViewModel está disponível
            if (!sketchViewModel.view) {
                alert('Aguarde o mapa carregar completamente.');
                return;
            }
            // Verifica se o sketchViewModel está pronto para desenhar
            if (sketchViewModel.state && sketchViewModel.state !== 'ready') {
                console.log('SketchViewModel não está pronto. Estado:', sketchViewModel.state);
                // Tenta cancelar qualquer operação em andamento
                try {
                    sketchViewModel.cancel();
                }
                catch (e) {
                    console.warn('Não foi possível cancelar operação anterior:', e);
                }
            }
            this.setState({ drawingMode: true });
            sketchViewModel.create('polygon');
        });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jYWxjdWxhZG9yYS1sYXBhL2Rpc3QvcnVudGltZS93aWRnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlFQUFlO0lBQ2IsWUFBWSxFQUFFLDRCQUE0QjtJQUMxQyxLQUFLLEVBQUUsNEJBQTRCO0lBQ25DLGNBQWMsRUFBRSxtQ0FBbUM7SUFDbkQscUJBQXFCLEVBQUUsZ0NBQWdDO0lBQ3ZELG1CQUFtQixFQUFFLGtDQUFrQztJQUN2RCxjQUFjLEVBQUUsaUJBQWlCO0lBQ2pDLGVBQWUsRUFBRSxrQkFBa0I7SUFDbkMsYUFBYSxFQUFFLGdCQUFnQjtJQUMvQixlQUFlLEVBQUUsa0JBQWtCO0lBQ25DLE9BQU8sRUFBRSxlQUFlO0NBQ3pCOzs7Ozs7Ozs7Ozs7QUNYRDs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Q7V0FDdEQsc0NBQXNDLGlFQUFpRTtXQUN2RztXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7Ozs7O1dDUkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FD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QUssQ0FBQyxPQUFPLElBRXBELDZEQUFlLENBQUMsZUFBZSxDQUN6QixDQUNMO2dCQUdMLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxJQUFJLENBQzVCLHdEQUFLLFNBQVMsRUFBRSxlQUFlLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxjQUFjLEVBQUU7b0JBQ25HLHlGQUFtQztvQkFBQSwwREFBTTtvQkFDeEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUM5QixDQUNQLENBQ0csQ0FDRixDQUNQO0lBQ0gsQ0FBQztDQUNGO0FBRU8sU0FBUywyQkFBMkIsQ0FBQyxHQUFHLElBQUkscUJBQXVCLEdBQUcsR0FBRyxFQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvY2FsY3VsYWRvcmEtbGFwYS9zcmMvcnVudGltZS90cmFuc2xhdGlvbnMvZGVmYXVsdC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtYXJjZ2lzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2NyZWF0ZSBmYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZW5zdXJlIGNodW5rIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2dldCBqYXZhc2NyaXB0IGNodW5rIGZpbGVuYW1lIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbG9hZCBzY3JpcHQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2NhbGN1bGFkb3JhLWxhcGEvc3JjL3J1bnRpbWUvd2lkZ2V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XHJcbiAgX3dpZGdldExhYmVsOiAnQ2FsY3VsYWRvcmEgZGUgQ29tcGVuc2HDp8OjbycsXHJcbiAgdGl0bGU6ICdDYWxjdWxhZG9yYSBkZSBDb21wZW5zYcOnw6NvJyxcclxuICBxdWFudGlkYWRlSURFQTogJ1F1YW50aWRhZGUgZGUgSURFQVxcJ3MgYSBhbmFsaXNhcjonLFxyXG4gIGFyZWFQcm9wb3N0YVNoYXBlZmlsZTogJ8OBcmVhIFByb3Bvc3RhIChzaGFwZWZpbGUgWklQKTonLFxyXG4gIGFyZWFQcm9wb3N0YURlc2VuaG86ICfDgXJlYSBQcm9wb3N0YSAoRGVzZW5obyBubyBtYXBhKTonLFxyXG4gIGluaWNpYXJEZXNlbmhvOiAnSW5pY2lhciBEZXNlbmhvJyxcclxuICBleGVjdXRhckFuYWxpc2U6ICdFeGVjdXRhciBBbsOhbGlzZScsXHJcbiAgbGltcGFyQW5hbGlzZTogJ0xpbXBhciBBbsOhbGlzZScsXHJcbiAgYmFpeGFyUmVsYXRvcmlvOiAnQmFpeGFyIFJlbGF0w7NyaW8nLFxyXG4gIGxvYWRpbmc6ICdDYXJyZWdhbmRvLi4uJ1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2FyY2dpc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiA/IChvYmopID0+IChPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqKSkgOiAob2JqKSA9PiAob2JqLl9fcHJvdG9fXyk7XG52YXIgbGVhZlByb3RvdHlwZXM7XG4vLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3Rcbi8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuLy8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4vLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3Rcbi8vIG1vZGUgJiAxNjogcmV0dXJuIHZhbHVlIHdoZW4gaXQncyBQcm9taXNlLWxpa2Vcbi8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbl9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG5cdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IHRoaXModmFsdWUpO1xuXHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuXHRpZih0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlKSB7XG5cdFx0aWYoKG1vZGUgJiA0KSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG5cdFx0aWYoKG1vZGUgJiAxNikgJiYgdHlwZW9mIHZhbHVlLnRoZW4gPT09ICdmdW5jdGlvbicpIHJldHVybiB2YWx1ZTtcblx0fVxuXHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuXHR2YXIgZGVmID0ge307XG5cdGxlYWZQcm90b3R5cGVzID0gbGVhZlByb3RvdHlwZXMgfHwgW251bGwsIGdldFByb3RvKHt9KSwgZ2V0UHJvdG8oW10pLCBnZXRQcm90byhnZXRQcm90byldO1xuXHRmb3IodmFyIGN1cnJlbnQgPSBtb2RlICYgMiAmJiB2YWx1ZTsgdHlwZW9mIGN1cnJlbnQgPT0gJ29iamVjdCcgJiYgIX5sZWFmUHJvdG90eXBlcy5pbmRleE9mKGN1cnJlbnQpOyBjdXJyZW50ID0gZ2V0UHJvdG8oY3VycmVudCkpIHtcblx0XHRPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhjdXJyZW50KS5mb3JFYWNoKChrZXkpID0+IChkZWZba2V5XSA9ICgpID0+ICh2YWx1ZVtrZXldKSkpO1xuXHR9XG5cdGRlZlsnZGVmYXVsdCddID0gKCkgPT4gKHZhbHVlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBkZWYpO1xuXHRyZXR1cm4gbnM7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZiA9IHt9O1xuLy8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuLy8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSAoY2h1bmtJZCkgPT4ge1xuXHRyZXR1cm4gUHJvbWlzZS5hbGwoT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5mKS5yZWR1Y2UoKHByb21pc2VzLCBrZXkpID0+IHtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmZba2V5XShjaHVua0lkLCBwcm9taXNlcyk7XG5cdFx0cmV0dXJuIHByb21pc2VzO1xuXHR9LCBbXSkpO1xufTsiLCIvLyBUaGlzIGZ1bmN0aW9uIGFsbG93IHRvIHJlZmVyZW5jZSBhc3luYyBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18udSA9IChjaHVua0lkKSA9PiB7XG5cdC8vIHJldHVybiB1cmwgZm9yIGZpbGVuYW1lcyBub3QgYmFzZWQgb24gdGVtcGxhdGVcblx0aWYgKGNodW5rSWQgPT09IFwidmVuZG9ycy1ub2RlX21vZHVsZXNfanN6aXBfZGlzdF9qc3ppcF9taW5fanNcIikgcmV0dXJuIFwid2lkZ2V0cy9jaHVua3MvdmVuZG9ycy1ub2RlX21vZHVsZXNfanN6aXBfZGlzdF9qc3ppcF9taW5fanMuanNcIjtcblx0Ly8gcmV0dXJuIHVybCBmb3IgZmlsZW5hbWVzIGJhc2VkIG9uIHRlbXBsYXRlXG5cdHJldHVybiB1bmRlZmluZWQ7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsInZhciBpblByb2dyZXNzID0ge307XG52YXIgZGF0YVdlYnBhY2tQcmVmaXggPSBcImV4Yi1jbGllbnQ6XCI7XG4vLyBsb2FkU2NyaXB0IGZ1bmN0aW9uIHRvIGxvYWQgYSBzY3JpcHQgdmlhIHNjcmlwdCB0YWdcbl9fd2VicGFja19yZXF1aXJlX18ubCA9ICh1cmwsIGRvbmUsIGtleSwgY2h1bmtJZCkgPT4ge1xuXHRpZihpblByb2dyZXNzW3VybF0pIHsgaW5Qcm9ncmVzc1t1cmxdLnB1c2goZG9uZSk7IHJldHVybjsgfVxuXHR2YXIgc2NyaXB0LCBuZWVkQXR0YWNoO1xuXHRpZihrZXkgIT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHNjcmlwdHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBzID0gc2NyaXB0c1tpXTtcblx0XHRcdGlmKHMuZ2V0QXR0cmlidXRlKFwic3JjXCIpID09IHVybCB8fCBzLmdldEF0dHJpYnV0ZShcImRhdGEtd2VicGFja1wiKSA9PSBkYXRhV2VicGFja1ByZWZpeCArIGtleSkgeyBzY3JpcHQgPSBzOyBicmVhazsgfVxuXHRcdH1cblx0fVxuXHRpZighc2NyaXB0KSB7XG5cdFx0bmVlZEF0dGFjaCA9IHRydWU7XG5cdFx0c2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG5cblx0XHRzY3JpcHQuY2hhcnNldCA9ICd1dGYtOCc7XG5cdFx0c2NyaXB0LnRpbWVvdXQgPSAxMjA7XG5cdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubmMpIHtcblx0XHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKTtcblx0XHR9XG5cdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcImRhdGEtd2VicGFja1wiLCBkYXRhV2VicGFja1ByZWZpeCArIGtleSk7XG5cblx0XHRzY3JpcHQuc3JjID0gdXJsO1xuXHR9XG5cdGluUHJvZ3Jlc3NbdXJsXSA9IFtkb25lXTtcblx0dmFyIG9uU2NyaXB0Q29tcGxldGUgPSAocHJldiwgZXZlbnQpID0+IHtcblx0XHQvLyBhdm9pZCBtZW0gbGVha3MgaW4gSUUuXG5cdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gbnVsbDtcblx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG5cdFx0dmFyIGRvbmVGbnMgPSBpblByb2dyZXNzW3VybF07XG5cdFx0ZGVsZXRlIGluUHJvZ3Jlc3NbdXJsXTtcblx0XHRzY3JpcHQucGFyZW50Tm9kZSAmJiBzY3JpcHQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzY3JpcHQpO1xuXHRcdGRvbmVGbnMgJiYgZG9uZUZucy5mb3JFYWNoKChmbikgPT4gKGZuKGV2ZW50KSkpO1xuXHRcdGlmKHByZXYpIHJldHVybiBwcmV2KGV2ZW50KTtcblx0fVxuXHR2YXIgdGltZW91dCA9IHNldFRpbWVvdXQob25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHVuZGVmaW5lZCwgeyB0eXBlOiAndGltZW91dCcsIHRhcmdldDogc2NyaXB0IH0pLCAxMjAwMDApO1xuXHRzY3JpcHQub25lcnJvciA9IG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCBzY3JpcHQub25lcnJvcik7XG5cdHNjcmlwdC5vbmxvYWQgPSBvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgc2NyaXB0Lm9ubG9hZCk7XG5cdG5lZWRBdHRhY2ggJiYgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xufTsiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIndpZGdldHMvY2FsY3VsYWRvcmEtbGFwYS9kaXN0L3J1bnRpbWUvd2lkZ2V0XCI6IDBcbn07XG5cbl9fd2VicGFja19yZXF1aXJlX18uZi5qID0gKGNodW5rSWQsIHByb21pc2VzKSA9PiB7XG5cdFx0Ly8gSlNPTlAgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuXHRcdHZhciBpbnN0YWxsZWRDaHVua0RhdGEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSA/IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA6IHVuZGVmaW5lZDtcblx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIHsgLy8gMCBtZWFucyBcImFscmVhZHkgaW5zdGFsbGVkXCIuXG5cblx0XHRcdC8vIGEgUHJvbWlzZSBtZWFucyBcImN1cnJlbnRseSBsb2FkaW5nXCIuXG5cdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcblx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYodHJ1ZSkgeyAvLyBhbGwgY2h1bmtzIGhhdmUgSlNcblx0XHRcdFx0XHQvLyBzZXR1cCBQcm9taXNlIGluIGNodW5rIGNhY2hlXG5cdFx0XHRcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiAoaW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gW3Jlc29sdmUsIHJlamVjdF0pKTtcblx0XHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSA9IHByb21pc2UpO1xuXG5cdFx0XHRcdFx0Ly8gc3RhcnQgY2h1bmsgbG9hZGluZ1xuXHRcdFx0XHRcdHZhciB1cmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLnUoY2h1bmtJZCk7XG5cdFx0XHRcdFx0Ly8gY3JlYXRlIGVycm9yIGJlZm9yZSBzdGFjayB1bndvdW5kIHRvIGdldCB1c2VmdWwgc3RhY2t0cmFjZSBsYXRlclxuXHRcdFx0XHRcdHZhciBlcnJvciA9IG5ldyBFcnJvcigpO1xuXHRcdFx0XHRcdHZhciBsb2FkaW5nRW5kZWQgPSAoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpKSB7XG5cdFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcblx0XHRcdFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhICE9PSAwKSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSB1bmRlZmluZWQ7XG5cdFx0XHRcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuXHRcdFx0XHRcdFx0XHRcdHZhciBlcnJvclR5cGUgPSBldmVudCAmJiAoZXZlbnQudHlwZSA9PT0gJ2xvYWQnID8gJ21pc3NpbmcnIDogZXZlbnQudHlwZSk7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIHJlYWxTcmMgPSBldmVudCAmJiBldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LnNyYztcblx0XHRcdFx0XHRcdFx0XHRlcnJvci5tZXNzYWdlID0gJ0xvYWRpbmcgY2h1bmsgJyArIGNodW5rSWQgKyAnIGZhaWxlZC5cXG4oJyArIGVycm9yVHlwZSArICc6ICcgKyByZWFsU3JjICsgJyknO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLm5hbWUgPSAnQ2h1bmtMb2FkRXJyb3InO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLnR5cGUgPSBlcnJvclR5cGU7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IucmVxdWVzdCA9IHJlYWxTcmM7XG5cdFx0XHRcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhWzFdKGVycm9yKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5sKHVybCwgbG9hZGluZ0VuZGVkLCBcImNodW5rLVwiICsgY2h1bmtJZCwgY2h1bmtJZCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG59O1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rZXhiX2NsaWVudFwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtleGJfY2xpZW50XCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvdHlwZS1idWlsdGlucyAqL1xyXG4vKiogQGpzeCBqc3ggKi9cclxuLyoqXHJcbiAgTGljZW5zaW5nXHJcblxyXG4gIENvcHlyaWdodCAyMDIyIEVzcmlcclxuXHJcbiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgWW91XHJcbiAgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXlcclxuICBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG4gIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yXHJcbiAgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nXHJcbiAgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG5cclxuICBBIGNvcHkgb2YgdGhlIGxpY2Vuc2UgaXMgYXZhaWxhYmxlIGluIHRoZSByZXBvc2l0b3J5J3NcclxuICBMSUNFTlNFIGZpbGUuXHJcbiovXHJcbmltcG9ydCB7IFJlYWN0LCB0eXBlIEFsbFdpZGdldFByb3BzLCBjc3MsIGpzeCB9IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHtcclxuICBsb2FkQXJjR0lTSlNBUElNb2R1bGVzLFxyXG4gIEppbXVNYXBWaWV3Q29tcG9uZW50LFxyXG4gIHR5cGUgSmltdU1hcFZpZXdcclxufSBmcm9tICdqaW11LWFyY2dpcydcclxuXHJcbmltcG9ydCB0eXBlIHsgSU1Db25maWcgfSBmcm9tICcuLi9jb25maWcnXHJcblxyXG5pbXBvcnQgZGVmYXVsdE1lc3NhZ2VzIGZyb20gJy4vdHJhbnNsYXRpb25zL2RlZmF1bHQnXHJcblxyXG5pbnRlcmZhY2UgSVN0YXRlIHtcclxuICBqaW11TWFwVmlldzogSmltdU1hcFZpZXdcclxuICBsb2FkaW5nOiBib29sZWFuXHJcbiAgcHJvZ3Jlc3M6IG51bWJlciAvLyBQb3JjZW50YWdlbSBkZSBwcm9ncmVzc28gKDAtMTAwKVxyXG4gIHF1YW50aWRhZGVJREVBOiBudW1iZXJcclxuICBpZGVhVmFsdWVzOiBzdHJpbmdbXVxyXG4gIHNoYXBlZmlsZUZpbGU6IEZpbGUgfCBudWxsXHJcbiAgc2hhcGVmaWxlTGF5ZXI6IF9fZXNyaS5GZWF0dXJlTGF5ZXIgfCBudWxsIC8vIENhbWFkYSBkbyBzaGFwZWZpbGUgYWRpY2lvbmFkYSBhbyBtYXBhXHJcbiAgc2hhcGVmaWxlR2VvbWV0cnk6IF9fZXNyaS5Qb2x5Z29uIHwgbnVsbCAvLyBHZW9tZXRyaWEgZXh0cmHDrWRhIGRvIHNoYXBlZmlsZVxyXG4gIGRyYXduR2VvbWV0cnk6IF9fZXNyaS5HZW9tZXRyeSB8IG51bGxcclxuICBza2V0Y2hWaWV3TW9kZWw6IF9fZXNyaS5Ta2V0Y2hWaWV3TW9kZWwgfCBudWxsXHJcbiAgZ3JhcGhpY3NMYXllcjogX19lc3JpLkdyYXBoaWNzTGF5ZXIgfCBudWxsXHJcbiAgYW5hbHlzaXNSZXN1bHQ6IHtcclxuICAgIHN1ZmZpY2llbnQ6IGJvb2xlYW5cclxuICAgIG1lc3NhZ2U6IHN0cmluZ1xyXG4gIH0gfCBudWxsXHJcbiAgcmVwb3J0VXJsOiBzdHJpbmcgfCBudWxsXHJcbiAgZHJhd2luZ01vZGU6IGJvb2xlYW5cclxuICBqb2JJZDogc3RyaW5nIHwgbnVsbFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaWRnZXQgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PFxyXG5BbGxXaWRnZXRQcm9wczxJTUNvbmZpZz4sXHJcbklTdGF0ZVxyXG4+IHtcclxuICAvLyBHaXZlIHR5cGVzIHRvIHRoZSBtb2R1bGVzIHdlIGltcG9ydCBmcm9tIHRoZSBBcmNHSVMgQVBJIGZvciBKYXZhU2NyaXB0XHJcbiAgU2tldGNoVmlld01vZGVsOiB0eXBlb2YgX19lc3JpLlNrZXRjaFZpZXdNb2RlbFxyXG4gIEdyYXBoaWNzTGF5ZXI6IHR5cGVvZiBfX2VzcmkuR3JhcGhpY3NMYXllclxyXG4gIFBvbHlnb246IHR5cGVvZiBfX2VzcmkuUG9seWdvblxyXG4gIEZlYXR1cmVMYXllcjogdHlwZW9mIF9fZXNyaS5GZWF0dXJlTGF5ZXJcclxuXHJcbiAgc3RhdGU6IElTdGF0ZSA9IHtcclxuICAgIGppbXVNYXBWaWV3OiBudWxsLFxyXG4gICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICBwcm9ncmVzczogMCxcclxuICAgIHF1YW50aWRhZGVJREVBOiAxLFxyXG4gICAgaWRlYVZhbHVlczogWycnXSxcclxuICAgIHNoYXBlZmlsZUZpbGU6IG51bGwsXHJcbiAgICBzaGFwZWZpbGVMYXllcjogbnVsbCxcclxuICAgIHNoYXBlZmlsZUdlb21ldHJ5OiBudWxsLFxyXG4gICAgZHJhd25HZW9tZXRyeTogbnVsbCxcclxuICAgIHNrZXRjaFZpZXdNb2RlbDogbnVsbCxcclxuICAgIGdyYXBoaWNzTGF5ZXI6IG51bGwsXHJcbiAgICBhbmFseXNpc1Jlc3VsdDogbnVsbCxcclxuICAgIHJlcG9ydFVybDogbnVsbCxcclxuICAgIGRyYXdpbmdNb2RlOiBmYWxzZSxcclxuICAgIGpvYklkOiBudWxsXHJcbiAgfVxyXG5cclxuICAvLyBVUkwgZGEgZmVycmFtZW50YSBkZSBnZW9wcm9jZXNzYW1lbnRvIGRlIGNhbGN1bGFkb3JhIGRlIGNvbXBlbnNhw6fDo29cclxuICByZWFkb25seSBHUF9TRVJWSUNFX1VSTCA9ICdodHRwczovL21laW9hbWJpZW50ZS5zaXN0ZW1hcy5tcGJhLm1wLmJyL3NlcnZlci9yZXN0L3NlcnZpY2VzL3Rlc3Rlb3V0cHV0L2NhbGN1bGFkb3JhL0dQU2VydmVyJ1xyXG4gIFxyXG4gIC8vIFVSTCBkbyBQb3J0YWwvU2VydmVyXHJcbiAgcmVhZG9ubHkgUE9SVEFMX1VSTCA9ICdodHRwczovL21laW9hbWJpZW50ZS5zaXN0ZW1hcy5tcGJhLm1wLmJyL3NlcnZlcidcclxuICBcclxuICAvLyBOb21lIGRhIHRhc2sgZXNwZWPDrWZpY2EgZGVudHJvIGRhIEdQXHJcbiAgcmVhZG9ubHkgR1BfVEFTS19OQU1FID0gJ1NpbXVsYXIgw4FyZWEgZGUgQ29tcGVuc2HDp8OjbydcclxuICBcclxuICAvLyBUb2tlbiBmb3JuZWNpZG8gcGFyYSBhdXRlbnRpY2HDp8Ojb1xyXG4gIHJlYWRvbmx5IEdQX1RPS0VOID0gJ196TkQ0OWRLaHZuNTl0RFQ0SHE0ODBGOElvVk52d0ZyZ3BKUldqeUhSQkdyOGJZYUtMX1l5elJBeThmV0NGLXZLYUJ2alhoSDJGdUw2T1EwdFNmZkFIZWJhUUJGTU4xQ3BPb3ZzeThmejdVN285QkF2SFJYVHhpLXA2UWd2UXFCJ1xyXG4gIFxyXG4gIC8vIENsaWVudCBTZWNyZXQgcGFyYSBhdXRlbnRpY2HDp8OjbyBPQXV0aDIgKHF1YW5kbyBuZWNlc3PDoXJpbyByZW5vdmFyIHRva2VuKVxyXG4gIHJlYWRvbmx5IENMSUVOVF9TRUNSRVQgPSAnZjhjNDIzNDIzYWE3NDQ2YjhhMTdiMzAxNDNmOWIwOGEnXHJcblxyXG4gIGNvbXBvbmVudERpZFVwZGF0ZSA9IChwcmV2UHJvcHMsIHByZXZTdGF0ZSkgPT4ge1xyXG4gICAgaWYgKHRoaXMuc3RhdGUuamltdU1hcFZpZXcgJiYgIXByZXZTdGF0ZS5qaW11TWFwVmlldykge1xyXG4gICAgICB0aGlzLmluaXRpYWxpemVTa2V0Y2goKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQgPSAoKSA9PiB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5za2V0Y2hWaWV3TW9kZWwpIHtcclxuICAgICAgdGhpcy5zdGF0ZS5za2V0Y2hWaWV3TW9kZWwuZGVzdHJveSgpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBJbmljaWFsaXphIG8gU2tldGNoIHBhcmEgZGVzZW5obyBubyBtYXBhXHJcbiAgaW5pdGlhbGl6ZVNrZXRjaCA9IGFzeW5jICgpID0+IHtcclxuICAgIGlmICghdGhpcy5zdGF0ZS5qaW11TWFwVmlldyB8fCAhdGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3KSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IG1vZHVsZXMgPSBhd2FpdCBsb2FkQXJjR0lTSlNBUElNb2R1bGVzKFtcclxuICAgICAgICAnZXNyaS93aWRnZXRzL1NrZXRjaC9Ta2V0Y2hWaWV3TW9kZWwnLFxyXG4gICAgICAgICdlc3JpL2xheWVycy9HcmFwaGljc0xheWVyJyxcclxuICAgICAgICAnZXNyaS9nZW9tZXRyeS9Qb2x5Z29uJ1xyXG4gICAgICBdKVxyXG4gICAgICBcclxuICAgICAgY29uc3QgW1NrZXRjaFZpZXdNb2RlbCwgR3JhcGhpY3NMYXllciwgUG9seWdvbl0gPSBtb2R1bGVzXHJcbiAgICAgIHRoaXMuU2tldGNoVmlld01vZGVsID0gU2tldGNoVmlld01vZGVsXHJcbiAgICAgIHRoaXMuR3JhcGhpY3NMYXllciA9IEdyYXBoaWNzTGF5ZXJcclxuICAgICAgdGhpcy5Qb2x5Z29uID0gUG9seWdvblxyXG5cclxuICAgICAgLy8gQ3JpYSB1bWEgY2FtYWRhIGRlIGdyw6FmaWNvcyBwYXJhIG8gZGVzZW5ob1xyXG4gICAgICBjb25zdCBncmFwaGljc0xheWVyID0gbmV3IHRoaXMuR3JhcGhpY3NMYXllcigpXHJcbiAgICAgIHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldy5tYXAuYWRkKGdyYXBoaWNzTGF5ZXIpXHJcblxyXG4gICAgICAvLyBDcmlhIG8gU2tldGNoVmlld01vZGVsXHJcbiAgICAgIGNvbnN0IHNrZXRjaFZpZXdNb2RlbCA9IG5ldyB0aGlzLlNrZXRjaFZpZXdNb2RlbCh7XHJcbiAgICAgICAgdmlldzogdGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3LFxyXG4gICAgICAgIGxheWVyOiBncmFwaGljc0xheWVyLFxyXG4gICAgICAgIHBvbHlnb25TeW1ib2w6IHtcclxuICAgICAgICAgIHR5cGU6ICdzaW1wbGUtZmlsbCcsXHJcbiAgICAgICAgICBjb2xvcjogWzUxLCA1MSwgMjA0LCAwLjJdLFxyXG4gICAgICAgICAgb3V0bGluZToge1xyXG4gICAgICAgICAgICBjb2xvcjogWzUxLCA1MSwgMjA0LCAxXSxcclxuICAgICAgICAgICAgd2lkdGg6IDJcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcblxyXG4gICAgICAvLyBMaXN0ZW5lciBwYXJhIHF1YW5kbyBvIGRlc2VuaG8gw6kgY29tcGxldGFkb1xyXG4gICAgICBza2V0Y2hWaWV3TW9kZWwub24oJ2NyZWF0ZScsIChldmVudCkgPT4ge1xyXG4gICAgICAgIGlmIChldmVudC5zdGF0ZSA9PT0gJ2NvbXBsZXRlJykge1xyXG4gICAgICAgICAgY29uc3QgZ2VvbWV0cnkgPSBldmVudC5ncmFwaGljLmdlb21ldHJ5XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC8vIFZhbGlkYSBzZSBhIGdlb21ldHJpYSB0ZW0gcmluZ3MgdsOhbGlkb3MgKHBhcmEgcG9sw61nb25vcylcclxuICAgICAgICAgIGlmIChnZW9tZXRyeSAmJiBnZW9tZXRyeS50eXBlID09PSAncG9seWdvbicpIHtcclxuICAgICAgICAgICAgY29uc3QgcG9seWdvbiA9IGdlb21ldHJ5IGFzIF9fZXNyaS5Qb2x5Z29uXHJcbiAgICAgICAgICAgIGlmIChwb2x5Z29uLnJpbmdzICYmIHBvbHlnb24ucmluZ3MubGVuZ3RoID4gMCAmJiBwb2x5Z29uLnJpbmdzWzBdLmxlbmd0aCA+PSAzKSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJz09PSBHRU9NRVRSSUEgQ0FQVFVSQURBID09PScpXHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1RpcG86JywgZ2VvbWV0cnkudHlwZSlcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU3BhdGlhbFJlZmVyZW5jZTonLCBnZW9tZXRyeS5zcGF0aWFsUmVmZXJlbmNlKVxyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdOw7ptZXJvIGRlIHJpbmdzOicsIHBvbHlnb24ucmluZ3MubGVuZ3RoKVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIC8vIE1vc3RyYSBhcyBjb29yZGVuYWRhcyBkZSBjYWRhIHJpbmdcclxuICAgICAgICAgICAgICBwb2x5Z29uLnJpbmdzLmZvckVhY2goKHJpbmcsIHJpbmdJbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYC0tLSBSaW5nICR7cmluZ0luZGV4ICsgMX0gKCR7cmluZy5sZW5ndGh9IHBvbnRvcykgLS0tYClcclxuICAgICAgICAgICAgICAgIHJpbmcuZm9yRWFjaCgocG9pbnQsIHBvaW50SW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCAgUG9udG8gJHtwb2ludEluZGV4ICsgMX06IFske3BvaW50WzBdfSwgJHtwb2ludFsxXX1dYClcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAvLyBDYWxjdWxhIGUgbW9zdHJhIGEgw6FyZWEgYXByb3hpbWFkYSAoc2UgcG9zc8OtdmVsKVxyXG4gICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBleHRlbnQgPSBnZW9tZXRyeS5leHRlbnRcclxuICAgICAgICAgICAgICAgIGlmIChleHRlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgY29uc3Qgd2lkdGggPSBleHRlbnQud2lkdGhcclxuICAgICAgICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gZXh0ZW50LmhlaWdodFxyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRXh0ZW50IChib3VuZGluZyBib3gpOicpXHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAgIFhtaW46ICR7ZXh0ZW50LnhtaW59LCBZbWluOiAke2V4dGVudC55bWlufWApXHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAgIFhtYXg6ICR7ZXh0ZW50LnhtYXh9LCBZbWF4OiAke2V4dGVudC55bWF4fWApXHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAgIExhcmd1cmE6ICR7d2lkdGh9LCBBbHR1cmE6ICR7aGVpZ2h0fWApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ07Do28gZm9pIHBvc3PDrXZlbCBjYWxjdWxhciBleHRlbnQnKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGRyYXduR2VvbWV0cnk6IGdlb21ldHJ5LFxyXG4gICAgICAgICAgICAgICAgZHJhd2luZ01vZGU6IGZhbHNlXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAvLyBOw6NvIHByZWNpc2EgcmVzZXRhciAtIG8gU2tldGNoVmlld01vZGVsIGrDoSBlc3TDoSBwcm9udG8gcGFyYSB1bSBub3ZvIGRlc2VuaG9cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBhbGVydCgnUG9yIGZhdm9yLCBkZXNlbmhlIHVtIHBvbMOtZ29ubyB2w6FsaWRvIGNvbSBwZWxvIG1lbm9zIDMgcG9udG9zLicpXHJcbiAgICAgICAgICAgICAgLy8gQ2FuY2VsYSBvIGRlc2VuaG8gaW52w6FsaWRvXHJcbiAgICAgICAgICAgICAgaWYgKHNrZXRjaFZpZXdNb2RlbC5zdGF0ZSAhPT0gJ3JlYWR5Jykge1xyXG4gICAgICAgICAgICAgICAgc2tldGNoVmlld01vZGVsLmNhbmNlbCgpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICBkcmF3bkdlb21ldHJ5OiBnZW9tZXRyeSxcclxuICAgICAgICAgICAgICBkcmF3aW5nTW9kZTogZmFsc2VcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLy8gTsOjbyBwcmVjaXNhIHJlc2V0YXIgLSBvIFNrZXRjaFZpZXdNb2RlbCBqw6EgZXN0w6EgcHJvbnRvIHBhcmEgdW0gbm92byBkZXNlbmhvXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgc2tldGNoVmlld01vZGVsLFxyXG4gICAgICAgIGdyYXBoaWNzTGF5ZXJcclxuICAgICAgfSlcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm8gYW8gaW5pY2lhbGl6YXIgU2tldGNoOicsIGVycm9yKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gQXR1YWxpemEgYSBxdWFudGlkYWRlIGRlIElERUEgZSBjcmlhIG9zIGNhbXBvcyBkaW7Dom1pY29zXHJcbiAgaGFuZGxlUXVhbnRpZGFkZUlERUFDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgIGNvbnN0IHF1YW50aWRhZGUgPSBwYXJzZUludChldmVudC50YXJnZXQudmFsdWUpIHx8IDFcclxuICAgIGNvbnN0IG1heFF1YW50aWRhZGUgPSBNYXRoLm1heCgxLCBNYXRoLm1pbihxdWFudGlkYWRlLCAxMCkpIC8vIExpbWl0YSBlbnRyZSAxIGUgMTBcclxuICAgIFxyXG4gICAgY29uc3QgaWRlYVZhbHVlcyA9IFtdXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1heFF1YW50aWRhZGU7IGkrKykge1xyXG4gICAgICBpZGVhVmFsdWVzLnB1c2godGhpcy5zdGF0ZS5pZGVhVmFsdWVzW2ldIHx8ICcnKVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBxdWFudGlkYWRlSURFQTogbWF4UXVhbnRpZGFkZSxcclxuICAgICAgaWRlYVZhbHVlc1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIC8vIEF0dWFsaXphIHVtIHZhbG9yIGRlIElERUEgZXNwZWPDrWZpY29cclxuICBoYW5kbGVJZGVhVmFsdWVDaGFuZ2UgPSAoaW5kZXg6IG51bWJlciwgdmFsdWU6IHN0cmluZykgPT4ge1xyXG4gICAgY29uc3QgaWRlYVZhbHVlcyA9IFsuLi50aGlzLnN0YXRlLmlkZWFWYWx1ZXNdXHJcbiAgICBpZGVhVmFsdWVzW2luZGV4XSA9IHZhbHVlXHJcbiAgICB0aGlzLnNldFN0YXRlKHsgaWRlYVZhbHVlcyB9KVxyXG4gIH1cclxuXHJcbiAgLy8gVmFsaWRhIG8gc2hhcGVmaWxlIGRlbnRybyBkbyBaSVBcclxuICBwcml2YXRlIGFzeW5jIHZhbGlkYXRlU2hhcGVmaWxlSW5aaXAoemlwRmlsZTogRmlsZSk6IFByb21pc2U8eyB2YWxpZDogYm9vbGVhbjsgbWVzc2FnZTogc3RyaW5nOyBmaWxlQ291bnQ/OiBudW1iZXIgfT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgLy8gQ2FycmVnYSBKU1ppcCBkaW5hbWljYW1lbnRlXHJcbiAgICAgIGNvbnN0IEpTWmlwID0gKGF3YWl0IGltcG9ydCgnanN6aXAnKSkuZGVmYXVsdFxyXG4gICAgICBcclxuICAgICAgY29uc29sZS5sb2coJz09PSBWQUxJREFORE8gU0hBUEVGSUxFIE5PIFpJUCA9PT0nKVxyXG4gICAgICBjb25zb2xlLmxvZygnTGVuZG8gYXJxdWl2byBaSVA6JywgemlwRmlsZS5uYW1lLCAnVGFtYW5obzonLCB6aXBGaWxlLnNpemUsICdieXRlcycpXHJcbiAgICAgIFxyXG4gICAgICAvLyBMw6ogbyBhcnF1aXZvIFpJUFxyXG4gICAgICBjb25zdCB6aXBEYXRhID0gYXdhaXQgemlwRmlsZS5hcnJheUJ1ZmZlcigpXHJcbiAgICAgIGNvbnN0IHppcCA9IGF3YWl0IEpTWmlwLmxvYWRBc3luYyh6aXBEYXRhKVxyXG4gICAgICBcclxuICAgICAgLy8gTGlzdGEgdG9kb3Mgb3MgYXJxdWl2b3Mgbm8gWklQXHJcbiAgICAgIGNvbnN0IGZpbGVOYW1lcyA9IE9iamVjdC5rZXlzKHppcC5maWxlcylcclxuICAgICAgY29uc29sZS5sb2coJ0FycXVpdm9zIGVuY29udHJhZG9zIG5vIFpJUDonLCBmaWxlTmFtZXMpXHJcbiAgICAgIFxyXG4gICAgICAvLyBQcm9jdXJhIHBlbG9zIGFycXVpdm9zIGVzc2VuY2lhaXMgZG8gc2hhcGVmaWxlXHJcbiAgICAgIGNvbnN0IHJlcXVpcmVkRXh0ZW5zaW9ucyA9IFsnLnNocCcsICcuc2h4JywgJy5kYmYnXVxyXG4gICAgICBjb25zdCBmb3VuZEZpbGVzOiBzdHJpbmdbXSA9IFtdXHJcbiAgICAgIGNvbnN0IG1pc3NpbmdGaWxlczogc3RyaW5nW10gPSBbXVxyXG4gICAgICBcclxuICAgICAgLy8gUHJvY3VyYSBwb3IgYXJxdWl2b3MgY29tIGFzIGV4dGVuc8O1ZXMgbmVjZXNzw6FyaWFzXHJcbiAgICAgIHJlcXVpcmVkRXh0ZW5zaW9ucy5mb3JFYWNoKGV4dCA9PiB7XHJcbiAgICAgICAgY29uc3QgZm91bmQgPSBmaWxlTmFtZXMuZmluZChuYW1lID0+IG5hbWUudG9Mb3dlckNhc2UoKS5lbmRzV2l0aChleHQpKVxyXG4gICAgICAgIGlmIChmb3VuZCkge1xyXG4gICAgICAgICAgZm91bmRGaWxlcy5wdXNoKGZvdW5kKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBtaXNzaW5nRmlsZXMucHVzaChleHQpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICBcclxuICAgICAgY29uc29sZS5sb2coJ0FycXVpdm9zIGVuY29udHJhZG9zOicsIGZvdW5kRmlsZXMpXHJcbiAgICAgIGNvbnNvbGUubG9nKCdBcnF1aXZvcyBmYWx0YW5kbzonLCBtaXNzaW5nRmlsZXMpXHJcbiAgICAgIFxyXG4gICAgICAvLyBWZXJpZmljYSBzZSB0ZW0gb3MgYXJxdWl2b3MgZXNzZW5jaWFpc1xyXG4gICAgICBpZiAobWlzc2luZ0ZpbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgdmFsaWQ6IGZhbHNlLFxyXG4gICAgICAgICAgbWVzc2FnZTogYE8gYXJxdWl2byBaSVAgbsOjbyBjb250w6ltIHRvZG9zIG9zIGFycXVpdm9zIG5lY2Vzc8OhcmlvcyBkbyBzaGFwZWZpbGUuXFxuXFxuYCArXHJcbiAgICAgICAgICAgIGBBcnF1aXZvcyBlbmNvbnRyYWRvczogJHtmb3VuZEZpbGVzLmxlbmd0aCA+IDAgPyBmb3VuZEZpbGVzLmpvaW4oJywgJykgOiAnTmVuaHVtJ31cXG5gICtcclxuICAgICAgICAgICAgYEFycXVpdm9zIGZhbHRhbmRvOiAke21pc3NpbmdGaWxlcy5qb2luKCcsICcpfVxcblxcbmAgK1xyXG4gICAgICAgICAgICBgVW0gc2hhcGVmaWxlIGNvbXBsZXRvIHByZWNpc2EgZGU6XFxuYCArXHJcbiAgICAgICAgICAgIGAtIC5zaHAgKGdlb21ldHJpYSlcXG5gICtcclxuICAgICAgICAgICAgYC0gLnNoeCAow61uZGljZSlcXG5gICtcclxuICAgICAgICAgICAgYC0gLmRiZiAoYXRyaWJ1dG9zKVxcbmAgK1xyXG4gICAgICAgICAgICBgLSAucHJqIChwcm9qZcOnw6NvIC0gb3BjaW9uYWwpYCxcclxuICAgICAgICAgIGZpbGVDb3VudDogZmlsZU5hbWVzLmxlbmd0aFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLy8gVGVudGEgbGVyIG8gYXJxdWl2byAuc2hwIHBhcmEgdmFsaWRhciBnZW9tZXRyaWFzXHJcbiAgICAgIGNvbnN0IHNocEZpbGUgPSBmb3VuZEZpbGVzLmZpbmQoZiA9PiBmLnRvTG93ZXJDYXNlKCkuZW5kc1dpdGgoJy5zaHAnKSlcclxuICAgICAgaWYgKHNocEZpbGUpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3Qgc2hwRGF0YSA9IGF3YWl0IHppcC5maWxlc1tzaHBGaWxlXS5hc3luYygnYXJyYXlidWZmZXInKVxyXG4gICAgICAgICAgY29uc29sZS5sb2coJ0FycXVpdm8gLnNocCBlbmNvbnRyYWRvLCB0YW1hbmhvOicsIHNocERhdGEuYnl0ZUxlbmd0aCwgJ2J5dGVzJylcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLy8gVmFsaWRhw6fDo28gYsOhc2ljYTogdmVyaWZpY2Egc2UgbyBhcnF1aXZvIC5zaHAgdGVtIHVtIHRhbWFuaG8gbcOtbmltb1xyXG4gICAgICAgICAgLy8gVW0gc2hhcGVmaWxlIHbDoWxpZG8gcHJlY2lzYSB0ZXIgcGVsbyBtZW5vcyBvIGhlYWRlciAoMTAwIGJ5dGVzKSArIGFsZ3VucyByZWdpc3Ryb3NcclxuICAgICAgICAgIGlmIChzaHBEYXRhLmJ5dGVMZW5ndGggPCAxMDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICB2YWxpZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgbWVzc2FnZTogJ08gYXJxdWl2byAuc2hwIGVzdMOhIG11aXRvIHBlcXVlbm8gb3UgY29ycm9tcGlkby4gVGFtYW5obyBtw61uaW1vIGVzcGVyYWRvOiAxMDAgYnl0ZXMuJyxcclxuICAgICAgICAgICAgICBmaWxlQ291bnQ6IGZpbGVOYW1lcy5sZW5ndGhcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAvLyBWYWxpZGHDp8OjbyBiw6FzaWNhIGRvIHNoYXBlZmlsZSAoc2VtIHNocGpzKVxyXG4gICAgICAgICAgLy8gc2hwanMgZm9pIHJlbW92aWRvIC0gdXNhbmRvIGFwZW5hcyB2YWxpZGHDp8OjbyBiw6FzaWNhIGRvIGhlYWRlclxyXG4gICAgICAgICAgY29uc29sZS5sb2coJ0ZhemVuZG8gdmFsaWRhw6fDo28gYsOhc2ljYSBkbyBhcnF1aXZvLi4uJylcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLy8gVmFsaWRhw6fDo28gYsOhc2ljYTogdmVyaWZpY2EgbyBoZWFkZXIgZG8gc2hhcGVmaWxlXHJcbiAgICAgICAgICBjb25zdCB2aWV3ID0gbmV3IERhdGFWaWV3KHNocERhdGEpXHJcbiAgICAgICAgICBjb25zdCBmaWxlQ29kZSA9IHZpZXcuZ2V0SW50MzIoMCwgZmFsc2UpIC8vIEJpZyBlbmRpYW5cclxuICAgICAgICAgIGNvbnN0IHNoYXBlVHlwZSA9IHZpZXcuZ2V0SW50MzIoMzIsIHRydWUpIC8vIExpdHRsZSBlbmRpYW5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLy8gQ8OzZGlnbyBkZSBhcnF1aXZvIHNoYXBlZmlsZSB2w6FsaWRvIMOpIDk5OTRcclxuICAgICAgICAgIGlmIChmaWxlQ29kZSAhPT0gOTk5NCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgIHZhbGlkOiBmYWxzZSxcclxuICAgICAgICAgICAgICBtZXNzYWdlOiAnTyBhcnF1aXZvIC5zaHAgbsOjbyBwYXJlY2Ugc2VyIHVtIHNoYXBlZmlsZSB2w6FsaWRvLlxcblxcbicgK1xyXG4gICAgICAgICAgICAgICAgJ0PDs2RpZ28gZGUgYXJxdWl2byBlc3BlcmFkbzogOTk5NFxcbicgK1xyXG4gICAgICAgICAgICAgICAgYEPDs2RpZ28gZW5jb250cmFkbzogJHtmaWxlQ29kZX1gLFxyXG4gICAgICAgICAgICAgIGZpbGVDb3VudDogZmlsZU5hbWVzLmxlbmd0aFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC8vIFNoYXBlVHlwZSA1ID0gUG9seWdvblxyXG4gICAgICAgICAgaWYgKHNoYXBlVHlwZSAhPT0gNSkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgIHZhbGlkOiBmYWxzZSxcclxuICAgICAgICAgICAgICBtZXNzYWdlOiBgTyBzaGFwZWZpbGUgbsOjbyBjb250w6ltIHBvbMOtZ29ub3MuXFxuXFxuYCArXHJcbiAgICAgICAgICAgICAgICBgVGlwbyBkZSBnZW9tZXRyaWEgZW5jb250cmFkbzogJHtzaGFwZVR5cGV9XFxuYCArXHJcbiAgICAgICAgICAgICAgICBgVGlwbyBlc3BlcmFkbzogNSAoUG9seWdvbilcXG5cXG5gICtcclxuICAgICAgICAgICAgICAgIGBFc3RlIHdpZGdldCByZXF1ZXIgZ2VvbWV0cmlhcyBkbyB0aXBvIFBvbHlnb24uYCxcclxuICAgICAgICAgICAgICBmaWxlQ291bnQ6IGZpbGVOYW1lcy5sZW5ndGhcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB2YWxpZDogdHJ1ZSxcclxuICAgICAgICAgICAgbWVzc2FnZTogJ1NoYXBlZmlsZSB2YWxpZGFkbyAodmFsaWRhw6fDo28gYsOhc2ljYSkuIEFycXVpdm8gcGFyZWNlIGVzdGFyIGNvcnJldG8uJyxcclxuICAgICAgICAgICAgZmlsZUNvdW50OiBmaWxlTmFtZXMubGVuZ3RoXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAocmVhZEVycm9yKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvIGFvIGxlciBhcnF1aXZvIC5zaHA6JywgcmVhZEVycm9yKVxyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdmFsaWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBgRXJybyBhbyBsZXIgbyBhcnF1aXZvIC5zaHA6ICR7cmVhZEVycm9yLm1lc3NhZ2V9YCxcclxuICAgICAgICAgICAgZmlsZUNvdW50OiBmaWxlTmFtZXMubGVuZ3RoXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHZhbGlkOiBmYWxzZSxcclxuICAgICAgICBtZXNzYWdlOiAnTsOjbyBmb2kgcG9zc8OtdmVsIGVuY29udHJhciBvIGFycXVpdm8gLnNocCBubyBaSVAuJyxcclxuICAgICAgICBmaWxlQ291bnQ6IGZpbGVOYW1lcy5sZW5ndGhcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJybyBhbyB2YWxpZGFyIHNoYXBlZmlsZTonLCBlcnJvcilcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB2YWxpZDogZmFsc2UsXHJcbiAgICAgICAgbWVzc2FnZTogYEVycm8gYW8gdmFsaWRhciBvIGFycXVpdm8gWklQOiAke2Vycm9yLm1lc3NhZ2V9XFxuXFxuYCArXHJcbiAgICAgICAgICAnUG9yIGZhdm9yLCB2ZXJpZmlxdWUgc2UgbyBhcnF1aXZvIMOpIHVtIFpJUCB2w6FsaWRvIGNvbnRlbmRvIHVtIHNoYXBlZmlsZSBjb21wbGV0by4nXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIE1hbmlwdWxhIG8gdXBsb2FkIGRvIHNoYXBlZmlsZVxyXG4gIGhhbmRsZVNoYXBlZmlsZVVwbG9hZCA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgY29uc3QgZmlsZSA9IGV2ZW50LnRhcmdldC5maWxlcz8uWzBdXHJcbiAgICBpZiAoZmlsZSkge1xyXG4gICAgICBpZiAoZmlsZS5uYW1lLnRvTG93ZXJDYXNlKCkuZW5kc1dpdGgoJy56aXAnKSkge1xyXG4gICAgICAgIC8vIFZhbGlkYSBvIHNoYXBlZmlsZSBhbnRlcyBkZSBzYWx2YXJcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSB9KVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCB2YWxpZGF0aW9uID0gYXdhaXQgdGhpcy52YWxpZGF0ZVNoYXBlZmlsZUluWmlwKGZpbGUpXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGlmICh2YWxpZGF0aW9uLnZhbGlkKSB7XHJcbiAgICAgICAgICAgIC8vIEzDqiBvIHNoYXBlZmlsZSBlIGFkaWNpb25hIGNvbW8gY2FtYWRhIGxvY2FsIGFvIG1hcGFcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5hZGRTaGFwZWZpbGVMYXllckZyb21aaXAoZmlsZSlcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNoYXBlZmlsZUZpbGU6IGZpbGUsIGxvYWRpbmc6IGZhbHNlIH0pXHJcbiAgICAgICAgICAgIGFsZXJ0KGDinJMgJHt2YWxpZGF0aW9uLm1lc3NhZ2V9XFxuXFxuQSBjYW1hZGEgZm9pIGFkaWNpb25hZGEgYW8gbWFwYS5gKVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNoYXBlZmlsZUZpbGU6IG51bGwsIHNoYXBlZmlsZUxheWVyOiBudWxsLCBzaGFwZWZpbGVHZW9tZXRyeTogbnVsbCwgbG9hZGluZzogZmFsc2UgfSlcclxuICAgICAgICAgICAgYWxlcnQoYOKdjCAke3ZhbGlkYXRpb24ubWVzc2FnZX1gKVxyXG4gICAgICAgICAgICAvLyBMaW1wYSBvIGlucHV0XHJcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC52YWx1ZSA9ICcnXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm8gYW8gdmFsaWRhciBzaGFwZWZpbGU6JywgZXJyb3IpXHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSlcclxuICAgICAgICAgIGFsZXJ0KGBFcnJvIGFvIHZhbGlkYXIgbyBhcnF1aXZvOiAke2Vycm9yLm1lc3NhZ2V9XFxuXFxuTyBhcnF1aXZvIHNlcsOhIGVudmlhZG8gbWVzbW8gYXNzaW0sIG1hcyBwb2RlIGZhbGhhciBubyBzZXJ2aWRvci5gKVxyXG4gICAgICAgICAgLy8gVGVudGEgYWRpY2lvbmFyIG1lc21vIGFzc2ltXHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLmFkZFNoYXBlZmlsZUxheWVyRnJvbVppcChmaWxlKVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hhcGVmaWxlRmlsZTogZmlsZSB9KVxyXG4gICAgICAgICAgfSBjYXRjaCAoYWRkRXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJybyBhbyBhZGljaW9uYXIgY2FtYWRhOicsIGFkZEVycm9yKVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hhcGVmaWxlRmlsZTogbnVsbCwgc2hhcGVmaWxlTGF5ZXI6IG51bGwsIHNoYXBlZmlsZUdlb21ldHJ5OiBudWxsIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGFsZXJ0KCdQb3IgZmF2b3IsIGZhw6dhIHVwbG9hZCBkZSB1bSBhcnF1aXZvIFpJUCBjb250ZW5kbyBvIHNoYXBlZmlsZS4nKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBMw6ogbyBzaGFwZWZpbGUgZG8gWklQIGUgYWRpY2lvbmEgY29tbyBjYW1hZGEgbG9jYWwgYW8gbWFwYVxyXG4gIHByaXZhdGUgYXN5bmMgYWRkU2hhcGVmaWxlTGF5ZXJGcm9tWmlwKHppcEZpbGU6IEZpbGUpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGlmICghdGhpcy5zdGF0ZS5qaW11TWFwVmlldz8udmlldz8ubWFwKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignTyBtYXBhIG7Do28gZXN0w6EgY2FycmVnYWRvLiBBZ3VhcmRlIG8gbWFwYSBjYXJyZWdhciBjb21wbGV0YW1lbnRlLicpXHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc29sZS5sb2coJz09PSBMRU5ETyBTSEFQRUZJTEUgRSBBRElDSU9OQU5ETyBDQU1BREEgTE9DQUwgPT09JylcclxuICAgICAgXHJcbiAgICAgIC8vIENhcnJlZ2EgbcOzZHVsb3MgbmVjZXNzw6FyaW9zXHJcbiAgICAgIGNvbnN0IG1vZHVsZXMgPSBhd2FpdCBsb2FkQXJjR0lTSlNBUElNb2R1bGVzKFtcclxuICAgICAgICAnZXNyaS9sYXllcnMvRmVhdHVyZUxheWVyJyxcclxuICAgICAgICAnZXNyaS9nZW9tZXRyeS9Qb2x5Z29uJyxcclxuICAgICAgICAnZXNyaS9HcmFwaGljJyxcclxuICAgICAgICAnZXNyaS9nZW9tZXRyeS9TcGF0aWFsUmVmZXJlbmNlJyxcclxuICAgICAgICAnZXNyaS9nZW9tZXRyeS9nZW9tZXRyeUVuZ2luZSdcclxuICAgICAgXSlcclxuICAgICAgY29uc3QgW0ZlYXR1cmVMYXllciwgUG9seWdvbiwgR3JhcGhpYywgU3BhdGlhbFJlZmVyZW5jZSwgZ2VvbWV0cnlFbmdpbmVdID0gbW9kdWxlc1xyXG4gICAgICB0aGlzLkZlYXR1cmVMYXllciA9IEZlYXR1cmVMYXllclxyXG4gICAgICBcclxuICAgICAgLy8gUmVtb3ZlIGNhbWFkYSBhbnRlcmlvciBzZSBleGlzdGlyXHJcbiAgICAgIGlmICh0aGlzLnN0YXRlLnNoYXBlZmlsZUxheWVyICYmIHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldy5tYXApIHtcclxuICAgICAgICB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcubWFwLnJlbW92ZSh0aGlzLnN0YXRlLnNoYXBlZmlsZUxheWVyKVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvLyBMw6ogbyBaSVBcclxuICAgICAgY29uc3QgSlNaaXAgPSAoYXdhaXQgaW1wb3J0KCdqc3ppcCcpKS5kZWZhdWx0XHJcbiAgICAgIGNvbnN0IHppcEJ1ZmZlciA9IGF3YWl0IHppcEZpbGUuYXJyYXlCdWZmZXIoKVxyXG4gICAgICBjb25zdCB6aXAgPSBhd2FpdCBKU1ppcC5sb2FkQXN5bmMoemlwQnVmZmVyKVxyXG4gICAgICBcclxuICAgICAgLy8gRW5jb250cmEgYXJxdWl2b3MgZG8gc2hhcGVmaWxlXHJcbiAgICAgIGNvbnN0IGZpbGVOYW1lcyA9IE9iamVjdC5rZXlzKHppcC5maWxlcylcclxuICAgICAgY29uc3Qgc2hwRmlsZSA9IGZpbGVOYW1lcy5maW5kKG5hbWUgPT4gbmFtZS50b0xvd2VyQ2FzZSgpLmVuZHNXaXRoKCcuc2hwJykpXHJcbiAgICAgIGNvbnN0IGRiZkZpbGUgPSBmaWxlTmFtZXMuZmluZChuYW1lID0+IG5hbWUudG9Mb3dlckNhc2UoKS5lbmRzV2l0aCgnLmRiZicpKVxyXG4gICAgICBjb25zdCBwcmpGaWxlID0gZmlsZU5hbWVzLmZpbmQobmFtZSA9PiBuYW1lLnRvTG93ZXJDYXNlKCkuZW5kc1dpdGgoJy5wcmonKSlcclxuICAgICAgXHJcbiAgICAgIGlmICghc2hwRmlsZSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQXJxdWl2byAuc2hwIG7Do28gZW5jb250cmFkbyBubyBaSVAnKVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvLyBMw6ogbyBhcnF1aXZvIC5zaHBcclxuICAgICAgY29uc3Qgc2hwRmlsZU9iaiA9IHppcC5maWxlKHNocEZpbGUpXHJcbiAgICAgIGlmICghc2hwRmlsZU9iaikge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTsOjbyBmb2kgcG9zc8OtdmVsIGxlciBvIGFycXVpdm8gLnNocCcpXHJcbiAgICAgIH1cclxuICAgICAgY29uc3Qgc2hwRGF0YSA9IGF3YWl0IHNocEZpbGVPYmouYXN5bmMoJ2FycmF5YnVmZmVyJylcclxuICAgICAgXHJcbiAgICAgIC8vIEzDqiBvIGFycXVpdm8gLnByaiBwYXJhIG9idGVyIG8gc2lzdGVtYSBkZSBjb29yZGVuYWRhc1xyXG4gICAgICBsZXQgc3BhdGlhbFJlZmVyZW5jZTogYW55ID0geyB3a2lkOiA0Njc0IH0gLy8gUGFkcsOjbyBTSVJHQVMgMjAwMFxyXG4gICAgICBsZXQgb3JpZ2luYWxXa2lkOiBudW1iZXIgfCBudWxsID0gbnVsbFxyXG4gICAgICBpZiAocHJqRmlsZSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCBwcmpGaWxlT2JqID0gemlwLmZpbGUocHJqRmlsZSlcclxuICAgICAgICAgIGlmICghcHJqRmlsZU9iaikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ07Do28gZm9pIHBvc3PDrXZlbCBsZXIgbyBhcnF1aXZvIC5wcmonKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY29uc3QgcHJqVGV4dCA9IGF3YWl0IHByakZpbGVPYmouYXN5bmMoJ3N0cmluZycpXHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnUFJKIGVuY29udHJhZG86JywgcHJqVGV4dClcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLy8gRXh0cmFpIFdLSUQgZG8gUFJKIChzdXBvcnRhIHbDoXJpb3Mgc2lzdGVtYXMpXHJcbiAgICAgICAgICAvLyBTSVJHQVMgMjAwMCAvIDQ2NzRcclxuICAgICAgICAgIGlmIChwcmpUZXh0LmluY2x1ZGVzKCc0Njc0JykgfHwgcHJqVGV4dC5pbmNsdWRlcygnU0lSR0FTIDIwMDAnKSkge1xyXG4gICAgICAgICAgICBzcGF0aWFsUmVmZXJlbmNlID0geyB3a2lkOiA0Njc0IH1cclxuICAgICAgICAgICAgb3JpZ2luYWxXa2lkID0gNDY3NFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLy8gV0dTODQgLyA0MzI2XHJcbiAgICAgICAgICBlbHNlIGlmIChwcmpUZXh0LmluY2x1ZGVzKCc0MzI2JykgfHwgcHJqVGV4dC5pbmNsdWRlcygnV0dTIDg0JykpIHtcclxuICAgICAgICAgICAgc3BhdGlhbFJlZmVyZW5jZSA9IHsgd2tpZDogNDMyNiB9XHJcbiAgICAgICAgICAgIG9yaWdpbmFsV2tpZCA9IDQzMjZcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC8vIFdlYiBNZXJjYXRvciAvIDM4NTdcclxuICAgICAgICAgIGVsc2UgaWYgKHByalRleHQuaW5jbHVkZXMoJzM4NTcnKSB8fCBwcmpUZXh0LmluY2x1ZGVzKCdXZWIgTWVyY2F0b3InKSkge1xyXG4gICAgICAgICAgICBzcGF0aWFsUmVmZXJlbmNlID0geyB3a2lkOiAzODU3IH1cclxuICAgICAgICAgICAgb3JpZ2luYWxXa2lkID0gMzg1N1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLy8gVVRNIChkaXZlcnNvcyBmdXNvcylcclxuICAgICAgICAgIGVsc2UgaWYgKHByalRleHQuaW5jbHVkZXMoJ1VUTScpIHx8IHByalRleHQuaW5jbHVkZXMoJ1VuaXZlcnNhbCBUcmFuc3ZlcnNlIE1lcmNhdG9yJykpIHtcclxuICAgICAgICAgICAgLy8gVGVudGEgZXh0cmFpciBvIFdLSUQgZG8gVVRNIGRvIFBSSlxyXG4gICAgICAgICAgICBjb25zdCB1dG1NYXRjaCA9IHByalRleHQubWF0Y2goL0FVVEhPUklUWVxcW1wiRVBTR1wiLFwiKFxcZCspXCJcXF0vKVxyXG4gICAgICAgICAgICBpZiAodXRtTWF0Y2gpIHtcclxuICAgICAgICAgICAgICBjb25zdCB1dG1Xa2lkID0gcGFyc2VJbnQodXRtTWF0Y2hbMV0pXHJcbiAgICAgICAgICAgICAgc3BhdGlhbFJlZmVyZW5jZSA9IHsgd2tpZDogdXRtV2tpZCB9XHJcbiAgICAgICAgICAgICAgb3JpZ2luYWxXa2lkID0gdXRtV2tpZFxyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBXS0lEIFVUTSBkZXRlY3RhZG86ICR7dXRtV2tpZH1gKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIC8vIFVUTSBjb211bSBubyBCcmFzaWw6IDMxOTgzIChVVE0gWm9uZSAyM1MpIG91IDMxOTg0IChVVE0gWm9uZSAyNFMpXHJcbiAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdVVE0gZGV0ZWN0YWRvIG1hcyBXS0lEIG7Do28gZW5jb250cmFkby4gQXNzdW1pbmRvIFVUTSBab25lIDIzUyAoMzE5ODMpJylcclxuICAgICAgICAgICAgICBzcGF0aWFsUmVmZXJlbmNlID0geyB3a2lkOiAzMTk4MyB9XHJcbiAgICAgICAgICAgICAgb3JpZ2luYWxXa2lkID0gMzE5ODNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLy8gVGVudGEgZXh0cmFpciBXS0lEIGRpcmV0YW1lbnRlIGRvIFBSSlxyXG4gICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHdraWRNYXRjaCA9IHByalRleHQubWF0Y2goL0FVVEhPUklUWVxcW1wiRVBTR1wiLFwiKFxcZCspXCJcXF18V0tJRFxccyo9XFxzKihcXGQrKXxFUFNHOihcXGQrKS9pKVxyXG4gICAgICAgICAgICBpZiAod2tpZE1hdGNoKSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgZXh0cmFjdGVkV2tpZCA9IHBhcnNlSW50KHdraWRNYXRjaFsxXSB8fCB3a2lkTWF0Y2hbMl0gfHwgd2tpZE1hdGNoWzNdKVxyXG4gICAgICAgICAgICAgIHNwYXRpYWxSZWZlcmVuY2UgPSB7IHdraWQ6IGV4dHJhY3RlZFdraWQgfVxyXG4gICAgICAgICAgICAgIG9yaWdpbmFsV2tpZCA9IGV4dHJhY3RlZFdraWRcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgV0tJRCBleHRyYcOtZG8gZG8gUFJKOiAke2V4dHJhY3RlZFdraWR9YClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnU3BhdGlhbFJlZmVyZW5jZSBkZXRlY3RhZG86Jywgc3BhdGlhbFJlZmVyZW5jZSlcclxuICAgICAgICB9IGNhdGNoIChwcmpFcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS53YXJuKCdFcnJvIGFvIGxlciBQUkosIHVzYW5kbyBwYWRyw6NvIFNJUkdBUyAyMDAwICg0Njc0KTonLCBwcmpFcnJvcilcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8vIFdLSUQgYWx2byBwYXJhIGVudmlvIChTSVJHQVMgMjAwMClcclxuICAgICAgY29uc3QgdGFyZ2V0V2tpZCA9IDQ2NzRcclxuICAgICAgXHJcbiAgICAgIC8vIEZheiBwYXJzaW5nIGLDoXNpY28gZG8gc2hhcGVmaWxlIChhcGVuYXMgcGFyYSBwb2zDrWdvbm9zIHNpbXBsZXMpXHJcbiAgICAgIC8vIE5PVEE6IEVzdGUgw6kgdW0gcGFyc2VyIHNpbXBsaWZpY2FkbyAtIHBvZGUgbsOjbyBmdW5jaW9uYXIgcGFyYSB0b2RvcyBvcyBzaGFwZWZpbGVzXHJcbiAgICAgIGNvbnN0IHZpZXcgPSBuZXcgRGF0YVZpZXcoc2hwRGF0YSlcclxuICAgICAgY29uc3QgZmlsZUNvZGUgPSB2aWV3LmdldEludDMyKDAsIGZhbHNlKSAvLyBCaWcgZW5kaWFuXHJcbiAgICAgIFxyXG4gICAgICBpZiAoZmlsZUNvZGUgIT09IDk5OTQpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FycXVpdm8gLnNocCBpbnbDoWxpZG8nKVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvLyBMw6ogbyBoZWFkZXJcclxuICAgICAgY29uc3QgZmlsZUxlbmd0aCA9IHZpZXcuZ2V0SW50MzIoMjQsIGZhbHNlKSAqIDIgLy8gRW0gYnl0ZXNcclxuICAgICAgY29uc3QgdmVyc2lvbiA9IHZpZXcuZ2V0SW50MzIoMjgsIHRydWUpIC8vIExpdHRsZSBlbmRpYW5cclxuICAgICAgY29uc3Qgc2hhcGVUeXBlID0gdmlldy5nZXRJbnQzMigzMiwgdHJ1ZSkgLy8gTGl0dGxlIGVuZGlhblxyXG4gICAgICBcclxuICAgICAgaWYgKHNoYXBlVHlwZSAhPT0gNSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVGlwbyBkZSBnZW9tZXRyaWEgbsOjbyBzdXBvcnRhZG86ICR7c2hhcGVUeXBlfS4gQXBlbmFzIHBvbMOtZ29ub3MgKHRpcG8gNSkgc8OjbyBzdXBvcnRhZG9zLmApXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8vIEzDqiBvIGJvdW5kaW5nIGJveFxyXG4gICAgICBjb25zdCB4TWluID0gdmlldy5nZXRGbG9hdDY0KDM2LCB0cnVlKVxyXG4gICAgICBjb25zdCB5TWluID0gdmlldy5nZXRGbG9hdDY0KDQ0LCB0cnVlKVxyXG4gICAgICBjb25zdCB4TWF4ID0gdmlldy5nZXRGbG9hdDY0KDUyLCB0cnVlKVxyXG4gICAgICBjb25zdCB5TWF4ID0gdmlldy5nZXRGbG9hdDY0KDYwLCB0cnVlKVxyXG4gICAgICBcclxuICAgICAgY29uc29sZS5sb2coJ0JvdW5kaW5nIGJveDonLCB7IHhNaW4sIHlNaW4sIHhNYXgsIHlNYXggfSlcclxuICAgICAgXHJcbiAgICAgIC8vIEzDqiBhcyBmZWF0dXJlcyAoc2ltcGxpZmljYWRvIC0gYXBlbmFzIHByaW1laXJhIGZlYXR1cmUpXHJcbiAgICAgIGxldCBvZmZzZXQgPSAxMDAgLy8gSGVhZGVyIHRlbSAxMDAgYnl0ZXNcclxuICAgICAgY29uc3QgZmVhdHVyZXM6IGFueVtdID0gW11cclxuICAgICAgXHJcbiAgICAgIHdoaWxlIChvZmZzZXQgPCBmaWxlTGVuZ3RoIC0gOCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAvLyBSZWNvcmQgaGVhZGVyXHJcbiAgICAgICAgICBjb25zdCByZWNvcmROdW1iZXIgPSB2aWV3LmdldEludDMyKG9mZnNldCwgZmFsc2UpXHJcbiAgICAgICAgICBjb25zdCBjb250ZW50TGVuZ3RoID0gdmlldy5nZXRJbnQzMihvZmZzZXQgKyA0LCBmYWxzZSkgKiAyXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGlmIChyZWNvcmROdW1iZXIgPT09IDAgfHwgY29udGVudExlbmd0aCA9PT0gMCkgYnJlYWtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgb2Zmc2V0ICs9IDhcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLy8gU2hhcGUgdHlwZVxyXG4gICAgICAgICAgY29uc3QgcmVjb3JkU2hhcGVUeXBlID0gdmlldy5nZXRJbnQzMihvZmZzZXQsIHRydWUpXHJcbiAgICAgICAgICBpZiAocmVjb3JkU2hhcGVUeXBlICE9PSA1KSB7XHJcbiAgICAgICAgICAgIG9mZnNldCArPSBjb250ZW50TGVuZ3RoXHJcbiAgICAgICAgICAgIGNvbnRpbnVlXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIG9mZnNldCArPSA0XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC8vIEJvdW5kaW5nIGJveCBkbyByZWNvcmRcclxuICAgICAgICAgIGNvbnN0IHJlY1hNaW4gPSB2aWV3LmdldEZsb2F0NjQob2Zmc2V0LCB0cnVlKVxyXG4gICAgICAgICAgY29uc3QgcmVjWU1pbiA9IHZpZXcuZ2V0RmxvYXQ2NChvZmZzZXQgKyA4LCB0cnVlKVxyXG4gICAgICAgICAgY29uc3QgcmVjWE1heCA9IHZpZXcuZ2V0RmxvYXQ2NChvZmZzZXQgKyAxNiwgdHJ1ZSlcclxuICAgICAgICAgIGNvbnN0IHJlY1lNYXggPSB2aWV3LmdldEZsb2F0NjQob2Zmc2V0ICsgMjQsIHRydWUpXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIG9mZnNldCArPSAzMlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAvLyBOw7ptZXJvIGRlIHBhcnRlc1xyXG4gICAgICAgICAgY29uc3QgbnVtUGFydHMgPSB2aWV3LmdldEludDMyKG9mZnNldCwgdHJ1ZSlcclxuICAgICAgICAgIG9mZnNldCArPSA0XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC8vIE7Dum1lcm8gZGUgcG9udG9zXHJcbiAgICAgICAgICBjb25zdCBudW1Qb2ludHMgPSB2aWV3LmdldEludDMyKG9mZnNldCwgdHJ1ZSlcclxuICAgICAgICAgIG9mZnNldCArPSA0XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGlmIChudW1Qb2ludHMgPT09IDApIHtcclxuICAgICAgICAgICAgb2Zmc2V0ICs9IGNvbnRlbnRMZW5ndGggLSA0NFxyXG4gICAgICAgICAgICBjb250aW51ZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAvLyBMw6ogb3Mgw61uZGljZXMgZGFzIHBhcnRlc1xyXG4gICAgICAgICAgY29uc3QgcGFydEluZGljZXM6IG51bWJlcltdID0gW11cclxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtUGFydHM7IGkrKykge1xyXG4gICAgICAgICAgICBwYXJ0SW5kaWNlcy5wdXNoKHZpZXcuZ2V0SW50MzIob2Zmc2V0LCB0cnVlKSlcclxuICAgICAgICAgICAgb2Zmc2V0ICs9IDRcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLy8gTMOqIG9zIHBvbnRvc1xyXG4gICAgICAgICAgY29uc3QgcmluZ3M6IG51bWJlcltdW11bXSA9IFtdXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhgPT09IENPT1JERU5BREFTIERPIFNIQVBFRklMRSA9PT1gKVxyXG4gICAgICAgICAgY29uc29sZS5sb2coYE7Dum1lcm8gZGUgcGFydGVzOiAke251bVBhcnRzfWApXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhgTsO6bWVybyB0b3RhbCBkZSBwb250b3M6ICR7bnVtUG9pbnRzfWApXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGZvciAobGV0IHBhcnRJbmRleCA9IDA7IHBhcnRJbmRleCA8IG51bVBhcnRzOyBwYXJ0SW5kZXgrKykge1xyXG4gICAgICAgICAgICBjb25zdCBzdGFydEluZGV4ID0gcGFydEluZGljZXNbcGFydEluZGV4XVxyXG4gICAgICAgICAgICBjb25zdCBlbmRJbmRleCA9IHBhcnRJbmRleCA8IG51bVBhcnRzIC0gMSA/IHBhcnRJbmRpY2VzW3BhcnRJbmRleCArIDFdIDogbnVtUG9pbnRzXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCByaW5nOiBudW1iZXJbXVtdID0gW11cclxuICAgICAgICAgICAgY29uc29sZS5sb2coYC0tLSBSaW5nICR7cGFydEluZGV4ICsgMX0gKMOtbmRpY2VzICR7c3RhcnRJbmRleH0gYSAke2VuZEluZGV4IC0gMX0pIC0tLWApXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gc3RhcnRJbmRleDsgaSA8IGVuZEluZGV4OyBpKyspIHtcclxuICAgICAgICAgICAgICBjb25zdCB4ID0gdmlldy5nZXRGbG9hdDY0KG9mZnNldCwgdHJ1ZSlcclxuICAgICAgICAgICAgICBjb25zdCB5ID0gdmlldy5nZXRGbG9hdDY0KG9mZnNldCArIDgsIHRydWUpXHJcbiAgICAgICAgICAgICAgcmluZy5wdXNoKFt4LCB5XSlcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgICBQb250byAke2kgLSBzdGFydEluZGV4ICsgMX06IFske3gudG9GaXhlZCg2KX0sICR7eS50b0ZpeGVkKDYpfV1gKVxyXG4gICAgICAgICAgICAgIG9mZnNldCArPSAxNlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBGZWNoYSBvIHJpbmcgc2UgbmVjZXNzw6FyaW9cclxuICAgICAgICAgICAgaWYgKHJpbmcubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGZpcnN0ID0gcmluZ1swXVxyXG4gICAgICAgICAgICAgIGNvbnN0IGxhc3QgPSByaW5nW3JpbmcubGVuZ3RoIC0gMV1cclxuICAgICAgICAgICAgICBjb25zdCBpc0Nsb3NlZCA9IGZpcnN0WzBdID09PSBsYXN0WzBdICYmIGZpcnN0WzFdID09PSBsYXN0WzFdXHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coYCAgUmluZyAke3BhcnRJbmRleCArIDF9IGVzdMOhIGZlY2hhZG86ICR7aXNDbG9zZWR9YClcclxuICAgICAgICAgICAgICBpZiAoIWlzQ2xvc2VkKSB7XHJcbiAgICAgICAgICAgICAgICByaW5nLnB1c2goW2ZpcnN0WzBdLCBmaXJzdFsxXV0pXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgICBSaW5nICR7cGFydEluZGV4ICsgMX0gZm9pIGZlY2hhZG8gYWRpY2lvbmFuZG8gcG9udG86IFske2ZpcnN0WzBdLnRvRml4ZWQoNil9LCAke2ZpcnN0WzFdLnRvRml4ZWQoNil9XWApXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAgIFRvdGFsIGRlIHBvbnRvcyBubyByaW5nICR7cGFydEluZGV4ICsgMX06ICR7cmluZy5sZW5ndGh9YClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmluZ3MucHVzaChyaW5nKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhgLS0tIFJlc3VtbyBkYXMgQ29vcmRlbmFkYXMgLS0tYClcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGBUb3RhbCBkZSByaW5nczogJHtyaW5ncy5sZW5ndGh9YClcclxuICAgICAgICAgIHJpbmdzLmZvckVhY2goKHJpbmcsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBSaW5nICR7aW5kZXggKyAxfTogJHtyaW5nLmxlbmd0aH0gcG9udG9zYClcclxuICAgICAgICAgICAgaWYgKHJpbmcubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAgIFByaW1laXJvIHBvbnRvOiBbJHtyaW5nWzBdWzBdLnRvRml4ZWQoNil9LCAke3JpbmdbMF1bMV0udG9GaXhlZCg2KX1dYClcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgICDDmmx0aW1vIHBvbnRvOiBbJHtyaW5nW3JpbmcubGVuZ3RoIC0gMV1bMF0udG9GaXhlZCg2KX0sICR7cmluZ1tyaW5nLmxlbmd0aCAtIDFdWzFdLnRvRml4ZWQoNil9XWApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC8vIENyaWEgYSBnZW9tZXRyaWEgdXNhbmRvIFBvbHlnb24gZG8gQXJjR0lTIGNvbSBhIHByb2plw6fDo28gb3JpZ2luYWxcclxuICAgICAgICAgIGxldCBwb2x5Z29uR2VvbWV0cnkgPSBuZXcgUG9seWdvbih7XHJcbiAgICAgICAgICAgIHJpbmdzOiByaW5ncyxcclxuICAgICAgICAgICAgc3BhdGlhbFJlZmVyZW5jZTogbmV3IFNwYXRpYWxSZWZlcmVuY2Uoc3BhdGlhbFJlZmVyZW5jZSlcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGA9PT0gR0VPTUVUUklBIENSSUFEQSA9PT1gKVxyXG4gICAgICAgICAgY29uc29sZS5sb2coYFRpcG86IFBvbHlnb25gKVxyXG4gICAgICAgICAgY29uc29sZS5sb2coYFNwYXRpYWxSZWZlcmVuY2Ugb3JpZ2luYWw6IFdLSUQgJHtzcGF0aWFsUmVmZXJlbmNlLndraWR9YClcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGBOw7ptZXJvIGRlIHJpbmdzOiAke3JpbmdzLmxlbmd0aH1gKVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAvLyBPYnTDqW0gbyBleHRlbnQgZGEgZ2VvbWV0cmlhIG9yaWdpbmFsXHJcbiAgICAgICAgICBjb25zdCBvcmlnaW5hbEV4dGVudCA9IHBvbHlnb25HZW9tZXRyeS5leHRlbnRcclxuICAgICAgICAgIGlmIChvcmlnaW5hbEV4dGVudCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgRXh0ZW50IG9yaWdpbmFsOmApXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGAgIFhNaW46ICR7b3JpZ2luYWxFeHRlbnQueG1pbj8udG9GaXhlZCg2KX1gKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgICBZTWluOiAke29yaWdpbmFsRXh0ZW50LnltaW4/LnRvRml4ZWQoNil9YClcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYCAgWE1heDogJHtvcmlnaW5hbEV4dGVudC54bWF4Py50b0ZpeGVkKDYpfWApXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGAgIFlNYXg6ICR7b3JpZ2luYWxFeHRlbnQueW1heD8udG9GaXhlZCg2KX1gKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAvLyBDb252ZXJ0ZSBwYXJhIFNJUkdBUyAyMDAwICg0Njc0KSBzZSBuZWNlc3PDoXJpb1xyXG4gICAgICAgICAgaWYgKHNwYXRpYWxSZWZlcmVuY2Uud2tpZCAhPT0gdGFyZ2V0V2tpZCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgPT09IENPTlZFUlRFTkRPIFBST0pFw4fDg08gPT09YClcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYERlOiBXS0lEICR7c3BhdGlhbFJlZmVyZW5jZS53a2lkfWApXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBQYXJhOiBXS0lEICR7dGFyZ2V0V2tpZH0gKFNJUkdBUyAyMDAwKWApXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgIC8vIFVzYSBnZW9tZXRyeUVuZ2luZSBwYXJhIHByb2pldGFyIGEgZ2VvbWV0cmlhXHJcbiAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0U3BhdGlhbFJlZiA9IG5ldyBTcGF0aWFsUmVmZXJlbmNlKHsgd2tpZDogdGFyZ2V0V2tpZCB9KVxyXG4gICAgICAgICAgICAgIGNvbnN0IHByb2plY3RlZEdlb21ldHJ5ID0gZ2VvbWV0cnlFbmdpbmUucHJvamVjdChwb2x5Z29uR2VvbWV0cnksIHRhcmdldFNwYXRpYWxSZWYpIGFzIF9fZXNyaS5Qb2x5Z29uXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgaWYgKHByb2plY3RlZEdlb21ldHJ5KSB7XHJcbiAgICAgICAgICAgICAgICBwb2x5Z29uR2VvbWV0cnkgPSBwcm9qZWN0ZWRHZW9tZXRyeVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYOKckyBHZW9tZXRyaWEgY29udmVydGlkYSBjb20gc3VjZXNzbyBwYXJhIFdLSUQgJHt0YXJnZXRXa2lkfWApXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIE1vc3RyYSBvIGV4dGVudCBhcMOzcyBjb252ZXJzw6NvXHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0ZWRFeHRlbnQgPSBwb2x5Z29uR2VvbWV0cnkuZXh0ZW50XHJcbiAgICAgICAgICAgICAgICBpZiAocHJvamVjdGVkRXh0ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBFeHRlbnQgYXDDs3MgY29udmVyc8OjbzpgKVxyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgICBYTWluOiAke3Byb2plY3RlZEV4dGVudC54bWluPy50b0ZpeGVkKDYpfWApXHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAgIFlNaW46ICR7cHJvamVjdGVkRXh0ZW50LnltaW4/LnRvRml4ZWQoNil9YClcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCAgWE1heDogJHtwcm9qZWN0ZWRFeHRlbnQueG1heD8udG9GaXhlZCg2KX1gKVxyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgICBZTWF4OiAke3Byb2plY3RlZEV4dGVudC55bWF4Py50b0ZpeGVkKDYpfWApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2Fybign4pqgIENvbnZlcnPDo28gcmV0b3Jub3UgbnVsbC4gVXNhbmRvIGdlb21ldHJpYSBvcmlnaW5hbC4nKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBjYXRjaCAocHJvamVjdEVycm9yKSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJybyBhbyBjb252ZXJ0ZXIgcHJvamXDp8OjbzonLCBwcm9qZWN0RXJyb3IpXHJcbiAgICAgICAgICAgICAgY29uc29sZS53YXJuKCfimqAgVXNhbmRvIGdlb21ldHJpYSBuYSBwcm9qZcOnw6NvIG9yaWdpbmFsLiBBIEdQIHRvb2wgcG9kZSBuw6NvIGFjZWl0YXIuJylcclxuICAgICAgICAgICAgICAvLyBDb250aW51YSBjb20gYSBnZW9tZXRyaWEgb3JpZ2luYWxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYOKckyBHZW9tZXRyaWEgasOhIGVzdMOhIGVtIFNJUkdBUyAyMDAwICg0Njc0KS4gTsOjbyDDqSBuZWNlc3PDoXJpbyBjb252ZXJ0ZXIuYClcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLy8gQ3JpYSBhIGZlYXR1cmUgY29tbyBHcmFwaGljXHJcbiAgICAgICAgICBjb25zdCBncmFwaGljID0gbmV3IEdyYXBoaWMoe1xyXG4gICAgICAgICAgICBnZW9tZXRyeTogcG9seWdvbkdlb21ldHJ5LFxyXG4gICAgICAgICAgICBhdHRyaWJ1dGVzOiB7XHJcbiAgICAgICAgICAgICAgT0JKRUNUSUQ6IGZlYXR1cmVzLmxlbmd0aCArIDFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgZmVhdHVyZXMucHVzaChncmFwaGljKVxyXG4gICAgICAgICAgY29uc29sZS5sb2coYOKckyBGZWF0dXJlICR7ZmVhdHVyZXMubGVuZ3RofSBjcmlhZGEgY29tIHN1Y2Vzc29gKVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAvLyBTYWx2YSBhIGdlb21ldHJpYSBubyBlc3RhZG8gcGFyYSB1c28gcG9zdGVyaW9yIG5hIGFuw6FsaXNlXHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hhcGVmaWxlR2VvbWV0cnk6IHBvbHlnb25HZW9tZXRyeSB9KVxyXG4gICAgICAgICAgY29uc29sZS5sb2coJ+KckyBHZW9tZXRyaWEgZG8gc2hhcGVmaWxlIHNhbHZhIG5vIGVzdGFkbyAoV0tJRDonLCBwb2x5Z29uR2VvbWV0cnkuc3BhdGlhbFJlZmVyZW5jZT8ud2tpZCB8fCAnZGVzY29uaGVjaWRvJywgJyknKVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAvLyBQYXJhIHNpbXBsaWZpY2FyLCB2YW1vcyBwZWdhciBhcGVuYXMgYSBwcmltZWlyYSBmZWF0dXJlXHJcbiAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgfSBjYXRjaCAocGFyc2VFcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS53YXJuKCdFcnJvIGFvIGZhemVyIHBhcnNlIGRlIHVtYSBmZWF0dXJlOicsIHBhcnNlRXJyb3IpXHJcbiAgICAgICAgICBicmVha1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgaWYgKGZlYXR1cmVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTmVuaHVtYSBmZWF0dXJlIHbDoWxpZGEgZW5jb250cmFkYSBubyBzaGFwZWZpbGUnKVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBjb25zb2xlLmxvZyhg4pyTICR7ZmVhdHVyZXMubGVuZ3RofSBmZWF0dXJlKHMpIGV4dHJhw61kYShzKSBkbyBzaGFwZWZpbGVgKVxyXG4gICAgICBcclxuICAgICAgLy8gQ3JpYSBhIEZlYXR1cmVMYXllciBjb20gc291cmNlIHNlbmRvIHVtIGFycmF5IGRlIEdyYXBoaWNzXHJcbiAgICAgIGNvbnN0IGZlYXR1cmVMYXllciA9IG5ldyB0aGlzLkZlYXR1cmVMYXllcih7XHJcbiAgICAgICAgc291cmNlOiBmZWF0dXJlcyxcclxuICAgICAgICB0aXRsZTogYMOBcmVhIFByb3Bvc3RhIC0gJHt6aXBGaWxlLm5hbWUucmVwbGFjZSgnLnppcCcsICcnKX1gLFxyXG4gICAgICAgIGZpZWxkczogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnT0JKRUNUSUQnLFxyXG4gICAgICAgICAgICB0eXBlOiAnb2lkJyxcclxuICAgICAgICAgICAgYWxpYXM6ICdPQkpFQ1RJRCdcclxuICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIG9iamVjdElkRmllbGQ6ICdPQkpFQ1RJRCcsXHJcbiAgICAgICAgZ2VvbWV0cnlUeXBlOiAncG9seWdvbicsXHJcbiAgICAgICAgc3BhdGlhbFJlZmVyZW5jZTogbmV3IFNwYXRpYWxSZWZlcmVuY2Uoc3BhdGlhbFJlZmVyZW5jZSksXHJcbiAgICAgICAgb3BhY2l0eTogMS4wLCAvLyBPcGFjaWRhZGUgdG90YWwgcGFyYSByZXNwZWl0YXIgYSB0cmFuc3BhcsOqbmNpYSBkbyBzw61tYm9sb1xyXG4gICAgICAgIHJlbmRlcmVyOiB7XHJcbiAgICAgICAgICB0eXBlOiAnc2ltcGxlJyxcclxuICAgICAgICAgIHN5bWJvbDoge1xyXG4gICAgICAgICAgICB0eXBlOiAnc2ltcGxlLWZpbGwnLFxyXG4gICAgICAgICAgICBjb2xvcjogWzI1NSwgMjU1LCAwLCAwLjVdLCAvLyBBbWFyZWxvIGNvbSA1MCUgZGUgdHJhbnNwYXLDqm5jaWEgKFJHQkEpXHJcbiAgICAgICAgICAgIG91dGxpbmU6IHtcclxuICAgICAgICAgICAgICBjb2xvcjogWzI1NSwgMjU1LCAwLCAxXSwgLy8gQW1hcmVsbyBzw7NsaWRvIHBhcmEgYm9yZGFcclxuICAgICAgICAgICAgICB3aWR0aDogMlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICBcclxuICAgICAgLy8gQWRpY2lvbmEgYSBjYW1hZGEgYW8gbWFwYVxyXG4gICAgICB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcubWFwLmFkZChmZWF0dXJlTGF5ZXIpXHJcbiAgICAgIGNvbnNvbGUubG9nKCfinJMgQ2FtYWRhIGFkaWNpb25hZGEgYW8gbWFwYSBsb2NhbG1lbnRlJylcclxuICAgICAgXHJcbiAgICAgIC8vIEZ1bsOnw6NvIGF1eGlsaWFyIHBhcmEgZmF6ZXIgem9vbSBuYSBnZW9tZXRyaWFcclxuICAgICAgY29uc3Qgem9vbVRvR2VvbWV0cnkgPSAoZ2VvbWV0cnk6IF9fZXNyaS5Qb2x5Z29uKSA9PiB7XHJcbiAgICAgICAgaWYgKCFnZW9tZXRyeSB8fCAhdGhpcy5zdGF0ZS5qaW11TWFwVmlldz8udmlldykge1xyXG4gICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCBleHRlbnQgPSBnZW9tZXRyeS5leHRlbnRcclxuICAgICAgICAgIGlmICghZXh0ZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignRXh0ZW50IG7Do28gZGlzcG9uw612ZWwgcGFyYSBhIGdlb21ldHJpYScpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAvLyBWZXJpZmljYSBzZSBvIGV4dGVudCDDqSB2w6FsaWRvXHJcbiAgICAgICAgICBpZiAoZXh0ZW50LnhtaW4gPT09IG51bGwgfHwgZXh0ZW50LnhtYXggPT09IG51bGwgfHwgZXh0ZW50LnltaW4gPT09IG51bGwgfHwgZXh0ZW50LnltYXggPT09IG51bGwpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKCdFeHRlbnQgcG9zc3VpIHZhbG9yZXMgaW52w6FsaWRvcycpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAvLyBWZXJpZmljYSBzZSBuw6NvIMOpIGluZmluaXRvXHJcbiAgICAgICAgICBpZiAoIWlzRmluaXRlKGV4dGVudC54bWluKSB8fCAhaXNGaW5pdGUoZXh0ZW50LnhtYXgpIHx8ICFpc0Zpbml0ZShleHRlbnQueW1pbikgfHwgIWlzRmluaXRlKGV4dGVudC55bWF4KSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ0V4dGVudCBwb3NzdWkgdmFsb3JlcyBpbmZpbml0b3MnKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLy8gQ3JpYSB1bSBub3ZvIGV4dGVudCBleHBhbmRpZG9cclxuICAgICAgICAgIGNvbnN0IGV4cGFuZGVkRXh0ZW50ID0ge1xyXG4gICAgICAgICAgICB4bWluOiBleHRlbnQueG1pbiAtIChleHRlbnQueG1heCAtIGV4dGVudC54bWluKSAqIDAuMSxcclxuICAgICAgICAgICAgeW1pbjogZXh0ZW50LnltaW4gLSAoZXh0ZW50LnltYXggLSBleHRlbnQueW1pbikgKiAwLjEsXHJcbiAgICAgICAgICAgIHhtYXg6IGV4dGVudC54bWF4ICsgKGV4dGVudC54bWF4IC0gZXh0ZW50LnhtaW4pICogMC4xLFxyXG4gICAgICAgICAgICB5bWF4OiBleHRlbnQueW1heCArIChleHRlbnQueW1heCAtIGV4dGVudC55bWluKSAqIDAuMSxcclxuICAgICAgICAgICAgc3BhdGlhbFJlZmVyZW5jZTogZXh0ZW50LnNwYXRpYWxSZWZlcmVuY2VcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgdGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3LmdvVG8oZXhwYW5kZWRFeHRlbnQpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn4pyTIFpvb20gYXBsaWNhZG8gw6AgY2FtYWRhJylcclxuICAgICAgICAgIH0pLmNhdGNoKCh6b29tRXJyb3IpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKCdFcnJvIGFvIGZhemVyIHpvb206Jywgem9vbUVycm9yKVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS53YXJuKCdFcnJvIGFvIHByb2Nlc3NhciBleHRlbnQ6JywgZXJyb3IpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvLyBBZ3VhcmRhIGEgY2FtYWRhIGNhcnJlZ2FyIGUgZmF6IHpvb20gcGFyYSBlbGFcclxuICAgICAgZmVhdHVyZUxheWVyLndoZW4oKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdDYW1hZGEgY2FycmVnYWRhLCBmYXplbmRvIHpvb20uLi4nKVxyXG4gICAgICAgIGlmIChmZWF0dXJlcy5sZW5ndGggPiAwICYmIGZlYXR1cmVzWzBdLmdlb21ldHJ5KSB7XHJcbiAgICAgICAgICBjb25zdCBnZW9tZXRyeSA9IGZlYXR1cmVzWzBdLmdlb21ldHJ5IGFzIF9fZXNyaS5Qb2x5Z29uXHJcbiAgICAgICAgICB6b29tVG9HZW9tZXRyeShnZW9tZXRyeSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pLmNhdGNoKChsYXllckVycm9yKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJybyBhbyBjYXJyZWdhciBjYW1hZGE6JywgbGF5ZXJFcnJvcilcclxuICAgICAgfSlcclxuICAgICAgXHJcbiAgICAgIC8vIFRhbWLDqW0gZXNjdXRhIG8gZXZlbnRvIGxheWVydmlldy1jcmVhdGUgcGFyYSBnYXJhbnRpciBxdWUgYSBjYW1hZGEgZm9pIHJlbmRlcml6YWRhXHJcbiAgICAgIGZlYXR1cmVMYXllci5vbignbGF5ZXJ2aWV3LWNyZWF0ZScsIChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdMYXllclZpZXcgY3JpYWRhOicsIGV2ZW50KVxyXG4gICAgICAgIGlmIChmZWF0dXJlcy5sZW5ndGggPiAwICYmIGZlYXR1cmVzWzBdLmdlb21ldHJ5KSB7XHJcbiAgICAgICAgICBjb25zdCBnZW9tZXRyeSA9IGZlYXR1cmVzWzBdLmdlb21ldHJ5IGFzIF9fZXNyaS5Qb2x5Z29uXHJcbiAgICAgICAgICB6b29tVG9HZW9tZXRyeShnZW9tZXRyeSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIFxyXG4gICAgICAvLyBTYWx2YSBhIHJlZmVyw6puY2lhIGRhIGNhbWFkYSBubyBlc3RhZG9cclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNoYXBlZmlsZUxheWVyOiBmZWF0dXJlTGF5ZXIgfSlcclxuICAgICAgXHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm8gYW8gbGVyIHNoYXBlZmlsZSBlIGFkaWNpb25hciBjYW1hZGE6JywgZXJyb3IpXHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgRXJybyBhbyBwcm9jZXNzYXIgc2hhcGVmaWxlOiAke2Vycm9yLm1lc3NhZ2V9YClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIEluaWNpYSBvIG1vZG8gZGUgZGVzZW5ob1xyXG4gIGhhbmRsZVN0YXJ0RHJhd2luZyA9IGFzeW5jICgpID0+IHtcclxuICAgIC8vIFZlcmlmaWNhIHNlIG8gbWFwYSBlc3TDoSBkaXNwb27DrXZlbFxyXG4gICAgaWYgKCF0aGlzLnN0YXRlLmppbXVNYXBWaWV3IHx8ICF0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcpIHtcclxuICAgICAgYWxlcnQoJ0FndWFyZGUgbyBtYXBhIGNhcnJlZ2FyIGNvbXBsZXRhbWVudGUuJylcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2UgbyBza2V0Y2hWaWV3TW9kZWwgbsOjbyBleGlzdGUsIHRlbnRhIGluaWNpYWxpemFyXHJcbiAgICBsZXQgc2tldGNoVmlld01vZGVsID0gdGhpcy5zdGF0ZS5za2V0Y2hWaWV3TW9kZWxcclxuICAgIGlmICghc2tldGNoVmlld01vZGVsKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdTa2V0Y2hWaWV3TW9kZWwgbsOjbyBlbmNvbnRyYWRvLiBJbmljaWFsaXphbmRvLi4uJylcclxuICAgICAgdHJ5IHtcclxuICAgICAgICAvLyBDaGFtYSBpbml0aWFsaXplU2tldGNoIGUgYWd1YXJkYVxyXG4gICAgICAgIGF3YWl0IHRoaXMuaW5pdGlhbGl6ZVNrZXRjaCgpXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQWd1YXJkYSBvIFJlYWN0IGF0dWFsaXphciBvIGVzdGFkbyAocG9kZSBsZXZhciBhbGd1bnMgY2ljbG9zKVxyXG4gICAgICAgIGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCAyMDApKVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFZlcmlmaWNhIG5vdmFtZW50ZSBzZSBmb2kgY3JpYWRvXHJcbiAgICAgICAgc2tldGNoVmlld01vZGVsID0gdGhpcy5zdGF0ZS5za2V0Y2hWaWV3TW9kZWxcclxuICAgICAgICBpZiAoIXNrZXRjaFZpZXdNb2RlbCkge1xyXG4gICAgICAgICAgY29uc29sZS53YXJuKCdTa2V0Y2hWaWV3TW9kZWwgYWluZGEgbsOjbyBmb2kgY3JpYWRvIGFww7NzIGluaWNpYWxpemHDp8OjbycpXHJcbiAgICAgICAgICBhbGVydCgnQWd1YXJkZSBvIG1hcGEgY2FycmVnYXIgY29tcGxldGFtZW50ZS4gVGVudGUgbm92YW1lbnRlIGVtIGFsZ3VucyBzZWd1bmRvcy4nKVxyXG4gICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm8gYW8gaW5pY2lhbGl6YXIgU2tldGNoVmlld01vZGVsOicsIGVycm9yKVxyXG4gICAgICAgIGFsZXJ0KCdFcnJvIGFvIGluaWNpYWxpemFyIG8gZGVzZW5oby4gVmVyaWZpcXVlIHNlIG8gbWFwYSBlc3TDoSBjYXJyZWdhZG8uJylcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFZlcmlmaWNhIHNlIG8gdmlldyBkbyBza2V0Y2hWaWV3TW9kZWwgZXN0w6EgZGlzcG9uw612ZWxcclxuICAgIGlmICghc2tldGNoVmlld01vZGVsLnZpZXcpIHtcclxuICAgICAgYWxlcnQoJ0FndWFyZGUgbyBtYXBhIGNhcnJlZ2FyIGNvbXBsZXRhbWVudGUuJylcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gVmVyaWZpY2Egc2UgbyBza2V0Y2hWaWV3TW9kZWwgZXN0w6EgcHJvbnRvIHBhcmEgZGVzZW5oYXJcclxuICAgIGlmIChza2V0Y2hWaWV3TW9kZWwuc3RhdGUgJiYgc2tldGNoVmlld01vZGVsLnN0YXRlICE9PSAncmVhZHknKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdTa2V0Y2hWaWV3TW9kZWwgbsOjbyBlc3TDoSBwcm9udG8uIEVzdGFkbzonLCBza2V0Y2hWaWV3TW9kZWwuc3RhdGUpXHJcbiAgICAgIC8vIFRlbnRhIGNhbmNlbGFyIHF1YWxxdWVyIG9wZXJhw6fDo28gZW0gYW5kYW1lbnRvXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgc2tldGNoVmlld01vZGVsLmNhbmNlbCgpXHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oJ07Do28gZm9pIHBvc3PDrXZlbCBjYW5jZWxhciBvcGVyYcOnw6NvIGFudGVyaW9yOicsIGUpXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHsgZHJhd2luZ01vZGU6IHRydWUgfSlcclxuICAgIHNrZXRjaFZpZXdNb2RlbC5jcmVhdGUoJ3BvbHlnb24nKVxyXG4gIH1cclxuXHJcbiAgLy8gTGltcGEgYSBhbsOhbGlzZSBlIHJlc2V0YSBvcyBjYW1wb3NcclxuICBoYW5kbGVDbGVhckFuYWx5c2lzID0gKCkgPT4ge1xyXG4gICAgLy8gUmVtb3ZlIG9zIGdyw6FmaWNvcyBkZXNlbmhhZG9zIG5vIG1hcGFcclxuICAgIGlmICh0aGlzLnN0YXRlLmdyYXBoaWNzTGF5ZXIpIHtcclxuICAgICAgdGhpcy5zdGF0ZS5ncmFwaGljc0xheWVyLnJlbW92ZUFsbCgpXHJcbiAgICAgIGNvbnNvbGUubG9nKCdHcsOhZmljb3MgcmVtb3ZpZG9zIGRvIG1hcGEnKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIENhbmNlbGEgcXVhbHF1ZXIgZGVzZW5obyBlbSBhbmRhbWVudG8gZSBsaW1wYSBvIHNrZXRjaFZpZXdNb2RlbFxyXG4gICAgaWYgKHRoaXMuc3RhdGUuc2tldGNoVmlld01vZGVsKSB7XHJcbiAgICAgIC8vIENhbmNlbGEgc2UgaG91dmVyIHVtIGRlc2VuaG8gZW0gYW5kYW1lbnRvXHJcbiAgICAgIGlmICh0aGlzLnN0YXRlLnNrZXRjaFZpZXdNb2RlbC5zdGF0ZSAhPT0gJ3JlYWR5Jykge1xyXG4gICAgICAgIHRoaXMuc3RhdGUuc2tldGNoVmlld01vZGVsLmNhbmNlbCgpXHJcbiAgICAgIH1cclxuICAgICAgLy8gR2FyYW50ZSBxdWUgbyBtb2RvIGRlIGRlc2VuaG8gZXN0w6EgZGVzYXRpdmFkb1xyXG4gICAgICBpZiAodGhpcy5zdGF0ZS5za2V0Y2hWaWV3TW9kZWwudmlldykge1xyXG4gICAgICAgIHRoaXMuc3RhdGUuc2tldGNoVmlld01vZGVsLnZpZXcucG9wdXAgPSBudWxsXHJcbiAgICAgIH1cclxuICAgICAgY29uc29sZS5sb2coJ1NrZXRjaFZpZXdNb2RlbCBsaW1wbyAtIHByb250byBwYXJhIG5vdm8gZGVzZW5obycpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmVtb3ZlIGEgY2FtYWRhIGRvIHNoYXBlZmlsZSBzZSBleGlzdGlyXHJcbiAgICBpZiAodGhpcy5zdGF0ZS5zaGFwZWZpbGVMYXllciAmJiB0aGlzLnN0YXRlLmppbXVNYXBWaWV3Py52aWV3Py5tYXApIHtcclxuICAgICAgdGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3Lm1hcC5yZW1vdmUodGhpcy5zdGF0ZS5zaGFwZWZpbGVMYXllcilcclxuICAgICAgY29uc29sZS5sb2coJ0NhbWFkYSBkbyBzaGFwZWZpbGUgcmVtb3ZpZGEgZG8gbWFwYScpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmVzZXRhIG8gZXN0YWRvXHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgcXVhbnRpZGFkZUlERUE6IDEsXHJcbiAgICAgIGlkZWFWYWx1ZXM6IFsnJ10sXHJcbiAgICAgIHNoYXBlZmlsZUZpbGU6IG51bGwsXHJcbiAgICAgIHNoYXBlZmlsZUxheWVyOiBudWxsLFxyXG4gICAgICBzaGFwZWZpbGVHZW9tZXRyeTogbnVsbCxcclxuICAgICAgZHJhd25HZW9tZXRyeTogbnVsbCxcclxuICAgICAgYW5hbHlzaXNSZXN1bHQ6IG51bGwsXHJcbiAgICAgIHJlcG9ydFVybDogbnVsbCxcclxuICAgICAgZHJhd2luZ01vZGU6IGZhbHNlLFxyXG4gICAgICBqb2JJZDogbnVsbCxcclxuICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgIHByb2dyZXNzOiAwXHJcbiAgICB9KVxyXG5cclxuICAgIC8vIExpbXBhIG8gaW5wdXQgZGUgYXJxdWl2b1xyXG4gICAgY29uc3QgZmlsZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NoYXBlZmlsZS11cGxvYWQnKSBhcyBIVE1MSW5wdXRFbGVtZW50XHJcbiAgICBpZiAoZmlsZUlucHV0KSB7XHJcbiAgICAgIGZpbGVJbnB1dC52YWx1ZSA9ICcnXHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5sb2coJ0Fuw6FsaXNlIGxpbXBhIGNvbXBsZXRhbWVudGUuIFByb250byBwYXJhIG5vdmEgYW7DoWxpc2UuJylcclxuICB9XHJcblxyXG4gIC8vIEJhaXhhIG8gcmVsYXTDs3Jpb1xyXG4gIGhhbmRsZURvd25sb2FkUmVwb3J0ID0gKCkgPT4ge1xyXG4gICAgaWYgKHRoaXMuc3RhdGUucmVwb3J0VXJsKSB7XHJcbiAgICAgIHdpbmRvdy5vcGVuKHRoaXMuc3RhdGUucmVwb3J0VXJsLCAnX2JsYW5rJylcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgIGFsZXJ0KCdOZW5odW0gcmVsYXTDs3JpbyBkaXNwb27DrXZlbCBwYXJhIGRvd25sb2FkLicpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBGYXogdXBsb2FkIGRvIHNoYXBlZmlsZSBaSVAgcGFyYSBvIHBvcnRhbCBlIHJldG9ybmEgYSBVUkwgZGEgY2FtYWRhXHJcbiAgLy8gTk9UQTogUGFyYSBBcmNHSVMgU2VydmVyLCBwb2RlIHNlciBuZWNlc3PDoXJpbyB1c2FyIGEgQVBJIFJFU1QgZGlyZXRhbWVudGVcclxuICBwcml2YXRlIGFzeW5jIHVwbG9hZFNoYXBlZmlsZVRvUG9ydGFsKHppcEZpbGU6IEZpbGUsIHRva2VuOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc29sZS5sb2coJz09PSBJTklDSUFORE8gVVBMT0FEIFBBUkEgUE9SVEFMID09PScpXHJcbiAgICAgIGNvbnNvbGUubG9nKCdQb3J0YWwgVVJMOicsIHRoaXMuUE9SVEFMX1VSTClcclxuICAgICAgY29uc29sZS5sb2coJ0FycXVpdm86JywgemlwRmlsZS5uYW1lLCAnVGFtYW5obzonLCB6aXBGaWxlLnNpemUsICdieXRlcycpXHJcbiAgICAgIFxyXG4gICAgICAvLyBQYXJhIEFyY0dJUyBTZXJ2ZXIsIHZhbW9zIHRlbnRhciB1c2FyIGEgQVBJIFJFU1QgZGlyZXRhbWVudGVcclxuICAgICAgLy8gUHJpbWVpcm8sIHRlbnRhIHVzYXIgYSBBUEkgZG8gUG9ydGFsL1NlcnZlclxyXG4gICAgICAvLyBTZSBmYWxoYXIgcG9yIENPUlMsIHZhbW9zIHVzYXIgdW1hIGFib3JkYWdlbSBhbHRlcm5hdGl2YVxyXG4gICAgICBcclxuICAgICAgLy8gT3DDp8OjbyAxOiBUZW50YSB1c2FyIC9zaGFyaW5nL3Jlc3QvY29udGVudC91cGxvYWQgKFBvcnRhbCBBUEkpXHJcbiAgICAgIGxldCB1cGxvYWRVcmwgPSBgJHt0aGlzLlBPUlRBTF9VUkx9L3NoYXJpbmcvcmVzdC9jb250ZW50L3VwbG9hZGBcclxuICAgICAgXHJcbiAgICAgIGNvbnNvbGUubG9nKCdUZW50YW5kbyBmYXplciB1cGxvYWQgdmlhIFBvcnRhbCBBUEkuLi4nKVxyXG4gICAgICBjb25zb2xlLmxvZygnVVJMOicsIHVwbG9hZFVybClcclxuICAgICAgXHJcbiAgICAgIGNvbnN0IHVwbG9hZEZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKClcclxuICAgICAgdXBsb2FkRm9ybURhdGEuYXBwZW5kKCdmaWxlJywgemlwRmlsZSwgemlwRmlsZS5uYW1lKVxyXG4gICAgICB1cGxvYWRGb3JtRGF0YS5hcHBlbmQoJ2YnLCAnanNvbicpXHJcbiAgICAgIHVwbG9hZEZvcm1EYXRhLmFwcGVuZCgndG9rZW4nLCB0b2tlbilcclxuICAgICAgXHJcbiAgICAgIGxldCB1cGxvYWRSZXNwb25zZTogUmVzcG9uc2VcclxuICAgICAgbGV0IHVwbG9hZFJlc3VsdDogYW55XHJcbiAgICAgIFxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHVwbG9hZFJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXBsb2FkVXJsLCB7XHJcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgIGJvZHk6IHVwbG9hZEZvcm1EYXRhLFxyXG4gICAgICAgICAgLy8gTsOjbyBkZWZpbmUgaGVhZGVycyAtIG8gYnJvd3NlciBkZWZpbmUgYXV0b21hdGljYW1lbnRlIHBhcmEgRm9ybURhdGFcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICghdXBsb2FkUmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgIGNvbnN0IGVycm9yVGV4dCA9IGF3YWl0IHVwbG9hZFJlc3BvbnNlLnRleHQoKVxyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJybyBubyB1cGxvYWQgKHN0YXR1cyk6JywgdXBsb2FkUmVzcG9uc2Uuc3RhdHVzLCBlcnJvclRleHQpXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC8vIFNlIGZvciBlcnJvIDUwMCBvdSBDT1JTLCB0ZW50YSBhYm9yZGFnZW0gYWx0ZXJuYXRpdmFcclxuICAgICAgICAgIGlmICh1cGxvYWRSZXNwb25zZS5zdGF0dXMgPT09IDUwMCB8fCB1cGxvYWRSZXNwb25zZS5zdGF0dXMgPT09IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDT1JTIG91IGVycm8gZGUgc2Vydmlkb3IuIFRlbnRhbmRvIGFib3JkYWdlbSBhbHRlcm5hdGl2YS4uLicpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJybyBhbyBmYXplciB1cGxvYWQ6ICR7dXBsb2FkUmVzcG9uc2Uuc3RhdHVzfSAtICR7ZXJyb3JUZXh0fWApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHVwbG9hZFJlc3VsdCA9IGF3YWl0IHVwbG9hZFJlc3BvbnNlLmpzb24oKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdSZXN1bHRhZG8gZG8gdXBsb2FkOicsIHVwbG9hZFJlc3VsdClcclxuICAgICAgICBcclxuICAgICAgICBpZiAodXBsb2FkUmVzdWx0LmVycm9yKSB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm8gbm8gdXBsb2FkOiAke3VwbG9hZFJlc3VsdC5lcnJvci5tZXNzYWdlIHx8IEpTT04uc3RyaW5naWZ5KHVwbG9hZFJlc3VsdC5lcnJvcil9YClcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGZldGNoRXJyb3I6IGFueSkge1xyXG4gICAgICAgIC8vIFNlIGZhbGhhciBwb3IgQ09SUyBvdSBvdXRybyBlcnJvIGRlIHJlZGVcclxuICAgICAgICBpZiAoZmV0Y2hFcnJvci5tZXNzYWdlPy5pbmNsdWRlcygnRmFpbGVkIHRvIGZldGNoJykgfHwgZmV0Y2hFcnJvci5tZXNzYWdlPy5pbmNsdWRlcygnQ09SUycpKSB7XHJcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ0Vycm8gZGUgQ09SUyBkZXRlY3RhZG8uIE8gdXBsb2FkIGRpcmV0byBuw6NvIMOpIHBvc3PDrXZlbCBkZXZpZG8gYSByZXN0cmnDp8O1ZXMgQ09SUy4nKVxyXG4gICAgICAgICAgY29uc29sZS53YXJuKCdTb2x1w6fDo286IE8gYXJxdWl2byBaSVAgc2Vyw6EgZW52aWFkbyBkaXJldGFtZW50ZSBwYXJhIGEgR1AgdG9vbC4nKVxyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDT1JTX0JMT0NLRUQnKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aHJvdyBmZXRjaEVycm9yXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGNvbnN0IGl0ZW1JZCA9IHVwbG9hZFJlc3VsdC5pdGVtPy5pZCB8fCB1cGxvYWRSZXN1bHQuaXRlbUlkXHJcbiAgICAgIGlmICghaXRlbUlkKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOw6NvIGZvaSBwb3Nzw612ZWwgb2J0ZXIgbyBJRCBkbyBpdGVtIGFww7NzIG8gdXBsb2FkJylcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgY29uc29sZS5sb2coJ0l0ZW0gSUQgb2J0aWRvOicsIGl0ZW1JZClcclxuICAgICAgXHJcbiAgICAgIC8vIE9idMOpbSBpbmZvcm1hw6fDtWVzIGRvIGl0ZW1cclxuICAgICAgY29uc3QgaXRlbUluZm9VcmwgPSBgJHt0aGlzLlBPUlRBTF9VUkx9L3NoYXJpbmcvcmVzdC9jb250ZW50L2l0ZW1zLyR7aXRlbUlkfT9mPWpzb24mdG9rZW49JHt0b2tlbn1gXHJcbiAgICAgIFxyXG4gICAgICBjb25zb2xlLmxvZygnT2J0ZW5kbyBpbmZvcm1hw6fDtWVzIGRvIGl0ZW0uLi4nKVxyXG4gICAgICBjb25zdCBpdGVtSW5mb1Jlc3BvbnNlID0gYXdhaXQgZmV0Y2goaXRlbUluZm9VcmwpXHJcbiAgICAgIFxyXG4gICAgICBpZiAoIWl0ZW1JbmZvUmVzcG9uc2Uub2spIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm8gYW8gb2J0ZXIgaW5mb3JtYcOnw7VlcyBkbyBpdGVtOiAke2l0ZW1JbmZvUmVzcG9uc2Uuc3RhdHVzfWApXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGNvbnN0IGl0ZW1JbmZvID0gYXdhaXQgaXRlbUluZm9SZXNwb25zZS5qc29uKClcclxuICAgICAgY29uc29sZS5sb2coJ0luZm9ybWHDp8O1ZXMgZG8gaXRlbTonLCBpdGVtSW5mbylcclxuICAgICAgXHJcbiAgICAgIGlmIChpdGVtSW5mby5lcnJvcikge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJybyBhbyBvYnRlciBpdGVtOiAke2l0ZW1JbmZvLmVycm9yLm1lc3NhZ2UgfHwgSlNPTi5zdHJpbmdpZnkoaXRlbUluZm8uZXJyb3IpfWApXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8vIFRlbnRhIHB1YmxpY2FyIGNvbW8gZmVhdHVyZSBzZXJ2aWNlXHJcbiAgICAgIC8vIFBhcmEgQXJjR0lTIFNlcnZlciwgcG9kZSBwcmVjaXNhciBkbyB1c2VybmFtZVxyXG4gICAgICAvLyBWYW1vcyB0ZW50YXIgc2VtIHVzZXJuYW1lIHByaW1laXJvIChhbGd1bnMgc2Vydmlkb3JlcyBwZXJtaXRlbSlcclxuICAgICAgY29uc3QgcHVibGlzaFVybCA9IGAke3RoaXMuUE9SVEFMX1VSTH0vc2hhcmluZy9yZXN0L2NvbnRlbnQvdXNlcnMvY29udGVudC9wdWJsaXNoYFxyXG4gICAgICBcclxuICAgICAgY29uc29sZS5sb2coJ1B1YmxpY2FuZG8gY29tbyBmZWF0dXJlIHNlcnZpY2UuLi4nKVxyXG4gICAgICBjb25zdCBwdWJsaXNoRm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKVxyXG4gICAgICBwdWJsaXNoRm9ybURhdGEuYXBwZW5kKCdpdGVtSWQnLCBpdGVtSWQpXHJcbiAgICAgIHB1Ymxpc2hGb3JtRGF0YS5hcHBlbmQoJ2ZpbGV0eXBlJywgJ3NoYXBlZmlsZScpXHJcbiAgICAgIHB1Ymxpc2hGb3JtRGF0YS5hcHBlbmQoJ2YnLCAnanNvbicpXHJcbiAgICAgIHB1Ymxpc2hGb3JtRGF0YS5hcHBlbmQoJ3Rva2VuJywgdG9rZW4pXHJcbiAgICAgIFxyXG4gICAgICBjb25zdCBwdWJsaXNoUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChwdWJsaXNoVXJsLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgYm9keTogcHVibGlzaEZvcm1EYXRhXHJcbiAgICAgIH0pXHJcbiAgICAgIFxyXG4gICAgICBpZiAoIXB1Ymxpc2hSZXNwb25zZS5vaykge1xyXG4gICAgICAgIGNvbnN0IGVycm9yVGV4dCA9IGF3YWl0IHB1Ymxpc2hSZXNwb25zZS50ZXh0KClcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvIG5hIHB1YmxpY2HDp8OjbzonLCBlcnJvclRleHQpXHJcbiAgICAgICAgLy8gU2UgZmFsaGFyLCB0ZW50YSBvYnRlciBVUkwgZG8gaXRlbSBkaXJldGFtZW50ZVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdUZW50YW5kbyBvYnRlciBVUkwgZG8gaXRlbSBkaXJldGFtZW50ZS4uLicpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgcHVibGlzaFJlc3VsdCA9IGF3YWl0IHB1Ymxpc2hSZXNwb25zZS5qc29uKClcclxuICAgICAgICBjb25zb2xlLmxvZygnUmVzdWx0YWRvIGRhIHB1YmxpY2HDp8OjbzonLCBwdWJsaXNoUmVzdWx0KVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChwdWJsaXNoUmVzdWx0LmVycm9yKSB7XHJcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ0Vycm8gbmEgcHVibGljYcOnw6NvLCBtYXMgY29udGludWFuZG8uLi4nLCBwdWJsaXNoUmVzdWx0LmVycm9yKVxyXG4gICAgICAgIH0gZWxzZSBpZiAocHVibGlzaFJlc3VsdC5zZXJ2aWNlcyAmJiBwdWJsaXNoUmVzdWx0LnNlcnZpY2VzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIGNvbnN0IGxheWVyVXJsID0gcHVibGlzaFJlc3VsdC5zZXJ2aWNlc1swXS5zZXJ2aWNldXJsXHJcbiAgICAgICAgICBjb25zb2xlLmxvZygn4pyTIFVSTCBkYSBjYW1hZGEgb2J0aWRhIGRhIHB1YmxpY2HDp8OjbzonLCBsYXllclVybClcclxuICAgICAgICAgIHJldHVybiBsYXllclVybFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLy8gU2UgbsOjbyBjb25zZWd1aXUgcHVibGljYXIsIHRlbnRhIG9idGVyIFVSTCBkbyBpdGVtXHJcbiAgICAgIGlmIChpdGVtSW5mby51cmwpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygn4pyTIFVSTCBvYnRpZGEgZG8gaXRlbTonLCBpdGVtSW5mby51cmwpXHJcbiAgICAgICAgcmV0dXJuIGl0ZW1JbmZvLnVybFxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvLyDDmmx0aW1hIHRlbnRhdGl2YTogY29uc3Ryw7NpIFVSTCBiYXNlYWRhIG5vIHBhZHLDo29cclxuICAgICAgY29uc3QgY29uc3RydWN0ZWRVcmwgPSBgJHt0aGlzLlBPUlRBTF9VUkx9L3Jlc3Qvc2VydmljZXMvSG9zdGVkLyR7aXRlbUlkfS9GZWF0dXJlU2VydmVyLzBgXHJcbiAgICAgIGNvbnNvbGUubG9nKCfimqAgVXNhbmRvIFVSTCBjb25zdHJ1w61kYSAocG9kZSBuw6NvIGZ1bmNpb25hcik6JywgY29uc3RydWN0ZWRVcmwpXHJcbiAgICAgIHJldHVybiBjb25zdHJ1Y3RlZFVybFxyXG4gICAgICBcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgLy8gU2UgbyBlcnJvIGZvciBDT1JTLCByZXRvcm5hIG51bGwgcGFyYSB1c2FyIGZhbGxiYWNrXHJcbiAgICAgIGlmIChlcnJvci5tZXNzYWdlID09PSAnQ09SU19CTE9DS0VEJykge1xyXG4gICAgICAgIGNvbnNvbGUud2FybignVXBsb2FkIGJsb3F1ZWFkbyBwb3IgQ09SUy4gVXNhbmRvIGZhbGxiYWNrOiBlbnZpYXIgYXJxdWl2byBkaXJldGFtZW50ZS4nKVxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ09SU19CTE9DS0VEJylcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgY29uc29sZS5lcnJvcignRXJybyBjb21wbGV0byBubyB1cGxvYWQgcGFyYSBwb3J0YWw6JywgZXJyb3IpXHJcbiAgICAgIHRocm93IGVycm9yXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBGdW7Dp8OjbyBhdXhpbGlhciBwYXJhIG9idGVyIHRva2VuIHZpYSBPQXV0aDIgdXNhbmRvIGNsaWVudCBzZWNyZXQgKHJlbm92YcOnw6NvIGF1dG9tw6F0aWNhKVxyXG4gIC8vIEVzdGEgZnVuw6fDo28gZ2VyYSB1bSBub3ZvIHRva2VuIGF1dG9tYXRpY2FtZW50ZSBxdWFuZG8gbmVjZXNzw6FyaW8sIGNvbSB2YWxpZGFkZSBkZSAxIGFub1xyXG4gIHByaXZhdGUgYXN5bmMgZ2V0VG9rZW5WaWFPQXV0aDIoKTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAvLyBVUkwgZG8gc2Vydmlkb3IgQXJjR0lTIHBhcmEgb2J0ZXIgdG9rZW5cclxuICAgICAgY29uc3Qgc2VydmVyVXJsID0gJ2h0dHBzOi8vbWVpb2FtYmllbnRlLnNpc3RlbWFzLm1wYmEubXAuYnIvc2VydmVyJ1xyXG4gICAgICBjb25zdCB0b2tlblVybCA9IGAke3NlcnZlclVybH0vdG9rZW5zL2dlbmVyYXRlVG9rZW5gXHJcbiAgICAgIFxyXG4gICAgICAvLyBQYXJhIGdlcmFyIHRva2VuIGNvbSBjbGllbnQgc2VjcmV0XHJcbiAgICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxyXG4gICAgICBwYXJhbXMuYXBwZW5kKCdmJywgJ2pzb24nKVxyXG4gICAgICBwYXJhbXMuYXBwZW5kKCdjbGllbnQnLCAncmVmZXJlcicpXHJcbiAgICAgIHBhcmFtcy5hcHBlbmQoJ3JlZmVyZXInLCB3aW5kb3cubG9jYXRpb24ub3JpZ2luKVxyXG4gICAgICBwYXJhbXMuYXBwZW5kKCdleHBpcmF0aW9uJywgJzUyNTYwMCcpIC8vIDEgYW5vIChtw6F4aW1vIHBlcm1pdGlkbylcclxuICAgICAgXHJcbiAgICAgIGlmICh0aGlzLkNMSUVOVF9TRUNSRVQpIHtcclxuICAgICAgICBwYXJhbXMuYXBwZW5kKCdjbGllbnRfc2VjcmV0JywgdGhpcy5DTElFTlRfU0VDUkVUKVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBjb25zb2xlLmxvZygnVGVudGFuZG8gZ2VyYXIgdG9rZW4gdmlhIE9BdXRoMi4uLicpXHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godG9rZW5VcmwsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IHBhcmFtcy50b1N0cmluZygpXHJcbiAgICAgIH0pXHJcbiAgICAgIFxyXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgY29uc3QgZXJyb3JUZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpXHJcbiAgICAgICAgY29uc29sZS53YXJuKCdFcnJvIGFvIGdlcmFyIHRva2VuIHZpYSBPQXV0aDI6JywgZXJyb3JUZXh0KVxyXG4gICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG4gICAgICBcclxuICAgICAgaWYgKHJlc3VsdC5lcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUud2FybignRXJybyBuYSByZXNwb3N0YSBkbyB0b2tlbjonLCByZXN1bHQuZXJyb3IpXHJcbiAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgaWYgKHJlc3VsdC50b2tlbikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfinJMgVG9rZW4gZ2VyYWRvIGNvbSBzdWNlc3NvIHZpYSBPQXV0aDInKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdUb2tlbiBleHBpcmEgZW06JywgcmVzdWx0LmV4cGlyZXMgPyBuZXcgRGF0ZShyZXN1bHQuZXhwaXJlcykudG9Mb2NhbGVTdHJpbmcoKSA6ICdOw6NvIGVzcGVjaWZpY2FkbycpXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdC50b2tlblxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICByZXR1cm4gbnVsbFxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJybyBhbyB0ZW50YXIgb2J0ZXIgdG9rZW4gdmlhIE9BdXRoMjonLCBlcnJvcilcclxuICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIEV4ZWN1dGEgYSBhbsOhbGlzZSB1c2FuZG8gYSBHUCB0b29sXHJcbiAgaGFuZGxlUnVuQW5hbHlzaXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAvLyBWYWxpZGHDp8O1ZXNcclxuICAgIGlmICh0aGlzLnN0YXRlLmlkZWFWYWx1ZXMuc29tZSh2YWwgPT4gIXZhbCB8fCB2YWwudHJpbSgpID09PSAnJykpIHtcclxuICAgICAgYWxlcnQoJ1BvciBmYXZvciwgcHJlZW5jaGEgdG9kb3Mgb3MgbsO6bWVyb3MgZGUgSURFQS4nKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMuc3RhdGUuc2hhcGVmaWxlR2VvbWV0cnkgJiYgIXRoaXMuc3RhdGUuZHJhd25HZW9tZXRyeSkge1xyXG4gICAgICBhbGVydCgnUG9yIGZhdm9yLCBmYcOnYSB1cGxvYWQgZGUgdW0gc2hhcGVmaWxlIE9VIGRlc2VuaGUgdW1hIMOhcmVhIG5vIG1hcGEuJylcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuc3RhdGUuc2hhcGVmaWxlR2VvbWV0cnkgJiYgdGhpcy5zdGF0ZS5kcmF3bkdlb21ldHJ5KSB7XHJcbiAgICAgIGFsZXJ0KCdQb3IgZmF2b3IsIGVzY29saGEgYXBlbmFzIFVNQSBvcMOnw6NvOiB1cGxvYWQgZGUgc2hhcGVmaWxlIE9VIGRlc2VuaG8gbm8gbWFwYS4nKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIFxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUsIHByb2dyZXNzOiAwLCBhbmFseXNpc1Jlc3VsdDogbnVsbCwgcmVwb3J0VXJsOiBudWxsLCBqb2JJZDogbnVsbCB9KVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIC8vIENhcnJlZ2EgbcOzZHVsb3MgbmVjZXNzw6FyaW9zXHJcbiAgICAgIGNvbnN0IGlkZW50aXR5TW9kdWxlcyA9IGF3YWl0IGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMoW1xyXG4gICAgICAgICdlc3JpL2lkZW50aXR5L0lkZW50aXR5TWFuYWdlcidcclxuICAgICAgXSlcclxuICAgICAgY29uc3QgW0lkZW50aXR5TWFuYWdlcl0gPSBpZGVudGl0eU1vZHVsZXNcclxuICAgICAgXHJcbiAgICAgIC8vIE9idMOpbSB0b2tlbiAtIGltcG9ydGFudGUgcGFyYSBhdXRlbnRpY2HDp8Ojb1xyXG4gICAgICBsZXQgdG9rZW46IHN0cmluZyB8IG51bGwgPSBudWxsXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgLy8gVGVudGEgZW5jb250cmFyIGNyZWRlbmNpYWwgZXhpc3RlbnRlXHJcbiAgICAgICAgY29uc3QgY3JlZGVudGlhbCA9IElkZW50aXR5TWFuYWdlci5maW5kQ3JlZGVudGlhbCh0aGlzLkdQX1NFUlZJQ0VfVVJMKVxyXG4gICAgICAgIGlmIChjcmVkZW50aWFsICYmIGNyZWRlbnRpYWwudG9rZW4pIHtcclxuICAgICAgICAgIC8vIFZlcmlmaWNhIHNlIG8gdG9rZW4gbsOjbyBleHBpcm91XHJcbiAgICAgICAgICBjb25zdCBleHBpcmVzID0gY3JlZGVudGlhbC5leHBpcmVzXHJcbiAgICAgICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKVxyXG4gICAgICAgICAgaWYgKGV4cGlyZXMgJiYgZXhwaXJlcyA+IG5vdykge1xyXG4gICAgICAgICAgdG9rZW4gPSBjcmVkZW50aWFsLnRva2VuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUb2tlbiBlbmNvbnRyYWRvIGUgdsOhbGlkbyB2aWEgSWRlbnRpdHlNYW5hZ2VyJylcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1Rva2VuIGV4cGlyYSBlbTonLCBuZXcgRGF0ZShleHBpcmVzKS50b0xvY2FsZVN0cmluZygpKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignVG9rZW4gZW5jb250cmFkbyBtYXMgZXhwaXJhZG8uIFRlbnRhbmRvIHJlbm92YXIuLi4nKVxyXG4gICAgICAgICAgICAvLyBUb2tlbiBleHBpcmFkbywgdGVudGEgcmVub3ZhclxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgIGF3YWl0IElkZW50aXR5TWFuYWdlci5jaGVja1NpZ25JblN0YXR1cyh0aGlzLkdQX1NFUlZJQ0VfVVJMKVxyXG4gICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRDcmVkZW50aWFsID0gSWRlbnRpdHlNYW5hZ2VyLmZpbmRDcmVkZW50aWFsKHRoaXMuR1BfU0VSVklDRV9VUkwpXHJcbiAgICAgICAgICAgICAgaWYgKHVwZGF0ZWRDcmVkZW50aWFsICYmIHVwZGF0ZWRDcmVkZW50aWFsLnRva2VuKSB7XHJcbiAgICAgICAgICAgICAgICB0b2tlbiA9IHVwZGF0ZWRDcmVkZW50aWFsLnRva2VuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVG9rZW4gcmVub3ZhZG8gY29tIHN1Y2Vzc28nKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBjYXRjaCAocmVuZXdFcnJvcikge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUud2FybignTsOjbyBmb2kgcG9zc8OtdmVsIHJlbm92YXIgdG9rZW46JywgcmVuZXdFcnJvcilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAvLyBOw6NvIHRlbSBjcmVkZW5jaWFsLCB0ZW50YSBvYnRlclxyXG4gICAgICAgICAgY29uc3Qgc2VydmVySW5mbyA9IElkZW50aXR5TWFuYWdlci5maW5kU2VydmVySW5mbyh0aGlzLkdQX1NFUlZJQ0VfVVJMKVxyXG4gICAgICAgICAgaWYgKHNlcnZlckluZm8pIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1RlbnRhbmRvIG9idGVyIHRva2VuIGF1dG9tYXRpY2FtZW50ZS4uLicpXHJcbiAgICAgICAgICAgIGF3YWl0IElkZW50aXR5TWFuYWdlci5jaGVja1NpZ25JblN0YXR1cyh0aGlzLkdQX1NFUlZJQ0VfVVJMKVxyXG4gICAgICAgICAgICBjb25zdCB1cGRhdGVkQ3JlZGVudGlhbCA9IElkZW50aXR5TWFuYWdlci5maW5kQ3JlZGVudGlhbCh0aGlzLkdQX1NFUlZJQ0VfVVJMKVxyXG4gICAgICAgICAgICBpZiAodXBkYXRlZENyZWRlbnRpYWwgJiYgdXBkYXRlZENyZWRlbnRpYWwudG9rZW4pIHtcclxuICAgICAgICAgICAgICB0b2tlbiA9IHVwZGF0ZWRDcmVkZW50aWFsLnRva2VuXHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1Rva2VuIG9idGlkbyBhdXRvbWF0aWNhbWVudGUnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ1NlcnZlckluZm8gbsOjbyBlbmNvbnRyYWRvLiBPIHNlcnZpZG9yIHBvZGUgcmVxdWVyZXIgYXV0ZW50aWNhw6fDo28gbWFudWFsLicpXHJcbiAgICAgICAgICAgIC8vIFRlbnRhIHZlcmlmaWNhciBzdGF0dXMgbWVzbW8gc2VtIHNlcnZlckluZm9cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICBhd2FpdCBJZGVudGl0eU1hbmFnZXIuY2hlY2tTaWduSW5TdGF0dXModGhpcy5HUF9TRVJWSUNFX1VSTClcclxuICAgICAgICAgICAgICBjb25zdCBuZXdDcmVkZW50aWFsID0gSWRlbnRpdHlNYW5hZ2VyLmZpbmRDcmVkZW50aWFsKHRoaXMuR1BfU0VSVklDRV9VUkwpXHJcbiAgICAgICAgICAgICAgaWYgKG5ld0NyZWRlbnRpYWwgJiYgbmV3Q3JlZGVudGlhbC50b2tlbikge1xyXG4gICAgICAgICAgICAgICAgdG9rZW4gPSBuZXdDcmVkZW50aWFsLnRva2VuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVG9rZW4gZ2VyYWRvIGNvbSBzdWNlc3NvJylcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKHNpZ25JbkVycm9yKSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdOw6NvIGZvaSBwb3Nzw612ZWwgZ2VyYXIgdG9rZW4gYXV0b21hdGljYW1lbnRlOicsIHNpZ25JbkVycm9yKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoICh0b2tlbkVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJybyBhbyBvYnRlciB0b2tlbjonLCB0b2tlbkVycm9yKVxyXG4gICAgICAgIGNvbnNvbGUud2FybignQ29udGludWFuZG8gc2VtIHRva2VuIC0gcG9kZSBjYXVzYXIgZXJybyBkZSBhdXRlbnRpY2HDp8OjbycpXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8vIFNlIG7Do28gb2J0ZXZlIHRva2VuIHZpYSBJZGVudGl0eU1hbmFnZXIsIHRlbnRhIGdlcmFyIHZpYSBPQXV0aDJcclxuICAgICAgaWYgKCF0b2tlbikge1xyXG4gICAgICAgIGNvbnNvbGUud2FybignVG9rZW4gbsOjbyBvYnRpZG8gdmlhIElkZW50aXR5TWFuYWdlci4gVGVudGFuZG8gZ2VyYXIgdmlhIE9BdXRoMi4uLicpXHJcbiAgICAgICAgdG9rZW4gPSBhd2FpdCB0aGlzLmdldFRva2VuVmlhT0F1dGgyKClcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLy8gRmFsbGJhY2sgZmluYWw6IHVzYSBvIHRva2VuIGZvcm5lY2lkbyBhcGVuYXMgc2UgT0F1dGgyIHRhbWLDqW0gZmFsaGFyXHJcbiAgICAgIGlmICghdG9rZW4pIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oJ1Rva2VuIG7Do28gb2J0aWRvIHZpYSBPQXV0aDIuIFVzYW5kbyB0b2tlbiBmb3JuZWNpZG8gY29tbyBmYWxsYmFjay4uLicpXHJcbiAgICAgICAgdG9rZW4gPSB0aGlzLkdQX1RPS0VOXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ+KckyBUb2tlbiBvYnRpZG8gYXV0b21hdGljYW1lbnRlIChJZGVudGl0eU1hbmFnZXIgb3UgT0F1dGgyKScpXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGlmICghdG9rZW4pIHtcclxuICAgICAgICBjb25zdCBlcnJvck1zZyA9ICdBVEVOw4fDg086IE5lbmh1bSB0b2tlbiBmb2kgb2J0aWRvLiBBIHJlcXVpc2nDp8OjbyBwb2RlIGZhbGhhciBwb3IgZmFsdGEgZGUgYXV0ZW50aWNhw6fDo28uXFxuXFxuJyArXHJcbiAgICAgICAgICAnUG9yIGZhdm9yLCB2ZXJpZmlxdWUgc2Ugdm9jw6ogZXN0w6EgYXV0ZW50aWNhZG8gbm8gc2Vydmlkb3IgQXJjR0lTIGUgdGVudGUgbm92YW1lbnRlLidcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yTXNnKVxyXG4gICAgICAgIGFsZXJ0KGVycm9yTXNnKVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KVxyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBjb25zb2xlLmxvZygnVG9rZW4gYSBzZXIgdXNhZG86JywgdG9rZW4uc3Vic3RyaW5nKDAsIDMwKSArICcuLi4nKVxyXG4gICAgICBjb25zb2xlLmxvZygnVG9rZW4gY29tcGxldG8gKMO6bHRpbW9zIDMwIGNhcmFjdGVyZXMpOicsICcuLi4nICsgdG9rZW4uc3Vic3RyaW5nKHRva2VuLmxlbmd0aCAtIDMwKSlcclxuICAgICAgXHJcbiAgICAgIC8vIFZhbGlkYcOnw6NvIHLDoXBpZGEgZG8gdG9rZW4gYW50ZXMgZGUgZW52aWFyIChvcGNpb25hbCwgcG9kZSBmYWxoYXIgcG9yIENPUlMpXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgdmFsaWRhdGVVcmwgPSBgJHt0aGlzLkdQX1NFUlZJQ0VfVVJMfT9mPWpzb24mdG9rZW49JHt0b2tlbn1gXHJcbiAgICAgICAgY29uc3QgdmFsaWRhdGVSZXNwb25zZSA9IGF3YWl0IGZldGNoKHZhbGlkYXRlVXJsLCB7IG1ldGhvZDogJ0dFVCcgfSlcclxuICAgICAgICBjb25zdCB2YWxpZGF0ZVJlc3VsdCA9IGF3YWl0IHZhbGlkYXRlUmVzcG9uc2UuanNvbigpXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHZhbGlkYXRlUmVzdWx0LmVycm9yKSB7XHJcbiAgICAgICAgICBpZiAodmFsaWRhdGVSZXN1bHQuZXJyb3IuY29kZSA9PT0gNDk4IHx8IHZhbGlkYXRlUmVzdWx0LmVycm9yLmNvZGUgPT09IDQwMSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Rva2VuIGludsOhbGlkbyBvdSBleHBpcmFkby4gUG9yIGZhdm9yLCBnZXJlIHVtIG5vdm8gdG9rZW4uJylcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ+KckyBUb2tlbiB2YWxpZGFkbyBhbnRlcyBkbyBlbnZpbycpXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoICh2YWxpZGF0ZUVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKCdOw6NvIGZvaSBwb3Nzw612ZWwgdmFsaWRhciB0b2tlbiBwcsOpdmlvIChwb2RlIHNlciBDT1JTKTonLCB2YWxpZGF0ZUVycm9yKVxyXG4gICAgICAgIC8vIENvbnRpbnVhIG1lc21vIGFzc2ltIC0gc2Vyw6EgdmFsaWRhZG8gbmEgcmVxdWlzacOnw6NvIHByaW5jaXBhbFxyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBhZGRUb2tlblRvVXJsID0gKHVybCkgPT4ge1xyXG4gICAgICAgIGlmICghdG9rZW4pIHJldHVybiB1cmxcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3QgdXJsT2JqID0gbmV3IFVSTCh1cmwpXHJcbiAgICAgICAgICB1cmxPYmouc2VhcmNoUGFyYW1zLnNldCgndG9rZW4nLCB0b2tlbilcclxuICAgICAgICAgIHJldHVybiB1cmxPYmoudG9TdHJpbmcoKVxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgIGNvbnN0IHNlcGFyYXRvciA9IHVybC5pbmNsdWRlcygnPycpID8gJyYnIDogJz8nXHJcbiAgICAgICAgICByZXR1cm4gYCR7dXJsfSR7c2VwYXJhdG9yfXRva2VuPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHRva2VuKX1gXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvLyBCdXNjYSBtZXRhZGFkb3MgZGEgR1AgdG9vbCBwYXJhIGRlc2NvYnJpciBub21lcyBleGF0b3MgZG9zIHBhcsOibWV0cm9zXHJcbiAgICAgIC8vIE5PVEE6IFBhcmEgR0VUICh0YXNrSW5mbyksIG8gdG9rZW4gcG9kZSBpciBuYSBVUkwuIFBhcmEgUE9TVCAoc3VibWl0Sm9iKSwgbyB0b2tlbiB2YWkgbm8gYm9keS5cclxuICAgICAgY29uc3QgdGFza05hbWVFbmNvZGVkSW5mbyA9IGVuY29kZVVSSUNvbXBvbmVudCh0aGlzLkdQX1RBU0tfTkFNRSlcclxuICAgICAgY29uc3QgdGFza0luZm9VcmwgPSBgJHt0aGlzLkdQX1NFUlZJQ0VfVVJMfS8ke3Rhc2tOYW1lRW5jb2RlZEluZm99P2Y9anNvbiR7dG9rZW4gPyBgJnRva2VuPSR7dG9rZW59YCA6ICcnfWBcclxuICAgICAgXHJcbiAgICAgIGxldCBncFRhc2tJbmZvOiBhbnkgPSBudWxsXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgaW5mb1Jlc3BvbnNlID0gYXdhaXQgZmV0Y2godGFza0luZm9VcmwpXHJcbiAgICAgICAgaWYgKGluZm9SZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgZ3BUYXNrSW5mbyA9IGF3YWl0IGluZm9SZXNwb25zZS5qc29uKClcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdNZXRhZGFkb3MgZGEgR1AgdG9vbDonLCBncFRhc2tJbmZvKVxyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoaW5mb0Vycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKCdOw6NvIGZvaSBwb3Nzw612ZWwgYnVzY2FyIG1ldGFkYWRvcyBkYSBHUCB0b29sOicsIGluZm9FcnJvcilcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gUHJlcGFyYSBvcyBwYXLDom1ldHJvc1xyXG4gICAgICBjb25zdCBwYXJhbXM6IGFueSA9IHt9XHJcblxyXG4gICAgICAvLyBQYXLDom1ldHJvOiBRdWFudGlkYWRlIGRlIElERUEgZSB2YWxvcmVzXHJcbiAgICAgIC8vIFVzYSBvcyBub21lcyBleGF0b3MgZG9zIG1ldGFkYWRvcyBkYSBHUCB0b29sXHJcbiAgICAgIGxldCBxdWFudGlkYWRlUGFyYW1OYW1lID0gJ3F1YW50aWRhZGVfaWRlYSdcclxuICAgICAgbGV0IGlkZWFQYXJhbVByZWZpeCA9ICdpZGVhXydcclxuICAgICAgXHJcbiAgICAgIGlmIChncFRhc2tJbmZvICYmIGdwVGFza0luZm8ucGFyYW1ldGVycykge1xyXG4gICAgICAgIC8vIFByb2N1cmEgcGFyw6JtZXRyb3MgcmVsYWNpb25hZG9zIGEgSURFQSBub3MgbWV0YWRhZG9zXHJcbiAgICAgICAgY29uc3QgcXVhbnRpZGFkZVBhcmFtID0gZ3BUYXNrSW5mby5wYXJhbWV0ZXJzLmZpbmQoKHA6IGFueSkgPT4gXHJcbiAgICAgICAgICBwLm5hbWUgJiYgcC5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ3F1YW50aWRhZGUnKVxyXG4gICAgICAgIClcclxuICAgICAgICBpZiAocXVhbnRpZGFkZVBhcmFtKSB7XHJcbiAgICAgICAgICBxdWFudGlkYWRlUGFyYW1OYW1lID0gcXVhbnRpZGFkZVBhcmFtLm5hbWVcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdQYXLDom1ldHJvIGRlIHF1YW50aWRhZGUgZW5jb250cmFkbzonLCBxdWFudGlkYWRlUGFyYW1OYW1lKVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBQcm9jdXJhIHBhcsOibWV0cm9zIElERUEgKGlkZWFfMSwgaWRlYV8yLCBldGMpXHJcbiAgICAgICAgY29uc3QgaWRlYVBhcmFtcyA9IGdwVGFza0luZm8ucGFyYW1ldGVycy5maWx0ZXIoKHA6IGFueSkgPT4gXHJcbiAgICAgICAgICBwLm5hbWUgJiYgcC5uYW1lLnRvTG93ZXJDYXNlKCkuc3RhcnRzV2l0aCgnaWRlYV8nKVxyXG4gICAgICAgIClcclxuICAgICAgICBpZiAoaWRlYVBhcmFtcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAvLyBFeHRyYWkgbyBwcmVmaXhvIGRvIHByaW1laXJvIHBhcsOibWV0cm8gKGV4OiBcImlkZWFfMVwiIC0+IFwiaWRlYV9cIilcclxuICAgICAgICAgIGNvbnN0IGZpcnN0SWRlYVBhcmFtID0gaWRlYVBhcmFtc1swXS5uYW1lXHJcbiAgICAgICAgICBpZGVhUGFyYW1QcmVmaXggPSBmaXJzdElkZWFQYXJhbS5zdWJzdHJpbmcoMCwgZmlyc3RJZGVhUGFyYW0ubGFzdEluZGV4T2YoJ18nKSArIDEpXHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnUGFyw6JtZXRyb3MgSURFQSBlbmNvbnRyYWRvczonLCBpZGVhUGFyYW1zLm1hcCgocDogYW55KSA9PiBwLm5hbWUpKVxyXG4gICAgICAgICAgY29uc29sZS5sb2coJ1ByZWZpeG8gZG9zIHBhcsOibWV0cm9zIElERUE6JywgaWRlYVBhcmFtUHJlZml4KVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLy8gQWRpY2lvbmEgcXVhbnRpZGFkZSBkZSBJREVBXHJcbiAgICAgIHBhcmFtc1txdWFudGlkYWRlUGFyYW1OYW1lXSA9IHRoaXMuc3RhdGUucXVhbnRpZGFkZUlERUEudG9TdHJpbmcoKVxyXG4gICAgICBcclxuICAgICAgLy8gQWRpY2lvbmEgb3MgdmFsb3JlcyBkZSBJREVBIChpZGVhXzEsIGlkZWFfMiwgZXRjKVxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3RhdGUuaWRlYVZhbHVlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHBhcmFtc1tgJHtpZGVhUGFyYW1QcmVmaXh9JHtpICsgMX1gXSA9IHRoaXMuc3RhdGUuaWRlYVZhbHVlc1tpXS50cmltKClcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgY29uc29sZS5sb2coJ1BhcsOibWV0cm9zIElERUEgcHJlcGFyYWRvczonLCB7XHJcbiAgICAgICAgcXVhbnRpZGFkZTogcGFyYW1zW3F1YW50aWRhZGVQYXJhbU5hbWVdLFxyXG4gICAgICAgIGlkZWFzOiBPYmplY3Qua2V5cyhwYXJhbXMpLmZpbHRlcihrID0+IGsuc3RhcnRzV2l0aChpZGVhUGFyYW1QcmVmaXgpKVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgLy8gUGFyw6JtZXRybzogw4FyZWEgcHJvcG9zdGEgKHNoYXBlZmlsZSBPVSBnZW9tZXRyaWEgLSBudW5jYSBhbWJvcylcclxuICAgICAgLy8gVXNhIG9zIG5vbWVzIGV4YXRvcyBkb3MgbWV0YWRhZG9zIGRhIEdQIHRvb2xcclxuICAgICAgbGV0IHNoYXBlZmlsZVBhcmFtTmFtZSA9ICdhcmVhX3ppcCdcclxuICAgICAgbGV0IGdlb21ldHJ5UGFyYW1OYW1lID0gJ2FyZWFfZGVzZW5obydcclxuICAgICAgXHJcbiAgICAgIGlmIChncFRhc2tJbmZvICYmIGdwVGFza0luZm8ucGFyYW1ldGVycykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdUb2RvcyBvcyBwYXLDom1ldHJvcyBkYSBHUCB0b29sOicsIGdwVGFza0luZm8ucGFyYW1ldGVycy5tYXAoKHA6IGFueSkgPT4gKHtcclxuICAgICAgICAgIG5hbWU6IHAubmFtZSxcclxuICAgICAgICAgIGRhdGFUeXBlOiBwLmRhdGFUeXBlLFxyXG4gICAgICAgICAgZGlzcGxheU5hbWU6IHAuZGlzcGxheU5hbWVcclxuICAgICAgICB9KSkpXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gUHJvY3VyYSBwYXLDom1ldHJvIGRlIHNoYXBlZmlsZSBaSVAgKEdQRGF0YUZpbGUpIC0gdXNhZG8gQVBFTkFTIHBhcmEgdXBsb2FkIGRlIFpJUFxyXG4gICAgICAgIGNvbnN0IHNoYXBlZmlsZVBhcmFtID0gZ3BUYXNrSW5mby5wYXJhbWV0ZXJzLmZpbmQoKHA6IGFueSkgPT4gXHJcbiAgICAgICAgICBwLmRhdGFUeXBlID09PSAnR1BEYXRhRmlsZScgJiYgXHJcbiAgICAgICAgICBwLm5hbWUgJiYgXHJcbiAgICAgICAgICAocC5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ3ppcCcpIHx8IHAubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCdzaGFwZWZpbGUnKSlcclxuICAgICAgICApXHJcbiAgICAgICAgaWYgKHNoYXBlZmlsZVBhcmFtKSB7XHJcbiAgICAgICAgICBzaGFwZWZpbGVQYXJhbU5hbWUgPSBzaGFwZWZpbGVQYXJhbS5uYW1lXHJcbiAgICAgICAgICBjb25zb2xlLmxvZygn4pyTIFBhcsOibWV0cm8gcGFyYSBTSEFQRUZJTEUgWklQOicsIHNoYXBlZmlsZVBhcmFtTmFtZSwgJ1RpcG86Jywgc2hhcGVmaWxlUGFyYW0uZGF0YVR5cGUpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFByb2N1cmEgcGFyw6JtZXRybyBkZSBnZW9tZXRyaWEgZGVzZW5oYWRhIChHUEZlYXR1cmVSZWNvcmRTZXRMYXllcikgLSB1c2FkbyBBUEVOQVMgcGFyYSBza2V0Y2hcclxuICAgICAgICAvLyBJTVBPUlRBTlRFOiBFc3RlIMOpIHVtIHBhcsOibWV0cm8gRElGRVJFTlRFIGRvIHNoYXBlZmlsZVxyXG4gICAgICAgIGNvbnN0IGdlb21ldHJ5UGFyYW0gPSBncFRhc2tJbmZvLnBhcmFtZXRlcnMuZmluZCgocDogYW55KSA9PiBcclxuICAgICAgICAgIHAuZGF0YVR5cGUgPT09ICdHUEZlYXR1cmVSZWNvcmRTZXRMYXllcicgJiZcclxuICAgICAgICAgIHAubmFtZSAmJlxyXG4gICAgICAgICAgIXAubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCd6aXAnKSAmJlxyXG4gICAgICAgICAgIXAubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCdzaGFwZWZpbGUnKVxyXG4gICAgICAgIClcclxuICAgICAgICBpZiAoZ2VvbWV0cnlQYXJhbSkge1xyXG4gICAgICAgICAgZ2VvbWV0cnlQYXJhbU5hbWUgPSBnZW9tZXRyeVBhcmFtLm5hbWVcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCfinJMgUGFyw6JtZXRybyBwYXJhIEdFT01FVFJJQSBERVNFTkhBREE6JywgZ2VvbWV0cnlQYXJhbU5hbWUsICdUaXBvOicsIGdlb21ldHJ5UGFyYW0uZGF0YVR5cGUpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUud2Fybign4pqgIE7Do28gZm9pIGVuY29udHJhZG8gcGFyw6JtZXRybyBHUEZlYXR1cmVSZWNvcmRTZXRMYXllciBub3MgbWV0YWRhZG9zJylcclxuICAgICAgICAgIGNvbnNvbGUud2FybignVXNhbmRvIG5vbWUgcGFkcsOjbzonLCBnZW9tZXRyeVBhcmFtTmFtZSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8vIElNUE9SVEFOVEU6IFNoYXBlZmlsZSBlIGdlb21ldHJpYSBzw6NvIE1VVFVBTUVOVEUgRVhDTFVTSVZPU1xyXG4gICAgICAvLyAtIFNoYXBlZmlsZSBMYXllcjogZXh0cmFpIGdlb21ldHJpYSBkYSBjYW1hZGEgZSBlbnZpYSBjb21vIEdQRmVhdHVyZVJlY29yZFNldExheWVyXHJcbiAgICAgIC8vIC0gR2VvbWV0cmlhIGRlc2VuaGFkYTogdXNhIHBhcsOibWV0cm8gR1BGZWF0dXJlUmVjb3JkU2V0TGF5ZXIgKG91dHJvIG5vbWUpXHJcbiAgICAgIFxyXG4gICAgICBpZiAodGhpcy5zdGF0ZS5zaGFwZWZpbGVHZW9tZXRyeSkge1xyXG4gICAgICAgIC8vIFVzYSBhIGdlb21ldHJpYSBkbyBzaGFwZWZpbGUgcXVlIGZvaSBzYWx2YSBxdWFuZG8gYSBjYW1hZGEgZm9pIGNyaWFkYVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCc9PT0gVVNBTkRPIEdFT01FVFJJQSBETyBTSEFQRUZJTEUgPT09JylcclxuICAgICAgICBjb25zb2xlLmxvZygnR2VvbWV0cmlhIGRvIHNoYXBlZmlsZSBlbmNvbnRyYWRhIG5vIGVzdGFkbycpXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgZ2VvbWV0cnkgPSB0aGlzLnN0YXRlLnNoYXBlZmlsZUdlb21ldHJ5XHJcbiAgICAgICAgY29uc3Qgc3BhdGlhbFJlZiA9IGdlb21ldHJ5LnNwYXRpYWxSZWZlcmVuY2VcclxuICAgICAgICAvLyBHYXJhbnRlIHF1ZSBlc3TDoSBlbSBTSVJHQVMgMjAwMCAoNDY3NCkgcGFyYSBlbnZpb1xyXG4gICAgICAgIGxldCB3a2lkID0gc3BhdGlhbFJlZj8ud2tpZCB8fCA0Njc0XHJcbiAgICAgICAgbGV0IGxhdGVzdFdraWQgPSAoc3BhdGlhbFJlZiBhcyBhbnkpPy5sYXRlc3RXa2lkIHx8IHNwYXRpYWxSZWY/LndraWQgfHwgNDY3NFxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFNlIG7Do28gZXN0aXZlciBlbSA0Njc0LCBmb3LDp2EgcGFyYSA0Njc0IChqw6EgZGV2ZXJpYSB0ZXIgc2lkbyBjb252ZXJ0aWRvIGFudGVzKVxyXG4gICAgICAgIGlmICh3a2lkICE9PSA0Njc0KSB7XHJcbiAgICAgICAgICBjb25zb2xlLndhcm4oYOKaoCBHZW9tZXRyaWEgZXN0w6EgZW0gV0tJRCAke3draWR9LCBtYXMgZGV2ZSBlc3RhciBlbSA0Njc0IChTSVJHQVMgMjAwMClgKVxyXG4gICAgICAgICAgY29uc29sZS53YXJuKCdGb3LDp2FuZG8gV0tJRCBwYXJhIDQ2NzQgbm8gZW52aW8nKVxyXG4gICAgICAgICAgd2tpZCA9IDQ2NzRcclxuICAgICAgICAgIGxhdGVzdFdraWQgPSA0Njc0XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdHZW9tZXRyaWEgb3JpZ2luYWw6JywgZ2VvbWV0cnkpXHJcbiAgICAgICAgY29uc29sZS5sb2coJ1RpcG86JywgZ2VvbWV0cnkudHlwZSlcclxuICAgICAgICBjb25zb2xlLmxvZygnU3BhdGlhbFJlZmVyZW5jZSAod2tpZC9sYXRlc3RXa2lkKTonLCB3a2lkLCAnLycsIGxhdGVzdFdraWQpXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGdlb21ldHJ5LnR5cGUgPT09ICdwb2x5Z29uJykge1xyXG4gICAgICAgICAgY29uc3QgcG9seWdvbiA9IGdlb21ldHJ5IGFzIF9fZXNyaS5Qb2x5Z29uXHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnUmluZ3MgZG8gcG9sw61nb25vOicsIHBvbHlnb24ucmluZ3MpXHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnTsO6bWVybyBkZSByaW5nczonLCBwb2x5Z29uLnJpbmdzID8gcG9seWdvbi5yaW5ncy5sZW5ndGggOiAwKVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAvLyBWZXJpZmljYSBzZSB0ZW0gcmluZ3MgdsOhbGlkb3NcclxuICAgICAgICAgIGlmICghcG9seWdvbi5yaW5ncyB8fCBwb2x5Z29uLnJpbmdzLmxlbmd0aCA9PT0gMCB8fCAhcG9seWdvbi5yaW5nc1swXSB8fCBwb2x5Z29uLnJpbmdzWzBdLmxlbmd0aCA8IDMpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBIGdlb21ldHJpYSBkbyBzaGFwZWZpbGUgbsOjbyDDqSB2w6FsaWRhLiBQb3IgZmF2b3IsIHZlcmlmaXF1ZSBvIGFycXVpdm8uJylcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQ29udmVydGUgYSBnZW9tZXRyaWEgcGFyYSBKU09OXHJcbiAgICAgICAgbGV0IGdlb21ldHJ5SnNvbiA9IGdlb21ldHJ5LnRvSlNPTigpXHJcbiAgICAgICAgY29uc29sZS5sb2coJ0dlb21ldHJpYSBKU09OIG9yaWdpbmFsOicsIGdlb21ldHJ5SnNvbilcclxuICAgICAgICBcclxuICAgICAgICAvLyBHYXJhbnRlIHF1ZSBvcyByaW5ncyBlc3TDo28gZmVjaGFkb3MgKHByaW1laXJvIGUgw7psdGltbyBwb250byBkZXZlbSBzZXIgaWd1YWlzKVxyXG4gICAgICAgIGlmIChnZW9tZXRyeS50eXBlID09PSAncG9seWdvbicgJiYgZ2VvbWV0cnlKc29uLnJpbmdzKSB7XHJcbiAgICAgICAgICBnZW9tZXRyeUpzb24ucmluZ3MgPSBnZW9tZXRyeUpzb24ucmluZ3MubWFwKChyaW5nOiBudW1iZXJbXVtdKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyaW5nLmxlbmd0aCA8IDMpIHtcclxuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JpbmcgZGV2ZSB0ZXIgcGVsbyBtZW5vcyAzIHBvbnRvcycpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIFZlcmlmaWNhIHNlIG8gcmluZyBlc3TDoSBmZWNoYWRvIChwcmltZWlybyBlIMO6bHRpbW8gcG9udG8gc8OjbyBpZ3VhaXMpXHJcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0UG9pbnQgPSByaW5nWzBdXHJcbiAgICAgICAgICAgIGNvbnN0IGxhc3RQb2ludCA9IHJpbmdbcmluZy5sZW5ndGggLSAxXVxyXG4gICAgICAgICAgICBjb25zdCBpc0Nsb3NlZCA9IGZpcnN0UG9pbnRbMF0gPT09IGxhc3RQb2ludFswXSAmJiBmaXJzdFBvaW50WzFdID09PSBsYXN0UG9pbnRbMV1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIFNlIG7Do28gZXN0aXZlciBmZWNoYWRvLCBhZGljaW9uYSBvIHByaW1laXJvIHBvbnRvIG5vIGZpbmFsXHJcbiAgICAgICAgICAgIGlmICghaXNDbG9zZWQpIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUmluZyBuw6NvIGVzdGF2YSBmZWNoYWRvLiBGZWNoYW5kby4uLicpXHJcbiAgICAgICAgICAgICAgcmluZyA9IFsuLi5yaW5nLCBbZmlyc3RQb2ludFswXSwgZmlyc3RQb2ludFsxXV1dXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIEdhcmFudGUgcXVlIGNhZGEgcG9udG8gdGVtIGV4YXRhbWVudGUgMiBjb29yZGVuYWRhcyAoeCwgeSlcclxuICAgICAgICAgICAgcmluZyA9IHJpbmcubWFwKChwb2ludDogbnVtYmVyW10pID0+IHtcclxuICAgICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkocG9pbnQpIHx8IHBvaW50Lmxlbmd0aCA8IDIpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUG9udG8gaW52w6FsaWRvIG5vIHJpbmcnKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvLyBHYXJhbnRlIHF1ZSB0ZW0gZXhhdGFtZW50ZSAyIGNvb3JkZW5hZGFzICh4LCB5KVxyXG4gICAgICAgICAgICAgIHJldHVybiBbcG9pbnRbMF0sIHBvaW50WzFdXVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIHJpbmdcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIElNUE9SVEFOVEU6IEEgZ2VvbWV0cmlhIGRlbnRybyBkbyBmZWF0dXJlIERFVkUgdGVyIHNldSBwcsOzcHJpbyBzcGF0aWFsUmVmZXJlbmNlXHJcbiAgICAgICAgLy8gRm9ybWF0byBleGF0byBjb21vIG5vIGV4ZW1wbG8gZm9ybmVjaWRvXHJcbiAgICAgICAgZ2VvbWV0cnlKc29uLnNwYXRpYWxSZWZlcmVuY2UgPSB7XHJcbiAgICAgICAgICB3a2lkOiB3a2lkLFxyXG4gICAgICAgICAgbGF0ZXN0V2tpZDogbGF0ZXN0V2tpZFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBWYWxpZGHDp8OjbyBmaW5hbCBkYSBnZW9tZXRyaWFcclxuICAgICAgICBpZiAoZ2VvbWV0cnkudHlwZSA9PT0gJ3BvbHlnb24nKSB7XHJcbiAgICAgICAgICBpZiAoIWdlb21ldHJ5SnNvbi5yaW5ncyB8fCBnZW9tZXRyeUpzb24ucmluZ3MubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignR2VvbWV0cmlhIGRlIHBvbMOtZ29ubyBuw6NvIHBvc3N1aSByaW5ncyB2w6FsaWRvcycpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC8vIFZhbGlkYSBjYWRhIHJpbmdcclxuICAgICAgICAgIGdlb21ldHJ5SnNvbi5yaW5ncy5mb3JFYWNoKChyaW5nOiBudW1iZXJbXVtdLCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShyaW5nKSB8fCByaW5nLmxlbmd0aCA8IDQpIHsgLy8gTcOtbmltbyA0IHBvbnRvcyAoMyArIGZlY2hhbWVudG8pXHJcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBSaW5nICR7aW5kZXh9IG7Do28gw6kgdsOhbGlkbzogZGV2ZSB0ZXIgcGVsbyBtZW5vcyA0IHBvbnRvcyAoMyArIGZlY2hhbWVudG8pYClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gVmVyaWZpY2Egc2UgZXN0w6EgZmVjaGFkb1xyXG4gICAgICAgICAgICBjb25zdCBmaXJzdCA9IHJpbmdbMF1cclxuICAgICAgICAgICAgY29uc3QgbGFzdCA9IHJpbmdbcmluZy5sZW5ndGggLSAxXVxyXG4gICAgICAgICAgICBpZiAoZmlyc3RbMF0gIT09IGxhc3RbMF0gfHwgZmlyc3RbMV0gIT09IGxhc3RbMV0pIHtcclxuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFJpbmcgJHtpbmRleH0gbsOjbyBlc3TDoSBmZWNoYWRvIGNvcnJldGFtZW50ZWApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIENyaWEgdW0gR1BGZWF0dXJlUmVjb3JkU2V0TGF5ZXIgbm8gZm9ybWF0byBFWEFUTyBlc3BlcmFkbyBwZWxhIEdQIHRvb2xcclxuICAgICAgICAvLyBTZWd1aW5kbyBvIGZvcm1hdG8gZG8gZXhlbXBsbyBmb3JuZWNpZG9cclxuICAgICAgICBjb25zdCBmZWF0dXJlUmVjb3JkU2V0TGF5ZXIgPSB7XHJcbiAgICAgICAgICBkaXNwbGF5RmllbGROYW1lOiAnJyxcclxuICAgICAgICAgIGdlb21ldHJ5VHlwZTogJ2VzcmlHZW9tZXRyeVBvbHlnb24nLFxyXG4gICAgICAgICAgc3BhdGlhbFJlZmVyZW5jZToge1xyXG4gICAgICAgICAgICB3a2lkOiB3a2lkLFxyXG4gICAgICAgICAgICBsYXRlc3RXa2lkOiBsYXRlc3RXa2lkXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZmllbGRzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBuYW1lOiAnT0JKRUNUSUQnLFxyXG4gICAgICAgICAgICAgIHR5cGU6ICdlc3JpRmllbGRUeXBlT0lEJyxcclxuICAgICAgICAgICAgICBhbGlhczogJ09CSkVDVElEJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgbmFtZTogJ1NoYXBlX0xlbmd0aCcsXHJcbiAgICAgICAgICAgICAgdHlwZTogJ2VzcmlGaWVsZFR5cGVEb3VibGUnLFxyXG4gICAgICAgICAgICAgIGFsaWFzOiAnU2hhcGVfTGVuZ3RoJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgbmFtZTogJ1NoYXBlX0FyZWEnLFxyXG4gICAgICAgICAgICAgIHR5cGU6ICdlc3JpRmllbGRUeXBlRG91YmxlJyxcclxuICAgICAgICAgICAgICBhbGlhczogJ1NoYXBlX0FyZWEnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgICBmZWF0dXJlczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgZ2VvbWV0cnk6IGdlb21ldHJ5SnNvbiwgLy8gZ2VvbWV0cnlKc29uIGrDoSB0ZW0gc3BhdGlhbFJlZmVyZW5jZSBkZW50cm9cclxuICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiB7XHJcbiAgICAgICAgICAgICAgICBPQkpFQ1RJRDogMSxcclxuICAgICAgICAgICAgICAgIFNoYXBlX0xlbmd0aDogMCxcclxuICAgICAgICAgICAgICAgIFNoYXBlX0FyZWE6IDBcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgICBleGNlZWRlZFRyYW5zZmVyTGltaXQ6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFZhbGlkYcOnw6NvIGZpbmFsIGFudGVzIGRlIGVudmlhclxyXG4gICAgICAgIGlmICghZmVhdHVyZVJlY29yZFNldExheWVyLmZlYXR1cmVzIHx8IGZlYXR1cmVSZWNvcmRTZXRMYXllci5mZWF0dXJlcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTmVuaHVtYSBmZWF0dXJlIGZvaSBhZGljaW9uYWRhIGFvIEZlYXR1cmVSZWNvcmRTZXRMYXllcicpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICghZmVhdHVyZVJlY29yZFNldExheWVyLmZlYXR1cmVzWzBdLmdlb21ldHJ5KSB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0EgZ2VvbWV0cmlhIG7Do28gZm9pIGFkaWNpb25hZGEgYW8gZmVhdHVyZScpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICghZmVhdHVyZVJlY29yZFNldExheWVyLmZlYXR1cmVzWzBdLmdlb21ldHJ5LnJpbmdzIHx8IGZlYXR1cmVSZWNvcmRTZXRMYXllci5mZWF0dXJlc1swXS5nZW9tZXRyeS5yaW5ncy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQSBnZW9tZXRyaWEgbsOjbyBwb3NzdWkgcmluZ3MgdsOhbGlkb3MnKVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBMb2dzIGRldGFsaGFkb3MgZGFzIGNvb3JkZW5hZGFzIGFudGVzIGRlIGVudmlhclxyXG4gICAgICAgIGNvbnNvbGUubG9nKCc9PT0gQ09PUkRFTkFEQVMgRE8gU0hBUEVGSUxFIChQUk9OVEFTIFBBUkEgRU5WSU8pID09PScpXHJcbiAgICAgICAgY29uc29sZS5sb2coJ0ZlYXR1cmVSZWNvcmRTZXRMYXllciB2YWxpZGFkbyBlIHByb250byBwYXJhIGVudmlvJylcclxuICAgICAgICBjb25zb2xlLmxvZygnTsO6bWVybyBkZSBmZWF0dXJlczonLCBmZWF0dXJlUmVjb3JkU2V0TGF5ZXIuZmVhdHVyZXMubGVuZ3RoKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdOw7ptZXJvIGRlIHJpbmdzOicsIGZlYXR1cmVSZWNvcmRTZXRMYXllci5mZWF0dXJlc1swXS5nZW9tZXRyeS5yaW5ncy5sZW5ndGgpXHJcbiAgICAgICAgY29uc29sZS5sb2coJ1NwYXRpYWxSZWZlcmVuY2UgKHdraWQvbGF0ZXN0V2tpZCk6Jywgd2tpZCwgJy8nLCBsYXRlc3RXa2lkKVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIE1vc3RyYSB0b2RhcyBhcyBjb29yZGVuYWRhcyBkZXRhbGhhZGFtZW50ZVxyXG4gICAgICAgIGlmIChmZWF0dXJlUmVjb3JkU2V0TGF5ZXIuZmVhdHVyZXNbMF0uZ2VvbWV0cnkucmluZ3MpIHtcclxuICAgICAgICAgIGZlYXR1cmVSZWNvcmRTZXRMYXllci5mZWF0dXJlc1swXS5nZW9tZXRyeS5yaW5ncy5mb3JFYWNoKChyaW5nOiBudW1iZXJbXVtdLCByaW5nSW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgLS0tIFJpbmcgJHtyaW5nSW5kZXggKyAxfSAoJHtyaW5nLmxlbmd0aH0gcG9udG9zKSAtLS1gKVxyXG4gICAgICAgICAgICByaW5nLmZvckVhY2goKHBvaW50OiBudW1iZXJbXSwgcG9pbnRJbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coYCAgUG9udG8gJHtwb2ludEluZGV4ICsgMX06IFske3BvaW50WzBdfSwgJHtwb2ludFsxXX1dYClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLy8gTW9zdHJhIHNlIG8gcmluZyBlc3TDoSBmZWNoYWRvXHJcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0ID0gcmluZ1swXVxyXG4gICAgICAgICAgICBjb25zdCBsYXN0ID0gcmluZ1tyaW5nLmxlbmd0aCAtIDFdXHJcbiAgICAgICAgICAgIGNvbnN0IGlzQ2xvc2VkID0gZmlyc3RbMF0gPT09IGxhc3RbMF0gJiYgZmlyc3RbMV0gPT09IGxhc3RbMV1cclxuICAgICAgICAgICAgY29uc29sZS5sb2coYCAgUmluZyAke3JpbmdJbmRleCArIDF9IGVzdMOhIGZlY2hhZG86ICR7aXNDbG9zZWR9YClcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIE1vc3RyYSByZXN1bW8gZGFzIGNvb3JkZW5hZGFzXHJcbiAgICAgICAgaWYgKGZlYXR1cmVSZWNvcmRTZXRMYXllci5mZWF0dXJlc1swXS5nZW9tZXRyeS5yaW5ncyAmJiBmZWF0dXJlUmVjb3JkU2V0TGF5ZXIuZmVhdHVyZXNbMF0uZ2VvbWV0cnkucmluZ3MubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgY29uc3QgZmlyc3RSaW5nID0gZmVhdHVyZVJlY29yZFNldExheWVyLmZlYXR1cmVzWzBdLmdlb21ldHJ5LnJpbmdzWzBdXHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnLS0tIFJlc3VtbyBkYXMgQ29vcmRlbmFkYXMgLS0tJylcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGBUb3RhbCBkZSBwb250b3Mgbm8gcHJpbWVpcm8gcmluZzogJHtmaXJzdFJpbmcubGVuZ3RofWApXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhgUHJpbWVpcm8gcG9udG86IFske2ZpcnN0UmluZ1swXVswXX0sICR7Zmlyc3RSaW5nWzBdWzFdfV1gKVxyXG4gICAgICAgICAgY29uc29sZS5sb2coYMOabHRpbW8gcG9udG86IFske2ZpcnN0UmluZ1tmaXJzdFJpbmcubGVuZ3RoIC0gMV1bMF19LCAke2ZpcnN0UmluZ1tmaXJzdFJpbmcubGVuZ3RoIC0gMV1bMV19XWApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEVudmlhIGNvbW8gc3RyaW5nIEpTT04gdXNhbmRvIG8gbm9tZSBjb3JyZXRvIGRvIHBhcsOibWV0cm9cclxuICAgICAgICBjb25zdCBnZW9tZXRyeVZhbHVlID0gSlNPTi5zdHJpbmdpZnkoZmVhdHVyZVJlY29yZFNldExheWVyKVxyXG4gICAgICAgIHBhcmFtc1tnZW9tZXRyeVBhcmFtTmFtZV0gPSBnZW9tZXRyeVZhbHVlXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc29sZS5sb2coJ0dlb21ldHJpYSBhZGljaW9uYWRhIGFvIHBhcsOibWV0cm86JywgZ2VvbWV0cnlQYXJhbU5hbWUpXHJcbiAgICAgICAgY29uc29sZS5sb2coJ1RhbWFuaG8gZG8gSlNPTjonLCBnZW9tZXRyeVZhbHVlLmxlbmd0aCwgJ2NhcmFjdGVyZXMnKVxyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuZHJhd25HZW9tZXRyeSkge1xyXG4gICAgICAgIC8vIFBhcmEgR1BGZWF0dXJlUmVjb3JkU2V0TGF5ZXIgKGdlb21ldHJpYSBkZXNlbmhhZGEpLCBlbnZpYSBKU09OXHJcbiAgICAgICAgY29uc29sZS5sb2coJ1VzYW5kbyBHRU9NRVRSSUEgREVTRU5IQURBIC0gcGFyw6JtZXRybzonLCBnZW9tZXRyeVBhcmFtTmFtZSlcclxuICAgICAgICAvLyBWYWxpZGEgYSBnZW9tZXRyaWEgYW50ZXMgZGUgZW52aWFyXHJcbiAgICAgICAgY29uc3QgZ2VvbWV0cnkgPSB0aGlzLnN0YXRlLmRyYXduR2VvbWV0cnlcclxuICAgICAgICBjb25zb2xlLmxvZygnR2VvbWV0cmlhIG9yaWdpbmFsOicsIGdlb21ldHJ5KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdUaXBvOicsIGdlb21ldHJ5LnR5cGUpXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGdlb21ldHJ5LnR5cGUgPT09ICdwb2x5Z29uJykge1xyXG4gICAgICAgICAgY29uc3QgcG9seWdvbiA9IGdlb21ldHJ5IGFzIF9fZXNyaS5Qb2x5Z29uXHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnUmluZ3MgZG8gcG9sw61nb25vOicsIHBvbHlnb24ucmluZ3MpXHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnTsO6bWVybyBkZSByaW5nczonLCBwb2x5Z29uLnJpbmdzID8gcG9seWdvbi5yaW5ncy5sZW5ndGggOiAwKVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAvLyBWZXJpZmljYSBzZSB0ZW0gcmluZ3MgdsOhbGlkb3NcclxuICAgICAgICAgIGlmICghcG9seWdvbi5yaW5ncyB8fCBwb2x5Z29uLnJpbmdzLmxlbmd0aCA9PT0gMCB8fCAhcG9seWdvbi5yaW5nc1swXSB8fCBwb2x5Z29uLnJpbmdzWzBdLmxlbmd0aCA8IDMpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBIGdlb21ldHJpYSBkZXNlbmhhZGEgbsOjbyDDqSB2w6FsaWRhLiBQb3IgZmF2b3IsIGRlc2VuaGUgdW0gcG9sw61nb25vIGNvbSBwZWxvIG1lbm9zIDMgcG9udG9zLicpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIENvbnZlcnRlIGEgZ2VvbWV0cmlhIHBhcmEgSlNPTlxyXG4gICAgICAgIGxldCBnZW9tZXRyeUpzb24gPSBnZW9tZXRyeS50b0pTT04oKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdHZW9tZXRyaWEgSlNPTiBvcmlnaW5hbDonLCBnZW9tZXRyeUpzb24pXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3Qgc3BhdGlhbFJlZiA9IGdlb21ldHJ5LnNwYXRpYWxSZWZlcmVuY2VcclxuICAgICAgICBjb25zb2xlLmxvZygnU3BhdGlhbFJlZmVyZW5jZSBvcmlnaW5hbDonLCBzcGF0aWFsUmVmKVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIE9idMOpbSBvIFdLSUQgZG8gc3BhdGlhbCByZWZlcmVuY2VcclxuICAgICAgICAvLyBJTVBPUlRBTlRFOiBVc2EgbyBzcGF0aWFsUmVmZXJlbmNlIGRhIGdlb21ldHJpYSBvcmlnaW5hbCwgbsOjbyB1bSBwYWRyw6NvXHJcbiAgICAgICAgY29uc3Qgd2tpZCA9IHNwYXRpYWxSZWY/LndraWQgfHwgKHNwYXRpYWxSZWYgYXMgYW55KT8ud2tUZXh0IHx8IDEwMjEwMFxyXG4gICAgICAgIGNvbnN0IGxhdGVzdFdraWQgPSAoc3BhdGlhbFJlZiBhcyBhbnkpPy5sYXRlc3RXa2lkIHx8IHNwYXRpYWxSZWY/LndraWQgfHwgMzg1N1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEdhcmFudGUgcXVlIG9zIHJpbmdzIGVzdMOjbyBmZWNoYWRvcyAocHJpbWVpcm8gZSDDumx0aW1vIHBvbnRvIGRldmVtIHNlciBpZ3VhaXMpXHJcbiAgICAgICAgaWYgKGdlb21ldHJ5LnR5cGUgPT09ICdwb2x5Z29uJyAmJiBnZW9tZXRyeUpzb24ucmluZ3MpIHtcclxuICAgICAgICAgIGdlb21ldHJ5SnNvbi5yaW5ncyA9IGdlb21ldHJ5SnNvbi5yaW5ncy5tYXAoKHJpbmc6IG51bWJlcltdW10pID0+IHtcclxuICAgICAgICAgICAgaWYgKHJpbmcubGVuZ3RoIDwgMykge1xyXG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmluZyBkZXZlIHRlciBwZWxvIG1lbm9zIDMgcG9udG9zJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gVmVyaWZpY2Egc2UgbyByaW5nIGVzdMOhIGZlY2hhZG8gKHByaW1laXJvIGUgw7psdGltbyBwb250byBzw6NvIGlndWFpcylcclxuICAgICAgICAgICAgY29uc3QgZmlyc3RQb2ludCA9IHJpbmdbMF1cclxuICAgICAgICAgICAgY29uc3QgbGFzdFBvaW50ID0gcmluZ1tyaW5nLmxlbmd0aCAtIDFdXHJcbiAgICAgICAgICAgIGNvbnN0IGlzQ2xvc2VkID0gZmlyc3RQb2ludFswXSA9PT0gbGFzdFBvaW50WzBdICYmIGZpcnN0UG9pbnRbMV0gPT09IGxhc3RQb2ludFsxXVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gU2UgbsOjbyBlc3RpdmVyIGZlY2hhZG8sIGFkaWNpb25hIG8gcHJpbWVpcm8gcG9udG8gbm8gZmluYWxcclxuICAgICAgICAgICAgaWYgKCFpc0Nsb3NlZCkge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSaW5nIG7Do28gZXN0YXZhIGZlY2hhZG8uIEZlY2hhbmRvLi4uJylcclxuICAgICAgICAgICAgICByaW5nID0gWy4uLnJpbmcsIFtmaXJzdFBvaW50WzBdLCBmaXJzdFBvaW50WzFdXV1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gR2FyYW50ZSBxdWUgY2FkYSBwb250byB0ZW0gZXhhdGFtZW50ZSAyIGNvb3JkZW5hZGFzICh4LCB5KVxyXG4gICAgICAgICAgICByaW5nID0gcmluZy5tYXAoKHBvaW50OiBudW1iZXJbXSkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShwb2ludCkgfHwgcG9pbnQubGVuZ3RoIDwgMikge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdQb250byBpbnbDoWxpZG8gbm8gcmluZycpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8vIEdhcmFudGUgcXVlIHRlbSBleGF0YW1lbnRlIDIgY29vcmRlbmFkYXMgKHgsIHkpXHJcbiAgICAgICAgICAgICAgcmV0dXJuIFtwb2ludFswXSwgcG9pbnRbMV1dXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gcmluZ1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gSU1QT1JUQU5URTogQSBnZW9tZXRyaWEgZGVudHJvIGRvIGZlYXR1cmUgREVWRSB0ZXIgc2V1IHByw7NwcmlvIHNwYXRpYWxSZWZlcmVuY2VcclxuICAgICAgICAvLyBGb3JtYXRvIGV4YXRvIGNvbW8gbm8gZXhlbXBsbyBmb3JuZWNpZG9cclxuICAgICAgICBnZW9tZXRyeUpzb24uc3BhdGlhbFJlZmVyZW5jZSA9IHtcclxuICAgICAgICAgIHdraWQ6IHdraWQsXHJcbiAgICAgICAgICBsYXRlc3RXa2lkOiBsYXRlc3RXa2lkXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFZhbGlkYcOnw6NvIGZpbmFsIGRhIGdlb21ldHJpYVxyXG4gICAgICAgIGlmIChnZW9tZXRyeS50eXBlID09PSAncG9seWdvbicpIHtcclxuICAgICAgICAgIGlmICghZ2VvbWV0cnlKc29uLnJpbmdzIHx8IGdlb21ldHJ5SnNvbi5yaW5ncy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdHZW9tZXRyaWEgZGUgcG9sw61nb25vIG7Do28gcG9zc3VpIHJpbmdzIHbDoWxpZG9zJylcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLy8gVmFsaWRhIGNhZGEgcmluZ1xyXG4gICAgICAgICAgZ2VvbWV0cnlKc29uLnJpbmdzLmZvckVhY2goKHJpbmc6IG51bWJlcltdW10sIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHJpbmcpIHx8IHJpbmcubGVuZ3RoIDwgNCkgeyAvLyBNw61uaW1vIDQgcG9udG9zICgzICsgZmVjaGFtZW50bylcclxuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFJpbmcgJHtpbmRleH0gbsOjbyDDqSB2w6FsaWRvOiBkZXZlIHRlciBwZWxvIG1lbm9zIDQgcG9udG9zICgzICsgZmVjaGFtZW50bylgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBWZXJpZmljYSBzZSBlc3TDoSBmZWNoYWRvXHJcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0ID0gcmluZ1swXVxyXG4gICAgICAgICAgICBjb25zdCBsYXN0ID0gcmluZ1tyaW5nLmxlbmd0aCAtIDFdXHJcbiAgICAgICAgICAgIGlmIChmaXJzdFswXSAhPT0gbGFzdFswXSB8fCBmaXJzdFsxXSAhPT0gbGFzdFsxXSkge1xyXG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgUmluZyAke2luZGV4fSBuw6NvIGVzdMOhIGZlY2hhZG8gY29ycmV0YW1lbnRlYClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQ3JpYSB1bSBHUEZlYXR1cmVSZWNvcmRTZXRMYXllciBubyBmb3JtYXRvIEVYQVRPIGVzcGVyYWRvIHBlbGEgR1AgdG9vbFxyXG4gICAgICAgIC8vIFNlZ3VpbmRvIG8gZm9ybWF0byBkbyBleGVtcGxvIGZvcm5lY2lkb1xyXG4gICAgICAgIGNvbnN0IGZlYXR1cmVSZWNvcmRTZXRMYXllciA9IHtcclxuICAgICAgICAgIGRpc3BsYXlGaWVsZE5hbWU6ICcnLFxyXG4gICAgICAgICAgZ2VvbWV0cnlUeXBlOiAnZXNyaUdlb21ldHJ5UG9seWdvbicsXHJcbiAgICAgICAgICBzcGF0aWFsUmVmZXJlbmNlOiB7XHJcbiAgICAgICAgICAgIHdraWQ6IHdraWQsXHJcbiAgICAgICAgICAgIGxhdGVzdFdraWQ6IGxhdGVzdFdraWRcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBmaWVsZHM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIG5hbWU6ICdPQkpFQ1RJRCcsXHJcbiAgICAgICAgICAgICAgdHlwZTogJ2VzcmlGaWVsZFR5cGVPSUQnLFxyXG4gICAgICAgICAgICAgIGFsaWFzOiAnT0JKRUNUSUQnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBuYW1lOiAnU2hhcGVfTGVuZ3RoJyxcclxuICAgICAgICAgICAgICB0eXBlOiAnZXNyaUZpZWxkVHlwZURvdWJsZScsXHJcbiAgICAgICAgICAgICAgYWxpYXM6ICdTaGFwZV9MZW5ndGgnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBuYW1lOiAnU2hhcGVfQXJlYScsXHJcbiAgICAgICAgICAgICAgdHlwZTogJ2VzcmlGaWVsZFR5cGVEb3VibGUnLFxyXG4gICAgICAgICAgICAgIGFsaWFzOiAnU2hhcGVfQXJlYSdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgXSxcclxuICAgICAgICAgIGZlYXR1cmVzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBnZW9tZXRyeTogZ2VvbWV0cnlKc29uLCAvLyBnZW9tZXRyeUpzb24gasOhIHRlbSBzcGF0aWFsUmVmZXJlbmNlIGRlbnRyb1xyXG4gICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHtcclxuICAgICAgICAgICAgICAgIE9CSkVDVElEOiAxLFxyXG4gICAgICAgICAgICAgICAgU2hhcGVfTGVuZ3RoOiAwLFxyXG4gICAgICAgICAgICAgICAgU2hhcGVfQXJlYTogMFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgXSxcclxuICAgICAgICAgIGV4Y2VlZGVkVHJhbnNmZXJMaW1pdDogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gVmFsaWRhw6fDo28gZmluYWwgYW50ZXMgZGUgZW52aWFyXHJcbiAgICAgICAgaWYgKCFmZWF0dXJlUmVjb3JkU2V0TGF5ZXIuZmVhdHVyZXMgfHwgZmVhdHVyZVJlY29yZFNldExheWVyLmZlYXR1cmVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZW5odW1hIGZlYXR1cmUgZm9pIGFkaWNpb25hZGEgYW8gRmVhdHVyZVJlY29yZFNldExheWVyJylcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKCFmZWF0dXJlUmVjb3JkU2V0TGF5ZXIuZmVhdHVyZXNbMF0uZ2VvbWV0cnkpIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQSBnZW9tZXRyaWEgbsOjbyBmb2kgYWRpY2lvbmFkYSBhbyBmZWF0dXJlJylcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKCFmZWF0dXJlUmVjb3JkU2V0TGF5ZXIuZmVhdHVyZXNbMF0uZ2VvbWV0cnkucmluZ3MgfHwgZmVhdHVyZVJlY29yZFNldExheWVyLmZlYXR1cmVzWzBdLmdlb21ldHJ5LnJpbmdzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBIGdlb21ldHJpYSBuw6NvIHBvc3N1aSByaW5ncyB2w6FsaWRvcycpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIExvZ3MgZGV0YWxoYWRvcyBkYXMgY29vcmRlbmFkYXMgYW50ZXMgZGUgZW52aWFyXHJcbiAgICAgICAgY29uc29sZS5sb2coJz09PSBDT09SREVOQURBUyBETyBERVNFTkhPIChQUk9OVEFTIFBBUkEgRU5WSU8pID09PScpXHJcbiAgICAgICAgY29uc29sZS5sb2coJ0ZlYXR1cmVSZWNvcmRTZXRMYXllciB2YWxpZGFkbyBlIHByb250byBwYXJhIGVudmlvJylcclxuICAgICAgICBjb25zb2xlLmxvZygnTsO6bWVybyBkZSBmZWF0dXJlczonLCBmZWF0dXJlUmVjb3JkU2V0TGF5ZXIuZmVhdHVyZXMubGVuZ3RoKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdOw7ptZXJvIGRlIHJpbmdzOicsIGZlYXR1cmVSZWNvcmRTZXRMYXllci5mZWF0dXJlc1swXS5nZW9tZXRyeS5yaW5ncy5sZW5ndGgpXHJcbiAgICAgICAgY29uc29sZS5sb2coJ1NwYXRpYWxSZWZlcmVuY2UgKHdraWQvbGF0ZXN0V2tpZCk6Jywgd2tpZCwgJy8nLCBsYXRlc3RXa2lkKVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIE1vc3RyYSB0b2RhcyBhcyBjb29yZGVuYWRhcyBkZXRhbGhhZGFtZW50ZVxyXG4gICAgICAgIGlmIChmZWF0dXJlUmVjb3JkU2V0TGF5ZXIuZmVhdHVyZXNbMF0uZ2VvbWV0cnkucmluZ3MpIHtcclxuICAgICAgICAgIGZlYXR1cmVSZWNvcmRTZXRMYXllci5mZWF0dXJlc1swXS5nZW9tZXRyeS5yaW5ncy5mb3JFYWNoKChyaW5nOiBudW1iZXJbXVtdLCByaW5nSW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgLS0tIFJpbmcgJHtyaW5nSW5kZXggKyAxfSAoJHtyaW5nLmxlbmd0aH0gcG9udG9zKSAtLS1gKVxyXG4gICAgICAgICAgICByaW5nLmZvckVhY2goKHBvaW50OiBudW1iZXJbXSwgcG9pbnRJbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coYCAgUG9udG8gJHtwb2ludEluZGV4ICsgMX06IFske3BvaW50WzBdfSwgJHtwb2ludFsxXX1dYClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLy8gTW9zdHJhIHNlIG8gcmluZyBlc3TDoSBmZWNoYWRvXHJcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0ID0gcmluZ1swXVxyXG4gICAgICAgICAgICBjb25zdCBsYXN0ID0gcmluZ1tyaW5nLmxlbmd0aCAtIDFdXHJcbiAgICAgICAgICAgIGNvbnN0IGlzQ2xvc2VkID0gZmlyc3RbMF0gPT09IGxhc3RbMF0gJiYgZmlyc3RbMV0gPT09IGxhc3RbMV1cclxuICAgICAgICAgICAgY29uc29sZS5sb2coYCAgUmluZyAke3JpbmdJbmRleCArIDF9IGVzdMOhIGZlY2hhZG86ICR7aXNDbG9zZWR9YClcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIE1vc3RyYSByZXN1bW8gZGFzIGNvb3JkZW5hZGFzXHJcbiAgICAgICAgaWYgKGZlYXR1cmVSZWNvcmRTZXRMYXllci5mZWF0dXJlc1swXS5nZW9tZXRyeS5yaW5ncyAmJiBmZWF0dXJlUmVjb3JkU2V0TGF5ZXIuZmVhdHVyZXNbMF0uZ2VvbWV0cnkucmluZ3MubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgY29uc3QgZmlyc3RSaW5nID0gZmVhdHVyZVJlY29yZFNldExheWVyLmZlYXR1cmVzWzBdLmdlb21ldHJ5LnJpbmdzWzBdXHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnLS0tIFJlc3VtbyBkYXMgQ29vcmRlbmFkYXMgLS0tJylcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGBUb3RhbCBkZSBwb250b3Mgbm8gcHJpbWVpcm8gcmluZzogJHtmaXJzdFJpbmcubGVuZ3RofWApXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhgUHJpbWVpcm8gcG9udG86IFske2ZpcnN0UmluZ1swXVswXX0sICR7Zmlyc3RSaW5nWzBdWzFdfV1gKVxyXG4gICAgICAgICAgY29uc29sZS5sb2coYMOabHRpbW8gcG9udG86IFske2ZpcnN0UmluZ1tmaXJzdFJpbmcubGVuZ3RoIC0gMV1bMF19LCAke2ZpcnN0UmluZ1tmaXJzdFJpbmcubGVuZ3RoIC0gMV1bMV19XWApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEVudmlhIGNvbW8gc3RyaW5nIEpTT04gdXNhbmRvIG8gbm9tZSBjb3JyZXRvIGRvIHBhcsOibWV0cm9cclxuICAgICAgICBjb25zdCBnZW9tZXRyeVZhbHVlID0gSlNPTi5zdHJpbmdpZnkoZmVhdHVyZVJlY29yZFNldExheWVyKVxyXG4gICAgICAgIHBhcmFtc1tnZW9tZXRyeVBhcmFtTmFtZV0gPSBnZW9tZXRyeVZhbHVlXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc29sZS5sb2coJ0dlb21ldHJpYSBhZGljaW9uYWRhIGFvIHBhcsOibWV0cm86JywgZ2VvbWV0cnlQYXJhbU5hbWUpXHJcbiAgICAgICAgY29uc29sZS5sb2coJ1RhbWFuaG8gZG8gSlNPTjonLCBnZW9tZXRyeVZhbHVlLmxlbmd0aCwgJ2NhcmFjdGVyZXMnKVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBQcmVwYXJhIGZvcm0gZGF0YVxyXG4gICAgICBsZXQgcmVxdWVzdEJvZHk6IEZvcm1EYXRhIHwgVVJMU2VhcmNoUGFyYW1zXHJcbiAgICAgIGxldCBjb250ZW50VHlwZTogc3RyaW5nXHJcblxyXG4gICAgICAvLyBJTVBPUlRBTlRFOiBQYXJhIEdQRmVhdHVyZVJlY29yZFNldExheWVyLCBzZW1wcmUgdXNhIEZvcm1EYXRhIHBhcmEgZ2FyYW50aXIgcXVlIG8gSlNPTiBzZWphIGVudmlhZG8gY29ycmV0YW1lbnRlXHJcbiAgICAgIC8vIFVSTFNlYXJjaFBhcmFtcyBwb2RlIGNvZGlmaWNhciBvIEpTT04gZGUgZm9ybWEgaW5jb3JyZXRhIHBhcmEgYWxndW5zIHNlcnZpZG9yZXNcclxuICAgICAgY29uc3QgaGFzR2VvbWV0cnkgPSAhIXRoaXMuc3RhdGUuZHJhd25HZW9tZXRyeSB8fCAhIXRoaXMuc3RhdGUuc2hhcGVmaWxlR2VvbWV0cnlcclxuXHJcbiAgICAgIGlmIChoYXNHZW9tZXRyeSkge1xyXG4gICAgICAgIC8vIFVzYSBGb3JtRGF0YSBwYXJhIG11bHRpcGFydC9mb3JtLWRhdGEgKHBlcm1pdGUgZW52aWFyIGdlb21ldHJpYSlcclxuICAgICAgICByZXF1ZXN0Qm9keSA9IG5ldyBGb3JtRGF0YSgpXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gSU1QT1JUQU5URTogQWRpY2lvbmEgb3MgcGFyw6JtZXRyb3MgbmEgb3JkZW0gY29ycmV0YVxyXG4gICAgICAgIC8vIFByaW1laXJvIG9zIHBhcsOibWV0cm9zIHNpbXBsZXMgKElERUEsIHF1YW50aWRhZGUpXHJcbiAgICAgICAgT2JqZWN0LmtleXMocGFyYW1zKS5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICAgICAgICAvLyBBZGljaW9uYSB0b2RvcyBvcyBwYXLDom1ldHJvcywgaW5jbHVpbmRvIGdlb21ldHJpYSBjb21vIHN0cmluZyBKU09OXHJcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IFN0cmluZyhwYXJhbXNba2V5XSlcclxuICAgICAgICAgIHJlcXVlc3RCb2R5LmFwcGVuZChrZXksIHZhbHVlKVxyXG4gICAgICAgICAgaWYgKGtleSA9PT0gZ2VvbWV0cnlQYXJhbU5hbWUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYEdlb21ldHJpYSBhZGljaW9uYWRhIGFvIEZvcm1EYXRhOiAke2tleX0gKCR7dmFsdWUubGVuZ3RofSBjYXJhY3RlcmVzKWApXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgUGFyw6JtZXRybyBhZGljaW9uYWRvIGFvIEZvcm1EYXRhOiAke2tleX0gPSAke3ZhbHVlfWApXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgICAgICAvLyBJTVBPUlRBTlRFOiBUb2tlbiBlIGY9anNvbiBubyBib2R5IGRvIEZvcm1EYXRhIChuw6NvIG5hIFVSTCBwYXJhIFBPU1QpXHJcbiAgICAgICAgLy8gSXNzbyBzZSBhcGxpY2EgdGFudG8gcGFyYSBzaGFwZWZpbGUgcXVhbnRvIHBhcmEgc2tldGNoXHJcbiAgICAgICAgaWYgKHRva2VuKSB7XHJcbiAgICAgICAgICByZXF1ZXN0Qm9keS5hcHBlbmQoJ3Rva2VuJywgdG9rZW4pXHJcbiAgICAgICAgICBjb25zb2xlLmxvZygn4pyTIFRva2VuIGFkaWNpb25hZG8gYW8gRm9ybURhdGEgYm9keSAoTsODTyBuYSBVUkwpJylcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdUb2tlbiBubyBGb3JtRGF0YSAodmVyaWZpY2HDp8Ojbyk6JywgcmVxdWVzdEJvZHkuaGFzKCd0b2tlbicpKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCfimqAgQVRFTsOHw4NPOiBUb2tlbiBuw6NvIGVzdMOhIGRpc3BvbsOtdmVsIHBhcmEgYWRpY2lvbmFyIGFvIEZvcm1EYXRhIScpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEFkaWNpb25hIGY9anNvbiBubyBib2R5IHRhbWLDqW1cclxuICAgICAgICByZXF1ZXN0Qm9keS5hcHBlbmQoJ2YnLCAnanNvbicpXHJcbiAgICAgICAgY29uc29sZS5sb2coJ+KckyBmPWpzb24gYWRpY2lvbmFkbyBhbyBGb3JtRGF0YSBib2R5JylcclxuICAgICAgICBcclxuICAgICAgICAvLyBOw4NPIGRlZmluZSBDb250ZW50LVR5cGUgbWFudWFsbWVudGUgLSBvIGJyb3dzZXIgZGVmaW5lIGF1dG9tYXRpY2FtZW50ZSBjb20gYm91bmRhcnlcclxuICAgICAgICBjb250ZW50VHlwZSA9ICdtdWx0aXBhcnQvZm9ybS1kYXRhJ1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdGb3JtRGF0YSBwcmVwYXJhZG8gY29tJywgT2JqZWN0LmtleXMocGFyYW1zKS5sZW5ndGgsICdwYXLDom1ldHJvcyArIHRva2VuICsgZj1qc29uJylcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBVc2EgVVJMU2VhcmNoUGFyYW1zIHBhcmEgYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkIChzZW0gZ2VvbWV0cmlhIG5lbSBhcnF1aXZvKVxyXG4gICAgICAgIHJlcXVlc3RCb2R5ID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gSU1QT1JUQU5URTogVG9rZW4gZSBmPWpzb24gbm8gYm9keSBkbyBVUkxTZWFyY2hQYXJhbXMgKG7Do28gbmEgVVJMIHBhcmEgUE9TVClcclxuICAgICAgICAvLyBJc3NvIHNlIGFwbGljYSB0YW50byBwYXJhIHNoYXBlZmlsZSBxdWFudG8gcGFyYSBza2V0Y2hcclxuICAgICAgICByZXF1ZXN0Qm9keS5hcHBlbmQoJ2YnLCAnanNvbicpXHJcbiAgICAgICAgY29uc29sZS5sb2coJ+KckyBmPWpzb24gYWRpY2lvbmFkbyBhbyBVUkxTZWFyY2hQYXJhbXMgYm9keScpXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHRva2VuKSB7XHJcbiAgICAgICAgICByZXF1ZXN0Qm9keS5hcHBlbmQoJ3Rva2VuJywgdG9rZW4pXHJcbiAgICAgICAgICBjb25zb2xlLmxvZygn4pyTIFRva2VuIGFkaWNpb25hZG8gYW8gVVJMU2VhcmNoUGFyYW1zIGJvZHkgKE7Dg08gbmEgVVJMKScpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ+KaoCBBVEVOw4fDg086IFRva2VuIG7Do28gZXN0w6EgZGlzcG9uw612ZWwgcGFyYSBhZGljaW9uYXIgYW8gVVJMU2VhcmNoUGFyYW1zIScpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEFkaWNpb25hIG9zIG91dHJvcyBwYXLDom1ldHJvc1xyXG4gICAgICAgIE9iamVjdC5rZXlzKHBhcmFtcykuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICAgICAgcmVxdWVzdEJvZHkuYXBwZW5kKGtleSwgU3RyaW5nKHBhcmFtc1trZXldKSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnRlbnRUeXBlID0gJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcclxuICAgICAgICBjb25zb2xlLmxvZygnVVJMU2VhcmNoUGFyYW1zIHByZXBhcmFkbyBjb20nLCBPYmplY3Qua2V5cyhwYXJhbXMpLmxlbmd0aCwgJ3BhcsOibWV0cm9zICsgdG9rZW4gKyBmPWpzb24nKVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBVUkwgZG8gc3VibWl0Sm9iIChhc3PDrW5jcm9uYSkgLSB1c2FuZG8gYSBVUkwgZm9ybmVjaWRhIHBlbG8gdXN1w6FyaW9cclxuICAgICAgY29uc3QgdGFza05hbWVFbmNvZGVkID0gZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMuR1BfVEFTS19OQU1FKVxyXG4gICAgICBjb25zdCBzdWJtaXRKb2JVcmwgPSBgJHt0aGlzLkdQX1NFUlZJQ0VfVVJMfS8ke3Rhc2tOYW1lRW5jb2RlZH0vc3VibWl0Sm9iYFxyXG5cclxuICAgICAgLy8gSU1QT1JUQU5URTogUGFyYSBQT1NULCBvIHRva2VuIGRldmUgaXIgbm8gQk9EWSwgbsOjbyBuYSBVUkxcclxuICAgICAgLy8gVVJMIGxpbXBhLCBzZW0gcXVlcnkgcGFyYW1ldGVycyAoaW5jbHVpbmRvIHRva2VuKVxyXG4gICAgICBjb25zdCBmaW5hbFVybCA9IHN1Ym1pdEpvYlVybFxyXG4gICAgICBjb25zb2xlLmxvZygnVVJMIGZpbmFsIChsaW1wYSwgc2VtIHF1ZXJ5IHBhcmFtcyBlIHNlbSB0b2tlbik6JywgZmluYWxVcmwpXHJcbiAgICAgIGNvbnNvbGUubG9nKCfinJMgVG9rZW4gc2Vyw6EgZW52aWFkbyBBUEVOQVMgbm8gYm9keSwgbsOjbyBuYSBVUkwnKVxyXG5cclxuICAgICAgY29uc3QgaGVhZGVyczogYW55ID0ge31cclxuICAgICAgLy8gSU1QT1JUQU5URTogUGFyYSBGb3JtRGF0YSwgTlVOQ0EgZGVmaW5lIENvbnRlbnQtVHlwZSBtYW51YWxtZW50ZVxyXG4gICAgICAvLyBPIGJyb3dzZXIgZGVmaW5lIGF1dG9tYXRpY2FtZW50ZSBjb20gYm91bmRhcnkgY29ycmV0b1xyXG4gICAgICAvLyBTZSBkZWZpbmlyIG1hbnVhbG1lbnRlLCBvIGJvdW5kYXJ5IHNlcsOhIGluY29ycmV0byBlIGNhdXNhcsOhIGVycm8gXCJFcnJvciBwYXJzaW5nIG11bHRpLXBhcnQgcmVxdWVzdFwiXHJcbiAgICAgIGlmICghdGhpcy5zdGF0ZS5zaGFwZWZpbGVHZW9tZXRyeSAmJiAhdGhpcy5zdGF0ZS5kcmF3bkdlb21ldHJ5KSB7XHJcbiAgICAgICAgLy8gUGFyYSBVUkxTZWFyY2hQYXJhbXMsIGRlZmluZSBDb250ZW50LVR5cGUgZXhwbGljaXRhbWVudGVcclxuICAgICAgICBoZWFkZXJzWydDb250ZW50LVR5cGUnXSA9ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXHJcbiAgICAgIH1cclxuICAgICAgLy8gUGFyYSBGb3JtRGF0YSwgbsOjbyBkZWZpbmUgQ29udGVudC1UeXBlIC0gbyBicm93c2VyIGZheiBpc3NvIGF1dG9tYXRpY2FtZW50ZVxyXG5cclxuICAgICAgY29uc29sZS5sb2coJ0VudmlhbmRvIHJlcXVpc2nDp8OjbyBwYXJhOicsIGZpbmFsVXJsKVxyXG4gICAgICBjb25zb2xlLmxvZygnUGFyw6JtZXRyb3M6JywgcGFyYW1zKVxyXG4gICAgICBjb25zb2xlLmxvZygnVG9rZW4gbm8gYm9keTonLCAhIXRva2VuKVxyXG4gICAgICBpZiAodGhpcy5zdGF0ZS5zaGFwZWZpbGVHZW9tZXRyeSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdHZW9tZXRyaWEgZG8gc2hhcGVmaWxlIGEgdXNhcicpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFBhcmEgdXBsb2FkIGRlIGFycXVpdm8sIHBvZGUgcHJlY2lzYXIgZGUgY3JlZGVudGlhbHNcclxuICAgICAgY29uc3QgZmV0Y2hPcHRpb25zOiBSZXF1ZXN0SW5pdCA9IHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxyXG4gICAgICAgIGJvZHk6IHJlcXVlc3RCb2R5LFxyXG4gICAgICAgIC8vIE1VREFOw4dBOiBVc2FyICdmb2xsb3cnIGFvIGludsOpcyBkZSAnbWFudWFsJyBwYXJhIHBlcm1pdGlyIHJlZGlyZWN0c1xyXG4gICAgICAgIC8vIFNlIG8gc2Vydmlkb3IgcmVkaXJlY2lvbmFyLCBzZWd1aXJlbW9zIG8gcmVkaXJlY3QgZSB2ZXJlbW9zIGEgcmVzcG9zdGEgZmluYWxcclxuICAgICAgICByZWRpcmVjdDogJ2ZvbGxvdycgYXMgUmVxdWVzdFJlZGlyZWN0LFxyXG4gICAgICAgIC8vIEluY2x1aSBjcmVkZW50aWFscyBwYXJhIHJlcXVpc2nDp8O1ZXMgY3Jvc3Mtb3JpZ2luXHJcbiAgICAgICAgY3JlZGVudGlhbHM6ICdvbWl0JyAvLyBOw6NvIGluY2x1aSBjb29raWVzLCBhcGVuYXMgbyB0b2tlbiBuYSBVUkwvYm9keVxyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgcmVzcG9uc2U6IFJlc3BvbnNlXHJcbiAgICAgIGxldCByZXN1bHQ6IGFueVxyXG5cclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnPT09IElOw41DSU8gREEgUkVRVUlTScOHw4NPID09PScpXHJcbiAgICAgICAgY29uc29sZS5sb2coJ1VSTDonLCBmaW5hbFVybClcclxuICAgICAgICBjb25zb2xlLmxvZygnVG9rZW4gcHJlc2VudGUgbmEgVVJMOicsIGZpbmFsVXJsLmluY2x1ZGVzKCd0b2tlbj0nKSwgJyhkZXZlIHNlciBmYWxzZSknKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdUb2tlbiBubyBib2R5OicsIHJlcXVlc3RCb2R5IGluc3RhbmNlb2YgRm9ybURhdGEgPyByZXF1ZXN0Qm9keS5oYXMoJ3Rva2VuJykgOiAocmVxdWVzdEJvZHkgYXMgVVJMU2VhcmNoUGFyYW1zKS5oYXMoJ3Rva2VuJykpXHJcbiAgICAgICAgY29uc29sZS5sb2coJ03DqXRvZG86JywgZmV0Y2hPcHRpb25zLm1ldGhvZClcclxuICAgICAgICBjb25zb2xlLmxvZygnSGVhZGVyczonLCBoZWFkZXJzKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdCb2R5IHR5cGU6JywgcmVxdWVzdEJvZHkgaW5zdGFuY2VvZiBGb3JtRGF0YSA/ICdGb3JtRGF0YScgOiAnVVJMU2VhcmNoUGFyYW1zJylcclxuICAgICAgICBcclxuICAgICAgICByZXNwb25zZSA9IGF3YWl0IGZldGNoKGZpbmFsVXJsLCBmZXRjaE9wdGlvbnMpXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc29sZS5sb2coJz09PSBSRVNQT1NUQSBSRUNFQklEQSA9PT0nKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdTdGF0dXM6JywgcmVzcG9uc2Uuc3RhdHVzKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdTdGF0dXMgVGV4dDonLCByZXNwb25zZS5zdGF0dXNUZXh0KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdVUkwgZmluYWw6JywgcmVzcG9uc2UudXJsKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdSZWRpcmVjdGVkOicsIHJlc3BvbnNlLnJlZGlyZWN0ZWQpXHJcbiAgICAgICAgY29uc29sZS5sb2coJ1R5cGU6JywgcmVzcG9uc2UudHlwZSlcclxuICAgICAgICBcclxuICAgICAgICAvLyBWZXJpZmljYSBzZSBhIHJlc3Bvc3RhIGZvaSB1bSByZWRpcmVjdCBwYXJhIGxvZ2luXHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLnJlZGlyZWN0ZWQgJiYgcmVzcG9uc2UudXJsLmluY2x1ZGVzKCcvbG9naW4nKSkge1xyXG4gICAgICAgICAgY29uc3QgZXJyb3JNc2cgPSAnTyBzZXJ2aWRvciByZWRpcmVjaW9ub3UgcGFyYSBhIHDDoWdpbmEgZGUgbG9naW4uIE8gdG9rZW4gcG9kZSBlc3RhciBleHBpcmFkbyBvdSBpbnbDoWxpZG8uXFxuXFxuJyArXHJcbiAgICAgICAgICAgICdWZXJpZmlxdWUgc2UgbyB0b2tlbiBmb3JuZWNpZG8gYWluZGEgw6kgdsOhbGlkbyBlIHRlbSBwZXJtaXNzw6NvIHBhcmEgYWNlc3NhciBlc3RlIHNlcnZpw6dvLidcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JNc2cpXHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdVUkwgZGUgcmVkaXJlY2lvbmFtZW50bzonLCByZXNwb25zZS51cmwpXHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JNc2cpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFZlcmlmaWNhIHN0YXR1cyBIVFRQIGRlIGVycm9cclxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID49IDMwMCAmJiByZXNwb25zZS5zdGF0dXMgPCA0MDApIHtcclxuICAgICAgICAgIGNvbnN0IGxvY2F0aW9uID0gcmVzcG9uc2UuaGVhZGVycy5nZXQoJ0xvY2F0aW9uJylcclxuICAgICAgICAgIGNvbnNvbGUud2FybignU3RhdHVzIGRlIHJlZGlyZWNpb25hbWVudG86JywgcmVzcG9uc2Uuc3RhdHVzKVxyXG4gICAgICAgICAgY29uc29sZS53YXJuKCdMb2NhdGlvbiBoZWFkZXI6JywgbG9jYXRpb24pXHJcbiAgICAgICAgICBpZiAobG9jYXRpb24gJiYgKGxvY2F0aW9uLmluY2x1ZGVzKCcvbG9naW4nKSB8fCBsb2NhdGlvbi5pbmNsdWRlcygnbG9naW4nKSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdPIHNlcnZpZG9yIHJlZGlyZWNpb25vdSBwYXJhIGEgcMOhZ2luYSBkZSBsb2dpbi4gTyB0b2tlbiBuw6NvIGVzdMOhIHNlbmRvIGFjZWl0by5cXG5cXG4nICtcclxuICAgICAgICAgICAgICAnUG9zc8OtdmVpcyBjYXVzYXM6XFxuJyArXHJcbiAgICAgICAgICAgICAgJzEuIFRva2VuIGV4cGlyYWRvIG91IGludsOhbGlkb1xcbicgK1xyXG4gICAgICAgICAgICAgICcyLiBUb2tlbiBuw6NvIHRlbSBwZXJtaXNzw6NvIHBhcmEgZXN0ZSBzZXJ2acOnb1xcbicgK1xyXG4gICAgICAgICAgICAgICczLiBTZXJ2aWRvciByZXF1ZXIgYXV0ZW50aWNhw6fDo28gYWRpY2lvbmFsXFxuXFxuJyArXHJcbiAgICAgICAgICAgICAgJ1BvciBmYXZvciwgdmVyaWZpcXVlIG8gdG9rZW4gZm9ybmVjaWRvLicpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBUZW50YSBsZXIgY29tbyBKU09OXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG4gICAgICB9IGNhdGNoIChqc29uRXJyb3IpIHtcclxuICAgICAgICAgIC8vIFNlIG7Do28gZm9yIEpTT04sIGzDqiBjb21vIHRleHRvXHJcbiAgICAgICAgICBjb25zdCB0ZXh0UmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpXHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdSZXNwb3N0YSBuw6NvIMOpIEpTT046JywgdGV4dFJlc3VsdClcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLy8gVmVyaWZpY2Egc2Ugw6kgdW0gZXJybyBkZSBDT1JTIG91IGF1dGVudGljYcOnw6NvXHJcbiAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAwIHx8IHJlc3BvbnNlLnR5cGUgPT09ICdvcGFxdWUnKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRXJybyBkZSBDT1JTOiBOw6NvIGZvaSBwb3Nzw612ZWwgYWNlc3NhciBvIHNlcnZpZG9yLiBWZXJpZmlxdWUgc2Ugdm9jw6ogZXN0w6EgYXV0ZW50aWNhZG8gZSBzZSBvIHNlcnZpZG9yIHBlcm1pdGUgcmVxdWlzacOnw7VlcyBkbyBzZXUgZG9tw61uaW8uJylcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMzAyIHx8IHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxIHx8IHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAzKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRXJybyBkZSBhdXRlbnRpY2HDp8OjbzogTyBzZXJ2aWRvciByZXF1ZXIgYXV0ZW50aWNhw6fDo28uIFZlcmlmaXF1ZSBzZSB2b2PDqiBlc3TDoSBsb2dhZG8gZSBzZSBvIHRva2VuIMOpIHbDoWxpZG8uJylcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvIEhUVFAgJHtyZXNwb25zZS5zdGF0dXN9OiAke3RleHRSZXN1bHQuc3Vic3RyaW5nKDAsIDIwMCl9YClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LmVycm9yKSB7XHJcbiAgICAgICAgICAgIC8vIFRyYXRhIGVycm8gZGUgdG9rZW4gaW52w6FsaWRvIGVzcGVjaWZpY2FtZW50ZVxyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmVycm9yLmNvZGUgPT09IDQ5OCB8fCByZXN1bHQuZXJyb3IuY29kZSA9PT0gNDAxIHx8IHJlc3VsdC5lcnJvci5tZXNzYWdlPy5pbmNsdWRlcygnSW52YWxpZCBUb2tlbicpKSB7XHJcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUb2tlbiBpbnbDoWxpZG8gb3UgZXhwaXJhZG8gKGPDs2RpZ28gNDk4KS4gUG9yIGZhdm9yLCBmYcOnYSBsb2dpbiBub3ZhbWVudGUgbm8gc2Vydmlkb3IgQXJjR0lTIGUgdGVudGUgbm92YW1lbnRlLicpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvIG5hIEdQOiAke3Jlc3VsdC5lcnJvci5tZXNzYWdlIHx8IEpTT04uc3RyaW5naWZ5KHJlc3VsdC5lcnJvcil9YClcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJybyBIVFRQOiAke3Jlc3BvbnNlLnN0YXR1c30gJHtyZXNwb25zZS5zdGF0dXNUZXh0fWApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFZlcmlmaWNhIHNlIGjDoSBlcnJvIG1lc21vIGNvbSBzdGF0dXMgT0sgKGFsZ3VucyBzZXJ2aWRvcmVzIHJldG9ybmFtIDIwMCBjb20gZXJybylcclxuICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5lcnJvcikge1xyXG4gICAgICAgICAgaWYgKHJlc3VsdC5lcnJvci5jb2RlID09PSA0OTggfHwgcmVzdWx0LmVycm9yLmNvZGUgPT09IDQwMSB8fCByZXN1bHQuZXJyb3IubWVzc2FnZT8uaW5jbHVkZXMoJ0ludmFsaWQgVG9rZW4nKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Rva2VuIGludsOhbGlkbyBvdSBleHBpcmFkbyAoY8OzZGlnbyA0OTgpLiBQb3IgZmF2b3IsIGZhw6dhIGxvZ2luIG5vdmFtZW50ZSBubyBzZXJ2aWRvciBBcmNHSVMgZSB0ZW50ZSBub3ZhbWVudGUuJylcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJybyBuYSBHUDogJHtyZXN1bHQuZXJyb3IubWVzc2FnZSB8fCBKU09OLnN0cmluZ2lmeShyZXN1bHQuZXJyb3IpfWApXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChmZXRjaEVycm9yKSB7XHJcbiAgICAgICAgLy8gVHJhdGEgZXJyb3MgZGUgcmVkZS9DT1JTXHJcbiAgICAgICAgaWYgKGZldGNoRXJyb3IubmFtZSA9PT0gJ1R5cGVFcnJvcicgJiYgZmV0Y2hFcnJvci5tZXNzYWdlLmluY2x1ZGVzKCdGYWlsZWQgdG8gZmV0Y2gnKSkge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJybyBkZSByZWRlL0NPUlM6JywgZmV0Y2hFcnJvcilcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRXJybyBkZSBjb25leMOjbzogTsOjbyBmb2kgcG9zc8OtdmVsIGNvbmVjdGFyIGFvIHNlcnZpZG9yLiBJc3NvIHBvZGUgc2VyIGNhdXNhZG8gcG9yOlxcbicgK1xyXG4gICAgICAgICAgICAnMS4gUHJvYmxlbWEgZGUgQ09SUyAoQ3Jvc3MtT3JpZ2luIFJlc291cmNlIFNoYXJpbmcpXFxuJyArXHJcbiAgICAgICAgICAgICcyLiBTZXJ2aWRvciByZXF1ZXIgYXV0ZW50aWNhw6fDo28gYWRpY2lvbmFsXFxuJyArXHJcbiAgICAgICAgICAgICczLiBUb2tlbiBkZSBhdXRlbnRpY2HDp8OjbyBleHBpcmFkbyBvdSBpbnbDoWxpZG9cXG4nICtcclxuICAgICAgICAgICAgJzQuIFNlcnZpZG9yIHRlbXBvcmFyaWFtZW50ZSBpbmRpc3BvbsOtdmVsXFxuXFxuJyArXHJcbiAgICAgICAgICAgICdWZXJpZmlxdWUgbyBjb25zb2xlIGRvIG5hdmVnYWRvciAoRjEyKSBwYXJhIG1haXMgZGV0YWxoZXMuJylcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhyb3cgZmV0Y2hFcnJvclxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBWZXJpZmljYSBzZSByZWNlYmV1IGpvYklkXHJcbiAgICAgIGlmICghcmVzdWx0LmpvYklkKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOw6NvIGZvaSBwb3Nzw612ZWwgb2J0ZXIgam9iSWQgZGEgcmVzcG9zdGEnKVxyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBqb2JJZCA9IHJlc3VsdC5qb2JJZFxyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgam9iSWQsIHByb2dyZXNzOiA1IH0pIC8vIEpvYiBzdWJtZXRpZG8gLSA1JVxyXG5cclxuICAgICAgY29uc29sZS5sb2coJ0pvYiBJRCByZWNlYmlkbzonLCBqb2JJZClcclxuICAgICAgICBcclxuICAgICAgICAvLyBQb2xsaW5nIGRvIHN0YXR1cyBkbyBqb2JcclxuICAgICAgICBsZXQgYXR0ZW1wdHMgPSAwXHJcbiAgICAgIGNvbnN0IG1heEF0dGVtcHRzID0gMTIwIC8vIDIgbWludXRvc1xyXG4gICAgICAgIFxyXG4gICAgICAgIHdoaWxlIChhdHRlbXB0cyA8IG1heEF0dGVtcHRzKSB7XHJcbiAgICAgICAgYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDIwMDApKSAvLyBWZXJpZmljYSBhIGNhZGEgMiBzZWd1bmRvc1xyXG4gICAgICAgIGF0dGVtcHRzKytcclxuICAgICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGJhc2VVcmwgPSBzdWJtaXRKb2JVcmwucmVwbGFjZSgnL3N1Ym1pdEpvYicsICcnKVxyXG4gICAgICAgICAgY29uc3Qgc3RhdHVzVXJsID0gdG9rZW4gXHJcbiAgICAgICAgICAgID8gYCR7YmFzZVVybH0vam9icy8ke2pvYklkfT90b2tlbj0ke3Rva2VufSZmPWpzb25gXHJcbiAgICAgICAgICAgIDogYCR7YmFzZVVybH0vam9icy8ke2pvYklkfT9mPWpzb25gXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGNvbnN0IHN0YXR1c1Jlc3BvbnNlID0gYXdhaXQgZmV0Y2goc3RhdHVzVXJsKVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBpZiAoIXN0YXR1c1Jlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJybyBhbyB2ZXJpZmljYXIgc3RhdHVzIGRvIGpvYjogJHtzdGF0dXNSZXNwb25zZS5zdGF0dXN9YClcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGpvYlN0YXR1cyA9IGF3YWl0IHN0YXR1c1Jlc3BvbnNlLmpzb24oKVxyXG4gICAgICAgICAgY29uc29sZS5sb2coYFN0YXR1cyBkbyBqb2IgKHRlbnRhdGl2YSAke2F0dGVtcHRzfSk6YCwgam9iU3RhdHVzLmpvYlN0YXR1cylcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLy8gQ2FsY3VsYSBwcm9ncmVzc28gYmFzZWFkbyBuYXMgdGVudGF0aXZhcyAoNSUgYSA5NSUgZHVyYW50ZSBwb2xsaW5nKVxyXG4gICAgICAgICAgLy8gTyBwcm9ncmVzc28gYXVtZW50YSBncmFkdWFsbWVudGUgY29uZm9ybWUgYXMgdGVudGF0aXZhc1xyXG4gICAgICAgICAgY29uc3QgcHJvZ3Jlc3NQZXJjZW50ID0gTWF0aC5taW4oOTUsIDUgKyBNYXRoLmZsb29yKChhdHRlbXB0cyAvIG1heEF0dGVtcHRzKSAqIDkwKSlcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcm9ncmVzczogcHJvZ3Jlc3NQZXJjZW50IH0pXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGlmIChqb2JTdGF0dXMuam9iU3RhdHVzID09PSAnZXNyaUpvYlN1Y2NlZWRlZCcpIHtcclxuICAgICAgICAgICAgLy8gSm9iIGNvbXBsZXRhZG8gLSBzZW1wcmUgdmFpIHBhcmEgMTAwJSBxdWFuZG8gY29tcGxldGFcclxuICAgICAgICAgICAgLy8gTsOjbyBpbXBvcnRhIHF1YW50YXMgdGVudGF0aXZhcyBmb3JhbSBuZWNlc3PDoXJpYXNcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYEpvYiBjb21wbGV0YWRvIGFww7NzICR7YXR0ZW1wdHN9IHRlbnRhdGl2YXMuIEF0dWFsaXphbmRvIHBhcmEgMTAwJWApXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBBbmltYSBvIHByb2dyZXNzbyBhdMOpIDEwMCUgKGluY3JlbWVudGEgZ3JhZHVhbG1lbnRlIHNlIG5lY2Vzc8OhcmlvKVxyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50UHJvZ3Jlc3MgPSB0aGlzLnN0YXRlLnByb2dyZXNzXHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50UHJvZ3Jlc3MgPCAxMDApIHtcclxuICAgICAgICAgICAgICAvLyBJbmNyZW1lbnRhIGdyYWR1YWxtZW50ZSBhdMOpIDEwMCVcclxuICAgICAgICAgICAgICBjb25zdCBzdGVwcyA9IE1hdGguY2VpbCgoMTAwIC0gY3VycmVudFByb2dyZXNzKSAvIDUpIC8vIDUlIHBvciBzdGVwXHJcbiAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gc3RlcHM7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3UHJvZ3Jlc3MgPSBNYXRoLm1pbigxMDAsIGN1cnJlbnRQcm9ncmVzcyArIChpICogNSkpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcHJvZ3Jlc3M6IG5ld1Byb2dyZXNzIH0pXHJcbiAgICAgICAgICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgNTApKSAvLyA1MG1zIHBvciBzdGVwXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcm9ncmVzczogMTAwIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gT2J0w6ltIG9zIHJlc3VsdGFkb3NcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0VXJsID0gdG9rZW5cclxuICAgICAgICAgICAgICA/IGAke2Jhc2VVcmx9L2pvYnMvJHtqb2JJZH0vcmVzdWx0cz90b2tlbj0ke3Rva2VufSZmPWpzb25gXHJcbiAgICAgICAgICAgICAgOiBgJHtiYXNlVXJsfS9qb2JzLyR7am9iSWR9L3Jlc3VsdHM/Zj1qc29uYFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0UmVzcG9uc2UgPSBhd2FpdCBmZXRjaChyZXN1bHRVcmwpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoIXJlc3VsdFJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvIGFvIG9idGVyIHJlc3VsdGFkb3M6ICR7cmVzdWx0UmVzcG9uc2Uuc3RhdHVzfWApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGF3YWl0IHJlc3VsdFJlc3BvbnNlLmpzb24oKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUmVzdWx0YWRvIGRhIGV4ZWN1w6fDo28gYXNzw61uY3JvbmE6JywgcmVzdWx0KVxyXG4gICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChqb2JTdGF0dXMuam9iU3RhdHVzID09PSAnZXNyaUpvYkZhaWxlZCcpIHtcclxuICAgICAgICAgICAgLy8gRXh0cmFpIG1lbnNhZ2VucyBkZSBlcnJvIG1haXMgZGV0YWxoYWRhc1xyXG4gICAgICAgICAgICBsZXQgZXJyb3JNZXNzYWdlID0gJ0pvYiBmYWxob3UnXHJcbiAgICAgICAgICAgIGlmIChqb2JTdGF0dXMubWVzc2FnZXMgJiYgQXJyYXkuaXNBcnJheShqb2JTdGF0dXMubWVzc2FnZXMpKSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlcyA9IGpvYlN0YXR1cy5tZXNzYWdlc1xyXG4gICAgICAgICAgICAgICAgLmZpbHRlcigobXNnOiBhbnkpID0+IG1zZy50eXBlID09PSAnZXNyaUpvYk1lc3NhZ2VUeXBlRXJyb3InKVxyXG4gICAgICAgICAgICAgICAgLm1hcCgobXNnOiBhbnkpID0+IG1zZy5kZXNjcmlwdGlvbilcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICBpZiAoZXJyb3JNZXNzYWdlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UgPSBlcnJvck1lc3NhZ2VzLmpvaW4oJ1xcbicpXHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZSA9IEpTT04uc3RyaW5naWZ5KGpvYlN0YXR1cy5tZXNzYWdlcylcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoam9iU3RhdHVzLm1lc3NhZ2VzKSB7XHJcbiAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlID0gSlNPTi5zdHJpbmdpZnkoam9iU3RhdHVzLm1lc3NhZ2VzKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvIGRldGFsaGFkbyBkbyBqb2I6Jywgam9iU3RhdHVzLm1lc3NhZ2VzKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gTWVuc2FnZW0gbWFpcyBhbWlnw6F2ZWwgcGFyYSBvIHVzdcOhcmlvXHJcbiAgICAgICAgICAgIGlmIChlcnJvck1lc3NhZ2UuaW5jbHVkZXMoJ27Do28gcG9zc3VpIGdlb21ldHJpYXMgdsOhbGlkYXMnKSkge1xyXG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTyBhcnF1aXZvIFpJUCBuw6NvIGNvbnTDqW0gZ2VvbWV0cmlhcyB2w6FsaWRhcy5cXG5cXG4nICtcclxuICAgICAgICAgICAgICAgICdQb3IgZmF2b3IsIHZlcmlmaXF1ZSBzZTpcXG4nICtcclxuICAgICAgICAgICAgICAgICcxLiBPIGFycXVpdm8gWklQIGNvbnTDqW0gdW0gc2hhcGVmaWxlIGNvbXBsZXRvICguc2hwLCAuc2h4LCAuZGJmLCAucHJqKVxcbicgK1xyXG4gICAgICAgICAgICAgICAgJzIuIE8gc2hhcGVmaWxlIHBvc3N1aSBnZW9tZXRyaWFzIHbDoWxpZGFzIChwb2zDrWdvbm9zKVxcbicgK1xyXG4gICAgICAgICAgICAgICAgJzMuIE8gYXJxdWl2byBuw6NvIGVzdMOhIGNvcnJvbXBpZG9cXG5cXG4nICtcclxuICAgICAgICAgICAgICAgICdEZXRhbGhlcyB0w6ljbmljb3M6ICcgKyBlcnJvck1lc3NhZ2UpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBKb2IgZmFsaG91OiAke2Vycm9yTWVzc2FnZX1gKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGpvYlN0YXR1cy5qb2JTdGF0dXMgPT09ICdlc3JpSm9iQ2FuY2VsbGVkJykge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0pvYiBmb2kgY2FuY2VsYWRvJylcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgYXR0ZW1wdHMrK1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZiAoYXR0ZW1wdHMgPj0gbWF4QXR0ZW1wdHMpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RpbWVvdXQ6IE8gam9iIGRlbW9yb3UgbWFpcyBkZSAyIG1pbnV0b3MgcGFyYSBjb21wbGV0YXInKVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBQcm9jZXNzYSBvIHJlc3VsdGFkb1xyXG4gICAgICBsZXQgaHRtbFVybDogc3RyaW5nIHwgbnVsbCA9IG51bGxcclxuICAgICAgbGV0IHN1bW1hcnlUZXh0OiBzdHJpbmcgfCBudWxsID0gbnVsbFxyXG5cclxuICAgICAgY29uc29sZS5sb2coJz09PSBQUk9DVVJBTkRPIEhUTUwgTk9TIFJFU1VMVEFET1MgPT09JylcclxuICAgICAgY29uc29sZS5sb2coJ0VzdHJ1dHVyYSBjb21wbGV0YSBkbyByZXN1bHRhZG86JywgSlNPTi5zdHJpbmdpZnkocmVzdWx0LCBudWxsLCAyKSlcclxuICAgICAgY29uc29sZS5sb2coJ1RpcG8gZG8gcmVzdWx0YWRvOicsIEFycmF5LmlzQXJyYXkocmVzdWx0KSA/ICdBcnJheScgOiB0eXBlb2YgcmVzdWx0KVxyXG5cclxuICAgICAgLy8gSU1QT1JUQU5URTogTyByZXN1bHRhZG8gcG9kZSB2aXIgY29tbyBhcnJheSBkaXJldGFtZW50ZSBvdSBjb21vIG9iamV0byBjb20gcmVzdWx0c1xyXG4gICAgICBsZXQgcmVzdWx0c1RvQ2hlY2s6IGFueVtdID0gW11cclxuICAgICAgXHJcbiAgICAgIC8vIFNlIHJlc3VsdCDDqSB1bSBhcnJheSBkaXJldGFtZW50ZVxyXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShyZXN1bHQpKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1Jlc3VsdGFkbyDDqSB1bSBhcnJheSwgaXRlcmFuZG8gZGlyZXRhbWVudGUuLi4nKVxyXG4gICAgICAgIHJlc3VsdHNUb0NoZWNrID0gcmVzdWx0XHJcbiAgICAgIH1cclxuICAgICAgLy8gU2UgcmVzdWx0IHRlbSB1bWEgcHJvcHJpZWRhZGUgcmVzdWx0cyBxdWUgw6kgYXJyYXlcclxuICAgICAgZWxzZSBpZiAocmVzdWx0LnJlc3VsdHMgJiYgQXJyYXkuaXNBcnJheShyZXN1bHQucmVzdWx0cykpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnUmVzdWx0YWRvIHRlbSByZXN1bHRzIGNvbW8gYXJyYXknKVxyXG4gICAgICAgIHJlc3VsdHNUb0NoZWNrID0gcmVzdWx0LnJlc3VsdHNcclxuICAgICAgfVxyXG4gICAgICAvLyBTZSByZXN1bHQucmVzdWx0cyDDqSB1bSBvYmpldG8gKGZvcm1hdG8gYW50aWdvKVxyXG4gICAgICBlbHNlIGlmIChyZXN1bHQucmVzdWx0cyAmJiB0eXBlb2YgcmVzdWx0LnJlc3VsdHMgPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KHJlc3VsdC5yZXN1bHRzKSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdSZXN1bHRhZG8gdGVtIHJlc3VsdHMgY29tbyBvYmpldG8sIGNvbnZlcnRlbmRvIHBhcmEgYXJyYXkuLi4nKVxyXG4gICAgICAgIC8vIENvbnZlcnRlIG9iamV0byBwYXJhIGFycmF5IGRlIHZhbG9yZXNcclxuICAgICAgICByZXN1bHRzVG9DaGVjayA9IE9iamVjdC52YWx1ZXMocmVzdWx0LnJlc3VsdHMpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIEl0ZXJhIHNvYnJlIG9zIHJlc3VsdGFkb3NcclxuICAgICAgaWYgKHJlc3VsdHNUb0NoZWNrLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgVmVyaWZpY2FuZG8gJHtyZXN1bHRzVG9DaGVjay5sZW5ndGh9IHJlc3VsdGFkbyhzKS4uLmApXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHRzVG9DaGVjay5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgY29uc3QgcmVzdWx0SXRlbSA9IHJlc3VsdHNUb0NoZWNrW2ldXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhgLS0tIFZlcmlmaWNhbmRvIHJlc3VsdGFkbyAke2kgKyAxfSAtLS1gKVxyXG4gICAgICAgICAgY29uc29sZS5sb2coJ1Jlc3VsdEl0ZW0gY29tcGxldG86JywgSlNPTi5zdHJpbmdpZnkocmVzdWx0SXRlbSwgbnVsbCwgMikpXHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnVGlwbyBkbyByZXN1bHRJdGVtOicsIHR5cGVvZiByZXN1bHRJdGVtKVxyXG4gICAgICAgICAgY29uc29sZS5sb2coJ1RlbSB2YWx1ZT8nLCAhIXJlc3VsdEl0ZW0udmFsdWUpXHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnVGVtIHVybD8nLCAhIXJlc3VsdEl0ZW0udXJsKVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBpZiAocmVzdWx0SXRlbSkge1xyXG4gICAgICAgICAgICAvLyBWZXJpZmljYSBzZSB0ZW0gdmFsdWUgZGlyZXRhbWVudGVcclxuICAgICAgICAgICAgaWYgKHJlc3VsdEl0ZW0udmFsdWUpIHtcclxuICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHJlc3VsdEl0ZW0udmFsdWVcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVmFsdWUgZW5jb250cmFkbzonLCB0eXBlb2YgdmFsdWUsIHZhbHVlKVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIC8vIFNlIHZhbHVlIMOpIHVtYSBzdHJpbmcgY29tIC5odG1sXHJcbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUuaW5jbHVkZXMoJy5odG1sJykpIHtcclxuICAgICAgICAgICAgICAgIGh0bWxVcmwgPSB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYOKck+Kck+KckyBIVE1MIGVuY29udHJhZG8gZW0gcmVzdWx0YWRvWyR7aX1dLnZhbHVlIChzdHJpbmcpOmAsIGh0bWxVcmwpXHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAvLyBTZSB2YWx1ZSDDqSB1bSBvYmpldG8gY29tIHVybFxyXG4gICAgICAgICAgICAgIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVmFsdWUgw6kgdW0gb2JqZXRvLCB2ZXJpZmljYW5kbyBwcm9wcmllZGFkZXM6JywgT2JqZWN0LmtleXModmFsdWUpKVxyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLnVybCkge1xyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVmFsdWUudXJsIGVuY29udHJhZG86JywgdHlwZW9mIHZhbHVlLnVybCwgdmFsdWUudXJsKVxyXG4gICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlLnVybCA9PT0gJ3N0cmluZycgJiYgdmFsdWUudXJsLmluY2x1ZGVzKCcuaHRtbCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaHRtbFVybCA9IHZhbHVlLnVybFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGDinJPinJPinJMgSFRNTCBlbmNvbnRyYWRvIGVtIHJlc3VsdGFkb1ske2l9XS52YWx1ZS51cmw6YCwgaHRtbFVybClcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBWZXJpZmljYSBzZSB0ZW0gdXJsIGRpcmV0YW1lbnRlIG5vIHJlc3VsdEl0ZW1cclxuICAgICAgICAgICAgaWYgKHJlc3VsdEl0ZW0udXJsICYmIHR5cGVvZiByZXN1bHRJdGVtLnVybCA9PT0gJ3N0cmluZycgJiYgcmVzdWx0SXRlbS51cmwuaW5jbHVkZXMoJy5odG1sJykpIHtcclxuICAgICAgICAgICAgICBodG1sVXJsID0gcmVzdWx0SXRlbS51cmxcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhg4pyT4pyT4pyTIEhUTUwgZW5jb250cmFkbyBlbSByZXN1bHRhZG9bJHtpfV0udXJsOmAsIGh0bWxVcmwpXHJcbiAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gVmVyaWZpY2Egc2UgbyBwcsOzcHJpbyByZXN1bHRJdGVtIMOpIHVtYSBzdHJpbmcgY29tIC5odG1sXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcmVzdWx0SXRlbSA9PT0gJ3N0cmluZycgJiYgcmVzdWx0SXRlbS5pbmNsdWRlcygnLmh0bWwnKSkge1xyXG4gICAgICAgICAgICAgIGh0bWxVcmwgPSByZXN1bHRJdGVtXHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coYOKck+Kck+KckyBIVE1MIGVuY29udHJhZG8gZW0gcmVzdWx0YWRvWyR7aX1dIChzdHJpbmcgZGlyZXRhKTpgLCBodG1sVXJsKVxyXG4gICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKCfimqDvuI8gTmVuaHVtIHJlc3VsdGFkbyBwYXJhIHZlcmlmaWNhciEnKVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBGYWxsYmFjazogcHJvY3VyYSBlbSBvdXRyYXMgcHJvcHJpZWRhZGVzIGRvIHJlc3VsdGFkb1xyXG4gICAgICBpZiAoIWh0bWxVcmwpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnSFRNTCBuw6NvIGVuY29udHJhZG8gbm9zIHJlc3VsdHMsIHRlbnRhbmRvIGZhbGxiYWNrcy4uLicpXHJcbiAgICAgICAgaWYgKHJlc3VsdC5vdXRwdXRVcmwpIHtcclxuICAgICAgICAgIGh0bWxVcmwgPSByZXN1bHQub3V0cHV0VXJsXHJcbiAgICAgICAgICBjb25zb2xlLmxvZygn4pyTIEhUTUwgZW5jb250cmFkbyBlbSBvdXRwdXRVcmw6JywgaHRtbFVybClcclxuICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC51cmwpIHtcclxuICAgICAgICAgIGh0bWxVcmwgPSByZXN1bHQudXJsXHJcbiAgICAgICAgICBjb25zb2xlLmxvZygn4pyTIEhUTUwgZW5jb250cmFkbyBlbSB1cmw6JywgaHRtbFVybClcclxuICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5maWxlVXJsKSB7XHJcbiAgICAgICAgICBodG1sVXJsID0gcmVzdWx0LmZpbGVVcmxcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCfinJMgSFRNTCBlbmNvbnRyYWRvIGVtIGZpbGVVcmw6JywgaHRtbFVybClcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChodG1sVXJsKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ+KchSBVUkwgZG8gSFRNTCBlbmNvbnRyYWRhOicsIGh0bWxVcmwpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcign4p2MIEhUTUwgbsOjbyBlbmNvbnRyYWRvIG5vcyByZXN1bHRhZG9zIScpXHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXN0cnV0dXJhIGNvbXBsZXRhIGRvIHJlc3VsdGFkbyBwYXJhIGRlYnVnOicsIEpTT04uc3RyaW5naWZ5KHJlc3VsdCwgbnVsbCwgMikpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFRlbnRhIGV4dHJhaXIgbyByZXN1bW8gZG8gcmVsYXTDs3JpbyBIVE1MXHJcbiAgICAgIGlmIChodG1sVXJsKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIC8vIEFkaWNpb25hIHRva2VuIMOgIFVSTCBkbyBIVE1MIHNlIG5lY2Vzc8OhcmlvXHJcbiAgICAgICAgICBsZXQgaHRtbFVybFdpdGhUb2tlbiA9IGh0bWxVcmxcclxuICAgICAgICAgIGlmICh0b2tlbiAmJiAhaHRtbFVybC5pbmNsdWRlcygndG9rZW49JykpIHtcclxuICAgICAgICAgICAgY29uc3Qgc2VwYXJhdG9yID0gaHRtbFVybC5pbmNsdWRlcygnPycpID8gJyYnIDogJz8nXHJcbiAgICAgICAgICAgIGh0bWxVcmxXaXRoVG9rZW4gPSBgJHtodG1sVXJsfSR7c2VwYXJhdG9yfXRva2VuPSR7dG9rZW59YFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnVG9rZW4gYWRpY2lvbmFkbyDDoCBVUkwgZG8gSFRNTCcpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdBY2Vzc2FuZG8gSFRNTCBlbTonLCBodG1sVXJsV2l0aFRva2VuKVxyXG4gICAgICAgICAgY29uc3QgaHRtbFJlc3BvbnNlID0gYXdhaXQgZmV0Y2goaHRtbFVybFdpdGhUb2tlbilcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgaWYgKCFodG1sUmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJybyBhbyBhY2Vzc2FyIEhUTUw6JywgaHRtbFJlc3BvbnNlLnN0YXR1cywgaHRtbFJlc3BvbnNlLnN0YXR1c1RleHQpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJybyBhbyBhY2Vzc2FyIEhUTUw6ICR7aHRtbFJlc3BvbnNlLnN0YXR1c31gKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBjb25zdCBodG1sVGV4dCA9IGF3YWl0IGh0bWxSZXNwb25zZS50ZXh0KClcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdIVE1MIHJlY2ViaWRvLCB0YW1hbmhvOicsIGh0bWxUZXh0Lmxlbmd0aCwgJ2NhcmFjdGVyZXMnKVxyXG4gICAgICAgICAgY29uc29sZS5sb2coJ1ByaW1laXJvcyA1MDAgY2FyYWN0ZXJlcyBkbyBIVE1MOicsIGh0bWxUZXh0LnN1YnN0cmluZygwLCA1MDApKVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAvLyBSZW1vdmUgdGFncyBIVE1MIGUgbm9ybWFsaXphIGVzcGHDp29zXHJcbiAgICAgICAgICBjb25zdCB0ZXh0Q29udGVudCA9IGh0bWxUZXh0LnJlcGxhY2UoLzxbXj5dKj4vZywgJyAnKS5yZXBsYWNlKC9cXHMrL2csICcgJykudG9Mb3dlckNhc2UoKVxyXG4gICAgICAgICAgY29uc29sZS5sb2coJ1RleHRvIGV4dHJhw61kbyAocHJpbWVpcm9zIDIwMCBjYXJhY3RlcmVzKTonLCB0ZXh0Q29udGVudC5zdWJzdHJpbmcoMCwgMjAwKSlcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLy8gUHJvY3VyYSBwb3IgcGFkcsO1ZXMgcXVlIGluZGljYW0gc2UgYSDDoXJlYSDDqSBzdWZpY2llbnRlIG91IG7Do29cclxuICAgICAgICAgIGNvbnN0IHBhdHRlcm5zID0gW1xyXG4gICAgICAgICAgICAvw6FyZWFcXHMrKD86w6l8ZXN0w6EpXFxzK2luc3VmaWNpZW50ZS9pLFxyXG4gICAgICAgICAgICAvw6FyZWFcXHMraW5zdWZpY2llbnRlL2ksXHJcbiAgICAgICAgICAgIC9pbnN1ZmljaWVudGUuKj/DoXJlYS9pLFxyXG4gICAgICAgICAgICAvw6FyZWFcXHMrKD86w6l8ZXN0w6EpXFxzK3N1ZmljaWVudGUvaSxcclxuICAgICAgICAgICAgL8OhcmVhXFxzK3N1ZmljaWVudGUvaSxcclxuICAgICAgICAgICAgL3N1ZmljaWVudGUuKj/DoXJlYS9pLFxyXG4gICAgICAgICAgICAvY29tcGVuc2HDp8Ojby4qP2luc3VmaWNpZW50ZS9pLFxyXG4gICAgICAgICAgICAvY29tcGVuc2HDp8Ojby4qP3N1ZmljaWVudGUvaSxcclxuICAgICAgICAgICAgL27Do29cXHMrYXRlbmRlL2ksXHJcbiAgICAgICAgICAgIC9hdGVuZGUuKj9yZXF1aXNpdG9zL2lcclxuICAgICAgICAgIF1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgbGV0IGZvdW5kTWF0Y2ggPSBmYWxzZVxyXG4gICAgICAgICAgZm9yIChjb25zdCBwYXR0ZXJuIG9mIHBhdHRlcm5zKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoID0gaHRtbFRleHQubWF0Y2gocGF0dGVybilcclxuICAgICAgICAgICAgaWYgKG1hdGNoKSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1BhZHLDo28gZW5jb250cmFkbzonLCBwYXR0ZXJuLCAnTWF0Y2g6JywgbWF0Y2hbMF0pXHJcbiAgICAgICAgICAgICAgY29uc3QgaXNJbnN1ZmZpY2llbnQgPSAvaW5zdWZpY2llbnRlfG7Do29cXHMrYXRlbmRlL2kudGVzdChtYXRjaFswXSlcclxuICAgICAgICAgICAgICBzdW1tYXJ5VGV4dCA9IGlzSW5zdWZmaWNpZW50XHJcbiAgICAgICAgICAgICAgICA/ICfDgXJlYSBpbnN1ZmljaWVudGUgcGFyYSBjb21wZW5zYcOnw6NvLiBDb250aW51ZSBjb20gYSBhbsOhbGlzZSdcclxuICAgICAgICAgICAgICAgIDogJ8OBcmVhIHN1ZmljaWVudGUgcGFyYSBjb21wZW5zYcOnw6NvLidcclxuICAgICAgICAgICAgICBmb3VuZE1hdGNoID0gdHJ1ZVxyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSZXN1bW8gZXh0cmHDrWRvOicsIHN1bW1hcnlUZXh0KVxyXG4gICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLy8gU2UgbsOjbyBlbmNvbnRyb3UgcGFkcsOjbyBlc3BlY8OtZmljbywgcHJvY3VyYSBwb3IgcGFsYXZyYXMtY2hhdmVcclxuICAgICAgICAgIGlmICghZm91bmRNYXRjaCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnTmVuaHVtIHBhZHLDo28gZXNwZWPDrWZpY28gZW5jb250cmFkbywgcHJvY3VyYW5kbyBwYWxhdnJhcy1jaGF2ZS4uLicpXHJcbiAgICAgICAgICAgIGNvbnN0IGhhc0luc3VmZmljaWVudCA9IC9pbnN1ZmljaWVudGV8bsOjb1xccythdGVuZGUvaS50ZXN0KHRleHRDb250ZW50KVxyXG4gICAgICAgICAgICBjb25zdCBoYXNTdWZmaWNpZW50ID0gL3N1ZmljaWVudGV8YXRlbmRlL2kudGVzdCh0ZXh0Q29udGVudClcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUZW0gXCJpbnN1ZmljaWVudGVcIjonLCBoYXNJbnN1ZmZpY2llbnQpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUZW0gXCJzdWZpY2llbnRlXCI6JywgaGFzU3VmZmljaWVudClcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChoYXNJbnN1ZmZpY2llbnQgJiYgIWhhc1N1ZmZpY2llbnQpIHtcclxuICAgICAgICAgICAgICBzdW1tYXJ5VGV4dCA9ICfDgXJlYSBpbnN1ZmljaWVudGUgcGFyYSBjb21wZW5zYcOnw6NvJ1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSZXN1bW8gZGVmaW5pZG8gY29tbyBpbnN1ZmljaWVudGUnKVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGhhc1N1ZmZpY2llbnQgJiYgIWhhc0luc3VmZmljaWVudCkge1xyXG4gICAgICAgICAgICAgIHN1bW1hcnlUZXh0ID0gJ8OBcmVhIHN1ZmljaWVudGUgcGFyYSBjb21wZW5zYcOnw6NvJ1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSZXN1bW8gZGVmaW5pZG8gY29tbyBzdWZpY2llbnRlJylcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ07Do28gZm9pIHBvc3PDrXZlbCBkZXRlcm1pbmFyIHNlIGEgw6FyZWEgw6kgc3VmaWNpZW50ZSBvdSBpbnN1ZmljaWVudGUnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoaHRtbEVycm9yKSB7XHJcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ07Do28gZm9pIHBvc3PDrXZlbCBleHRyYWlyIHJlc3VtbyBkbyBIVE1MOicsIGh0bWxFcnJvcilcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIEF0dWFsaXphIG8gZXN0YWRvIGNvbSBvcyByZXN1bHRhZG9zXHJcbiAgICAgIC8vIFVzYSBhIFVSTCBjb20gdG9rZW4gc2UgZm9pIGFkaWNpb25hZG9cclxuICAgICAgY29uc3QgZmluYWxSZXBvcnRVcmwgPSBodG1sVXJsICYmIHRva2VuICYmICFodG1sVXJsLmluY2x1ZGVzKCd0b2tlbj0nKVxyXG4gICAgICAgID8gYCR7aHRtbFVybH0ke2h0bWxVcmwuaW5jbHVkZXMoJz8nKSA/ICcmJyA6ICc/J310b2tlbj0ke3Rva2VufWBcclxuICAgICAgICA6IGh0bWxVcmxcclxuICAgICAgXHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgIHByb2dyZXNzOiAxMDAsIC8vIEFuw6FsaXNlIGNvbXBsZXRhXHJcbiAgICAgICAgcmVwb3J0VXJsOiBmaW5hbFJlcG9ydFVybCxcclxuICAgICAgICBhbmFseXNpc1Jlc3VsdDogc3VtbWFyeVRleHQgPyB7XHJcbiAgICAgICAgICBzdWZmaWNpZW50OiAhc3VtbWFyeVRleHQudG9Mb3dlckNhc2UoKS5pbmNsdWRlcygnaW5zdWZpY2llbnRlJyksXHJcbiAgICAgICAgICBtZXNzYWdlOiBzdW1tYXJ5VGV4dFxyXG4gICAgICAgIH0gOiBudWxsXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICBpZiAoIWh0bWxVcmwpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCfinYwgQVRFTsOHw4NPOiBIVE1MIG7Do28gZm9pIGVuY29udHJhZG8hJylcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFc3RydXR1cmEgZG8gcmVzdWx0YWRvOicsIEpTT04uc3RyaW5naWZ5KHJlc3VsdCwgbnVsbCwgMikpXHJcbiAgICAgICAgYWxlcnQoJ0Fuw6FsaXNlIGNvbmNsdcOtZGEsIG1hcyBuw6NvIGZvaSBwb3Nzw612ZWwgZW5jb250cmFyIGEgVVJMIGRvIHJlbGF0w7NyaW8uIFZlcmlmaXF1ZSBvIGNvbnNvbGUgcGFyYSBtYWlzIGRldGFsaGVzLicpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ+KchSBIVE1MIGVuY29udHJhZG8gZSBzYWx2byBubyBlc3RhZG8uIEJvdMOjbyBkZSBiYWl4YXIgcmVsYXTDs3JpbyBkZXZlIGVzdGFyIGhhYmlsaXRhZG8uJylcclxuICAgICAgfVxyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm8gYW8gZXhlY3V0YXIgYW7DoWxpc2U6JywgZXJyb3IpXHJcbiAgICAgIGFsZXJ0KGBFcnJvIGFvIGV4ZWN1dGFyIGFuw6FsaXNlOiAke2Vycm9yLm1lc3NhZ2V9XFxuXFxuVmVyaWZpcXVlIG8gY29uc29sZSAoRjEyKSBwYXJhIG1haXMgZGV0YWxoZXMuYClcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIgKCkge1xyXG4gICAgY29uc3Qgc3R5bGUgPSBjc3NgXHJcbiAgICAgICYud2lkZ2V0LWNhbGN1bGFkb3JhLWxhcGEge1xyXG4gICAgICAgIC53aWRnZXQtY29udGFpbmVyIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgZ2FwOiAxMnB4O1xyXG4gICAgICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZm9ybS1ncm91cCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIGdhcDogOHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZm9ybS1ncm91cCBsYWJlbCB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgY29sb3I6ICMyMTIxMjE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlucHV0W3R5cGU9XCJudW1iZXJcIl0sXHJcbiAgICAgICAgaW5wdXRbdHlwZT1cInRleHRcIl0sXHJcbiAgICAgICAgaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xyXG4gICAgICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIGNvbG9yOiAjMjEyMTIxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbnB1dFt0eXBlPVwibnVtYmVyXCJdIHtcclxuICAgICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbnB1dFt0eXBlPVwiZmlsZVwiXSB7XHJcbiAgICAgICAgICBwYWRkaW5nOiA2cHggOHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaWRlYS1pbnB1dHMge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBnYXA6IDhweDtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmlkZWEtaW5wdXQtaXRlbSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGdhcDogOHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaWRlYS1pbnB1dC1pdGVtIGxhYmVsIHtcclxuICAgICAgICAgIG1pbi13aWR0aDogODBweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgIGNvbG9yOiAjMjEyMTIxO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaWRlYS1pbnB1dC1pdGVtIGlucHV0IHtcclxuICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICBwYWRkaW5nOiA4cHggMTZweDtcclxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICY6ZGlzYWJsZWQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xyXG4gICAgICAgICAgICBjb2xvcjogIzllOWU5ZTtcclxuICAgICAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmJ0bi1wcmltYXJ5IHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNjY2NDA7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFlNGYzMjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICY6ZGlzYWJsZWQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xyXG4gICAgICAgICAgICBjb2xvcjogIzllOWU5ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmJ0bi1zZWNvbmRhcnkge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI2NjY0MDtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICY6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWU0ZjMyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJjpkaXNhYmxlZCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjOWU5ZTllO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuYnRuLXN1Y2Nlc3Mge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcclxuICAgICAgICAgIGNvbG9yOiAjNDI0MjQyO1xyXG4gICAgICAgICAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNiZGJkYmQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMjEyMTIxO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJjpkaXNhYmxlZCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjOWU5ZTllO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuYnRuLWRhbmdlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xyXG4gICAgICAgICAgY29sb3I6ICM0MjQyNDI7XHJcbiAgICAgICAgICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2JkYmRiZDtcclxuICAgICAgICAgICAgY29sb3I6ICMyMTIxMjE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAmOmRpc2FibGVkIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcclxuICAgICAgICAgICAgY29sb3I6ICM5ZTllOWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5idXR0b24tZ3JvdXAge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGdhcDogOHB4O1xyXG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc3VtbWFyeS1ib3gge1xyXG4gICAgICAgICAgcGFkZGluZzogMTJweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc3VtbWFyeS1ib3guc3VmZmljaWVudCB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRlZGRhO1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2MzZTZjYjtcclxuICAgICAgICAgIGNvbG9yOiAjMTU1NzI0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc3VtbWFyeS1ib3guaW5zdWZmaWNpZW50IHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGQ3ZGE7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZjVjNmNiO1xyXG4gICAgICAgICAgY29sb3I6ICM3MjFjMjQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zcGlubmVyIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICBhbmltYXRpb246IHNwaW4gMC44cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgQGtleWZyYW1lcyBzcGluIHtcclxuICAgICAgICAgIHRvIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmZpbGUtaW5mbyB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICBjb2xvcjogIzY2NjtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmRyYXdpbmctaW5mbyB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICBjb2xvcjogIzAwNzljMTtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIGBcclxuXHJcbiAgICBjb25zdCBjYW5SdW5BbmFseXNpcyA9IFxyXG4gICAgICB0aGlzLnN0YXRlLmlkZWFWYWx1ZXMuZXZlcnkodmFsID0+IHZhbCAmJiB2YWwudHJpbSgpICE9PSAnJykgJiZcclxuICAgICAgKHRoaXMuc3RhdGUuc2hhcGVmaWxlR2VvbWV0cnkgfHwgdGhpcy5zdGF0ZS5kcmF3bkdlb21ldHJ5KSAmJlxyXG4gICAgICAhdGhpcy5zdGF0ZS5sb2FkaW5nXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY2FsY3VsYWRvcmEtbGFwYSBqaW11LXdpZGdldFwiIGNzcz17c3R5bGV9PlxyXG4gICAgICAgIHt0aGlzLnByb3BzLmhhc093blByb3BlcnR5KCd1c2VNYXBXaWRnZXRJZHMnKSAmJlxyXG4gICAgICAgICAgdGhpcy5wcm9wcy51c2VNYXBXaWRnZXRJZHMgJiZcclxuICAgICAgICAgIHRoaXMucHJvcHMudXNlTWFwV2lkZ2V0SWRzLmxlbmd0aCA9PT0gMSAmJiAoXHJcbiAgICAgICAgICAgIDxKaW11TWFwVmlld0NvbXBvbmVudFxyXG4gICAgICAgICAgICAgIHVzZU1hcFdpZGdldElkPXt0aGlzLnByb3BzLnVzZU1hcFdpZGdldElkcz8uWzBdfVxyXG4gICAgICAgICAgICAgIG9uQWN0aXZlVmlld0NoYW5nZT17KGptdjogSmltdU1hcFZpZXcpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICBqaW11TWFwVmlldzogam12XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGFpbmVyXCI+XHJcblxyXG4gICAgICAgICAgey8qIFF1YW50aWRhZGUgZGUgSURFQSAqL31cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAge2RlZmF1bHRNZXNzYWdlcy5xdWFudGlkYWRlSURFQX1cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgbWluPVwiMVwiXHJcbiAgICAgICAgICAgICAgbWF4PVwiMTBcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnF1YW50aWRhZGVJREVBfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVF1YW50aWRhZGVJREVBQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnN0YXRlLmxvYWRpbmd9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICB7LyogQ2FtcG9zIGRpbsOibWljb3MgZGUgSURFQSAqL31cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWRlYS1pbnB1dHNcIj5cclxuICAgICAgICAgICAge3RoaXMuc3RhdGUuaWRlYVZhbHVlcy5tYXAoKHZhbHVlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiaWRlYS1pbnB1dC1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+SURFQSB7aW5kZXggKyAxfTo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5oYW5kbGVJZGVhVmFsdWVDaGFuZ2UoaW5kZXgsIGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2BOw7ptZXJvIElERUEgJHtpbmRleCArIDF9YH1cclxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMuc3RhdGUubG9hZGluZ31cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgey8qIFVwbG9hZCBkZSBTaGFwZWZpbGUgKi99XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgIHtkZWZhdWx0TWVzc2FnZXMuYXJlYVByb3Bvc3RhU2hhcGVmaWxlfVxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBpZD1cInNoYXBlZmlsZS11cGxvYWRcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgICBhY2NlcHQ9XCIuemlwXCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVTaGFwZWZpbGVVcGxvYWR9XHJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMuc3RhdGUubG9hZGluZyB8fCAhIXRoaXMuc3RhdGUuZHJhd25HZW9tZXRyeX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAge3RoaXMuc3RhdGUuc2hhcGVmaWxlTGF5ZXIgJiYgKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsZS1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICBDYW1hZGE6IHt0aGlzLnN0YXRlLnNoYXBlZmlsZUxheWVyLnRpdGxlIHx8ICfDgXJlYSBQcm9wb3N0YSd9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLmRyYXduR2VvbWV0cnkgJiYgKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsZS1pbmZvXCIgc3R5bGU9e3sgY29sb3I6ICcjZGMzNTQ1JyB9fT5cclxuICAgICAgICAgICAgICAgIERlc2VuaG8gbm8gbWFwYSBhdGl2by4gUmVtb3ZhIG8gZGVzZW5obyBwYXJhIGZhemVyIHVwbG9hZCBkZSBzaGFwZWZpbGUuXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICB7LyogRGVzZW5obyBubyBNYXBhICovfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICB7ZGVmYXVsdE1lc3NhZ2VzLmFyZWFQcm9wb3N0YURlc2VuaG99XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4tc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVN0YXJ0RHJhd2luZ31cclxuICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5zdGF0ZS5sb2FkaW5nIHx8IHRoaXMuc3RhdGUuZHJhd2luZ01vZGUgfHwgISF0aGlzLnN0YXRlLnNoYXBlZmlsZUdlb21ldHJ5fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5kcmF3aW5nTW9kZSA/ICdEZXNlbmhhbmRvLi4uJyA6IGRlZmF1bHRNZXNzYWdlcy5pbmljaWFyRGVzZW5ob31cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAge3RoaXMuc3RhdGUuZHJhd2luZ01vZGUgJiYgKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJhd2luZy1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICBDbGlxdWUgbm8gbWFwYSBwYXJhIGNvbWXDp2FyIGEgZGVzZW5oYXIgYSDDoXJlYS5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLmRyYXduR2VvbWV0cnkgJiYgKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsZS1pbmZvXCIgc3R5bGU9e3sgY29sb3I6ICcjMjhhNzQ1JyB9fT5cclxuICAgICAgICAgICAgICAgIMOBcmVhIGRlc2VuaGFkYSBubyBtYXBhLlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5zaGFwZWZpbGVHZW9tZXRyeSAmJiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWxlLWluZm9cIiBzdHlsZT17eyBjb2xvcjogJyNkYzM1NDUnIH19PlxyXG4gICAgICAgICAgICAgICAgU2hhcGVmaWxlIGNhcnJlZ2Fkby4gUmVtb3ZhIG8gYXJxdWl2byBwYXJhIGRlc2VuaGFyIG5vIG1hcGEuXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICB7LyogQm90w7VlcyBkZSBBw6fDo28gKi99XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1ncm91cFwiPlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4tcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVSdW5BbmFseXNpc31cclxuICAgICAgICAgICAgICBkaXNhYmxlZD17IWNhblJ1bkFuYWx5c2lzfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmxvYWRpbmcgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzcGlubmVyXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICB7ZGVmYXVsdE1lc3NhZ2VzLmV4ZWN1dGFyQW5hbGlzZX1cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuLWRhbmdlclwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGVhckFuYWx5c2lzfVxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMuc3RhdGUubG9hZGluZ31cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2RlZmF1bHRNZXNzYWdlcy5saW1wYXJBbmFsaXNlfVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuLXN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlRG93bmxvYWRSZXBvcnR9XHJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9eyF0aGlzLnN0YXRlLnJlcG9ydFVybCB8fCB0aGlzLnN0YXRlLmxvYWRpbmd9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7ZGVmYXVsdE1lc3NhZ2VzLmJhaXhhclJlbGF0b3Jpb31cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICB7LyogUmVzdW1vIGRhIEFuw6FsaXNlICovfVxyXG4gICAgICAgICAge3RoaXMuc3RhdGUuYW5hbHlzaXNSZXN1bHQgJiYgKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHN1bW1hcnktYm94ICR7dGhpcy5zdGF0ZS5hbmFseXNpc1Jlc3VsdC5zdWZmaWNpZW50ID8gJ3N1ZmZpY2llbnQnIDogJ2luc3VmZmljaWVudCd9YH0+XHJcbiAgICAgICAgICAgICAgPHN0cm9uZz5SZXN1bW8gZGEgQW7DoWxpc2U6PC9zdHJvbmc+PGJyIC8+XHJcbiAgICAgICAgICAgICAge3RoaXMuc3RhdGUuYW5hbHlzaXNSZXN1bHQubWVzc2FnZX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXG4gZXhwb3J0IGZ1bmN0aW9uIF9fc2V0X3dlYnBhY2tfcHVibGljX3BhdGhfXyh1cmwpIHsgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB1cmwgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
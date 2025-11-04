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

/***/ "./your-extensions/widgets/filtrar-e-gerar-relatorio/src/runtime/translations/default.ts":
/*!***********************************************************************************************!*\
  !*** ./your-extensions/widgets/filtrar-e-gerar-relatorio/src/runtime/translations/default.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    _widgetLabel: 'Filtrar e Baixar',
    addLayer: 'Adicionar Camada',
    featureServiceUrl: 'URL do Feature Service',
    instructions: 'Digite um número na coluna "idea" para filtrar e dar zoom no polígono correspondente.',
    searchIdea: 'Pesquisar por número (idea)',
    filterAndZoom: 'Filtrar',
    generateReport: 'Gerar Relatório',
    clearFilter: 'Limpar Filtro',
    loading: 'Carregando...',
    layerLoaded: 'Camada carregada com sucesso!'
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
/*!**********************************************************************************!*\
  !*** ./your-extensions/widgets/filtrar-e-gerar-relatorio/src/runtime/widget.tsx ***!
  \**********************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ Widget)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var _translations_default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./translations/default */ "./your-extensions/widgets/filtrar-e-gerar-relatorio/src/runtime/translations/default.ts");
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
            ideaSearchInput: '',
            jimuMapView: null,
            featureLayer: null,
            loading: false,
            initialExtent: null
        };
        // URL fixa da camada
        this.FEATURE_SERVICE_URL = 'https://meioambiente.sistemas.mpba.mp.br/server/rest/services/Hosted/alertas_regional_lapa/FeatureServer';
        // URL da ferramenta de geoprocessamento
        this.GP_SERVICE_URL = 'https://meioambiente.sistemas.mpba.mp.br/server/rest/services/testeoutput/processaralerta_idea/GPServer';
        // Nome da task específica dentro da GP
        this.GP_TASK_NAME = 'Processamento de alertas';
        // Função chamada quando o valor da pesquisa muda
        this.handleIdeaSearchInputChange = (event) => {
            this.setState({
                ideaSearchInput: event.target.value
            });
        };
        // Carrega a camada automaticamente quando o componente é montado ou o mapa está disponível
        this.componentDidUpdate = (prevProps, prevState) => {
            if (this.state.jimuMapView && !this.state.featureLayer && !prevState.jimuMapView) {
                // Salva a visualização inicial quando o mapa é detectado pela primeira vez
                if (this.state.jimuMapView.view && !this.state.initialExtent) {
                    const currentExtent = this.state.jimuMapView.view.extent;
                    if (currentExtent) {
                        this.setState({
                            initialExtent: currentExtent.clone()
                        });
                    }
                }
                this.loadFeatureLayer();
            }
        };
        // Carrega a camada de feature service
        this.loadFeatureLayer = () => {
            if (!this.state.jimuMapView) {
                return;
            }
            this.setState({ loading: true });
            (0,jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.loadArcGISJSAPIModules)([
                'esri/layers/FeatureLayer',
                'esri/geometry/SpatialReference'
            ]).then((modules) => {
                [this.FeatureLayer, this.SpatialReference] = modules;
                // Cria a camada com a URL fixa
                const layer = new this.FeatureLayer({
                    url: this.FEATURE_SERVICE_URL
                });
                // Adiciona a camada ao mapa
                this.state.jimuMapView.view.map.add(layer);
                // Aguarda a camada ser criada
                layer.on('layerview-create', () => {
                    // Salva a visualização inicial do mapa se ainda não foi salva
                    if (!this.state.initialExtent && this.state.jimuMapView && this.state.jimuMapView.view) {
                        const currentExtent = this.state.jimuMapView.view.extent;
                        if (currentExtent) {
                            this.setState({
                                featureLayer: layer,
                                loading: false,
                                initialExtent: currentExtent.clone()
                            });
                        }
                        else {
                            this.setState({
                                featureLayer: layer,
                                loading: false
                            });
                        }
                    }
                    else {
                        this.setState({
                            featureLayer: layer,
                            loading: false
                        });
                    }
                });
                layer.on('layerview-create-error', () => {
                    console.error('Erro ao carregar a camada');
                    this.setState({ loading: false });
                });
            });
        };
        // Função para filtrar e dar zoom no polígono baseado na pesquisa
        this.handleFilterAndZoom = (evt) => __awaiter(this, void 0, void 0, function* () {
            evt.preventDefault();
            // Casos de erro
            if (!this.state.jimuMapView) {
                alert('Por favor, configure um mapa no widget.');
                return;
            }
            if (!this.state.featureLayer) {
                alert('A camada ainda não foi carregada. Aguarde...');
                return;
            }
            if (this.state.ideaSearchInput === '' || this.state.ideaSearchInput.trim() === '') {
                alert('Por favor, digite um número para pesquisar na coluna idea.');
                return;
            }
            this.setState({ loading: true });
            // Carrega os módulos necessários
            (0,jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.loadArcGISJSAPIModules)([
                'esri/layers/FeatureLayer',
                'esri/geometry/SpatialReference'
            ]).then((modules) => {
                [this.FeatureLayer, this.SpatialReference] = modules;
                const layer = this.state.featureLayer;
                const searchValue = this.state.ideaSearchInput.trim();
                // Escapa aspas simples para evitar SQL injection
                const escapedValue = searchValue.replace(/'/g, "''");
                // Verifica se a camada está carregada e obtém informações dos campos
                // Aguarda a camada estar completamente carregada
                const checkAndQuery = () => {
                    // Lista de possíveis nomes de coluna (case-insensitive)
                    const possibleFieldNames = ['idea', 'IDEA', 'Idea', 'ID', 'id', 'Id'];
                    let fieldName = 'idea'; // Padrão
                    // Tenta encontrar o campo correto
                    if (layer.fields && layer.fields.length > 0) {
                        const foundField = layer.fields.find(field => possibleFieldNames.includes(field.name));
                        if (foundField) {
                            fieldName = foundField.name;
                        }
                        else {
                            // Se não encontrar, tenta fazer uma busca case-insensitive
                            const caseInsensitiveField = layer.fields.find(field => field.name.toLowerCase() === 'idea');
                            if (caseInsensitiveField) {
                                fieldName = caseInsensitiveField.name;
                            }
                            else {
                                // Log dos campos disponíveis para debug
                                console.log('Campos disponíveis na camada:', layer.fields.map(f => f.name));
                                // Tenta usar o primeiro campo que parece ser um ID
                                const idField = layer.fields.find(field => field.type === 'esriFieldTypeString' || field.type === 'esriFieldTypeInteger' || field.type === 'esriFieldTypeDouble');
                                if (idField) {
                                    fieldName = idField.name;
                                    console.log(`Usando campo: ${fieldName}`);
                                }
                            }
                        }
                    }
                    // Cria uma query para buscar o polígono pela coluna
                    // Usa LIKE para busca mais flexível e trata como string
                    const query = layer.createQuery();
                    // Tenta diferentes abordagens de query
                    // 1. Busca exata como string
                    // 2. Busca com LIKE para valores parciais
                    // 3. Busca como número (se o valor for numérico)
                    const hasSpecialChars = searchValue.indexOf('.') !== -1 || searchValue.indexOf('/') !== -1;
                    // Para valores com caracteres especiais (como "003.9.427074/2025"), usa apenas como string
                    if (hasSpecialChars) {
                        query.where = `${fieldName} = '${escapedValue}'`;
                    }
                    else {
                        // Se for um número simples, tenta como número e como string
                        const isNumeric = !isNaN(parseFloat(searchValue)) && isFinite(parseFloat(searchValue));
                        if (isNumeric) {
                            query.where = `${fieldName} = ${searchValue} OR ${fieldName} = '${escapedValue}'`;
                        }
                        else {
                            query.where = `${fieldName} = '${escapedValue}'`;
                        }
                    }
                    query.returnGeometry = true;
                    // Executa a query
                    layer.queryFeatures(query).then((results) => {
                        if (results.features.length === 0) {
                            // Se não encontrou, tenta com LIKE
                            const likeQuery = layer.createQuery();
                            likeQuery.where = `${fieldName} LIKE '%${escapedValue}%'`;
                            likeQuery.returnGeometry = true;
                            return layer.queryFeatures(likeQuery).then((likeResults) => {
                                if (likeResults.features.length === 0) {
                                    alert(`Nenhum polígono encontrado com ${fieldName} = ${searchValue}`);
                                    this.setState({ loading: false });
                                    return;
                                }
                                // Se encontrou com LIKE, usa o primeiro resultado
                                const foundGraphic = likeResults.features[0];
                                const actualValue = foundGraphic.attributes[fieldName];
                                this.applyFilterAndZoom(layer, foundGraphic, fieldName, actualValue);
                            });
                        }
                        // Se encontrou, aplica filtro e zoom
                        const foundGraphic = results.features[0];
                        const actualValue = foundGraphic.attributes[fieldName];
                        this.applyFilterAndZoom(layer, foundGraphic, fieldName, actualValue);
                    }).catch((error) => {
                        console.error('Erro ao pesquisar features:', error);
                        console.error('Detalhes do erro:', {
                            message: error.message,
                            details: error.details,
                            fieldName: fieldName,
                            searchValue: searchValue
                        });
                        // Tenta mostrar informações mais úteis
                        let errorMessage = 'Erro ao pesquisar. ';
                        if (layer.fields && layer.fields.length > 0) {
                            const fieldNames = layer.fields.map(f => f.name).join(', ');
                            errorMessage += `\n\nCampos disponíveis: ${fieldNames}`;
                        }
                        errorMessage += `\n\nVerifique se a coluna "${fieldName}" existe e se o valor "${searchValue}" está correto.`;
                        alert(errorMessage);
                        this.setState({ loading: false });
                    });
                };
                // Se a camada já está carregada, executa diretamente
                if (layer.loaded) {
                    checkAndQuery();
                }
                else {
                    // Aguarda a camada carregar
                    layer.when(() => {
                        checkAndQuery();
                    }).catch((error) => {
                        console.error('Erro ao carregar informações da camada:', error);
                        alert('Erro ao carregar informações da camada. Verifique se a camada está acessível.');
                        this.setState({ loading: false });
                    });
                }
            });
        });
        // Função auxiliar para aplicar filtro e zoom
        this.applyFilterAndZoom = (layer, graphic, fieldName, actualValue) => {
            // Obtém o valor real do atributo do graphic
            const attributeValue = graphic.attributes[fieldName];
            // Se o valor não foi passado, usa o do atributo
            const valueToFilter = actualValue !== undefined ? actualValue : attributeValue;
            // Escapa o valor para SQL (trata strings, números e null)
            let definitionExpression;
            if (valueToFilter === null || valueToFilter === undefined) {
                definitionExpression = `${fieldName} IS NULL`;
            }
            else if (typeof valueToFilter === 'number') {
                definitionExpression = `${fieldName} = ${valueToFilter}`;
            }
            else {
                // É uma string, precisa escapar aspas simples
                const escapedValue = String(valueToFilter).replace(/'/g, "''");
                definitionExpression = `${fieldName} = '${escapedValue}'`;
            }
            console.log(`Aplicando filtro: ${fieldName} = ${valueToFilter}`);
            console.log(`Definition Expression: ${definitionExpression}`);
            // Aplica o filtro na camada usando definitionExpression
            // Isso é o método correto para filtrar uma FeatureLayer e ocultar outros polígonos
            layer.definitionExpression = definitionExpression;
            // Força a atualização imediata da camada para aplicar o filtro
            layer.refresh();
            console.log('Filtro aplicado. A camada deve mostrar APENAS o polígono selecionado');
            // Aguarda que a camada esteja completamente carregada antes de aplicar o filtro
            if (layer.loaded) {
                // A camada já está carregada, aplica o filtro diretamente
                this.applyZoomAfterFilter(layer, graphic);
            }
            else {
                // Aguarda a camada carregar primeiro
                layer.when(() => {
                    // Aplica o filtro novamente após carregar (garantia)
                    layer.definitionExpression = definitionExpression;
                    layer.refresh();
                    this.applyZoomAfterFilter(layer, graphic);
                }).catch((error) => {
                    console.error('Erro ao aguardar camada:', error);
                    // Mesmo assim tenta aplicar o zoom
                    this.applyZoomAfterFilter(layer, graphic);
                });
            }
        };
        // Função auxiliar para aplicar zoom após o filtro
        this.applyZoomAfterFilter = (layer, graphic) => {
            // Aguarda um pouco para garantir que o filtro seja processado pela camada
            // O definitionExpression precisa de tempo para ser processado
            setTimeout(() => {
                // Dá zoom no polígono encontrado
                if (graphic.geometry) {
                    this.state.jimuMapView.view.goTo({
                        target: graphic.geometry,
                        zoom: 15
                    }).then(() => {
                        this.setState({ loading: false });
                    }).catch((error) => {
                        console.error('Erro ao dar zoom:', error);
                        this.setState({ loading: false });
                    });
                }
                else {
                    this.setState({ loading: false });
                }
            }, 500);
        };
        // Função para limpar o filtro
        this.handleClearFilter = () => {
            if (this.state.featureLayer) {
                // Remove o filtro definindo definitionExpression como vazio
                this.state.featureLayer.definitionExpression = '';
                this.state.featureLayer.refresh();
                console.log('Filtro removido');
                // Restaura a visualização inicial do mapa
                if (this.state.jimuMapView && this.state.jimuMapView.view) {
                    if (this.state.initialExtent) {
                        // Restaura a extensão inicial salva
                        this.state.jimuMapView.view.goTo(this.state.initialExtent).then(() => {
                            console.log('Visualização inicial restaurada');
                        }).catch((error) => {
                            console.error('Erro ao restaurar visualização inicial:', error);
                            // Se falhar, tenta fazer zoom para a camada completa
                            if (this.state.featureLayer && this.state.featureLayer.fullExtent) {
                                this.state.jimuMapView.view.goTo(this.state.featureLayer.fullExtent);
                            }
                        });
                    }
                    else {
                        // Se não tiver extensão inicial salva, tenta fazer zoom para a camada completa
                        if (this.state.featureLayer && this.state.featureLayer.fullExtent) {
                            this.state.jimuMapView.view.goTo(this.state.featureLayer.fullExtent).then(() => {
                                console.log('Zoom para camada completa aplicado');
                            }).catch((error) => {
                                console.error('Erro ao fazer zoom para camada completa:', error);
                            });
                        }
                    }
                }
                this.setState({
                    ideaSearchInput: ''
                });
            }
        };
        // Função para gerar relatório usando a ferramenta de geoprocessamento
        this.handleGenerateReport = () => __awaiter(this, void 0, void 0, function* () {
            // Validações
            if (this.state.ideaSearchInput === '' || this.state.ideaSearchInput.trim() === '') {
                alert('Por favor, digite um número de idea para gerar o relatório.');
                return;
            }
            const ideaNumber = this.state.ideaSearchInput.trim();
            this.setState({ loading: true });
            try {
                console.log('Iniciando geração de relatório para idea:', ideaNumber);
                // Carrega IdentityManager para obter token de autenticação
                console.log('Carregando IdentityManager para autenticação...');
                const identityModules = yield (0,jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.loadArcGISJSAPIModules)([
                    'esri/identity/IdentityManager'
                ]);
                const [IdentityManager] = identityModules;
                // Obtém o token para a URL do serviço
                let token = null;
                try {
                    const credential = IdentityManager.findCredential(this.GP_SERVICE_URL);
                    if (credential && credential.token) {
                        token = credential.token;
                        console.log('Token encontrado via IdentityManager');
                    }
                    else {
                        // Tenta gerar token automaticamente
                        const serverInfo = IdentityManager.findServerInfo(this.GP_SERVICE_URL);
                        if (serverInfo) {
                            console.log('Obtendo token automaticamente...');
                            yield IdentityManager.checkSignInStatus(this.GP_SERVICE_URL);
                            const updatedCredential = IdentityManager.findCredential(this.GP_SERVICE_URL);
                            if (updatedCredential && updatedCredential.token) {
                                token = updatedCredential.token;
                                console.log('Token obtido automaticamente');
                            }
                        }
                    }
                }
                catch (tokenError) {
                    console.warn('Erro ao obter token, tentando sem autenticação:', tokenError);
                }
                // Função auxiliar para adicionar token às URLs
                const addTokenToUrl = (url) => {
                    if (!token) {
                        return url;
                    }
                    try {
                        const urlObj = new URL(url);
                        urlObj.searchParams.set('token', token);
                        return urlObj.toString();
                    }
                    catch (e) {
                        // Se a URL não for absoluta, trata como string
                        const separator = url.includes('?') ? '&' : '?';
                        return `${url}${separator}token=${encodeURIComponent(token)}`;
                    }
                };
                // Primeiro, vamos obter informações sobre a task específica para descobrir os parâmetros
                console.log('Obtendo informações da task específica...');
                const taskNameEncoded = encodeURIComponent(this.GP_TASK_NAME);
                const infoUrl = addTokenToUrl(`${this.GP_SERVICE_URL}/${taskNameEncoded}?f=json`);
                console.log('URL de informações da task:', infoUrl);
                // Tenta obter informações da task específica primeiro
                let gpInfo;
                try {
                    const taskInfoResponse = yield fetch(infoUrl);
                    if (taskInfoResponse.ok) {
                        gpInfo = yield taskInfoResponse.json();
                        console.log('Informações da task específica obtidas com sucesso');
                        console.log('Informações completas da task:', JSON.stringify(gpInfo, null, 2));
                    }
                    else {
                        // Se falhar, tenta da GP geral
                        console.warn('Não foi possível obter informações da task, tentando da GP geral...');
                        const gpInfoUrl = addTokenToUrl(`${this.GP_SERVICE_URL}?f=json`);
                        const gpInfoResponse = yield fetch(gpInfoUrl);
                        if (!gpInfoResponse.ok) {
                            throw new Error(`Erro ao obter informações: ${taskInfoResponse.status} ${taskInfoResponse.statusText}`);
                        }
                        gpInfo = yield gpInfoResponse.json();
                        console.log('Usando informações da GP geral');
                        console.log('Informações completas da GP:', JSON.stringify(gpInfo, null, 2));
                    }
                }
                catch (infoError) {
                    // Se falhar, tenta da GP geral
                    console.warn('Erro ao obter informações da task, tentando da GP geral...', infoError);
                    const gpInfoUrl = addTokenToUrl(`${this.GP_SERVICE_URL}?f=json`);
                    const gpInfoResponse = yield fetch(gpInfoUrl);
                    gpInfo = yield gpInfoResponse.json();
                    console.log('Usando informações da GP geral (fallback)');
                    console.log('Informações completas da GP:', JSON.stringify(gpInfo, null, 2));
                }
                // Descobre qual é o parâmetro de entrada
                // PRIORIDADE: O widget recebe o número de "idea", então devemos procurar por parâmetros relacionados a "idea"
                let paramName = 'idea';
                let paramInfo = null;
                if (gpInfo.parameters && Array.isArray(gpInfo.parameters)) {
                    console.log('Parâmetros disponíveis:', gpInfo.parameters.map(p => ({
                        name: p.name,
                        dataType: p.dataType,
                        direction: p.direction,
                        parameterType: p.parameterType
                    })));
                    // PRIORIDADE 1: Procura exatamente por "idea" (case-insensitive)
                    const exactIdeaParam = gpInfo.parameters.find(p => p.name && p.name.toLowerCase() === 'idea');
                    if (exactIdeaParam) {
                        paramName = exactIdeaParam.name;
                        paramInfo = exactIdeaParam;
                        console.log('Parâmetro "idea" encontrado exatamente!');
                    }
                    else {
                        // PRIORIDADE 2: Procura por parâmetros que contenham "idea" no nome
                        const ideaParam = gpInfo.parameters.find(p => p.name && p.name.toLowerCase().includes('idea'));
                        if (ideaParam) {
                            paramName = ideaParam.name;
                            paramInfo = ideaParam;
                            console.log('Parâmetro contendo "idea" encontrado:', ideaParam.name);
                        }
                        else {
                            // PRIORIDADE 3: Procura por parâmetros que contenham "id" (mas não "valor_alerta" ou outros)
                            const idParam = gpInfo.parameters.find(p => p.name &&
                                p.name.toLowerCase().includes('id') &&
                                !p.name.toLowerCase().includes('valor') &&
                                !p.name.toLowerCase().includes('alerta'));
                            if (idParam) {
                                paramName = idParam.name;
                                paramInfo = idParam;
                                console.log('Parâmetro contendo "id" encontrado:', idParam.name);
                            }
                            else {
                                // PRIORIDADE 4: Se não encontrar nada relacionado a idea/id, usa o primeiro parâmetro de entrada
                                // MAS apenas se não for "valor_alerta" ou similar
                                const inputParams = gpInfo.parameters.filter(p => (p.direction === 'esriGPParameterDirectionInput' || p.direction === 'GPParameterDirectionInput') &&
                                    !p.name.toLowerCase().includes('valor') &&
                                    !p.name.toLowerCase().includes('alerta'));
                                if (inputParams.length > 0) {
                                    paramName = inputParams[0].name;
                                    paramInfo = inputParams[0];
                                    console.log('Usando primeiro parâmetro de entrada (não valor_alerta):', inputParams[0].name);
                                }
                                else {
                                    // Último recurso: usa "idea" mesmo que não esteja na lista
                                    console.warn('Parâmetro "idea" não encontrado na lista de parâmetros. Usando "idea" como padrão.');
                                    paramName = 'idea';
                                }
                            }
                        }
                    }
                }
                else {
                    // Se não conseguir obter parâmetros, usa "idea" como padrão
                    console.warn('Não foi possível obter parâmetros da GP. Usando "idea" como padrão.');
                    paramName = 'idea';
                }
                console.log('Parâmetro selecionado:', paramName);
                console.log('Detalhes do parâmetro:', paramInfo);
                console.log('Parâmetro que será usado:', paramName);
                // Verifica o tipo do parâmetro para formatar corretamente
                let paramValue = ideaNumber;
                if (paramInfo) {
                    console.log('Tipo de dado do parâmetro:', paramInfo.dataType);
                    console.log('Tipo de parâmetro:', paramInfo.parameterType);
                    // Se o parâmetro for do tipo GPString ou similar, envia como string
                    // Se for URL ou outro tipo complexo, pode precisar de formato diferente
                    if (paramInfo.dataType === 'GPString' || paramInfo.dataType === 'esriGPTypeString') {
                        paramValue = String(ideaNumber);
                    }
                    else if (paramInfo.dataType === 'GPDouble' || paramInfo.dataType === 'esriGPTypeDouble' ||
                        paramInfo.dataType === 'GPLong' || paramInfo.dataType === 'esriGPTypeLong') {
                        // Se for numérico, tenta converter
                        const numValue = parseFloat(ideaNumber);
                        if (!isNaN(numValue)) {
                            paramValue = numValue;
                        }
                    }
                }
                // Prepara os parâmetros para a execução
                // IMPORTANTE: f=json vai na URL, não no body
                // Apenas os parâmetros da GP vão no body
                const params = {
                    [paramName]: paramValue
                };
                console.log('Parâmetros preparados (para o body):', params);
                console.log('Valor do parâmetro:', paramValue, 'Tipo:', typeof paramValue);
                console.log('Nome do parâmetro:', paramName);
                // Formata os parâmetros como form-urlencoded
                const formData = new URLSearchParams();
                // Adiciona os parâmetros (exceto f=json que vai na URL)
                Object.keys(params).forEach(key => {
                    if (key !== 'f') {
                        formData.append(key, String(params[key]));
                    }
                });
                // Adiciona token ao body
                if (token) {
                    formData.append('token', token);
                    console.log('Token adicionado ao body');
                }
                // Função auxiliar para fazer a requisição
                const makeExecuteRequest = (url) => __awaiter(this, void 0, void 0, function* () {
                    // Adiciona token na URL também (alguns servidores ArcGIS exigem isso)
                    let finalUrl = url;
                    if (token) {
                        const urlWithToken = new URL(url);
                        urlWithToken.searchParams.set('token', token);
                        urlWithToken.searchParams.set('f', 'json');
                        finalUrl = urlWithToken.toString();
                    }
                    else {
                        // Se não tiver token, adiciona apenas f=json
                        const urlObj = new URL(url);
                        urlObj.searchParams.set('f', 'json');
                        finalUrl = urlObj.toString();
                    }
                    console.log('Tentando URL:', finalUrl);
                    console.log('Body (formData):', formData.toString());
                    console.log('Token presente:', !!token);
                    console.log('Parâmetros enviados:', Object.keys(params));
                    const response = yield fetch(finalUrl, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        },
                        body: formData
                    });
                    return response;
                });
                // Tenta primeiro com a task específica
                let executeUrl = `${this.GP_SERVICE_URL}/${taskNameEncoded}/execute`;
                console.log('Tentando primeiro com task específica:', this.GP_TASK_NAME);
                console.log('URL de execute (task específica):', executeUrl);
                let executeResponse = yield makeExecuteRequest(executeUrl);
                // Se der erro 500, pode ser que o endpoint da task específica não exista
                // Tenta com o endpoint da GP raiz
                if (!executeResponse.ok) {
                    let resultText = yield executeResponse.text();
                    try {
                        const resultJson = JSON.parse(resultText);
                        if (resultJson.error && resultJson.error.code === 500) {
                            console.warn('Erro 500 com task específica, tentando com endpoint da GP raiz...');
                            executeUrl = `${this.GP_SERVICE_URL}/execute`;
                            console.log('Tentando com endpoint da GP raiz:', executeUrl);
                            executeResponse = yield makeExecuteRequest(executeUrl);
                        }
                    }
                    catch (e) {
                        // Se não conseguir parsear, continua com o erro original
                    }
                }
                // Lê a resposta mesmo se não for OK para ver o erro detalhado
                let result;
                try {
                    result = yield executeResponse.json();
                    console.log('Resposta do execute (JSON):', JSON.stringify(result, null, 2));
                }
                catch (jsonError) {
                    // Se não conseguir ler como JSON, lê como texto
                    const textResponse = yield executeResponse.text();
                    console.error('Resposta não é JSON:', textResponse);
                    throw new Error(`Erro ao executar tarefa: ${executeResponse.status} ${executeResponse.statusText} - Resposta: ${textResponse.substring(0, 500)}`);
                }
                if (!executeResponse.ok) {
                    // Se a resposta tem um erro no JSON, usa ele
                    if (result.error) {
                        console.error('Erro detalhado da GP:', result.error);
                        throw new Error(`Erro na GP: ${JSON.stringify(result.error)}`);
                    }
                    // Se não tiver campo error, mas o status não é OK, mostra o resultado completo
                    console.error('Erro HTTP:', executeResponse.status, executeResponse.statusText);
                    console.error('Resposta completa:', result);
                    throw new Error(`Erro ao executar tarefa: ${executeResponse.status} ${executeResponse.statusText} - ${JSON.stringify(result)}`);
                }
                // Verifica se a resposta contém um jobId (tarefa assíncrona)
                if (result.jobId) {
                    console.log('Tarefa assíncrona detectada. Job ID:', result.jobId);
                    const jobId = result.jobId;
                    // Polling do status do job
                    let attempts = 0;
                    const maxAttempts = 60;
                    let jobStatus = null;
                    while (attempts < maxAttempts) {
                        yield new Promise(resolve => setTimeout(resolve, 1000));
                        // URL para verificar status do job
                        // Usa a mesma URL base que funcionou no execute (pode ser task específica ou raiz)
                        const baseUrl = executeUrl.replace('/execute', '');
                        const statusUrl = token
                            ? `${baseUrl}/jobs/${jobId}?token=${token}&f=json`
                            : `${baseUrl}/jobs/${jobId}?f=json`;
                        console.log('Verificando status do job:', statusUrl);
                        const statusResponse = yield fetch(statusUrl);
                        if (!statusResponse.ok) {
                            throw new Error(`Erro ao verificar status do job: ${statusResponse.status}`);
                        }
                        jobStatus = yield statusResponse.json();
                        console.log(`Status do job (tentativa ${attempts + 1}):`, jobStatus.jobStatus);
                        if (jobStatus.jobStatus === 'esriJobSucceeded') {
                            // Obtém os resultados
                            // Usa a mesma URL base que funcionou no execute
                            const baseUrl = executeUrl.replace('/execute', '');
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
                            throw new Error(`Job falhou: ${jobStatus.messages ? JSON.stringify(jobStatus.messages) : 'Erro desconhecido'}`);
                        }
                        else if (jobStatus.jobStatus === 'esriJobCancelled') {
                            throw new Error('Job foi cancelado');
                        }
                        attempts++;
                    }
                    if (attempts >= maxAttempts) {
                        throw new Error('Timeout: O job demorou mais de 60 segundos para completar');
                    }
                }
                else {
                    // Tarefa síncrona - resultado já está disponível
                    console.log('Tarefa síncrona - resultado já disponível');
                }
                console.log('Resultado completo da GP:', JSON.stringify(result, null, 2));
                // Processa o resultado - procura pela URL do HTML
                let htmlUrl = null;
                // Para tarefas assíncronas, os resultados podem estar em uma estrutura diferente
                // Primeiro, verifica se há erros
                if (result.error) {
                    console.error('Erro encontrado no resultado:', result.error);
                    throw new Error(`Erro na GP: ${JSON.stringify(result.error)}`);
                }
                // Procura em result.results (estrutura comum para tarefas síncronas)
                if (result.results && Array.isArray(result.results)) {
                    for (const resultItem of result.results) {
                        // O resultado pode estar diretamente no resultItem ou em resultItem.value
                        const value = resultItem.value !== undefined ? resultItem.value : resultItem;
                        if (typeof value === 'string' && value.includes('.html')) {
                            htmlUrl = value;
                            break;
                        }
                        else if (value && typeof value === 'object') {
                            // Procura por propriedades comuns que contêm URLs
                            if (value.url && typeof value.url === 'string' && value.url.includes('.html')) {
                                htmlUrl = value.url;
                                break;
                            }
                            else if (value.pathUrl && typeof value.pathUrl === 'string') {
                                htmlUrl = value.pathUrl;
                                break;
                            }
                            else if (value.value && typeof value.value === 'string' && value.value.includes('.html')) {
                                htmlUrl = value.value;
                                break;
                            }
                        }
                    }
                }
                // Para tarefas assíncronas, os resultados podem estar em result.results como objeto
                if (!htmlUrl && result.results && typeof result.results === 'object' && !Array.isArray(result.results)) {
                    // Itera sobre as propriedades do objeto results
                    for (const key in result.results) {
                        const resultItem = result.results[key];
                        if (resultItem && resultItem.value) {
                            const value = resultItem.value;
                            if (typeof value === 'string' && value.includes('.html')) {
                                htmlUrl = value;
                                break;
                            }
                            else if (value.url && typeof value.url === 'string' && value.url.includes('.html')) {
                                htmlUrl = value.url;
                                break;
                            }
                            else if (value.pathUrl && typeof value.pathUrl === 'string') {
                                htmlUrl = value.pathUrl;
                                break;
                            }
                        }
                    }
                }
                // Procura em outras propriedades do resultado
                if (!htmlUrl && result.outputUrl) {
                    htmlUrl = result.outputUrl;
                }
                if (!htmlUrl && result.url) {
                    htmlUrl = result.url;
                }
                if (!htmlUrl && result.fileUrl) {
                    htmlUrl = result.fileUrl;
                }
                if (!htmlUrl && result.outputFile) {
                    htmlUrl = result.outputFile;
                }
                // Busca por regex em todo o objeto (último recurso)
                if (!htmlUrl) {
                    const resultString = JSON.stringify(result);
                    const urlMatch = resultString.match(/https?:\/\/[^\s"<>]+\.html/g);
                    if (urlMatch && urlMatch.length > 0) {
                        htmlUrl = urlMatch[0];
                    }
                }
                if (htmlUrl) {
                    console.log('URL do HTML encontrada:', htmlUrl);
                    // Abre o HTML em uma nova guia
                    window.open(htmlUrl, '_blank');
                    this.setState({ loading: false });
                }
                else {
                    // Se não encontrou a URL, mostra o resultado completo para debug
                    console.warn('Não foi possível encontrar a URL do HTML no resultado:', result);
                    console.warn('Resultado completo:', JSON.stringify(result, null, 2));
                    alert('Relatório gerado, mas não foi possível encontrar a URL do HTML. Verifique o console do navegador (F12) para ver os detalhes do resultado.');
                    this.setState({ loading: false });
                }
            }
            catch (error) {
                console.error('Erro completo ao executar a ferramenta de geoprocessamento:', error);
                console.error('Stack trace:', error.stack);
                let errorMessage = 'Erro ao gerar relatório.\n\n';
                if (error.message) {
                    errorMessage += `Mensagem: ${error.message}\n\n`;
                }
                if (error.details && Array.isArray(error.details) && error.details.length > 0) {
                    errorMessage += `Detalhes: ${error.details[0]}\n\n`;
                }
                errorMessage += 'Verifique:\n';
                errorMessage += '1. Se o número de idea está correto\n';
                errorMessage += '2. Se a ferramenta de geoprocessamento está acessível\n';
                errorMessage += '3. Abra o console do navegador (F12) para mais detalhes';
                alert(errorMessage);
                this.setState({ loading: false });
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
      }
      form > div {
        display: flex;
        gap: 8px;
        justify-content: space-between;
        input {
          flex: 1;
          padding: 8px;
          border: 1px solid #ccc;
          border-radius: 20px;
        }
        button {
          min-width: 100px;
          padding: 8px 16px;
          border: none;
          border-radius: 20px;
          background-color: #266640;
          color: white;
          cursor: pointer;
          &:hover {
            background-color: #1e4f32;
          }
          &:disabled {
            background-color: #ccc;
            cursor: not-allowed;
          }
        }
      }
      .report-button {
        background-color: #266640;
        color: white;
        border: none;
        border-radius: 20px;
        padding: 8px 16px;
        cursor: pointer !important;
        transition: all 0.2s ease;
        pointer-events: auto;
        &:hover:not(:disabled) {
          background-color: #1e4f32;
          cursor: pointer !important;
        }
        &:active:not(:disabled) {
          cursor: pointer !important;
        }
        &:focus:not(:disabled) {
          cursor: pointer !important;
        }
        &:disabled {
          background-color: #ccc;
          color: #9e9e9e;
          cursor: not-allowed !important;
          opacity: 0.6;
          pointer-events: none;
        }
        &:not(:disabled) {
          cursor: pointer !important;
        }
      }
      .clear-button {
        background-color: #e0e0e0;
        color: #424242;
        border: none;
        border-radius: 20px;
        padding: 8px 16px;
        cursor: pointer;
        transition: all 0.2s ease;
        &:hover {
          background-color: #bdbdbd;
          color: #212121;
        }
        &:disabled {
          background-color: #f5f5f5;
          color: #9e9e9e;
          cursor: not-allowed;
        }
      }
      .status-message {
        padding: 8px;
        background-color: #e7f3ff;
        border-radius: 4px;
        font-size: 14px;
      }
      .loading {
        color: #0079c1;
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
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "widget-container" },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", null, _translations_default__WEBPACK_IMPORTED_MODULE_2__["default"].instructions),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("form", { onSubmit: this.handleFilterAndZoom },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null,
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "text", placeholder: _translations_default__WEBPACK_IMPORTED_MODULE_2__["default"].searchIdea, value: this.state.ideaSearchInput, onChange: this.handleIdeaSearchInputChange, disabled: !this.state.featureLayer || this.state.loading }),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { type: "submit", disabled: !this.state.featureLayer || this.state.loading }, _translations_default__WEBPACK_IMPORTED_MODULE_2__["default"].filterAndZoom))),
                this.state.featureLayer && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.Fragment, null,
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { className: "report-button", onClick: this.handleGenerateReport, disabled: this.state.loading || !this.state.ideaSearchInput || this.state.ideaSearchInput.trim() === '', title: this.state.loading || !this.state.ideaSearchInput || this.state.ideaSearchInput.trim() === ''
                            ? 'Digite um número de idea para gerar o relatório'
                            : 'Gerar relatório para o número de idea informado' }, _translations_default__WEBPACK_IMPORTED_MODULE_2__["default"].generateReport),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { className: "clear-button", onClick: this.handleClearFilter, disabled: this.state.loading }, _translations_default__WEBPACK_IMPORTED_MODULE_2__["default"].clearFilter))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9maWx0cmFyLWUtZ2VyYXItcmVsYXRvcmlvL2Rpc3QvcnVudGltZS93aWRnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlFQUFlO0lBQ2IsWUFBWSxFQUFFLGtCQUFrQjtJQUNoQyxRQUFRLEVBQUUsa0JBQWtCO0lBQzVCLGlCQUFpQixFQUFFLHdCQUF3QjtJQUMzQyxZQUFZLEVBQ1YsdUZBQXVGO0lBQ3pGLFVBQVUsRUFBRSw2QkFBNkI7SUFDekMsYUFBYSxFQUFFLFNBQVM7SUFDeEIsY0FBYyxFQUFFLGlCQUFpQjtJQUNqQyxXQUFXLEVBQUUsZUFBZTtJQUM1QixPQUFPLEVBQUUsZUFBZTtJQUN4QixXQUFXLEVBQUUsK0JBQStCO0NBQzdDOzs7Ozs7Ozs7Ozs7QUNaRDs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7QUNBQTs7O0tBR0s7QUFDTCxxQkFBdUIsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0puRCwwQ0FBMEM7QUFDMUMsZUFBZTtBQUNmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFrQkU7QUFDOEQ7QUFLNUM7QUFJZ0M7QUFVckMsTUFBTSxNQUFPLFNBQVEsNENBQUssQ0FBQyxhQUd6QztJQUhEOztRQVVFLFVBQUssR0FBRztZQUNOLGVBQWUsRUFBRSxFQUFFO1lBQ25CLFdBQVcs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QUksQ0FBQyxLQUFLLENBQUMsZUFBZSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsRUFDdkcsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRTs0QkFDbEcsQ0FBQyxDQUFDLGlEQUFpRDs0QkFDbkQsQ0FBQyxDQUFDLGlEQUFpRCxJQUVwRCw2REFBZSxDQUFDLGNBQWMsQ0FDeEI7b0JBQ1QsMkRBQ0UsU0FBUyxFQUFDLGNBQWMsRUFDeEIsT0FBTyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsRUFDL0IsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxJQUUzQiw2REFBZSxDQUFDLFdBQVcsQ0FDckIsQ0FDUixDQUNKLENBQ0csQ0FDRixDQUNQO0lBQ0gsQ0FBQztDQUNGO0FBRU8sU0FBUywyQkFBMkIsQ0FBQyxHQUFHLElBQUkscUJBQXVCLEdBQUcsR0FBRyxFQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvZmlsdHJhci1lLWdlcmFyLXJlbGF0b3Jpby9zcmMvcnVudGltZS90cmFuc2xhdGlvbnMvZGVmYXVsdC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtYXJjZ2lzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2ZpbHRyYXItZS1nZXJhci1yZWxhdG9yaW8vc3JjL3J1bnRpbWUvd2lkZ2V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XHJcbiAgX3dpZGdldExhYmVsOiAnRmlsdHJhciBlIEJhaXhhcicsXHJcbiAgYWRkTGF5ZXI6ICdBZGljaW9uYXIgQ2FtYWRhJyxcclxuICBmZWF0dXJlU2VydmljZVVybDogJ1VSTCBkbyBGZWF0dXJlIFNlcnZpY2UnLFxyXG4gIGluc3RydWN0aW9uczpcclxuICAgICdEaWdpdGUgdW0gbsO6bWVybyBuYSBjb2x1bmEgXCJpZGVhXCIgcGFyYSBmaWx0cmFyIGUgZGFyIHpvb20gbm8gcG9sw61nb25vIGNvcnJlc3BvbmRlbnRlLicsXHJcbiAgc2VhcmNoSWRlYTogJ1Blc3F1aXNhciBwb3IgbsO6bWVybyAoaWRlYSknLFxyXG4gIGZpbHRlckFuZFpvb206ICdGaWx0cmFyJyxcclxuICBnZW5lcmF0ZVJlcG9ydDogJ0dlcmFyIFJlbGF0w7NyaW8nLFxyXG4gIGNsZWFyRmlsdGVyOiAnTGltcGFyIEZpbHRybycsXHJcbiAgbG9hZGluZzogJ0NhcnJlZ2FuZG8uLi4nLFxyXG4gIGxheWVyTG9hZGVkOiAnQ2FtYWRhIGNhcnJlZ2FkYSBjb20gc3VjZXNzbyEnXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfYXJjZ2lzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvdHlwZS1idWlsdGlucyAqL1xyXG4vKiogQGpzeCBqc3ggKi9cclxuLyoqXHJcbiAgTGljZW5zaW5nXHJcblxyXG4gIENvcHlyaWdodCAyMDIyIEVzcmlcclxuXHJcbiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgWW91XHJcbiAgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXlcclxuICBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG4gIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yXHJcbiAgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nXHJcbiAgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG5cclxuICBBIGNvcHkgb2YgdGhlIGxpY2Vuc2UgaXMgYXZhaWxhYmxlIGluIHRoZSByZXBvc2l0b3J5J3NcclxuICBMSUNFTlNFIGZpbGUuXHJcbiovXHJcbmltcG9ydCB7IFJlYWN0LCB0eXBlIEFsbFdpZGdldFByb3BzLCBjc3MsIGpzeCB9IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHtcclxuICBsb2FkQXJjR0lTSlNBUElNb2R1bGVzLFxyXG4gIEppbXVNYXBWaWV3Q29tcG9uZW50LFxyXG4gIHR5cGUgSmltdU1hcFZpZXdcclxufSBmcm9tICdqaW11LWFyY2dpcydcclxuXHJcbmltcG9ydCB0eXBlIHsgSU1Db25maWcgfSBmcm9tICcuLi9jb25maWcnXHJcblxyXG5pbXBvcnQgZGVmYXVsdE1lc3NhZ2VzIGZyb20gJy4vdHJhbnNsYXRpb25zL2RlZmF1bHQnXHJcblxyXG5pbnRlcmZhY2UgSVN0YXRlIHtcclxuICBpZGVhU2VhcmNoSW5wdXQ6IHN0cmluZ1xyXG4gIGppbXVNYXBWaWV3OiBKaW11TWFwVmlld1xyXG4gIGZlYXR1cmVMYXllcjogX19lc3JpLkZlYXR1cmVMYXllclxyXG4gIGxvYWRpbmc6IGJvb2xlYW5cclxuICBpbml0aWFsRXh0ZW50OiBfX2VzcmkuRXh0ZW50XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdpZGdldCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8XHJcbkFsbFdpZGdldFByb3BzPElNQ29uZmlnPixcclxuSVN0YXRlXHJcbj4ge1xyXG4gIC8vIEdpdmUgdHlwZXMgdG8gdGhlIG1vZHVsZXMgd2UgaW1wb3J0IGZyb20gdGhlIEFyY0dJUyBBUEkgZm9yIEphdmFTY3JpcHRcclxuICAvLyB0byB0ZWxsIFR5cGVTY3JpcHQgd2hhdCB0eXBlcyB0aGV5IGFyZS5cclxuICBGZWF0dXJlTGF5ZXI6IHR5cGVvZiBfX2VzcmkuRmVhdHVyZUxheWVyXHJcbiAgUXVlcnk6IHR5cGVvZiBfX2VzcmkuUXVlcnlcclxuICBTcGF0aWFsUmVmZXJlbmNlOiB0eXBlb2YgX19lc3JpLlNwYXRpYWxSZWZlcmVuY2VcclxuXHJcbiAgc3RhdGUgPSB7XHJcbiAgICBpZGVhU2VhcmNoSW5wdXQ6ICcnLFxyXG4gICAgamltdU1hcFZpZXc6IG51bGwsXHJcbiAgICBmZWF0dXJlTGF5ZXI6IG51bGwsXHJcbiAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgIGluaXRpYWxFeHRlbnQ6IG51bGxcclxuICB9XHJcblxyXG4gIC8vIFVSTCBmaXhhIGRhIGNhbWFkYVxyXG4gIHJlYWRvbmx5IEZFQVRVUkVfU0VSVklDRV9VUkwgPSAnaHR0cHM6Ly9tZWlvYW1iaWVudGUuc2lzdGVtYXMubXBiYS5tcC5ici9zZXJ2ZXIvcmVzdC9zZXJ2aWNlcy9Ib3N0ZWQvYWxlcnRhc19yZWdpb25hbF9sYXBhL0ZlYXR1cmVTZXJ2ZXInXHJcbiAgXHJcbiAgLy8gVVJMIGRhIGZlcnJhbWVudGEgZGUgZ2VvcHJvY2Vzc2FtZW50b1xyXG4gIHJlYWRvbmx5IEdQX1NFUlZJQ0VfVVJMID0gJ2h0dHBzOi8vbWVpb2FtYmllbnRlLnNpc3RlbWFzLm1wYmEubXAuYnIvc2VydmVyL3Jlc3Qvc2VydmljZXMvdGVzdGVvdXRwdXQvcHJvY2Vzc2FyYWxlcnRhX2lkZWEvR1BTZXJ2ZXInXHJcbiAgXHJcbiAgLy8gTm9tZSBkYSB0YXNrIGVzcGVjw61maWNhIGRlbnRybyBkYSBHUFxyXG4gIHJlYWRvbmx5IEdQX1RBU0tfTkFNRSA9ICdQcm9jZXNzYW1lbnRvIGRlIGFsZXJ0YXMnXHJcblxyXG4gIC8vIEZ1bsOnw6NvIGNoYW1hZGEgcXVhbmRvIG8gdmFsb3IgZGEgcGVzcXVpc2EgbXVkYVxyXG4gIGhhbmRsZUlkZWFTZWFyY2hJbnB1dENoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGlkZWFTZWFyY2hJbnB1dDogZXZlbnQudGFyZ2V0LnZhbHVlXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgLy8gQ2FycmVnYSBhIGNhbWFkYSBhdXRvbWF0aWNhbWVudGUgcXVhbmRvIG8gY29tcG9uZW50ZSDDqSBtb250YWRvIG91IG8gbWFwYSBlc3TDoSBkaXNwb27DrXZlbFxyXG4gIGNvbXBvbmVudERpZFVwZGF0ZSA9IChwcmV2UHJvcHMsIHByZXZTdGF0ZSkgPT4ge1xyXG4gICAgaWYgKHRoaXMuc3RhdGUuamltdU1hcFZpZXcgJiYgIXRoaXMuc3RhdGUuZmVhdHVyZUxheWVyICYmICFwcmV2U3RhdGUuamltdU1hcFZpZXcpIHtcclxuICAgICAgLy8gU2FsdmEgYSB2aXN1YWxpemHDp8OjbyBpbmljaWFsIHF1YW5kbyBvIG1hcGEgw6kgZGV0ZWN0YWRvIHBlbGEgcHJpbWVpcmEgdmV6XHJcbiAgICAgIGlmICh0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcgJiYgIXRoaXMuc3RhdGUuaW5pdGlhbEV4dGVudCkge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRFeHRlbnQgPSB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcuZXh0ZW50XHJcbiAgICAgICAgaWYgKGN1cnJlbnRFeHRlbnQpIHtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpbml0aWFsRXh0ZW50OiBjdXJyZW50RXh0ZW50LmNsb25lKClcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMubG9hZEZlYXR1cmVMYXllcigpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBDYXJyZWdhIGEgY2FtYWRhIGRlIGZlYXR1cmUgc2VydmljZVxyXG4gIGxvYWRGZWF0dXJlTGF5ZXIgPSAoKSA9PiB7XHJcbiAgICBpZiAoIXRoaXMuc3RhdGUuamltdU1hcFZpZXcpIHtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUgfSlcclxuXHJcbiAgICBsb2FkQXJjR0lTSlNBUElNb2R1bGVzKFtcclxuICAgICAgJ2VzcmkvbGF5ZXJzL0ZlYXR1cmVMYXllcicsXHJcbiAgICAgICdlc3JpL2dlb21ldHJ5L1NwYXRpYWxSZWZlcmVuY2UnXHJcbiAgICBdKS50aGVuKChtb2R1bGVzKSA9PiB7XHJcbiAgICAgIFt0aGlzLkZlYXR1cmVMYXllciwgdGhpcy5TcGF0aWFsUmVmZXJlbmNlXSA9IG1vZHVsZXNcclxuXHJcbiAgICAgIC8vIENyaWEgYSBjYW1hZGEgY29tIGEgVVJMIGZpeGFcclxuICAgICAgY29uc3QgbGF5ZXIgPSBuZXcgdGhpcy5GZWF0dXJlTGF5ZXIoe1xyXG4gICAgICAgIHVybDogdGhpcy5GRUFUVVJFX1NFUlZJQ0VfVVJMXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICAvLyBBZGljaW9uYSBhIGNhbWFkYSBhbyBtYXBhXHJcbiAgICAgIHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldy5tYXAuYWRkKGxheWVyKVxyXG5cclxuICAgICAgLy8gQWd1YXJkYSBhIGNhbWFkYSBzZXIgY3JpYWRhXHJcbiAgICAgIGxheWVyLm9uKCdsYXllcnZpZXctY3JlYXRlJywgKCkgPT4ge1xyXG4gICAgICAgIC8vIFNhbHZhIGEgdmlzdWFsaXphw6fDo28gaW5pY2lhbCBkbyBtYXBhIHNlIGFpbmRhIG7Do28gZm9pIHNhbHZhXHJcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmluaXRpYWxFeHRlbnQgJiYgdGhpcy5zdGF0ZS5qaW11TWFwVmlldyAmJiB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcpIHtcclxuICAgICAgICAgIGNvbnN0IGN1cnJlbnRFeHRlbnQgPSB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcuZXh0ZW50XHJcbiAgICAgICAgICBpZiAoY3VycmVudEV4dGVudCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICBmZWF0dXJlTGF5ZXI6IGxheWVyLFxyXG4gICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGluaXRpYWxFeHRlbnQ6IGN1cnJlbnRFeHRlbnQuY2xvbmUoKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgZmVhdHVyZUxheWVyOiBsYXllcixcclxuICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgZmVhdHVyZUxheWVyOiBsYXllcixcclxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgbGF5ZXIub24oJ2xheWVydmlldy1jcmVhdGUtZXJyb3InLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJybyBhbyBjYXJyZWdhciBhIGNhbWFkYScpXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgLy8gRnVuw6fDo28gcGFyYSBmaWx0cmFyIGUgZGFyIHpvb20gbm8gcG9sw61nb25vIGJhc2VhZG8gbmEgcGVzcXVpc2FcclxuICBoYW5kbGVGaWx0ZXJBbmRab29tID0gYXN5bmMgKGV2dCkgPT4ge1xyXG4gICAgZXZ0LnByZXZlbnREZWZhdWx0KClcclxuXHJcbiAgICAvLyBDYXNvcyBkZSBlcnJvXHJcbiAgICBpZiAoIXRoaXMuc3RhdGUuamltdU1hcFZpZXcpIHtcclxuICAgICAgYWxlcnQoJ1BvciBmYXZvciwgY29uZmlndXJlIHVtIG1hcGEgbm8gd2lkZ2V0LicpXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgaWYgKCF0aGlzLnN0YXRlLmZlYXR1cmVMYXllcikge1xyXG4gICAgICBhbGVydCgnQSBjYW1hZGEgYWluZGEgbsOjbyBmb2kgY2FycmVnYWRhLiBBZ3VhcmRlLi4uJylcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5pZGVhU2VhcmNoSW5wdXQgPT09ICcnIHx8IHRoaXMuc3RhdGUuaWRlYVNlYXJjaElucHV0LnRyaW0oKSA9PT0gJycpIHtcclxuICAgICAgYWxlcnQoJ1BvciBmYXZvciwgZGlnaXRlIHVtIG7Dum1lcm8gcGFyYSBwZXNxdWlzYXIgbmEgY29sdW5hIGlkZWEuJylcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUgfSlcclxuXHJcbiAgICAvLyBDYXJyZWdhIG9zIG3Ds2R1bG9zIG5lY2Vzc8Ohcmlvc1xyXG4gICAgbG9hZEFyY0dJU0pTQVBJTW9kdWxlcyhbXHJcbiAgICAgICdlc3JpL2xheWVycy9GZWF0dXJlTGF5ZXInLFxyXG4gICAgICAnZXNyaS9nZW9tZXRyeS9TcGF0aWFsUmVmZXJlbmNlJ1xyXG4gICAgXSkudGhlbigobW9kdWxlcykgPT4ge1xyXG4gICAgICBbdGhpcy5GZWF0dXJlTGF5ZXIsIHRoaXMuU3BhdGlhbFJlZmVyZW5jZV0gPSBtb2R1bGVzXHJcblxyXG4gICAgICBjb25zdCBsYXllciA9IHRoaXMuc3RhdGUuZmVhdHVyZUxheWVyXHJcbiAgICAgIGNvbnN0IHNlYXJjaFZhbHVlID0gdGhpcy5zdGF0ZS5pZGVhU2VhcmNoSW5wdXQudHJpbSgpXHJcbiAgICAgIFxyXG4gICAgICAvLyBFc2NhcGEgYXNwYXMgc2ltcGxlcyBwYXJhIGV2aXRhciBTUUwgaW5qZWN0aW9uXHJcbiAgICAgIGNvbnN0IGVzY2FwZWRWYWx1ZSA9IHNlYXJjaFZhbHVlLnJlcGxhY2UoLycvZywgXCInJ1wiKVxyXG5cclxuICAgICAgLy8gVmVyaWZpY2Egc2UgYSBjYW1hZGEgZXN0w6EgY2FycmVnYWRhIGUgb2J0w6ltIGluZm9ybWHDp8O1ZXMgZG9zIGNhbXBvc1xyXG4gICAgICAvLyBBZ3VhcmRhIGEgY2FtYWRhIGVzdGFyIGNvbXBsZXRhbWVudGUgY2FycmVnYWRhXHJcbiAgICAgIGNvbnN0IGNoZWNrQW5kUXVlcnkgPSAoKSA9PiB7XHJcbiAgICAgICAgLy8gTGlzdGEgZGUgcG9zc8OtdmVpcyBub21lcyBkZSBjb2x1bmEgKGNhc2UtaW5zZW5zaXRpdmUpXHJcbiAgICAgICAgY29uc3QgcG9zc2libGVGaWVsZE5hbWVzID0gWydpZGVhJywgJ0lERUEnLCAnSWRlYScsICdJRCcsICdpZCcsICdJZCddXHJcbiAgICAgICAgbGV0IGZpZWxkTmFtZSA9ICdpZGVhJyAvLyBQYWRyw6NvXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gVGVudGEgZW5jb250cmFyIG8gY2FtcG8gY29ycmV0b1xyXG4gICAgICAgIGlmIChsYXllci5maWVsZHMgJiYgbGF5ZXIuZmllbGRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIGNvbnN0IGZvdW5kRmllbGQgPSBsYXllci5maWVsZHMuZmluZChmaWVsZCA9PiBcclxuICAgICAgICAgICAgcG9zc2libGVGaWVsZE5hbWVzLmluY2x1ZGVzKGZpZWxkLm5hbWUpXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgICBpZiAoZm91bmRGaWVsZCkge1xyXG4gICAgICAgICAgICBmaWVsZE5hbWUgPSBmb3VuZEZpZWxkLm5hbWVcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIFNlIG7Do28gZW5jb250cmFyLCB0ZW50YSBmYXplciB1bWEgYnVzY2EgY2FzZS1pbnNlbnNpdGl2ZVxyXG4gICAgICAgICAgICBjb25zdCBjYXNlSW5zZW5zaXRpdmVGaWVsZCA9IGxheWVyLmZpZWxkcy5maW5kKGZpZWxkID0+IFxyXG4gICAgICAgICAgICAgIGZpZWxkLm5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2lkZWEnXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgaWYgKGNhc2VJbnNlbnNpdGl2ZUZpZWxkKSB7XHJcbiAgICAgICAgICAgICAgZmllbGROYW1lID0gY2FzZUluc2Vuc2l0aXZlRmllbGQubmFtZVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIC8vIExvZyBkb3MgY2FtcG9zIGRpc3BvbsOtdmVpcyBwYXJhIGRlYnVnXHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NhbXBvcyBkaXNwb27DrXZlaXMgbmEgY2FtYWRhOicsIGxheWVyLmZpZWxkcy5tYXAoZiA9PiBmLm5hbWUpKVxyXG4gICAgICAgICAgICAgIC8vIFRlbnRhIHVzYXIgbyBwcmltZWlybyBjYW1wbyBxdWUgcGFyZWNlIHNlciB1bSBJRFxyXG4gICAgICAgICAgICAgIGNvbnN0IGlkRmllbGQgPSBsYXllci5maWVsZHMuZmluZChmaWVsZCA9PiBcclxuICAgICAgICAgICAgICAgIGZpZWxkLnR5cGUgPT09ICdlc3JpRmllbGRUeXBlU3RyaW5nJyB8fCBmaWVsZC50eXBlID09PSAnZXNyaUZpZWxkVHlwZUludGVnZXInIHx8IGZpZWxkLnR5cGUgPT09ICdlc3JpRmllbGRUeXBlRG91YmxlJ1xyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICBpZiAoaWRGaWVsZCkge1xyXG4gICAgICAgICAgICAgICAgZmllbGROYW1lID0gaWRGaWVsZC5uYW1lXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgVXNhbmRvIGNhbXBvOiAke2ZpZWxkTmFtZX1gKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ3JpYSB1bWEgcXVlcnkgcGFyYSBidXNjYXIgbyBwb2zDrWdvbm8gcGVsYSBjb2x1bmFcclxuICAgICAgICAvLyBVc2EgTElLRSBwYXJhIGJ1c2NhIG1haXMgZmxleMOtdmVsIGUgdHJhdGEgY29tbyBzdHJpbmdcclxuICAgICAgICBjb25zdCBxdWVyeSA9IGxheWVyLmNyZWF0ZVF1ZXJ5KClcclxuICAgICAgICBcclxuICAgICAgICAvLyBUZW50YSBkaWZlcmVudGVzIGFib3JkYWdlbnMgZGUgcXVlcnlcclxuICAgICAgICAvLyAxLiBCdXNjYSBleGF0YSBjb21vIHN0cmluZ1xyXG4gICAgICAgIC8vIDIuIEJ1c2NhIGNvbSBMSUtFIHBhcmEgdmFsb3JlcyBwYXJjaWFpc1xyXG4gICAgICAgIC8vIDMuIEJ1c2NhIGNvbW8gbsO6bWVybyAoc2UgbyB2YWxvciBmb3IgbnVtw6lyaWNvKVxyXG4gICAgICAgIGNvbnN0IGhhc1NwZWNpYWxDaGFycyA9IHNlYXJjaFZhbHVlLmluZGV4T2YoJy4nKSAhPT0gLTEgfHwgc2VhcmNoVmFsdWUuaW5kZXhPZignLycpICE9PSAtMVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFBhcmEgdmFsb3JlcyBjb20gY2FyYWN0ZXJlcyBlc3BlY2lhaXMgKGNvbW8gXCIwMDMuOS40MjcwNzQvMjAyNVwiKSwgdXNhIGFwZW5hcyBjb21vIHN0cmluZ1xyXG4gICAgICAgIGlmIChoYXNTcGVjaWFsQ2hhcnMpIHtcclxuICAgICAgICAgIHF1ZXJ5LndoZXJlID0gYCR7ZmllbGROYW1lfSA9ICcke2VzY2FwZWRWYWx1ZX0nYFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAvLyBTZSBmb3IgdW0gbsO6bWVybyBzaW1wbGVzLCB0ZW50YSBjb21vIG7Dum1lcm8gZSBjb21vIHN0cmluZ1xyXG4gICAgICAgICAgY29uc3QgaXNOdW1lcmljID0gIWlzTmFOKHBhcnNlRmxvYXQoc2VhcmNoVmFsdWUpKSAmJiBpc0Zpbml0ZShwYXJzZUZsb2F0KHNlYXJjaFZhbHVlKSlcclxuICAgICAgICAgIGlmIChpc051bWVyaWMpIHtcclxuICAgICAgICAgICAgcXVlcnkud2hlcmUgPSBgJHtmaWVsZE5hbWV9ID0gJHtzZWFyY2hWYWx1ZX0gT1IgJHtmaWVsZE5hbWV9ID0gJyR7ZXNjYXBlZFZhbHVlfSdgXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBxdWVyeS53aGVyZSA9IGAke2ZpZWxkTmFtZX0gPSAnJHtlc2NhcGVkVmFsdWV9J2BcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcXVlcnkucmV0dXJuR2VvbWV0cnkgPSB0cnVlXHJcblxyXG4gICAgICAgIC8vIEV4ZWN1dGEgYSBxdWVyeVxyXG4gICAgICAgIGxheWVyLnF1ZXJ5RmVhdHVyZXMocXVlcnkpLnRoZW4oKHJlc3VsdHMpID0+IHtcclxuICAgICAgICAgIGlmIChyZXN1bHRzLmZlYXR1cmVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAvLyBTZSBuw6NvIGVuY29udHJvdSwgdGVudGEgY29tIExJS0VcclxuICAgICAgICAgICAgY29uc3QgbGlrZVF1ZXJ5ID0gbGF5ZXIuY3JlYXRlUXVlcnkoKVxyXG4gICAgICAgICAgICBsaWtlUXVlcnkud2hlcmUgPSBgJHtmaWVsZE5hbWV9IExJS0UgJyUke2VzY2FwZWRWYWx1ZX0lJ2BcclxuICAgICAgICAgICAgbGlrZVF1ZXJ5LnJldHVybkdlb21ldHJ5ID0gdHJ1ZVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIGxheWVyLnF1ZXJ5RmVhdHVyZXMobGlrZVF1ZXJ5KS50aGVuKChsaWtlUmVzdWx0cykgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChsaWtlUmVzdWx0cy5mZWF0dXJlcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KGBOZW5odW0gcG9sw61nb25vIGVuY29udHJhZG8gY29tICR7ZmllbGROYW1lfSA9ICR7c2VhcmNoVmFsdWV9YClcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIC8vIFNlIGVuY29udHJvdSBjb20gTElLRSwgdXNhIG8gcHJpbWVpcm8gcmVzdWx0YWRvXHJcbiAgICAgICAgICAgICAgY29uc3QgZm91bmRHcmFwaGljID0gbGlrZVJlc3VsdHMuZmVhdHVyZXNbMF1cclxuICAgICAgICAgICAgICBjb25zdCBhY3R1YWxWYWx1ZSA9IGZvdW5kR3JhcGhpYy5hdHRyaWJ1dGVzW2ZpZWxkTmFtZV1cclxuICAgICAgICAgICAgICB0aGlzLmFwcGx5RmlsdGVyQW5kWm9vbShsYXllciwgZm91bmRHcmFwaGljLCBmaWVsZE5hbWUsIGFjdHVhbFZhbHVlKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8vIFNlIGVuY29udHJvdSwgYXBsaWNhIGZpbHRybyBlIHpvb21cclxuICAgICAgICAgIGNvbnN0IGZvdW5kR3JhcGhpYyA9IHJlc3VsdHMuZmVhdHVyZXNbMF1cclxuICAgICAgICAgIGNvbnN0IGFjdHVhbFZhbHVlID0gZm91bmRHcmFwaGljLmF0dHJpYnV0ZXNbZmllbGROYW1lXVxyXG4gICAgICAgICAgdGhpcy5hcHBseUZpbHRlckFuZFpvb20obGF5ZXIsIGZvdW5kR3JhcGhpYywgZmllbGROYW1lLCBhY3R1YWxWYWx1ZSlcclxuICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm8gYW8gcGVzcXVpc2FyIGZlYXR1cmVzOicsIGVycm9yKVxyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRGV0YWxoZXMgZG8gZXJybzonLCB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UsXHJcbiAgICAgICAgICAgIGRldGFpbHM6IGVycm9yLmRldGFpbHMsXHJcbiAgICAgICAgICAgIGZpZWxkTmFtZTogZmllbGROYW1lLFxyXG4gICAgICAgICAgICBzZWFyY2hWYWx1ZTogc2VhcmNoVmFsdWVcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC8vIFRlbnRhIG1vc3RyYXIgaW5mb3JtYcOnw7VlcyBtYWlzIMO6dGVpc1xyXG4gICAgICAgICAgbGV0IGVycm9yTWVzc2FnZSA9ICdFcnJvIGFvIHBlc3F1aXNhci4gJ1xyXG4gICAgICAgICAgaWYgKGxheWVyLmZpZWxkcyAmJiBsYXllci5maWVsZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBjb25zdCBmaWVsZE5hbWVzID0gbGF5ZXIuZmllbGRzLm1hcChmID0+IGYubmFtZSkuam9pbignLCAnKVxyXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UgKz0gYFxcblxcbkNhbXBvcyBkaXNwb27DrXZlaXM6ICR7ZmllbGROYW1lc31gXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlcnJvck1lc3NhZ2UgKz0gYFxcblxcblZlcmlmaXF1ZSBzZSBhIGNvbHVuYSBcIiR7ZmllbGROYW1lfVwiIGV4aXN0ZSBlIHNlIG8gdmFsb3IgXCIke3NlYXJjaFZhbHVlfVwiIGVzdMOhIGNvcnJldG8uYFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBhbGVydChlcnJvck1lc3NhZ2UpXHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSlcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvLyBTZSBhIGNhbWFkYSBqw6EgZXN0w6EgY2FycmVnYWRhLCBleGVjdXRhIGRpcmV0YW1lbnRlXHJcbiAgICAgIGlmIChsYXllci5sb2FkZWQpIHtcclxuICAgICAgICBjaGVja0FuZFF1ZXJ5KClcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBBZ3VhcmRhIGEgY2FtYWRhIGNhcnJlZ2FyXHJcbiAgICAgICAgbGF5ZXIud2hlbigoKSA9PiB7XHJcbiAgICAgICAgICBjaGVja0FuZFF1ZXJ5KClcclxuICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm8gYW8gY2FycmVnYXIgaW5mb3JtYcOnw7VlcyBkYSBjYW1hZGE6JywgZXJyb3IpXHJcbiAgICAgICAgICBhbGVydCgnRXJybyBhbyBjYXJyZWdhciBpbmZvcm1hw6fDtWVzIGRhIGNhbWFkYS4gVmVyaWZpcXVlIHNlIGEgY2FtYWRhIGVzdMOhIGFjZXNzw612ZWwuJylcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICAvLyBGdW7Dp8OjbyBhdXhpbGlhciBwYXJhIGFwbGljYXIgZmlsdHJvIGUgem9vbVxyXG4gIGFwcGx5RmlsdGVyQW5kWm9vbSA9IChsYXllciwgZ3JhcGhpYywgZmllbGROYW1lLCBhY3R1YWxWYWx1ZSkgPT4ge1xyXG4gICAgLy8gT2J0w6ltIG8gdmFsb3IgcmVhbCBkbyBhdHJpYnV0byBkbyBncmFwaGljXHJcbiAgICBjb25zdCBhdHRyaWJ1dGVWYWx1ZSA9IGdyYXBoaWMuYXR0cmlidXRlc1tmaWVsZE5hbWVdXHJcbiAgICBcclxuICAgIC8vIFNlIG8gdmFsb3IgbsOjbyBmb2kgcGFzc2FkbywgdXNhIG8gZG8gYXRyaWJ1dG9cclxuICAgIGNvbnN0IHZhbHVlVG9GaWx0ZXIgPSBhY3R1YWxWYWx1ZSAhPT0gdW5kZWZpbmVkID8gYWN0dWFsVmFsdWUgOiBhdHRyaWJ1dGVWYWx1ZVxyXG4gICAgXHJcbiAgICAvLyBFc2NhcGEgbyB2YWxvciBwYXJhIFNRTCAodHJhdGEgc3RyaW5ncywgbsO6bWVyb3MgZSBudWxsKVxyXG4gICAgbGV0IGRlZmluaXRpb25FeHByZXNzaW9uXHJcbiAgICBpZiAodmFsdWVUb0ZpbHRlciA9PT0gbnVsbCB8fCB2YWx1ZVRvRmlsdGVyID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgZGVmaW5pdGlvbkV4cHJlc3Npb24gPSBgJHtmaWVsZE5hbWV9IElTIE5VTExgXHJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZVRvRmlsdGVyID09PSAnbnVtYmVyJykge1xyXG4gICAgICBkZWZpbml0aW9uRXhwcmVzc2lvbiA9IGAke2ZpZWxkTmFtZX0gPSAke3ZhbHVlVG9GaWx0ZXJ9YFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gw4kgdW1hIHN0cmluZywgcHJlY2lzYSBlc2NhcGFyIGFzcGFzIHNpbXBsZXNcclxuICAgICAgY29uc3QgZXNjYXBlZFZhbHVlID0gU3RyaW5nKHZhbHVlVG9GaWx0ZXIpLnJlcGxhY2UoLycvZywgXCInJ1wiKVxyXG4gICAgICBkZWZpbml0aW9uRXhwcmVzc2lvbiA9IGAke2ZpZWxkTmFtZX0gPSAnJHtlc2NhcGVkVmFsdWV9J2BcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc29sZS5sb2coYEFwbGljYW5kbyBmaWx0cm86ICR7ZmllbGROYW1lfSA9ICR7dmFsdWVUb0ZpbHRlcn1gKVxyXG4gICAgY29uc29sZS5sb2coYERlZmluaXRpb24gRXhwcmVzc2lvbjogJHtkZWZpbml0aW9uRXhwcmVzc2lvbn1gKVxyXG5cclxuICAgIC8vIEFwbGljYSBvIGZpbHRybyBuYSBjYW1hZGEgdXNhbmRvIGRlZmluaXRpb25FeHByZXNzaW9uXHJcbiAgICAvLyBJc3NvIMOpIG8gbcOpdG9kbyBjb3JyZXRvIHBhcmEgZmlsdHJhciB1bWEgRmVhdHVyZUxheWVyIGUgb2N1bHRhciBvdXRyb3MgcG9sw61nb25vc1xyXG4gICAgbGF5ZXIuZGVmaW5pdGlvbkV4cHJlc3Npb24gPSBkZWZpbml0aW9uRXhwcmVzc2lvblxyXG4gICAgXHJcbiAgICAvLyBGb3LDp2EgYSBhdHVhbGl6YcOnw6NvIGltZWRpYXRhIGRhIGNhbWFkYSBwYXJhIGFwbGljYXIgbyBmaWx0cm9cclxuICAgIGxheWVyLnJlZnJlc2goKVxyXG4gICAgXHJcbiAgICBjb25zb2xlLmxvZygnRmlsdHJvIGFwbGljYWRvLiBBIGNhbWFkYSBkZXZlIG1vc3RyYXIgQVBFTkFTIG8gcG9sw61nb25vIHNlbGVjaW9uYWRvJylcclxuICAgIFxyXG4gICAgLy8gQWd1YXJkYSBxdWUgYSBjYW1hZGEgZXN0ZWphIGNvbXBsZXRhbWVudGUgY2FycmVnYWRhIGFudGVzIGRlIGFwbGljYXIgbyBmaWx0cm9cclxuICAgIGlmIChsYXllci5sb2FkZWQpIHtcclxuICAgICAgLy8gQSBjYW1hZGEgasOhIGVzdMOhIGNhcnJlZ2FkYSwgYXBsaWNhIG8gZmlsdHJvIGRpcmV0YW1lbnRlXHJcbiAgICAgIHRoaXMuYXBwbHlab29tQWZ0ZXJGaWx0ZXIobGF5ZXIsIGdyYXBoaWMpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBBZ3VhcmRhIGEgY2FtYWRhIGNhcnJlZ2FyIHByaW1laXJvXHJcbiAgICAgIGxheWVyLndoZW4oKCkgPT4ge1xyXG4gICAgICAgIC8vIEFwbGljYSBvIGZpbHRybyBub3ZhbWVudGUgYXDDs3MgY2FycmVnYXIgKGdhcmFudGlhKVxyXG4gICAgICAgIGxheWVyLmRlZmluaXRpb25FeHByZXNzaW9uID0gZGVmaW5pdGlvbkV4cHJlc3Npb25cclxuICAgICAgICBsYXllci5yZWZyZXNoKClcclxuICAgICAgICB0aGlzLmFwcGx5Wm9vbUFmdGVyRmlsdGVyKGxheWVyLCBncmFwaGljKVxyXG4gICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvIGFvIGFndWFyZGFyIGNhbWFkYTonLCBlcnJvcilcclxuICAgICAgICAvLyBNZXNtbyBhc3NpbSB0ZW50YSBhcGxpY2FyIG8gem9vbVxyXG4gICAgICAgIHRoaXMuYXBwbHlab29tQWZ0ZXJGaWx0ZXIobGF5ZXIsIGdyYXBoaWMpXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBGdW7Dp8OjbyBhdXhpbGlhciBwYXJhIGFwbGljYXIgem9vbSBhcMOzcyBvIGZpbHRyb1xyXG4gIGFwcGx5Wm9vbUFmdGVyRmlsdGVyID0gKGxheWVyLCBncmFwaGljKSA9PiB7XHJcbiAgICAvLyBBZ3VhcmRhIHVtIHBvdWNvIHBhcmEgZ2FyYW50aXIgcXVlIG8gZmlsdHJvIHNlamEgcHJvY2Vzc2FkbyBwZWxhIGNhbWFkYVxyXG4gICAgLy8gTyBkZWZpbml0aW9uRXhwcmVzc2lvbiBwcmVjaXNhIGRlIHRlbXBvIHBhcmEgc2VyIHByb2Nlc3NhZG9cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAvLyBEw6Egem9vbSBubyBwb2zDrWdvbm8gZW5jb250cmFkb1xyXG4gICAgICBpZiAoZ3JhcGhpYy5nZW9tZXRyeSkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldy5nb1RvKHtcclxuICAgICAgICAgIHRhcmdldDogZ3JhcGhpYy5nZW9tZXRyeSxcclxuICAgICAgICAgIHpvb206IDE1XHJcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSlcclxuICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm8gYW8gZGFyIHpvb206JywgZXJyb3IpXHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSlcclxuICAgICAgICB9KVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KVxyXG4gICAgICB9XHJcbiAgICB9LCA1MDApXHJcbiAgfVxyXG5cclxuICAvLyBGdW7Dp8OjbyBwYXJhIGxpbXBhciBvIGZpbHRyb1xyXG4gIGhhbmRsZUNsZWFyRmlsdGVyID0gKCkgPT4ge1xyXG4gICAgaWYgKHRoaXMuc3RhdGUuZmVhdHVyZUxheWVyKSB7XHJcbiAgICAgIC8vIFJlbW92ZSBvIGZpbHRybyBkZWZpbmluZG8gZGVmaW5pdGlvbkV4cHJlc3Npb24gY29tbyB2YXppb1xyXG4gICAgICB0aGlzLnN0YXRlLmZlYXR1cmVMYXllci5kZWZpbml0aW9uRXhwcmVzc2lvbiA9ICcnXHJcbiAgICAgIHRoaXMuc3RhdGUuZmVhdHVyZUxheWVyLnJlZnJlc2goKVxyXG4gICAgICBjb25zb2xlLmxvZygnRmlsdHJvIHJlbW92aWRvJylcclxuICAgICAgXHJcbiAgICAgIC8vIFJlc3RhdXJhIGEgdmlzdWFsaXphw6fDo28gaW5pY2lhbCBkbyBtYXBhXHJcbiAgICAgIGlmICh0aGlzLnN0YXRlLmppbXVNYXBWaWV3ICYmIHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldykge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmluaXRpYWxFeHRlbnQpIHtcclxuICAgICAgICAgIC8vIFJlc3RhdXJhIGEgZXh0ZW5zw6NvIGluaWNpYWwgc2FsdmFcclxuICAgICAgICAgIHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldy5nb1RvKHRoaXMuc3RhdGUuaW5pdGlhbEV4dGVudCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdWaXN1YWxpemHDp8OjbyBpbmljaWFsIHJlc3RhdXJhZGEnKVxyXG4gICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm8gYW8gcmVzdGF1cmFyIHZpc3VhbGl6YcOnw6NvIGluaWNpYWw6JywgZXJyb3IpXHJcbiAgICAgICAgICAgIC8vIFNlIGZhbGhhciwgdGVudGEgZmF6ZXIgem9vbSBwYXJhIGEgY2FtYWRhIGNvbXBsZXRhXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmZlYXR1cmVMYXllciAmJiB0aGlzLnN0YXRlLmZlYXR1cmVMYXllci5mdWxsRXh0ZW50KSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3LmdvVG8odGhpcy5zdGF0ZS5mZWF0dXJlTGF5ZXIuZnVsbEV4dGVudClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLy8gU2UgbsOjbyB0aXZlciBleHRlbnPDo28gaW5pY2lhbCBzYWx2YSwgdGVudGEgZmF6ZXIgem9vbSBwYXJhIGEgY2FtYWRhIGNvbXBsZXRhXHJcbiAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5mZWF0dXJlTGF5ZXIgJiYgdGhpcy5zdGF0ZS5mZWF0dXJlTGF5ZXIuZnVsbEV4dGVudCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcuZ29Ubyh0aGlzLnN0YXRlLmZlYXR1cmVMYXllci5mdWxsRXh0ZW50KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnWm9vbSBwYXJhIGNhbWFkYSBjb21wbGV0YSBhcGxpY2FkbycpXHJcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm8gYW8gZmF6ZXIgem9vbSBwYXJhIGNhbWFkYSBjb21wbGV0YTonLCBlcnJvcilcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGlkZWFTZWFyY2hJbnB1dDogJydcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIEZ1bsOnw6NvIHBhcmEgZ2VyYXIgcmVsYXTDs3JpbyB1c2FuZG8gYSBmZXJyYW1lbnRhIGRlIGdlb3Byb2Nlc3NhbWVudG9cclxuICBoYW5kbGVHZW5lcmF0ZVJlcG9ydCA9IGFzeW5jICgpID0+IHtcclxuICAgIC8vIFZhbGlkYcOnw7Vlc1xyXG4gICAgaWYgKHRoaXMuc3RhdGUuaWRlYVNlYXJjaElucHV0ID09PSAnJyB8fCB0aGlzLnN0YXRlLmlkZWFTZWFyY2hJbnB1dC50cmltKCkgPT09ICcnKSB7XHJcbiAgICAgIGFsZXJ0KCdQb3IgZmF2b3IsIGRpZ2l0ZSB1bSBuw7ptZXJvIGRlIGlkZWEgcGFyYSBnZXJhciBvIHJlbGF0w7NyaW8uJylcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaWRlYU51bWJlciA9IHRoaXMuc3RhdGUuaWRlYVNlYXJjaElucHV0LnRyaW0oKVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUgfSlcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zb2xlLmxvZygnSW5pY2lhbmRvIGdlcmHDp8OjbyBkZSByZWxhdMOzcmlvIHBhcmEgaWRlYTonLCBpZGVhTnVtYmVyKVxyXG4gICAgICBcclxuICAgICAgLy8gQ2FycmVnYSBJZGVudGl0eU1hbmFnZXIgcGFyYSBvYnRlciB0b2tlbiBkZSBhdXRlbnRpY2HDp8Ojb1xyXG4gICAgICBjb25zb2xlLmxvZygnQ2FycmVnYW5kbyBJZGVudGl0eU1hbmFnZXIgcGFyYSBhdXRlbnRpY2HDp8Ojby4uLicpXHJcbiAgICAgIGNvbnN0IGlkZW50aXR5TW9kdWxlcyA9IGF3YWl0IGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMoW1xyXG4gICAgICAgICdlc3JpL2lkZW50aXR5L0lkZW50aXR5TWFuYWdlcidcclxuICAgICAgXSlcclxuICAgICAgY29uc3QgW0lkZW50aXR5TWFuYWdlcl0gPSBpZGVudGl0eU1vZHVsZXNcclxuICAgICAgXHJcbiAgICAgIC8vIE9idMOpbSBvIHRva2VuIHBhcmEgYSBVUkwgZG8gc2VydmnDp29cclxuICAgICAgbGV0IHRva2VuID0gbnVsbFxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGNyZWRlbnRpYWwgPSBJZGVudGl0eU1hbmFnZXIuZmluZENyZWRlbnRpYWwodGhpcy5HUF9TRVJWSUNFX1VSTClcclxuICAgICAgICBpZiAoY3JlZGVudGlhbCAmJiBjcmVkZW50aWFsLnRva2VuKSB7XHJcbiAgICAgICAgICB0b2tlbiA9IGNyZWRlbnRpYWwudG9rZW5cclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdUb2tlbiBlbmNvbnRyYWRvIHZpYSBJZGVudGl0eU1hbmFnZXInKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAvLyBUZW50YSBnZXJhciB0b2tlbiBhdXRvbWF0aWNhbWVudGVcclxuICAgICAgICAgIGNvbnN0IHNlcnZlckluZm8gPSBJZGVudGl0eU1hbmFnZXIuZmluZFNlcnZlckluZm8odGhpcy5HUF9TRVJWSUNFX1VSTClcclxuICAgICAgICAgIGlmIChzZXJ2ZXJJbmZvKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdPYnRlbmRvIHRva2VuIGF1dG9tYXRpY2FtZW50ZS4uLicpXHJcbiAgICAgICAgICAgIGF3YWl0IElkZW50aXR5TWFuYWdlci5jaGVja1NpZ25JblN0YXR1cyh0aGlzLkdQX1NFUlZJQ0VfVVJMKVxyXG4gICAgICAgICAgICBjb25zdCB1cGRhdGVkQ3JlZGVudGlhbCA9IElkZW50aXR5TWFuYWdlci5maW5kQ3JlZGVudGlhbCh0aGlzLkdQX1NFUlZJQ0VfVVJMKVxyXG4gICAgICAgICAgICBpZiAodXBkYXRlZENyZWRlbnRpYWwgJiYgdXBkYXRlZENyZWRlbnRpYWwudG9rZW4pIHtcclxuICAgICAgICAgICAgICB0b2tlbiA9IHVwZGF0ZWRDcmVkZW50aWFsLnRva2VuXHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1Rva2VuIG9idGlkbyBhdXRvbWF0aWNhbWVudGUnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoICh0b2tlbkVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKCdFcnJvIGFvIG9idGVyIHRva2VuLCB0ZW50YW5kbyBzZW0gYXV0ZW50aWNhw6fDo286JywgdG9rZW5FcnJvcilcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLy8gRnVuw6fDo28gYXV4aWxpYXIgcGFyYSBhZGljaW9uYXIgdG9rZW4gw6BzIFVSTHNcclxuICAgICAgY29uc3QgYWRkVG9rZW5Ub1VybCA9ICh1cmwpID0+IHtcclxuICAgICAgICBpZiAoIXRva2VuKSB7XHJcbiAgICAgICAgICByZXR1cm4gdXJsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCB1cmxPYmogPSBuZXcgVVJMKHVybClcclxuICAgICAgICAgIHVybE9iai5zZWFyY2hQYXJhbXMuc2V0KCd0b2tlbicsIHRva2VuKVxyXG4gICAgICAgICAgcmV0dXJuIHVybE9iai50b1N0cmluZygpXHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgLy8gU2UgYSBVUkwgbsOjbyBmb3IgYWJzb2x1dGEsIHRyYXRhIGNvbW8gc3RyaW5nXHJcbiAgICAgICAgICBjb25zdCBzZXBhcmF0b3IgPSB1cmwuaW5jbHVkZXMoJz8nKSA/ICcmJyA6ICc/J1xyXG4gICAgICAgICAgcmV0dXJuIGAke3VybH0ke3NlcGFyYXRvcn10b2tlbj0ke2VuY29kZVVSSUNvbXBvbmVudCh0b2tlbil9YFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLy8gUHJpbWVpcm8sIHZhbW9zIG9idGVyIGluZm9ybWHDp8O1ZXMgc29icmUgYSB0YXNrIGVzcGVjw61maWNhIHBhcmEgZGVzY29icmlyIG9zIHBhcsOibWV0cm9zXHJcbiAgICAgIGNvbnNvbGUubG9nKCdPYnRlbmRvIGluZm9ybWHDp8O1ZXMgZGEgdGFzayBlc3BlY8OtZmljYS4uLicpXHJcbiAgICAgIGNvbnN0IHRhc2tOYW1lRW5jb2RlZCA9IGVuY29kZVVSSUNvbXBvbmVudCh0aGlzLkdQX1RBU0tfTkFNRSlcclxuICAgICAgY29uc3QgaW5mb1VybCA9IGFkZFRva2VuVG9VcmwoYCR7dGhpcy5HUF9TRVJWSUNFX1VSTH0vJHt0YXNrTmFtZUVuY29kZWR9P2Y9anNvbmApXHJcbiAgICAgIGNvbnNvbGUubG9nKCdVUkwgZGUgaW5mb3JtYcOnw7VlcyBkYSB0YXNrOicsIGluZm9VcmwpXHJcbiAgICAgIFxyXG4gICAgICAvLyBUZW50YSBvYnRlciBpbmZvcm1hw6fDtWVzIGRhIHRhc2sgZXNwZWPDrWZpY2EgcHJpbWVpcm9cclxuICAgICAgbGV0IGdwSW5mb1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHRhc2tJbmZvUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChpbmZvVXJsKVxyXG4gICAgICAgIGlmICh0YXNrSW5mb1Jlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICBncEluZm8gPSBhd2FpdCB0YXNrSW5mb1Jlc3BvbnNlLmpzb24oKVxyXG4gICAgICAgICAgY29uc29sZS5sb2coJ0luZm9ybWHDp8O1ZXMgZGEgdGFzayBlc3BlY8OtZmljYSBvYnRpZGFzIGNvbSBzdWNlc3NvJylcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdJbmZvcm1hw6fDtWVzIGNvbXBsZXRhcyBkYSB0YXNrOicsIEpTT04uc3RyaW5naWZ5KGdwSW5mbywgbnVsbCwgMikpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vIFNlIGZhbGhhciwgdGVudGEgZGEgR1AgZ2VyYWxcclxuICAgICAgICAgIGNvbnNvbGUud2FybignTsOjbyBmb2kgcG9zc8OtdmVsIG9idGVyIGluZm9ybWHDp8O1ZXMgZGEgdGFzaywgdGVudGFuZG8gZGEgR1AgZ2VyYWwuLi4nKVxyXG4gICAgICAgICAgY29uc3QgZ3BJbmZvVXJsID0gYWRkVG9rZW5Ub1VybChgJHt0aGlzLkdQX1NFUlZJQ0VfVVJMfT9mPWpzb25gKVxyXG4gICAgICAgICAgY29uc3QgZ3BJbmZvUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChncEluZm9VcmwpXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGlmICghZ3BJbmZvUmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvIGFvIG9idGVyIGluZm9ybWHDp8O1ZXM6ICR7dGFza0luZm9SZXNwb25zZS5zdGF0dXN9ICR7dGFza0luZm9SZXNwb25zZS5zdGF0dXNUZXh0fWApXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGdwSW5mbyA9IGF3YWl0IGdwSW5mb1Jlc3BvbnNlLmpzb24oKVxyXG4gICAgICAgICAgY29uc29sZS5sb2coJ1VzYW5kbyBpbmZvcm1hw6fDtWVzIGRhIEdQIGdlcmFsJylcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdJbmZvcm1hw6fDtWVzIGNvbXBsZXRhcyBkYSBHUDonLCBKU09OLnN0cmluZ2lmeShncEluZm8sIG51bGwsIDIpKVxyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoaW5mb0Vycm9yKSB7XHJcbiAgICAgICAgLy8gU2UgZmFsaGFyLCB0ZW50YSBkYSBHUCBnZXJhbFxyXG4gICAgICAgIGNvbnNvbGUud2FybignRXJybyBhbyBvYnRlciBpbmZvcm1hw6fDtWVzIGRhIHRhc2ssIHRlbnRhbmRvIGRhIEdQIGdlcmFsLi4uJywgaW5mb0Vycm9yKVxyXG4gICAgICAgIGNvbnN0IGdwSW5mb1VybCA9IGFkZFRva2VuVG9VcmwoYCR7dGhpcy5HUF9TRVJWSUNFX1VSTH0/Zj1qc29uYClcclxuICAgICAgICBjb25zdCBncEluZm9SZXNwb25zZSA9IGF3YWl0IGZldGNoKGdwSW5mb1VybClcclxuICAgICAgICBncEluZm8gPSBhd2FpdCBncEluZm9SZXNwb25zZS5qc29uKClcclxuICAgICAgICBjb25zb2xlLmxvZygnVXNhbmRvIGluZm9ybWHDp8O1ZXMgZGEgR1AgZ2VyYWwgKGZhbGxiYWNrKScpXHJcbiAgICAgICAgY29uc29sZS5sb2coJ0luZm9ybWHDp8O1ZXMgY29tcGxldGFzIGRhIEdQOicsIEpTT04uc3RyaW5naWZ5KGdwSW5mbywgbnVsbCwgMikpXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8vIERlc2NvYnJlIHF1YWwgw6kgbyBwYXLDom1ldHJvIGRlIGVudHJhZGFcclxuICAgICAgLy8gUFJJT1JJREFERTogTyB3aWRnZXQgcmVjZWJlIG8gbsO6bWVybyBkZSBcImlkZWFcIiwgZW50w6NvIGRldmVtb3MgcHJvY3VyYXIgcG9yIHBhcsOibWV0cm9zIHJlbGFjaW9uYWRvcyBhIFwiaWRlYVwiXHJcbiAgICAgIGxldCBwYXJhbU5hbWUgPSAnaWRlYSdcclxuICAgICAgbGV0IHBhcmFtSW5mbyA9IG51bGxcclxuICAgICAgaWYgKGdwSW5mby5wYXJhbWV0ZXJzICYmIEFycmF5LmlzQXJyYXkoZ3BJbmZvLnBhcmFtZXRlcnMpKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1BhcsOibWV0cm9zIGRpc3BvbsOtdmVpczonLCBncEluZm8ucGFyYW1ldGVycy5tYXAocCA9PiAoe1xyXG4gICAgICAgICAgbmFtZTogcC5uYW1lLFxyXG4gICAgICAgICAgZGF0YVR5cGU6IHAuZGF0YVR5cGUsXHJcbiAgICAgICAgICBkaXJlY3Rpb246IHAuZGlyZWN0aW9uLFxyXG4gICAgICAgICAgcGFyYW1ldGVyVHlwZTogcC5wYXJhbWV0ZXJUeXBlXHJcbiAgICAgICAgfSkpKVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFBSSU9SSURBREUgMTogUHJvY3VyYSBleGF0YW1lbnRlIHBvciBcImlkZWFcIiAoY2FzZS1pbnNlbnNpdGl2ZSlcclxuICAgICAgICBjb25zdCBleGFjdElkZWFQYXJhbSA9IGdwSW5mby5wYXJhbWV0ZXJzLmZpbmQocCA9PiBcclxuICAgICAgICAgIHAubmFtZSAmJiBwLm5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2lkZWEnXHJcbiAgICAgICAgKVxyXG4gICAgICAgIGlmIChleGFjdElkZWFQYXJhbSkge1xyXG4gICAgICAgICAgcGFyYW1OYW1lID0gZXhhY3RJZGVhUGFyYW0ubmFtZVxyXG4gICAgICAgICAgcGFyYW1JbmZvID0gZXhhY3RJZGVhUGFyYW1cclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdQYXLDom1ldHJvIFwiaWRlYVwiIGVuY29udHJhZG8gZXhhdGFtZW50ZSEnKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAvLyBQUklPUklEQURFIDI6IFByb2N1cmEgcG9yIHBhcsOibWV0cm9zIHF1ZSBjb250ZW5oYW0gXCJpZGVhXCIgbm8gbm9tZVxyXG4gICAgICAgICAgY29uc3QgaWRlYVBhcmFtID0gZ3BJbmZvLnBhcmFtZXRlcnMuZmluZChwID0+IFxyXG4gICAgICAgICAgICBwLm5hbWUgJiYgcC5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ2lkZWEnKVxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICAgaWYgKGlkZWFQYXJhbSkge1xyXG4gICAgICAgICAgICBwYXJhbU5hbWUgPSBpZGVhUGFyYW0ubmFtZVxyXG4gICAgICAgICAgICBwYXJhbUluZm8gPSBpZGVhUGFyYW1cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1BhcsOibWV0cm8gY29udGVuZG8gXCJpZGVhXCIgZW5jb250cmFkbzonLCBpZGVhUGFyYW0ubmFtZSlcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIFBSSU9SSURBREUgMzogUHJvY3VyYSBwb3IgcGFyw6JtZXRyb3MgcXVlIGNvbnRlbmhhbSBcImlkXCIgKG1hcyBuw6NvIFwidmFsb3JfYWxlcnRhXCIgb3Ugb3V0cm9zKVxyXG4gICAgICAgICAgICBjb25zdCBpZFBhcmFtID0gZ3BJbmZvLnBhcmFtZXRlcnMuZmluZChwID0+IFxyXG4gICAgICAgICAgICAgIHAubmFtZSAmJiBcclxuICAgICAgICAgICAgICBwLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcygnaWQnKSAmJiBcclxuICAgICAgICAgICAgICAhcC5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ3ZhbG9yJykgJiZcclxuICAgICAgICAgICAgICAhcC5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ2FsZXJ0YScpXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgaWYgKGlkUGFyYW0pIHtcclxuICAgICAgICAgICAgICBwYXJhbU5hbWUgPSBpZFBhcmFtLm5hbWVcclxuICAgICAgICAgICAgICBwYXJhbUluZm8gPSBpZFBhcmFtXHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1BhcsOibWV0cm8gY29udGVuZG8gXCJpZFwiIGVuY29udHJhZG86JywgaWRQYXJhbS5uYW1lKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIC8vIFBSSU9SSURBREUgNDogU2UgbsOjbyBlbmNvbnRyYXIgbmFkYSByZWxhY2lvbmFkbyBhIGlkZWEvaWQsIHVzYSBvIHByaW1laXJvIHBhcsOibWV0cm8gZGUgZW50cmFkYVxyXG4gICAgICAgICAgICAgIC8vIE1BUyBhcGVuYXMgc2UgbsOjbyBmb3IgXCJ2YWxvcl9hbGVydGFcIiBvdSBzaW1pbGFyXHJcbiAgICAgICAgICAgICAgY29uc3QgaW5wdXRQYXJhbXMgPSBncEluZm8ucGFyYW1ldGVycy5maWx0ZXIocCA9PiBcclxuICAgICAgICAgICAgICAgIChwLmRpcmVjdGlvbiA9PT0gJ2VzcmlHUFBhcmFtZXRlckRpcmVjdGlvbklucHV0JyB8fCBwLmRpcmVjdGlvbiA9PT0gJ0dQUGFyYW1ldGVyRGlyZWN0aW9uSW5wdXQnKSAmJlxyXG4gICAgICAgICAgICAgICAgIXAubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCd2YWxvcicpICYmXHJcbiAgICAgICAgICAgICAgICAhcC5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ2FsZXJ0YScpXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgIGlmIChpbnB1dFBhcmFtcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJhbU5hbWUgPSBpbnB1dFBhcmFtc1swXS5uYW1lXHJcbiAgICAgICAgICAgICAgICBwYXJhbUluZm8gPSBpbnB1dFBhcmFtc1swXVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1VzYW5kbyBwcmltZWlybyBwYXLDom1ldHJvIGRlIGVudHJhZGEgKG7Do28gdmFsb3JfYWxlcnRhKTonLCBpbnB1dFBhcmFtc1swXS5uYW1lKVxyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyDDmmx0aW1vIHJlY3Vyc286IHVzYSBcImlkZWFcIiBtZXNtbyBxdWUgbsOjbyBlc3RlamEgbmEgbGlzdGFcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignUGFyw6JtZXRybyBcImlkZWFcIiBuw6NvIGVuY29udHJhZG8gbmEgbGlzdGEgZGUgcGFyw6JtZXRyb3MuIFVzYW5kbyBcImlkZWFcIiBjb21vIHBhZHLDo28uJylcclxuICAgICAgICAgICAgICAgIHBhcmFtTmFtZSA9ICdpZGVhJ1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBTZSBuw6NvIGNvbnNlZ3VpciBvYnRlciBwYXLDom1ldHJvcywgdXNhIFwiaWRlYVwiIGNvbW8gcGFkcsOjb1xyXG4gICAgICAgIGNvbnNvbGUud2FybignTsOjbyBmb2kgcG9zc8OtdmVsIG9idGVyIHBhcsOibWV0cm9zIGRhIEdQLiBVc2FuZG8gXCJpZGVhXCIgY29tbyBwYWRyw6NvLicpXHJcbiAgICAgICAgcGFyYW1OYW1lID0gJ2lkZWEnXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGNvbnNvbGUubG9nKCdQYXLDom1ldHJvIHNlbGVjaW9uYWRvOicsIHBhcmFtTmFtZSlcclxuICAgICAgY29uc29sZS5sb2coJ0RldGFsaGVzIGRvIHBhcsOibWV0cm86JywgcGFyYW1JbmZvKVxyXG4gICAgICBcclxuICAgICAgY29uc29sZS5sb2coJ1BhcsOibWV0cm8gcXVlIHNlcsOhIHVzYWRvOicsIHBhcmFtTmFtZSlcclxuICAgICAgXHJcbiAgICAgIC8vIFZlcmlmaWNhIG8gdGlwbyBkbyBwYXLDom1ldHJvIHBhcmEgZm9ybWF0YXIgY29ycmV0YW1lbnRlXHJcbiAgICAgIGxldCBwYXJhbVZhbHVlID0gaWRlYU51bWJlclxyXG4gICAgICBpZiAocGFyYW1JbmZvKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1RpcG8gZGUgZGFkbyBkbyBwYXLDom1ldHJvOicsIHBhcmFtSW5mby5kYXRhVHlwZSlcclxuICAgICAgICBjb25zb2xlLmxvZygnVGlwbyBkZSBwYXLDom1ldHJvOicsIHBhcmFtSW5mby5wYXJhbWV0ZXJUeXBlKVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFNlIG8gcGFyw6JtZXRybyBmb3IgZG8gdGlwbyBHUFN0cmluZyBvdSBzaW1pbGFyLCBlbnZpYSBjb21vIHN0cmluZ1xyXG4gICAgICAgIC8vIFNlIGZvciBVUkwgb3Ugb3V0cm8gdGlwbyBjb21wbGV4bywgcG9kZSBwcmVjaXNhciBkZSBmb3JtYXRvIGRpZmVyZW50ZVxyXG4gICAgICAgIGlmIChwYXJhbUluZm8uZGF0YVR5cGUgPT09ICdHUFN0cmluZycgfHwgcGFyYW1JbmZvLmRhdGFUeXBlID09PSAnZXNyaUdQVHlwZVN0cmluZycpIHtcclxuICAgICAgICAgIHBhcmFtVmFsdWUgPSBTdHJpbmcoaWRlYU51bWJlcilcclxuICAgICAgICB9IGVsc2UgaWYgKHBhcmFtSW5mby5kYXRhVHlwZSA9PT0gJ0dQRG91YmxlJyB8fCBwYXJhbUluZm8uZGF0YVR5cGUgPT09ICdlc3JpR1BUeXBlRG91YmxlJyB8fCBcclxuICAgICAgICAgICAgICAgICAgIHBhcmFtSW5mby5kYXRhVHlwZSA9PT0gJ0dQTG9uZycgfHwgcGFyYW1JbmZvLmRhdGFUeXBlID09PSAnZXNyaUdQVHlwZUxvbmcnKSB7XHJcbiAgICAgICAgICAvLyBTZSBmb3IgbnVtw6lyaWNvLCB0ZW50YSBjb252ZXJ0ZXJcclxuICAgICAgICAgIGNvbnN0IG51bVZhbHVlID0gcGFyc2VGbG9hdChpZGVhTnVtYmVyKVxyXG4gICAgICAgICAgaWYgKCFpc05hTihudW1WYWx1ZSkpIHtcclxuICAgICAgICAgICAgcGFyYW1WYWx1ZSA9IG51bVZhbHVlXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvLyBQcmVwYXJhIG9zIHBhcsOibWV0cm9zIHBhcmEgYSBleGVjdcOnw6NvXHJcbiAgICAgIC8vIElNUE9SVEFOVEU6IGY9anNvbiB2YWkgbmEgVVJMLCBuw6NvIG5vIGJvZHlcclxuICAgICAgLy8gQXBlbmFzIG9zIHBhcsOibWV0cm9zIGRhIEdQIHbDo28gbm8gYm9keVxyXG4gICAgICBjb25zdCBwYXJhbXMgPSB7XHJcbiAgICAgICAgW3BhcmFtTmFtZV06IHBhcmFtVmFsdWVcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgY29uc29sZS5sb2coJ1BhcsOibWV0cm9zIHByZXBhcmFkb3MgKHBhcmEgbyBib2R5KTonLCBwYXJhbXMpXHJcbiAgICAgIGNvbnNvbGUubG9nKCdWYWxvciBkbyBwYXLDom1ldHJvOicsIHBhcmFtVmFsdWUsICdUaXBvOicsIHR5cGVvZiBwYXJhbVZhbHVlKVxyXG4gICAgICBjb25zb2xlLmxvZygnTm9tZSBkbyBwYXLDom1ldHJvOicsIHBhcmFtTmFtZSlcclxuICAgICAgXHJcbiAgICAgIC8vIEZvcm1hdGEgb3MgcGFyw6JtZXRyb3MgY29tbyBmb3JtLXVybGVuY29kZWRcclxuICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcclxuICAgICAgXHJcbiAgICAgIC8vIEFkaWNpb25hIG9zIHBhcsOibWV0cm9zIChleGNldG8gZj1qc29uIHF1ZSB2YWkgbmEgVVJMKVxyXG4gICAgICBPYmplY3Qua2V5cyhwYXJhbXMpLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgICBpZiAoa2V5ICE9PSAnZicpIHtcclxuICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChrZXksIFN0cmluZyhwYXJhbXNba2V5XSkpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICBcclxuICAgICAgLy8gQWRpY2lvbmEgdG9rZW4gYW8gYm9keVxyXG4gICAgICBpZiAodG9rZW4pIHtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3Rva2VuJywgdG9rZW4pXHJcbiAgICAgICAgY29uc29sZS5sb2coJ1Rva2VuIGFkaWNpb25hZG8gYW8gYm9keScpXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8vIEZ1bsOnw6NvIGF1eGlsaWFyIHBhcmEgZmF6ZXIgYSByZXF1aXNpw6fDo29cclxuICAgICAgY29uc3QgbWFrZUV4ZWN1dGVSZXF1ZXN0ID0gYXN5bmMgKHVybCkgPT4ge1xyXG4gICAgICAgIC8vIEFkaWNpb25hIHRva2VuIG5hIFVSTCB0YW1iw6ltIChhbGd1bnMgc2Vydmlkb3JlcyBBcmNHSVMgZXhpZ2VtIGlzc28pXHJcbiAgICAgICAgbGV0IGZpbmFsVXJsID0gdXJsXHJcbiAgICAgICAgaWYgKHRva2VuKSB7XHJcbiAgICAgICAgICBjb25zdCB1cmxXaXRoVG9rZW4gPSBuZXcgVVJMKHVybClcclxuICAgICAgICAgIHVybFdpdGhUb2tlbi5zZWFyY2hQYXJhbXMuc2V0KCd0b2tlbicsIHRva2VuKVxyXG4gICAgICAgICAgdXJsV2l0aFRva2VuLnNlYXJjaFBhcmFtcy5zZXQoJ2YnLCAnanNvbicpXHJcbiAgICAgICAgICBmaW5hbFVybCA9IHVybFdpdGhUb2tlbi50b1N0cmluZygpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vIFNlIG7Do28gdGl2ZXIgdG9rZW4sIGFkaWNpb25hIGFwZW5hcyBmPWpzb25cclxuICAgICAgICAgIGNvbnN0IHVybE9iaiA9IG5ldyBVUkwodXJsKVxyXG4gICAgICAgICAgdXJsT2JqLnNlYXJjaFBhcmFtcy5zZXQoJ2YnLCAnanNvbicpXHJcbiAgICAgICAgICBmaW5hbFVybCA9IHVybE9iai50b1N0cmluZygpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdUZW50YW5kbyBVUkw6JywgZmluYWxVcmwpXHJcbiAgICAgICAgY29uc29sZS5sb2coJ0JvZHkgKGZvcm1EYXRhKTonLCBmb3JtRGF0YS50b1N0cmluZygpKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdUb2tlbiBwcmVzZW50ZTonLCAhIXRva2VuKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdQYXLDom1ldHJvcyBlbnZpYWRvczonLCBPYmplY3Qua2V5cyhwYXJhbXMpKVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZmluYWxVcmwsIHtcclxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBib2R5OiBmb3JtRGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8vIFRlbnRhIHByaW1laXJvIGNvbSBhIHRhc2sgZXNwZWPDrWZpY2FcclxuICAgICAgbGV0IGV4ZWN1dGVVcmwgPSBgJHt0aGlzLkdQX1NFUlZJQ0VfVVJMfS8ke3Rhc2tOYW1lRW5jb2RlZH0vZXhlY3V0ZWBcclxuICAgICAgY29uc29sZS5sb2coJ1RlbnRhbmRvIHByaW1laXJvIGNvbSB0YXNrIGVzcGVjw61maWNhOicsIHRoaXMuR1BfVEFTS19OQU1FKVxyXG4gICAgICBjb25zb2xlLmxvZygnVVJMIGRlIGV4ZWN1dGUgKHRhc2sgZXNwZWPDrWZpY2EpOicsIGV4ZWN1dGVVcmwpXHJcbiAgICAgIFxyXG4gICAgICBsZXQgZXhlY3V0ZVJlc3BvbnNlID0gYXdhaXQgbWFrZUV4ZWN1dGVSZXF1ZXN0KGV4ZWN1dGVVcmwpXHJcbiAgICAgIFxyXG4gICAgICAvLyBTZSBkZXIgZXJybyA1MDAsIHBvZGUgc2VyIHF1ZSBvIGVuZHBvaW50IGRhIHRhc2sgZXNwZWPDrWZpY2EgbsOjbyBleGlzdGFcclxuICAgICAgLy8gVGVudGEgY29tIG8gZW5kcG9pbnQgZGEgR1AgcmFpelxyXG4gICAgICBpZiAoIWV4ZWN1dGVSZXNwb25zZS5vaykge1xyXG4gICAgICAgIGxldCByZXN1bHRUZXh0ID0gYXdhaXQgZXhlY3V0ZVJlc3BvbnNlLnRleHQoKVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCByZXN1bHRKc29uID0gSlNPTi5wYXJzZShyZXN1bHRUZXh0KVxyXG4gICAgICAgICAgaWYgKHJlc3VsdEpzb24uZXJyb3IgJiYgcmVzdWx0SnNvbi5lcnJvci5jb2RlID09PSA1MDApIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKCdFcnJvIDUwMCBjb20gdGFzayBlc3BlY8OtZmljYSwgdGVudGFuZG8gY29tIGVuZHBvaW50IGRhIEdQIHJhaXouLi4nKVxyXG4gICAgICAgICAgICBleGVjdXRlVXJsID0gYCR7dGhpcy5HUF9TRVJWSUNFX1VSTH0vZXhlY3V0ZWBcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1RlbnRhbmRvIGNvbSBlbmRwb2ludCBkYSBHUCByYWl6OicsIGV4ZWN1dGVVcmwpXHJcbiAgICAgICAgICAgIGV4ZWN1dGVSZXNwb25zZSA9IGF3YWl0IG1ha2VFeGVjdXRlUmVxdWVzdChleGVjdXRlVXJsKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgIC8vIFNlIG7Do28gY29uc2VndWlyIHBhcnNlYXIsIGNvbnRpbnVhIGNvbSBvIGVycm8gb3JpZ2luYWxcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8vIEzDqiBhIHJlc3Bvc3RhIG1lc21vIHNlIG7Do28gZm9yIE9LIHBhcmEgdmVyIG8gZXJybyBkZXRhbGhhZG9cclxuICAgICAgbGV0IHJlc3VsdFxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHJlc3VsdCA9IGF3YWl0IGV4ZWN1dGVSZXNwb25zZS5qc29uKClcclxuICAgICAgICBjb25zb2xlLmxvZygnUmVzcG9zdGEgZG8gZXhlY3V0ZSAoSlNPTik6JywgSlNPTi5zdHJpbmdpZnkocmVzdWx0LCBudWxsLCAyKSlcclxuICAgICAgfSBjYXRjaCAoanNvbkVycm9yKSB7XHJcbiAgICAgICAgLy8gU2UgbsOjbyBjb25zZWd1aXIgbGVyIGNvbW8gSlNPTiwgbMOqIGNvbW8gdGV4dG9cclxuICAgICAgICBjb25zdCB0ZXh0UmVzcG9uc2UgPSBhd2FpdCBleGVjdXRlUmVzcG9uc2UudGV4dCgpXHJcbiAgICAgICAgY29uc29sZS5lcnJvcignUmVzcG9zdGEgbsOjbyDDqSBKU09OOicsIHRleHRSZXNwb25zZSlcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm8gYW8gZXhlY3V0YXIgdGFyZWZhOiAke2V4ZWN1dGVSZXNwb25zZS5zdGF0dXN9ICR7ZXhlY3V0ZVJlc3BvbnNlLnN0YXR1c1RleHR9IC0gUmVzcG9zdGE6ICR7dGV4dFJlc3BvbnNlLnN1YnN0cmluZygwLCA1MDApfWApXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGlmICghZXhlY3V0ZVJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgLy8gU2UgYSByZXNwb3N0YSB0ZW0gdW0gZXJybyBubyBKU09OLCB1c2EgZWxlXHJcbiAgICAgICAgaWYgKHJlc3VsdC5lcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJybyBkZXRhbGhhZG8gZGEgR1A6JywgcmVzdWx0LmVycm9yKVxyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvIG5hIEdQOiAke0pTT04uc3RyaW5naWZ5KHJlc3VsdC5lcnJvcil9YClcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gU2UgbsOjbyB0aXZlciBjYW1wbyBlcnJvciwgbWFzIG8gc3RhdHVzIG7Do28gw6kgT0ssIG1vc3RyYSBvIHJlc3VsdGFkbyBjb21wbGV0b1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm8gSFRUUDonLCBleGVjdXRlUmVzcG9uc2Uuc3RhdHVzLCBleGVjdXRlUmVzcG9uc2Uuc3RhdHVzVGV4dClcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdSZXNwb3N0YSBjb21wbGV0YTonLCByZXN1bHQpXHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvIGFvIGV4ZWN1dGFyIHRhcmVmYTogJHtleGVjdXRlUmVzcG9uc2Uuc3RhdHVzfSAke2V4ZWN1dGVSZXNwb25zZS5zdGF0dXNUZXh0fSAtICR7SlNPTi5zdHJpbmdpZnkocmVzdWx0KX1gKVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvLyBWZXJpZmljYSBzZSBhIHJlc3Bvc3RhIGNvbnTDqW0gdW0gam9iSWQgKHRhcmVmYSBhc3PDrW5jcm9uYSlcclxuICAgICAgaWYgKHJlc3VsdC5qb2JJZCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdUYXJlZmEgYXNzw61uY3JvbmEgZGV0ZWN0YWRhLiBKb2IgSUQ6JywgcmVzdWx0LmpvYklkKVxyXG4gICAgICAgIGNvbnN0IGpvYklkID0gcmVzdWx0LmpvYklkXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gUG9sbGluZyBkbyBzdGF0dXMgZG8gam9iXHJcbiAgICAgICAgbGV0IGF0dGVtcHRzID0gMFxyXG4gICAgICAgIGNvbnN0IG1heEF0dGVtcHRzID0gNjBcclxuICAgICAgICBsZXQgam9iU3RhdHVzID0gbnVsbFxyXG4gICAgICAgIFxyXG4gICAgICAgIHdoaWxlIChhdHRlbXB0cyA8IG1heEF0dGVtcHRzKSB7XHJcbiAgICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMTAwMCkpXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC8vIFVSTCBwYXJhIHZlcmlmaWNhciBzdGF0dXMgZG8gam9iXHJcbiAgICAgICAgICAvLyBVc2EgYSBtZXNtYSBVUkwgYmFzZSBxdWUgZnVuY2lvbm91IG5vIGV4ZWN1dGUgKHBvZGUgc2VyIHRhc2sgZXNwZWPDrWZpY2Egb3UgcmFpeilcclxuICAgICAgICAgIGNvbnN0IGJhc2VVcmwgPSBleGVjdXRlVXJsLnJlcGxhY2UoJy9leGVjdXRlJywgJycpXHJcbiAgICAgICAgICBjb25zdCBzdGF0dXNVcmwgPSB0b2tlbiBcclxuICAgICAgICAgICAgPyBgJHtiYXNlVXJsfS9qb2JzLyR7am9iSWR9P3Rva2VuPSR7dG9rZW59JmY9anNvbmBcclxuICAgICAgICAgICAgOiBgJHtiYXNlVXJsfS9qb2JzLyR7am9iSWR9P2Y9anNvbmBcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgY29uc29sZS5sb2coJ1ZlcmlmaWNhbmRvIHN0YXR1cyBkbyBqb2I6Jywgc3RhdHVzVXJsKVxyXG4gICAgICAgICAgY29uc3Qgc3RhdHVzUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChzdGF0dXNVcmwpXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGlmICghc3RhdHVzUmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvIGFvIHZlcmlmaWNhciBzdGF0dXMgZG8gam9iOiAke3N0YXR1c1Jlc3BvbnNlLnN0YXR1c31gKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBqb2JTdGF0dXMgPSBhd2FpdCBzdGF0dXNSZXNwb25zZS5qc29uKClcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGBTdGF0dXMgZG8gam9iICh0ZW50YXRpdmEgJHthdHRlbXB0cyArIDF9KTpgLCBqb2JTdGF0dXMuam9iU3RhdHVzKVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBpZiAoam9iU3RhdHVzLmpvYlN0YXR1cyA9PT0gJ2VzcmlKb2JTdWNjZWVkZWQnKSB7XHJcbiAgICAgICAgICAgIC8vIE9idMOpbSBvcyByZXN1bHRhZG9zXHJcbiAgICAgICAgICAgIC8vIFVzYSBhIG1lc21hIFVSTCBiYXNlIHF1ZSBmdW5jaW9ub3Ugbm8gZXhlY3V0ZVxyXG4gICAgICAgICAgICBjb25zdCBiYXNlVXJsID0gZXhlY3V0ZVVybC5yZXBsYWNlKCcvZXhlY3V0ZScsICcnKVxyXG4gICAgICAgICAgICBjb25zdCByZXN1bHRVcmwgPSB0b2tlblxyXG4gICAgICAgICAgICAgID8gYCR7YmFzZVVybH0vam9icy8ke2pvYklkfS9yZXN1bHRzP3Rva2VuPSR7dG9rZW59JmY9anNvbmBcclxuICAgICAgICAgICAgICA6IGAke2Jhc2VVcmx9L2pvYnMvJHtqb2JJZH0vcmVzdWx0cz9mPWpzb25gXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCByZXN1bHRSZXNwb25zZSA9IGF3YWl0IGZldGNoKHJlc3VsdFVybClcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmICghcmVzdWx0UmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm8gYW8gb2J0ZXIgcmVzdWx0YWRvczogJHtyZXN1bHRSZXNwb25zZS5zdGF0dXN9YClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmVzdWx0ID0gYXdhaXQgcmVzdWx0UmVzcG9uc2UuanNvbigpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSZXN1bHRhZG8gZGEgZXhlY3XDp8OjbyBhc3PDrW5jcm9uYTonLCByZXN1bHQpXHJcbiAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGpvYlN0YXR1cy5qb2JTdGF0dXMgPT09ICdlc3JpSm9iRmFpbGVkJykge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEpvYiBmYWxob3U6ICR7am9iU3RhdHVzLm1lc3NhZ2VzID8gSlNPTi5zdHJpbmdpZnkoam9iU3RhdHVzLm1lc3NhZ2VzKSA6ICdFcnJvIGRlc2NvbmhlY2lkbyd9YClcclxuICAgICAgICAgIH0gZWxzZSBpZiAoam9iU3RhdHVzLmpvYlN0YXR1cyA9PT0gJ2VzcmlKb2JDYW5jZWxsZWQnKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSm9iIGZvaSBjYW5jZWxhZG8nKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBhdHRlbXB0cysrXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChhdHRlbXB0cyA+PSBtYXhBdHRlbXB0cykge1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaW1lb3V0OiBPIGpvYiBkZW1vcm91IG1haXMgZGUgNjAgc2VndW5kb3MgcGFyYSBjb21wbGV0YXInKVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBUYXJlZmEgc8OtbmNyb25hIC0gcmVzdWx0YWRvIGrDoSBlc3TDoSBkaXNwb27DrXZlbFxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdUYXJlZmEgc8OtbmNyb25hIC0gcmVzdWx0YWRvIGrDoSBkaXNwb27DrXZlbCcpXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGNvbnNvbGUubG9nKCdSZXN1bHRhZG8gY29tcGxldG8gZGEgR1A6JywgSlNPTi5zdHJpbmdpZnkocmVzdWx0LCBudWxsLCAyKSlcclxuXHJcbiAgICAgIC8vIFByb2Nlc3NhIG8gcmVzdWx0YWRvIC0gcHJvY3VyYSBwZWxhIFVSTCBkbyBIVE1MXHJcbiAgICAgIGxldCBodG1sVXJsID0gbnVsbFxyXG5cclxuICAgICAgLy8gUGFyYSB0YXJlZmFzIGFzc8OtbmNyb25hcywgb3MgcmVzdWx0YWRvcyBwb2RlbSBlc3RhciBlbSB1bWEgZXN0cnV0dXJhIGRpZmVyZW50ZVxyXG4gICAgICAvLyBQcmltZWlybywgdmVyaWZpY2Egc2UgaMOhIGVycm9zXHJcbiAgICAgIGlmIChyZXN1bHQuZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvIGVuY29udHJhZG8gbm8gcmVzdWx0YWRvOicsIHJlc3VsdC5lcnJvcilcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm8gbmEgR1A6ICR7SlNPTi5zdHJpbmdpZnkocmVzdWx0LmVycm9yKX1gKVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBQcm9jdXJhIGVtIHJlc3VsdC5yZXN1bHRzIChlc3RydXR1cmEgY29tdW0gcGFyYSB0YXJlZmFzIHPDrW5jcm9uYXMpXHJcbiAgICAgIGlmIChyZXN1bHQucmVzdWx0cyAmJiBBcnJheS5pc0FycmF5KHJlc3VsdC5yZXN1bHRzKSkge1xyXG4gICAgICAgIGZvciAoY29uc3QgcmVzdWx0SXRlbSBvZiByZXN1bHQucmVzdWx0cykge1xyXG4gICAgICAgICAgLy8gTyByZXN1bHRhZG8gcG9kZSBlc3RhciBkaXJldGFtZW50ZSBubyByZXN1bHRJdGVtIG91IGVtIHJlc3VsdEl0ZW0udmFsdWVcclxuICAgICAgICAgIGNvbnN0IHZhbHVlID0gcmVzdWx0SXRlbS52YWx1ZSAhPT0gdW5kZWZpbmVkID8gcmVzdWx0SXRlbS52YWx1ZSA6IHJlc3VsdEl0ZW1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUuaW5jbHVkZXMoJy5odG1sJykpIHtcclxuICAgICAgICAgICAgaHRtbFVybCA9IHZhbHVlXHJcbiAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgLy8gUHJvY3VyYSBwb3IgcHJvcHJpZWRhZGVzIGNvbXVucyBxdWUgY29udMOqbSBVUkxzXHJcbiAgICAgICAgICAgIGlmICh2YWx1ZS51cmwgJiYgdHlwZW9mIHZhbHVlLnVybCA9PT0gJ3N0cmluZycgJiYgdmFsdWUudXJsLmluY2x1ZGVzKCcuaHRtbCcpKSB7XHJcbiAgICAgICAgICAgICAgaHRtbFVybCA9IHZhbHVlLnVybFxyXG4gICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUucGF0aFVybCAmJiB0eXBlb2YgdmFsdWUucGF0aFVybCA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICBodG1sVXJsID0gdmFsdWUucGF0aFVybFxyXG4gICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUudmFsdWUgJiYgdHlwZW9mIHZhbHVlLnZhbHVlID09PSAnc3RyaW5nJyAmJiB2YWx1ZS52YWx1ZS5pbmNsdWRlcygnLmh0bWwnKSkge1xyXG4gICAgICAgICAgICAgIGh0bWxVcmwgPSB2YWx1ZS52YWx1ZVxyXG4gICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFBhcmEgdGFyZWZhcyBhc3PDrW5jcm9uYXMsIG9zIHJlc3VsdGFkb3MgcG9kZW0gZXN0YXIgZW0gcmVzdWx0LnJlc3VsdHMgY29tbyBvYmpldG9cclxuICAgICAgaWYgKCFodG1sVXJsICYmIHJlc3VsdC5yZXN1bHRzICYmIHR5cGVvZiByZXN1bHQucmVzdWx0cyA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkocmVzdWx0LnJlc3VsdHMpKSB7XHJcbiAgICAgICAgLy8gSXRlcmEgc29icmUgYXMgcHJvcHJpZWRhZGVzIGRvIG9iamV0byByZXN1bHRzXHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gcmVzdWx0LnJlc3VsdHMpIHtcclxuICAgICAgICAgIGNvbnN0IHJlc3VsdEl0ZW0gPSByZXN1bHQucmVzdWx0c1trZXldXHJcbiAgICAgICAgICBpZiAocmVzdWx0SXRlbSAmJiByZXN1bHRJdGVtLnZhbHVlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gcmVzdWx0SXRlbS52YWx1ZVxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiB2YWx1ZS5pbmNsdWRlcygnLmh0bWwnKSkge1xyXG4gICAgICAgICAgICAgIGh0bWxVcmwgPSB2YWx1ZVxyXG4gICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUudXJsICYmIHR5cGVvZiB2YWx1ZS51cmwgPT09ICdzdHJpbmcnICYmIHZhbHVlLnVybC5pbmNsdWRlcygnLmh0bWwnKSkge1xyXG4gICAgICAgICAgICAgIGh0bWxVcmwgPSB2YWx1ZS51cmxcclxuICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlLnBhdGhVcmwgJiYgdHlwZW9mIHZhbHVlLnBhdGhVcmwgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgaHRtbFVybCA9IHZhbHVlLnBhdGhVcmxcclxuICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBQcm9jdXJhIGVtIG91dHJhcyBwcm9wcmllZGFkZXMgZG8gcmVzdWx0YWRvXHJcbiAgICAgIGlmICghaHRtbFVybCAmJiByZXN1bHQub3V0cHV0VXJsKSB7XHJcbiAgICAgICAgaHRtbFVybCA9IHJlc3VsdC5vdXRwdXRVcmxcclxuICAgICAgfVxyXG4gICAgICBpZiAoIWh0bWxVcmwgJiYgcmVzdWx0LnVybCkge1xyXG4gICAgICAgIGh0bWxVcmwgPSByZXN1bHQudXJsXHJcbiAgICAgIH1cclxuICAgICAgaWYgKCFodG1sVXJsICYmIHJlc3VsdC5maWxlVXJsKSB7XHJcbiAgICAgICAgaHRtbFVybCA9IHJlc3VsdC5maWxlVXJsXHJcbiAgICAgIH1cclxuICAgICAgaWYgKCFodG1sVXJsICYmIHJlc3VsdC5vdXRwdXRGaWxlKSB7XHJcbiAgICAgICAgaHRtbFVybCA9IHJlc3VsdC5vdXRwdXRGaWxlXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIEJ1c2NhIHBvciByZWdleCBlbSB0b2RvIG8gb2JqZXRvICjDumx0aW1vIHJlY3Vyc28pXHJcbiAgICAgIGlmICghaHRtbFVybCkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdFN0cmluZyA9IEpTT04uc3RyaW5naWZ5KHJlc3VsdClcclxuICAgICAgICBjb25zdCB1cmxNYXRjaCA9IHJlc3VsdFN0cmluZy5tYXRjaCgvaHR0cHM/OlxcL1xcL1teXFxzXCI8Pl0rXFwuaHRtbC9nKVxyXG4gICAgICAgIGlmICh1cmxNYXRjaCAmJiB1cmxNYXRjaC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICBodG1sVXJsID0gdXJsTWF0Y2hbMF1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChodG1sVXJsKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1VSTCBkbyBIVE1MIGVuY29udHJhZGE6JywgaHRtbFVybClcclxuICAgICAgICAvLyBBYnJlIG8gSFRNTCBlbSB1bWEgbm92YSBndWlhXHJcbiAgICAgICAgd2luZG93Lm9wZW4oaHRtbFVybCwgJ19ibGFuaycpXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gU2UgbsOjbyBlbmNvbnRyb3UgYSBVUkwsIG1vc3RyYSBvIHJlc3VsdGFkbyBjb21wbGV0byBwYXJhIGRlYnVnXHJcbiAgICAgICAgY29uc29sZS53YXJuKCdOw6NvIGZvaSBwb3Nzw612ZWwgZW5jb250cmFyIGEgVVJMIGRvIEhUTUwgbm8gcmVzdWx0YWRvOicsIHJlc3VsdClcclxuICAgICAgICBjb25zb2xlLndhcm4oJ1Jlc3VsdGFkbyBjb21wbGV0bzonLCBKU09OLnN0cmluZ2lmeShyZXN1bHQsIG51bGwsIDIpKVxyXG4gICAgICAgIGFsZXJ0KCdSZWxhdMOzcmlvIGdlcmFkbywgbWFzIG7Do28gZm9pIHBvc3PDrXZlbCBlbmNvbnRyYXIgYSBVUkwgZG8gSFRNTC4gVmVyaWZpcXVlIG8gY29uc29sZSBkbyBuYXZlZ2Fkb3IgKEYxMikgcGFyYSB2ZXIgb3MgZGV0YWxoZXMgZG8gcmVzdWx0YWRvLicpXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pXHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm8gY29tcGxldG8gYW8gZXhlY3V0YXIgYSBmZXJyYW1lbnRhIGRlIGdlb3Byb2Nlc3NhbWVudG86JywgZXJyb3IpXHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1N0YWNrIHRyYWNlOicsIGVycm9yLnN0YWNrKVxyXG4gICAgICBcclxuICAgICAgbGV0IGVycm9yTWVzc2FnZSA9ICdFcnJvIGFvIGdlcmFyIHJlbGF0w7NyaW8uXFxuXFxuJ1xyXG4gICAgICBcclxuICAgICAgaWYgKGVycm9yLm1lc3NhZ2UpIHtcclxuICAgICAgICBlcnJvck1lc3NhZ2UgKz0gYE1lbnNhZ2VtOiAke2Vycm9yLm1lc3NhZ2V9XFxuXFxuYFxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBpZiAoZXJyb3IuZGV0YWlscyAmJiBBcnJheS5pc0FycmF5KGVycm9yLmRldGFpbHMpICYmIGVycm9yLmRldGFpbHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGVycm9yTWVzc2FnZSArPSBgRGV0YWxoZXM6ICR7ZXJyb3IuZGV0YWlsc1swXX1cXG5cXG5gXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGVycm9yTWVzc2FnZSArPSAnVmVyaWZpcXVlOlxcbidcclxuICAgICAgZXJyb3JNZXNzYWdlICs9ICcxLiBTZSBvIG7Dum1lcm8gZGUgaWRlYSBlc3TDoSBjb3JyZXRvXFxuJ1xyXG4gICAgICBlcnJvck1lc3NhZ2UgKz0gJzIuIFNlIGEgZmVycmFtZW50YSBkZSBnZW9wcm9jZXNzYW1lbnRvIGVzdMOhIGFjZXNzw612ZWxcXG4nXHJcbiAgICAgIGVycm9yTWVzc2FnZSArPSAnMy4gQWJyYSBvIGNvbnNvbGUgZG8gbmF2ZWdhZG9yIChGMTIpIHBhcmEgbWFpcyBkZXRhbGhlcydcclxuICAgICAgXHJcbiAgICAgIGFsZXJ0KGVycm9yTWVzc2FnZSlcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIgKCkge1xyXG4gICAgY29uc3Qgc3R5bGUgPSBjc3NgXHJcbiAgICAgIC53aWRnZXQtY29udGFpbmVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgZ2FwOiAxMnB4O1xyXG4gICAgICB9XHJcbiAgICAgIGZvcm0gPiBkaXYge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZ2FwOiA4cHg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGlucHV0IHtcclxuICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgIG1pbi13aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiA4cHggMTZweDtcclxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjY2NjQwO1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxZTRmMzI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAmOmRpc2FibGVkIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcclxuICAgICAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLnJlcG9ydC1idXR0b24ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNjY2NDA7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IGF1dG87XHJcbiAgICAgICAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWU0ZjMyO1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6YWN0aXZlOm5vdCg6ZGlzYWJsZWQpIHtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOmZvY3VzOm5vdCg6ZGlzYWJsZWQpIHtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOmRpc2FibGVkIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XHJcbiAgICAgICAgICBjb2xvcjogIzllOWU5ZTtcclxuICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQgIWltcG9ydGFudDtcclxuICAgICAgICAgIG9wYWNpdHk6IDAuNjtcclxuICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOm5vdCg6ZGlzYWJsZWQpIHtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuY2xlYXItYnV0dG9uIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xyXG4gICAgICAgIGNvbG9yOiAjNDI0MjQyO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2JkYmRiZDtcclxuICAgICAgICAgIGNvbG9yOiAjMjEyMTIxO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOmRpc2FibGVkIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbiAgICAgICAgICBjb2xvcjogIzllOWU5ZTtcclxuICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5zdGF0dXMtbWVzc2FnZSB7XHJcbiAgICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlN2YzZmY7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgfVxyXG4gICAgICAubG9hZGluZyB7XHJcbiAgICAgICAgY29sb3I6ICMwMDc5YzE7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWFkZExheWVycyBqaW11LXdpZGdldCBwLTJcIiBjc3M9e3N0eWxlfT5cclxuICAgICAgICB7dGhpcy5wcm9wcy5oYXNPd25Qcm9wZXJ0eSgndXNlTWFwV2lkZ2V0SWRzJykgJiZcclxuICAgICAgICAgIHRoaXMucHJvcHMudXNlTWFwV2lkZ2V0SWRzICYmXHJcbiAgICAgICAgICB0aGlzLnByb3BzLnVzZU1hcFdpZGdldElkcy5sZW5ndGggPT09IDEgJiYgKFxyXG4gICAgICAgICAgICA8SmltdU1hcFZpZXdDb21wb25lbnRcclxuICAgICAgICAgICAgICB1c2VNYXBXaWRnZXRJZD17dGhpcy5wcm9wcy51c2VNYXBXaWRnZXRJZHM/LlswXX1cclxuICAgICAgICAgICAgICBvbkFjdGl2ZVZpZXdDaGFuZ2U9eyhqbXY6IEppbXVNYXBWaWV3KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgamltdU1hcFZpZXc6IGptdlxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPHA+e2RlZmF1bHRNZXNzYWdlcy5pbnN0cnVjdGlvbnN9PC9wPlxyXG5cclxuXHJcbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVGaWx0ZXJBbmRab29tfT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtkZWZhdWx0TWVzc2FnZXMuc2VhcmNoSWRlYX1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmlkZWFTZWFyY2hJbnB1dH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlkZWFTZWFyY2hJbnB1dENoYW5nZX1cclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXshdGhpcy5zdGF0ZS5mZWF0dXJlTGF5ZXIgfHwgdGhpcy5zdGF0ZS5sb2FkaW5nfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyF0aGlzLnN0YXRlLmZlYXR1cmVMYXllciB8fCB0aGlzLnN0YXRlLmxvYWRpbmd9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2RlZmF1bHRNZXNzYWdlcy5maWx0ZXJBbmRab29tfVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgICB7dGhpcy5zdGF0ZS5mZWF0dXJlTGF5ZXIgJiYgKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlcG9ydC1idXR0b25cIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVHZW5lcmF0ZVJlcG9ydH1cclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnN0YXRlLmxvYWRpbmcgfHwgIXRoaXMuc3RhdGUuaWRlYVNlYXJjaElucHV0IHx8IHRoaXMuc3RhdGUuaWRlYVNlYXJjaElucHV0LnRyaW0oKSA9PT0gJyd9XHJcbiAgICAgICAgICAgICAgICB0aXRsZT17dGhpcy5zdGF0ZS5sb2FkaW5nIHx8ICF0aGlzLnN0YXRlLmlkZWFTZWFyY2hJbnB1dCB8fCB0aGlzLnN0YXRlLmlkZWFTZWFyY2hJbnB1dC50cmltKCkgPT09ICcnIFxyXG4gICAgICAgICAgICAgICAgICA/ICdEaWdpdGUgdW0gbsO6bWVybyBkZSBpZGVhIHBhcmEgZ2VyYXIgbyByZWxhdMOzcmlvJyBcclxuICAgICAgICAgICAgICAgICAgOiAnR2VyYXIgcmVsYXTDs3JpbyBwYXJhIG8gbsO6bWVybyBkZSBpZGVhIGluZm9ybWFkbyd9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2RlZmF1bHRNZXNzYWdlcy5nZW5lcmF0ZVJlcG9ydH1cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbGVhci1idXR0b25cIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGVhckZpbHRlcn1cclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnN0YXRlLmxvYWRpbmd9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2RlZmF1bHRNZXNzYWdlcy5jbGVhckZpbHRlcn1cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXG4gZXhwb3J0IGZ1bmN0aW9uIF9fc2V0X3dlYnBhY2tfcHVibGljX3BhdGhfXyh1cmwpIHsgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB1cmwgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
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
                // Primeiro, vamos obter informações sobre a tarefa para descobrir os parâmetros
                console.log('Obtendo informações da tarefa de geoprocessamento...');
                const infoUrl = addTokenToUrl(`${this.GP_SERVICE_URL}?f=json`);
                const infoResponse = yield fetch(infoUrl);
                if (!infoResponse.ok) {
                    throw new Error(`Erro ao obter informações da tarefa: ${infoResponse.status} ${infoResponse.statusText}`);
                }
                const gpInfo = yield infoResponse.json();
                console.log('Informações completas da GP:', JSON.stringify(gpInfo, null, 2));
                // Descobre qual é o parâmetro de entrada
                let paramName = 'idea';
                let paramInfo = null;
                if (gpInfo.parameters && Array.isArray(gpInfo.parameters)) {
                    console.log('Parâmetros disponíveis:', gpInfo.parameters.map(p => ({
                        name: p.name,
                        dataType: p.dataType,
                        direction: p.direction,
                        parameterType: p.parameterType
                    })));
                    const ideaParam = gpInfo.parameters.find(p => p.name && (p.name.toLowerCase().includes('idea') || p.name.toLowerCase().includes('id')));
                    if (ideaParam) {
                        paramName = ideaParam.name;
                        paramInfo = ideaParam;
                    }
                    else {
                        const inputParam = gpInfo.parameters.find(p => p.direction === 'esriGPParameterDirectionInput' || p.direction === 'GPParameterDirectionInput');
                        if (inputParam) {
                            paramName = inputParam.name;
                            paramInfo = inputParam;
                        }
                    }
                }
                console.log('Parâmetro selecionado:', paramName);
                console.log('Detalhes do parâmetro:', paramInfo);
                console.log('Parâmetro que será usado:', paramName);
                // Verifica o tipo do parâmetro para formatar corretamente
                let paramValue = ideaNumber;
                if (gpInfo.parameters && Array.isArray(gpInfo.parameters)) {
                    const paramInfo = gpInfo.parameters.find(p => p.name === paramName);
                    if (paramInfo) {
                        console.log('Informações do parâmetro:', paramInfo);
                        // Se for um tipo específico, pode precisar ser formatado de forma diferente
                        // Por enquanto, vamos enviar como string simples
                    }
                }
                // Prepara os parâmetros para a execução
                // Formato esperado pelo ArcGIS Server GP: parâmetros como form data
                const params = {
                    [paramName]: paramValue,
                    f: 'json'
                };
                console.log('Parâmetros preparados:', params);
                // Verifica se é tarefa síncrona ou assíncrona
                const executionType = gpInfo.executionType || 'esriExecutionTypeAsynchronous';
                console.log('Tipo de execução:', executionType);
                let result;
                if (executionType === 'esriExecutionTypeSynchronous' || executionType === 'esriExecutionTypeSynchronousSubmit') {
                    // Tarefa síncrona - executa diretamente
                    console.log('Executando tarefa síncrona...');
                    const executeUrl = `${this.GP_SERVICE_URL}/execute`;
                    console.log('URL de execute:', executeUrl);
                    // Formata os parâmetros como form-urlencoded
                    const formData = new URLSearchParams();
                    Object.keys(params).forEach(key => {
                        formData.append(key, String(params[key]));
                    });
                    // Adiciona token ao body (sempre no body para POST)
                    if (token) {
                        formData.append('token', token);
                        console.log('Token adicionado ao body');
                    }
                    // Para requisições POST, não adiciona token na URL, apenas no body
                    // Alguns servidores podem reclamar de token duplicado
                    const finalUrl = executeUrl;
                    console.log('URL final:', finalUrl);
                    console.log('Body (formData):', formData.toString());
                    console.log('Token presente:', !!token);
                    const executeResponse = yield fetch(finalUrl, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        },
                        body: formData
                    });
                    // Lê a resposta mesmo se não for OK para ver o erro detalhado
                    result = yield executeResponse.json();
                    console.log('Resposta da execução síncrona:', result);
                    if (!executeResponse.ok) {
                        // Se a resposta tem um erro no JSON, usa ele
                        if (result.error) {
                            throw new Error(`Erro ao executar tarefa: ${JSON.stringify(result.error)}`);
                        }
                        throw new Error(`Erro ao executar tarefa: ${executeResponse.status} ${executeResponse.statusText} - ${JSON.stringify(result)}`);
                    }
                }
                else {
                    // Tarefa assíncrona - submete job e aguarda
                    console.log('Executando tarefa assíncrona...');
                    const submitUrl = `${this.GP_SERVICE_URL}/submitJob`;
                    console.log('URL base do serviço:', this.GP_SERVICE_URL);
                    console.log('URL de submit completa:', submitUrl);
                    // Verifica se a URL está válida
                    try {
                        new URL(submitUrl);
                        console.log('URL válida ✓');
                    }
                    catch (urlError) {
                        console.error('URL inválida:', urlError);
                        throw new Error(`URL inválida: ${submitUrl}`);
                    }
                    // Formata os parâmetros como form-urlencoded
                    const formData = new URLSearchParams();
                    Object.keys(params).forEach(key => {
                        formData.append(key, String(params[key]));
                    });
                    // Adiciona token ao body (sempre no body para POST)
                    if (token) {
                        formData.append('token', token);
                        console.log('Token adicionado ao body');
                    }
                    // Para requisições POST, não adiciona token na URL, apenas no body
                    // Alguns servidores podem reclamar de token duplicado
                    const finalUrl = submitUrl;
                    console.log('URL final:', finalUrl);
                    console.log('Body (formData):', formData.toString());
                    console.log('Token presente:', !!token);
                    const submitResponse = yield fetch(finalUrl, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        },
                        body: formData
                    });
                    // Lê a resposta mesmo se não for OK para ver o erro detalhado
                    const jobInfo = yield submitResponse.json();
                    console.log('Resposta do submitJob:', jobInfo);
                    if (!submitResponse.ok) {
                        // Se a resposta tem um erro no JSON, usa ele
                        if (jobInfo.error) {
                            throw new Error(`Erro ao submeter job: ${JSON.stringify(jobInfo.error)}`);
                        }
                        throw new Error(`Erro ao submeter job: ${submitResponse.status} ${submitResponse.statusText} - ${JSON.stringify(jobInfo)}`);
                    }
                    if (jobInfo.error) {
                        throw new Error(`Erro ao submeter job: ${JSON.stringify(jobInfo.error)}`);
                    }
                    const jobId = jobInfo.jobId;
                    console.log('Job ID:', jobId);
                    // Polling do status do job
                    let attempts = 0;
                    const maxAttempts = 60;
                    let jobStatus = null;
                    while (attempts < maxAttempts) {
                        yield new Promise(resolve => setTimeout(resolve, 1000));
                        const statusUrl = addTokenToUrl(`${this.GP_SERVICE_URL}/jobs/${jobId}?f=json`);
                        const statusResponse = yield fetch(statusUrl);
                        if (!statusResponse.ok) {
                            throw new Error(`Erro ao verificar status do job: ${statusResponse.status}`);
                        }
                        jobStatus = yield statusResponse.json();
                        console.log(`Status do job (tentativa ${attempts + 1}):`, jobStatus.jobStatus);
                        if (jobStatus.jobStatus === 'esriJobSucceeded') {
                            // Obtém os resultados
                            const resultUrl = addTokenToUrl(`${this.GP_SERVICE_URL}/jobs/${jobId}/results?f=json`);
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
                console.log('Resultado completo da GP:', JSON.stringify(result, null, 2));
                // Processa o resultado - procura pela URL do HTML
                let htmlUrl = null;
                // Para tarefas assíncronas, os resultados podem estar em uma estrutura diferente
                // Primeiro, verifica se há erros
                if (result.error) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9maWx0cmFyLWUtZ2VyYXItcmVsYXRvcmlvL2Rpc3QvcnVudGltZS93aWRnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlFQUFlO0lBQ2IsWUFBWSxFQUFFLGtCQUFrQjtJQUNoQyxRQUFRLEVBQUUsa0JBQWtCO0lBQzVCLGlCQUFpQixFQUFFLHdCQUF3QjtJQUMzQyxZQUFZLEVBQ1YsdUZBQXVGO0lBQ3pGLFVBQVUsRUFBRSw2QkFBNkI7SUFDekMsYUFBYSxFQUFFLFNBQVM7SUFDeEIsY0FBYyxFQUFFLGlCQUFpQjtJQUNqQyxXQUFXLEVBQUUsZUFBZTtJQUM1QixPQUFPLEVBQUUsZUFBZTtJQUN4QixXQUFXLEVBQUUsK0JBQStCO0NBQzdDOzs7Ozs7Ozs7Ozs7QUNaRDs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7QUNBQTs7O0tBR0s7QUFDTCxxQkFBdUIsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0puRCwwQ0FBMEM7QUFDMUMsZUFBZTtBQUNmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFrQkU7QUFDOEQ7QUFLNUM7QUFJZ0M7QUFVckMsTUFBTSxNQUFPLFNBQVEsNENBQUssQ0FBQyxhQUd6QztJQUhEOztRQVVFLFVBQUssR0FBRztZQUNOLGVBQWUsRUFBRSxFQUFFO1lBQ25CLFdBQVcs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Qiw2REFBZSxDQUFDLFdBQVcsQ0FDckIsQ0FDUixDQUNKLENBQ0csQ0FDRixDQUNQO0lBQ0gsQ0FBQztDQUNGO0FBRU8sU0FBUywyQkFBMkIsQ0FBQyxHQUFHLElBQUkscUJBQXVCLEdBQUcsR0FBRyxFQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvZmlsdHJhci1lLWdlcmFyLXJlbGF0b3Jpby9zcmMvcnVudGltZS90cmFuc2xhdGlvbnMvZGVmYXVsdC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtYXJjZ2lzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2ZpbHRyYXItZS1nZXJhci1yZWxhdG9yaW8vc3JjL3J1bnRpbWUvd2lkZ2V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XHJcbiAgX3dpZGdldExhYmVsOiAnRmlsdHJhciBlIEJhaXhhcicsXHJcbiAgYWRkTGF5ZXI6ICdBZGljaW9uYXIgQ2FtYWRhJyxcclxuICBmZWF0dXJlU2VydmljZVVybDogJ1VSTCBkbyBGZWF0dXJlIFNlcnZpY2UnLFxyXG4gIGluc3RydWN0aW9uczpcclxuICAgICdEaWdpdGUgdW0gbsO6bWVybyBuYSBjb2x1bmEgXCJpZGVhXCIgcGFyYSBmaWx0cmFyIGUgZGFyIHpvb20gbm8gcG9sw61nb25vIGNvcnJlc3BvbmRlbnRlLicsXHJcbiAgc2VhcmNoSWRlYTogJ1Blc3F1aXNhciBwb3IgbsO6bWVybyAoaWRlYSknLFxyXG4gIGZpbHRlckFuZFpvb206ICdGaWx0cmFyJyxcclxuICBnZW5lcmF0ZVJlcG9ydDogJ0dlcmFyIFJlbGF0w7NyaW8nLFxyXG4gIGNsZWFyRmlsdGVyOiAnTGltcGFyIEZpbHRybycsXHJcbiAgbG9hZGluZzogJ0NhcnJlZ2FuZG8uLi4nLFxyXG4gIGxheWVyTG9hZGVkOiAnQ2FtYWRhIGNhcnJlZ2FkYSBjb20gc3VjZXNzbyEnXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfYXJjZ2lzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvdHlwZS1idWlsdGlucyAqL1xyXG4vKiogQGpzeCBqc3ggKi9cclxuLyoqXHJcbiAgTGljZW5zaW5nXHJcblxyXG4gIENvcHlyaWdodCAyMDIyIEVzcmlcclxuXHJcbiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgWW91XHJcbiAgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXlcclxuICBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG4gIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yXHJcbiAgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nXHJcbiAgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG5cclxuICBBIGNvcHkgb2YgdGhlIGxpY2Vuc2UgaXMgYXZhaWxhYmxlIGluIHRoZSByZXBvc2l0b3J5J3NcclxuICBMSUNFTlNFIGZpbGUuXHJcbiovXHJcbmltcG9ydCB7IFJlYWN0LCB0eXBlIEFsbFdpZGdldFByb3BzLCBjc3MsIGpzeCB9IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHtcclxuICBsb2FkQXJjR0lTSlNBUElNb2R1bGVzLFxyXG4gIEppbXVNYXBWaWV3Q29tcG9uZW50LFxyXG4gIHR5cGUgSmltdU1hcFZpZXdcclxufSBmcm9tICdqaW11LWFyY2dpcydcclxuXHJcbmltcG9ydCB0eXBlIHsgSU1Db25maWcgfSBmcm9tICcuLi9jb25maWcnXHJcblxyXG5pbXBvcnQgZGVmYXVsdE1lc3NhZ2VzIGZyb20gJy4vdHJhbnNsYXRpb25zL2RlZmF1bHQnXHJcblxyXG5pbnRlcmZhY2UgSVN0YXRlIHtcclxuICBpZGVhU2VhcmNoSW5wdXQ6IHN0cmluZ1xyXG4gIGppbXVNYXBWaWV3OiBKaW11TWFwVmlld1xyXG4gIGZlYXR1cmVMYXllcjogX19lc3JpLkZlYXR1cmVMYXllclxyXG4gIGxvYWRpbmc6IGJvb2xlYW5cclxuICBpbml0aWFsRXh0ZW50OiBfX2VzcmkuRXh0ZW50XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdpZGdldCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8XHJcbkFsbFdpZGdldFByb3BzPElNQ29uZmlnPixcclxuSVN0YXRlXHJcbj4ge1xyXG4gIC8vIEdpdmUgdHlwZXMgdG8gdGhlIG1vZHVsZXMgd2UgaW1wb3J0IGZyb20gdGhlIEFyY0dJUyBBUEkgZm9yIEphdmFTY3JpcHRcclxuICAvLyB0byB0ZWxsIFR5cGVTY3JpcHQgd2hhdCB0eXBlcyB0aGV5IGFyZS5cclxuICBGZWF0dXJlTGF5ZXI6IHR5cGVvZiBfX2VzcmkuRmVhdHVyZUxheWVyXHJcbiAgUXVlcnk6IHR5cGVvZiBfX2VzcmkuUXVlcnlcclxuICBTcGF0aWFsUmVmZXJlbmNlOiB0eXBlb2YgX19lc3JpLlNwYXRpYWxSZWZlcmVuY2VcclxuXHJcbiAgc3RhdGUgPSB7XHJcbiAgICBpZGVhU2VhcmNoSW5wdXQ6ICcnLFxyXG4gICAgamltdU1hcFZpZXc6IG51bGwsXHJcbiAgICBmZWF0dXJlTGF5ZXI6IG51bGwsXHJcbiAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgIGluaXRpYWxFeHRlbnQ6IG51bGxcclxuICB9XHJcblxyXG4gIC8vIFVSTCBmaXhhIGRhIGNhbWFkYVxyXG4gIHJlYWRvbmx5IEZFQVRVUkVfU0VSVklDRV9VUkwgPSAnaHR0cHM6Ly9tZWlvYW1iaWVudGUuc2lzdGVtYXMubXBiYS5tcC5ici9zZXJ2ZXIvcmVzdC9zZXJ2aWNlcy9Ib3N0ZWQvYWxlcnRhc19yZWdpb25hbF9sYXBhL0ZlYXR1cmVTZXJ2ZXInXHJcbiAgXHJcbiAgLy8gVVJMIGRhIGZlcnJhbWVudGEgZGUgZ2VvcHJvY2Vzc2FtZW50b1xyXG4gIHJlYWRvbmx5IEdQX1NFUlZJQ0VfVVJMID0gJ2h0dHBzOi8vbWVpb2FtYmllbnRlLnNpc3RlbWFzLm1wYmEubXAuYnIvc2VydmVyL3Jlc3Qvc2VydmljZXMvdGVzdGVvdXRwdXQvcHJvY2Vzc2FyYWxlcnRhX2lkZWEvR1BTZXJ2ZXInXHJcblxyXG4gIC8vIEZ1bsOnw6NvIGNoYW1hZGEgcXVhbmRvIG8gdmFsb3IgZGEgcGVzcXVpc2EgbXVkYVxyXG4gIGhhbmRsZUlkZWFTZWFyY2hJbnB1dENoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGlkZWFTZWFyY2hJbnB1dDogZXZlbnQudGFyZ2V0LnZhbHVlXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgLy8gQ2FycmVnYSBhIGNhbWFkYSBhdXRvbWF0aWNhbWVudGUgcXVhbmRvIG8gY29tcG9uZW50ZSDDqSBtb250YWRvIG91IG8gbWFwYSBlc3TDoSBkaXNwb27DrXZlbFxyXG4gIGNvbXBvbmVudERpZFVwZGF0ZSA9IChwcmV2UHJvcHMsIHByZXZTdGF0ZSkgPT4ge1xyXG4gICAgaWYgKHRoaXMuc3RhdGUuamltdU1hcFZpZXcgJiYgIXRoaXMuc3RhdGUuZmVhdHVyZUxheWVyICYmICFwcmV2U3RhdGUuamltdU1hcFZpZXcpIHtcclxuICAgICAgLy8gU2FsdmEgYSB2aXN1YWxpemHDp8OjbyBpbmljaWFsIHF1YW5kbyBvIG1hcGEgw6kgZGV0ZWN0YWRvIHBlbGEgcHJpbWVpcmEgdmV6XHJcbiAgICAgIGlmICh0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcgJiYgIXRoaXMuc3RhdGUuaW5pdGlhbEV4dGVudCkge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRFeHRlbnQgPSB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcuZXh0ZW50XHJcbiAgICAgICAgaWYgKGN1cnJlbnRFeHRlbnQpIHtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpbml0aWFsRXh0ZW50OiBjdXJyZW50RXh0ZW50LmNsb25lKClcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMubG9hZEZlYXR1cmVMYXllcigpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBDYXJyZWdhIGEgY2FtYWRhIGRlIGZlYXR1cmUgc2VydmljZVxyXG4gIGxvYWRGZWF0dXJlTGF5ZXIgPSAoKSA9PiB7XHJcbiAgICBpZiAoIXRoaXMuc3RhdGUuamltdU1hcFZpZXcpIHtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUgfSlcclxuXHJcbiAgICBsb2FkQXJjR0lTSlNBUElNb2R1bGVzKFtcclxuICAgICAgJ2VzcmkvbGF5ZXJzL0ZlYXR1cmVMYXllcicsXHJcbiAgICAgICdlc3JpL2dlb21ldHJ5L1NwYXRpYWxSZWZlcmVuY2UnXHJcbiAgICBdKS50aGVuKChtb2R1bGVzKSA9PiB7XHJcbiAgICAgIFt0aGlzLkZlYXR1cmVMYXllciwgdGhpcy5TcGF0aWFsUmVmZXJlbmNlXSA9IG1vZHVsZXNcclxuXHJcbiAgICAgIC8vIENyaWEgYSBjYW1hZGEgY29tIGEgVVJMIGZpeGFcclxuICAgICAgY29uc3QgbGF5ZXIgPSBuZXcgdGhpcy5GZWF0dXJlTGF5ZXIoe1xyXG4gICAgICAgIHVybDogdGhpcy5GRUFUVVJFX1NFUlZJQ0VfVVJMXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICAvLyBBZGljaW9uYSBhIGNhbWFkYSBhbyBtYXBhXHJcbiAgICAgIHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldy5tYXAuYWRkKGxheWVyKVxyXG5cclxuICAgICAgLy8gQWd1YXJkYSBhIGNhbWFkYSBzZXIgY3JpYWRhXHJcbiAgICAgIGxheWVyLm9uKCdsYXllcnZpZXctY3JlYXRlJywgKCkgPT4ge1xyXG4gICAgICAgIC8vIFNhbHZhIGEgdmlzdWFsaXphw6fDo28gaW5pY2lhbCBkbyBtYXBhIHNlIGFpbmRhIG7Do28gZm9pIHNhbHZhXHJcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmluaXRpYWxFeHRlbnQgJiYgdGhpcy5zdGF0ZS5qaW11TWFwVmlldyAmJiB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcpIHtcclxuICAgICAgICAgIGNvbnN0IGN1cnJlbnRFeHRlbnQgPSB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcuZXh0ZW50XHJcbiAgICAgICAgICBpZiAoY3VycmVudEV4dGVudCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICBmZWF0dXJlTGF5ZXI6IGxheWVyLFxyXG4gICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGluaXRpYWxFeHRlbnQ6IGN1cnJlbnRFeHRlbnQuY2xvbmUoKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgZmVhdHVyZUxheWVyOiBsYXllcixcclxuICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgZmVhdHVyZUxheWVyOiBsYXllcixcclxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgbGF5ZXIub24oJ2xheWVydmlldy1jcmVhdGUtZXJyb3InLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJybyBhbyBjYXJyZWdhciBhIGNhbWFkYScpXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgLy8gRnVuw6fDo28gcGFyYSBmaWx0cmFyIGUgZGFyIHpvb20gbm8gcG9sw61nb25vIGJhc2VhZG8gbmEgcGVzcXVpc2FcclxuICBoYW5kbGVGaWx0ZXJBbmRab29tID0gYXN5bmMgKGV2dCkgPT4ge1xyXG4gICAgZXZ0LnByZXZlbnREZWZhdWx0KClcclxuXHJcbiAgICAvLyBDYXNvcyBkZSBlcnJvXHJcbiAgICBpZiAoIXRoaXMuc3RhdGUuamltdU1hcFZpZXcpIHtcclxuICAgICAgYWxlcnQoJ1BvciBmYXZvciwgY29uZmlndXJlIHVtIG1hcGEgbm8gd2lkZ2V0LicpXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgaWYgKCF0aGlzLnN0YXRlLmZlYXR1cmVMYXllcikge1xyXG4gICAgICBhbGVydCgnQSBjYW1hZGEgYWluZGEgbsOjbyBmb2kgY2FycmVnYWRhLiBBZ3VhcmRlLi4uJylcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5pZGVhU2VhcmNoSW5wdXQgPT09ICcnIHx8IHRoaXMuc3RhdGUuaWRlYVNlYXJjaElucHV0LnRyaW0oKSA9PT0gJycpIHtcclxuICAgICAgYWxlcnQoJ1BvciBmYXZvciwgZGlnaXRlIHVtIG7Dum1lcm8gcGFyYSBwZXNxdWlzYXIgbmEgY29sdW5hIGlkZWEuJylcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUgfSlcclxuXHJcbiAgICAvLyBDYXJyZWdhIG9zIG3Ds2R1bG9zIG5lY2Vzc8Ohcmlvc1xyXG4gICAgbG9hZEFyY0dJU0pTQVBJTW9kdWxlcyhbXHJcbiAgICAgICdlc3JpL2xheWVycy9GZWF0dXJlTGF5ZXInLFxyXG4gICAgICAnZXNyaS9nZW9tZXRyeS9TcGF0aWFsUmVmZXJlbmNlJ1xyXG4gICAgXSkudGhlbigobW9kdWxlcykgPT4ge1xyXG4gICAgICBbdGhpcy5GZWF0dXJlTGF5ZXIsIHRoaXMuU3BhdGlhbFJlZmVyZW5jZV0gPSBtb2R1bGVzXHJcblxyXG4gICAgICBjb25zdCBsYXllciA9IHRoaXMuc3RhdGUuZmVhdHVyZUxheWVyXHJcbiAgICAgIGNvbnN0IHNlYXJjaFZhbHVlID0gdGhpcy5zdGF0ZS5pZGVhU2VhcmNoSW5wdXQudHJpbSgpXHJcbiAgICAgIFxyXG4gICAgICAvLyBFc2NhcGEgYXNwYXMgc2ltcGxlcyBwYXJhIGV2aXRhciBTUUwgaW5qZWN0aW9uXHJcbiAgICAgIGNvbnN0IGVzY2FwZWRWYWx1ZSA9IHNlYXJjaFZhbHVlLnJlcGxhY2UoLycvZywgXCInJ1wiKVxyXG5cclxuICAgICAgLy8gVmVyaWZpY2Egc2UgYSBjYW1hZGEgZXN0w6EgY2FycmVnYWRhIGUgb2J0w6ltIGluZm9ybWHDp8O1ZXMgZG9zIGNhbXBvc1xyXG4gICAgICAvLyBBZ3VhcmRhIGEgY2FtYWRhIGVzdGFyIGNvbXBsZXRhbWVudGUgY2FycmVnYWRhXHJcbiAgICAgIGNvbnN0IGNoZWNrQW5kUXVlcnkgPSAoKSA9PiB7XHJcbiAgICAgICAgLy8gTGlzdGEgZGUgcG9zc8OtdmVpcyBub21lcyBkZSBjb2x1bmEgKGNhc2UtaW5zZW5zaXRpdmUpXHJcbiAgICAgICAgY29uc3QgcG9zc2libGVGaWVsZE5hbWVzID0gWydpZGVhJywgJ0lERUEnLCAnSWRlYScsICdJRCcsICdpZCcsICdJZCddXHJcbiAgICAgICAgbGV0IGZpZWxkTmFtZSA9ICdpZGVhJyAvLyBQYWRyw6NvXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gVGVudGEgZW5jb250cmFyIG8gY2FtcG8gY29ycmV0b1xyXG4gICAgICAgIGlmIChsYXllci5maWVsZHMgJiYgbGF5ZXIuZmllbGRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIGNvbnN0IGZvdW5kRmllbGQgPSBsYXllci5maWVsZHMuZmluZChmaWVsZCA9PiBcclxuICAgICAgICAgICAgcG9zc2libGVGaWVsZE5hbWVzLmluY2x1ZGVzKGZpZWxkLm5hbWUpXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgICBpZiAoZm91bmRGaWVsZCkge1xyXG4gICAgICAgICAgICBmaWVsZE5hbWUgPSBmb3VuZEZpZWxkLm5hbWVcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIFNlIG7Do28gZW5jb250cmFyLCB0ZW50YSBmYXplciB1bWEgYnVzY2EgY2FzZS1pbnNlbnNpdGl2ZVxyXG4gICAgICAgICAgICBjb25zdCBjYXNlSW5zZW5zaXRpdmVGaWVsZCA9IGxheWVyLmZpZWxkcy5maW5kKGZpZWxkID0+IFxyXG4gICAgICAgICAgICAgIGZpZWxkLm5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2lkZWEnXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgaWYgKGNhc2VJbnNlbnNpdGl2ZUZpZWxkKSB7XHJcbiAgICAgICAgICAgICAgZmllbGROYW1lID0gY2FzZUluc2Vuc2l0aXZlRmllbGQubmFtZVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIC8vIExvZyBkb3MgY2FtcG9zIGRpc3BvbsOtdmVpcyBwYXJhIGRlYnVnXHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NhbXBvcyBkaXNwb27DrXZlaXMgbmEgY2FtYWRhOicsIGxheWVyLmZpZWxkcy5tYXAoZiA9PiBmLm5hbWUpKVxyXG4gICAgICAgICAgICAgIC8vIFRlbnRhIHVzYXIgbyBwcmltZWlybyBjYW1wbyBxdWUgcGFyZWNlIHNlciB1bSBJRFxyXG4gICAgICAgICAgICAgIGNvbnN0IGlkRmllbGQgPSBsYXllci5maWVsZHMuZmluZChmaWVsZCA9PiBcclxuICAgICAgICAgICAgICAgIGZpZWxkLnR5cGUgPT09ICdlc3JpRmllbGRUeXBlU3RyaW5nJyB8fCBmaWVsZC50eXBlID09PSAnZXNyaUZpZWxkVHlwZUludGVnZXInIHx8IGZpZWxkLnR5cGUgPT09ICdlc3JpRmllbGRUeXBlRG91YmxlJ1xyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICBpZiAoaWRGaWVsZCkge1xyXG4gICAgICAgICAgICAgICAgZmllbGROYW1lID0gaWRGaWVsZC5uYW1lXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgVXNhbmRvIGNhbXBvOiAke2ZpZWxkTmFtZX1gKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ3JpYSB1bWEgcXVlcnkgcGFyYSBidXNjYXIgbyBwb2zDrWdvbm8gcGVsYSBjb2x1bmFcclxuICAgICAgICAvLyBVc2EgTElLRSBwYXJhIGJ1c2NhIG1haXMgZmxleMOtdmVsIGUgdHJhdGEgY29tbyBzdHJpbmdcclxuICAgICAgICBjb25zdCBxdWVyeSA9IGxheWVyLmNyZWF0ZVF1ZXJ5KClcclxuICAgICAgICBcclxuICAgICAgICAvLyBUZW50YSBkaWZlcmVudGVzIGFib3JkYWdlbnMgZGUgcXVlcnlcclxuICAgICAgICAvLyAxLiBCdXNjYSBleGF0YSBjb21vIHN0cmluZ1xyXG4gICAgICAgIC8vIDIuIEJ1c2NhIGNvbSBMSUtFIHBhcmEgdmFsb3JlcyBwYXJjaWFpc1xyXG4gICAgICAgIC8vIDMuIEJ1c2NhIGNvbW8gbsO6bWVybyAoc2UgbyB2YWxvciBmb3IgbnVtw6lyaWNvKVxyXG4gICAgICAgIGNvbnN0IGhhc1NwZWNpYWxDaGFycyA9IHNlYXJjaFZhbHVlLmluZGV4T2YoJy4nKSAhPT0gLTEgfHwgc2VhcmNoVmFsdWUuaW5kZXhPZignLycpICE9PSAtMVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFBhcmEgdmFsb3JlcyBjb20gY2FyYWN0ZXJlcyBlc3BlY2lhaXMgKGNvbW8gXCIwMDMuOS40MjcwNzQvMjAyNVwiKSwgdXNhIGFwZW5hcyBjb21vIHN0cmluZ1xyXG4gICAgICAgIGlmIChoYXNTcGVjaWFsQ2hhcnMpIHtcclxuICAgICAgICAgIHF1ZXJ5LndoZXJlID0gYCR7ZmllbGROYW1lfSA9ICcke2VzY2FwZWRWYWx1ZX0nYFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAvLyBTZSBmb3IgdW0gbsO6bWVybyBzaW1wbGVzLCB0ZW50YSBjb21vIG7Dum1lcm8gZSBjb21vIHN0cmluZ1xyXG4gICAgICAgICAgY29uc3QgaXNOdW1lcmljID0gIWlzTmFOKHBhcnNlRmxvYXQoc2VhcmNoVmFsdWUpKSAmJiBpc0Zpbml0ZShwYXJzZUZsb2F0KHNlYXJjaFZhbHVlKSlcclxuICAgICAgICAgIGlmIChpc051bWVyaWMpIHtcclxuICAgICAgICAgICAgcXVlcnkud2hlcmUgPSBgJHtmaWVsZE5hbWV9ID0gJHtzZWFyY2hWYWx1ZX0gT1IgJHtmaWVsZE5hbWV9ID0gJyR7ZXNjYXBlZFZhbHVlfSdgXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBxdWVyeS53aGVyZSA9IGAke2ZpZWxkTmFtZX0gPSAnJHtlc2NhcGVkVmFsdWV9J2BcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcXVlcnkucmV0dXJuR2VvbWV0cnkgPSB0cnVlXHJcblxyXG4gICAgICAgIC8vIEV4ZWN1dGEgYSBxdWVyeVxyXG4gICAgICAgIGxheWVyLnF1ZXJ5RmVhdHVyZXMocXVlcnkpLnRoZW4oKHJlc3VsdHMpID0+IHtcclxuICAgICAgICAgIGlmIChyZXN1bHRzLmZlYXR1cmVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAvLyBTZSBuw6NvIGVuY29udHJvdSwgdGVudGEgY29tIExJS0VcclxuICAgICAgICAgICAgY29uc3QgbGlrZVF1ZXJ5ID0gbGF5ZXIuY3JlYXRlUXVlcnkoKVxyXG4gICAgICAgICAgICBsaWtlUXVlcnkud2hlcmUgPSBgJHtmaWVsZE5hbWV9IExJS0UgJyUke2VzY2FwZWRWYWx1ZX0lJ2BcclxuICAgICAgICAgICAgbGlrZVF1ZXJ5LnJldHVybkdlb21ldHJ5ID0gdHJ1ZVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIGxheWVyLnF1ZXJ5RmVhdHVyZXMobGlrZVF1ZXJ5KS50aGVuKChsaWtlUmVzdWx0cykgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChsaWtlUmVzdWx0cy5mZWF0dXJlcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KGBOZW5odW0gcG9sw61nb25vIGVuY29udHJhZG8gY29tICR7ZmllbGROYW1lfSA9ICR7c2VhcmNoVmFsdWV9YClcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIC8vIFNlIGVuY29udHJvdSBjb20gTElLRSwgdXNhIG8gcHJpbWVpcm8gcmVzdWx0YWRvXHJcbiAgICAgICAgICAgICAgY29uc3QgZm91bmRHcmFwaGljID0gbGlrZVJlc3VsdHMuZmVhdHVyZXNbMF1cclxuICAgICAgICAgICAgICBjb25zdCBhY3R1YWxWYWx1ZSA9IGZvdW5kR3JhcGhpYy5hdHRyaWJ1dGVzW2ZpZWxkTmFtZV1cclxuICAgICAgICAgICAgICB0aGlzLmFwcGx5RmlsdGVyQW5kWm9vbShsYXllciwgZm91bmRHcmFwaGljLCBmaWVsZE5hbWUsIGFjdHVhbFZhbHVlKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8vIFNlIGVuY29udHJvdSwgYXBsaWNhIGZpbHRybyBlIHpvb21cclxuICAgICAgICAgIGNvbnN0IGZvdW5kR3JhcGhpYyA9IHJlc3VsdHMuZmVhdHVyZXNbMF1cclxuICAgICAgICAgIGNvbnN0IGFjdHVhbFZhbHVlID0gZm91bmRHcmFwaGljLmF0dHJpYnV0ZXNbZmllbGROYW1lXVxyXG4gICAgICAgICAgdGhpcy5hcHBseUZpbHRlckFuZFpvb20obGF5ZXIsIGZvdW5kR3JhcGhpYywgZmllbGROYW1lLCBhY3R1YWxWYWx1ZSlcclxuICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm8gYW8gcGVzcXVpc2FyIGZlYXR1cmVzOicsIGVycm9yKVxyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRGV0YWxoZXMgZG8gZXJybzonLCB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UsXHJcbiAgICAgICAgICAgIGRldGFpbHM6IGVycm9yLmRldGFpbHMsXHJcbiAgICAgICAgICAgIGZpZWxkTmFtZTogZmllbGROYW1lLFxyXG4gICAgICAgICAgICBzZWFyY2hWYWx1ZTogc2VhcmNoVmFsdWVcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC8vIFRlbnRhIG1vc3RyYXIgaW5mb3JtYcOnw7VlcyBtYWlzIMO6dGVpc1xyXG4gICAgICAgICAgbGV0IGVycm9yTWVzc2FnZSA9ICdFcnJvIGFvIHBlc3F1aXNhci4gJ1xyXG4gICAgICAgICAgaWYgKGxheWVyLmZpZWxkcyAmJiBsYXllci5maWVsZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBjb25zdCBmaWVsZE5hbWVzID0gbGF5ZXIuZmllbGRzLm1hcChmID0+IGYubmFtZSkuam9pbignLCAnKVxyXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UgKz0gYFxcblxcbkNhbXBvcyBkaXNwb27DrXZlaXM6ICR7ZmllbGROYW1lc31gXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlcnJvck1lc3NhZ2UgKz0gYFxcblxcblZlcmlmaXF1ZSBzZSBhIGNvbHVuYSBcIiR7ZmllbGROYW1lfVwiIGV4aXN0ZSBlIHNlIG8gdmFsb3IgXCIke3NlYXJjaFZhbHVlfVwiIGVzdMOhIGNvcnJldG8uYFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBhbGVydChlcnJvck1lc3NhZ2UpXHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSlcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvLyBTZSBhIGNhbWFkYSBqw6EgZXN0w6EgY2FycmVnYWRhLCBleGVjdXRhIGRpcmV0YW1lbnRlXHJcbiAgICAgIGlmIChsYXllci5sb2FkZWQpIHtcclxuICAgICAgICBjaGVja0FuZFF1ZXJ5KClcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBBZ3VhcmRhIGEgY2FtYWRhIGNhcnJlZ2FyXHJcbiAgICAgICAgbGF5ZXIud2hlbigoKSA9PiB7XHJcbiAgICAgICAgICBjaGVja0FuZFF1ZXJ5KClcclxuICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm8gYW8gY2FycmVnYXIgaW5mb3JtYcOnw7VlcyBkYSBjYW1hZGE6JywgZXJyb3IpXHJcbiAgICAgICAgICBhbGVydCgnRXJybyBhbyBjYXJyZWdhciBpbmZvcm1hw6fDtWVzIGRhIGNhbWFkYS4gVmVyaWZpcXVlIHNlIGEgY2FtYWRhIGVzdMOhIGFjZXNzw612ZWwuJylcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICAvLyBGdW7Dp8OjbyBhdXhpbGlhciBwYXJhIGFwbGljYXIgZmlsdHJvIGUgem9vbVxyXG4gIGFwcGx5RmlsdGVyQW5kWm9vbSA9IChsYXllciwgZ3JhcGhpYywgZmllbGROYW1lLCBhY3R1YWxWYWx1ZSkgPT4ge1xyXG4gICAgLy8gT2J0w6ltIG8gdmFsb3IgcmVhbCBkbyBhdHJpYnV0byBkbyBncmFwaGljXHJcbiAgICBjb25zdCBhdHRyaWJ1dGVWYWx1ZSA9IGdyYXBoaWMuYXR0cmlidXRlc1tmaWVsZE5hbWVdXHJcbiAgICBcclxuICAgIC8vIFNlIG8gdmFsb3IgbsOjbyBmb2kgcGFzc2FkbywgdXNhIG8gZG8gYXRyaWJ1dG9cclxuICAgIGNvbnN0IHZhbHVlVG9GaWx0ZXIgPSBhY3R1YWxWYWx1ZSAhPT0gdW5kZWZpbmVkID8gYWN0dWFsVmFsdWUgOiBhdHRyaWJ1dGVWYWx1ZVxyXG4gICAgXHJcbiAgICAvLyBFc2NhcGEgbyB2YWxvciBwYXJhIFNRTCAodHJhdGEgc3RyaW5ncywgbsO6bWVyb3MgZSBudWxsKVxyXG4gICAgbGV0IGRlZmluaXRpb25FeHByZXNzaW9uXHJcbiAgICBpZiAodmFsdWVUb0ZpbHRlciA9PT0gbnVsbCB8fCB2YWx1ZVRvRmlsdGVyID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgZGVmaW5pdGlvbkV4cHJlc3Npb24gPSBgJHtmaWVsZE5hbWV9IElTIE5VTExgXHJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZVRvRmlsdGVyID09PSAnbnVtYmVyJykge1xyXG4gICAgICBkZWZpbml0aW9uRXhwcmVzc2lvbiA9IGAke2ZpZWxkTmFtZX0gPSAke3ZhbHVlVG9GaWx0ZXJ9YFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gw4kgdW1hIHN0cmluZywgcHJlY2lzYSBlc2NhcGFyIGFzcGFzIHNpbXBsZXNcclxuICAgICAgY29uc3QgZXNjYXBlZFZhbHVlID0gU3RyaW5nKHZhbHVlVG9GaWx0ZXIpLnJlcGxhY2UoLycvZywgXCInJ1wiKVxyXG4gICAgICBkZWZpbml0aW9uRXhwcmVzc2lvbiA9IGAke2ZpZWxkTmFtZX0gPSAnJHtlc2NhcGVkVmFsdWV9J2BcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc29sZS5sb2coYEFwbGljYW5kbyBmaWx0cm86ICR7ZmllbGROYW1lfSA9ICR7dmFsdWVUb0ZpbHRlcn1gKVxyXG4gICAgY29uc29sZS5sb2coYERlZmluaXRpb24gRXhwcmVzc2lvbjogJHtkZWZpbml0aW9uRXhwcmVzc2lvbn1gKVxyXG5cclxuICAgIC8vIEFwbGljYSBvIGZpbHRybyBuYSBjYW1hZGEgdXNhbmRvIGRlZmluaXRpb25FeHByZXNzaW9uXHJcbiAgICAvLyBJc3NvIMOpIG8gbcOpdG9kbyBjb3JyZXRvIHBhcmEgZmlsdHJhciB1bWEgRmVhdHVyZUxheWVyIGUgb2N1bHRhciBvdXRyb3MgcG9sw61nb25vc1xyXG4gICAgbGF5ZXIuZGVmaW5pdGlvbkV4cHJlc3Npb24gPSBkZWZpbml0aW9uRXhwcmVzc2lvblxyXG4gICAgXHJcbiAgICAvLyBGb3LDp2EgYSBhdHVhbGl6YcOnw6NvIGltZWRpYXRhIGRhIGNhbWFkYSBwYXJhIGFwbGljYXIgbyBmaWx0cm9cclxuICAgIGxheWVyLnJlZnJlc2goKVxyXG4gICAgXHJcbiAgICBjb25zb2xlLmxvZygnRmlsdHJvIGFwbGljYWRvLiBBIGNhbWFkYSBkZXZlIG1vc3RyYXIgQVBFTkFTIG8gcG9sw61nb25vIHNlbGVjaW9uYWRvJylcclxuICAgIFxyXG4gICAgLy8gQWd1YXJkYSBxdWUgYSBjYW1hZGEgZXN0ZWphIGNvbXBsZXRhbWVudGUgY2FycmVnYWRhIGFudGVzIGRlIGFwbGljYXIgbyBmaWx0cm9cclxuICAgIGlmIChsYXllci5sb2FkZWQpIHtcclxuICAgICAgLy8gQSBjYW1hZGEgasOhIGVzdMOhIGNhcnJlZ2FkYSwgYXBsaWNhIG8gZmlsdHJvIGRpcmV0YW1lbnRlXHJcbiAgICAgIHRoaXMuYXBwbHlab29tQWZ0ZXJGaWx0ZXIobGF5ZXIsIGdyYXBoaWMpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBBZ3VhcmRhIGEgY2FtYWRhIGNhcnJlZ2FyIHByaW1laXJvXHJcbiAgICAgIGxheWVyLndoZW4oKCkgPT4ge1xyXG4gICAgICAgIC8vIEFwbGljYSBvIGZpbHRybyBub3ZhbWVudGUgYXDDs3MgY2FycmVnYXIgKGdhcmFudGlhKVxyXG4gICAgICAgIGxheWVyLmRlZmluaXRpb25FeHByZXNzaW9uID0gZGVmaW5pdGlvbkV4cHJlc3Npb25cclxuICAgICAgICBsYXllci5yZWZyZXNoKClcclxuICAgICAgICB0aGlzLmFwcGx5Wm9vbUFmdGVyRmlsdGVyKGxheWVyLCBncmFwaGljKVxyXG4gICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvIGFvIGFndWFyZGFyIGNhbWFkYTonLCBlcnJvcilcclxuICAgICAgICAvLyBNZXNtbyBhc3NpbSB0ZW50YSBhcGxpY2FyIG8gem9vbVxyXG4gICAgICAgIHRoaXMuYXBwbHlab29tQWZ0ZXJGaWx0ZXIobGF5ZXIsIGdyYXBoaWMpXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBGdW7Dp8OjbyBhdXhpbGlhciBwYXJhIGFwbGljYXIgem9vbSBhcMOzcyBvIGZpbHRyb1xyXG4gIGFwcGx5Wm9vbUFmdGVyRmlsdGVyID0gKGxheWVyLCBncmFwaGljKSA9PiB7XHJcbiAgICAvLyBBZ3VhcmRhIHVtIHBvdWNvIHBhcmEgZ2FyYW50aXIgcXVlIG8gZmlsdHJvIHNlamEgcHJvY2Vzc2FkbyBwZWxhIGNhbWFkYVxyXG4gICAgLy8gTyBkZWZpbml0aW9uRXhwcmVzc2lvbiBwcmVjaXNhIGRlIHRlbXBvIHBhcmEgc2VyIHByb2Nlc3NhZG9cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAvLyBEw6Egem9vbSBubyBwb2zDrWdvbm8gZW5jb250cmFkb1xyXG4gICAgICBpZiAoZ3JhcGhpYy5nZW9tZXRyeSkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldy5nb1RvKHtcclxuICAgICAgICAgIHRhcmdldDogZ3JhcGhpYy5nZW9tZXRyeSxcclxuICAgICAgICAgIHpvb206IDE1XHJcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSlcclxuICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm8gYW8gZGFyIHpvb206JywgZXJyb3IpXHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSlcclxuICAgICAgICB9KVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KVxyXG4gICAgICB9XHJcbiAgICB9LCA1MDApXHJcbiAgfVxyXG5cclxuICAvLyBGdW7Dp8OjbyBwYXJhIGxpbXBhciBvIGZpbHRyb1xyXG4gIGhhbmRsZUNsZWFyRmlsdGVyID0gKCkgPT4ge1xyXG4gICAgaWYgKHRoaXMuc3RhdGUuZmVhdHVyZUxheWVyKSB7XHJcbiAgICAgIC8vIFJlbW92ZSBvIGZpbHRybyBkZWZpbmluZG8gZGVmaW5pdGlvbkV4cHJlc3Npb24gY29tbyB2YXppb1xyXG4gICAgICB0aGlzLnN0YXRlLmZlYXR1cmVMYXllci5kZWZpbml0aW9uRXhwcmVzc2lvbiA9ICcnXHJcbiAgICAgIHRoaXMuc3RhdGUuZmVhdHVyZUxheWVyLnJlZnJlc2goKVxyXG4gICAgICBjb25zb2xlLmxvZygnRmlsdHJvIHJlbW92aWRvJylcclxuICAgICAgXHJcbiAgICAgIC8vIFJlc3RhdXJhIGEgdmlzdWFsaXphw6fDo28gaW5pY2lhbCBkbyBtYXBhXHJcbiAgICAgIGlmICh0aGlzLnN0YXRlLmppbXVNYXBWaWV3ICYmIHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldykge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmluaXRpYWxFeHRlbnQpIHtcclxuICAgICAgICAgIC8vIFJlc3RhdXJhIGEgZXh0ZW5zw6NvIGluaWNpYWwgc2FsdmFcclxuICAgICAgICAgIHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldy5nb1RvKHRoaXMuc3RhdGUuaW5pdGlhbEV4dGVudCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdWaXN1YWxpemHDp8OjbyBpbmljaWFsIHJlc3RhdXJhZGEnKVxyXG4gICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm8gYW8gcmVzdGF1cmFyIHZpc3VhbGl6YcOnw6NvIGluaWNpYWw6JywgZXJyb3IpXHJcbiAgICAgICAgICAgIC8vIFNlIGZhbGhhciwgdGVudGEgZmF6ZXIgem9vbSBwYXJhIGEgY2FtYWRhIGNvbXBsZXRhXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmZlYXR1cmVMYXllciAmJiB0aGlzLnN0YXRlLmZlYXR1cmVMYXllci5mdWxsRXh0ZW50KSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3LmdvVG8odGhpcy5zdGF0ZS5mZWF0dXJlTGF5ZXIuZnVsbEV4dGVudClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLy8gU2UgbsOjbyB0aXZlciBleHRlbnPDo28gaW5pY2lhbCBzYWx2YSwgdGVudGEgZmF6ZXIgem9vbSBwYXJhIGEgY2FtYWRhIGNvbXBsZXRhXHJcbiAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5mZWF0dXJlTGF5ZXIgJiYgdGhpcy5zdGF0ZS5mZWF0dXJlTGF5ZXIuZnVsbEV4dGVudCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcuZ29Ubyh0aGlzLnN0YXRlLmZlYXR1cmVMYXllci5mdWxsRXh0ZW50KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnWm9vbSBwYXJhIGNhbWFkYSBjb21wbGV0YSBhcGxpY2FkbycpXHJcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm8gYW8gZmF6ZXIgem9vbSBwYXJhIGNhbWFkYSBjb21wbGV0YTonLCBlcnJvcilcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGlkZWFTZWFyY2hJbnB1dDogJydcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIEZ1bsOnw6NvIHBhcmEgZ2VyYXIgcmVsYXTDs3JpbyB1c2FuZG8gYSBmZXJyYW1lbnRhIGRlIGdlb3Byb2Nlc3NhbWVudG9cclxuICBoYW5kbGVHZW5lcmF0ZVJlcG9ydCA9IGFzeW5jICgpID0+IHtcclxuICAgIC8vIFZhbGlkYcOnw7Vlc1xyXG4gICAgaWYgKHRoaXMuc3RhdGUuaWRlYVNlYXJjaElucHV0ID09PSAnJyB8fCB0aGlzLnN0YXRlLmlkZWFTZWFyY2hJbnB1dC50cmltKCkgPT09ICcnKSB7XHJcbiAgICAgIGFsZXJ0KCdQb3IgZmF2b3IsIGRpZ2l0ZSB1bSBuw7ptZXJvIGRlIGlkZWEgcGFyYSBnZXJhciBvIHJlbGF0w7NyaW8uJylcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaWRlYU51bWJlciA9IHRoaXMuc3RhdGUuaWRlYVNlYXJjaElucHV0LnRyaW0oKVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUgfSlcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zb2xlLmxvZygnSW5pY2lhbmRvIGdlcmHDp8OjbyBkZSByZWxhdMOzcmlvIHBhcmEgaWRlYTonLCBpZGVhTnVtYmVyKVxyXG4gICAgICBcclxuICAgICAgLy8gQ2FycmVnYSBJZGVudGl0eU1hbmFnZXIgcGFyYSBvYnRlciB0b2tlbiBkZSBhdXRlbnRpY2HDp8Ojb1xyXG4gICAgICBjb25zb2xlLmxvZygnQ2FycmVnYW5kbyBJZGVudGl0eU1hbmFnZXIgcGFyYSBhdXRlbnRpY2HDp8Ojby4uLicpXHJcbiAgICAgIGNvbnN0IGlkZW50aXR5TW9kdWxlcyA9IGF3YWl0IGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMoW1xyXG4gICAgICAgICdlc3JpL2lkZW50aXR5L0lkZW50aXR5TWFuYWdlcidcclxuICAgICAgXSlcclxuICAgICAgY29uc3QgW0lkZW50aXR5TWFuYWdlcl0gPSBpZGVudGl0eU1vZHVsZXNcclxuICAgICAgXHJcbiAgICAgIC8vIE9idMOpbSBvIHRva2VuIHBhcmEgYSBVUkwgZG8gc2VydmnDp29cclxuICAgICAgbGV0IHRva2VuID0gbnVsbFxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGNyZWRlbnRpYWwgPSBJZGVudGl0eU1hbmFnZXIuZmluZENyZWRlbnRpYWwodGhpcy5HUF9TRVJWSUNFX1VSTClcclxuICAgICAgICBpZiAoY3JlZGVudGlhbCAmJiBjcmVkZW50aWFsLnRva2VuKSB7XHJcbiAgICAgICAgICB0b2tlbiA9IGNyZWRlbnRpYWwudG9rZW5cclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdUb2tlbiBlbmNvbnRyYWRvIHZpYSBJZGVudGl0eU1hbmFnZXInKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAvLyBUZW50YSBnZXJhciB0b2tlbiBhdXRvbWF0aWNhbWVudGVcclxuICAgICAgICAgIGNvbnN0IHNlcnZlckluZm8gPSBJZGVudGl0eU1hbmFnZXIuZmluZFNlcnZlckluZm8odGhpcy5HUF9TRVJWSUNFX1VSTClcclxuICAgICAgICAgIGlmIChzZXJ2ZXJJbmZvKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdPYnRlbmRvIHRva2VuIGF1dG9tYXRpY2FtZW50ZS4uLicpXHJcbiAgICAgICAgICAgIGF3YWl0IElkZW50aXR5TWFuYWdlci5jaGVja1NpZ25JblN0YXR1cyh0aGlzLkdQX1NFUlZJQ0VfVVJMKVxyXG4gICAgICAgICAgICBjb25zdCB1cGRhdGVkQ3JlZGVudGlhbCA9IElkZW50aXR5TWFuYWdlci5maW5kQ3JlZGVudGlhbCh0aGlzLkdQX1NFUlZJQ0VfVVJMKVxyXG4gICAgICAgICAgICBpZiAodXBkYXRlZENyZWRlbnRpYWwgJiYgdXBkYXRlZENyZWRlbnRpYWwudG9rZW4pIHtcclxuICAgICAgICAgICAgICB0b2tlbiA9IHVwZGF0ZWRDcmVkZW50aWFsLnRva2VuXHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1Rva2VuIG9idGlkbyBhdXRvbWF0aWNhbWVudGUnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoICh0b2tlbkVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKCdFcnJvIGFvIG9idGVyIHRva2VuLCB0ZW50YW5kbyBzZW0gYXV0ZW50aWNhw6fDo286JywgdG9rZW5FcnJvcilcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLy8gRnVuw6fDo28gYXV4aWxpYXIgcGFyYSBhZGljaW9uYXIgdG9rZW4gw6BzIFVSTHNcclxuICAgICAgY29uc3QgYWRkVG9rZW5Ub1VybCA9ICh1cmwpID0+IHtcclxuICAgICAgICBpZiAoIXRva2VuKSB7XHJcbiAgICAgICAgICByZXR1cm4gdXJsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCB1cmxPYmogPSBuZXcgVVJMKHVybClcclxuICAgICAgICAgIHVybE9iai5zZWFyY2hQYXJhbXMuc2V0KCd0b2tlbicsIHRva2VuKVxyXG4gICAgICAgICAgcmV0dXJuIHVybE9iai50b1N0cmluZygpXHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgLy8gU2UgYSBVUkwgbsOjbyBmb3IgYWJzb2x1dGEsIHRyYXRhIGNvbW8gc3RyaW5nXHJcbiAgICAgICAgICBjb25zdCBzZXBhcmF0b3IgPSB1cmwuaW5jbHVkZXMoJz8nKSA/ICcmJyA6ICc/J1xyXG4gICAgICAgICAgcmV0dXJuIGAke3VybH0ke3NlcGFyYXRvcn10b2tlbj0ke2VuY29kZVVSSUNvbXBvbmVudCh0b2tlbil9YFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLy8gUHJpbWVpcm8sIHZhbW9zIG9idGVyIGluZm9ybWHDp8O1ZXMgc29icmUgYSB0YXJlZmEgcGFyYSBkZXNjb2JyaXIgb3MgcGFyw6JtZXRyb3NcclxuICAgICAgY29uc29sZS5sb2coJ09idGVuZG8gaW5mb3JtYcOnw7VlcyBkYSB0YXJlZmEgZGUgZ2VvcHJvY2Vzc2FtZW50by4uLicpXHJcbiAgICAgIGNvbnN0IGluZm9VcmwgPSBhZGRUb2tlblRvVXJsKGAke3RoaXMuR1BfU0VSVklDRV9VUkx9P2Y9anNvbmApXHJcbiAgICAgIGNvbnN0IGluZm9SZXNwb25zZSA9IGF3YWl0IGZldGNoKGluZm9VcmwpXHJcbiAgICAgIFxyXG4gICAgICBpZiAoIWluZm9SZXNwb25zZS5vaykge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJybyBhbyBvYnRlciBpbmZvcm1hw6fDtWVzIGRhIHRhcmVmYTogJHtpbmZvUmVzcG9uc2Uuc3RhdHVzfSAke2luZm9SZXNwb25zZS5zdGF0dXNUZXh0fWApXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGNvbnN0IGdwSW5mbyA9IGF3YWl0IGluZm9SZXNwb25zZS5qc29uKClcclxuICAgICAgY29uc29sZS5sb2coJ0luZm9ybWHDp8O1ZXMgY29tcGxldGFzIGRhIEdQOicsIEpTT04uc3RyaW5naWZ5KGdwSW5mbywgbnVsbCwgMikpXHJcbiAgICAgIFxyXG4gICAgICAvLyBEZXNjb2JyZSBxdWFsIMOpIG8gcGFyw6JtZXRybyBkZSBlbnRyYWRhXHJcbiAgICAgIGxldCBwYXJhbU5hbWUgPSAnaWRlYSdcclxuICAgICAgbGV0IHBhcmFtSW5mbyA9IG51bGxcclxuICAgICAgaWYgKGdwSW5mby5wYXJhbWV0ZXJzICYmIEFycmF5LmlzQXJyYXkoZ3BJbmZvLnBhcmFtZXRlcnMpKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1BhcsOibWV0cm9zIGRpc3BvbsOtdmVpczonLCBncEluZm8ucGFyYW1ldGVycy5tYXAocCA9PiAoe1xyXG4gICAgICAgICAgbmFtZTogcC5uYW1lLFxyXG4gICAgICAgICAgZGF0YVR5cGU6IHAuZGF0YVR5cGUsXHJcbiAgICAgICAgICBkaXJlY3Rpb246IHAuZGlyZWN0aW9uLFxyXG4gICAgICAgICAgcGFyYW1ldGVyVHlwZTogcC5wYXJhbWV0ZXJUeXBlXHJcbiAgICAgICAgfSkpKVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGlkZWFQYXJhbSA9IGdwSW5mby5wYXJhbWV0ZXJzLmZpbmQocCA9PiBcclxuICAgICAgICAgIHAubmFtZSAmJiAocC5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ2lkZWEnKSB8fCBwLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcygnaWQnKSlcclxuICAgICAgICApXHJcbiAgICAgICAgaWYgKGlkZWFQYXJhbSkge1xyXG4gICAgICAgICAgcGFyYW1OYW1lID0gaWRlYVBhcmFtLm5hbWVcclxuICAgICAgICAgIHBhcmFtSW5mbyA9IGlkZWFQYXJhbVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zdCBpbnB1dFBhcmFtID0gZ3BJbmZvLnBhcmFtZXRlcnMuZmluZChwID0+IFxyXG4gICAgICAgICAgICBwLmRpcmVjdGlvbiA9PT0gJ2VzcmlHUFBhcmFtZXRlckRpcmVjdGlvbklucHV0JyB8fCBwLmRpcmVjdGlvbiA9PT0gJ0dQUGFyYW1ldGVyRGlyZWN0aW9uSW5wdXQnXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgICBpZiAoaW5wdXRQYXJhbSkge1xyXG4gICAgICAgICAgICBwYXJhbU5hbWUgPSBpbnB1dFBhcmFtLm5hbWVcclxuICAgICAgICAgICAgcGFyYW1JbmZvID0gaW5wdXRQYXJhbVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgY29uc29sZS5sb2coJ1BhcsOibWV0cm8gc2VsZWNpb25hZG86JywgcGFyYW1OYW1lKVxyXG4gICAgICBjb25zb2xlLmxvZygnRGV0YWxoZXMgZG8gcGFyw6JtZXRybzonLCBwYXJhbUluZm8pXHJcbiAgICAgIFxyXG4gICAgICBjb25zb2xlLmxvZygnUGFyw6JtZXRybyBxdWUgc2Vyw6EgdXNhZG86JywgcGFyYW1OYW1lKVxyXG4gICAgICBcclxuICAgICAgLy8gVmVyaWZpY2EgbyB0aXBvIGRvIHBhcsOibWV0cm8gcGFyYSBmb3JtYXRhciBjb3JyZXRhbWVudGVcclxuICAgICAgbGV0IHBhcmFtVmFsdWUgPSBpZGVhTnVtYmVyXHJcbiAgICAgIGlmIChncEluZm8ucGFyYW1ldGVycyAmJiBBcnJheS5pc0FycmF5KGdwSW5mby5wYXJhbWV0ZXJzKSkge1xyXG4gICAgICAgIGNvbnN0IHBhcmFtSW5mbyA9IGdwSW5mby5wYXJhbWV0ZXJzLmZpbmQocCA9PiBwLm5hbWUgPT09IHBhcmFtTmFtZSlcclxuICAgICAgICBpZiAocGFyYW1JbmZvKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnSW5mb3JtYcOnw7VlcyBkbyBwYXLDom1ldHJvOicsIHBhcmFtSW5mbylcclxuICAgICAgICAgIC8vIFNlIGZvciB1bSB0aXBvIGVzcGVjw61maWNvLCBwb2RlIHByZWNpc2FyIHNlciBmb3JtYXRhZG8gZGUgZm9ybWEgZGlmZXJlbnRlXHJcbiAgICAgICAgICAvLyBQb3IgZW5xdWFudG8sIHZhbW9zIGVudmlhciBjb21vIHN0cmluZyBzaW1wbGVzXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvLyBQcmVwYXJhIG9zIHBhcsOibWV0cm9zIHBhcmEgYSBleGVjdcOnw6NvXHJcbiAgICAgIC8vIEZvcm1hdG8gZXNwZXJhZG8gcGVsbyBBcmNHSVMgU2VydmVyIEdQOiBwYXLDom1ldHJvcyBjb21vIGZvcm0gZGF0YVxyXG4gICAgICBjb25zdCBwYXJhbXMgPSB7XHJcbiAgICAgICAgW3BhcmFtTmFtZV06IHBhcmFtVmFsdWUsXHJcbiAgICAgICAgZjogJ2pzb24nXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGNvbnNvbGUubG9nKCdQYXLDom1ldHJvcyBwcmVwYXJhZG9zOicsIHBhcmFtcylcclxuICAgICAgXHJcbiAgICAgIC8vIFZlcmlmaWNhIHNlIMOpIHRhcmVmYSBzw61uY3JvbmEgb3UgYXNzw61uY3JvbmFcclxuICAgICAgY29uc3QgZXhlY3V0aW9uVHlwZSA9IGdwSW5mby5leGVjdXRpb25UeXBlIHx8ICdlc3JpRXhlY3V0aW9uVHlwZUFzeW5jaHJvbm91cydcclxuICAgICAgY29uc29sZS5sb2coJ1RpcG8gZGUgZXhlY3XDp8OjbzonLCBleGVjdXRpb25UeXBlKVxyXG4gICAgICBcclxuICAgICAgbGV0IHJlc3VsdFxyXG4gICAgICBcclxuICAgICAgaWYgKGV4ZWN1dGlvblR5cGUgPT09ICdlc3JpRXhlY3V0aW9uVHlwZVN5bmNocm9ub3VzJyB8fCBleGVjdXRpb25UeXBlID09PSAnZXNyaUV4ZWN1dGlvblR5cGVTeW5jaHJvbm91c1N1Ym1pdCcpIHtcclxuICAgICAgICAvLyBUYXJlZmEgc8OtbmNyb25hIC0gZXhlY3V0YSBkaXJldGFtZW50ZVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdFeGVjdXRhbmRvIHRhcmVmYSBzw61uY3JvbmEuLi4nKVxyXG4gICAgICAgIGNvbnN0IGV4ZWN1dGVVcmwgPSBgJHt0aGlzLkdQX1NFUlZJQ0VfVVJMfS9leGVjdXRlYFxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdVUkwgZGUgZXhlY3V0ZTonLCBleGVjdXRlVXJsKVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEZvcm1hdGEgb3MgcGFyw6JtZXRyb3MgY29tbyBmb3JtLXVybGVuY29kZWRcclxuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxyXG4gICAgICAgIE9iamVjdC5rZXlzKHBhcmFtcykuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICAgICAgZm9ybURhdGEuYXBwZW5kKGtleSwgU3RyaW5nKHBhcmFtc1trZXldKSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vIEFkaWNpb25hIHRva2VuIGFvIGJvZHkgKHNlbXByZSBubyBib2R5IHBhcmEgUE9TVClcclxuICAgICAgICBpZiAodG9rZW4pIHtcclxuICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgndG9rZW4nLCB0b2tlbilcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdUb2tlbiBhZGljaW9uYWRvIGFvIGJvZHknKVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBQYXJhIHJlcXVpc2nDp8O1ZXMgUE9TVCwgbsOjbyBhZGljaW9uYSB0b2tlbiBuYSBVUkwsIGFwZW5hcyBubyBib2R5XHJcbiAgICAgICAgLy8gQWxndW5zIHNlcnZpZG9yZXMgcG9kZW0gcmVjbGFtYXIgZGUgdG9rZW4gZHVwbGljYWRvXHJcbiAgICAgICAgY29uc3QgZmluYWxVcmwgPSBleGVjdXRlVXJsXHJcbiAgICAgICAgY29uc29sZS5sb2coJ1VSTCBmaW5hbDonLCBmaW5hbFVybClcclxuICAgICAgICBjb25zb2xlLmxvZygnQm9keSAoZm9ybURhdGEpOicsIGZvcm1EYXRhLnRvU3RyaW5nKCkpXHJcbiAgICAgICAgY29uc29sZS5sb2coJ1Rva2VuIHByZXNlbnRlOicsICEhdG9rZW4pXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgZXhlY3V0ZVJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZmluYWxVcmwsIHtcclxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBib2R5OiBmb3JtRGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gTMOqIGEgcmVzcG9zdGEgbWVzbW8gc2UgbsOjbyBmb3IgT0sgcGFyYSB2ZXIgbyBlcnJvIGRldGFsaGFkb1xyXG4gICAgICAgIHJlc3VsdCA9IGF3YWl0IGV4ZWN1dGVSZXNwb25zZS5qc29uKClcclxuICAgICAgICBjb25zb2xlLmxvZygnUmVzcG9zdGEgZGEgZXhlY3XDp8OjbyBzw61uY3JvbmE6JywgcmVzdWx0KVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICghZXhlY3V0ZVJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAvLyBTZSBhIHJlc3Bvc3RhIHRlbSB1bSBlcnJvIG5vIEpTT04sIHVzYSBlbGVcclxuICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3IpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvIGFvIGV4ZWN1dGFyIHRhcmVmYTogJHtKU09OLnN0cmluZ2lmeShyZXN1bHQuZXJyb3IpfWApXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm8gYW8gZXhlY3V0YXIgdGFyZWZhOiAke2V4ZWN1dGVSZXNwb25zZS5zdGF0dXN9ICR7ZXhlY3V0ZVJlc3BvbnNlLnN0YXR1c1RleHR9IC0gJHtKU09OLnN0cmluZ2lmeShyZXN1bHQpfWApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIFRhcmVmYSBhc3PDrW5jcm9uYSAtIHN1Ym1ldGUgam9iIGUgYWd1YXJkYVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdFeGVjdXRhbmRvIHRhcmVmYSBhc3PDrW5jcm9uYS4uLicpXHJcbiAgICAgICAgY29uc3Qgc3VibWl0VXJsID0gYCR7dGhpcy5HUF9TRVJWSUNFX1VSTH0vc3VibWl0Sm9iYFxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdVUkwgYmFzZSBkbyBzZXJ2acOnbzonLCB0aGlzLkdQX1NFUlZJQ0VfVVJMKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdVUkwgZGUgc3VibWl0IGNvbXBsZXRhOicsIHN1Ym1pdFVybClcclxuICAgICAgICBcclxuICAgICAgICAvLyBWZXJpZmljYSBzZSBhIFVSTCBlc3TDoSB2w6FsaWRhXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIG5ldyBVUkwoc3VibWl0VXJsKVxyXG4gICAgICAgICAgY29uc29sZS5sb2coJ1VSTCB2w6FsaWRhIOKckycpXHJcbiAgICAgICAgfSBjYXRjaCAodXJsRXJyb3IpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VSTCBpbnbDoWxpZGE6JywgdXJsRXJyb3IpXHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVSTCBpbnbDoWxpZGE6ICR7c3VibWl0VXJsfWApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEZvcm1hdGEgb3MgcGFyw6JtZXRyb3MgY29tbyBmb3JtLXVybGVuY29kZWRcclxuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxyXG4gICAgICAgIE9iamVjdC5rZXlzKHBhcmFtcykuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICAgICAgZm9ybURhdGEuYXBwZW5kKGtleSwgU3RyaW5nKHBhcmFtc1trZXldKSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vIEFkaWNpb25hIHRva2VuIGFvIGJvZHkgKHNlbXByZSBubyBib2R5IHBhcmEgUE9TVClcclxuICAgICAgICBpZiAodG9rZW4pIHtcclxuICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgndG9rZW4nLCB0b2tlbilcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdUb2tlbiBhZGljaW9uYWRvIGFvIGJvZHknKVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBQYXJhIHJlcXVpc2nDp8O1ZXMgUE9TVCwgbsOjbyBhZGljaW9uYSB0b2tlbiBuYSBVUkwsIGFwZW5hcyBubyBib2R5XHJcbiAgICAgICAgLy8gQWxndW5zIHNlcnZpZG9yZXMgcG9kZW0gcmVjbGFtYXIgZGUgdG9rZW4gZHVwbGljYWRvXHJcbiAgICAgICAgY29uc3QgZmluYWxVcmwgPSBzdWJtaXRVcmxcclxuICAgICAgICBjb25zb2xlLmxvZygnVVJMIGZpbmFsOicsIGZpbmFsVXJsKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdCb2R5IChmb3JtRGF0YSk6JywgZm9ybURhdGEudG9TdHJpbmcoKSlcclxuICAgICAgICBjb25zb2xlLmxvZygnVG9rZW4gcHJlc2VudGU6JywgISF0b2tlbilcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBzdWJtaXRSZXNwb25zZSA9IGF3YWl0IGZldGNoKGZpbmFsVXJsLCB7XHJcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgYm9keTogZm9ybURhdGFcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEzDqiBhIHJlc3Bvc3RhIG1lc21vIHNlIG7Do28gZm9yIE9LIHBhcmEgdmVyIG8gZXJybyBkZXRhbGhhZG9cclxuICAgICAgICBjb25zdCBqb2JJbmZvID0gYXdhaXQgc3VibWl0UmVzcG9uc2UuanNvbigpXHJcbiAgICAgICAgY29uc29sZS5sb2coJ1Jlc3Bvc3RhIGRvIHN1Ym1pdEpvYjonLCBqb2JJbmZvKVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICghc3VibWl0UmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgIC8vIFNlIGEgcmVzcG9zdGEgdGVtIHVtIGVycm8gbm8gSlNPTiwgdXNhIGVsZVxyXG4gICAgICAgICAgaWYgKGpvYkluZm8uZXJyb3IpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvIGFvIHN1Ym1ldGVyIGpvYjogJHtKU09OLnN0cmluZ2lmeShqb2JJbmZvLmVycm9yKX1gKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvIGFvIHN1Ym1ldGVyIGpvYjogJHtzdWJtaXRSZXNwb25zZS5zdGF0dXN9ICR7c3VibWl0UmVzcG9uc2Uuc3RhdHVzVGV4dH0gLSAke0pTT04uc3RyaW5naWZ5KGpvYkluZm8pfWApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChqb2JJbmZvLmVycm9yKSB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm8gYW8gc3VibWV0ZXIgam9iOiAke0pTT04uc3RyaW5naWZ5KGpvYkluZm8uZXJyb3IpfWApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGpvYklkID0gam9iSW5mby5qb2JJZFxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdKb2IgSUQ6Jywgam9iSWQpXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gUG9sbGluZyBkbyBzdGF0dXMgZG8gam9iXHJcbiAgICAgICAgbGV0IGF0dGVtcHRzID0gMFxyXG4gICAgICAgIGNvbnN0IG1heEF0dGVtcHRzID0gNjBcclxuICAgICAgICBsZXQgam9iU3RhdHVzID0gbnVsbFxyXG4gICAgICAgIFxyXG4gICAgICAgIHdoaWxlIChhdHRlbXB0cyA8IG1heEF0dGVtcHRzKSB7XHJcbiAgICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMTAwMCkpXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGNvbnN0IHN0YXR1c1VybCA9IGFkZFRva2VuVG9VcmwoYCR7dGhpcy5HUF9TRVJWSUNFX1VSTH0vam9icy8ke2pvYklkfT9mPWpzb25gKVxyXG4gICAgICAgICAgY29uc3Qgc3RhdHVzUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChzdGF0dXNVcmwpXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGlmICghc3RhdHVzUmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvIGFvIHZlcmlmaWNhciBzdGF0dXMgZG8gam9iOiAke3N0YXR1c1Jlc3BvbnNlLnN0YXR1c31gKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBqb2JTdGF0dXMgPSBhd2FpdCBzdGF0dXNSZXNwb25zZS5qc29uKClcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGBTdGF0dXMgZG8gam9iICh0ZW50YXRpdmEgJHthdHRlbXB0cyArIDF9KTpgLCBqb2JTdGF0dXMuam9iU3RhdHVzKVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBpZiAoam9iU3RhdHVzLmpvYlN0YXR1cyA9PT0gJ2VzcmlKb2JTdWNjZWVkZWQnKSB7XHJcbiAgICAgICAgICAgIC8vIE9idMOpbSBvcyByZXN1bHRhZG9zXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdFVybCA9IGFkZFRva2VuVG9VcmwoYCR7dGhpcy5HUF9TRVJWSUNFX1VSTH0vam9icy8ke2pvYklkfS9yZXN1bHRzP2Y9anNvbmApXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdFJlc3BvbnNlID0gYXdhaXQgZmV0Y2gocmVzdWx0VXJsKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKCFyZXN1bHRSZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJybyBhbyBvYnRlciByZXN1bHRhZG9zOiAke3Jlc3VsdFJlc3BvbnNlLnN0YXR1c31gKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXN1bHQgPSBhd2FpdCByZXN1bHRSZXNwb25zZS5qc29uKClcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1Jlc3VsdGFkbyBkYSBleGVjdcOnw6NvIGFzc8OtbmNyb25hOicsIHJlc3VsdClcclxuICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoam9iU3RhdHVzLmpvYlN0YXR1cyA9PT0gJ2VzcmlKb2JGYWlsZWQnKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSm9iIGZhbGhvdTogJHtqb2JTdGF0dXMubWVzc2FnZXMgPyBKU09OLnN0cmluZ2lmeShqb2JTdGF0dXMubWVzc2FnZXMpIDogJ0Vycm8gZGVzY29uaGVjaWRvJ31gKVxyXG4gICAgICAgICAgfSBlbHNlIGlmIChqb2JTdGF0dXMuam9iU3RhdHVzID09PSAnZXNyaUpvYkNhbmNlbGxlZCcpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdKb2IgZm9pIGNhbmNlbGFkbycpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGF0dGVtcHRzKytcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGF0dGVtcHRzID49IG1heEF0dGVtcHRzKSB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RpbWVvdXQ6IE8gam9iIGRlbW9yb3UgbWFpcyBkZSA2MCBzZWd1bmRvcyBwYXJhIGNvbXBsZXRhcicpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBjb25zb2xlLmxvZygnUmVzdWx0YWRvIGNvbXBsZXRvIGRhIEdQOicsIEpTT04uc3RyaW5naWZ5KHJlc3VsdCwgbnVsbCwgMikpXHJcblxyXG4gICAgICAvLyBQcm9jZXNzYSBvIHJlc3VsdGFkbyAtIHByb2N1cmEgcGVsYSBVUkwgZG8gSFRNTFxyXG4gICAgICBsZXQgaHRtbFVybCA9IG51bGxcclxuXHJcbiAgICAgIC8vIFBhcmEgdGFyZWZhcyBhc3PDrW5jcm9uYXMsIG9zIHJlc3VsdGFkb3MgcG9kZW0gZXN0YXIgZW0gdW1hIGVzdHJ1dHVyYSBkaWZlcmVudGVcclxuICAgICAgLy8gUHJpbWVpcm8sIHZlcmlmaWNhIHNlIGjDoSBlcnJvc1xyXG4gICAgICBpZiAocmVzdWx0LmVycm9yKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvIG5hIEdQOiAke0pTT04uc3RyaW5naWZ5KHJlc3VsdC5lcnJvcil9YClcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gUHJvY3VyYSBlbSByZXN1bHQucmVzdWx0cyAoZXN0cnV0dXJhIGNvbXVtIHBhcmEgdGFyZWZhcyBzw61uY3JvbmFzKVxyXG4gICAgICBpZiAocmVzdWx0LnJlc3VsdHMgJiYgQXJyYXkuaXNBcnJheShyZXN1bHQucmVzdWx0cykpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IHJlc3VsdEl0ZW0gb2YgcmVzdWx0LnJlc3VsdHMpIHtcclxuICAgICAgICAgIC8vIE8gcmVzdWx0YWRvIHBvZGUgZXN0YXIgZGlyZXRhbWVudGUgbm8gcmVzdWx0SXRlbSBvdSBlbSByZXN1bHRJdGVtLnZhbHVlXHJcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IHJlc3VsdEl0ZW0udmFsdWUgIT09IHVuZGVmaW5lZCA/IHJlc3VsdEl0ZW0udmFsdWUgOiByZXN1bHRJdGVtXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlLmluY2x1ZGVzKCcuaHRtbCcpKSB7XHJcbiAgICAgICAgICAgIGh0bWxVcmwgPSB2YWx1ZVxyXG4gICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgIC8vIFByb2N1cmEgcG9yIHByb3ByaWVkYWRlcyBjb211bnMgcXVlIGNvbnTDqm0gVVJMc1xyXG4gICAgICAgICAgICBpZiAodmFsdWUudXJsICYmIHR5cGVvZiB2YWx1ZS51cmwgPT09ICdzdHJpbmcnICYmIHZhbHVlLnVybC5pbmNsdWRlcygnLmh0bWwnKSkge1xyXG4gICAgICAgICAgICAgIGh0bWxVcmwgPSB2YWx1ZS51cmxcclxuICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlLnBhdGhVcmwgJiYgdHlwZW9mIHZhbHVlLnBhdGhVcmwgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgaHRtbFVybCA9IHZhbHVlLnBhdGhVcmxcclxuICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlLnZhbHVlICYmIHR5cGVvZiB2YWx1ZS52YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUudmFsdWUuaW5jbHVkZXMoJy5odG1sJykpIHtcclxuICAgICAgICAgICAgICBodG1sVXJsID0gdmFsdWUudmFsdWVcclxuICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBQYXJhIHRhcmVmYXMgYXNzw61uY3JvbmFzLCBvcyByZXN1bHRhZG9zIHBvZGVtIGVzdGFyIGVtIHJlc3VsdC5yZXN1bHRzIGNvbW8gb2JqZXRvXHJcbiAgICAgIGlmICghaHRtbFVybCAmJiByZXN1bHQucmVzdWx0cyAmJiB0eXBlb2YgcmVzdWx0LnJlc3VsdHMgPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KHJlc3VsdC5yZXN1bHRzKSkge1xyXG4gICAgICAgIC8vIEl0ZXJhIHNvYnJlIGFzIHByb3ByaWVkYWRlcyBkbyBvYmpldG8gcmVzdWx0c1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHJlc3VsdC5yZXN1bHRzKSB7XHJcbiAgICAgICAgICBjb25zdCByZXN1bHRJdGVtID0gcmVzdWx0LnJlc3VsdHNba2V5XVxyXG4gICAgICAgICAgaWYgKHJlc3VsdEl0ZW0gJiYgcmVzdWx0SXRlbS52YWx1ZSkge1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHJlc3VsdEl0ZW0udmFsdWVcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUuaW5jbHVkZXMoJy5odG1sJykpIHtcclxuICAgICAgICAgICAgICBodG1sVXJsID0gdmFsdWVcclxuICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlLnVybCAmJiB0eXBlb2YgdmFsdWUudXJsID09PSAnc3RyaW5nJyAmJiB2YWx1ZS51cmwuaW5jbHVkZXMoJy5odG1sJykpIHtcclxuICAgICAgICAgICAgICBodG1sVXJsID0gdmFsdWUudXJsXHJcbiAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZS5wYXRoVXJsICYmIHR5cGVvZiB2YWx1ZS5wYXRoVXJsID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgIGh0bWxVcmwgPSB2YWx1ZS5wYXRoVXJsXHJcbiAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gUHJvY3VyYSBlbSBvdXRyYXMgcHJvcHJpZWRhZGVzIGRvIHJlc3VsdGFkb1xyXG4gICAgICBpZiAoIWh0bWxVcmwgJiYgcmVzdWx0Lm91dHB1dFVybCkge1xyXG4gICAgICAgIGh0bWxVcmwgPSByZXN1bHQub3V0cHV0VXJsXHJcbiAgICAgIH1cclxuICAgICAgaWYgKCFodG1sVXJsICYmIHJlc3VsdC51cmwpIHtcclxuICAgICAgICBodG1sVXJsID0gcmVzdWx0LnVybFxyXG4gICAgICB9XHJcbiAgICAgIGlmICghaHRtbFVybCAmJiByZXN1bHQuZmlsZVVybCkge1xyXG4gICAgICAgIGh0bWxVcmwgPSByZXN1bHQuZmlsZVVybFxyXG4gICAgICB9XHJcbiAgICAgIGlmICghaHRtbFVybCAmJiByZXN1bHQub3V0cHV0RmlsZSkge1xyXG4gICAgICAgIGh0bWxVcmwgPSByZXN1bHQub3V0cHV0RmlsZVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBCdXNjYSBwb3IgcmVnZXggZW0gdG9kbyBvIG9iamV0byAow7psdGltbyByZWN1cnNvKVxyXG4gICAgICBpZiAoIWh0bWxVcmwpIHtcclxuICAgICAgICBjb25zdCByZXN1bHRTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShyZXN1bHQpXHJcbiAgICAgICAgY29uc3QgdXJsTWF0Y2ggPSByZXN1bHRTdHJpbmcubWF0Y2goL2h0dHBzPzpcXC9cXC9bXlxcc1wiPD5dK1xcLmh0bWwvZylcclxuICAgICAgICBpZiAodXJsTWF0Y2ggJiYgdXJsTWF0Y2gubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgaHRtbFVybCA9IHVybE1hdGNoWzBdXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoaHRtbFVybCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdVUkwgZG8gSFRNTCBlbmNvbnRyYWRhOicsIGh0bWxVcmwpXHJcbiAgICAgICAgLy8gQWJyZSBvIEhUTUwgZW0gdW1hIG5vdmEgZ3VpYVxyXG4gICAgICAgIHdpbmRvdy5vcGVuKGh0bWxVcmwsICdfYmxhbmsnKVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIFNlIG7Do28gZW5jb250cm91IGEgVVJMLCBtb3N0cmEgbyByZXN1bHRhZG8gY29tcGxldG8gcGFyYSBkZWJ1Z1xyXG4gICAgICAgIGNvbnNvbGUud2FybignTsOjbyBmb2kgcG9zc8OtdmVsIGVuY29udHJhciBhIFVSTCBkbyBIVE1MIG5vIHJlc3VsdGFkbzonLCByZXN1bHQpXHJcbiAgICAgICAgY29uc29sZS53YXJuKCdSZXN1bHRhZG8gY29tcGxldG86JywgSlNPTi5zdHJpbmdpZnkocmVzdWx0LCBudWxsLCAyKSlcclxuICAgICAgICBhbGVydCgnUmVsYXTDs3JpbyBnZXJhZG8sIG1hcyBuw6NvIGZvaSBwb3Nzw612ZWwgZW5jb250cmFyIGEgVVJMIGRvIEhUTUwuIFZlcmlmaXF1ZSBvIGNvbnNvbGUgZG8gbmF2ZWdhZG9yIChGMTIpIHBhcmEgdmVyIG9zIGRldGFsaGVzIGRvIHJlc3VsdGFkby4nKVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KVxyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvIGNvbXBsZXRvIGFvIGV4ZWN1dGFyIGEgZmVycmFtZW50YSBkZSBnZW9wcm9jZXNzYW1lbnRvOicsIGVycm9yKVxyXG4gICAgICBjb25zb2xlLmVycm9yKCdTdGFjayB0cmFjZTonLCBlcnJvci5zdGFjaylcclxuICAgICAgXHJcbiAgICAgIGxldCBlcnJvck1lc3NhZ2UgPSAnRXJybyBhbyBnZXJhciByZWxhdMOzcmlvLlxcblxcbidcclxuICAgICAgXHJcbiAgICAgIGlmIChlcnJvci5tZXNzYWdlKSB7XHJcbiAgICAgICAgZXJyb3JNZXNzYWdlICs9IGBNZW5zYWdlbTogJHtlcnJvci5tZXNzYWdlfVxcblxcbmBcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgaWYgKGVycm9yLmRldGFpbHMgJiYgQXJyYXkuaXNBcnJheShlcnJvci5kZXRhaWxzKSAmJiBlcnJvci5kZXRhaWxzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBlcnJvck1lc3NhZ2UgKz0gYERldGFsaGVzOiAke2Vycm9yLmRldGFpbHNbMF19XFxuXFxuYFxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBlcnJvck1lc3NhZ2UgKz0gJ1ZlcmlmaXF1ZTpcXG4nXHJcbiAgICAgIGVycm9yTWVzc2FnZSArPSAnMS4gU2UgbyBuw7ptZXJvIGRlIGlkZWEgZXN0w6EgY29ycmV0b1xcbidcclxuICAgICAgZXJyb3JNZXNzYWdlICs9ICcyLiBTZSBhIGZlcnJhbWVudGEgZGUgZ2VvcHJvY2Vzc2FtZW50byBlc3TDoSBhY2Vzc8OtdmVsXFxuJ1xyXG4gICAgICBlcnJvck1lc3NhZ2UgKz0gJzMuIEFicmEgbyBjb25zb2xlIGRvIG5hdmVnYWRvciAoRjEyKSBwYXJhIG1haXMgZGV0YWxoZXMnXHJcbiAgICAgIFxyXG4gICAgICBhbGVydChlcnJvck1lc3NhZ2UpXHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyICgpIHtcclxuICAgIGNvbnN0IHN0eWxlID0gY3NzYFxyXG4gICAgICAud2lkZ2V0LWNvbnRhaW5lciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGdhcDogMTJweDtcclxuICAgICAgfVxyXG4gICAgICBmb3JtID4gZGl2IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGdhcDogOHB4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICBtaW4td2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgcGFkZGluZzogOHB4IDE2cHg7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI2NjY0MDtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWU0ZjMyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJjpkaXNhYmxlZCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XHJcbiAgICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5yZXBvcnQtYnV0dG9uIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjY2NjQwO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICBwYWRkaW5nOiA4cHggMTZweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xyXG4gICAgICAgICY6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFlNGYzMjtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOmFjdGl2ZTpub3QoOmRpc2FibGVkKSB7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjpmb2N1czpub3QoOmRpc2FibGVkKSB7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjpkaXNhYmxlZCB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG4gICAgICAgICAgY29sb3I6ICM5ZTllOWU7XHJcbiAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjpub3QoOmRpc2FibGVkKSB7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLmNsZWFyLWJ1dHRvbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcclxuICAgICAgICBjb2xvcjogIzQyNDI0MjtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICBwYWRkaW5nOiA4cHggMTZweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNiZGJkYmQ7XHJcbiAgICAgICAgICBjb2xvcjogIzIxMjEyMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjpkaXNhYmxlZCB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG4gICAgICAgICAgY29sb3I6ICM5ZTllOWU7XHJcbiAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuc3RhdHVzLW1lc3NhZ2Uge1xyXG4gICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTdmM2ZmO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIH1cclxuICAgICAgLmxvYWRpbmcge1xyXG4gICAgICAgIGNvbG9yOiAjMDA3OWMxO1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1hZGRMYXllcnMgamltdS13aWRnZXQgcC0yXCIgY3NzPXtzdHlsZX0+XHJcbiAgICAgICAge3RoaXMucHJvcHMuaGFzT3duUHJvcGVydHkoJ3VzZU1hcFdpZGdldElkcycpICYmXHJcbiAgICAgICAgICB0aGlzLnByb3BzLnVzZU1hcFdpZGdldElkcyAmJlxyXG4gICAgICAgICAgdGhpcy5wcm9wcy51c2VNYXBXaWRnZXRJZHMubGVuZ3RoID09PSAxICYmIChcclxuICAgICAgICAgICAgPEppbXVNYXBWaWV3Q29tcG9uZW50XHJcbiAgICAgICAgICAgICAgdXNlTWFwV2lkZ2V0SWQ9e3RoaXMucHJvcHMudXNlTWFwV2lkZ2V0SWRzPy5bMF19XHJcbiAgICAgICAgICAgICAgb25BY3RpdmVWaWV3Q2hhbmdlPXsoam12OiBKaW11TWFwVmlldykgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgIGppbXVNYXBWaWV3OiBqbXZcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250YWluZXJcIj5cclxuICAgICAgICAgIDxwPntkZWZhdWx0TWVzc2FnZXMuaW5zdHJ1Y3Rpb25zfTwvcD5cclxuXHJcblxyXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlRmlsdGVyQW5kWm9vbX0+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17ZGVmYXVsdE1lc3NhZ2VzLnNlYXJjaElkZWF9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5pZGVhU2VhcmNoSW5wdXR9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJZGVhU2VhcmNoSW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17IXRoaXMuc3RhdGUuZmVhdHVyZUxheWVyIHx8IHRoaXMuc3RhdGUubG9hZGluZ31cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXshdGhpcy5zdGF0ZS5mZWF0dXJlTGF5ZXIgfHwgdGhpcy5zdGF0ZS5sb2FkaW5nfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtkZWZhdWx0TWVzc2FnZXMuZmlsdGVyQW5kWm9vbX1cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICAgICAge3RoaXMuc3RhdGUuZmVhdHVyZUxheWVyICYmIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZXBvcnQtYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlR2VuZXJhdGVSZXBvcnR9XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5zdGF0ZS5sb2FkaW5nIHx8ICF0aGlzLnN0YXRlLmlkZWFTZWFyY2hJbnB1dCB8fCB0aGlzLnN0YXRlLmlkZWFTZWFyY2hJbnB1dC50cmltKCkgPT09ICcnfVxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e3RoaXMuc3RhdGUubG9hZGluZyB8fCAhdGhpcy5zdGF0ZS5pZGVhU2VhcmNoSW5wdXQgfHwgdGhpcy5zdGF0ZS5pZGVhU2VhcmNoSW5wdXQudHJpbSgpID09PSAnJyBcclxuICAgICAgICAgICAgICAgICAgPyAnRGlnaXRlIHVtIG7Dum1lcm8gZGUgaWRlYSBwYXJhIGdlcmFyIG8gcmVsYXTDs3JpbycgXHJcbiAgICAgICAgICAgICAgICAgIDogJ0dlcmFyIHJlbGF0w7NyaW8gcGFyYSBvIG7Dum1lcm8gZGUgaWRlYSBpbmZvcm1hZG8nfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtkZWZhdWx0TWVzc2FnZXMuZ2VuZXJhdGVSZXBvcnR9XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xlYXItYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xlYXJGaWx0ZXJ9XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5zdGF0ZS5sb2FkaW5nfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtkZWZhdWx0TWVzc2FnZXMuY2xlYXJGaWx0ZXJ9XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
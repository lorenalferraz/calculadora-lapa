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
                console.log('Informações da GP:', gpInfo);
                // Descobre qual é o parâmetro de entrada
                let paramName = 'idea';
                if (gpInfo.parameters && Array.isArray(gpInfo.parameters)) {
                    const ideaParam = gpInfo.parameters.find(p => p.name && (p.name.toLowerCase().includes('idea') || p.name.toLowerCase().includes('id')));
                    if (ideaParam) {
                        paramName = ideaParam.name;
                    }
                    else {
                        const inputParam = gpInfo.parameters.find(p => p.direction === 'esriGPParameterDirectionInput' || p.direction === 'GPParameterDirectionInput');
                        if (inputParam) {
                            paramName = inputParam.name;
                        }
                    }
                }
                console.log('Parâmetro que será usado:', paramName);
                // Prepara os parâmetros para a execução
                const params = {
                    [paramName]: ideaNumber,
                    f: 'json'
                };
                // Verifica se é tarefa síncrona ou assíncrona
                const executionType = gpInfo.executionType || 'esriExecutionTypeAsynchronous';
                console.log('Tipo de execução:', executionType);
                let result;
                if (executionType === 'esriExecutionTypeSynchronous' || executionType === 'esriExecutionTypeSynchronousSubmit') {
                    // Tarefa síncrona - executa diretamente
                    console.log('Executando tarefa síncrona...');
                    const executeUrl = `${this.GP_SERVICE_URL}/execute`;
                    console.log('URL de execute:', executeUrl);
                    const formData = new URLSearchParams();
                    Object.keys(params).forEach(key => {
                        formData.append(key, params[key]);
                    });
                    // Adiciona token ao body (sempre no body para POST)
                    if (token) {
                        formData.append('token', token);
                        console.log('Token adicionado ao body');
                    }
                    // Para POST, adiciona token na URL também para garantir
                    const finalUrl = token ? addTokenToUrl(executeUrl) : executeUrl;
                    console.log('URL final:', finalUrl);
                    console.log('Body:', formData.toString());
                    const executeResponse = yield fetch(finalUrl, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        },
                        body: formData
                    });
                    if (!executeResponse.ok) {
                        throw new Error(`Erro ao executar tarefa: ${executeResponse.status} ${executeResponse.statusText}`);
                    }
                    result = yield executeResponse.json();
                    console.log('Resultado da execução síncrona:', result);
                }
                else {
                    // Tarefa assíncrona - submete job e aguarda
                    console.log('Executando tarefa assíncrona...');
                    const submitUrl = `${this.GP_SERVICE_URL}/submitJob`;
                    console.log('URL de submit:', submitUrl);
                    const formData = new URLSearchParams();
                    Object.keys(params).forEach(key => {
                        formData.append(key, params[key]);
                    });
                    // Adiciona token ao body (sempre no body para POST)
                    if (token) {
                        formData.append('token', token);
                        console.log('Token adicionado ao body');
                    }
                    // Para POST, adiciona token na URL também para garantir
                    const finalUrl = token ? addTokenToUrl(submitUrl) : submitUrl;
                    console.log('URL final:', finalUrl);
                    console.log('Body:', formData.toString());
                    const submitResponse = yield fetch(finalUrl, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        },
                        body: formData
                    });
                    if (!submitResponse.ok) {
                        throw new Error(`Erro ao submeter job: ${submitResponse.status} ${submitResponse.statusText}`);
                    }
                    const jobInfo = yield submitResponse.json();
                    console.log('Job submetido:', jobInfo);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9maWx0cmFyLWUtZ2VyYXItcmVsYXRvcmlvL2Rpc3QvcnVudGltZS93aWRnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlFQUFlO0lBQ2IsWUFBWSxFQUFFLGtCQUFrQjtJQUNoQyxRQUFRLEVBQUUsa0JBQWtCO0lBQzVCLGlCQUFpQixFQUFFLHdCQUF3QjtJQUMzQyxZQUFZLEVBQ1YsdUZBQXVGO0lBQ3pGLFVBQVUsRUFBRSw2QkFBNkI7SUFDekMsYUFBYSxFQUFFLFNBQVM7SUFDeEIsY0FBYyxFQUFFLGlCQUFpQjtJQUNqQyxXQUFXLEVBQUUsZUFBZTtJQUM1QixPQUFPLEVBQUUsZUFBZTtJQUN4QixXQUFXLEVBQUUsK0JBQStCO0NBQzdDOzs7Ozs7Ozs7Ozs7QUNaRDs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7QUNBQTs7O0tBR0s7QUFDTCxxQkFBdUIsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0puRCwwQ0FBMEM7QUFDMUMsZUFBZTtBQUNmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFrQkU7QUFDOEQ7QUFLNUM7QUFJZ0M7QUFVckMsTUFBTSxNQUFPLFNBQVEsNENBQUssQ0FBQyxhQUd6QztJQUhEOztRQVVFLFVBQUssR0FBRztZQUNOLGVBQWUsRUFBRSxFQUFFO1lBQ25CLFdBQVcs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aURBQWlELElBRXBELDZEQUFlLENBQUMsY0FBYyxDQUN4QjtvQkFDVCwyREFDRSxTQUFTLEVBQUMsY0FBYyxFQUN4QixPQUFPLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixFQUMvQixRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLElBRTNCLDZEQUFlLENBQUMsV0FBVyxDQUNyQixDQUNSLENBQ0osQ0FDRyxDQUNGLENBQ1A7SUFDSCxDQUFDO0NBQ0Y7QUFFTyxTQUFTLDJCQUEyQixDQUFDLEdBQUcsSUFBSSxxQkFBdUIsR0FBRyxHQUFHLEVBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9maWx0cmFyLWUtZ2VyYXItcmVsYXRvcmlvL3NyYy9ydW50aW1lL3RyYW5zbGF0aW9ucy9kZWZhdWx0LnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1hcmNnaXNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvZmlsdHJhci1lLWdlcmFyLXJlbGF0b3Jpby9zcmMvcnVudGltZS93aWRnZXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcclxuICBfd2lkZ2V0TGFiZWw6ICdGaWx0cmFyIGUgQmFpeGFyJyxcclxuICBhZGRMYXllcjogJ0FkaWNpb25hciBDYW1hZGEnLFxyXG4gIGZlYXR1cmVTZXJ2aWNlVXJsOiAnVVJMIGRvIEZlYXR1cmUgU2VydmljZScsXHJcbiAgaW5zdHJ1Y3Rpb25zOlxyXG4gICAgJ0RpZ2l0ZSB1bSBuw7ptZXJvIG5hIGNvbHVuYSBcImlkZWFcIiBwYXJhIGZpbHRyYXIgZSBkYXIgem9vbSBubyBwb2zDrWdvbm8gY29ycmVzcG9uZGVudGUuJyxcclxuICBzZWFyY2hJZGVhOiAnUGVzcXVpc2FyIHBvciBuw7ptZXJvIChpZGVhKScsXHJcbiAgZmlsdGVyQW5kWm9vbTogJ0ZpbHRyYXInLFxyXG4gIGdlbmVyYXRlUmVwb3J0OiAnR2VyYXIgUmVsYXTDs3JpbycsXHJcbiAgY2xlYXJGaWx0ZXI6ICdMaW1wYXIgRmlsdHJvJyxcclxuICBsb2FkaW5nOiAnQ2FycmVnYW5kby4uLicsXHJcbiAgbGF5ZXJMb2FkZWQ6ICdDYW1hZGEgY2FycmVnYWRhIGNvbSBzdWNlc3NvISdcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9hcmNnaXNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zICovXHJcbi8qKiBAanN4IGpzeCAqL1xyXG4vKipcclxuICBMaWNlbnNpbmdcclxuXHJcbiAgQ29weXJpZ2h0IDIwMjIgRXNyaVxyXG5cclxuICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyBZb3VcclxuICBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heVxyXG4gIG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcbiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3JcclxuICBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmdcclxuICBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcblxyXG4gIEEgY29weSBvZiB0aGUgbGljZW5zZSBpcyBhdmFpbGFibGUgaW4gdGhlIHJlcG9zaXRvcnknc1xyXG4gIExJQ0VOU0UgZmlsZS5cclxuKi9cclxuaW1wb3J0IHsgUmVhY3QsIHR5cGUgQWxsV2lkZ2V0UHJvcHMsIGNzcywganN4IH0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQge1xyXG4gIGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMsXHJcbiAgSmltdU1hcFZpZXdDb21wb25lbnQsXHJcbiAgdHlwZSBKaW11TWFwVmlld1xyXG59IGZyb20gJ2ppbXUtYXJjZ2lzJ1xyXG5cclxuaW1wb3J0IHR5cGUgeyBJTUNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZydcclxuXHJcbmltcG9ydCBkZWZhdWx0TWVzc2FnZXMgZnJvbSAnLi90cmFuc2xhdGlvbnMvZGVmYXVsdCdcclxuXHJcbmludGVyZmFjZSBJU3RhdGUge1xyXG4gIGlkZWFTZWFyY2hJbnB1dDogc3RyaW5nXHJcbiAgamltdU1hcFZpZXc6IEppbXVNYXBWaWV3XHJcbiAgZmVhdHVyZUxheWVyOiBfX2VzcmkuRmVhdHVyZUxheWVyXHJcbiAgbG9hZGluZzogYm9vbGVhblxyXG4gIGluaXRpYWxFeHRlbnQ6IF9fZXNyaS5FeHRlbnRcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2lkZ2V0IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxcclxuQWxsV2lkZ2V0UHJvcHM8SU1Db25maWc+LFxyXG5JU3RhdGVcclxuPiB7XHJcbiAgLy8gR2l2ZSB0eXBlcyB0byB0aGUgbW9kdWxlcyB3ZSBpbXBvcnQgZnJvbSB0aGUgQXJjR0lTIEFQSSBmb3IgSmF2YVNjcmlwdFxyXG4gIC8vIHRvIHRlbGwgVHlwZVNjcmlwdCB3aGF0IHR5cGVzIHRoZXkgYXJlLlxyXG4gIEZlYXR1cmVMYXllcjogdHlwZW9mIF9fZXNyaS5GZWF0dXJlTGF5ZXJcclxuICBRdWVyeTogdHlwZW9mIF9fZXNyaS5RdWVyeVxyXG4gIFNwYXRpYWxSZWZlcmVuY2U6IHR5cGVvZiBfX2VzcmkuU3BhdGlhbFJlZmVyZW5jZVxyXG5cclxuICBzdGF0ZSA9IHtcclxuICAgIGlkZWFTZWFyY2hJbnB1dDogJycsXHJcbiAgICBqaW11TWFwVmlldzogbnVsbCxcclxuICAgIGZlYXR1cmVMYXllcjogbnVsbCxcclxuICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgaW5pdGlhbEV4dGVudDogbnVsbFxyXG4gIH1cclxuXHJcbiAgLy8gVVJMIGZpeGEgZGEgY2FtYWRhXHJcbiAgcmVhZG9ubHkgRkVBVFVSRV9TRVJWSUNFX1VSTCA9ICdodHRwczovL21laW9hbWJpZW50ZS5zaXN0ZW1hcy5tcGJhLm1wLmJyL3NlcnZlci9yZXN0L3NlcnZpY2VzL0hvc3RlZC9hbGVydGFzX3JlZ2lvbmFsX2xhcGEvRmVhdHVyZVNlcnZlcidcclxuICBcclxuICAvLyBVUkwgZGEgZmVycmFtZW50YSBkZSBnZW9wcm9jZXNzYW1lbnRvXHJcbiAgcmVhZG9ubHkgR1BfU0VSVklDRV9VUkwgPSAnaHR0cHM6Ly9tZWlvYW1iaWVudGUuc2lzdGVtYXMubXBiYS5tcC5ici9zZXJ2ZXIvcmVzdC9zZXJ2aWNlcy90ZXN0ZW91dHB1dC9wcm9jZXNzYXJhbGVydGFfaWRlYS9HUFNlcnZlcidcclxuXHJcbiAgLy8gRnVuw6fDo28gY2hhbWFkYSBxdWFuZG8gbyB2YWxvciBkYSBwZXNxdWlzYSBtdWRhXHJcbiAgaGFuZGxlSWRlYVNlYXJjaElucHV0Q2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgaWRlYVNlYXJjaElucHV0OiBldmVudC50YXJnZXQudmFsdWVcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICAvLyBDYXJyZWdhIGEgY2FtYWRhIGF1dG9tYXRpY2FtZW50ZSBxdWFuZG8gbyBjb21wb25lbnRlIMOpIG1vbnRhZG8gb3UgbyBtYXBhIGVzdMOhIGRpc3BvbsOtdmVsXHJcbiAgY29tcG9uZW50RGlkVXBkYXRlID0gKHByZXZQcm9wcywgcHJldlN0YXRlKSA9PiB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5qaW11TWFwVmlldyAmJiAhdGhpcy5zdGF0ZS5mZWF0dXJlTGF5ZXIgJiYgIXByZXZTdGF0ZS5qaW11TWFwVmlldykge1xyXG4gICAgICAvLyBTYWx2YSBhIHZpc3VhbGl6YcOnw6NvIGluaWNpYWwgcXVhbmRvIG8gbWFwYSDDqSBkZXRlY3RhZG8gcGVsYSBwcmltZWlyYSB2ZXpcclxuICAgICAgaWYgKHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldyAmJiAhdGhpcy5zdGF0ZS5pbml0aWFsRXh0ZW50KSB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudEV4dGVudCA9IHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldy5leHRlbnRcclxuICAgICAgICBpZiAoY3VycmVudEV4dGVudCkge1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGluaXRpYWxFeHRlbnQ6IGN1cnJlbnRFeHRlbnQuY2xvbmUoKVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5sb2FkRmVhdHVyZUxheWVyKClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIENhcnJlZ2EgYSBjYW1hZGEgZGUgZmVhdHVyZSBzZXJ2aWNlXHJcbiAgbG9hZEZlYXR1cmVMYXllciA9ICgpID0+IHtcclxuICAgIGlmICghdGhpcy5zdGF0ZS5qaW11TWFwVmlldykge1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSB9KVxyXG5cclxuICAgIGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMoW1xyXG4gICAgICAnZXNyaS9sYXllcnMvRmVhdHVyZUxheWVyJyxcclxuICAgICAgJ2VzcmkvZ2VvbWV0cnkvU3BhdGlhbFJlZmVyZW5jZSdcclxuICAgIF0pLnRoZW4oKG1vZHVsZXMpID0+IHtcclxuICAgICAgW3RoaXMuRmVhdHVyZUxheWVyLCB0aGlzLlNwYXRpYWxSZWZlcmVuY2VdID0gbW9kdWxlc1xyXG5cclxuICAgICAgLy8gQ3JpYSBhIGNhbWFkYSBjb20gYSBVUkwgZml4YVxyXG4gICAgICBjb25zdCBsYXllciA9IG5ldyB0aGlzLkZlYXR1cmVMYXllcih7XHJcbiAgICAgICAgdXJsOiB0aGlzLkZFQVRVUkVfU0VSVklDRV9VUkxcclxuICAgICAgfSlcclxuXHJcbiAgICAgIC8vIEFkaWNpb25hIGEgY2FtYWRhIGFvIG1hcGFcclxuICAgICAgdGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3Lm1hcC5hZGQobGF5ZXIpXHJcblxyXG4gICAgICAvLyBBZ3VhcmRhIGEgY2FtYWRhIHNlciBjcmlhZGFcclxuICAgICAgbGF5ZXIub24oJ2xheWVydmlldy1jcmVhdGUnLCAoKSA9PiB7XHJcbiAgICAgICAgLy8gU2FsdmEgYSB2aXN1YWxpemHDp8OjbyBpbmljaWFsIGRvIG1hcGEgc2UgYWluZGEgbsOjbyBmb2kgc2FsdmFcclxuICAgICAgICBpZiAoIXRoaXMuc3RhdGUuaW5pdGlhbEV4dGVudCAmJiB0aGlzLnN0YXRlLmppbXVNYXBWaWV3ICYmIHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldykge1xyXG4gICAgICAgICAgY29uc3QgY3VycmVudEV4dGVudCA9IHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldy5leHRlbnRcclxuICAgICAgICAgIGlmIChjdXJyZW50RXh0ZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgIGZlYXR1cmVMYXllcjogbGF5ZXIsXHJcbiAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgaW5pdGlhbEV4dGVudDogY3VycmVudEV4dGVudC5jbG9uZSgpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICBmZWF0dXJlTGF5ZXI6IGxheWVyLFxyXG4gICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBmZWF0dXJlTGF5ZXI6IGxheWVyLFxyXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcblxyXG4gICAgICBsYXllci5vbignbGF5ZXJ2aWV3LWNyZWF0ZS1lcnJvcicsICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvIGFvIGNhcnJlZ2FyIGEgY2FtYWRhJylcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSlcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICAvLyBGdW7Dp8OjbyBwYXJhIGZpbHRyYXIgZSBkYXIgem9vbSBubyBwb2zDrWdvbm8gYmFzZWFkbyBuYSBwZXNxdWlzYVxyXG4gIGhhbmRsZUZpbHRlckFuZFpvb20gPSBhc3luYyAoZXZ0KSA9PiB7XHJcbiAgICBldnQucHJldmVudERlZmF1bHQoKVxyXG5cclxuICAgIC8vIENhc29zIGRlIGVycm9cclxuICAgIGlmICghdGhpcy5zdGF0ZS5qaW11TWFwVmlldykge1xyXG4gICAgICBhbGVydCgnUG9yIGZhdm9yLCBjb25maWd1cmUgdW0gbWFwYSBubyB3aWRnZXQuJylcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBpZiAoIXRoaXMuc3RhdGUuZmVhdHVyZUxheWVyKSB7XHJcbiAgICAgIGFsZXJ0KCdBIGNhbWFkYSBhaW5kYSBuw6NvIGZvaSBjYXJyZWdhZGEuIEFndWFyZGUuLi4nKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGlmICh0aGlzLnN0YXRlLmlkZWFTZWFyY2hJbnB1dCA9PT0gJycgfHwgdGhpcy5zdGF0ZS5pZGVhU2VhcmNoSW5wdXQudHJpbSgpID09PSAnJykge1xyXG4gICAgICBhbGVydCgnUG9yIGZhdm9yLCBkaWdpdGUgdW0gbsO6bWVybyBwYXJhIHBlc3F1aXNhciBuYSBjb2x1bmEgaWRlYS4nKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSB9KVxyXG5cclxuICAgIC8vIENhcnJlZ2Egb3MgbcOzZHVsb3MgbmVjZXNzw6FyaW9zXHJcbiAgICBsb2FkQXJjR0lTSlNBUElNb2R1bGVzKFtcclxuICAgICAgJ2VzcmkvbGF5ZXJzL0ZlYXR1cmVMYXllcicsXHJcbiAgICAgICdlc3JpL2dlb21ldHJ5L1NwYXRpYWxSZWZlcmVuY2UnXHJcbiAgICBdKS50aGVuKChtb2R1bGVzKSA9PiB7XHJcbiAgICAgIFt0aGlzLkZlYXR1cmVMYXllciwgdGhpcy5TcGF0aWFsUmVmZXJlbmNlXSA9IG1vZHVsZXNcclxuXHJcbiAgICAgIGNvbnN0IGxheWVyID0gdGhpcy5zdGF0ZS5mZWF0dXJlTGF5ZXJcclxuICAgICAgY29uc3Qgc2VhcmNoVmFsdWUgPSB0aGlzLnN0YXRlLmlkZWFTZWFyY2hJbnB1dC50cmltKClcclxuICAgICAgXHJcbiAgICAgIC8vIEVzY2FwYSBhc3BhcyBzaW1wbGVzIHBhcmEgZXZpdGFyIFNRTCBpbmplY3Rpb25cclxuICAgICAgY29uc3QgZXNjYXBlZFZhbHVlID0gc2VhcmNoVmFsdWUucmVwbGFjZSgvJy9nLCBcIicnXCIpXHJcblxyXG4gICAgICAvLyBWZXJpZmljYSBzZSBhIGNhbWFkYSBlc3TDoSBjYXJyZWdhZGEgZSBvYnTDqW0gaW5mb3JtYcOnw7VlcyBkb3MgY2FtcG9zXHJcbiAgICAgIC8vIEFndWFyZGEgYSBjYW1hZGEgZXN0YXIgY29tcGxldGFtZW50ZSBjYXJyZWdhZGFcclxuICAgICAgY29uc3QgY2hlY2tBbmRRdWVyeSA9ICgpID0+IHtcclxuICAgICAgICAvLyBMaXN0YSBkZSBwb3Nzw612ZWlzIG5vbWVzIGRlIGNvbHVuYSAoY2FzZS1pbnNlbnNpdGl2ZSlcclxuICAgICAgICBjb25zdCBwb3NzaWJsZUZpZWxkTmFtZXMgPSBbJ2lkZWEnLCAnSURFQScsICdJZGVhJywgJ0lEJywgJ2lkJywgJ0lkJ11cclxuICAgICAgICBsZXQgZmllbGROYW1lID0gJ2lkZWEnIC8vIFBhZHLDo29cclxuICAgICAgICBcclxuICAgICAgICAvLyBUZW50YSBlbmNvbnRyYXIgbyBjYW1wbyBjb3JyZXRvXHJcbiAgICAgICAgaWYgKGxheWVyLmZpZWxkcyAmJiBsYXllci5maWVsZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgY29uc3QgZm91bmRGaWVsZCA9IGxheWVyLmZpZWxkcy5maW5kKGZpZWxkID0+IFxyXG4gICAgICAgICAgICBwb3NzaWJsZUZpZWxkTmFtZXMuaW5jbHVkZXMoZmllbGQubmFtZSlcclxuICAgICAgICAgIClcclxuICAgICAgICAgIGlmIChmb3VuZEZpZWxkKSB7XHJcbiAgICAgICAgICAgIGZpZWxkTmFtZSA9IGZvdW5kRmllbGQubmFtZVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gU2UgbsOjbyBlbmNvbnRyYXIsIHRlbnRhIGZhemVyIHVtYSBidXNjYSBjYXNlLWluc2Vuc2l0aXZlXHJcbiAgICAgICAgICAgIGNvbnN0IGNhc2VJbnNlbnNpdGl2ZUZpZWxkID0gbGF5ZXIuZmllbGRzLmZpbmQoZmllbGQgPT4gXHJcbiAgICAgICAgICAgICAgZmllbGQubmFtZS50b0xvd2VyQ2FzZSgpID09PSAnaWRlYSdcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICBpZiAoY2FzZUluc2Vuc2l0aXZlRmllbGQpIHtcclxuICAgICAgICAgICAgICBmaWVsZE5hbWUgPSBjYXNlSW5zZW5zaXRpdmVGaWVsZC5uYW1lXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgLy8gTG9nIGRvcyBjYW1wb3MgZGlzcG9uw612ZWlzIHBhcmEgZGVidWdcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQ2FtcG9zIGRpc3BvbsOtdmVpcyBuYSBjYW1hZGE6JywgbGF5ZXIuZmllbGRzLm1hcChmID0+IGYubmFtZSkpXHJcbiAgICAgICAgICAgICAgLy8gVGVudGEgdXNhciBvIHByaW1laXJvIGNhbXBvIHF1ZSBwYXJlY2Ugc2VyIHVtIElEXHJcbiAgICAgICAgICAgICAgY29uc3QgaWRGaWVsZCA9IGxheWVyLmZpZWxkcy5maW5kKGZpZWxkID0+IFxyXG4gICAgICAgICAgICAgICAgZmllbGQudHlwZSA9PT0gJ2VzcmlGaWVsZFR5cGVTdHJpbmcnIHx8IGZpZWxkLnR5cGUgPT09ICdlc3JpRmllbGRUeXBlSW50ZWdlcicgfHwgZmllbGQudHlwZSA9PT0gJ2VzcmlGaWVsZFR5cGVEb3VibGUnXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgIGlmIChpZEZpZWxkKSB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZE5hbWUgPSBpZEZpZWxkLm5hbWVcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBVc2FuZG8gY2FtcG86ICR7ZmllbGROYW1lfWApXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDcmlhIHVtYSBxdWVyeSBwYXJhIGJ1c2NhciBvIHBvbMOtZ29ubyBwZWxhIGNvbHVuYVxyXG4gICAgICAgIC8vIFVzYSBMSUtFIHBhcmEgYnVzY2EgbWFpcyBmbGV4w612ZWwgZSB0cmF0YSBjb21vIHN0cmluZ1xyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gbGF5ZXIuY3JlYXRlUXVlcnkoKVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFRlbnRhIGRpZmVyZW50ZXMgYWJvcmRhZ2VucyBkZSBxdWVyeVxyXG4gICAgICAgIC8vIDEuIEJ1c2NhIGV4YXRhIGNvbW8gc3RyaW5nXHJcbiAgICAgICAgLy8gMi4gQnVzY2EgY29tIExJS0UgcGFyYSB2YWxvcmVzIHBhcmNpYWlzXHJcbiAgICAgICAgLy8gMy4gQnVzY2EgY29tbyBuw7ptZXJvIChzZSBvIHZhbG9yIGZvciBudW3DqXJpY28pXHJcbiAgICAgICAgY29uc3QgaGFzU3BlY2lhbENoYXJzID0gc2VhcmNoVmFsdWUuaW5kZXhPZignLicpICE9PSAtMSB8fCBzZWFyY2hWYWx1ZS5pbmRleE9mKCcvJykgIT09IC0xXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gUGFyYSB2YWxvcmVzIGNvbSBjYXJhY3RlcmVzIGVzcGVjaWFpcyAoY29tbyBcIjAwMy45LjQyNzA3NC8yMDI1XCIpLCB1c2EgYXBlbmFzIGNvbW8gc3RyaW5nXHJcbiAgICAgICAgaWYgKGhhc1NwZWNpYWxDaGFycykge1xyXG4gICAgICAgICAgcXVlcnkud2hlcmUgPSBgJHtmaWVsZE5hbWV9ID0gJyR7ZXNjYXBlZFZhbHVlfSdgXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vIFNlIGZvciB1bSBuw7ptZXJvIHNpbXBsZXMsIHRlbnRhIGNvbW8gbsO6bWVybyBlIGNvbW8gc3RyaW5nXHJcbiAgICAgICAgICBjb25zdCBpc051bWVyaWMgPSAhaXNOYU4ocGFyc2VGbG9hdChzZWFyY2hWYWx1ZSkpICYmIGlzRmluaXRlKHBhcnNlRmxvYXQoc2VhcmNoVmFsdWUpKVxyXG4gICAgICAgICAgaWYgKGlzTnVtZXJpYykge1xyXG4gICAgICAgICAgICBxdWVyeS53aGVyZSA9IGAke2ZpZWxkTmFtZX0gPSAke3NlYXJjaFZhbHVlfSBPUiAke2ZpZWxkTmFtZX0gPSAnJHtlc2NhcGVkVmFsdWV9J2BcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHF1ZXJ5LndoZXJlID0gYCR7ZmllbGROYW1lfSA9ICcke2VzY2FwZWRWYWx1ZX0nYFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBxdWVyeS5yZXR1cm5HZW9tZXRyeSA9IHRydWVcclxuXHJcbiAgICAgICAgLy8gRXhlY3V0YSBhIHF1ZXJ5XHJcbiAgICAgICAgbGF5ZXIucXVlcnlGZWF0dXJlcyhxdWVyeSkudGhlbigocmVzdWx0cykgPT4ge1xyXG4gICAgICAgICAgaWYgKHJlc3VsdHMuZmVhdHVyZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIC8vIFNlIG7Do28gZW5jb250cm91LCB0ZW50YSBjb20gTElLRVxyXG4gICAgICAgICAgICBjb25zdCBsaWtlUXVlcnkgPSBsYXllci5jcmVhdGVRdWVyeSgpXHJcbiAgICAgICAgICAgIGxpa2VRdWVyeS53aGVyZSA9IGAke2ZpZWxkTmFtZX0gTElLRSAnJSR7ZXNjYXBlZFZhbHVlfSUnYFxyXG4gICAgICAgICAgICBsaWtlUXVlcnkucmV0dXJuR2VvbWV0cnkgPSB0cnVlXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gbGF5ZXIucXVlcnlGZWF0dXJlcyhsaWtlUXVlcnkpLnRoZW4oKGxpa2VSZXN1bHRzKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKGxpa2VSZXN1bHRzLmZlYXR1cmVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoYE5lbmh1bSBwb2zDrWdvbm8gZW5jb250cmFkbyBjb20gJHtmaWVsZE5hbWV9ID0gJHtzZWFyY2hWYWx1ZX1gKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pXHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgLy8gU2UgZW5jb250cm91IGNvbSBMSUtFLCB1c2EgbyBwcmltZWlybyByZXN1bHRhZG9cclxuICAgICAgICAgICAgICBjb25zdCBmb3VuZEdyYXBoaWMgPSBsaWtlUmVzdWx0cy5mZWF0dXJlc1swXVxyXG4gICAgICAgICAgICAgIGNvbnN0IGFjdHVhbFZhbHVlID0gZm91bmRHcmFwaGljLmF0dHJpYnV0ZXNbZmllbGROYW1lXVxyXG4gICAgICAgICAgICAgIHRoaXMuYXBwbHlGaWx0ZXJBbmRab29tKGxheWVyLCBmb3VuZEdyYXBoaWMsIGZpZWxkTmFtZSwgYWN0dWFsVmFsdWUpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLy8gU2UgZW5jb250cm91LCBhcGxpY2EgZmlsdHJvIGUgem9vbVxyXG4gICAgICAgICAgY29uc3QgZm91bmRHcmFwaGljID0gcmVzdWx0cy5mZWF0dXJlc1swXVxyXG4gICAgICAgICAgY29uc3QgYWN0dWFsVmFsdWUgPSBmb3VuZEdyYXBoaWMuYXR0cmlidXRlc1tmaWVsZE5hbWVdXHJcbiAgICAgICAgICB0aGlzLmFwcGx5RmlsdGVyQW5kWm9vbShsYXllciwgZm91bmRHcmFwaGljLCBmaWVsZE5hbWUsIGFjdHVhbFZhbHVlKVxyXG4gICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJybyBhbyBwZXNxdWlzYXIgZmVhdHVyZXM6JywgZXJyb3IpXHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdEZXRhbGhlcyBkbyBlcnJvOicsIHtcclxuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZSxcclxuICAgICAgICAgICAgZGV0YWlsczogZXJyb3IuZGV0YWlscyxcclxuICAgICAgICAgICAgZmllbGROYW1lOiBmaWVsZE5hbWUsXHJcbiAgICAgICAgICAgIHNlYXJjaFZhbHVlOiBzZWFyY2hWYWx1ZVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLy8gVGVudGEgbW9zdHJhciBpbmZvcm1hw6fDtWVzIG1haXMgw7p0ZWlzXHJcbiAgICAgICAgICBsZXQgZXJyb3JNZXNzYWdlID0gJ0Vycm8gYW8gcGVzcXVpc2FyLiAnXHJcbiAgICAgICAgICBpZiAobGF5ZXIuZmllbGRzICYmIGxheWVyLmZpZWxkcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkTmFtZXMgPSBsYXllci5maWVsZHMubWFwKGYgPT4gZi5uYW1lKS5qb2luKCcsICcpXHJcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZSArPSBgXFxuXFxuQ2FtcG9zIGRpc3BvbsOtdmVpczogJHtmaWVsZE5hbWVzfWBcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVycm9yTWVzc2FnZSArPSBgXFxuXFxuVmVyaWZpcXVlIHNlIGEgY29sdW5hIFwiJHtmaWVsZE5hbWV9XCIgZXhpc3RlIGUgc2UgbyB2YWxvciBcIiR7c2VhcmNoVmFsdWV9XCIgZXN0w6EgY29ycmV0by5gXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGFsZXJ0KGVycm9yTWVzc2FnZSlcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8vIFNlIGEgY2FtYWRhIGrDoSBlc3TDoSBjYXJyZWdhZGEsIGV4ZWN1dGEgZGlyZXRhbWVudGVcclxuICAgICAgaWYgKGxheWVyLmxvYWRlZCkge1xyXG4gICAgICAgIGNoZWNrQW5kUXVlcnkoKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIEFndWFyZGEgYSBjYW1hZGEgY2FycmVnYXJcclxuICAgICAgICBsYXllci53aGVuKCgpID0+IHtcclxuICAgICAgICAgIGNoZWNrQW5kUXVlcnkoKVxyXG4gICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJybyBhbyBjYXJyZWdhciBpbmZvcm1hw6fDtWVzIGRhIGNhbWFkYTonLCBlcnJvcilcclxuICAgICAgICAgIGFsZXJ0KCdFcnJvIGFvIGNhcnJlZ2FyIGluZm9ybWHDp8O1ZXMgZGEgY2FtYWRhLiBWZXJpZmlxdWUgc2UgYSBjYW1hZGEgZXN0w6EgYWNlc3PDrXZlbC4nKVxyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIC8vIEZ1bsOnw6NvIGF1eGlsaWFyIHBhcmEgYXBsaWNhciBmaWx0cm8gZSB6b29tXHJcbiAgYXBwbHlGaWx0ZXJBbmRab29tID0gKGxheWVyLCBncmFwaGljLCBmaWVsZE5hbWUsIGFjdHVhbFZhbHVlKSA9PiB7XHJcbiAgICAvLyBPYnTDqW0gbyB2YWxvciByZWFsIGRvIGF0cmlidXRvIGRvIGdyYXBoaWNcclxuICAgIGNvbnN0IGF0dHJpYnV0ZVZhbHVlID0gZ3JhcGhpYy5hdHRyaWJ1dGVzW2ZpZWxkTmFtZV1cclxuICAgIFxyXG4gICAgLy8gU2UgbyB2YWxvciBuw6NvIGZvaSBwYXNzYWRvLCB1c2EgbyBkbyBhdHJpYnV0b1xyXG4gICAgY29uc3QgdmFsdWVUb0ZpbHRlciA9IGFjdHVhbFZhbHVlICE9PSB1bmRlZmluZWQgPyBhY3R1YWxWYWx1ZSA6IGF0dHJpYnV0ZVZhbHVlXHJcbiAgICBcclxuICAgIC8vIEVzY2FwYSBvIHZhbG9yIHBhcmEgU1FMICh0cmF0YSBzdHJpbmdzLCBuw7ptZXJvcyBlIG51bGwpXHJcbiAgICBsZXQgZGVmaW5pdGlvbkV4cHJlc3Npb25cclxuICAgIGlmICh2YWx1ZVRvRmlsdGVyID09PSBudWxsIHx8IHZhbHVlVG9GaWx0ZXIgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBkZWZpbml0aW9uRXhwcmVzc2lvbiA9IGAke2ZpZWxkTmFtZX0gSVMgTlVMTGBcclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlVG9GaWx0ZXIgPT09ICdudW1iZXInKSB7XHJcbiAgICAgIGRlZmluaXRpb25FeHByZXNzaW9uID0gYCR7ZmllbGROYW1lfSA9ICR7dmFsdWVUb0ZpbHRlcn1gXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyDDiSB1bWEgc3RyaW5nLCBwcmVjaXNhIGVzY2FwYXIgYXNwYXMgc2ltcGxlc1xyXG4gICAgICBjb25zdCBlc2NhcGVkVmFsdWUgPSBTdHJpbmcodmFsdWVUb0ZpbHRlcikucmVwbGFjZSgvJy9nLCBcIicnXCIpXHJcbiAgICAgIGRlZmluaXRpb25FeHByZXNzaW9uID0gYCR7ZmllbGROYW1lfSA9ICcke2VzY2FwZWRWYWx1ZX0nYFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zb2xlLmxvZyhgQXBsaWNhbmRvIGZpbHRybzogJHtmaWVsZE5hbWV9ID0gJHt2YWx1ZVRvRmlsdGVyfWApXHJcbiAgICBjb25zb2xlLmxvZyhgRGVmaW5pdGlvbiBFeHByZXNzaW9uOiAke2RlZmluaXRpb25FeHByZXNzaW9ufWApXHJcblxyXG4gICAgLy8gQXBsaWNhIG8gZmlsdHJvIG5hIGNhbWFkYSB1c2FuZG8gZGVmaW5pdGlvbkV4cHJlc3Npb25cclxuICAgIC8vIElzc28gw6kgbyBtw6l0b2RvIGNvcnJldG8gcGFyYSBmaWx0cmFyIHVtYSBGZWF0dXJlTGF5ZXIgZSBvY3VsdGFyIG91dHJvcyBwb2zDrWdvbm9zXHJcbiAgICBsYXllci5kZWZpbml0aW9uRXhwcmVzc2lvbiA9IGRlZmluaXRpb25FeHByZXNzaW9uXHJcbiAgICBcclxuICAgIC8vIEZvcsOnYSBhIGF0dWFsaXphw6fDo28gaW1lZGlhdGEgZGEgY2FtYWRhIHBhcmEgYXBsaWNhciBvIGZpbHRyb1xyXG4gICAgbGF5ZXIucmVmcmVzaCgpXHJcbiAgICBcclxuICAgIGNvbnNvbGUubG9nKCdGaWx0cm8gYXBsaWNhZG8uIEEgY2FtYWRhIGRldmUgbW9zdHJhciBBUEVOQVMgbyBwb2zDrWdvbm8gc2VsZWNpb25hZG8nKVxyXG4gICAgXHJcbiAgICAvLyBBZ3VhcmRhIHF1ZSBhIGNhbWFkYSBlc3RlamEgY29tcGxldGFtZW50ZSBjYXJyZWdhZGEgYW50ZXMgZGUgYXBsaWNhciBvIGZpbHRyb1xyXG4gICAgaWYgKGxheWVyLmxvYWRlZCkge1xyXG4gICAgICAvLyBBIGNhbWFkYSBqw6EgZXN0w6EgY2FycmVnYWRhLCBhcGxpY2EgbyBmaWx0cm8gZGlyZXRhbWVudGVcclxuICAgICAgdGhpcy5hcHBseVpvb21BZnRlckZpbHRlcihsYXllciwgZ3JhcGhpYylcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIEFndWFyZGEgYSBjYW1hZGEgY2FycmVnYXIgcHJpbWVpcm9cclxuICAgICAgbGF5ZXIud2hlbigoKSA9PiB7XHJcbiAgICAgICAgLy8gQXBsaWNhIG8gZmlsdHJvIG5vdmFtZW50ZSBhcMOzcyBjYXJyZWdhciAoZ2FyYW50aWEpXHJcbiAgICAgICAgbGF5ZXIuZGVmaW5pdGlvbkV4cHJlc3Npb24gPSBkZWZpbml0aW9uRXhwcmVzc2lvblxyXG4gICAgICAgIGxheWVyLnJlZnJlc2goKVxyXG4gICAgICAgIHRoaXMuYXBwbHlab29tQWZ0ZXJGaWx0ZXIobGF5ZXIsIGdyYXBoaWMpXHJcbiAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm8gYW8gYWd1YXJkYXIgY2FtYWRhOicsIGVycm9yKVxyXG4gICAgICAgIC8vIE1lc21vIGFzc2ltIHRlbnRhIGFwbGljYXIgbyB6b29tXHJcbiAgICAgICAgdGhpcy5hcHBseVpvb21BZnRlckZpbHRlcihsYXllciwgZ3JhcGhpYylcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIEZ1bsOnw6NvIGF1eGlsaWFyIHBhcmEgYXBsaWNhciB6b29tIGFww7NzIG8gZmlsdHJvXHJcbiAgYXBwbHlab29tQWZ0ZXJGaWx0ZXIgPSAobGF5ZXIsIGdyYXBoaWMpID0+IHtcclxuICAgIC8vIEFndWFyZGEgdW0gcG91Y28gcGFyYSBnYXJhbnRpciBxdWUgbyBmaWx0cm8gc2VqYSBwcm9jZXNzYWRvIHBlbGEgY2FtYWRhXHJcbiAgICAvLyBPIGRlZmluaXRpb25FeHByZXNzaW9uIHByZWNpc2EgZGUgdGVtcG8gcGFyYSBzZXIgcHJvY2Vzc2Fkb1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIC8vIETDoSB6b29tIG5vIHBvbMOtZ29ubyBlbmNvbnRyYWRvXHJcbiAgICAgIGlmIChncmFwaGljLmdlb21ldHJ5KSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3LmdvVG8oe1xyXG4gICAgICAgICAgdGFyZ2V0OiBncmFwaGljLmdlb21ldHJ5LFxyXG4gICAgICAgICAgem9vbTogMTVcclxuICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KVxyXG4gICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJybyBhbyBkYXIgem9vbTonLCBlcnJvcilcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pXHJcbiAgICAgIH1cclxuICAgIH0sIDUwMClcclxuICB9XHJcblxyXG4gIC8vIEZ1bsOnw6NvIHBhcmEgbGltcGFyIG8gZmlsdHJvXHJcbiAgaGFuZGxlQ2xlYXJGaWx0ZXIgPSAoKSA9PiB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5mZWF0dXJlTGF5ZXIpIHtcclxuICAgICAgLy8gUmVtb3ZlIG8gZmlsdHJvIGRlZmluaW5kbyBkZWZpbml0aW9uRXhwcmVzc2lvbiBjb21vIHZhemlvXHJcbiAgICAgIHRoaXMuc3RhdGUuZmVhdHVyZUxheWVyLmRlZmluaXRpb25FeHByZXNzaW9uID0gJydcclxuICAgICAgdGhpcy5zdGF0ZS5mZWF0dXJlTGF5ZXIucmVmcmVzaCgpXHJcbiAgICAgIGNvbnNvbGUubG9nKCdGaWx0cm8gcmVtb3ZpZG8nKVxyXG4gICAgICBcclxuICAgICAgLy8gUmVzdGF1cmEgYSB2aXN1YWxpemHDp8OjbyBpbmljaWFsIGRvIG1hcGFcclxuICAgICAgaWYgKHRoaXMuc3RhdGUuamltdU1hcFZpZXcgJiYgdGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuaW5pdGlhbEV4dGVudCkge1xyXG4gICAgICAgICAgLy8gUmVzdGF1cmEgYSBleHRlbnPDo28gaW5pY2lhbCBzYWx2YVxyXG4gICAgICAgICAgdGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3LmdvVG8odGhpcy5zdGF0ZS5pbml0aWFsRXh0ZW50KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1Zpc3VhbGl6YcOnw6NvIGluaWNpYWwgcmVzdGF1cmFkYScpXHJcbiAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJybyBhbyByZXN0YXVyYXIgdmlzdWFsaXphw6fDo28gaW5pY2lhbDonLCBlcnJvcilcclxuICAgICAgICAgICAgLy8gU2UgZmFsaGFyLCB0ZW50YSBmYXplciB6b29tIHBhcmEgYSBjYW1hZGEgY29tcGxldGFcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuZmVhdHVyZUxheWVyICYmIHRoaXMuc3RhdGUuZmVhdHVyZUxheWVyLmZ1bGxFeHRlbnQpIHtcclxuICAgICAgICAgICAgICB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcuZ29Ubyh0aGlzLnN0YXRlLmZlYXR1cmVMYXllci5mdWxsRXh0ZW50KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAvLyBTZSBuw6NvIHRpdmVyIGV4dGVuc8OjbyBpbmljaWFsIHNhbHZhLCB0ZW50YSBmYXplciB6b29tIHBhcmEgYSBjYW1hZGEgY29tcGxldGFcclxuICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmZlYXR1cmVMYXllciAmJiB0aGlzLnN0YXRlLmZlYXR1cmVMYXllci5mdWxsRXh0ZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldy5nb1RvKHRoaXMuc3RhdGUuZmVhdHVyZUxheWVyLmZ1bGxFeHRlbnQpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdab29tIHBhcmEgY2FtYWRhIGNvbXBsZXRhIGFwbGljYWRvJylcclxuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJybyBhbyBmYXplciB6b29tIHBhcmEgY2FtYWRhIGNvbXBsZXRhOicsIGVycm9yKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgaWRlYVNlYXJjaElucHV0OiAnJ1xyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gRnVuw6fDo28gcGFyYSBnZXJhciByZWxhdMOzcmlvIHVzYW5kbyBhIGZlcnJhbWVudGEgZGUgZ2VvcHJvY2Vzc2FtZW50b1xyXG4gIGhhbmRsZUdlbmVyYXRlUmVwb3J0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgLy8gVmFsaWRhw6fDtWVzXHJcbiAgICBpZiAodGhpcy5zdGF0ZS5pZGVhU2VhcmNoSW5wdXQgPT09ICcnIHx8IHRoaXMuc3RhdGUuaWRlYVNlYXJjaElucHV0LnRyaW0oKSA9PT0gJycpIHtcclxuICAgICAgYWxlcnQoJ1BvciBmYXZvciwgZGlnaXRlIHVtIG7Dum1lcm8gZGUgaWRlYSBwYXJhIGdlcmFyIG8gcmVsYXTDs3Jpby4nKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpZGVhTnVtYmVyID0gdGhpcy5zdGF0ZS5pZGVhU2VhcmNoSW5wdXQudHJpbSgpXHJcbiAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSB9KVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdJbmljaWFuZG8gZ2VyYcOnw6NvIGRlIHJlbGF0w7NyaW8gcGFyYSBpZGVhOicsIGlkZWFOdW1iZXIpXHJcbiAgICAgIFxyXG4gICAgICAvLyBDYXJyZWdhIElkZW50aXR5TWFuYWdlciBwYXJhIG9idGVyIHRva2VuIGRlIGF1dGVudGljYcOnw6NvXHJcbiAgICAgIGNvbnNvbGUubG9nKCdDYXJyZWdhbmRvIElkZW50aXR5TWFuYWdlciBwYXJhIGF1dGVudGljYcOnw6NvLi4uJylcclxuICAgICAgY29uc3QgaWRlbnRpdHlNb2R1bGVzID0gYXdhaXQgbG9hZEFyY0dJU0pTQVBJTW9kdWxlcyhbXHJcbiAgICAgICAgJ2VzcmkvaWRlbnRpdHkvSWRlbnRpdHlNYW5hZ2VyJ1xyXG4gICAgICBdKVxyXG4gICAgICBjb25zdCBbSWRlbnRpdHlNYW5hZ2VyXSA9IGlkZW50aXR5TW9kdWxlc1xyXG4gICAgICBcclxuICAgICAgLy8gT2J0w6ltIG8gdG9rZW4gcGFyYSBhIFVSTCBkbyBzZXJ2acOnb1xyXG4gICAgICBsZXQgdG9rZW4gPSBudWxsXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgY3JlZGVudGlhbCA9IElkZW50aXR5TWFuYWdlci5maW5kQ3JlZGVudGlhbCh0aGlzLkdQX1NFUlZJQ0VfVVJMKVxyXG4gICAgICAgIGlmIChjcmVkZW50aWFsICYmIGNyZWRlbnRpYWwudG9rZW4pIHtcclxuICAgICAgICAgIHRva2VuID0gY3JlZGVudGlhbC50b2tlblxyXG4gICAgICAgICAgY29uc29sZS5sb2coJ1Rva2VuIGVuY29udHJhZG8gdmlhIElkZW50aXR5TWFuYWdlcicpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vIFRlbnRhIGdlcmFyIHRva2VuIGF1dG9tYXRpY2FtZW50ZVxyXG4gICAgICAgICAgY29uc3Qgc2VydmVySW5mbyA9IElkZW50aXR5TWFuYWdlci5maW5kU2VydmVySW5mbyh0aGlzLkdQX1NFUlZJQ0VfVVJMKVxyXG4gICAgICAgICAgaWYgKHNlcnZlckluZm8pIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ09idGVuZG8gdG9rZW4gYXV0b21hdGljYW1lbnRlLi4uJylcclxuICAgICAgICAgICAgYXdhaXQgSWRlbnRpdHlNYW5hZ2VyLmNoZWNrU2lnbkluU3RhdHVzKHRoaXMuR1BfU0VSVklDRV9VUkwpXHJcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRDcmVkZW50aWFsID0gSWRlbnRpdHlNYW5hZ2VyLmZpbmRDcmVkZW50aWFsKHRoaXMuR1BfU0VSVklDRV9VUkwpXHJcbiAgICAgICAgICAgIGlmICh1cGRhdGVkQ3JlZGVudGlhbCAmJiB1cGRhdGVkQ3JlZGVudGlhbC50b2tlbikge1xyXG4gICAgICAgICAgICAgIHRva2VuID0gdXBkYXRlZENyZWRlbnRpYWwudG9rZW5cclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVG9rZW4gb2J0aWRvIGF1dG9tYXRpY2FtZW50ZScpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKHRva2VuRXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oJ0Vycm8gYW8gb2J0ZXIgdG9rZW4sIHRlbnRhbmRvIHNlbSBhdXRlbnRpY2HDp8OjbzonLCB0b2tlbkVycm9yKVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvLyBGdW7Dp8OjbyBhdXhpbGlhciBwYXJhIGFkaWNpb25hciB0b2tlbiDDoHMgVVJMc1xyXG4gICAgICBjb25zdCBhZGRUb2tlblRvVXJsID0gKHVybCkgPT4ge1xyXG4gICAgICAgIGlmICghdG9rZW4pIHtcclxuICAgICAgICAgIHJldHVybiB1cmxcclxuICAgICAgICB9XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHVybE9iaiA9IG5ldyBVUkwodXJsKVxyXG4gICAgICAgICAgdXJsT2JqLnNlYXJjaFBhcmFtcy5zZXQoJ3Rva2VuJywgdG9rZW4pXHJcbiAgICAgICAgICByZXR1cm4gdXJsT2JqLnRvU3RyaW5nKClcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAvLyBTZSBhIFVSTCBuw6NvIGZvciBhYnNvbHV0YSwgdHJhdGEgY29tbyBzdHJpbmdcclxuICAgICAgICAgIGNvbnN0IHNlcGFyYXRvciA9IHVybC5pbmNsdWRlcygnPycpID8gJyYnIDogJz8nXHJcbiAgICAgICAgICByZXR1cm4gYCR7dXJsfSR7c2VwYXJhdG9yfXRva2VuPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHRva2VuKX1gXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvLyBQcmltZWlybywgdmFtb3Mgb2J0ZXIgaW5mb3JtYcOnw7VlcyBzb2JyZSBhIHRhcmVmYSBwYXJhIGRlc2NvYnJpciBvcyBwYXLDom1ldHJvc1xyXG4gICAgICBjb25zb2xlLmxvZygnT2J0ZW5kbyBpbmZvcm1hw6fDtWVzIGRhIHRhcmVmYSBkZSBnZW9wcm9jZXNzYW1lbnRvLi4uJylcclxuICAgICAgY29uc3QgaW5mb1VybCA9IGFkZFRva2VuVG9VcmwoYCR7dGhpcy5HUF9TRVJWSUNFX1VSTH0/Zj1qc29uYClcclxuICAgICAgY29uc3QgaW5mb1Jlc3BvbnNlID0gYXdhaXQgZmV0Y2goaW5mb1VybClcclxuICAgICAgXHJcbiAgICAgIGlmICghaW5mb1Jlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvIGFvIG9idGVyIGluZm9ybWHDp8O1ZXMgZGEgdGFyZWZhOiAke2luZm9SZXNwb25zZS5zdGF0dXN9ICR7aW5mb1Jlc3BvbnNlLnN0YXR1c1RleHR9YClcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgY29uc3QgZ3BJbmZvID0gYXdhaXQgaW5mb1Jlc3BvbnNlLmpzb24oKVxyXG4gICAgICBjb25zb2xlLmxvZygnSW5mb3JtYcOnw7VlcyBkYSBHUDonLCBncEluZm8pXHJcbiAgICAgIFxyXG4gICAgICAvLyBEZXNjb2JyZSBxdWFsIMOpIG8gcGFyw6JtZXRybyBkZSBlbnRyYWRhXHJcbiAgICAgIGxldCBwYXJhbU5hbWUgPSAnaWRlYSdcclxuICAgICAgaWYgKGdwSW5mby5wYXJhbWV0ZXJzICYmIEFycmF5LmlzQXJyYXkoZ3BJbmZvLnBhcmFtZXRlcnMpKSB7XHJcbiAgICAgICAgY29uc3QgaWRlYVBhcmFtID0gZ3BJbmZvLnBhcmFtZXRlcnMuZmluZChwID0+IFxyXG4gICAgICAgICAgcC5uYW1lICYmIChwLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcygnaWRlYScpIHx8IHAubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCdpZCcpKVxyXG4gICAgICAgIClcclxuICAgICAgICBpZiAoaWRlYVBhcmFtKSB7XHJcbiAgICAgICAgICBwYXJhbU5hbWUgPSBpZGVhUGFyYW0ubmFtZVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zdCBpbnB1dFBhcmFtID0gZ3BJbmZvLnBhcmFtZXRlcnMuZmluZChwID0+IFxyXG4gICAgICAgICAgICBwLmRpcmVjdGlvbiA9PT0gJ2VzcmlHUFBhcmFtZXRlckRpcmVjdGlvbklucHV0JyB8fCBwLmRpcmVjdGlvbiA9PT0gJ0dQUGFyYW1ldGVyRGlyZWN0aW9uSW5wdXQnXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgICBpZiAoaW5wdXRQYXJhbSkge1xyXG4gICAgICAgICAgICBwYXJhbU5hbWUgPSBpbnB1dFBhcmFtLm5hbWVcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGNvbnNvbGUubG9nKCdQYXLDom1ldHJvIHF1ZSBzZXLDoSB1c2FkbzonLCBwYXJhbU5hbWUpXHJcbiAgICAgIFxyXG4gICAgICAvLyBQcmVwYXJhIG9zIHBhcsOibWV0cm9zIHBhcmEgYSBleGVjdcOnw6NvXHJcbiAgICAgIGNvbnN0IHBhcmFtcyA9IHtcclxuICAgICAgICBbcGFyYW1OYW1lXTogaWRlYU51bWJlcixcclxuICAgICAgICBmOiAnanNvbidcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLy8gVmVyaWZpY2Egc2Ugw6kgdGFyZWZhIHPDrW5jcm9uYSBvdSBhc3PDrW5jcm9uYVxyXG4gICAgICBjb25zdCBleGVjdXRpb25UeXBlID0gZ3BJbmZvLmV4ZWN1dGlvblR5cGUgfHwgJ2VzcmlFeGVjdXRpb25UeXBlQXN5bmNocm9ub3VzJ1xyXG4gICAgICBjb25zb2xlLmxvZygnVGlwbyBkZSBleGVjdcOnw6NvOicsIGV4ZWN1dGlvblR5cGUpXHJcbiAgICAgIFxyXG4gICAgICBsZXQgcmVzdWx0XHJcbiAgICAgIFxyXG4gICAgICBpZiAoZXhlY3V0aW9uVHlwZSA9PT0gJ2VzcmlFeGVjdXRpb25UeXBlU3luY2hyb25vdXMnIHx8IGV4ZWN1dGlvblR5cGUgPT09ICdlc3JpRXhlY3V0aW9uVHlwZVN5bmNocm9ub3VzU3VibWl0Jykge1xyXG4gICAgICAgIC8vIFRhcmVmYSBzw61uY3JvbmEgLSBleGVjdXRhIGRpcmV0YW1lbnRlXHJcbiAgICAgICAgY29uc29sZS5sb2coJ0V4ZWN1dGFuZG8gdGFyZWZhIHPDrW5jcm9uYS4uLicpXHJcbiAgICAgICAgY29uc3QgZXhlY3V0ZVVybCA9IGAke3RoaXMuR1BfU0VSVklDRV9VUkx9L2V4ZWN1dGVgXHJcbiAgICAgICAgY29uc29sZS5sb2coJ1VSTCBkZSBleGVjdXRlOicsIGV4ZWN1dGVVcmwpXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcclxuICAgICAgICBPYmplY3Qua2V5cyhwYXJhbXMpLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChrZXksIHBhcmFtc1trZXldKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLy8gQWRpY2lvbmEgdG9rZW4gYW8gYm9keSAoc2VtcHJlIG5vIGJvZHkgcGFyYSBQT1NUKVxyXG4gICAgICAgIGlmICh0b2tlbikge1xyXG4gICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCd0b2tlbicsIHRva2VuKVxyXG4gICAgICAgICAgY29uc29sZS5sb2coJ1Rva2VuIGFkaWNpb25hZG8gYW8gYm9keScpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFBhcmEgUE9TVCwgYWRpY2lvbmEgdG9rZW4gbmEgVVJMIHRhbWLDqW0gcGFyYSBnYXJhbnRpclxyXG4gICAgICAgIGNvbnN0IGZpbmFsVXJsID0gdG9rZW4gPyBhZGRUb2tlblRvVXJsKGV4ZWN1dGVVcmwpIDogZXhlY3V0ZVVybFxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdVUkwgZmluYWw6JywgZmluYWxVcmwpXHJcbiAgICAgICAgY29uc29sZS5sb2coJ0JvZHk6JywgZm9ybURhdGEudG9TdHJpbmcoKSlcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBleGVjdXRlUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChmaW5hbFVybCwge1xyXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGJvZHk6IGZvcm1EYXRhXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgICAgICBpZiAoIWV4ZWN1dGVSZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvIGFvIGV4ZWN1dGFyIHRhcmVmYTogJHtleGVjdXRlUmVzcG9uc2Uuc3RhdHVzfSAke2V4ZWN1dGVSZXNwb25zZS5zdGF0dXNUZXh0fWApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJlc3VsdCA9IGF3YWl0IGV4ZWN1dGVSZXNwb25zZS5qc29uKClcclxuICAgICAgICBjb25zb2xlLmxvZygnUmVzdWx0YWRvIGRhIGV4ZWN1w6fDo28gc8OtbmNyb25hOicsIHJlc3VsdClcclxuICAgICAgICBcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBUYXJlZmEgYXNzw61uY3JvbmEgLSBzdWJtZXRlIGpvYiBlIGFndWFyZGFcclxuICAgICAgICBjb25zb2xlLmxvZygnRXhlY3V0YW5kbyB0YXJlZmEgYXNzw61uY3JvbmEuLi4nKVxyXG4gICAgICAgIGNvbnN0IHN1Ym1pdFVybCA9IGAke3RoaXMuR1BfU0VSVklDRV9VUkx9L3N1Ym1pdEpvYmBcclxuICAgICAgICBjb25zb2xlLmxvZygnVVJMIGRlIHN1Ym1pdDonLCBzdWJtaXRVcmwpXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcclxuICAgICAgICBPYmplY3Qua2V5cyhwYXJhbXMpLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChrZXksIHBhcmFtc1trZXldKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLy8gQWRpY2lvbmEgdG9rZW4gYW8gYm9keSAoc2VtcHJlIG5vIGJvZHkgcGFyYSBQT1NUKVxyXG4gICAgICAgIGlmICh0b2tlbikge1xyXG4gICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCd0b2tlbicsIHRva2VuKVxyXG4gICAgICAgICAgY29uc29sZS5sb2coJ1Rva2VuIGFkaWNpb25hZG8gYW8gYm9keScpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFBhcmEgUE9TVCwgYWRpY2lvbmEgdG9rZW4gbmEgVVJMIHRhbWLDqW0gcGFyYSBnYXJhbnRpclxyXG4gICAgICAgIGNvbnN0IGZpbmFsVXJsID0gdG9rZW4gPyBhZGRUb2tlblRvVXJsKHN1Ym1pdFVybCkgOiBzdWJtaXRVcmxcclxuICAgICAgICBjb25zb2xlLmxvZygnVVJMIGZpbmFsOicsIGZpbmFsVXJsKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdCb2R5OicsIGZvcm1EYXRhLnRvU3RyaW5nKCkpXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3Qgc3VibWl0UmVzcG9uc2UgPSBhd2FpdCBmZXRjaChmaW5hbFVybCwge1xyXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGJvZHk6IGZvcm1EYXRhXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgICAgICBpZiAoIXN1Ym1pdFJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm8gYW8gc3VibWV0ZXIgam9iOiAke3N1Ym1pdFJlc3BvbnNlLnN0YXR1c30gJHtzdWJtaXRSZXNwb25zZS5zdGF0dXNUZXh0fWApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGpvYkluZm8gPSBhd2FpdCBzdWJtaXRSZXNwb25zZS5qc29uKClcclxuICAgICAgICBjb25zb2xlLmxvZygnSm9iIHN1Ym1ldGlkbzonLCBqb2JJbmZvKVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChqb2JJbmZvLmVycm9yKSB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm8gYW8gc3VibWV0ZXIgam9iOiAke0pTT04uc3RyaW5naWZ5KGpvYkluZm8uZXJyb3IpfWApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGpvYklkID0gam9iSW5mby5qb2JJZFxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdKb2IgSUQ6Jywgam9iSWQpXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gUG9sbGluZyBkbyBzdGF0dXMgZG8gam9iXHJcbiAgICAgICAgbGV0IGF0dGVtcHRzID0gMFxyXG4gICAgICAgIGNvbnN0IG1heEF0dGVtcHRzID0gNjBcclxuICAgICAgICBsZXQgam9iU3RhdHVzID0gbnVsbFxyXG4gICAgICAgIFxyXG4gICAgICAgIHdoaWxlIChhdHRlbXB0cyA8IG1heEF0dGVtcHRzKSB7XHJcbiAgICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMTAwMCkpXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGNvbnN0IHN0YXR1c1VybCA9IGFkZFRva2VuVG9VcmwoYCR7dGhpcy5HUF9TRVJWSUNFX1VSTH0vam9icy8ke2pvYklkfT9mPWpzb25gKVxyXG4gICAgICAgICAgY29uc3Qgc3RhdHVzUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChzdGF0dXNVcmwpXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGlmICghc3RhdHVzUmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvIGFvIHZlcmlmaWNhciBzdGF0dXMgZG8gam9iOiAke3N0YXR1c1Jlc3BvbnNlLnN0YXR1c31gKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBqb2JTdGF0dXMgPSBhd2FpdCBzdGF0dXNSZXNwb25zZS5qc29uKClcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGBTdGF0dXMgZG8gam9iICh0ZW50YXRpdmEgJHthdHRlbXB0cyArIDF9KTpgLCBqb2JTdGF0dXMuam9iU3RhdHVzKVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBpZiAoam9iU3RhdHVzLmpvYlN0YXR1cyA9PT0gJ2VzcmlKb2JTdWNjZWVkZWQnKSB7XHJcbiAgICAgICAgICAgIC8vIE9idMOpbSBvcyByZXN1bHRhZG9zXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdFVybCA9IGFkZFRva2VuVG9VcmwoYCR7dGhpcy5HUF9TRVJWSUNFX1VSTH0vam9icy8ke2pvYklkfS9yZXN1bHRzP2Y9anNvbmApXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdFJlc3BvbnNlID0gYXdhaXQgZmV0Y2gocmVzdWx0VXJsKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKCFyZXN1bHRSZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJybyBhbyBvYnRlciByZXN1bHRhZG9zOiAke3Jlc3VsdFJlc3BvbnNlLnN0YXR1c31gKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXN1bHQgPSBhd2FpdCByZXN1bHRSZXNwb25zZS5qc29uKClcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1Jlc3VsdGFkbyBkYSBleGVjdcOnw6NvIGFzc8OtbmNyb25hOicsIHJlc3VsdClcclxuICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoam9iU3RhdHVzLmpvYlN0YXR1cyA9PT0gJ2VzcmlKb2JGYWlsZWQnKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSm9iIGZhbGhvdTogJHtqb2JTdGF0dXMubWVzc2FnZXMgPyBKU09OLnN0cmluZ2lmeShqb2JTdGF0dXMubWVzc2FnZXMpIDogJ0Vycm8gZGVzY29uaGVjaWRvJ31gKVxyXG4gICAgICAgICAgfSBlbHNlIGlmIChqb2JTdGF0dXMuam9iU3RhdHVzID09PSAnZXNyaUpvYkNhbmNlbGxlZCcpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdKb2IgZm9pIGNhbmNlbGFkbycpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGF0dGVtcHRzKytcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGF0dGVtcHRzID49IG1heEF0dGVtcHRzKSB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RpbWVvdXQ6IE8gam9iIGRlbW9yb3UgbWFpcyBkZSA2MCBzZWd1bmRvcyBwYXJhIGNvbXBsZXRhcicpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBjb25zb2xlLmxvZygnUmVzdWx0YWRvIGNvbXBsZXRvIGRhIEdQOicsIEpTT04uc3RyaW5naWZ5KHJlc3VsdCwgbnVsbCwgMikpXHJcblxyXG4gICAgICAvLyBQcm9jZXNzYSBvIHJlc3VsdGFkbyAtIHByb2N1cmEgcGVsYSBVUkwgZG8gSFRNTFxyXG4gICAgICBsZXQgaHRtbFVybCA9IG51bGxcclxuXHJcbiAgICAgIC8vIFBhcmEgdGFyZWZhcyBhc3PDrW5jcm9uYXMsIG9zIHJlc3VsdGFkb3MgcG9kZW0gZXN0YXIgZW0gdW1hIGVzdHJ1dHVyYSBkaWZlcmVudGVcclxuICAgICAgLy8gUHJpbWVpcm8sIHZlcmlmaWNhIHNlIGjDoSBlcnJvc1xyXG4gICAgICBpZiAocmVzdWx0LmVycm9yKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvIG5hIEdQOiAke0pTT04uc3RyaW5naWZ5KHJlc3VsdC5lcnJvcil9YClcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gUHJvY3VyYSBlbSByZXN1bHQucmVzdWx0cyAoZXN0cnV0dXJhIGNvbXVtIHBhcmEgdGFyZWZhcyBzw61uY3JvbmFzKVxyXG4gICAgICBpZiAocmVzdWx0LnJlc3VsdHMgJiYgQXJyYXkuaXNBcnJheShyZXN1bHQucmVzdWx0cykpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IHJlc3VsdEl0ZW0gb2YgcmVzdWx0LnJlc3VsdHMpIHtcclxuICAgICAgICAgIC8vIE8gcmVzdWx0YWRvIHBvZGUgZXN0YXIgZGlyZXRhbWVudGUgbm8gcmVzdWx0SXRlbSBvdSBlbSByZXN1bHRJdGVtLnZhbHVlXHJcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IHJlc3VsdEl0ZW0udmFsdWUgIT09IHVuZGVmaW5lZCA/IHJlc3VsdEl0ZW0udmFsdWUgOiByZXN1bHRJdGVtXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlLmluY2x1ZGVzKCcuaHRtbCcpKSB7XHJcbiAgICAgICAgICAgIGh0bWxVcmwgPSB2YWx1ZVxyXG4gICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgIC8vIFByb2N1cmEgcG9yIHByb3ByaWVkYWRlcyBjb211bnMgcXVlIGNvbnTDqm0gVVJMc1xyXG4gICAgICAgICAgICBpZiAodmFsdWUudXJsICYmIHR5cGVvZiB2YWx1ZS51cmwgPT09ICdzdHJpbmcnICYmIHZhbHVlLnVybC5pbmNsdWRlcygnLmh0bWwnKSkge1xyXG4gICAgICAgICAgICAgIGh0bWxVcmwgPSB2YWx1ZS51cmxcclxuICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlLnBhdGhVcmwgJiYgdHlwZW9mIHZhbHVlLnBhdGhVcmwgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgaHRtbFVybCA9IHZhbHVlLnBhdGhVcmxcclxuICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlLnZhbHVlICYmIHR5cGVvZiB2YWx1ZS52YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUudmFsdWUuaW5jbHVkZXMoJy5odG1sJykpIHtcclxuICAgICAgICAgICAgICBodG1sVXJsID0gdmFsdWUudmFsdWVcclxuICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBQYXJhIHRhcmVmYXMgYXNzw61uY3JvbmFzLCBvcyByZXN1bHRhZG9zIHBvZGVtIGVzdGFyIGVtIHJlc3VsdC5yZXN1bHRzIGNvbW8gb2JqZXRvXHJcbiAgICAgIGlmICghaHRtbFVybCAmJiByZXN1bHQucmVzdWx0cyAmJiB0eXBlb2YgcmVzdWx0LnJlc3VsdHMgPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KHJlc3VsdC5yZXN1bHRzKSkge1xyXG4gICAgICAgIC8vIEl0ZXJhIHNvYnJlIGFzIHByb3ByaWVkYWRlcyBkbyBvYmpldG8gcmVzdWx0c1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHJlc3VsdC5yZXN1bHRzKSB7XHJcbiAgICAgICAgICBjb25zdCByZXN1bHRJdGVtID0gcmVzdWx0LnJlc3VsdHNba2V5XVxyXG4gICAgICAgICAgaWYgKHJlc3VsdEl0ZW0gJiYgcmVzdWx0SXRlbS52YWx1ZSkge1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHJlc3VsdEl0ZW0udmFsdWVcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUuaW5jbHVkZXMoJy5odG1sJykpIHtcclxuICAgICAgICAgICAgICBodG1sVXJsID0gdmFsdWVcclxuICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlLnVybCAmJiB0eXBlb2YgdmFsdWUudXJsID09PSAnc3RyaW5nJyAmJiB2YWx1ZS51cmwuaW5jbHVkZXMoJy5odG1sJykpIHtcclxuICAgICAgICAgICAgICBodG1sVXJsID0gdmFsdWUudXJsXHJcbiAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZS5wYXRoVXJsICYmIHR5cGVvZiB2YWx1ZS5wYXRoVXJsID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgIGh0bWxVcmwgPSB2YWx1ZS5wYXRoVXJsXHJcbiAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gUHJvY3VyYSBlbSBvdXRyYXMgcHJvcHJpZWRhZGVzIGRvIHJlc3VsdGFkb1xyXG4gICAgICBpZiAoIWh0bWxVcmwgJiYgcmVzdWx0Lm91dHB1dFVybCkge1xyXG4gICAgICAgIGh0bWxVcmwgPSByZXN1bHQub3V0cHV0VXJsXHJcbiAgICAgIH1cclxuICAgICAgaWYgKCFodG1sVXJsICYmIHJlc3VsdC51cmwpIHtcclxuICAgICAgICBodG1sVXJsID0gcmVzdWx0LnVybFxyXG4gICAgICB9XHJcbiAgICAgIGlmICghaHRtbFVybCAmJiByZXN1bHQuZmlsZVVybCkge1xyXG4gICAgICAgIGh0bWxVcmwgPSByZXN1bHQuZmlsZVVybFxyXG4gICAgICB9XHJcbiAgICAgIGlmICghaHRtbFVybCAmJiByZXN1bHQub3V0cHV0RmlsZSkge1xyXG4gICAgICAgIGh0bWxVcmwgPSByZXN1bHQub3V0cHV0RmlsZVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBCdXNjYSBwb3IgcmVnZXggZW0gdG9kbyBvIG9iamV0byAow7psdGltbyByZWN1cnNvKVxyXG4gICAgICBpZiAoIWh0bWxVcmwpIHtcclxuICAgICAgICBjb25zdCByZXN1bHRTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShyZXN1bHQpXHJcbiAgICAgICAgY29uc3QgdXJsTWF0Y2ggPSByZXN1bHRTdHJpbmcubWF0Y2goL2h0dHBzPzpcXC9cXC9bXlxcc1wiPD5dK1xcLmh0bWwvZylcclxuICAgICAgICBpZiAodXJsTWF0Y2ggJiYgdXJsTWF0Y2gubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgaHRtbFVybCA9IHVybE1hdGNoWzBdXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoaHRtbFVybCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdVUkwgZG8gSFRNTCBlbmNvbnRyYWRhOicsIGh0bWxVcmwpXHJcbiAgICAgICAgLy8gQWJyZSBvIEhUTUwgZW0gdW1hIG5vdmEgZ3VpYVxyXG4gICAgICAgIHdpbmRvdy5vcGVuKGh0bWxVcmwsICdfYmxhbmsnKVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIFNlIG7Do28gZW5jb250cm91IGEgVVJMLCBtb3N0cmEgbyByZXN1bHRhZG8gY29tcGxldG8gcGFyYSBkZWJ1Z1xyXG4gICAgICAgIGNvbnNvbGUud2FybignTsOjbyBmb2kgcG9zc8OtdmVsIGVuY29udHJhciBhIFVSTCBkbyBIVE1MIG5vIHJlc3VsdGFkbzonLCByZXN1bHQpXHJcbiAgICAgICAgY29uc29sZS53YXJuKCdSZXN1bHRhZG8gY29tcGxldG86JywgSlNPTi5zdHJpbmdpZnkocmVzdWx0LCBudWxsLCAyKSlcclxuICAgICAgICBhbGVydCgnUmVsYXTDs3JpbyBnZXJhZG8sIG1hcyBuw6NvIGZvaSBwb3Nzw612ZWwgZW5jb250cmFyIGEgVVJMIGRvIEhUTUwuIFZlcmlmaXF1ZSBvIGNvbnNvbGUgZG8gbmF2ZWdhZG9yIChGMTIpIHBhcmEgdmVyIG9zIGRldGFsaGVzIGRvIHJlc3VsdGFkby4nKVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KVxyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvIGNvbXBsZXRvIGFvIGV4ZWN1dGFyIGEgZmVycmFtZW50YSBkZSBnZW9wcm9jZXNzYW1lbnRvOicsIGVycm9yKVxyXG4gICAgICBjb25zb2xlLmVycm9yKCdTdGFjayB0cmFjZTonLCBlcnJvci5zdGFjaylcclxuICAgICAgXHJcbiAgICAgIGxldCBlcnJvck1lc3NhZ2UgPSAnRXJybyBhbyBnZXJhciByZWxhdMOzcmlvLlxcblxcbidcclxuICAgICAgXHJcbiAgICAgIGlmIChlcnJvci5tZXNzYWdlKSB7XHJcbiAgICAgICAgZXJyb3JNZXNzYWdlICs9IGBNZW5zYWdlbTogJHtlcnJvci5tZXNzYWdlfVxcblxcbmBcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgaWYgKGVycm9yLmRldGFpbHMgJiYgQXJyYXkuaXNBcnJheShlcnJvci5kZXRhaWxzKSAmJiBlcnJvci5kZXRhaWxzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBlcnJvck1lc3NhZ2UgKz0gYERldGFsaGVzOiAke2Vycm9yLmRldGFpbHNbMF19XFxuXFxuYFxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBlcnJvck1lc3NhZ2UgKz0gJ1ZlcmlmaXF1ZTpcXG4nXHJcbiAgICAgIGVycm9yTWVzc2FnZSArPSAnMS4gU2UgbyBuw7ptZXJvIGRlIGlkZWEgZXN0w6EgY29ycmV0b1xcbidcclxuICAgICAgZXJyb3JNZXNzYWdlICs9ICcyLiBTZSBhIGZlcnJhbWVudGEgZGUgZ2VvcHJvY2Vzc2FtZW50byBlc3TDoSBhY2Vzc8OtdmVsXFxuJ1xyXG4gICAgICBlcnJvck1lc3NhZ2UgKz0gJzMuIEFicmEgbyBjb25zb2xlIGRvIG5hdmVnYWRvciAoRjEyKSBwYXJhIG1haXMgZGV0YWxoZXMnXHJcbiAgICAgIFxyXG4gICAgICBhbGVydChlcnJvck1lc3NhZ2UpXHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyICgpIHtcclxuICAgIGNvbnN0IHN0eWxlID0gY3NzYFxyXG4gICAgICAud2lkZ2V0LWNvbnRhaW5lciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGdhcDogMTJweDtcclxuICAgICAgfVxyXG4gICAgICBmb3JtID4gZGl2IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGdhcDogOHB4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICBtaW4td2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgcGFkZGluZzogOHB4IDE2cHg7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI2NjY0MDtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWU0ZjMyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJjpkaXNhYmxlZCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XHJcbiAgICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5yZXBvcnQtYnV0dG9uIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjY2NjQwO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICBwYWRkaW5nOiA4cHggMTZweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xyXG4gICAgICAgICY6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFlNGYzMjtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOmFjdGl2ZTpub3QoOmRpc2FibGVkKSB7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjpmb2N1czpub3QoOmRpc2FibGVkKSB7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjpkaXNhYmxlZCB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG4gICAgICAgICAgY29sb3I6ICM5ZTllOWU7XHJcbiAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjpub3QoOmRpc2FibGVkKSB7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLmNsZWFyLWJ1dHRvbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcclxuICAgICAgICBjb2xvcjogIzQyNDI0MjtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICBwYWRkaW5nOiA4cHggMTZweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNiZGJkYmQ7XHJcbiAgICAgICAgICBjb2xvcjogIzIxMjEyMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjpkaXNhYmxlZCB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG4gICAgICAgICAgY29sb3I6ICM5ZTllOWU7XHJcbiAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuc3RhdHVzLW1lc3NhZ2Uge1xyXG4gICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTdmM2ZmO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIH1cclxuICAgICAgLmxvYWRpbmcge1xyXG4gICAgICAgIGNvbG9yOiAjMDA3OWMxO1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1hZGRMYXllcnMgamltdS13aWRnZXQgcC0yXCIgY3NzPXtzdHlsZX0+XHJcbiAgICAgICAge3RoaXMucHJvcHMuaGFzT3duUHJvcGVydHkoJ3VzZU1hcFdpZGdldElkcycpICYmXHJcbiAgICAgICAgICB0aGlzLnByb3BzLnVzZU1hcFdpZGdldElkcyAmJlxyXG4gICAgICAgICAgdGhpcy5wcm9wcy51c2VNYXBXaWRnZXRJZHMubGVuZ3RoID09PSAxICYmIChcclxuICAgICAgICAgICAgPEppbXVNYXBWaWV3Q29tcG9uZW50XHJcbiAgICAgICAgICAgICAgdXNlTWFwV2lkZ2V0SWQ9e3RoaXMucHJvcHMudXNlTWFwV2lkZ2V0SWRzPy5bMF19XHJcbiAgICAgICAgICAgICAgb25BY3RpdmVWaWV3Q2hhbmdlPXsoam12OiBKaW11TWFwVmlldykgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgIGppbXVNYXBWaWV3OiBqbXZcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250YWluZXJcIj5cclxuICAgICAgICAgIDxwPntkZWZhdWx0TWVzc2FnZXMuaW5zdHJ1Y3Rpb25zfTwvcD5cclxuXHJcblxyXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlRmlsdGVyQW5kWm9vbX0+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17ZGVmYXVsdE1lc3NhZ2VzLnNlYXJjaElkZWF9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5pZGVhU2VhcmNoSW5wdXR9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJZGVhU2VhcmNoSW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17IXRoaXMuc3RhdGUuZmVhdHVyZUxheWVyIHx8IHRoaXMuc3RhdGUubG9hZGluZ31cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXshdGhpcy5zdGF0ZS5mZWF0dXJlTGF5ZXIgfHwgdGhpcy5zdGF0ZS5sb2FkaW5nfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtkZWZhdWx0TWVzc2FnZXMuZmlsdGVyQW5kWm9vbX1cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICAgICAge3RoaXMuc3RhdGUuZmVhdHVyZUxheWVyICYmIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZXBvcnQtYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlR2VuZXJhdGVSZXBvcnR9XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5zdGF0ZS5sb2FkaW5nIHx8ICF0aGlzLnN0YXRlLmlkZWFTZWFyY2hJbnB1dCB8fCB0aGlzLnN0YXRlLmlkZWFTZWFyY2hJbnB1dC50cmltKCkgPT09ICcnfVxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e3RoaXMuc3RhdGUubG9hZGluZyB8fCAhdGhpcy5zdGF0ZS5pZGVhU2VhcmNoSW5wdXQgfHwgdGhpcy5zdGF0ZS5pZGVhU2VhcmNoSW5wdXQudHJpbSgpID09PSAnJyBcclxuICAgICAgICAgICAgICAgICAgPyAnRGlnaXRlIHVtIG7Dum1lcm8gZGUgaWRlYSBwYXJhIGdlcmFyIG8gcmVsYXTDs3JpbycgXHJcbiAgICAgICAgICAgICAgICAgIDogJ0dlcmFyIHJlbGF0w7NyaW8gcGFyYSBvIG7Dum1lcm8gZGUgaWRlYSBpbmZvcm1hZG8nfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtkZWZhdWx0TWVzc2FnZXMuZ2VuZXJhdGVSZXBvcnR9XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xlYXItYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xlYXJGaWx0ZXJ9XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5zdGF0ZS5sb2FkaW5nfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtkZWZhdWx0TWVzc2FnZXMuY2xlYXJGaWx0ZXJ9XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
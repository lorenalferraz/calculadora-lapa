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
    instructions: 'Digite o nº IDEA',
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
            // Declara variáveis no escopo da função para que estejam acessíveis no catch
            let ideaNumber = '';
            let paramName = null;
            let executeUrl = '';
            let token = null;
            // Validações iniciais
            if (this.state.ideaSearchInput === '' || this.state.ideaSearchInput.trim() === '') {
                alert('Por favor, digite um número de idea para gerar o relatório.');
                return;
            }
            ideaNumber = this.state.ideaSearchInput.trim();
            // Validação do formato do número de idea
            // Formato esperado: XXX.X.XXXXXX/YYYY (ex: 003.9.427384/2025)
            const ideaPattern = /^\d{1,3}\.\d{1,2}\.\d{1,6}\/\d{4}$/;
            if (!ideaPattern.test(ideaNumber)) {
                console.warn('Formato do número de idea pode estar incorreto:', ideaNumber);
                console.warn('Formato esperado: XXX.X.XXXXXX/YYYY (ex: 003.9.427384/2025)');
                // Não bloqueia, apenas avisa no console
            }
            // Remove espaços extras e caracteres invisíveis
            ideaNumber = ideaNumber.replace(/\s+/g, '').trim();
            // Validação de comprimento mínimo
            if (ideaNumber.length < 10) {
                alert('O número de idea parece estar incompleto. Verifique o formato: XXX.X.XXXXXX/YYYY');
                return;
            }
            console.log('=== VALIDAÇÃO DO VALOR ===');
            console.log('Valor original:', this.state.ideaSearchInput);
            console.log('Valor processado:', ideaNumber);
            console.log('Comprimento:', ideaNumber.length);
            console.log('Formato válido:', ideaPattern.test(ideaNumber));
            this.setState({ loading: true });
            try {
                console.log('Iniciando geração de relatório para idea:', ideaNumber);
                // Carrega IdentityManager para obter token de autenticação
                console.log('Carregando IdentityManager para autenticação...');
                const identityModules = yield (0,jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.loadArcGISJSAPIModules)([
                    'esri/identity/IdentityManager'
                ]);
                const [IdentityManager] = identityModules;
                // Obtém o token para a URL do serviço (já declarado no início da função)
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
                // Descobre qual é o parâmetro de entrada da GP
                // IMPORTANTE: Devemos usar exatamente o nome do parâmetro que a GP espera
                // O widget recebe o valor da coluna "idea", mas envia com o nome que a GP espera
                let paramName = null;
                let paramInfo = null;
                if (gpInfo.parameters && Array.isArray(gpInfo.parameters)) {
                    console.log('=== PARÂMETROS DISPONÍVEIS NA GP ===');
                    const allParams = gpInfo.parameters.map(p => ({
                        name: p.name,
                        displayName: p.displayName || p.name,
                        dataType: p.dataType,
                        direction: p.direction,
                        parameterType: p.parameterType,
                        required: p.parameterType === 'esriGPParameterTypeRequired' || p.required === true
                    }));
                    console.log('Todos os parâmetros:', JSON.stringify(allParams, null, 2));
                    // Procura pelo primeiro parâmetro de entrada (input)
                    const inputParams = gpInfo.parameters.filter(p => (p.direction === 'esriGPParameterDirectionInput' || p.direction === 'GPParameterDirectionInput') &&
                        p.name);
                    console.log('Parâmetros de entrada encontrados:', inputParams.map(p => ({
                        name: p.name,
                        displayName: p.displayName || p.name,
                        dataType: p.dataType,
                        required: p.parameterType === 'esriGPParameterTypeRequired' || p.required === true
                    })));
                    if (inputParams.length > 0) {
                        // Usa o primeiro parâmetro de entrada (que é o que a GP espera)
                        paramInfo = inputParams[0];
                        paramName = paramInfo.name; // Usa exatamente o nome que a GP espera (pode ter caracteres especiais)
                        console.log('=== PARÂMETRO SELECIONADO ===');
                        console.log('Nome técnico do parâmetro (será usado no request):', paramName);
                        console.log('Nome de exibição (label na interface):', paramInfo.displayName || paramInfo.name);
                        console.log('Detalhes completos:', {
                            name: paramInfo.name,
                            displayName: paramInfo.displayName || paramInfo.name,
                            dataType: paramInfo.dataType,
                            direction: paramInfo.direction,
                            required: paramInfo.parameterType === 'esriGPParameterTypeRequired' || paramInfo.required === true
                        });
                    }
                    else {
                        console.error('Nenhum parâmetro de entrada encontrado na GP!');
                        throw new Error('Não foi possível identificar o parâmetro de entrada da ferramenta de geoprocessamento.');
                    }
                }
                else {
                    console.error('Não foi possível obter parâmetros da GP!');
                    throw new Error('Não foi possível obter informações dos parâmetros da ferramenta de geoprocessamento.');
                }
                // Confirma qual parâmetro será usado (deve ser exatamente o que a GP espera)
                console.log('=== PARÂMETRO PARA ENVIAR À GP ===');
                console.log('Nome do parâmetro (exatamente como a GP espera):', paramName);
                console.log('Valor que será enviado (da coluna idea do widget):', ideaNumber);
                console.log('Detalhes completos do parâmetro:', paramInfo);
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
                console.log('=== PARÂMETROS PARA ENVIAR ===');
                console.log('Parâmetros preparados (para o body):', params);
                console.log('Valor do parâmetro:', paramValue, 'Tipo:', typeof paramValue);
                console.log('Nome do parâmetro (exato):', paramName);
                console.log('Nome do parâmetro (JSON):', JSON.stringify(paramName));
                // Formata os parâmetros como form-urlencoded
                const formData = new URLSearchParams();
                // Adiciona os parâmetros (exceto f=json que vai na URL)
                // IMPORTANTE: Usa o nome exato do parâmetro como está na GP (pode ter caracteres especiais)
                console.log('=== PREPARANDO FORM DATA ===');
                Object.keys(params).forEach(key => {
                    if (key !== 'f') {
                        const paramKey = key; // Usa exatamente o nome que veio da GP (ex: "N° IDEA", "valor_alerta", etc.)
                        const paramVal = String(params[key]);
                        formData.append(paramKey, paramVal);
                        console.log(`Parâmetro adicionado: nome="${paramKey}" valor="${paramVal}"`);
                        console.log(`  - Nome (JSON): ${JSON.stringify(paramKey)}`);
                        console.log(`  - Nome (bytes): ${Array.from(paramKey).map(c => c.charCodeAt(0)).join(',')}`);
                        console.log(`  - Valor (JSON): ${JSON.stringify(paramVal)}`);
                    }
                });
                const formDataString = formData.toString();
                console.log('FormData completo (string):', formDataString);
                console.log('FormData completo (URL decoded):', decodeURIComponent(formDataString));
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
                // Verifica se a task é assíncrona para decidir qual endpoint usar
                const isAsync = gpInfo.executionType === 'esriExecutionTypeAsynchronous';
                console.log('=== TENTANDO EXECUTAR GP ===');
                console.log('Tipo de execução:', gpInfo.executionType);
                console.log('É assíncrona?', isAsync);
                console.log('Tentando primeiro com task específica:', this.GP_TASK_NAME);
                console.log('Parâmetro que será enviado:', paramName);
                console.log('Valor que será enviado:', ideaNumber);
                // Se for assíncrona, usa submitJob; caso contrário, usa execute
                if (isAsync) {
                    executeUrl = `${this.GP_SERVICE_URL}/${taskNameEncoded}/submitJob`;
                    console.log('Usando endpoint /submitJob (tarefa assíncrona):', executeUrl);
                }
                else {
                    executeUrl = `${this.GP_SERVICE_URL}/${taskNameEncoded}/execute`;
                    console.log('Usando endpoint /execute (tarefa síncrona):', executeUrl);
                }
                let executeResponse = yield makeExecuteRequest(executeUrl);
                // Se der erro 500, pode ser que o endpoint da task específica não exista
                // Tenta com o endpoint da GP raiz
                if (!executeResponse.ok) {
                    let resultText = yield executeResponse.text();
                    console.warn('Primeira tentativa falhou. Status:', executeResponse.status);
                    console.warn('Resposta (primeiros 500 chars):', resultText.substring(0, 500));
                    try {
                        const resultJson = JSON.parse(resultText);
                        if (resultJson.error && resultJson.error.code === 500) {
                            console.warn('Erro 500 com task específica, tentando com endpoint da GP raiz...');
                            // Tenta com o endpoint raiz usando o mesmo tipo (submitJob ou execute)
                            if (isAsync) {
                                executeUrl = `${this.GP_SERVICE_URL}/submitJob`;
                                console.log('Tentando com endpoint da GP raiz (submitJob):', executeUrl);
                            }
                            else {
                                executeUrl = `${this.GP_SERVICE_URL}/execute`;
                                console.log('Tentando com endpoint da GP raiz (execute):', executeUrl);
                            }
                            executeResponse = yield makeExecuteRequest(executeUrl);
                        }
                    }
                    catch (e) {
                        console.error('Erro ao parsear resposta:', e);
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
                    console.error('Status HTTP:', executeResponse.status, executeResponse.statusText);
                    throw new Error(`Erro ao executar tarefa: ${executeResponse.status} ${executeResponse.statusText} - Resposta: ${textResponse.substring(0, 500)}`);
                }
                if (!executeResponse.ok) {
                    // Se a resposta tem um erro no JSON, usa ele
                    if (result.error) {
                        console.error('=== ERRO DETALHADO DA GP ===');
                        console.error('Código do erro:', result.error.code);
                        console.error('Mensagem:', result.error.message);
                        console.error('Detalhes:', result.error.details);
                        console.error('Erro completo:', JSON.stringify(result.error, null, 2));
                        // Mensagem de erro mais amigável
                        let errorMessage = 'Erro ao executar a ferramenta de geoprocessamento.\n\n';
                        if (result.error.code === 500) {
                            errorMessage += 'Erro interno do servidor (500).\n\n';
                            errorMessage += 'Possíveis causas:\n';
                            errorMessage += '1. O número de idea pode não existir no servidor\n';
                            errorMessage += '2. Problema no processamento da ferramenta\n';
                            errorMessage += '3. O servidor pode estar temporariamente indisponível\n\n';
                            errorMessage += `Valor enviado: ${ideaNumber}\n`;
                            errorMessage += `Parâmetro usado: ${paramName}\n\n`;
                            errorMessage += 'Verifique:\n';
                            errorMessage += '- Se o número de idea está correto\n';
                            errorMessage += '- Se o valor existe na camada de alertas\n';
                            errorMessage += '- Abra o console (F12) para mais detalhes';
                        }
                        else {
                            errorMessage += `Código: ${result.error.code}\n`;
                            errorMessage += `Mensagem: ${result.error.message}\n\n`;
                            if (result.error.details && result.error.details.length > 0) {
                                errorMessage += `Detalhes: ${result.error.details.join(', ')}\n\n`;
                            }
                        }
                        alert(errorMessage);
                        throw new Error(`Erro na GP: ${JSON.stringify(result.error)}`);
                    }
                    // Se não tiver campo error, mas o status não é OK, mostra o resultado completo
                    console.error('Erro HTTP:', executeResponse.status, executeResponse.statusText);
                    console.error('Resposta completa:', result);
                    alert(`Erro ao executar tarefa: ${executeResponse.status} ${executeResponse.statusText}\n\nVerifique o console (F12) para mais detalhes.`);
                    throw new Error(`Erro ao executar tarefa: ${executeResponse.status} ${executeResponse.statusText} - ${JSON.stringify(result)}`);
                }
                // Verifica se a resposta contém um jobId (tarefa assíncrona)
                // Para tarefas assíncronas, submitJob sempre retorna jobId
                if (result.jobId || isAsync) {
                    const jobId = result.jobId;
                    if (!jobId) {
                        throw new Error('Tarefa assíncrona mas não recebeu jobId na resposta');
                    }
                    console.log('Tarefa assíncrona detectada. Job ID:', jobId);
                    // Polling do status do job
                    let attempts = 0;
                    const maxAttempts = 60;
                    let jobStatus = null;
                    while (attempts < maxAttempts) {
                        yield new Promise(resolve => setTimeout(resolve, 1000));
                        // URL para verificar status do job
                        // Usa a mesma URL base que funcionou (pode ser submitJob ou execute)
                        const baseUrl = executeUrl.replace('/submitJob', '').replace('/execute', '');
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
                            // Usa a mesma URL base que funcionou (pode ser submitJob ou execute)
                            const baseUrl = executeUrl.replace('/submitJob', '').replace('/execute', '');
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
                console.error('=== ERRO COMPLETO AO EXECUTAR GP ===');
                console.error('Erro:', error);
                console.error('Mensagem:', error.message);
                console.error('Stack trace:', error.stack);
                console.error('Tipo do erro:', error.constructor.name);
                // Informações de contexto para debug
                console.error('=== CONTEXTO DO ERRO ===');
                console.error('Valor enviado:', ideaNumber);
                console.error('Parâmetro usado:', paramName);
                console.error('URL tentada:', executeUrl);
                console.error('Token presente:', !!token);
                let errorMessage = 'Erro ao gerar relatório.\n\n';
                if (error.message) {
                    // Remove informações técnicas muito longas para o usuário
                    let cleanMessage = error.message;
                    if (cleanMessage.length > 200) {
                        cleanMessage = cleanMessage.substring(0, 200) + '...';
                    }
                    errorMessage += `Mensagem: ${cleanMessage}\n\n`;
                }
                if (error.details && Array.isArray(error.details) && error.details.length > 0) {
                    errorMessage += `Detalhes: ${error.details[0]}\n\n`;
                }
                errorMessage += 'Verifique:\n';
                errorMessage += `1. Se o número de idea "${ideaNumber}" está correto\n`;
                errorMessage += '2. Se o valor existe na camada de alertas_regional_lapa\n';
                errorMessage += '3. Se a ferramenta de geoprocessamento está acessível\n';
                errorMessage += '4. Abra o console do navegador (F12) para mais detalhes técnicos\n\n';
                errorMessage += 'Dica: Tente usar o botão "Filtrar" primeiro para verificar se o número existe.';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9maWx0cmFyLWUtZ2VyYXItcmVsYXRvcmlvL2Rpc3QvcnVudGltZS93aWRnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlFQUFlO0lBQ2IsWUFBWSxFQUFFLGtCQUFrQjtJQUNoQyxRQUFRLEVBQUUsa0JBQWtCO0lBQzVCLGlCQUFpQixFQUFFLHdCQUF3QjtJQUMzQyxZQUFZLEVBQ1Ysa0JBQWtCO0lBQ3BCLFVBQVUsRUFBRSw2QkFBNkI7SUFDekMsYUFBYSxFQUFFLFNBQVM7SUFDeEIsY0FBYyxFQUFFLGlCQUFpQjtJQUNqQyxXQUFXLEVBQUUsZUFBZTtJQUM1QixPQUFPLEVBQUUsZUFBZTtJQUN4QixXQUFXLEVBQUUsK0JBQStCO0NBQzdDOzs7Ozs7Ozs7Ozs7QUNaRDs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7QUNBQTs7O0tBR0s7QUFDTCxxQkFBdUIsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0puRCwwQ0FBMEM7QUFDMUMsZUFBZTtBQUNmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFrQkU7QUFDOEQ7QUFLNUM7QUFJZ0M7QUFVckMsTUFBTSxNQUFPLFNBQVEsNENBQUssQ0FBQyxhQUd6QztJQUhEOztRQVVFLFVBQUssR0FBRztZQUNOLGVBQWUsRUFBRSxFQUFFO1lBQ25CLFdBQVcs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SixDQUNHLENBQ0YsQ0FDUDtJQUNILENBQUM7Q0FDRjtBQUVPLFNBQVMsMkJBQTJCLENBQUMsR0FBRyxJQUFJLHFCQUF1QixHQUFHLEdBQUcsRUFBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2ZpbHRyYXItZS1nZXJhci1yZWxhdG9yaW8vc3JjL3J1bnRpbWUvdHJhbnNsYXRpb25zL2RlZmF1bHQudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWFyY2dpc1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9maWx0cmFyLWUtZ2VyYXItcmVsYXRvcmlvL3NyYy9ydW50aW1lL3dpZGdldC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xyXG4gIF93aWRnZXRMYWJlbDogJ0ZpbHRyYXIgZSBCYWl4YXInLFxyXG4gIGFkZExheWVyOiAnQWRpY2lvbmFyIENhbWFkYScsXHJcbiAgZmVhdHVyZVNlcnZpY2VVcmw6ICdVUkwgZG8gRmVhdHVyZSBTZXJ2aWNlJyxcclxuICBpbnN0cnVjdGlvbnM6XHJcbiAgICAnRGlnaXRlIG8gbsK6IElERUEnLFxyXG4gIHNlYXJjaElkZWE6ICdQZXNxdWlzYXIgcG9yIG7Dum1lcm8gKGlkZWEpJyxcclxuICBmaWx0ZXJBbmRab29tOiAnRmlsdHJhcicsXHJcbiAgZ2VuZXJhdGVSZXBvcnQ6ICdHZXJhciBSZWxhdMOzcmlvJyxcclxuICBjbGVhckZpbHRlcjogJ0xpbXBhciBGaWx0cm8nLFxyXG4gIGxvYWRpbmc6ICdDYXJyZWdhbmRvLi4uJyxcclxuICBsYXllckxvYWRlZDogJ0NhbWFkYSBjYXJyZWdhZGEgY29tIHN1Y2Vzc28hJ1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2FyY2dpc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgKi9cclxuLyoqIEBqc3gganN4ICovXHJcbi8qKlxyXG4gIExpY2Vuc2luZ1xyXG5cclxuICBDb3B5cmlnaHQgMjAyMiBFc3JpXHJcblxyXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IFlvdVxyXG4gIG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5XHJcbiAgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvclxyXG4gIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZ1xyXG4gIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuXHJcbiAgQSBjb3B5IG9mIHRoZSBsaWNlbnNlIGlzIGF2YWlsYWJsZSBpbiB0aGUgcmVwb3NpdG9yeSdzXHJcbiAgTElDRU5TRSBmaWxlLlxyXG4qL1xyXG5pbXBvcnQgeyBSZWFjdCwgdHlwZSBBbGxXaWRnZXRQcm9wcywgY3NzLCBqc3ggfSBmcm9tICdqaW11LWNvcmUnXHJcbmltcG9ydCB7XHJcbiAgbG9hZEFyY0dJU0pTQVBJTW9kdWxlcyxcclxuICBKaW11TWFwVmlld0NvbXBvbmVudCxcclxuICB0eXBlIEppbXVNYXBWaWV3XHJcbn0gZnJvbSAnamltdS1hcmNnaXMnXHJcblxyXG5pbXBvcnQgdHlwZSB7IElNQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJ1xyXG5cclxuaW1wb3J0IGRlZmF1bHRNZXNzYWdlcyBmcm9tICcuL3RyYW5zbGF0aW9ucy9kZWZhdWx0J1xyXG5cclxuaW50ZXJmYWNlIElTdGF0ZSB7XHJcbiAgaWRlYVNlYXJjaElucHV0OiBzdHJpbmdcclxuICBqaW11TWFwVmlldzogSmltdU1hcFZpZXdcclxuICBmZWF0dXJlTGF5ZXI6IF9fZXNyaS5GZWF0dXJlTGF5ZXJcclxuICBsb2FkaW5nOiBib29sZWFuXHJcbiAgaW5pdGlhbEV4dGVudDogX19lc3JpLkV4dGVudFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaWRnZXQgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PFxyXG5BbGxXaWRnZXRQcm9wczxJTUNvbmZpZz4sXHJcbklTdGF0ZVxyXG4+IHtcclxuICAvLyBHaXZlIHR5cGVzIHRvIHRoZSBtb2R1bGVzIHdlIGltcG9ydCBmcm9tIHRoZSBBcmNHSVMgQVBJIGZvciBKYXZhU2NyaXB0XHJcbiAgLy8gdG8gdGVsbCBUeXBlU2NyaXB0IHdoYXQgdHlwZXMgdGhleSBhcmUuXHJcbiAgRmVhdHVyZUxheWVyOiB0eXBlb2YgX19lc3JpLkZlYXR1cmVMYXllclxyXG4gIFF1ZXJ5OiB0eXBlb2YgX19lc3JpLlF1ZXJ5XHJcbiAgU3BhdGlhbFJlZmVyZW5jZTogdHlwZW9mIF9fZXNyaS5TcGF0aWFsUmVmZXJlbmNlXHJcblxyXG4gIHN0YXRlID0ge1xyXG4gICAgaWRlYVNlYXJjaElucHV0OiAnJyxcclxuICAgIGppbXVNYXBWaWV3OiBudWxsLFxyXG4gICAgZmVhdHVyZUxheWVyOiBudWxsLFxyXG4gICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICBpbml0aWFsRXh0ZW50OiBudWxsXHJcbiAgfVxyXG5cclxuICAvLyBVUkwgZml4YSBkYSBjYW1hZGFcclxuICByZWFkb25seSBGRUFUVVJFX1NFUlZJQ0VfVVJMID0gJ2h0dHBzOi8vbWVpb2FtYmllbnRlLnNpc3RlbWFzLm1wYmEubXAuYnIvc2VydmVyL3Jlc3Qvc2VydmljZXMvSG9zdGVkL2FsZXJ0YXNfcmVnaW9uYWxfbGFwYS9GZWF0dXJlU2VydmVyJ1xyXG4gIFxyXG4gIC8vIFVSTCBkYSBmZXJyYW1lbnRhIGRlIGdlb3Byb2Nlc3NhbWVudG9cclxuICByZWFkb25seSBHUF9TRVJWSUNFX1VSTCA9ICdodHRwczovL21laW9hbWJpZW50ZS5zaXN0ZW1hcy5tcGJhLm1wLmJyL3NlcnZlci9yZXN0L3NlcnZpY2VzL3Rlc3Rlb3V0cHV0L3Byb2Nlc3NhcmFsZXJ0YV9pZGVhL0dQU2VydmVyJ1xyXG4gIFxyXG4gIC8vIE5vbWUgZGEgdGFzayBlc3BlY8OtZmljYSBkZW50cm8gZGEgR1BcclxuICByZWFkb25seSBHUF9UQVNLX05BTUUgPSAnUHJvY2Vzc2FtZW50byBkZSBhbGVydGFzJ1xyXG5cclxuICAvLyBGdW7Dp8OjbyBjaGFtYWRhIHF1YW5kbyBvIHZhbG9yIGRhIHBlc3F1aXNhIG11ZGFcclxuICBoYW5kbGVJZGVhU2VhcmNoSW5wdXRDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBpZGVhU2VhcmNoSW5wdXQ6IGV2ZW50LnRhcmdldC52YWx1ZVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIC8vIENhcnJlZ2EgYSBjYW1hZGEgYXV0b21hdGljYW1lbnRlIHF1YW5kbyBvIGNvbXBvbmVudGUgw6kgbW9udGFkbyBvdSBvIG1hcGEgZXN0w6EgZGlzcG9uw612ZWxcclxuICBjb21wb25lbnREaWRVcGRhdGUgPSAocHJldlByb3BzLCBwcmV2U3RhdGUpID0+IHtcclxuICAgIGlmICh0aGlzLnN0YXRlLmppbXVNYXBWaWV3ICYmICF0aGlzLnN0YXRlLmZlYXR1cmVMYXllciAmJiAhcHJldlN0YXRlLmppbXVNYXBWaWV3KSB7XHJcbiAgICAgIC8vIFNhbHZhIGEgdmlzdWFsaXphw6fDo28gaW5pY2lhbCBxdWFuZG8gbyBtYXBhIMOpIGRldGVjdGFkbyBwZWxhIHByaW1laXJhIHZlelxyXG4gICAgICBpZiAodGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3ICYmICF0aGlzLnN0YXRlLmluaXRpYWxFeHRlbnQpIHtcclxuICAgICAgICBjb25zdCBjdXJyZW50RXh0ZW50ID0gdGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3LmV4dGVudFxyXG4gICAgICAgIGlmIChjdXJyZW50RXh0ZW50KSB7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaW5pdGlhbEV4dGVudDogY3VycmVudEV4dGVudC5jbG9uZSgpXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLmxvYWRGZWF0dXJlTGF5ZXIoKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gQ2FycmVnYSBhIGNhbWFkYSBkZSBmZWF0dXJlIHNlcnZpY2VcclxuICBsb2FkRmVhdHVyZUxheWVyID0gKCkgPT4ge1xyXG4gICAgaWYgKCF0aGlzLnN0YXRlLmppbXVNYXBWaWV3KSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiB0cnVlIH0pXHJcblxyXG4gICAgbG9hZEFyY0dJU0pTQVBJTW9kdWxlcyhbXHJcbiAgICAgICdlc3JpL2xheWVycy9GZWF0dXJlTGF5ZXInLFxyXG4gICAgICAnZXNyaS9nZW9tZXRyeS9TcGF0aWFsUmVmZXJlbmNlJ1xyXG4gICAgXSkudGhlbigobW9kdWxlcykgPT4ge1xyXG4gICAgICBbdGhpcy5GZWF0dXJlTGF5ZXIsIHRoaXMuU3BhdGlhbFJlZmVyZW5jZV0gPSBtb2R1bGVzXHJcblxyXG4gICAgICAvLyBDcmlhIGEgY2FtYWRhIGNvbSBhIFVSTCBmaXhhXHJcbiAgICAgIGNvbnN0IGxheWVyID0gbmV3IHRoaXMuRmVhdHVyZUxheWVyKHtcclxuICAgICAgICB1cmw6IHRoaXMuRkVBVFVSRV9TRVJWSUNFX1VSTFxyXG4gICAgICB9KVxyXG5cclxuICAgICAgLy8gQWRpY2lvbmEgYSBjYW1hZGEgYW8gbWFwYVxyXG4gICAgICB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcubWFwLmFkZChsYXllcilcclxuXHJcbiAgICAgIC8vIEFndWFyZGEgYSBjYW1hZGEgc2VyIGNyaWFkYVxyXG4gICAgICBsYXllci5vbignbGF5ZXJ2aWV3LWNyZWF0ZScsICgpID0+IHtcclxuICAgICAgICAvLyBTYWx2YSBhIHZpc3VhbGl6YcOnw6NvIGluaWNpYWwgZG8gbWFwYSBzZSBhaW5kYSBuw6NvIGZvaSBzYWx2YVxyXG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5pbml0aWFsRXh0ZW50ICYmIHRoaXMuc3RhdGUuamltdU1hcFZpZXcgJiYgdGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3KSB7XHJcbiAgICAgICAgICBjb25zdCBjdXJyZW50RXh0ZW50ID0gdGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3LmV4dGVudFxyXG4gICAgICAgICAgaWYgKGN1cnJlbnRFeHRlbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgZmVhdHVyZUxheWVyOiBsYXllcixcclxuICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICBpbml0aWFsRXh0ZW50OiBjdXJyZW50RXh0ZW50LmNsb25lKClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgIGZlYXR1cmVMYXllcjogbGF5ZXIsXHJcbiAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGZlYXR1cmVMYXllcjogbGF5ZXIsXHJcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuXHJcbiAgICAgIGxheWVyLm9uKCdsYXllcnZpZXctY3JlYXRlLWVycm9yJywgKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm8gYW8gY2FycmVnYXIgYSBjYW1hZGEnKVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIC8vIEZ1bsOnw6NvIHBhcmEgZmlsdHJhciBlIGRhciB6b29tIG5vIHBvbMOtZ29ubyBiYXNlYWRvIG5hIHBlc3F1aXNhXHJcbiAgaGFuZGxlRmlsdGVyQW5kWm9vbSA9IGFzeW5jIChldnQpID0+IHtcclxuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpXHJcblxyXG4gICAgLy8gQ2Fzb3MgZGUgZXJyb1xyXG4gICAgaWYgKCF0aGlzLnN0YXRlLmppbXVNYXBWaWV3KSB7XHJcbiAgICAgIGFsZXJ0KCdQb3IgZmF2b3IsIGNvbmZpZ3VyZSB1bSBtYXBhIG5vIHdpZGdldC4nKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGlmICghdGhpcy5zdGF0ZS5mZWF0dXJlTGF5ZXIpIHtcclxuICAgICAgYWxlcnQoJ0EgY2FtYWRhIGFpbmRhIG7Do28gZm9pIGNhcnJlZ2FkYS4gQWd1YXJkZS4uLicpXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc3RhdGUuaWRlYVNlYXJjaElucHV0ID09PSAnJyB8fCB0aGlzLnN0YXRlLmlkZWFTZWFyY2hJbnB1dC50cmltKCkgPT09ICcnKSB7XHJcbiAgICAgIGFsZXJ0KCdQb3IgZmF2b3IsIGRpZ2l0ZSB1bSBuw7ptZXJvIHBhcmEgcGVzcXVpc2FyIG5hIGNvbHVuYSBpZGVhLicpXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiB0cnVlIH0pXHJcblxyXG4gICAgLy8gQ2FycmVnYSBvcyBtw7NkdWxvcyBuZWNlc3PDoXJpb3NcclxuICAgIGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMoW1xyXG4gICAgICAnZXNyaS9sYXllcnMvRmVhdHVyZUxheWVyJyxcclxuICAgICAgJ2VzcmkvZ2VvbWV0cnkvU3BhdGlhbFJlZmVyZW5jZSdcclxuICAgIF0pLnRoZW4oKG1vZHVsZXMpID0+IHtcclxuICAgICAgW3RoaXMuRmVhdHVyZUxheWVyLCB0aGlzLlNwYXRpYWxSZWZlcmVuY2VdID0gbW9kdWxlc1xyXG5cclxuICAgICAgY29uc3QgbGF5ZXIgPSB0aGlzLnN0YXRlLmZlYXR1cmVMYXllclxyXG4gICAgICBjb25zdCBzZWFyY2hWYWx1ZSA9IHRoaXMuc3RhdGUuaWRlYVNlYXJjaElucHV0LnRyaW0oKVxyXG4gICAgICBcclxuICAgICAgLy8gRXNjYXBhIGFzcGFzIHNpbXBsZXMgcGFyYSBldml0YXIgU1FMIGluamVjdGlvblxyXG4gICAgICBjb25zdCBlc2NhcGVkVmFsdWUgPSBzZWFyY2hWYWx1ZS5yZXBsYWNlKC8nL2csIFwiJydcIilcclxuXHJcbiAgICAgIC8vIFZlcmlmaWNhIHNlIGEgY2FtYWRhIGVzdMOhIGNhcnJlZ2FkYSBlIG9idMOpbSBpbmZvcm1hw6fDtWVzIGRvcyBjYW1wb3NcclxuICAgICAgLy8gQWd1YXJkYSBhIGNhbWFkYSBlc3RhciBjb21wbGV0YW1lbnRlIGNhcnJlZ2FkYVxyXG4gICAgICBjb25zdCBjaGVja0FuZFF1ZXJ5ID0gKCkgPT4ge1xyXG4gICAgICAgIC8vIExpc3RhIGRlIHBvc3PDrXZlaXMgbm9tZXMgZGUgY29sdW5hIChjYXNlLWluc2Vuc2l0aXZlKVxyXG4gICAgICAgIGNvbnN0IHBvc3NpYmxlRmllbGROYW1lcyA9IFsnaWRlYScsICdJREVBJywgJ0lkZWEnLCAnSUQnLCAnaWQnLCAnSWQnXVxyXG4gICAgICAgIGxldCBmaWVsZE5hbWUgPSAnaWRlYScgLy8gUGFkcsOjb1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFRlbnRhIGVuY29udHJhciBvIGNhbXBvIGNvcnJldG9cclxuICAgICAgICBpZiAobGF5ZXIuZmllbGRzICYmIGxheWVyLmZpZWxkcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICBjb25zdCBmb3VuZEZpZWxkID0gbGF5ZXIuZmllbGRzLmZpbmQoZmllbGQgPT4gXHJcbiAgICAgICAgICAgIHBvc3NpYmxlRmllbGROYW1lcy5pbmNsdWRlcyhmaWVsZC5uYW1lKVxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICAgaWYgKGZvdW5kRmllbGQpIHtcclxuICAgICAgICAgICAgZmllbGROYW1lID0gZm91bmRGaWVsZC5uYW1lXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBTZSBuw6NvIGVuY29udHJhciwgdGVudGEgZmF6ZXIgdW1hIGJ1c2NhIGNhc2UtaW5zZW5zaXRpdmVcclxuICAgICAgICAgICAgY29uc3QgY2FzZUluc2Vuc2l0aXZlRmllbGQgPSBsYXllci5maWVsZHMuZmluZChmaWVsZCA9PiBcclxuICAgICAgICAgICAgICBmaWVsZC5uYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdpZGVhJ1xyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIGlmIChjYXNlSW5zZW5zaXRpdmVGaWVsZCkge1xyXG4gICAgICAgICAgICAgIGZpZWxkTmFtZSA9IGNhc2VJbnNlbnNpdGl2ZUZpZWxkLm5hbWVcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAvLyBMb2cgZG9zIGNhbXBvcyBkaXNwb27DrXZlaXMgcGFyYSBkZWJ1Z1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDYW1wb3MgZGlzcG9uw612ZWlzIG5hIGNhbWFkYTonLCBsYXllci5maWVsZHMubWFwKGYgPT4gZi5uYW1lKSlcclxuICAgICAgICAgICAgICAvLyBUZW50YSB1c2FyIG8gcHJpbWVpcm8gY2FtcG8gcXVlIHBhcmVjZSBzZXIgdW0gSURcclxuICAgICAgICAgICAgICBjb25zdCBpZEZpZWxkID0gbGF5ZXIuZmllbGRzLmZpbmQoZmllbGQgPT4gXHJcbiAgICAgICAgICAgICAgICBmaWVsZC50eXBlID09PSAnZXNyaUZpZWxkVHlwZVN0cmluZycgfHwgZmllbGQudHlwZSA9PT0gJ2VzcmlGaWVsZFR5cGVJbnRlZ2VyJyB8fCBmaWVsZC50eXBlID09PSAnZXNyaUZpZWxkVHlwZURvdWJsZSdcclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgaWYgKGlkRmllbGQpIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkTmFtZSA9IGlkRmllbGQubmFtZVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFVzYW5kbyBjYW1wbzogJHtmaWVsZE5hbWV9YClcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENyaWEgdW1hIHF1ZXJ5IHBhcmEgYnVzY2FyIG8gcG9sw61nb25vIHBlbGEgY29sdW5hXHJcbiAgICAgICAgLy8gVXNhIExJS0UgcGFyYSBidXNjYSBtYWlzIGZsZXjDrXZlbCBlIHRyYXRhIGNvbW8gc3RyaW5nXHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSBsYXllci5jcmVhdGVRdWVyeSgpXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gVGVudGEgZGlmZXJlbnRlcyBhYm9yZGFnZW5zIGRlIHF1ZXJ5XHJcbiAgICAgICAgLy8gMS4gQnVzY2EgZXhhdGEgY29tbyBzdHJpbmdcclxuICAgICAgICAvLyAyLiBCdXNjYSBjb20gTElLRSBwYXJhIHZhbG9yZXMgcGFyY2lhaXNcclxuICAgICAgICAvLyAzLiBCdXNjYSBjb21vIG7Dum1lcm8gKHNlIG8gdmFsb3IgZm9yIG51bcOpcmljbylcclxuICAgICAgICBjb25zdCBoYXNTcGVjaWFsQ2hhcnMgPSBzZWFyY2hWYWx1ZS5pbmRleE9mKCcuJykgIT09IC0xIHx8IHNlYXJjaFZhbHVlLmluZGV4T2YoJy8nKSAhPT0gLTFcclxuICAgICAgICBcclxuICAgICAgICAvLyBQYXJhIHZhbG9yZXMgY29tIGNhcmFjdGVyZXMgZXNwZWNpYWlzIChjb21vIFwiMDAzLjkuNDI3MDc0LzIwMjVcIiksIHVzYSBhcGVuYXMgY29tbyBzdHJpbmdcclxuICAgICAgICBpZiAoaGFzU3BlY2lhbENoYXJzKSB7XHJcbiAgICAgICAgICBxdWVyeS53aGVyZSA9IGAke2ZpZWxkTmFtZX0gPSAnJHtlc2NhcGVkVmFsdWV9J2BcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLy8gU2UgZm9yIHVtIG7Dum1lcm8gc2ltcGxlcywgdGVudGEgY29tbyBuw7ptZXJvIGUgY29tbyBzdHJpbmdcclxuICAgICAgICAgIGNvbnN0IGlzTnVtZXJpYyA9ICFpc05hTihwYXJzZUZsb2F0KHNlYXJjaFZhbHVlKSkgJiYgaXNGaW5pdGUocGFyc2VGbG9hdChzZWFyY2hWYWx1ZSkpXHJcbiAgICAgICAgICBpZiAoaXNOdW1lcmljKSB7XHJcbiAgICAgICAgICAgIHF1ZXJ5LndoZXJlID0gYCR7ZmllbGROYW1lfSA9ICR7c2VhcmNoVmFsdWV9IE9SICR7ZmllbGROYW1lfSA9ICcke2VzY2FwZWRWYWx1ZX0nYFxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcXVlcnkud2hlcmUgPSBgJHtmaWVsZE5hbWV9ID0gJyR7ZXNjYXBlZFZhbHVlfSdgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHF1ZXJ5LnJldHVybkdlb21ldHJ5ID0gdHJ1ZVxyXG5cclxuICAgICAgICAvLyBFeGVjdXRhIGEgcXVlcnlcclxuICAgICAgICBsYXllci5xdWVyeUZlYXR1cmVzKHF1ZXJ5KS50aGVuKChyZXN1bHRzKSA9PiB7XHJcbiAgICAgICAgICBpZiAocmVzdWx0cy5mZWF0dXJlcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgLy8gU2UgbsOjbyBlbmNvbnRyb3UsIHRlbnRhIGNvbSBMSUtFXHJcbiAgICAgICAgICAgIGNvbnN0IGxpa2VRdWVyeSA9IGxheWVyLmNyZWF0ZVF1ZXJ5KClcclxuICAgICAgICAgICAgbGlrZVF1ZXJ5LndoZXJlID0gYCR7ZmllbGROYW1lfSBMSUtFICclJHtlc2NhcGVkVmFsdWV9JSdgXHJcbiAgICAgICAgICAgIGxpa2VRdWVyeS5yZXR1cm5HZW9tZXRyeSA9IHRydWVcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiBsYXllci5xdWVyeUZlYXR1cmVzKGxpa2VRdWVyeSkudGhlbigobGlrZVJlc3VsdHMpID0+IHtcclxuICAgICAgICAgICAgICBpZiAobGlrZVJlc3VsdHMuZmVhdHVyZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChgTmVuaHVtIHBvbMOtZ29ubyBlbmNvbnRyYWRvIGNvbSAke2ZpZWxkTmFtZX0gPSAke3NlYXJjaFZhbHVlfWApXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSlcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAvLyBTZSBlbmNvbnRyb3UgY29tIExJS0UsIHVzYSBvIHByaW1laXJvIHJlc3VsdGFkb1xyXG4gICAgICAgICAgICAgIGNvbnN0IGZvdW5kR3JhcGhpYyA9IGxpa2VSZXN1bHRzLmZlYXR1cmVzWzBdXHJcbiAgICAgICAgICAgICAgY29uc3QgYWN0dWFsVmFsdWUgPSBmb3VuZEdyYXBoaWMuYXR0cmlidXRlc1tmaWVsZE5hbWVdXHJcbiAgICAgICAgICAgICAgdGhpcy5hcHBseUZpbHRlckFuZFpvb20obGF5ZXIsIGZvdW5kR3JhcGhpYywgZmllbGROYW1lLCBhY3R1YWxWYWx1ZSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvLyBTZSBlbmNvbnRyb3UsIGFwbGljYSBmaWx0cm8gZSB6b29tXHJcbiAgICAgICAgICBjb25zdCBmb3VuZEdyYXBoaWMgPSByZXN1bHRzLmZlYXR1cmVzWzBdXHJcbiAgICAgICAgICBjb25zdCBhY3R1YWxWYWx1ZSA9IGZvdW5kR3JhcGhpYy5hdHRyaWJ1dGVzW2ZpZWxkTmFtZV1cclxuICAgICAgICAgIHRoaXMuYXBwbHlGaWx0ZXJBbmRab29tKGxheWVyLCBmb3VuZEdyYXBoaWMsIGZpZWxkTmFtZSwgYWN0dWFsVmFsdWUpXHJcbiAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvIGFvIHBlc3F1aXNhciBmZWF0dXJlczonLCBlcnJvcilcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0RldGFsaGVzIGRvIGVycm86Jywge1xyXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLFxyXG4gICAgICAgICAgICBkZXRhaWxzOiBlcnJvci5kZXRhaWxzLFxyXG4gICAgICAgICAgICBmaWVsZE5hbWU6IGZpZWxkTmFtZSxcclxuICAgICAgICAgICAgc2VhcmNoVmFsdWU6IHNlYXJjaFZhbHVlXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAvLyBUZW50YSBtb3N0cmFyIGluZm9ybWHDp8O1ZXMgbWFpcyDDunRlaXNcclxuICAgICAgICAgIGxldCBlcnJvck1lc3NhZ2UgPSAnRXJybyBhbyBwZXNxdWlzYXIuICdcclxuICAgICAgICAgIGlmIChsYXllci5maWVsZHMgJiYgbGF5ZXIuZmllbGRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgY29uc3QgZmllbGROYW1lcyA9IGxheWVyLmZpZWxkcy5tYXAoZiA9PiBmLm5hbWUpLmpvaW4oJywgJylcclxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlICs9IGBcXG5cXG5DYW1wb3MgZGlzcG9uw612ZWlzOiAke2ZpZWxkTmFtZXN9YFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZXJyb3JNZXNzYWdlICs9IGBcXG5cXG5WZXJpZmlxdWUgc2UgYSBjb2x1bmEgXCIke2ZpZWxkTmFtZX1cIiBleGlzdGUgZSBzZSBvIHZhbG9yIFwiJHtzZWFyY2hWYWx1ZX1cIiBlc3TDoSBjb3JyZXRvLmBcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgYWxlcnQoZXJyb3JNZXNzYWdlKVxyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLy8gU2UgYSBjYW1hZGEgasOhIGVzdMOhIGNhcnJlZ2FkYSwgZXhlY3V0YSBkaXJldGFtZW50ZVxyXG4gICAgICBpZiAobGF5ZXIubG9hZGVkKSB7XHJcbiAgICAgICAgY2hlY2tBbmRRdWVyeSgpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gQWd1YXJkYSBhIGNhbWFkYSBjYXJyZWdhclxyXG4gICAgICAgIGxheWVyLndoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgY2hlY2tBbmRRdWVyeSgpXHJcbiAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvIGFvIGNhcnJlZ2FyIGluZm9ybWHDp8O1ZXMgZGEgY2FtYWRhOicsIGVycm9yKVxyXG4gICAgICAgICAgYWxlcnQoJ0Vycm8gYW8gY2FycmVnYXIgaW5mb3JtYcOnw7VlcyBkYSBjYW1hZGEuIFZlcmlmaXF1ZSBzZSBhIGNhbWFkYSBlc3TDoSBhY2Vzc8OtdmVsLicpXHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSlcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgLy8gRnVuw6fDo28gYXV4aWxpYXIgcGFyYSBhcGxpY2FyIGZpbHRybyBlIHpvb21cclxuICBhcHBseUZpbHRlckFuZFpvb20gPSAobGF5ZXIsIGdyYXBoaWMsIGZpZWxkTmFtZSwgYWN0dWFsVmFsdWUpID0+IHtcclxuICAgIC8vIE9idMOpbSBvIHZhbG9yIHJlYWwgZG8gYXRyaWJ1dG8gZG8gZ3JhcGhpY1xyXG4gICAgY29uc3QgYXR0cmlidXRlVmFsdWUgPSBncmFwaGljLmF0dHJpYnV0ZXNbZmllbGROYW1lXVxyXG4gICAgXHJcbiAgICAvLyBTZSBvIHZhbG9yIG7Do28gZm9pIHBhc3NhZG8sIHVzYSBvIGRvIGF0cmlidXRvXHJcbiAgICBjb25zdCB2YWx1ZVRvRmlsdGVyID0gYWN0dWFsVmFsdWUgIT09IHVuZGVmaW5lZCA/IGFjdHVhbFZhbHVlIDogYXR0cmlidXRlVmFsdWVcclxuICAgIFxyXG4gICAgLy8gRXNjYXBhIG8gdmFsb3IgcGFyYSBTUUwgKHRyYXRhIHN0cmluZ3MsIG7Dum1lcm9zIGUgbnVsbClcclxuICAgIGxldCBkZWZpbml0aW9uRXhwcmVzc2lvblxyXG4gICAgaWYgKHZhbHVlVG9GaWx0ZXIgPT09IG51bGwgfHwgdmFsdWVUb0ZpbHRlciA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGRlZmluaXRpb25FeHByZXNzaW9uID0gYCR7ZmllbGROYW1lfSBJUyBOVUxMYFxyXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWVUb0ZpbHRlciA9PT0gJ251bWJlcicpIHtcclxuICAgICAgZGVmaW5pdGlvbkV4cHJlc3Npb24gPSBgJHtmaWVsZE5hbWV9ID0gJHt2YWx1ZVRvRmlsdGVyfWBcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIMOJIHVtYSBzdHJpbmcsIHByZWNpc2EgZXNjYXBhciBhc3BhcyBzaW1wbGVzXHJcbiAgICAgIGNvbnN0IGVzY2FwZWRWYWx1ZSA9IFN0cmluZyh2YWx1ZVRvRmlsdGVyKS5yZXBsYWNlKC8nL2csIFwiJydcIilcclxuICAgICAgZGVmaW5pdGlvbkV4cHJlc3Npb24gPSBgJHtmaWVsZE5hbWV9ID0gJyR7ZXNjYXBlZFZhbHVlfSdgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnNvbGUubG9nKGBBcGxpY2FuZG8gZmlsdHJvOiAke2ZpZWxkTmFtZX0gPSAke3ZhbHVlVG9GaWx0ZXJ9YClcclxuICAgIGNvbnNvbGUubG9nKGBEZWZpbml0aW9uIEV4cHJlc3Npb246ICR7ZGVmaW5pdGlvbkV4cHJlc3Npb259YClcclxuXHJcbiAgICAvLyBBcGxpY2EgbyBmaWx0cm8gbmEgY2FtYWRhIHVzYW5kbyBkZWZpbml0aW9uRXhwcmVzc2lvblxyXG4gICAgLy8gSXNzbyDDqSBvIG3DqXRvZG8gY29ycmV0byBwYXJhIGZpbHRyYXIgdW1hIEZlYXR1cmVMYXllciBlIG9jdWx0YXIgb3V0cm9zIHBvbMOtZ29ub3NcclxuICAgIGxheWVyLmRlZmluaXRpb25FeHByZXNzaW9uID0gZGVmaW5pdGlvbkV4cHJlc3Npb25cclxuICAgIFxyXG4gICAgLy8gRm9yw6dhIGEgYXR1YWxpemHDp8OjbyBpbWVkaWF0YSBkYSBjYW1hZGEgcGFyYSBhcGxpY2FyIG8gZmlsdHJvXHJcbiAgICBsYXllci5yZWZyZXNoKClcclxuICAgIFxyXG4gICAgY29uc29sZS5sb2coJ0ZpbHRybyBhcGxpY2Fkby4gQSBjYW1hZGEgZGV2ZSBtb3N0cmFyIEFQRU5BUyBvIHBvbMOtZ29ubyBzZWxlY2lvbmFkbycpXHJcbiAgICBcclxuICAgIC8vIEFndWFyZGEgcXVlIGEgY2FtYWRhIGVzdGVqYSBjb21wbGV0YW1lbnRlIGNhcnJlZ2FkYSBhbnRlcyBkZSBhcGxpY2FyIG8gZmlsdHJvXHJcbiAgICBpZiAobGF5ZXIubG9hZGVkKSB7XHJcbiAgICAgIC8vIEEgY2FtYWRhIGrDoSBlc3TDoSBjYXJyZWdhZGEsIGFwbGljYSBvIGZpbHRybyBkaXJldGFtZW50ZVxyXG4gICAgICB0aGlzLmFwcGx5Wm9vbUFmdGVyRmlsdGVyKGxheWVyLCBncmFwaGljKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gQWd1YXJkYSBhIGNhbWFkYSBjYXJyZWdhciBwcmltZWlyb1xyXG4gICAgICBsYXllci53aGVuKCgpID0+IHtcclxuICAgICAgICAvLyBBcGxpY2EgbyBmaWx0cm8gbm92YW1lbnRlIGFww7NzIGNhcnJlZ2FyIChnYXJhbnRpYSlcclxuICAgICAgICBsYXllci5kZWZpbml0aW9uRXhwcmVzc2lvbiA9IGRlZmluaXRpb25FeHByZXNzaW9uXHJcbiAgICAgICAgbGF5ZXIucmVmcmVzaCgpXHJcbiAgICAgICAgdGhpcy5hcHBseVpvb21BZnRlckZpbHRlcihsYXllciwgZ3JhcGhpYylcclxuICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJybyBhbyBhZ3VhcmRhciBjYW1hZGE6JywgZXJyb3IpXHJcbiAgICAgICAgLy8gTWVzbW8gYXNzaW0gdGVudGEgYXBsaWNhciBvIHpvb21cclxuICAgICAgICB0aGlzLmFwcGx5Wm9vbUFmdGVyRmlsdGVyKGxheWVyLCBncmFwaGljKVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gRnVuw6fDo28gYXV4aWxpYXIgcGFyYSBhcGxpY2FyIHpvb20gYXDDs3MgbyBmaWx0cm9cclxuICBhcHBseVpvb21BZnRlckZpbHRlciA9IChsYXllciwgZ3JhcGhpYykgPT4ge1xyXG4gICAgLy8gQWd1YXJkYSB1bSBwb3VjbyBwYXJhIGdhcmFudGlyIHF1ZSBvIGZpbHRybyBzZWphIHByb2Nlc3NhZG8gcGVsYSBjYW1hZGFcclxuICAgIC8vIE8gZGVmaW5pdGlvbkV4cHJlc3Npb24gcHJlY2lzYSBkZSB0ZW1wbyBwYXJhIHNlciBwcm9jZXNzYWRvXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgLy8gRMOhIHpvb20gbm8gcG9sw61nb25vIGVuY29udHJhZG9cclxuICAgICAgaWYgKGdyYXBoaWMuZ2VvbWV0cnkpIHtcclxuICAgICAgICB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcuZ29Ubyh7XHJcbiAgICAgICAgICB0YXJnZXQ6IGdyYXBoaWMuZ2VvbWV0cnksXHJcbiAgICAgICAgICB6b29tOiAxNVxyXG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pXHJcbiAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvIGFvIGRhciB6b29tOicsIGVycm9yKVxyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSlcclxuICAgICAgfVxyXG4gICAgfSwgNTAwKVxyXG4gIH1cclxuXHJcbiAgLy8gRnVuw6fDo28gcGFyYSBsaW1wYXIgbyBmaWx0cm9cclxuICBoYW5kbGVDbGVhckZpbHRlciA9ICgpID0+IHtcclxuICAgIGlmICh0aGlzLnN0YXRlLmZlYXR1cmVMYXllcikge1xyXG4gICAgICAvLyBSZW1vdmUgbyBmaWx0cm8gZGVmaW5pbmRvIGRlZmluaXRpb25FeHByZXNzaW9uIGNvbW8gdmF6aW9cclxuICAgICAgdGhpcy5zdGF0ZS5mZWF0dXJlTGF5ZXIuZGVmaW5pdGlvbkV4cHJlc3Npb24gPSAnJ1xyXG4gICAgICB0aGlzLnN0YXRlLmZlYXR1cmVMYXllci5yZWZyZXNoKClcclxuICAgICAgY29uc29sZS5sb2coJ0ZpbHRybyByZW1vdmlkbycpXHJcbiAgICAgIFxyXG4gICAgICAvLyBSZXN0YXVyYSBhIHZpc3VhbGl6YcOnw6NvIGluaWNpYWwgZG8gbWFwYVxyXG4gICAgICBpZiAodGhpcy5zdGF0ZS5qaW11TWFwVmlldyAmJiB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5pbml0aWFsRXh0ZW50KSB7XHJcbiAgICAgICAgICAvLyBSZXN0YXVyYSBhIGV4dGVuc8OjbyBpbmljaWFsIHNhbHZhXHJcbiAgICAgICAgICB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcuZ29Ubyh0aGlzLnN0YXRlLmluaXRpYWxFeHRlbnQpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnVmlzdWFsaXphw6fDo28gaW5pY2lhbCByZXN0YXVyYWRhJylcclxuICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvIGFvIHJlc3RhdXJhciB2aXN1YWxpemHDp8OjbyBpbmljaWFsOicsIGVycm9yKVxyXG4gICAgICAgICAgICAvLyBTZSBmYWxoYXIsIHRlbnRhIGZhemVyIHpvb20gcGFyYSBhIGNhbWFkYSBjb21wbGV0YVxyXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5mZWF0dXJlTGF5ZXIgJiYgdGhpcy5zdGF0ZS5mZWF0dXJlTGF5ZXIuZnVsbEV4dGVudCkge1xyXG4gICAgICAgICAgICAgIHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldy5nb1RvKHRoaXMuc3RhdGUuZmVhdHVyZUxheWVyLmZ1bGxFeHRlbnQpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vIFNlIG7Do28gdGl2ZXIgZXh0ZW5zw6NvIGluaWNpYWwgc2FsdmEsIHRlbnRhIGZhemVyIHpvb20gcGFyYSBhIGNhbWFkYSBjb21wbGV0YVxyXG4gICAgICAgICAgaWYgKHRoaXMuc3RhdGUuZmVhdHVyZUxheWVyICYmIHRoaXMuc3RhdGUuZmVhdHVyZUxheWVyLmZ1bGxFeHRlbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3LmdvVG8odGhpcy5zdGF0ZS5mZWF0dXJlTGF5ZXIuZnVsbEV4dGVudCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1pvb20gcGFyYSBjYW1hZGEgY29tcGxldGEgYXBsaWNhZG8nKVxyXG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvIGFvIGZhemVyIHpvb20gcGFyYSBjYW1hZGEgY29tcGxldGE6JywgZXJyb3IpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBpZGVhU2VhcmNoSW5wdXQ6ICcnXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBGdW7Dp8OjbyBwYXJhIGdlcmFyIHJlbGF0w7NyaW8gdXNhbmRvIGEgZmVycmFtZW50YSBkZSBnZW9wcm9jZXNzYW1lbnRvXHJcbiAgaGFuZGxlR2VuZXJhdGVSZXBvcnQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAvLyBEZWNsYXJhIHZhcmnDoXZlaXMgbm8gZXNjb3BvIGRhIGZ1bsOnw6NvIHBhcmEgcXVlIGVzdGVqYW0gYWNlc3PDrXZlaXMgbm8gY2F0Y2hcclxuICAgIGxldCBpZGVhTnVtYmVyID0gJydcclxuICAgIGxldCBwYXJhbU5hbWUgPSBudWxsXHJcbiAgICBsZXQgZXhlY3V0ZVVybCA9ICcnXHJcbiAgICBsZXQgdG9rZW4gPSBudWxsXHJcbiAgICBcclxuICAgIC8vIFZhbGlkYcOnw7VlcyBpbmljaWFpc1xyXG4gICAgaWYgKHRoaXMuc3RhdGUuaWRlYVNlYXJjaElucHV0ID09PSAnJyB8fCB0aGlzLnN0YXRlLmlkZWFTZWFyY2hJbnB1dC50cmltKCkgPT09ICcnKSB7XHJcbiAgICAgIGFsZXJ0KCdQb3IgZmF2b3IsIGRpZ2l0ZSB1bSBuw7ptZXJvIGRlIGlkZWEgcGFyYSBnZXJhciBvIHJlbGF0w7NyaW8uJylcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgaWRlYU51bWJlciA9IHRoaXMuc3RhdGUuaWRlYVNlYXJjaElucHV0LnRyaW0oKVxyXG4gICAgXHJcbiAgICAvLyBWYWxpZGHDp8OjbyBkbyBmb3JtYXRvIGRvIG7Dum1lcm8gZGUgaWRlYVxyXG4gICAgLy8gRm9ybWF0byBlc3BlcmFkbzogWFhYLlguWFhYWFhYL1lZWVkgKGV4OiAwMDMuOS40MjczODQvMjAyNSlcclxuICAgIGNvbnN0IGlkZWFQYXR0ZXJuID0gL15cXGR7MSwzfVxcLlxcZHsxLDJ9XFwuXFxkezEsNn1cXC9cXGR7NH0kL1xyXG4gICAgaWYgKCFpZGVhUGF0dGVybi50ZXN0KGlkZWFOdW1iZXIpKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybignRm9ybWF0byBkbyBuw7ptZXJvIGRlIGlkZWEgcG9kZSBlc3RhciBpbmNvcnJldG86JywgaWRlYU51bWJlcilcclxuICAgICAgY29uc29sZS53YXJuKCdGb3JtYXRvIGVzcGVyYWRvOiBYWFguWC5YWFhYWFgvWVlZWSAoZXg6IDAwMy45LjQyNzM4NC8yMDI1KScpXHJcbiAgICAgIC8vIE7Do28gYmxvcXVlaWEsIGFwZW5hcyBhdmlzYSBubyBjb25zb2xlXHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIFJlbW92ZSBlc3Bhw6dvcyBleHRyYXMgZSBjYXJhY3RlcmVzIGludmlzw612ZWlzXHJcbiAgICBpZGVhTnVtYmVyID0gaWRlYU51bWJlci5yZXBsYWNlKC9cXHMrL2csICcnKS50cmltKClcclxuICAgIFxyXG4gICAgLy8gVmFsaWRhw6fDo28gZGUgY29tcHJpbWVudG8gbcOtbmltb1xyXG4gICAgaWYgKGlkZWFOdW1iZXIubGVuZ3RoIDwgMTApIHtcclxuICAgICAgYWxlcnQoJ08gbsO6bWVybyBkZSBpZGVhIHBhcmVjZSBlc3RhciBpbmNvbXBsZXRvLiBWZXJpZmlxdWUgbyBmb3JtYXRvOiBYWFguWC5YWFhYWFgvWVlZWScpXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zb2xlLmxvZygnPT09IFZBTElEQcOHw4NPIERPIFZBTE9SID09PScpXHJcbiAgICBjb25zb2xlLmxvZygnVmFsb3Igb3JpZ2luYWw6JywgdGhpcy5zdGF0ZS5pZGVhU2VhcmNoSW5wdXQpXHJcbiAgICBjb25zb2xlLmxvZygnVmFsb3IgcHJvY2Vzc2FkbzonLCBpZGVhTnVtYmVyKVxyXG4gICAgY29uc29sZS5sb2coJ0NvbXByaW1lbnRvOicsIGlkZWFOdW1iZXIubGVuZ3RoKVxyXG4gICAgY29uc29sZS5sb2coJ0Zvcm1hdG8gdsOhbGlkbzonLCBpZGVhUGF0dGVybi50ZXN0KGlkZWFOdW1iZXIpKVxyXG4gICAgXHJcbiAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSB9KVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdJbmljaWFuZG8gZ2VyYcOnw6NvIGRlIHJlbGF0w7NyaW8gcGFyYSBpZGVhOicsIGlkZWFOdW1iZXIpXHJcbiAgICAgIFxyXG4gICAgICAvLyBDYXJyZWdhIElkZW50aXR5TWFuYWdlciBwYXJhIG9idGVyIHRva2VuIGRlIGF1dGVudGljYcOnw6NvXHJcbiAgICAgIGNvbnNvbGUubG9nKCdDYXJyZWdhbmRvIElkZW50aXR5TWFuYWdlciBwYXJhIGF1dGVudGljYcOnw6NvLi4uJylcclxuICAgICAgY29uc3QgaWRlbnRpdHlNb2R1bGVzID0gYXdhaXQgbG9hZEFyY0dJU0pTQVBJTW9kdWxlcyhbXHJcbiAgICAgICAgJ2VzcmkvaWRlbnRpdHkvSWRlbnRpdHlNYW5hZ2VyJ1xyXG4gICAgICBdKVxyXG4gICAgICBjb25zdCBbSWRlbnRpdHlNYW5hZ2VyXSA9IGlkZW50aXR5TW9kdWxlc1xyXG4gICAgICBcclxuICAgICAgLy8gT2J0w6ltIG8gdG9rZW4gcGFyYSBhIFVSTCBkbyBzZXJ2acOnbyAoasOhIGRlY2xhcmFkbyBubyBpbsOtY2lvIGRhIGZ1bsOnw6NvKVxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGNyZWRlbnRpYWwgPSBJZGVudGl0eU1hbmFnZXIuZmluZENyZWRlbnRpYWwodGhpcy5HUF9TRVJWSUNFX1VSTClcclxuICAgICAgICBpZiAoY3JlZGVudGlhbCAmJiBjcmVkZW50aWFsLnRva2VuKSB7XHJcbiAgICAgICAgICB0b2tlbiA9IGNyZWRlbnRpYWwudG9rZW5cclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdUb2tlbiBlbmNvbnRyYWRvIHZpYSBJZGVudGl0eU1hbmFnZXInKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAvLyBUZW50YSBnZXJhciB0b2tlbiBhdXRvbWF0aWNhbWVudGVcclxuICAgICAgICAgIGNvbnN0IHNlcnZlckluZm8gPSBJZGVudGl0eU1hbmFnZXIuZmluZFNlcnZlckluZm8odGhpcy5HUF9TRVJWSUNFX1VSTClcclxuICAgICAgICAgIGlmIChzZXJ2ZXJJbmZvKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdPYnRlbmRvIHRva2VuIGF1dG9tYXRpY2FtZW50ZS4uLicpXHJcbiAgICAgICAgICAgIGF3YWl0IElkZW50aXR5TWFuYWdlci5jaGVja1NpZ25JblN0YXR1cyh0aGlzLkdQX1NFUlZJQ0VfVVJMKVxyXG4gICAgICAgICAgICBjb25zdCB1cGRhdGVkQ3JlZGVudGlhbCA9IElkZW50aXR5TWFuYWdlci5maW5kQ3JlZGVudGlhbCh0aGlzLkdQX1NFUlZJQ0VfVVJMKVxyXG4gICAgICAgICAgICBpZiAodXBkYXRlZENyZWRlbnRpYWwgJiYgdXBkYXRlZENyZWRlbnRpYWwudG9rZW4pIHtcclxuICAgICAgICAgICAgICB0b2tlbiA9IHVwZGF0ZWRDcmVkZW50aWFsLnRva2VuXHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1Rva2VuIG9idGlkbyBhdXRvbWF0aWNhbWVudGUnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoICh0b2tlbkVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKCdFcnJvIGFvIG9idGVyIHRva2VuLCB0ZW50YW5kbyBzZW0gYXV0ZW50aWNhw6fDo286JywgdG9rZW5FcnJvcilcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLy8gRnVuw6fDo28gYXV4aWxpYXIgcGFyYSBhZGljaW9uYXIgdG9rZW4gw6BzIFVSTHNcclxuICAgICAgY29uc3QgYWRkVG9rZW5Ub1VybCA9ICh1cmwpID0+IHtcclxuICAgICAgICBpZiAoIXRva2VuKSB7XHJcbiAgICAgICAgICByZXR1cm4gdXJsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCB1cmxPYmogPSBuZXcgVVJMKHVybClcclxuICAgICAgICAgIHVybE9iai5zZWFyY2hQYXJhbXMuc2V0KCd0b2tlbicsIHRva2VuKVxyXG4gICAgICAgICAgcmV0dXJuIHVybE9iai50b1N0cmluZygpXHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgLy8gU2UgYSBVUkwgbsOjbyBmb3IgYWJzb2x1dGEsIHRyYXRhIGNvbW8gc3RyaW5nXHJcbiAgICAgICAgICBjb25zdCBzZXBhcmF0b3IgPSB1cmwuaW5jbHVkZXMoJz8nKSA/ICcmJyA6ICc/J1xyXG4gICAgICAgICAgcmV0dXJuIGAke3VybH0ke3NlcGFyYXRvcn10b2tlbj0ke2VuY29kZVVSSUNvbXBvbmVudCh0b2tlbil9YFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLy8gUHJpbWVpcm8sIHZhbW9zIG9idGVyIGluZm9ybWHDp8O1ZXMgc29icmUgYSB0YXNrIGVzcGVjw61maWNhIHBhcmEgZGVzY29icmlyIG9zIHBhcsOibWV0cm9zXHJcbiAgICAgIGNvbnNvbGUubG9nKCdPYnRlbmRvIGluZm9ybWHDp8O1ZXMgZGEgdGFzayBlc3BlY8OtZmljYS4uLicpXHJcbiAgICAgIGNvbnN0IHRhc2tOYW1lRW5jb2RlZCA9IGVuY29kZVVSSUNvbXBvbmVudCh0aGlzLkdQX1RBU0tfTkFNRSlcclxuICAgICAgY29uc3QgaW5mb1VybCA9IGFkZFRva2VuVG9VcmwoYCR7dGhpcy5HUF9TRVJWSUNFX1VSTH0vJHt0YXNrTmFtZUVuY29kZWR9P2Y9anNvbmApXHJcbiAgICAgIGNvbnNvbGUubG9nKCdVUkwgZGUgaW5mb3JtYcOnw7VlcyBkYSB0YXNrOicsIGluZm9VcmwpXHJcbiAgICAgIFxyXG4gICAgICAvLyBUZW50YSBvYnRlciBpbmZvcm1hw6fDtWVzIGRhIHRhc2sgZXNwZWPDrWZpY2EgcHJpbWVpcm9cclxuICAgICAgbGV0IGdwSW5mb1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHRhc2tJbmZvUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChpbmZvVXJsKVxyXG4gICAgICAgIGlmICh0YXNrSW5mb1Jlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICBncEluZm8gPSBhd2FpdCB0YXNrSW5mb1Jlc3BvbnNlLmpzb24oKVxyXG4gICAgICAgICAgY29uc29sZS5sb2coJ0luZm9ybWHDp8O1ZXMgZGEgdGFzayBlc3BlY8OtZmljYSBvYnRpZGFzIGNvbSBzdWNlc3NvJylcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdJbmZvcm1hw6fDtWVzIGNvbXBsZXRhcyBkYSB0YXNrOicsIEpTT04uc3RyaW5naWZ5KGdwSW5mbywgbnVsbCwgMikpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vIFNlIGZhbGhhciwgdGVudGEgZGEgR1AgZ2VyYWxcclxuICAgICAgICAgIGNvbnNvbGUud2FybignTsOjbyBmb2kgcG9zc8OtdmVsIG9idGVyIGluZm9ybWHDp8O1ZXMgZGEgdGFzaywgdGVudGFuZG8gZGEgR1AgZ2VyYWwuLi4nKVxyXG4gICAgICAgICAgY29uc3QgZ3BJbmZvVXJsID0gYWRkVG9rZW5Ub1VybChgJHt0aGlzLkdQX1NFUlZJQ0VfVVJMfT9mPWpzb25gKVxyXG4gICAgICAgICAgY29uc3QgZ3BJbmZvUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChncEluZm9VcmwpXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGlmICghZ3BJbmZvUmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvIGFvIG9idGVyIGluZm9ybWHDp8O1ZXM6ICR7dGFza0luZm9SZXNwb25zZS5zdGF0dXN9ICR7dGFza0luZm9SZXNwb25zZS5zdGF0dXNUZXh0fWApXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGdwSW5mbyA9IGF3YWl0IGdwSW5mb1Jlc3BvbnNlLmpzb24oKVxyXG4gICAgICAgICAgY29uc29sZS5sb2coJ1VzYW5kbyBpbmZvcm1hw6fDtWVzIGRhIEdQIGdlcmFsJylcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdJbmZvcm1hw6fDtWVzIGNvbXBsZXRhcyBkYSBHUDonLCBKU09OLnN0cmluZ2lmeShncEluZm8sIG51bGwsIDIpKVxyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoaW5mb0Vycm9yKSB7XHJcbiAgICAgICAgLy8gU2UgZmFsaGFyLCB0ZW50YSBkYSBHUCBnZXJhbFxyXG4gICAgICAgIGNvbnNvbGUud2FybignRXJybyBhbyBvYnRlciBpbmZvcm1hw6fDtWVzIGRhIHRhc2ssIHRlbnRhbmRvIGRhIEdQIGdlcmFsLi4uJywgaW5mb0Vycm9yKVxyXG4gICAgICAgIGNvbnN0IGdwSW5mb1VybCA9IGFkZFRva2VuVG9VcmwoYCR7dGhpcy5HUF9TRVJWSUNFX1VSTH0/Zj1qc29uYClcclxuICAgICAgICBjb25zdCBncEluZm9SZXNwb25zZSA9IGF3YWl0IGZldGNoKGdwSW5mb1VybClcclxuICAgICAgICBncEluZm8gPSBhd2FpdCBncEluZm9SZXNwb25zZS5qc29uKClcclxuICAgICAgICBjb25zb2xlLmxvZygnVXNhbmRvIGluZm9ybWHDp8O1ZXMgZGEgR1AgZ2VyYWwgKGZhbGxiYWNrKScpXHJcbiAgICAgICAgY29uc29sZS5sb2coJ0luZm9ybWHDp8O1ZXMgY29tcGxldGFzIGRhIEdQOicsIEpTT04uc3RyaW5naWZ5KGdwSW5mbywgbnVsbCwgMikpXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8vIERlc2NvYnJlIHF1YWwgw6kgbyBwYXLDom1ldHJvIGRlIGVudHJhZGEgZGEgR1BcclxuICAgICAgLy8gSU1QT1JUQU5URTogRGV2ZW1vcyB1c2FyIGV4YXRhbWVudGUgbyBub21lIGRvIHBhcsOibWV0cm8gcXVlIGEgR1AgZXNwZXJhXHJcbiAgICAgIC8vIE8gd2lkZ2V0IHJlY2ViZSBvIHZhbG9yIGRhIGNvbHVuYSBcImlkZWFcIiwgbWFzIGVudmlhIGNvbSBvIG5vbWUgcXVlIGEgR1AgZXNwZXJhXHJcbiAgICAgIGxldCBwYXJhbU5hbWUgPSBudWxsXHJcbiAgICAgIGxldCBwYXJhbUluZm8gPSBudWxsXHJcbiAgICAgIFxyXG4gICAgICBpZiAoZ3BJbmZvLnBhcmFtZXRlcnMgJiYgQXJyYXkuaXNBcnJheShncEluZm8ucGFyYW1ldGVycykpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnPT09IFBBUsOCTUVUUk9TIERJU1BPTsONVkVJUyBOQSBHUCA9PT0nKVxyXG4gICAgICAgIGNvbnN0IGFsbFBhcmFtcyA9IGdwSW5mby5wYXJhbWV0ZXJzLm1hcChwID0+ICh7XHJcbiAgICAgICAgICBuYW1lOiBwLm5hbWUsXHJcbiAgICAgICAgICBkaXNwbGF5TmFtZTogcC5kaXNwbGF5TmFtZSB8fCBwLm5hbWUsXHJcbiAgICAgICAgICBkYXRhVHlwZTogcC5kYXRhVHlwZSxcclxuICAgICAgICAgIGRpcmVjdGlvbjogcC5kaXJlY3Rpb24sXHJcbiAgICAgICAgICBwYXJhbWV0ZXJUeXBlOiBwLnBhcmFtZXRlclR5cGUsXHJcbiAgICAgICAgICByZXF1aXJlZDogcC5wYXJhbWV0ZXJUeXBlID09PSAnZXNyaUdQUGFyYW1ldGVyVHlwZVJlcXVpcmVkJyB8fCBwLnJlcXVpcmVkID09PSB0cnVlXHJcbiAgICAgICAgfSkpXHJcbiAgICAgICAgY29uc29sZS5sb2coJ1RvZG9zIG9zIHBhcsOibWV0cm9zOicsIEpTT04uc3RyaW5naWZ5KGFsbFBhcmFtcywgbnVsbCwgMikpXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gUHJvY3VyYSBwZWxvIHByaW1laXJvIHBhcsOibWV0cm8gZGUgZW50cmFkYSAoaW5wdXQpXHJcbiAgICAgICAgY29uc3QgaW5wdXRQYXJhbXMgPSBncEluZm8ucGFyYW1ldGVycy5maWx0ZXIocCA9PiBcclxuICAgICAgICAgIChwLmRpcmVjdGlvbiA9PT0gJ2VzcmlHUFBhcmFtZXRlckRpcmVjdGlvbklucHV0JyB8fCBwLmRpcmVjdGlvbiA9PT0gJ0dQUGFyYW1ldGVyRGlyZWN0aW9uSW5wdXQnKSAmJlxyXG4gICAgICAgICAgcC5uYW1lXHJcbiAgICAgICAgKVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdQYXLDom1ldHJvcyBkZSBlbnRyYWRhIGVuY29udHJhZG9zOicsIGlucHV0UGFyYW1zLm1hcChwID0+ICh7XHJcbiAgICAgICAgICBuYW1lOiBwLm5hbWUsXHJcbiAgICAgICAgICBkaXNwbGF5TmFtZTogcC5kaXNwbGF5TmFtZSB8fCBwLm5hbWUsXHJcbiAgICAgICAgICBkYXRhVHlwZTogcC5kYXRhVHlwZSxcclxuICAgICAgICAgIHJlcXVpcmVkOiBwLnBhcmFtZXRlclR5cGUgPT09ICdlc3JpR1BQYXJhbWV0ZXJUeXBlUmVxdWlyZWQnIHx8IHAucmVxdWlyZWQgPT09IHRydWVcclxuICAgICAgICB9KSkpXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGlucHV0UGFyYW1zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIC8vIFVzYSBvIHByaW1laXJvIHBhcsOibWV0cm8gZGUgZW50cmFkYSAocXVlIMOpIG8gcXVlIGEgR1AgZXNwZXJhKVxyXG4gICAgICAgICAgcGFyYW1JbmZvID0gaW5wdXRQYXJhbXNbMF1cclxuICAgICAgICAgIHBhcmFtTmFtZSA9IHBhcmFtSW5mby5uYW1lIC8vIFVzYSBleGF0YW1lbnRlIG8gbm9tZSBxdWUgYSBHUCBlc3BlcmEgKHBvZGUgdGVyIGNhcmFjdGVyZXMgZXNwZWNpYWlzKVxyXG4gICAgICAgICAgY29uc29sZS5sb2coJz09PSBQQVLDgk1FVFJPIFNFTEVDSU9OQURPID09PScpXHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnTm9tZSB0w6ljbmljbyBkbyBwYXLDom1ldHJvIChzZXLDoSB1c2FkbyBubyByZXF1ZXN0KTonLCBwYXJhbU5hbWUpXHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnTm9tZSBkZSBleGliacOnw6NvIChsYWJlbCBuYSBpbnRlcmZhY2UpOicsIHBhcmFtSW5mby5kaXNwbGF5TmFtZSB8fCBwYXJhbUluZm8ubmFtZSlcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdEZXRhbGhlcyBjb21wbGV0b3M6Jywge1xyXG4gICAgICAgICAgICBuYW1lOiBwYXJhbUluZm8ubmFtZSxcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6IHBhcmFtSW5mby5kaXNwbGF5TmFtZSB8fCBwYXJhbUluZm8ubmFtZSxcclxuICAgICAgICAgICAgZGF0YVR5cGU6IHBhcmFtSW5mby5kYXRhVHlwZSxcclxuICAgICAgICAgICAgZGlyZWN0aW9uOiBwYXJhbUluZm8uZGlyZWN0aW9uLFxyXG4gICAgICAgICAgICByZXF1aXJlZDogcGFyYW1JbmZvLnBhcmFtZXRlclR5cGUgPT09ICdlc3JpR1BQYXJhbWV0ZXJUeXBlUmVxdWlyZWQnIHx8IHBhcmFtSW5mby5yZXF1aXJlZCA9PT0gdHJ1ZVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignTmVuaHVtIHBhcsOibWV0cm8gZGUgZW50cmFkYSBlbmNvbnRyYWRvIG5hIEdQIScpXHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ07Do28gZm9pIHBvc3PDrXZlbCBpZGVudGlmaWNhciBvIHBhcsOibWV0cm8gZGUgZW50cmFkYSBkYSBmZXJyYW1lbnRhIGRlIGdlb3Byb2Nlc3NhbWVudG8uJylcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignTsOjbyBmb2kgcG9zc8OtdmVsIG9idGVyIHBhcsOibWV0cm9zIGRhIEdQIScpXHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOw6NvIGZvaSBwb3Nzw612ZWwgb2J0ZXIgaW5mb3JtYcOnw7VlcyBkb3MgcGFyw6JtZXRyb3MgZGEgZmVycmFtZW50YSBkZSBnZW9wcm9jZXNzYW1lbnRvLicpXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8vIENvbmZpcm1hIHF1YWwgcGFyw6JtZXRybyBzZXLDoSB1c2FkbyAoZGV2ZSBzZXIgZXhhdGFtZW50ZSBvIHF1ZSBhIEdQIGVzcGVyYSlcclxuICAgICAgY29uc29sZS5sb2coJz09PSBQQVLDgk1FVFJPIFBBUkEgRU5WSUFSIMOAIEdQID09PScpXHJcbiAgICAgIGNvbnNvbGUubG9nKCdOb21lIGRvIHBhcsOibWV0cm8gKGV4YXRhbWVudGUgY29tbyBhIEdQIGVzcGVyYSk6JywgcGFyYW1OYW1lKVxyXG4gICAgICBjb25zb2xlLmxvZygnVmFsb3IgcXVlIHNlcsOhIGVudmlhZG8gKGRhIGNvbHVuYSBpZGVhIGRvIHdpZGdldCk6JywgaWRlYU51bWJlcilcclxuICAgICAgY29uc29sZS5sb2coJ0RldGFsaGVzIGNvbXBsZXRvcyBkbyBwYXLDom1ldHJvOicsIHBhcmFtSW5mbylcclxuICAgICAgXHJcbiAgICAgIC8vIFZlcmlmaWNhIG8gdGlwbyBkbyBwYXLDom1ldHJvIHBhcmEgZm9ybWF0YXIgY29ycmV0YW1lbnRlXHJcbiAgICAgIGxldCBwYXJhbVZhbHVlID0gaWRlYU51bWJlclxyXG4gICAgICBpZiAocGFyYW1JbmZvKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1RpcG8gZGUgZGFkbyBkbyBwYXLDom1ldHJvOicsIHBhcmFtSW5mby5kYXRhVHlwZSlcclxuICAgICAgICBjb25zb2xlLmxvZygnVGlwbyBkZSBwYXLDom1ldHJvOicsIHBhcmFtSW5mby5wYXJhbWV0ZXJUeXBlKVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFNlIG8gcGFyw6JtZXRybyBmb3IgZG8gdGlwbyBHUFN0cmluZyBvdSBzaW1pbGFyLCBlbnZpYSBjb21vIHN0cmluZ1xyXG4gICAgICAgIC8vIFNlIGZvciBVUkwgb3Ugb3V0cm8gdGlwbyBjb21wbGV4bywgcG9kZSBwcmVjaXNhciBkZSBmb3JtYXRvIGRpZmVyZW50ZVxyXG4gICAgICAgIGlmIChwYXJhbUluZm8uZGF0YVR5cGUgPT09ICdHUFN0cmluZycgfHwgcGFyYW1JbmZvLmRhdGFUeXBlID09PSAnZXNyaUdQVHlwZVN0cmluZycpIHtcclxuICAgICAgICAgIHBhcmFtVmFsdWUgPSBTdHJpbmcoaWRlYU51bWJlcilcclxuICAgICAgICB9IGVsc2UgaWYgKHBhcmFtSW5mby5kYXRhVHlwZSA9PT0gJ0dQRG91YmxlJyB8fCBwYXJhbUluZm8uZGF0YVR5cGUgPT09ICdlc3JpR1BUeXBlRG91YmxlJyB8fCBcclxuICAgICAgICAgICAgICAgICAgIHBhcmFtSW5mby5kYXRhVHlwZSA9PT0gJ0dQTG9uZycgfHwgcGFyYW1JbmZvLmRhdGFUeXBlID09PSAnZXNyaUdQVHlwZUxvbmcnKSB7XHJcbiAgICAgICAgICAvLyBTZSBmb3IgbnVtw6lyaWNvLCB0ZW50YSBjb252ZXJ0ZXJcclxuICAgICAgICAgIGNvbnN0IG51bVZhbHVlID0gcGFyc2VGbG9hdChpZGVhTnVtYmVyKVxyXG4gICAgICAgICAgaWYgKCFpc05hTihudW1WYWx1ZSkpIHtcclxuICAgICAgICAgICAgcGFyYW1WYWx1ZSA9IG51bVZhbHVlXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvLyBQcmVwYXJhIG9zIHBhcsOibWV0cm9zIHBhcmEgYSBleGVjdcOnw6NvXHJcbiAgICAgIC8vIElNUE9SVEFOVEU6IGY9anNvbiB2YWkgbmEgVVJMLCBuw6NvIG5vIGJvZHlcclxuICAgICAgLy8gQXBlbmFzIG9zIHBhcsOibWV0cm9zIGRhIEdQIHbDo28gbm8gYm9keVxyXG4gICAgICBjb25zdCBwYXJhbXMgPSB7XHJcbiAgICAgICAgW3BhcmFtTmFtZV06IHBhcmFtVmFsdWVcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgY29uc29sZS5sb2coJz09PSBQQVLDgk1FVFJPUyBQQVJBIEVOVklBUiA9PT0nKVxyXG4gICAgICBjb25zb2xlLmxvZygnUGFyw6JtZXRyb3MgcHJlcGFyYWRvcyAocGFyYSBvIGJvZHkpOicsIHBhcmFtcylcclxuICAgICAgY29uc29sZS5sb2coJ1ZhbG9yIGRvIHBhcsOibWV0cm86JywgcGFyYW1WYWx1ZSwgJ1RpcG86JywgdHlwZW9mIHBhcmFtVmFsdWUpXHJcbiAgICAgIGNvbnNvbGUubG9nKCdOb21lIGRvIHBhcsOibWV0cm8gKGV4YXRvKTonLCBwYXJhbU5hbWUpXHJcbiAgICAgIGNvbnNvbGUubG9nKCdOb21lIGRvIHBhcsOibWV0cm8gKEpTT04pOicsIEpTT04uc3RyaW5naWZ5KHBhcmFtTmFtZSkpXHJcbiAgICAgIFxyXG4gICAgICAvLyBGb3JtYXRhIG9zIHBhcsOibWV0cm9zIGNvbW8gZm9ybS11cmxlbmNvZGVkXHJcbiAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpXHJcbiAgICAgIFxyXG4gICAgICAvLyBBZGljaW9uYSBvcyBwYXLDom1ldHJvcyAoZXhjZXRvIGY9anNvbiBxdWUgdmFpIG5hIFVSTClcclxuICAgICAgLy8gSU1QT1JUQU5URTogVXNhIG8gbm9tZSBleGF0byBkbyBwYXLDom1ldHJvIGNvbW8gZXN0w6EgbmEgR1AgKHBvZGUgdGVyIGNhcmFjdGVyZXMgZXNwZWNpYWlzKVxyXG4gICAgICBjb25zb2xlLmxvZygnPT09IFBSRVBBUkFORE8gRk9STSBEQVRBID09PScpXHJcbiAgICAgIE9iamVjdC5rZXlzKHBhcmFtcykuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICAgIGlmIChrZXkgIT09ICdmJykge1xyXG4gICAgICAgICAgY29uc3QgcGFyYW1LZXkgPSBrZXkgLy8gVXNhIGV4YXRhbWVudGUgbyBub21lIHF1ZSB2ZWlvIGRhIEdQIChleDogXCJOwrAgSURFQVwiLCBcInZhbG9yX2FsZXJ0YVwiLCBldGMuKVxyXG4gICAgICAgICAgY29uc3QgcGFyYW1WYWwgPSBTdHJpbmcocGFyYW1zW2tleV0pXHJcbiAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQocGFyYW1LZXksIHBhcmFtVmFsKVxyXG4gICAgICAgICAgY29uc29sZS5sb2coYFBhcsOibWV0cm8gYWRpY2lvbmFkbzogbm9tZT1cIiR7cGFyYW1LZXl9XCIgdmFsb3I9XCIke3BhcmFtVmFsfVwiYClcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGAgIC0gTm9tZSAoSlNPTik6ICR7SlNPTi5zdHJpbmdpZnkocGFyYW1LZXkpfWApXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhgICAtIE5vbWUgKGJ5dGVzKTogJHtBcnJheS5mcm9tKHBhcmFtS2V5KS5tYXAoYyA9PiBjLmNoYXJDb2RlQXQoMCkpLmpvaW4oJywnKX1gKVxyXG4gICAgICAgICAgY29uc29sZS5sb2coYCAgLSBWYWxvciAoSlNPTik6ICR7SlNPTi5zdHJpbmdpZnkocGFyYW1WYWwpfWApXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICBcclxuICAgICAgY29uc3QgZm9ybURhdGFTdHJpbmcgPSBmb3JtRGF0YS50b1N0cmluZygpXHJcbiAgICAgIGNvbnNvbGUubG9nKCdGb3JtRGF0YSBjb21wbGV0byAoc3RyaW5nKTonLCBmb3JtRGF0YVN0cmluZylcclxuICAgICAgY29uc29sZS5sb2coJ0Zvcm1EYXRhIGNvbXBsZXRvIChVUkwgZGVjb2RlZCk6JywgZGVjb2RlVVJJQ29tcG9uZW50KGZvcm1EYXRhU3RyaW5nKSlcclxuICAgICAgXHJcbiAgICAgIC8vIEFkaWNpb25hIHRva2VuIGFvIGJvZHlcclxuICAgICAgaWYgKHRva2VuKSB7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCd0b2tlbicsIHRva2VuKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdUb2tlbiBhZGljaW9uYWRvIGFvIGJvZHknKVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvLyBGdW7Dp8OjbyBhdXhpbGlhciBwYXJhIGZhemVyIGEgcmVxdWlzacOnw6NvXHJcbiAgICAgIGNvbnN0IG1ha2VFeGVjdXRlUmVxdWVzdCA9IGFzeW5jICh1cmwpID0+IHtcclxuICAgICAgICAvLyBBZGljaW9uYSB0b2tlbiBuYSBVUkwgdGFtYsOpbSAoYWxndW5zIHNlcnZpZG9yZXMgQXJjR0lTIGV4aWdlbSBpc3NvKVxyXG4gICAgICAgIGxldCBmaW5hbFVybCA9IHVybFxyXG4gICAgICAgIGlmICh0b2tlbikge1xyXG4gICAgICAgICAgY29uc3QgdXJsV2l0aFRva2VuID0gbmV3IFVSTCh1cmwpXHJcbiAgICAgICAgICB1cmxXaXRoVG9rZW4uc2VhcmNoUGFyYW1zLnNldCgndG9rZW4nLCB0b2tlbilcclxuICAgICAgICAgIHVybFdpdGhUb2tlbi5zZWFyY2hQYXJhbXMuc2V0KCdmJywgJ2pzb24nKVxyXG4gICAgICAgICAgZmluYWxVcmwgPSB1cmxXaXRoVG9rZW4udG9TdHJpbmcoKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAvLyBTZSBuw6NvIHRpdmVyIHRva2VuLCBhZGljaW9uYSBhcGVuYXMgZj1qc29uXHJcbiAgICAgICAgICBjb25zdCB1cmxPYmogPSBuZXcgVVJMKHVybClcclxuICAgICAgICAgIHVybE9iai5zZWFyY2hQYXJhbXMuc2V0KCdmJywgJ2pzb24nKVxyXG4gICAgICAgICAgZmluYWxVcmwgPSB1cmxPYmoudG9TdHJpbmcoKVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBjb25zb2xlLmxvZygnVGVudGFuZG8gVVJMOicsIGZpbmFsVXJsKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdCb2R5IChmb3JtRGF0YSk6JywgZm9ybURhdGEudG9TdHJpbmcoKSlcclxuICAgICAgICBjb25zb2xlLmxvZygnVG9rZW4gcHJlc2VudGU6JywgISF0b2tlbilcclxuICAgICAgICBjb25zb2xlLmxvZygnUGFyw6JtZXRyb3MgZW52aWFkb3M6JywgT2JqZWN0LmtleXMocGFyYW1zKSlcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGZpbmFsVXJsLCB7XHJcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgYm9keTogZm9ybURhdGFcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiByZXNwb25zZVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvLyBWZXJpZmljYSBzZSBhIHRhc2sgw6kgYXNzw61uY3JvbmEgcGFyYSBkZWNpZGlyIHF1YWwgZW5kcG9pbnQgdXNhclxyXG4gICAgICBjb25zdCBpc0FzeW5jID0gZ3BJbmZvLmV4ZWN1dGlvblR5cGUgPT09ICdlc3JpRXhlY3V0aW9uVHlwZUFzeW5jaHJvbm91cydcclxuICAgICAgY29uc29sZS5sb2coJz09PSBURU5UQU5ETyBFWEVDVVRBUiBHUCA9PT0nKVxyXG4gICAgICBjb25zb2xlLmxvZygnVGlwbyBkZSBleGVjdcOnw6NvOicsIGdwSW5mby5leGVjdXRpb25UeXBlKVxyXG4gICAgICBjb25zb2xlLmxvZygnw4kgYXNzw61uY3JvbmE/JywgaXNBc3luYylcclxuICAgICAgY29uc29sZS5sb2coJ1RlbnRhbmRvIHByaW1laXJvIGNvbSB0YXNrIGVzcGVjw61maWNhOicsIHRoaXMuR1BfVEFTS19OQU1FKVxyXG4gICAgICBjb25zb2xlLmxvZygnUGFyw6JtZXRybyBxdWUgc2Vyw6EgZW52aWFkbzonLCBwYXJhbU5hbWUpXHJcbiAgICAgIGNvbnNvbGUubG9nKCdWYWxvciBxdWUgc2Vyw6EgZW52aWFkbzonLCBpZGVhTnVtYmVyKVxyXG4gICAgICBcclxuICAgICAgLy8gU2UgZm9yIGFzc8OtbmNyb25hLCB1c2Egc3VibWl0Sm9iOyBjYXNvIGNvbnRyw6FyaW8sIHVzYSBleGVjdXRlXHJcbiAgICAgIGlmIChpc0FzeW5jKSB7XHJcbiAgICAgICAgZXhlY3V0ZVVybCA9IGAke3RoaXMuR1BfU0VSVklDRV9VUkx9LyR7dGFza05hbWVFbmNvZGVkfS9zdWJtaXRKb2JgXHJcbiAgICAgICAgY29uc29sZS5sb2coJ1VzYW5kbyBlbmRwb2ludCAvc3VibWl0Sm9iICh0YXJlZmEgYXNzw61uY3JvbmEpOicsIGV4ZWN1dGVVcmwpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZXhlY3V0ZVVybCA9IGAke3RoaXMuR1BfU0VSVklDRV9VUkx9LyR7dGFza05hbWVFbmNvZGVkfS9leGVjdXRlYFxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdVc2FuZG8gZW5kcG9pbnQgL2V4ZWN1dGUgKHRhcmVmYSBzw61uY3JvbmEpOicsIGV4ZWN1dGVVcmwpXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGxldCBleGVjdXRlUmVzcG9uc2UgPSBhd2FpdCBtYWtlRXhlY3V0ZVJlcXVlc3QoZXhlY3V0ZVVybClcclxuICAgICAgXHJcbiAgICAgIC8vIFNlIGRlciBlcnJvIDUwMCwgcG9kZSBzZXIgcXVlIG8gZW5kcG9pbnQgZGEgdGFzayBlc3BlY8OtZmljYSBuw6NvIGV4aXN0YVxyXG4gICAgICAvLyBUZW50YSBjb20gbyBlbmRwb2ludCBkYSBHUCByYWl6XHJcbiAgICAgIGlmICghZXhlY3V0ZVJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdFRleHQgPSBhd2FpdCBleGVjdXRlUmVzcG9uc2UudGV4dCgpXHJcbiAgICAgICAgY29uc29sZS53YXJuKCdQcmltZWlyYSB0ZW50YXRpdmEgZmFsaG91LiBTdGF0dXM6JywgZXhlY3V0ZVJlc3BvbnNlLnN0YXR1cylcclxuICAgICAgICBjb25zb2xlLndhcm4oJ1Jlc3Bvc3RhIChwcmltZWlyb3MgNTAwIGNoYXJzKTonLCByZXN1bHRUZXh0LnN1YnN0cmluZygwLCA1MDApKVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCByZXN1bHRKc29uID0gSlNPTi5wYXJzZShyZXN1bHRUZXh0KVxyXG4gICAgICAgICAgaWYgKHJlc3VsdEpzb24uZXJyb3IgJiYgcmVzdWx0SnNvbi5lcnJvci5jb2RlID09PSA1MDApIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKCdFcnJvIDUwMCBjb20gdGFzayBlc3BlY8OtZmljYSwgdGVudGFuZG8gY29tIGVuZHBvaW50IGRhIEdQIHJhaXouLi4nKVxyXG4gICAgICAgICAgICAvLyBUZW50YSBjb20gbyBlbmRwb2ludCByYWl6IHVzYW5kbyBvIG1lc21vIHRpcG8gKHN1Ym1pdEpvYiBvdSBleGVjdXRlKVxyXG4gICAgICAgICAgICBpZiAoaXNBc3luYykge1xyXG4gICAgICAgICAgICAgIGV4ZWN1dGVVcmwgPSBgJHt0aGlzLkdQX1NFUlZJQ0VfVVJMfS9zdWJtaXRKb2JgXHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1RlbnRhbmRvIGNvbSBlbmRwb2ludCBkYSBHUCByYWl6IChzdWJtaXRKb2IpOicsIGV4ZWN1dGVVcmwpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgZXhlY3V0ZVVybCA9IGAke3RoaXMuR1BfU0VSVklDRV9VUkx9L2V4ZWN1dGVgXHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1RlbnRhbmRvIGNvbSBlbmRwb2ludCBkYSBHUCByYWl6IChleGVjdXRlKTonLCBleGVjdXRlVXJsKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGV4ZWN1dGVSZXNwb25zZSA9IGF3YWl0IG1ha2VFeGVjdXRlUmVxdWVzdChleGVjdXRlVXJsKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm8gYW8gcGFyc2VhciByZXNwb3N0YTonLCBlKVxyXG4gICAgICAgICAgLy8gU2UgbsOjbyBjb25zZWd1aXIgcGFyc2VhciwgY29udGludWEgY29tIG8gZXJybyBvcmlnaW5hbFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLy8gTMOqIGEgcmVzcG9zdGEgbWVzbW8gc2UgbsOjbyBmb3IgT0sgcGFyYSB2ZXIgbyBlcnJvIGRldGFsaGFkb1xyXG4gICAgICBsZXQgcmVzdWx0XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgcmVzdWx0ID0gYXdhaXQgZXhlY3V0ZVJlc3BvbnNlLmpzb24oKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdSZXNwb3N0YSBkbyBleGVjdXRlIChKU09OKTonLCBKU09OLnN0cmluZ2lmeShyZXN1bHQsIG51bGwsIDIpKVxyXG4gICAgICB9IGNhdGNoIChqc29uRXJyb3IpIHtcclxuICAgICAgICAvLyBTZSBuw6NvIGNvbnNlZ3VpciBsZXIgY29tbyBKU09OLCBsw6ogY29tbyB0ZXh0b1xyXG4gICAgICAgIGNvbnN0IHRleHRSZXNwb25zZSA9IGF3YWl0IGV4ZWN1dGVSZXNwb25zZS50ZXh0KClcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdSZXNwb3N0YSBuw6NvIMOpIEpTT046JywgdGV4dFJlc3BvbnNlKVxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1N0YXR1cyBIVFRQOicsIGV4ZWN1dGVSZXNwb25zZS5zdGF0dXMsIGV4ZWN1dGVSZXNwb25zZS5zdGF0dXNUZXh0KVxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJybyBhbyBleGVjdXRhciB0YXJlZmE6ICR7ZXhlY3V0ZVJlc3BvbnNlLnN0YXR1c30gJHtleGVjdXRlUmVzcG9uc2Uuc3RhdHVzVGV4dH0gLSBSZXNwb3N0YTogJHt0ZXh0UmVzcG9uc2Uuc3Vic3RyaW5nKDAsIDUwMCl9YClcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgaWYgKCFleGVjdXRlUmVzcG9uc2Uub2spIHtcclxuICAgICAgICAvLyBTZSBhIHJlc3Bvc3RhIHRlbSB1bSBlcnJvIG5vIEpTT04sIHVzYSBlbGVcclxuICAgICAgICBpZiAocmVzdWx0LmVycm9yKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCc9PT0gRVJSTyBERVRBTEhBRE8gREEgR1AgPT09JylcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0PDs2RpZ28gZG8gZXJybzonLCByZXN1bHQuZXJyb3IuY29kZSlcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ01lbnNhZ2VtOicsIHJlc3VsdC5lcnJvci5tZXNzYWdlKVxyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRGV0YWxoZXM6JywgcmVzdWx0LmVycm9yLmRldGFpbHMpXHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvIGNvbXBsZXRvOicsIEpTT04uc3RyaW5naWZ5KHJlc3VsdC5lcnJvciwgbnVsbCwgMikpXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC8vIE1lbnNhZ2VtIGRlIGVycm8gbWFpcyBhbWlnw6F2ZWxcclxuICAgICAgICAgIGxldCBlcnJvck1lc3NhZ2UgPSAnRXJybyBhbyBleGVjdXRhciBhIGZlcnJhbWVudGEgZGUgZ2VvcHJvY2Vzc2FtZW50by5cXG5cXG4nXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3IuY29kZSA9PT0gNTAwKSB7XHJcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZSArPSAnRXJybyBpbnRlcm5vIGRvIHNlcnZpZG9yICg1MDApLlxcblxcbidcclxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlICs9ICdQb3Nzw612ZWlzIGNhdXNhczpcXG4nXHJcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZSArPSAnMS4gTyBuw7ptZXJvIGRlIGlkZWEgcG9kZSBuw6NvIGV4aXN0aXIgbm8gc2Vydmlkb3JcXG4nXHJcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZSArPSAnMi4gUHJvYmxlbWEgbm8gcHJvY2Vzc2FtZW50byBkYSBmZXJyYW1lbnRhXFxuJ1xyXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UgKz0gJzMuIE8gc2Vydmlkb3IgcG9kZSBlc3RhciB0ZW1wb3JhcmlhbWVudGUgaW5kaXNwb27DrXZlbFxcblxcbidcclxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlICs9IGBWYWxvciBlbnZpYWRvOiAke2lkZWFOdW1iZXJ9XFxuYFxyXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UgKz0gYFBhcsOibWV0cm8gdXNhZG86ICR7cGFyYW1OYW1lfVxcblxcbmBcclxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlICs9ICdWZXJpZmlxdWU6XFxuJ1xyXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UgKz0gJy0gU2UgbyBuw7ptZXJvIGRlIGlkZWEgZXN0w6EgY29ycmV0b1xcbidcclxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlICs9ICctIFNlIG8gdmFsb3IgZXhpc3RlIG5hIGNhbWFkYSBkZSBhbGVydGFzXFxuJ1xyXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UgKz0gJy0gQWJyYSBvIGNvbnNvbGUgKEYxMikgcGFyYSBtYWlzIGRldGFsaGVzJ1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlICs9IGBDw7NkaWdvOiAke3Jlc3VsdC5lcnJvci5jb2RlfVxcbmBcclxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlICs9IGBNZW5zYWdlbTogJHtyZXN1bHQuZXJyb3IubWVzc2FnZX1cXG5cXG5gXHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3IuZGV0YWlscyAmJiByZXN1bHQuZXJyb3IuZGV0YWlscy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlICs9IGBEZXRhbGhlczogJHtyZXN1bHQuZXJyb3IuZGV0YWlscy5qb2luKCcsICcpfVxcblxcbmBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBhbGVydChlcnJvck1lc3NhZ2UpXHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm8gbmEgR1A6ICR7SlNPTi5zdHJpbmdpZnkocmVzdWx0LmVycm9yKX1gKVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBTZSBuw6NvIHRpdmVyIGNhbXBvIGVycm9yLCBtYXMgbyBzdGF0dXMgbsOjbyDDqSBPSywgbW9zdHJhIG8gcmVzdWx0YWRvIGNvbXBsZXRvXHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJybyBIVFRQOicsIGV4ZWN1dGVSZXNwb25zZS5zdGF0dXMsIGV4ZWN1dGVSZXNwb25zZS5zdGF0dXNUZXh0KVxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1Jlc3Bvc3RhIGNvbXBsZXRhOicsIHJlc3VsdClcclxuICAgICAgICBhbGVydChgRXJybyBhbyBleGVjdXRhciB0YXJlZmE6ICR7ZXhlY3V0ZVJlc3BvbnNlLnN0YXR1c30gJHtleGVjdXRlUmVzcG9uc2Uuc3RhdHVzVGV4dH1cXG5cXG5WZXJpZmlxdWUgbyBjb25zb2xlIChGMTIpIHBhcmEgbWFpcyBkZXRhbGhlcy5gKVxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJybyBhbyBleGVjdXRhciB0YXJlZmE6ICR7ZXhlY3V0ZVJlc3BvbnNlLnN0YXR1c30gJHtleGVjdXRlUmVzcG9uc2Uuc3RhdHVzVGV4dH0gLSAke0pTT04uc3RyaW5naWZ5KHJlc3VsdCl9YClcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLy8gVmVyaWZpY2Egc2UgYSByZXNwb3N0YSBjb250w6ltIHVtIGpvYklkICh0YXJlZmEgYXNzw61uY3JvbmEpXHJcbiAgICAgIC8vIFBhcmEgdGFyZWZhcyBhc3PDrW5jcm9uYXMsIHN1Ym1pdEpvYiBzZW1wcmUgcmV0b3JuYSBqb2JJZFxyXG4gICAgICBpZiAocmVzdWx0LmpvYklkIHx8IGlzQXN5bmMpIHtcclxuICAgICAgICBjb25zdCBqb2JJZCA9IHJlc3VsdC5qb2JJZFxyXG4gICAgICAgIGlmICgham9iSWQpIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGFyZWZhIGFzc8OtbmNyb25hIG1hcyBuw6NvIHJlY2ViZXUgam9iSWQgbmEgcmVzcG9zdGEnKVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZygnVGFyZWZhIGFzc8OtbmNyb25hIGRldGVjdGFkYS4gSm9iIElEOicsIGpvYklkKVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFBvbGxpbmcgZG8gc3RhdHVzIGRvIGpvYlxyXG4gICAgICAgIGxldCBhdHRlbXB0cyA9IDBcclxuICAgICAgICBjb25zdCBtYXhBdHRlbXB0cyA9IDYwXHJcbiAgICAgICAgbGV0IGpvYlN0YXR1cyA9IG51bGxcclxuICAgICAgICBcclxuICAgICAgICB3aGlsZSAoYXR0ZW1wdHMgPCBtYXhBdHRlbXB0cykge1xyXG4gICAgICAgICAgYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDEwMDApKVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAvLyBVUkwgcGFyYSB2ZXJpZmljYXIgc3RhdHVzIGRvIGpvYlxyXG4gICAgICAgICAgLy8gVXNhIGEgbWVzbWEgVVJMIGJhc2UgcXVlIGZ1bmNpb25vdSAocG9kZSBzZXIgc3VibWl0Sm9iIG91IGV4ZWN1dGUpXHJcbiAgICAgICAgICBjb25zdCBiYXNlVXJsID0gZXhlY3V0ZVVybC5yZXBsYWNlKCcvc3VibWl0Sm9iJywgJycpLnJlcGxhY2UoJy9leGVjdXRlJywgJycpXHJcbiAgICAgICAgICBjb25zdCBzdGF0dXNVcmwgPSB0b2tlbiBcclxuICAgICAgICAgICAgPyBgJHtiYXNlVXJsfS9qb2JzLyR7am9iSWR9P3Rva2VuPSR7dG9rZW59JmY9anNvbmBcclxuICAgICAgICAgICAgOiBgJHtiYXNlVXJsfS9qb2JzLyR7am9iSWR9P2Y9anNvbmBcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgY29uc29sZS5sb2coJ1ZlcmlmaWNhbmRvIHN0YXR1cyBkbyBqb2I6Jywgc3RhdHVzVXJsKVxyXG4gICAgICAgICAgY29uc3Qgc3RhdHVzUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChzdGF0dXNVcmwpXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGlmICghc3RhdHVzUmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvIGFvIHZlcmlmaWNhciBzdGF0dXMgZG8gam9iOiAke3N0YXR1c1Jlc3BvbnNlLnN0YXR1c31gKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBqb2JTdGF0dXMgPSBhd2FpdCBzdGF0dXNSZXNwb25zZS5qc29uKClcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGBTdGF0dXMgZG8gam9iICh0ZW50YXRpdmEgJHthdHRlbXB0cyArIDF9KTpgLCBqb2JTdGF0dXMuam9iU3RhdHVzKVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBpZiAoam9iU3RhdHVzLmpvYlN0YXR1cyA9PT0gJ2VzcmlKb2JTdWNjZWVkZWQnKSB7XHJcbiAgICAgICAgICAgIC8vIE9idMOpbSBvcyByZXN1bHRhZG9zXHJcbiAgICAgICAgICAgIC8vIFVzYSBhIG1lc21hIFVSTCBiYXNlIHF1ZSBmdW5jaW9ub3UgKHBvZGUgc2VyIHN1Ym1pdEpvYiBvdSBleGVjdXRlKVxyXG4gICAgICAgICAgICBjb25zdCBiYXNlVXJsID0gZXhlY3V0ZVVybC5yZXBsYWNlKCcvc3VibWl0Sm9iJywgJycpLnJlcGxhY2UoJy9leGVjdXRlJywgJycpXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdFVybCA9IHRva2VuXHJcbiAgICAgICAgICAgICAgPyBgJHtiYXNlVXJsfS9qb2JzLyR7am9iSWR9L3Jlc3VsdHM/dG9rZW49JHt0b2tlbn0mZj1qc29uYFxyXG4gICAgICAgICAgICAgIDogYCR7YmFzZVVybH0vam9icy8ke2pvYklkfS9yZXN1bHRzP2Y9anNvbmBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdFJlc3BvbnNlID0gYXdhaXQgZmV0Y2gocmVzdWx0VXJsKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKCFyZXN1bHRSZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJybyBhbyBvYnRlciByZXN1bHRhZG9zOiAke3Jlc3VsdFJlc3BvbnNlLnN0YXR1c31gKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXN1bHQgPSBhd2FpdCByZXN1bHRSZXNwb25zZS5qc29uKClcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1Jlc3VsdGFkbyBkYSBleGVjdcOnw6NvIGFzc8OtbmNyb25hOicsIHJlc3VsdClcclxuICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoam9iU3RhdHVzLmpvYlN0YXR1cyA9PT0gJ2VzcmlKb2JGYWlsZWQnKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSm9iIGZhbGhvdTogJHtqb2JTdGF0dXMubWVzc2FnZXMgPyBKU09OLnN0cmluZ2lmeShqb2JTdGF0dXMubWVzc2FnZXMpIDogJ0Vycm8gZGVzY29uaGVjaWRvJ31gKVxyXG4gICAgICAgICAgfSBlbHNlIGlmIChqb2JTdGF0dXMuam9iU3RhdHVzID09PSAnZXNyaUpvYkNhbmNlbGxlZCcpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdKb2IgZm9pIGNhbmNlbGFkbycpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGF0dGVtcHRzKytcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGF0dGVtcHRzID49IG1heEF0dGVtcHRzKSB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RpbWVvdXQ6IE8gam9iIGRlbW9yb3UgbWFpcyBkZSA2MCBzZWd1bmRvcyBwYXJhIGNvbXBsZXRhcicpXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIFRhcmVmYSBzw61uY3JvbmEgLSByZXN1bHRhZG8gasOhIGVzdMOhIGRpc3BvbsOtdmVsXHJcbiAgICAgICAgY29uc29sZS5sb2coJ1RhcmVmYSBzw61uY3JvbmEgLSByZXN1bHRhZG8gasOhIGRpc3BvbsOtdmVsJylcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgY29uc29sZS5sb2coJ1Jlc3VsdGFkbyBjb21wbGV0byBkYSBHUDonLCBKU09OLnN0cmluZ2lmeShyZXN1bHQsIG51bGwsIDIpKVxyXG5cclxuICAgICAgLy8gUHJvY2Vzc2EgbyByZXN1bHRhZG8gLSBwcm9jdXJhIHBlbGEgVVJMIGRvIEhUTUxcclxuICAgICAgbGV0IGh0bWxVcmwgPSBudWxsXHJcblxyXG4gICAgICAvLyBQYXJhIHRhcmVmYXMgYXNzw61uY3JvbmFzLCBvcyByZXN1bHRhZG9zIHBvZGVtIGVzdGFyIGVtIHVtYSBlc3RydXR1cmEgZGlmZXJlbnRlXHJcbiAgICAgIC8vIFByaW1laXJvLCB2ZXJpZmljYSBzZSBow6EgZXJyb3NcclxuICAgICAgaWYgKHJlc3VsdC5lcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm8gZW5jb250cmFkbyBubyByZXN1bHRhZG86JywgcmVzdWx0LmVycm9yKVxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJybyBuYSBHUDogJHtKU09OLnN0cmluZ2lmeShyZXN1bHQuZXJyb3IpfWApXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFByb2N1cmEgZW0gcmVzdWx0LnJlc3VsdHMgKGVzdHJ1dHVyYSBjb211bSBwYXJhIHRhcmVmYXMgc8OtbmNyb25hcylcclxuICAgICAgaWYgKHJlc3VsdC5yZXN1bHRzICYmIEFycmF5LmlzQXJyYXkocmVzdWx0LnJlc3VsdHMpKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCByZXN1bHRJdGVtIG9mIHJlc3VsdC5yZXN1bHRzKSB7XHJcbiAgICAgICAgICAvLyBPIHJlc3VsdGFkbyBwb2RlIGVzdGFyIGRpcmV0YW1lbnRlIG5vIHJlc3VsdEl0ZW0gb3UgZW0gcmVzdWx0SXRlbS52YWx1ZVxyXG4gICAgICAgICAgY29uc3QgdmFsdWUgPSByZXN1bHRJdGVtLnZhbHVlICE9PSB1bmRlZmluZWQgPyByZXN1bHRJdGVtLnZhbHVlIDogcmVzdWx0SXRlbVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiB2YWx1ZS5pbmNsdWRlcygnLmh0bWwnKSkge1xyXG4gICAgICAgICAgICBodG1sVXJsID0gdmFsdWVcclxuICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICAvLyBQcm9jdXJhIHBvciBwcm9wcmllZGFkZXMgY29tdW5zIHF1ZSBjb250w6ptIFVSTHNcclxuICAgICAgICAgICAgaWYgKHZhbHVlLnVybCAmJiB0eXBlb2YgdmFsdWUudXJsID09PSAnc3RyaW5nJyAmJiB2YWx1ZS51cmwuaW5jbHVkZXMoJy5odG1sJykpIHtcclxuICAgICAgICAgICAgICBodG1sVXJsID0gdmFsdWUudXJsXHJcbiAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZS5wYXRoVXJsICYmIHR5cGVvZiB2YWx1ZS5wYXRoVXJsID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgIGh0bWxVcmwgPSB2YWx1ZS5wYXRoVXJsXHJcbiAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZS52YWx1ZSAmJiB0eXBlb2YgdmFsdWUudmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlLnZhbHVlLmluY2x1ZGVzKCcuaHRtbCcpKSB7XHJcbiAgICAgICAgICAgICAgaHRtbFVybCA9IHZhbHVlLnZhbHVlXHJcbiAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gUGFyYSB0YXJlZmFzIGFzc8OtbmNyb25hcywgb3MgcmVzdWx0YWRvcyBwb2RlbSBlc3RhciBlbSByZXN1bHQucmVzdWx0cyBjb21vIG9iamV0b1xyXG4gICAgICBpZiAoIWh0bWxVcmwgJiYgcmVzdWx0LnJlc3VsdHMgJiYgdHlwZW9mIHJlc3VsdC5yZXN1bHRzID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheShyZXN1bHQucmVzdWx0cykpIHtcclxuICAgICAgICAvLyBJdGVyYSBzb2JyZSBhcyBwcm9wcmllZGFkZXMgZG8gb2JqZXRvIHJlc3VsdHNcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiByZXN1bHQucmVzdWx0cykge1xyXG4gICAgICAgICAgY29uc3QgcmVzdWx0SXRlbSA9IHJlc3VsdC5yZXN1bHRzW2tleV1cclxuICAgICAgICAgIGlmIChyZXN1bHRJdGVtICYmIHJlc3VsdEl0ZW0udmFsdWUpIHtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSByZXN1bHRJdGVtLnZhbHVlXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlLmluY2x1ZGVzKCcuaHRtbCcpKSB7XHJcbiAgICAgICAgICAgICAgaHRtbFVybCA9IHZhbHVlXHJcbiAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZS51cmwgJiYgdHlwZW9mIHZhbHVlLnVybCA9PT0gJ3N0cmluZycgJiYgdmFsdWUudXJsLmluY2x1ZGVzKCcuaHRtbCcpKSB7XHJcbiAgICAgICAgICAgICAgaHRtbFVybCA9IHZhbHVlLnVybFxyXG4gICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUucGF0aFVybCAmJiB0eXBlb2YgdmFsdWUucGF0aFVybCA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICBodG1sVXJsID0gdmFsdWUucGF0aFVybFxyXG4gICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFByb2N1cmEgZW0gb3V0cmFzIHByb3ByaWVkYWRlcyBkbyByZXN1bHRhZG9cclxuICAgICAgaWYgKCFodG1sVXJsICYmIHJlc3VsdC5vdXRwdXRVcmwpIHtcclxuICAgICAgICBodG1sVXJsID0gcmVzdWx0Lm91dHB1dFVybFxyXG4gICAgICB9XHJcbiAgICAgIGlmICghaHRtbFVybCAmJiByZXN1bHQudXJsKSB7XHJcbiAgICAgICAgaHRtbFVybCA9IHJlc3VsdC51cmxcclxuICAgICAgfVxyXG4gICAgICBpZiAoIWh0bWxVcmwgJiYgcmVzdWx0LmZpbGVVcmwpIHtcclxuICAgICAgICBodG1sVXJsID0gcmVzdWx0LmZpbGVVcmxcclxuICAgICAgfVxyXG4gICAgICBpZiAoIWh0bWxVcmwgJiYgcmVzdWx0Lm91dHB1dEZpbGUpIHtcclxuICAgICAgICBodG1sVXJsID0gcmVzdWx0Lm91dHB1dEZpbGVcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gQnVzY2EgcG9yIHJlZ2V4IGVtIHRvZG8gbyBvYmpldG8gKMO6bHRpbW8gcmVjdXJzbylcclxuICAgICAgaWYgKCFodG1sVXJsKSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0U3RyaW5nID0gSlNPTi5zdHJpbmdpZnkocmVzdWx0KVxyXG4gICAgICAgIGNvbnN0IHVybE1hdGNoID0gcmVzdWx0U3RyaW5nLm1hdGNoKC9odHRwcz86XFwvXFwvW15cXHNcIjw+XStcXC5odG1sL2cpXHJcbiAgICAgICAgaWYgKHVybE1hdGNoICYmIHVybE1hdGNoLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIGh0bWxVcmwgPSB1cmxNYXRjaFswXVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGh0bWxVcmwpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnVVJMIGRvIEhUTUwgZW5jb250cmFkYTonLCBodG1sVXJsKVxyXG4gICAgICAgIC8vIEFicmUgbyBIVE1MIGVtIHVtYSBub3ZhIGd1aWFcclxuICAgICAgICB3aW5kb3cub3BlbihodG1sVXJsLCAnX2JsYW5rJylcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSlcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBTZSBuw6NvIGVuY29udHJvdSBhIFVSTCwgbW9zdHJhIG8gcmVzdWx0YWRvIGNvbXBsZXRvIHBhcmEgZGVidWdcclxuICAgICAgICBjb25zb2xlLndhcm4oJ07Do28gZm9pIHBvc3PDrXZlbCBlbmNvbnRyYXIgYSBVUkwgZG8gSFRNTCBubyByZXN1bHRhZG86JywgcmVzdWx0KVxyXG4gICAgICAgIGNvbnNvbGUud2FybignUmVzdWx0YWRvIGNvbXBsZXRvOicsIEpTT04uc3RyaW5naWZ5KHJlc3VsdCwgbnVsbCwgMikpXHJcbiAgICAgICAgYWxlcnQoJ1JlbGF0w7NyaW8gZ2VyYWRvLCBtYXMgbsOjbyBmb2kgcG9zc8OtdmVsIGVuY29udHJhciBhIFVSTCBkbyBIVE1MLiBWZXJpZmlxdWUgbyBjb25zb2xlIGRvIG5hdmVnYWRvciAoRjEyKSBwYXJhIHZlciBvcyBkZXRhbGhlcyBkbyByZXN1bHRhZG8uJylcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSlcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignPT09IEVSUk8gQ09NUExFVE8gQU8gRVhFQ1VUQVIgR1AgPT09JylcclxuICAgICAgY29uc29sZS5lcnJvcignRXJybzonLCBlcnJvcilcclxuICAgICAgY29uc29sZS5lcnJvcignTWVuc2FnZW06JywgZXJyb3IubWVzc2FnZSlcclxuICAgICAgY29uc29sZS5lcnJvcignU3RhY2sgdHJhY2U6JywgZXJyb3Iuc3RhY2spXHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1RpcG8gZG8gZXJybzonLCBlcnJvci5jb25zdHJ1Y3Rvci5uYW1lKVxyXG4gICAgICBcclxuICAgICAgLy8gSW5mb3JtYcOnw7VlcyBkZSBjb250ZXh0byBwYXJhIGRlYnVnXHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJz09PSBDT05URVhUTyBETyBFUlJPID09PScpXHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1ZhbG9yIGVudmlhZG86JywgaWRlYU51bWJlcilcclxuICAgICAgY29uc29sZS5lcnJvcignUGFyw6JtZXRybyB1c2FkbzonLCBwYXJhbU5hbWUpXHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1VSTCB0ZW50YWRhOicsIGV4ZWN1dGVVcmwpXHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1Rva2VuIHByZXNlbnRlOicsICEhdG9rZW4pXHJcblxyXG4gICAgICBsZXQgZXJyb3JNZXNzYWdlID0gJ0Vycm8gYW8gZ2VyYXIgcmVsYXTDs3Jpby5cXG5cXG4nXHJcblxyXG4gICAgICBpZiAoZXJyb3IubWVzc2FnZSkge1xyXG4gICAgICAgIC8vIFJlbW92ZSBpbmZvcm1hw6fDtWVzIHTDqWNuaWNhcyBtdWl0byBsb25nYXMgcGFyYSBvIHVzdcOhcmlvXHJcbiAgICAgICAgbGV0IGNsZWFuTWVzc2FnZSA9IGVycm9yLm1lc3NhZ2VcclxuICAgICAgICBpZiAoY2xlYW5NZXNzYWdlLmxlbmd0aCA+IDIwMCkge1xyXG4gICAgICAgICAgY2xlYW5NZXNzYWdlID0gY2xlYW5NZXNzYWdlLnN1YnN0cmluZygwLCAyMDApICsgJy4uLidcclxuICAgICAgICB9XHJcbiAgICAgICAgZXJyb3JNZXNzYWdlICs9IGBNZW5zYWdlbTogJHtjbGVhbk1lc3NhZ2V9XFxuXFxuYFxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoZXJyb3IuZGV0YWlscyAmJiBBcnJheS5pc0FycmF5KGVycm9yLmRldGFpbHMpICYmIGVycm9yLmRldGFpbHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGVycm9yTWVzc2FnZSArPSBgRGV0YWxoZXM6ICR7ZXJyb3IuZGV0YWlsc1swXX1cXG5cXG5gXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGVycm9yTWVzc2FnZSArPSAnVmVyaWZpcXVlOlxcbidcclxuICAgICAgZXJyb3JNZXNzYWdlICs9IGAxLiBTZSBvIG7Dum1lcm8gZGUgaWRlYSBcIiR7aWRlYU51bWJlcn1cIiBlc3TDoSBjb3JyZXRvXFxuYFxyXG4gICAgICBlcnJvck1lc3NhZ2UgKz0gJzIuIFNlIG8gdmFsb3IgZXhpc3RlIG5hIGNhbWFkYSBkZSBhbGVydGFzX3JlZ2lvbmFsX2xhcGFcXG4nXHJcbiAgICAgIGVycm9yTWVzc2FnZSArPSAnMy4gU2UgYSBmZXJyYW1lbnRhIGRlIGdlb3Byb2Nlc3NhbWVudG8gZXN0w6EgYWNlc3PDrXZlbFxcbidcclxuICAgICAgZXJyb3JNZXNzYWdlICs9ICc0LiBBYnJhIG8gY29uc29sZSBkbyBuYXZlZ2Fkb3IgKEYxMikgcGFyYSBtYWlzIGRldGFsaGVzIHTDqWNuaWNvc1xcblxcbidcclxuICAgICAgZXJyb3JNZXNzYWdlICs9ICdEaWNhOiBUZW50ZSB1c2FyIG8gYm90w6NvIFwiRmlsdHJhclwiIHByaW1laXJvIHBhcmEgdmVyaWZpY2FyIHNlIG8gbsO6bWVybyBleGlzdGUuJ1xyXG5cclxuICAgICAgYWxlcnQoZXJyb3JNZXNzYWdlKVxyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlciAoKSB7XHJcbiAgICBjb25zdCBzdHlsZSA9IGNzc2BcclxuICAgICAgLndpZGdldC1jb250YWluZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBnYXA6IDEycHg7XHJcbiAgICAgIH1cclxuICAgICAgZm9ybSA+IGRpdiB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBnYXA6IDhweDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgZmxleDogMTtcclxuICAgICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgbWluLXdpZHRoOiAxMDBweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNjY2NDA7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFlNGYzMjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICY6ZGlzYWJsZWQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG4gICAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAucmVwb3J0LWJ1dHRvbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI2NjY0MDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgcGFkZGluZzogOHB4IDE2cHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICAgICAgICBwb2ludGVyLWV2ZW50czogYXV0bztcclxuICAgICAgICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxZTRmMzI7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjphY3RpdmU6bm90KDpkaXNhYmxlZCkge1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6Zm9jdXM6bm90KDpkaXNhYmxlZCkge1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6ZGlzYWJsZWQge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcclxuICAgICAgICAgIGNvbG9yOiAjOWU5ZTllO1xyXG4gICAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgb3BhY2l0eTogMC42O1xyXG4gICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6bm90KDpkaXNhYmxlZCkge1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5jbGVhci1idXR0b24ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XHJcbiAgICAgICAgY29sb3I6ICM0MjQyNDI7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgcGFkZGluZzogOHB4IDE2cHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmRiZGJkO1xyXG4gICAgICAgICAgY29sb3I6ICMyMTIxMjE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6ZGlzYWJsZWQge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuICAgICAgICAgIGNvbG9yOiAjOWU5ZTllO1xyXG4gICAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLnN0YXR1cy1tZXNzYWdlIHtcclxuICAgICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U3ZjNmZjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5sb2FkaW5nIHtcclxuICAgICAgICBjb2xvcjogIzAwNzljMTtcclxuICAgICAgfVxyXG4gICAgYFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtYWRkTGF5ZXJzIGppbXUtd2lkZ2V0IHAtMlwiIGNzcz17c3R5bGV9PlxyXG4gICAgICAgIHt0aGlzLnByb3BzLmhhc093blByb3BlcnR5KCd1c2VNYXBXaWRnZXRJZHMnKSAmJlxyXG4gICAgICAgICAgdGhpcy5wcm9wcy51c2VNYXBXaWRnZXRJZHMgJiZcclxuICAgICAgICAgIHRoaXMucHJvcHMudXNlTWFwV2lkZ2V0SWRzLmxlbmd0aCA9PT0gMSAmJiAoXHJcbiAgICAgICAgICAgIDxKaW11TWFwVmlld0NvbXBvbmVudFxyXG4gICAgICAgICAgICAgIHVzZU1hcFdpZGdldElkPXt0aGlzLnByb3BzLnVzZU1hcFdpZGdldElkcz8uWzBdfVxyXG4gICAgICAgICAgICAgIG9uQWN0aXZlVmlld0NoYW5nZT17KGptdjogSmltdU1hcFZpZXcpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICBqaW11TWFwVmlldzogam12XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8cD57ZGVmYXVsdE1lc3NhZ2VzLmluc3RydWN0aW9uc308L3A+XHJcblxyXG5cclxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZUZpbHRlckFuZFpvb219PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2RlZmF1bHRNZXNzYWdlcy5zZWFyY2hJZGVhfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuaWRlYVNlYXJjaElucHV0fVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSWRlYVNlYXJjaElucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyF0aGlzLnN0YXRlLmZlYXR1cmVMYXllciB8fCB0aGlzLnN0YXRlLmxvYWRpbmd9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17IXRoaXMuc3RhdGUuZmVhdHVyZUxheWVyIHx8IHRoaXMuc3RhdGUubG9hZGluZ31cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7ZGVmYXVsdE1lc3NhZ2VzLmZpbHRlckFuZFpvb219XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgICAgIHt0aGlzLnN0YXRlLmZlYXR1cmVMYXllciAmJiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVwb3J0LWJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUdlbmVyYXRlUmVwb3J0fVxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMuc3RhdGUubG9hZGluZyB8fCAhdGhpcy5zdGF0ZS5pZGVhU2VhcmNoSW5wdXQgfHwgdGhpcy5zdGF0ZS5pZGVhU2VhcmNoSW5wdXQudHJpbSgpID09PSAnJ31cclxuICAgICAgICAgICAgICAgIHRpdGxlPXt0aGlzLnN0YXRlLmxvYWRpbmcgfHwgIXRoaXMuc3RhdGUuaWRlYVNlYXJjaElucHV0IHx8IHRoaXMuc3RhdGUuaWRlYVNlYXJjaElucHV0LnRyaW0oKSA9PT0gJycgXHJcbiAgICAgICAgICAgICAgICAgID8gJ0RpZ2l0ZSB1bSBuw7ptZXJvIGRlIGlkZWEgcGFyYSBnZXJhciBvIHJlbGF0w7NyaW8nIFxyXG4gICAgICAgICAgICAgICAgICA6ICdHZXJhciByZWxhdMOzcmlvIHBhcmEgbyBuw7ptZXJvIGRlIGlkZWEgaW5mb3JtYWRvJ31cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7ZGVmYXVsdE1lc3NhZ2VzLmdlbmVyYXRlUmVwb3J0fVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNsZWFyLWJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsZWFyRmlsdGVyfVxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMuc3RhdGUubG9hZGluZ31cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7ZGVmYXVsdE1lc3NhZ2VzLmNsZWFyRmlsdGVyfVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cbiBleHBvcnQgZnVuY3Rpb24gX19zZXRfd2VicGFja19wdWJsaWNfcGF0aF9fKHVybCkgeyBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHVybCB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
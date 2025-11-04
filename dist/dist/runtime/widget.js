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
            console.log('Definition Expression:', definitionExpression);
            // Aguarda um pouco para garantir que o filtro seja processado
            // Aguarda que a camada esteja completamente carregada antes de aplicar o filtro
            if (layer.loaded) {
                // A camada já está carregada, aplica o filtro diretamente
                // Aguarda um pouco para garantir que o filtro seja aplicado
                setTimeout(() => {
                    // Verifica se o filtro foi aplicado
                    if (layer.definitionExpression === definitionExpression) {
                        console.log('Filtro confirmado na camada');
                    }
                    this.applyZoomAfterFilter(layer, graphic);
                }, 300);
            }
            else {
                // Aguarda a camada carregar primeiro
                layer.when(() => {
                    // Aplica o filtro novamente após carregar (garantia)
                    layer.definitionExpression = definitionExpression;
                    layer.refresh();
                    setTimeout(() => {
                        this.applyZoomAfterFilter(layer, graphic);
                    }, 300);
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
                // Dá zoom no polígono encontrado com padding para não cortar
                if (graphic.geometry && this.state.jimuMapView && this.state.jimuMapView.view) {
                    // Usa goTo com target e padding em pixels para controlar melhor o zoom
                    // Padding de 50 pixels em cada lado para não cortar o polígono
                    this.state.jimuMapView.view.goTo({
                        target: graphic.geometry,
                        padding: {
                            left: 50,
                            right: 50,
                            top: 50,
                            bottom: 50
                        }
                    }, {
                        duration: 500
                    }).then(() => {
                        console.log('Zoom aplicado no polígono filtrado com padding');
                        this.setState({ loading: false });
                    }).catch((error) => {
                        console.error('Erro ao dar zoom:', error);
                        // Fallback: tenta zoom com extent calculado manualmente
                        try {
                            const extent = graphic.geometry.extent;
                            // Adiciona 10% de padding calculado a partir do tamanho do extent
                            const paddingFactor = 0.1;
                            const width = extent.width;
                            const height = extent.height;
                            const paddedExtent = extent.expand(width * paddingFactor, height * paddingFactor);
                            this.state.jimuMapView.view.goTo(paddedExtent, {
                                duration: 500
                            }).then(() => {
                                console.log('Zoom aplicado usando extent com padding calculado');
                                this.setState({ loading: false });
                            }).catch((fallbackError) => {
                                console.error('Erro no zoom de fallback:', fallbackError);
                                this.setState({ loading: false });
                            });
                        }
                        catch (calcError) {
                            console.error('Erro ao calcular extent:', calcError);
                            this.setState({ loading: false });
                        }
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
                // Remove o filtro definindo definitionExpression como vazio ou null
                this.state.featureLayer.definitionExpression = null;
                this.state.featureLayer.refresh();
                console.log('Filtro removido - todos os alertas devem aparecer novamente');
                // Aguarda um pouco para garantir que o filtro seja removido
                setTimeout(() => {
                    // Verifica se o filtro foi removido
                    if (!this.state.featureLayer.definitionExpression || this.state.featureLayer.definitionExpression === '') {
                        console.log('Filtro confirmado como removido');
                    }
                    // Restaura a visualização inicial do mapa
                    if (this.state.jimuMapView && this.state.jimuMapView.view) {
                        if (this.state.initialExtent) {
                            // Restaura a extensão inicial salva
                            this.state.jimuMapView.view.goTo(this.state.initialExtent, {
                                duration: 500
                            }).then(() => {
                                console.log('Visualização inicial restaurada');
                            }).catch((error) => {
                                console.error('Erro ao restaurar visualização inicial:', error);
                                // Se falhar, tenta fazer zoom para a camada completa
                                if (this.state.featureLayer && this.state.featureLayer.fullExtent) {
                                    this.state.jimuMapView.view.goTo(this.state.featureLayer.fullExtent, {
                                        duration: 500
                                    });
                                }
                            });
                        }
                        else {
                            // Se não tiver extensão inicial salva, tenta fazer zoom para a camada completa
                            if (this.state.featureLayer && this.state.featureLayer.fullExtent) {
                                this.state.jimuMapView.view.goTo(this.state.featureLayer.fullExtent, {
                                    duration: 500
                                }).then(() => {
                                    console.log('Zoom para camada completa aplicado');
                                }).catch((error) => {
                                    console.error('Erro ao fazer zoom para camada completa:', error);
                                });
                            }
                        }
                    }
                }, 300);
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
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
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
      .spinner {
        display: inline-block;
        width: 16px;
        height: 16px;
        border: 2px solid rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        border-top-color: white;
        animation: spin 0.8s linear infinite;
      }
      @keyframes spin {
        to {
          transform: rotate(360deg);
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
                            : 'Gerar relatório para o número de idea informado' },
                        this.state.loading && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "spinner" }),
                        _translations_default__WEBPACK_IMPORTED_MODULE_2__["default"].generateReport),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9maWx0cmFyLWUtZ2VyYXItcmVsYXRvcmlvL2Rpc3QvcnVudGltZS93aWRnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlFQUFlO0lBQ2IsWUFBWSxFQUFFLGtCQUFrQjtJQUNoQyxRQUFRLEVBQUUsa0JBQWtCO0lBQzVCLGlCQUFpQixFQUFFLHdCQUF3QjtJQUMzQyxZQUFZLEVBQ1Ysa0JBQWtCO0lBQ3BCLFVBQVUsRUFBRSw2QkFBNkI7SUFDekMsYUFBYSxFQUFFLFNBQVM7SUFDeEIsY0FBYyxFQUFFLGlCQUFpQjtJQUNqQyxXQUFXLEVBQUUsZUFBZTtJQUM1QixPQUFPLEVBQUUsZUFBZTtJQUN4QixXQUFXLEVBQUUsK0JBQStCO0NBQzdDOzs7Ozs7Ozs7Ozs7QUNaRDs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7QUNBQTs7O0tBR0s7QUFDTCxxQkFBdUIsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0puRCwwQ0FBMEM7QUFDMUMsZUFBZTtBQUNmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFrQkU7QUFDOEQ7QUFLNUM7QUFJZ0M7QUFVckMsTUFBTSxNQUFPLFNBQVEsNENBQUssQ0FBQyxhQUd6QztJQUhEOztRQVVFLFVBQUssR0FBRztZQUNOLGVBQWUsRUFBRSxFQUFFO1lBQ25CLFdBQVcs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SUFBSSxxQkFBdUIsR0FBRyxHQUFHLEVBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9maWx0cmFyLWUtZ2VyYXItcmVsYXRvcmlvL3NyYy9ydW50aW1lL3RyYW5zbGF0aW9ucy9kZWZhdWx0LnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1hcmNnaXNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvZmlsdHJhci1lLWdlcmFyLXJlbGF0b3Jpby9zcmMvcnVudGltZS93aWRnZXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcclxuICBfd2lkZ2V0TGFiZWw6ICdGaWx0cmFyIGUgQmFpeGFyJyxcclxuICBhZGRMYXllcjogJ0FkaWNpb25hciBDYW1hZGEnLFxyXG4gIGZlYXR1cmVTZXJ2aWNlVXJsOiAnVVJMIGRvIEZlYXR1cmUgU2VydmljZScsXHJcbiAgaW5zdHJ1Y3Rpb25zOlxyXG4gICAgJ0RpZ2l0ZSBvIG7CuiBJREVBJyxcclxuICBzZWFyY2hJZGVhOiAnUGVzcXVpc2FyIHBvciBuw7ptZXJvIChpZGVhKScsXHJcbiAgZmlsdGVyQW5kWm9vbTogJ0ZpbHRyYXInLFxyXG4gIGdlbmVyYXRlUmVwb3J0OiAnR2VyYXIgUmVsYXTDs3JpbycsXHJcbiAgY2xlYXJGaWx0ZXI6ICdMaW1wYXIgRmlsdHJvJyxcclxuICBsb2FkaW5nOiAnQ2FycmVnYW5kby4uLicsXHJcbiAgbGF5ZXJMb2FkZWQ6ICdDYW1hZGEgY2FycmVnYWRhIGNvbSBzdWNlc3NvISdcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9hcmNnaXNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zICovXHJcbi8qKiBAanN4IGpzeCAqL1xyXG4vKipcclxuICBMaWNlbnNpbmdcclxuXHJcbiAgQ29weXJpZ2h0IDIwMjIgRXNyaVxyXG5cclxuICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyBZb3VcclxuICBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heVxyXG4gIG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcbiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3JcclxuICBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmdcclxuICBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcblxyXG4gIEEgY29weSBvZiB0aGUgbGljZW5zZSBpcyBhdmFpbGFibGUgaW4gdGhlIHJlcG9zaXRvcnknc1xyXG4gIExJQ0VOU0UgZmlsZS5cclxuKi9cclxuaW1wb3J0IHsgUmVhY3QsIHR5cGUgQWxsV2lkZ2V0UHJvcHMsIGNzcywganN4IH0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQge1xyXG4gIGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMsXHJcbiAgSmltdU1hcFZpZXdDb21wb25lbnQsXHJcbiAgdHlwZSBKaW11TWFwVmlld1xyXG59IGZyb20gJ2ppbXUtYXJjZ2lzJ1xyXG5cclxuaW1wb3J0IHR5cGUgeyBJTUNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZydcclxuXHJcbmltcG9ydCBkZWZhdWx0TWVzc2FnZXMgZnJvbSAnLi90cmFuc2xhdGlvbnMvZGVmYXVsdCdcclxuXHJcbmludGVyZmFjZSBJU3RhdGUge1xyXG4gIGlkZWFTZWFyY2hJbnB1dDogc3RyaW5nXHJcbiAgamltdU1hcFZpZXc6IEppbXVNYXBWaWV3XHJcbiAgZmVhdHVyZUxheWVyOiBfX2VzcmkuRmVhdHVyZUxheWVyXHJcbiAgbG9hZGluZzogYm9vbGVhblxyXG4gIGluaXRpYWxFeHRlbnQ6IF9fZXNyaS5FeHRlbnRcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2lkZ2V0IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxcclxuQWxsV2lkZ2V0UHJvcHM8SU1Db25maWc+LFxyXG5JU3RhdGVcclxuPiB7XHJcbiAgLy8gR2l2ZSB0eXBlcyB0byB0aGUgbW9kdWxlcyB3ZSBpbXBvcnQgZnJvbSB0aGUgQXJjR0lTIEFQSSBmb3IgSmF2YVNjcmlwdFxyXG4gIC8vIHRvIHRlbGwgVHlwZVNjcmlwdCB3aGF0IHR5cGVzIHRoZXkgYXJlLlxyXG4gIEZlYXR1cmVMYXllcjogdHlwZW9mIF9fZXNyaS5GZWF0dXJlTGF5ZXJcclxuICBRdWVyeTogdHlwZW9mIF9fZXNyaS5RdWVyeVxyXG4gIFNwYXRpYWxSZWZlcmVuY2U6IHR5cGVvZiBfX2VzcmkuU3BhdGlhbFJlZmVyZW5jZVxyXG5cclxuICBzdGF0ZSA9IHtcclxuICAgIGlkZWFTZWFyY2hJbnB1dDogJycsXHJcbiAgICBqaW11TWFwVmlldzogbnVsbCxcclxuICAgIGZlYXR1cmVMYXllcjogbnVsbCxcclxuICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgaW5pdGlhbEV4dGVudDogbnVsbFxyXG4gIH1cclxuXHJcbiAgLy8gVVJMIGZpeGEgZGEgY2FtYWRhXHJcbiAgcmVhZG9ubHkgRkVBVFVSRV9TRVJWSUNFX1VSTCA9ICdodHRwczovL21laW9hbWJpZW50ZS5zaXN0ZW1hcy5tcGJhLm1wLmJyL3NlcnZlci9yZXN0L3NlcnZpY2VzL0hvc3RlZC9hbGVydGFzX3JlZ2lvbmFsX2xhcGEvRmVhdHVyZVNlcnZlcidcclxuICBcclxuICAvLyBVUkwgZGEgZmVycmFtZW50YSBkZSBnZW9wcm9jZXNzYW1lbnRvXHJcbiAgcmVhZG9ubHkgR1BfU0VSVklDRV9VUkwgPSAnaHR0cHM6Ly9tZWlvYW1iaWVudGUuc2lzdGVtYXMubXBiYS5tcC5ici9zZXJ2ZXIvcmVzdC9zZXJ2aWNlcy90ZXN0ZW91dHB1dC9wcm9jZXNzYXJhbGVydGFfaWRlYS9HUFNlcnZlcidcclxuICBcclxuICAvLyBOb21lIGRhIHRhc2sgZXNwZWPDrWZpY2EgZGVudHJvIGRhIEdQXHJcbiAgcmVhZG9ubHkgR1BfVEFTS19OQU1FID0gJ1Byb2Nlc3NhbWVudG8gZGUgYWxlcnRhcydcclxuXHJcbiAgLy8gRnVuw6fDo28gY2hhbWFkYSBxdWFuZG8gbyB2YWxvciBkYSBwZXNxdWlzYSBtdWRhXHJcbiAgaGFuZGxlSWRlYVNlYXJjaElucHV0Q2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgaWRlYVNlYXJjaElucHV0OiBldmVudC50YXJnZXQudmFsdWVcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICAvLyBDYXJyZWdhIGEgY2FtYWRhIGF1dG9tYXRpY2FtZW50ZSBxdWFuZG8gbyBjb21wb25lbnRlIMOpIG1vbnRhZG8gb3UgbyBtYXBhIGVzdMOhIGRpc3BvbsOtdmVsXHJcbiAgY29tcG9uZW50RGlkVXBkYXRlID0gKHByZXZQcm9wcywgcHJldlN0YXRlKSA9PiB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5qaW11TWFwVmlldyAmJiAhdGhpcy5zdGF0ZS5mZWF0dXJlTGF5ZXIgJiYgIXByZXZTdGF0ZS5qaW11TWFwVmlldykge1xyXG4gICAgICAvLyBTYWx2YSBhIHZpc3VhbGl6YcOnw6NvIGluaWNpYWwgcXVhbmRvIG8gbWFwYSDDqSBkZXRlY3RhZG8gcGVsYSBwcmltZWlyYSB2ZXpcclxuICAgICAgaWYgKHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldyAmJiAhdGhpcy5zdGF0ZS5pbml0aWFsRXh0ZW50KSB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudEV4dGVudCA9IHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldy5leHRlbnRcclxuICAgICAgICBpZiAoY3VycmVudEV4dGVudCkge1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGluaXRpYWxFeHRlbnQ6IGN1cnJlbnRFeHRlbnQuY2xvbmUoKVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5sb2FkRmVhdHVyZUxheWVyKClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIENhcnJlZ2EgYSBjYW1hZGEgZGUgZmVhdHVyZSBzZXJ2aWNlXHJcbiAgbG9hZEZlYXR1cmVMYXllciA9ICgpID0+IHtcclxuICAgIGlmICghdGhpcy5zdGF0ZS5qaW11TWFwVmlldykge1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSB9KVxyXG5cclxuICAgIGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMoW1xyXG4gICAgICAnZXNyaS9sYXllcnMvRmVhdHVyZUxheWVyJyxcclxuICAgICAgJ2VzcmkvZ2VvbWV0cnkvU3BhdGlhbFJlZmVyZW5jZSdcclxuICAgIF0pLnRoZW4oKG1vZHVsZXMpID0+IHtcclxuICAgICAgW3RoaXMuRmVhdHVyZUxheWVyLCB0aGlzLlNwYXRpYWxSZWZlcmVuY2VdID0gbW9kdWxlc1xyXG5cclxuICAgICAgLy8gQ3JpYSBhIGNhbWFkYSBjb20gYSBVUkwgZml4YVxyXG4gICAgICBjb25zdCBsYXllciA9IG5ldyB0aGlzLkZlYXR1cmVMYXllcih7XHJcbiAgICAgICAgdXJsOiB0aGlzLkZFQVRVUkVfU0VSVklDRV9VUkxcclxuICAgICAgfSlcclxuXHJcbiAgICAgIC8vIEFkaWNpb25hIGEgY2FtYWRhIGFvIG1hcGFcclxuICAgICAgdGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3Lm1hcC5hZGQobGF5ZXIpXHJcblxyXG4gICAgICAvLyBBZ3VhcmRhIGEgY2FtYWRhIHNlciBjcmlhZGFcclxuICAgICAgbGF5ZXIub24oJ2xheWVydmlldy1jcmVhdGUnLCAoKSA9PiB7XHJcbiAgICAgICAgLy8gU2FsdmEgYSB2aXN1YWxpemHDp8OjbyBpbmljaWFsIGRvIG1hcGEgc2UgYWluZGEgbsOjbyBmb2kgc2FsdmFcclxuICAgICAgICBpZiAoIXRoaXMuc3RhdGUuaW5pdGlhbEV4dGVudCAmJiB0aGlzLnN0YXRlLmppbXVNYXBWaWV3ICYmIHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldykge1xyXG4gICAgICAgICAgY29uc3QgY3VycmVudEV4dGVudCA9IHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldy5leHRlbnRcclxuICAgICAgICAgIGlmIChjdXJyZW50RXh0ZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgIGZlYXR1cmVMYXllcjogbGF5ZXIsXHJcbiAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgaW5pdGlhbEV4dGVudDogY3VycmVudEV4dGVudC5jbG9uZSgpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICBmZWF0dXJlTGF5ZXI6IGxheWVyLFxyXG4gICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBmZWF0dXJlTGF5ZXI6IGxheWVyLFxyXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcblxyXG4gICAgICBsYXllci5vbignbGF5ZXJ2aWV3LWNyZWF0ZS1lcnJvcicsICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvIGFvIGNhcnJlZ2FyIGEgY2FtYWRhJylcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSlcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICAvLyBGdW7Dp8OjbyBwYXJhIGZpbHRyYXIgZSBkYXIgem9vbSBubyBwb2zDrWdvbm8gYmFzZWFkbyBuYSBwZXNxdWlzYVxyXG4gIGhhbmRsZUZpbHRlckFuZFpvb20gPSBhc3luYyAoZXZ0KSA9PiB7XHJcbiAgICBldnQucHJldmVudERlZmF1bHQoKVxyXG5cclxuICAgIC8vIENhc29zIGRlIGVycm9cclxuICAgIGlmICghdGhpcy5zdGF0ZS5qaW11TWFwVmlldykge1xyXG4gICAgICBhbGVydCgnUG9yIGZhdm9yLCBjb25maWd1cmUgdW0gbWFwYSBubyB3aWRnZXQuJylcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBpZiAoIXRoaXMuc3RhdGUuZmVhdHVyZUxheWVyKSB7XHJcbiAgICAgIGFsZXJ0KCdBIGNhbWFkYSBhaW5kYSBuw6NvIGZvaSBjYXJyZWdhZGEuIEFndWFyZGUuLi4nKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGlmICh0aGlzLnN0YXRlLmlkZWFTZWFyY2hJbnB1dCA9PT0gJycgfHwgdGhpcy5zdGF0ZS5pZGVhU2VhcmNoSW5wdXQudHJpbSgpID09PSAnJykge1xyXG4gICAgICBhbGVydCgnUG9yIGZhdm9yLCBkaWdpdGUgdW0gbsO6bWVybyBwYXJhIHBlc3F1aXNhciBuYSBjb2x1bmEgaWRlYS4nKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSB9KVxyXG5cclxuICAgIC8vIENhcnJlZ2Egb3MgbcOzZHVsb3MgbmVjZXNzw6FyaW9zXHJcbiAgICBsb2FkQXJjR0lTSlNBUElNb2R1bGVzKFtcclxuICAgICAgJ2VzcmkvbGF5ZXJzL0ZlYXR1cmVMYXllcicsXHJcbiAgICAgICdlc3JpL2dlb21ldHJ5L1NwYXRpYWxSZWZlcmVuY2UnXHJcbiAgICBdKS50aGVuKChtb2R1bGVzKSA9PiB7XHJcbiAgICAgIFt0aGlzLkZlYXR1cmVMYXllciwgdGhpcy5TcGF0aWFsUmVmZXJlbmNlXSA9IG1vZHVsZXNcclxuXHJcbiAgICAgIGNvbnN0IGxheWVyID0gdGhpcy5zdGF0ZS5mZWF0dXJlTGF5ZXJcclxuICAgICAgY29uc3Qgc2VhcmNoVmFsdWUgPSB0aGlzLnN0YXRlLmlkZWFTZWFyY2hJbnB1dC50cmltKClcclxuICAgICAgXHJcbiAgICAgIC8vIEVzY2FwYSBhc3BhcyBzaW1wbGVzIHBhcmEgZXZpdGFyIFNRTCBpbmplY3Rpb25cclxuICAgICAgY29uc3QgZXNjYXBlZFZhbHVlID0gc2VhcmNoVmFsdWUucmVwbGFjZSgvJy9nLCBcIicnXCIpXHJcblxyXG4gICAgICAvLyBWZXJpZmljYSBzZSBhIGNhbWFkYSBlc3TDoSBjYXJyZWdhZGEgZSBvYnTDqW0gaW5mb3JtYcOnw7VlcyBkb3MgY2FtcG9zXHJcbiAgICAgIC8vIEFndWFyZGEgYSBjYW1hZGEgZXN0YXIgY29tcGxldGFtZW50ZSBjYXJyZWdhZGFcclxuICAgICAgY29uc3QgY2hlY2tBbmRRdWVyeSA9ICgpID0+IHtcclxuICAgICAgICAvLyBMaXN0YSBkZSBwb3Nzw612ZWlzIG5vbWVzIGRlIGNvbHVuYSAoY2FzZS1pbnNlbnNpdGl2ZSlcclxuICAgICAgICBjb25zdCBwb3NzaWJsZUZpZWxkTmFtZXMgPSBbJ2lkZWEnLCAnSURFQScsICdJZGVhJywgJ0lEJywgJ2lkJywgJ0lkJ11cclxuICAgICAgICBsZXQgZmllbGROYW1lID0gJ2lkZWEnIC8vIFBhZHLDo29cclxuICAgICAgICBcclxuICAgICAgICAvLyBUZW50YSBlbmNvbnRyYXIgbyBjYW1wbyBjb3JyZXRvXHJcbiAgICAgICAgaWYgKGxheWVyLmZpZWxkcyAmJiBsYXllci5maWVsZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgY29uc3QgZm91bmRGaWVsZCA9IGxheWVyLmZpZWxkcy5maW5kKGZpZWxkID0+IFxyXG4gICAgICAgICAgICBwb3NzaWJsZUZpZWxkTmFtZXMuaW5jbHVkZXMoZmllbGQubmFtZSlcclxuICAgICAgICAgIClcclxuICAgICAgICAgIGlmIChmb3VuZEZpZWxkKSB7XHJcbiAgICAgICAgICAgIGZpZWxkTmFtZSA9IGZvdW5kRmllbGQubmFtZVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gU2UgbsOjbyBlbmNvbnRyYXIsIHRlbnRhIGZhemVyIHVtYSBidXNjYSBjYXNlLWluc2Vuc2l0aXZlXHJcbiAgICAgICAgICAgIGNvbnN0IGNhc2VJbnNlbnNpdGl2ZUZpZWxkID0gbGF5ZXIuZmllbGRzLmZpbmQoZmllbGQgPT4gXHJcbiAgICAgICAgICAgICAgZmllbGQubmFtZS50b0xvd2VyQ2FzZSgpID09PSAnaWRlYSdcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICBpZiAoY2FzZUluc2Vuc2l0aXZlRmllbGQpIHtcclxuICAgICAgICAgICAgICBmaWVsZE5hbWUgPSBjYXNlSW5zZW5zaXRpdmVGaWVsZC5uYW1lXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgLy8gTG9nIGRvcyBjYW1wb3MgZGlzcG9uw612ZWlzIHBhcmEgZGVidWdcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQ2FtcG9zIGRpc3BvbsOtdmVpcyBuYSBjYW1hZGE6JywgbGF5ZXIuZmllbGRzLm1hcChmID0+IGYubmFtZSkpXHJcbiAgICAgICAgICAgICAgLy8gVGVudGEgdXNhciBvIHByaW1laXJvIGNhbXBvIHF1ZSBwYXJlY2Ugc2VyIHVtIElEXHJcbiAgICAgICAgICAgICAgY29uc3QgaWRGaWVsZCA9IGxheWVyLmZpZWxkcy5maW5kKGZpZWxkID0+IFxyXG4gICAgICAgICAgICAgICAgZmllbGQudHlwZSA9PT0gJ2VzcmlGaWVsZFR5cGVTdHJpbmcnIHx8IGZpZWxkLnR5cGUgPT09ICdlc3JpRmllbGRUeXBlSW50ZWdlcicgfHwgZmllbGQudHlwZSA9PT0gJ2VzcmlGaWVsZFR5cGVEb3VibGUnXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgIGlmIChpZEZpZWxkKSB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZE5hbWUgPSBpZEZpZWxkLm5hbWVcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBVc2FuZG8gY2FtcG86ICR7ZmllbGROYW1lfWApXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDcmlhIHVtYSBxdWVyeSBwYXJhIGJ1c2NhciBvIHBvbMOtZ29ubyBwZWxhIGNvbHVuYVxyXG4gICAgICAgIC8vIFVzYSBMSUtFIHBhcmEgYnVzY2EgbWFpcyBmbGV4w612ZWwgZSB0cmF0YSBjb21vIHN0cmluZ1xyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gbGF5ZXIuY3JlYXRlUXVlcnkoKVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFRlbnRhIGRpZmVyZW50ZXMgYWJvcmRhZ2VucyBkZSBxdWVyeVxyXG4gICAgICAgIC8vIDEuIEJ1c2NhIGV4YXRhIGNvbW8gc3RyaW5nXHJcbiAgICAgICAgLy8gMi4gQnVzY2EgY29tIExJS0UgcGFyYSB2YWxvcmVzIHBhcmNpYWlzXHJcbiAgICAgICAgLy8gMy4gQnVzY2EgY29tbyBuw7ptZXJvIChzZSBvIHZhbG9yIGZvciBudW3DqXJpY28pXHJcbiAgICAgICAgY29uc3QgaGFzU3BlY2lhbENoYXJzID0gc2VhcmNoVmFsdWUuaW5kZXhPZignLicpICE9PSAtMSB8fCBzZWFyY2hWYWx1ZS5pbmRleE9mKCcvJykgIT09IC0xXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gUGFyYSB2YWxvcmVzIGNvbSBjYXJhY3RlcmVzIGVzcGVjaWFpcyAoY29tbyBcIjAwMy45LjQyNzA3NC8yMDI1XCIpLCB1c2EgYXBlbmFzIGNvbW8gc3RyaW5nXHJcbiAgICAgICAgaWYgKGhhc1NwZWNpYWxDaGFycykge1xyXG4gICAgICAgICAgcXVlcnkud2hlcmUgPSBgJHtmaWVsZE5hbWV9ID0gJyR7ZXNjYXBlZFZhbHVlfSdgXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vIFNlIGZvciB1bSBuw7ptZXJvIHNpbXBsZXMsIHRlbnRhIGNvbW8gbsO6bWVybyBlIGNvbW8gc3RyaW5nXHJcbiAgICAgICAgICBjb25zdCBpc051bWVyaWMgPSAhaXNOYU4ocGFyc2VGbG9hdChzZWFyY2hWYWx1ZSkpICYmIGlzRmluaXRlKHBhcnNlRmxvYXQoc2VhcmNoVmFsdWUpKVxyXG4gICAgICAgICAgaWYgKGlzTnVtZXJpYykge1xyXG4gICAgICAgICAgICBxdWVyeS53aGVyZSA9IGAke2ZpZWxkTmFtZX0gPSAke3NlYXJjaFZhbHVlfSBPUiAke2ZpZWxkTmFtZX0gPSAnJHtlc2NhcGVkVmFsdWV9J2BcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHF1ZXJ5LndoZXJlID0gYCR7ZmllbGROYW1lfSA9ICcke2VzY2FwZWRWYWx1ZX0nYFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBxdWVyeS5yZXR1cm5HZW9tZXRyeSA9IHRydWVcclxuXHJcbiAgICAgICAgLy8gRXhlY3V0YSBhIHF1ZXJ5XHJcbiAgICAgICAgbGF5ZXIucXVlcnlGZWF0dXJlcyhxdWVyeSkudGhlbigocmVzdWx0cykgPT4ge1xyXG4gICAgICAgICAgaWYgKHJlc3VsdHMuZmVhdHVyZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIC8vIFNlIG7Do28gZW5jb250cm91LCB0ZW50YSBjb20gTElLRVxyXG4gICAgICAgICAgICBjb25zdCBsaWtlUXVlcnkgPSBsYXllci5jcmVhdGVRdWVyeSgpXHJcbiAgICAgICAgICAgIGxpa2VRdWVyeS53aGVyZSA9IGAke2ZpZWxkTmFtZX0gTElLRSAnJSR7ZXNjYXBlZFZhbHVlfSUnYFxyXG4gICAgICAgICAgICBsaWtlUXVlcnkucmV0dXJuR2VvbWV0cnkgPSB0cnVlXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gbGF5ZXIucXVlcnlGZWF0dXJlcyhsaWtlUXVlcnkpLnRoZW4oKGxpa2VSZXN1bHRzKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKGxpa2VSZXN1bHRzLmZlYXR1cmVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoYE5lbmh1bSBwb2zDrWdvbm8gZW5jb250cmFkbyBjb20gJHtmaWVsZE5hbWV9ID0gJHtzZWFyY2hWYWx1ZX1gKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pXHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgLy8gU2UgZW5jb250cm91IGNvbSBMSUtFLCB1c2EgbyBwcmltZWlybyByZXN1bHRhZG9cclxuICAgICAgICAgICAgICBjb25zdCBmb3VuZEdyYXBoaWMgPSBsaWtlUmVzdWx0cy5mZWF0dXJlc1swXVxyXG4gICAgICAgICAgICAgIGNvbnN0IGFjdHVhbFZhbHVlID0gZm91bmRHcmFwaGljLmF0dHJpYnV0ZXNbZmllbGROYW1lXVxyXG4gICAgICAgICAgICAgIHRoaXMuYXBwbHlGaWx0ZXJBbmRab29tKGxheWVyLCBmb3VuZEdyYXBoaWMsIGZpZWxkTmFtZSwgYWN0dWFsVmFsdWUpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLy8gU2UgZW5jb250cm91LCBhcGxpY2EgZmlsdHJvIGUgem9vbVxyXG4gICAgICAgICAgY29uc3QgZm91bmRHcmFwaGljID0gcmVzdWx0cy5mZWF0dXJlc1swXVxyXG4gICAgICAgICAgY29uc3QgYWN0dWFsVmFsdWUgPSBmb3VuZEdyYXBoaWMuYXR0cmlidXRlc1tmaWVsZE5hbWVdXHJcbiAgICAgICAgICB0aGlzLmFwcGx5RmlsdGVyQW5kWm9vbShsYXllciwgZm91bmRHcmFwaGljLCBmaWVsZE5hbWUsIGFjdHVhbFZhbHVlKVxyXG4gICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJybyBhbyBwZXNxdWlzYXIgZmVhdHVyZXM6JywgZXJyb3IpXHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdEZXRhbGhlcyBkbyBlcnJvOicsIHtcclxuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZSxcclxuICAgICAgICAgICAgZGV0YWlsczogZXJyb3IuZGV0YWlscyxcclxuICAgICAgICAgICAgZmllbGROYW1lOiBmaWVsZE5hbWUsXHJcbiAgICAgICAgICAgIHNlYXJjaFZhbHVlOiBzZWFyY2hWYWx1ZVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLy8gVGVudGEgbW9zdHJhciBpbmZvcm1hw6fDtWVzIG1haXMgw7p0ZWlzXHJcbiAgICAgICAgICBsZXQgZXJyb3JNZXNzYWdlID0gJ0Vycm8gYW8gcGVzcXVpc2FyLiAnXHJcbiAgICAgICAgICBpZiAobGF5ZXIuZmllbGRzICYmIGxheWVyLmZpZWxkcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkTmFtZXMgPSBsYXllci5maWVsZHMubWFwKGYgPT4gZi5uYW1lKS5qb2luKCcsICcpXHJcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZSArPSBgXFxuXFxuQ2FtcG9zIGRpc3BvbsOtdmVpczogJHtmaWVsZE5hbWVzfWBcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVycm9yTWVzc2FnZSArPSBgXFxuXFxuVmVyaWZpcXVlIHNlIGEgY29sdW5hIFwiJHtmaWVsZE5hbWV9XCIgZXhpc3RlIGUgc2UgbyB2YWxvciBcIiR7c2VhcmNoVmFsdWV9XCIgZXN0w6EgY29ycmV0by5gXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGFsZXJ0KGVycm9yTWVzc2FnZSlcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8vIFNlIGEgY2FtYWRhIGrDoSBlc3TDoSBjYXJyZWdhZGEsIGV4ZWN1dGEgZGlyZXRhbWVudGVcclxuICAgICAgaWYgKGxheWVyLmxvYWRlZCkge1xyXG4gICAgICAgIGNoZWNrQW5kUXVlcnkoKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIEFndWFyZGEgYSBjYW1hZGEgY2FycmVnYXJcclxuICAgICAgICBsYXllci53aGVuKCgpID0+IHtcclxuICAgICAgICAgIGNoZWNrQW5kUXVlcnkoKVxyXG4gICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJybyBhbyBjYXJyZWdhciBpbmZvcm1hw6fDtWVzIGRhIGNhbWFkYTonLCBlcnJvcilcclxuICAgICAgICAgIGFsZXJ0KCdFcnJvIGFvIGNhcnJlZ2FyIGluZm9ybWHDp8O1ZXMgZGEgY2FtYWRhLiBWZXJpZmlxdWUgc2UgYSBjYW1hZGEgZXN0w6EgYWNlc3PDrXZlbC4nKVxyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIC8vIEZ1bsOnw6NvIGF1eGlsaWFyIHBhcmEgYXBsaWNhciBmaWx0cm8gZSB6b29tXHJcbiAgYXBwbHlGaWx0ZXJBbmRab29tID0gKGxheWVyLCBncmFwaGljLCBmaWVsZE5hbWUsIGFjdHVhbFZhbHVlKSA9PiB7XHJcbiAgICAvLyBPYnTDqW0gbyB2YWxvciByZWFsIGRvIGF0cmlidXRvIGRvIGdyYXBoaWNcclxuICAgIGNvbnN0IGF0dHJpYnV0ZVZhbHVlID0gZ3JhcGhpYy5hdHRyaWJ1dGVzW2ZpZWxkTmFtZV1cclxuICAgIFxyXG4gICAgLy8gU2UgbyB2YWxvciBuw6NvIGZvaSBwYXNzYWRvLCB1c2EgbyBkbyBhdHJpYnV0b1xyXG4gICAgY29uc3QgdmFsdWVUb0ZpbHRlciA9IGFjdHVhbFZhbHVlICE9PSB1bmRlZmluZWQgPyBhY3R1YWxWYWx1ZSA6IGF0dHJpYnV0ZVZhbHVlXHJcbiAgICBcclxuICAgIC8vIEVzY2FwYSBvIHZhbG9yIHBhcmEgU1FMICh0cmF0YSBzdHJpbmdzLCBuw7ptZXJvcyBlIG51bGwpXHJcbiAgICBsZXQgZGVmaW5pdGlvbkV4cHJlc3Npb25cclxuICAgIGlmICh2YWx1ZVRvRmlsdGVyID09PSBudWxsIHx8IHZhbHVlVG9GaWx0ZXIgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBkZWZpbml0aW9uRXhwcmVzc2lvbiA9IGAke2ZpZWxkTmFtZX0gSVMgTlVMTGBcclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlVG9GaWx0ZXIgPT09ICdudW1iZXInKSB7XHJcbiAgICAgIGRlZmluaXRpb25FeHByZXNzaW9uID0gYCR7ZmllbGROYW1lfSA9ICR7dmFsdWVUb0ZpbHRlcn1gXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyDDiSB1bWEgc3RyaW5nLCBwcmVjaXNhIGVzY2FwYXIgYXNwYXMgc2ltcGxlc1xyXG4gICAgICBjb25zdCBlc2NhcGVkVmFsdWUgPSBTdHJpbmcodmFsdWVUb0ZpbHRlcikucmVwbGFjZSgvJy9nLCBcIicnXCIpXHJcbiAgICAgIGRlZmluaXRpb25FeHByZXNzaW9uID0gYCR7ZmllbGROYW1lfSA9ICcke2VzY2FwZWRWYWx1ZX0nYFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zb2xlLmxvZyhgQXBsaWNhbmRvIGZpbHRybzogJHtmaWVsZE5hbWV9ID0gJHt2YWx1ZVRvRmlsdGVyfWApXHJcbiAgICBjb25zb2xlLmxvZyhgRGVmaW5pdGlvbiBFeHByZXNzaW9uOiAke2RlZmluaXRpb25FeHByZXNzaW9ufWApXHJcblxyXG4gICAgLy8gQXBsaWNhIG8gZmlsdHJvIG5hIGNhbWFkYSB1c2FuZG8gZGVmaW5pdGlvbkV4cHJlc3Npb25cclxuICAgIC8vIElzc28gw6kgbyBtw6l0b2RvIGNvcnJldG8gcGFyYSBmaWx0cmFyIHVtYSBGZWF0dXJlTGF5ZXIgZSBvY3VsdGFyIG91dHJvcyBwb2zDrWdvbm9zXHJcbiAgICBsYXllci5kZWZpbml0aW9uRXhwcmVzc2lvbiA9IGRlZmluaXRpb25FeHByZXNzaW9uXHJcbiAgICBcclxuICAgIC8vIEZvcsOnYSBhIGF0dWFsaXphw6fDo28gaW1lZGlhdGEgZGEgY2FtYWRhIHBhcmEgYXBsaWNhciBvIGZpbHRyb1xyXG4gICAgbGF5ZXIucmVmcmVzaCgpXHJcbiAgICBcclxuICAgIGNvbnNvbGUubG9nKCdGaWx0cm8gYXBsaWNhZG8uIEEgY2FtYWRhIGRldmUgbW9zdHJhciBBUEVOQVMgbyBwb2zDrWdvbm8gc2VsZWNpb25hZG8nKVxyXG4gICAgY29uc29sZS5sb2coJ0RlZmluaXRpb24gRXhwcmVzc2lvbjonLCBkZWZpbml0aW9uRXhwcmVzc2lvbilcclxuICAgIFxyXG4gICAgLy8gQWd1YXJkYSB1bSBwb3VjbyBwYXJhIGdhcmFudGlyIHF1ZSBvIGZpbHRybyBzZWphIHByb2Nlc3NhZG9cclxuICAgIC8vIEFndWFyZGEgcXVlIGEgY2FtYWRhIGVzdGVqYSBjb21wbGV0YW1lbnRlIGNhcnJlZ2FkYSBhbnRlcyBkZSBhcGxpY2FyIG8gZmlsdHJvXHJcbiAgICBpZiAobGF5ZXIubG9hZGVkKSB7XHJcbiAgICAgIC8vIEEgY2FtYWRhIGrDoSBlc3TDoSBjYXJyZWdhZGEsIGFwbGljYSBvIGZpbHRybyBkaXJldGFtZW50ZVxyXG4gICAgICAvLyBBZ3VhcmRhIHVtIHBvdWNvIHBhcmEgZ2FyYW50aXIgcXVlIG8gZmlsdHJvIHNlamEgYXBsaWNhZG9cclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgLy8gVmVyaWZpY2Egc2UgbyBmaWx0cm8gZm9pIGFwbGljYWRvXHJcbiAgICAgICAgaWYgKGxheWVyLmRlZmluaXRpb25FeHByZXNzaW9uID09PSBkZWZpbml0aW9uRXhwcmVzc2lvbikge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ0ZpbHRybyBjb25maXJtYWRvIG5hIGNhbWFkYScpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXBwbHlab29tQWZ0ZXJGaWx0ZXIobGF5ZXIsIGdyYXBoaWMpXHJcbiAgICAgIH0sIDMwMClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIEFndWFyZGEgYSBjYW1hZGEgY2FycmVnYXIgcHJpbWVpcm9cclxuICAgICAgbGF5ZXIud2hlbigoKSA9PiB7XHJcbiAgICAgICAgLy8gQXBsaWNhIG8gZmlsdHJvIG5vdmFtZW50ZSBhcMOzcyBjYXJyZWdhciAoZ2FyYW50aWEpXHJcbiAgICAgICAgbGF5ZXIuZGVmaW5pdGlvbkV4cHJlc3Npb24gPSBkZWZpbml0aW9uRXhwcmVzc2lvblxyXG4gICAgICAgIGxheWVyLnJlZnJlc2goKVxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5hcHBseVpvb21BZnRlckZpbHRlcihsYXllciwgZ3JhcGhpYylcclxuICAgICAgICB9LCAzMDApXHJcbiAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm8gYW8gYWd1YXJkYXIgY2FtYWRhOicsIGVycm9yKVxyXG4gICAgICAgIC8vIE1lc21vIGFzc2ltIHRlbnRhIGFwbGljYXIgbyB6b29tXHJcbiAgICAgICAgdGhpcy5hcHBseVpvb21BZnRlckZpbHRlcihsYXllciwgZ3JhcGhpYylcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIEZ1bsOnw6NvIGF1eGlsaWFyIHBhcmEgYXBsaWNhciB6b29tIGFww7NzIG8gZmlsdHJvXHJcbiAgYXBwbHlab29tQWZ0ZXJGaWx0ZXIgPSAobGF5ZXIsIGdyYXBoaWMpID0+IHtcclxuICAgIC8vIEFndWFyZGEgdW0gcG91Y28gcGFyYSBnYXJhbnRpciBxdWUgbyBmaWx0cm8gc2VqYSBwcm9jZXNzYWRvIHBlbGEgY2FtYWRhXHJcbiAgICAvLyBPIGRlZmluaXRpb25FeHByZXNzaW9uIHByZWNpc2EgZGUgdGVtcG8gcGFyYSBzZXIgcHJvY2Vzc2Fkb1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIC8vIETDoSB6b29tIG5vIHBvbMOtZ29ubyBlbmNvbnRyYWRvIGNvbSBwYWRkaW5nIHBhcmEgbsOjbyBjb3J0YXJcclxuICAgICAgaWYgKGdyYXBoaWMuZ2VvbWV0cnkgJiYgdGhpcy5zdGF0ZS5qaW11TWFwVmlldyAmJiB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcpIHtcclxuICAgICAgICAvLyBVc2EgZ29UbyBjb20gdGFyZ2V0IGUgcGFkZGluZyBlbSBwaXhlbHMgcGFyYSBjb250cm9sYXIgbWVsaG9yIG8gem9vbVxyXG4gICAgICAgIC8vIFBhZGRpbmcgZGUgNTAgcGl4ZWxzIGVtIGNhZGEgbGFkbyBwYXJhIG7Do28gY29ydGFyIG8gcG9sw61nb25vXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3LmdvVG8oe1xyXG4gICAgICAgICAgdGFyZ2V0OiBncmFwaGljLmdlb21ldHJ5LFxyXG4gICAgICAgICAgcGFkZGluZzoge1xyXG4gICAgICAgICAgICBsZWZ0OiA1MCxcclxuICAgICAgICAgICAgcmlnaHQ6IDUwLFxyXG4gICAgICAgICAgICB0b3A6IDUwLFxyXG4gICAgICAgICAgICBib3R0b206IDUwXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgZHVyYXRpb246IDUwMFxyXG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ1pvb20gYXBsaWNhZG8gbm8gcG9sw61nb25vIGZpbHRyYWRvIGNvbSBwYWRkaW5nJylcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KVxyXG4gICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJybyBhbyBkYXIgem9vbTonLCBlcnJvcilcclxuICAgICAgICAgIC8vIEZhbGxiYWNrOiB0ZW50YSB6b29tIGNvbSBleHRlbnQgY2FsY3VsYWRvIG1hbnVhbG1lbnRlXHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBleHRlbnQgPSBncmFwaGljLmdlb21ldHJ5LmV4dGVudFxyXG4gICAgICAgICAgICAvLyBBZGljaW9uYSAxMCUgZGUgcGFkZGluZyBjYWxjdWxhZG8gYSBwYXJ0aXIgZG8gdGFtYW5obyBkbyBleHRlbnRcclxuICAgICAgICAgICAgY29uc3QgcGFkZGluZ0ZhY3RvciA9IDAuMVxyXG4gICAgICAgICAgICBjb25zdCB3aWR0aCA9IGV4dGVudC53aWR0aFxyXG4gICAgICAgICAgICBjb25zdCBoZWlnaHQgPSBleHRlbnQuaGVpZ2h0XHJcbiAgICAgICAgICAgIGNvbnN0IHBhZGRlZEV4dGVudCA9IGV4dGVudC5leHBhbmQod2lkdGggKiBwYWRkaW5nRmFjdG9yLCBoZWlnaHQgKiBwYWRkaW5nRmFjdG9yKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3LmdvVG8ocGFkZGVkRXh0ZW50LCB7XHJcbiAgICAgICAgICAgICAgZHVyYXRpb246IDUwMFxyXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnWm9vbSBhcGxpY2FkbyB1c2FuZG8gZXh0ZW50IGNvbSBwYWRkaW5nIGNhbGN1bGFkbycpXHJcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pXHJcbiAgICAgICAgICAgIH0pLmNhdGNoKChmYWxsYmFja0Vycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJybyBubyB6b29tIGRlIGZhbGxiYWNrOicsIGZhbGxiYWNrRXJyb3IpXHJcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9IGNhdGNoIChjYWxjRXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJybyBhbyBjYWxjdWxhciBleHRlbnQ6JywgY2FsY0Vycm9yKVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KVxyXG4gICAgICB9XHJcbiAgICB9LCA1MDApXHJcbiAgfVxyXG5cclxuICAvLyBGdW7Dp8OjbyBwYXJhIGxpbXBhciBvIGZpbHRyb1xyXG4gIGhhbmRsZUNsZWFyRmlsdGVyID0gKCkgPT4ge1xyXG4gICAgaWYgKHRoaXMuc3RhdGUuZmVhdHVyZUxheWVyKSB7XHJcbiAgICAgIC8vIFJlbW92ZSBvIGZpbHRybyBkZWZpbmluZG8gZGVmaW5pdGlvbkV4cHJlc3Npb24gY29tbyB2YXppbyBvdSBudWxsXHJcbiAgICAgIHRoaXMuc3RhdGUuZmVhdHVyZUxheWVyLmRlZmluaXRpb25FeHByZXNzaW9uID0gbnVsbFxyXG4gICAgICB0aGlzLnN0YXRlLmZlYXR1cmVMYXllci5yZWZyZXNoKClcclxuICAgICAgY29uc29sZS5sb2coJ0ZpbHRybyByZW1vdmlkbyAtIHRvZG9zIG9zIGFsZXJ0YXMgZGV2ZW0gYXBhcmVjZXIgbm92YW1lbnRlJylcclxuICAgICAgXHJcbiAgICAgIC8vIEFndWFyZGEgdW0gcG91Y28gcGFyYSBnYXJhbnRpciBxdWUgbyBmaWx0cm8gc2VqYSByZW1vdmlkb1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAvLyBWZXJpZmljYSBzZSBvIGZpbHRybyBmb2kgcmVtb3ZpZG9cclxuICAgICAgICBpZiAoIXRoaXMuc3RhdGUuZmVhdHVyZUxheWVyLmRlZmluaXRpb25FeHByZXNzaW9uIHx8IHRoaXMuc3RhdGUuZmVhdHVyZUxheWVyLmRlZmluaXRpb25FeHByZXNzaW9uID09PSAnJykge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ0ZpbHRybyBjb25maXJtYWRvIGNvbW8gcmVtb3ZpZG8nKVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBSZXN0YXVyYSBhIHZpc3VhbGl6YcOnw6NvIGluaWNpYWwgZG8gbWFwYVxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmppbXVNYXBWaWV3ICYmIHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldykge1xyXG4gICAgICAgICAgaWYgKHRoaXMuc3RhdGUuaW5pdGlhbEV4dGVudCkge1xyXG4gICAgICAgICAgICAvLyBSZXN0YXVyYSBhIGV4dGVuc8OjbyBpbmljaWFsIHNhbHZhXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldy5nb1RvKHRoaXMuc3RhdGUuaW5pdGlhbEV4dGVudCwge1xyXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiA1MDBcclxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1Zpc3VhbGl6YcOnw6NvIGluaWNpYWwgcmVzdGF1cmFkYScpXHJcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm8gYW8gcmVzdGF1cmFyIHZpc3VhbGl6YcOnw6NvIGluaWNpYWw6JywgZXJyb3IpXHJcbiAgICAgICAgICAgICAgLy8gU2UgZmFsaGFyLCB0ZW50YSBmYXplciB6b29tIHBhcmEgYSBjYW1hZGEgY29tcGxldGFcclxuICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5mZWF0dXJlTGF5ZXIgJiYgdGhpcy5zdGF0ZS5mZWF0dXJlTGF5ZXIuZnVsbEV4dGVudCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3LmdvVG8odGhpcy5zdGF0ZS5mZWF0dXJlTGF5ZXIuZnVsbEV4dGVudCwge1xyXG4gICAgICAgICAgICAgICAgICBkdXJhdGlvbjogNTAwXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIFNlIG7Do28gdGl2ZXIgZXh0ZW5zw6NvIGluaWNpYWwgc2FsdmEsIHRlbnRhIGZhemVyIHpvb20gcGFyYSBhIGNhbWFkYSBjb21wbGV0YVxyXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5mZWF0dXJlTGF5ZXIgJiYgdGhpcy5zdGF0ZS5mZWF0dXJlTGF5ZXIuZnVsbEV4dGVudCkge1xyXG4gICAgICAgICAgICAgIHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldy5nb1RvKHRoaXMuc3RhdGUuZmVhdHVyZUxheWVyLmZ1bGxFeHRlbnQsIHtcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA1MDBcclxuICAgICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdab29tIHBhcmEgY2FtYWRhIGNvbXBsZXRhIGFwbGljYWRvJylcclxuICAgICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm8gYW8gZmF6ZXIgem9vbSBwYXJhIGNhbWFkYSBjb21wbGV0YTonLCBlcnJvcilcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9LCAzMDApXHJcbiAgICAgIFxyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBpZGVhU2VhcmNoSW5wdXQ6ICcnXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBGdW7Dp8OjbyBwYXJhIGdlcmFyIHJlbGF0w7NyaW8gdXNhbmRvIGEgZmVycmFtZW50YSBkZSBnZW9wcm9jZXNzYW1lbnRvXHJcbiAgaGFuZGxlR2VuZXJhdGVSZXBvcnQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAvLyBEZWNsYXJhIHZhcmnDoXZlaXMgbm8gZXNjb3BvIGRhIGZ1bsOnw6NvIHBhcmEgcXVlIGVzdGVqYW0gYWNlc3PDrXZlaXMgbm8gY2F0Y2hcclxuICAgIGxldCBpZGVhTnVtYmVyID0gJydcclxuICAgIGxldCBwYXJhbU5hbWUgPSBudWxsXHJcbiAgICBsZXQgZXhlY3V0ZVVybCA9ICcnXHJcbiAgICBsZXQgdG9rZW4gPSBudWxsXHJcbiAgICBcclxuICAgIC8vIFZhbGlkYcOnw7VlcyBpbmljaWFpc1xyXG4gICAgaWYgKHRoaXMuc3RhdGUuaWRlYVNlYXJjaElucHV0ID09PSAnJyB8fCB0aGlzLnN0YXRlLmlkZWFTZWFyY2hJbnB1dC50cmltKCkgPT09ICcnKSB7XHJcbiAgICAgIGFsZXJ0KCdQb3IgZmF2b3IsIGRpZ2l0ZSB1bSBuw7ptZXJvIGRlIGlkZWEgcGFyYSBnZXJhciBvIHJlbGF0w7NyaW8uJylcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgaWRlYU51bWJlciA9IHRoaXMuc3RhdGUuaWRlYVNlYXJjaElucHV0LnRyaW0oKVxyXG4gICAgXHJcbiAgICAvLyBWYWxpZGHDp8OjbyBkbyBmb3JtYXRvIGRvIG7Dum1lcm8gZGUgaWRlYVxyXG4gICAgLy8gRm9ybWF0byBlc3BlcmFkbzogWFhYLlguWFhYWFhYL1lZWVkgKGV4OiAwMDMuOS40MjczODQvMjAyNSlcclxuICAgIGNvbnN0IGlkZWFQYXR0ZXJuID0gL15cXGR7MSwzfVxcLlxcZHsxLDJ9XFwuXFxkezEsNn1cXC9cXGR7NH0kL1xyXG4gICAgaWYgKCFpZGVhUGF0dGVybi50ZXN0KGlkZWFOdW1iZXIpKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybignRm9ybWF0byBkbyBuw7ptZXJvIGRlIGlkZWEgcG9kZSBlc3RhciBpbmNvcnJldG86JywgaWRlYU51bWJlcilcclxuICAgICAgY29uc29sZS53YXJuKCdGb3JtYXRvIGVzcGVyYWRvOiBYWFguWC5YWFhYWFgvWVlZWSAoZXg6IDAwMy45LjQyNzM4NC8yMDI1KScpXHJcbiAgICAgIC8vIE7Do28gYmxvcXVlaWEsIGFwZW5hcyBhdmlzYSBubyBjb25zb2xlXHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIFJlbW92ZSBlc3Bhw6dvcyBleHRyYXMgZSBjYXJhY3RlcmVzIGludmlzw612ZWlzXHJcbiAgICBpZGVhTnVtYmVyID0gaWRlYU51bWJlci5yZXBsYWNlKC9cXHMrL2csICcnKS50cmltKClcclxuICAgIFxyXG4gICAgLy8gVmFsaWRhw6fDo28gZGUgY29tcHJpbWVudG8gbcOtbmltb1xyXG4gICAgaWYgKGlkZWFOdW1iZXIubGVuZ3RoIDwgMTApIHtcclxuICAgICAgYWxlcnQoJ08gbsO6bWVybyBkZSBpZGVhIHBhcmVjZSBlc3RhciBpbmNvbXBsZXRvLiBWZXJpZmlxdWUgbyBmb3JtYXRvOiBYWFguWC5YWFhYWFgvWVlZWScpXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zb2xlLmxvZygnPT09IFZBTElEQcOHw4NPIERPIFZBTE9SID09PScpXHJcbiAgICBjb25zb2xlLmxvZygnVmFsb3Igb3JpZ2luYWw6JywgdGhpcy5zdGF0ZS5pZGVhU2VhcmNoSW5wdXQpXHJcbiAgICBjb25zb2xlLmxvZygnVmFsb3IgcHJvY2Vzc2FkbzonLCBpZGVhTnVtYmVyKVxyXG4gICAgY29uc29sZS5sb2coJ0NvbXByaW1lbnRvOicsIGlkZWFOdW1iZXIubGVuZ3RoKVxyXG4gICAgY29uc29sZS5sb2coJ0Zvcm1hdG8gdsOhbGlkbzonLCBpZGVhUGF0dGVybi50ZXN0KGlkZWFOdW1iZXIpKVxyXG4gICAgXHJcbiAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSB9KVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdJbmljaWFuZG8gZ2VyYcOnw6NvIGRlIHJlbGF0w7NyaW8gcGFyYSBpZGVhOicsIGlkZWFOdW1iZXIpXHJcbiAgICAgIFxyXG4gICAgICAvLyBDYXJyZWdhIElkZW50aXR5TWFuYWdlciBwYXJhIG9idGVyIHRva2VuIGRlIGF1dGVudGljYcOnw6NvXHJcbiAgICAgIGNvbnNvbGUubG9nKCdDYXJyZWdhbmRvIElkZW50aXR5TWFuYWdlciBwYXJhIGF1dGVudGljYcOnw6NvLi4uJylcclxuICAgICAgY29uc3QgaWRlbnRpdHlNb2R1bGVzID0gYXdhaXQgbG9hZEFyY0dJU0pTQVBJTW9kdWxlcyhbXHJcbiAgICAgICAgJ2VzcmkvaWRlbnRpdHkvSWRlbnRpdHlNYW5hZ2VyJ1xyXG4gICAgICBdKVxyXG4gICAgICBjb25zdCBbSWRlbnRpdHlNYW5hZ2VyXSA9IGlkZW50aXR5TW9kdWxlc1xyXG4gICAgICBcclxuICAgICAgLy8gT2J0w6ltIG8gdG9rZW4gcGFyYSBhIFVSTCBkbyBzZXJ2acOnbyAoasOhIGRlY2xhcmFkbyBubyBpbsOtY2lvIGRhIGZ1bsOnw6NvKVxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGNyZWRlbnRpYWwgPSBJZGVudGl0eU1hbmFnZXIuZmluZENyZWRlbnRpYWwodGhpcy5HUF9TRVJWSUNFX1VSTClcclxuICAgICAgICBpZiAoY3JlZGVudGlhbCAmJiBjcmVkZW50aWFsLnRva2VuKSB7XHJcbiAgICAgICAgICB0b2tlbiA9IGNyZWRlbnRpYWwudG9rZW5cclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdUb2tlbiBlbmNvbnRyYWRvIHZpYSBJZGVudGl0eU1hbmFnZXInKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAvLyBUZW50YSBnZXJhciB0b2tlbiBhdXRvbWF0aWNhbWVudGVcclxuICAgICAgICAgIGNvbnN0IHNlcnZlckluZm8gPSBJZGVudGl0eU1hbmFnZXIuZmluZFNlcnZlckluZm8odGhpcy5HUF9TRVJWSUNFX1VSTClcclxuICAgICAgICAgIGlmIChzZXJ2ZXJJbmZvKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdPYnRlbmRvIHRva2VuIGF1dG9tYXRpY2FtZW50ZS4uLicpXHJcbiAgICAgICAgICAgIGF3YWl0IElkZW50aXR5TWFuYWdlci5jaGVja1NpZ25JblN0YXR1cyh0aGlzLkdQX1NFUlZJQ0VfVVJMKVxyXG4gICAgICAgICAgICBjb25zdCB1cGRhdGVkQ3JlZGVudGlhbCA9IElkZW50aXR5TWFuYWdlci5maW5kQ3JlZGVudGlhbCh0aGlzLkdQX1NFUlZJQ0VfVVJMKVxyXG4gICAgICAgICAgICBpZiAodXBkYXRlZENyZWRlbnRpYWwgJiYgdXBkYXRlZENyZWRlbnRpYWwudG9rZW4pIHtcclxuICAgICAgICAgICAgICB0b2tlbiA9IHVwZGF0ZWRDcmVkZW50aWFsLnRva2VuXHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1Rva2VuIG9idGlkbyBhdXRvbWF0aWNhbWVudGUnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoICh0b2tlbkVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKCdFcnJvIGFvIG9idGVyIHRva2VuLCB0ZW50YW5kbyBzZW0gYXV0ZW50aWNhw6fDo286JywgdG9rZW5FcnJvcilcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLy8gRnVuw6fDo28gYXV4aWxpYXIgcGFyYSBhZGljaW9uYXIgdG9rZW4gw6BzIFVSTHNcclxuICAgICAgY29uc3QgYWRkVG9rZW5Ub1VybCA9ICh1cmwpID0+IHtcclxuICAgICAgICBpZiAoIXRva2VuKSB7XHJcbiAgICAgICAgICByZXR1cm4gdXJsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCB1cmxPYmogPSBuZXcgVVJMKHVybClcclxuICAgICAgICAgIHVybE9iai5zZWFyY2hQYXJhbXMuc2V0KCd0b2tlbicsIHRva2VuKVxyXG4gICAgICAgICAgcmV0dXJuIHVybE9iai50b1N0cmluZygpXHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgLy8gU2UgYSBVUkwgbsOjbyBmb3IgYWJzb2x1dGEsIHRyYXRhIGNvbW8gc3RyaW5nXHJcbiAgICAgICAgICBjb25zdCBzZXBhcmF0b3IgPSB1cmwuaW5jbHVkZXMoJz8nKSA/ICcmJyA6ICc/J1xyXG4gICAgICAgICAgcmV0dXJuIGAke3VybH0ke3NlcGFyYXRvcn10b2tlbj0ke2VuY29kZVVSSUNvbXBvbmVudCh0b2tlbil9YFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLy8gUHJpbWVpcm8sIHZhbW9zIG9idGVyIGluZm9ybWHDp8O1ZXMgc29icmUgYSB0YXNrIGVzcGVjw61maWNhIHBhcmEgZGVzY29icmlyIG9zIHBhcsOibWV0cm9zXHJcbiAgICAgIGNvbnNvbGUubG9nKCdPYnRlbmRvIGluZm9ybWHDp8O1ZXMgZGEgdGFzayBlc3BlY8OtZmljYS4uLicpXHJcbiAgICAgIGNvbnN0IHRhc2tOYW1lRW5jb2RlZCA9IGVuY29kZVVSSUNvbXBvbmVudCh0aGlzLkdQX1RBU0tfTkFNRSlcclxuICAgICAgY29uc3QgaW5mb1VybCA9IGFkZFRva2VuVG9VcmwoYCR7dGhpcy5HUF9TRVJWSUNFX1VSTH0vJHt0YXNrTmFtZUVuY29kZWR9P2Y9anNvbmApXHJcbiAgICAgIGNvbnNvbGUubG9nKCdVUkwgZGUgaW5mb3JtYcOnw7VlcyBkYSB0YXNrOicsIGluZm9VcmwpXHJcbiAgICAgIFxyXG4gICAgICAvLyBUZW50YSBvYnRlciBpbmZvcm1hw6fDtWVzIGRhIHRhc2sgZXNwZWPDrWZpY2EgcHJpbWVpcm9cclxuICAgICAgbGV0IGdwSW5mb1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHRhc2tJbmZvUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChpbmZvVXJsKVxyXG4gICAgICAgIGlmICh0YXNrSW5mb1Jlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICBncEluZm8gPSBhd2FpdCB0YXNrSW5mb1Jlc3BvbnNlLmpzb24oKVxyXG4gICAgICAgICAgY29uc29sZS5sb2coJ0luZm9ybWHDp8O1ZXMgZGEgdGFzayBlc3BlY8OtZmljYSBvYnRpZGFzIGNvbSBzdWNlc3NvJylcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdJbmZvcm1hw6fDtWVzIGNvbXBsZXRhcyBkYSB0YXNrOicsIEpTT04uc3RyaW5naWZ5KGdwSW5mbywgbnVsbCwgMikpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vIFNlIGZhbGhhciwgdGVudGEgZGEgR1AgZ2VyYWxcclxuICAgICAgICAgIGNvbnNvbGUud2FybignTsOjbyBmb2kgcG9zc8OtdmVsIG9idGVyIGluZm9ybWHDp8O1ZXMgZGEgdGFzaywgdGVudGFuZG8gZGEgR1AgZ2VyYWwuLi4nKVxyXG4gICAgICAgICAgY29uc3QgZ3BJbmZvVXJsID0gYWRkVG9rZW5Ub1VybChgJHt0aGlzLkdQX1NFUlZJQ0VfVVJMfT9mPWpzb25gKVxyXG4gICAgICAgICAgY29uc3QgZ3BJbmZvUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChncEluZm9VcmwpXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGlmICghZ3BJbmZvUmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvIGFvIG9idGVyIGluZm9ybWHDp8O1ZXM6ICR7dGFza0luZm9SZXNwb25zZS5zdGF0dXN9ICR7dGFza0luZm9SZXNwb25zZS5zdGF0dXNUZXh0fWApXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGdwSW5mbyA9IGF3YWl0IGdwSW5mb1Jlc3BvbnNlLmpzb24oKVxyXG4gICAgICAgICAgY29uc29sZS5sb2coJ1VzYW5kbyBpbmZvcm1hw6fDtWVzIGRhIEdQIGdlcmFsJylcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdJbmZvcm1hw6fDtWVzIGNvbXBsZXRhcyBkYSBHUDonLCBKU09OLnN0cmluZ2lmeShncEluZm8sIG51bGwsIDIpKVxyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoaW5mb0Vycm9yKSB7XHJcbiAgICAgICAgLy8gU2UgZmFsaGFyLCB0ZW50YSBkYSBHUCBnZXJhbFxyXG4gICAgICAgIGNvbnNvbGUud2FybignRXJybyBhbyBvYnRlciBpbmZvcm1hw6fDtWVzIGRhIHRhc2ssIHRlbnRhbmRvIGRhIEdQIGdlcmFsLi4uJywgaW5mb0Vycm9yKVxyXG4gICAgICAgIGNvbnN0IGdwSW5mb1VybCA9IGFkZFRva2VuVG9VcmwoYCR7dGhpcy5HUF9TRVJWSUNFX1VSTH0/Zj1qc29uYClcclxuICAgICAgICBjb25zdCBncEluZm9SZXNwb25zZSA9IGF3YWl0IGZldGNoKGdwSW5mb1VybClcclxuICAgICAgICBncEluZm8gPSBhd2FpdCBncEluZm9SZXNwb25zZS5qc29uKClcclxuICAgICAgICBjb25zb2xlLmxvZygnVXNhbmRvIGluZm9ybWHDp8O1ZXMgZGEgR1AgZ2VyYWwgKGZhbGxiYWNrKScpXHJcbiAgICAgICAgY29uc29sZS5sb2coJ0luZm9ybWHDp8O1ZXMgY29tcGxldGFzIGRhIEdQOicsIEpTT04uc3RyaW5naWZ5KGdwSW5mbywgbnVsbCwgMikpXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8vIERlc2NvYnJlIHF1YWwgw6kgbyBwYXLDom1ldHJvIGRlIGVudHJhZGEgZGEgR1BcclxuICAgICAgLy8gSU1QT1JUQU5URTogRGV2ZW1vcyB1c2FyIGV4YXRhbWVudGUgbyBub21lIGRvIHBhcsOibWV0cm8gcXVlIGEgR1AgZXNwZXJhXHJcbiAgICAgIC8vIE8gd2lkZ2V0IHJlY2ViZSBvIHZhbG9yIGRhIGNvbHVuYSBcImlkZWFcIiwgbWFzIGVudmlhIGNvbSBvIG5vbWUgcXVlIGEgR1AgZXNwZXJhXHJcbiAgICAgIGxldCBwYXJhbU5hbWUgPSBudWxsXHJcbiAgICAgIGxldCBwYXJhbUluZm8gPSBudWxsXHJcbiAgICAgIFxyXG4gICAgICBpZiAoZ3BJbmZvLnBhcmFtZXRlcnMgJiYgQXJyYXkuaXNBcnJheShncEluZm8ucGFyYW1ldGVycykpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnPT09IFBBUsOCTUVUUk9TIERJU1BPTsONVkVJUyBOQSBHUCA9PT0nKVxyXG4gICAgICAgIGNvbnN0IGFsbFBhcmFtcyA9IGdwSW5mby5wYXJhbWV0ZXJzLm1hcChwID0+ICh7XHJcbiAgICAgICAgICBuYW1lOiBwLm5hbWUsXHJcbiAgICAgICAgICBkaXNwbGF5TmFtZTogcC5kaXNwbGF5TmFtZSB8fCBwLm5hbWUsXHJcbiAgICAgICAgICBkYXRhVHlwZTogcC5kYXRhVHlwZSxcclxuICAgICAgICAgIGRpcmVjdGlvbjogcC5kaXJlY3Rpb24sXHJcbiAgICAgICAgICBwYXJhbWV0ZXJUeXBlOiBwLnBhcmFtZXRlclR5cGUsXHJcbiAgICAgICAgICByZXF1aXJlZDogcC5wYXJhbWV0ZXJUeXBlID09PSAnZXNyaUdQUGFyYW1ldGVyVHlwZVJlcXVpcmVkJyB8fCBwLnJlcXVpcmVkID09PSB0cnVlXHJcbiAgICAgICAgfSkpXHJcbiAgICAgICAgY29uc29sZS5sb2coJ1RvZG9zIG9zIHBhcsOibWV0cm9zOicsIEpTT04uc3RyaW5naWZ5KGFsbFBhcmFtcywgbnVsbCwgMikpXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gUHJvY3VyYSBwZWxvIHByaW1laXJvIHBhcsOibWV0cm8gZGUgZW50cmFkYSAoaW5wdXQpXHJcbiAgICAgICAgY29uc3QgaW5wdXRQYXJhbXMgPSBncEluZm8ucGFyYW1ldGVycy5maWx0ZXIocCA9PiBcclxuICAgICAgICAgIChwLmRpcmVjdGlvbiA9PT0gJ2VzcmlHUFBhcmFtZXRlckRpcmVjdGlvbklucHV0JyB8fCBwLmRpcmVjdGlvbiA9PT0gJ0dQUGFyYW1ldGVyRGlyZWN0aW9uSW5wdXQnKSAmJlxyXG4gICAgICAgICAgcC5uYW1lXHJcbiAgICAgICAgKVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdQYXLDom1ldHJvcyBkZSBlbnRyYWRhIGVuY29udHJhZG9zOicsIGlucHV0UGFyYW1zLm1hcChwID0+ICh7XHJcbiAgICAgICAgICBuYW1lOiBwLm5hbWUsXHJcbiAgICAgICAgICBkaXNwbGF5TmFtZTogcC5kaXNwbGF5TmFtZSB8fCBwLm5hbWUsXHJcbiAgICAgICAgICBkYXRhVHlwZTogcC5kYXRhVHlwZSxcclxuICAgICAgICAgIHJlcXVpcmVkOiBwLnBhcmFtZXRlclR5cGUgPT09ICdlc3JpR1BQYXJhbWV0ZXJUeXBlUmVxdWlyZWQnIHx8IHAucmVxdWlyZWQgPT09IHRydWVcclxuICAgICAgICB9KSkpXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGlucHV0UGFyYW1zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIC8vIFVzYSBvIHByaW1laXJvIHBhcsOibWV0cm8gZGUgZW50cmFkYSAocXVlIMOpIG8gcXVlIGEgR1AgZXNwZXJhKVxyXG4gICAgICAgICAgcGFyYW1JbmZvID0gaW5wdXRQYXJhbXNbMF1cclxuICAgICAgICAgIHBhcmFtTmFtZSA9IHBhcmFtSW5mby5uYW1lIC8vIFVzYSBleGF0YW1lbnRlIG8gbm9tZSBxdWUgYSBHUCBlc3BlcmEgKHBvZGUgdGVyIGNhcmFjdGVyZXMgZXNwZWNpYWlzKVxyXG4gICAgICAgICAgY29uc29sZS5sb2coJz09PSBQQVLDgk1FVFJPIFNFTEVDSU9OQURPID09PScpXHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnTm9tZSB0w6ljbmljbyBkbyBwYXLDom1ldHJvIChzZXLDoSB1c2FkbyBubyByZXF1ZXN0KTonLCBwYXJhbU5hbWUpXHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnTm9tZSBkZSBleGliacOnw6NvIChsYWJlbCBuYSBpbnRlcmZhY2UpOicsIHBhcmFtSW5mby5kaXNwbGF5TmFtZSB8fCBwYXJhbUluZm8ubmFtZSlcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdEZXRhbGhlcyBjb21wbGV0b3M6Jywge1xyXG4gICAgICAgICAgICBuYW1lOiBwYXJhbUluZm8ubmFtZSxcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6IHBhcmFtSW5mby5kaXNwbGF5TmFtZSB8fCBwYXJhbUluZm8ubmFtZSxcclxuICAgICAgICAgICAgZGF0YVR5cGU6IHBhcmFtSW5mby5kYXRhVHlwZSxcclxuICAgICAgICAgICAgZGlyZWN0aW9uOiBwYXJhbUluZm8uZGlyZWN0aW9uLFxyXG4gICAgICAgICAgICByZXF1aXJlZDogcGFyYW1JbmZvLnBhcmFtZXRlclR5cGUgPT09ICdlc3JpR1BQYXJhbWV0ZXJUeXBlUmVxdWlyZWQnIHx8IHBhcmFtSW5mby5yZXF1aXJlZCA9PT0gdHJ1ZVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignTmVuaHVtIHBhcsOibWV0cm8gZGUgZW50cmFkYSBlbmNvbnRyYWRvIG5hIEdQIScpXHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ07Do28gZm9pIHBvc3PDrXZlbCBpZGVudGlmaWNhciBvIHBhcsOibWV0cm8gZGUgZW50cmFkYSBkYSBmZXJyYW1lbnRhIGRlIGdlb3Byb2Nlc3NhbWVudG8uJylcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignTsOjbyBmb2kgcG9zc8OtdmVsIG9idGVyIHBhcsOibWV0cm9zIGRhIEdQIScpXHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOw6NvIGZvaSBwb3Nzw612ZWwgb2J0ZXIgaW5mb3JtYcOnw7VlcyBkb3MgcGFyw6JtZXRyb3MgZGEgZmVycmFtZW50YSBkZSBnZW9wcm9jZXNzYW1lbnRvLicpXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8vIENvbmZpcm1hIHF1YWwgcGFyw6JtZXRybyBzZXLDoSB1c2FkbyAoZGV2ZSBzZXIgZXhhdGFtZW50ZSBvIHF1ZSBhIEdQIGVzcGVyYSlcclxuICAgICAgY29uc29sZS5sb2coJz09PSBQQVLDgk1FVFJPIFBBUkEgRU5WSUFSIMOAIEdQID09PScpXHJcbiAgICAgIGNvbnNvbGUubG9nKCdOb21lIGRvIHBhcsOibWV0cm8gKGV4YXRhbWVudGUgY29tbyBhIEdQIGVzcGVyYSk6JywgcGFyYW1OYW1lKVxyXG4gICAgICBjb25zb2xlLmxvZygnVmFsb3IgcXVlIHNlcsOhIGVudmlhZG8gKGRhIGNvbHVuYSBpZGVhIGRvIHdpZGdldCk6JywgaWRlYU51bWJlcilcclxuICAgICAgY29uc29sZS5sb2coJ0RldGFsaGVzIGNvbXBsZXRvcyBkbyBwYXLDom1ldHJvOicsIHBhcmFtSW5mbylcclxuICAgICAgXHJcbiAgICAgIC8vIFZlcmlmaWNhIG8gdGlwbyBkbyBwYXLDom1ldHJvIHBhcmEgZm9ybWF0YXIgY29ycmV0YW1lbnRlXHJcbiAgICAgIGxldCBwYXJhbVZhbHVlID0gaWRlYU51bWJlclxyXG4gICAgICBpZiAocGFyYW1JbmZvKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1RpcG8gZGUgZGFkbyBkbyBwYXLDom1ldHJvOicsIHBhcmFtSW5mby5kYXRhVHlwZSlcclxuICAgICAgICBjb25zb2xlLmxvZygnVGlwbyBkZSBwYXLDom1ldHJvOicsIHBhcmFtSW5mby5wYXJhbWV0ZXJUeXBlKVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFNlIG8gcGFyw6JtZXRybyBmb3IgZG8gdGlwbyBHUFN0cmluZyBvdSBzaW1pbGFyLCBlbnZpYSBjb21vIHN0cmluZ1xyXG4gICAgICAgIC8vIFNlIGZvciBVUkwgb3Ugb3V0cm8gdGlwbyBjb21wbGV4bywgcG9kZSBwcmVjaXNhciBkZSBmb3JtYXRvIGRpZmVyZW50ZVxyXG4gICAgICAgIGlmIChwYXJhbUluZm8uZGF0YVR5cGUgPT09ICdHUFN0cmluZycgfHwgcGFyYW1JbmZvLmRhdGFUeXBlID09PSAnZXNyaUdQVHlwZVN0cmluZycpIHtcclxuICAgICAgICAgIHBhcmFtVmFsdWUgPSBTdHJpbmcoaWRlYU51bWJlcilcclxuICAgICAgICB9IGVsc2UgaWYgKHBhcmFtSW5mby5kYXRhVHlwZSA9PT0gJ0dQRG91YmxlJyB8fCBwYXJhbUluZm8uZGF0YVR5cGUgPT09ICdlc3JpR1BUeXBlRG91YmxlJyB8fCBcclxuICAgICAgICAgICAgICAgICAgIHBhcmFtSW5mby5kYXRhVHlwZSA9PT0gJ0dQTG9uZycgfHwgcGFyYW1JbmZvLmRhdGFUeXBlID09PSAnZXNyaUdQVHlwZUxvbmcnKSB7XHJcbiAgICAgICAgICAvLyBTZSBmb3IgbnVtw6lyaWNvLCB0ZW50YSBjb252ZXJ0ZXJcclxuICAgICAgICAgIGNvbnN0IG51bVZhbHVlID0gcGFyc2VGbG9hdChpZGVhTnVtYmVyKVxyXG4gICAgICAgICAgaWYgKCFpc05hTihudW1WYWx1ZSkpIHtcclxuICAgICAgICAgICAgcGFyYW1WYWx1ZSA9IG51bVZhbHVlXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvLyBQcmVwYXJhIG9zIHBhcsOibWV0cm9zIHBhcmEgYSBleGVjdcOnw6NvXHJcbiAgICAgIC8vIElNUE9SVEFOVEU6IGY9anNvbiB2YWkgbmEgVVJMLCBuw6NvIG5vIGJvZHlcclxuICAgICAgLy8gQXBlbmFzIG9zIHBhcsOibWV0cm9zIGRhIEdQIHbDo28gbm8gYm9keVxyXG4gICAgICBjb25zdCBwYXJhbXMgPSB7XHJcbiAgICAgICAgW3BhcmFtTmFtZV06IHBhcmFtVmFsdWVcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgY29uc29sZS5sb2coJz09PSBQQVLDgk1FVFJPUyBQQVJBIEVOVklBUiA9PT0nKVxyXG4gICAgICBjb25zb2xlLmxvZygnUGFyw6JtZXRyb3MgcHJlcGFyYWRvcyAocGFyYSBvIGJvZHkpOicsIHBhcmFtcylcclxuICAgICAgY29uc29sZS5sb2coJ1ZhbG9yIGRvIHBhcsOibWV0cm86JywgcGFyYW1WYWx1ZSwgJ1RpcG86JywgdHlwZW9mIHBhcmFtVmFsdWUpXHJcbiAgICAgIGNvbnNvbGUubG9nKCdOb21lIGRvIHBhcsOibWV0cm8gKGV4YXRvKTonLCBwYXJhbU5hbWUpXHJcbiAgICAgIGNvbnNvbGUubG9nKCdOb21lIGRvIHBhcsOibWV0cm8gKEpTT04pOicsIEpTT04uc3RyaW5naWZ5KHBhcmFtTmFtZSkpXHJcbiAgICAgIFxyXG4gICAgICAvLyBGb3JtYXRhIG9zIHBhcsOibWV0cm9zIGNvbW8gZm9ybS11cmxlbmNvZGVkXHJcbiAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpXHJcbiAgICAgIFxyXG4gICAgICAvLyBBZGljaW9uYSBvcyBwYXLDom1ldHJvcyAoZXhjZXRvIGY9anNvbiBxdWUgdmFpIG5hIFVSTClcclxuICAgICAgLy8gSU1QT1JUQU5URTogVXNhIG8gbm9tZSBleGF0byBkbyBwYXLDom1ldHJvIGNvbW8gZXN0w6EgbmEgR1AgKHBvZGUgdGVyIGNhcmFjdGVyZXMgZXNwZWNpYWlzKVxyXG4gICAgICBjb25zb2xlLmxvZygnPT09IFBSRVBBUkFORE8gRk9STSBEQVRBID09PScpXHJcbiAgICAgIE9iamVjdC5rZXlzKHBhcmFtcykuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICAgIGlmIChrZXkgIT09ICdmJykge1xyXG4gICAgICAgICAgY29uc3QgcGFyYW1LZXkgPSBrZXkgLy8gVXNhIGV4YXRhbWVudGUgbyBub21lIHF1ZSB2ZWlvIGRhIEdQIChleDogXCJOwrAgSURFQVwiLCBcInZhbG9yX2FsZXJ0YVwiLCBldGMuKVxyXG4gICAgICAgICAgY29uc3QgcGFyYW1WYWwgPSBTdHJpbmcocGFyYW1zW2tleV0pXHJcbiAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQocGFyYW1LZXksIHBhcmFtVmFsKVxyXG4gICAgICAgICAgY29uc29sZS5sb2coYFBhcsOibWV0cm8gYWRpY2lvbmFkbzogbm9tZT1cIiR7cGFyYW1LZXl9XCIgdmFsb3I9XCIke3BhcmFtVmFsfVwiYClcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGAgIC0gTm9tZSAoSlNPTik6ICR7SlNPTi5zdHJpbmdpZnkocGFyYW1LZXkpfWApXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhgICAtIE5vbWUgKGJ5dGVzKTogJHtBcnJheS5mcm9tKHBhcmFtS2V5KS5tYXAoYyA9PiBjLmNoYXJDb2RlQXQoMCkpLmpvaW4oJywnKX1gKVxyXG4gICAgICAgICAgY29uc29sZS5sb2coYCAgLSBWYWxvciAoSlNPTik6ICR7SlNPTi5zdHJpbmdpZnkocGFyYW1WYWwpfWApXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICBcclxuICAgICAgY29uc3QgZm9ybURhdGFTdHJpbmcgPSBmb3JtRGF0YS50b1N0cmluZygpXHJcbiAgICAgIGNvbnNvbGUubG9nKCdGb3JtRGF0YSBjb21wbGV0byAoc3RyaW5nKTonLCBmb3JtRGF0YVN0cmluZylcclxuICAgICAgY29uc29sZS5sb2coJ0Zvcm1EYXRhIGNvbXBsZXRvIChVUkwgZGVjb2RlZCk6JywgZGVjb2RlVVJJQ29tcG9uZW50KGZvcm1EYXRhU3RyaW5nKSlcclxuICAgICAgXHJcbiAgICAgIC8vIEFkaWNpb25hIHRva2VuIGFvIGJvZHlcclxuICAgICAgaWYgKHRva2VuKSB7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCd0b2tlbicsIHRva2VuKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdUb2tlbiBhZGljaW9uYWRvIGFvIGJvZHknKVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvLyBGdW7Dp8OjbyBhdXhpbGlhciBwYXJhIGZhemVyIGEgcmVxdWlzacOnw6NvXHJcbiAgICAgIGNvbnN0IG1ha2VFeGVjdXRlUmVxdWVzdCA9IGFzeW5jICh1cmwpID0+IHtcclxuICAgICAgICAvLyBBZGljaW9uYSB0b2tlbiBuYSBVUkwgdGFtYsOpbSAoYWxndW5zIHNlcnZpZG9yZXMgQXJjR0lTIGV4aWdlbSBpc3NvKVxyXG4gICAgICAgIGxldCBmaW5hbFVybCA9IHVybFxyXG4gICAgICAgIGlmICh0b2tlbikge1xyXG4gICAgICAgICAgY29uc3QgdXJsV2l0aFRva2VuID0gbmV3IFVSTCh1cmwpXHJcbiAgICAgICAgICB1cmxXaXRoVG9rZW4uc2VhcmNoUGFyYW1zLnNldCgndG9rZW4nLCB0b2tlbilcclxuICAgICAgICAgIHVybFdpdGhUb2tlbi5zZWFyY2hQYXJhbXMuc2V0KCdmJywgJ2pzb24nKVxyXG4gICAgICAgICAgZmluYWxVcmwgPSB1cmxXaXRoVG9rZW4udG9TdHJpbmcoKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAvLyBTZSBuw6NvIHRpdmVyIHRva2VuLCBhZGljaW9uYSBhcGVuYXMgZj1qc29uXHJcbiAgICAgICAgICBjb25zdCB1cmxPYmogPSBuZXcgVVJMKHVybClcclxuICAgICAgICAgIHVybE9iai5zZWFyY2hQYXJhbXMuc2V0KCdmJywgJ2pzb24nKVxyXG4gICAgICAgICAgZmluYWxVcmwgPSB1cmxPYmoudG9TdHJpbmcoKVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBjb25zb2xlLmxvZygnVGVudGFuZG8gVVJMOicsIGZpbmFsVXJsKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdCb2R5IChmb3JtRGF0YSk6JywgZm9ybURhdGEudG9TdHJpbmcoKSlcclxuICAgICAgICBjb25zb2xlLmxvZygnVG9rZW4gcHJlc2VudGU6JywgISF0b2tlbilcclxuICAgICAgICBjb25zb2xlLmxvZygnUGFyw6JtZXRyb3MgZW52aWFkb3M6JywgT2JqZWN0LmtleXMocGFyYW1zKSlcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGZpbmFsVXJsLCB7XHJcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgYm9keTogZm9ybURhdGFcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiByZXNwb25zZVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvLyBWZXJpZmljYSBzZSBhIHRhc2sgw6kgYXNzw61uY3JvbmEgcGFyYSBkZWNpZGlyIHF1YWwgZW5kcG9pbnQgdXNhclxyXG4gICAgICBjb25zdCBpc0FzeW5jID0gZ3BJbmZvLmV4ZWN1dGlvblR5cGUgPT09ICdlc3JpRXhlY3V0aW9uVHlwZUFzeW5jaHJvbm91cydcclxuICAgICAgY29uc29sZS5sb2coJz09PSBURU5UQU5ETyBFWEVDVVRBUiBHUCA9PT0nKVxyXG4gICAgICBjb25zb2xlLmxvZygnVGlwbyBkZSBleGVjdcOnw6NvOicsIGdwSW5mby5leGVjdXRpb25UeXBlKVxyXG4gICAgICBjb25zb2xlLmxvZygnw4kgYXNzw61uY3JvbmE/JywgaXNBc3luYylcclxuICAgICAgY29uc29sZS5sb2coJ1RlbnRhbmRvIHByaW1laXJvIGNvbSB0YXNrIGVzcGVjw61maWNhOicsIHRoaXMuR1BfVEFTS19OQU1FKVxyXG4gICAgICBjb25zb2xlLmxvZygnUGFyw6JtZXRybyBxdWUgc2Vyw6EgZW52aWFkbzonLCBwYXJhbU5hbWUpXHJcbiAgICAgIGNvbnNvbGUubG9nKCdWYWxvciBxdWUgc2Vyw6EgZW52aWFkbzonLCBpZGVhTnVtYmVyKVxyXG4gICAgICBcclxuICAgICAgLy8gU2UgZm9yIGFzc8OtbmNyb25hLCB1c2Egc3VibWl0Sm9iOyBjYXNvIGNvbnRyw6FyaW8sIHVzYSBleGVjdXRlXHJcbiAgICAgIGlmIChpc0FzeW5jKSB7XHJcbiAgICAgICAgZXhlY3V0ZVVybCA9IGAke3RoaXMuR1BfU0VSVklDRV9VUkx9LyR7dGFza05hbWVFbmNvZGVkfS9zdWJtaXRKb2JgXHJcbiAgICAgICAgY29uc29sZS5sb2coJ1VzYW5kbyBlbmRwb2ludCAvc3VibWl0Sm9iICh0YXJlZmEgYXNzw61uY3JvbmEpOicsIGV4ZWN1dGVVcmwpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZXhlY3V0ZVVybCA9IGAke3RoaXMuR1BfU0VSVklDRV9VUkx9LyR7dGFza05hbWVFbmNvZGVkfS9leGVjdXRlYFxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdVc2FuZG8gZW5kcG9pbnQgL2V4ZWN1dGUgKHRhcmVmYSBzw61uY3JvbmEpOicsIGV4ZWN1dGVVcmwpXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGxldCBleGVjdXRlUmVzcG9uc2UgPSBhd2FpdCBtYWtlRXhlY3V0ZVJlcXVlc3QoZXhlY3V0ZVVybClcclxuICAgICAgXHJcbiAgICAgIC8vIFNlIGRlciBlcnJvIDUwMCwgcG9kZSBzZXIgcXVlIG8gZW5kcG9pbnQgZGEgdGFzayBlc3BlY8OtZmljYSBuw6NvIGV4aXN0YVxyXG4gICAgICAvLyBUZW50YSBjb20gbyBlbmRwb2ludCBkYSBHUCByYWl6XHJcbiAgICAgIGlmICghZXhlY3V0ZVJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdFRleHQgPSBhd2FpdCBleGVjdXRlUmVzcG9uc2UudGV4dCgpXHJcbiAgICAgICAgY29uc29sZS53YXJuKCdQcmltZWlyYSB0ZW50YXRpdmEgZmFsaG91LiBTdGF0dXM6JywgZXhlY3V0ZVJlc3BvbnNlLnN0YXR1cylcclxuICAgICAgICBjb25zb2xlLndhcm4oJ1Jlc3Bvc3RhIChwcmltZWlyb3MgNTAwIGNoYXJzKTonLCByZXN1bHRUZXh0LnN1YnN0cmluZygwLCA1MDApKVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCByZXN1bHRKc29uID0gSlNPTi5wYXJzZShyZXN1bHRUZXh0KVxyXG4gICAgICAgICAgaWYgKHJlc3VsdEpzb24uZXJyb3IgJiYgcmVzdWx0SnNvbi5lcnJvci5jb2RlID09PSA1MDApIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKCdFcnJvIDUwMCBjb20gdGFzayBlc3BlY8OtZmljYSwgdGVudGFuZG8gY29tIGVuZHBvaW50IGRhIEdQIHJhaXouLi4nKVxyXG4gICAgICAgICAgICAvLyBUZW50YSBjb20gbyBlbmRwb2ludCByYWl6IHVzYW5kbyBvIG1lc21vIHRpcG8gKHN1Ym1pdEpvYiBvdSBleGVjdXRlKVxyXG4gICAgICAgICAgICBpZiAoaXNBc3luYykge1xyXG4gICAgICAgICAgICAgIGV4ZWN1dGVVcmwgPSBgJHt0aGlzLkdQX1NFUlZJQ0VfVVJMfS9zdWJtaXRKb2JgXHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1RlbnRhbmRvIGNvbSBlbmRwb2ludCBkYSBHUCByYWl6IChzdWJtaXRKb2IpOicsIGV4ZWN1dGVVcmwpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgZXhlY3V0ZVVybCA9IGAke3RoaXMuR1BfU0VSVklDRV9VUkx9L2V4ZWN1dGVgXHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1RlbnRhbmRvIGNvbSBlbmRwb2ludCBkYSBHUCByYWl6IChleGVjdXRlKTonLCBleGVjdXRlVXJsKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGV4ZWN1dGVSZXNwb25zZSA9IGF3YWl0IG1ha2VFeGVjdXRlUmVxdWVzdChleGVjdXRlVXJsKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm8gYW8gcGFyc2VhciByZXNwb3N0YTonLCBlKVxyXG4gICAgICAgICAgLy8gU2UgbsOjbyBjb25zZWd1aXIgcGFyc2VhciwgY29udGludWEgY29tIG8gZXJybyBvcmlnaW5hbFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLy8gTMOqIGEgcmVzcG9zdGEgbWVzbW8gc2UgbsOjbyBmb3IgT0sgcGFyYSB2ZXIgbyBlcnJvIGRldGFsaGFkb1xyXG4gICAgICBsZXQgcmVzdWx0XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgcmVzdWx0ID0gYXdhaXQgZXhlY3V0ZVJlc3BvbnNlLmpzb24oKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdSZXNwb3N0YSBkbyBleGVjdXRlIChKU09OKTonLCBKU09OLnN0cmluZ2lmeShyZXN1bHQsIG51bGwsIDIpKVxyXG4gICAgICB9IGNhdGNoIChqc29uRXJyb3IpIHtcclxuICAgICAgICAvLyBTZSBuw6NvIGNvbnNlZ3VpciBsZXIgY29tbyBKU09OLCBsw6ogY29tbyB0ZXh0b1xyXG4gICAgICAgIGNvbnN0IHRleHRSZXNwb25zZSA9IGF3YWl0IGV4ZWN1dGVSZXNwb25zZS50ZXh0KClcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdSZXNwb3N0YSBuw6NvIMOpIEpTT046JywgdGV4dFJlc3BvbnNlKVxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1N0YXR1cyBIVFRQOicsIGV4ZWN1dGVSZXNwb25zZS5zdGF0dXMsIGV4ZWN1dGVSZXNwb25zZS5zdGF0dXNUZXh0KVxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJybyBhbyBleGVjdXRhciB0YXJlZmE6ICR7ZXhlY3V0ZVJlc3BvbnNlLnN0YXR1c30gJHtleGVjdXRlUmVzcG9uc2Uuc3RhdHVzVGV4dH0gLSBSZXNwb3N0YTogJHt0ZXh0UmVzcG9uc2Uuc3Vic3RyaW5nKDAsIDUwMCl9YClcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgaWYgKCFleGVjdXRlUmVzcG9uc2Uub2spIHtcclxuICAgICAgICAvLyBTZSBhIHJlc3Bvc3RhIHRlbSB1bSBlcnJvIG5vIEpTT04sIHVzYSBlbGVcclxuICAgICAgICBpZiAocmVzdWx0LmVycm9yKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCc9PT0gRVJSTyBERVRBTEhBRE8gREEgR1AgPT09JylcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0PDs2RpZ28gZG8gZXJybzonLCByZXN1bHQuZXJyb3IuY29kZSlcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ01lbnNhZ2VtOicsIHJlc3VsdC5lcnJvci5tZXNzYWdlKVxyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRGV0YWxoZXM6JywgcmVzdWx0LmVycm9yLmRldGFpbHMpXHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvIGNvbXBsZXRvOicsIEpTT04uc3RyaW5naWZ5KHJlc3VsdC5lcnJvciwgbnVsbCwgMikpXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC8vIE1lbnNhZ2VtIGRlIGVycm8gbWFpcyBhbWlnw6F2ZWxcclxuICAgICAgICAgIGxldCBlcnJvck1lc3NhZ2UgPSAnRXJybyBhbyBleGVjdXRhciBhIGZlcnJhbWVudGEgZGUgZ2VvcHJvY2Vzc2FtZW50by5cXG5cXG4nXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3IuY29kZSA9PT0gNTAwKSB7XHJcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZSArPSAnRXJybyBpbnRlcm5vIGRvIHNlcnZpZG9yICg1MDApLlxcblxcbidcclxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlICs9ICdQb3Nzw612ZWlzIGNhdXNhczpcXG4nXHJcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZSArPSAnMS4gTyBuw7ptZXJvIGRlIGlkZWEgcG9kZSBuw6NvIGV4aXN0aXIgbm8gc2Vydmlkb3JcXG4nXHJcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZSArPSAnMi4gUHJvYmxlbWEgbm8gcHJvY2Vzc2FtZW50byBkYSBmZXJyYW1lbnRhXFxuJ1xyXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UgKz0gJzMuIE8gc2Vydmlkb3IgcG9kZSBlc3RhciB0ZW1wb3JhcmlhbWVudGUgaW5kaXNwb27DrXZlbFxcblxcbidcclxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlICs9IGBWYWxvciBlbnZpYWRvOiAke2lkZWFOdW1iZXJ9XFxuYFxyXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UgKz0gYFBhcsOibWV0cm8gdXNhZG86ICR7cGFyYW1OYW1lfVxcblxcbmBcclxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlICs9ICdWZXJpZmlxdWU6XFxuJ1xyXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UgKz0gJy0gU2UgbyBuw7ptZXJvIGRlIGlkZWEgZXN0w6EgY29ycmV0b1xcbidcclxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlICs9ICctIFNlIG8gdmFsb3IgZXhpc3RlIG5hIGNhbWFkYSBkZSBhbGVydGFzXFxuJ1xyXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UgKz0gJy0gQWJyYSBvIGNvbnNvbGUgKEYxMikgcGFyYSBtYWlzIGRldGFsaGVzJ1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlICs9IGBDw7NkaWdvOiAke3Jlc3VsdC5lcnJvci5jb2RlfVxcbmBcclxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlICs9IGBNZW5zYWdlbTogJHtyZXN1bHQuZXJyb3IubWVzc2FnZX1cXG5cXG5gXHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3IuZGV0YWlscyAmJiByZXN1bHQuZXJyb3IuZGV0YWlscy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlICs9IGBEZXRhbGhlczogJHtyZXN1bHQuZXJyb3IuZGV0YWlscy5qb2luKCcsICcpfVxcblxcbmBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBhbGVydChlcnJvck1lc3NhZ2UpXHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm8gbmEgR1A6ICR7SlNPTi5zdHJpbmdpZnkocmVzdWx0LmVycm9yKX1gKVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBTZSBuw6NvIHRpdmVyIGNhbXBvIGVycm9yLCBtYXMgbyBzdGF0dXMgbsOjbyDDqSBPSywgbW9zdHJhIG8gcmVzdWx0YWRvIGNvbXBsZXRvXHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJybyBIVFRQOicsIGV4ZWN1dGVSZXNwb25zZS5zdGF0dXMsIGV4ZWN1dGVSZXNwb25zZS5zdGF0dXNUZXh0KVxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1Jlc3Bvc3RhIGNvbXBsZXRhOicsIHJlc3VsdClcclxuICAgICAgICBhbGVydChgRXJybyBhbyBleGVjdXRhciB0YXJlZmE6ICR7ZXhlY3V0ZVJlc3BvbnNlLnN0YXR1c30gJHtleGVjdXRlUmVzcG9uc2Uuc3RhdHVzVGV4dH1cXG5cXG5WZXJpZmlxdWUgbyBjb25zb2xlIChGMTIpIHBhcmEgbWFpcyBkZXRhbGhlcy5gKVxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJybyBhbyBleGVjdXRhciB0YXJlZmE6ICR7ZXhlY3V0ZVJlc3BvbnNlLnN0YXR1c30gJHtleGVjdXRlUmVzcG9uc2Uuc3RhdHVzVGV4dH0gLSAke0pTT04uc3RyaW5naWZ5KHJlc3VsdCl9YClcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLy8gVmVyaWZpY2Egc2UgYSByZXNwb3N0YSBjb250w6ltIHVtIGpvYklkICh0YXJlZmEgYXNzw61uY3JvbmEpXHJcbiAgICAgIC8vIFBhcmEgdGFyZWZhcyBhc3PDrW5jcm9uYXMsIHN1Ym1pdEpvYiBzZW1wcmUgcmV0b3JuYSBqb2JJZFxyXG4gICAgICBpZiAocmVzdWx0LmpvYklkIHx8IGlzQXN5bmMpIHtcclxuICAgICAgICBjb25zdCBqb2JJZCA9IHJlc3VsdC5qb2JJZFxyXG4gICAgICAgIGlmICgham9iSWQpIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGFyZWZhIGFzc8OtbmNyb25hIG1hcyBuw6NvIHJlY2ViZXUgam9iSWQgbmEgcmVzcG9zdGEnKVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZygnVGFyZWZhIGFzc8OtbmNyb25hIGRldGVjdGFkYS4gSm9iIElEOicsIGpvYklkKVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFBvbGxpbmcgZG8gc3RhdHVzIGRvIGpvYlxyXG4gICAgICAgIGxldCBhdHRlbXB0cyA9IDBcclxuICAgICAgICBjb25zdCBtYXhBdHRlbXB0cyA9IDYwXHJcbiAgICAgICAgbGV0IGpvYlN0YXR1cyA9IG51bGxcclxuICAgICAgICBcclxuICAgICAgICB3aGlsZSAoYXR0ZW1wdHMgPCBtYXhBdHRlbXB0cykge1xyXG4gICAgICAgICAgYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDEwMDApKVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAvLyBVUkwgcGFyYSB2ZXJpZmljYXIgc3RhdHVzIGRvIGpvYlxyXG4gICAgICAgICAgLy8gVXNhIGEgbWVzbWEgVVJMIGJhc2UgcXVlIGZ1bmNpb25vdSAocG9kZSBzZXIgc3VibWl0Sm9iIG91IGV4ZWN1dGUpXHJcbiAgICAgICAgICBjb25zdCBiYXNlVXJsID0gZXhlY3V0ZVVybC5yZXBsYWNlKCcvc3VibWl0Sm9iJywgJycpLnJlcGxhY2UoJy9leGVjdXRlJywgJycpXHJcbiAgICAgICAgICBjb25zdCBzdGF0dXNVcmwgPSB0b2tlbiBcclxuICAgICAgICAgICAgPyBgJHtiYXNlVXJsfS9qb2JzLyR7am9iSWR9P3Rva2VuPSR7dG9rZW59JmY9anNvbmBcclxuICAgICAgICAgICAgOiBgJHtiYXNlVXJsfS9qb2JzLyR7am9iSWR9P2Y9anNvbmBcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgY29uc29sZS5sb2coJ1ZlcmlmaWNhbmRvIHN0YXR1cyBkbyBqb2I6Jywgc3RhdHVzVXJsKVxyXG4gICAgICAgICAgY29uc3Qgc3RhdHVzUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChzdGF0dXNVcmwpXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGlmICghc3RhdHVzUmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvIGFvIHZlcmlmaWNhciBzdGF0dXMgZG8gam9iOiAke3N0YXR1c1Jlc3BvbnNlLnN0YXR1c31gKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBqb2JTdGF0dXMgPSBhd2FpdCBzdGF0dXNSZXNwb25zZS5qc29uKClcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGBTdGF0dXMgZG8gam9iICh0ZW50YXRpdmEgJHthdHRlbXB0cyArIDF9KTpgLCBqb2JTdGF0dXMuam9iU3RhdHVzKVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBpZiAoam9iU3RhdHVzLmpvYlN0YXR1cyA9PT0gJ2VzcmlKb2JTdWNjZWVkZWQnKSB7XHJcbiAgICAgICAgICAgIC8vIE9idMOpbSBvcyByZXN1bHRhZG9zXHJcbiAgICAgICAgICAgIC8vIFVzYSBhIG1lc21hIFVSTCBiYXNlIHF1ZSBmdW5jaW9ub3UgKHBvZGUgc2VyIHN1Ym1pdEpvYiBvdSBleGVjdXRlKVxyXG4gICAgICAgICAgICBjb25zdCBiYXNlVXJsID0gZXhlY3V0ZVVybC5yZXBsYWNlKCcvc3VibWl0Sm9iJywgJycpLnJlcGxhY2UoJy9leGVjdXRlJywgJycpXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdFVybCA9IHRva2VuXHJcbiAgICAgICAgICAgICAgPyBgJHtiYXNlVXJsfS9qb2JzLyR7am9iSWR9L3Jlc3VsdHM/dG9rZW49JHt0b2tlbn0mZj1qc29uYFxyXG4gICAgICAgICAgICAgIDogYCR7YmFzZVVybH0vam9icy8ke2pvYklkfS9yZXN1bHRzP2Y9anNvbmBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdFJlc3BvbnNlID0gYXdhaXQgZmV0Y2gocmVzdWx0VXJsKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKCFyZXN1bHRSZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJybyBhbyBvYnRlciByZXN1bHRhZG9zOiAke3Jlc3VsdFJlc3BvbnNlLnN0YXR1c31gKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXN1bHQgPSBhd2FpdCByZXN1bHRSZXNwb25zZS5qc29uKClcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1Jlc3VsdGFkbyBkYSBleGVjdcOnw6NvIGFzc8OtbmNyb25hOicsIHJlc3VsdClcclxuICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoam9iU3RhdHVzLmpvYlN0YXR1cyA9PT0gJ2VzcmlKb2JGYWlsZWQnKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSm9iIGZhbGhvdTogJHtqb2JTdGF0dXMubWVzc2FnZXMgPyBKU09OLnN0cmluZ2lmeShqb2JTdGF0dXMubWVzc2FnZXMpIDogJ0Vycm8gZGVzY29uaGVjaWRvJ31gKVxyXG4gICAgICAgICAgfSBlbHNlIGlmIChqb2JTdGF0dXMuam9iU3RhdHVzID09PSAnZXNyaUpvYkNhbmNlbGxlZCcpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdKb2IgZm9pIGNhbmNlbGFkbycpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGF0dGVtcHRzKytcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGF0dGVtcHRzID49IG1heEF0dGVtcHRzKSB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RpbWVvdXQ6IE8gam9iIGRlbW9yb3UgbWFpcyBkZSA2MCBzZWd1bmRvcyBwYXJhIGNvbXBsZXRhcicpXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIFRhcmVmYSBzw61uY3JvbmEgLSByZXN1bHRhZG8gasOhIGVzdMOhIGRpc3BvbsOtdmVsXHJcbiAgICAgICAgY29uc29sZS5sb2coJ1RhcmVmYSBzw61uY3JvbmEgLSByZXN1bHRhZG8gasOhIGRpc3BvbsOtdmVsJylcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgY29uc29sZS5sb2coJ1Jlc3VsdGFkbyBjb21wbGV0byBkYSBHUDonLCBKU09OLnN0cmluZ2lmeShyZXN1bHQsIG51bGwsIDIpKVxyXG5cclxuICAgICAgLy8gUHJvY2Vzc2EgbyByZXN1bHRhZG8gLSBwcm9jdXJhIHBlbGEgVVJMIGRvIEhUTUxcclxuICAgICAgbGV0IGh0bWxVcmwgPSBudWxsXHJcblxyXG4gICAgICAvLyBQYXJhIHRhcmVmYXMgYXNzw61uY3JvbmFzLCBvcyByZXN1bHRhZG9zIHBvZGVtIGVzdGFyIGVtIHVtYSBlc3RydXR1cmEgZGlmZXJlbnRlXHJcbiAgICAgIC8vIFByaW1laXJvLCB2ZXJpZmljYSBzZSBow6EgZXJyb3NcclxuICAgICAgaWYgKHJlc3VsdC5lcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm8gZW5jb250cmFkbyBubyByZXN1bHRhZG86JywgcmVzdWx0LmVycm9yKVxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJybyBuYSBHUDogJHtKU09OLnN0cmluZ2lmeShyZXN1bHQuZXJyb3IpfWApXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFByb2N1cmEgZW0gcmVzdWx0LnJlc3VsdHMgKGVzdHJ1dHVyYSBjb211bSBwYXJhIHRhcmVmYXMgc8OtbmNyb25hcylcclxuICAgICAgaWYgKHJlc3VsdC5yZXN1bHRzICYmIEFycmF5LmlzQXJyYXkocmVzdWx0LnJlc3VsdHMpKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCByZXN1bHRJdGVtIG9mIHJlc3VsdC5yZXN1bHRzKSB7XHJcbiAgICAgICAgICAvLyBPIHJlc3VsdGFkbyBwb2RlIGVzdGFyIGRpcmV0YW1lbnRlIG5vIHJlc3VsdEl0ZW0gb3UgZW0gcmVzdWx0SXRlbS52YWx1ZVxyXG4gICAgICAgICAgY29uc3QgdmFsdWUgPSByZXN1bHRJdGVtLnZhbHVlICE9PSB1bmRlZmluZWQgPyByZXN1bHRJdGVtLnZhbHVlIDogcmVzdWx0SXRlbVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiB2YWx1ZS5pbmNsdWRlcygnLmh0bWwnKSkge1xyXG4gICAgICAgICAgICBodG1sVXJsID0gdmFsdWVcclxuICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICAvLyBQcm9jdXJhIHBvciBwcm9wcmllZGFkZXMgY29tdW5zIHF1ZSBjb250w6ptIFVSTHNcclxuICAgICAgICAgICAgaWYgKHZhbHVlLnVybCAmJiB0eXBlb2YgdmFsdWUudXJsID09PSAnc3RyaW5nJyAmJiB2YWx1ZS51cmwuaW5jbHVkZXMoJy5odG1sJykpIHtcclxuICAgICAgICAgICAgICBodG1sVXJsID0gdmFsdWUudXJsXHJcbiAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZS5wYXRoVXJsICYmIHR5cGVvZiB2YWx1ZS5wYXRoVXJsID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgIGh0bWxVcmwgPSB2YWx1ZS5wYXRoVXJsXHJcbiAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZS52YWx1ZSAmJiB0eXBlb2YgdmFsdWUudmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlLnZhbHVlLmluY2x1ZGVzKCcuaHRtbCcpKSB7XHJcbiAgICAgICAgICAgICAgaHRtbFVybCA9IHZhbHVlLnZhbHVlXHJcbiAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gUGFyYSB0YXJlZmFzIGFzc8OtbmNyb25hcywgb3MgcmVzdWx0YWRvcyBwb2RlbSBlc3RhciBlbSByZXN1bHQucmVzdWx0cyBjb21vIG9iamV0b1xyXG4gICAgICBpZiAoIWh0bWxVcmwgJiYgcmVzdWx0LnJlc3VsdHMgJiYgdHlwZW9mIHJlc3VsdC5yZXN1bHRzID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheShyZXN1bHQucmVzdWx0cykpIHtcclxuICAgICAgICAvLyBJdGVyYSBzb2JyZSBhcyBwcm9wcmllZGFkZXMgZG8gb2JqZXRvIHJlc3VsdHNcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiByZXN1bHQucmVzdWx0cykge1xyXG4gICAgICAgICAgY29uc3QgcmVzdWx0SXRlbSA9IHJlc3VsdC5yZXN1bHRzW2tleV1cclxuICAgICAgICAgIGlmIChyZXN1bHRJdGVtICYmIHJlc3VsdEl0ZW0udmFsdWUpIHtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSByZXN1bHRJdGVtLnZhbHVlXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlLmluY2x1ZGVzKCcuaHRtbCcpKSB7XHJcbiAgICAgICAgICAgICAgaHRtbFVybCA9IHZhbHVlXHJcbiAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZS51cmwgJiYgdHlwZW9mIHZhbHVlLnVybCA9PT0gJ3N0cmluZycgJiYgdmFsdWUudXJsLmluY2x1ZGVzKCcuaHRtbCcpKSB7XHJcbiAgICAgICAgICAgICAgaHRtbFVybCA9IHZhbHVlLnVybFxyXG4gICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUucGF0aFVybCAmJiB0eXBlb2YgdmFsdWUucGF0aFVybCA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICBodG1sVXJsID0gdmFsdWUucGF0aFVybFxyXG4gICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFByb2N1cmEgZW0gb3V0cmFzIHByb3ByaWVkYWRlcyBkbyByZXN1bHRhZG9cclxuICAgICAgaWYgKCFodG1sVXJsICYmIHJlc3VsdC5vdXRwdXRVcmwpIHtcclxuICAgICAgICBodG1sVXJsID0gcmVzdWx0Lm91dHB1dFVybFxyXG4gICAgICB9XHJcbiAgICAgIGlmICghaHRtbFVybCAmJiByZXN1bHQudXJsKSB7XHJcbiAgICAgICAgaHRtbFVybCA9IHJlc3VsdC51cmxcclxuICAgICAgfVxyXG4gICAgICBpZiAoIWh0bWxVcmwgJiYgcmVzdWx0LmZpbGVVcmwpIHtcclxuICAgICAgICBodG1sVXJsID0gcmVzdWx0LmZpbGVVcmxcclxuICAgICAgfVxyXG4gICAgICBpZiAoIWh0bWxVcmwgJiYgcmVzdWx0Lm91dHB1dEZpbGUpIHtcclxuICAgICAgICBodG1sVXJsID0gcmVzdWx0Lm91dHB1dEZpbGVcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gQnVzY2EgcG9yIHJlZ2V4IGVtIHRvZG8gbyBvYmpldG8gKMO6bHRpbW8gcmVjdXJzbylcclxuICAgICAgaWYgKCFodG1sVXJsKSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0U3RyaW5nID0gSlNPTi5zdHJpbmdpZnkocmVzdWx0KVxyXG4gICAgICAgIGNvbnN0IHVybE1hdGNoID0gcmVzdWx0U3RyaW5nLm1hdGNoKC9odHRwcz86XFwvXFwvW15cXHNcIjw+XStcXC5odG1sL2cpXHJcbiAgICAgICAgaWYgKHVybE1hdGNoICYmIHVybE1hdGNoLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIGh0bWxVcmwgPSB1cmxNYXRjaFswXVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGh0bWxVcmwpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnVVJMIGRvIEhUTUwgZW5jb250cmFkYTonLCBodG1sVXJsKVxyXG4gICAgICAgIC8vIEFicmUgbyBIVE1MIGVtIHVtYSBub3ZhIGd1aWFcclxuICAgICAgICB3aW5kb3cub3BlbihodG1sVXJsLCAnX2JsYW5rJylcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSlcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBTZSBuw6NvIGVuY29udHJvdSBhIFVSTCwgbW9zdHJhIG8gcmVzdWx0YWRvIGNvbXBsZXRvIHBhcmEgZGVidWdcclxuICAgICAgICBjb25zb2xlLndhcm4oJ07Do28gZm9pIHBvc3PDrXZlbCBlbmNvbnRyYXIgYSBVUkwgZG8gSFRNTCBubyByZXN1bHRhZG86JywgcmVzdWx0KVxyXG4gICAgICAgIGNvbnNvbGUud2FybignUmVzdWx0YWRvIGNvbXBsZXRvOicsIEpTT04uc3RyaW5naWZ5KHJlc3VsdCwgbnVsbCwgMikpXHJcbiAgICAgICAgYWxlcnQoJ1JlbGF0w7NyaW8gZ2VyYWRvLCBtYXMgbsOjbyBmb2kgcG9zc8OtdmVsIGVuY29udHJhciBhIFVSTCBkbyBIVE1MLiBWZXJpZmlxdWUgbyBjb25zb2xlIGRvIG5hdmVnYWRvciAoRjEyKSBwYXJhIHZlciBvcyBkZXRhbGhlcyBkbyByZXN1bHRhZG8uJylcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSlcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignPT09IEVSUk8gQ09NUExFVE8gQU8gRVhFQ1VUQVIgR1AgPT09JylcclxuICAgICAgY29uc29sZS5lcnJvcignRXJybzonLCBlcnJvcilcclxuICAgICAgY29uc29sZS5lcnJvcignTWVuc2FnZW06JywgZXJyb3IubWVzc2FnZSlcclxuICAgICAgY29uc29sZS5lcnJvcignU3RhY2sgdHJhY2U6JywgZXJyb3Iuc3RhY2spXHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1RpcG8gZG8gZXJybzonLCBlcnJvci5jb25zdHJ1Y3Rvci5uYW1lKVxyXG4gICAgICBcclxuICAgICAgLy8gSW5mb3JtYcOnw7VlcyBkZSBjb250ZXh0byBwYXJhIGRlYnVnXHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJz09PSBDT05URVhUTyBETyBFUlJPID09PScpXHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1ZhbG9yIGVudmlhZG86JywgaWRlYU51bWJlcilcclxuICAgICAgY29uc29sZS5lcnJvcignUGFyw6JtZXRybyB1c2FkbzonLCBwYXJhbU5hbWUpXHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1VSTCB0ZW50YWRhOicsIGV4ZWN1dGVVcmwpXHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1Rva2VuIHByZXNlbnRlOicsICEhdG9rZW4pXHJcblxyXG4gICAgICBsZXQgZXJyb3JNZXNzYWdlID0gJ0Vycm8gYW8gZ2VyYXIgcmVsYXTDs3Jpby5cXG5cXG4nXHJcblxyXG4gICAgICBpZiAoZXJyb3IubWVzc2FnZSkge1xyXG4gICAgICAgIC8vIFJlbW92ZSBpbmZvcm1hw6fDtWVzIHTDqWNuaWNhcyBtdWl0byBsb25nYXMgcGFyYSBvIHVzdcOhcmlvXHJcbiAgICAgICAgbGV0IGNsZWFuTWVzc2FnZSA9IGVycm9yLm1lc3NhZ2VcclxuICAgICAgICBpZiAoY2xlYW5NZXNzYWdlLmxlbmd0aCA+IDIwMCkge1xyXG4gICAgICAgICAgY2xlYW5NZXNzYWdlID0gY2xlYW5NZXNzYWdlLnN1YnN0cmluZygwLCAyMDApICsgJy4uLidcclxuICAgICAgICB9XHJcbiAgICAgICAgZXJyb3JNZXNzYWdlICs9IGBNZW5zYWdlbTogJHtjbGVhbk1lc3NhZ2V9XFxuXFxuYFxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoZXJyb3IuZGV0YWlscyAmJiBBcnJheS5pc0FycmF5KGVycm9yLmRldGFpbHMpICYmIGVycm9yLmRldGFpbHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGVycm9yTWVzc2FnZSArPSBgRGV0YWxoZXM6ICR7ZXJyb3IuZGV0YWlsc1swXX1cXG5cXG5gXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGVycm9yTWVzc2FnZSArPSAnVmVyaWZpcXVlOlxcbidcclxuICAgICAgZXJyb3JNZXNzYWdlICs9IGAxLiBTZSBvIG7Dum1lcm8gZGUgaWRlYSBcIiR7aWRlYU51bWJlcn1cIiBlc3TDoSBjb3JyZXRvXFxuYFxyXG4gICAgICBlcnJvck1lc3NhZ2UgKz0gJzIuIFNlIG8gdmFsb3IgZXhpc3RlIG5hIGNhbWFkYSBkZSBhbGVydGFzX3JlZ2lvbmFsX2xhcGFcXG4nXHJcbiAgICAgIGVycm9yTWVzc2FnZSArPSAnMy4gU2UgYSBmZXJyYW1lbnRhIGRlIGdlb3Byb2Nlc3NhbWVudG8gZXN0w6EgYWNlc3PDrXZlbFxcbidcclxuICAgICAgZXJyb3JNZXNzYWdlICs9ICc0LiBBYnJhIG8gY29uc29sZSBkbyBuYXZlZ2Fkb3IgKEYxMikgcGFyYSBtYWlzIGRldGFsaGVzIHTDqWNuaWNvc1xcblxcbidcclxuICAgICAgZXJyb3JNZXNzYWdlICs9ICdEaWNhOiBUZW50ZSB1c2FyIG8gYm90w6NvIFwiRmlsdHJhclwiIHByaW1laXJvIHBhcmEgdmVyaWZpY2FyIHNlIG8gbsO6bWVybyBleGlzdGUuJ1xyXG5cclxuICAgICAgYWxlcnQoZXJyb3JNZXNzYWdlKVxyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlciAoKSB7XHJcbiAgICBjb25zdCBzdHlsZSA9IGNzc2BcclxuICAgICAgLndpZGdldC1jb250YWluZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBnYXA6IDEycHg7XHJcbiAgICAgIH1cclxuICAgICAgZm9ybSA+IGRpdiB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBnYXA6IDhweDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgZmxleDogMTtcclxuICAgICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgbWluLXdpZHRoOiAxMDBweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNjY2NDA7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFlNGYzMjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICY6ZGlzYWJsZWQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG4gICAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAucmVwb3J0LWJ1dHRvbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI2NjY0MDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgcGFkZGluZzogOHB4IDE2cHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICAgICAgICBwb2ludGVyLWV2ZW50czogYXV0bztcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGdhcDogOHB4O1xyXG4gICAgICAgICY6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFlNGYzMjtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOmFjdGl2ZTpub3QoOmRpc2FibGVkKSB7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjpmb2N1czpub3QoOmRpc2FibGVkKSB7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjpkaXNhYmxlZCB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG4gICAgICAgICAgY29sb3I6ICM5ZTllOWU7XHJcbiAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjpub3QoOmRpc2FibGVkKSB7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLnNwaW5uZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB3aWR0aDogMTZweDtcclxuICAgICAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBib3JkZXItdG9wLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBhbmltYXRpb246IHNwaW4gMC44cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICAgIH1cclxuICAgICAgQGtleWZyYW1lcyBzcGluIHtcclxuICAgICAgICB0byB7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuY2xlYXItYnV0dG9uIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xyXG4gICAgICAgIGNvbG9yOiAjNDI0MjQyO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2JkYmRiZDtcclxuICAgICAgICAgIGNvbG9yOiAjMjEyMTIxO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOmRpc2FibGVkIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbiAgICAgICAgICBjb2xvcjogIzllOWU5ZTtcclxuICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5zdGF0dXMtbWVzc2FnZSB7XHJcbiAgICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlN2YzZmY7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgfVxyXG4gICAgICAubG9hZGluZyB7XHJcbiAgICAgICAgY29sb3I6ICMwMDc5YzE7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWFkZExheWVycyBqaW11LXdpZGdldCBwLTJcIiBjc3M9e3N0eWxlfT5cclxuICAgICAgICB7dGhpcy5wcm9wcy5oYXNPd25Qcm9wZXJ0eSgndXNlTWFwV2lkZ2V0SWRzJykgJiZcclxuICAgICAgICAgIHRoaXMucHJvcHMudXNlTWFwV2lkZ2V0SWRzICYmXHJcbiAgICAgICAgICB0aGlzLnByb3BzLnVzZU1hcFdpZGdldElkcy5sZW5ndGggPT09IDEgJiYgKFxyXG4gICAgICAgICAgICA8SmltdU1hcFZpZXdDb21wb25lbnRcclxuICAgICAgICAgICAgICB1c2VNYXBXaWRnZXRJZD17dGhpcy5wcm9wcy51c2VNYXBXaWRnZXRJZHM/LlswXX1cclxuICAgICAgICAgICAgICBvbkFjdGl2ZVZpZXdDaGFuZ2U9eyhqbXY6IEppbXVNYXBWaWV3KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgamltdU1hcFZpZXc6IGptdlxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPHA+e2RlZmF1bHRNZXNzYWdlcy5pbnN0cnVjdGlvbnN9PC9wPlxyXG5cclxuXHJcbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVGaWx0ZXJBbmRab29tfT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtkZWZhdWx0TWVzc2FnZXMuc2VhcmNoSWRlYX1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmlkZWFTZWFyY2hJbnB1dH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlkZWFTZWFyY2hJbnB1dENoYW5nZX1cclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXshdGhpcy5zdGF0ZS5mZWF0dXJlTGF5ZXIgfHwgdGhpcy5zdGF0ZS5sb2FkaW5nfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyF0aGlzLnN0YXRlLmZlYXR1cmVMYXllciB8fCB0aGlzLnN0YXRlLmxvYWRpbmd9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2RlZmF1bHRNZXNzYWdlcy5maWx0ZXJBbmRab29tfVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgICB7dGhpcy5zdGF0ZS5mZWF0dXJlTGF5ZXIgJiYgKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlcG9ydC1idXR0b25cIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVHZW5lcmF0ZVJlcG9ydH1cclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnN0YXRlLmxvYWRpbmcgfHwgIXRoaXMuc3RhdGUuaWRlYVNlYXJjaElucHV0IHx8IHRoaXMuc3RhdGUuaWRlYVNlYXJjaElucHV0LnRyaW0oKSA9PT0gJyd9XHJcbiAgICAgICAgICAgICAgICB0aXRsZT17dGhpcy5zdGF0ZS5sb2FkaW5nIHx8ICF0aGlzLnN0YXRlLmlkZWFTZWFyY2hJbnB1dCB8fCB0aGlzLnN0YXRlLmlkZWFTZWFyY2hJbnB1dC50cmltKCkgPT09ICcnIFxyXG4gICAgICAgICAgICAgICAgICA/ICdEaWdpdGUgdW0gbsO6bWVybyBkZSBpZGVhIHBhcmEgZ2VyYXIgbyByZWxhdMOzcmlvJyBcclxuICAgICAgICAgICAgICAgICAgOiAnR2VyYXIgcmVsYXTDs3JpbyBwYXJhIG8gbsO6bWVybyBkZSBpZGVhIGluZm9ybWFkbyd9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUubG9hZGluZyAmJiA8c3BhbiBjbGFzc05hbWU9XCJzcGlubmVyXCI+PC9zcGFuPn1cclxuICAgICAgICAgICAgICAgIHtkZWZhdWx0TWVzc2FnZXMuZ2VuZXJhdGVSZXBvcnR9XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xlYXItYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xlYXJGaWx0ZXJ9XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5zdGF0ZS5sb2FkaW5nfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtkZWZhdWx0TWVzc2FnZXMuY2xlYXJGaWx0ZXJ9XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
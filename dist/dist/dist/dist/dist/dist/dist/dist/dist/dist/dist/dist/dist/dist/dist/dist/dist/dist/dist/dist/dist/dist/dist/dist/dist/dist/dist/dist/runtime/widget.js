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
            loading: false
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
                    this.setState({
                        featureLayer: layer,
                        loading: false
                    });
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
                console.log('Filtro removido');
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
                // Carrega o módulo Geoprocessor
                const modules = yield (0,jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.loadArcGISJSAPIModules)([
                    'esri/tasks/Geoprocessor'
                ]);
                const [Geoprocessor] = modules;
                this.Geoprocessor = Geoprocessor;
                // Cria uma instância do Geoprocessor
                const gp = new this.Geoprocessor({
                    url: this.GP_SERVICE_URL
                });
                // Prepara os parâmetros de entrada
                // Tenta diferentes nomes de parâmetro comuns
                let inputParams = {};
                // Aguarda a GP estar pronta (se necessário)
                if (gp.when) {
                    yield gp.when();
                }
                // Tenta obter informações da tarefa para descobrir os parâmetros corretos
                try {
                    // Tenta acessar taskInfo após a GP estar pronta
                    const gpInfo = gp.taskInfo || (gp.urlInfo ? yield gp.urlInfo() : null);
                    if (gpInfo) {
                        console.log('Informações da GP:', gpInfo);
                        // Se a GP tiver parâmetros específicos, vamos usar eles
                        if (gpInfo.parameters && gpInfo.parameters.length > 0) {
                            const ideaParam = gpInfo.parameters.find(p => p.name && (p.name.toLowerCase().includes('idea') || p.name.toLowerCase().includes('id')));
                            if (ideaParam) {
                                inputParams[ideaParam.name] = ideaNumber;
                            }
                            else {
                                // Se não encontrar, usa o primeiro parâmetro de entrada
                                const inputParam = gpInfo.parameters.find(p => p.direction === 'esriGPParameterDirectionInput');
                                if (inputParam) {
                                    inputParams[inputParam.name] = ideaNumber;
                                }
                                else {
                                    inputParams['idea'] = ideaNumber;
                                }
                            }
                        }
                        else {
                            inputParams['idea'] = ideaNumber;
                        }
                    }
                    else {
                        // Se não tiver informações, tenta diretamente com 'idea'
                        inputParams['idea'] = ideaNumber;
                    }
                }
                catch (infoError) {
                    // Se falhar ao obter informações, usa 'idea' como padrão
                    console.log('Não foi possível obter informações da tarefa, usando parâmetro padrão:', infoError);
                    inputParams['idea'] = ideaNumber;
                }
                console.log('Parâmetros enviados para a GP:', inputParams);
                // Executa a tarefa
                // Primeiro tenta execute (tarefa síncrona), se falhar, tenta submitJob (tarefa assíncrona)
                let result;
                try {
                    result = yield gp.execute(inputParams);
                }
                catch (executeError) {
                    // Se execute falhar, pode ser uma tarefa assíncrona
                    console.log('Tarefa pode ser assíncrona, tentando submitJob:', executeError);
                    try {
                        const jobInfo = yield gp.submitJob(inputParams);
                        console.log('Job enviado:', jobInfo);
                        // Aguarda o job completar usando waitForJobCompletion se disponível, senão faz polling
                        if (gp.waitForJobCompletion) {
                            result = yield gp.waitForJobCompletion(jobInfo.jobId, (status) => {
                                console.log('Status do job:', status.jobStatus);
                            });
                        }
                        else {
                            // Polling manual se waitForJobCompletion não estiver disponível
                            let jobStatus = yield gp.checkJobStatus(jobInfo.jobId);
                            while (jobStatus.jobStatus === 'esriJobExecuting' || jobStatus.jobStatus === 'esriJobSubmitted') {
                                yield new Promise(resolve => setTimeout(resolve, 1000)); // Aguarda 1 segundo
                                jobStatus = yield gp.checkJobStatus(jobInfo.jobId);
                            }
                            if (jobStatus.jobStatus === 'esriJobSucceeded') {
                                // Obtém os resultados do job
                                result = jobStatus;
                            }
                            else {
                                throw new Error(`Job falhou com status: ${jobStatus.jobStatus}`);
                            }
                        }
                    }
                    catch (jobError) {
                        // Se submitJob também falhar, lança o erro original
                        console.error('Erro ao executar job assíncrono:', jobError);
                        throw executeError;
                    }
                }
                console.log('Resultado da GP:', result);
                // Processa o resultado
                // Normalmente, a GP retorna um objeto com resultados
                // Precisamos encontrar a URL do HTML gerado
                let htmlUrl = null;
                if (result.results && result.results.length > 0) {
                    // Procura pelo resultado que contém a URL do HTML
                    for (const resultItem of result.results) {
                        if (resultItem.value) {
                            // O valor pode ser uma URL direta ou um objeto com URL
                            if (typeof resultItem.value === 'string' && resultItem.value.includes('.html')) {
                                htmlUrl = resultItem.value;
                                break;
                            }
                            else if (resultItem.value.url && resultItem.value.url.includes('.html')) {
                                htmlUrl = resultItem.value.url;
                                break;
                            }
                            else if (resultItem.value.pathUrl) {
                                htmlUrl = resultItem.value.pathUrl;
                                break;
                            }
                        }
                    }
                }
                // Se não encontrou no resultado padrão, tenta outras estruturas
                if (!htmlUrl && result.outputUrl) {
                    htmlUrl = result.outputUrl;
                }
                if (!htmlUrl && result.url) {
                    htmlUrl = result.url;
                }
                // Se ainda não encontrou, tenta procurar em todo o objeto de resultado
                if (!htmlUrl) {
                    const resultString = JSON.stringify(result);
                    const urlMatch = resultString.match(/https?:\/\/[^\s"<>]+\.html/g);
                    if (urlMatch && urlMatch.length > 0) {
                        htmlUrl = urlMatch[0];
                    }
                }
                if (htmlUrl) {
                    // Abre o HTML em uma nova guia
                    window.open(htmlUrl, '_blank');
                    this.setState({ loading: false });
                }
                else {
                    // Se não encontrou a URL, mostra o resultado completo para debug
                    console.warn('Não foi possível encontrar a URL do HTML no resultado:', result);
                    alert('Relatório gerado, mas não foi possível encontrar a URL do HTML. Verifique o console para mais detalhes.');
                    this.setState({ loading: false });
                }
            }
            catch (error) {
                console.error('Erro ao executar a ferramenta de geoprocessamento:', error);
                let errorMessage = 'Erro ao gerar relatório. ';
                if (error.message) {
                    errorMessage += error.message;
                }
                else if (error.details && error.details.length > 0) {
                    errorMessage += error.details[0];
                }
                else {
                    errorMessage += 'Verifique se o número de idea está correto e tente novamente.';
                }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9maWx0cmFyLWUtZ2VyYXItcmVsYXRvcmlvL2Rpc3QvcnVudGltZS93aWRnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlFQUFlO0lBQ2IsWUFBWSxFQUFFLGtCQUFrQjtJQUNoQyxRQUFRLEVBQUUsa0JBQWtCO0lBQzVCLGlCQUFpQixFQUFFLHdCQUF3QjtJQUMzQyxZQUFZLEVBQ1YsdUZBQXVGO0lBQ3pGLFVBQVUsRUFBRSw2QkFBNkI7SUFDekMsYUFBYSxFQUFFLFNBQVM7SUFDeEIsY0FBYyxFQUFFLGlCQUFpQjtJQUNqQyxXQUFXLEVBQUUsZUFBZTtJQUM1QixPQUFPLEVBQUUsZUFBZTtJQUN4QixXQUFXLEVBQUUsK0JBQStCO0NBQzdDOzs7Ozs7Ozs7Ozs7QUNaRDs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7QUNBQTs7O0tBR0s7QUFDTCxxQkFBdUIsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0puRCwwQ0FBMEM7QUFDMUMsZUFBZTtBQUNmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFrQkU7QUFDOEQ7QUFLNUM7QUFJZ0M7QUFTckMsTUFBTSxNQUFPLFNBQVEsNENBQUssQ0FBQyxhQUd6QztJQUhEOztRQVdFLFVBQUssR0FBRztZQUNOLGVBQWUsRUFBRSxFQUFFO1lBQ25CLFdBQVcs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QUNSLENBQ0osQ0FDRyxDQUNGLENBQ1A7SUFDSCxDQUFDO0NBQ0Y7QUFFTyxTQUFTLDJCQUEyQixDQUFDLEdBQUcsSUFBSSxxQkFBdUIsR0FBRyxHQUFHLEVBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9maWx0cmFyLWUtZ2VyYXItcmVsYXRvcmlvL3NyYy9ydW50aW1lL3RyYW5zbGF0aW9ucy9kZWZhdWx0LnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1hcmNnaXNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvZmlsdHJhci1lLWdlcmFyLXJlbGF0b3Jpby9zcmMvcnVudGltZS93aWRnZXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcclxuICBfd2lkZ2V0TGFiZWw6ICdGaWx0cmFyIGUgQmFpeGFyJyxcclxuICBhZGRMYXllcjogJ0FkaWNpb25hciBDYW1hZGEnLFxyXG4gIGZlYXR1cmVTZXJ2aWNlVXJsOiAnVVJMIGRvIEZlYXR1cmUgU2VydmljZScsXHJcbiAgaW5zdHJ1Y3Rpb25zOlxyXG4gICAgJ0RpZ2l0ZSB1bSBuw7ptZXJvIG5hIGNvbHVuYSBcImlkZWFcIiBwYXJhIGZpbHRyYXIgZSBkYXIgem9vbSBubyBwb2zDrWdvbm8gY29ycmVzcG9uZGVudGUuJyxcclxuICBzZWFyY2hJZGVhOiAnUGVzcXVpc2FyIHBvciBuw7ptZXJvIChpZGVhKScsXHJcbiAgZmlsdGVyQW5kWm9vbTogJ0ZpbHRyYXInLFxyXG4gIGdlbmVyYXRlUmVwb3J0OiAnR2VyYXIgUmVsYXTDs3JpbycsXHJcbiAgY2xlYXJGaWx0ZXI6ICdMaW1wYXIgRmlsdHJvJyxcclxuICBsb2FkaW5nOiAnQ2FycmVnYW5kby4uLicsXHJcbiAgbGF5ZXJMb2FkZWQ6ICdDYW1hZGEgY2FycmVnYWRhIGNvbSBzdWNlc3NvISdcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9hcmNnaXNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zICovXHJcbi8qKiBAanN4IGpzeCAqL1xyXG4vKipcclxuICBMaWNlbnNpbmdcclxuXHJcbiAgQ29weXJpZ2h0IDIwMjIgRXNyaVxyXG5cclxuICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyBZb3VcclxuICBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heVxyXG4gIG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcbiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3JcclxuICBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmdcclxuICBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcblxyXG4gIEEgY29weSBvZiB0aGUgbGljZW5zZSBpcyBhdmFpbGFibGUgaW4gdGhlIHJlcG9zaXRvcnknc1xyXG4gIExJQ0VOU0UgZmlsZS5cclxuKi9cclxuaW1wb3J0IHsgUmVhY3QsIHR5cGUgQWxsV2lkZ2V0UHJvcHMsIGNzcywganN4IH0gZnJvbSAnamltdS1jb3JlJ1xyXG5pbXBvcnQge1xyXG4gIGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMsXHJcbiAgSmltdU1hcFZpZXdDb21wb25lbnQsXHJcbiAgdHlwZSBKaW11TWFwVmlld1xyXG59IGZyb20gJ2ppbXUtYXJjZ2lzJ1xyXG5cclxuaW1wb3J0IHR5cGUgeyBJTUNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZydcclxuXHJcbmltcG9ydCBkZWZhdWx0TWVzc2FnZXMgZnJvbSAnLi90cmFuc2xhdGlvbnMvZGVmYXVsdCdcclxuXHJcbmludGVyZmFjZSBJU3RhdGUge1xyXG4gIGlkZWFTZWFyY2hJbnB1dDogc3RyaW5nXHJcbiAgamltdU1hcFZpZXc6IEppbXVNYXBWaWV3XHJcbiAgZmVhdHVyZUxheWVyOiBfX2VzcmkuRmVhdHVyZUxheWVyXHJcbiAgbG9hZGluZzogYm9vbGVhblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaWRnZXQgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PFxyXG5BbGxXaWRnZXRQcm9wczxJTUNvbmZpZz4sXHJcbklTdGF0ZVxyXG4+IHtcclxuICAvLyBHaXZlIHR5cGVzIHRvIHRoZSBtb2R1bGVzIHdlIGltcG9ydCBmcm9tIHRoZSBBcmNHSVMgQVBJIGZvciBKYXZhU2NyaXB0XHJcbiAgLy8gdG8gdGVsbCBUeXBlU2NyaXB0IHdoYXQgdHlwZXMgdGhleSBhcmUuXHJcbiAgRmVhdHVyZUxheWVyOiB0eXBlb2YgX19lc3JpLkZlYXR1cmVMYXllclxyXG4gIFF1ZXJ5OiB0eXBlb2YgX19lc3JpLlF1ZXJ5XHJcbiAgU3BhdGlhbFJlZmVyZW5jZTogdHlwZW9mIF9fZXNyaS5TcGF0aWFsUmVmZXJlbmNlXHJcbiAgR2VvcHJvY2Vzc29yOiB0eXBlb2YgX19lc3JpLkdlb3Byb2Nlc3NvclxyXG5cclxuICBzdGF0ZSA9IHtcclxuICAgIGlkZWFTZWFyY2hJbnB1dDogJycsXHJcbiAgICBqaW11TWFwVmlldzogbnVsbCxcclxuICAgIGZlYXR1cmVMYXllcjogbnVsbCxcclxuICAgIGxvYWRpbmc6IGZhbHNlXHJcbiAgfVxyXG5cclxuICAvLyBVUkwgZml4YSBkYSBjYW1hZGFcclxuICByZWFkb25seSBGRUFUVVJFX1NFUlZJQ0VfVVJMID0gJ2h0dHBzOi8vbWVpb2FtYmllbnRlLnNpc3RlbWFzLm1wYmEubXAuYnIvc2VydmVyL3Jlc3Qvc2VydmljZXMvSG9zdGVkL2FsZXJ0YXNfcmVnaW9uYWxfbGFwYS9GZWF0dXJlU2VydmVyJ1xyXG4gIFxyXG4gIC8vIFVSTCBkYSBmZXJyYW1lbnRhIGRlIGdlb3Byb2Nlc3NhbWVudG9cclxuICByZWFkb25seSBHUF9TRVJWSUNFX1VSTCA9ICdodHRwczovL21laW9hbWJpZW50ZS5zaXN0ZW1hcy5tcGJhLm1wLmJyL3NlcnZlci9yZXN0L3NlcnZpY2VzL3Rlc3Rlb3V0cHV0L3Byb2Nlc3NhcmFsZXJ0YV9pZGVhL0dQU2VydmVyJ1xyXG5cclxuICAvLyBGdW7Dp8OjbyBjaGFtYWRhIHF1YW5kbyBvIHZhbG9yIGRhIHBlc3F1aXNhIG11ZGFcclxuICBoYW5kbGVJZGVhU2VhcmNoSW5wdXRDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBpZGVhU2VhcmNoSW5wdXQ6IGV2ZW50LnRhcmdldC52YWx1ZVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIC8vIENhcnJlZ2EgYSBjYW1hZGEgYXV0b21hdGljYW1lbnRlIHF1YW5kbyBvIGNvbXBvbmVudGUgw6kgbW9udGFkbyBvdSBvIG1hcGEgZXN0w6EgZGlzcG9uw612ZWxcclxuICBjb21wb25lbnREaWRVcGRhdGUgPSAocHJldlByb3BzLCBwcmV2U3RhdGUpID0+IHtcclxuICAgIGlmICh0aGlzLnN0YXRlLmppbXVNYXBWaWV3ICYmICF0aGlzLnN0YXRlLmZlYXR1cmVMYXllciAmJiAhcHJldlN0YXRlLmppbXVNYXBWaWV3KSB7XHJcbiAgICAgIHRoaXMubG9hZEZlYXR1cmVMYXllcigpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBDYXJyZWdhIGEgY2FtYWRhIGRlIGZlYXR1cmUgc2VydmljZVxyXG4gIGxvYWRGZWF0dXJlTGF5ZXIgPSAoKSA9PiB7XHJcbiAgICBpZiAoIXRoaXMuc3RhdGUuamltdU1hcFZpZXcpIHtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUgfSlcclxuXHJcbiAgICBsb2FkQXJjR0lTSlNBUElNb2R1bGVzKFtcclxuICAgICAgJ2VzcmkvbGF5ZXJzL0ZlYXR1cmVMYXllcicsXHJcbiAgICAgICdlc3JpL2dlb21ldHJ5L1NwYXRpYWxSZWZlcmVuY2UnXHJcbiAgICBdKS50aGVuKChtb2R1bGVzKSA9PiB7XHJcbiAgICAgIFt0aGlzLkZlYXR1cmVMYXllciwgdGhpcy5TcGF0aWFsUmVmZXJlbmNlXSA9IG1vZHVsZXNcclxuXHJcbiAgICAgIC8vIENyaWEgYSBjYW1hZGEgY29tIGEgVVJMIGZpeGFcclxuICAgICAgY29uc3QgbGF5ZXIgPSBuZXcgdGhpcy5GZWF0dXJlTGF5ZXIoe1xyXG4gICAgICAgIHVybDogdGhpcy5GRUFUVVJFX1NFUlZJQ0VfVVJMXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICAvLyBBZGljaW9uYSBhIGNhbWFkYSBhbyBtYXBhXHJcbiAgICAgIHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldy5tYXAuYWRkKGxheWVyKVxyXG5cclxuICAgICAgLy8gQWd1YXJkYSBhIGNhbWFkYSBzZXIgY3JpYWRhXHJcbiAgICAgIGxheWVyLm9uKCdsYXllcnZpZXctY3JlYXRlJywgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgZmVhdHVyZUxheWVyOiBsYXllcixcclxuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXHJcbiAgICAgICAgfSlcclxuICAgICAgfSlcclxuXHJcbiAgICAgIGxheWVyLm9uKCdsYXllcnZpZXctY3JlYXRlLWVycm9yJywgKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm8gYW8gY2FycmVnYXIgYSBjYW1hZGEnKVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIC8vIEZ1bsOnw6NvIHBhcmEgZmlsdHJhciBlIGRhciB6b29tIG5vIHBvbMOtZ29ubyBiYXNlYWRvIG5hIHBlc3F1aXNhXHJcbiAgaGFuZGxlRmlsdGVyQW5kWm9vbSA9IGFzeW5jIChldnQpID0+IHtcclxuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpXHJcblxyXG4gICAgLy8gQ2Fzb3MgZGUgZXJyb1xyXG4gICAgaWYgKCF0aGlzLnN0YXRlLmppbXVNYXBWaWV3KSB7XHJcbiAgICAgIGFsZXJ0KCdQb3IgZmF2b3IsIGNvbmZpZ3VyZSB1bSBtYXBhIG5vIHdpZGdldC4nKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGlmICghdGhpcy5zdGF0ZS5mZWF0dXJlTGF5ZXIpIHtcclxuICAgICAgYWxlcnQoJ0EgY2FtYWRhIGFpbmRhIG7Do28gZm9pIGNhcnJlZ2FkYS4gQWd1YXJkZS4uLicpXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc3RhdGUuaWRlYVNlYXJjaElucHV0ID09PSAnJyB8fCB0aGlzLnN0YXRlLmlkZWFTZWFyY2hJbnB1dC50cmltKCkgPT09ICcnKSB7XHJcbiAgICAgIGFsZXJ0KCdQb3IgZmF2b3IsIGRpZ2l0ZSB1bSBuw7ptZXJvIHBhcmEgcGVzcXVpc2FyIG5hIGNvbHVuYSBpZGVhLicpXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiB0cnVlIH0pXHJcblxyXG4gICAgLy8gQ2FycmVnYSBvcyBtw7NkdWxvcyBuZWNlc3PDoXJpb3NcclxuICAgIGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMoW1xyXG4gICAgICAnZXNyaS9sYXllcnMvRmVhdHVyZUxheWVyJyxcclxuICAgICAgJ2VzcmkvZ2VvbWV0cnkvU3BhdGlhbFJlZmVyZW5jZSdcclxuICAgIF0pLnRoZW4oKG1vZHVsZXMpID0+IHtcclxuICAgICAgW3RoaXMuRmVhdHVyZUxheWVyLCB0aGlzLlNwYXRpYWxSZWZlcmVuY2VdID0gbW9kdWxlc1xyXG5cclxuICAgICAgY29uc3QgbGF5ZXIgPSB0aGlzLnN0YXRlLmZlYXR1cmVMYXllclxyXG4gICAgICBjb25zdCBzZWFyY2hWYWx1ZSA9IHRoaXMuc3RhdGUuaWRlYVNlYXJjaElucHV0LnRyaW0oKVxyXG4gICAgICBcclxuICAgICAgLy8gRXNjYXBhIGFzcGFzIHNpbXBsZXMgcGFyYSBldml0YXIgU1FMIGluamVjdGlvblxyXG4gICAgICBjb25zdCBlc2NhcGVkVmFsdWUgPSBzZWFyY2hWYWx1ZS5yZXBsYWNlKC8nL2csIFwiJydcIilcclxuXHJcbiAgICAgIC8vIFZlcmlmaWNhIHNlIGEgY2FtYWRhIGVzdMOhIGNhcnJlZ2FkYSBlIG9idMOpbSBpbmZvcm1hw6fDtWVzIGRvcyBjYW1wb3NcclxuICAgICAgLy8gQWd1YXJkYSBhIGNhbWFkYSBlc3RhciBjb21wbGV0YW1lbnRlIGNhcnJlZ2FkYVxyXG4gICAgICBjb25zdCBjaGVja0FuZFF1ZXJ5ID0gKCkgPT4ge1xyXG4gICAgICAgIC8vIExpc3RhIGRlIHBvc3PDrXZlaXMgbm9tZXMgZGUgY29sdW5hIChjYXNlLWluc2Vuc2l0aXZlKVxyXG4gICAgICAgIGNvbnN0IHBvc3NpYmxlRmllbGROYW1lcyA9IFsnaWRlYScsICdJREVBJywgJ0lkZWEnLCAnSUQnLCAnaWQnLCAnSWQnXVxyXG4gICAgICAgIGxldCBmaWVsZE5hbWUgPSAnaWRlYScgLy8gUGFkcsOjb1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFRlbnRhIGVuY29udHJhciBvIGNhbXBvIGNvcnJldG9cclxuICAgICAgICBpZiAobGF5ZXIuZmllbGRzICYmIGxheWVyLmZpZWxkcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICBjb25zdCBmb3VuZEZpZWxkID0gbGF5ZXIuZmllbGRzLmZpbmQoZmllbGQgPT4gXHJcbiAgICAgICAgICAgIHBvc3NpYmxlRmllbGROYW1lcy5pbmNsdWRlcyhmaWVsZC5uYW1lKVxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICAgaWYgKGZvdW5kRmllbGQpIHtcclxuICAgICAgICAgICAgZmllbGROYW1lID0gZm91bmRGaWVsZC5uYW1lXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBTZSBuw6NvIGVuY29udHJhciwgdGVudGEgZmF6ZXIgdW1hIGJ1c2NhIGNhc2UtaW5zZW5zaXRpdmVcclxuICAgICAgICAgICAgY29uc3QgY2FzZUluc2Vuc2l0aXZlRmllbGQgPSBsYXllci5maWVsZHMuZmluZChmaWVsZCA9PiBcclxuICAgICAgICAgICAgICBmaWVsZC5uYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdpZGVhJ1xyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIGlmIChjYXNlSW5zZW5zaXRpdmVGaWVsZCkge1xyXG4gICAgICAgICAgICAgIGZpZWxkTmFtZSA9IGNhc2VJbnNlbnNpdGl2ZUZpZWxkLm5hbWVcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAvLyBMb2cgZG9zIGNhbXBvcyBkaXNwb27DrXZlaXMgcGFyYSBkZWJ1Z1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDYW1wb3MgZGlzcG9uw612ZWlzIG5hIGNhbWFkYTonLCBsYXllci5maWVsZHMubWFwKGYgPT4gZi5uYW1lKSlcclxuICAgICAgICAgICAgICAvLyBUZW50YSB1c2FyIG8gcHJpbWVpcm8gY2FtcG8gcXVlIHBhcmVjZSBzZXIgdW0gSURcclxuICAgICAgICAgICAgICBjb25zdCBpZEZpZWxkID0gbGF5ZXIuZmllbGRzLmZpbmQoZmllbGQgPT4gXHJcbiAgICAgICAgICAgICAgICBmaWVsZC50eXBlID09PSAnZXNyaUZpZWxkVHlwZVN0cmluZycgfHwgZmllbGQudHlwZSA9PT0gJ2VzcmlGaWVsZFR5cGVJbnRlZ2VyJyB8fCBmaWVsZC50eXBlID09PSAnZXNyaUZpZWxkVHlwZURvdWJsZSdcclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgaWYgKGlkRmllbGQpIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkTmFtZSA9IGlkRmllbGQubmFtZVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFVzYW5kbyBjYW1wbzogJHtmaWVsZE5hbWV9YClcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENyaWEgdW1hIHF1ZXJ5IHBhcmEgYnVzY2FyIG8gcG9sw61nb25vIHBlbGEgY29sdW5hXHJcbiAgICAgICAgLy8gVXNhIExJS0UgcGFyYSBidXNjYSBtYWlzIGZsZXjDrXZlbCBlIHRyYXRhIGNvbW8gc3RyaW5nXHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSBsYXllci5jcmVhdGVRdWVyeSgpXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gVGVudGEgZGlmZXJlbnRlcyBhYm9yZGFnZW5zIGRlIHF1ZXJ5XHJcbiAgICAgICAgLy8gMS4gQnVzY2EgZXhhdGEgY29tbyBzdHJpbmdcclxuICAgICAgICAvLyAyLiBCdXNjYSBjb20gTElLRSBwYXJhIHZhbG9yZXMgcGFyY2lhaXNcclxuICAgICAgICAvLyAzLiBCdXNjYSBjb21vIG7Dum1lcm8gKHNlIG8gdmFsb3IgZm9yIG51bcOpcmljbylcclxuICAgICAgICBjb25zdCBoYXNTcGVjaWFsQ2hhcnMgPSBzZWFyY2hWYWx1ZS5pbmRleE9mKCcuJykgIT09IC0xIHx8IHNlYXJjaFZhbHVlLmluZGV4T2YoJy8nKSAhPT0gLTFcclxuICAgICAgICBcclxuICAgICAgICAvLyBQYXJhIHZhbG9yZXMgY29tIGNhcmFjdGVyZXMgZXNwZWNpYWlzIChjb21vIFwiMDAzLjkuNDI3MDc0LzIwMjVcIiksIHVzYSBhcGVuYXMgY29tbyBzdHJpbmdcclxuICAgICAgICBpZiAoaGFzU3BlY2lhbENoYXJzKSB7XHJcbiAgICAgICAgICBxdWVyeS53aGVyZSA9IGAke2ZpZWxkTmFtZX0gPSAnJHtlc2NhcGVkVmFsdWV9J2BcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLy8gU2UgZm9yIHVtIG7Dum1lcm8gc2ltcGxlcywgdGVudGEgY29tbyBuw7ptZXJvIGUgY29tbyBzdHJpbmdcclxuICAgICAgICAgIGNvbnN0IGlzTnVtZXJpYyA9ICFpc05hTihwYXJzZUZsb2F0KHNlYXJjaFZhbHVlKSkgJiYgaXNGaW5pdGUocGFyc2VGbG9hdChzZWFyY2hWYWx1ZSkpXHJcbiAgICAgICAgICBpZiAoaXNOdW1lcmljKSB7XHJcbiAgICAgICAgICAgIHF1ZXJ5LndoZXJlID0gYCR7ZmllbGROYW1lfSA9ICR7c2VhcmNoVmFsdWV9IE9SICR7ZmllbGROYW1lfSA9ICcke2VzY2FwZWRWYWx1ZX0nYFxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcXVlcnkud2hlcmUgPSBgJHtmaWVsZE5hbWV9ID0gJyR7ZXNjYXBlZFZhbHVlfSdgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHF1ZXJ5LnJldHVybkdlb21ldHJ5ID0gdHJ1ZVxyXG5cclxuICAgICAgICAvLyBFeGVjdXRhIGEgcXVlcnlcclxuICAgICAgICBsYXllci5xdWVyeUZlYXR1cmVzKHF1ZXJ5KS50aGVuKChyZXN1bHRzKSA9PiB7XHJcbiAgICAgICAgICBpZiAocmVzdWx0cy5mZWF0dXJlcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgLy8gU2UgbsOjbyBlbmNvbnRyb3UsIHRlbnRhIGNvbSBMSUtFXHJcbiAgICAgICAgICAgIGNvbnN0IGxpa2VRdWVyeSA9IGxheWVyLmNyZWF0ZVF1ZXJ5KClcclxuICAgICAgICAgICAgbGlrZVF1ZXJ5LndoZXJlID0gYCR7ZmllbGROYW1lfSBMSUtFICclJHtlc2NhcGVkVmFsdWV9JSdgXHJcbiAgICAgICAgICAgIGxpa2VRdWVyeS5yZXR1cm5HZW9tZXRyeSA9IHRydWVcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiBsYXllci5xdWVyeUZlYXR1cmVzKGxpa2VRdWVyeSkudGhlbigobGlrZVJlc3VsdHMpID0+IHtcclxuICAgICAgICAgICAgICBpZiAobGlrZVJlc3VsdHMuZmVhdHVyZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChgTmVuaHVtIHBvbMOtZ29ubyBlbmNvbnRyYWRvIGNvbSAke2ZpZWxkTmFtZX0gPSAke3NlYXJjaFZhbHVlfWApXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSlcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAvLyBTZSBlbmNvbnRyb3UgY29tIExJS0UsIHVzYSBvIHByaW1laXJvIHJlc3VsdGFkb1xyXG4gICAgICAgICAgICAgIGNvbnN0IGZvdW5kR3JhcGhpYyA9IGxpa2VSZXN1bHRzLmZlYXR1cmVzWzBdXHJcbiAgICAgICAgICAgICAgY29uc3QgYWN0dWFsVmFsdWUgPSBmb3VuZEdyYXBoaWMuYXR0cmlidXRlc1tmaWVsZE5hbWVdXHJcbiAgICAgICAgICAgICAgdGhpcy5hcHBseUZpbHRlckFuZFpvb20obGF5ZXIsIGZvdW5kR3JhcGhpYywgZmllbGROYW1lLCBhY3R1YWxWYWx1ZSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvLyBTZSBlbmNvbnRyb3UsIGFwbGljYSBmaWx0cm8gZSB6b29tXHJcbiAgICAgICAgICBjb25zdCBmb3VuZEdyYXBoaWMgPSByZXN1bHRzLmZlYXR1cmVzWzBdXHJcbiAgICAgICAgICBjb25zdCBhY3R1YWxWYWx1ZSA9IGZvdW5kR3JhcGhpYy5hdHRyaWJ1dGVzW2ZpZWxkTmFtZV1cclxuICAgICAgICAgIHRoaXMuYXBwbHlGaWx0ZXJBbmRab29tKGxheWVyLCBmb3VuZEdyYXBoaWMsIGZpZWxkTmFtZSwgYWN0dWFsVmFsdWUpXHJcbiAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvIGFvIHBlc3F1aXNhciBmZWF0dXJlczonLCBlcnJvcilcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0RldGFsaGVzIGRvIGVycm86Jywge1xyXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLFxyXG4gICAgICAgICAgICBkZXRhaWxzOiBlcnJvci5kZXRhaWxzLFxyXG4gICAgICAgICAgICBmaWVsZE5hbWU6IGZpZWxkTmFtZSxcclxuICAgICAgICAgICAgc2VhcmNoVmFsdWU6IHNlYXJjaFZhbHVlXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAvLyBUZW50YSBtb3N0cmFyIGluZm9ybWHDp8O1ZXMgbWFpcyDDunRlaXNcclxuICAgICAgICAgIGxldCBlcnJvck1lc3NhZ2UgPSAnRXJybyBhbyBwZXNxdWlzYXIuICdcclxuICAgICAgICAgIGlmIChsYXllci5maWVsZHMgJiYgbGF5ZXIuZmllbGRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgY29uc3QgZmllbGROYW1lcyA9IGxheWVyLmZpZWxkcy5tYXAoZiA9PiBmLm5hbWUpLmpvaW4oJywgJylcclxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlICs9IGBcXG5cXG5DYW1wb3MgZGlzcG9uw612ZWlzOiAke2ZpZWxkTmFtZXN9YFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZXJyb3JNZXNzYWdlICs9IGBcXG5cXG5WZXJpZmlxdWUgc2UgYSBjb2x1bmEgXCIke2ZpZWxkTmFtZX1cIiBleGlzdGUgZSBzZSBvIHZhbG9yIFwiJHtzZWFyY2hWYWx1ZX1cIiBlc3TDoSBjb3JyZXRvLmBcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgYWxlcnQoZXJyb3JNZXNzYWdlKVxyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLy8gU2UgYSBjYW1hZGEgasOhIGVzdMOhIGNhcnJlZ2FkYSwgZXhlY3V0YSBkaXJldGFtZW50ZVxyXG4gICAgICBpZiAobGF5ZXIubG9hZGVkKSB7XHJcbiAgICAgICAgY2hlY2tBbmRRdWVyeSgpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gQWd1YXJkYSBhIGNhbWFkYSBjYXJyZWdhclxyXG4gICAgICAgIGxheWVyLndoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgY2hlY2tBbmRRdWVyeSgpXHJcbiAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvIGFvIGNhcnJlZ2FyIGluZm9ybWHDp8O1ZXMgZGEgY2FtYWRhOicsIGVycm9yKVxyXG4gICAgICAgICAgYWxlcnQoJ0Vycm8gYW8gY2FycmVnYXIgaW5mb3JtYcOnw7VlcyBkYSBjYW1hZGEuIFZlcmlmaXF1ZSBzZSBhIGNhbWFkYSBlc3TDoSBhY2Vzc8OtdmVsLicpXHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSlcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgLy8gRnVuw6fDo28gYXV4aWxpYXIgcGFyYSBhcGxpY2FyIGZpbHRybyBlIHpvb21cclxuICBhcHBseUZpbHRlckFuZFpvb20gPSAobGF5ZXIsIGdyYXBoaWMsIGZpZWxkTmFtZSwgYWN0dWFsVmFsdWUpID0+IHtcclxuICAgIC8vIE9idMOpbSBvIHZhbG9yIHJlYWwgZG8gYXRyaWJ1dG8gZG8gZ3JhcGhpY1xyXG4gICAgY29uc3QgYXR0cmlidXRlVmFsdWUgPSBncmFwaGljLmF0dHJpYnV0ZXNbZmllbGROYW1lXVxyXG4gICAgXHJcbiAgICAvLyBTZSBvIHZhbG9yIG7Do28gZm9pIHBhc3NhZG8sIHVzYSBvIGRvIGF0cmlidXRvXHJcbiAgICBjb25zdCB2YWx1ZVRvRmlsdGVyID0gYWN0dWFsVmFsdWUgIT09IHVuZGVmaW5lZCA/IGFjdHVhbFZhbHVlIDogYXR0cmlidXRlVmFsdWVcclxuICAgIFxyXG4gICAgLy8gRXNjYXBhIG8gdmFsb3IgcGFyYSBTUUwgKHRyYXRhIHN0cmluZ3MsIG7Dum1lcm9zIGUgbnVsbClcclxuICAgIGxldCBkZWZpbml0aW9uRXhwcmVzc2lvblxyXG4gICAgaWYgKHZhbHVlVG9GaWx0ZXIgPT09IG51bGwgfHwgdmFsdWVUb0ZpbHRlciA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGRlZmluaXRpb25FeHByZXNzaW9uID0gYCR7ZmllbGROYW1lfSBJUyBOVUxMYFxyXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWVUb0ZpbHRlciA9PT0gJ251bWJlcicpIHtcclxuICAgICAgZGVmaW5pdGlvbkV4cHJlc3Npb24gPSBgJHtmaWVsZE5hbWV9ID0gJHt2YWx1ZVRvRmlsdGVyfWBcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIMOJIHVtYSBzdHJpbmcsIHByZWNpc2EgZXNjYXBhciBhc3BhcyBzaW1wbGVzXHJcbiAgICAgIGNvbnN0IGVzY2FwZWRWYWx1ZSA9IFN0cmluZyh2YWx1ZVRvRmlsdGVyKS5yZXBsYWNlKC8nL2csIFwiJydcIilcclxuICAgICAgZGVmaW5pdGlvbkV4cHJlc3Npb24gPSBgJHtmaWVsZE5hbWV9ID0gJyR7ZXNjYXBlZFZhbHVlfSdgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnNvbGUubG9nKGBBcGxpY2FuZG8gZmlsdHJvOiAke2ZpZWxkTmFtZX0gPSAke3ZhbHVlVG9GaWx0ZXJ9YClcclxuICAgIGNvbnNvbGUubG9nKGBEZWZpbml0aW9uIEV4cHJlc3Npb246ICR7ZGVmaW5pdGlvbkV4cHJlc3Npb259YClcclxuXHJcbiAgICAvLyBBcGxpY2EgbyBmaWx0cm8gbmEgY2FtYWRhIHVzYW5kbyBkZWZpbml0aW9uRXhwcmVzc2lvblxyXG4gICAgLy8gSXNzbyDDqSBvIG3DqXRvZG8gY29ycmV0byBwYXJhIGZpbHRyYXIgdW1hIEZlYXR1cmVMYXllciBlIG9jdWx0YXIgb3V0cm9zIHBvbMOtZ29ub3NcclxuICAgIGxheWVyLmRlZmluaXRpb25FeHByZXNzaW9uID0gZGVmaW5pdGlvbkV4cHJlc3Npb25cclxuICAgIFxyXG4gICAgLy8gRm9yw6dhIGEgYXR1YWxpemHDp8OjbyBpbWVkaWF0YSBkYSBjYW1hZGEgcGFyYSBhcGxpY2FyIG8gZmlsdHJvXHJcbiAgICBsYXllci5yZWZyZXNoKClcclxuICAgIFxyXG4gICAgY29uc29sZS5sb2coJ0ZpbHRybyBhcGxpY2Fkby4gQSBjYW1hZGEgZGV2ZSBtb3N0cmFyIEFQRU5BUyBvIHBvbMOtZ29ubyBzZWxlY2lvbmFkbycpXHJcbiAgICBcclxuICAgIC8vIEFndWFyZGEgcXVlIGEgY2FtYWRhIGVzdGVqYSBjb21wbGV0YW1lbnRlIGNhcnJlZ2FkYSBhbnRlcyBkZSBhcGxpY2FyIG8gZmlsdHJvXHJcbiAgICBpZiAobGF5ZXIubG9hZGVkKSB7XHJcbiAgICAgIC8vIEEgY2FtYWRhIGrDoSBlc3TDoSBjYXJyZWdhZGEsIGFwbGljYSBvIGZpbHRybyBkaXJldGFtZW50ZVxyXG4gICAgICB0aGlzLmFwcGx5Wm9vbUFmdGVyRmlsdGVyKGxheWVyLCBncmFwaGljKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gQWd1YXJkYSBhIGNhbWFkYSBjYXJyZWdhciBwcmltZWlyb1xyXG4gICAgICBsYXllci53aGVuKCgpID0+IHtcclxuICAgICAgICAvLyBBcGxpY2EgbyBmaWx0cm8gbm92YW1lbnRlIGFww7NzIGNhcnJlZ2FyIChnYXJhbnRpYSlcclxuICAgICAgICBsYXllci5kZWZpbml0aW9uRXhwcmVzc2lvbiA9IGRlZmluaXRpb25FeHByZXNzaW9uXHJcbiAgICAgICAgbGF5ZXIucmVmcmVzaCgpXHJcbiAgICAgICAgdGhpcy5hcHBseVpvb21BZnRlckZpbHRlcihsYXllciwgZ3JhcGhpYylcclxuICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJybyBhbyBhZ3VhcmRhciBjYW1hZGE6JywgZXJyb3IpXHJcbiAgICAgICAgLy8gTWVzbW8gYXNzaW0gdGVudGEgYXBsaWNhciBvIHpvb21cclxuICAgICAgICB0aGlzLmFwcGx5Wm9vbUFmdGVyRmlsdGVyKGxheWVyLCBncmFwaGljKVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gRnVuw6fDo28gYXV4aWxpYXIgcGFyYSBhcGxpY2FyIHpvb20gYXDDs3MgbyBmaWx0cm9cclxuICBhcHBseVpvb21BZnRlckZpbHRlciA9IChsYXllciwgZ3JhcGhpYykgPT4ge1xyXG4gICAgLy8gQWd1YXJkYSB1bSBwb3VjbyBwYXJhIGdhcmFudGlyIHF1ZSBvIGZpbHRybyBzZWphIHByb2Nlc3NhZG8gcGVsYSBjYW1hZGFcclxuICAgIC8vIE8gZGVmaW5pdGlvbkV4cHJlc3Npb24gcHJlY2lzYSBkZSB0ZW1wbyBwYXJhIHNlciBwcm9jZXNzYWRvXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgLy8gRMOhIHpvb20gbm8gcG9sw61nb25vIGVuY29udHJhZG9cclxuICAgICAgaWYgKGdyYXBoaWMuZ2VvbWV0cnkpIHtcclxuICAgICAgICB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcuZ29Ubyh7XHJcbiAgICAgICAgICB0YXJnZXQ6IGdyYXBoaWMuZ2VvbWV0cnksXHJcbiAgICAgICAgICB6b29tOiAxNVxyXG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pXHJcbiAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvIGFvIGRhciB6b29tOicsIGVycm9yKVxyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSlcclxuICAgICAgfVxyXG4gICAgfSwgNTAwKVxyXG4gIH1cclxuXHJcbiAgLy8gRnVuw6fDo28gcGFyYSBsaW1wYXIgbyBmaWx0cm9cclxuICBoYW5kbGVDbGVhckZpbHRlciA9ICgpID0+IHtcclxuICAgIGlmICh0aGlzLnN0YXRlLmZlYXR1cmVMYXllcikge1xyXG4gICAgICAvLyBSZW1vdmUgbyBmaWx0cm8gZGVmaW5pbmRvIGRlZmluaXRpb25FeHByZXNzaW9uIGNvbW8gdmF6aW9cclxuICAgICAgdGhpcy5zdGF0ZS5mZWF0dXJlTGF5ZXIuZGVmaW5pdGlvbkV4cHJlc3Npb24gPSAnJ1xyXG4gICAgICBjb25zb2xlLmxvZygnRmlsdHJvIHJlbW92aWRvJylcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgaWRlYVNlYXJjaElucHV0OiAnJ1xyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gRnVuw6fDo28gcGFyYSBnZXJhciByZWxhdMOzcmlvIHVzYW5kbyBhIGZlcnJhbWVudGEgZGUgZ2VvcHJvY2Vzc2FtZW50b1xyXG4gIGhhbmRsZUdlbmVyYXRlUmVwb3J0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgLy8gVmFsaWRhw6fDtWVzXHJcbiAgICBpZiAodGhpcy5zdGF0ZS5pZGVhU2VhcmNoSW5wdXQgPT09ICcnIHx8IHRoaXMuc3RhdGUuaWRlYVNlYXJjaElucHV0LnRyaW0oKSA9PT0gJycpIHtcclxuICAgICAgYWxlcnQoJ1BvciBmYXZvciwgZGlnaXRlIHVtIG7Dum1lcm8gZGUgaWRlYSBwYXJhIGdlcmFyIG8gcmVsYXTDs3Jpby4nKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpZGVhTnVtYmVyID0gdGhpcy5zdGF0ZS5pZGVhU2VhcmNoSW5wdXQudHJpbSgpXHJcbiAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSB9KVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIC8vIENhcnJlZ2EgbyBtw7NkdWxvIEdlb3Byb2Nlc3NvclxyXG4gICAgICBjb25zdCBtb2R1bGVzID0gYXdhaXQgbG9hZEFyY0dJU0pTQVBJTW9kdWxlcyhbXHJcbiAgICAgICAgJ2VzcmkvdGFza3MvR2VvcHJvY2Vzc29yJ1xyXG4gICAgICBdKVxyXG4gICAgICBcclxuICAgICAgY29uc3QgW0dlb3Byb2Nlc3Nvcl0gPSBtb2R1bGVzXHJcbiAgICAgIHRoaXMuR2VvcHJvY2Vzc29yID0gR2VvcHJvY2Vzc29yXHJcblxyXG4gICAgICAvLyBDcmlhIHVtYSBpbnN0w6JuY2lhIGRvIEdlb3Byb2Nlc3NvclxyXG4gICAgICBjb25zdCBncCA9IG5ldyB0aGlzLkdlb3Byb2Nlc3Nvcih7XHJcbiAgICAgICAgdXJsOiB0aGlzLkdQX1NFUlZJQ0VfVVJMXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICAvLyBQcmVwYXJhIG9zIHBhcsOibWV0cm9zIGRlIGVudHJhZGFcclxuICAgICAgLy8gVGVudGEgZGlmZXJlbnRlcyBub21lcyBkZSBwYXLDom1ldHJvIGNvbXVuc1xyXG4gICAgICBsZXQgaW5wdXRQYXJhbXMgPSB7fVxyXG4gICAgICBcclxuICAgICAgLy8gQWd1YXJkYSBhIEdQIGVzdGFyIHByb250YSAoc2UgbmVjZXNzw6FyaW8pXHJcbiAgICAgIGlmIChncC53aGVuKSB7XHJcbiAgICAgICAgYXdhaXQgZ3Aud2hlbigpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFRlbnRhIG9idGVyIGluZm9ybWHDp8O1ZXMgZGEgdGFyZWZhIHBhcmEgZGVzY29icmlyIG9zIHBhcsOibWV0cm9zIGNvcnJldG9zXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgLy8gVGVudGEgYWNlc3NhciB0YXNrSW5mbyBhcMOzcyBhIEdQIGVzdGFyIHByb250YVxyXG4gICAgICAgIGNvbnN0IGdwSW5mbyA9IGdwLnRhc2tJbmZvIHx8IChncC51cmxJbmZvID8gYXdhaXQgZ3AudXJsSW5mbygpIDogbnVsbClcclxuICAgICAgICBcclxuICAgICAgICBpZiAoZ3BJbmZvKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnSW5mb3JtYcOnw7VlcyBkYSBHUDonLCBncEluZm8pXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC8vIFNlIGEgR1AgdGl2ZXIgcGFyw6JtZXRyb3MgZXNwZWPDrWZpY29zLCB2YW1vcyB1c2FyIGVsZXNcclxuICAgICAgICAgIGlmIChncEluZm8ucGFyYW1ldGVycyAmJiBncEluZm8ucGFyYW1ldGVycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlkZWFQYXJhbSA9IGdwSW5mby5wYXJhbWV0ZXJzLmZpbmQocCA9PiBcclxuICAgICAgICAgICAgICBwLm5hbWUgJiYgKHAubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCdpZGVhJykgfHwgcC5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ2lkJykpXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgaWYgKGlkZWFQYXJhbSkge1xyXG4gICAgICAgICAgICAgIGlucHV0UGFyYW1zW2lkZWFQYXJhbS5uYW1lXSA9IGlkZWFOdW1iZXJcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAvLyBTZSBuw6NvIGVuY29udHJhciwgdXNhIG8gcHJpbWVpcm8gcGFyw6JtZXRybyBkZSBlbnRyYWRhXHJcbiAgICAgICAgICAgICAgY29uc3QgaW5wdXRQYXJhbSA9IGdwSW5mby5wYXJhbWV0ZXJzLmZpbmQocCA9PiBwLmRpcmVjdGlvbiA9PT0gJ2VzcmlHUFBhcmFtZXRlckRpcmVjdGlvbklucHV0JylcclxuICAgICAgICAgICAgICBpZiAoaW5wdXRQYXJhbSkge1xyXG4gICAgICAgICAgICAgICAgaW5wdXRQYXJhbXNbaW5wdXRQYXJhbS5uYW1lXSA9IGlkZWFOdW1iZXJcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaW5wdXRQYXJhbXNbJ2lkZWEnXSA9IGlkZWFOdW1iZXJcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlucHV0UGFyYW1zWydpZGVhJ10gPSBpZGVhTnVtYmVyXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vIFNlIG7Do28gdGl2ZXIgaW5mb3JtYcOnw7VlcywgdGVudGEgZGlyZXRhbWVudGUgY29tICdpZGVhJ1xyXG4gICAgICAgICAgaW5wdXRQYXJhbXNbJ2lkZWEnXSA9IGlkZWFOdW1iZXJcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGluZm9FcnJvcikge1xyXG4gICAgICAgIC8vIFNlIGZhbGhhciBhbyBvYnRlciBpbmZvcm1hw6fDtWVzLCB1c2EgJ2lkZWEnIGNvbW8gcGFkcsOjb1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdOw6NvIGZvaSBwb3Nzw612ZWwgb2J0ZXIgaW5mb3JtYcOnw7VlcyBkYSB0YXJlZmEsIHVzYW5kbyBwYXLDom1ldHJvIHBhZHLDo286JywgaW5mb0Vycm9yKVxyXG4gICAgICAgIGlucHV0UGFyYW1zWydpZGVhJ10gPSBpZGVhTnVtYmVyXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKCdQYXLDom1ldHJvcyBlbnZpYWRvcyBwYXJhIGEgR1A6JywgaW5wdXRQYXJhbXMpXHJcblxyXG4gICAgICAvLyBFeGVjdXRhIGEgdGFyZWZhXHJcbiAgICAgIC8vIFByaW1laXJvIHRlbnRhIGV4ZWN1dGUgKHRhcmVmYSBzw61uY3JvbmEpLCBzZSBmYWxoYXIsIHRlbnRhIHN1Ym1pdEpvYiAodGFyZWZhIGFzc8OtbmNyb25hKVxyXG4gICAgICBsZXQgcmVzdWx0XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgcmVzdWx0ID0gYXdhaXQgZ3AuZXhlY3V0ZShpbnB1dFBhcmFtcylcclxuICAgICAgfSBjYXRjaCAoZXhlY3V0ZUVycm9yKSB7XHJcbiAgICAgICAgLy8gU2UgZXhlY3V0ZSBmYWxoYXIsIHBvZGUgc2VyIHVtYSB0YXJlZmEgYXNzw61uY3JvbmFcclxuICAgICAgICBjb25zb2xlLmxvZygnVGFyZWZhIHBvZGUgc2VyIGFzc8OtbmNyb25hLCB0ZW50YW5kbyBzdWJtaXRKb2I6JywgZXhlY3V0ZUVycm9yKVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCBqb2JJbmZvID0gYXdhaXQgZ3Auc3VibWl0Sm9iKGlucHV0UGFyYW1zKVxyXG4gICAgICAgICAgY29uc29sZS5sb2coJ0pvYiBlbnZpYWRvOicsIGpvYkluZm8pXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC8vIEFndWFyZGEgbyBqb2IgY29tcGxldGFyIHVzYW5kbyB3YWl0Rm9ySm9iQ29tcGxldGlvbiBzZSBkaXNwb27DrXZlbCwgc2Vuw6NvIGZheiBwb2xsaW5nXHJcbiAgICAgICAgICBpZiAoZ3Aud2FpdEZvckpvYkNvbXBsZXRpb24pIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gYXdhaXQgZ3Aud2FpdEZvckpvYkNvbXBsZXRpb24oam9iSW5mby5qb2JJZCwgKHN0YXR1cykgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTdGF0dXMgZG8gam9iOicsIHN0YXR1cy5qb2JTdGF0dXMpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBQb2xsaW5nIG1hbnVhbCBzZSB3YWl0Rm9ySm9iQ29tcGxldGlvbiBuw6NvIGVzdGl2ZXIgZGlzcG9uw612ZWxcclxuICAgICAgICAgICAgbGV0IGpvYlN0YXR1cyA9IGF3YWl0IGdwLmNoZWNrSm9iU3RhdHVzKGpvYkluZm8uam9iSWQpXHJcbiAgICAgICAgICAgIHdoaWxlIChqb2JTdGF0dXMuam9iU3RhdHVzID09PSAnZXNyaUpvYkV4ZWN1dGluZycgfHwgam9iU3RhdHVzLmpvYlN0YXR1cyA9PT0gJ2VzcmlKb2JTdWJtaXR0ZWQnKSB7XHJcbiAgICAgICAgICAgICAgYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDEwMDApKSAvLyBBZ3VhcmRhIDEgc2VndW5kb1xyXG4gICAgICAgICAgICAgIGpvYlN0YXR1cyA9IGF3YWl0IGdwLmNoZWNrSm9iU3RhdHVzKGpvYkluZm8uam9iSWQpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChqb2JTdGF0dXMuam9iU3RhdHVzID09PSAnZXNyaUpvYlN1Y2NlZWRlZCcpIHtcclxuICAgICAgICAgICAgICAvLyBPYnTDqW0gb3MgcmVzdWx0YWRvcyBkbyBqb2JcclxuICAgICAgICAgICAgICByZXN1bHQgPSBqb2JTdGF0dXNcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEpvYiBmYWxob3UgY29tIHN0YXR1czogJHtqb2JTdGF0dXMuam9iU3RhdHVzfWApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChqb2JFcnJvcikge1xyXG4gICAgICAgICAgLy8gU2Ugc3VibWl0Sm9iIHRhbWLDqW0gZmFsaGFyLCBsYW7Dp2EgbyBlcnJvIG9yaWdpbmFsXHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvIGFvIGV4ZWN1dGFyIGpvYiBhc3PDrW5jcm9ubzonLCBqb2JFcnJvcilcclxuICAgICAgICAgIHRocm93IGV4ZWN1dGVFcnJvclxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgY29uc29sZS5sb2coJ1Jlc3VsdGFkbyBkYSBHUDonLCByZXN1bHQpXHJcblxyXG4gICAgICAvLyBQcm9jZXNzYSBvIHJlc3VsdGFkb1xyXG4gICAgICAvLyBOb3JtYWxtZW50ZSwgYSBHUCByZXRvcm5hIHVtIG9iamV0byBjb20gcmVzdWx0YWRvc1xyXG4gICAgICAvLyBQcmVjaXNhbW9zIGVuY29udHJhciBhIFVSTCBkbyBIVE1MIGdlcmFkb1xyXG4gICAgICBsZXQgaHRtbFVybCA9IG51bGxcclxuXHJcbiAgICAgIGlmIChyZXN1bHQucmVzdWx0cyAmJiByZXN1bHQucmVzdWx0cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgLy8gUHJvY3VyYSBwZWxvIHJlc3VsdGFkbyBxdWUgY29udMOpbSBhIFVSTCBkbyBIVE1MXHJcbiAgICAgICAgZm9yIChjb25zdCByZXN1bHRJdGVtIG9mIHJlc3VsdC5yZXN1bHRzKSB7XHJcbiAgICAgICAgICBpZiAocmVzdWx0SXRlbS52YWx1ZSkge1xyXG4gICAgICAgICAgICAvLyBPIHZhbG9yIHBvZGUgc2VyIHVtYSBVUkwgZGlyZXRhIG91IHVtIG9iamV0byBjb20gVVJMXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcmVzdWx0SXRlbS52YWx1ZSA9PT0gJ3N0cmluZycgJiYgcmVzdWx0SXRlbS52YWx1ZS5pbmNsdWRlcygnLmh0bWwnKSkge1xyXG4gICAgICAgICAgICAgIGh0bWxVcmwgPSByZXN1bHRJdGVtLnZhbHVlXHJcbiAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHRJdGVtLnZhbHVlLnVybCAmJiByZXN1bHRJdGVtLnZhbHVlLnVybC5pbmNsdWRlcygnLmh0bWwnKSkge1xyXG4gICAgICAgICAgICAgIGh0bWxVcmwgPSByZXN1bHRJdGVtLnZhbHVlLnVybFxyXG4gICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0SXRlbS52YWx1ZS5wYXRoVXJsKSB7XHJcbiAgICAgICAgICAgICAgaHRtbFVybCA9IHJlc3VsdEl0ZW0udmFsdWUucGF0aFVybFxyXG4gICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFNlIG7Do28gZW5jb250cm91IG5vIHJlc3VsdGFkbyBwYWRyw6NvLCB0ZW50YSBvdXRyYXMgZXN0cnV0dXJhc1xyXG4gICAgICBpZiAoIWh0bWxVcmwgJiYgcmVzdWx0Lm91dHB1dFVybCkge1xyXG4gICAgICAgIGh0bWxVcmwgPSByZXN1bHQub3V0cHV0VXJsXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICghaHRtbFVybCAmJiByZXN1bHQudXJsKSB7XHJcbiAgICAgICAgaHRtbFVybCA9IHJlc3VsdC51cmxcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gU2UgYWluZGEgbsOjbyBlbmNvbnRyb3UsIHRlbnRhIHByb2N1cmFyIGVtIHRvZG8gbyBvYmpldG8gZGUgcmVzdWx0YWRvXHJcbiAgICAgIGlmICghaHRtbFVybCkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdFN0cmluZyA9IEpTT04uc3RyaW5naWZ5KHJlc3VsdClcclxuICAgICAgICBjb25zdCB1cmxNYXRjaCA9IHJlc3VsdFN0cmluZy5tYXRjaCgvaHR0cHM/OlxcL1xcL1teXFxzXCI8Pl0rXFwuaHRtbC9nKVxyXG4gICAgICAgIGlmICh1cmxNYXRjaCAmJiB1cmxNYXRjaC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICBodG1sVXJsID0gdXJsTWF0Y2hbMF1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChodG1sVXJsKSB7XHJcbiAgICAgICAgLy8gQWJyZSBvIEhUTUwgZW0gdW1hIG5vdmEgZ3VpYVxyXG4gICAgICAgIHdpbmRvdy5vcGVuKGh0bWxVcmwsICdfYmxhbmsnKVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIFNlIG7Do28gZW5jb250cm91IGEgVVJMLCBtb3N0cmEgbyByZXN1bHRhZG8gY29tcGxldG8gcGFyYSBkZWJ1Z1xyXG4gICAgICAgIGNvbnNvbGUud2FybignTsOjbyBmb2kgcG9zc8OtdmVsIGVuY29udHJhciBhIFVSTCBkbyBIVE1MIG5vIHJlc3VsdGFkbzonLCByZXN1bHQpXHJcbiAgICAgICAgYWxlcnQoJ1JlbGF0w7NyaW8gZ2VyYWRvLCBtYXMgbsOjbyBmb2kgcG9zc8OtdmVsIGVuY29udHJhciBhIFVSTCBkbyBIVE1MLiBWZXJpZmlxdWUgbyBjb25zb2xlIHBhcmEgbWFpcyBkZXRhbGhlcy4nKVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KVxyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvIGFvIGV4ZWN1dGFyIGEgZmVycmFtZW50YSBkZSBnZW9wcm9jZXNzYW1lbnRvOicsIGVycm9yKVxyXG4gICAgICBsZXQgZXJyb3JNZXNzYWdlID0gJ0Vycm8gYW8gZ2VyYXIgcmVsYXTDs3Jpby4gJ1xyXG4gICAgICBcclxuICAgICAgaWYgKGVycm9yLm1lc3NhZ2UpIHtcclxuICAgICAgICBlcnJvck1lc3NhZ2UgKz0gZXJyb3IubWVzc2FnZVxyXG4gICAgICB9IGVsc2UgaWYgKGVycm9yLmRldGFpbHMgJiYgZXJyb3IuZGV0YWlscy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgZXJyb3JNZXNzYWdlICs9IGVycm9yLmRldGFpbHNbMF1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBlcnJvck1lc3NhZ2UgKz0gJ1ZlcmlmaXF1ZSBzZSBvIG7Dum1lcm8gZGUgaWRlYSBlc3TDoSBjb3JyZXRvIGUgdGVudGUgbm92YW1lbnRlLidcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgYWxlcnQoZXJyb3JNZXNzYWdlKVxyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlciAoKSB7XHJcbiAgICBjb25zdCBzdHlsZSA9IGNzc2BcclxuICAgICAgLndpZGdldC1jb250YWluZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBnYXA6IDEycHg7XHJcbiAgICAgIH1cclxuICAgICAgZm9ybSA+IGRpdiB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBnYXA6IDhweDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgZmxleDogMTtcclxuICAgICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgbWluLXdpZHRoOiAxMDBweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNjY2NDA7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFlNGYzMjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICY6ZGlzYWJsZWQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG4gICAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAucmVwb3J0LWJ1dHRvbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI2NjY0MDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgcGFkZGluZzogOHB4IDE2cHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICAgICAgICBwb2ludGVyLWV2ZW50czogYXV0bztcclxuICAgICAgICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxZTRmMzI7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjphY3RpdmU6bm90KDpkaXNhYmxlZCkge1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6Zm9jdXM6bm90KDpkaXNhYmxlZCkge1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6ZGlzYWJsZWQge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcclxuICAgICAgICAgIGNvbG9yOiAjOWU5ZTllO1xyXG4gICAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgb3BhY2l0eTogMC42O1xyXG4gICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6bm90KDpkaXNhYmxlZCkge1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5jbGVhci1idXR0b24ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XHJcbiAgICAgICAgY29sb3I6ICM0MjQyNDI7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgcGFkZGluZzogOHB4IDE2cHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmRiZGJkO1xyXG4gICAgICAgICAgY29sb3I6ICMyMTIxMjE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6ZGlzYWJsZWQge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuICAgICAgICAgIGNvbG9yOiAjOWU5ZTllO1xyXG4gICAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLnN0YXR1cy1tZXNzYWdlIHtcclxuICAgICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U3ZjNmZjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5sb2FkaW5nIHtcclxuICAgICAgICBjb2xvcjogIzAwNzljMTtcclxuICAgICAgfVxyXG4gICAgYFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtYWRkTGF5ZXJzIGppbXUtd2lkZ2V0IHAtMlwiIGNzcz17c3R5bGV9PlxyXG4gICAgICAgIHt0aGlzLnByb3BzLmhhc093blByb3BlcnR5KCd1c2VNYXBXaWRnZXRJZHMnKSAmJlxyXG4gICAgICAgICAgdGhpcy5wcm9wcy51c2VNYXBXaWRnZXRJZHMgJiZcclxuICAgICAgICAgIHRoaXMucHJvcHMudXNlTWFwV2lkZ2V0SWRzLmxlbmd0aCA9PT0gMSAmJiAoXHJcbiAgICAgICAgICAgIDxKaW11TWFwVmlld0NvbXBvbmVudFxyXG4gICAgICAgICAgICAgIHVzZU1hcFdpZGdldElkPXt0aGlzLnByb3BzLnVzZU1hcFdpZGdldElkcz8uWzBdfVxyXG4gICAgICAgICAgICAgIG9uQWN0aXZlVmlld0NoYW5nZT17KGptdjogSmltdU1hcFZpZXcpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICBqaW11TWFwVmlldzogam12XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8cD57ZGVmYXVsdE1lc3NhZ2VzLmluc3RydWN0aW9uc308L3A+XHJcblxyXG5cclxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZUZpbHRlckFuZFpvb219PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2RlZmF1bHRNZXNzYWdlcy5zZWFyY2hJZGVhfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuaWRlYVNlYXJjaElucHV0fVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSWRlYVNlYXJjaElucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyF0aGlzLnN0YXRlLmZlYXR1cmVMYXllciB8fCB0aGlzLnN0YXRlLmxvYWRpbmd9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17IXRoaXMuc3RhdGUuZmVhdHVyZUxheWVyIHx8IHRoaXMuc3RhdGUubG9hZGluZ31cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7ZGVmYXVsdE1lc3NhZ2VzLmZpbHRlckFuZFpvb219XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgICAgIHt0aGlzLnN0YXRlLmZlYXR1cmVMYXllciAmJiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVwb3J0LWJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUdlbmVyYXRlUmVwb3J0fVxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMuc3RhdGUubG9hZGluZyB8fCAhdGhpcy5zdGF0ZS5pZGVhU2VhcmNoSW5wdXQgfHwgdGhpcy5zdGF0ZS5pZGVhU2VhcmNoSW5wdXQudHJpbSgpID09PSAnJ31cclxuICAgICAgICAgICAgICAgIHRpdGxlPXt0aGlzLnN0YXRlLmxvYWRpbmcgfHwgIXRoaXMuc3RhdGUuaWRlYVNlYXJjaElucHV0IHx8IHRoaXMuc3RhdGUuaWRlYVNlYXJjaElucHV0LnRyaW0oKSA9PT0gJycgXHJcbiAgICAgICAgICAgICAgICAgID8gJ0RpZ2l0ZSB1bSBuw7ptZXJvIGRlIGlkZWEgcGFyYSBnZXJhciBvIHJlbGF0w7NyaW8nIFxyXG4gICAgICAgICAgICAgICAgICA6ICdHZXJhciByZWxhdMOzcmlvIHBhcmEgbyBuw7ptZXJvIGRlIGlkZWEgaW5mb3JtYWRvJ31cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7ZGVmYXVsdE1lc3NhZ2VzLmdlbmVyYXRlUmVwb3J0fVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNsZWFyLWJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsZWFyRmlsdGVyfVxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMuc3RhdGUubG9hZGluZ31cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7ZGVmYXVsdE1lc3NhZ2VzLmNsZWFyRmlsdGVyfVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cbiBleHBvcnQgZnVuY3Rpb24gX19zZXRfd2VicGFja19wdWJsaWNfcGF0aF9fKHVybCkgeyBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHVybCB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
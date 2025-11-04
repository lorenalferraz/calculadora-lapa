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
import { React, type AllWidgetProps, css, jsx } from 'jimu-core'
import {
  loadArcGISJSAPIModules,
  JimuMapViewComponent,
  type JimuMapView
} from 'jimu-arcgis'

import type { IMConfig } from '../config'

import defaultMessages from './translations/default'

interface IState {
  ideaSearchInput: string
  jimuMapView: JimuMapView
  featureLayer: __esri.FeatureLayer
  loading: boolean
}

export default class Widget extends React.PureComponent<
AllWidgetProps<IMConfig>,
IState
> {
  // Give types to the modules we import from the ArcGIS API for JavaScript
  // to tell TypeScript what types they are.
  FeatureLayer: typeof __esri.FeatureLayer
  Query: typeof __esri.Query
  SpatialReference: typeof __esri.SpatialReference

  state = {
    ideaSearchInput: '',
    jimuMapView: null,
    featureLayer: null,
    loading: false
  }

  // URL fixa da camada
  readonly FEATURE_SERVICE_URL = 'https://meioambiente.sistemas.mpba.mp.br/server/rest/services/Hosted/alertas_regional_lapa/FeatureServer'

  // Função chamada quando o valor da pesquisa muda
  handleIdeaSearchInputChange = (event) => {
    this.setState({
      ideaSearchInput: event.target.value
    })
  }

  // Carrega a camada automaticamente quando o componente é montado ou o mapa está disponível
  componentDidUpdate = (prevProps, prevState) => {
    if (this.state.jimuMapView && !this.state.featureLayer && !prevState.jimuMapView) {
      this.loadFeatureLayer()
    }
  }

  // Carrega a camada de feature service
  loadFeatureLayer = () => {
    if (!this.state.jimuMapView) {
      return
    }

    this.setState({ loading: true })

    loadArcGISJSAPIModules([
      'esri/layers/FeatureLayer',
      'esri/geometry/SpatialReference'
    ]).then((modules) => {
      [this.FeatureLayer, this.SpatialReference] = modules

      // Cria a camada com a URL fixa
      const layer = new this.FeatureLayer({
        url: this.FEATURE_SERVICE_URL
      })

      // Adiciona a camada ao mapa
      this.state.jimuMapView.view.map.add(layer)

      // Aguarda a camada ser criada
      layer.on('layerview-create', () => {
        this.setState({
          featureLayer: layer,
          loading: false
        })
      })

      layer.on('layerview-create-error', () => {
        console.error('Erro ao carregar a camada')
        this.setState({ loading: false })
      })
    })
  }

  // Função para filtrar e dar zoom no polígono baseado na pesquisa
  handleFilterAndZoom = async (evt) => {
    evt.preventDefault()

    // Casos de erro
    if (!this.state.jimuMapView) {
      alert('Por favor, configure um mapa no widget.')
      return
    }
    if (!this.state.featureLayer) {
      alert('A camada ainda não foi carregada. Aguarde...')
      return
    }
    if (this.state.ideaSearchInput === '' || this.state.ideaSearchInput.trim() === '') {
      alert('Por favor, digite um número para pesquisar na coluna idea.')
      return
    }

    this.setState({ loading: true })

    // Carrega os módulos necessários
    loadArcGISJSAPIModules([
      'esri/layers/FeatureLayer',
      'esri/geometry/SpatialReference'
    ]).then((modules) => {
      [this.FeatureLayer, this.SpatialReference] = modules

      const layer = this.state.featureLayer
      const searchValue = this.state.ideaSearchInput.trim()
      
      // Escapa aspas simples para evitar SQL injection
      const escapedValue = searchValue.replace(/'/g, "''")

      // Verifica se a camada está carregada e obtém informações dos campos
      // Aguarda a camada estar completamente carregada
      const checkAndQuery = () => {
        // Lista de possíveis nomes de coluna (case-insensitive)
        const possibleFieldNames = ['idea', 'IDEA', 'Idea', 'ID', 'id', 'Id']
        let fieldName = 'idea' // Padrão
        
        // Tenta encontrar o campo correto
        if (layer.fields && layer.fields.length > 0) {
          const foundField = layer.fields.find(field => 
            possibleFieldNames.includes(field.name)
          )
          if (foundField) {
            fieldName = foundField.name
          } else {
            // Se não encontrar, tenta fazer uma busca case-insensitive
            const caseInsensitiveField = layer.fields.find(field => 
              field.name.toLowerCase() === 'idea'
            )
            if (caseInsensitiveField) {
              fieldName = caseInsensitiveField.name
            } else {
              // Log dos campos disponíveis para debug
              console.log('Campos disponíveis na camada:', layer.fields.map(f => f.name))
              // Tenta usar o primeiro campo que parece ser um ID
              const idField = layer.fields.find(field => 
                field.type === 'esriFieldTypeString' || field.type === 'esriFieldTypeInteger' || field.type === 'esriFieldTypeDouble'
              )
              if (idField) {
                fieldName = idField.name
                console.log(`Usando campo: ${fieldName}`)
              }
            }
          }
        }

        // Cria uma query para buscar o polígono pela coluna
        // Usa LIKE para busca mais flexível e trata como string
        const query = layer.createQuery()
        
        // Tenta diferentes abordagens de query
        // 1. Busca exata como string
        // 2. Busca com LIKE para valores parciais
        // 3. Busca como número (se o valor for numérico)
        const hasSpecialChars = searchValue.indexOf('.') !== -1 || searchValue.indexOf('/') !== -1
        
        // Para valores com caracteres especiais (como "003.9.427074/2025"), usa apenas como string
        if (hasSpecialChars) {
          query.where = `${fieldName} = '${escapedValue}'`
        } else {
          // Se for um número simples, tenta como número e como string
          const isNumeric = !isNaN(parseFloat(searchValue)) && isFinite(parseFloat(searchValue))
          if (isNumeric) {
            query.where = `${fieldName} = ${searchValue} OR ${fieldName} = '${escapedValue}'`
          } else {
            query.where = `${fieldName} = '${escapedValue}'`
          }
        }
        
        query.returnGeometry = true

        // Executa a query
        layer.queryFeatures(query).then((results) => {
          if (results.features.length === 0) {
            // Se não encontrou, tenta com LIKE
            const likeQuery = layer.createQuery()
            likeQuery.where = `${fieldName} LIKE '%${escapedValue}%'`
            likeQuery.returnGeometry = true
            
            return layer.queryFeatures(likeQuery).then((likeResults) => {
              if (likeResults.features.length === 0) {
                alert(`Nenhum polígono encontrado com ${fieldName} = ${searchValue}`)
                this.setState({ loading: false })
                return
              }
              
              // Se encontrou com LIKE, usa o primeiro resultado
              const foundGraphic = likeResults.features[0]
              const actualValue = foundGraphic.attributes[fieldName]
              this.applyFilterAndZoom(layer, foundGraphic, fieldName, actualValue)
            })
          }

          // Se encontrou, aplica filtro e zoom
          const foundGraphic = results.features[0]
          const actualValue = foundGraphic.attributes[fieldName]
          this.applyFilterAndZoom(layer, foundGraphic, fieldName, actualValue)
        }).catch((error) => {
          console.error('Erro ao pesquisar features:', error)
          console.error('Detalhes do erro:', {
            message: error.message,
            details: error.details,
            fieldName: fieldName,
            searchValue: searchValue
          })
          
          // Tenta mostrar informações mais úteis
          let errorMessage = 'Erro ao pesquisar. '
          if (layer.fields && layer.fields.length > 0) {
            const fieldNames = layer.fields.map(f => f.name).join(', ')
            errorMessage += `\n\nCampos disponíveis: ${fieldNames}`
          }
          errorMessage += `\n\nVerifique se a coluna "${fieldName}" existe e se o valor "${searchValue}" está correto.`
          
          alert(errorMessage)
          this.setState({ loading: false })
        })
      }
      
      // Se a camada já está carregada, executa diretamente
      if (layer.loaded) {
        checkAndQuery()
      } else {
        // Aguarda a camada carregar
        layer.when(() => {
          checkAndQuery()
        }).catch((error) => {
          console.error('Erro ao carregar informações da camada:', error)
          alert('Erro ao carregar informações da camada. Verifique se a camada está acessível.')
          this.setState({ loading: false })
        })
      }
    })
  }

  // Função auxiliar para aplicar filtro e zoom
  applyFilterAndZoom = (layer, graphic, fieldName, actualValue) => {
    // Obtém o valor real do atributo do graphic
    const attributeValue = graphic.attributes[fieldName]
    
    // Se o valor não foi passado, usa o do atributo
    const valueToFilter = actualValue !== undefined ? actualValue : attributeValue
    
    // Escapa o valor para SQL (trata strings, números e null)
    let definitionExpression
    if (valueToFilter === null || valueToFilter === undefined) {
      definitionExpression = `${fieldName} IS NULL`
    } else if (typeof valueToFilter === 'number') {
      definitionExpression = `${fieldName} = ${valueToFilter}`
    } else {
      // É uma string, precisa escapar aspas simples
      const escapedValue = String(valueToFilter).replace(/'/g, "''")
      definitionExpression = `${fieldName} = '${escapedValue}'`
    }
    
    console.log(`Aplicando filtro: ${fieldName} = ${valueToFilter}`)
    console.log(`Definition Expression: ${definitionExpression}`)

    // Aplica o filtro na camada usando definitionExpression
    // Isso é o método correto para filtrar uma FeatureLayer e ocultar outros polígonos
    layer.definitionExpression = definitionExpression
    
    // Força a atualização imediata da camada para aplicar o filtro
    layer.refresh()
    
    console.log('Filtro aplicado. A camada deve mostrar APENAS o polígono selecionado')
    
    // Aguarda que a camada esteja completamente carregada antes de aplicar o filtro
    if (layer.loaded) {
      // A camada já está carregada, aplica o filtro diretamente
      this.applyZoomAfterFilter(layer, graphic)
    } else {
      // Aguarda a camada carregar primeiro
      layer.when(() => {
        // Aplica o filtro novamente após carregar (garantia)
        layer.definitionExpression = definitionExpression
        layer.refresh()
        this.applyZoomAfterFilter(layer, graphic)
      }).catch((error) => {
        console.error('Erro ao aguardar camada:', error)
        // Mesmo assim tenta aplicar o zoom
        this.applyZoomAfterFilter(layer, graphic)
      })
    }
  }

  // Função auxiliar para aplicar zoom após o filtro
  applyZoomAfterFilter = (layer, graphic) => {
    // Aguarda um pouco para garantir que o filtro seja processado pela camada
    // O definitionExpression precisa de tempo para ser processado
    setTimeout(() => {
      // Dá zoom no polígono encontrado
      if (graphic.geometry) {
        this.state.jimuMapView.view.goTo({
          target: graphic.geometry,
          zoom: 15
        }).then(() => {
          this.setState({ loading: false })
        }).catch((error) => {
          console.error('Erro ao dar zoom:', error)
          this.setState({ loading: false })
        })
      } else {
        this.setState({ loading: false })
      }
    }, 500)
  }

  // Função para limpar o filtro
  handleClearFilter = () => {
    if (this.state.featureLayer) {
      // Remove o filtro definindo definitionExpression como vazio
      this.state.featureLayer.definitionExpression = ''
      console.log('Filtro removido')
      this.setState({
        ideaSearchInput: ''
      })
    }
  }

  render () {
    const style = css`
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
    `
    return (
      <div className="widget-addLayers jimu-widget p-2" css={style}>
        {this.props.hasOwnProperty('useMapWidgetIds') &&
          this.props.useMapWidgetIds &&
          this.props.useMapWidgetIds.length === 1 && (
            <JimuMapViewComponent
              useMapWidgetId={this.props.useMapWidgetIds?.[0]}
              onActiveViewChange={(jmv: JimuMapView) => {
                this.setState({
                  jimuMapView: jmv
                })
              }}
            />
        )}

        <div className="widget-container">
          <p>{defaultMessages.instructions}</p>


          <form onSubmit={this.handleFilterAndZoom}>
            <div>
              <input
                type="text"
                placeholder={defaultMessages.searchIdea}
                value={this.state.ideaSearchInput}
                onChange={this.handleIdeaSearchInputChange}
                disabled={!this.state.featureLayer || this.state.loading}
              />
              <button 
                type="submit"
                disabled={!this.state.featureLayer || this.state.loading}
              >
                {defaultMessages.filterAndZoom}
              </button>
            </div>
          </form>

          {this.state.featureLayer && (
            <button
              className="clear-button"
              onClick={this.handleClearFilter}
              disabled={this.state.loading}
            >
              {defaultMessages.clearFilter}
            </button>
          )}
        </div>
      </div>
    )
  }
}

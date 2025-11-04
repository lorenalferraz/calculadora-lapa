# Filtrar e Baixar

Este widget carrega automaticamente a camada de Feature Service de alertas regional lapa e permite pesquisar, filtrar e dar zoom em polígonos específicos através da coluna "idea".

## Como usar

1. Adicione o widget à sua experiência no Experience Builder
2. Configure o widget para usar um widget de mapa
3. A camada será carregada automaticamente quando o mapa estiver disponível
4. Digite um número na coluna "idea" no campo de pesquisa
5. Clique em "Filtrar e Zoom" para aplicar o filtro e dar zoom no polígono correspondente
6. Use o botão "Limpar Filtro" para remover o filtro e visualizar todos os polígonos novamente

## Como funciona

O widget utiliza a URL fixa da camada:
- `https://meioambiente.sistemas.mpba.mp.br/server/rest/services/Hosted/alertas_regional_lapa/FeatureServer`

### Carregamento automático da camada

Quando o componente detecta que o mapa está disponível, ele automaticamente:
1. Carrega os módulos necessários da ArcGIS API for JavaScript
2. Cria uma FeatureLayer com a URL fixa
3. Adiciona a camada ao mapa

```tsx
// Carrega a camada automaticamente quando o mapa está disponível
loadFeatureLayer = () => {
  const layer = new this.FeatureLayer({
    url: this.FEATURE_SERVICE_URL
  })
  this.state.jimuMapView.view.map.add(layer)
}
```

### Pesquisa e filtro

O widget permite pesquisar polígonos pela coluna "idea":
- Executa uma query na camada para encontrar o polígono correspondente
- Aplica um filtro (definitionExpression) para mostrar apenas o polígono encontrado
- Faz zoom automático no polígono com nível de zoom 15

```tsx
// Pesquisa e filtra o polígono
const query = layer.createQuery()
query.where = `idea = '${escapedValue}' OR idea = ${escapedValue}`
layer.queryFeatures(query).then((results) => {
  layer.definitionExpression = `idea = '${escapedValue}' OR idea = ${escapedValue}`
  this.state.jimuMapView.view.goTo({
    target: results.features[0].geometry,
    zoom: 15
  })
})
```

## Requisitos

- Experience Builder 1.18.0 ou superior
- Um widget de mapa configurado na experiência
- Acesso à camada de Feature Service especificada

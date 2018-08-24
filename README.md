# GloboAB (Smart TVs)

SDK Javascript para realização de testes A/B utilizando a ferramenta GloboAB.

## Instalação

Importar o JS no index.html do seu projeto:
```
<script src="htp://globo-ab.globo.com/index.js"></script>
```

## Configuração

### Inicializando o SDK

Assim que a página for carregada:

```
const GLOBO_AB = new GloboAbSdk();
```

## Utilização

### Sortear experimentos:

Para sortear 1 ou mais experimentos:

```
GLOBO_AB.requestVariations(arrayExperiments, registerImpression);
```

Parâmetro | Tipo | Descrição |
--- | --- | ---
arrayExperiments | Array de Strings | Array de strings com os IDs dos experimentos que desejamos sortear
registerImpression | Boolean | `true` para registrar uma impressão para cada experimento sorteado<br> `false` para não registrar impressão

### Registrar impressão

Para registrar uma impressão:

```
GLOBO_AB.registerImpression(experimentId);
```

Parâmetro | Tipo | Descrição |
--- | --- | ---
experimentId | String | Id do experimento que será registrada a impressão

### Registrar conversão

Para registrar uma conversão:

```
GLOBO_AB.registerConversion(experimentId);
```

Parâmetro | Tipo | Descrição |
--- | --- | ---
experimentId | String | Id do experimento que será registrada a impressão

## Compilar novo JS

### Instalar dependências

```
npm i -g typescript uglify-js
```

### Watch

```
npm run watch
```

### Build

```
npm run build
```
# Estrutura do Projeto

## Objetivo
Este projeto foi reorganizado para separar responsabilidades de API, UI e inicializacao do servidor sem adicionar novas features.

## Pastas principais

### imports/
Codigo compartilhado entre client e server.

- api/: regras da camada de dados e comunicacao Meteor.
- ui/: componentes React, paginas, estilos e hooks.

### imports/api/

- collections/: definicao das colecoes Mongo.
- methods/: metodos Meteor por dominio.
- publications/: publications Meteor por dominio.
- schemas/: validacao de dados.
- services/: regras de negocio reaproveitaveis (quando houver).

### imports/ui/

- components/: componentes reutilizaveis de interface.
- components/common/: componentes visuais genericos (ex.: Header, Info).
- hooks/: hooks customizados da UI.
- pages/: telas principais da aplicacao.
- styles/: estilos globais e organizados da interface.
- assets/: arquivos estaticos de UI (fontes, imagens etc.).

### client/
Ponto de entrada do front-end (montagem React e CSS do client).

### server/
Ponto de entrada do back-end Meteor e registro central de methods/publications.

- main.js: inicializacao do servidor.
- methods.js: registro central de metodos Meteor.
- publications.js: registro central de publications Meteor.
- startup/: scripts de inicializacao (quando houver).

### tests/
Arquivos de testes automatizados.

### public/
Arquivos estaticos servidos diretamente.

### _build/ e temp/
Artefatos e arquivos temporarios de build/teste.

# StudyFlow - Documentacao do Projeto Meteor

## Comandos principais

### `npm start`

Use este comando durante o desenvolvimento normal.

```bash
npm start
```

Ele executa:

```bash
npm run tailwind:build
npm run tailwind:watch
meteor run
```

Na pratica:

- gera o CSS do Tailwind antes de iniciar;
- deixa o Tailwind observando alteracoes em `client/` e `imports/`;
- inicia o app Meteor;
- abre a aplicacao em `http://localhost:3000`.

### `meteor`

Use apenas quando quiser iniciar o Meteor puro.

```bash
meteor
```

Esse comando:

- inicia somente o Meteor;
- nao roda `tailwind:build`;
- nao roda `tailwind:watch`;
- nao atualiza automaticamente `imports/ui/styles/tailwind.generated.css`.

Se voce alterar classes Tailwind e estiver usando apenas `meteor`, rode manualmente:

```bash
npm run tailwind:build
```

### Portas

- App Meteor: `http://localhost:3000`
- Register: `http://localhost:3000/register`
- Rspack/HMR interno: `http://localhost:8080`

Nao abra a porta `8080` para usar o app. Ela e interna do Rspack.

## Atualizacoes feitas no projeto

### Tailwind CSS

Tailwind foi configurado sem mexer no pipeline CSS interno do Meteor/Rspack.

Arquivos:

- `imports/ui/styles/tailwind.input.css`
- `imports/ui/styles/tailwind.generated.css`
- `client/main.jsx`
- `package.json`

Fluxo:

```text
tailwind.input.css -> tailwind.generated.css -> client/main.jsx
```

O arquivo gerado e importado antes dos CSS antigos:

```js
import "/imports/ui/styles/tailwind.generated.css";
import "/imports/ui/styles/main.css";
import "./main.css";
```

Isso permite usar Tailwind sem perder prioridade dos estilos existentes.

### Scripts adicionados

```json
{
  "start": "npm run dev",
  "dev": "npm run tailwind:build && concurrently -k -n tailwind,meteor -c cyan,green \"npm run tailwind:watch\" \"npm run meteor\"",
  "meteor": "meteor run",
  "tailwind:build": "tailwindcss -i ./imports/ui/styles/tailwind.input.css -o ./imports/ui/styles/tailwind.generated.css --minify",
  "tailwind:watch": "tailwindcss -i ./imports/ui/styles/tailwind.input.css -o ./imports/ui/styles/tailwind.generated.css --watch"
}
```

### MongoDB

O projeto usa o Mongo interno do Meteor.

Nao usar:

```bash
MONGO_URL=mongodb://localhost:27017/studyflow_db meteor run
```

Isso exige um Mongo externo rodando na porta `27017`. Se esse Mongo nao existir, o app quebra com:

```text
MongoServerSelectionError: connect ECONNREFUSED 127.0.0.1:27017
```

Use:

```bash
npm start
```

ou:

```bash
meteor
```

### Rspack

O Meteor exige as versoes corretas dos pacotes Rspack:

```bash
meteor npm install -D @meteorjs/rspack@2.0.1 @rsdoctor/rspack-plugin@1.5.7
```

Essas dependencias precisam bater com a versao atual do pacote `rspack` do Meteor.

### RegisterPage

`RegisterPage.jsx` usa Tailwind no componente, mantendo classes antigas onde ainda ajudam a preservar o visual existente.

Exemplo:

```jsx
className="input rounded-[32px] border border-[#d0d6dc] bg-[#e6eaf0] p-4"
```

Regra pratica:

- classes antigas preservam o CSS atual;
- classes Tailwind permitem ajuste incremental;
- depois de mudar classes Tailwind, `npm start` recompila sozinho.

### Select de estados

O campo de estado usa altura fixa.

Evitar:

```jsx
className="h-1/2"
```

Motivo:

- `h-1/2` vira `height: 50%`;
- porcentagem depende da altura do elemento pai;
- se o pai nao tiver altura fixa, o resultado fica imprevisivel.

Usar:

```jsx
className="h-10 rounded-[32px] border border-[#d0d6dc] bg-[#e6eaf0] px-4"
```

### Estados do IBGE

O carregamento de estados fica em:

```text
imports/api/locations/locations.js
```

Ele busca dados em:

```text
https://servicodados.ibge.gov.br/api/v1/localidades/estados
```

O `select` precisa ter:

```jsx
id="estados"
```

porque o carregador procura:

```js
document.getElementById("estados")
```

## Estrutura do projeto

```text
client/
  main.html              # HTML base do Meteor
  main.jsx               # entrada do cliente; importa CSS e startup/client
  main.css               # CSS global carregado pelo cliente

imports/
  startup/
    client/
      index.js           # agrega configuracoes de inicializacao do cliente
      render-app.jsx     # monta o React no #react-target
      server-status.js   # exemplo de Meteor.call para testar o servidor
    server/
      index.js           # agrega API e fixtures do servidor
      fixtures.js        # seed inicial do banco
  api/
    api.js               # agrega methods/publications da API
    app/
      methods.js         # methods gerais, como status.get
    links/
      links.collection.js
      server/
        publications.js
    locations/
      locations.js       # helpers para buscar estados/cidades no IBGE
    users/
      users.methods.js
      users.schema.js
      server/
        publications.js
  ui/
    App.jsx
    components/
    hooks/
    pages/
    routes/
    styles/

server/
  main.js                # entrada do servidor; importa startup/server

public/
tests/
```

Regra pratica:

- `client/` e `server/` ficam pequenos e servem como entradas do Meteor.
- `imports/startup/` contem o que precisa rodar quando cliente ou servidor iniciam.
- `imports/api/` contem dados, regras de negocio, methods e publications.
- `imports/ui/` contem React: paginas, componentes, hooks, rotas e estilos.

## Arquitetura geral

```text
(UI)-evento->(HOOK/SERVICE)-callAsync->(METHOD)-regra->(DB)
(UI)-subscribe->(PUBLICATION)-find->(DB)-dados->(UI)
(METHOD)-Meteor.Error(code)->(HOOK)-mensagem->(UI)
```

Camadas:

- UI: componentes React e formularios.
- Hook/Service: estado, loading, erro e chamadas Meteor.
- API Methods: regra de negocio, validacao e autorizacao.
- API Publications: dados publicados do servidor para o cliente.
- Collections: definicao das colecoes Mongo usadas pela API.
- Publications: leitura reativa autorizada.
- MongoDB: persistencia.

## Autenticacao

APIs oficiais:

- `Meteor.loginWithPassword`: autentica usuario por senha.
- `Meteor.userId`: identifica sessao atual.
- `Meteor.logout`: encerra sessao.

Links:

- https://docs.meteor.com/api/accounts.html#Meteor-loginWithPassword
- https://docs.meteor.com/api/accounts.html#Meteor-userId
- https://docs.meteor.com/api/accounts.html#Meteor-logout

Regra:

- UI captura dados.
- Hook chama API.
- Server valida permissao.
- UI exibe loading/erro.

## Methods

Use `Meteor.methods` para operacoes de escrita ou regras de negocio.

Padrao:

```js
Meteor.methods({
  async "feature.action"(payload) {
    check(payload, {
      title: String,
    });

    if (!this.userId) {
      throw new Meteor.Error("not-authorized", "Usuario nao autenticado");
    }

    return Collection.insertAsync({
      ...payload,
      userId: this.userId,
      createdAt: new Date(),
    });
  },
});
```

Regras:

- validar payload com `check`;
- validar auth com `this.userId`;
- usar `Meteor.Error` com codigo estavel;
- usar APIs async em Meteor 3.x.

Links:

- https://docs.meteor.com/api/meteor.html#Meteor-methods
- https://docs.meteor.com/api/meteor.html#Meteor-callAsync
- https://docs.meteor.com/api/meteor.html#Meteor-Error
- https://docs.meteor.com/api/check#check

## Publications

Use `Meteor.publish` para leitura reativa.

Padrao:

```js
Meteor.publish("tasks.byUser", function publishTasksByUser() {
  if (!this.userId) {
    return this.ready();
  }

  return Tasks.find(
    { userId: this.userId },
    {
      fields: {
        title: 1,
        status: 1,
        updatedAt: 1,
      },
      sort: { updatedAt: -1 },
    }
  );
});
```

Regras:

- nunca publicar dados de todos os usuarios;
- filtrar por `this.userId`;
- retornar `this.ready()` quando nao autenticado;
- usar `fields` para expor somente o necessario.

Links:

- https://docs.meteor.com/api/meteor.html#Meteor-publish
- https://docs.meteor.com/api/meteor.html#Meteor-subscribe

## Collections

Use `Mongo.Collection` para persistencia.

Padrao:

```js
import { Mongo } from "meteor/mongo";

export const Tasks = new Mongo.Collection("tasks");
```

Em Meteor 3.x, no servidor, prefira:

- `insertAsync`
- `updateAsync`
- `removeAsync`

Link:

- https://docs.meteor.com/api/collections

## Settings

Use `Meteor.settings` para configuracao por ambiente.

Regras:

- `Meteor.settings.public` fica visivel no cliente;
- segredos devem ficar fora de `public`;
- usar `--settings settings.dev.json` quando necessario.

Exemplo:

```bash
meteor run --settings settings.dev.json
```

Link:

- https://docs.meteor.com/api/meteor.html#Meteor-settings

## Checklist de validacao

Antes de considerar uma feature pronta:

- `npm start` sobe sem erro.
- App abre em `http://localhost:3000`.
- Tailwind recompila ao salvar arquivo.
- Methods validam payload com `check`.
- Methods validam usuario com `this.userId`.
- Publications filtram por dono.
- Erros usam `Meteor.Error(code, reason)`.
- Operacoes Mongo no server usam APIs async.

## Erros comuns

### Tailwind nao aplicou classe nova

Se estiver usando `meteor` puro:

```bash
npm run tailwind:build
```

Se estiver usando `npm start`, o watch deve recompilar sozinho.

### Porta 3000 ocupada

Erro:

```text
Can't listen on port 3000
```

Resolver:

```bash
ss -ltnp '( sport = :3000 )'
```

Pare o processo antigo ou rode em outra porta:

```bash
meteor run --port 3100
```

### Mongo externo recusando conexao

Erro:

```text
MongoServerSelectionError: connect ECONNREFUSED 127.0.0.1:27017
```

Resolver:

- remover `MONGO_URL` se quiser usar Mongo interno do Meteor;
- ou iniciar um Mongo externo real na porta configurada.

### Rspack pede dependencias

Erro:

```text
Failed to install Rspack dev dependencies
```

Resolver:

```bash
meteor npm install -D @meteorjs/rspack@2.0.1 @rsdoctor/rspack-plugin@1.5.7
```

## Modelo mental final

```text
npm start
  -> gera Tailwind
  -> observa classes Tailwind
  -> inicia Meteor
  -> usa Mongo interno
  -> app em localhost:3000

meteor
  -> inicia Meteor
  -> nao observa Tailwind
  -> app em localhost:3000
```

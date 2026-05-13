# **CSI606-2026-01 - Remoto - Proposta de Trabalho Final**

## *Discente: Athus Silva Souza (22.2.8079)*

### Resumo

O trabalho final consiste no desenvolvimento do **StudyFlow**, um sistema web voltado para organização de estudos, tarefas e sessões de foco. A aplicação será direcionada principalmente a estudantes e pessoas que desejam estruturar melhor sua rotina de aprendizado.

O sistema permitirá que o usuário realize cadastro e login, crie planos de estudo, gerencie tarefas, organize sessões de foco e acompanhe métricas simples de progresso semanal. A aplicação será desenvolvida utilizando o framework **Meteor**, com **MongoDB** para persistência de dados e comunicação reativa via **DDP**, aproveitando a integração fullstack oferecida pelo framework.

---

### 1. Tema

O trabalho final tem como tema o desenvolvimento de um **sistema web inteligente para organização de tarefas, planos de estudo e eventos acadêmicos**, chamado **StudyFlow**.

A proposta do sistema é auxiliar o usuário no planejamento e acompanhamento da sua rotina de estudos, centralizando funcionalidades como cadastro de tarefas, organização de planos de estudo, controle de sessões de foco e visualização de progresso.

O conceito visual e funcional do projeto é inspirado na ideia de **flow**, relacionada ao equilíbrio entre desafio e habilidade, buscando uma interface simples, minimalista e voltada à concentração do usuário.

---

### 2. Escopo

Este projeto terá as seguintes funcionalidades principais:

1. **Cadastro e autenticação de usuários**
   - Criação de conta.
   - Login e logout.
   - Controle de sessão do usuário.

2. **Gerenciamento de planos de estudo**
   - Criação de planos de estudo.
   - Listagem dos planos cadastrados.
   - Edição de informações básicas.
   - Exclusão de planos.

3. **Gerenciamento de tarefas**
   - Cadastro de tarefas relacionadas aos estudos.
   - Definição de título, descrição, status e prazo.
   - Atualização do status da tarefa.
   - Exclusão de tarefas.

4. **Agenda ou sessões de foco**
   - Registro de sessões de estudo.
   - Definição de status da sessão, como planejada, em andamento ou concluída.
   - Associação das sessões a tarefas ou planos de estudo.

5. **Métricas simples de progresso**
   - Quantidade de tarefas concluídas.
   - Progresso semanal.
   - Visualização básica de desempenho do usuário.

6. **Permissões por usuário**
   - Cada usuário visualizará apenas seus próprios dados.
   - Os dados de tarefas, planos e sessões serão associados ao usuário autenticado.

A aplicação será desenvolvida com foco em um **MVP funcional**, priorizando clareza, persistência de dados, autenticação e organização básica das informações.

---

### 3. Restrições

Neste trabalho não serão considerados, nesta primeira versão:

1. **Integração com inteligência artificial**
   - O sistema não terá geração automática de planos de estudo.
   - Não haverá recomendação inteligente de tarefas ou conteúdos.

2. **Notificações em tempo real avançadas**
   - Não serão implementadas notificações por e-mail, push notification ou lembretes automáticos.

3. **Aplicativo mobile**
   - O projeto será desenvolvido apenas como aplicação web.

4. **Gamificação avançada**
   - Não serão implementados ranking, conquistas, pontuação complexa ou sistema competitivo.

5. **Integração com calendários externos**
   - Não haverá integração com Google Calendar, Outlook ou ferramentas semelhantes.

6. **Sistema colaborativo**
   - O sistema será individual.
   - Não haverá compartilhamento de planos, tarefas ou sessões entre usuários.

7. **Dashboards complexos**
   - As métricas serão simples, focadas em progresso semanal e tarefas concluídas.

Essas restrições foram definidas para manter o projeto dentro de um escopo viável para a disciplina, evitando complexidade excessiva e priorizando a construção correta das funcionalidades centrais.

---

### 4. Protótipo

Foram planejados protótipos para as principais páginas da aplicação StudyFlow, considerando uma interface minimalista, clara e voltada para organização e foco.

As páginas consideradas no protótipo são:

1. **Página inicial**
   - Apresentação do StudyFlow.
   - Destaque da proposta do sistema.
   - Botões de chamada para ação, como criar conta e saber mais.

2. **Página de cadastro**
   - Formulário para criação de conta.
   - Campos de nome, e-mail e senha.

3. **Página de login**
   - Formulário para autenticação do usuário.
   - Campos de e-mail e senha.

4. **Dashboard**
   - Visão geral do usuário.
   - Resumo de tarefas, planos de estudo e progresso semanal.

5. **Página de planos de estudo**
   - Listagem dos planos cadastrados.
   - Ações para criar, editar e excluir planos.

6. **Página de tarefas**
   - Listagem das tarefas do usuário.
   - Controle de status das tarefas.
   - Ações de criação, edição e exclusão.

7. **Página de sessões de foco**
   - Registro e acompanhamento das sessões de estudo.
   - Status da sessão e vínculo com tarefas ou planos.

A identidade visual proposta utiliza uma paleta de cores simples e minimalista:

- **Cor primária:** `#F3F5F8`, utilizada como fundo principal.
- **Cor secundária:** `#B7C6D4`, utilizada em cabeçalhos e estruturas principais.
- **Cor de acento:** `#7D9AB3`, utilizada em botões e elementos interativos.

Os protótipos serão disponibilizados no GitHub do projeto, juntamente com o código-fonte da aplicação.


```txt
https://github.com/SEU-USUARIO/StudyFlow

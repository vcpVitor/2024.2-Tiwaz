**Integrantes do Grupo:**

| Mat.       | Nome                                  | Função (responsabilidade) |
| :--------  | :-------------------------------------| :------------------------ |
| 202016865  | Luis Felipe de Souza Braga            | Desenvolvedor             |
| 231029725  | Mateus de Sousa Soares                | Desenvolvedor             |
| 231034073  | Artur Cardoso da Silva                | Desenvolvedor             |
| 231012100  | Felipe Henrique Oliveira Sousa        | Desenvolvedor             |
| 231028989  | Joao Pedro Ferreira Moraes            | Desenvolvedor             |
| 231026616  | Davi Emanuel Ribeiro de Oliveira      | Desenvolvedor             |
| 202017147  | Thales Germano Vargas Lima            | Desenvolvedor             |
| 211031593  | Andre Lopes de Sousa                  | Desenvolvedor             |
| 231011972  | Cauã Reis de Freitas                  | Desenvolvedor             |


**Histórico de Revisões**

| Data           | Versão | Descrição                    | Autor                         |
| :------------- | :----- | :--------------------------- | :---------------------------- |
| **27/11/2024** | 1.0    | Primeira versão do documento | Todos Do Grupo                |


# 1. Visão Geral do Produto e Projeto
 

## **1.1 Problema:**
#### 1.1.1 Contexto:

Muitos agricultores enfrentam dificuldades no gerenciamento eficaz de suas plantações devido à falta de ferramentas adequadas para monitorar e registrar atividades agrícolas. Além disso, a falta de sistemas de previsão meteorológica afeta negativamente a capacidade dos agricultores se prepararem para condições climáticas adversas, como chuvas intensas, que podem prejudicar certas culturas.

#### 1.1.2 Problema:

- Falta de Controle e Registro: Agricultores não possuem um histórico completo das atividades agrícolas, incluindo plantio, colheita, adubação e valores de venda. 

- Previsão Meteorológica Inadequada: Não há um sistema eficaz para prever o tempo com antecedência suficiente, o que impede a preparação adequada para condições climáticas adversas. 

- Gestão Financeira Ineficiente: Sem registros detalhados, os agricultores têm dificuldades para calcular os custos e lucros de cada plantação.

- O diagrama abaixo representa o problema central do gerenciamento de plantações e ajuda a visualizar e entender as origens do problema: 

![Figura 1](diagrama-1.png)
<center>
Figura 1: Diagrama espinha de peixe
</center>

#### 1.1.3 Justificativa:
- O desenvolvimento dessa aplicação mobile visa solucionar os principais problemas enfrentados pelos agricultores, proporcionando uma ferramenta robusta para o gerenciamento eficaz das plantações, aumentando a produtividade e a lucratividade das operações agrícolas.

- Essa solução pode contribuir para a resolução do problema por meio da centralização das informações, Previsão climática avançada, gestão financeira eficiente, automatização do processo, comunicação e relatórios.

- Espera-se que a implementação dessa solução não apenas resolva os problemas de desorganização e falta de controle, mas também otimize os processos agrícolas, contribuindo para o aumento da produtividade e rentabilidade dos pequenos e médios produtores rurais. 

---
  
## **1.2 Declaração de Posição do Produto:**

<center>Tabela 1: Declaração de posição do produto</center>

 | Item                  | Descrição                               | Comentário                                                                |
 | :-------------------- | :-----------------------------------  | :---------------------------- |
 | Para:                 | Agricultores e pequenos produtores rurais.     | Foco em um público que carece de ferramentas tecnológicas acessíveis para gerenciar suas plantações de forma eficiente.         |
 | Necessidade:          | Facilitar o gerenciamento completo das plantações, desde o cadastro até a colheita, com previsões climáticas precisas.      | A necessidade identificada reflete a falta de controle organizado e de informações meteorológicas confiáveis no dia a dia dos pequenos e médios produtores.              |
 | O (nome do produto):  | É um aplicativo mobile para controle de plantações, gestão financeira e previsão meteorológica. [Nome do Produto]   | A proposta do produto é oferecer uma solução centralizada e acessível para a gestão agrícola, usando tecnologia mobile.                 |
 | Que:                  | Fornece aos agricultores controle total sobre suas plantações, incluindo histórico de plantio, colheita, adubação e notificações de chuvas.  | As funcionalidades abrangem todas as etapas do processo agrícola, facilitando a tomada de decisão baseada em dados históricos e previsões. |
 | Ao contrário:         | Sistemas manuais ou inexistentes, que não fornecem dados centralizados e precisos.      | Diferencia-se das práticas tradicionais (como anotações em papel), que são ineficazes para fornecer uma visão integrada da plantação.                 |
 | Nosso produto:        | Oferece uma solução integrada, com notificações meteorológicas e relatórios detalhados, diferenciando-se por atender às necessidades específicas de pequenos e médios produtores.       | A integração das funcionalidades, especialmente as notificações antecipadas de chuvas, é um diferencial competitivo importante.  |
 
---

## **1.3 Objetivos do Produto:**

#### Melhorar a Gestão das Plantações: 
- Cadastro e Monitoramento: Permitir que os agricultores registrem e monitorem detalhadamente todas as atividades agrícolas, incluindo plantio, adubação e colheita. 

- Histórico de Atividades: Manter um histórico completo e acessível das atividades realizadas nas plantações, visando uma análise futura e melhor tomada de decisões.

#### Aumentar a Precisão das Previsões Meteorológicas: 
- Notificações Antecipadas: Implementar um sistema de notificações meteorológicas que avise os agricultores, com antecedência mínima de 12 horas, sobre a previsão de chuva ou outras condições climáticas adversas.

- Preparação para Clima Adverso: Ajudar os agricultores a se prepararem adequadamente para condições climáticas adversas, diminuindo perdas e danos às plantações.

#### Otimizar a Gestão Financeira: 
- Relatórios Financeiros Detalhados: Fornecer ferramentas para gerar relatórios detalhados sobre custos, receitas e lucros das plantações.

- Controle de Insumos: Monitorar e registrar o uso de insumos agrícolas, como fertilizantes e pesticidas, para otimizar custos e melhorar a eficiência.

#### Facilitar a Tomada de Decisões: 
- Análises e Relatórios: Oferecer análises detalhadas e relatórios gerais sobre o desempenho das plantações, permitindo que os agricultores tomem decisões baseadas em dados concretos.

- Previsão de Produção e Vendas: Ajudar na previsão de produção e planejamento de vendas, com base nos dados históricos e nas tendências atuais.

---

## **1.4 Tecnologias utilizadas:**

#### React Native:
- React Native permite o desenvolvimento de aplicativos móveis para Android e iOS com um único código-fonte, economizando tempo.
- Frontend: Ideal para interfaces de usuário modernas e responsivas.
- Expo: Facilita o desenvolvimento, construção e teste de aplicativos sem necessidade de configuração complexa.
- Context API: Um sistema leve de gerenciamento de estado nativo do React, ideal para projetos pequenos ou médios que não precisam de bibliotecas mais robustas como Redux.

#### Node.js:
- Node.js é rápido, eficiente e baseado em JavaScript, permitindo o uso de uma única linguagem para backend e frontend.
- Express: Um framework minimalista que acelera o desenvolvimento de APIs RESTful.
- JWT: Garante autenticação segura com tokens, essencial para proteger os dados do usuário.

#### Design:
- Figma: Ferramenta de design colaborativo, ideal para criar protótipos.
- Canva: Criar gráficos e elementos visuais simples.

#### Banco de Dados:
- MySQL: Um banco de dados relacional amplamente utilizado e bem documentado, ideal para dados estruturados como informações de usuários, registros de vendas e histórico de atividades agrícolas.
- Firebase (Cloud Firestore): Oferece escalabilidade e sincronização em tempo real, ideal para notificações e atualizações dinâmicas no aplicativo.

#### APIs:
- AccuWeather ou Weatherstack: APIs confiáveis para previsão do tempo, essenciais para alertar os agricultores sobre mudanças climáticas.
- Google Maps API ou OpenStreetMap: Oferecem recursos de geolocalização e mapeamento, úteis para identificar propriedades e terrenos agrícolas.
- Twilio, OneSignal ou Pusher: Para Notificacoes em tempo real.

#### Ferramentas De Desenvolvimento:
- Visual Studio Code
- Git e GitHub
- Expo CLI
- Android Studio

#### Metodologia Ágil: 
- SCRUM: Foco na entrega incremental e iterativa, com sprints bem definidos e reuniões de acompanhamento.
- XP: Boas práticas de desenvolvimento, como testes contínuos, código simples e feedback constante.

---

# **2. VISÃO GERAL DO PROJETO**

## **2.1 Ciclo de vida do projeto de desenvolvimento de software:**

![Figura 2](diagrama-2.png)
<center>
Figura 2: Ciclo de vida do projeto
</center>

#### Metodologia:
- Usando um ciclo de vida ágil como metodologia para responder bem às frequentes mudanças, realizar entregas rápidas e obter feedbacks constantes do cliente.
- Essa abordagem permite um desenvolvimento centrado no cliente, garantindo a qualidade do produto.

#### Processo:  
- Utilizando Scrum para estruturar e gerenciar o projeto em constante comunicação com o cliente com entregas frequentes para o cliente.
- XP usa feedback rápido e comunicação com alta taxa de disponibilidade para maximizar a entrega de valor, por meio de um cliente no local, uma abordagem de planejamento específica e testes constantes.

#### Procedimentos: 
- Planejamento: Dividir o Product Backlog em tarefas menores e organizá-las por prioridade, usando técnicas como Story Mapping para identificar prioridades.
- Desenvolvimento: Práticas do XP como Programação em pares, com dois desenvolvedores trabalhando juntos no mesmo código. Alem de usar práticas do Scrum como a Integração contínua, verificando constantemente o código para evitar problemas quando adicionado uma nova funcionalidade.
- Entrega e feedback: Liberar releases intermediárias, versões incrementais e obter feedback imediato do cliente para possíveis ajustes.

#### Métodos: 
- Acompanhamento de projeto diretamente com o project owner dando feedbacks sobre aplicação aos desenvolvedores evitando erros de interpretação;
- Verificação e validação conjunto de atividades conduzidas ao longo do ciclo de vida de um projeto de software para garantir a qualidade do produto de software entregue ao final do desenvolvimento;
- Processos formais de entrega para validação rápida e ágil.

#### Ferramentas:
- React native: front-end;
- Node.js: back-end;
- Canva: design;
- GitHub: controle de versão.

---

## **2.2 Organização do Projeto:**

A tabela seguinte apresenta os principais papéis e responsabilidades dentro do projeto.

| Papel                | Atribuições                                                 | Responsáveis                |
|----------------------|------------------------------------------------------------|-----------------------------|
| **Cliente**          | Fornecer os requisitos iniciais, priorizar o Product Backlog, garantir que o produto atenda ao valor esperado               | Wildemberg Sales Da Silva Junior       |
| **Scrum Master**  | Garantir a aplicação das práticas ágeis, remover impedimentos e facilitar a colaboração.| A definir |
| **Desenvolvedores**    | Codificar o produto, codificar testes unitários, realizar refatoração. | Equipe do Projeto |
| **Analistas de Qualidade** | Garantir a qualidade do produto, garantir o cumprimento do conceito de pronto, realizar inspeções de código | Equipe do Projeto |

<div style="text-align: justify;">
  
- O <strong>Scrum Master</strong> é responsável por assegurar que o processo Scrum está sendo seguido corretamente.
- Os <strong>Desenvolvedores</strong> são responsáveis por criar o produto ou funcionalidade, trabalhando de forma colaborativa para entregar incrementos de valor em cada Sprint.
- Os </strong>Analistas de Qualidade<strong> são responsáveis por garantir que o produto final atenda aos requisitos funcionais e não funcionais definidos, promovendo a qualidade do produto.

</div>


---

## **2.3 Planejamento das Fases e/ou Iterações do Projeto**

As fases serão detalhadas e adaptadas em cada sprint, com priorização do backlog com entregas claras e incrementais:

| Sprint | Desenvolvimento (Entrega)                                                 | Data Início | Data Fim   | % Conclusão |
|--------|---------------------------------------------------------------------------|-------------|------------|-------------|
| 0      | Definição do Produto                                                      | 22/11/24    | 29/11/24   | 100%        |
| 1      | Levantamento de Requisitos e Documento de Visão                           | 29/11/24    | 06/12/24   | 100%        |
| 2      | Desenvolvimento de protótipo e Documento de Arquitetura                   | 14/12/24    | 20/12/24   | 20%         |
| 3      | Desenvolvimento da gerência das plantações                                | 06/01/25    | 12/01/25   | 0%          |
| 4      | Desenvolvimento da gerência das colheitas                                 | 13/01/25    | 19/01/25   | 0%          |
| 5      | Desenvolvimento da gerência de Insumos                                    | 20/01/25    | 26/01/25   | 0%          |
| 6      | Desenvolvimento dos Relatórios e Previsao do Tempo                        | 27/01/25    | 02/02/25   | 0%          |
| 7      | Desenvolvimento da gerência de Atividades Agrícolas e do estoque          | 03/02/25    | 13/01/25   | 0%          |
| 8      | Desenvolvimento do Backup de Dados, gerência das Finanças, gerência de vendas  | 13/01/25    | 20/01/25   | 0%          |
| 9      | Desenvolvimento das notificações de tempo e estoque, Widget, gerência dos Funcionários e gerência das Máquinas | 20/01/25    | 27/01/25   | 0% |
| 10     | Testes Finais                                                                | 27/01/25    | 02/02/25   | 0%          |
| 11     | Finalização                                                               | 27/01/25    | 02/02/25   | 0%          |

---

## **2.4 Matriz de Comunicação**

| Descrição                                       | Área/Envolvidos       | Periodicidade | Produtos Gerados                |
|------------------------------------------------|-----------------------|---------------|---------------------------------|
| Acompanhamento das Atividades em Andamento  | Equipe do Projeto, Monitor | Semanal       | Ata de reunião / Gravação, Relatório de situação do projeto |
| Acompanhamento dos Riscos, Compromissos, Ações Pendentes, Indicadores  | Scrum Master, Equipe do Projeto  | Semanal | Relatório de situação do projeto |
| Comunicar situação do projeto   | Scrum Master, Equipe do Projeto, Monitor  | Semanal  | Comunicação entre membros do squad |
| Feedback do Cliente   | Will, Gabriel   | Ao final de cada sprint (Semanal)  | feedback do cliente |

--- 

## **2.5 Gerenciamento de Riscos**

- Identificação dos riscos: Detecção de riscos possíveis e detectáveis em cada fase do projeto, com base em análise de contexto e histórico. 
- Análise e Avaliação: Grau de exposição de cada risco identificado. Riscos com alta probabilidade e impacto exigem ações de mitigação imediatas. 
- Revisão Periódica: A lista de riscos será revisada regularmente para garantir que os riscos foram identificados e que novos riscos não passaram despercebidos. 
- Registro e Monitoramento: Todos os riscos serão registrados no relatório de situação do projeto, com atualização constante conforme necessário. 
  

| Risco                     | Grau de exposição | Mitigação                                        | Plano de Contingência                               |
|---------------------------|-------------------|--------------------------------------------------|-----------------------------------------------------|
| Atraso nas entregas       | Alto              | Alinhar cronograma com equipe, ajustes semanais  | Reforçar equipes, ajustes de prioridade nas tarefas |
| Falha na comunicação      | Médio             | Reuniões semanais para alinhamento               | Uso de ferramentas de comunicação adicionais        |
| Problemas técnicos        | Alto              | Testes contínuos, suporte técnico dedicado       | Soluções alternativas para problemas críticos       |
| Mudança nos requisitos    | Médio             | Validação constante com o cliente                | Ajuste do escopo, renegociação de prazos            |
| Falta de recursos humanos | Baixo             | Planejamento de pessoal, capacitação contínua    | Redistribuição de tarefas                           |

---

## **2.6 Critérios de Replanejamento**

O replanejamento em um projeto de software ocorre quando há a necessidade de ajustar o planejamento original devido a mudanças, imprevistos ou a detecção de que o projeto está fora do curso. O replanejamento visa realinhar os objetivos, prazos e recursos de modo a garantir que o projeto continue progredindo de forma eficiente e atenda aos requisitos estabelecidos. 
Os critérios de replanejamento geralmente são baseados em indicadores que sinalizam a necessidade de ajustes:

- Atraso no cronograma:
  - Número excessivo de atrasos nas entregas que torna necessário a alteração no cronograma 
  - Mudanças de prioridades podem causar atrasos sendo necessária a alteração no cronograma 

- Problemas de qualidade:
  - Software apresenta quantidade de defeitos grande será necessário replanejar a alocação de tempo para testes, correções e validações 
  - Durante a execução do projeto forem observadas falhas em atender aos padrões de qualidade 

- Mudança nos requisitos:
  - Novos requisitos ou mudanças nos que já existem podem exigir ajustes no projeto 
  - Se os requisitos fornecidos inicialmente estavam incompletos ou foram mal interpretados, pode ser necessário replanejar as entregas 

- Falta de recurso humano:
  - Caso a equipe de desenvolvimento ou outros recursos necessários não estejam disponíveis ou não possuam a competência necessária, será preciso ajustar o plano 

---

# **3. PROCESSO DE DESENVOLVIMENTO DE SOFTWARE**

## **3.1 Metodologia:**

Adotamos um ciclo de vida ágil baseado nas metodologias Scrum e XP, priorizando     respostas rápidas às mudanças e entregas frequentes para obter feedbacks constantes do cliente. Essa abordagem garante um desenvolvimento centrado no cliente e assegura a qualidade do produto ao longo do processo. 

---

## **3.2 Principais etapas do processo:**

- Planejamento: 
  - Divisão de Produto Backlog e criado e priorizado com o cliente; 
  - Uso de técnicas como Story mapping para definir prioridades e funcionalidades; 
  - As tarefas priorizadas são distribuídas entre as Sprints (ciclo de trabalho de curta duração).

- Desenvolvimento: 
  - Práticas de Scrum: 
  - Desenvolvimento em Sprints (ciclos curtos de 1-2 semanas). 
  - Revisões periódicas do progresso do sprint. 

- Práticas de XP: 
  - Programação em dupla para maior qualidade e compartilhamento de conhecimento. 
  - Testes constantes e integração continua para minimizar problemas. 

- Entrega e feedback: 
  - Liberação de releases intermediarias para validação contínua do cliente. 
  - Obtenção de feedback imediato para ajustes e melhorias. 

- Verificação e validação: 
  - Atividades contínuas ao longo ciclo de vida para garantir a qualidade do produto. 
  - Processos ágeis de validação, realizados em conjuntos com o cliente. 

- Papeis e Responsabilidades:   
  - Product Owner (PO): Define as prioridades, valida as entregas e oferece feedback constante a equipe.    
  - Scrum Master: Facilita os ritos do Scrum e garante que a equipe siga o processo.   
  - Equipe de desenvolvimento: Implementa as funcionalidades, realiza testes e entrega os incrementos.   
  - Cliente: Participa ativamente com feedbacks e valida as entregas. 

- Ferramentas utilizadas: 
  - React Native: Desenvolvimento do front-end.   
  - Node.js: Desenvolvimento do back-end.   
  - Figma: Criação de protótipos.   
  - Canva: Design de elementos gráficos.   
  - Github: Controle de versão e colaboração de códigos. 

---

# **4. DECLARAÇÃO DE ESCOPO DO PROJETO**

## **4.1 Backlog do produto**
Os itens de backlog do produto foram obtidos a partir de entrevistas com o P.O., e em seguida, refinados para apresentar as funcionalidades desejadas no produto final. 

- Tabela 6: Backlog do Produto Inicial
| ID |       História          | Prioridade |
|----|-------------------------|------------|
| 01 | Gerenciar Plantação     | Must       | 
| 02 | Gerenciar Colheita      | Must       | 
| 03 | Gerenciar Insumos       | Must       | 
| 04 | Informações do Clima    | Must       | 
| 05 | Gerar Relatórios        | Must       | 
| 06 | Gerenciar Estoque       | Should     | 
| 07 | Backup de dados         | Should     | 
| 08 | Gerenciar Finanças      | Should     | 
| 09 | Gerenciar Funcionários  | Could      | 
| 10 | Gerenciar Máquinas      | Could      | 
| 11 | Widget do Produto       | Could      |




















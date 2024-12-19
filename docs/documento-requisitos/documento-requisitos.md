## **Controle de Versões**

|            **Autor(a)**             |       **Detalhamento**       | **Versão** |    **Data**    |
| :---------------------------------: | :--------------------------: | :--------: | :------------: |
|        **Joao Pedro Ferreira**      |   **Criação do documento**   |  **0.1**   | **08/12/2024** |
|        **Joao Pedro Ferreira**      |   **Edicao dos requisitos**   |  **0.2**   | **16/12/2024** |


### **INTRODUÇÃO**

O aplicativo é uma solução mobile voltada para agricultores e pequenos produtores rurais que buscam otimizar o gerenciamento de suas plantações e atividades agrícolas. Ele oferece funcionalidades completas para controle de operações, monitoramento de recursos e previsão do tempo, proporcionando uma visão integrada do processo produtivo.

### **DESCRIÇÃO DOS REQUISITOS**
## **Requisitos Funcionais**

  Requisitos funcionais descrevem as funcionalidades e as ações que um sistema ou produto deve ser capaz de executar. Eles detalham as tarefas específicas que este produto deve realizar para atender às necessidades do usuário.

| **ID**  | **Descrição**                                                                                                                        | **MoSCoW** |
|---------|--------------------------------------------------------------------------------------------------------------------------------------|------------|
| RQ01    | O aplicativo deverá permitir a gerência das plantações: Cadastro, Consulta, Edição, Exclusão e Conclusão da plantação.                | Must       |
| RQ02    | O aplicativo deverá permitir a gerência das colheitas: Cadastro, Consulta, Edição, Exclusão.                                          | Must       |
| RQ03    | O aplicativo deverá permitir a gerência de Insumos: Cadastro, Consulta, Edição, Exclusão.                                             | Must       |
| RQ04    | O aplicativo deverá permitir a gerência de Atividades Agrícolas: Cadastro, Consulta, Edição, Exclusão.                                | Should     |
| RQ05    | O aplicativo deverá gerar Relatórios de cada plantação.                                                                               | Must       |
| RQ06    | O aplicativo deverá mostrar Informações do Clima: Visualização da previsão do tempo.                                                  | Must       |
| RQ07    | O aplicativo deverá enviar notificações sobre a previsão do tempo com 24h de antecedência: alertas de chuva forte e seca.             | Could      |
| RQ08    | O aplicativo deverá permitir a gerência do Estoque: Cadastro, Edição, Consulta e Exclusão.                                            | Should     |
| RQ09    | O aplicativo deverá enviar notificações sobre os itens do estoque, de acordo com a quantidade cadastrada pelo usuário.                | Could      |
| RQ10    | Widget do Aplicativo.                                                                                                                 | Could      |
| RQ11    | O aplicativo deverá possuir um Backup de Dados.                                                                                       | Should     |
| RQ12    | O aplicativo deverá permitir a gerência das Finanças (custo/receita): Cadastrar, Consultar, Editar, Excluir.                          | Should     |
| RQ13    | O aplicativo deverá permitir a gerência dos Funcionários: Cadastrar, Consultar, Editar, Excluir.                                      | Could      |
| RQ14    | O aplicativo deverá permitir a gerência das Máquinas: Cadastrar, Consultar, Editar, Excluir.                                          | Could      |
| RQ15    | O aplicativo deverá permitir o cadastro de uma venda da colheita: Cadastrar, Consultar, Editar, Excluir.                              | Should     |
| RQ16    | O aplicativo deverá possuir um estoque das colheitas, caso a colheita não seja vendida. (AINDA NÃO APROVADO)                          | Should     |


## **Requisitos Não Funcionais**

Requisitos não funcionais descrevem características e qualidades do sistema ou produto. Eles estão relacionados a aspectos como desempenho, confiabilidade, segurança, usabilidade e compatibilidade.

| RQNF01 | O aplicativo deverá ter foco em agricultores de pequeno e médio porte.                                                                       |
| :----: | ----------------------------------------------------------------------------------------------------------------------                       |
| RQNF02 | O aplicativo deverá permitir acesso offline, com sincronização automática ao reconectar à internet.                                          |
| RQNF03 | O aplicativo deverá utilizar armazenamento seguro para proteger dados financeiros e informações.                                             |
| RQNF04 | O aplicativo deverá ser otimizado para uso em dispositivos móveis com sistema Android.                                                       |
| RQNF05 | O aplicativo deverá armazenar backups automáticos na nuvem para evitar perda de dados.                                                       |
| RQNF06 | O aplicativo deverá oferecer um design intuitivo para facilitar o uso por agricultores de diferentes níveis de alfabetização tecnológica.    |
| RQNF07 | O aplicativo deverá permitir atualizações meteorológicas em tempo real para garantir a precisão das informações.                             |
| RQNF08 | O aplicativo deverá funcionar em rede local para áreas sem conectividade à internet.                                                         |


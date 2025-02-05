const { DataTypes } = require('sequelize'); // Importa o DataTypes do sequelize
const sequelize = require('../../../config/database'); // Importa a conexão com o banco de dados
const Plantacao = require('../../plantacoes/models/Plantacao');// Importa o módulo de plantação para usar como foreign key

const Colheita = sequelize.define('Colheita', { // Define o modelo de dados da colheita
  idColheita: {
    type: DataTypes.INTEGER, // Tipo inteiro
    autoIncrement: true, // Vai auto incrementar
    allowNull: false, // Não pode ser nulo
    primaryKey: true, // Chave primária
  },
  data: { // Data da Colheita
    type: DataTypes.STRING, // Tipo data mas como uma String
    allowNull: true, // Não pode ser nulo
  },
  quantidadeColhida: { // quantidade colhida da Colheita
    type: DataTypes.FLOAT, // Tipo FLOAT
    allowNull: true, // Não pode ser nulo
  },
  descricao: { // descrição da Colheita
    type: DataTypes.STRING, // Tipo STRING
    allowNull: true, // Não pode ser nulo 
  },
  valorVenda: { // Valor de venda da colheita
    type: DataTypes.FLOAT, // Tipo float
    allowNull: true, // Não pode ser nulo
  },
  custo: { // custo da Colheita
    type: DataTypes.FLOAT, // Tipo FLOAT
    allowNull: true, // Não pode ser nulo 
  },
  qualidade: { // qualidade da colheita
    type: DataTypes.INTEGER, // Tipo INTEGER
    allowNull: true, // Não pode ser nulo
  },
  destino: { // destino da colheita
    type: DataTypes.STRING, // Tipo String
    allowNull: true, // Não pode ser nulo
  },
  idPlantacao: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: Plantacao, // O modelo que será referenciado
      key: 'idPlantacao'       // A chave na tabela Plantacao que será referenciada
    },
    onDelete: 'CASCADE', // Exclui os custos se o usuário for excluído
    onUpdate: 'CASCADE'  // Atualiza a chave se o id de Usuario mudar
  },
},
{
  tableName: 'Colheita',  // Nome da tabela no banco de dados existente
  timestamps: false     // Definir como false se sua tabela não possui campos de data (createdAt, updatedAt)
}
);

module.exports = Colheita; // Exporta o modelo de dados da colheita

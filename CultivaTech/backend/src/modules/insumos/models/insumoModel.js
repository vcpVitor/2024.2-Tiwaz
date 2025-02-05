const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/database');
const Plantacao = require('../../plantacoes/models/Plantacao');// Importa o módulo de plantação para usar como foreign key
const Insumo = require('../../estoque/models/estoqueModel');// Importa o módulo de Insumo para usar como foreign key

const Plantacao_Insumo = sequelize.define('Plantacao_Insumo', {
    idPlantacao: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: true,
        references: {
          model: Plantacao, // O modelo que será referenciado
          key: 'idPlantacao'       // A chave na tabela Plantacao que será referenciada
        },
        onDelete: 'CASCADE', // Exclui as Plantacao_Insumo se a Plantacao for excluída
        onUpdate: 'CASCADE'  // Atualiza a chave se o id de Plantacao mudar
      },
      idInsumo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: true,
        references: {
          model: Insumo, // O modelo que será referenciado
          key: 'idInsumo'       // A chave na tabela Plantacao que será referenciada
        },
        onDelete: 'CASCADE', // Exclui as Plantacao_Insumo se o Insumo for excluído
        onUpdate: 'CASCADE'  // Atualiza a chave se o id de Insumo mudar
      },
      qtdUtilizada: { // quantidade de insumo utilizada
        type: DataTypes.FLOAT, // Tipo FLOAT
        allowNull: true, // Não pode ser nulo
      },
      unidadeMedida: { // unidade de medita utilizada
        type: DataTypes.STRING, // Tipo string
        allowNull: true, // Não pode ser nulo
      },

},
{
    tableName: 'Plantacao_Insumo',  // Nome da tabela no banco de dados existente
    timestamps: false     // Definir como false se sua tabela não possui campos de data (createdAt, updatedAt)
});

module.exports = Plantacao_Insumo;
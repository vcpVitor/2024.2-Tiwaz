const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/database');

const Custos = sequelize.define('Custo', {
  nome: { // Nome do custo
    type: DataTypes.STRING, // Tipo string
    allowNull: false, // Não pode ser nulo
  },
  data: { // Data do custo
    type: DataTypes.DATE, // Tipo data
    allowNull: false, // Não pode ser nulo
  },
  tipoCusto: { // Tipo do custo
    type: DataTypes.STRING, // Tipo string
    allowNull: false, // Não pode ser nulo 
  },
  descricao: { // Descrição do custo
    type: DataTypes.STRING, // Tipo string
    allowNull: false, // Não pode ser nulo 
  },
  valorCusto: {
    type: DataTypes.FLOAT, // Tipo float
    allowNull: false, // Não pode ser nulo
  },
});

module.exports = Custos;

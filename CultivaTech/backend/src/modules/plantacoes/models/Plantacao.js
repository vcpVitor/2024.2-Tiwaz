const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/database');

const Plantacao = sequelize.define('Plantacao', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tipo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  area: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  dataPlantio: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}, {
  timestamps: true,
});

module.exports = Plantacao;

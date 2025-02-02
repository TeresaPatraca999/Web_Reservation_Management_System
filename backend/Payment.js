const { DataTypes } = require('sequelize');
const sequelize = require('./database');

const Payment = sequelize.define('Payment', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  paisRegion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  apellido: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  direccion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  colonia: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  codigoPostal: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ciudad: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  estado: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  numeroTelefonico: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  numeroTarjeta: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fechaVencimiento: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  codigoSeguridad: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  totalPagar: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  }
});

module.exports = Payment;

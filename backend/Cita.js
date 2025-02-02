const { DataTypes } = require('sequelize');
const sequelize = require('./database');

const Cita = sequelize.define('Cita', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre_cliente: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telefono_cliente: {
    type: DataTypes.STRING(15),
    allowNull: false,
  },
  correo_cliente: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  servicio: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lugar: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  precio: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  fecha: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  horario: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  tarjeta_credito: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  fecha_reserva: {
    type: DataTypes.DATE, // Asegúrate de que sea tipo DATE para almacenar fecha y hora
    allowNull: false,
    defaultValue: DataTypes.NOW, // Si no se pasa fecha, se toma la fecha actual
  }
});

module.exports = Cita;
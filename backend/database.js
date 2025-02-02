const { Sequelize } = require('sequelize');

// Utiliza la variable de entorno DATABASE_URL que definiste en docker-compose
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  logging: false,  // Puedes activarlo en desarrollo si deseas ver las consultas
});

module.exports = sequelize;

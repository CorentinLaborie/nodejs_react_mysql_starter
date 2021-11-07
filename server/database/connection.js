const { Sequelize, DataTypes, Model } = require('sequelize');
// Option 2: Passing parameters separately (other dialects)
const ORM = new Sequelize('cemeapps', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
});

var TryConnection = async () => {
  try {
    await ORM.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

module.exports = {ORM, Sequelize,TryConnection, DataTypes, Model};
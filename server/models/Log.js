const { ORM, Sequelize , DataTypes, Model } = require("../database/connection");

module.exports = (ORM, DataTypes) => {
  const Log = ORM.define("Log", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false
    },
    protocol: {
      type: DataTypes.STRING,
      allowNull: false
    },
    host: {
      type: DataTypes.STRING,
      allowNull: false
    },
    base_url: {
      type: DataTypes.STRING,
    },
    path_url: {
      type: DataTypes.STRING,
    },
    full_url: {
      type: DataTypes.STRING,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
  }, {
    // Other model options go here
    ORM, // We need to pass the connection instance
    modelName: 'Log' // We need to choose the model name
  })
  return Log
}

const { ORM, Sequelize , DataTypes, Model } = require("../database/connection");

module.exports = (ORM, DataTypes) => {
  const Visitor = ORM.define("Visitor", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    role: {
      type: DataTypes.STRING, // Recruiter || Visitor
      allowNull: false
    },
    birthDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  }, {
    // Other model options go here
    ORM, // We need to pass the connection instance
    modelName: 'Visitor' // We need to choose the model name
  })
  return Visitor
}

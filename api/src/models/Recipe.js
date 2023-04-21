const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4, //
      primaryKey: true,
      allowNull: false,
    },

    name: {
      type: DataTypes.STRING, //
      allowNull: false,
    },

    image: {
      type: DataTypes.STRING, //
      allowNull: false,
    },

    ResumenDelPlato: {
      type: DataTypes.TEXT, //
    },

    PasoApaso: {
      type: DataTypes.TEXT, //
      allowNull: false,
      unique:true,
    },

    healthScore: {
      type: DataTypes.STRING, //
    },
    
  },
  {timestamps: false}, // para no mostrar hora y fecha de creación
  );
};

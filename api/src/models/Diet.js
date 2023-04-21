const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('diet', {
        id: {
            type: DataTypes.UUID, // UUID es un tipo de dato de codigo alfanumerico
            defaultValue: DataTypes.UUIDV4, // asignacion por default de el codigo alfanumerico realizado con UUIDV4
            allownull: false,
            primaryKey: true
        },

        name: {
            type: DataTypes.STRING,
            allownull: false,
        },
    },
    {timestamps: false},
    );
};
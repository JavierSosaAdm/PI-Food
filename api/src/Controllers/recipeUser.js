const { Recipe } = require ('../db');

const createRecipe = async (id, name, image, PasoApaso, ResumenDelPlato, healthScore) => {
    const newRecipe = await Recipe.create ({id, name, image, PasoApaso, ResumenDelPlato, healthScore}) 

    return newRecipe;
};

module.exports = {createRecipe};
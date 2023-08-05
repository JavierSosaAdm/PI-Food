const { Router } = require('express');
const { getRecipeById, getRecipes } = require('../Controllers/getRecipe');
const { postRecipe } = require('../Controllers/postRecipe');

const recipeRouter = Router();

recipeRouter.use('/', getRecipes);

module.exports = recipeRouter;
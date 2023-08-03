const { Router } = require('express');
const { getRecipe } = require('../Controllers/getRecipe');
const { postRecipe } = require('../Controllers/postRecipe');

const recipeRouter = Router();


module.exports = recipeRouter;
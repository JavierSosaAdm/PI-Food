const axios = require('axios');
require('dotenv').config();
const { URL, API_KEY } = process.env;

const getRecipes = async (req, res, next) => {
    try {
        const recipes = await axios.get(`${URL}?apiKey=${API_KEY}&addRecipeInformation=true`)
        const response = recipes.data;
        res.status(200).JSON({response});
    } catch (error) {
       res.status(400).send(error.message) 
    }
}
const getRecipeById = (req, res) => {
    try {
        
    } catch (error) {
        
    }
};

const getRecipeByName = (req, res) => {
    try {
        
    } catch (error) {
        
    }
};

module.exports = { getRecipeById, getRecipeByName, getRecipes };
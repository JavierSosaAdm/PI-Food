const { Router } = require('express');
const { Recipe, Diet } = require('../db')

const router = Router();

router.post('/', async (req, res, next) => {
    const { name, PasoApaso, ResumenDelPlato, healthScore, image } = req.body;
    const newRecipe = await Recipe.create({
        name,
        PasoApaso,
        ResumenDelPlato,
        healthScore,
        image,
    })

    
})

module.exports = router;
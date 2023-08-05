const { Router } = require('express');
const { getDiet } = require('../Controllers/getDiet')

const dietRouter = Router()

// dietRouter.use('/diet', getDiet)

module.exports = dietRouter;
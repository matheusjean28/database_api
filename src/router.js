const express = require('express')
const routes = express.Router();

routes.get('/', (req, res) => {
    return res.json({res: 'ok, well done'})
})

module.exports = routes;
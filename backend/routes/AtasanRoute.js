const express = require('express')
const aRoute = express.Router()

const AtasanController = require('../controllers/AtasanController')

aRoute.post('/', AtasanController.loginAtasan)
aRoute.get('/:id_atasan/:id_kantor', AtasanController.dataAtasan)
aRoute.get('/:id_atasan', AtasanController.dataPersetujuan)
aRoute.patch('/:id_persetujuan', AtasanController.updatePersetujuan)

module.exports = aRoute
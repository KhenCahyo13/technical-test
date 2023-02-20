const express = require('express')
const pRoute = express.Router()

const PengelolaController = require('../controllers/PengelolaController')

pRoute.post('/', PengelolaController.loginPengelola)
pRoute.patch('/', PengelolaController.updateStatus)
pRoute.get('/data-request/disetujui', PengelolaController.dataDisetujui)
pRoute.get('/data-request/menunggu', PengelolaController.dataMenunggu)
pRoute.get('/data-tambang/tambang', PengelolaController.dataTambang)
pRoute.get('/data-pegawai/pegawai', PengelolaController.dataPegawai)
pRoute.get('/data-kendaraan/kendaraan', PengelolaController.dataKendaraan)

module.exports = pRoute
const Database = require('../config/Database')
const md5 = require('md5')

const PengelolaController = {
    loginPengelola: async (request, response) => {
        try {
            const { username } = request.body
            const [ result ] = await Database.query("SELECT * FROM pengelola WHERE username_pengelola = ?", [username])
            if (result.length > 0) {
                const { password } = request.body
                const hashmMD5 = md5(password)
                if (hashmMD5 === result[0].password_pengelola) {
                    response.status(200).json({ msg: "Login berhasil", data: result })
                } else {
                    response.status(400).json({ msg: "Password salah" })
                }
            } else {
                response.status(400).json({ msg: "Username tidak ditemukan" })
            }
        } catch (error) {
            console.log(error.message)
        }
    },

    updateStatus: async (request, response) => {
        try {
            const [ result ] =  await Database.query('UPDATE request_pemakaian SET status = "Disetujui" WHERE id_request_pemakaian IN (SELECT id_request_pemakaian FROM persetujuan WHERE persetujuan = 1 GROUP BY id_request_pemakaian HAVING COUNT(persetujuan) >= 2)')
            response.status(201).json({ msg: "Pemakaian berhasil disetujui" })
        } catch (error) {
            console.log(error.message)
        }
    },

    dataDisetujui: async (request, response) => {
        try {
            const [ results ] = await Database.query("SELECT persetujuan.id_request_pemakaian, request_pemakaian.judul_request, GROUP_CONCAT(atasan.nama_atasan SEPARATOR ', ') as nama_atasan FROM persetujuan INNER JOIN request_pemakaian ON request_pemakaian.id_request_pemakaian = persetujuan.id_request_pemakaian INNER JOIN atasan ON atasan.id_atasan = persetujuan.id_atasan WHERE persetujuan.id_request_pemakaian = persetujuan.id_request_pemakaian AND persetujuan.persetujuan = 1 GROUP BY persetujuan.id_request_pemakaian HAVING COUNT(persetujuan.persetujuan) >= 2;")
            response.status(200).json({ data: results })
        } catch (error) {
            response.status(400).json({ msg: error.message })
        }
    },

    dataMenunggu: async (request, response) => {
        try {
            const [ results ] = await Database.query("SELECT persetujuan.id_request_pemakaian, request_pemakaian.judul_request, GROUP_CONCAT(atasan.nama_atasan SEPARATOR ', ') as nama_atasan FROM persetujuan INNER JOIN request_pemakaian ON request_pemakaian.id_request_pemakaian = persetujuan.id_request_pemakaian INNER JOIN atasan ON atasan.id_atasan = persetujuan.id_atasan WHERE persetujuan.id_request_pemakaian = persetujuan.id_request_pemakaian AND persetujuan.persetujuan = 0 GROUP BY persetujuan.id_request_pemakaian HAVING COUNT(persetujuan.persetujuan) >= 2")
            response.status(200).json({ data: results }) 
        } catch (error) {
            response.status(400).json({ msg: error.message })
        }
    },

    dataPegawai: async (request, response) => {
        try {
            const [ results ] = await Database.query("SELECT pegawai.nama_pegawai, tambang.nama_tambang, tambang.lokasi_tambang FROM pegawai INNER JOIN tambang ON pegawai.id_tambang = tambang.id_tambang")
            response.status(200).json({ data: results })
        } catch (error) {
            response.status(400).json({ msg: error.message })
        }
    },

    dataTambang: async (request, response) => {
        try {
            const [ results ] = await Database.query("SELECT * FROM tambang")
            response.status(200).json({ data: results })
        } catch(error) {
            response.status(400).json({ msg: error.message })
        }
    },

    dataKendaraan: async (request, response) => {
        try {
            const [ results ] = await Database.query("SELECT * FROM kendaraan")
            response.status(200).json({ data: results })
        } catch (error) {
            response.status(400).json({ msg: error.message })
        }
    }
}

module.exports = PengelolaController
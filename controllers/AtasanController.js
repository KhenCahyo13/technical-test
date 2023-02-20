const Database = require('../config/Database')
const md5 = require('md5')

const AtasanController = {
    loginAtasan: async (request, response) => {
        try {
            const { username } = request.body
            const [ result ] = await Database.query("SELECT * FROM atasan WHERE username_atasan = ?", [username])
            if (result.length > 0) {
                const { password } = request.body
                const hashmMD5 = md5(password)
                if (hashmMD5 === result[0].password_atasan) {
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

    dataAtasan: async (request, response) => {
        try {
            const { id_atasan } = request.params
            const { id_kantor } = request.params
            const [ result ] = await Database.query("SELECT atasan.nama_atasan, atasan.username_atasan, kantor.nama_kantor, kantor.jenis_kantor, kantor.lokasi_kantor FROM atasan INNER JOIN kantor ON atasan.id_kantor = kantor.id_kantor WHERE atasan.id_atasan = ? AND atasan.id_kantor = ?", [id_atasan, id_kantor])
            response.status(200).json({ data: result })
        } catch (error) {
            response.status(400).json({ msg: "Data tidak ditemukan" })
        }
    },

    dataPersetujuan : async (request, response) => {
        try {
            const { id_atasan } = request.params
            const [ result ] = await Database.query("SELECT persetujuan.id_persetujuan, request_pemakaian.judul_request, kendaraan.nama_kendaraan, driver.nama_driver, atasan.nama_atasan, request_pemakaian.total_bbm, persetujuan.persetujuan FROM persetujuan INNER JOIN request_pemakaian on request_pemakaian.id_request_pemakaian = persetujuan.id_request_pemakaian INNER JOIN kendaraan ON kendaraan.id_kendaraan = request_pemakaian.id_kendaraan INNER JOIN driver ON driver.id_driver = request_pemakaian.id_request_pemakaian INNER JOIN atasan ON atasan.id_atasan = persetujuan.id_atasan WHERE persetujuan.id_atasan = ?", [id_atasan])
            response.status(200).json({ data: result })
        } catch (error) {
            response.status(400).json({ msg: "Data tidak ditemukan" })
        }
    },

    updatePersetujuan: async (request, response) => {
        try {
            const { id_persetujuan } = request.params
            const [ result ] = await Database.query("UPDATE persetujuan SET persetujuan = 1 WHERE id_persetujuan = ?", [id_persetujuan])
            response.status(201).json({ msg: "Data berhasil disetujui"})
        } catch (error) {
            response.status(400).json({ msg: error.message })
        }
    }
}

module.exports = AtasanController
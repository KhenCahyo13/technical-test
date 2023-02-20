import axios from "axios"
import { useQuery } from "react-query"

// Fetch Data Disetujui
const fetchDataDisetujui = () => {
    return axios.get('http://localhost:5000/pengelola/data-request/disetujui')
}

export const useDataDisetujui = () => {
    return useQuery('data-disetujui', fetchDataDisetujui)
}

// Fetch Data Menunggu
const fetchDataMenunggu = () => {
    return axios.get('http://localhost:5000/pengelola/data-request/menunggu')
}

export const useDataMenunggu = () => {
    return useQuery('data-disetujui', fetchDataMenunggu)
}

// Fetch Data Tambang
const fetchDataTambang = () => {
    return axios.get('http://localhost:5000/pengelola/data-tambang/tambang')
}

export const useDataTambang = () => {
    return useQuery('data-tambang', fetchDataTambang)
}

// Fetch Data Pegawai
const fetchDataPegawai = () => {
    return axios.get('http://localhost:5000/pengelola/data-pegawai/pegawai')
}

export const useDataPegawai = () => {
    return useQuery('data-pegawai', fetchDataPegawai)
}

// Fetch Data Kendaraan
const fetchDataKendaraan = () => {
    return axios.get('http://localhost:5000/pengelola/data-kendaraan/kendaraan')
}

export const useDataKendaraan = () => {
    return useQuery('data-kendaraan', fetchDataKendaraan)
}

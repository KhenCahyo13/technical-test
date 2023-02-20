import axios from "axios"
import { useQuery, useQueryClient } from "react-query"

// Fetch Data Atasan Sesuai ID Atasan
const fetchDataAtasan = (id_atasan, id_kantor) => {
    return axios.get(`http://localhost:5000/atasan/${id_atasan}/${id_kantor}`)
}

export const useDataAtasan = (id_atasan, id_kantor) => {
    const queryClient = useQueryClient()
    return useQuery(['atasan', id_atasan, id_kantor], () => fetchDataAtasan(id_atasan, id_kantor), {
        initialData: () => {
            const atasan = queryClient.getQueryData('atasan')?.data?.find((atasan) => atasan.id_atasan === parseInt(id_atasan) && atasan.id_kantor === parseInt(id_kantor))
            if(atasan) {
                return { data: atasan }
            } else {
                return undefined
            }
        }
    })
}

// Fetch Data Persetujuan Sesuai ID Atasan
const fetchDataPersetujuan = (id_atasan) => {
    return axios.get(`http://localhost:5000/atasan/${id_atasan}`)
}

export const useDataPersetujuan = (id_atasan) => {
    const queryClient = useQueryClient()
    return useQuery(['persetujuan', id_atasan], () => fetchDataPersetujuan(id_atasan), {
        initialData: () => {
            const persetujuan = queryClient.getQueryData('persetujuan')?.data?.find((persetujuan) => persetujuan.id_atasan === parseInt(id_atasan))
            if(persetujuan) {
                return { data: persetujuan }
            } else {
                return undefined
            }
        }
    })
}
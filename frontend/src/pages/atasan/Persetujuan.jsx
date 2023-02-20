import axios from "axios"
import { useMutation, useQueryClient } from "react-query"
import { useParams } from "react-router-dom"
import Swal from "sweetalert2"
import NavbarAtasan from "../../component/NavbarAtasan"
import { useDataPersetujuan } from "../../hooks/AtasanHooks"

const Persetujuan = () => {
    const { id_atasan } = useParams()
    const queryClient = useQueryClient()

    const updatePersetujuan = useMutation((id_persetujuan) => {
        return axios.patch(`http://localhost:5000/atasan/${id_persetujuan}`)
    }, {
        onSuccess: (response) => {
            queryClient.invalidateQueries();
            Swal.fire({
                icon: 'success',
                title: 'Berhasil...',
                text: response.data.msg
            })
        }
    }, {
        onError: (error) => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.response.data.msg
            })
        }
    })

    const { isLoading, data, isError, error } = useDataPersetujuan(id_atasan)

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    if (isError) {
        return <h1>{error.message}</h1>
    }

    return (
        <section className="px-4 py-4 lg:px-16 lg:py-8">
            <NavbarAtasan />
            <div className="bg-white px-4 py-4 mt-6 rounded-md shadow-md lg:px-8">
                <h1 className="font-semibold text-blue-500 lg:text-lg">Tabel Persetujuan</h1>
                <p className="text-gray-500 text-sm lg:text-base">Berikut adalah tabel tentang data yang perlu anda setujui</p>
                <div className="block">
                    <div className="relative overflow-x-auto mt-4 rounded-md lg:rounded-lg">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-gray-200">
                                <tr>
                                    <th scope="col" className="px-6 py-2">No</th>
                                    <th scope="col" className="px-6 py-2">Judul</th>
                                    <th scope="col" className="px-6 py-2">Kendaraan</th>
                                    <th scope="col" className="px-6 py-2">Driver</th>
                                    <th scope="col" className="px-6 py-2">Atasan</th>
                                    <th scope="col" className="px-6 py-2">Total BBM</th>
                                    <th scope="col" className="px-6 py-2">Status</th>
                                    <th scope="col" className="px-6 py-2">Aksi</th>
                                </tr>
                            </thead>
                            <tbody className="bg-gray-100">
                                {data?.data.data.map((row, index) => (    
                                    <tr key={index}>
                                        <td className="px-6 py-2 font-semibold whitespace-nowrap">{index + 1}</td>
                                        <td className="px-6 py-2">{row.judul_request}</td>
                                        <td className="px-6 py-2">{row.nama_kendaraan}</td>
                                        <td className="px-6 py-2">{row.nama_driver}</td>
                                        <td className="px-6 py-2">{row.nama_atasan}</td>
                                        <td className="px-6 py-2">{row.total_bbm}</td>
                                        <td className="px-4 py-2">
                                            <div className={row.persetujuan === 0 ? "false-box" : "true-box"}>{row.persetujuan === 0 ? "Belum Disetujui" : "Disetujui"}</div>
                                        </td>
                                        <td className="px-6 py-2">
                                            {row.persetujuan === 0 ? <button onClick={() => updatePersetujuan.mutate(row.id_persetujuan)} className="btn-green">Setujui</button> : <h1 className="text-center font-bold">-</h1>}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Persetujuan
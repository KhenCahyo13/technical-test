import NavbarAdmin from "../../component/NavbarAdmin"
import { useDataTambang } from "../../hooks/PengelolaHooks"

const Tambang = () => {
    const {isLoading, data, isError, error} = useDataTambang()

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    if (isError) {
        return <h1>{error.message}</h1>
    }

    return (
        <section className="px-4 py-4 lg:px-16 lg:py-8">
            <NavbarAdmin />
            <div className="bg-white px-4 py-4 mt-6 rounded-md shadow-md lg:px-8">
                <h1 className="font-semibold text-blue-500 lg:text-lg">Tabel Tambang</h1>
                <p className="text-gray-500 text-sm lg:text-base">Berikut adalah tabel daftar tambang yang dimiliki perusahaan</p>
                <div className="block">
                    <div className="relative overflow-x-auto mt-4 rounded-md lg:rounded-lg">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-gray-200">
                                <tr>
                                    <th scope="col" className="px-6 py-2">No</th>
                                    <th scope="col" className="px-6 py-2">Nama Tambang</th>
                                    <th scope="col" className="px-6 py-2">Lokasi Tambang</th>
                                </tr>
                            </thead>
                            <tbody className="bg-gray-100">
                                {data?.data.data.map((row, index) => (
                                    <tr key={index}>
                                        <td className="px-6 py-2 font-semibold whitespace-nowrap">{index + 1}</td>
                                        <td className="px-6 py-2 font-semibold whitespace-nowrap">{row.nama_tambang}</td>
                                        <td className="px-6 py-2 font-semibold whitespace-nowrap">{row.lokasi_tambang}</td>
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

export default Tambang
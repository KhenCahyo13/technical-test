import { Link, useParams } from "react-router-dom"
import NavbarAtasan from "../../component/NavbarAtasan"
import { useDataAtasan, useDataPersetujuan } from "../../hooks/AtasanHooks"
import img1 from './img/img1.png'
import img2 from './img/img2.png'
import img3 from './img/img3.png'

const HomeAtasan = () => {
    const { id_atasan } = useParams()
    const { id_kantor } = useParams()
    const { isLoading, data, isError, error } = useDataAtasan(id_atasan, id_kantor)
    const { isLoading: isLoading2, data: persetujuan, isError: isError2, error: error2 } = useDataPersetujuan(id_atasan)

    // Filter Data Persetujuan
    const filterData = persetujuan?.data.data.filter(persetujuan => persetujuan.persetujuan === 0)

    if (isLoading || isLoading2) {
        return <h1>Loading...</h1>
    }

    if (isError || isError2) {
        return <h1>{error.message || error2.message}</h1>
    }

    return (
        <section className="px-4 py-4 lg:px-16 lg:py-8">
            <NavbarAtasan />
            <div className="bg-white px-4 py-4 mt-6 rounded-md shadow-md lg:px-8">
                <div className="block md:flex md:justify-between">
                    <div>
                        <h1 className="font-semibold text-blue-500 lg:text-lg">Selamat Datang {data.data.data[0].nama_atasan}</h1>
                        <p className="text-gray-500 text-sm lg:text-base">Setujui permintaan pemesanan kendaraan perusahaan anda disini</p>
                    </div>
                    <div className="flex justify-end mt-4 md:block md:mt-0">
                        <img src={img1} className="w-44 lg:w-56" alt="..." />
                    </div>
                </div>
            </div>
            <div className="bg-white px-4 py-4 mt-4 rounded-md shadow-md lg:px-8">
                <h1 className="font-semibold text-blue-500 lg:text-lg">Data</h1>
                <p className="text-gray-500 text-sm lg:text-base">Berikut adalah data tentang anda</p>
                <div className="block md:flex md:justify-between md:items-center">
                    <div className="bg-blue-600 bg-opacity-20 px-4 py-4 rounded-md mt-2 md:mt-4 md:w-[50%] lg:w-[40%]">
                        <h1 className="text-blue-600 font-semibold">Nama : <span className="font-normal">{data.data.data[0].nama_atasan}</span></h1>
                        <h1 className="text-blue-600 font-semibold mt-1">Username : <span className="font-normal">{data.data.data[0].username}</span></h1>
                        <h1 className="text-blue-600 font-semibold mt-1">Kantor : <span className="font-normal">{data.data.data[0].nama_kantor}</span></h1>
                        <h1 className="text-blue-600 font-semibold mt-1">Alamat Kantor : <span className="font-normal">{data.data.data[0].lokasi_kantor}</span></h1>
                        <h1 className="text-blue-600 font-semibold mt-1">Jenis Kantor : <span className="font-normal">{data.data.data[0].jenis_kantor}</span></h1>
                    </div>
                    <div className="flex justify-end mt-8 md:block md:mt-0">
                        <img src={img2} className="w-44 lg:w-56" alt="..." />
                    </div>
                </div>
            </div>
            <div className="bg-white px-4 py-4 mt-4 rounded-md shadow-md lg:px-8">
                <h1 className="font-semibold text-blue-500 lg:text-lg">Request Persetujuan</h1>
                <p className="text-gray-500 text-sm lg:text-base">Berikut adalah data request yang perlu anda setujui</p>
                <div className="block md:flex md:justify-between">
                    <div>
                        <div className="grid grid-cols-1 gap-y-2 md:grid-cols-2 md:gap-y-0 md:gap-4 mt-2 md:mt-4">
                            {filterData.map((persetujuan, index) => (
                                <div key={index} className="bg-yellow-600 bg-opacity-20 rounded-md px-4 py-2">
                                    <h1 className="text-yellow-600 font-semibold text-sm md:text-base">{persetujuan.judul_request}</h1>
                                    <h1 className="text-yellow-600 text-sm">Status : Menunggu Persetujuan</h1>
                                </div>
                            ))}
                        </div>
                        <Link to={`/persetujuan/${id_atasan}`}><button className="bg-blue-500 rounded-md mt-4 px-4 py-2 hover:bg-blue-600 transition duration-300 cursor-pointer text-white text-sm">Cek Lebih Lengkap</button></Link>
                    </div>
                    <div className="flex justify-end mt-8 md:block md:mt-0">
                        <img src={img3} className="w-44 lg:w-56" alt="..." />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeAtasan
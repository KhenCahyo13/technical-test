import NavbarAdmin from "../../component/NavbarAdmin"
import { useDataDisetujui, useDataMenunggu } from "../../hooks/PengelolaHooks"
import { faChevronDown, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

const TableDisetujui = () => {
    const {isLoading, data, isError, error} = useDataDisetujui()
    if (isLoading) {
        return <h1>Loading...</h1>
    }

    if (isError) {
        return <h1>{error.message}</h1>
    }

    return (
        <div className="relative overflow-x-auto mt-4 rounded-md lg:rounded-lg">
            <table className="w-full text-sm text-left">
                <caption className="bg-gray-100 text-left px-6 py-4 font-semibold text-lg">
                    Table Data Disetujui
                    <p className="font-normal text-sm">Data request pemakaian kendaraan yang telah disetujui</p>
                </caption>
                <thead className="bg-gray-200">
                    <tr>
                        <th scope="col" className="px-6 py-2">No</th>
                        <th scope="col" className="px-6 py-2">Judul</th>
                        <th scope="col" className="px-6 py-2">Daftar Atasan</th>
                        <th scope="col" className="px-6 py-2">Status</th>
                    </tr>
                </thead>
                <tbody className="bg-gray-100">
                    {data?.data.data.map((row, index) => (
                        <tr key={index}>
                            <td className="px-6 py-2 font-semibold whitespace-nowrap">{index  + 1}</td>
                            <td className="px-6 py-2">{row.judul_request}</td>
                            <td className="px-6 py-2">{row.nama_atasan}</td>
                            <td className="px-6 py-2">
                                <div className="true-box">Disetujui</div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

const TableMenunggu = () => {
    const {isLoading, data, isError, error} = useDataMenunggu()
    if (isLoading) {
        return <h1>Loading...</h1>
    }

    if (isError) {
        return <h1>{error.message}</h1>
    }

    return (
        <div className="relative overflow-x-auto mt-4 rounded-md lg:rounded-lg">
            <table className="w-full text-sm text-left">
                <caption className="bg-gray-100 text-left px-6 py-4 font-semibold text-lg">
                    Table Data Menunggu Persetujuan
                    <p className="font-normal text-sm">Data request pemakaian kendaraan yang masih menunggu persetujuan</p>
                </caption>
                <thead className="bg-gray-200">
                    <tr>
                        <th scope="col" className="px-6 py-2">No</th>
                        <th scope="col" className="px-6 py-2">Judul</th>
                        <th scope="col" className="px-6 py-2">Daftar Atasan</th>
                        <th scope="col" className="px-6 py-2">Status</th>
                    </tr>
                </thead>
                <tbody className="bg-gray-100">
                    {data?.data.data.map((row, index) => (
                        <tr key={index}>
                            <td className="px-6 py-2 font-semibold whitespace-nowrap">{index  + 1}</td>
                            <td className="px-6 py-2">{row.judul_request}</td>
                            <td className="px-6 py-2">{row.nama_atasan}</td>
                            <td className="px-6 py-2">
                                <div className="false-box">Menunggu Disetujui</div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

const Pemakaian = () => {
    const [openDropdown, setOpenDropdown] = useState(false)
    const [component, setComponent] = useState(1)

    return (
        <section className="px-4 py-4 lg:px-16 lg:py-8">
            <NavbarAdmin />
            <div className="bg-white px-4 py-4 mt-6 rounded-md shadow-md lg:px-8">
                <h1 className="font-semibold text-blue-500 lg:text-lg">Tabel Request Pemakaian</h1>
                <p className="text-gray-500 text-sm lg:text-base">Berikut adalah data request pemakaian kendaraan di perusahaan</p>
                <div className="block">
                    <button onClick={() => setOpenDropdown(!openDropdown)} className="mt-4 px-4 py-2 border border-gray-800 border-opacity-20 rounded-md text-sm font-medium">Select Table <FontAwesomeIcon className="text-xs ml-2" icon={openDropdown ? faChevronDown : faChevronRight} /> </button>
                    <div className={"mt-2 py-2 border border-gray-800 border-opacity-20 rounded-md w-fit" + (openDropdown ? " block" : " hidden")}>
                        <ul>
                            <li onClick={() => setComponent(1)} className="px-4 py-2 text-sm hover:bg-gray-100 transition duration-300 cursor-pointer">Table Data Disetujui</li>
                            <li onClick={() => setComponent(2)} className="px-4 py-2 text-sm hover:bg-gray-100 transition duration-300 cursor-pointer">Table Data Menunggu</li>
                        </ul>
                    </div>
                    {/* Table */}
                    {component === 1 ? <TableDisetujui /> : <TableMenunggu />}
                </div>
            </div>
        </section>
    )
}

export default Pemakaian
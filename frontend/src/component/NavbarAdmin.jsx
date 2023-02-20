import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const NavbarAdmin = () => {
    const [openNav, setOpenNav] = useState(false)
    const [id_pengelola, setIdPengelola] = useState()
    const navigate = useNavigate('')

    useEffect(() => {
        const storing = localStorage.getItem('admin')
        const parse = JSON.parse(storing)
        setIdPengelola(parse.id_pengelola)
    }, [])

    const handleLogout = () => {
        navigate('/')
        localStorage.removeItem('admin')
    }

    return (
        <>
        {/* Mobile Nav */}
        <div className="p-4 bg-white rounded-md shadow-md md:px-8">
            <div className="flex justify-between">
                <h1 className="font-bold text-blue-500">PT. NIKEL</h1>
                <button onClick={() => setOpenNav(true)} className="md:hidden"><FontAwesomeIcon icon={faBars} /></button>
                {/* Desktop Menus */}
                <ul className="hidden items-center gap-4 md:flex">
                   <Link to={`/home-admin/${id_pengelola}`}><li className="font-medium cursor-pointer hover:text-blue-500 transition duration-300">Beranda</li></Link>
                   <Link to="/pegawai"><li className="font-medium cursor-pointer hover:text-blue-500 transition duration-300">Pegawai</li></Link>
                   <Link to="/tambang"><li className="font-medium cursor-pointer hover:text-blue-500 transition duration-300">Tambang</li></Link>
                   <Link to='/pemakaian'><li className="font-medium cursor-pointer hover:text-blue-500 transition duration-300">Pemakaian</li></Link>
                   <Link to="/kendaraan"><li className="font-medium cursor-pointer hover:text-blue-500 transition duration-300">Kendaraan</li></Link>
                   <li onClick={handleLogout} className="font-medium cursor-pointer hover:text-blue-500 transition duration-300">Logout</li> 
                </ul>
            </div>
        </div>
        <div className={"bg-gray-900 bg-opacity-20 fixed top-0 bottom-0 left-0 right-0 transition duration-300 md:hidden" + (openNav === true ? " -translate-x-0" : " -translate-x-96")}></div>
        <div className={"bg-white fixed top-0 bottom-0 left-0 right-0 w-[50%] shadow-md p-4 transition duration-300 md:hidden" + (openNav === true ? " -translate-x-0" : " -translate-x-96")}>
            <h1 className="font-bold">PT. NIKEL</h1>
            <button onClick={() => setOpenNav(false)} className="bg-blue-500 rounded-full px-2 text-white absolute top-4 left-44"><FontAwesomeIcon icon={faXmark} /></button>
            <hr className="my-2" />
            <ul className="mt-4">
                <Link to={`/home-admin/${id_pengelola}`}><li className="bg-gray-100 rounded-md text-center text-sm py-2">Beranda</li></Link>
                <Link to="/pegawai"><li className="bg-gray-100 rounded-md text-center text-sm py-2 mt-3">Pegawai</li></Link>
                <Link to="/tambang"><li className="bg-gray-100 rounded-md text-center text-sm py-2 mt-3">Tambang</li></Link>
                <Link to='/pemakaian'><li className="bg-gray-100 rounded-md text-center text-sm py-2 mt-3">Pemakaian</li></Link>
                <Link to="/kendaraan"><li className="bg-gray-100 rounded-md text-center text-sm py-2 mt-3">Kendaraan</li></Link>
                <li onClick={handleLogout} className="bg-gray-100 rounded-md text-center text-sm py-2 mt-3">Logout</li>
            </ul>
            <div className="absolute bottom-0 my-4">
                <p className="text-sm">Login sebagai :</p>
                <h1 className="font-semibold">Rudi Santoso</h1>
            </div>
        </div>
        </>
    )
}

export default NavbarAdmin
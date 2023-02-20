import NavbarAdmin from "../../component/NavbarAdmin"
import img1 from './img/img1.png'

const HomeAdmin = () => {
    return (
        <section className="px-4 py-4 lg:px-16 lg:py-8">
            <NavbarAdmin />
            <div className="bg-white px-4 py-4 mt-6 rounded-md shadow-md lg:px-8">
                <div className="block md:flex md:justify-between">
                    <div>
                        <h1 className="font-semibold text-blue-500 lg:text-lg">Selamat Datang Admin</h1>
                        <p className="text-gray-500 text-sm lg:text-base">Monitoring pemakaian kendaraan perusahaan PT. Nikel disini</p>
                    </div>
                    <div className="flex justify-end mt-4 md:block md:mt-0">
                        <img src={img1} className="w-44 lg:w-56" alt="..." />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeAdmin
import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Swal from 'sweetalert2'

const LoginAdmin = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleLogin = async (event) => {
        event.preventDefault()
        try {
            await axios.post('http://localhost:5000/pengelola', {
                username, password
            }).then((response) => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: response.data.msg,
                    text: 'Diarahkan ke halaman Admin',
                    showConfirmButton: false,
                    timer: 3000
                })
                const id_pengelola = response.data.data[0].id_pengelola
                localStorage.setItem('admin', JSON.stringify(response.data.data[0]))
                setTimeout(() => {
                    navigate(`/home-admin/${id_pengelola}`)
                }, 3000)
            })
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Terjadi kesalahan',
                text: error.response.data.msg
            })
        }
    }

    return (
        <section className="px-4 py-36 md:px-48 lg:px-[30rem]">
            <div className="bg-white rounded-md shadow-md p-4 my-4 border border-gray-800 border-opacity-10">
                <h1 className="font-bold text-lg">Login Admin</h1>
                <form onSubmit={handleLogin}>
                        <input onChange={(event) => setUsername(event.target.value)} value={username} type="text" className="form-control" placeholder="Masukkan username anda" />
                        <input onChange={(event) => setPassword(event.target.value)} value={password} type="password" className="form-control" placeholder="Masukkan password anda" />
                        <button className="btn-blue">Login</button>
                </form>
            </div>
        </section>
    )
}

export default LoginAdmin
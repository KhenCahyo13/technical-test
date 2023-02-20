import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Swal from 'sweetalert2'

const LoginAtasan = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleLogin = async (event) => {
        event.preventDefault()
        try {
            await axios.post('http://localhost:5000/atasan', {
                username, password
            }).then((response) => {
                localStorage.setItem('atasan', JSON.stringify(response.data.data[0]))
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: response.data.msg,
                    text: 'Diarahkan ke halaman Atasan',
                    showConfirmButton: false,
                    timer: 3000
                })
                const id_atasan = response.data.data[0].id_atasan
                const id_kantor = response.data.data[0].id_kantor
                setTimeout(() => {
                    navigate(`/home-atasan/${id_atasan}/${id_kantor}`)
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
                <h1 className="font-bold text-lg">Login Atasan</h1>
                <form onSubmit={handleLogin}>
                        <input onChange={(event) => setUsername(event.target.value)} value={username} type="text" className="form-control" placeholder="Masukkan username anda" />
                        <input onChange={(event) => setPassword(event.target.value)} value={password} type="password" className="form-control" placeholder="Masukkan password anda" />
                        <button className="btn-blue">Login</button>
                </form>
            </div>
        </section>
    )
}

export default LoginAtasan
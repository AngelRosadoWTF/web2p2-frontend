import { useState } from 'react'
import api from '../services/api'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const handleLoginCookie = async () => {
    try {
      const formData = new URLSearchParams()
      formData.append('username', username)
      formData.append('password', password)
      const response = await api.post(
        '/login/cookie',
        formData,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      )

      alert(
        `Usuario autenticado\n\nToken:\n${response.data.access_token}`
      )

    } catch (error) {
      alert('Error de autenticación')
    }
  }

  const handleLoginHeader = async () => {
    try {
      const formData = new URLSearchParams()
      formData.append('username', username)
      formData.append('password', password)
      const response = await api.post(
        '/login/header',
        formData,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      )

      alert(
        `Usuario autenticado\n\nToken:\n${response.data.access_token}`
      )

    } catch (error) {
      alert('Error de autenticación')
    }
  }

  return (
    <div className="card">
      <h2>Login</h2>

      <input
        type="text"
        placeholder="Usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLoginCookie}>
        Entrar Cookie
      </button>

      <button onClick={handleLoginHeader}>
        Entrar Header
      </button>
    </div>
  )
}

export default Login
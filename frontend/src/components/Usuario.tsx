import { useState } from 'react'
import api from '../services/api'

interface User {
  id: number
  full_name: string
  username: string
  hashed_password: string
}

const Usuario = () => {
  const [user, setUser] = useState<User | null>(null)
  const getUserInfo = async () => {
    try {
      const response = await api.get('/users/me')
      setUser(response.data)
    } catch (error) {
      alert('Error de autenticación')
    }
  }

  return (
    <div className="card">
      <h2>Información del Usuario</h2>

      <button onClick={getUserInfo}>
        Mostrar Información
      </button>

      {user && (
        <div className="user-info">
          <p>
            <strong>Nombre:</strong> {user.full_name}
          </p>

          <p>
            <strong>Usuario:</strong> {user.username}
          </p>

          <p>
            <strong>Password Hash:</strong> {user.hashed_password}
          </p>
        </div>
      )}
    </div>
  )
}

export default Usuario
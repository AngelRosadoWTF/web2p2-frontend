import { useState } from 'react'
import api from '../services/api'

const Registro = () => {
  const [fullName, setFullName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const handleRegister = async () => {
    try {
      await api.post('/register', {
        full_name: fullName,
        username,
        password,
      })

      alert('Usuario creado correctamente')
      setFullName('')
      setUsername('')
      setPassword('')

    } catch (error) {
      alert('Error al crear usuario')
    }
  }

  return (
    <div className="card">
      <h2>Crear Usuario</h2>

      <input
        type="text"
        placeholder="Nombre completo"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Nombre de usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleRegister}>
        Crear Usuario
      </button>
    </div>
  )
}

export default Registro
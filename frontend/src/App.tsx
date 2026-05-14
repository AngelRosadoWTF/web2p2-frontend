import Login from './components/Login'
import Registro from './components/Registro'
import Usuario from './components/Usuario'

function App() {
  return (
    <div className="container">
      <h1>Autenticación completa</h1>
      <div className="forms">
        <Login />
        <Registro />
      </div>
    </div>
  )
}

export default App
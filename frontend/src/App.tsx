import Login from './components/Login'
import Registro from './components/Registro'
import Usuario from './components/Usuario'

function App() {
  return (
    <div className="container">
      <h1>Autenticación Completa</h1>
      <p>Por: Ángel Rosado y Anderson Guillermo</p>
      <div className="forms">
        <Login />
        <Registro />
        <Usuario />
      </div>
    </div>
  )
}

export default App
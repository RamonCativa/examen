import { useState } from 'react'
import './App.css'
import { PersonajesAleatorios } from './componentes/PersonajesAleatorios'
import { Filtro } from './componentes/Filtros'
import { Buscar } from './componentes/Buscar'

function App() {
  const [nombre, setNombre] = useState('')

  return (
    <>
      <PersonajesAleatorios/>
      <Filtro setNombre={setNombre}/>
      <Buscar nombre={nombre}/>
    </>
  )
}

export default App
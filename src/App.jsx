import { useState } from 'react'

export function App () {
  const [numero, setNumero] = useState(100)
  const [verdade, setVerdade] = useState(true)


  function aumentar() {
    setNumero(numero + 100)
  }

  function comprovador() {
    setVerdade(!verdade)
  }

  return (
    <div>
      <h1>useState</h1>

      <p>Número: {numero}</p>

      <button onClick={aumentar}>Aumentar</button>
      

      {
        verdade ? (
          <div>
            <button onClick={comprovador}>Mostrar</button>
          </div>
        ) : (
          <div>
            <p>marcinho</p>
            <button onClick={comprovador}>Esconder</button>
          </div>
        )
      }
    </div>
  )
}
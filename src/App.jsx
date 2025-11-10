import { useState } from 'react'
import './App.css'

function App() {
  const [ cep, setCep ] = useState("");
  const [ rua, setRua ] = useState("");
  const [ bairro, setBairro ] = useState("");
  const [ cidade, setCidade ] = useState("");
  const [ estado, setEstado ] = useState("");
  const [ inputsDesativados, setInputsDesativados ] = useState(true);



  function formatCep(value) {
    // tira tudo q n é numero
    value = value.replace(/\D/g, '');
    
    // add o tracinho
    if (value.length > 5) {
      value = value.replace(/(\d{5})(\d)/, '$1-$2');
    }
    
    return value;
  }

  return (
    <main>
      <form className='form-entrada'>
        <h1>Consulta de CEP</h1>

        <div>
          <input 
            type="text" 
            placeholder='Informe o seu CEP...' 
            value={cep}
            onChange={(e) => setCep(formatCep(e.target.value))}
            maxLength={9}
          />

          <button type='submit' title='Buscar...'>
            <i className="bi bi-search"/>
          </button>
        </div>
      </form>

      <form className='form-retorno'>
        <div>
          <p>Rua:</p>
          <input 
            type="text" 
            disabled={inputsDesativados}
            value={rua}
            onChange={(e) => setRua(e.target.value)}
          />
        </div>

        <div>
          <p>Bairro:</p>
          <input 
            type="text" 
            disabled={inputsDesativados}
            value={bairro}
            onChange={(e) => setBairro(e.target.value)}
          />
        </div>

        <div>
          <p>Cidade:</p>
          <input 
            type="text" 
            disabled={inputsDesativados}
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
          />
        </div>

        <div>
          <p>Estado:</p>
          <input 
            type="text" 
            disabled={inputsDesativados}
            value={estado}
            onChange={(e) => setEstado(e.target.value)}
          />
        </div>
      </form>
    </main>
  )
}

export default App

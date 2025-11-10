import { useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [ cep, setCep ] = useState("");
  const [ rua, setRua ] = useState("");
  const [ bairro, setBairro ] = useState("");
  const [ cidade, setCidade ] = useState("");
  const [ estado, setEstado ] = useState("");
  const [ inputsDesativados, setInputsDesativados ] = useState(true);
  const [ cpfErro, setCpfErro] = useState(false);

  function HandleSubmitCep(e) {
    e.preventDefault();

    axios.get(`https://viacep.com.br/ws/${cep}/json/`)
      .then((response) => {
        // capturando erro (ele vai para o bloco "catch" lá de baixo)
        if (response.data.erro) {
          throw new Error('CEP não encontrado.')
        }

        // mandando as respostas encontradas para os nossos inputs
        setRua(response.data.logradouro);
        setBairro(response.data.bairro);
        setCidade(response.data.localidade);
        setEstado(`${response.data.estado} - ${response.data.uf}`);
      })
      .catch((error) => {
        setCpfErro(true);

        setRua("");
        setBairro("");
        setCidade("");
        setEstado("");
      })
      .finally(() => {
        setInputsDesativados(true);
      })
  }

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
      <form className='form-entrada' onSubmit={HandleSubmitCep}>
        <h1>Consulta de CEP</h1>

        <div>
          <input 
            type="text" 
            placeholder='Informe o seu CEP...' 
            value={cep}
            onChange={(e) => {
                setCpfErro(false)
                setCep(formatCep(e.target.value))
              }
            }
            maxLength={9}
            className={cpfErro ? "cpf-errado" : ""}
          />

          <button type='submit' title='Buscar...'>
            <i className="bi bi-search"/>
          </button>

          {cpfErro ? (
            <p className='cpf-erro-text'>Não foi possível encontrar esse CEP.</p>
          ) : ("")}
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

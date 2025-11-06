import './App.css'

function App() {
  return (
    <main>
      <form className='form-entrada'>
        <h1>Consulta de CEP</h1>

        <div>
          <input type="text" placeholder='Informe o seu CEP...' />

          <button type='submit' title='Buscar...'>
            <i class="bi bi-search"/>
          </button>
        </div>
      </form>

      <form className='form-retorno'>
        <div>
          <p>Rua</p>
          <input type="text"/>
        </div>

        <div>
          <p>Bairro</p>
          <input type="text"/>
        </div>

        <div>
          <p>Cidade</p>
          <input type="text"/>
        </div>

        <div>
          <p>Estado</p>
          <input type="text"/>
        </div>
      </form>
    </main>
  )
}

export default App


import './App.css';

function App() {
  return (
    <div className="App">
      <nav className='barra'>
        <img src='' alt='Logo' />
      <ul>
          <li><a href="/">Início</a></li>
          <li><a href="/produtos">produtos</a></li>
          <li><a href="/sobre nos">sobre nós</a></li>
          <li><a href="/clientes">clientes</a></li>
          <li><a href="/contato">contato</a></li>
      </ul>
      <img src='./assets/images/cart-shopping-solid-full.svg' alt='Logo' width='20px'/>
      <img src='./assets/images/magnifying-glass-solid-full.svg' alt='Logo' width='20px'/>
      <img src='./assets/images/user-regular-full.svg' alt='Logo' width='20px'/>

      </nav>

      <header className='inicio'>

        <div className='vermelho'>
        <p>aoba</p>
        </div>
        <br/>
        <div className='preto' >
        <p>aoba2</p>
        </div>

      </header>


    </div>
  );
}

export default App;

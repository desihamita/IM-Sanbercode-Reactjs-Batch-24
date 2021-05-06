import logo from './logo.svg';
import './App.css';
import './css/style.css';

function App() {
  return (
    <div className="App">
      <div className="Card">
          <p className="Title">Form Pembelian Buah</p>
          <form>
             <div className="row">
              <div className="Form">
                <label>Nama Pelanggan </label>
                <input type="text"></input>
              </div>
              <div className="Form">
                <label>Daftar Item </label>  
                <label>
                  <input type="checkbox"></input> Semangka 
                  <input type="checkbox"></input> Jeruk 
                  <input type="checkbox"></input> Nanas 
                  <input type="checkbox"></input> Salak
                  <input type="checkbox"></input> Anggur
                </label>
              </div>
              <div className="Form">
                <button class="button">Kirim</button>
              </div>
             </div>
          </form>
      </div>
    </div>
  );
}

export default App;

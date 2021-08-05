import './App.css';
import Dictonary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
      <main className="content">
        <Dictonary defaultWord="love"/>
      </main>
      <footer>
        Coded by LittleVan
      </footer>
      </div>
    </div>
  );
}

export default App;

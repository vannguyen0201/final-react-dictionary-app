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
        👩🏻‍💻 Coded by <a href="https://www.linkedin.com/in/lvng/" target="_blank" rel="noreferrer">LittleVan</a> and <a href="https://github.com/vannguyen0201/final-react-dictionary-app" target="_blank" rel="noreferrer">Open-sourced on GitHub</a> 👩🏻‍🎓
      </footer>
      </div>
    </div>
  );
}

export default App;

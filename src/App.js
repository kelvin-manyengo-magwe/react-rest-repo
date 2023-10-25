import './App.css';
import List from './components/List';

function App() {
  return (
    <div>
        <div className="container">
              <nav className="navbar sticky-top bg-dark navbar-light">
                  <h3 className="navbar-brand text-light">Ricky and Morty</h3>
              </nav>
            <List />
        </div>
    </div>
  );
}

export default App;

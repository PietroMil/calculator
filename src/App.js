import logo from './logo.svg';
import './App.css';
import { Operators } from './components/calculator';

function App() {
  const data= {
    value: '-',
    input: 10,
    active: false
}
const data2= {
    value: '-',
    input: 10,
    active: true
}

const data3= {
  value: '+',
  input: 400,
  active: true
}

const myNumbers = [data, data2, data3 ]

Operators(myNumbers)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

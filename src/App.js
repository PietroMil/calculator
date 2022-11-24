import logo from './logo.svg';
import './App.css';
import { Operators } from './components/calculator';
import InputRow from './modules/InputRow';

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
    <InputRow />
  );
}

export default App;

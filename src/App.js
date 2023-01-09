import './App.css';
import Device from './components/Device/Device';
import Watch from './components/Watch/Watch';

function App() {
  return (
    <div className="App">
      <Device phone={'iPhone'} price={'90000'}></Device>
      <Watch></Watch>
    </div>
  );
}

export default App;

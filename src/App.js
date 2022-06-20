
import './App.css';
import { Link } from 'react-router-dom';
import { Allroutes } from './routes/Allroutes';


function App() {
  return (
    <div className="App">
      <div className='links'>
      <Link to="/">
        <button>Timer</button>
      </Link>
      <Link to="/stopwatch">
        <button>Stopwatch</button>
      </Link>
      </div>
      <br />
      <br />
      <br />
      <br />
      <Allroutes />
    </div>
  );
}

export default App;

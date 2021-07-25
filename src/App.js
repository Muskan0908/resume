import './App.css';
import 'boxicons';
import Home from  './components/Home/Home';
import {homeObjOne} from './Data';
function App() {
  return (
    <div className="App">
        <Home {...homeObjOne}/>
    </div>
  );
}

export default App;

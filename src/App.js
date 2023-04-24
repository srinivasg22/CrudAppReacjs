import logo from './logo.svg';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Add from './Add';

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path='/' element ={<Home />} />
            <Route path='/Create' element={<Add/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;

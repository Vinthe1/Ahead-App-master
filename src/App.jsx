
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './Components/Navbar';
import Home from './Components/Home';

function App() {
  return (
    <div className='container' >
      <BrowserRouter>
      <Navbar/>
      <Home/>
      
      </BrowserRouter>
    </div>
  );
}

export default App;


import './App.css';
import Navbar from './components/Navbar';
import { Route,Routes } from 'react-router-dom';
import About from "./components/About";
import Contact from "./components/Contact"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>

      </Routes>
    </div>
  );
}

export default App;

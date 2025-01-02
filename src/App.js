import React from 'react';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
// import './moduel1.mjs';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About'
// import Data from './components/Data.js';
// import Textform from './components/Tectform.js';


function App() { 

  
  // const [Name, setName] = useState('');
  
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Navbar  title ='WordCraft'/>} />
          {/* <Route path="/" element={<Textform />} /> */}
          <Route path="/about" element={<About />} />
          {/* <Route path="/home" element={< />} Home/> */}
        </Routes>
      </Router>
    </div>

  );
}

export default App;



import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';


function App() {
  
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route  path="/" element={<div>welcome to home</div>} /> 
    <Route path='/about' element={<div> About page</div>} />
     <Route path='/Contact' element={<div>Contact page</div>} />
    </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;

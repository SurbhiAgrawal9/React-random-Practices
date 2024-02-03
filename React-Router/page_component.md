#app.js page
```js

import { BrowserRouter,  Routes, Route } from 'react-router-dom';
import Home from './RouterCom/Home';
import './App.css';
import About from './RouterCom/About';


function App() {
  
  return (
    <div className="">
    <BrowserRouter>
     <Routes>
     <Route path="/" element={<Home />} />
     <Route path='about' element={<About />} />
     </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
```

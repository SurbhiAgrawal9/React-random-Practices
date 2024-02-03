Page Component or  Page Navigation

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
    <Route path='/Contact' element={<Contact/>} />
     </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
```



#Home Page

```js
import React from 'react'
import {Link} from 'react-router-dom'


const Home = () => {
  return (
    <div><h1>This is Home page</h1>
    <header>
    <a href='#' >Logo</a>
    </header>
    <section>
     <ul>

     <Link to="/"><li> Home </li></Link>
<Link to='/about'><li>About</li></Link>
    
    <Link to='/contact'> <li>Contact</li></Link>

     </ul>
    </section>
    </div>
  )
}

export default Home;
```


#About page

```js
import React from 'react'

const About = () => {
  return (
    <div>About</div>
  )
}

export default About;
```

#Contact Page
```js
import React from 'react'
function Contact(){

    return (
        <div>
        Contact
        </div>
    )
}
export default Contact;
```

import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Mainheader from './header';
import About from './about';
import Support from './support';
import Home from './home';

function App() {
  return (
    <div className="App">

      <ul>
        <li>
          <NavLink to={'/'}>Home</NavLink>
        </li>
        <li>
          <NavLink to={'/about'}>About</NavLink>
        </li>
        <li>
          <NavLink to={'/support'}>Support</NavLink>
        </li>
      </ul>

      <Routes>
        <Route path='/' element={<Mainheader/>}>
          <Route index element={<Home/>}/>
          <Route path='/about' element={<About/>} />
          <Route path='/support' element={<Support/>}/>
          <Route path='*' element={<div>not found</div>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

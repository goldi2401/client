import logo from './logo.svg';
import './App.css';

//components
import Registration from './components/Registration';
import AllUser from './components/AllUser';
import Home from './components/Home';
import AddUser from './components/AddUser';
import NavBar from './components/NavBar';

import { BrowserRouter ,Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter >
      <NavBar />
      <Routes>
      <Route path='/' element={ <AllUser/>} />
      <Route path ='/home' element= { <Home />}/>
      
      <Route path ='/registration' element= {   <Registration />}/>
      <Route path ='/add' element= {      <AddUser />}/>
   
      </Routes>
    </BrowserRouter>
  );


}

export default App;

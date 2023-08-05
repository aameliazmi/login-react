import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home'
import { Login } from './components/Login'
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import { Table2 } from './components/Table2';
import { Table3 } from './components/Table3';
import { Table1 } from './components/Table1';
import { Navbar } from './components/Navbar';


function App() {
  return (
    <div>
      <div>
      <Navbar />
      <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/table2' element={<Table2 />}></Route>
          <Route path='/table3' element={<Table3 />}></Route>
          <Route path='/table1' element={<Table1 />}></Route>
      </Routes>
    </div>
    </div>
    
  );
 
}

export default App;
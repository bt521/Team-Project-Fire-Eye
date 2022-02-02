import React from "react";
import "./css/App.css";
import Sidebar from "./components/Sidebar";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import LiveStream from './pages/LiveStream';
import Gallery from './pages/Gallery';
import Setting from "./pages/Settings";
import Logout from "./pages/Logout";


function App() {
  return (
    <>
    <Router>
      <Sidebar/>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/livestream' element={<LiveStream/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/settings'element={<Setting/>}/>
        <Route path='/logout'element={<Logout/>}/>
      </Routes>

    </Router>
    </>
  );
}

export default App;

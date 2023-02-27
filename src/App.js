import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Footer from './estaticos/footer/Footer';
import Navbar1 from './estaticos/navbar/Navbar';
import Contato from './paginas/contato/Contato';
import Eventos from './paginas/eventos/Eventos';
import EventosEdit from './paginas/eventos-edit/Eventos.edit';
import EventosApp from './paginas/eventos-app/Eventos.app';
import Home from './paginas/home/Home'
import Quartos from './paginas/quartos/Quartos';
import Sobre from './paginas/sobre/Sobre';
import HomeEdit from './paginas/home-edit/HomeEdit';
import react, { useEffect, useState } from 'react';
import Api from './service/Api';
import axios from 'axios';


function App() {

  useEffect(() => {

  }, [])


  return (
    <Router>
      <Navbar1/>
      <Routes>
        <Route exact path='/' element={ <Home/> } />
        <Route path='homeedit' element={ <HomeEdit/> } />
        <Route path='quartos' element={ <Quartos/> } />
        <Route path='eventos' element={ <Eventos/> } />
        <Route path='eventosedit' element={ <EventosEdit/> } />
        <Route path='eventosapp' element={ <EventosApp/> } />
        <Route path='sobre' element={ <Sobre/> } />
        <Route path='contato' element={ <Contato/> } />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;

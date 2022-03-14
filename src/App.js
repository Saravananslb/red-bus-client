import React from 'react';
import { ManageTickets } from './pages/manageTickets/ManageTickets';
import { SearchTicket } from './pages/searchTicket/SearchTicket';
import { Home } from './pages/home/Home';
import { BrowserRouter, Route, Routes, Redirect } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className='App'>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/search' element={<SearchTicket />} ></Route>
        <Route path='/manage-tickets' element={<ManageTickets />} ></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;



import {BrowserRouter, Route,Routes} from 'react-router-dom'
import { useState } from 'react'
import Login from './pages/Login';
import MainPage from './pages/Main_page';


function App() {
  return (

    <BrowserRouter>
        <Routes>
        <Route path="/" element={ < Login />} />
        <Route path="/main" element={ < MainPage />} />
        </Routes>
    </BrowserRouter>

  )
}

export default App

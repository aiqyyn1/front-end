import Reg from './components/Reg'

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Download from './components/Download';
import Home from './components/Home';
import logo from './photos/photo.png'
import { useNavigate, useEffect } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './stylesheets/home.module.css'
import LogIn from './components/LogIn';

function Main() {
    return (
          <>

  

            <Routes>
                <Route path='/Download' element={<Download></Download>}></Route>
                <Route path='/Reg' element={<Reg></Reg>}></Route>
                <Route path='/Home' element={<Home></Home>}></Route>
                <Route path='/Log' element={<LogIn></LogIn>}></Route>
                <Route index element={<Home></Home>}></Route>

            </Routes>

            </>
    )
}

export default Main
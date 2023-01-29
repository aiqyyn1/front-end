import Reg from './components/Reg'
import './stylesheets/home.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Download from './components/Download';
import Home from './components/Home';

function Main() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/Check' element={<Download></Download>}></Route>
                <Route path='/Reg' element={<Reg></Reg>}></Route>
                <Route index element={<Home></Home>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Main
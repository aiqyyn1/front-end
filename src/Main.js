import Reg from './components/Reg'

import Check from './components/Check';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function Main() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/Check' element={<Check/>}></Route>
                <Route index element={<Reg/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Main
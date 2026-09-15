import './index.css';
import App from './pages/app/App.js'
import Notfound from './pages/notfound/index.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


export default function Router (){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="*" element={<Notfound />} />
            </Routes>
        </BrowserRouter>
    )
}

import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PaginaBase from './pages/PaginaBase';
import Home from './pages/Home';
import { Modal } from './components/Modal';
import NuevoVideo from './pages/NuevoVideo';
import NotFound from './pages/NotFound';



function App() {
  

  return (
    <>
      <BrowserRouter>
        <Modal/>
        <Routes>
          <Route path='/' element={<PaginaBase/>}>
            <Route index element={<Home/>}/>
            <Route path='/nuevovideo' element={<NuevoVideo/>}/> 
            <Route path='*' element={<NotFound/>}/> 
          </Route>          
        </Routes>
      </BrowserRouter>
    </>
  );
}


export default App

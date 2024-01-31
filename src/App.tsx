import './App.css'
import ListaCategoria from './components/categoria/listaCategoria/ListaCategoria'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FormularioCategoria from './components/categoria/formularioCategoria/FormularioCategoria'
import DeletarCategoria from './components/categoria/deletarCategoria/DeletarCategoria'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Navbar />
        <div className='min-h-[80vh]'>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/categorias" element={<ListaCategoria />}/>
            <Route path="/cadastroCategoria" element={<FormularioCategoria />}/>
            <Route path="/editarCategoria/:id" element={<FormularioCategoria />}/>
            <Route path="/deletarCategoria/:id" element={<DeletarCategoria />}/>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
      
    </>
  )
}

export default App

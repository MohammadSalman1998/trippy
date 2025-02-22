// src\App.jsx
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Footer from './components/Footer/Footer'
import Services from './pages/Services/Services'
import Contact from './pages/Contact/Contact'
import SignUp from './pages/SignUp/SignUp'

function App() {

  return (
    <div id='app'>
      <Header logo={'Trippy'} />
  
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/signup' element={<SignUp/>} />
      </Routes>

      <Footer/>
    </div>
  )
}

export default App

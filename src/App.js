import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import LandingPage from './pages/LandingPage/LandingPage'
import Navbar from './pages/Navbar/Navbar'
import Footer from './pages/Footer/Footer'
import Services from './pages/Services/Services'
import Features from './pages/Features/Features'
import Prices from './pages/Pricing/Pricing'
import About from './pages/AboutUs/About'
import Contact from './pages/ContactUs/Contact'
import { Route, Routes } from 'react-router-dom'


function App() {
  return (
    <>
       <Navbar/>
          <Routes>
            <Route path={'/'} element={<LandingPage/>}></Route>
            <Route path={'/home'} element={<LandingPage/>}></Route>
            <Route path={'/services'} element={<Services/>}></Route>
            <Route path={'/prices'} element={<Prices/>}></Route>
            <Route path={'/features'} element={<Features/>}></Route>
            <Route path={'/about'} element={<About/>}></Route>
            <Route path={'/contact'} element={<Contact/>}></Route>
          </Routes>
       <Footer />
    </>
  )
}

export default App

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './pages/Navbar/NavBar1'
import Header from './pages/Home/Home'
import Services from './pages/Services/Services'
import Contact from './pages/ContactUs/Contact'
import Footer from './pages/Footer/Footer'
import About from './pages/AboutUs/About'
import Prices from './pages/Pricing/Pricing'


function App() {
  return (
    <>
      <Navbar/>
      <Header />
      <Services /> 
      <Prices/>
      <About />
      <Contact />
      <Footer />
    </>
  )
}

export default App

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/NavBar1'
import Header from './components/Header'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
import About from './components/About'
import Prices from './components/Pricing'


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

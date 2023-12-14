import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
import About from './components/About'

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Services /> 
      <About />
      <Contact />
      <Footer />
    </>
  )
}

export default App

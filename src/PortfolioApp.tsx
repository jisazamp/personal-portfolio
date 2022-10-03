import NavBar from './layout/NavBar'
import { Banner, Contact, Skills, Projects, Footer } from './components'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const PortfolioApp = () => {
  return (
    <div className='App'>
      <ToastContainer />
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default PortfolioApp

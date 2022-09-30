import NavBar from './layout/NavBar'
import { Banner, Contact, Skills, Projects, Footer } from './components'

const PortfolioApp = () => {
  return (
    <div className='App'>
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

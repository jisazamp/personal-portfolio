import NavBar from './layout/NavBar'
import { Banner, Skills, Projects } from './components'

const PortfolioApp = () => {
  return (
    <div className='App'>
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
    </div>
  )
}

export default PortfolioApp

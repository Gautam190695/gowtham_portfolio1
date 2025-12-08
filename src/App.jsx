import { useState } from 'react'
import './App.css'
import PortfolioHero from './component/Home'
import About from './component/About'
import Contact from './component/Contact'
import Experience from './component/Experience'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <PortfolioHero />
        <Experience />
        {/* <Header/> */}
        <About />
        <Contact />

      </div>
    </>
  )
}

export default App

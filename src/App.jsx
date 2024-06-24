import React from 'react'
import { Home } from './components/home'
import Footer from './components/footer/footer'

const App = () => {
  return (
    <div>
      <div className='container mx-auto px-3 md:px-0'>
        <Home />
      </div>
      <Footer/>
    </div>
  )
}

export default App
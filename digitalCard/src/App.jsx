import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/footer'
import Header from './components/header'
import middleBody from './components/middleBody'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    
     <Header />

     <middleBody />

     <Footer />

     
    </>
  )
}

export default App

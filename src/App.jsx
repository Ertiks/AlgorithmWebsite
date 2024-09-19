import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Footer from "./components/FooterComponent"
import Header from "./components/HeaderComponent"
import MainContent from './components/MainContentComponent';


function App() {
  return (
    <div className='mainPage'>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App

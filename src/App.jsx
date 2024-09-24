import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Footer from "./components/FooterComponent"
import Header from "./components/HeaderComponent"
import MainContent from './components/MainContentComponent';

import { createBrowserRouter, RouterProvider , Link} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path : "/",
    element: 
      <div>
        <nav>
          <Link to="/blog"> Blog </Link>
          <Link to="/"> Accueil </Link>
        </nav>
        Page d'accueil 
      </div>
  },
  {
    path : "/blog",
    element: 
    <div>
      <nav>
        <Link to="/blog"> Blog </Link>
        <Link to="/"> Accueil </Link>
      </nav>
        Page 1 
    </div>
  }
])

function App() {

  return <RouterProvider router={router} />

  //OLD APP :
  // return (
  //   <div className='mainPage'>
  //     <Header />
  //     <MainContent />
  //     <Footer />
  //   </div>
  // );
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Footer from "./components/FooterComponent"
import Header from "./components/HeaderComponent"
import MainContent from './components/MainContentComponent';

import { createBrowserRouter, RouterProvider , Link, Outlet} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path : "/",
    element: 
      <div>
        <Header />
        <Outlet/>
      </div>,
    children: [
      {
        path : "/algorithms",
        element: <MainContent />,
      },
      {
        path : "/",
        element: <div> ACCUEIL </div>
      }
    ]
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


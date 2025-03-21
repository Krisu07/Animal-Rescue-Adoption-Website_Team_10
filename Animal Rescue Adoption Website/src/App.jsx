import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  return(
    <div>
      <h1>Welcome!!!</h1>
      <RouterProvider router={myRouter}/>
    </div>
  )
}

const myRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/profile',
    element: <Profile/>
  },
  {
    path: '/news',
    element: <News/>
  }
])

export default App

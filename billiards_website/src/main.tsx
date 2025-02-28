import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './pages/App.tsx'
import Menu from './pages/Menu.tsx'
import Gallery from './pages/Gallery.tsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom"

const routes = createBrowserRouter([{
  path: "/",
  element: <App/>,
}, {
  path: "/Menu",
  element: <Menu/>,
}, {
  path: "/Gallery",
  element: <Gallery/>,
}])
createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <RouterProvider router={routes}/>
  </StrictMode>,
)

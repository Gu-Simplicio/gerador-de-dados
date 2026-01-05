import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import GeraCPF from './pages/GeraCPF.tsx'
import GeraCNPJ from './pages/GeraCNPJ.tsx'
import PaginaErro from './pages/PaginaErro.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PaginaErro />,
    children: [
      {
        path: "/geraCPF",
        element: <GeraCPF />
      },
      {
        path: "/geraCNPJ",
        element: <GeraCNPJ />
      }   
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

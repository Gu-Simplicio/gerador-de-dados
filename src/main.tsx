import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import GeraCNPJ from './pages/GeraCNPJ.tsx'
import PaginaErro from './pages/PaginaErro.tsx'
import GeraCPF from './pages/geraCPF.tsx'
import GeraSenha from './pages/GeraSenha.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <PaginaErro />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/geraCPF",
        element: <GeraCPF />
      },
      {
        path: "/geraCNPJ",
        element: <GeraCNPJ />
      },
      {
        path: "/geraSenha",
        element: <GeraSenha />
      }
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

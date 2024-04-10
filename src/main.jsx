import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes.jsx'
import ContextComponent from './ContexComponent/ContextComponent.jsx'
import { ToastContainer } from 'react-toastify';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextComponent>
      <RouterProvider router={router} />
      <ToastContainer />
    </ContextComponent>
  </React.StrictMode>,
)

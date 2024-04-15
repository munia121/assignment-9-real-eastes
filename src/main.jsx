import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes.jsx'
import ContextComponent from './ContexComponent/ContextComponent.jsx'
import { ToastContainer } from 'react-toastify';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { HelmetProvider } from 'react-helmet-async'
// ..
AOS.init();


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <ContextComponent>
        <RouterProvider router={router} />
        <ToastContainer></ToastContainer>
      </ContextComponent>
    </HelmetProvider>
  </React.StrictMode>,
)

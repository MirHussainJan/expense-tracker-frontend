import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom';
import { router } from './Router.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={new QueryClient()}>
    <RouterProvider router={router}>
    <App />
    </RouterProvider>
  </QueryClientProvider>,
    <ToastContainer />
  </StrictMode>
)

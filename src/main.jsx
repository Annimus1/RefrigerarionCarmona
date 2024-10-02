import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Layout from './components/Layout.jsx';
import App from './pages/App.jsx';
import Services from './pages/Services.jsx';
import Contact from './pages/Contact.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout>
      <App />
    </Layout>
  },
  {
    path: '/services',
    element: <Layout>
      <Services />
    </Layout>
  },
  {
    path: '/contact',
    element: <Layout>
      <Contact/>
    </Layout>
  },
  {
    path: '/login',
    element: <Layout>
      <Login/>
    </Layout>
  },
  {
    path: '/register',
    element: <Layout>
      <Register/>
    </Layout>
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

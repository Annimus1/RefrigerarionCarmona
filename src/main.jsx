import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Layout from './components/Layout.jsx';
import App from './pages/App.jsx';
import Services from './pages/Services.jsx';
import Contact from './pages/Contact.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout>
      <App />
    </Layout>
  },
  {
    path: '/test',
    element: <Layout>
      <p>Test</p>
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
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

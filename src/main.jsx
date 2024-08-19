import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './pages/App.jsx';
import Layout from './components/Layout.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element: <App />,
  },
  {
    path:'/test',
    element: <Layout><p>Test</p></Layout>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

import * as React from 'react';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Dashboard from './components/pages/Dashboard/Dashboard';
import Invoices from './components/pages/Invoices/Invoices';
import LinePage from './components/pages/Charts/Line/LinePage';
const router = createHashRouter([
  {
    path: '/', element: <Layout />, children: [
      { path: '', element: <Dashboard /> },
      { path: 'invoices', element: <Invoices /> },
      { path: 'line', element: <LinePage /> },
    ]},
]);

export default function App() {

  return (
    <RouterProvider router={router} />
  );
}
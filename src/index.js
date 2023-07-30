import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import LoginPage from './views/LoginPage';
import RecoverPage from './views/RecoverPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
    <React.StrictMode>
      <App />
    </React.StrictMode>
    ),
  },
  {
    path: "/login",
    element: (
    <React.StrictMode>
      <LoginPage />
    </React.StrictMode>
    ),
  },
  {
    path: "/recover-account",
    element: (
    <React.StrictMode>
      <RecoverPage />
    </React.StrictMode>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);


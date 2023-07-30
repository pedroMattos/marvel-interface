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
import GoBackToLoginPage from './views/GoBackToLoginPage';
import SelecAgent from './views/SelectAgentPage';

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
  {
    path: "/back-to-login",
    element: (
    <React.StrictMode>
      <GoBackToLoginPage />
    </React.StrictMode>
    ),
  },
  {
    path: "/select-agent",
    element: (
    <React.StrictMode>
      <SelecAgent />
    </React.StrictMode>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);


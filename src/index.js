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
import HomePage from './views/HomePage';
import store from './store/index.js';
import { PersistGate } from 'redux-persist/integration/react';
import ProfilePage from './views/ProfilePage';
import { Provider } from 'react-redux';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
    <React.StrictMode>
      <Provider store={store.store}>
        <HomePage />
      </Provider>
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
  {
    path: "/agent/:id",
    element: (
    <React.StrictMode>
      <Provider store={store.store}>
        <PersistGate loading={null} persistor={store.persistor}>
          <ProfilePage />
        </PersistGate>
      </Provider>
    </React.StrictMode>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);


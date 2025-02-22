
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './components/Home.jsx';
import Root from './components/Root.jsx';
import UpdateProfile from './components/UpdateProfile.jsx';
import UserProfile from './components/UserProfile.jsx';
import Login from './components/Login.jsx';
import AdventureDetails from './components/AdventureDetails.jsx';
import Register from './components/Register.jsx';
import Error from './components/Error.jsx';
import AuthProvider from './components/Provider/AuthProvider.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import ResetPassword from './components/ResetPassword.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/mountain/:id",
        element: <PrivateRoute>
          <AdventureDetails></AdventureDetails>
        </PrivateRoute>,
        loader: async ({ params }) => {
          const response = await fetch("/AdventureData.json");
          const data = await response.json();
          return data.find(mountain => mountain.id.toString() === params.id);
        },
      },
      {
        path: "update",
        element: <UpdateProfile></UpdateProfile>,
      },
      {
        path: "user",
        element: <UserProfile></UserProfile>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>
      },
      {
        path: "reset",
        element: <ResetPassword></ResetPassword>
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
);

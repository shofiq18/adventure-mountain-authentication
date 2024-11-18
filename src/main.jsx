// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'

// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";

// import Home from './components/Home.jsx';
// import Root from './components/Root.jsx';
// import UpdateProfile from './components/UpdateProfile.jsx';
// import UserProfile from './components/UserProfile.jsx';
// import Login from './components/Login.jsx';
// import AdventureDetails from './components/AdventureDetails.jsx';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root></Root>,
//     children: [
//       {
//         path: "/",
//         element: <Home></Home>
//       },
//       {
//         path:"/mountain/:id",
//         element: <AdventureDetails></AdventureDetails>,
//         loader: () => fetch("/public/AdventureData.json")
//       },
//       {
//         path: "update", 
//         element: <UpdateProfile></UpdateProfile>,
//       },
//       {
//         path: "user",
//         element: <UserProfile></UserProfile>,
//       },
//       {
//         path: "login",
//         element: <Login></Login>,
//       },
//     ],
    
//   },
// ]);

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//       <RouterProvider router={router} />
//   </StrictMode>,
// )
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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/mountain/:id",
        element: <AdventureDetails></AdventureDetails>,
        loader: async ({ params }) => {
          const response = await fetch("/public/AdventureData.json");
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
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
);

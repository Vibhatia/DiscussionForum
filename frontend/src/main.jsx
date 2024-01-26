import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Register
 from './pages/Register.jsx'
 import Otp from './pages/Otp.jsx'
 import Login from './pages/Login.jsx'
 import Dashboard from './pages/Dashboard.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Confirmation from './pages/Confirmation.jsx'
// import { UserProvider } from './UserContext.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path:"/register",
    element:<Register/>
  },
  {
    path:"/register/otp",
    element:<Otp/>
  },
  {
    path:"/confirmation",
    element:<Confirmation/>
  },{
    path:"/login",
    element:<Login/>
  },
  {
    path:'/dashboard',
    element:<Dashboard/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    {/* <UserProvider> */}
    {/* <RouterProvider router={router} /> */}
    {/* hello */}
    <App/>
    {/* </UserProvider> */}

  </React.StrictMode>,
)


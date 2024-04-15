import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayOut";
import Home from "../Pages/Home/Home";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import CardDetails from "../Pages/Home/CardDetails";
import PrivetRoute from "./PrivetRoute";
import ErrorPage from "../Pages/ErrorPage";
import AboutUs from "../Pages/About/AboutUs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/updateProfile',
        element: <PrivetRoute>
          <UpdateProfile></UpdateProfile>
        </PrivetRoute>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: 'cardDetails/:id',
        element: <PrivetRoute><CardDetails></CardDetails></PrivetRoute>
      },
      {
        path: '/about',
        element: <PrivetRoute>
          <AboutUs></AboutUs>
        </PrivetRoute>
      }
    ]
  },
]);
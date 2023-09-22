import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Layout/Main";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import AuthProvider from "./Providers/AuthProvider";
import Orders from "./components/Orders";
import PrivateRoute from "./routes/PrivateRoute";
import Cart from "./components/Cart";
import ChefDetails from "./components/ChefDetails";
import AboutUs from "./components/AboutUs";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/chefdetails",
        element: <ChefDetails></ChefDetails>,
      },
      {
        path: "/order",
        element: (
          <PrivateRoute>
            <Orders></Orders>
          </PrivateRoute>
        ),
      },
      {
        // path: "/cart/:id",
        path: "/cart",
        element: (
          <PrivateRoute>
            <Cart></Cart>
          </PrivateRoute>
        ),
        // loader: ({ params }) =>
        //   fetch(`http://localhost:5000/categories${params.id}`),
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);

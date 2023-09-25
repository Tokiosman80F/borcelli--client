import { Navigate, createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import ChefCard from "../pages/ChefCard";
import ChefDetailLayout from "../layouts/ChefDetailLayout/ChefDetailLayout";
import ChefDetail from "../pages/ChefDetail";
import LoginLayout from "../layouts/LoginLayout/LoginLayout";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ErrorPage from "../pages/ErrorPage";
import Blog from "../pages/Blog";
import AboutPage from "../pages/AboutPage";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <ChefCard></ChefCard>,
        loader: () => fetch(`https://borcelli-sever-i6e2839ow-tokiosman0135-gmailcom.vercel.app/chef`),
      },
    ],
  },
  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Navigate to="/login"></Navigate>,
      },
      {
        path: "/login",
        element: <LoginPage></LoginPage>,
      },
      {
        path: "/register",
        element: <RegisterPage></RegisterPage>,
      },
    ],
  },
  {
    path: "/",
    element: <ChefDetailLayout></ChefDetailLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/detail/:id",
        element: (
          <PrivateRoute>
            <ChefDetail></ChefDetail>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://borcelli-sever-i6e2839ow-tokiosman0135-gmailcom.vercel.app/recipe/${params.id}`),
      },
    ],
  },
  {
    path: "/blogs",
    element: <Blog></Blog>,
  },

  {
    path: "/about",
    element: <AboutPage></AboutPage>,
  },
]);

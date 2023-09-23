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

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[{
      path:"/",
      element:<ChefCard></ChefCard>,
      loader:()=>fetch(`http://localhost:4000/chef`)
    }],
   
  },
  {
    path:"/blogs",
    element:<Blog></Blog>
  },
  {
    path:"/",
    element:<LoginLayout></LoginLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[{
      path:"/",
      element:<Navigate to="/login"></Navigate>
    },
    { 
      path:"/login",
      element:<LoginPage></LoginPage>
    },
    {
      path:"/register",
      element:<RegisterPage></RegisterPage>
    }]
  },
  {
    path:"/",
    element:<ChefDetailLayout></ChefDetailLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[{
      path:'/detail/:id',
      element:<ChefDetail></ChefDetail>,
      loader:({params})=>fetch(`http://localhost:4000/recipe/${params.id}`)
    }]
  }
]);

import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import ChefCard from "../pages/ChefCard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[{
      path:"/",
      element:<ChefCard></ChefCard>,
      loader:()=>fetch(`http://localhost:4000/chef`)
    }]
  },
]);

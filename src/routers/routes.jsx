import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import ChefCard from "../pages/ChefCard";
import ChefDetailLayout from "../layouts/ChefDetailLayout/ChefDetailLayout";
import ChefDetail from "../pages/ChefDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[{
      path:"/",
      element:<ChefCard></ChefCard>,
      loader:()=>fetch(`http://localhost:4000/chef`)
    },
    ]
  },
  {
    path:"/",
    element:<ChefDetailLayout></ChefDetailLayout>,
    children:[{
      path:'/detail/:id',
      element:<ChefDetail></ChefDetail>,
      loader:({params})=>fetch(`http://localhost:4000/recipe/${params.id}`)
    }]
  }
]);

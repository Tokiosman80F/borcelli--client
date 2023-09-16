import { createBrowserRouter } from "react-router-dom";
import NavigationBar from "../pages/shared/NavigationBar";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <NavigationBar></NavigationBar>,
  },
]);

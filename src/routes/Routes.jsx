/* eslint-disable no-unused-vars */
import {
  createBrowserRouter
} from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home";
import Blog from "../pages/Blog";
import RecipePage from "../pages/recipe/RecipePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
      {
        path: 'recipies/:id',
        element: <RecipePage></RecipePage>,
        loader: ({params}) => fetch(`http://localhost:5000/chefs/${params.id}`)
      }
    ]
  }
]);

export default router
/* eslint-disable no-unused-vars */
import {
  createBrowserRouter
} from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home";
import Blog from "../pages/Blog";
import RecipePage from "../pages/recipe/RecipePage";
import Login from "../components/Login";
import Registration from "../components/Registration";
import ErrorPage from "../pages/ErrorPage";
import PrivateRoute from "../privateRoute/PrivateRoute";

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
        element: <PrivateRoute><RecipePage></RecipePage></PrivateRoute>,
        loader: ({params}) => fetch(`https://rannaghor-server-sania-ahmed.vercel.app/chefs/${params.id}`)
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Registration></Registration>
      }
    ]
  },
  {
    path: '*',
    element: <ErrorPage></ErrorPage>
  }
]);

export default router
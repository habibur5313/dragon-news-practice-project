import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import HomeLayout from "./Layouts/HomeLayout";
import NewsLayout from "./Layouts/NewsLayout";
import AuthLayout from "./Layouts/AuthLayout";
import DragonNews from "./Layouts/Home.Layout/DragonNews";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: '/',
        element: <Navigate to={'category/01'}></Navigate>
      },
      {
        path: '/category/:id',
        element: <DragonNews></DragonNews>,
        loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
      }
    ]
  },
  {
    path: '/news',
    element: <NewsLayout></NewsLayout>
  },
  {
    path: '/auth',
    element: <AuthLayout></AuthLayout>
  },
  {
    path: '*',
    element: 'ERROR'
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

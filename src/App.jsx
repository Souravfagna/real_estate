import React from 'react';
import Layout from "./routes/layout/layout";
import Homepage from "./routes/homePage/home";
import ListPage from "./routes/listPage/ListPage";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SinglePage from './routes/singlePage/singlePage';
import ProfilePage from './routes/profilePage/profilePage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/list",
        element: <ListPage />,
      },
      {
        path: "/:id",
        element: <SinglePage/>,
      },
      {
        path: "/profile",
        element: <ProfilePage/>,
      },
    ],
  },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}
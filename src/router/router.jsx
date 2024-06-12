import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Homepage from "../pages/Homepage";
import CheckPage from "../pages/CheckPage";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout/>, 
    children: [
        {
            path: '/',
            element: <Homepage/>
        },
        {
            path: '/check-page',
            element: <CheckPage/>
        }
    ]
  },
]);

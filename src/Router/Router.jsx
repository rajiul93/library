import { createBrowserRouter } from "react-router-dom";
import AddBook from "../Page/AddBook/AddBook";
import AllBook from "../Page/AllBook/AllBook";
import ErrorPage from "../Page/ErrorPage/ErrorPage";
import Home from "../Page/Home/Home";
import Login from "../Page/LoginRegistration/Login/Login";
import Registration from "../Page/LoginRegistration/Registration/Registration";
import Root from "../Root/Root";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement:<ErrorPage />,
    children: [
      {
        path: "/",
        element:<Home />
      },
      {
        path: "/all-book",
        element:<AllBook />
      },
      {
        path: "/add-book",
        element:<AddBook />
      },
      {
        path: "/login",
        element:<Login />
      },
      {
        path: "/registration",
        element:<Registration />
      },
      
    ],
  },
]);

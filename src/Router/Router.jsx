import { createBrowserRouter } from "react-router-dom";
import AddBook from "../Page/AddBook/AddBook";
import AllBook from "../Page/AllBook/AllBook";
import ErrorPage from "../Page/ErrorPage/ErrorPage";
import Home from "../Page/Home/Home";
import Login from "../Page/LoginRegistration/Login/Login";
import Registration from "../Page/LoginRegistration/Registration/Registration";
import PrivetRout from "../ProtectiveRout/ProtectiveRout";
import Root from "../Root/Root";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/book`),
      },
      {
        path: "/all-book",
        element: (
          <PrivetRout>
            <AllBook />
          </PrivetRout>
        ),
      },
      {
        path: "/add-book",
        element: <PrivetRout><AddBook /></PrivetRout> ,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
    ],
  },
]);

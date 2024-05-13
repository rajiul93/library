import { createBrowserRouter } from "react-router-dom";
import AddBook from "../Page/AddBook/AddBook";
import AllBook from "../Page/AllBook/AllBook";
import Category from "../Page/Category/Category";
import Details from "../Page/Details/Details";
import ErrorPage from "../Page/ErrorPage/ErrorPage";
import Home from "../Page/Home/Home";
import Login from "../Page/LoginRegistration/Login/Login";
import Registration from "../Page/LoginRegistration/Registration/Registration";
import MyBook from "../Page/MyBook/MyBook";
import MyBorrowedBookList from "../Page/MyBorrowedBookList/MyBorrowedBookList";
import Update from "../Page/Update/Update";
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
        path: "/details/:id",
        element: (
          <PrivetRout>
            <Details />
          </PrivetRout>
        ),
        loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/book/${params.id}`),
    
      },
      {
        path: "/my-book",
        element: (
          <PrivetRout>
            <MyBook />
          </PrivetRout>
        ), 

      },
      {
        path: "/update/:id",
        element: (
          <PrivetRout>
            <Update />
          </PrivetRout>
        ), 
       

      },
      {
        path: "/borrowedBookList",
        element: (
          <PrivetRout>
            <MyBorrowedBookList />
          </PrivetRout>
        ), 
       

      },
      {
        path: "/category/:category_name",
        element: (
          <PrivetRout>
            <Category />
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

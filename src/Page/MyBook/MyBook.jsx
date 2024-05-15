// import BookRow from "../AllBook/AllbookTable/BookRow";
// loader: () => fetch(`${import.meta.env.VITE_API_URL}/book/${params.id}`),
// http://localhost:9000/my-book/ridniaktergdp@gmail.com

import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import MyBookRow from "./MyBookRow";

const MyBook = () => {
  const { user } = useContext(AuthContext);
  const [AllBook, setAllBook] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);
  useEffect(() => {
    getData();
  }, [user.email]);
  const getData = async () => {
    try {
      const { data } = await axios(
        `${import.meta.env.VITE_API_URL}/my-book/${user?.email}`
      );
      setAllBook(data);
      setDataLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  if (dataLoading)
    return (
      <div className="h-96 flex justify-center items-center">
        <progress className="progress w-56"></progress>
      </div>
    );



    




  return (
  <div className="overflow-x-auto">

<table className="min-w-full divide-y divide-gray-200 ">
      <thead className="bg-base-100">
        <tr>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Name
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Book Name
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Rating
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Quantity
          </th>

          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Actions
          </th>
        </tr>
      </thead>
      <tbody className="bg-base-100 divide-y divide-gray-200 ">
        {AllBook.map((book) => (
          <MyBookRow key={book._id} book={book} getData={getData}/>
        ))}
      </tbody>
    </table>
  </div>
  );
};

export default MyBook;

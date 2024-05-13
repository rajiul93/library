import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import addBook from "../../../public/addBook.json";
import { AuthContext } from "../../Provider/AuthProvider";
import PageTitle from "../../component/PageTitle";
import BorrowedCard from "./BorrowedCard";
const MyBorrowedBookList = () => {
  const { user } = useContext(AuthContext);
  console.log(user.email);
  const [AllBook, setAllBook] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios(
          `${import.meta.env.VITE_API_URL}/borrow/${user?.email}`
        );
        setAllBook(data);
        setDataLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [user]);




  const handleReturn = async (returnId ,deleteID) => {
    try {
      const { data } = await axios.delete(
        `${import.meta.env.VITE_API_URL}/borrow-return/${deleteID}`
      );
      console.log(data);
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
  if (AllBook.length === 0)
    return (
      <div className="flex justify-center items-center min-h-screen">
        There have non book go{" "}
        <Link to="/all-book" className="text-warning underline ms-4">
          {" "}
          All book Page
        </Link>
      </div>
    );
  return (
    <div>
      <PageTitle addBook={addBook} title="My Borrowed Book List" />

      {AllBook?.map((item) => (
        <BorrowedCard key={item._id} item={item} handleReturn={handleReturn} />
      ))}
    </div>
  );
};

export default MyBorrowedBookList;

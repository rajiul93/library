import { useContext, useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

import addBook from "../../../public/addBook.json";
import PageTitle from "../../component/PageTitle";
import Subscribe from "../Home/Subscribe/Subscribe";
import Modal from "./Modal";

import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../Provider/AuthProvider";
const Details = () => {
  const {user} =useContext(AuthContext)
  const email = user.email;


  const [AllBook, setAllBook] = useState([]);


  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios(
          `${import.meta.env.VITE_API_URL}/borrow/${user?.email}`
        );
        setAllBook(data); 
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [user]); 




  const [startDate, setStartDate] = useState(new Date());
  const [startDate1, setStartDate1] = useState(new Date());
  const navigate = useNavigate()
  const {
    image,
    authorPhoto,
    shortDescription,
    title,
    authorName,
    publisher,
    rating,
    category,
    _id,
    quantity,
  } = useLoaderData();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const check = AllBook.find(item => item.bookId === _id ) 
 

  const handleBorrowed = async (e) => {
    e.preventDefault();
 if (check) return toast.warning("this book you already taken");
 
    const bookingDate = startDate1;
    const returnDate = startDate;
    const bookId = _id;
    const dateDistance = bookingDate - returnDate;
    console.log(quantity);
    if (dateDistance >= 0)
      return toast.warning("maybe your taken day and return date are same");
    if (quantity <= 0) return toast.warning("no more!");
    const document = { bookingDate, returnDate, image, title, bookId ,email,category};

    const newQuantity = quantity - 1;
    try {
      const { data } = await axios.post( `${import.meta.env.VITE_API_URL}/borrow`,  document  );
      console.log(data);
      if (data.acknowledged) {
      await axios.patch(`${import.meta.env.VITE_API_URL}/borrow/${_id}`, { newQuantity, });
        setTimeout(()=>{
          navigate("/borrowedBookList")
        },1000)
      }
      toast.success("successfully");
    } catch (error) {
      //
    }

    handleCloseModal();
  };
  return (
    <>
      <PageTitle addBook={addBook} title="Book Details" />
      <ToastContainer />
      <hr className="mt-5" />
      <div className="flex flex-col-reverse md:flex-row my-14 items-center">
        <div className="w-full sm:w-8/12 mb-10">
          <div className="container mx-auto h-full sm:p-10">
            <nav className="flex px-4 justify-between items-center">
              <div className="text-4xl text-warning font-bold">
                Laibryan<span className="text-green-700">.</span>
              </div>
              <div>
                <img
                  src={authorPhoto}
                  alt=""
                  className="w-16 h-16 rounded-full"
                />
              </div>
            </nav>
            <header className="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
              <div className="w-full">
                <h1 className="text-4xl lg:text-6xl font-bold">{title}</h1>
                <div className="w-20 h-2 bg-green-700 my-4"></div>
                <p className="text-xl mb-10">{shortDescription}</p>

                <div>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="btn btn-success"
                  >
                    Open Modal
                  </button>
                  <Modal
                    title={title}
                    category={category}
                    authorName={authorName}
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                    handleBorrowed={handleBorrowed}
                    image={image}
                    startDate={startDate}
                    setStartDate={setStartDate}
                    startDate1={startDate1}
                    setStartDate1={setStartDate1}
                  />
                </div>
              </div>
            </header>
          </div>
        </div>
        <div>
          <div>
            <img
              src={image}
              alt="Leafs"
              className="w-full h-full object-cover  "
            />
          </div>
          <div className="space-y-2 mt-5">
            <h1 className="text-xl font-serif">AuthorName:{authorName}</h1>
            <h1 className="text-xl font-serif">Publisher:{publisher}</h1>
            <h1 className="text-xl font-serif">Rating:{rating}</h1>
            <h1 className="text-xl font-serif">Category:{category}</h1>
          </div>
        </div>
      </div>
      <Subscribe />
    </>
  );
};

export default Details;

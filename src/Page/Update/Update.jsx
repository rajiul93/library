import axios from "axios";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useParams } from "react-router-dom";
import addBook from "../../../public/addBook.json";
import PageTitle from "../../component/PageTitle";
 

const Update = () => {

const [myBook, setMyBook]= useState({});

const { shortDescription, title ,quantity,rating,category,image,} = myBook;
const {id} = useParams(); 
useEffect(()=>{
    getData()
},[])
  const getData = async () => {
    try {
      const { data } = await axios(
        `${import.meta.env.VITE_API_URL}/book/${id}`
      );
      setMyBook(data); 
    } catch (error) {
      console.log(error);
    }
  };

 
  
    const addNewBook = async (e) => {
 e.preventDefault();

   
    const form = e.target;
      const title = form.title.value;
      const image = form.image.value;
      const quantity = form.quantity.value;
      const category = form.category.value;
      const shortDescription = form.shortDescription.value;
      const rating = form.rating.value;
      const content = {title,image,quantity,category,shortDescription,rating}
     
  
      try {
        const { data } = await axios.patch(
          `${import.meta.env.VITE_API_URL}/my-book/${id}`,
          content
        );
        if (data.acknowledged) {
          toast.success("Your post successfully done");
        }
      } catch (error) {
        console.log(error);
      }
    };
  


    return (
        <section className="py-10 my-auto dark:bg-gray-900">
      <Toaster />
      <div className="lg:w-[80%] md:w-[90%] xs:w-[96%] mx-auto flex gap-4">
        <div className="lg:w-[88%] md:w-[80%] sm:w-[88%] xs:w-full mx-auto shadow-2xl p-4 rounded-xl h-fit self-center dark:bg-gray-800/40">
          <div className="">
            <PageTitle addBook={addBook} title="Update your Book content" />
            <h2 className="text-grey text-sm mb-4 dark:text-gray-400">
            Update your Book content
            </h2>
            <form onSubmit={ addNewBook}>
              <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                <div className="w-full  mb-4 mt-6">
                  <label htmlFor="" className="mb-2 dark:text-gray-300">
                    Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    defaultValue={title} 
                    className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                    placeholder="First Name"
                  />
                  <br />
               
                </div>
                <div className="w-full  mb-4 lg:mt-6">
                  <label htmlFor="" className=" dark:text-gray-300">
                    Image URL
                  </label>
                  <input
                    name="image"

                    type="text"
                    defaultValue={image} 
                    className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                    placeholder="Last Name"
                  />
                  <br /> 
                </div>
              </div>
              <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                <div className="w-full  mb-4 mt-6">
                  <label htmlFor="" className="mb-2 dark:text-gray-300">
                    Quantity
                  </label>
                  <input
                    name="quantity"

                  defaultValue={quantity}
                    type="number" 
                    className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                    placeholder="First Name"
                  />
                  <br /> 
                </div>
                <div className="w-full mb-4 mt-6">
                  <h3 className="dark:text-gray-300 mb-2">Book Category</h3>
                  <select 
                  name="category"
                    defaultValue={category}
                    className="w-full text-grey border-2 rounded-lg p-4 pl-2 pr-2 dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                  >
                    <option disabled value="">
                      Category
                    </option>
                    <option value="Novel">Novel</option>
                    <option value="Thriller">Thriller</option>
                    <option value="History">History</option>
                    <option value="Drama">Drama</option>
                    <option value="Romance">Romance</option>
                    <option value="Art & Photography">Art & Photography</option> 
                  </select>
                  <br /> 
                </div>
           
              </div>
              <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                <div className="w-full  mb-4 mt-6">
                  <label htmlFor="" className="mb-2 dark:text-gray-300">
                    Short Description
                  </label>
                  <input
                    type="text"
                    name="shortDescription"
                    defaultValue={shortDescription} 
                    className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                    placeholder="First Name"
                  />
                  <br /> 
                </div>
                <div className="w-full  mb-4 lg:mt-6">
                  <label htmlFor="" className=" dark:text-gray-300">
                    Rating
                  </label>
                  <input
                    type="number"
                    name="rating"
                    defaultValue={rating} 
                    className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                    placeholder="Last Name"
                  />
                  <br /> 
                </div>
              </div>
 
              
              <div className="w-full rounded-lg bg-warning mt-4 text-white text-lg font-semibold">
                <button type="submit" className="w-full p-4">
                  Confirm
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    );
};

export default Update;
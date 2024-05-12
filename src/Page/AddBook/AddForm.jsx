import axios from "axios";
import { useContext } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import addBook from "../../../public/addBook.json";
import { AuthContext } from "../../Provider/AuthProvider";
import PageTitle from "../../component/PageTitle";
const AddForm = () => {
  const { user } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const addNewBook = async (content) => {
    if (content.rating >= 6) return toast.error("Max rating are 5");
    if (content.quantity <= 5) return toast.error("Min quantity are 5");
content.rating = parseInt(content.rating)
    const email = user?.email;
    const authorPhoto = user?.photoURL;
    const authorName = user?.displayName;
    const document = { ...content, email, authorPhoto,authorName };
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/book`,
        document
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
            <PageTitle addBook={addBook} title="Add a New Book" />
            <h2 className="text-grey text-sm mb-4 dark:text-gray-400">
              Your new book content
            </h2>
            <form onSubmit={handleSubmit(addNewBook)}>
              <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                <div className="w-full  mb-4 mt-6">
                  <label htmlFor="" className="mb-2 dark:text-gray-300">
                    Title
                  </label>
                  <input
                    type="text"
                    {...register("title", { required: true })}
                    className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                    placeholder="First Name"
                  />
                  <br />
                  {errors.title && (
                    <p className="text-error">should be fill it !</p>
                  )}
                </div>
                <div className="w-full  mb-4 lg:mt-6">
                  <label htmlFor="" className=" dark:text-gray-300">
                    Image URL
                  </label>
                  <input
                    type="text"
                    {...register("image", { required: true })}
                    className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                    placeholder="Last Name"
                  />
                  <br />
                  {errors.image && (
                    <p className="text-error">should be fill it !</p>
                  )}
                </div>
              </div>
              <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                <div className="w-full  mb-4 mt-6">
                  <label htmlFor="" className="mb-2 dark:text-gray-300">
                    Quantity
                  </label>
                  <input
                    type="number"
                    {...register("quantity", { required: true })}
                    className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                    placeholder="First Name"
                  />
                  <br />
                  {errors.quantity && (
                    <p className="text-error">should be fill it !</p>
                  )}
                </div>
                <div className="w-full  mb-4 lg:mt-6">
                  <label htmlFor="" className=" dark:text-gray-300">
                    Publisher
                  </label>
                  <input
                    type="text"
                    defaultValue={user?.displayName}
                    {...register("publisher", { required: true })}
                    className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                    placeholder="Last Name"
                  />
                  <br />
                  {errors.publisher && (
                    <p className="text-error">should be fill it !</p>
                  )}
                </div>
              </div>
              <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                <div className="w-full  mb-4 mt-6">
                  <label htmlFor="" className="mb-2 dark:text-gray-300">
                    Short Description
                  </label>
                  <input
                    type="text"
                    {...register("shortDescription", { required: true })}
                    className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                    placeholder="First Name"
                  />
                  <br />
                  {errors.shortDescription && (
                    <p className="text-error">should be fill it !</p>
                  )}
                </div>
                <div className="w-full  mb-4 lg:mt-6">
                  <label htmlFor="" className=" dark:text-gray-300">
                    Rating
                  </label>
                  <input
                    type="number"
                    {...register("rating", { required: true })}
                    className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                    placeholder="Last Name"
                  />
                  <br />
                  {errors.rating && (
                    <p className="text-error">should be fill it !</p>
                  )}
                </div>
              </div>

              <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                <div className="w-full">
                  <h3 className="dark:text-gray-300 mb-2">Book Category</h3>
                  <select
                    {...register("category", { required: true })}
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
                  {errors.category && (
                    <p className="text-error">should be fill it !</p>
                  )}
                </div>
                <div className="w-full">
                  <h3 className="dark:text-gray-300 mb-2">Created Date</h3>
                  {/* <DatePicker
                  className="border w-full p-4 rounded-md"
                  
                  {...register("date", { required: true } )}
                  selected={startDate} onChange={(date) => setStartDate(date)}
                   /> */}

                  <input
                    type="date"
                    {...register("date", { required: true })}
                    className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                    placeholder="Last Name"
                  />

                  <br />
                  {errors.date && (
                    <p className="text-error">should be fill it !</p>
                  )}
                </div>
              </div>
              <div className="col-span-full">
                <label
                  htmlFor="product-details"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  About Book
                </label>
                <textarea
                  id="product-details"
                  rows="6"
                  {...register("about", { required: true })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4"
                  placeholder="Details"
                ></textarea>
                <br />
                {errors.about && (
                    <p className="text-error">should be fill it !</p>
                  )}
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

export default AddForm;

import { useLoaderData } from "react-router-dom";
import addBook from "../../../public/addBook.json";
import PageTitle from "../../component/PageTitle";
import Subscribe from "../Home/Subscribe/Subscribe";
import Modal from "./Modal";
const Details = () => {
  const {
    image,
    authorPhoto,
    shortDescription,
    title,
    authorName,
    publisher,
    rating,
    category,
  } = useLoaderData();
const handleBorrowed = (e)=>{
  console.log("object");
}
  return (
    <>
      <PageTitle addBook={addBook} title="Book Details" />
      <hr className="mt-5" />
      <div className="flex  my-14 items-center">
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

                {/* Open the modal using document.getElementById('ID').showModal() method */}
                {/* <button
                  className=""
                  onClick={() =>
                    document.getElementById("my_modal_1").showModal()
                  }
                >
                  <button className="bg-green-500 text-white text-2xl font-medium px-4 py-2 rounded shadow">
                    Borrowed Now
                  </button>
                </button>
                <dialog id="my_modal_1" className="modal">
                  <div className="modal-box">
                  
                    <div className="modal-action flex-col">
                      <Modal image={image} title={title} category={category} />
                      <form onClick={handleBorrowed} method="dialog"> 
                        <input type="submit" value="Confirm" />
                        <button className="btn">Close</button>
                      </form>
                    </div>
                  </div>
                </dialog> */}





                <Modal />
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

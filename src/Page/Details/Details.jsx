import { useLoaderData } from "react-router-dom";
import addBook from "../../../public/addBook.json";
import PageTitle from "../../component/PageTitle";
import Subscribe from "../Home/Subscribe/Subscribe";
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





<div className="fixed inset-0 z-40 min-h-full overflow-y-auto overflow-x-hidden transition flex items-center">
     
     <div aria-hidden="true" className="fixed inset-0 w-full h-full bg-black/50 cursor-pointer">
     </div>

     <div className="relative w-full cursor-pointer pointer-events-none transition my-auto p-4">
         <div
             className="w-full py-2 bg-white cursor-default pointer-events-auto dark:bg-gray-800 relative rounded-xl mx-auto max-w-sm">
 
             <button   type="button" className="absolute top-2 right-2 rtl:right-auto rtl:left-2">
                 <svg title="Close"   className="h-4 w-4 cursor-pointer text-gray-400"
                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                     <path  
                         d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          ></path>
                 </svg>
                 <span className="sr-only">
                     Close
                 </span>
             </button>
 
 
 
             <div className="space-y-2 p-2">
                 <div className="p-4 space-y-2 text-center dark:text-white">
                     <h2 className="text-xl font-bold tracking-tight" id="page-action.heading">
                         Delete John Doe
                     </h2>
 
                     <p className="text-gray-500">
                         Are you sure you would like to do this?
                     </p>
                 </div>
             </div>
 
             <div className="space-y-2">
                 <div aria-hidden="true" className="border-t dark:border-gray-700 px-2"></div>
 
                 <div className="px-6 py-2">
                     <div className="grid gap-2 grid-cols-[repeat(auto-fit,minmax(0,1fr))]">
                         <button type="button"
                                 className="inline-flex items-center justify-center py-1 gap-1 font-medium rounded-lg border transition-colors outline-none focus:ring-offset-2 focus:ring-2 focus:ring-inset dark:focus:ring-offset-0 min-h-[2.25rem] px-4 text-sm text-gray-800 bg-white border-gray-300 hover:bg-gray-50 focus:ring-primary-600 focus:text-primary-600 focus:bg-primary-50 focus:border-primary-600 dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-600 dark:hover:border-gray-500 dark:text-gray-200 dark:focus:text-primary-400 dark:focus:border-primary-400 dark:focus:bg-gray-800">
                                 <span className="flex items-center gap-1">
                                     <span className="">
                                         Cancel
                                     </span>
                                 </span>
                             </button>
 
                         <button type="submit"
                                 className="inline-flex items-center justify-center py-1 gap-1 font-medium rounded-lg border transition-colors outline-none focus:ring-offset-2 focus:ring-2 focus:ring-inset dark:focus:ring-offset-0 min-h-[2.25rem] px-4 text-sm text-white shadow focus:ring-white border-transparent bg-red-600 hover:bg-red-500 focus:bg-red-700 focus:ring-offset-red-700">
 
                                 <span className="flex items-center gap-1">
                                     <span className="">
                                         Confirm
                                     </span>
                                 </span>
 
                             </button>
                     </div>
                 </div>
             </div>
 
 
         </div>
     </div>
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

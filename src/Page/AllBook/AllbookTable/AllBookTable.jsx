import axios from "axios";
import { useContext, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { CiBoxList } from "react-icons/ci";
import { IoGrid } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
 
import { AuthContext } from "../../../Provider/AuthProvider";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import AllBookRow from "../AllBookRow/AllBookRow";
import BookRow from "./BookRow";
const AllBookTable = () => {
  const axiosSecure = useAxiosSecure();

  const navigate = useNavigate()
  const {user} = useContext(AuthContext)

  const [AllBook, setAllBook] = useState([]);
  const [filterBook, setFilterBook] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);
  const [layoutControl, setLayoutControl] = useState(false)
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axiosSecure(`book?email=${user?.email}`);
        setAllBook(data);
        setFilterBook(data);
        setDataLoading(false);
      } catch (error) {
        // console.log(error);
      }
    };
    getData();
  }, [axiosSecure, user?.email]);

  const handleLayout = (e) => {
   if (e) { 
    const filter = AllBook.filter(item=>parseInt(item.quantity) !== 0)
    setFilterBook(filter)
   }
   if (!e) {
    setFilterBook(AllBook)

   }
  };

  const handleUpdate =async (_id, user)=>{
    const email = user.email;
    const { data } = await axios(
      `${import.meta.env.VITE_API_URL}/user/${email}`
    );

    if (data.role !== "adimn") {
      return toast("this button only for admin");
    }
    navigate(`/update/${_id}`);
  }
  
  if (dataLoading)
    return (
      <div className="h-96 flex justify-center items-center">
        {" "}
        <progress className="progress w-56"></progress>{" "}
      </div>
    );
  return (
    <>
    <Toaster />
      <div className=" flex justify-between items-center my-8">
        <div className="space-x-4">
         
          <button onClick={()=>handleLayout(false)} className="text-success underline border rounded-xl p-2 cursor-pointer">
            All BooK
          </button>
          <span onClick={()=>handleLayout(true)} className="text-success underline border rounded-xl p-2 cursor-pointer">
            Available
          </span> 
        </div>
        <div className="flex gap-3">
          <IoGrid  onClick={()=>setLayoutControl(false)} className="text-3xl cursor-pointer hover:text-warning duration-150" />
          <CiBoxList onClick={()=>setLayoutControl(true)}  className="text-3xl cursor-pointer hover:text-warning duration-150" />
        </div>
      </div>
<div className="overflow-x-auto">
{
        layoutControl &&   <table className="min-w-full divide-y sm:max-w-xs md:max-w-md lg:max-w-6xl divide-gray-200 overflow-x-auto">
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
      <tbody className="bg-base-100 divide-y divide-gray-200">
        {filterBook.map((book) => (
          <BookRow key={book._id} book={book} handleUpdate={handleUpdate}/>
        ))}
      </tbody>
     

      </table>
    }
</div>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6">
  {
        !layoutControl &&  filterBook.map((book) => (
            <AllBookRow key={book._id}  book={book} />
          ))
      }
  </div>
    </>
  );
};

export default AllBookTable;

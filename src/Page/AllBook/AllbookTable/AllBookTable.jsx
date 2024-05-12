import axios from "axios";
import { useEffect, useState } from "react";
import BookRow from "./BookRow";


const AllBookTable = () => {

const [AllBook, setAllBook] = useState([])
const [dataLoading, setDataLoading] = useState(true)
useEffect(() => {
 const getData =async()=>{
    try {
        const { data } = await axios( `${import.meta.env.VITE_API_URL}/book` ); 
        setAllBook(data)
        setDataLoading(false)
      } catch (error) {
        console.log(error);
      }
 }
 getData()
}, [ ]) 

if (dataLoading)  return <div className="h-96 flex justify-center items-center"><progress className="progress w-56"></progress></div>
    return (
        <table className="min-w-full divide-y divide-gray-200 overflow-x-auto"> 

        <thead className="bg-base-100">
            <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Book Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Rating
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Quantity
                </th>
                
                 
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                </th>
            </tr>
        </thead>
        <tbody className="bg-base-100 divide-y divide-gray-200">

{AllBook.map(book =><BookRow key={book._id} book={book} />)}

          
    
    
    
 
    
    
    
        
    
        </tbody>
    </table>
    );
};

export default AllBookTable;
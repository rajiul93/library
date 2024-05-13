import { Link } from "react-router-dom";

 

const BorrowedCard = ({item,handleReturn}) => {
    const {bookingDate,returnDate,image,title,bookId,_id,category} = item;



   
    return (
        <div className="w-full mx-auto bg-white rounded-xl my-14 shadow-md overflow-hidden  ">
        <div className="md:flex">
            <div className="md:shrink-0">
                <img className="h-48 w-full object-cover md:max-h-64   md:w-48" src={image}/>
            </div>
            <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{title}</div>
                <span  className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Category: {category}
                </span>
                <span  className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">

           
                </span>
                
                <p className="mt-2 text-slate-500">
                 Booking ID: {bookId}...
                </p>
                <p className="mt-2 text-slate-500">
                Booking Date : {new Date(bookingDate).toLocaleString()}
                </p>
                <p className="mt-2 text-slate-500">
                Return Date : {new Date(returnDate).toLocaleString()}
                </p>
             <div className="flex gap-2">
             <Link to={`/details/${bookId}`} className="text-warning underline" >
                Details
                </Link>
                <p onClick={()=>handleReturn(bookId,_id )} className="text-success cursor-pointer underline">Return</p>
             </div>
            </div>
        </div>
    </div>
    );
};

export default BorrowedCard;
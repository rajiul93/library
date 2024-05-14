import { useContext } from "react";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const BookRow = ({ book,handleUpdate }) => {
  const { user } = useContext(AuthContext);

  const { authorName, category, image, rating, quantity,title,_id } = book;




  return (
    <tr>
 
 

 
      <td className="px-6 py-4 whitespace-nowrap sm:max-w-xs md:max-w-md lg:max-w-6xl overflow-auto">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10">
            <img className="h-10 w-10 rounded-xl" src={image} alt="" />
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium  ">
              Author:{authorName}
            </div>
            <div className="text-sm text-gray-500">Category:{category}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div   className="text-sm    hover:underline">
        <Link to={`/details/${_id}`}>
        
        {title}
        </Link>
        </div>
        
        <div className="text-sm text-gray-500">Optimization</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
          <Rating
            initialRating={parseInt(rating)}
            emptySymbol={
              <div className="rating rating-xs">
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-gray-500"
                />
              </div>
            }
            fullSymbol={
              <div className="rating rating-xs">
                <input
                  type="radio"
                  name="rating-4"
                  className="mask  mask-star-2 bg-green-500"
                />
              </div>
            }
          />
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
          {quantity}
        </span>
      </td>

      <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">
       {/* The button to open modal */}
<button onClick={()=>handleUpdate(_id, user)}   className="btn">Update</button>

{/* Put this part before </body> tag */}
 
 
      </td>
    </tr>
  );
};

export default BookRow;

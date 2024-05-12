import axios from "axios";
import { PropTypes } from "prop-types";
import toast, { Toaster } from "react-hot-toast";
import { FaEdit } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const MyBookRow = ({ book, getData }) => {
  const { authorName, category, image, rating, quantity, title, _id } = book;

  const handleDelete = async (id) => {
    try {
      const { data } = await axios.delete(
        `${import.meta.env.VITE_API_URL}/book/${id}`
      ); 
      if (data.deletedCount>0) {
        toast.success("delete success")
      }
      getData();
    } catch (error) {
      //
    }
  };

  return (
    <tr>
          <Toaster />

      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10">
            <img className="h-10 w-10 rounded-xl" src={image} alt="" />
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">
              Author:{authorName}
            </div>
            <div className="text-sm text-gray-500">Category:{category}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <Link to={`/details/${_id}`}>
          <div className="text-sm text-gray-900 hover:underline">{title}</div>
        </Link>
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

      <td className="px-6 py-4 whitespace-nowrap   flex items-center gap-4">
        {/* The button to open modal */}
<Link to={`/update/${_id}`}>
<FaEdit className="text-2xl text-accent cursor-pointer" />

</Link>
        <FaDeleteLeft
          onClick={() => handleDelete(_id)}
          className="text-2xl text-error cursor-pointer"
        />

        {/* Put this part before </body> tag */}
      </td>
    </tr>
  );
};

export default MyBookRow;

MyBookRow.propTypes = {
  book: PropTypes.object,
  getData: PropTypes.func,
};

import Rating from "react-rating";

const BookRow = ({ book }) => {
  const { authorName, category, image, rating, quantity,title } = book;
  return (
    <tr>
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
        <div className="text-sm text-gray-900">
        {title}
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
<label htmlFor="my_modal_6" className="btn">Update</label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my_modal_6" className="modal-toggle" />
<div className="modal" role="dialog">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">This modal works with a hidden checkbox!</p>
    <div className="modal-action">
      <label htmlFor="my_modal_6" className="btn">Close!</label>
    </div>
  </div>
</div>
      </td>
    </tr>
  );
};

export default BookRow;

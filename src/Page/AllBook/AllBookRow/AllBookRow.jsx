import Rating from "react-rating";
import { Link } from "react-router-dom";

 

const AllBookRow = ({book}) => {
  const { authorName, category, image, rating, quantity,title,_id } = book;

    return (
        <div className="card   bg-base-100 shadow-xl">
        <figure><img src={image} className="h-56 w-full object-cover" alt=" " /></figure>
        <div className="card-body">
            <Link to={`/details/${_id}`}>
            
          <h2 className="card-title hover:underline">
            {title}
            <div className="badge badge-secondary">NEW</div>
          </h2>
            </Link>
          <h2>Quantity : {quantity}</h2>
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
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{category}</div> 
            <div className="badge badge-outline">{authorName}</div>
          </div>
        </div>
      </div>
    );
};

export default AllBookRow;
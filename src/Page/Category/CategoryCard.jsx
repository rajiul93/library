import Rating from "react-rating";
import { Link } from "react-router-dom";

 

const CategoryCard = ({item}) => {
    const {authorName,category,image,rating,title,shortDescription,_id} = item;
    return (
        <div className="w-full mx-auto bg-white rounded-xl shadow-md overflow-hidden  ">
        <div className="md:flex">
            <div className="md:shrink-0">
                <img className="h-48 w-full object-cover md:max-h-64   md:w-48" src={image}/>
            </div>
            <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{title}</div>
                <span  className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{category}
                </span>
                <span  className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">

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
                
                <p className="mt-2 text-slate-500">
                  {shortDescription.slice(0,150)}...
                </p>
                <p className="mt-2 text-slate-500">
                Author : {authorName}
                </p>
                <Link to={`/details/${_id}`} className="text-warning underline" >
                Details
                </Link>
            </div>
        </div>
    </div>
    );
};

export default CategoryCard;
import { PropTypes } from "prop-types";
import { useNavigate } from "react-router-dom";

const CategoryCard = ({ item }) => {
  const navigate = useNavigate()
  const handleNavigate =()=>{ 
    navigate(`/category/${item.category_name}`)
  }
  return (
    <div onClick={handleNavigate} className="w-full max-w-xs overflow-hidden bg-white  shadow-lg hover:shadow-2xl dark:bg-gray-800 cursor-pointer">
      <img
        className="object-cover w-full h-42"
        src={item?.image}
        alt="avatar"
      />

      <div className="py-5 text-center">
        <a
          href="#"
          className="block text-xl font-bold text-gray-800 dark:text-white"
          role="link"
        >
          {item.category_name}
        </a>
        <span className="text-sm px-2 text-gray-700 dark:text-gray-200">
          {item.short_description}
        </span>
      </div>
    </div>
  );
};

export default CategoryCard;
CategoryCard.propTypes = {
  item: PropTypes.object,
};

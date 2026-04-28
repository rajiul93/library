import Lottie from "lottie-react";
import PropTypes from "prop-types";

 

const PageTitle = ({addBook,title}) => {
    return (
        <div className="flex justify-around items-center">
            <div>
                <h1 className="text-2xl md:text-3xl font-semibold text-warning">{title}</h1>
            </div>
            <div className="h-28 w-28">
            <Lottie  animationData={addBook} loop={true} />

            </div>
        </div>
    );
};

PageTitle.propTypes = {
  addBook: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  title: PropTypes.string.isRequired,
};

export default PageTitle;
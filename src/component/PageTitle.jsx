import Lottie from "lottie-react";

 

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

export default PageTitle;
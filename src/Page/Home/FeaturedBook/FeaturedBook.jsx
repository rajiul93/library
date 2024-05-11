import BookSlide from "./BookSlide/BookSlide";

 

const FeaturedBook = () => {
    return (
        <div>
            <h1 className="text-2xl font-semibold text-center capitalize lg:text-3xl  my-14 text-warning ">Featured Book</h1>
            <BookSlide />
        </div>
    );
};

export default FeaturedBook;
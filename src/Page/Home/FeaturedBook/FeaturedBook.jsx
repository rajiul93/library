import BookSlide from "./BookSlide/BookSlide";

 

const FeaturedBook = () => {
    return (
        <div>
            <h1 className="text-2xl font-semibold text-start underline capitalize lg:text-3xl  mt-14 text-warning ">Featured Book</h1>
            <BookSlide />
        </div>
    );
};

export default FeaturedBook;
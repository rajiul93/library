import BookSlide from "./BookSlide/BookSlide";

 

const FeaturedBook = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-center mt-14 text-warning">Featured Book</h1>
            <BookSlide />
        </div>
    );
};

export default FeaturedBook;
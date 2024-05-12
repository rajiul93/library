import { useEffect, useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import Rating from "react-rating";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
// SwiperCore.use([Pagination]);
import { Link, useLoaderData } from "react-router-dom";
import { Navigation } from "swiper/modules";
const BookSlide = () => {
  const bookData = useLoaderData();
  const [slidesPerView, setSlidesPerView] = useState(5);
  const [spaceBetween, setSpaceBetween] = useState(30);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setSlidesPerView(4);
        setSpaceBetween(50);
      } else if (window.innerWidth >= 1024) {
        setSlidesPerView(4);
        setSpaceBetween(40);
      } else if (window.innerWidth >= 768) {
        setSlidesPerView(3);
        setSpaceBetween(30);
      } else if (window.innerWidth >= 640) {
        setSlidesPerView(2);
        setSpaceBetween(20);
      } else {
        setSlidesPerView(2);
        setSpaceBetween(10);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call the function once to set initial values
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        freeMode={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper mb-14 mt-5 grid grid-cols-1  items-center"
      >
        {bookData.map((item) => {
          return (
            <SwiperSlide key={item._id}>
              <div className="flex flex-col border border-warning p-4   w-full h-full cursor-pointer  ">
                <div className="w-full h-full overflow-hidden">
                  <img
                    className="max-h-64 h-full object-cover w-full hover:scale-125 duration-200"
                    src={item.image}
                    alt=""
                  />
                </div>
                <h1 className="font-bold text-start my-3">{item.title}</h1>
                <div className="flex justify-between items-center">
                  <Rating
                    initialRating={parseInt(item.rating)}
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
                  <div
                    className="tooltip hover:tooltip-open tooltip-top tooltip-warning"
                    data-tip="Details"
                  >
                    <Link to={`/details/${item._id}`}>
                      <FaLongArrowAltRight className="hover:text-warning duration-100 text-xl " />
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default BookSlide;

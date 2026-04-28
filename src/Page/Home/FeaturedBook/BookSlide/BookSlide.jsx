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
        className="mySwiper mb-10 mt-4"
      >
        {bookData.map((item) => {
          return (
            <SwiperSlide key={item._id}>
              <div className="group h-full w-full">
                <div className="h-full rounded-2xl border border-base-200 bg-base-100 shadow-sm transition hover:shadow-md">
                  <div className="relative overflow-hidden rounded-t-2xl">
                    <img
                      className="h-60 sm:h-64 w-full object-cover transition duration-300 group-hover:scale-105"
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-base-100/10 to-transparent opacity-0 group-hover:opacity-100 transition" />
                  </div>
                  <div className="p-4 sm:p-5">
                    <h1 className="font-semibold text-base-content leading-snug line-clamp-2 min-h-[2.5rem]">
                      {item.title}
                    </h1>

                    <div className="mt-3 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <Rating
                          initialRating={Number(item.rating) || 0}
                          emptySymbol={
                            <div className="rating rating-xs">
                              <input
                                type="radio"
                                name={`rating-${item._id}`}
                                className="mask mask-star-2 bg-base-300"
                                readOnly
                              />
                            </div>
                          }
                          fullSymbol={
                            <div className="rating rating-xs">
                              <input
                                type="radio"
                                name={`rating-${item._id}`}
                                className="mask mask-star-2 bg-[#ffbe0e]"
                                readOnly
                              />
                            </div>
                          }
                        />
                        <span className="text-xs text-base-content/60">
                          {Number(item.rating) || 0}
                        </span>
                      </div>

                      <div
                        className="tooltip tooltip-top"
                        data-tip="Details"
                      >
                        <Link
                          to={`/details/${item._id}`}
                          className="btn btn-sm btn-circle bg-base-200 border-none hover:bg-base-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ffbe0e]"
                          aria-label={`View details for ${item.title}`}
                        >
                          <FaLongArrowAltRight className="text-lg" />
                        </Link>
                      </div>
                    </div>
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

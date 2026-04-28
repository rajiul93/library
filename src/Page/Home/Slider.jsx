const Slider = () => {
  const slides = [
    {
      id: "slide1",
      prev: "slide3",
      next: "slide2",
      image:
        "https://miro.medium.com/v2/resize:fit:1200/1*6Jp3vJWe7VFlFHZ9WhSJng.jpeg",
      title: (
        <>
          Discover Your Next Adventure at <br className="hidden sm:block" /> the
          Library!
        </>
      ),
      description:
        "Embark on a Journey of Wonder: Find your next thrilling adventure within the pages of our extensive library collection.",
      gradientFrom: "#a18e46",
    },
    {
      id: "slide2",
      prev: "slide1",
      next: "slide3",
      image: "https://s26162.pcdn.co/wp-content/uploads/2021/03/olaser_libraries.jpg",
      title: (
        <>
          Dive into a World of Knowledge with <br className="hidden sm:block" />{" "}
          Our Library Resources!
        </>
      ),
      description:
        "Delve into the depths of history and unearth hidden treasures of knowledge with the vast resources available at our library.",
      gradientFrom: "#5d5c5c",
    },
    {
      id: "slide3",
      prev: "slide2",
      next: "slide1",
      image:
        "https://assets-global.website-files.com/604a97c70aee09eed25ce991/61897a35583a9b51db018d3e_MartinPublicSeating-97560-Importance-School-Library-blogbanner1.jpg",
      title: (
        <>
          Let the Library Be Your Gateway to <br className="hidden sm:block" />
          Discovery and Inspiration!
        </>
      ),
      description:
        "Whether you are seeking inspiration for your next masterpiece or looking to expand your horizons, our diverse collection of books, resources, and events will ignite your passion for discovery.",
      gradientFrom: "#5d5c5c",
    },
  ];

  return (
    <div className="z-0 my-font">
      <div className="carousel w-full overflow-hidden rounded-xl">
        {slides.map((slide) => (
          <div key={slide.id} id={slide.id} className="carousel-item relative w-full">
            <img
              src={slide.image}
              className="w-full h-[340px] sm:h-[420px] lg:h-[520px] object-cover"
              alt="Library slide"
              loading="lazy"
            />

            <div
              className="absolute inset-0 flex items-center"
              style={{
                background: `linear-gradient(90deg, ${slide.gradientFrom} 0%, rgba(21,21,21,0) 70%)`,
              }}
            >
              <div className="w-full px-4 sm:px-8 lg:px-12">
                <div className="max-w-xl space-y-4 sm:space-y-6">
                  <h1 className="text-xl sm:text-3xl lg:text-4xl font-bold leading-tight text-base-100">
                    {slide.title}
                  </h1>
                  <p className="text-sm sm:text-base lg:text-lg text-base-100/90 leading-relaxed">
                    {slide.description}
                  </p>
                  <div className="pt-1">
                    <button className="btn border-none bg-[#ffbe0e] text-black hover:bg-[#ffbe0e]/90">
                      Discover More
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute flex right-4 sm:right-6 bottom-4 sm:bottom-6 gap-3">
              <a
                href={`#${slide.prev}`}
                className="btn btn-circle btn-sm sm:btn-md bg-base-100/80 border-none hover:bg-base-100"
                aria-label="Previous slide"
              >
                ❮
              </a>
              <a
                href={`#${slide.next}`}
                className="btn btn-circle btn-sm sm:btn-md bg-base-100/80 border-none hover:bg-base-100"
                aria-label="Next slide"
              >
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;

const Slider = () => {
  return (
    <div className=" z-0 rounded-xl my-8 my-font">
      <div className="carousel  overflow-hidden  ">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://miro.medium.com/v2/resize:fit:1200/1*6Jp3vJWe7VFlFHZ9WhSJng.jpeg"
            className="w-full max-h-[500px] object-cover rounded-lg"
          />
          <div className="absolute h-full  w-full bg-gradient-to-r from-[#a18e46] to-[rgba(21, 21, 21, 0)] flex flex-col items-start gap-6 ps-8 align-middle justify-center">
            <h1 className="md:text-3xl font-bold text-base-300">
              Discover Your Next Adventure at <br /> the Library!
            </h1>
            <p className="text-base-300 md:w-1/2">
              Embark on a Journey of Wonder: Find your next thrilling adventure
              within the pages of our extensive library collection.
            </p>
            <div>
              <button className="btn hover:btn-outline  btn-warning  ">
                Discover More
              </button>
          
            </div>
          </div>
          <div className="absolute flex     right-5  bottom-8">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle ms-5">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://s26162.pcdn.co/wp-content/uploads/2021/03/olaser_libraries.jpg"
            className="w-full max-h-[500px] object-cover"
          />
          <div className="absolute h-full  w-full bg-gradient-to-r from-[#5d5c5c] to-[rgba(21, 21, 21, 0)] flex flex-col items-start gap-6 ps-8 align-middle justify-center">
            <h1 className="md:text-3xl font-bold text-base-300">
              Dive into a World of Knowledge with <br /> Our Library Resources!
            </h1>
            <p className="text-base-300 md:w-1/2">
              Delve into the depths of history and unearth hidden treasures of
              knowledge with the vast resources available at our library.  
            </p>
            <div>
              <button className="btn hover:btn-outline  btn-warning  ">
                Discover More
              </button>
              
            </div>
          </div>
          <div className="absolute flex     right-5  bottom-8">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle ms-5">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://assets-global.website-files.com/604a97c70aee09eed25ce991/61897a35583a9b51db018d3e_MartinPublicSeating-97560-Importance-School-Library-blogbanner1.jpg"
            className="w-full max-h-[500px] object-cover"
          />
          <div className="absolute h-full  w-full bg-gradient-to-r from-[#5d5c5c] to-[rgba(21, 21, 21, 0)] flex flex-col items-start gap-6 ps-8 align-middle justify-center">
            <h1 className="md:text-3xl font-bold text-base-300">
              Let the Library Be Your Gateway to <br />
              Discovery and Inspiration!
            </h1>
            <p className="text-base-100 md:w-1/2">
               Whether you are seeking
              inspiration for your next masterpiece or looking to expand your
              horizons, our diverse collection of books, resources, and events
              will ignite your passion for discovery.  
            </p>
            <div>
              <button className="btn hover:btn-outline btn-warning ">
                Discover More
              </button>
            
            </div>
          </div>
          <div className="absolute flex     right-5  bottom-8">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle ms-5">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;

const CurCustomersAreSaying = () => {
  return (
    <section className="bg-base-100 dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center t capitalize lg:text-3xl  ">
          What our <span className="text-warning ">clients</span> say
        </h1>

        <p className="max-w-2xl mx-auto mt-6 text-center text-gray-500 dark:text-gray-300">
          Our library book reviews serve as beacons, offering insights and
          reflections on the literary treasures that grace our shelves. From
          timeless classics that have stood the test of time to contemporary
          works shaping the discourse of our modern age, our reviews provide a
          glimpse into the worlds crafted by the written word.
        </p>

        <div className="grid grid-cols-1 gap-8 mx-auto mt-8 lg:grid-cols-2 xl:mt-10 max-w-7xl">
          <div className="p-6 bg-base-300 rounded-lg dark:bg-gray-800 md:p-8">
            <p className="leading-loose text-gray-500 dark:text-gray-300">
              “Discover literary treasures with our concise book reviews.
              Explore classics and modern works, gaining insight and inspiration
              in just a few words. Embark on a journey of discovery, guided by
              our insightful reflections. Join us in unraveling the mysteries of
              literature, one review at a time.”.
            </p>

            <div className="flex items-center mt-6">
              <img
                className="object-cover rounded-full w-14 h-14"
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                alt=""
              />

              <div className="mx-4">
                <h1 className="font-semibold text-blue-500">Robbert</h1>
                <span className="text-sm text-gray-500 dark:text-gray-300">
                  CTO, Robert Consultency
                </span>
              </div>
            </div>
          </div>

          <div className="p-6  bg-base-300 rounded-lg dark:bg-gray-800 md:p-8">
            <p className="leading-loose text-gray-500 dark:text-gray-300">
              “Dive into the world of literature with our succinct book reviews.
              Delve into captivating stories and profound ideas, distilled into
              concise reflections. Uncover new favorites and revisit timeless
              classics with our insightful guidance. Explore the depth and
              beauty of literature in just a few words.”.
            </p>

            <div className="flex items-center mt-6">
              <img
                className="object-cover rounded-full w-14 h-14"
                src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />

              <div className="mx-4">
                <h1 className="font-semibold text-blue-500">Mia Brown</h1>
                <span className="text-sm text-gray-500 dark:text-gray-300">
                  Msc from California
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurCustomersAreSaying;

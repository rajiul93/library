const CurCustomersAreSaying = () => {
  return (
    <section className="bg-base-100">
      <div className="px-4 sm:px-6 lg:px-8 py-10 mx-auto max-w-6xl">
        <h1 className="text-2xl font-semibold text-center capitalize lg:text-3xl text-base-content">
          What our <span className="text-[#ffbe0e]">clients</span> say
        </h1>

        <p className="max-w-2xl mx-auto mt-6 text-center text-base-content/70">
          Our library book reviews serve as beacons, offering insights and
          reflections on the literary treasures that grace our shelves. From
          timeless classics that have stood the test of time to contemporary
          works shaping the discourse of our modern age, our reviews provide a
          glimpse into the worlds crafted by the written word.
        </p>

        <div className="grid grid-cols-1 gap-6 mt-8 lg:grid-cols-2">
          <div className="p-6 rounded-2xl border border-base-200 bg-base-100 shadow-sm md:p-8">
            <p className="leading-relaxed text-base-content/70">
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
                alt="Robbert"
                loading="lazy"
              />

              <div className="mx-4">
                <h1 className="font-semibold text-base-content">Robbert</h1>
                <span className="text-sm text-base-content/60">
                  CTO, Robert Consultency
                </span>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl border border-base-200 bg-base-100 shadow-sm md:p-8">
            <p className="leading-relaxed text-base-content/70">
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
                alt="Mia Brown"
                loading="lazy"
              />

              <div className="mx-4">
                <h1 className="font-semibold text-base-content">Mia Brown</h1>
                <span className="text-sm text-base-content/60">
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

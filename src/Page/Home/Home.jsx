import Category from "./Category/Category";
import CurCustomersAreSaying from "./CurCustomersAreSaying/CurCustomersAreSaying";
import FeaturedBook from "./FeaturedBook/FeaturedBook";
import Productivity from "./Productivity/Productivity";
import Slider from "./Slider";
import Subscribe from "./Subscribe/Subscribe";
import Support from "./Support";

const Home = () => {
  return (
    <div className="space-y-12">
      {/* Hero */}
      <section className="rounded-box overflow-hidden bg-base-200/60 border border-base-300">
        <Slider />
      </section>

      {/* Quick support / highlights */}
      <section className="grid gap-6">
        <Support />
      </section>

      {/* Featured */} 
        <FeaturedBook />
  

      {/* Productivity */}
      <section className="rounded-box bg-base-100 border border-base-200 shadow-sm p-4 sm:p-6">
        <Productivity />
      </section>

      {/* Categories */}
      <section className="rounded-box bg-base-100 border border-base-200 shadow-sm p-4 sm:p-6">
        <Category />
      </section>

      {/* Subscribe */}
      <section className="rounded-box bg-base-200/60 border border-base-300 p-4 sm:p-6">
        <Subscribe />
      </section>

      {/* Client reviews */}
      <section className="rounded-box bg-base-100 border border-base-200 shadow-sm p-4 sm:p-6">
        <CurCustomersAreSaying />
      </section>
    </div>
  );
};

export default Home;

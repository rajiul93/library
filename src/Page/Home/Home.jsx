import Category from "./Category/Category";
import CurCustomersAreSaying from "./CurCustomersAreSaying/CurCustomersAreSaying ";
import FeaturedBook from "./FeaturedBook/FeaturedBook";
import Productivity from "./Productivity/Productivity";
import Slider from "./Slider";
import Subscribe from "./Subscribe/Subscribe";
import Support from "./Support";

const Home = () => {
  return (
    <div>
      <Slider />
      <Support />
      <FeaturedBook />
      <Productivity/>
   <Category />
  <Subscribe />
  <CurCustomersAreSaying />
      {/* clint review */}
    </div>
  );
};

export default Home;

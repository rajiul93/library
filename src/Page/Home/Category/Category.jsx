import CategoryCard from "./CategoryCard";

 

const Category = () => {
    return (
        <div className="my-14">
            <h1 className="text-2xl font-semibold text-center capitalize lg:text-3xl  mb-14 text-warning">Choose your Category</h1>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
          </div>
        </div>
    );
};

export default Category;
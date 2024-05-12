import axios from "axios";
import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";

const Category = () => {
const [category, setCategory] = useState([])

useEffect(() => {
 const getData= async()=>{
  const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/book-category`)
  setCategory(data)
 }
 getData()
}, [])


  return (
    <div className="my-14 space-y-5">
      <h1 className="text-2xl font-semibold text-center capitalize lg:text-3xl  mb- text-warning">
      Most Popular Categories
      </h1>
      <p className="max-w-3xl mx-auto text-center text-sm">
        You can work on these categories by registering on service64 with few
        simple steps to become discoverable to your customers easily.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
       
       {
        category.map(item=>  <CategoryCard item={item} key={item._id } />)
       }
        
  
      </div>
    </div>
  );
};

export default Category;

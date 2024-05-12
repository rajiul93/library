import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import addBook from "../../../public/addBook.json";
import { AuthContext } from "../../Provider/AuthProvider";
import PageTitle from "../../component/PageTitle";
import CategoryCard from "./CategoryCard";

const Category = () => {
    const {user} = useContext(AuthContext)
  const { category_name } = useParams();
  const [AllBook, setAllBook] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);



  useEffect(() => {
    getData();
  }, [user]); 
 
  const getData = async () => {
    try {
      const { data } = await axios(`${import.meta.env.VITE_API_URL}/same-category/${category_name}`);
      setAllBook(data);
      setDataLoading(false);
    } catch (error) {
    //   console.log(error);
    }
  };

if (dataLoading)  return <div className="h-96 flex justify-center items-center"><progress className="progress w-56"></progress></div>

  return (
    <div>
      <PageTitle addBook={addBook} title="Category" />
      <div className="space-y-4 mb-14">
       {AllBook.map(item=><CategoryCard key={item._id} item={item} />)}
 
       
      </div>
    </div>
  );
};

export default Category;

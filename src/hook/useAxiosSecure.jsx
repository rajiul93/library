import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

 const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials:true,
 })

const useAxiosSecure = () => {
    const {logOut} = useAuth() ;
    const navigate = useNavigate()
    useEffect(()=>{
      axiosSecure.interceptors.response.use(res=>{
        return res;
      },error=>{
console.log("error.response",error.response)
if (error.response.status === 401 || error.response.status === 401) {
    logOut()
    .then(()=>{
        navigate('/login')
    })
    .catch(e=>console.log(e))
}
      })  
    })
  return axiosSecure;
};

export default useAxiosSecure;
import axios from "axios";
import { useContext } from "react";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
const SocialLogin = () => {
  const { logByGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate(); 

  const google = async () => {


    try {
      const result = await logByGoogle();
      const user = result?.user?.email
      try {
        
        
        const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/jwt`, {email:user },{withCredentials:true})
        console.log(data)

        if (data.success) {
          Swal.fire({
            title: "Success fully login",
            text: "Welcome to our Library",
            icon: "success"
          });
        }
        navigate(location?.state ? location.state : "/");
      
      } catch (error) {
        // console.log(error)
      }


      
      console.log(result);
      toast.success("success"); 
    } catch (error) {
      const errorMessage = error.message;
      // console.log(errorMessage);
    }
  };
  return (
    <div
      onClick={google}
      className="btn btn-outline btn-warning px-8 hover:text-base-100"
    >
      <FaGoogle className="text-4xl   " />
    </div>
  );
};

export default SocialLogin;

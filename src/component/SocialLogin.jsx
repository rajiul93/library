import { useContext } from "react";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
const SocialLogin = () => {
  const { logByGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const form = location.state || "/";

  const google = async () => {


    try {
      const result = await logByGoogle();
      // const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/jwt`, {
      //   email: result?.user?.email,
      // },{withCredentials:true});


      
      console.log(result);
      toast.success("success"); 
    } catch (error) {
      const errorMessage = error.message;
      console.log(errorMessage);
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

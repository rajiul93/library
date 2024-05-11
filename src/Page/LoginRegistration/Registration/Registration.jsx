import Lottie from "lottie-react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import swal from "sweetalert";
import loginAnimation from "../../../../public/loginAnimation.json";
import { AuthContext } from "../../../Provider/AuthProvider";
import SocialLogin from "../../../component/SocialLogin";

const Registration = () => {


    const navigate = useNavigate();
    const location = useLocation()
    const {loginWithEmail} =useContext(AuthContext) 
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
   
  
    const handleLogin = (data) => {
      const { email, password } = data;
      loginWithEmail(email, password)
        .then(() => {
          swal.fire({
            title: 'success',
            text: 'Welcome Art Gallery',
            icon: 'success',
            confirmButtonText: 'OK'
          })
        navigate(location?.state ? location.state : "/");
  
        })
        .catch(() => {
          toast.warn("Please check your password password");
        });
    };


    return (
        <div className="min-h-screen">
      <ToastContainer/>
      <h1 className="text-center font-bold text-3xl mt-8">Welcome to Library! <span className="text-warning underline">Please Sing In.</span></h1>
    <div className="flex flex-col  items-center md:flex-row-reverse  ">
    <div>
        <Lottie  animationData={loginAnimation} loop={true} />
        </div>
        <div className="md:w-1/2 border p-8 border-warning">
        <form
        onSubmit={handleSubmit(handleLogin)}
        className="max-w-2xl mx-auto space-y-4"
      >
        <input
          className="input input-bordered w-full  mx-auto"
          {...register("email", { required: true })}
          placeholder="Email"
        />{" "}
        <br />
        {errors.email && <p>Last name is required.</p>}
        <input
          className="input input-bordered w-full  mx-auto"
          {...register("password")}
          placeholder="Password"
        />{" "}
        <br />
        {errors.password && <p>Please enter number for age.</p>}
        <button type="submit" className="btn btn-active w-full btn-warning">
          {" "}
          Login
        </button>
      </form>
      <div className="text-center mt-5 mb-10">
        <p>
          You have no account go 
          <Link  to="/login" className="text-warning underline ms-2">
            Login
          </Link>
        </p>
        <br />
        <SocialLogin />
      </div>
        </div>
       

        
    </div>
    </div>
    );
};

export default Registration;
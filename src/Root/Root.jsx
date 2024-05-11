import { Outlet } from "react-router-dom";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
 

const Root = () => {
    return (
       <div className="secondary-content">
         <div className="max-w-6xl mx-auto px-2">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
       </div>
    );
};

export default Root;
import { Outlet } from "react-router-dom";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
 

const Root = () => {
    return (
       <div className="secondary-content">
            <Navbar />
         <div className="max-w-6xl mx-auto px-2 min-h-[calc(100vh-152px)]">
            <Outlet />
        </div>
            <Footer />
       </div>
    );
};

export default Root;
import { Outlet } from "react-router-dom";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
 

const Root = () => {
    return (
      <div className="min-h-screen bg-base-100 text-base-content flex flex-col">
        <Navbar />
        <main className="flex-1 w-full">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <Outlet />
          </div>
        </main>
        <Footer />
      </div>
    );
};

export default Root;
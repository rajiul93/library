import { CiShoppingTag } from "react-icons/ci";
import { FaHeadset } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";
import { PiMaskHappyThin } from "react-icons/pi";
const Support = () => {
    return (
        <div className="">
            <div className="flex flex-col md:flex-row gap-7  items-center bg-accent-content my-8 py-10 rounded-lg justify-around">
                <div className="border p-4 rounded-xl">
                    <div><FaHeadset className="text-4xl text-success" /></div>
                    <div className="text-base-100 font-bold text-2xl">24/7 Support</div>
                </div>
                <div className="border p-4 rounded-xl">
                    <div><CiShoppingTag className="text-4xl text-warning" /></div>
                    <div className="text-base-100 font-bold text-2xl">Easy Borrowed</div>
                </div>
                <div className="border p-4 rounded-xl">
                    <div><GiReturnArrow className="text-4xl text-accent" /></div>
                    <div className="text-base-100 font-bold text-2xl">Easy Return</div>
                </div>
                <div className="border p-4 rounded-xl">
                    <div><PiMaskHappyThin className="text-4xl text-secondary" /></div>
                    <div className="text-base-100 font-bold text-2xl">Happy Clint {730}</div>
                </div>
            </div>
        </div>
    );
};

export default Support;
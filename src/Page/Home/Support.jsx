import { CiShoppingTag } from "react-icons/ci";
import { FaHeadset } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";
import { PiMaskHappyThin } from "react-icons/pi";
const Support = () => {
  const items = [
    {
      title: "24/7 Support",
      subtitle: "We’re here whenever you need help.",
      icon: <FaHeadset className="w-7 h-7" />,
      ring: "ring-success/20",
      iconBg: "bg-success/15 text-success",
    },
    {
      title: "Easy Borrow",
      subtitle: "Borrow books in a few clicks.",
      icon: <CiShoppingTag className="w-7 h-7" />,
      ring: "ring-[#ffbe0e]/25",
      iconBg: "bg-[#ffbe0e]/15 text-[#ffbe0e]",
    },
    {
      title: "Easy Return",
      subtitle: "Simple returns, no hassle.",
      icon: <GiReturnArrow className="w-7 h-7" />,
      ring: "ring-info/20",
      iconBg: "bg-info/15 text-info",
    },
    {
      title: "Happy Clients",
      subtitle: "Trusted by 730+ readers.",
      icon: <PiMaskHappyThin className="w-7 h-7" />,
      ring: "ring-secondary/20",
      iconBg: "bg-secondary/15 text-secondary",
    },
  ];

  return (
    <section className="my-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {items.map((item) => (
          <div
            key={item.title}
            className={[
              "rounded-2xl border border-base-200 bg-base-100",
              "p-5 sm:p-6 shadow-sm",
              "hover:shadow-md hover:-translate-y-0.5 transition",
              "ring-1",
              item.ring,
            ].join(" ")}
          >
            <div className="flex items-center gap-4">
              <div className={["w-12 h-12 rounded-xl grid place-items-center", item.iconBg].join(" ")}>
                {item.icon}
              </div>
              <div className="min-w-0">
                <h3 className="font-semibold text-base-content">{item.title}</h3>
                <p className="text-sm text-base-content/70">{item.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Support;
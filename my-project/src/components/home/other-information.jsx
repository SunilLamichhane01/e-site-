import { FaCreditCard, FaBox } from "react-icons/fa";
import { LuBus } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";

const OtherMethod = [
  {
    id: 1,
    icon: <FaCreditCard />,
    text: "Secure Payment",
    description: "Elementum feugiat diam",
  },
  {
    id: 2,
    icon: <LuBus />,
    text: "Fast Delivery",
    description: "Elementum feugiat diam",
  },
  {
    id: 3,
    icon: <FaBox />,
    text: "Free Shipping",
    description: "Elementum feugiat diam",
  },
  {
    id: 4,
    icon: <CiHeart />,
    text: "Delivered with Care",
    description: "Elementum feugiat diam",
  },
];

const OtherInformation = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 mt-10">
      {OtherMethod.map((item) => (
        <div key={item.id} className="flex flex-col items-center text-center">
          <div className="text-3xl mb-2 rounded-full p-3 bg-green-300">
            {item.icon}
          </div>
          <h3 className="font-semibold">{item.text}</h3>
          <p className="text-sm text-gray-500">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default OtherInformation;

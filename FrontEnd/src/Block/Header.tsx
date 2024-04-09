import { FaStore, FaUpload } from "react-icons/fa";
import { MdCardGiftcard, MdCardTravel } from "react-icons/md";
import { IoStorefrontOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import img from "../assets/Next.jpeg"
import { IoSearch } from "react-icons/io5";

interface iProps {
  name: string;
  link: string;
  icon: React.ReactNode;
}

const Header = () => {

  const storeData = useSelector((state: any) => state.cart);
  const navData: iProps[] = [
    {
      name: "purchased History",
      link: "/history",
      icon: <MdCardGiftcard />,
    },
    {
      name: "my store",
      link: "",
      icon: <IoStorefrontOutline />,
    },
  ];
  return (
    <div>
      <main className="flex justify-between px-10 h-[70px] border-b items-center">
        <div className="cursor-pointer font-bold text-[18px]">
          <NavLink to="/">
            <div className="w-[60px] h-[60px] rounded-[50%] shadow-md flex justify-center items-center bg-blue-950">
              <img src={img} alt="" />
            </div>
          </NavLink>
        </div>
        <div className="flex w-[40%] h-[70px] justify-center items-center">
          <div className="w-[80%] h-[70%] flex justify-center items-center rounded-md border">
            <IoSearch className="text-[25px] mr-3"/>
            <input type="text" className="w-[92%] h-[80%] outline-none text-[20px]" placeholder="Search products, brands and categories "/>
          </div>
          <div className="hover:bg-white transition-all duration-500 hover:text-black border rounded-md w-[15%] flex justify-center items-center h-[50px] shadow-md font-[700] text-[20px] ml-2 cursor-pointer bg-blue-950 text-[white]">
            Search
          </div>
        </div>
        <section className="flex gap-6">
          {navData?.map(({ name, link, icon }: iProps) => (
            <NavLink
              to={`${link}`}
              className="cursor-pointer flex items-center gap-1 text-[30px]"
            >
              {icon}
              <span className="text-[12px] uppercase font-medium">{name}</span>
            </NavLink>
          ))}
          <NavLink
            to="/cart"
            className="w-8 h-8 rounded-full hover:bg-slate-200 cursor-pointer transition-all duration-300 flex items-center justify-center relative "
          >
            <p className="absolute top-[-5px] right-[-11px] w-6 h-6 bg-red-500 text-[15px] text-white rounded-full flex items-center justify-center">
              {storeData.length}
            </p>{" "}
            <FiShoppingCart className="text-[30px]" />
          </NavLink>
        </section>
      </main>
    </div>
  );
};

export default Header;

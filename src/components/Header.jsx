import { HiOutlineDocumentText } from "react-icons/hi";
import { BsSun, BsMoonStars } from "react-icons/bs";
import { useNotesContext } from "../context/Context";

const Header = () => {

  const {dark, setDark} = useNotesContext()
  
  return (
    <div className={` h-20 ${dark ? " text-white  bg-slate-700" : "text-black bg-teal-400" } duration-300 ease-in sticky top-0 flex items-center justify-between px-5 shadow-xl`}>
      <div className="flex items-center h-full  gap-2">
        <HiOutlineDocumentText size={30} className="cursor-pointer" />
        <h1 className=" text-4xl select-none cursor-pointer ">Notes</h1>
      </div>
      <div onClick={() => setDark(!dark)} className="cursor-pointer ">
        {dark ? (
          <BsMoonStars size={25} />
        ) : (
          <BsSun size={25}  />
        )}
      </div>
    </div>
  );
};

export default Header;

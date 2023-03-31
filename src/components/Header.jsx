import { HiOutlineDocumentText } from "react-icons/hi";
import { BsSun, BsMoonStars } from "react-icons/bs";
import { useNotesContext } from "../context/Context";

const Header = () => {

  const {dark, setDark} = useNotesContext()
  
  return (
    <div className={`h-16 ${dark ? " text-white  bg-slate-700" : "text-black bg-teal-400" } duration-300 ease-in sticky top-0 flex items-center justify-between px-5 shadow-lg`}>
      <div className="flex items-center h-full  gap-2">
        <HiOutlineDocumentText size={30} />
        <h1 className=" text-4xl select-none ">Notes</h1>
      </div>
      <div onClick={() => setDark(!dark)}>
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
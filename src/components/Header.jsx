import { HiOutlineDocumentText } from "react-icons/hi";
import { BsSun, BsMoonStars } from "react-icons/bs";
import { useNotesContext } from "../context/Context";
import { IoIosArrowBack } from "react-icons/io";

import { Link } from "react-router-dom";

const Header = () => {
  const { dark, setDark, isCreate,  } = useNotesContext();
  return (
    <div
      className={` h-20 ${
        dark ? " text-white  bg-slate-700" : "text-black bg-teal-500"
      } duration-300 ease-in sticky top-0 flex items-center justify-between pr-5 shadow-xl`}
    >
      {isCreate  ? (
        <Link
          to="/"
          onClick={() => toggleBackButton()}
          className=" p-5 flex items-center justify-center  rounded-full   "
        >
          <button>
            <IoIosArrowBack size={25} />
          </button>
        </Link>
      ) : (
        <div className="flex items-center h-full mx-5  gap-2">
          <HiOutlineDocumentText
            size={30}
            className="cursor-pointer text-white"
          />
          <h1 className=" text-4xl select-none cursor-pointer  text-white">
            Notes
          </h1>
        </div>
      )}
      <div onClick={() => setDark(!dark)} className="cursor-pointer text-white">
        {dark ? <BsMoonStars size={25} /> : <BsSun size={25} />}
      </div>
    </div>
  );
};

export default Header;

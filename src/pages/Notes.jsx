import React from "react";
import { useNotesContext } from "../context/Context";
import { AiOutlinePlus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

const Notes = () => {
  const { dark } = useNotesContext();
  return (
    <div
      className={`h-full ${
        dark ? " text-white  bg-gray-800" : "text-black bg-teal-50"
      } duration-300 p-4  `}
    >
      <button className="h-16 w-16  fixed bottom-14 right-10 text-white flex justify-center items-center bg-green-500  rounded-full z-50">
        <AiOutlinePlus size={40} />
      </button>
      {/* <div className="grid grid-cols-2 grid-flow-row gap-2 "> */}
      <div className="table  justify-around  flex-wrap gap-2 ">
        <div
          className={`rounded hover:bg-gray-400  col-span-1 cursor-pointer ${
            dark ? "bg-gray-500" : "bg-teal-200"
          } bg-gray-500 py-2 px-5 my-2 `}
        >
          <div className="flex items-center justify-between ">
            <h3 className="text-2xl my-3">Title</h3>
            <div className="flex items-center gap-3">
              <FaRegEdit size={25} className={` ${dark? "text-teal-300": "text-gray-800"} cursor-pointer`} />
              <MdDelete size={30} className={`text-rose-500 cursor-pointer`} />
            </div>
          </div>
          <p className="my-3">
            Loresssm ipsum dolor sit amet consectetur, adipisicing elit.
            Blanditiis, sit?Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Similique, quos quaerat doloremque natus minus et. In deleniti
            mollitia aperiam qui!
          </p>
          <p className="text-sm text-end">3-Jan-2023</p>
        </div>
        <div
          className={`rounded hover:bg-gray-400  col-span-1 cursor-pointer ${
            dark ? "bg-gray-500" : "bg-teal-200"
          } bg-gray-500 py-2 px-5 my-2 `}
        >
          <div className="flex items-center justify-between ">
            <h3 className="text-2xl my-3">Titlesddsdsd dcsdfsd dsda sdsadsd</h3>
            <div className="flex items-center gap-3">
              <FaRegEdit size={25} className={` ${dark? "text-teal-300": "text-gray-800"} cursor-pointer`} />
              <MdDelete size={30} className={`text-rose-500 cursor-pointer`} />
            </div>
          </div>
          <p className="my-3">
            Loresssm ipsum dolor sit amet consectetur, adipisicing elit.
            Blanditiis, sit?Lor
          </p>
          <p className="text-sm text-end">3-Jan-2023</p>
        </div>
        <div
          className={`rounded hover:bg-gray-400  col-span-1 cursor-pointer ${
            dark ? "bg-gray-500" : "bg-teal-200"
          } bg-gray-500 py-2 px-5 my-2 `}
        >
          <div className="flex items-center justify-between ">
            <h3 className="text-2xl my-3">Title</h3>
            <div className="flex items-center gap-3">
              <FaRegEdit size={25} className={` ${dark? "text-teal-300": "text-gray-800"} cursor-pointer`} />
              <MdDelete size={30} className={`text-rose-500 cursor-pointer`} />
            </div>
          </div>
          <p className="my-3">
            Loresssm ipsum dolor sit amet consectetur, adipisicing elit.
            Blanditiis, sit?Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Similique, quos quaerat doloremque natus minus et. In deleniti
            mollitia aperiam qui!
          </p>
          <p className="text-sm text-end">3-Jan-2023</p>
        </div>
        
      </div>
    </div>
  );
};

export default Notes;

import React from "react";
import { useNotesContext } from "../context/Context";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

const SingleNote = ({ details }) => {
  const { dark, deleteNote,  } = useNotesContext();
  
  const { id, note, date, title } = details;
  return (
    <div
      key={id}
      className={`  rounded select-none  col-span-1 cursor-pointer ${
        dark ? "bg-gray-500 " : "bg-teal-200 shadow-gray-300"
      } bg-gray-500 py-2 px-5 my-2 select-none  shadow-md `}
    >
      <div className="flex items-center justify-between ">
        <h3 className="text-2xl my-3">{title.length > 25 ? title.substring(0,25)+"...": title }</h3>
        <div className="flex items-center gap-3">
          <FaRegEdit
            size={25}
            className={` ${
              dark ? "text-teal-300" : "text-gray-800"
            } cursor-pointer`}
          />
          <MdDelete size={30} onClick={()=>deleteNote(id)} className={`text-rose-500 cursor-pointer`} />
        </div>
      </div>
      <p className="my-3">{note}</p>
      <p className="text-sm text-end">{date}</p>
    </div>
  );
};

export default SingleNote;

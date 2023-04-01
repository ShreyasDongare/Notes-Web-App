import React from "react";
import { useNotesContext } from "../context/Context";
import { AiOutlinePlus } from "react-icons/ai";

import SingleNote from "../components/SingleNote";
import { Link } from "react-router-dom";

const Notes = () => {
  const { dark, notes, toggleBackButton } = useNotesContext();
  return (
    <div
      className={`py-5 ${
        dark ? " text-white bg-gray-800" : "text-black bg-teal-50"
      } duration-300 p-4 `}
    >
      <Link
        to="/create-notes"
        onClick={() => toggleBackButton()}
        className={`${
          !notes.length ? "animate-bounce" : ""
        } h-[4.5rem] w-[4.5rem]  fixed bottom-14 right-10 sm:right-[12.5rem] md:right-[15rem] lg:right-[23rem] xl:right-[29rem] 2xl:right-[40rem] text-white flex justify-center items-center bg-green-500  rounded-full z-50`}
      >
        <AiOutlinePlus size={40} />
      </Link>

      <div className=" flex flex-col  ">
        {!notes.length ? (
          <div className="h-[500px] animate-pulse flex items-center justify-center text-xl text-gray-500 ">
            Click on "+" button to add notes
          </div>
        ) : (
          notes.map((note) => {
            return <SingleNote key={note.id} details={note} />;
          })
        )}
      </div>
    </div>
  );
};

export default Notes;

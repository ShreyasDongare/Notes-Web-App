import React, { useEffect, useState } from "react";
import { useNotesContext } from "../context/Context";
import { AiOutlineCheck } from "react-icons/ai";

const CreateNotes = () => {
  const {
    dark,
    toggleBackButton,
    handleSubmit,
    title,
    setTitle,
    textNote,
    setTextNote,
    notes,
  } = useNotesContext();
  

  return (
    <div
      className={` ${
        dark ? " text-white  bg-gray-800" : "text-black bg-teal-50"
      } duration-300 p-2`}
    >
      <button
        className={` h-[4.5rem] w-[4.5rem]  fixed bottom-14 right-10 sm:right-[12.5rem] md:right-[15rem] lg:right-[23rem] xl:right-[29rem] 2xl:right-[40rem] text-white flex justify-center items-center bg-green-500  rounded-full z-50`}
      >
        <span onClick={handleSubmit}>
          <AiOutlineCheck size={35} />
        </span>
      </button>

      <div>
        <form
          action=""
          onSubmit={handleSubmit}
          className="flex  flex-col  gap-4"
        >
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title..."
            spellCheck="false"
            className={`${
              dark ? " bg-gray-700" : "bg-teal-200"
            } outline-none w-full px-3 py-3 text-4xl rounded-md capitalize `}
          />
          <textarea
            name=""
            id=""
            value={textNote}
            onChange={(e) => setTextNote(e.target.value)}
            spellCheck="false"
            rows={20}
            placeholder="Enter your note here"
            className="bg-transparent scrollbar-hide w-full px-3 py-3 text-xl rounded-md outline-none resize-none capitalize"
          ></textarea>
        </form>
      </div>
    </div>
  );
};

export default CreateNotes;

import React, { useState } from "react";
import { useNotesContext } from "../context/Context";
import { AiOutlineCheck } from "react-icons/ai";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditNotes = () => {
  const urlId = useParams();
  const { dark, notes, setNotes, setIsCreate } = useNotesContext();
  const editingNote = notes.filter((note) => note.id === urlId.id);
  const [editTitle, setEditTitle] = useState(editingNote[0].title);
  const [editNote, setEditNote] = useState(editingNote[0].note);
  const navigate = useNavigate();

  const handleEdit = () => {
    console.log("called");
    const newNotes = notes.map((note) => {
      if (note.id === editingNote[0].id) {
        return { ...editingNote[0], title: editTitle, note: editNote };
      } else {
        return note;
      }
    });
    console.log(newNotes);
    setNotes(newNotes);
    navigate("/");
    setIsCreate(false);
  };

  return (
    <div
      className={` ${
        dark ? " text-white  bg-gray-800" : "text-black bg-teal-50"
      } duration-300 p-2`}
    >
      <button
        className={` h-[4.5rem] w-[4.5rem]  fixed bottom-14 right-10 sm:right-[12.5rem] md:right-[15rem] lg:right-[23rem] xl:right-[29rem] 2xl:right-[40rem] text-white flex justify-center items-center bg-green-500  rounded-full z-50`}
      >
        <span onClick={handleEdit}>
          <AiOutlineCheck size={35} />
        </span>
      </button>

      <div>
        <form action="" onSubmit={handleEdit} className="flex  flex-col  gap-4">
          <input
            type="text"
            placeholder="Title..."
            onChange={(e) => setEditTitle(e.target.value)}
            value={editTitle}
            spellCheck="false"
            className={`${
              dark ? " bg-gray-700" : "bg-teal-200"
            } outline-none w-full px-3 py-3 text-4xl rounded-md capitalize `}
          />
          <textarea
            name=""
            id=""
            spellCheck="false"
            onChange={(e) => setEditNote(e.target.value)}
            value={editNote}
            rows={20}
            placeholder="Enter your note here"
            className="bg-transparent scrollbar-hide w-full px-3 py-3 text-xl rounded-md outline-none resize-none capitalize"
          ></textarea>
        </form>
      </div>
    </div>
  );
};

export default EditNotes;

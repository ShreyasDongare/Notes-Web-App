import React from "react";
import { useNotesContext } from "../context/Context";

const CreateNotes = () => {
  const {dark} =useNotesContext()
  return (
    <div
      className={`h-full ${
        dark ? " text-white  bg-gray-800" : "text-black bg-teal-50"
      } duration-300`}
    >
      CreateNotes
    </div>
  );
};

export default CreateNotes;

import { createContext, useContext, useState } from "react";
import { data } from "../data";

const NotesContext = createContext();

const NotesProvider = ({ children }) => {
  const [dark, setDark] = useState(true);
  const [notes, setNotes] = useState(data)

  const deleteNote=(id)=>{
    setNotes(notes.filter((note)=> note.id !==id))
  }

  return (
    <NotesContext.Provider value={{ dark, setDark, notes, deleteNote }}>
      {children}
    </NotesContext.Provider>
  );
};

const useNotesContext = () => useContext(NotesContext);

export { useNotesContext, NotesProvider };

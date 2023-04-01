import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { v4 as uuidv4 } from "uuid";

const NotesContext = createContext();

const NotesProvider = ({ children }) => {
  
  const [dark, setDark] = useState(true);
  const [isCreate, setIsCreate] = useState(false);
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes")) || [])
  const [title, setTitle] = useState("");
  const [textNote, setTextNote] = useState("");
  const navigate = useNavigate();


  useEffect(()=>{
localStorage.setItem("notes", JSON.stringify(notes))
  },[notes])
  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (title && textNote) {
      const note = {
        id: uuidv4(),
        date: new Date().toLocaleString(),
        title,
        note: textNote,
      };
      setNotes((prevNotes) => [note, ...prevNotes]);
      setTitle("");
      setTextNote("");
      setIsCreate(false)
      //navigte
      navigate("/");
    }
  };

  const toggleBackButton = () => {
    setIsCreate(!isCreate);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <NotesContext.Provider
      value={{
        dark,
        setDark,
        notes,
        deleteNote,
        toggleBackButton,
        isCreate,
        handleSubmit,
        title,
        setTitle,
        textNote,
        setTextNote,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};

const useNotesContext = () => useContext(NotesContext);

export { useNotesContext, NotesProvider };

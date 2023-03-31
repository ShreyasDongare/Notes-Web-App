import { createContext, useContext, useState } from "react";

const NotesContext = createContext();

const NotesProvider = ({ children }) => {

  const [dark, setDark] = useState(true);

  return (
    <NotesContext.Provider value={{dark, setDark}}>
      {children}
    </NotesContext.Provider>
  );
};

const useNotesContext = () => useContext(NotesContext);

export { useNotesContext, NotesProvider };

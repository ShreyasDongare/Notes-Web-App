import React from "react";
import { useNotesContext } from "../context/Context";

const ErrorPage = () => {
  const { dark } = useNotesContext();
  return (
    <div
      className={`h-full ${
        dark ? " text-white  bg-gray-800" : "text-black bg-teal-50"
      } duration-300`}
    >
      Somenthing went wrong
    </div>
  );
};

export default ErrorPage;

import React, { useState } from 'react'
import { Outlet } from 'react-router';
import Header from './components/Header';
import { useNotesContext } from './context/Context';

const  App = () => {
  const {dark} = useNotesContext() 




  return (
    <main
      className={` m-auto w-full   sm:w-96 md:w-96 lg:w-96 xl:w-96 h-screen ${
        dark ? " text-white  bg-gray-800" : "text-black bg-teal-50"
      }  duration-300 overflow-scroll scrollbar-hide `}
    >
      <Header />
      <Outlet />
    </main>
  );
}

export default  App
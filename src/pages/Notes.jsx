import React from "react";
import { useNotesContext } from "../context/Context";
import { AiOutlinePlus } from "react-icons/ai";

const Notes = () => {
  const { dark } = useNotesContext();
  return (
    <div
      className={`h-full ${
        dark ? " text-white  bg-gray-800" : "text-black bg-teal-50"
      } duration-300 p-5 `}
    >
      <button className="h-20 w-20 fixed bottom-14 right-10 flex justify-center items-center bg-green-500  rounded-full z-50">
        <AiOutlinePlus size={40} />
      </button>
      <div className="flex justify-evenly flex-wrap gap-2 ">
        <div className="rounded  w-[48%]  bg-gray-500 p-3 ">
          <h3 className="text-xl my-3">Title</h3>
          <p className="my-3">
            Loresssm ipsum dolor sit amet consectetur, adipisicing elit.
            Blanditiis, sit?
          </p>
          <p>3-Jan-2023</p>
        </div>

        <div className="rounded w-[48%]  bg-gray-500 p-3">
          <h3 className="text-xl my-3">Title</h3>
          <p className="my-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Blanditiis, sit?
          </p>
          <p>3-Jan-2023</p>
        </div>
        <div className="rounded  w-[48%]  bg-gray-500 p-3 ">
          <h3 className="text-xl my-3">Title</h3>
          <p className="my-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Blanditiis, sit?
          </p>
          <p>3-Jan-2023</p>
        </div>

        <div className="rounded w-[48%]  bg-gray-500 p-3">
          <h3 className="text-xl my-3">Title</h3>
          <p className="my-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Blanditiis, sit?
          </p>
          <p>3-Jan-2023</p>
        </div>
        <div className="rounded  w-[48%]  bg-gray-500 p-3 ">
          <h3 className="text-xl my-3">Title</h3>
          <p className="my-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Blanditiis, sit?
          </p>
          <p>3-Jan-2023</p>
        </div>

        <div className="rounded w-[48%]  bg-gray-500 p-3">
          <h3 className="text-xl my-3">Title</h3>
          <p className="my-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Blanditiis, sit?
          </p>
          <p>3-Jan-2023</p>
        </div>
        <div className="rounded  w-[48%]  bg-gray-500 p-3 ">
          <h3 className="text-xl my-3">Title</h3>
          <p className="my-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Blanditiis, sit?
          </p>
          <p>3-Jan-2023</p>
        </div>

        <div className="rounded w-[48%]  bg-gray-500 p-3">
          <h3 className="text-xl my-3">Title</h3>
          <p className="my-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Blanditiis, sit?
          </p>
          <p>3-Jan-2023</p>
        </div>
        <div className="rounded  w-[48%]  bg-gray-500 p-3 ">
          <h3 className="text-xl my-3">Title</h3>
          <p className="my-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Blanditiis, sit?
          </p>
          <p>3-Jan-2023</p>
        </div>

        <div className="rounded w-[48%]  bg-gray-500 p-3">
          <h3 className="text-xl my-3">Title</h3>
          <p className="my-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Blanditiis, sit?
          </p>
          <p>3-Jan-2023</p>
        </div>
        <div className="rounded  w-[48%]  bg-gray-500 p-3 ">
          <h3 className="text-xl my-3">Title</h3>
          <p className="my-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Blanditiis, sit?
          </p>
          <p>3-Jan-2023</p>
        </div>

        <div className="rounded w-[48%]  bg-gray-500 p-3">
          <h3 className="text-xl my-3">Title</h3>
          <p className="my-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Blanditiis, sit?
          </p>
          <p>3-Jan-2023</p>
        </div>
        <div className="rounded  w-[48%]  bg-gray-500 p-3 ">
          <h3 className="text-xl my-3">Title</h3>
          <p className="my-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Blanditiis, sit?
          </p>
          <p>3-Jan-2023</p>
        </div>

        <div className="rounded w-[48%]  bg-gray-500 p-3">
          <h3 className="text-xl my-3">Title</h3>
          <p className="my-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Blanditiis, sit?
          </p>
          <p>3-Jan-2023</p>
        </div>
        <div className="rounded  w-[48%]  bg-gray-500 p-3 ">
          <h3 className="text-xl my-3">Title</h3>
          <p className="my-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Blanditiis, sit?
          </p>
          <p>3-Jan-2023</p>
        </div>

        <div className="rounded w-[48%]  bg-gray-500 p-3">
          <h3 className="text-xl my-3">Title</h3>
          <p className="my-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Blanditiis, sit?
          </p>
          <p>3-Jan-2023</p>
        </div>
        <div className="rounded  w-[48%]  bg-gray-500 p-3 ">
          <h3 className="text-xl my-3">Title</h3>
          <p className="my-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Blanditiis, sit?
          </p>
          <p>3-Jan-2023</p>
        </div>

        <div className="rounded w-[48%]  bg-gray-500 p-3">
          <h3 className="text-xl my-3">Title</h3>
          <p className="my-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Blanditiis, sit?
          </p>
          <p>3-Jan-2023</p>
        </div>
        <div className="rounded  w-[48%]  bg-gray-500 p-3 ">
          <h3 className="text-xl my-3">Title</h3>
          <p className="my-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Blanditiis, sit?
          </p>
          <p>3-Jan-2023</p>
        </div>

        <div className="rounded w-[48%]  bg-gray-500 p-3">
          <h3 className="text-xl my-3">Title</h3>
          <p className="my-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Blanditiis, sit?
          </p>
          <p>3-Jan-2023</p>
        </div>
        <div className="rounded  w-[48%]  bg-gray-500 p-3 ">
          <h3 className="text-xl my-3">Title</h3>
          <p className="my-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Blanditiis, sit?
          </p>
          <p>3-Jan-2023</p>
        </div>

        <div className="rounded w-[48%]  bg-gray-500 p-3">
          <h3 className="text-xl my-3">Title</h3>
          <p className="my-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Blanditiis, sit?
          </p>
          <p>3-Jan-2023</p>
        </div>
        <div className="rounded  w-[48%]  bg-gray-500 p-3 ">
          <h3 className="text-xl my-3">Title</h3>
          <p className="my-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Blanditiis, sit?
          </p>
          <p>3-Jan-2023</p>
        </div>

        <div className="rounded w-[48%]  bg-gray-500 p-3">
          <h3 className="text-xl my-3">Title</h3>
          <p className="my-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Blanditiis, sit?
          </p>
          <p>3-Jan-2023</p>
        </div>
        <div className="rounded  w-[48%]  bg-gray-500 p-3 ">
          <h3 className="text-xl my-3">Title</h3>
          <p className="my-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Blanditiis, sit?
          </p>
          <p>3-Jan-2023</p>
        </div>

        <div className="rounded w-[48%]  bg-gray-500 p-3">
          <h3 className="text-xl my-3">Title</h3>
          <p className="my-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Blanditiis, sit?
          </p>
          <p>3-Jan-2023</p>
        </div>
        <div className="rounded  w-[48%]  bg-gray-500 p-3 ">
          <h3 className="text-xl my-3">Title</h3>
          <p className="my-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Blanditiis, sit?
          </p>
          <p>3-Jan-2023</p>
        </div>

        <div className="rounded w-[48%]  bg-gray-500 p-3">
          <h3 className="text-xl my-3">Title</h3>
          <p className="my-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Blanditiis, sit?
          </p>
          <p>3-Jan-2023</p>
        </div>
      </div>
    </div>
  );
};

export default Notes;

import React, { useEffect, useState } from "react";

const Course = () => {
  const [open, setOpen] = useState(false);
  const data = "https://dummyjson.com/products";

  // useEffect(() => {
  //   setTimeout(() => {
  //     setOpen(true);
  //   }, 5000);
  // }, []);
  return (
    <div>
      {open && (
        <h1 className="text-5xl font-bold p-2 text-blue-500 animate__animated animate__slideInLeft m-10">
          Ankit Singh
        </h1>
      )}
      <button
        className="text-white bg-blue-500 px-2.5 py-4 rounded-lg m-20"
        onClick={() => setOpen(!open)}
      >
        Toggle
      </button>
    </div>
  );
};

export default Course;

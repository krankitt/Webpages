import React from "react";

const Buttons = ({ children = "click me!" }) => {
  return (
    <div className="p-2">
      <button className="bg-red-500 p-2 text-white rounded">{children}</button>
    </div>
  );
};

export default Buttons;

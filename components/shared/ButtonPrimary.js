import React from "react";

const ButtonPrimary = ({ children, addClass }) => {
  return (
    <button
      className={
        "py-2 lg:py-2 px-4 lg:px-6 text-white rounded-[9px] border border-purple bg-purple hover:shadow-purple-md transition-all outline-none " +
        addClass
      }
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;

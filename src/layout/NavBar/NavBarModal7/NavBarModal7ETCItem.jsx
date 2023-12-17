import React from "react";

const NavBarModal7ETCItem = ({ name, isOn }) => {
  return (
    <div className="w-[295px] h-[38px] shrink-0 rounded-lg bg-[#F1F1F1] my-2 flex flex-row justify-between items-center px-3">
      <div className="text-sm font-semibold leading-normal">{name}</div>
      <div className="text-sm font-semibold leading-normal">
        {isOn ? "ON" : "OFF"}
      </div>
    </div>
  );
};

export default NavBarModal7ETCItem;

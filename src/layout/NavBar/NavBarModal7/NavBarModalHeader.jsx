import React from "react";

const NavBarModalHeader = ({ detail }) => {
  return (
    <div className="w-[69px] h-[69px] shrink-0 rounded-lg bg-[#F1F1F1] m-0.5 flex justify-center items-center flex-col">
      <img
        src={`${process.env.PUBLIC_URL}/assets/images/Control/Vector.png`}
        alt=""
      />
      <div className="mt-2 text-sm font-semibold leading-normal">{detail}</div>
    </div>
  );
};
export default NavBarModalHeader;

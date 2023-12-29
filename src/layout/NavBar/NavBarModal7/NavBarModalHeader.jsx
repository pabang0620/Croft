import React from "react";

const NavBarModalHeader = ({ detail, imgName }) => {
  return (
    <div className="ml-4 w-full shrink-0 rounded-lg bg-[#F1F1F1] m-0.5 flex justify-center items-center flex-col">
      <img
        src={`${process.env.PUBLIC_URL}/assets/images/Control/${imgName}`}
        alt=""
      />
      <div className="mt-2 text-sm font-semibold leading-normal">{detail}</div>
    </div>
  );
};
export default NavBarModalHeader;

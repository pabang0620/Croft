import React from "react";

const OnButton = ({ fontSize }) => {
  return (
    <div className="flex flex-row">
      <div className={`${fontSize} mt-0.5 font-semibold leading-normal mr-2`}>
        자동
      </div>
      <img
        className="w-6 h-6"
        src={`${process.env.PUBLIC_URL}/assets/images/Control/on_toggle.png`}
        alt=""
      />
    </div>
  );
};

export default OnButton;

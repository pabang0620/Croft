import React from "react";

const OffButton = () => {
  return (
    <div className="flex flex-row">
      <div className="text-xs mt-0.5 font-semibold leading-normal mr-2">
        수동
      </div>
      <img
        className="w-6 h-6"
        src={`${process.env.PUBLIC_URL}/assets/images/Control/off_toggle.png`}
        alt=""
      />
    </div>
  );
};

export default OffButton;

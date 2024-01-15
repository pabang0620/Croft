import React from 'react';

const ModalRTRIcon = () => {
  return (
    <div className="relative w-4 h-[20px] mt-0.5 mr-2">
      <img
        className="w-[10px] h-[10px] absolute top-0 left-0"
        src={`${process.env.PUBLIC_URL}/assets/images/Control/ModalMiniLight.svg`}
        alt=""
      />
      <img
        className="w-[10px] h-[10px] absolute bottom-0 right-0"
        src={`${process.env.PUBLIC_URL}/assets/images/Control/ModalMiniHumidity.svg`}
        alt=""
      />
    </div>
  );
};

export default ModalRTRIcon;

import React from 'react';

const NavBarModal7ETCItem = ({ name, isOn, disconnect, data, unit }) => {
  return (
    <div
      className={`w-[295px] h-[38px] rounded-lg ${
        disconnect ? 'bg-base300 text-base400' : 'bg-base200'
      }  my-2 flex flex-row justify-between items-center px-3`}
    >
      <div className="text-sm font-semibold leading-normal">{name}</div>
      <div
        className={`text-sm font-semibold leading-normal relative ${
          disconnect ? 'text-base400' : ''
        }`}
      >
        <div className="flex gap-3">
          {isOn ? (
            <div>
              {data} {unit}
            </div>
          ) : (
            <></>
          )}
          {isOn ? (
            <div>ON</div>
          ) : (
            <div className="text-base500 font-bold text-sm">OFF</div>
          )}
        </div>

        {disconnect ? (
          <img
            className="absolute top-[-4px] right-[120px] w-[30px] h-[30px]"
            src={`${process.env.PUBLIC_URL}/assets/images/Control/ModalDisconnect.svg`}
            alt=""
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default NavBarModal7ETCItem;

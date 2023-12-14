import React from 'react';
import { useState } from 'react';
import SideBarIcon from './SideBarIcon';

function SideBar() {
  const [closeSide, setCloseSide] = useState(true);
  const [clickedIcon, setClickedIcon] = useState('total');
  const closeLogo = '/assets/images/Layout/OnlyLogo.png';
  const openLogo = '/assets/images/Layout/CroftAndLogo.png';
  const iconName = ['home', 'greenhouse', 'sales', 'resource', 'report'];
  const menuName = [
    '대시보드',
    '온실환경',
    '매출 보고서',
    '자원사용량',
    '종합 보고서',
  ];

  return (
    <div
      className={`fixed left-0 top-0 flex flex-col bg-base600 text-white ease-in-out duration-300 h-screen cursor-pointer ${
        closeSide ? 'w-[60px]' : 'w-[220px]'
      }`}
    >
      <div className="relative w-full">
        {/* 열림 닫힘 */}
        <div
          className="absolute right-[-13px] top-[68px] w-fit h-fit bg-transparent"
          onClick={() => setCloseSide(!closeSide)}
        >
          {SideBarIcon(closeSide ? 'open' : 'close')}
        </div>
        <div className="w-full font-bold p-[14px] text-center text-[24px]">
          <img
            className="h-[32px]"
            src={`${closeSide ? closeLogo : openLogo}`}
            alt="Logo"
          />
        </div>
      </div>
      <div className="pl-2 m-2.5">
        <div
          onClick={() => setClickedIcon('total')}
          className="flex items-center gap-[17px]"
        >
          <div>{SideBarIcon('total', clickedIcon)}</div>
          {closeSide ? (
            <></>
          ) : (
            <div
              className={`whitespace-nowrap ${
                clickedIcon === 'total' ? 'text-white' : 'text-base500'
              }`}
            >
              통합 대시보드
            </div>
          )}
        </div>
      </div>

      <div
        className={`flex flex-col gap-[17px] pl-2 pt-[14px] pb-[17px] ml-2.5 mr-2.5 border-y border-[#767676] `}
      >
        {iconName.map((item, idx) => (
          <div
            onClick={() => setClickedIcon(item)}
            className="flex items-center gap-[17px] "
          >
            <div>{SideBarIcon(item, clickedIcon)}</div>
            {closeSide ? (
              <></>
            ) : (
              <div
                className={`whitespace-nowrap ${
                  clickedIcon === item ? 'text-white' : 'text-base500'
                }`}
              >
                {menuName[idx]}
              </div>
            )}
          </div>
        ))}
      </div>

      <div
        onClick={() => setClickedIcon('settings')}
        className="flex items-center gap-[17px] pl-[20px] pt-[14px]"
      >
        <div>{SideBarIcon('settings', clickedIcon)}</div>
        {closeSide ? (
          <></>
        ) : (
          <div
            className={`whitespace-nowrap ${
              clickedIcon === 'settings' ? 'text-white' : 'text-base500'
            }`}
          >
            환경설정
          </div>
        )}
      </div>
    </div>
  );
}

export default SideBar;

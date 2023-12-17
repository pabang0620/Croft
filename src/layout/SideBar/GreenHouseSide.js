import React from 'react';

const GreenHouseSide = ({ isOpen }) => {
  const tempCurrent = 'Total';
  const clickGreenHouse = [
    { id: 1, text: '온실환경 종합', route: 'Total' },
    { id: 2, text: 'RTR', route: 'RTR' },
    { id: 3, text: 'DLI', route: 'DLI' },
    { id: 4, text: 'VPD', route: 'VPD' },
    { id: 5, text: 'Photo Period', route: 'PhotoPeriod' },
  ];
  return (
    <div
      className={`w-[150px] h-full bg-[#444540] flex flex-col  gap-[17px] ease-in-out duration-300 cursor-pointer box-border ${
        isOpen ? 'max-w-[150px] pt-[157px] pl-[23px]' : 'max-w-[0px]'
      } `}
    >
      {clickGreenHouse.map((item) => (
        //현재 페이지 일 때 white로 text 설정 부분 추가
        <div
          key={item.id}
          className={`${
            tempCurrent === item.route ? 'text-white' : 'text-base500'
          } ${isOpen ? '' : 'hidden'}`}
        >
          {item.text}
        </div>
      ))}
    </div>
  );
};

export default GreenHouseSide;

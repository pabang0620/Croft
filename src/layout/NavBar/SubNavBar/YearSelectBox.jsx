import { useState } from 'react';

const YearSelectBox = ({ years, setYears }) => {
  const [yearsToggle, setYearsToggle] = useState(false); //연도 selectbox on/off check
  const yearsArray = [
    //기록이 있는 연도만 출력 array에 넣어주면 됨
    { id: 0, text: 2023 },
    { id: 1, text: 2022 },
    { id: 2, text: 2021 },
    { id: 3, text: 2020 },
  ];
  return (
    <div
      className="mr-[22px] text-accent font-normal text-xs border-b border-accent relative"
      onClick={() => setYearsToggle(!yearsToggle)}
    >
      {years}년▼
      <ul
        className={`${
          yearsToggle ? 'h-[138px]' : 'h-[0px]'
        } flex flex-col w-[82px] border-solid border-base200 rounded-[10px] items-center justify-end text-xs absolute top-[25px] bg-white right-[-20px] overflow-hidden ease-in-out duration-200`}
      >
        {yearsArray.map((item) => (
          <li
            key={item.id}
            className={`w-full flex items-center flex-grow px-[13px] hover:bg-success/[0.2] ${
              years === item.text ? 'text-accent' : 'text-info'
            }`}
            onClick={() => setYears(item.text)}
          >
            {item.text}년
          </li>
        ))}
      </ul>
    </div>
  );
};

export default YearSelectBox;

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useOutletContext } from 'react-router';

const SalesSubBar = ({ years, setYears, period, setPeriod }) => {
  const navigate = useNavigate();
  const { currentPath } = useOutletContext();

  const [yearsToggle, setYearsToggle] = useState(false); //연도 selectbox on/off check
  const yearsArray = [
    //기록이 있는 연도만 출력 array에 넣어주면 됨
    { id: 0, text: 2023 },
    { id: 1, text: 2022 },
    { id: 2, text: 2021 },
    { id: 3, text: 2020 },
  ];
  const yearArray = ['3', '5', '10'];

  //해당 연도 데이터를 보여주는 매출 보고서 페이지로 이동
  const handleToggleClick = (text) => {
    setYears(text);
    setPeriod(text);
    if (currentPath !== '/single-sales') navigate('/single-sales');
  };
  // 연간 비교 보고서 #CROFT-CRM-SINGLE-SALES > 5 years(sample) 로 이동
  const handlePeriodClick = (text) => {
    setPeriod(text);
    if (text === '3' && new Date().getFullYear().toString().slice(-2) - 19 >= 2)
      navigate('/single-sales/years/3');
    if (text === '5' && new Date().getFullYear().toString().slice(-2) - 19 >= 4)
      navigate('/single-sales/years/5');
    if (
      text === '10' &&
      new Date().getFullYear().toString().slice(-2) - 19 >= 9
    )
      navigate('/single-sales/years/10');
  };
  return (
    <div className="w-full h-[45px] pl-[29px] pt-[4px] flex items-center cursor-pointer select-none border-b-[1px] border-base400 bg-base200">
      <div className="text-lg font-bold mr-[11px]">매출 보고서</div>
      {/* selectbox/부분 */}
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
              onClick={() => handleToggleClick(item.text)}
            >
              {item.text}년
            </li>
          ))}
        </ul>
      </div>
      {/* 연간 비교 보고서 부분 */}
      <div className="flex gap-[10px] items-center">
        <div className="h-[15px] w-[1px] bg-info mt-[3px] text-sm" />
        <div className="flex gap-[23px]">
          {yearArray.map((item, idx) => (
            <div
              key={idx}
              onClick={() => handlePeriodClick(item)}
              className={`${period === item ? 'text-accent' : 'text-info'}`}
            >
              {item}년
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SalesSubBar;

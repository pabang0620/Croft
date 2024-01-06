import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SalesSubBar = ({ currentPath }) => {
  const navigate = useNavigate();

  const [container, setContainer] = useState(2023); //selectbox값 담아줌
  const [period, setPeriod] = useState(); //yearArray 값 담아줌
  const [containerToggle, setContainerToggle] = useState(false); //연도 selectbox on/off check
  const containerArray = [ //기록이 있는 연도만 출력 array에 넣어주면 됨
    { id: 0, text: 2023 },
    { id: 1, text: 2022 },
    { id: 2, text: 2021 },
    { id: 3, text: 2020 },
  ];
  const yearArray = ['3년', '5년', '10년'];

  //해당 연도 데이터를 보여주는 매출 보고서 페이지로 이동
  const handleToggleClick = (text) => {
    setContainer(text);
    setPeriod(text);
    if (currentPath === '/single-sales/5years') navigate('/single-sales');
  };
  // 연간 비교 보고서 #CROFT-CRM-SINGLE-SALES > 5 years(sample) 로 이동
  const handlePeriodClick = (text) => {
    setPeriod(text);
    if (text === '5년') navigate('/single-sales/5years');
  };
  return (
    <div className="w-full h-[45px] pl-[29px] pt-[4px] flex items-center cursor-pointer select-none border-b-[1px] border-base400 bg-base200">
      <div className="text-lg font-bold mr-[11px]">매출 보고서</div>
      {/* selectbox/부분 */}
      <div
        className="mr-[22px] text-accent font-normal text-xs border-b border-accent relative"
        onClick={() => setContainerToggle(!containerToggle)}
      >
        {container}년▼
        <ul
          className={`${
            containerToggle ? 'h-[138px]' : 'h-[0px]'
          } flex flex-col w-[82px] border-solid border-base200 rounded-[10px] items-center justify-end text-xs absolute top-[25px] bg-white right-[-20px] overflow-hidden ease-in-out duration-200`}
        >
          {containerArray.map((item) => (
            <li
              key={item.id}
              className={`w-full flex items-center flex-grow px-[13px] hover:bg-success/[0.2] ${
                container === item.text ? 'text-accent' : 'text-info'
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
          {yearArray.map((item) => (
            <div
              onClick={() => handlePeriodClick(item)}
              className={`${period === item ? 'text-accent' : 'text-info'}`}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SalesSubBar;

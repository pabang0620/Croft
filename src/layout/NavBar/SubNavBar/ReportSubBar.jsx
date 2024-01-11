import { useState, useEffect } from 'react';
import GlobalReportCalendar from '../../../component/DatePicker/GlobalReportCalendar';

const ReportSubBar = ({ type, setContainer, container, setTitle }) => {
  const [containerToggle, setContainerToggle] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const containerArray = [
    { id: 0, text: '옥수수 재배 컨테이너' },
    { id: 1, text: '호박 재배 컨테이너' },
    { id: 2, text: '양배추 재배 컨테이너' },
    { id: 3, text: '고구마 재배 컨테이너' },
    { id: 4, text: '감자 재배 컨테이너' },
  ];
  useEffect(() => {
    setTitle(container);
  }, []);
  return (
    <div className="w-full h-[45px] pl-[29px] pt-[4px] flex items-center cursor-pointer select-none border-b-[1px] border-base400 bg-base200">
      <div className="text-lg font-bold mr-[11px]">종합 보고서</div>
      {type === 'global' ? (
        <div
          className="mr-[22px] text-accent font-normal text-xs border-b border-accent relative"
          onClick={() => setContainerToggle(!containerToggle)}
        >
          {container}▼
          <ul
            className={`${
              containerToggle ? 'h-[138px]' : 'h-[0px]'
            } flex flex-col w-[145px] border-solid border-base200 rounded-[10px] items-center justify-end text-xs absolute top-[25px] bg-white right-[-5px] overflow-hidden ease-in-out duration-200`}
          >
            {containerArray.map((item) => (
              <li
                key={item.id}
                className="w-[145px] flex items-center flex-grow px-[13px] hover:bg-success/[0.2]"
                onClick={() => {
                  setContainer(item.text);
                  setTitle(item.text);
                }}
              >
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <></>
      )}

      <GlobalReportCalendar
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
    </div>
  );
};

export default ReportSubBar;

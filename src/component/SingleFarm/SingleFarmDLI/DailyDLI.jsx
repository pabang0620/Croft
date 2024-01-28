import { useState } from 'react';
import { format, startOfWeek } from 'date-fns';
import PickPeriodDate2 from '../../utils/DatePicker/PickPeriodDate2';
import BarMonthChart from '../../Charts/BarCharts/BarMonthChart';

const DailyDLI = () => {
  const [startDate, setStartDate] = useState(startOfWeek(new Date()));
  const [endDate, setEndDate] = useState(new Date());
  const [specificDate, setSpecificDate] = useState('이번주');

  return (
    <div className="flex flex-col w-full h-full justify-between px-[17px] py-[12px] select-none">
      {/* 제목 부분 */}
      <div className="flex justify-between mb-[26px]">
        <div className="flex gap-1 text-lg">
          <div className="font-bold">일자별 DLI</div>
          {/* <div className="font-normal">
            {format(startDate, 'MM.dd')} ~ {format(endDate, 'MM.dd')}
          </div> */}
        </div>
      </div>
      {/* 차트 부분 */}
      <div className="flex flex-col gap-[31px] w-full  h-[380px] px-[3.3125rem] relative">
        {/* 권장 수치 기입 부분 어떤것을 원하는지 모르겠어서 다음과 같이 임의로 설정 */}
        <div className="absolute top-[15%] h-full w-[150px]">
          <div className="relative h-full w-full flex flex-col">
            <div className="absolute top-0 flex flex-col">
              <div className="text-sm mb-1">과공급</div>
            </div>
            <div className="absolute top-[25%]  w-[150px] pt-[10px] border-t border-base400 flex flex-col">
              <div className="text-sm mb-1">권장 DLI</div>
            </div>
            <div className="absolute top-[50%]  w-[150px] pt-[10px] border-t border-base400 flex flex-col">
              <div className="text-sm mb-1">광부족</div>
            </div>
          </div>
        </div>
        <BarMonthChart queryname="dli" />
      </div>
      {/* 하단의 날짜 선택 부분 */}
      <div className="pb-[6px] pt-[2.37rem]">
        <PickPeriodDate2
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
          specificDate={specificDate}
          setSpecificDate={setSpecificDate}
        />
      </div>
    </div>
  );
};

export default DailyDLI;

import { useState } from 'react';
import { format, startOfWeek } from 'date-fns';
import PickPeriodDate2 from '../../utils/DatePicker/PickPeriodDate2';
import BarMonthChart from '../../Charts/BarCharts/BarMonthChart';

const DailyPP = () => {
  const [startDate, setStartDate] = useState(startOfWeek(new Date()));
  const [endDate, setEndDate] = useState(new Date());
  const [specificDate, setSpecificDate] = useState('이번주');

  return (
    <div className="flex flex-col w-full h-full justify-between px-[17px] py-[12px] select-none">
      {/* 제목 부분 */}
      <div className="flex justify-between mb-[26px]">
        <div className="flex gap-1 text-lg">
          <div className="font-bold">일자별 PHOTOPERIOD</div>
          {/* <div className="font-normal">
            {format(startDate, 'MM.dd')} ~ {format(endDate, 'MM.dd')}
          </div> */}
        </div>
      </div>
      {/* 차트 부분 */}
      <div className="w-[90%] h-[380px] flex items-center justify-center">
        <BarMonthChart queryname="photo_period" />
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

export default DailyPP;

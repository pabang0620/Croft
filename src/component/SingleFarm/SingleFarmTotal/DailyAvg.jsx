import { useState, useEffect } from 'react';
import { format, startOfWeek } from 'date-fns';
import PickPeriodDate from '../../utils/DatePicker/PickPeriodDate';
import LineChart from '../../Charts/LineCharts/LineChart';
import Line2Chart from '../../Charts/LineCharts/Line2Chart';
import Line4Chart from '../../Charts/LineCharts/Line4Chart';

const DailyAvg = () => {
  const [startDate, setStartDate] = useState(startOfWeek(new Date()));
  const [endDate, setEndDate] = useState(new Date());
  const [specificDate, setSpecificDate] = useState('이번주');

  return (
    <div className="flex flex-col w-full h-full justify-between px-[17px] py-[12px] select-none">
      {/* 제목 부분 */}
      <div className="flex justify-between mb-[26px]">
        <div className="flex gap-1 text-lg">
          <div className="font-bold">일자별 평균</div>
          <div className="font-normal">
            {format(startDate, 'MM.dd')} ~ {format(endDate, 'MM.dd')}
          </div>
        </div>
      </div>
      {/* 차트 부분 */}
      <div className="flex flex-col gap-[31px] pr-[51px] w-full flex-wrap">
        <div className="flex gap-[48px] flex-grow w-full">
          {/* 평균온도 그래프인데 모양이 조금 다르네 ?  */}
          <div className="w-[45%] h-full">
            <Line4Chart ChartName="" />
          </div>
          <div className="w-[45%] min-h-full">
            <Line2Chart
              ChartName="평균 습도"
              APIoption="199"
              APIoption2="224"
            />
          </div>
        </div>
        <div className="flex gap-[48px] flex-grow min-h-[20rem]">
          <div className="w-[45%] min-h-full">
            <LineChart ChartName="평균 DLI" APIoption="220" />
          </div>
          <div className="w-[45%] min-h-full">
            <LineChart ChartName="평균 CO2 농도" APIoption="225" />
          </div>
        </div>
      </div>
      {/* 하단의 날짜 선택 부분 */}
      <div className="pb-[6px] pt-[2.37rem]">
        <PickPeriodDate
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

export default DailyAvg;

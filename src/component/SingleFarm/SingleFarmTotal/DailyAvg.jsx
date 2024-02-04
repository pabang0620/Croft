import { useState } from 'react';
import { format, subDays } from 'date-fns';
import PickPeriodDate2 from '../../utils/DatePicker/PickPeriodDate2';
import LineChart from '../../Charts/LineCharts/LineChart';
import Line2Chart from '../../Charts/LineCharts/Line2Chart';
// import Line4Chart from '../../Charts/LineCharts/Line4Chart';
import MainBarLine2Chart from '../../Charts/MixCharts/MainBarLine2Chart';

const DailyAvg = () => {
  const [startDate, setStartDate] = useState(subDays(new Date(), 7));
  const [endDate, setEndDate] = useState(new Date());
  const [specificDate, setSpecificDate] = useState('지난 7일');

  return (
    <div className="flex flex-col w-full h-full justify-between px-[17px] py-[12px] select-none">
      {/* 제목 부분 */}
      <div className="flex justify-between mb-[26px]">
        <div className="flex gap-1 text-lg">
          <div className="font-bold">일자별 평균</div>
          <div className="font-normal flex gap-1">
            <div>{startDate ? format(startDate, 'MM.dd') : ''}</div>
            <div>~</div>
            <div>{endDate ? format(endDate, 'MM.dd') : ''}</div>
          </div>
        </div>
      </div>
      {/* 차트 부분 */}
      <div className="flex flex-col gap-[31px] pr-[51px] w-full flex-wrap">
        <div className="flex gap-[48px] flex-grow min-h-[20rem]">
          {/* 평균온도 그래프인데 모양이 조금 다르네 ?  */}
          <div className="w-[50%] h-full">
            <MainBarLine2Chart
              key="7"
              ChartName="평균 온도"
              locate="avg"
              startDate={
                startDate
                  ? format(startDate, 'yyyy-MM-dd')
                  : format(new Date(), 'yyyy-MM-dd')
              }
              endDate={
                endDate
                  ? format(endDate, 'yyyy-MM-dd')
                  : format(new Date(), 'yyyy-MM-dd')
              }
            />
          </div>
          {/* <div className="w-[50%] h-full">
            <Line4Chart ChartName="" />
          </div> */}
          <div className="w-[50%] min-h-full">
            <Line2Chart
              ChartName="평균 습도"
              APIoption="199"
              APIoption2="224"
              locate="avg"
              startDate={
                startDate
                  ? format(startDate, 'yyyy-MM-dd')
                  : format(new Date(), 'yyyy-MM-dd')
              }
              endDate={
                endDate
                  ? format(endDate, 'yyyy-MM-dd')
                  : format(new Date(), 'yyyy-MM-dd')
              }
            />
          </div>
        </div>
        <div className="flex gap-[48px] flex-grow min-h-[20rem]">
          <div className="w-[50%] min-h-full">
            <LineChart
              ChartName="평균 DLI"
              APIoption="220"
              locate="avg"
              startDate={
                startDate
                  ? format(startDate, 'yyyy-MM-dd')
                  : format(new Date(), 'yyyy-MM-dd')
              }
              endDate={
                endDate
                  ? format(endDate, 'yyyy-MM-dd')
                  : format(new Date(), 'yyyy-MM-dd')
              }
            />
          </div>
          <div className="w-[50%] min-h-full">
            <LineChart
              ChartName="평균 CO2 농도"
              APIoption="225"
              locate="avg"
              startDate={
                startDate
                  ? format(startDate, 'yyyy-MM-dd')
                  : format(new Date(), 'yyyy-MM-dd')
              }
              endDate={
                endDate
                  ? format(endDate, 'yyyy-MM-dd')
                  : format(new Date(), 'yyyy-MM-dd')
              }
            />
          </div>
        </div>
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

export default DailyAvg;

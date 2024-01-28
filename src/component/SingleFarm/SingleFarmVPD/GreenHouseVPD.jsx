import { useState } from 'react';
import { format } from 'date-fns';
import PickSingleDate from '../../utils/DatePicker/PickSingleDate';
import VPDChart from '../../Charts/Measurement/VPDChart';
import Line4Chart from '../../Charts/LineCharts/Line4Chart';
import Measurement from '../../Charts/Measurement/Measurement';

const GreenHouseVPD = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="flex flex-col w-full h-full px-[17px] py-[12px] select-none">
      {/* 제목 부분 */}
      <div className="flex justify-between mb-[26px]">
        <div className="flex gap-1 text-lg">
          <div className="font-bold">VPD</div>
          <div className="font-normal">{format(date, 'MM.dd HH:mm')}</div>
        </div>
      </div>
      {/* 차트 부분 */}
      <div className="flex pr-[51px] mt-[35px] gap-[40px]">
        <div className="flex flex-col">
          <div className="flex gap-[42px]">
            <div className="mt-[-1rem] flex flex-col text-sm min-w-[56px]">
              <div>VPD</div>
              <div className="text-lg font-bold">1.4</div>
            </div>
            <div className="w-[320px] h-[274px] bg-white rounded-[10px]">
              <VPDChart />
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex gap-[42px]">
            <div className="mt-[-1rem] flex flex-col text-sm min-w-[56px]">
              <div>온도</div>
              <div className="text-lg font-bold">22℃</div>
            </div>
            <div className="w-[650px] h-[350px] bg-white rounded-[10px]">
              <Line4Chart ChartName="평균 온도" dataoff="true" />
            </div>
          </div>
          <div>
            <Measurement />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex gap-[42px]">
            <div className="mt-[-1rem] flex flex-col text-sm min-w-[56px]">
              <div>습도</div>
              <div className="text-lg font-bold">55%</div>
            </div>
            <div className="w-[650px] h-[350px] bg-white rounded-[10px]">
              <Line4Chart ChartName="평균 온도" />
            </div>
          </div>
          <div>
            <Measurement />
          </div>
        </div>
      </div>
      {/* 하단의 날짜 선택 부분 */}
      <PickSingleDate selectedDate={date} setSelectedDate={setDate} />
    </div>
  );
};

export default GreenHouseVPD;

import { useState } from 'react';
import { format } from 'date-fns';
import PickSingleDate from '../../utils/DatePicker/PickSingleDate';
import MainSliderDiv from '../../Graphs/MainSliderDiv';
import Line4Chart from '../../Charts/LineCharts/Line4Chart';
import Bar2Line1Chart from '../../Charts/MixCharts/Bar2Line1Chart';

const GreenHouseDLI = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="flex flex-col w-full h-full px-[17px] py-[12px] justify-between select-none">
      {/* 제목 부분 */}
      <div className="flex justify-between mb-[26px]">
        <div className="flex gap-1 text-lg">
          <div className="font-bold">DLI</div>
          <div className="font-normal">{format(date, 'MM.dd HH:mm')}</div>
        </div>
      </div>
      {/* 차트 부분 */}
      <div className="flex pr-[51px]">
        <div className="flex">
          <div className="flex gap-[42px] flex-grow">
            <div className="mt-[-1rem] flex flex-col text-sm min-w-[56px]">
              <div>DLI</div>
              <div className="text-lg font-bold">8.4</div>
            </div>
            <div className="w-[798px] h-[350px] bg-white rounded-[10px]">
              {/* dlicurrnt로 바꿔줘야함??? */}
              <Bar2Line1Chart />
            </div>
          </div>
          <div className="flex gap-[23px] flex-grow">
            <div className="mt-[-1rem] flex flex-col text-sm min-w-[56px]">
              <div>온도</div>
              {/* <div className="drop-shadow-md text-lg">22℃</div> */}
              <div className="text-lg font-bold">22℃</div>
            </div>
            <div className="w-full h-full min-w-[29.125rem] min-h-[21.1875rem]">
              {/* dataoff 를 넘겨주면 vent와 heat가 안뜸 */}
              <Line4Chart ChartName="평균 온도" dataoff="true" />
            </div>
          </div>
        </div>
      </div>
      {/* 하단의 날짜 선택 부분 */}
      <PickSingleDate selectedDate={date} setSelectedDate={setDate} />
    </div>
  );
};

export default GreenHouseDLI;

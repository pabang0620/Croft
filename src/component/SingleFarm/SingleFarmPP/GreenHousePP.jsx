import { useState } from 'react';
import { format } from 'date-fns';
import PickSingleDate from '../../utils/DatePicker/PickSingleDate';
import MainSliderDiv from '../../Graphs/MainSliderDiv';
import Line4Chart from '../../Charts/LineCharts/Line4Chart';
import Bar2Line1Chart from '../../Charts/MixCharts/Bar2Line1Chart';
import BarMonthChart from '../../Charts/BarCharts/BarMonthChart';

const GreenHousePP = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div className="flex flex-col w-full h-full px-[17px] py-[12px] justify-between select-none">
      {/* 제목 부분 */}
      <div className="flex justify-between mb-[26px]">
        <div className="flex gap-1 text-lg">
          <div className="font-bold">PHOTOPERIOD</div>
          <div className="font-normal">{format(date, 'MM.dd')}</div>
        </div>
      </div>
      {/* 차트 부분 */}
      <div className="flex pr-[51px]">
        <div className="flex">
          {/* TIME차트 */}
          <div className="flex gap-[42px] flex-grow">
            <div className="mt-[-1rem] flex flex-col text-sm min-w-[56px]">
              <div>TIME</div>
              <div className="text-lg font-bold">4</div>
            </div>
            <MainSliderDiv
              queryName="photo_period"
              title="Photo Period"
              absData1="0"
              absData2="6"
              absData3="10"
              absData4="16"
              absData5="최저권장"
              absData6="권장"
              absData7="고권장"
              absData8="Photo Period 상태에 따른 메시지가 나옵니다."
            />
          </div>
          {/* DLI 차트 */}
          <div className="flex gap-[23px] flex-grow">
            <div className="mt-[-1rem] flex flex-col text-sm min-w-[56px]">
              <div>DLI</div>
              <div className="text-lg font-bold">6</div>
            </div>
            <div className="w-full h-full min-w-[29.125rem] min-h-[21.1875rem]">
              {/* 문제있으니 답장 기다려야됨 */}
              <Bar2Line1Chart />
            </div>
          </div>
          {/* 예상 일조시간 차트 */}
          <div className="flex gap-[23px] flex-grow">
            <div className="mt-[-1rem] flex flex-col text-sm min-w-[56px]">
              <div>DLI</div>
              <div className="text-lg font-bold">8.4</div>
            </div>
            <div className="w-[798px] h-[350px] bg-white rounded-[10px]">
              예상 일조 시간{' '}
            </div>
          </div>
        </div>
      </div>
      {/* 하단의 날짜 선택 부분 */}
      <div className="relative">
        <PickSingleDate selectedDate={date} setSelectedDate={setDate} />
      </div>
    </div>
  );
};

export default GreenHousePP;

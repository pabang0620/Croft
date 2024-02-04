import { format } from 'date-fns';
import BarOtherColorChart from '../../Charts/BarCharts/BarOtherColorChart';
import MainLineAreaChart from '../../Charts/MixCharts/MainLineAreaChart2';
import PickSingleDate from '../../utils/DatePicker/PickSingleDate';

const WaterData = ({ date, setDate }) => {
  return (
    <div className="flex flex-col w-full px-[17px] py-[12px] select-none">
      {/* 제목 부분 */}
      <div className="flex justify-between mb-[26px]">
        <div className="flex gap-1 text-lg">
          <div className="font-bold">급수 데이터</div>
          <div className="font-normal">{format(date, 'MM.dd')}</div>
        </div>
      </div>
      {/* 차트 부분 */}
      <div className="flex pr-[51px] justify-between w-full gap-3">
        <div className="flex w-[35%]">
          {/* 차트 좌측의 글자 부분 */}
          <div className="flex flex-col gap-5 ml-[29px] w-[10%] min-w-[4rem]">
            <div className="flex flex-col">
              <div className="text-sm">총 공급량</div>
              <div className="font-bold text-lg">50L</div>
            </div>
            <div className="flex flex-col">
              <div className="text-sm">급수 횟수</div>
              <div className="font-bold text-lg">10</div>
            </div>
            <div className="flex flex-col">
              <div className="text-sm">1회 공급량</div>
              <div className="font-bold text-lg">5L</div>
            </div>
          </div>
          {/* 여기까지 글자 */}
          <div className="w-[461px] h-[340px]">
            {/* 해당 부분 데이터 에러남 */}
            <MainLineAreaChart APIoption="218" ChartName="" date={date} />
          </div>
        </div>
        <div className="flex gap-3 w-[28%]">
          <div className="mt-[-1rem] flex flex-col text-sm min-w-[3rem]">
            <div>평균 EC</div>
            <div className="text-lg font-bold">2.89</div>
          </div>
          <div className="w-full">
            <BarOtherColorChart ChartName="" APIoption="230" date={date} />
          </div>
        </div>
        <div className="flex gap-3 w-[28%]">
          <div className="mt-[-1rem] flex flex-col text-sm min-w-[3.5rem]">
            <div>평균 PH</div>
            <div>6</div>
          </div>
          <div className="w-full">
            <BarOtherColorChart ChartName="" APIoption="250" date={date} />
          </div>
        </div>
      </div>
      {/* 하단의 날짜 선택 부분 */}
      <PickSingleDate selectedDate={date} setSelectedDate={setDate} />
    </div>
  );
};

export default WaterData;

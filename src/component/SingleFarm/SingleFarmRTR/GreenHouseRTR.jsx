import { format } from 'date-fns';
import PickSingleDate from '../../utils/DatePicker/PickSingleDate';
import MainSliderDiv from '../../Graphs/MainSliderDiv';
import Line4Chart from '../../Charts/LineCharts/Line4Chart';
import Bar2Line1Chart from '../../Charts/MixCharts/Bar2Line1Chart';
import BarMonthChart from '../../Charts/BarCharts/BarMonthChart';

const GreenHouseRTR = ({ date, setDate }) => {
  return (
    <div className="flex flex-col w-full h-full px-[17px] py-[12px] justify-between select-none">
      {/* 제목 부분 */}
      <div className="flex justify-between mb-[26px]">
        <div className="flex gap-1 text-lg">
          <div className="font-bold">RTR</div>
          <div className="font-normal">{format(date, 'MM.dd')}</div>
        </div>
      </div>
      {/* 차트 부분 */}
      <div className="flex pr-[51px]">
        <div className="flex">
          <div className="flex gap-[42px]">
            <div className="mt-[-1rem] flex flex-col text-sm min-w-[56px]">
              <div>RTR</div>
              <div className="text-lg font-bold">2.89</div>
            </div>
            <MainSliderDiv
              queryName=""
              title="RTR"
              absData1="0"
              absData2="1.2"
              absData3="1.5"
              absData4="3"
              absData5="영양"
              absData6="균형"
              absData7="생식"
              absData8="생식생장, 꽃이 피고 열매가 맺혀요"
            />

            {/* 30일짜리 그래프에 기간을 넣는 url이 있나요? 데이터피커가 있어서 여쭤봅니다  */}
            {/* <BarMonthChart /> */}
          </div>
          <div className="flex gap-[23px]">
            <div className="mt-[-1rem] flex flex-col text-sm min-w-[56px]">
              <div>평균 온도</div>
              <div className="drop-shadow-md text-lg">6</div>
            </div>
            {/* 평균온도 그래프인데 모양이 조금 다르네 ?  */}
            <Line4Chart ChartName="" />
          </div>
          <div className="flex gap-[23px]">
            <div className="mt-[-1rem] flex flex-col text-sm min-w-[56px]">
              <div>DLI</div>
              <div>6</div>
            </div>
            {/* 문제있으니 답장 기다려야됨 */}
            {/* <Bar2Line1Chart /> */}
          </div>
        </div>
      </div>
      {/* 하단의 날짜 선택 부분 */}
      <PickSingleDate selectedDate={date} setSelectedDate={setDate} />
    </div>
  );
};

export default GreenHouseRTR;

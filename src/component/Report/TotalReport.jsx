import BarOtherColorChart from '../Charts/BarCharts/BarOtherColorChart';
import CommentBox from './CommentBox';
import GreenhouseScore from '../Charts/GreenhouseScore';
import MainSmoothedLineChart from '../Charts/LineCharts/MainSmoothedLineChartReport';
import MainSliderDiv from '../Graphs/MainSliderDivReport';
import { DailyChartTitle, DailyChartData } from '../utils/Data/TempData';

const TotalReport = ({
  container,
  date,
  desc,
  comment1,
  comment2,
  comment3,
}) => {
  const Title = (text) => {
    return <div className="font-bold text-2xl">{text}</div>;
  };
  return (
    <div className="my-print-container w-[1200px] h-[1650px] flex flex-col px-[63px] pt-[45px] pb-[65px] font-sans bg-white">
      <div className="flex items-center justify-between mb-[22px]">
        <div className="flex gap-6">
          <div>{Title(`${container} 일일 종합보고서`)}</div>
          <div>{Title(date)}</div>
        </div>
        <img
          className="w-[120px] h-[32px]"
          src={`/assets/images/Layout/CroftAndLogo.png`}
          alt="Logo"
        />
      </div>
      <div className="h-[307px] w-full border-y border-solid border-b-base400 border-t-black px-[35px] flex items-center justify-between">
        <GreenhouseScore />
        <div className="text-base font-normal w-[645px] text-wrap whitespace-pre-wrap">
          {desc}
        </div>
      </div>
      <div className="w-full flex flex-col">
        <div className="my-[30px]">{Title('온실 환경 일일 보고')}</div>
        <div className="flex justify-between">
          {DailyChartTitle.map((title, idx) => (
            <div
              className="w-[243px] h-[220px] bg-white rounded-[10px] relative"
              key={idx}
            >
              <div className="absolute top-1 gap-[7px] flex items-center font-bold">
                <div className="text-lg">{title}</div>
                <div className="text-sm text-accent">{DailyChartData[idx]}</div>
              </div>
              <MainSmoothedLineChart />
            </div>
          ))}
        </div>
        <CommentBox text={comment1} />
      </div>
      <div className="mt-[62px]">
        <div className="mb-[28px]">{Title('급수 상태 보고')}</div>
        <div className="flex">
          <div className="w-[366px] h-[305px] bg-white rounded-[10px]">
            <BarOtherColorChart date={date} />
          </div>
          <div>임시 차트</div>
        </div>
        <CommentBox text={comment2} />
      </div>
      <div className="mt-[64px]">
        <div>{Title('생장 보고')}</div>
        <div className="flex justify-between">
          {[...Array(4)].map((_) => (
            <div className="w-[240px] h-[220px] bg-white rounded-[10px] relative">
              <MainSliderDiv />
            </div>
          ))}
        </div>
        <CommentBox text={comment3} />
      </div>
    </div>
  );
};

export default TotalReport;

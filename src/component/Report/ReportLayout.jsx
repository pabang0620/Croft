import BarOtherColorChart from '../Charts/BarCharts/BarOtherColorChart';
import CommentBox from './CommentBox';
import GreenhouseScore from '../Charts/GreenhouseScore';
import MainSmoothedLineChart from '../Charts/LineCharts/MainSmoothedLineChartReport';
import MainSliderDiv from '../Graphs/MainSliderDivReport';
import { DailyChartTitle, DailyChartData } from '../utils/Data/TempData';

const ReportLayout = ({ container, date, desc, currentPage, totalPage }) => {
  const Title = (text) => {
    return <div className="font-bold text-2xl">{text}</div>;
  };
  return (
    <div className="w-[1200px] h-[1697px] flex flex-col px-[63px] pt-[45px] pb-[65px] font-sans bg-white">
      <div className="h-[57px]  flex items-center justify-between">
        <div className="flex gap-6">
          <div>{Title(`${container} 일일 종합보고서`)}</div>
          <div>{Title(date)}</div>
        </div>
        <div className="text-right text-[32px]">CROFT.AI</div>
      </div>
      <div className="h-[307px] w-full border-y border-solid border-b-base400 border-t-black px-[35px] flex items-center justify-between">
        <GreenhouseScore />
        <div className="text-base font-normal w-[645px] text-wrap whitespace-pre-wrap">
          {desc}
        </div>
      </div>
      <div className="w-full flex flex-col"></div>
      <div>
        {currentPage}/{totalPage}
      </div>
    </div>
  );
};

export default ReportLayout;

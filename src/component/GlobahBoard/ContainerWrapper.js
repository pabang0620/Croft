import MainBarChart from '../Charts/BarCharts/MainBarChart';
import MainBarChartLine from '../Charts/BarCharts/MainBarChartLine';
import MainSmoothedLineChart from '../Charts/LineCharts/MainSmoothedLineChart';
import MainSmoothedLineChartAdd from '../Charts/LineCharts/MainSmoothedLineChartAdd';
import MainBar2LineChart from '../Charts/MixCharts/MainBarLine2Chart';
import MainLineAreaChart from '../Charts/MixCharts/MainLineAreaChart';
import MainSliderDiv from '../Graphs/MainSliderDiv';
import SingleContainer from './SingleContainer';

const ContainerWrapper = () => {
  return (
    <div className="flex flex-wrap gap-[30px]">
      <SingleContainer />
      <SingleContainer />
      <SingleContainer />
      <SingleContainer />
      <SingleContainer />
      <div className='w-[320px] h-[220px] bg-white rounded-[10px] relative'>
        {/* 들어가는 데이터를 다르게 넣어줘야한다 ~  */}
        <MainBarChart data={""}/>
      </div>
      <div className='w-[320px] h-[220px] bg-white rounded-[10px] relative'>
        <MainBarChartLine data={""} />
      </div>
      <div className="w-[320px] h-[220px] bg-white rounded-[10px]">
        <MainSliderDiv />
      </div>
      <div className="w-[320px] h-[220px] bg-white rounded-[10px]">
        <MainSmoothedLineChart />
      </div>
      <div className="w-[320px] h-[220px] bg-white rounded-[10px]">
        <MainSmoothedLineChartAdd />
      </div>
      <div className="w-[485px] h-[450px] bg-white rounded-[10px]">
        <MainLineAreaChart />
      </div>
      <div className="w-[485px] h-[450px] bg-white rounded-[10px]">
        < MainBar2LineChart/>
      </div>
    </div>
  );
};

export default ContainerWrapper;

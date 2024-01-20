import Line4Chart from "../../component/Charts/LineCharts/Line4Chart";
import Bar2Line1Chart from "../../component/Charts/MixCharts/Bar2Line1Chart";
import MainSliderDiv from "../../component/Graphs/MainSliderDiv";
import BarMonthChart from "../../component/Charts/BarCharts/BarMonthChart";

const SingleFarmDLI = () => {
  return (
    <div>
      <div className="w-[798px] h-[350px] bg-white rounded-[10px]">
        {/* dlicurrnt로 바꿔줘야함??? */}
        <Bar2Line1Chart />
      </div>
      <div className="w-[798px] h-[350px] bg-white rounded-[10px]">
        <Line4Chart ChartName="평균 온도" />
      </div>
      <div className="w-[1300px] h-[380px] bg-white rounded-[10px]">
        <BarMonthChart queryname="dli" />
      </div>
    </div>
  );
};

export default SingleFarmDLI;

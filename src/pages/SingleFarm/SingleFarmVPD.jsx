import Line4Chart from "../../component/Charts/LineCharts/Line4Chart";
import Bar2Line1Chart from "../../component/Charts/MixCharts/Bar2Line1Chart";
import MainSliderDiv from "../../component/Graphs/MainSliderDiv";
import BarMonthChart from "../../component/Charts/BarCharts/BarMonthChart";

const SingleFarmVPD = () => {
  return (
    <div>
      <div className="w-[320px] h-[210px] bg-white rounded-[10px]">
        VPD 차트{" "}
      </div>
      <div className="w-[798px] h-[350px] bg-white rounded-[10px]">
        <Line4Chart ChartName="평균 온도" />
      </div>
      <div className="w-[798px] h-[350px] bg-white rounded-[10px]">
        <Line4Chart ChartName="평균 온도" dataoff="true" />
      </div>
      <div className="w-[1300px] h-[380px] bg-white rounded-[10px]">
        {/* 데이터 바꿔줘야함(쿼리만) VPD는 라인차트로 바꿔달래...(?)  */}
        <BarMonthChart queryname="vpd" />
      </div>
    </div>
  );
};

export default SingleFarmVPD;

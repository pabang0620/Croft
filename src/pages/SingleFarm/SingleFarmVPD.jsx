import Line4Chart from "../../component/Charts/LineCharts/Line4Chart";
import Measurement from "../../component/Charts/Measurement/Measurement";
import VPDChart from "../../component/Charts/Measurement/VPDChart";
import DailyVPD from "../../component/SingleFarm/SingleFarmVPD/DailyVPD";

const SingleFarmVPD = () => {
  return (
    <div className="my-[11px] mx-[25px] flex flex-col gap-[10px] max-w-[100%]">
      <div className="w-[320px] h-[210px] bg-white rounded-[10px]">
        <VPDChart />
      </div>
      <div className="w-[798px] h-[350px] bg-white rounded-[10px]">
        <Line4Chart ChartName="평균 온도" dataoff="true" />
      </div>
      <div className="w-[798px] h-[350px] bg-white rounded-[10px]">
        {/* 평균 습도 그래프 로 변경 */}
        <Line4Chart ChartName="평균 온도" />
      </div>
      <div>
        <Measurement />
      </div>
      <div className="w-full bg-white  h-[28.125rem] rounded-[10px]">
        <DailyVPD />
      </div>
    </div>
  );
};

export default SingleFarmVPD;

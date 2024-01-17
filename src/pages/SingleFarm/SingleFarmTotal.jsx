import BarOtherColorChart from "../../component/Charts/BarCharts/BarOtherColorChart";
import Line2Chart from "../../component/Charts/LineCharts/Line2Chart";
import GreenHouseTotal from "../../component/SingleFarm/SingleFarmTotal/GreenHouseTotal";

const SingleFarmTotal = () => {
  //데이터 입출력
  //temp data
  const critical = {
    temp: true,
    humidity: false,
    solar: false,
    co2: false,
  };
  const alert = [true, false, false, false];
  return (
    <div className="my-[11px] mx-[25px]">
      <div className="w-full bg-white h-[52rem] rounded-[10px]">
        <GreenHouseTotal critical={critical} alert={alert} />
      </div>
      <BarOtherColorChart ChartName="평균 EC" APIoption="230" />
      <BarOtherColorChart ChartName="평균 PH" APIoption="250" />
      <Line2Chart APIoption="199" APIoption2="224" />
    </div>
  );
};

export default SingleFarmTotal;

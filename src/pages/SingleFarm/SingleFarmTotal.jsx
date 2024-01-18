import BarMonthChart from "../../component/Charts/BarCharts/BarMonthChart";
import BarOtherColorChart from "../../component/Charts/BarCharts/BarOtherColorChart";
import Line2Chart from "../../component/Charts/LineCharts/Line2Chart";
import Line4Chart from "../../component/Charts/LineCharts/Line4Chart";
import LineChart from "../../component/Charts/LineCharts/LineChart";
import Bar2Line1Chart from "../../component/Charts/MixCharts/Bar2Line1Chart";
import MainSliderDiv from "../../component/Graphs/MainSliderDiv";
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
      <Line2Chart ChartName="평균 습도" APIoption="199" APIoption2="224" />

      <LineChart ChartName="평균 DLI" APIoption="220" />
      <LineChart ChartName="평균 CO2 농도" APIoption="225" />
      {/* 여기까지가 라인 끝이고 피그마상 아래쪽 차트들 정리하기쉽게 빼왔어  */}

      <MainSliderDiv
        queryName="RTR"
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
      {/* 평균온도 그래프인데 모양이 조금 다르네 ?  */}
      <Line4Chart ChartName="" />
      {/* 문제있으니 답장 기다려야됨 */}
      {/* <Bar2Line1Chart /> */}
      {/* 30일짜리 그래프에 기간을 넣는 url이 있나요? 데이터피커가 있어서 여쭤봅니다  */}
      <BarMonthChart />
      <Bar2Line1Chart />
    </div>
  );
};

export default SingleFarmTotal;

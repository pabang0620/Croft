import React, { useState } from "react";
import { format } from "date-fns";

import GreenHouseTotal from "../../component/SingleFarm/SingleFarmTotal/GreenHouseTotal";
import WaterData from "../../component/SingleFarm/WaterData";
import DailyAvg from "../../component/SingleFarm/DailyAvg";
import Line2Chart from "../../component/Charts/LineCharts/Line2Chart";
import LineChart from "../../component/Charts/LineCharts/LineChart";
import MainSliderDiv from "../../component/Graphs/MainSliderDiv";
import MainBarLine2Chart from "../../component/Charts/MixCharts/MainBarLine2Chart";

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
  const [date, setDate] = useState(new Date());

  return (
    <div className="my-[11px] mx-[25px] flex flex-col gap-[10px]">
      <div className="w-full bg-white h-[52rem] rounded-[10px]">
        <GreenHouseTotal critical={critical} alert={alert} date={date} />
      </div>
      <div className="w-full bg-white h-[28.125rem] rounded-[10px]">
        <WaterData date={date} setDate={setDate} />
      </div>
      <div className="w-full bg-white h-[56.875rem] rounded-[10px]">
        <DailyAvg />
      </div>
      <div className="w-[798px] h-[350px] bg-white rounded-[10px]">
        <MainBarLine2Chart ChartName="평균 온도" dateset="on" />
      </div>
      <div className="w-[798px] h-[350px] bg-white rounded-[10px]">
        <Line2Chart ChartName="평균 습도" APIoption="199" APIoption2="224" />
      </div>
      <div className="w-[798px] h-[350px] bg-white rounded-[10px]">
        <LineChart ChartName="평균 DLI" APIoption="220" />
      </div>
      <div className="w-[798px] h-[350px] bg-white rounded-[10px]">
        <LineChart ChartName="평균 CO2 농도" APIoption="225" />
      </div>

      {/* 여기까지가 라인 끝이고 피그마상 아래쪽 차트들 정리하기쉽게 빼왔어  */}
    </div>
  );
};

export default SingleFarmTotal;

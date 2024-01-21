<<<<<<< HEAD
import { useState } from 'react';
import GreenHouseRTR from '../../component/SingleFarm/SingleFarmRTR/GreenHouseRTR';

const SingleFarmRTR = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div className="my-[11px] mx-[25px] flex flex-col gap-[10px] max-w-[100%]">
      <div className="w-full bg-white h-[28.125rem] rounded-[10px]">
        <GreenHouseRTR date={date} setDate={setDate} />
=======
import Line4Chart from "../../component/Charts/LineCharts/Line4Chart";
import Bar2Line1Chart from "../../component/Charts/MixCharts/Bar2Line1Chart";
import MainSliderDiv from "../../component/Graphs/MainSliderDiv";
import BarMonthChart from "../../component/Charts/BarCharts/BarMonthChart";

const SingleFarmRTR = () => {
  return (
    <div>
      <div className="w-[320px] h-[220px] bg-white rounded-[10px]">
        <MainSliderDiv
          queryName="rtr"
          title="RTR"
          absData1="0"
          absData2="1.2"
          absData3="1.5"
          absData4="3"
          absData5="영양"
          absData6="균형"
          absData7="생식"
          absData8="생식생장, 꽃이 피고 열매가 맺혀요"
        />{" "}
      </div>
      <div className="w-[798px] h-[350px] bg-white rounded-[10px]">
        {/* dataoff 를 넘겨주면 vent와 heat가 안뜸 */}
        <Line4Chart ChartName="평균 온도" dataoff="true" />
      </div>
      <div className="w-[798px] h-[350px] bg-white rounded-[10px]">
        <Bar2Line1Chart />
      </div>
      <div className="w-[1300px] h-[380px] bg-white rounded-[10px]">
        <BarMonthChart queryname="rtr" />
>>>>>>> origin/chart
      </div>
    </div>
  );
};

export default SingleFarmRTR;

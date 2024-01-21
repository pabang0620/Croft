import MainSliderDiv from "../../component/Graphs/MainSliderDiv";
import Line4Chart from "../../component/Charts/LineCharts/Line4Chart";
import Bar2Line1Chart from "../../component/Charts/MixCharts/Bar2Line1Chart";
import BarMonthChart from "../../component/Charts/BarCharts/BarMonthChart";

const SingleFarmPP = () => {
  return (
    <div>
      <div className="w-[320px] h-[210px] bg-white rounded-[10px]">
        <MainSliderDiv
          queryName="photo_period"
          title="Photo Period"
          absData1="0"
          absData2="6"
          absData3="10"
          absData4="16"
          absData5="최저권장"
          absData6="권장"
          absData7="고권장"
          absData8="Photo Period 상태에 따른 메시지가 나옵니다."
        />
      </div>
      <div className="w-[798px] h-[350px] bg-white rounded-[10px]">
        <Bar2Line1Chart />
      </div>
      <div className="w-[798px] h-[350px] bg-white rounded-[10px]">
        예상 일조 시간{" "}
      </div>
      <div className="w-[1300px] h-[380px] bg-white rounded-[10px]">
        <BarMonthChart queryname="photo_period" />
      </div>
    </div>
  );
};

export default SingleFarmPP;

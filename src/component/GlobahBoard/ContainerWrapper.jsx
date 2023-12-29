import SingleContainer from "./SingleContainer";
import {
  single1,
  single2,
  single3,
  single4,
  single5,
} from "../utils/Data/ContainerData";
import NavBarModalHeader from "../../layout/NavBar/NavBarModal7/NavBarModalHeader";
import StackedChartLine2 from "../Charts/MixCharts/StackedChartLine2";
import BarOtherColorChart from "../Charts/BarCharts/BarOtherColorChart";
import Bar2Line1Chart from "../Charts/MixCharts/Bar2Line1Chart";
import BarMonthChart from "../Charts/BarCharts/BarMonthChart";
import StackedBarLineChart from "../Charts/MixCharts/StackedBarLineChart";
import PieChart from "../Charts/PieCharts/PieChart";
import StackedBarChartyx from "../Charts/MixCharts/StackedBarChartyx";

const ContainerWrapper = () => {
  return (
    <div className="flex flex-wrap gap-[30px]">
      <SingleContainer
        disconnect={false}
        critical={single1.critical}
        warning={single1.warning}
      />
      <SingleContainer
        disconnect={false}
        critical={single2.critical}
        warning={single2.warning}
      />
      <SingleContainer
        disconnect={false}
        critical={single3.critical}
        warning={single3.warning}
      />
      <SingleContainer
        disconnect={false}
        critical={single4.critical}
        warning={single4.warning}
      />
      <SingleContainer
        disconnect={true}
        critical={single5.critical}
        warning={single5.warning}
      />
      {/* 온실 환경 종합 시작  */}
      <div className="bg-white w-[650px] h-[220px]">
        <div className="flex flex-row whitespace-nowrap justify-between pt-4 pl-4 pr-4 mb-4">
          <div className="text-lg font-semibold leading-normal flex">
            <p>온실 환경 종합</p>
            <p className="text-[14px] font-normal text-[#124946] ml-4">10:25</p>
          </div>
          <div className="w-5 h-5 rounded-full bg-red-500 text-center text-white leading-[20px]">
            !
          </div>
        </div>
        <div className="w-[620px] h-[147px] grid grid-cols-4 gap-4">
          <NavBarModalHeader imgName="Vector.png" detail="12℃" />
          <NavBarModalHeader imgName="Humidity.png" detail="51%" />
          {/* 이미지 어디껀지 모르겠어 ㅎ.. 사이즈는 딱 맞춰놨어 !!  */}
          <NavBarModalHeader imgName="CriticalIcon.svg" detail="629 w/m²" />
          <NavBarModalHeader imgName="WarningIcon.svg" detail="285.3 ppm" />
        </div>
      </div>
      {/* 온실 환경 종합 끝 */}
      {/* 일자별 평균 - 평균온도 차트  */}
      {/* 어짜피 흰 배경에 들어가는거라 w,h가 볼더라디우스 안중요 */}
      <div className="w-[750px] h-[350px] bg-white rounded-[10px]">
        <StackedChartLine2 />
      </div>
      {/* Bar차트 색 하나 다른거  */}
      <div className="w-[366px] h-[305px] bg-white rounded-[10px]">
        <BarOtherColorChart />
      </div>
      {/* bar2개랑 라인하나  */}
      <div className="w-[480px] h-[355px] bg-white rounded-[10px]">
        <Bar2Line1Chart />
      </div>
      {/* 30일짜리 bar  */}
      <div className="w-[1250px] h-[355px] bg-white rounded-[10px]">
        <BarMonthChart />
      </div>
      {/* bar2갠데 하나가 3색인거  */}
      <div className="w-[980px] h-[700px] bg-white rounded-[10px]">
        <StackedBarLineChart />
      </div>
      {/* bar3색인데 옆으로 누움 */}
      <div className="w-[650px] h-[335px] bg-white rounded-[10px]">
        <StackedBarChartyx />
      </div>
      {/* 동그라미 (파이차트) */}
      <div className="w-[650px] h-[335px] bg-white rounded-[10px]">
        <PieChart />
      </div>
    </div>
  );
};

export default ContainerWrapper;

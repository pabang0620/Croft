import GreenhouseScore from "../../Charts/GreenhouseScore";
import CroftGuide from "../../Charts/CroftGuide/CroftGuide";
import TotalReportChart from "../../Charts/TotalReportChart/TotalReportChart";
import TotalResourceChart from "../../Charts/TotalResourceChart/TotalResourceChart";
import MainBarChart from "../../Charts/BarCharts/MainBarChart";
import MainBarChartLine from "../../Charts/BarCharts/MainBarChartLine";
import Line2Chart from "../../Charts/LineCharts/Line2Chart";
import Line4Chart from "../../Charts/LineCharts/Line4Chart";
import Line4ChartNone from "../../Charts/LineCharts/Line4ChartNone";
import MainFootLineChart from "../../Charts/LineCharts/MainFootLineChart";
import MainLineChart from "../../Charts/LineCharts/MainLineChart";
import MainSmoothedLineChart from "../../Charts/LineCharts/MainSmoothedLineChart";
import MainSmoothedLineChartAdd from "../../Charts/LineCharts/MainSmoothedLineChartAdd";
import MainBar2LineChart from "../../Charts/MixCharts/MainBarLine2Chart";
import MainLineAreaChart from "../../Charts/MixCharts/MainLineAreaChart";
import MainSliderDiv from "../../Graphs/MainSliderDiv";
import MainRTRLineChart from "../../Charts/LineCharts/MainRTRLineChart";

const TempDashPage = () => {
  return (
    <div className="p-4 flex flex-row flex-wrap gap-[10px]">
      {/* 드래그 앤 드랍은 빠진 상태 */}
      <div className="w-[650px] h-[220px]">
        <TotalReportChart title="온실 환경 종합" time="10:25" size={50} />
      </div>
      <GreenhouseScore />
      <CroftGuide />
      <div className="flex flex-col gap-[10px]">
        <div className="w-[320px] h-[220px] bg-white rounded-[10px]">
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
        </div>
        <div className="w-[320px] h-[220px] bg-white rounded-[10px]">
          {/* DLI lineArea차트 연동 끝 */}
          <MainLineChart APIoption="220" ChartName="DLI" />
        </div>
      </div>
      <div className="flex flex-col gap-[10px]">
        <div className="w-[320px] h-[220px] bg-white rounded-[10px]">
          <MainSliderDiv
            queryName="photo_Period"
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
        <div className="w-[320px] h-[220px] bg-white rounded-[10px]">
          <MainSliderDiv
            queryName="vpd"
            title="VPD"
            absData2="1.2"
            absData3="1.5"
            absData4="3"
            absData5="축적"
            absData6="균형"
            absData7="증산"
            absData8="VPD 상태에 따른 메시지가 나옵니다."
          />
        </div>
      </div>
      <div className="w-[485px] h-[450px] bg-white rounded-[10px]">
        <MainLineAreaChart APIoption="218" ChartName="급수 데이터" />
      </div>
      <div className="w-[485px] h-[450px] bg-white rounded-[10px]">
        <MainBar2LineChart ChartName="평균 온도" />
      </div>
      <div className="flex flex-col gap-[10px]">
        <div className="w-[320px] h-[220px] bg-white rounded-[10px] relative">
          <MainBarChartLine ChartName="DLI" />
        </div>
        <div className="w-[320px] h-[220px] bg-white rounded-[10px]">
          <MainSmoothedLineChart
            APIoption="198"
            ChartName="온실 온도"
            unit="℃"
          />
        </div>
      </div>
      <div className="flex flex-col gap-[10px]">
        <div className="w-[320px] h-[220px] bg-white rounded-[10px] relative">
          {/* 들어가는 데이터를 다르게  */}
          <MainBarChart ChartName="Photo Period" />
        </div>
        <div className="w-[320px] h-[220px] bg-white rounded-[10px]">
          <MainSmoothedLineChart
            APIoption="199"
            ChartName="온실 습도"
            unit="%"
          />
        </div>
      </div>
      <div className="flex flex-col gap-[10px]">
        <div className="w-[320px] h-[220px] bg-white rounded-[10px]">
          <MainRTRLineChart ChartName="RTR" />
        </div>
        <div className="w-[320px] h-[220px] bg-white rounded-[10px]">
          <MainSmoothedLineChart
            APIoption="225"
            ChartName="온실 CO2"
            unit="ppm"
          />
        </div>
      </div>
      <div className="flex flex-col gap-[10px] justify-end">
        <div className="w-[320px] h-[220px] bg-white rounded-[10px]">
          <MainSmoothedLineChartAdd
            APIoption="244"
            ChartName="외부 광량"
            unit="w/m²"
          />
        </div>
      </div>
      <div className="flex flex-col gap-[10px] justify-end">
        <div>VPD 데이터 미연동</div>
      </div>
      <div className="w-[650px] h-[220px]">
        <TotalResourceChart />
      </div>
      <div>
        <div className="w-[320px] h-[220px] bg-white rounded-[10px]">
          <MainFootLineChart
            APIoption="218"
            ChartName="물 사용량"
            unit="liter"
          />
        </div>
        <div>물 사용량 제외 다른 데이터들은 '없음'이라 되어있음</div>
      </div>
    </div>
  );
};

export default TempDashPage;
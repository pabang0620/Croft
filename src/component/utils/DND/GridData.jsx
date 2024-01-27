import React from "react";
import MainSliderDiv from "../../Graphs/MainSliderDiv";
import MainBarChartLine from "../../Charts/BarCharts/MainBarChartLine";
import MainBarChart from "../../Charts/BarCharts/MainBarChart";
import MainRTRLineChart from "../../Charts/LineCharts/MainRTRLineChart";
import MainLineChart from "../../Charts/LineCharts/MainLineChart";
import MainFootLineChart from "../../Charts/LineCharts/MainFootLineChart";
import MainSmoothedLineChart from "../../Charts/LineCharts/MainSmoothedLineChart";
import MainSmoothedLineChartAdd from "../../Charts/LineCharts/MainSmoothedLineChartAdd";
import MainLineAreaChart from "../../Charts/MixCharts/MainLineAreaChart";
import MainBarLine2Chart from "../../Charts/MixCharts/MainBarLine2Chart";
import TotalReportChart from "../../Charts/TotalReportChart/TotalReportChart";
import GreenhouseScore from "../../Charts/GreenhouseScore";
import CroftGuide from "../../Charts/CroftGuide/CroftGuide";
import TotalResourceChart from "../../Charts/TotalResourceChart/TotalResourceChart";
const positionMap = {
  0: { x: 0, y: 0, w: 4, h: 2 }, // width 4, height 2
  1: { x: 4, y: 0, w: 2, h: 2 }, // width 2, height 2
  2: { x: 6, y: 0, w: 4, h: 2 }, // width 4, height 2
  3: { x: 0, y: 5, w: 4, h: 2 }, // width 4, height 2
  4: { x: 0, y: 1, w: 2, h: 2 }, // width 2, height 2
  5: { x: 2, y: 1, w: 2, h: 2 }, // width 2, height 2
  6: { x: 4, y: 1, w: 3, h: 4 }, // width 3, height 4
  7: { x: 8, y: 1, w: 3, h: 4 }, // width 3, height 4
  8: { x: 0, y: 2, w: 2, h: 2 }, // width 2, height 2
  9: { x: 2, y: 2, w: 2, h: 2 }, // width 2, height 2
  10: { x: 0, y: 3, w: 2, h: 2 }, // width 2, height 2
  11: { x: 2, y: 3, w: 2, h: 2 }, // width 2, height 2
  12: { x: 4, y: 3, w: 2, h: 2 }, // width 2, height 2
  13: { x: 0, y: 4, w: 2, h: 2 }, // width 2, height 2
  14: { x: 2, y: 4, w: 2, h: 2 }, // width 2, height 2
  15: { x: 4, y: 4, w: 2, h: 2 }, // width 2, height 2
  16: { x: 6, y: 4, w: 2, h: 2 }, // width 2, height 2
  17: { x: 0, y: 6, w: 2, h: 2 }, // width 2, height 2
};

const GridData = [
  {
    chartID: "GreenhouseTotal",
    id: 0,
    component: (
      <TotalReportChart title="온실 환경 종합" time="10:25" size={50} />
    ),
    layout: positionMap[0],
  },
  {
    chartID: "TotalScore",
    id: 1,
    component: <GreenhouseScore />,
    layout: positionMap[1],
  },
  {
    chartID: "CroftGuide",
    id: 2,
    component: <CroftGuide />,
    layout: positionMap[2],
  },
  {
    chartID: "ResourceTotal",
    id: 3,
    component: <TotalResourceChart />,
    layout: positionMap[3],
  },
  {
    chartID: "RTR",
    id: 4,
    component: (
      <MainSliderDiv
        dataName="avg_temp"
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
      />
    ),
    layout: positionMap[4],
  },
  {
    chartID: "PHOTOPERIOD",
    id: 5,
    component: (
      <MainSliderDiv
        dataName="photo_period_hour"
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
    ),
    layout: positionMap[5],
  },
  {
    chartID: "DailyWaterSupply",
    id: 6,
    component: <MainLineAreaChart APIoption="218" ChartName="급수 데이터" />,
    layout: positionMap[6],
  },
  {
    chartID: "DailyTempChange",
    id: 7,
    component: <MainBarLine2Chart ChartName="평균 온도" />,
    layout: positionMap[7],
  },
  {
    chartID: "DLI",
    id: 8,
    component: <MainLineChart APIoption="220" ChartName="DLI" />,
    layout: positionMap[8],
  },
  {
    chartID: "VPD",
    id: 9,
    component: (
      <MainSliderDiv
        dataName="vpd"
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
    ),
    layout: positionMap[9],
  },
  {
    chartID: "WeeklyDLI",
    id: 10,
    component: <MainBarChartLine ChartName="DLI" />,
    layout: positionMap[10],
  },
  {
    chartID: "WeeklyPHOTOPERIOD",
    id: 11,
    component: <MainBarChart ChartName="Photo Period" />,
    layout: positionMap[11],
  },
  {
    chartID: "DailyRTR",
    id: 12,
    component: <MainRTRLineChart ChartName="RTR" />,
    layout: positionMap[12],
  },
  {
    chartID: "DailyTempChange",
    id: 13,
    component: (
      <MainSmoothedLineChart APIoption="198" ChartName="온실 온도" unit="℃" />
    ),
    layout: positionMap[13],
  },
  {
    chartID: "DailyHumidityChange",
    id: 14,
    component: (
      <MainSmoothedLineChart APIoption="199" ChartName="온실 습도" unit="%" />
    ),
    layout: positionMap[14],
  },
  {
    chartID: "DailyCO2Change",
    id: 15,
    component: (
      <MainSmoothedLineChart APIoption="225" ChartName="온실 CO2" unit="ppm" />
    ),
    layout: positionMap[15],
  },
  {
    chartID: "DailySolarChange",
    id: 16,
    component: (
      <MainSmoothedLineChartAdd
        APIoption="244"
        ChartName="외부 광량"
        unit="w/m²"
      />
    ),
    layout: positionMap[16],
  },
  {
    chartID: "DailyWaterUse",
    id: 17,
    component: (
      <MainFootLineChart APIoption="218" ChartName="물 사용량" unit="liter" />
    ),
    layout: positionMap[17],
  },
];

export default GridData;

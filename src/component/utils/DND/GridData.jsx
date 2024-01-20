// WonhoGridData.jsx
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
import MainBar2LineChart from "../../Charts/MixCharts/MainBarLine2Chart";
import TotalResourceChart from "../../Charts/TotalResourceChart/TotalResourceChart";

const GridData = [
  <MainSliderDiv
    key="1"
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
  />,
  <MainSliderDiv
    key="2"
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
  />,
  <MainLineAreaChart key="3" APIoption="218" ChartName="급수 데이터" />,
  <MainBar2LineChart key="4" ChartName="평균 온도" />,
  <MainLineChart key="5" APIoption="220" ChartName="DLI" />,
  <MainSliderDiv
    key="6"
    queryName="vpd"
    title="VPD"
    absData2="1.2"
    absData3="1.5"
    absData4="3"
    absData5="축적"
    absData6="균형"
    absData7="증산"
    absData8="VPD 상태에 따른 메시지가 나옵니다."
  />,
  // 완벽한데
  <MainBarChartLine key="7" ChartName="DLI" />,
  <MainBarChart key="8" ChartName="Photo Period" />,
  <MainRTRLineChart key="9" ChartName="RTR" />,
  // 다음줄
  <MainSmoothedLineChart
    key="10"
    APIoption="198"
    ChartName="온실 온도"
    unit="℃"
  />,
  <MainSmoothedLineChart
    key="11"
    APIoption="199"
    ChartName="온실 습도"
    unit="%"
  />,
  <MainSmoothedLineChart
    key="12"
    APIoption="225"
    ChartName="온실 CO2"
    unit="ppm"
  />,
  <MainSmoothedLineChartAdd
    key="13"
    APIoption="244"
    ChartName="외부 광량"
    unit="w/m²"
  />,

  // 다음줄
  <MainFootLineChart
    key="14"
    APIoption="218"
    ChartName="물 사용량"
    unit="liter"
  />,
];

export default GridData;

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
import MainBarLine2Chart from "../../Charts/MixCharts/MainBarLine2Chart";

import TotalReportChart from "../../Charts/TotalReportChart/TotalReportChart";
import GreenhouseScore from "../../Charts/GreenhouseScore";
import CroftGuide from "../../Charts/CroftGuide/CroftGuide";
import TotalResourceChart from "../../Charts/TotalResourceChart/TotalResourceChart";

const GridData = [
  <TotalReportChart key="0" title="온실 환경 종합" time="10:25" size={50} />,
  <GreenhouseScore key="1" />,
  <CroftGuide key="2" />,
  <TotalResourceChart key="3" />, //자원사용량 n월 n주차

  <MainSliderDiv
    key="4"
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
    key="5"
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
  <MainLineAreaChart key="6" APIoption="218" ChartName="급수 데이터" />,
  <MainBarLine2Chart key="7" ChartName="평균 온도" />,
  <MainLineChart key="8" APIoption="220" ChartName="DLI" />,
  <MainSliderDiv
    key="9"
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
  <MainBarChartLine key="10" ChartName="DLI" />,
  <MainBarChart key="11" ChartName="Photo Period" />,
  <MainRTRLineChart key="12" ChartName="RTR" />,
  // 다음줄
  <MainSmoothedLineChart
    key="13"
    APIoption="198"
    ChartName="온실 온도"
    unit="℃"
  />,
  <MainSmoothedLineChart
    key="14"
    APIoption="199"
    ChartName="온실 습도"
    unit="%"
  />,
  <MainSmoothedLineChart
    key="15"
    APIoption="225"
    ChartName="온실 CO2"
    unit="ppm"
  />,
  <MainSmoothedLineChartAdd
    key="16"
    APIoption="244"
    ChartName="외부 광량"
    unit="w/m²"
  />,

  // 다음줄
  <MainFootLineChart
    key="17"
    APIoption="218"
    ChartName="물 사용량"
    unit="liter"
  />,
];

export default GridData;

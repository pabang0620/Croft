import React from 'react';
import MainSliderDiv from '../../Graphs/MainSliderDiv';

import MainBarChartLine from '../../Charts/BarCharts/MainBarChartLine';
import MainBarChart from '../../Charts/BarCharts/MainBarChart';

import MainRTRLineChart from '../../Charts/LineCharts/MainRTRLineChart';
import MainLineChart from '../../Charts/LineCharts/MainLineChart';
import MainFootLineChart from '../../Charts/LineCharts/MainFootLineChart';
import MainSmoothedLineChart from '../../Charts/LineCharts/MainSmoothedLineChart';
import MainSmoothedLineChartAdd from '../../Charts/LineCharts/MainSmoothedLineChartAdd';

import MainLineAreaChart from '../../Charts/MixCharts/MainLineAreaChart';
import MainBar2LineChart from '../../Charts/MixCharts/MainBarLine2Chart';

import TotalReportChart from '../../Charts/TotalReportChart/TotalReportChart';
import GreenhouseScore from '../../Charts/GreenhouseScore';
import CroftGuide from '../../Charts/CroftGuide/CroftGuide';
import TotalResourceChart from '../../Charts/TotalResourceChart/TotalResourceChart';

const GridData = [
  //----종합
  <TotalReportChart key="1" title="온실 환경 종합" time="10:25" size={50} />,
  <GreenhouseScore key="2" />,
  <CroftGuide key="3" />,
  <TotalResourceChart key="4" />, //자원사용량 n월 n주차
  //----온실환경
  <MainLineAreaChart key="5" APIoption="218" ChartName="급수 데이터" />,
  <MainBar2LineChart key="6" ChartName="평균 온도" />, //주간평균온도
  //일일( )변화
  <MainSmoothedLineChart
    key="7"
    APIoption="198"
    ChartName="온실 온도"
    unit="℃"
  />,
  <MainSmoothedLineChart
    key="8"
    APIoption="199"
    ChartName="온실 습도"
    unit="%"
  />,
  <MainSmoothedLineChartAdd
    key="9"
    APIoption="244"
    ChartName="외부 광량"
    unit="w/m²"
  />,
  <MainSmoothedLineChart
    key="10"
    APIoption="225"
    ChartName="온실 CO2"
    unit="ppm"
  />,

  //---생장방향
  <MainSliderDiv
    key="11"
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
  />, //RTR
  <MainRTRLineChart key="12" ChartName="RTR" />, //일일 RTR 변화
  <MainLineChart key="13" APIoption="220" ChartName="DLI" />, //DLI
  <MainBarChartLine key="14" ChartName="DLI" />, //주간 DLI
  <MainSliderDiv
    key="15"
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
  <MainBarChart key="16" ChartName="Photo Period" />, //주간 PP
  <MainSliderDiv
    key="17"
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
  //VPD 상세 넣을 부분 key="18"
  <div key="19">
    일일 전기사용량 부분 물 사용량 제외 다른 데이터들은 '없음'이라 되어있음
  </div>,
  <div key="20">
    일일 가스사용량 부분 물 사용량 제외 다른 데이터들은 '없음'이라 되어있음
  </div>,
  <MainFootLineChart
    key="21"
    APIoption="218"
    ChartName="물 사용량"
    unit="liter"
  />,
  <div key="22">
    일일 CO2사용량 부분 물 사용량 제외 다른 데이터들은 '없음'이라 되어있음
  </div>,
];

export default GridData;

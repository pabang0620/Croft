import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { useChartData } from "../../utils/api/Charts/ChartAPI";

const MainBarChart = () => {
  const chartRef = useRef(null);
  const dataType = 221; // 원하는 검측값 유형을 지정하세요.
  const { data, isLoading, error } = useChartData(
    `/api/v1/farms/measurement/day?data_type=${dataType}`,
    `chartData-${dataType}`
  );

  // useEffect(() => {
  //   if (isLoading) return <div>Loading...</div>;
  //   if (error) return <div>Error loading data</div>;

  //   const chartInstance = echarts.init(chartRef.current);

  //   const option = {
  //     title: {
  //       text: "Photo period",
  //       top: "5%",
  //       left: "2%",
  //     },
  //     tooltip: {
  //       trigger: "axis",
  //       axisPointer: {
  //         type: "shadow",
  //       },
  //     },
  //     xAxis: {
  //       type: "category",
  //       data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  //       axisLabel: {
  //         fontSize: 10, // 글꼴 크기를 10px로 설정
  //       },
  //     },
  //     yAxis: {
  //       type: "value",
  //       axisLabel: {
  //         fontSize: 10, // 글꼴 크기를 10px로 설정
  //       },
  //     },
  //     series: [
  //       {
  //         name: 'Photoperiod',
  //         type: 'bar',
  //         data: data?.data, // API에서 받은 데이터 사용
  //       },
  //     ],
  //   };

  //   chartInstance.setOption(option);
  //   // return () => {
  //   //   if (chartInstance) {
  //   //     chartInstance.dispose();
  //   //   }
  //   // };

  //   }, [data, isLoading, error]);

  return (
    <>
      <div className="w-[320px] h-[240px]" ref={chartRef}></div>
      <div className="absolute bottom-[0px] right-[0px] mb-2 mr-2 text-[#124946] text-xs font-normal leading-normal cursor-pointer">
        자세히 보기
      </div>
    </>
  );
};

export default MainBarChart;

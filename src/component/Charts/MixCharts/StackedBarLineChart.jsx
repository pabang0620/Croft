import * as echarts from "echarts";
import React, { useEffect, useRef } from "react";

const StackedBarLineChart = () => {
  const chartRef = useRef(null);

  // 임의의 더미 데이터 생성 함수
  const generateDummyData = (length, max) => {
    return Array.from({ length }, () => Math.round(Math.random() * max));
  };

  useEffect(() => {
    const chartInstance = echarts.init(chartRef.current);

    // 더미 데이터 생성
    const barData1 = [800, 1000, 1400, 1600, 1200, 1400, 1700, 1200, 900];
    const barData2 = generateDummyData(9, 500);
    const barData3 = generateDummyData(9, 500);
    const barData4 = generateDummyData(9, 500);
    const lineData = generateDummyData(9, 1500);

    const option = {
      tooltip: {
        trigger: "axis",
        axisPointer: { type: "cross" },
      },
      legend: {
        data: ["매출액", "인건비", "고정비용", "자원비용", "순이익"],
      },
      xAxis: {
        type: "category",
        data: [
          "23.1",
          "23.2",
          "23.3",
          "23.4",
          "23.5",
          "23.6",
          "23.7",
          "23.8",
          "23.9",
          "23.10",
          "23.11",
          "23.12",
        ],
      },
      yAxis: {
        axisLabel: {
          fontSize: 10,
          margin: "10",
        },
        type: "value",
        min: 0,
        max: 1800,
        interval: 300,
      },
      series: [
        {
          name: "매출액",
          type: "bar",
          data: barData1,
        },
        {
          name: "인건비",
          type: "bar",
          stack: "Total",
          data: barData2,
        },
        {
          name: "고정비용",
          type: "bar",
          stack: "Total",
          data: barData3,
        },
        {
          name: "자원비용",
          type: "bar",
          stack: "Total",
          data: barData4,
        },
        {
          name: "순이익",
          type: "line",
          data: lineData,
          // 스타일 설정은 이미지에 맞게 조정
        },
      ],
    };

    chartInstance.setOption(option);

    return () => {
      chartInstance.dispose();
    };
  }, []);

  return <div ref={chartRef} style={{ width: "980px", height: "680px" }} />;
};

export default StackedBarLineChart;

import * as echarts from "echarts";
import React, { useEffect, useRef } from "react";

const StackedBarChartyx = () => {
  const chartRef = useRef(null);

  // 임의의 더미 데이터 생성 함수
  const generateDummyData = (length, max) => {
    return Array.from({ length }, () => Math.round(Math.random() * max));
  };

  useEffect(() => {
    const chartInstance = echarts.init(chartRef.current);

    // 더미 데이터 생성
    const barData1 = generateDummyData(5, 500);
    const barData2 = generateDummyData(5, 500);
    const barData3 = generateDummyData(5, 500);
    const barData4 = generateDummyData(5, 500);
    const barData5 = generateDummyData(5, 500);

    const option = {
      grid: {
        // 다른 설정을 유지하면서 bottom만 조정
        bottom: "20%", // 필요에 따라 이 값을 조정
      },
      title: {
        text: "비용",
        top: "5%",
        left: "2%",
      },
      legend: {
        data: ["인건비", "고정비용", "전기요금", "가스요금", "수도요금"],
      },
      xAxis: {
        type: "value",
        min: 0,
        max: 1800,
        interval: 300,
      },
      yAxis: {
        type: "category",
        data: ["2019", "2020", "2021", "2022", "2023"],
        axisLabel: {
          fontSize: 10,
          margin: "10",
        },
      },
      series: [
        {
          name: "인건비",
          type: "bar",
          stack: "Total",
          data: barData1,
        },
        {
          name: "고정비용",
          type: "bar",
          stack: "Total",
          data: barData2,
        },
        {
          name: "전기요금",
          type: "bar",
          stack: "Total",
          data: barData3,
        },
        {
          name: "가스요금",
          type: "bar",
          stack: "Total",
          data: barData4,
        },
        {
          name: "수도요금",
          type: "bar",
          stack: "Total",
          data: barData5,
        },
      ],
    };

    chartInstance.setOption(option);

    return () => {
      chartInstance.dispose();
    };
  }, []);

  return <div ref={chartRef} style={{ width: "650px", height: "335px" }} />;
};

export default StackedBarChartyx;

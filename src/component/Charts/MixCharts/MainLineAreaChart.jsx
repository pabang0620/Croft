// 필요한 라이브러리를 임포트합니다.
import * as echarts from "echarts";
import React, { useEffect, useRef } from "react";

const MainLineAreaChart = () => {
  const chartRef = useRef(null);
  const generateDummyDataUnder40 = () => {
    // 0과 40 사이에서 무작위 데이터를 생성합니다.
    return Array.from({ length: 2 }, () => Math.floor(Math.random() * 40));
  };
  useEffect(() => {
    const chartInstance = echarts.init(chartRef.current);

    const option = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
        },
      },
      legend: {
        data: ["10.25", "10.26"],
        textStyle: {
          color: "#333", // 범례 텍스트 색상
          fontSize: 12, // 범례 텍스트 크기
        },
        itemWidth: 10,
        itemHeight: 10,
        icon: "rect",
      },
      xAxis: {
        axisLabel: {
          fontSize: 10,
          margin: "10",
        },
        type: "category",
        boundaryGap: false, // 선 차트에 대해 경계 간격을 없앰
        data: [
          "0시",
          "2시",
          "4시",
          "6시",
          "8시",
          "10시",
          "12시",
          "14시",
          "16시",
          "18시",
          "20시",
          "22시",
          "24시",
        ], // x축 데이터
      },
      yAxis: {
        axisLabel: {
          fontSize: 10,
          margin: "10",
        },
        type: "value",
        min: 0,
        max: 100,
        interval: 10,
      },

      series: [
        {
          name: "10.25",
          type: "line",
          data: [0, 12, 25, 32, 41, 57, 61, 71, 79, 84, 86, 93, 100], // 10.25 데이터
          lineStyle: {
            color: "#AEAEAE", // 라인 색상을 #AEAEAE로 설정
          },
          showSymbol: false,
        },
        {
          name: "10.26",
          type: "line",
          data: [0, 17, 28, 38, 44, 52, 61, 57, 78, 84, 96, 99, 100], // 10.26 데이터 데이터가 13개가 들어오지 않을경우를 생각해야함
          lineStyle: {
            color: "#AEAEAE", // 라인 색상을 #AEAEAE로 설정
          },
          areaStyle: {
            color: "rgba(69, 69, 255, 0.3)", // 영역 색상을 blue의 30% 투명도로 설정
          },
          showSymbol: false,
        },
        {
          name: "바 데이터",
          type: "bar",
          data: [0, 34, 37, 24, 4, 40, 15, 25, 35, 5, 18, 22, 2], // 10.25 데이터
          barWidth: "25%", // 막대 너비
          color: "rgba(69, 69, 255, 0.8)", // 영역 색상을 blue의 30% 투명도로 설정
          barGap: "0%", // 다른 시리즈의 막대와의 간격
        },
        {
          name: "바 데이터",
          type: "bar",
          data: [0, 5, 12, 16, 18, 25, 29, 34, 37, 24, 40, 15, 20], // 10.25 데이터
          barWidth: "25%", // 막대 너비
          color: "#AEAEAE", // 라인 색상을 #AEAEAE로 설정
          barGap: "0%", // 다른 시리즈의 막대와의 간격
        },
      ],
    };

    chartInstance.setOption(option);

    return () => {
      chartInstance.dispose();
    };
  }, []);

  return <div ref={chartRef} style={{ width: "480px", height: "380px" }} />;
};

export default MainLineAreaChart;

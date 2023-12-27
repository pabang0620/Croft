import * as echarts from "echarts";
import React, { useEffect, useRef } from "react";

const MainFootLineChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartInstance = echarts.init(chartRef.current);

    const option = {
      tooltip: {
        trigger: "axis",
        axisPointer: { type: "cross" },
      },
      legend: {
        data: ["온실습도점수", "온실온도점수", "외부온도점수"],
        textStyle: {
          color: "#333", // 범례 텍스트 색상
          fontSize: 12, // 범례 텍스트 크기
        },
        itemWidth: 10,
        itemHeight: 10,
        icon: "rect",
      },
      xAxis: {
        type: "category",
        data: ["0시", "4시", "8시", "12시", "16시", "20시", "24시"],
      },
      yAxis: {
        axisLabel: {
          fontSize: 10,
          margin: "10",
        },
        type: "value",
        min: 0,
        max: 600,
        interval: 100,
      },
      series: [
        {
          name: "10.25",
          type: "line",
          data: [140, 150, 170, 180, 300, 500, 550, 600],
          lineStyle: {
            color: "#AEAEAE00", // 라인 색상을 #AEAEAE로 설정
          },
          areaStyle: {
            color: "#AEAEAE90",
          },
          showSymbol: false,
        },
        {
          name: "10.26",
          type: "line",
          data: [120, 150, 200, 240],
          areaStyle: {
            color: "rgba(69, 69, 255)", // 영역 색상을 blue의 30% 투명도로 설정
          },
          lineStyle: {
            color: "#AEAEAE00", // 색상 없음
          },
          showSymbol: false,
        },
      ],
    };

    chartInstance.setOption(option);
    return () => {
      chartInstance.dispose();
    };
  }, []);

  return <div ref={chartRef} className="w-[320px] h-[240px]" />;
};

export default MainFootLineChart;

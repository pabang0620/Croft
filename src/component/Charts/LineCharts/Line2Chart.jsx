import * as echarts from "echarts";
import React, { useEffect, useRef } from "react";

const Line2Chart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartInstance = echarts.init(chartRef.current);
    // 평균습도
    const option = {
      tooltip: {
        trigger: "axis",
        axisPointer: { type: "cross" },
      },
      legend: {
        data: ["외부습도1", "외부습도2"],
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
        data: [
          "10.19",
          "10.20",
          "10.21",
          "10.22",
          "10.23",
          "10.24",
          "10.25",
          "10.26",
        ],
      },
      yAxis: {
        axisLabel: {
          fontSize: 10,
          margin: "10",
        },
        type: "value",
        min: 0,
        max: 25,
        interval: 5,
      },
      series: [
        {
          smooth: true,
          name: "외부습도1",
          type: "line",
          data: [14, 18, 17, 12, 17, 16],
          markArea: {
            itemStyle: {
              color: "rgba(79, 254, 35, 0.3)", // #4FFE234D와 유사한 RGBA 색상
            },
            data: [
              [
                { yAxis: 15 }, // 시작 y축 값
                { yAxis: 20 }, // 끝 y축 값 (차트 최대값까지)
              ],
            ],
          },
        },
        {
          smooth: true,
          name: "외부습도2",
          type: "line",
          data: [12, 17, 14, 18, 17, 12, 17, 16, 7, 18, 18],
        },
      ],
      // grid 설정 및 기타 필요한 스타일 설정...
    };
    // eCharts 옵션 설정

    // eCharts 인스턴스에 옵션을 적용
    chartInstance.setOption(option);
    return () => {
      chartInstance.dispose();
    };
  }, []);

  return <div ref={chartRef} style={{ width: "600px", height: "380px" }} />;
};

export default Line2Chart;

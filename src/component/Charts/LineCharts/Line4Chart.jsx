import * as echarts from "echarts";
import React, { useEffect, useRef } from "react";

const Line4Chart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartInstance = echarts.init(chartRef.current);

    const option = {
      tooltip: {
        trigger: "axis",
        axisPointer: { type: "cross" },
      },
      legend: {
        data: ["외부온도", "온실온도", "VENT 온도 셋팅", "Heating 온도 셋팅"],
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
          "0",
          "2",
          "4",
          "6",
          "8",
          "10",
          "12",
          "14",
          "16",
          "18",
          "20",
          "22",
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
          name: "외부온도",
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
          name: "온실온도",
          type: "line",
          data: [12, 17, 14, 18, 17, 12, 17, 16, 7, 18, 18],
          markArea: {
            itemStyle: {
              color: "rgb(255, 0, 0 , 0.5)", // 빨강
            },
            data: [
              [
                { xAxis: 2 }, // 시작 y축 값
                { xAxis: 3 }, // 끝 y축 값 (차트 최대값까지)
              ],
            ],
          },
        },
        {
          smooth: true,
          name: "VENT 온도 셋팅",
          type: "line",
          data: [14, 18, 17, 12, 17, 16, 7, 17, 20],
        },
        {
          smooth: true,
          name: "Heating 온도 셋팅",
          type: "line",
          data: [7, 18, 18, 22, 17, 12, 17, 14, 18, 17],
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

export default Line4Chart;

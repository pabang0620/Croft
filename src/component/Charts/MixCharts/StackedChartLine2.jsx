import * as echarts from "echarts";
import React, { useEffect, useRef } from "react";

const StackedChartLine2 = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartInstance = echarts.init(chartRef.current);

    const option = {
      grid: {
        // 다른 설정을 유지하면서 bottom만 조정
        bottom: "20%", // 필요에 따라 이 값을 조정
      },
      title: {
        text: "평균 온도",
        top: "5%",
        left: "5%",
      },
      tooltip: {
        trigger: "axis",
        axisPointer: { type: "cross" },
      },
      legend: {
        data: ["온실온도", "온실온도 편차", "외부온도"],
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
          name: "온실온도 편차", // 온도를 가져온 뒤
          type: "bar",
          stack: "Total",
          data: [11, 9, 7, 6, 11, 16, 11, 16],
          itemStyle: {
            borderColor: "transparent",
            color: "transparent",
          },
          emphasis: {
            itemStyle: {
              borderColor: "transparent",
              color: "transparent",
            },
          },
        },
        {
          name: "온실온도 편차", // 차이값만 가져오면 된다
          type: "bar",
          stack: "Total",
          data: [10, 10, 10, 10, 10, 10, 10, 10],
          itemStyle: {
            color: "rgb(255, 0, 0 , 0.5)",
          },
        },

        {
          name: "외부온도",
          type: "line",
          smooth: true,
          data: [23, 20, 17, 22, 15, 20, 20, 17],
          markArea: {
            itemStyle: {
              color: "rgba(79, 254, 35, 0.3)", // #4FFE234D와 유사한 RGBA 색상
            },
            data: [
              [
                { yAxis: 14 }, // 시작 y축 값
                { yAxis: 17 }, // 끝 y축 값 (차트 최대값까지)
              ],
            ],
          },
        },
        {
          name: "온실온도",
          smooth: true,
          type: "line",
          data: [22, 17, 20, 17, 24, 18, 20, 11],
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

  return (
    <>
      <div ref={chartRef} style={{ width: "750px", height: "380px" }} />;
    </>
  );
};

export default StackedChartLine2;

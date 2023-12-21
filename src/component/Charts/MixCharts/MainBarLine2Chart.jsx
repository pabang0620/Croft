import * as echarts from "echarts";
import React, { useEffect, useRef } from "react";

const MainBarLine2Chart = () => {
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
        data: ["10.21", "10.22", "10.23", "10.24", "10.25", "10.26"],
      },
      yAxis: {
        axisLabel: {
          fontSize: 10,
          margin: "10",
        },
        type: "value",
        min: 0,
        max: 35,
        interval: 5,
      },
      series: [
        {
          name: "온실온도점수", // 온도를 가져온 뒤
          type: "bar",
          stack: "Total",
          data: [14, 13, 12, 3, 2, 12],
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
          name: "온실온도점수", // 차이값만 가져오면 된다
          type: "bar",
          stack: "Total",
          data: [10, 10, 10, 10, 10, 10],
        },

        {
          name: "외부온도점수",
          type: "line",
          data: [27, 20, 17, 28, 35, 20],
        },
        {
          name: "평균 점수",
          type: "line",
          data: [22, 27, 20, 17, 28, 18],
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

  return <div ref={chartRef} style={{ width: "480px", height: "380px" }} />;
};

export default MainBarLine2Chart;

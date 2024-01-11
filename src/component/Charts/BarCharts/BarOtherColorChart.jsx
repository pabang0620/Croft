import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

const BarOtherColorChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    // 기본 eCharts 인스턴스를 생성
    const chartInstance = echarts.init(chartRef.current);

    // eCharts 옵션 설정
    const option = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      xAxis: {
        type: "category",
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
        ],
        axisLabel: {
          fontSize: 10, // 글꼴 크기를 10px로 설정
        },
      },
      yAxis: {
        axisLabel: {
          fontSize: 10,
        },
        type: "value",
        min: 0,
        max: 3.5,
        interval: 0.5,
      },
      series: [
        {
          name: "Photoperiod",
          type: "bar",
          data: [2.5, 0, 3.2, 2.7, 0, 2, 2.1, 2.5, 0, 3.2, 2.7, 0, 2],
          itemStyle: {
            color: function (params) {
              // 3.0 제한 되는 수치 데이터값을 넣으면 됨
              return params.data > 3.0 ? "rgb(255, 100, 100 , 0.9)" : "#e2e2e2";
            },
          },
          markArea: {
            itemStyle: {
              color: "rgba(79, 254, 35, 0.3)", // #4FFE234D와 유사한 RGBA 색상
            },
            data: [
              [
                { yAxis: 2.5 }, // 시작 y축 값
                { yAxis: 2.9 }, // 끝 y축 값 (차트 최대값까지)
              ],
            ],
          },
        },
      ],
    };

    // eCharts 인스턴스에 옵션을 적용
    chartInstance.setOption(option);

    // 컴포넌트 언마운트 시 차트 인스턴스 해제
    return () => {
      chartInstance.dispose();
    };
  }, []);

  return (
    <>
      <div className="w-[366px] h-[340px]" ref={chartRef}></div>
    </>
  );
};

export default BarOtherColorChart;

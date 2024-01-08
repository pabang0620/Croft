import * as echarts from "echarts";
import React, { useEffect, useRef } from "react";
import { useChartData } from "../../utils/api/Charts/ChartAPI";

const MainLineChart = ({ APIoption, ChartName }) => {
  const chartRef = useRef(null);
  const dataType = APIoption;
  const {
    data: data,
    isLoading: isLoading,
    error: error,
  } = useChartData(
    `/api/v1/farms/measurement/day?data_type=${dataType}`,
    `chartData-${dataType}`
  );

  useEffect(() => {
    if (isLoading || error) {
      // 데이터 로딩 중이거나 오류 발생시 처리
      return;
    }

    if (!data || !data.data) {
      // 데이터가 없거나 잘못된 형식일 경우 처리
      return;
    }

    const chartInstance = echarts.init(chartRef.current);

    const maxValue = Math.max(...data.data.map((item) => item.value));
    const max = Math.ceil(maxValue + maxValue / 10);
    const interval = Math.ceil(maxValue / 10);

    const xLabels = data.data.map((item) => {
      const date = new Date(item.kr_time);
      return `${date.getHours().toString().padStart(2, "0")}:${date
        .getMinutes()
        .toString()
        .padStart(2, "0")}`;
    });
    const option = {
      title: {
        text: ChartName,
        top: "5%",
        left: "2%",
      },
      tooltip: {
        trigger: "axis",
        axisPointer: { type: "cross" },
      },
      legend: {
        data: ["온실습도점수", "온실온도점수", "외부온도점수"],
        textStyle: {
          color: "#333",
          fontSize: 12,
        },
        itemWidth: 10,
        itemHeight: 10,
        icon: "rect",
      },
      xAxis: {
        type: "category",
        data: xLabels,
      },
      yAxis: {
        type: "value",
        max: max, // 계산된 최대값
        interval: interval, // 계산된 간격
        axisLabel: {
          fontSize: 9, // 글꼴 크기 조정
          formatter: (value) => `${value}`, // props로 전달받은 단위를 사용
        },
      },
      series: [
        {
          name: "DLI",
          type: "line",
          data: data.data.map((item) => item.value),
          areaStyle: {
            color: "rgba(69, 69, 255)",
          },
          lineStyle: {
            color: "#AEAEAE00",
          },
          showSymbol: false,
          markArea: {
            itemStyle: {
              color: "rgba(79, 254, 35, 0.3)",
            },
            data: [[{ yAxis: 12 }, { yAxis: 15 }]],
          },
        },
      ],
    };

    chartInstance.setOption(option);
    return () => {
      chartInstance.dispose();
    };
  }, [data, isLoading, error]);
  return <div ref={chartRef} className="w-[320px] h-[240px]" />;
};

export default MainLineChart;

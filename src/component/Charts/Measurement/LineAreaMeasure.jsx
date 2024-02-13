import * as echarts from "echarts";
import React, { useEffect, useRef } from "react";
import { useChartData } from "../../utils/api/Charts/ChartAPI";
import MeasureName from "./MeasureName";

const LineAreaMeasure = ({ APIoption, ChartName, registerChart, chartKey }) => {
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

    const xLabels = data.data.map((item) => {
      const date = new Date(item.kr_time);
      return `${date.getHours().toString().padStart(2, "0")}:${date
        .getMinutes()
        .toString()
        .padStart(2, "0")}`;
    });
    const option = {
      grid: {
        left: "1%",
        bottom: "0%", // 필요에 따라 이 값을 조정
        right: "1%",
        top: "0%",
      },
      xAxis: {
        type: "category",
        data: xLabels,
        axisLabel: {
          show: false,
        },
        splitLine: {
          show: false, // Y축에 대한 배경선을 숨깁니다.
        },
      },
      yAxis: {
        axisLabel: {
          show: false,
        },
        splitLine: {
          show: false, // Y축에 대한 배경선을 숨깁니다.
        },
      },
      series: [
        {
          name: ChartName,
          type: "line",
          data: data.data.map((item) => item.value),
          areaStyle: {
            color: "#eca495",
          },
          lineStyle: {
            color: "#e15683",
          },
          itemStyle: {
            color: "#eca495", // 여기서 점의 색상을 변경합니다.
          },
          showSymbol: false,
        },
      ],
    };

    chartInstance.setOption(option);

    if (registerChart) {
      registerChart(chartKey, chartInstance);
    }

    return () => {
      chartInstance.dispose();
    };
  }, [data, isLoading, error]);
  return (
    <div className="flex flex-row">
      <MeasureName ChartName={ChartName} />
      <div
        ref={chartRef}
        className="w-full h-[25px] bg-white border-b-[1px] border-gray-400"
      />
    </div>
  );
};

export default LineAreaMeasure;

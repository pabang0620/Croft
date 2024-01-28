import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { useChartData } from "../../utils/api/Charts/ChartAPI";
import { format, subDays } from "date-fns";

const WaterLine2Chart = ({
  APIoption,
  ChartName,
  registerChart,
  chartKey,
  unit,
}) => {
  const chartRef = useRef(null);

  const startDate = format(subDays(new Date(), +1), "yyyy-MM-dd");
  const endDate = format(subDays(new Date(), -1), "yyyy-MM-dd");
  const today = format(new Date(), "yyyy-MM-dd");
  const formattedStartDate = format(new Date(startDate), "MM.dd");
  const formattedToday = format(new Date(today), "MM.dd");

  const { data, isLoading, error } = useChartData(
    `http://croft-ai.iptime.org:40401/api/v1/gh_data_item?start_time=${startDate}&end_time=${endDate}&data_type=${APIoption}&group_by=hour`,
    `chartData0-218`
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

    const yesterdayData = data.data.filter((item) =>
      item.kr_time.startsWith(startDate)
    );
    const todayData = data.data.filter((item) =>
      item.kr_time.startsWith(today)
    );

    const yesterdayAvg = yesterdayData.map((item) => item.avg);
    const todayAvg = todayData.map((item) => item.avg);

    const xLabels = [];
    for (let hour = 0; hour < 24; hour++) {
      xLabels.push(format(new Date(2020, 0, 1, hour), "    H시")); // 'H' 형식으로 시간 표시
    }

    const option = {
      grid: {
        // 다른 설정을 유지하면서 bottom만 조정
        bottom: "20%", // 필요에 따라 이 값을 조정
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
        // triggerOn: "mousemove", // 마우스 움직임에 반응하도록 설정
        formatter: function (params) {
          let tooltipContent = `${params[0].name}<br/>`; // 날짜 표시
          params.forEach((param) => {
            // 각 시리즈의 데이터를 추가
            tooltipContent += `${param.seriesName}: ${param.value} ${unit}<br/>`;
          });
          return tooltipContent;
        },
      },
      legend: {
        data: [formattedStartDate, formattedToday],
        textStyle: {
          color: "#333", // 범례 텍스트 색상
          fontSize: 12, // 범례 텍스트 크기
        },
        itemWidth: 10,
        itemHeight: 10,
        icon: "rect",
        left: "12%", // 가로 중앙에 위치
        top: "15%", // 타이틀 아래에 위치하도록 조정
      },
      xAxis: {
        type: "category",
        data: xLabels,
        axisLabel: {
          interval: 1,
          fontSize: 10,
        },
      },
      yAxis: {
        axisLabel: {
          fontSize: 10,
          margin: "0",
        },
      },
      series: [
        {
          name: formattedStartDate,
          type: "line",
          data: yesterdayAvg, // 어제 데이터
          color: "rgba(79, 254, 35, 0.3)", // #4FFE234D와 유사한 RGBA 색상
          showSymbol: false,
          smooth: true,
        },
        {
          name: formattedToday,
          type: "line",
          data: todayAvg,
          showSymbol: false,
          smooth: true,
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
  }, [data, isLoading, error]); // 의존성 배열에 API 응답 데이터를 포함합니다.

  // return <div ref={chartRef} style={{ width: "480px", height: "380px" }} />;
  return <div ref={chartRef} className="w-full h-full bg-white rounded-lg" />;
};

export default WaterLine2Chart;

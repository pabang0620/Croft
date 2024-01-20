import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { useChartData } from "../../utils/api/Charts/ChartAPI";
import { format, subDays } from "date-fns";

const MainFootLineChart = ({
  ChartName,
  APIoption,
  unit,
  registerChart,
  chartKey,
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

    const xLabels = yesterdayData.map((item) => {
      const date = new Date(item.kr_time);
      return `${date.getHours().toString().padStart(2, "0")}:${date
        .getMinutes()
        .toString()
        .padStart(2, "0")}`;
    });

    const option = {
      grid: {
        // 다른 설정을 유지하면서 bottom만 조정
        bottom: "20%", // 필요에 따라 이 값을 조정
      },
      title: {
        text: ChartName,
        top: "5%",
        left: "2%",
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
      graphic: [
        {
          id: "hoverData",
          type: "text",
          left: "center", // 차트 가운데에 위치
          top: 10, // 상단에서 10px 아래에 위치
          style: {
            text: "0", // 초기 텍스트 설정
            fontSize: 16,
            fontWeight: "bold",
            fill: "#333", // 텍스트 색상
            textAlign: "center", // 텍스트 정렬 방식
          },
          z: 100,
        },
      ],
      xAxis: {
        type: "category",
        data: xLabels,
      },
      yAxis: {
        axisLabel: {
          fontSize: 10,
          margin: "0",
        },
        // type: "value",
        // min: 0,
        // max: 600,
        // interval: 100,
      },
      series: [
        {
          name: formattedStartDate,
          type: "line",
          data: yesterdayAvg, // 어제 데이터
          lineStyle: {
            color: "#AEAEAE00", // 라인 색상을 #AEAEAE로 설정
          },
          areaStyle: {
            color: "#AEAEAE90",
          },
          showSymbol: false,
        },
        {
          name: formattedToday,
          type: "line",
          data: todayAvg,
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

    chartInstance.on("mouseover", function (params) {
      if (params.componentType === "series") {
        const dataValue = params.value; // 호버된 데이터 포인트의 값
        chartInstance.setOption({
          graphic: {
            // 그래픽 요소 업데이트
            style: {
              text: `${dataValue} ${unit}`, // 동적으로 텍스트 설정
            },
          },
        });
      }
    });

    chartInstance.setOption(option);

    if (registerChart) {
      registerChart(chartKey, chartInstance);
    }

    return () => {
      chartInstance.dispose();
    };
  }, [data, isLoading, error]); // 의존성 배열에 API 응답 데이터를 포함합니다.

  return <div ref={chartRef} className="w-full h-full bg-white rounded-lg" />;
};

export default MainFootLineChart;

import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { useChartData } from "../../utils/api/Charts/ChartAPI";

const MainLineAreaChart = ({ APIoption, ChartName }) => {
  const chartRef = useRef(null);

  const today = new Date();
  today.setDate(today.getDate() + 1);
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  const { data, isLoading, error } = useChartData(
    `http://croft-ai.iptime.org:40401/api/v1/gh_data_item?start_time=${yesterday}&end_time=${today}&data_type=${APIoption}&group_by=5min`,
    `chartData-218`
  );

  useEffect(() => {
    if (isLoading || error) {
      return; // 로딩 중이거나 에러가 발생한 경우 바로 리턴합니다.
    }

    if (!data || !data.data) {
      return; // 데이터가 없거나 형식이 잘못된 경우 바로 리턴합니다.
    }

    const chartInstance = echarts.init(chartRef.current);

    // API 데이터로부터 x축과 y축 데이터를 추출합니다.
    const xData = data.data.map((item) => item.kr_time.substring(11, 16)); // "HH:MM" 포맷
    const yData = data.data.map((item) => item.value); // 바꿔줘야함

    const option = {
      title: {
        text: ChartName,
        top: "5%",
        left: "2%",
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
        },
      },
      legend: {
        data: ["10.25", "10.26"],
        textStyle: {
          color: "#333", // 범례 텍스트 색상
          fontSize: 12, // 범례 텍스트 크기
        },
        itemWidth: 10,
        itemHeight: 10,
        icon: "rect",
      },
      xAxis: {
        axisLabel: {
          fontSize: 10,
          margin: "10",
        },
        type: "category",
        boundaryGap: false, // 선 차트에 대해 경계 간격을 없앰
        data: xData,
      },
      yAxis: {
        axisLabel: {
          fontSize: 10,
          margin: "10",
        },
        type: "value",
        min: 0,
        max: 100,
        interval: 10,
      },

      series: [
        {
          name: "10.25",
          type: "line",
          data: yData, // 10.25 데이터
          lineStyle: {
            color: "#AEAEAE", // 라인 색상을 #AEAEAE로 설정
          },
          showSymbol: false,
        },
        {
          name: "10.26",
          type: "line",
          data: [0, 17, 28, 38, 44, 52, 61, 57, 78, 84, 96, 99, 100], // 10.26 데이터 데이터가 13개가 들어오지 않을경우를 생각해야함
          lineStyle: {
            color: "#AEAEAE", // 라인 색상을 #AEAEAE로 설정
          },
          areaStyle: {
            color: "rgba(69, 69, 255, 0.3)", // 영역 색상을 blue의 30% 투명도로 설정
          },
          showSymbol: false,
        },
        {
          name: "바 데이터",
          type: "bar",
          data: [0, 34, 37, 24, 4, 40, 15, 25, 35, 5, 18, 22, 2], // 10.25 데이터
          barWidth: "25%", // 막대 너비
          color: "rgba(69, 69, 255, 0.8)", // 영역 색상을 blue의 30% 투명도로 설정
          barGap: "0%", // 다른 시리즈의 막대와의 간격
        },
        {
          name: "바 데이터",
          type: "bar",
          data: [0, 5, 12, 16, 18, 25, 29, 34, 37, 24, 40, 15, 20], // 10.25 데이터
          barWidth: "25%", // 막대 너비
          color: "#AEAEAE", // 라인 색상을 #AEAEAE로 설정
          barGap: "0%", // 다른 시리즈의 막대와의 간격
        },
      ],
    };

    chartInstance.setOption(option);

    return () => {
      chartInstance.dispose();
    };
  }, [data, isLoading, error]); // 의존성 배열에 API 응답 데이터를 포함합니다.

  return <div ref={chartRef} style={{ width: "480px", height: "380px" }} />;
};

export default MainLineAreaChart;

import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { useChartData } from "../../utils/api/Charts/ChartAPI";
import { format } from "date-fns";

const MainRTRLineChart = ({ ChartName, unit, registerChart, chartKey }) => {
  const chartRef = useRef(null);

  // RTR 데이터를 가져오는 API 호출
  const { data, isLoading, error } = useChartData(
    "http://croft-ai.iptime.org:40401/api/v1/farms/rtr/aweek",
    "chartData-RTR"
  );

  useEffect(() => {
    if (!isLoading && !error && data && data.data) {
      const chartInstance = echarts.init(chartRef.current);
      const filteredData = data.data.filter((item) =>
        Number.isFinite(item.day_rtr)
      );

      // 날짜, RTR 및 평균 온도 데이터 추출
      const xLabels = data.data.map((item) =>
        format(new Date(item.date), "EE")
      );

      const rtrValues = data.data.map((item) => item.day_rtr);

      // console.log(rtrValues);

      // 맥스값 로직
      const maxValue = Math.max(...rtrValues);
      const roundedValue = Math.ceil(maxValue / 5) * 5;

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
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
          formatter: (params) => {
            return `${params[0].name}<br/>${ChartName}: ${params[0].value} ${unit}`;
          },
        },
        xAxis: {
          type: "category",
          data: xLabels,
          axisLabel: {
            fontSize: 8, // 폰트 크기 조정
          },
        },
        yAxis: {
          type: "value",
          max: roundedValue, // 계산된 최대값
          interval: 5, // 계산된 간격
          axisLabel: {
            fontSize: 9, // 글꼴 크기 조정
            formatter: (value) => `${value}`, // props로 전달받은 단위를 사용
          },
        },
        series: [
          {
            name: ChartName,
            type: "line",
            smooth: true,
            data: rtrValues, // y축 데이터
            itemStyle: {
              // 데이터 포인트 색상 설정
              color: "tomato",
              borderWidth: 2, // 포인트의 테두리 두께
              borderColor: "tomato", // 포인트의 테두리 색상
            },
            markArea: {
              itemStyle: {
                color: "rgba(79, 254, 35, 0.3)", // #4FFE234D와 유사한 RGBA 색상
              },
              data: [
                [
                  { yAxis: 2 }, // 시작 y축 값
                  { yAxis: 3 }, // 끝 y축 값 (차트 최대값까지)
                ],
              ],
            },
          },
        ],
      };
      chartInstance.setOption(option);

      chartInstance.on("mouseover", function (params) {
        if (params.componentType === "series") {
          const dataValue = params.value; // 호버된 데이터 포인트의 값
          chartInstance.setOption({
            graphic: {
              // 그래픽 요소 업데이트
              style: {
                text: `${dataValue}`, // 동적으로 텍스트 설정
              },
            },
          });
        }
      });

      registerChart(chartKey, chartInstance);

      return () => {
        chartInstance.dispose();
      };
    }
  }, [data, isLoading, error]); // 의존성 배열에 API 응답 데이터를 포함합니다.

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return <div ref={chartRef} className="w-full h-full bg-white rounded-lg" />;
};

export default MainRTRLineChart;

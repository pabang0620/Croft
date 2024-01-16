import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { useChartData } from "../../utils/api/Charts/ChartAPI";
import { format } from "date-fns";

const MainBarChart = ({ ChartName }) => {
  const chartRef = useRef(null);

  const { data, isLoading, error } = useChartData(
    "http://croft-ai.iptime.org:40401/api/v1/farms/photo_period/aweek",
    "chartData-PhotoPeriod"
  );

  console.log(data);

  useEffect(() => {
    if (!isLoading && !error && data && data.data) {
      const chartInstance = echarts.init(chartRef.current);

      // 날짜와 DLI 값을 추출
      const dates = data.data.map((item) =>
        format(new Date(item.kr_time), "EE")
      );
      const periodValue = data.data.map((item) => item.photo_period_hour);

      const option = {
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
        },
        xAxis: {
          type: "category",
          data: dates,
          axisLabel: {
            fontSize: 10,
          },
        },
        yAxis: {
          type: "value",
          axisLabel: {
            fontSize: 10,
          },
        },
        series: [
          {
            name: "DLI",
            type: "bar",
            data: periodValue,
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

      return () => {
        chartInstance.dispose();
      };
    }
  }, [data, isLoading, error]); // 의존성 배열에 API 응답 데이터를 포함합니다.

  // 로딩 및 오류 상태 처리
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return <div ref={chartRef} className="w-[320px] h-[240px]" />;
};

export default MainBarChart;

// 필요한 라이브러리를 임포트합니다.
import * as echarts from "echarts";
import React, { useEffect, useRef } from "react";
import { useChartData } from "../../utils/api/Charts/ChartAPI";
import { format, addDays, subDays } from "date-fns";

const Bar2Line1Chart = ({ ChartName }) => {
  const today = new Date();
  const tomorrow = addDays(today, 1);
  const formattedTomorrow = format(tomorrow, "yyyy-MM-dd");

  const twoDaysAgo = subDays(today, 2);
  const formattedTwoDaysAgo = format(twoDaysAgo, "yyyy-MM-dd");

  const realToday = format(today, "yyyy-MM-dd");
  const chartRef = useRef(null);
  const { data, isLoading, error } = useChartData(
    `http://croft-ai.iptime.org:40401/api/v1/gh_data_item?start_time=${formattedTwoDaysAgo}&end_time=${formattedTomorrow}&data_type=220&data_type=219&group_by=hour`,
    "chartData-mixDLI"
  );

  useEffect(() => {
    if (!isLoading && !error && data && data.data) {
      const data219 = data.data
        .filter(
          (item) =>
            item.data_type_id === 219 &&
            item.kr_time.startsWith(realToday) &&
            new Date(item.kr_time).getHours() % 2 === 0
        )
        .map((item) => ({ time: item.kr_time, value: item.avg }));

      const data220 = data.data
        .filter(
          (item) =>
            item.data_type_id === 220 &&
            item.kr_time.startsWith(realToday) &&
            new Date(item.kr_time).getHours() % 2 === 0
        )
        .map((item) => ({ time: item.kr_time, value: item.high }));

      // X축 라벨 생성 (0시 ~ 24시, 2시간 간격)
      const xLabels = [];
      for (let i = 0; i <= 24; i += 2) {
        xLabels.push(`${i}시`);
      }

      const values = data219.map((item) => item.value);
      const values2 = data220.map((item) => item.value);

      // 최대값 찾기
      const maxData220 = Math.max(...values);
      const maxData221 = Math.max(...values2);

      // 최대값의 10% 계산
      const tenPercentOfMax = maxData220 * 0.1;
      const tenPercentOfMax2 = maxData221 * 0.1;

      // 최대값에 10%를 더하고 5의 배수로 만들기
      const adjustedValue = Math.ceil((maxData220 + tenPercentOfMax) / 50) * 50;
      const adjustedValue2 = Math.ceil((maxData221 + tenPercentOfMax2) / 5) * 5;

      const intervalue = adjustedValue / 10;
      const intervalue2 = adjustedValue2 / 10;

      const multipliedValues = data220.map((item) =>
        (item.value * 0.7).toFixed(2)
      );

      console.log(xLabels);
      console.log(data219);

      const chartInstance = echarts.init(chartRef.current);
      // 최대값 구하는 로직

      const option = {
        grid: {
          right: "8%", // 차트의 오른쪽 여백을 줄임
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
            type: "cross",
          },
        },
        legend: {
          data: ["외부 광량", "온실 광량", "DLI"],
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
          data: xLabels,
        },
        yAxis: [
          {
            axisLabel: {
              fontSize: 10,
              margin: "10",
            },
            type: "value",
            min: 0,
            max: adjustedValue, // 범위가 안나와있음
            interval: intervalue,
            name: "외부 광량",
          },
          {
            // 두 번째 Y축 (새로운 설정)
            axisLabel: {
              fontSize: 10,
              margin: "10",
            },
            type: "value",
            min: 0,
            max: adjustedValue2, // 범위가 안나와있음
            interval: intervalue2,
            name: "DLI",
          },
        ],
        series: [
          {
            name: "외부 광량",
            type: "bar",
            yAxisIndex: 0, // 첫 번째 Y축 사용
            data: data219, // 10.25 데이터
            barWidth: "25%", // 막대 너비
            color: "#4472c4",
            barGap: "10%", // 다른 시리즈의 막대와의 간격
            markArea: {
              itemStyle: {
                color: "rgba(79, 254, 35, 0.3)", // #4FFE234D와 유사한 RGBA 색상
              },
              data: [
                [
                  { yAxis: 50 }, // 시작 y축 값
                  { yAxis: 70 }, // 끝 y축 값 (차트 최대값까지)
                ],
              ],
            },
          },
          {
            name: "온실 광량",
            type: "bar",
            data: multipliedValues,
            barWidth: "25%", // 막대 너비
            color: "rgba(79, 254, 35, 0.5)", // #4FFE234D와 유사한 RGBA 색상
            barGap: "10%", // 다른 시리즈의 막대와의 간격
          },
          {
            name: "DLI",
            type: "line",
            yAxisIndex: 1, // 두 번째 Y축 사용
            data: data220,
            lineStyle: {
              color: "rgb(255, 0, 0 , 0.5)", // 빨강
            },
            itemStyle: {
              color: "rgb(255, 0, 0 , 0.5)", // 빨강
            },
          },
        ],
      };

      chartInstance.setOption(option);

      return () => {
        chartInstance.dispose();
      };
    }
  }, [data]);

  return <div ref={chartRef} style={{ width: "100%", height: "100%" }} />;
  // return <div ref={chartRef} style={{ width: "480px", height: "380px" }} />;
};

export default Bar2Line1Chart;

import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { useChartData } from "../../utils/api/Charts/ChartAPI";
import { format, subDays } from "date-fns";

const MainBarLine2Chart = ({ ChartName, APIoption }) => {
  const chartRef = useRef(null);

  // 일주일 전과 내일 날짜를 계산
  const startDate = format(subDays(new Date(), -6), "yyyy-MM-dd");
  const endDate = format(subDays(new Date(), +1), "yyyy-MM-dd");

  const { data, isLoading, error } = useChartData(
    `http://croft-ai.iptime.org:40401/api/v1/gh_data_item?start_time=${startDate}&end_time=${endDate}&data_type=${APIoption}&group_by=day`,
    `chartData-${APIoption}`
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

    // 데이터에서 227과 198의 데이터를 분리하여 추출
    const data227 = data.data
      .filter((item) => item.data_type_id === 227)
      .map((item) => item.avg);
    const data198 = data.data
      .filter((item) => item.data_type_id === 198)
      .map((item) => item.avg);

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
          data: data198,
          markArea: {
            itemStyle: {
              color: "rgba(79, 254, 35, 0.3)", // #4FFE234D와 유사한 RGBA 색상
            },
            data: [
              [
                { yAxis: 20 }, // 시작 y축 값
                { yAxis: 25 }, // 끝 y축 값 (차트 최대값까지)
              ],
            ],
          },
        },
        {
          name: "평균 점수",
          type: "line",
          data: data227,
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

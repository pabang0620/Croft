import * as echarts from "echarts";
import React, { useEffect, useRef } from "react";
import { useChartData } from "../../utils/api/Charts/ChartAPI";

const LineChart = ({ ChartName, APIoption }) => {
  const chartRef = useRef(null);

  // 오늘 날짜를 기준으로 날짜 계산
  const today = new Date();
  const sixDaysAgo = new Date(today);
  sixDaysAgo.setDate(sixDaysAgo.getDate() - 6);
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  // 날짜를 'YYYY-MM-DD' 형식으로 변환
  const formatDateString = (date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const startDate = formatDateString(sixDaysAgo);
  const endDate = formatDateString(tomorrow);

  const { data, isLoading, error } = useChartData(
    `http://croft-ai.iptime.org:40401/api/v1/gh_data_item?start_time=${startDate}&end_time=${endDate}&data_type=${APIoption}&group_by=day`,
    `chartData-line`
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
    // 평균습도

    const dataValue = data.data.map((item) => item.avg);

    // console.log(`${APIoption}`, data);
    // console.log(dataValue);

    const minSeriesValue = Math.floor(Math.min(...dataValue) / 5) * 5;
    const maxSeriesValue = Math.ceil(Math.max(...dataValue) / 5) * 5;
    const uniqueDates = new Set();

    // x축 라벨 배열 생성
    const xLabels = data.data
      .map((item) => {
        const date = new Date(item.kr_time);
        const formattedDate = `${date.getMonth() + 1}.${date.getDate()}`;
        uniqueDates.add(formattedDate);
        return formattedDate;
      })
      .filter((date, index, self) => {
        return self.indexOf(date) === index; // 중복 제거
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
        data: [ChartName],
        textStyle: {
          color: "#333", // 범례 텍스트 색상
          fontSize: 12, // 범례 텍스트 크기
        },
        itemWidth: 10,
        itemHeight: 10,
        icon: "rect",
        left: "3%",
        top: "10%",
      },
      xAxis: {
        type: "category",
        data: xLabels,
      },
      yAxis: {
        axisLabel: {
          fontSize: 10,
          margin: "10",
        },
        type: "value",
        min: minSeriesValue,
        max: maxSeriesValue,
        interval: 5,
      },
      series: [
        {
          smooth: true,
          name: ChartName,
          type: "line",
          data: dataValue,
          markArea: {
            itemStyle: {
              color: "rgba(79, 254, 35, 0.3)", // #4FFE234D와 유사한 RGBA 색상
            },
            data: [
              [
                { yAxis: 15 }, // 시작 y축 값
                { yAxis: 20 }, // 끝 y축 값 (차트 최대값까지)
              ],
            ],
          },
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
  }, [data]);

  // return <div ref={chartRef} style={{ width: "600px", height: "380px" }} />;
  return <div ref={chartRef} style={{ width: "100%", height: "100%" }} />;
};

export default LineChart;

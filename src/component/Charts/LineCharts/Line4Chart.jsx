import * as echarts from "echarts";
import React, { useEffect, useRef } from "react";
import { useChartData } from "../../utils/api/Charts/ChartAPI";

const Line4Chart = () => {
  const chartRef = useRef(null);

  const { data, isLoading, error } = useChartData(
    `http://croft-ai.iptime.org:40401/api/v1/farms/measurement/day?data_type=227&data_type=198&data_type=205&data_type=241&data_type=204`,
    `chartData-line4`
  );

  console.log("line", data);

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

    const data227 = data.data
      .filter((item) => item.data_type_id === 227)
      .map((item) => item.value);
    const data198 = data.data
      .filter((item) => item.data_type_id === 198)
      .map((item) => item.value);
    const data205 = data.data
      .filter((item) => item.data_type_id === 205)
      .map((item) => item.value);
    const data241 = data.data
      .filter((item) => item.data_type_id === 241)
      .map((item) => item.value);
    const data204 = data.data
      .filter((item) => item.data_type_id === 204)
      .map((item) => item.value);

    // const xLabels = data.data.map((item) => new Date(item.kr_time).getHours());

    const option = {
      tooltip: {
        trigger: "axis",
        axisPointer: { type: "cross" },
      },
      legend: {
        data: ["외부온도", "온실온도", "VENT 온도 셋팅", "Heating 온도 셋팅"],
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
        // data: xLabels,
      },
      yAxis: {
        axisLabel: {
          fontSize: 10,
          margin: "10",
        },
        type: "value",
        min: 0,
        max: 25,
        interval: 5,
      },
      series: [
        {
          smooth: true,
          name: "외부온도",
          type: "line",
          data: data227,
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
        {
          smooth: true,
          name: "온실온도",
          type: "line",
          data: data198,
          markArea: {
            itemStyle: {
              color: "rgb(255, 0, 0 , 0.5)", // 빨강
            },
            data: [
              [
                { xAxis: 2 }, // 시작 y축 값
                { xAxis: 3 }, // 끝 y축 값 (차트 최대값까지)
              ],
            ],
          },
        },
        {
          smooth: true,
          name: "VENT 온도 셋팅",
          type: "line",
          data: data205,
        },
        {
          smooth: true,
          name: "VENT 온도 셋팅",
          type: "line",
          data: data241,
        },
        {
          smooth: true,
          name: "Heating 온도 셋팅",
          type: "line",
          data: data204,
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
  }, [data]); // 의존성 배열에 data 추가

  return (
    <>
      <div ref={chartRef} style={{ width: "600px", height: "380px" }} />;
    </>
  );
};

export default Line4Chart;

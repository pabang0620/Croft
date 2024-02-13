import * as echarts from "echarts";
import React, { useEffect, useRef } from "react";
import { useChartData } from "../../utils/api/Charts/ChartAPI";

const GreenHouseTemper1 = ({ dataoff }) => {
  // 해당 차트는 날짜 선택하는 부분이 api에 없어서 날짜 데이터를 props로 넣어서 호출할 수 없음
  const chartRef = useRef(null);

  const { data, isLoading, error } = useChartData(
    `http://croft-ai.iptime.org:40401/api/v1/farms/measurement/day?data_type=227&data_type=198&data_type=205&data_type=241&data_type=204&data_type=206&data_type=213&data_type=208&data_type=210`,
    `chartData-line44`
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

    const data206 = data.data
      .filter((item) => item.data_type_id === 206)
      .map((item) => item.value);
    const data213 = data.data
      .filter((item) => item.data_type_id === 213)
      .map((item) => item.value);
    const data208 = data.data
      .filter((item) => item.data_type_id === 208)
      .map((item) => item.value);
    const data210 = data.data
      .filter((item) => item.data_type_id === 210)
      .map((item) => item.value);

    const maxData198 = Math.ceil(Math.max(...data198) / 5) * 5;

    const uniqueTimes = Array.from(
      new Set(data.data.map((item) => item.kr_time))
    );

    let xLabels;

    if (uniqueTimes.length < 300) {
      // uniqueTimes의 길이가 200개 미만일 경우, 시간과 분 정보를 포함
      xLabels = uniqueTimes.map((time) => {
        const date = new Date(time);
        return `${date.getHours()}:${
          date.getMinutes() < 10 ? "0" : ""
        }${date.getMinutes()}`;
      });
    } else {
      // 길이가 200개 이상인 경우, 시간(시) 정보만 포함
      xLabels = uniqueTimes.map((time) => new Date(time).getHours());
    }

    const series = [
      {
        smooth: true,
        name: "외부온도",
        type: "line",
        data: data227,
        markArea: {
          itemStyle: {
            color: "rgba(79, 254, 35, 0.3)", // #4FFE234D와 유사한 RGBA 색상
          },
        },
      },
      {
        smooth: true,
        name: "온실온도",
        type: "line",
        data: data198,
        markArea: {
          itemStyle: {
            color: "rgb(255, 0, 0 , 0.2)", // 빨강
          },
        },
      },
    ];

    // RTR 데이터 처리
    if (!dataoff) {
      series.push(
        {
          smooth: true,
          name: "VENT 온도 셋팅",
          type: "line",
          data: data205,
          lineStyle: {
            type: "dashed", // 점선 스타일로 변경
            color: "#FF0000", // 색상을 빨간색으로 설정
          },
          itemStyle: {
            color: "#FF0000", // 선 및 포인트의 색상을 빨간색으로 설정
          },
          symbol: "none", // 데이터 포인트 위의 점 제거
        },
        {
          smooth: true,
          name: "VENT 온도 셋팅",
          type: "line",
          data: data241,
          lineStyle: {
            type: "dashed", // 점선 스타일로 변경
            color: "#FF0000", // 색상을 빨간색으로 설정
          },
          itemStyle: {
            color: "#FF0000", // 선 및 포인트의 색상을 빨간색으로 설정
          },
          symbol: "none", // 데이터 포인트 위의 점 제거
        },
        {
          smooth: true,
          name: "Heating 온도 셋팅",
          type: "line",
          data: data204,
          lineStyle: {
            type: "dashed", // 점선 스타일로 변경
            color: "black", // 색상을 빨간색으로 설정
          },
          itemStyle: {
            color: "black", // 선 및 포인트의 색상을 빨간색으로 설정
          },
          symbol: "none", // 데이터 포인트 위의 점 제거
        }
      );
    }

    if (!dataoff) {
      series.push(
        {
          type: "text",
          left: "5%", // VENT 텍스트의 x 좌표
          top: "30%", // VENT 텍스트의 y 좌표
          style: {
            text: "VENT", // 표시할 텍스트
            fontSize: 10,
            fontWeight: "bold",
            fill: "#fff", // 글자색을 하얀색으로 설정
            backgroundColor: "#f00", // 배경색을 빨간색으로 설정
            borderRadius: 10, // 배경의 둥근 모서리
            padding: 2,
          },
        },
        {
          type: "text",
          left: "5%", // Heat 텍스트의 x 좌표
          top: "34.5%", // Heat 텍스트의 y 좌표
          style: {
            text: "HEAT", // 표시할 텍스트
            fontSize: 10,
            fontWeight: "bold",
            fill: "#fff", // 글자색을 하얀색으로 설정
            backgroundColor: "black", // 배경색을 빨간색으로 설정
            borderRadius: 10, // 배경의 둥근 모서리
            padding: 2,
          },
        }
      );
    }
    const option = {
      grid: [
        // 기존 차트의 grid 설정
        { left: "5%", right: "2%", top: "10%", height: "60%" },
        // 4개의 추가 차트에 대한 grid 설정
        { left: "5%", right: "2%", top: "80%", height: "4%" },
        { left: "5%", right: "2%", top: "85%", height: "4%" },
        { left: "5%", right: "2%", top: "90%", height: "4%" },
        { left: "5%", right: "2%", top: "95%", height: "4%" },
      ],
      xAxis: [
        // 첫 번째 차트의 X축 설정
        {
          type: "category",
          gridIndex: 0,
          data: xLabels,
          axisLine: {
            show: false, // x축 라인 숨기기
          },
          axisTick: {
            show: false,
          },
        },
        // 4개의 추가 차트에 대한 X축 설정
        {
          type: "category",
          gridIndex: 1,
          data: xLabels,
          axisLabel: { show: false },
          splitLine: { show: false },
          axisLine: {
            show: false, // x축 라인 숨기기
          },
          axisTick: {
            show: false,
          },
        },
        {
          type: "category",
          gridIndex: 2,
          data: xLabels,
          axisLabel: { show: false },
          splitLine: { show: false },
          axisLine: {
            show: false, // x축 라인 숨기기
          },
          axisTick: {
            show: false,
          },
        },
        {
          type: "category",
          gridIndex: 3,
          data: xLabels,
          axisLabel: { show: false },
          splitLine: { show: false },
          axisLine: {
            show: false, // x축 라인 숨기기
          },
          axisTick: {
            show: false,
          },
        },
        {
          type: "category",
          gridIndex: 4,
          data: xLabels,
          axisLabel: { show: false },
          splitLine: { show: false },
          axisLine: {
            show: false, // x축 라인 숨기기
          },
          axisTick: {
            show: false,
          },
        },
      ],
      yAxis: [
        // 첫 번째 차트의 Y축 설정
        { type: "value", gridIndex: 0 },
        // 4개의 추가 차트에 대한 Y축 설정
        {
          type: "value",
          gridIndex: 1,
          axisLabel: { show: false },
          splitLine: { show: false },
        },
        {
          type: "value",
          gridIndex: 2,
          axisLabel: { show: false },
          splitLine: { show: false },
        },
        {
          type: "value",
          gridIndex: 3,
          axisLabel: { show: false },
          splitLine: { show: false },
        },
        {
          type: "value",
          gridIndex: 4,
          axisLabel: { show: false },
          splitLine: { show: false },
        },
      ],
      title: {
        text: "평균 온도",
        top: "5%",
        left: "2%",
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
        },
        formatter: function (params) {
          let result = params[0].axisValueLabel + "<br/>";
          // 'params'는 현재 호버된 포인트에 대한 시리즈의 배열입니다.
          // 필요한 모든 시리즈 정보를 반복하여 추가합니다.
          params.forEach((item) => {
            // 각 시리즈에 대한 정보를 'result' 문자열에 추가
            result +=
              item.marker + " " + item.seriesName + ": " + item.value + "<br/>";
          });
          return result;
        },
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

      series: [
        // 기존 차트 시리즈 설정
        {
          smooth: true,
          name: "외부온도",
          type: "line",
          data: data227,
          // 추가 설정...
        },
        {
          smooth: true,
          name: "온실온도",
          type: "line",
          data: data198,
          // 추가 설정...
        },
        // 이하 추가 차트 시리즈 설정
        {
          name: "VENT(LEE)",
          type: "line",
          xAxisIndex: 1,
          yAxisIndex: 1,
          data: data206,
          areaStyle: {
            color: "#eca495",
          },
          lineStyle: {
            color: "#e15683",
          },
          itemStyle: {
            color: "#eca495", // 여기서 점의 색상을 변경합니다.
          },
        },
        {
          name: "VENT(WIND)",
          type: "line",
          xAxisIndex: 2,
          yAxisIndex: 2,
          data: data213,
          areaStyle: {
            color: "#eca495",
          },
          lineStyle: {
            color: "#e15683",
          },
          itemStyle: {
            color: "#eca495", // 여기서 점의 색상을 변경합니다.
          },
        },
        {
          name: "SCREEN(UP)",
          type: "line",
          xAxisIndex: 3,
          yAxisIndex: 3,
          data: data208,
          areaStyle: {
            color: "#eca495",
          },
          lineStyle: {
            color: "#e15683",
          },
          itemStyle: {
            color: "#eca495", // 여기서 점의 색상을 변경합니다.
          },
        },
        {
          name: "SCREEN(DOWN)",
          type: "line",
          xAxisIndex: 4,
          yAxisIndex: 4,
          data: data210,
          areaStyle: {
            color: "#eca495",
          },
          lineStyle: {
            color: "#e15683",
          },
          itemStyle: {
            color: "#eca495", // 여기서 점의 색상을 변경합니다.
          },
        },
      ],
    };

    chartInstance.setOption(option);
    return () => {
      chartInstance.dispose();
    };
  }, [data]); // 의존성 배열에 data 추가
  return (
    <>
      <div ref={chartRef} className="w-full h-full" />
    </>
  );
};

export default GreenHouseTemper1;

import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { useChartData } from '../../utils/api/Charts/ChartAPI';

const BarOtherColorChart = ({ ChartName, APIoption, date }) => {
  const chartRef = useRef(null);

  const { data, isLoading, error } = useChartData(
    `http://croft-ai.iptime.org:40401/api/v1/farms/measurement/day?data_type=${APIoption}`,
    `chartData-line4`
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
    // 기본 eCharts 인스턴스를 생성
    const chartInstance = echarts.init(chartRef.current);

    const seenHours = new Set();
    const filteredData = data.data.filter((item) => {
      const hour = date ? date?.getHours() : new Date().getHours();

      if (hour % 2 === 0 && !seenHours.has(hour)) {
        seenHours.add(hour);
        return true; // 해당 시간대의 첫 번째 데이터 항목만 포함
      }

      return false; // 이외의 데이터 항목은 제외
    });

    const xLabels = [];
    for (let hour = 0; hour <= 24; hour += 2) {
      xLabels.push(`${hour}시`); // "시" 추가
    }
    // eCharts 옵션 설정

    const seriesData = filteredData.map((item) => item.value);
    const maxSeriesValue = Math.max(...seriesData);

    // 최대값을 5의 배수로 올림
    const maxYAxis = Math.ceil(maxSeriesValue / 5) * 5;
    const option = {
      grid: {
        // 다른 설정을 유지하면서 bottom만 조정
        bottom: '20%', // 필요에 따라 이 값을 조정
      },
      title: {
        text: ChartName,
        top: '5%',
        left: '2%',
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      xAxis: {
        type: 'category',
        data: xLabels,
        axisLabel: {
          interval: 0, // 모든 라벨을 표시
          fontSize: 9, // 글꼴 크기를 10px로 설정
        },
      },
      yAxis: {
        axisLabel: {
          fontSize: 10,
        },
        type: 'value',
        min: 0,
        max: maxYAxis,
        interval: 5,
      },
      series: [
        {
          name: ChartName,
          type: 'bar',
          data: seriesData,
          itemStyle: {
            color: function (params) {
              // 3.0 제한 되는 수치 데이터값을 넣으면 됨
              return params.data > 15 ? '#931E14' : '#4472c4';
            },
          },
          markArea: {
            itemStyle: {
              color: 'rgba(79, 254, 35, 0.3)', // #4FFE234D와 유사한 RGBA 색상
            },
            data: [
              [
                { yAxis: 12 }, // 시작 y축 값
                { yAxis: 15 }, // 끝 y축 값 (차트 최대값까지)
              ],
            ],
          },
        },
      ],
    };

    // eCharts 인스턴스에 옵션을 적용
    chartInstance.setOption(option);

    // 컴포넌트 언마운트 시 차트 인스턴스 해제
    return () => {
      chartInstance.dispose();
    };
  }, [data]);

  return (
    <>
      <div className="w-[366px] h-[340px]" ref={chartRef}></div>
    </>
  );
};

export default BarOtherColorChart;

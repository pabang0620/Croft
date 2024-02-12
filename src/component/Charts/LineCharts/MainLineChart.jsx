import * as echarts from 'echarts';
import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useChartData } from '../../utils/api/Charts/ChartAPI';

const MainLineChart = ({
  APIoption,
  ChartName,
  registerChart,
  chartKey,
  route,
}) => {
  const navigate = useNavigate();
  const chartRef = useRef(null);
  const dataType = APIoption;
  const {
    data: data,
    isLoading: isLoading,
    error: error,
  } = useChartData(
    `/api/v1/farms/measurement/day?data_type=${dataType}`,
    `chartData-${dataType}`
  );
  const handleRoute = (route) => {
    if (route) navigate(route);
    window.scrollTo(0, 0);
  };
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

    const maxValue = Math.max(...data.data.map((item) => item.value));
    const max = Math.ceil(maxValue + maxValue / 10);
    const interval = Math.ceil(maxValue / 5);

    const xLabels = data.data.map((item) => {
      const date = new Date(item.kr_time);
      return `${date.getHours().toString().padStart(2, '0')}:${date
        .getMinutes()
        .toString()
        .padStart(2, '0')}`;
    });
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
      graphic: [
        {
          id: 'hoverData',
          type: 'text',
          left: 'center', // 차트 가운데에 위치
          top: 10, // 상단에서 10px 아래에 위치
          style: {
            text: '0', // 초기 텍스트 설정
            fontSize: 16,
            fontWeight: 'bold',
            fill: '#333', // 텍스트 색상
            textAlign: 'center', // 텍스트 정렬 방식
          },
          z: 100,
        },
      ],
      tooltip: {
        trigger: 'axis',
        axisPointer: { type: 'cross' },
      },
      xAxis: {
        type: 'category',
        data: xLabels,
      },
      yAxis: {
        type: 'value',
        max: max, // 계산된 최대값
        interval: interval, // 계산된 간격
        axisLabel: {
          fontSize: 9, // 글꼴 크기 조정
          formatter: (value) => `${value}`, // props로 전달받은 단위를 사용
        },
      },
      series: [
        {
          name: 'DLI',
          type: 'line',
          data: data.data.map((item) => item.value),
          areaStyle: {
            color: 'rgba(69, 69, 255)',
          },
          lineStyle: {
            color: '#AEAEAE00',
          },
          showSymbol: false,
          markArea: {
            itemStyle: {
              color: 'rgba(79, 254, 35, 0.3)',
            },
            data: [[{ yAxis: 12 }, { yAxis: 15 }]],
          },
        },
      ],
    };

    chartInstance.setOption(option);

    chartInstance.on('mouseover', function (params) {
      if (params.componentType === 'series') {
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

    if (registerChart) {
      registerChart(chartKey, chartInstance);
    }

    return () => {
      chartInstance.dispose();
    };
  }, [data, isLoading, error]);

  return (
    <div className="relative bg-white rounded-lg w-full h-full">
      <div ref={chartRef} className="absolute top-1 left-1 w-[95%] h-[90%]" />
      <div className="flex w-full h-fit justify-end absolute bottom-[9px] right-4">
        <button
          className="text-[#124946] text-xs font-normal leading-normal"
          onClick={() => handleRoute(route)}
        >
          자세히 보기
        </button>
      </div>
    </div>
  );
};

export default MainLineChart;

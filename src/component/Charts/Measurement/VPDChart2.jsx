import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { useNavigate } from 'react-router-dom';
import { useChartData } from '../../utils/api/Charts/ChartAPI';
import { VPD, calcVPD } from '../../utils/Data/VPDColorData';

const VPDChart = ({ registerChart, chartKey, route }) => {
  const navigate = useNavigate();
  const handleRoute = (route) => {
    if (route) navigate(route);
    window.scrollTo(0, 0);
  };
  // 온도 및 습도 데이터
  const {
    data: tempHumidityData,
    isLoading: isLoadingTempHumidity,
    error: errorTempHumidity,
  } = useChartData(
    `/api/v1/farms/measurement/day?data_type=198&data_type=199`,
    `chartData-VPDChart`
  );

  // const colorData = VPD.BASE_DATASET;
  // VPD 데이터
  const {
    data: vpdData,
    isLoading: isLoadingVpd,
    error: errorVpd,
  } = useChartData('/api/v1/farms/vpd/current', `chartData-vpd-VPDChart`);

  const chartRef = useRef(null);

  useEffect(() => {
    if (
      isLoadingTempHumidity ||
      isLoadingVpd ||
      errorTempHumidity ||
      errorVpd
    ) {
      return;
    }

    if (
      !tempHumidityData ||
      !tempHumidityData.data ||
      !vpdData ||
      !vpdData.data
    ) {
      return;
    }

    const chartInstance = echarts.init(chartRef.current);

    const humidityData = tempHumidityData.data
      .filter((item) => item.data_type_id === 199)
      .map((item) => item.value);

    const temperatureData = tempHumidityData.data
      .filter((item) => item.data_type_id === 198)
      .map((item) => item.value);

    // console.log(humidityData);
    // console.log(temperatureData);
    // console.log(tempHumidityData);

    const option = {
      grid: {
        top: '15%',
        left: '5%',
        right: '24px',
        bottom: '5%',
        containLabel: true,
      },
      title: {
        text: 'VPD',
        top: '5%',
        left: '2%',
      },
      tooltip: {},
      // tooltip: {
      //     formatter: '{a} {a1} {b1} {c1} ',
      // },
      legend: {
        data: ['day', 'night'],
        left: 'center',
        bottom: 10,
      },

      xAxis: [
        {
          type: 'category',
          data: humidityData,
          name: 'RH(%)',
        },
        {
          type: 'value',
          min: 100,
          max: 0,
          inverse: true,
          show: false,
        },
      ],
      yAxis: [
        {
          type: 'category',
          data: temperatureData,
          axisLabel: {
            formatter: '{value} °C',
          },
          name: 'Temperature(°C)',
        },
        {
          type: 'value',
          // data: [40,10],
          max: 40,
          min: 10,
          inverse: true,
          show: false,
        },
      ],
      visualMap: [
        {
          showLabel: false,
          show: false,
          seriesIndex: 0,
          type: 'piecewise',
          min: 0,
          max: 10,
          pieces: [
            // Range of a piece can be specified by property min and max,
            // where min will be set as -Infinity if ignored,
            // and max will be set as Infinity if ignored.
            { min: 1.4 },
            { min: 1, max: 1.4 },
            { min: 0.8, max: 1 },
            { min: 0.6, max: 0.8 },
            { min: 0.4, max: 0.6, label: '(custom label) ' },
            { min: 0.2, max: 0.4 },
            { max: 0.2 },
          ],

          inRange: {
            color: [
              '#f5bb98',
              '#fcffa2',
              '#c0fc2b',
              '#28f558',
              '#c0fc2b',
              '#fcffa2',
              '#f5bb98',
            ],
          },
        },
        {
          // text:'a',
          showLabel: false,
          show: false,
          seriesIndex: 1,
          type: 'piecewise',
          pieces: [
            // Range of a piece can be specified by property min and max,
            // where min will be set as -Infinity if ignored,
            // and max will be set as Infinity if ignored.
            { value: 'day', label: 'day' },
            { value: 'night', label: 'night' },
          ],

          inRange: {
            color: ['#ffdb56', '#0c59ff'],
          },
        },
      ],
      series: [
        {
          type: 'heatmap',
          data: VPD.BASE_DATASET,
          emphasis: {
            itemStyle: {
              borderColor: '#333',
              borderWidth: 1,
            },
          },
          itemStyle: {
            colorAlpha: 0.6,
          },
          progressive: 1000,
          animation: false,
          tooltip: {
            formatter: function (param) {
              // const _vpd = calcVPD(+param.data['temperature'], +param.data['rh'])
              return 'VPD: ' + Math.round(param.data[2] * 100) / 100;
            },
          },
        },
        {
          type: 'scatter',
          xAxisIndex: 1,
          yAxisIndex: 1,
          symbol: 'circle',
          itemStyle: {
            borderWidth: 1,
            borderColor: 'black',
          },
          tooltip: {
            formatter: function (param) {
              const _vpd = calcVPD(
                +param.data['temperature'],
                +param.data['rh']
              );
              return 'VPD: ' + Math.round(_vpd * 100) / 100;
            },
          },
        },
      ],
    };

    chartInstance.setOption(option);

    if (registerChart) {
      registerChart(chartKey, chartInstance);
    }
    // console.log("Humidity Data:", humidityData);
    // console.log("Temperature Data:", temperatureData);
    // console.log("Chart Option:", option);
    return () => {
      chartInstance.dispose();
    };
  }, [
    tempHumidityData,
    isLoadingTempHumidity,
    errorTempHumidity,
    vpdData,
    isLoadingVpd,
    errorVpd,
  ]);

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

export default VPDChart;

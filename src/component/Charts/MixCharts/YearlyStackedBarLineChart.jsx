import * as echarts from 'echarts';
import React, { useEffect, useRef, useState } from 'react';
import { useChartData } from '../../utils/api/Charts/ChartAPI';

const StackedBarLineChart = ({ years, period }) => {
  const chartRef = useRef(null);

  //데이터 호출
  const { data, isLoading } = useChartData(
    `${
      process.env.REACT_APP_BASE_API_KEY
    }/v1/farms/revenue-expense?period=yearly&year=${years - period}`,
    `revenue-expense-yearly-${years}-${period}}`
  );

  // 임의의 더미 데이터 생성 함수
  const generateDummyData = (length, max) => {
    return Array.from({ length }, () => Math.round(Math.random() * max));
  };
  const [barData1, setBarData1] = useState([]);
  const [barData2, setBarData2] = useState(generateDummyData(10, 500));
  const [barData3, setBarData3] = useState(generateDummyData(10, 500));
  const [barData4, setBarData4] = useState(generateDummyData(10, 500));
  const [lineData, setLineData] = useState(generateDummyData(10, 500));
  useEffect(() => {
    let filteredYears = [];
    let filteredRev = [];
    let filteredPerson = [];
    let filteredFixed = [];
    let filteredResource = [];
    let filteredProfit = [];
    const chartInstance = echarts.init(chartRef.current);
    //데이터값 저장
    for (let i = 0; i < period; i++) {
      setBarData1([...barData1, i]);
      filteredYears.push(data?.data[i].year);
      filteredRev.push(data?.data[i].revenue);
      filteredPerson.push(data?.data[i].personnel_expense);
      filteredFixed.push(data?.data[i].fixed_cost);
      filteredResource.push(data?.data[i].resource_bill);
      filteredProfit.push(data?.data[i].profit);
    }

    if (!isLoading) {
      setBarData1(filteredRev);
      setBarData2(filteredPerson);
      setBarData3(filteredFixed);
      setBarData4(filteredResource);
      setLineData(filteredProfit);
    }

    const option = {
      grid: {
        // 다른 설정을 유지하면서 bottom만 조정
        bottom: '20%', // 필요에 따라 이 값을 조정
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: { type: 'cross' },
      },
      legend: {
        data: ['매출액', '인건비', '고정비용', '자원비용', '순이익'],
      },
      xAxis: {
        type: 'category',
        data: filteredYears,
      },
      yAxis: {
        axisLabel: {
          fontSize: 10,
          margin: '10',
        },
        type: 'value',
        min: 0,
        max: 1800,
        interval: 300,
      },
      series: [
        {
          name: '매출액',
          type: 'bar',
          data: barData1,
        },
        {
          name: '인건비',
          type: 'bar',
          stack: 'Total',
          data: barData2,
        },
        {
          name: '고정비용',
          type: 'bar',
          stack: 'Total',
          data: barData3,
        },
        {
          name: '자원비용',
          type: 'bar',
          stack: 'Total',
          data: barData4,
        },
        {
          name: '순이익',
          type: 'line',
          data: lineData,
          // 스타일 설정은 이미지에 맞게 조정
        },
      ],
    };

    chartInstance.setOption(option);

    return () => {
      chartInstance.dispose();
    };
  }, [isLoading, years]);

  return <div ref={chartRef} style={{ width: '100%', height: '100%' }} />;
  // return <div ref={chartRef} style={{ width: "980px", height: "680px" }} />;
};

export default StackedBarLineChart;

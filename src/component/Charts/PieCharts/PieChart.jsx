import React, { useEffect, useRef, useState } from 'react';
import * as echarts from 'echarts';
import { useChartData } from '../../utils/api/Charts/ChartAPI';
import YearSelectBox from '../../../layout/NavBar/SubNavBar/YearSelectBox';

const PieChart = ({ years, setYears }) => {
  const pieChartRef = useRef(null);
  //년도를 기입할 수 있는 부분이 api에 없음
  const { data, isLoading } = useChartData(
    `${process.env.REACT_APP_BASE_API_KEY}/v1/farms/distribution/expense?period=monthly`,
    `SingleSalesMonthly-${years}`
  );
  // Data for the pie chart and table
  const [monthlyData, setMonthlyDate] = useState([
    { name: '인건비', value: 5000000 },
    { name: '전기료', value: 4000000 },
    { name: '가스요금', value: 3000000 },
    { name: '수도요금', value: 2000000 },
    { name: '고정비', value: 1000000 },
  ]);

  useEffect(() => {
    if (!isLoading) {
      console.log('monthlyData');
      console.log(monthlyData);
      setMonthlyDate([
        { name: '인건비', value: data?.data[0].personnel_expense },
        { name: '전기료', value: data?.data[1].electricity_bill },
        { name: '가스요금', value: data?.data[2].gas_bill },
        { name: '수도요금', value: data?.data[3].water_bill },
        { name: '고정비', value: data?.data[4].fixed_cost },
      ]);
    }

    // temp = data.data.filter((item) => item.year.includes(years));
  }, [data, isLoading]);

  // Calculate total for percentage calculations
  const total = monthlyData.reduce((sum, item) => sum + item.value, 0);

  useEffect(() => {
    const chartInstance = echarts.init(pieChartRef.current);

    const option = {
      grid: {
        // 다른 설정을 유지하면서 bottom만 조정
        bottom: '20%', // 필요에 따라 이 값을 조정
      },
      title: {
        text: '비용',
        top: '5%',
        left: '0%',
      },
      tooltip: {
        trigger: 'item',
      },
      series: [
        {
          name: '비용 분류',
          type: 'pie',
          radius: '50%',
          data: monthlyData,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        },
      ],
    };

    chartInstance.setOption(option);

    return () => {
      chartInstance.dispose();
    };
  }, [years, monthlyData]);

  return (
    <div className="flex items-center px-4 relative">
      {/* Pie Chart */}
      <div ref={pieChartRef} style={{ width: '320px', height: '350px' }}></div>
      {/* 테이블  */}
      <div className="w-[282px] h-[216px]">
        <table className="min-w-full text-sm divide-y divide-x divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-4 py-2 bg-[#000]/[0.06] text-left text-xs font-semibold text-info uppercase tracking-wider border border-[#B9B9B9]"
              >
                항목
              </th>
              <th
                scope="col"
                className="px-4 py-2 bg-[#000]/[0.06] text-left text-xs font-semibold text-info uppercase tracking-wider border border-[#B9B9B9]"
              >
                비용
              </th>
              <th
                scope="col"
                className="px-4 py-2 bg-[#000]/[0.06] text-left text-xs font-semibold text-info uppercase tracking-wider border border-[#B9B9B9]"
              >
                비중
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {monthlyData.map((item, index) => (
              <tr
                key={index}
                className="divide-x divide-[#B9B9B9] border border-[#B9B9B9]"
              >
                <td className="px-4 py-2 whitespace-nowrap border border-[#B9B9B9]">
                  {item.name}
                </td>
                <td className="px-4 py-2 whitespace-nowrap border border-[#B9B9B9]">
                  {item.value?.toLocaleString('ko-KR')}
                </td>
                <td className="px-4 py-2 whitespace-nowrap border border-[#B9B9B9]">
                  {((item.value / total) * 100).toFixed(0)}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="absolute bottom-7 left-5 w-fit">
        <YearSelectBox years={years} setYears={setYears} />
      </div>
    </div>
  );
};

export default PieChart;

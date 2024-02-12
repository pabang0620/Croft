import React, { useState, useEffect } from 'react';
import StackedBarLineChart from '../Charts/MixCharts/YearlyStackedBarLineChart';
import { useChartData } from '../utils/api/Charts/ChartAPI';
import IncreaseUpDown from './IncreaseUpDownAndCost';

const TotalCost = ({ years, period }) => {
  const { data, isLoading } = useChartData(
    `${
      process.env.REACT_APP_BASE_API_KEY
    }/v1/farms/revenue-expense?period=yearly&year=${years - period}`,
    `revenue-expense-yearly-${years}}`
  );
  const [totalData, SetTotalData] = useState([
    { title: '총 매출액', cost: '21,358,210', last: 0, current: 0 },
    { title: '순수익', cost: '6,358,210', last: 0, current: 0 },
    { title: '비용', cost: '15,000,000', last: 0, current: 0 },
  ]);
  useEffect(() => {
    if (!isLoading) {
      const filteredData = data?.data.filter((item) =>
        item.year.includes(years)
      );
      const lastFilteredData = data?.data.filter((item) =>
        item.year.includes(years - 1)
      );
      if (filteredData.length > 0) {
        const {
          revenue,
          profit,
          personnel_expense,
          fixed_cost,
          resource_bill,
        } = filteredData[0];
        const TempTotal = personnel_expense + fixed_cost + resource_bill;
        const lastTempTotal =
          lastFilteredData[0].personnel_expense +
          lastFilteredData[0].fixed_cost +
          lastFilteredData[0].resource_bill;
        const filteredRevenue = data?.data.reduce((acc, cur) => {
          return acc + cur.revenue;
        }, 0);
        const filteredProfit = data?.data.reduce((acc, cur) => {
          return acc + cur.profit;
        }, 0);
        const filteredTotal = data?.data.reduce((acc, cur) => {
          return (
            acc + cur.personnel_expense + cur.fixed_cost + cur.resource_bill
          );
        }, 0);
        SetTotalData([
          {
            title: '총 매출액',
            cost: `${revenue?.toLocaleString('ko-KR')}`,
            last: lastFilteredData[0].revenue, //추후 기준이 되는 금액을 이 부분에 넣어주세요
            current: filteredRevenue,
          },
          {
            title: '순수익',
            cost: `${profit?.toLocaleString('ko-KR')}`,
            last: lastFilteredData[0].profit, //추후 기준이 되는 금액을 이 부분에 넣어주세요
            current: filteredProfit,
          },
          {
            title: '비용',
            cost: `${TempTotal?.toLocaleString('ko-KR')}`,
            last: lastTempTotal, //추후 기준이 되는 금액을 이 부분에 넣어주세요
            current: filteredTotal,
          },
        ]);
      } else {
        console.log('No data');
      }
    }
  }, [isLoading, years]);

  //temp 데이터 타입에 따라 구조 변환 예정

  return (
    <div className="flex flex-col gap-6 py-6 px-7 w-[61.25rem] h-[42.5rem] bg-white rounded-[10px]">
      <div className="flex gap-[55px]">
        {totalData.map((item) => (
          <div className="flex flex-col gap-[6px]" key={item.title}>
            <div className="text-lg font-bold mb-[5px]">{item.title}</div>
            <div className="text-2xl">{item.cost}원</div>
            {/* 나중에 마이너스이면으로 바꾸기 */}

            {!isLoading && (
              <IncreaseUpDown
                last={item.last ? item.last : 1}
                current={item.current ? item.current : 0}
              />
            )}
          </div>
        ))}
      </div>
      {/* bar2갠데 하나가 3색인거  */}
      <div className="w-[822px] h-[523px] bg-white rounded-[10px]">
        <StackedBarLineChart years={2023} period={period} />
      </div>
    </div>
  );
};

export default TotalCost;

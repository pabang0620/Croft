import React, { useState, useEffect } from 'react';
import Bar2Line1Chart from '../Charts/MixCharts/Bar2Line1Chart';
import { useChartData } from '../utils/api/Charts/ChartAPI';
import IncreaseUpDown from './IncreaseUpDownAndCost';

const TotalSales = ({ years }) => {
  const { data, isLoading } = useChartData(
    `${
      process.env.REACT_APP_BASE_API_KEY
    }/v1/farms/production-and-sales?period=yearly&year=${years - 1}`,
    `production-and-sales-yearly-${years}}`
  );
  const [totalData, SetTotalData] = useState([
    { title: '총 생산량', last: 0, current: 0 },
    { title: '총 판매량', last: 0, current: 0 },
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
        const { production_output, sales_rate } = filteredData[0];

        SetTotalData([
          {
            title: '총 생산량',
            last: lastFilteredData[0].production_output,
            current: production_output,
          },
          {
            title: '총 판매량',
            last: lastFilteredData[0].sales_rate,
            current: sales_rate,
          },
        ]);
      } else {
        console.log('No data');
      }
    }
  }, [isLoading, years]);

  return (
    <div className="flex flex-col gap-4 py-2.5 px-4 w-[40.625rem] h-[20.9375rem] bg-white rounded-[10px]">
      <div className="text-lg font-bold ">생산/판매량</div>
      <div className="flex">
        <div className="flex flex-col gap-[7px]">
          {totalData.map((item) => (
            <div
              className="flex flex-col bg-lightest-gray rounded-[10px] w-[12rem] h-[7.5rem] py-2.5 px-4 "
              key={item.title}
            >
              <div className="text-lg font-bold mb-[5px]">{item.title}</div>
              <div className="text-2xl">
                {item.current ? item.current : 0} kg
              </div>
              <IncreaseUpDown
                last={item.last ? item.last : 1}
                current={item.current ? item.current : 0}
              />
            </div>
          ))}
        </div>

        <div className="w-[480px] h-[247px rounded-[10px]">
          <Bar2Line1Chart />
        </div>
      </div>
    </div>
  );
};

export default TotalSales;

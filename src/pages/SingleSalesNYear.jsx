import { useState } from 'react';
import { useOutletContext } from 'react-router';
import SalesSubBar from '../layout/NavBar/SubNavBar/SalesSubBar';
import TotalCost from '../component/SingleSales/YearlyTotalCost';
import TotalSales from '../component/SingleSales/YearlyTotalSales';
import StackedBarChartyx from '../component/Charts/MixCharts/StackedBarChartyx';

const SingleSalesNYear = () => {
  const { currentPath } = useOutletContext();
  const tempTable = ['YearlySalesTable', 'YearlyCostTable'];
  const [years, setYears] = useState(2023); //selectbox값 담아줌
  const [period, setPeriod] = useState(); //yearArray 값 담아줌
  return (
    <div className="flex flex-col">
      <SalesSubBar
        years={years}
        setYears={setYears}
        period={period}
        setPeriod={setPeriod}
      />
      <div className="my-[11px] mx-[25px]">
        <div>차트 사이즈 수정 예정</div>
        <div className="flex w-full rounded-[10px] flex-wrap gap-2">
          <TotalCost years={years} period={currentPath.slice(20)} />
          <div className="flex flex-col gap-2">
            <TotalSales years={years} />
            <div className="w-[650px] h-[335px] bg-white rounded-[10px]">
              <StackedBarChartyx />
            </div>
          </div>
          {tempTable.map((item) => (
            <img
              key={item}
              className="mt-1 mr-2"
              src={`${process.env.PUBLIC_URL}/assets/images/Temp/${item}.svg`}
              alt=""
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleSalesNYear;

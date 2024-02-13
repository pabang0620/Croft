import { useState } from 'react';
import { useOutletContext } from 'react-router';
import SalesSubBar from '../layout/NavBar/SubNavBar/SalesSubBar';
import TotalCost from '../component/SingleSales/YearlyTotalCost';
import TotalSales from '../component/SingleSales/YearlyTotalSales';
import StackedBarChartyx from '../component/Charts/MixCharts/YearlyStackedBarChartyx';
import YearlyRevenue from '../component/SingleSales/YearlyRevenueTable';
import YearlyTotalCost from '../component/SingleSales/YearlyTotalCostTable';
import { useChartData } from '../component/utils/api/Charts/ChartAPI';

const SingleSalesNYear = () => {
  const { currentPath } = useOutletContext();
  const [years, setYears] = useState(2023); //selectbox값 담아줌
  const [period, setPeriod] = useState(); //yearArray 값 담아줌
  const { data, isLoading } = useChartData(
    `${
      process.env.REACT_APP_BASE_API_KEY
    }/v1/farms/comparison/expense?period=yearly&year=${years - period}`,
    `comparison-expense-yearly-${years}-${period}}`
  );

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
          <YearlyRevenue years={years} period={currentPath.slice(20)} />
          <YearlyTotalCost years={years} period={currentPath.slice(20)} />
        </div>
      </div>
    </div>
  );
};

export default SingleSalesNYear;

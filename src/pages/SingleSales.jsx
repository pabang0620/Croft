import { useState } from 'react';
import SalesSubBar from '../layout/NavBar/SubNavBar/SalesSubBar';
import TotalCost from '../component/SingleSales/TotalCost';
import TotalSales from '../component/SingleSales/TotalSales';
import PieChart from '../component/Charts/PieCharts/PieChart';
import LastYearRevenue from '../component/SingleSales/LastYearRevenue';
import LastYearProfit from '../component/SingleSales/LastYearProfit';
import MonthlyCost from '../component/SingleSales/MonthlyCost';

const SingleSales = () => {
  const [years, setYears] = useState(2023); //selectbox값 담아줌
  const [period, setPeriod] = useState(); //yearArray 값 담아줌
  const [pieYears, setPieYears] = useState(2023); //selectbox값 담아줌

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
          <TotalCost />
          <div className="flex flex-col gap-2">
            <TotalSales />
            <div className="w-[650px] h-[335px] bg-white rounded-[10px] ">
              <PieChart years={pieYears} setYears={setPieYears} />
              <div>
                {/* <YearSelectBox years={pieYears} setYears={setPieYears} /> */}
              </div>
            </div>
          </div>

          <LastYearRevenue years={years} />
          <LastYearProfit years={years} />
          <MonthlyCost years={years} />
        </div>
      </div>
    </div>
  );
};

export default SingleSales;

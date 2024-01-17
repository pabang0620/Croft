import SalesSubBar from '../layout/NavBar/SubNavBar/SalesSubBar';
import TotalCost from '../component/SingleSales/TotalCost';
import TotalSales from '../component/SingleSales/TotalSales';
import StackedBarChartyx from '../component/Charts/MixCharts/StackedBarChartyx';

const SingleSalesNYear = () => {
  const tempTable = ['YearlySalesTable', 'YearlyCostTable'];

  return (
    <div className="flex flex-col">
      <SalesSubBar />
      <div className="my-[11px] mx-[25px]">
        <div>차트 사이즈 수정 예정</div>
        <div className="flex w-full rounded-[10px] flex-wrap gap-2">
          <TotalCost />
          <div className="flex flex-col gap-2">
            <TotalSales />
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

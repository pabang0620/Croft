import TotalCost from '../component/SingleSales/TotalCost';
import TotalSales from '../component/SingleSales/TotalSales';
import PieChart from '../component/Charts/PieCharts/PieChart';

const SingleSales = () => {
  return (
    <div className="my-[11px] mx-[25px]">
      <div>차트 사이즈 수정 예정</div>
      <div className="flex w-full rounded-[10px] flex-wrap gap-2">
        <TotalCost />
        <div className="flex flex-col gap-2">
          <TotalSales />
          <div className="w-[650px] h-[335px] bg-white rounded-[10px]">
            <PieChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleSales;

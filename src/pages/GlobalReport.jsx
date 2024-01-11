import TotalReport from '../component/TotalReport/TotalReport';
import { TotalReportGreenhouseText as Desc } from '../component/utils/Data/TempData';
import { DailyReport } from '../component/utils/Data/TempData';

const GlobalReport = () => {
  const date = '2023. 10. 26';
  return (
    <div>
      <TotalReport
        date={date}
        desc={Desc}
        comment1={DailyReport}
        comment2={DailyReport}
        comment3={DailyReport}
      />
    </div>
  );
};

export default GlobalReport;

import { format } from 'date-fns';
import { useState } from 'react';
import { useOutletContext } from 'react-router';
import DailyReportPage from '../component/Report/DailyReport';
import TotalReport from '../component/Report/TotalReport';
import { TotalReportGreenhouseText as Desc } from '../component/utils/Data/TempData';
import ReportSubBar from '../layout/NavBar/SubNavBar/ReportSubBar';
import { DailyReport } from '../component/utils/Data/TempData';

const SingleReport = () => {
  const { container, setContainer } = useOutletContext();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const date = format(selectedDate, 'yyyy.MM.dd');

  return (
    <div>
      <ReportSubBar
        type="single"
        setContainer={setContainer}
        container={container}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      {/* <div className=" mt-[21px] ml-[29px]">
        <TotalReport
          container={container}
          date={date}
          desc={Desc}
          comment1={DailyReport}
          comment2={DailyReport}
          comment3={DailyReport}
        />
      </div> */}
      <div className=" mt-[21px] ml-[29px]">
        <DailyReportPage
          container={container}
          date={date}
        />
      </div>
    </div>
  );
};

export default SingleReport;

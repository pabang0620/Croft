import { format } from 'date-fns';
import { useState, useRef } from 'react';
import { useOutletContext } from 'react-router';
import { useReactToPrint } from 'react-to-print';
import DailyReportPage from '../component/Report/DailyReport';
import TotalReport from '../component/Report/TotalReport';
import { TotalReportGreenhouseText as Desc } from '../component/utils/Data/TempData';
import ReportSubBar from '../layout/NavBar/SubNavBar/ReportSubBar';
import { DailyReport } from '../component/utils/Data/TempData';

const SingleReport = () => {
  const { container, setContainer } = useOutletContext();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [reportType, setReportType] = useState(true);
  const date = format(selectedDate, 'yyyy.MM.dd');

  // 프린트 대상 컴포넌트의 ref
  const componentRef = useRef();

  // useReactToPrint 훅을 사용하여 프린트 기능을 활성화
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className="flex flex-col pb-3">
      <ReportSubBar
        type="single"
        setContainer={setContainer}
        container={container}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <div className="flex flex-col ml-[29px]">
        <div className="flex gap-4 mt-[21px]">
          <button
            className="border-2 border-primary px-2 py-1 rounded-lg font-bold text-primary"
            onClick={handlePrint}
          >
            인쇄하기
          </button>
          <button
            className="border-2 border-primary px-2 py-1 rounded-lg font-bold text-primary"
            onClick={() => setReportType(!reportType)}
          >
            {reportType ? '약식으로 보기' : '전체 보기'}
          </button>
        </div>
        <>
          {reportType ? (
            <div className=" mt-[21px]" ref={componentRef}>
              <DailyReportPage container={container} date={date} />
            </div>
          ) : (
            <div className=" mt-[21px]" ref={componentRef}>
              <TotalReport
                container={container}
                date={date}
                desc={Desc}
                comment1={DailyReport}
                comment2={DailyReport}
                comment3={DailyReport}
              />
            </div>
          )}
        </>
      </div>
    </div>
  );
};

export default SingleReport;

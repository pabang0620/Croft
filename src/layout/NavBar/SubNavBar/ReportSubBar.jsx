import { useState, useEffect } from 'react';
import GlobalReportCalendar from '../../../component/utils/DatePicker/GlobalReportCalendar';
import { useChartData } from '../../../component/utils/api/Charts/ChartAPI';

const ReportSubBar = ({
  type,
  setContainer,
  container,
  selectedDate,
  setSelectedDate,
}) => {
  const [containerToggle, setContainerToggle] = useState(false);
  const [ContainerArray, setContainerArray] = useState([]);
  const { data, isLoading } = useChartData(
    `${process.env.REACT_APP_BASE_API_KEY}/v1/farms/container-list`,
    'container-list'
  );
  useEffect(() => {
    if (data?.data[0] && !isLoading && type === 'global') {
      setContainer(data?.data[0].name);
      setContainerArray(
        data?.data.map((item, idx) => ({
          id: idx,
          text: item.name,
        }))
      );
    }
  }, [data]);

  return (
    <>
      {!isLoading && (
        <div className="w-full h-[45px] pl-[29px] pt-[4px] flex items-center cursor-pointer select-none border-b-[1px] border-base400 bg-base200">
          <div className="text-lg font-bold mr-[11px]">종합 보고서</div>
          {type === 'global' && (
            <div
              className="mr-[22px] text-accent font-normal text-xs border-b border-accent relative"
              onClick={() => setContainerToggle(!containerToggle)}
            >
              {container}▼
              <ul
                className={`${
                  containerToggle ? 'h-[138px]' : 'h-[0px]'
                } z-10 flex flex-col w-[145px] border-solid border-base200 rounded-[10px] items-center justify-end text-xs absolute top-[25px] bg-white right-[-5px] overflow-hidden ease-in-out duration-200`}
              >
                {ContainerArray.map((item, idx) => (
                  <li
                    key={idx}
                    className="w-[145px] flex items-center flex-grow px-[13px] hover:bg-success/[0.2]"
                    onClick={() => {
                      setContainer(item.text);
                    }}
                  >
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <GlobalReportCalendar
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        </div>
      )}
    </>
  );
};

export default ReportSubBar;

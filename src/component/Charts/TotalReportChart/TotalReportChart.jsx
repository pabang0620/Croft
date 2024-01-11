import InnerIconChart from './InnerIconChart';
import { CriticalOrWarn } from '../../utils/Icons';

const TotalReportChart = ({ title, time, size }) => {
  //temp data
  const criticalAndWarning = {
    critical: { temp: true, humidity: false, solar: false, co2: false },
    warning: false,
  };
  return (
    <div className="bg-white w-full h-full rounded-[10px]">
      {time ? (
        <>
          <div className="flex flex-row whitespace-nowrap justify-between pt-4 pl-4 pr-4 mb-4">
            <div className="text-lg font-semibold leading-normal flex items-center">
              <p>{title}</p>
              <p className="text-[14px] font-normal text-[#124946] ml-4">
                {time}
              </p>
            </div>
            <div>
              {CriticalOrWarn(
                true,
                criticalAndWarning.critical,
                criticalAndWarning.warning
              )}
            </div>
            {/* disconnect: !아이콘, critical, warning:삼각형 아이콘 */}
          </div>
          <div className="w-[95%] h-[60%] flex m-auto pr-[5px]">
            <InnerIconChart size={size} />
          </div>
        </>
      ) : (
        <div className="flex flex-col gap-[8px]">
          <div className="flex flex-row whitespace-nowrap justify-between">
            <div className="text-base font-semibold leading-normal flex items-center">
              <p>{title}</p>
            </div>
            <div>
              {CriticalOrWarn(
                true,
                criticalAndWarning.critical,
                criticalAndWarning.warning
              )}
            </div>
            {/* disconnect: !아이콘, critical, warning:삼각형 아이콘 */}
          </div>
          <div className="w-full h-[70px]">
            <InnerIconChart size={size} />
          </div>
        </div>
      )}
    </div>
  );
};

export default TotalReportChart;

import {
  PercentUpDown,
  ResourceIcon,
  TempResource,
} from '../../utils/Data/SingleResourceData';
import { handleDateChange } from '../../utils/handleDateChange';

const TotalResourceChart = () => {
  return (
    <div className="bg-white w-full h-full rounded-[10px] flex flex-col p-4">
      <div className="text-base font-semibold flex items-center gap-2">
        <div>자원 사용량 총합</div>
        <div>몇월 몇 주차</div>
        {/* <div>{handleDateChange}</div> */}
      </div>
      <div className="w-full h-[8.9rem] flex m-auto gap-[.7rem] mt-2">
        {TempResource.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-grow items-center justify-center flex-col bg-[#F1F1F1]"
          >
            <div>{ResourceIcon(39)[idx]}</div>
            <div className="text-base font-bold mb-[.5625rem] mt-[.875rem]">
              {item.temp}
            </div>
            <div
              className={`font-semibold ${
                item.percentUp ? 'text-error' : 'text-accent'
              }`}
            >
              {PercentUpDown(item.percentUp)} {item.percentNum} %
            </div>
          </div>
        ))}
      </div>
      <div className="flex">
        <div></div>
        <div>자세히 보기</div>
      </div>
    </div>
  );
};

export default TotalResourceChart;

import { useState } from 'react';
import { format } from 'date-fns';
import ResourceSubBar from '../layout/NavBar/SubNavBar/ResourceSubBar';
import MainFootLineChart from '../component/Charts/LineCharts/MainFootLineChart';
import Line2Chart from '../component/Charts/LineCharts/Line2Chart';
import {
  PercentUpDown,
  ResourceIcon,
  ResourceTitle,
  TempResource,
} from '../component/utils/Data/SingleResourceData';

const SingleResource = () => {
  const [toggle, setToggle] = useState(0);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [specificDate, setSpecificDate] = useState('오늘');

  return (
    <div className="flex flex-col">
      <ResourceSubBar
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
        specificDate={specificDate}
        setSpecificDate={setSpecificDate}
      />
      <div className="my-[11px] mx-[25px]">
        <div className="flex w-full flex-wrap gap-2">
          {/* 자원 사용량 흰 박스 */}
          <div className="flex flex-col w-[61.25rem] h-[57rem] rounded-[10px] bg-white py-[12px] px-[17px]">
            <div className="flex gap-2 text-lg font-bold mb-[62px]">
              <div>{format(startDate, 'MM.dd')}</div>
              <div>시간대별 자원 사용량</div>
            </div>
            <div className="flex gap-12">
              {/* 토글 부분 */}
              <div className="w-[8.625rem] flex flex-col gap-6 cursor-pointer p-1">
                {TempResource.map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex gap-[17px] w-[8.625rem] items-center pb-[12px] ${
                      toggle === idx
                        ? 'border-solid border-b-[3px] border-accent'
                        : ''
                    }`}
                    onClick={() => setToggle(idx)}
                  >
                    <div>{ResourceIcon[idx]}</div>
                    <div className={`flex flex-col`}>
                      <div className="text-sm font-bold">{item.temp}</div>
                      <div
                        className={`text-[10px] ${
                          item.percentUp ? 'text-error' : 'text-accent'
                        }`}
                      >
                        {PercentUpDown(item.percentUp)} {item.percentNum} %
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-4">
                <div className="text-lg font-bold">{ResourceTitle[toggle]}</div>
                <div className="w-[732px] h-[489px]">
                  <Line2Chart />
                </div>
                <img
                  className=""
                  src={`${process.env.PUBLIC_URL}/assets/images/Temp/TempRunHistory.svg`}
                  alt=""
                />
              </div>
            </div>
          </div>
          {/* 우측 차트 */}
          <div className="w-[320px] h-[220px] bg-white rounded-[10px]">
            <MainFootLineChart
              APIoption="218"
              ChartName="물 사용량"
              unit="liter"
            />
          </div>

          <img
            className="mt-1 mr-2"
            src={`${process.env.PUBLIC_URL}/assets/images/Temp/TimelyTodayResource.svg`}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default SingleResource;

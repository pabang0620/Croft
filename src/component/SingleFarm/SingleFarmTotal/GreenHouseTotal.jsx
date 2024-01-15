import React, { useState } from 'react';
import Line4ChartNone from '../../Charts/LineCharts/Line4ChartNone';
import Line4Chart from '../../Charts/LineCharts/Line4Chart';
import { CriticalOrWarn } from '../../utils/Icons';
import { ChartDashIcons, IconsColor } from '../../utils/Icons';
import { SingleFarmRecommend, IconId } from '../../utils/Data/SingleFarmData';

const GreenHouseTotal = ({ critical, alert }) => {
  const [toggle, setToggle] = useState(0);
  return (
    <div className="flex flex-col w-full px-[17px] py-[12px] select-none">
      {/* 제목 부분 */}
      <div className="flex justify-between mb-[26px]">
        <div className="flex gap-1 text-lg">
          <div className="font-bold">온실 환경 종합</div>
          <div className="font-normal">10.26 18:00</div>
          {/* 어떤 시간을 넣어야하는지? */}
        </div>
        <div>{CriticalOrWarn(true, critical, false)}</div>
      </div>

      {/* 토글 부분 */}
      <div className="w-[43rem] flex gap-2 cursor-pointer">
        {SingleFarmRecommend.map((item, idx) => (
          <div
            key={idx}
            className={`flex gap-[17px] flex-grow items-center pb-[12px] ${
              toggle === idx ? 'border-solid border-b-[2px] border-accent' : ''
            }`}
            onClick={() => setToggle(idx)}
          >
            <div>
              {ChartDashIcons(IconId[idx], IconsColor(alert[idx], false), 24)}
            </div>
            <div
              className={`flex flex-col text-[${IconsColor(
                alert[idx],
                false
              )}]`}
            >
              <div className="text-sm font-bold">{item.temp}</div>
              <div className="text-[10px]">{item.recommend}</div>
            </div>
          </div>
        ))}
      </div>

      {/* 그래프 부분 */}
      <div className="flex gap-[3.75rem] mt-6">
        <div className="flex flex-col flex-grow justify-end">
          <div className="flex justify-around">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col">
                <div className="text-sm font-bold">2022.</div>
                <div className="font-bold text-lg">10.11</div>
              </div>
              <div className="flex flex-col">
                <div className="text-sm">평균온도</div>
                <div className="font-bold text-lg">22℃</div>
              </div>
            </div>
            <div className="w-[665px] h-[390px] bg-white rounded-[10px]">
              <Line4Chart />
            </div>
          </div>
          {/* temp 이미지 */}
          <img
            className="w-[90%] h-[150px] ml-2"
            src={`${process.env.PUBLIC_URL}/assets/images/Temp/TempRunHistory.svg`}
            alt=""
          />
        </div>
        <div className="flex flex-col flex-grow gap-7">
          <div className="flex w-full h-[2.1875rem] rounded-[10px] px-4 bg-lightest-gray items-center text-xs gap-7">
            <div>
              오늘과 유사했던 환경에서 종합 평가가 좋았던 장비운용 이력을
              확인해보세요.
            </div>
            {/* temp */}
            <div className="underline text-accent">2022.10.11</div>
            <div className="underline text-accent">2023.3.17</div>
            <div className="underline text-accent">2023.4.5</div>
          </div>
          <div className="flex justify-around">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col">
                <div className="text-sm font-bold">2022.</div>
                <div className="font-bold text-lg">10.11</div>
              </div>
              <div className="flex flex-col">
                <div className="text-sm">평균온도</div>
                <div className="font-bold text-lg">22℃</div>
              </div>
            </div>
            <div className="w-[665px] h-[390px] bg-white rounded-[10px]">
              <Line4ChartNone />
            </div>
          </div>
          {/* temp 이미지 */}
          <img
            className="w-[90%] h-[150px] ml-2"
            src={`${process.env.PUBLIC_URL}/assets/images/Temp/TempRunHistoryPast.svg`}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default GreenHouseTotal;

import React, { useState } from 'react';
import { format } from 'date-fns';
import GreenHouseSwitch from './GreenHouseSwitch';
import { CriticalOrWarn } from '../../utils/Icons';
import { ChartDashIcons, IconsColor } from '../../utils/Icons';
import { SingleFarmRecommend, IconId } from '../../utils/Data/SingleFarmData';

const GreenHouseTotal = ({ critical, alert, date }) => {
  const [toggle, setToggle] = useState(0);

  return (
    <div className="flex flex-col w-full px-[17px] py-[12px] select-none">
      {/* 제목 부분 */}
      <div className="flex justify-between mb-[26px]">
        <div className="flex gap-1 text-lg">
          <div className="font-bold">온실 환경 종합</div>
          <div className="font-normal">{format(date, 'MM.dd HH:mm')}</div>
        </div>
        <div>{CriticalOrWarn(true, critical, false)}</div>
      </div>

      {/* 토글 부분 */}
      <div className="w-[43rem] flex gap-2 cursor-pointer">
        {SingleFarmRecommend.map((item, idx) => (
          <div
            key={idx}
            className={`flex gap-[17px] flex-grow items-center pb-[12px] ${
              toggle === idx ? 'border-solid border-b-[3px] border-accent' : ''
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
      <GreenHouseSwitch num={toggle} />
    </div>
  );
};

export default GreenHouseTotal;

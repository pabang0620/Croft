import { useState } from 'react';
import GreenHouseRTR from '../../component/SingleFarm/SingleFarmRTR/GreenHouseRTR';
import DailyRTR from '../../component/SingleFarm/SingleFarmRTR/DailyRTR';

const SingleFarmRTR = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div className="my-[11px] mx-[25px] flex flex-col gap-[10px] max-w-[100%]">
      <div className="w-full bg-white h-[28.125rem] rounded-[10px]">
        <GreenHouseRTR date={date} setDate={setDate} />
      </div>
      <div className="w-full bg-white  h-[28.125rem] rounded-[10px]">
        <DailyRTR />
      </div>
    </div>
  );
};

export default SingleFarmRTR;

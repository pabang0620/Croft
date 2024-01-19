import { useState } from 'react';
import GreenHouseRTR from '../../component/SingleFarm/SingleFarmRTR/GreenHouseRTR';

const SingleFarmRTR = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div className="my-[11px] mx-[25px] flex flex-col gap-[10px] max-w-[100%]">
      <div className="w-full bg-white h-[28.125rem] rounded-[10px]">
        <GreenHouseRTR date={date} setDate={setDate} />
      </div>
    </div>
  );
};

export default SingleFarmRTR;

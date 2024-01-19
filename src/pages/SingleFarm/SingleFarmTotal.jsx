import React, { useState } from 'react';
import GreenHouseTotal from '../../component/SingleFarm/SingleFarmTotal/GreenHouseTotal';
import WaterData from '../../component/SingleFarm/SingleFarmTotal/WaterData';
import DailyAvg from '../../component/SingleFarm/SingleFarmTotal/DailyAvg';

const SingleFarmTotal = () => {
  //데이터 입출력
  //temp data
  const critical = {
    temp: true,
    humidity: false,
    solar: false,
    co2: false,
  };
  const alert = [true, false, false, false];
  const [date, setDate] = useState(new Date());

  return (
    <div className="my-[11px] mx-[25px] flex flex-col gap-[10px] max-w-[100%]">
      <div className="w-full bg-white h-[52rem] rounded-[10px]">
        <GreenHouseTotal critical={critical} alert={alert} date={date} />
      </div>
      <div className="w-full bg-white h-[28.125rem] rounded-[10px]">
        <WaterData date={date} setDate={setDate} />
      </div>
      <div className="w-full bg-white h-[56.875rem] rounded-[10px]">
        <DailyAvg />
      </div>
    </div>
  );
};

export default SingleFarmTotal;

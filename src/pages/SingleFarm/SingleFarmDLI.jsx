import GreenHouseDLI from '../../component/SingleFarm/SingleFarmDLI/GreenHouseDLI';
import DailyDLI from '../../component/SingleFarm/SingleFarmDLI/DailyDLI';

const SingleFarmDLI = () => {
  return (
    <div className="my-[11px] mx-[25px] flex flex-col gap-[10px] max-w-[100%]">
      <div className="w-full bg-white h-[28.125rem] rounded-[10px]">
        <GreenHouseDLI />
      </div>
      <div className="w-full bg-white  h-[28.125rem] rounded-[10px]">
        <DailyDLI />
      </div>
    </div>
  );
};

export default SingleFarmDLI;

import GreenHousePP from '../../component/SingleFarm/SingleFarmPP/GreenHousePP';
import DailyPP from '../../component/SingleFarm/SingleFarmPP/DailyPP';

const SingleFarmPP = () => {
  return (
    <div>
      <div className="my-[11px] mx-[25px] flex flex-col gap-[10px] max-w-[100%]">
        <div className="w-full bg-white h-[28.125rem] rounded-[10px]">
          <GreenHousePP />
        </div>
        <div className="w-full bg-white  h-[28.125rem] rounded-[10px]">
          <DailyPP />
        </div>
      </div>
    </div>
  );
};

export default SingleFarmPP;

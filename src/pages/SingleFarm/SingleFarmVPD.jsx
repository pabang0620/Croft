import DailyVPD from '../../component/SingleFarm/SingleFarmVPD/DailyVPD';
import GreenHouseVPD from '../../component/SingleFarm/SingleFarmVPD/GreenHouseVPD';

const SingleFarmVPD = () => {
  return (
    <div>
      <div className="my-[11px] mx-[25px] flex flex-col gap-[10px] max-w-[100%]">
        {/* <div className="my-[11px] mx-[25px] flex flex-col gap-[10px] w-full max-w-[72vw]"> */}
        <div className="w-[90%] bg-white h-[43.0625rem] rounded-[10px]">
          <GreenHouseVPD />
        </div>
        <div className="w-[90%] bg-white  h-[28.125rem] rounded-[10px]">
          <DailyVPD />
        </div>
      </div>
    </div>
  );
};

export default SingleFarmVPD;

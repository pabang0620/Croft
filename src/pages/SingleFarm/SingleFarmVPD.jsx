import DailyVPD from '../../component/SingleFarm/SingleFarmVPD/DailyVPD';

const SingleFarmVPD = () => {
  return (
    <div className="my-[11px] mx-[25px] flex flex-col gap-[10px] max-w-[100%]">
      {/* <div className="w-[320px] h-[210px] bg-white rounded-[10px]">
        VPD 차트{" "}
      </div>
      <div className="w-[798px] h-[350px] bg-white rounded-[10px]">
        <Line4Chart ChartName="평균 온도" />
      </div>
      <div className="w-[798px] h-[350px] bg-white rounded-[10px]">
        <Line4Chart ChartName="평균 온도" dataoff="true" />
      </div> */}
      <div>임시</div>
      <img src="/assets/images/Temp/TempDailyVPD.svg" alt="" />
      <div className="w-full bg-white  h-[28.125rem] rounded-[10px]">
        <DailyVPD />
      </div>
    </div>
  );
};

export default SingleFarmVPD;

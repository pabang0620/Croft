// 종합 온실관리 평가 스코어 Component
//온실환경 종합 스코어 표시. 총 5개의 단계로 표시되며, 해당 단계를 표시할 수 있는 이미지 형태와, 가이드 텍스트 표시.

const GreenhouseScore = () => {
  return (
    <div className="flex flex-col w-[320px] h-[220px] p-[21px] gap-[17px] rounded-[10px] bg-white relative cursor-pointer">
      <div className="flex justify-center">
        <img
          src="/assets/images/DashBoard/GreenhouseScoreGood.svg"
          alt="plant"
        ></img>
      </div>
      <div className="flex flex-col gap-[2px] font-sans">
        <div className=" font-bold text-sm text-center">
          온실 관리가 매우 잘 되고 있어요.
        </div>
        <div className="text-xs text-center">
          관리 노하우를 저한테도 알려주세요.
        </div>
      </div>
    </div>
  );
};

export default GreenhouseScore;

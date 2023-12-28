import { ScoreText, ScoreImg } from '../utils/Data/GreenhouseScoreData';

// 종합 온실관리 평가 스코어 Component
//온실환경 종합 스코어 표시. 총 5개의 단계로 표시되며, 해당 단계를 표시할 수 있는 이미지 형태와, 가이드 텍스트 표시.
const GreenhouseScore = () => {
  const score = 5; //임의로 점수 설정
  return (
    <div className="flex flex-col w-[320px] h-[220px] p-[21px] gap-[17px] rounded-[10px] bg-white relative cursor-pointer">
      <div className="flex justify-center">{ScoreImg(score)}</div>
      <div className="flex flex-col gap-[2px] font-sans">
        <div className=" font-bold text-sm text-center">
          {ScoreText(score).title}
        </div>
        <div className="text-xs text-center">{ScoreText(score).content}</div>
      </div>
    </div>
  );
};

export default GreenhouseScore;

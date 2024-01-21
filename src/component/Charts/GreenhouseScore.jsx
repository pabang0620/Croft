import { ScoreImg } from '../utils/Data/GreenhouseScoreData';
import { useChartData } from '../utils/api/Charts/ChartAPI';

// 종합 온실관리 평가 스코어 Component
//온실환경 종합 스코어 표시. 총 5개의 단계로 표시되며, 해당 단계를 표시할 수 있는 이미지 형태와, 가이드 텍스트 표시.
// http://croft-ai.iptime.org:40401/api/v1/status
const GreenhouseScore = () => {
  const { data, isLoading } = useChartData(
    `${process.env.REACT_APP_BASE_API_KEY}/v1/status`,
    'GreenhouseScore'
  );
  return (
    <div className="flex flex-col w-[320px] h-[210px] p-[21px] gap-[17px] rounded-[10px] bg-white relative cursor-pointer">
      {!isLoading ? (
        <>
          <div className="flex justify-center">{ScoreImg(data.data.score)}</div>
          <div className="flex flex-col gap-[2px] font-sans">
            <div className=" font-bold text-sm text-center">
              {data.data.title}
            </div>
            <div className="text-xs text-center">{data.data.description}</div>
          </div>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default GreenhouseScore;

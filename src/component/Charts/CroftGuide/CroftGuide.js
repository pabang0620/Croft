import { useState, useEffect } from 'react';
import SingleGuide from './SingleGuide';
import { GuideLimit } from './GuideText';
import { useChartData } from '../../utils/api/Charts/ChartAPI';

const CroftGuide = () => {
  const [showDetail, setShowDetail] = useState(false);
  const [currentGuide, setCurrentGuide] = useState([{}, {}, {}]);
  const { data, isLoading } = useChartData(
    `${process.env.REACT_APP_BASE_API_KEY}/v1/croft/guides`,
    'CroftGuide'
  );

  useEffect(() => {
    if (data && !isLoading) {
      if (showDetail) setCurrentGuide(GuideLimit(data?.data, false));
      else setCurrentGuide(GuideLimit(data?.data, true));
    }
  }, [showDetail, data]);

  return (
    <div className="flex flex-col gap-[10px] font-sans rounded-[10px] bg-white w-[650px] h-fit relative pl-[13px] pt-[10px] cursor-pointer">
      <div className="text-base font-bold ml-[2px]">CROFT 가이드</div>
      {isLoading ? (
        <div className="h-[52px]">isLoading...</div>
      ) : (
        <div className="flex flex-col gap-[6px] pb-[40px]">
          {currentGuide.map((item, idx) => (
            <div key={idx}>
              <SingleGuide
                id={item.id}
                text={item.text}
                currentGuide={currentGuide}
                setCurrentGuide={setCurrentGuide}
              />
            </div>
          ))}
        </div>
      )}

      <div
        className="text-accent text-xs absolute bottom-[9px] right-[29px]"
        onClick={() => setShowDetail(!showDetail)}
      >
        {showDetail ? '돌아가기' : '전체 보기'}
      </div>
    </div>
  );
};

export default CroftGuide;

import { useState, useEffect } from 'react';
import SingleGuide from './SingleGuide';
import { GuideText, TotalGuideText } from './GuideText';

const CroftGuide = () => {
  const [showDetail, setShowDetail] = useState(false);
  const [currentGuide, setCurrentGuide] = useState(GuideText);
  useEffect(() => {
    if (showDetail) setCurrentGuide(TotalGuideText);
    else setCurrentGuide(GuideText);
  }, [showDetail]);
  
  return (
    <div className="flex flex-col gap-[10px] font-sans rounded-[10px] bg-white w-[650px] h-fit relative pl-[13px] pt-[10px] cursor-pointer">
      <div className="text-base font-bold ml-[2px]">CROFT 가이드</div>
      <div className="flex flex-col gap-[6px] pb-[52px]">
        {currentGuide.map((item) => (
          <SingleGuide
            key={item.id}
            id={item.id}
            text={item.text}
            currentGuide={currentGuide}
            setCurrentGuide={setCurrentGuide}
          />
        ))}
      </div>
      <div
        className="text-accent text-xs absolute bottom-[9px] right-[29px]"
        onClick={() => setShowDetail(!showDetail)}
      >
        {showDetail ? '임시로 줄이기 넣음' : '전체 보기'}
      </div>
    </div>
  );
};

export default CroftGuide;

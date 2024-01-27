import { useState, useEffect } from 'react';
import SliderInputCard from '../../../component/Graphs/SliderInputCard';
import OnOffToggle from './OnOffToggle';
import InnerCard from './InnerCard';
import { AIModalData } from '../../../component/utils/Data/ModalData';

const AIControlModal = () => {
  const [click1, setClick1] = useState(true);
  const [click2, setClick2] = useState(true);
  const [click3, setClick3] = useState(true);
  const [click4, setClick4] = useState(true);

  useEffect(() => {
    if (click1) {
      setClick2(true);
      setClick3(true);
      setClick4(true);
    } else {
      setClick2(false);
      setClick3(false);
      setClick4(false);
    }
  }, [click1]);
  const stateArray = [click2, click3, click4];
  const setStateArray = [setClick2, setClick3, setClick4];

  return (
    <div className="z-10">
      <div className="bg-white shadow-md rounded-lg w-[320px] p-4">
        <div className="flex flex-row whitespace-nowrap justify-around">
          <div className="text-base font-semibold leading-normal">
            온실 환경 AI 제어
          </div>
          <div className="text-[#124946] font-semibold leading-normal text-sm">
            환경 제어 실행중
          </div>
          <OnOffToggle click={click1} setClick={setClick1} type="big" />
          {/* <div className="text-xs text-[#AEAEAE] font-semibold leading-normal">환경 제어 실행중</div> */}
        </div>
        {click1 ? (
          <>
            {AIModalData.map((item, idx) => (
              <SliderInputCard
                key={item.WhatFor}
                Whatfor={item.WhatFor}
                click1={click1}
                click={stateArray[idx]}
                setClick={setStateArray[idx]}
                src={item.src}
              />
            ))}
          </>
        ) : (
          <InnerCard />
        )}
      </div>
    </div>
  );
};

export default AIControlModal;

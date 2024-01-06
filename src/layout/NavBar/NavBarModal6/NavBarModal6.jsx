// React 모달 컴포넌트
import { useState, useEffect } from 'react';
import SliderInputCard from '../../../component/Graphs/SliderInputCard';
import OnOffToggle from './OnOffToggle';
//추후 모달명 변경하면 좋을 것 같음
const NavBarModal6 = () => {
  const [click1, setClick1] = useState(true);
  const [click2, setClick2] = useState(true);
  const [click3, setClick3] = useState(true);
  const [click4, setClick4] = useState(true);
  useEffect(() => {
    if (!click1) {
      setClick2(false);
      setClick3(false);
      setClick4(false);
    }
  }, [click1]);
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

        <SliderInputCard
          Whatfor="온도제어"
          click={click2}
          setClick={setClick2}
        />
        <SliderInputCard
          Whatfor="습도제어"
          click={click3}
          setClick={setClick3}
        />
        <SliderInputCard
          Whatfor="RTR제어"
          click={click4}
          setClick={setClick4}
        />
      </div>
    </div>
  );
};

export default NavBarModal6;

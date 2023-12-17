import { useNavigate } from 'react-router-dom';
import GreenhouseScore from '../component/Chart/GreenhouseScore';
import CroftGuide from '../component/Chart/CroftGuide/CroftGuide';

const SingleDashBoard = () => {
  const navigate = useNavigate();
  //드래그 앤 드랍 추가 예정
  return (
    <div>
      <div className="p-4 flex flex-row flex-wrap gap-[10px]">
        <GreenhouseScore />
        <CroftGuide />
      </div>
    </div>
  );
};

export default SingleDashBoard;

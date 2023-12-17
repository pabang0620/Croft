import { useNavigate } from 'react-router-dom';

const SingleContainer = () => {
  const navigate = useNavigate();
  return (
    <div className="w-[240px] h-[240px] rounded-[10px] bg-white relative cursor-pointer">
      <div className="h-[41px] font-sans text-base text-info font-semibold ml-[8px] mr-[12px] pt-[10px] pl-[8px] border-b border-base400">
        옥수수 재배 컨테이너
      </div>
      <div className="flex flex-col">
        {/* 하단의 온도나 습도 관련 넣을 부분 */}
      </div>
      <div
        className="text-accent font-bold absolute bottom-[21px] right-[16px]"
        onClick={() => navigate('/farm')}
      >
        화살표
      </div>
    </div>
  );
};

export default SingleContainer;

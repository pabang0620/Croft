import { useNavigate } from "react-router-dom";

const SingleContainer = () => {
  const navigate = useNavigate();
  return (
    <div className="w-[240px] h-[240px] rounded-[10px] bg-white relative cursor-pointer">
      <div className="h-[41px] font-sans text-base text-info font-semibold ml-[8px] mr-[12px] pt-[10px] pl-[8px] border-b border-base400">
        옥수수 재배 컨테이너
      </div>
      <div className="flex flex-col text-base font-semibold leading-normal justify-center">
        <div className="flex flex-row my-2 mt-4 ml-8">
          <img
            className="w-[9px] h-[18px] mt-0.5"
            src={`${process.env.PUBLIC_URL}/assets/images/Control/Vector.png`}
            alt=""
          />
          <div>&nbsp;&nbsp;&nbsp;&nbsp;22 ℃</div>
        </div>
        <div className="flex flex-row my-2 ml-8">
          <img
            className="w-[9px] h-[18px] mt-0.5"
            src={`${process.env.PUBLIC_URL}/assets/images/Control/Vector.png`}
            alt=""
          />
          <div>&nbsp;&nbsp;&nbsp;&nbsp;51%</div>
        </div>
        <div className="flex flex-row my-2 ml-8">
          <img
            className="w-[9px] h-[18px] mt-0.5"
            src={`${process.env.PUBLIC_URL}/assets/images/Control/Vector.png`}
            alt=""
          />
          <div>&nbsp;&nbsp;&nbsp;&nbsp;629 w/m²</div>
        </div>
        <div className="flex flex-row my-2 ml-8">
          <img
            className="w-[9px] h-[18px] mt-0.5"
            src={`${process.env.PUBLIC_URL}/assets/images/Control/Vector.png`}
            alt=""
          />
          <div>&nbsp;&nbsp;&nbsp;&nbsp;285.3 ppm</div>
        </div>
      </div>
      <div
        className="text-accent font-bold absolute bottom-[21px] right-[16px]"
        onClick={() => navigate("/farm")}
      >
        화살표
      </div>
    </div>
  );
};

export default SingleContainer;
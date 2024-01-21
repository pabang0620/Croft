import { useNavigate } from 'react-router-dom';
import { CriticalOrWarn, TotalDashIcons, IconsColor } from '../utils/Icons';
import { CriticalSeq, iconSeq } from '../utils/Data/ContainerData';

const SingleContainer = ({
  data,
  disconnect,
  critical,
  warning,
  setContainer,
}) => {
  const navigate = useNavigate();
  const criticalSeq = CriticalSeq(critical);
  // api 연동 시 하단의 dataArray 수정 필요
  const dataArray = [
    `${data.temp}℃`,
    `${data.humidity}%`,
    `${data.radiation}w/m²`,
    `${data.co2}ppm`,
  ];

  return (
    <div
      className={`w-[240px] h-[240px] rounded-[10px] bg-white relative cursor-pointer select-none ${
        disconnect ? 'text-base500' : ''
      }`}
    >
      <div
        className={`absolute top-[80px] left-[70px] ${
          disconnect ? '' : 'hidden'
        }`}
      >
        <img
          className="w-[97px] h-[87px]"
          src={`${process.env.PUBLIC_URL}/assets/images/Control/Disconnect.svg`}
          alt=""
        />
      </div>
      <div className="h-[41px] font-sans text-base font-semibold ml-[8px] mr-[12px] pt-[10px] pl-[8px] border-b border-base400 flex justify-between">
        <div>{data.name}</div>
        <div>{CriticalOrWarn(disconnect, critical, warning)}</div>
      </div>
      <div className="flex flex-col text-base font-semibold leading-normal justify-center pt-4">
        <>
          {dataArray.map((items, idx) => (
            <div className="flex flex-row my-2 ml-8" key={idx}>
              {TotalDashIcons(
                iconSeq[idx],
                IconsColor(criticalSeq[idx], disconnect)
              )}
              <div
                className={`ml-[15px] 
                ${
                  IconsColor(criticalSeq[idx], disconnect) === '#FF0000'
                    ? 'text-[#FF0000]'
                    : ''
                }
                `}
              >
                {items}
              </div>
            </div>
          ))}
        </>
      </div>
      <div
        className="text-accent font-bold absolute bottom-[21px] right-[16px]"
        onClick={() => {
          navigate('/dash');
          setContainer(data.name);
        }}
      >
        <img
          className="w-[20px]"
          src={`${process.env.PUBLIC_URL}/assets/images/DashBoard/GreenArrow.svg`}
          alt=""
        />
      </div>
    </div>
  );
};

export default SingleContainer;

const InnerCard = () => {
  const titleArray = ['온도제어', '습도제어', 'RTR제어'];
  return (
    <div>
      {titleArray.map((title, idx) => (
        <div
          className="w-[295px] h-[92px] rounded-lg bg-[#F1F1F1] my-5 p-[9px] flex flex-col items-center"
          key={idx}
        >
          <div className="w-[263px] h-[22px] flex justify-between">
            <div className="flex flex-row">
              {/* 이미지 변경 필요 */}
              <img
                className="w-[9px] h-[18px] mt-0.5 mr-2"
                src={`${process.env.PUBLIC_URL}/assets/images/Control/Vector.png`}
                alt=""
              />
              {/* 전체 onoff toggle에 맞춰 글자 색상 변경 */}
              <div
                className={`text-base font-semibold leading-normaltext-base500`}
              >
                {title}
              </div>
            </div>
          </div>
          <div className="w-full h-full flex justify-center items-center text-base500 text-xl font-semibold">
            OFF
          </div>
        </div>
      ))}
    </div>
  );
};

export default InnerCard;

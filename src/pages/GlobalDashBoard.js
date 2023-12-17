import ContainerWrapper from "../component/GlobahBoard/ContainerWrapper";

const GlobalDashBoard = () => {
  return (
    <div className="flex flex-col py-[15px] px-[20px] gap-[12px]">
      <div className="flex gap-[7px] align-center h-fit">
        <div className="text-primary font-bold text-base">+</div>{' '}
        {/* 이미지로 변경 예정 */}
        <div className="text-primary font-bold text-base">스마트팜 추가</div>
      </div>
      <ContainerWrapper />
    </div>
  );
};

export default GlobalDashBoard;
